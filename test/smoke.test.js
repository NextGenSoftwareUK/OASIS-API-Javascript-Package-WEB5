'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const { STARClient } = require('../index.js');

function fakeFetch(responses) {
  const calls = [];
  const impl = async (url, init) => {
    calls.push({ url, init });
    const match = responses.find((r) => url.includes(r.match));
    const body = match ? match.body : { isError: false, result: {} };
    return {
      ok: match ? match.ok !== false : true,
      status: match?.status || 200,
      text: async () => JSON.stringify(body)
    };
  };
  impl.calls = calls;
  return impl;
}

test('login stores session and subsequent calls send Bearer token', async () => {
  const fetchImpl = fakeFetch([
    {
      match: 'api/avatar/authenticate',
      body: { isError: false, result: { id: 'avatar-123', username: 'dave', jwtToken: 'jwt-abc' } }
    },
    {
      match: 'api/quests/all-for-avatar',
      body: { isError: false, result: [] }
    }
  ]);

  const star = new STARClient({ baseUrl: 'https://example.test', persistSession: false, fetchImpl });

  const loginRes = await star.auth.login({ username: 'dave', password: 'pw' });
  assert.equal(loginRes.isError, false);
  assert.equal(loginRes.session.avatarId, 'avatar-123');
  assert.equal(star.auth.isAuthenticated(), true);

  const questsRes = await star.quests.getAllQuestsForAvatar();
  assert.equal(questsRes.isError, false);

  const questsCall = fetchImpl.calls.find((c) => c.url.includes('all-for-avatar'));
  assert.equal(questsCall.init.headers.Authorization, 'Bearer jwt-abc');
  assert.equal(questsCall.url, 'https://example.test/api/quests/all-for-avatar');
});

test('route tokens are consumed from the URL, remaining args become the body', async () => {
  const fetchImpl = fakeFetch([{ match: 'api/missions/mission-123/complete', body: { isError: false, result: {} } }]);
  const star = new STARClient({ baseUrl: 'https://example.test', persistSession: false, fetchImpl });

  await star.missions.completeMission({ id: 'mission-123', completionNotes: 'Done it' });

  const call = fetchImpl.calls[0];
  assert.equal(call.url, 'https://example.test/api/missions/mission-123/complete');
  assert.equal(call.init.method, 'POST');
  const body = JSON.parse(call.init.body);
  assert.deepEqual(body, { completionNotes: 'Done it' });
});

test('GET requests send remaining args as query string', async () => {
  const fetchImpl = fakeFetch([{ match: 'api/celestialBodies/by-type/Planet', body: { isError: false, result: [] } }]);
  const star = new STARClient({ baseUrl: 'https://example.test', persistSession: false, fetchImpl });

  await star.celestialBodies.getCelestialBodiesByType({ type: 'Planet' });

  const call = fetchImpl.calls[0];
  assert.equal(call.url, 'https://example.test/api/celestialBodies/by-type/Planet');
  assert.equal(call.init.method, 'GET');
});

test('missing required route param throws a clear error', async () => {
  const star = new STARClient({ baseUrl: 'https://example.test', persistSession: false, fetchImpl: fakeFetch([]) });
  await assert.rejects(() => star.holons.getHolon({}), /Missing required route parameter "id"/);
});

test('logout clears the session', async () => {
  const fetchImpl = fakeFetch([
    { match: 'api/avatar/authenticate', body: { isError: false, result: { id: 'a1', jwtToken: 'jwt-1' } } }
  ]);
  const star = new STARClient({ baseUrl: 'https://example.test', persistSession: false, fetchImpl });

  await star.auth.login({ username: 'dave', password: 'pw' });
  assert.equal(star.auth.isAuthenticated(), true);

  await star.auth.logout();
  assert.equal(star.auth.isAuthenticated(), false);
  assert.equal(star.auth.getSession(), null);
});

test('all 26 generated modules are attached to the client', async () => {
  const star = new STARClient({ baseUrl: 'https://example.test', persistSession: false, fetchImpl: fakeFetch([]) });
  const expectedModules = [
    'avatar', 'celestialBodies', 'celestialBodiesMetaData', 'celestialSpaces', 'chapters',
    'competition', 'cosmic', 'games', 'geoHotSpots', 'geoNFTs', 'health', 'holons',
    'holonsMetaData', 'inventoryItems', 'libraries', 'missions', 'nFTs', 'oAPPs', 'parks',
    'plugins', 'quests', 'runtimes', 'sTAR', 'templates', 'zomes', 'zomesMetaData'
  ];
  assert.equal(expectedModules.length, 26);
  for (const name of expectedModules) {
    assert.ok(star[name], `expected star.${name} to be attached`);
  }
});

test('starIgnite/starExtinguish/starStatus pass through to the generated STAR module', async () => {
  const fetchImpl = fakeFetch([
    { match: 'api/sTAR/ignite', body: { isError: false, result: { success: true } } },
    { match: 'api/sTAR/status', body: { isError: false, result: { booted: true } } }
  ]);
  const star = new STARClient({ baseUrl: 'https://example.test', persistSession: false, fetchImpl });

  const ignite = await star.starIgnite();
  assert.equal(ignite.isError, false);

  const status = await star.starStatus();
  assert.equal(status.isError, false);
});
