# Parks — `star.parks`

Source controller: [`ParksController.cs`](https://github.com/NextGenSoftwareUK/OASIS2/blob/main/STAR%20ODK/NextGenSoftware.OASIS.STAR.WebAPI/Controllers/ParksController.cs)
Route prefix: `api/parks`
22 operation(s).

All methods are generated 1:1 from the controller's real `[Http*]` routes (see
[Conventions](../README.md#calling-any-endpoint)). They take a single args
object: any key matching a `{token}` in the route is substituted into the
URL; everything else becomes the query string (GET/DELETE) or JSON body
(POST/PUT).

## Methods

| Method | HTTP | Route | Route params | Query params | Body |
| --- | --- | --- | --- | --- | --- |
| `activatePark` | POST | `api/parks/{id}/activate` | `id` | `version` | remaining args |
| `createPark` | POST | `api/parks` | – | – | remaining args |
| `createParkWithOptions` | POST | `api/parks/create` | – | – | remaining args |
| `deactivatePark` | POST | `api/parks/{id}/deactivate` | `id` | `version` | remaining args |
| `deletePark` | DELETE | `api/parks/{id}` | `id` | – | – |
| `downloadPark` | POST | `api/parks/{id}/download` | `id` | `version`, `downloadPath`, `reInstall` | remaining args |
| `editPark` | POST | `api/parks/{id}/edit` | `id` | – | remaining args |
| `getAllParks` | GET | `api/parks` | – | – | – |
| `getNearbyParks` | GET | `api/parks/nearby` | – | `latitude`, `longitude`, `radiusKm` | – |
| `getPark` | GET | `api/parks/{id}` | `id` | – | – |
| `getParksByType` | GET | `api/parks/by-type/{type}` | `type` | – | – |
| `getParkVersions` | GET | `api/parks/{id}/versions` | `id` | – | – |
| `loadAllParksForAvatar` | GET | `api/parks/load-all-for-avatar` | – | `showAllVersions`, `version` | – |
| `loadPark` | GET | `api/parks/{id}/load` | `id` | `version`, `holonType` | – |
| `loadParkFromPath` | GET | `api/parks/load-from-path` | – | `path`, `holonType` | – |
| `loadParkFromPublished` | GET | `api/parks/load-from-published` | – | `publishedFilePath` | – |
| `loadParkVersion` | GET | `api/parks/{id}/version/{version}` | `id`, `version` | – | – |
| `publishPark` | POST | `api/parks/{id}/publish` | `id` | – | remaining args |
| `republishPark` | POST | `api/parks/{id}/republish` | `id` | `version` | remaining args |
| `searchParks` | POST | `api/parks/search` | – | – | remaining args |
| `unpublishPark` | POST | `api/parks/{id}/unpublish` | `id` | `version` | remaining args |
| `updatePark` | PUT | `api/parks/{id}` | `id` | – | remaining args |

## Example

```js
const star = new STARClient({ baseUrl: '...' });
star.setToken(jwtToken); // or: await star.auth.login({ username, password })

const { isError, message, result } = await star.parks.activatePark({
    id: '<id>',
    /* ...other fields per the request body */
  });
if (isError) throw new Error(message);
console.log(result);
```
