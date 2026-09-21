'use strict';

const { makeOperation } = require('../core/routeHelper');

/**
 * Generated wrapper for api/spawn-events (source: STAR WebAPI SpawnEventsController.cs).
 */
class SpawnEventsModule {
  constructor(http) {
    this._http = http;

    // POST api/spawn-events
    this.queueSpawnEvent = makeOperation(http, "api/spawn-events", "POST", "");
    // GET api/spawn-events/pending (query: game, avatarId)
    this.getPendingSpawnEvent = makeOperation(http, "api/spawn-events", "GET", "pending");
    // POST api/spawn-events/confirm
    this.confirmSpawn = makeOperation(http, "api/spawn-events", "POST", "confirm");
  }
}

module.exports = { SpawnEventsModule };
