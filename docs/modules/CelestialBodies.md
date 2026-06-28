# CelestialBodies — `star.celestialBodies`

Source controller: [`CelestialBodiesController.cs`](https://github.com/NextGenSoftwareUK/OASIS2/blob/main/STAR%20ODK/NextGenSoftware.OASIS.STAR.WebAPI/Controllers/CelestialBodiesController.cs)
Route prefix: `api/celestialBodies`
22 operation(s).

All methods are generated 1:1 from the controller's real `[Http*]` routes (see
[Conventions](../README.md#calling-any-endpoint)). They take a single args
object: any key matching a `{token}` in the route is substituted into the
URL; everything else becomes the query string (GET/DELETE) or JSON body
(POST/PUT).

## Methods

| Method | HTTP | Route | Route params |
| --- | --- | --- | --- |
| `activateCelestialBody` | POST | `api/celestialBodies/{id}/activate` | `id` |
| `createCelestialBody` | POST | `api/celestialBodies` | – |
| `createCelestialBodyWithOptions` | POST | `api/celestialBodies/create` | – |
| `deactivateCelestialBody` | POST | `api/celestialBodies/{id}/deactivate` | `id` |
| `deleteCelestialBody` | DELETE | `api/celestialBodies/{id}` | `id` |
| `downloadCelestialBody` | POST | `api/celestialBodies/{id}/download` | `id` |
| `editCelestialBody` | POST | `api/celestialBodies/{id}/edit` | `id` |
| `getAllCelestialBodies` | GET | `api/celestialBodies` | – |
| `getCelestialBodiesByType` | GET | `api/celestialBodies/by-type/{type}` | `type` |
| `getCelestialBodiesInSpace` | GET | `api/celestialBodies/in-space/{spaceId}` | `spaceId` |
| `getCelestialBody` | GET | `api/celestialBodies/{id}` | `id` |
| `getCelestialBodyVersions` | GET | `api/celestialBodies/{id}/versions` | `id` |
| `loadAllCelestialBodiesForAvatar` | GET | `api/celestialBodies/load-all-for-avatar` | – |
| `loadCelestialBody` | GET | `api/celestialBodies/{id}/load` | `id` |
| `loadCelestialBodyFromPath` | GET | `api/celestialBodies/load-from-path` | – |
| `loadCelestialBodyFromPublished` | GET | `api/celestialBodies/load-from-published` | – |
| `loadCelestialBodyVersion` | GET | `api/celestialBodies/{id}/version/{version}` | `id`, `version` |
| `publishCelestialBody` | POST | `api/celestialBodies/{id}/publish` | `id` |
| `republishCelestialBody` | POST | `api/celestialBodies/{id}/republish` | `id` |
| `searchCelestialBodies` | GET | `api/celestialBodies/search` | – |
| `unpublishCelestialBody` | POST | `api/celestialBodies/{id}/unpublish` | `id` |
| `updateCelestialBody` | PUT | `api/celestialBodies/{id}` | `id` |

## Example

```js
const star = new STARClient({ baseUrl: '...' });
star.setToken(jwtToken); // or: await star.auth.login({ username, password })

const { isError, message, result } = await star.celestialBodies.activateCelestialBody({
    id: '<id>',
    /* ...other fields per the request body */
  });
if (isError) throw new Error(message);
console.log(result);
```
