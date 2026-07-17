'use strict';

const { HttpClient, DEFAULT_BASE_URL } = require('./core/httpClient');
const { TokenStore } = require('./core/tokenStore');
const { attachGeneratedModules } = require('./modules/index');
const { AuthModule } = require('./modules/Auth');

/**
 * Main SDK entry point. Works in Node 18+ and any modern browser.
 *
 *   const { STARClient } = require('@oasisomniverse/web5-api');
 *   const star = new STARClient({ baseUrl: 'https://api.starnet.oasisomniverse.one' });
 *   await star.auth.login({ username: 'me@example.com', password: '...' });
 *   const quests = await star.quests.getAllQuestsForAvatar();
 *
 * Every controller on the OASIS STAR WebAPI is reachable as a lowerCamel
 * property (star.avatar, star.quests, star.missions, star.games, star.cosmic,
 * star.holons, star.nFTs, star.geoNFTs, star.plugins, star.templates,
 * star.libraries, star.runtimes, star.competition, ...). Generated methods
 * take a single args object; route template tokens (e.g. {id}) are consumed
 * from it automatically, remaining keys become the query string (GET/DELETE)
 * or JSON body (POST/PUT). star.auth is a hand-written convenience wrapper
 * that also manages the session/token for you.
 */
class STARClient {
  constructor({ baseUrl = DEFAULT_BASE_URL, persistSession, fetchImpl } = {}) {
    this.tokenStore = new TokenStore({ persist: persistSession });
    this.http = new HttpClient({ baseUrl, tokenStore: this.tokenStore, fetchImpl });

    attachGeneratedModules(this, this.http);

    // Hand-written ergonomic wrapper, built on top of the generated avatar module.
    this.auth = new AuthModule(this.http, this.tokenStore, this.avatar);
  }

  setBaseUrl(baseUrl) {
    this.http.setBaseUrl(baseUrl);
  }

  /** Use an externally-issued JWT (e.g. one your server already obtained) for subsequent calls. */
  setToken(jwtToken, sessionExtras = {}) {
    this.tokenStore.setSession({ ...sessionExtras, jwtToken });
  }

  /** Convenience pass-throughs to the generated STAR module (star.sTAR). */
  starIgnite(args) {
    return this.sTAR.igniteSTAR(args);
  }

  starExtinguish(args) {
    return this.sTAR.extinguishSTAR(args);
  }

  starStatus(args) {
    return this.sTAR.getStatus(args);
  }
}

module.exports = { STARClient, HttpClient, TokenStore, DEFAULT_BASE_URL };
module.exports.default = STARClient;
