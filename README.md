# @oasisomniverse/web5-api

Isomorphic (Node 18+ and browser) JavaScript/TypeScript-friendly client for the
**WEB5 STAR API** - full coverage of the OASIS2 STAR WebAPI: OAPPs, Quests,
Missions, Games, Celestial Bodies/Spaces, the full Cosmic hierarchy
(Omniverse → Multiverse → Universe → Galaxy → Solar System → Planet/Moon/Star
and beyond), NFTs, GeoNFTs, GeoHotSpots, Plugins, Templates, Libraries,
Runtimes, Holons, Zomes, Parks, Chapters, Inventory Items and
Competition/Leaderboards.

Zero dependencies. Wraps the global `fetch`. Works the same in Node and the
browser.

## Installation

```bash
npm install @oasisomniverse/web5-api
```

## Quick start

```js
const { STARClient } = require('@oasisomniverse/web5-api');
// or: import { STARClient } from '@oasisomniverse/web5-api';

const star = new STARClient({ baseUrl: 'https://api.star.oasisweb5.one' });

await star.auth.login({ username: 'me@example.com', password: '...' });

const { isError, message, result } = await star.quests.getAllQuestsForAvatar();
if (isError) throw new Error(message);
console.log(result);
```

## Calling any endpoint

Every controller on the OASIS2 STAR WebAPI is reachable as a lowerCamel
property on the client (`star.avatar`, `star.quests`, `star.missions`,
`star.games`, `star.cosmic`, `star.holons`, `star.nFTs`, `star.geoNFTs`,
`star.plugins`, `star.templates`, `star.libraries`, `star.runtimes`,
`star.competition`, ...). Every generated method takes a single args object:

- Any key matching a `{token}` in the route template is consumed and
  substituted into the URL (case-insensitive match).
- Any remaining keys become the query string (GET/DELETE) or JSON body
  (POST/PUT) - **matching the real `[FromQuery]`/`[FromBody]` binding of the
  underlying C# action**, not just the HTTP verb. Many STAR actions mix a
  `[FromBody]` payload with several `[FromQuery]` flags (e.g. `version`,
  `providerType`, `softDelete`) even on `POST`/`PUT`/`DELETE` - those flags are
  always sent as query params, never folded into the JSON body, because
  `endpoints.json` records exactly which arg names are query-bound per
  operation (see [`docs/`](./docs/README.md) for the per-method breakdown).
- When an action's entire body is a single primitive `[FromBody]` parameter
  (e.g. `CompleteQuest(Guid id, [FromBody] string completionNotes)`), the
  JSON body is that value directly - not an object wrapping it.

```js
// GET api/celestialBodies/{id} -> id is consumed as a route token
const body = await star.celestialBodies.getCelestialBody({ id: '...' });

// POST api/quests/{id}/complete -> id consumed as a route token, completionNotes
// (a single primitive [FromBody] param) becomes the raw JSON body itself
const done = await star.quests.completeQuest({ id: questId, completionNotes: 'Finished!' });

// PUT api/cosmic/omniverse -> saveChildren/providerType are [FromQuery] and go
// on the URL; the rest (the omniverse payload) becomes the JSON body
await star.cosmic.updateOmniverse({ name: 'New Omniverse', saveChildren: true, providerType: 'Default' });

// DELETE api/cosmic/omniverse/{omniverseId} -> omniverseId is a route token,
// softDelete/providerType are [FromQuery] and go on the URL - no body sent
await star.cosmic.deleteOmniverse({ omniverseId, softDelete: true, providerType: 'Default' });
```

Every response has the shape:

```ts
interface OASISResponse<T = any> {
  isError: boolean;
  message: string | null;
  result: T;
  raw: any;
  statusCode: number;
}
```

## Auth & sessions

`star.auth` is a hand-written ergonomic wrapper around the generated
`avatar` module's `authenticate` operation. It manages the SDK's
`TokenStore` for you so you don't have to think about JWTs.

```js
const loginRes = await star.auth.login({ username: 'me@example.com', password: '...' });
if (loginRes.isError) throw new Error(loginRes.message);

console.log(star.auth.isAuthenticated()); // true
console.log(star.auth.getSession());      // { avatarId, username, email, jwtToken, ... }

await star.auth.logout(); // clears the local session
```

> STAR's `AvatarController` has no logout/revoke-token endpoint of its own (it
> only forwards a subset of WEB4 avatar operations), so `logout()` simply
> clears the local session client-side - it does not call the server.

If you already have a JWT (e.g. issued by your own backend), set it directly:

```js
star.setToken(jwtToken, { avatarId, username });
```

## STAR runtime convenience methods

