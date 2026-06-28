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

| Method | HTTP | Route | Route params |
| --- | --- | --- | --- |
| `addAsteroid` | POST | `api/cosmic/galaxy/{parentGalaxyId}/asteroid` | `parentGalaxyId` |
| `addComet` | POST | `api/cosmic/galaxy/{parentGalaxyId}/comet` | `parentGalaxyId` |
| `addGalaxy` | POST | `api/cosmic/galaxy-cluster/{parentGalaxyClusterId}/galaxy` | `parentGalaxyClusterId` |
| `addGalaxyCluster` | POST | `api/cosmic/universe/{parentUniverseId}/galaxy-cluster` | `parentUniverseId` |
| `addMeteroid` | POST | `api/cosmic/galaxy/{parentGalaxyId}/meteroid` | `parentGalaxyId` |
| `addMoon` | POST | `api/cosmic/planet/{parentPlanetId}/moon` | `parentPlanetId` |
| `addMultiverse` | POST | `api/cosmic/omniverse/{parentOmniverseId}/multiverse` | `parentOmniverseId` |
| `addPlanet` | POST | `api/cosmic/solar-system/{parentSolarSystemId}/planet` | `parentSolarSystemId` |
| `addSolarSystem` | POST | `api/cosmic/galaxy/{parentGalaxyId}/solar-system` | `parentGalaxyId` |
| `addStar` | POST | `api/cosmic/galaxy/{parentGalaxyId}/star` | `parentGalaxyId` |
| `addUniverse` | POST | `api/cosmic/multiverse/{parentMultiverseId}/universe` | `parentMultiverseId` |
| `deleteAsteroid` | DELETE | `api/cosmic/asteroid/{asteroidId}` | `asteroidId` |
| `deleteBlackHole` | DELETE | `api/cosmic/blackhole/{blackHoleId}` | `blackHoleId` |
| `deleteComet` | DELETE | `api/cosmic/comet/{cometId}` | `cometId` |
| `deleteCosmicRay` | DELETE | `api/cosmic/cosmic-ray/{rayId}` | `rayId` |
| `deleteCosmicWave` | DELETE | `api/cosmic/cosmic-wave/{waveId}` | `waveId` |
| `deleteGalaxy` | DELETE | `api/cosmic/galaxy/{galaxyId}` | `galaxyId` |
| `deleteGalaxyCluster` | DELETE | `api/cosmic/galaxy-cluster/{galaxyClusterId}` | `galaxyClusterId` |
| `deleteGravitationalWave` | DELETE | `api/cosmic/gravitational-wave/{waveId}` | `waveId` |
| `deleteMeteroid` | DELETE | `api/cosmic/meteroid/{meteroidId}` | `meteroidId` |
| `deleteMoon` | DELETE | `api/cosmic/moon/{moonId}` | `moonId` |
| `deleteMultiverse` | DELETE | `api/cosmic/multiverse/{multiverseId}` | `multiverseId` |
| `deleteNebula` | DELETE | `api/cosmic/nebula/{nebulaId}` | `nebulaId` |
| `deleteOmniverse` | DELETE | `api/cosmic/omniverse/{omniverseId}` | `omniverseId` |
| `deletePlanet` | DELETE | `api/cosmic/planet/{planetId}` | `planetId` |
| `deletePortal` | DELETE | `api/cosmic/portal/{portalId}` | `portalId` |
| `deleteSolarSystem` | DELETE | `api/cosmic/solar-system/{solarSystemId}` | `solarSystemId` |
| `deleteSpaceTimeAbnormally` | DELETE | `api/cosmic/spacetime-abnormally/{abnormallyId}` | `abnormallyId` |
| `deleteSpaceTimeDistortion` | DELETE | `api/cosmic/spacetime-distortion/{distortionId}` | `distortionId` |
| `deleteStar` | DELETE | `api/cosmic/star/{starId}` | `starId` |
| `deleteStarDust` | DELETE | `api/cosmic/stardust/{starDustId}` | `starDustId` |
| `deleteStarGate` | DELETE | `api/cosmic/stargate/{starGateId}` | `starGateId` |
| `deleteSuperVerse` | DELETE | `api/cosmic/superverse/{superVerseId}` | `superVerseId` |
| `deleteTemporalRift` | DELETE | `api/cosmic/temporal-rift/{riftId}` | `riftId` |
| `deleteUniverse` | DELETE | `api/cosmic/universe/{universeId}` | `universeId` |
| `deleteWormHole` | DELETE | `api/cosmic/wormhole/{wormHoleId}` | `wormHoleId` |
| `getChildrenForParent` | GET | `api/cosmic/children/{parentId}` | `parentId` |
| `getMoonsForGalaxy` | GET | `api/cosmic/galaxy/{galaxyId}/moons` | `galaxyId` |
| `getOmniverse` | GET | `api/cosmic/omniverse` | – |
| `getPlanetsForGalaxy` | GET | `api/cosmic/galaxy/{galaxyId}/planets` | `galaxyId` |
| `getPlanetsForSolarSystem` | GET | `api/cosmic/solar-system/{solarSystemId}/planets` | `solarSystemId` |
| `getSolarSystemsForGalaxy` | GET | `api/cosmic/galaxy/{galaxyId}/solar-systems` | `galaxyId` |
| `getStarsForGalaxy` | GET | `api/cosmic/galaxy/{galaxyId}/stars` | `galaxyId` |
| `saveOmniverse` | POST | `api/cosmic/omniverse` | – |
| `searchChildrenForParent` | GET | `api/cosmic/search-children` | – |
| `searchHolonsForParent` | GET | `api/cosmic/search-holons` | – |
| `searchHolonsForParentSync` | GET | `api/cosmic/search-holons-sync` | – |
| `updateAsteroid` | PUT | `api/cosmic/asteroid` | – |
| `updateBlackHole` | PUT | `api/cosmic/blackhole` | – |
| `updateComet` | PUT | `api/cosmic/comet` | – |
| `updateCosmicRay` | PUT | `api/cosmic/cosmic-ray` | – |
| `updateCosmicWave` | PUT | `api/cosmic/cosmic-wave` | – |
| `updateGalaxy` | PUT | `api/cosmic/galaxy` | – |
| `updateGalaxyCluster` | PUT | `api/cosmic/galaxy-cluster` | – |
| `updateGravitationalWave` | PUT | `api/cosmic/gravitational-wave` | – |
| `updateMeteroid` | PUT | `api/cosmic/meteroid` | – |
| `updateMoon` | PUT | `api/cosmic/moon` | – |
| `updateMultiverse` | PUT | `api/cosmic/multiverse` | – |
| `updateNebula` | PUT | `api/cosmic/nebula` | – |
| `updateOmniverse` | PUT | `api/cosmic/omniverse` | – |
| `updatePlanet` | PUT | `api/cosmic/planet` | – |
| `updatePortal` | PUT | `api/cosmic/portal` | – |
| `updateSolarSystem` | PUT | `api/cosmic/solar-system` | – |
| `updateSpaceTimeAbnormally` | PUT | `api/cosmic/spacetime-abnormally` | – |
| `updateSpaceTimeDistortion` | PUT | `api/cosmic/spacetime-distortion` | – |
| `updateStar` | PUT | `api/cosmic/star` | – |
| `updateStarDust` | PUT | `api/cosmic/stardust` | – |
| `updateStarGate` | PUT | `api/cosmic/stargate` | – |
| `updateSuperVerse` | PUT | `api/cosmic/superverse` | – |
| `updateTemporalRift` | PUT | `api/cosmic/temporal-rift` | – |
| `updateUniverse` | PUT | `api/cosmic/universe` | – |
| `updateWormHole` | PUT | `api/cosmic/wormhole` | – |

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
