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

| Method | HTTP | Route | Route params |
| --- | --- | --- | --- |
| `activateCelestialSpace` | POST | `api/celestialSpaces/{id}/activate` | `id` |
| `createCelestialSpace` | POST | `api/celestialSpaces` | – |
| `createCelestialSpaceWithOptions` | POST | `api/celestialSpaces/create` | – |
| `deactivateCelestialSpace` | POST | `api/celestialSpaces/{id}/deactivate` | `id` |
| `deleteCelestialSpace` | DELETE | `api/celestialSpaces/{id}` | `id` |
| `downloadCelestialSpace` | POST | `api/celestialSpaces/{id}/download` | `id` |
| `editCelestialSpace` | POST | `api/celestialSpaces/{id}/edit` | `id` |
| `getAllCelestialSpaces` | GET | `api/celestialSpaces` | – |
| `getCelestialSpace` | GET | `api/celestialSpaces/{id}` | `id` |
| `getCelestialSpacesByType` | GET | `api/celestialSpaces/by-type/{type}` | `type` |
| `getCelestialSpacesInSpace` | GET | `api/celestialSpaces/in-space/{parentSpaceId}` | `parentSpaceId` |
| `getCelestialSpaceVersions` | GET | `api/celestialSpaces/{id}/versions` | `id` |
| `loadAllCelestialSpacesForAvatar` | GET | `api/celestialSpaces/load-all-for-avatar` | – |
| `loadCelestialSpace` | GET | `api/celestialSpaces/{id}/load` | `id` |
| `loadCelestialSpaceFromPath` | GET | `api/celestialSpaces/load-from-path` | – |
| `loadCelestialSpaceFromPublished` | GET | `api/celestialSpaces/load-from-published` | – |
| `loadCelestialSpaceVersion` | GET | `api/celestialSpaces/{id}/version/{version}` | `id`, `version` |
| `publishCelestialSpace` | POST | `api/celestialSpaces/{id}/publish` | `id` |
| `republishCelestialSpace` | POST | `api/celestialSpaces/{id}/republish` | `id` |
| `searchCelestialSpaces` | GET | `api/celestialSpaces/search` | – |
| `unpublishCelestialSpace` | POST | `api/celestialSpaces/{id}/unpublish` | `id` |
| `updateCelestialSpace` | PUT | `api/celestialSpaces/{id}` | `id` |

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
