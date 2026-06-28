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

| Method | HTTP | Route | Route params |
| --- | --- | --- | --- |
| `activatePark` | POST | `api/parks/{id}/activate` | `id` |
| `createPark` | POST | `api/parks` | – |
| `createParkWithOptions` | POST | `api/parks/create` | – |
| `deactivatePark` | POST | `api/parks/{id}/deactivate` | `id` |
| `deletePark` | DELETE | `api/parks/{id}` | `id` |
| `downloadPark` | POST | `api/parks/{id}/download` | `id` |
| `editPark` | POST | `api/parks/{id}/edit` | `id` |
| `getAllParks` | GET | `api/parks` | – |
| `getNearbyParks` | GET | `api/parks/nearby` | – |
| `getPark` | GET | `api/parks/{id}` | `id` |
| `getParksByType` | GET | `api/parks/by-type/{type}` | `type` |
| `getParkVersions` | GET | `api/parks/{id}/versions` | `id` |
| `loadAllParksForAvatar` | GET | `api/parks/load-all-for-avatar` | – |
| `loadPark` | GET | `api/parks/{id}/load` | `id` |
| `loadParkFromPath` | GET | `api/parks/load-from-path` | – |
| `loadParkFromPublished` | GET | `api/parks/load-from-published` | – |
| `loadParkVersion` | GET | `api/parks/{id}/version/{version}` | `id`, `version` |
| `publishPark` | POST | `api/parks/{id}/publish` | `id` |
| `republishPark` | POST | `api/parks/{id}/republish` | `id` |
| `searchParks` | POST | `api/parks/search` | – |
| `unpublishPark` | POST | `api/parks/{id}/unpublish` | `id` |
| `updatePark` | PUT | `api/parks/{id}` | `id` |

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
