'use strict';

const { makeOperation } = require('../core/routeHelper');

/**
 * Generated wrapper for api/oassets (source: STAR WebAPI OAssetsController.cs).
 */
class OAssetsModule {
  constructor(http) {
    this._http = http;

    // GET api/oassets (query: gameId)
    this.getAssets = makeOperation(http, "api/oassets", "GET", "");
  }
}

module.exports = { OAssetsModule };
