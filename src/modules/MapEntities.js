'use strict';

const { makeOperation } = require('../core/routeHelper');

/**
 * Wrapper for api/maps (source: STAR WebAPI MapEntitiesController.cs).
 */
class MapEntitiesModule {
  constructor(http) {
    this._http = http;

    // GET api/maps/{game}/{map}/entities
    this.getEntities = makeOperation(http, "api/maps", "GET", "{game}/{map}/entities");
    // PUT api/maps/{game}/{map}/entities
    this.updateEntities = makeOperation(http, "api/maps", "PUT", "{game}/{map}/entities");
  }
}

module.exports = { MapEntitiesModule };
