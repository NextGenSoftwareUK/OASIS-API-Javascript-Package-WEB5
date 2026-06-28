# Cosmic — `star.cosmic`

Source controller: [`CosmicController.cs`](https://github.com/NextGenSoftwareUK/OASIS2/blob/main/STAR%20ODK/NextGenSoftware.OASIS.STAR.WebAPI/Controllers/CosmicController.cs)
Route prefix: `api/cosmic`
72 operation(s).

All methods are generated 1:1 from the controller's real `[Http*]` routes (see
[Conventions](../README.md#calling-any-endpoint)). They take a single args
object: any key matching a `{token}` in the route is substituted into the
URL; everything else becomes the query string (GET/DELETE) or JSON body
(POST/PUT).

## Methods

| Method | HTTP | Route | Route params | Query params | Body |
| --- | --- | --- | --- | --- | --- |
| `addAsteroid` | POST | `api/cosmic/galaxy/{parentGalaxyId}/asteroid` | `parentGalaxyId` | – | remaining args |
| `addComet` | POST | `api/cosmic/galaxy/{parentGalaxyId}/comet` | `parentGalaxyId` | – | remaining args |
| `addGalaxy` | POST | `api/cosmic/galaxy-cluster/{parentGalaxyClusterId}/galaxy` | `parentGalaxyClusterId` | – | remaining args |
| `addGalaxyCluster` | POST | `api/cosmic/universe/{parentUniverseId}/galaxy-cluster` | `parentUniverseId` | – | remaining args |
| `addMeteroid` | POST | `api/cosmic/galaxy/{parentGalaxyId}/meteroid` | `parentGalaxyId` | – | remaining args |
| `addMoon` | POST | `api/cosmic/planet/{parentPlanetId}/moon` | `parentPlanetId` | – | remaining args |
| `addMultiverse` | POST | `api/cosmic/omniverse/{parentOmniverseId}/multiverse` | `parentOmniverseId` | – | remaining args |
| `addPlanet` | POST | `api/cosmic/solar-system/{parentSolarSystemId}/planet` | `parentSolarSystemId` | – | remaining args |
| `addSolarSystem` | POST | `api/cosmic/galaxy/{parentGalaxyId}/solar-system` | `parentGalaxyId` | – | remaining args |
| `addStar` | POST | `api/cosmic/galaxy/{parentGalaxyId}/star` | `parentGalaxyId` | – | remaining args |
| `addUniverse` | POST | `api/cosmic/multiverse/{parentMultiverseId}/universe` | `parentMultiverseId` | – | remaining args |
| `deleteAsteroid` | DELETE | `api/cosmic/asteroid/{asteroidId}` | `asteroidId` | `softDelete`, `providerType` | – |
| `deleteBlackHole` | DELETE | `api/cosmic/blackhole/{blackHoleId}` | `blackHoleId` | `softDelete`, `providerType` | – |
| `deleteComet` | DELETE | `api/cosmic/comet/{cometId}` | `cometId` | `softDelete`, `providerType` | – |
| `deleteCosmicRay` | DELETE | `api/cosmic/cosmic-ray/{rayId}` | `rayId` | `softDelete`, `providerType` | – |
| `deleteCosmicWave` | DELETE | `api/cosmic/cosmic-wave/{waveId}` | `waveId` | `softDelete`, `providerType` | – |
| `deleteGalaxy` | DELETE | `api/cosmic/galaxy/{galaxyId}` | `galaxyId` | `softDelete`, `providerType` | – |
| `deleteGalaxyCluster` | DELETE | `api/cosmic/galaxy-cluster/{galaxyClusterId}` | `galaxyClusterId` | `softDelete`, `providerType` | – |
| `deleteGravitationalWave` | DELETE | `api/cosmic/gravitational-wave/{waveId}` | `waveId` | `softDelete`, `providerType` | – |
| `deleteMeteroid` | DELETE | `api/cosmic/meteroid/{meteroidId}` | `meteroidId` | `softDelete`, `providerType` | – |
| `deleteMoon` | DELETE | `api/cosmic/moon/{moonId}` | `moonId` | `softDelete`, `providerType` | – |
| `deleteMultiverse` | DELETE | `api/cosmic/multiverse/{multiverseId}` | `multiverseId` | `softDelete`, `providerType` | – |
| `deleteNebula` | DELETE | `api/cosmic/nebula/{nebulaId}` | `nebulaId` | `softDelete`, `providerType` | – |
| `deleteOmniverse` | DELETE | `api/cosmic/omniverse/{omniverseId}` | `omniverseId` | `softDelete`, `providerType` | – |
| `deletePlanet` | DELETE | `api/cosmic/planet/{planetId}` | `planetId` | `softDelete`, `providerType` | – |
| `deletePortal` | DELETE | `api/cosmic/portal/{portalId}` | `portalId` | `softDelete`, `providerType` | – |
| `deleteSolarSystem` | DELETE | `api/cosmic/solar-system/{solarSystemId}` | `solarSystemId` | `softDelete`, `providerType` | – |
| `deleteSpaceTimeAbnormally` | DELETE | `api/cosmic/spacetime-abnormally/{abnormallyId}` | `abnormallyId` | `softDelete`, `providerType` | – |
| `deleteSpaceTimeDistortion` | DELETE | `api/cosmic/spacetime-distortion/{distortionId}` | `distortionId` | `softDelete`, `providerType` | – |
| `deleteStar` | DELETE | `api/cosmic/star/{starId}` | `starId` | `softDelete`, `providerType` | – |
| `deleteStarDust` | DELETE | `api/cosmic/stardust/{starDustId}` | `starDustId` | `softDelete`, `providerType` | – |
| `deleteStarGate` | DELETE | `api/cosmic/stargate/{starGateId}` | `starGateId` | `softDelete`, `providerType` | – |
| `deleteSuperVerse` | DELETE | `api/cosmic/superverse/{superVerseId}` | `superVerseId` | `softDelete`, `providerType` | – |
| `deleteTemporalRift` | DELETE | `api/cosmic/temporal-rift/{riftId}` | `riftId` | `softDelete`, `providerType` | – |
| `deleteUniverse` | DELETE | `api/cosmic/universe/{universeId}` | `universeId` | `softDelete`, `providerType` | – |
| `deleteWormHole` | DELETE | `api/cosmic/wormhole/{wormHoleId}` | `wormHoleId` | `softDelete`, `providerType` | – |
| `getChildrenForParent` | GET | `api/cosmic/children/{parentId}` | `parentId` | `parentHolonType`, `childHolonType` | – |
| `getMoonsForGalaxy` | GET | `api/cosmic/galaxy/{galaxyId}/moons` | `galaxyId` | – | – |
| `getOmniverse` | GET | `api/cosmic/omniverse` | – | – | – |
| `getPlanetsForGalaxy` | GET | `api/cosmic/galaxy/{galaxyId}/planets` | `galaxyId` | – | – |
| `getPlanetsForSolarSystem` | GET | `api/cosmic/solar-system/{solarSystemId}/planets` | `solarSystemId` | – | – |
| `getSolarSystemsForGalaxy` | GET | `api/cosmic/galaxy/{galaxyId}/solar-systems` | `galaxyId` | – | – |
| `getStarsForGalaxy` | GET | `api/cosmic/galaxy/{galaxyId}/stars` | `galaxyId` | – | – |
| `saveOmniverse` | POST | `api/cosmic/omniverse` | – | – | remaining args |
| `searchChildrenForParent` | GET | `api/cosmic/search-children` | – | `searchTerm`, `parentId`, `parentHolonType`, `childHolonType` | – |
| `searchHolonsForParent` | GET | `api/cosmic/search-holons` | – | `searchTerm`, `parentId`, `parentHolonType`, `childHolonType` | – |
| `searchHolonsForParentSync` | GET | `api/cosmic/search-holons-sync` | – | `searchTerm`, `parentId`, `parentHolonType`, `childHolonType`, `searchOnlyForCurrentAvatar`, `providerType` | – |
| `updateAsteroid` | PUT | `api/cosmic/asteroid` | – | `saveChildren`, `recursive`, `maxChildDepth`, `continueOnError`, `saveChildrenOnProvider`, `providerType` | remaining args |
| `updateBlackHole` | PUT | `api/cosmic/blackhole` | – | `saveChildren`, `recursive`, `maxChildDepth`, `continueOnError`, `saveChildrenOnProvider`, `providerType` | remaining args |
| `updateComet` | PUT | `api/cosmic/comet` | – | `saveChildren`, `recursive`, `maxChildDepth`, `continueOnError`, `saveChildrenOnProvider`, `providerType` | remaining args |
| `updateCosmicRay` | PUT | `api/cosmic/cosmic-ray` | – | `saveChildren`, `recursive`, `maxChildDepth`, `continueOnError`, `saveChildrenOnProvider`, `providerType` | remaining args |
| `updateCosmicWave` | PUT | `api/cosmic/cosmic-wave` | – | `saveChildren`, `recursive`, `maxChildDepth`, `continueOnError`, `saveChildrenOnProvider`, `providerType` | remaining args |
| `updateGalaxy` | PUT | `api/cosmic/galaxy` | – | `saveChildren`, `recursive`, `maxChildDepth`, `continueOnError`, `saveChildrenOnProvider`, `providerType` | remaining args |
| `updateGalaxyCluster` | PUT | `api/cosmic/galaxy-cluster` | – | `saveChildren`, `recursive`, `maxChildDepth`, `continueOnError`, `saveChildrenOnProvider`, `providerType` | remaining args |
| `updateGravitationalWave` | PUT | `api/cosmic/gravitational-wave` | – | `saveChildren`, `recursive`, `maxChildDepth`, `continueOnError`, `saveChildrenOnProvider`, `providerType` | remaining args |
| `updateMeteroid` | PUT | `api/cosmic/meteroid` | – | `saveChildren`, `recursive`, `maxChildDepth`, `continueOnError`, `saveChildrenOnProvider`, `providerType` | remaining args |
| `updateMoon` | PUT | `api/cosmic/moon` | – | `saveChildren`, `recursive`, `maxChildDepth`, `continueOnError`, `saveChildrenOnProvider`, `providerType` | remaining args |
| `updateMultiverse` | PUT | `api/cosmic/multiverse` | – | `saveChildren`, `recursive`, `maxChildDepth`, `continueOnError`, `saveChildrenOnProvider`, `providerType` | remaining args |
| `updateNebula` | PUT | `api/cosmic/nebula` | – | `saveChildren`, `recursive`, `maxChildDepth`, `continueOnError`, `saveChildrenOnProvider`, `providerType` | remaining args |
| `updateOmniverse` | PUT | `api/cosmic/omniverse` | – | `saveChildren`, `recursive`, `maxChildDepth`, `continueOnError`, `saveChildrenOnProvider`, `providerType` | remaining args |
| `updatePlanet` | PUT | `api/cosmic/planet` | – | `saveChildren`, `recursive`, `maxChildDepth`, `continueOnError`, `saveChildrenOnProvider`, `providerType` | remaining args |
| `updatePortal` | PUT | `api/cosmic/portal` | – | `saveChildren`, `recursive`, `maxChildDepth`, `continueOnError`, `saveChildrenOnProvider`, `providerType` | remaining args |
| `updateSolarSystem` | PUT | `api/cosmic/solar-system` | – | `saveChildren`, `recursive`, `maxChildDepth`, `continueOnError`, `saveChildrenOnProvider`, `providerType` | remaining args |
| `updateSpaceTimeAbnormally` | PUT | `api/cosmic/spacetime-abnormally` | – | `saveChildren`, `recursive`, `maxChildDepth`, `continueOnError`, `saveChildrenOnProvider`, `providerType` | remaining args |
| `updateSpaceTimeDistortion` | PUT | `api/cosmic/spacetime-distortion` | – | `saveChildren`, `recursive`, `maxChildDepth`, `continueOnError`, `saveChildrenOnProvider`, `providerType` | remaining args |
| `updateStar` | PUT | `api/cosmic/star` | – | `saveChildren`, `recursive`, `maxChildDepth`, `continueOnError`, `saveChildrenOnProvider`, `providerType` | remaining args |
| `updateStarDust` | PUT | `api/cosmic/stardust` | – | `saveChildren`, `recursive`, `maxChildDepth`, `continueOnError`, `saveChildrenOnProvider`, `providerType` | remaining args |
| `updateStarGate` | PUT | `api/cosmic/stargate` | – | `saveChildren`, `recursive`, `maxChildDepth`, `continueOnError`, `saveChildrenOnProvider`, `providerType` | remaining args |
| `updateSuperVerse` | PUT | `api/cosmic/superverse` | – | `saveChildren`, `recursive`, `maxChildDepth`, `continueOnError`, `saveChildrenOnProvider`, `providerType` | remaining args |
| `updateTemporalRift` | PUT | `api/cosmic/temporal-rift` | – | `saveChildren`, `recursive`, `maxChildDepth`, `continueOnError`, `saveChildrenOnProvider`, `providerType` | remaining args |
| `updateUniverse` | PUT | `api/cosmic/universe` | – | `saveChildren`, `recursive`, `maxChildDepth`, `continueOnError`, `saveChildrenOnProvider`, `providerType` | remaining args |
| `updateWormHole` | PUT | `api/cosmic/wormhole` | – | `saveChildren`, `recursive`, `maxChildDepth`, `continueOnError`, `saveChildrenOnProvider`, `providerType` | remaining args |

## Example

```js
const star = new STARClient({ baseUrl: '...' });
star.setToken(jwtToken); // or: await star.auth.login({ username, password })

const { isError, message, result } = await star.cosmic.addAsteroid({
    parentGalaxyId: '<parentGalaxyId>',
    /* ...other fields per the request body */
  });
if (isError) throw new Error(message);
console.log(result);
```
