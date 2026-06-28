# Holons — `star.holons`

Source controller: [`HolonsController.cs`](https://github.com/NextGenSoftwareUK/OASIS2/blob/main/STAR%20ODK/NextGenSoftware.OASIS.STAR.WebAPI/Controllers/HolonsController.cs)
Route prefix: `api/holons`
24 operation(s).

All methods are generated 1:1 from the controller's real `[Http*]` routes (see
[Conventions](../README.md#calling-any-endpoint)). They take a single args
object: any key matching a `{token}` in the route is substituted into the
URL; everything else becomes the query string (GET/DELETE) or JSON body
(POST/PUT).

## Methods

| Method | HTTP | Route | Route params |
| --- | --- | --- | --- |
| `activateHolon` | POST | `api/holons/{id}/activate` | `id` |
| `createHolon` | POST | `api/holons` | – |
| `createHolonWithOptions` | POST | `api/holons/create` | – |
| `deactivateHolon` | POST | `api/holons/{id}/deactivate` | `id` |
| `deleteHolon` | DELETE | `api/holons/{id}` | `id` |
| `downloadHolon` | POST | `api/holons/{id}/download` | `id` |
| `editHolon` | POST | `api/holons/{id}/edit` | `id` |
| `getAllHolons` | GET | `api/holons` | – |
| `getHolon` | GET | `api/holons/{id}` | `id` |
| `getHolonsByMetadata` | GET | `api/holons/by-metadata` | – |
| `getHolonsByParent` | GET | `api/holons/by-parent/{parentId}` | `parentId` |
| `getHolonsByStatus` | GET | `api/holons/by-status/{status}` | `status` |
| `getHolonsByType` | GET | `api/holons/by-type/{type}` | `type` |
| `getHolonVersions` | GET | `api/holons/{id}/versions` | `id` |
| `loadAllHolonsForAvatar` | GET | `api/holons/load-all-for-avatar` | – |
| `loadHolon` | GET | `api/holons/{id}/load` | `id` |
| `loadHolonFromPath` | GET | `api/holons/load-from-path` | – |
| `loadHolonFromPublished` | GET | `api/holons/load-from-published` | – |
| `loadHolonVersion` | GET | `api/holons/{id}/version/{version}` | `id`, `version` |
| `publishHolon` | POST | `api/holons/{id}/publish` | `id` |
| `republishHolon` | POST | `api/holons/{id}/republish` | `id` |
| `searchHolons` | GET | `api/holons/search` | – |
| `unpublishHolon` | POST | `api/holons/{id}/unpublish` | `id` |
| `updateHolon` | PUT | `api/holons/{id}` | `id` |

## Example

```js
const star = new STARClient({ baseUrl: '...' });
star.setToken(jwtToken); // or: await star.auth.login({ username, password })

const { isError, message, result } = await star.holons.activateHolon({
    id: '<id>',
    /* ...other fields per the request body */
  });
if (isError) throw new Error(message);
console.log(result);
```
