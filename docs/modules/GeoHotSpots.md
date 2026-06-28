# GeoHotSpots — `star.geoHotSpots`

Source controller: [`GeoHotSpotsController.cs`](https://github.com/NextGenSoftwareUK/OASIS2/blob/main/STAR%20ODK/NextGenSoftware.OASIS.STAR.WebAPI/Controllers/GeoHotSpotsController.cs)
Route prefix: `api/geoHotSpots`
20 operation(s).

All methods are generated 1:1 from the controller's real `[Http*]` routes (see
[Conventions](../README.md#calling-any-endpoint)). They take a single args
object: any key matching a `{token}` in the route is substituted into the
URL; everything else becomes the query string (GET/DELETE) or JSON body
(POST/PUT).

## Methods

| Method | HTTP | Route | Route params |
| --- | --- | --- | --- |
| `activateGeoHotSpot` | POST | `api/geoHotSpots/{id}/activate` | `id` |
| `createGeoHotSpot` | POST | `api/geoHotSpots` | – |
| `createGeoHotSpotWithOptions` | POST | `api/geoHotSpots/create` | – |
| `deactivateGeoHotSpot` | POST | `api/geoHotSpots/{id}/deactivate` | `id` |
| `deleteGeoHotSpot` | DELETE | `api/geoHotSpots/{id}` | `id` |
| `downloadGeoHotSpot` | POST | `api/geoHotSpots/{id}/download` | `id` |
| `editGeoHotSpot` | POST | `api/geoHotSpots/{id}/edit` | `id` |
| `getAllGeoHotSpots` | GET | `api/geoHotSpots` | – |
| `getGeoHotSpot` | GET | `api/geoHotSpots/{id}` | `id` |
| `getGeoHotSpotVersions` | GET | `api/geoHotSpots/{id}/versions` | `id` |
| `getNearbyGeoHotSpots` | GET | `api/geoHotSpots/nearby` | – |
| `loadAllGeoHotSpotsForAvatar` | GET | `api/geoHotSpots/load-all-for-avatar` | – |
| `loadGeoHotSpot` | GET | `api/geoHotSpots/{id}/load` | `id` |
| `loadGeoHotSpotFromPath` | GET | `api/geoHotSpots/load-from-path` | – |
| `loadGeoHotSpotFromPublished` | GET | `api/geoHotSpots/load-from-published` | – |
| `loadGeoHotSpotVersion` | GET | `api/geoHotSpots/{id}/version/{version}` | `id`, `version` |
| `publishGeoHotSpot` | POST | `api/geoHotSpots/{id}/publish` | `id` |
| `republishGeoHotSpot` | POST | `api/geoHotSpots/{id}/republish` | `id` |
| `unpublishGeoHotSpot` | POST | `api/geoHotSpots/{id}/unpublish` | `id` |
| `updateGeoHotSpot` | PUT | `api/geoHotSpots/{id}` | `id` |

## Example

```js
const star = new STARClient({ baseUrl: '...' });
star.setToken(jwtToken); // or: await star.auth.login({ username, password })

const { isError, message, result } = await star.geoHotSpots.activateGeoHotSpot({
    id: '<id>',
    /* ...other fields per the request body */
  });
if (isError) throw new Error(message);
console.log(result);
```