The `STARController` (`api/sTAR`) controls the underlying STAR/OASIS runtime
boot lifecycle. Convenience pass-throughs are exposed directly on the client:

```js
await star.starIgnite();      // boots the STAR/OASIS runtime
await star.starStatus();      // current boot status
await star.starExtinguish();  // shuts the runtime down
```

These are thin wrappers over `star.sTAR.igniteSTAR()`, `star.sTAR.getStatus()`
and `star.sTAR.extinguishSTAR()` - the full generated module is also
available directly under `star.sTAR`.

## Module examples

### Avatar (`star.avatar`)

```js
const inv = await star.avatar.getInventory();
await star.avatar.addXp({ amount: 100 });
```

### Quests (`star.quests`)

```js
const myQuests = await star.quests.getAllQuestsForAvatar();
await star.quests.startQuest({ id: questId });
await star.quests.completeQuest({ id: questId, completionNotes: 'Done!' });
```

### Missions (`star.missions`)

```js
const missions = await star.missions.getAllMissions();
await star.missions.completeMission({ id: missionId, completionNotes: 'Done!' });
```

### Games (`star.games`)

```js
const games = await star.games.getAllGames();
await star.games.startGame({ gameId });
await star.games.loadLevel({ gameId, level: '1-1' });
```

### Cosmic (`star.cosmic`)

```js
const omniverse = await star.cosmic.getOmniverse();
await star.cosmic.addGalaxy({ parentGalaxyClusterId, /* ...IGalaxy fields */ });
```

### Holons (`star.holons`)

```js
const holons = await star.holons.getAllHolons();
const matches = await star.holons.searchHolons({ query: 'forest' });
```

### NFTs (`star.nFTs`)

```js
const nfts = await star.nFTs.getAllNFTs();
await star.nFTs.publishNFT({ id: nftId, /* ...PublishRequest fields */ });
```

### GeoNFTs (`star.geoNFTs`)

```js
const nearby = await star.geoNFTs.getNearbyGeoNFTs({ latitude: 51.5, longitude: -0.12, radiusKm: 5 });
```

### Competition (`star.competition`)

```js
const leaderboard = await star.competition.getLeaderboard({ competitionType: 'Karma', seasonType: 'Weekly' });
const myRank = await star.competition.getMyRank({ competitionType: 'Karma', seasonType: 'Weekly' });
```

## Module reference

26 modules, 616 operations in total. Full per-method tables live in
[`docs/`](./docs/README.md).

| Client property | Route prefix | Operations |
| --- | --- | --- |
| `star.avatar` | `api/avatar` | 13 |
| `star.celestialBodies` | `api/celestialBodies` | 22 |
| `star.celestialBodiesMetaData` | `api/celestialBodiesMetaData` | 21 |
| `star.celestialSpaces` | `api/celestialSpaces` | 22 |
| `star.chapters` | `api/chapters` | 20 |
| `star.competition` | `api/competition` | 9 |
| `star.cosmic` | `api/cosmic` | 72 |
| `star.games` | `api/games` | 55 |
| `star.geoHotSpots` | `api/geoHotSpots` | 20 |
| `star.geoNFTs` | `api/geoNFTs` | 22 |
| `star.health` | `api/health` | 2 |
| `star.holons` | `api/holons` | 24 |
| `star.holonsMetaData` | `api/holonsMetaData` | 21 |
| `star.inventoryItems` | `api/inventoryItems` | 21 |
| `star.libraries` | `api/libraries` | 22 |
| `star.missions` | `api/missions` | 27 |
| `star.nFTs` | `api/nFTs` | 21 |
| `star.oAPPs` | `api/oAPPs` | 21 |
| `star.parks` | `api/parks` | 22 |
| `star.plugins` | `api/plugins` | 24 |
| `star.quests` | `api/quests` | 41 |
| `star.runtimes` | `api/runtimes` | 25 |
| `star.sTAR` | `api/sTAR` | 4 |
| `star.templates` | `api/templates` | 22 |
| `star.zomes` | `api/zomes` | 22 |
| `star.zomesMetaData` | `api/zomesMetaData` | 21 |

See [`docs/README.md`](./docs/README.md) for the full generated reference,
or [`docs/modules/`](./docs/modules) for per-module method tables with
parameter and route details.

## Regenerating

The generated modules, type declarations and docs are produced from
`endpoints.json` (extracted from the STAR WebAPI controller source):

```bash
npm run generate   # src/modules/*.js + src/modules/index.js
npm run types      # src/modules/*.d.ts + index.d.ts + src/core/types.d.ts
npm run docs        # docs/README.md + docs/modules/*.md
```

## Testing

```bash
npm test
```

## License

MIT
