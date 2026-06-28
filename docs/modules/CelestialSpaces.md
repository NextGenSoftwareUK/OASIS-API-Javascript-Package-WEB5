# CelestialSpaces — `star.celestialSpaces`

Source controller: [`CelestialSpacesController.cs`](https://github.com/NextGenSoftwareUK/OASIS2/blob/main/STAR%20ODK/NextGenSoftware.OASIS.STAR.WebAPI/Controllers/CelestialSpacesController.cs)
Route prefix: `api/celestialSpaces`
22 operation(s).

All methods are generated 1:1 from the controller's real `[Http*]` routes (see
[Conventions](../README.md#calling-any-endpoint)). They take a single args
object: any key matching a `{token}` in the route is substituted into the
URL; everything else becomes the query string (GET/DELETE) or JSON body
(POST/PUT).

## Methods

| Method | HTTP | Route | Route params | Query params | Body |
| --- | --- | --- | --- | --- | --- |
| `activateCelestialSpace` | POST | `api/celestialSpaces/{id}/activate` | `id` | `version` | remaining args |
| `createCelestialSpace` | POST | `api/celestialSpaces` | – | – | remaining args |
| `createCelestialSpaceWithOptions` | POST | `api/celestialSpaces/create` | – | – | remaining args |
| `deactivateCelestialSpace` | POST | `api/celestialSpaces/{id}/deactivate` | `id` | `version` | remaining args |
| `deleteCelestialSpace` | DELETE | `api/celestialSpaces/{id}` | `id` | – | – |
| `downloadCelestialSpace` | POST | `api/celestialSpaces/{id}/download` | `id` | `version`, `downloadPath`, `reInstall` | remaining args |
| `editCelestialSpace` | POST | `api/celestialSpaces/{id}/edit` | `id` | – | remaining args |
| `getAllCelestialSpaces` | GET | `api/celestialSpaces` | – | – | – |
| `getCelestialSpace` | GET | `api/celestialSpaces/{id}` | `id` | – | – |
| `getCelestialSpacesByType` | GET | `api/celestialSpaces/by-type/{type}` | `type` | – | – |
| `getCelestialSpacesInSpace` | GET | `api/celestialSpaces/in-space/{parentSpaceId}` | `parentSpaceId` | – | – |
| `getCelestialSpaceVersions` | GET | `api/celestialSpaces/{id}/versions` | `id` | – | – |
| `loadAllCelestialSpacesForAvatar` | GET | `api/celestialSpaces/load-all-for-avatar` | – | `showAllVersions`, `version` | – |
| `loadCelestialSpace` | GET | `api/celestialSpaces/{id}/load` | `id` | `version`, `holonType` | – |
| `loadCelestialSpaceFromPath` | GET | `api/celestialSpaces/load-from-path` | – | `path`, `holonType` | – |
| `loadCelestialSpaceFromPublished` | GET | `api/celestialSpaces/load-from-published` | – | `publishedFilePath` | – |
| `loadCelestialSpaceVersion` | GET | `api/celestialSpaces/{id}/version/{version}` | `id`, `version` | – | – |
| `publishCelestialSpace` | POST | `api/celestialSpaces/{id}/publish` | `id` | – | remaining args |
| `republishCelestialSpace` | POST | `api/celestialSpaces/{id}/republish` | `id` | `version` | remaining args |
| `searchCelestialSpaces` | GET | `api/celestialSpaces/search` | – | `query` | – |
| `unpublishCelestialSpace` | POST | `api/celestialSpaces/{id}/unpublish` | `id` | `version` | remaining args |
| `updateCelestialSpace` | PUT | `api/celestialSpaces/{id}` | `id` | – | remaining args |

## Example

```js
const star = new STARClient({ baseUrl: '...' });
star.setToken(jwtToken); // or: await star.auth.login({ username, password })

const { isError, message, result } = await star.celestialSpaces.activateCelestialSpace({
    id: '<id>',
    /* ...other fields per the request body */
  });
if (isError) throw new Error(message);
console.log(result);
```
