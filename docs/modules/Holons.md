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

| Method | HTTP | Route | Route params | Query params | Body |
| --- | --- | --- | --- | --- | --- |
| `activateHolon` | POST | `api/holons/{id}/activate` | `id` | `version` | remaining args |
| `createHolon` | POST | `api/holons` | – | – | remaining args |
| `createHolonWithOptions` | POST | `api/holons/create` | – | – | remaining args |
| `deactivateHolon` | POST | `api/holons/{id}/deactivate` | `id` | `version` | remaining args |
| `deleteHolon` | DELETE | `api/holons/{id}` | `id` | – | – |
| `downloadHolon` | POST | `api/holons/{id}/download` | `id` | `version`, `downloadPath`, `reInstall` | remaining args |
| `editHolon` | POST | `api/holons/{id}/edit` | `id` | – | remaining args |
| `getAllHolons` | GET | `api/holons` | – | – | – |
| `getHolon` | GET | `api/holons/{id}` | `id` | – | – |
| `getHolonsByMetadata` | GET | `api/holons/by-metadata` | – | `key`, `value` | – |
| `getHolonsByParent` | GET | `api/holons/by-parent/{parentId}` | `parentId` | – | – |
| `getHolonsByStatus` | GET | `api/holons/by-status/{status}` | `status` | – | – |
| `getHolonsByType` | GET | `api/holons/by-type/{type}` | `type` | – | – |
| `getHolonVersions` | GET | `api/holons/{id}/versions` | `id` | – | – |
| `loadAllHolonsForAvatar` | GET | `api/holons/load-all-for-avatar` | – | `showAllVersions`, `version` | – |
| `loadHolon` | GET | `api/holons/{id}/load` | `id` | `version`, `holonType` | – |
| `loadHolonFromPath` | GET | `api/holons/load-from-path` | – | `path`, `holonType` | – |
| `loadHolonFromPublished` | GET | `api/holons/load-from-published` | – | `publishedFilePath` | – |
| `loadHolonVersion` | GET | `api/holons/{id}/version/{version}` | `id`, `version` | – | – |
| `publishHolon` | POST | `api/holons/{id}/publish` | `id` | – | remaining args |
| `republishHolon` | POST | `api/holons/{id}/republish` | `id` | `version` | remaining args |
| `searchHolons` | GET | `api/holons/search` | – | `query` | – |
| `unpublishHolon` | POST | `api/holons/{id}/unpublish` | `id` | `version` | remaining args |
| `updateHolon` | PUT | `api/holons/{id}` | `id` | – | remaining args |

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
