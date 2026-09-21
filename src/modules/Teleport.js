'use strict';

const { makeOperation } = require('../core/routeHelper');

/**
 * Generated wrapper for api/teleport (source: STAR WebAPI TeleportController.cs).
 */
class TeleportModule {
  constructor(http) {
    this._http = http;

    // POST api/teleport
    this.recordTeleport = makeOperation(http, "api/teleport", "POST", "");
    // GET api/teleport/pending (query: avatarId)
    this.getPendingTeleport = makeOperation(http, "api/teleport", "GET", "pending");
  }
}

module.exports = { TeleportModule };
