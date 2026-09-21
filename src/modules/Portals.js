'use strict';

const { makeOperation } = require('../core/routeHelper');

/**
 * Generated wrapper for api/portals (source: STAR WebAPI PortalsController.cs).
 */
class PortalsModule {
  constructor(http) {
    this._http = http;

    // POST api/portals
    this.registerPortal = makeOperation(http, "api/portals", "POST", "");
    // GET api/portals
    this.getAllPortals = makeOperation(http, "api/portals", "GET", "");
    // GET api/portals/{portalId}
    this.getPortal = makeOperation(http, "api/portals", "GET", "{portalId}");
    // POST api/portals/{portalId}/unlock
    this.unlockPortal = makeOperation(http, "api/portals", "POST", "{portalId}/unlock");
    // POST api/portals/{portalId}/lock
    this.lockPortal = makeOperation(http, "api/portals", "POST", "{portalId}/lock");
  }
}

module.exports = { PortalsModule };
