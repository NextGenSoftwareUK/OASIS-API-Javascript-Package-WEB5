# CelestialBodiesMetaData — `star.celestialBodiesMetaData`

Source controller: [`CelestialBodiesMetaDataController.cs`](https://github.com/NextGenSoftwareUK/OASIS2/blob/main/STAR%20ODK/NextGenSoftware.OASIS.STAR.WebAPI/Controllers/CelestialBodiesMetaDataController.cs)
Route prefix: `api/celestialBodiesMetaData`
21 operation(s).

All methods are generated 1:1 from the controller's real `[Http*]` routes (see
[Conventions](../README.md#calling-any-endpoint)). They take a single args
object: any key matching a `{token}` in the route is substituted into the
URL; everything else becomes the query string (GET/DELETE) or JSON body
(POST/PUT).

## Methods

| Method | HTTP | Route | Route params |
| --- | --- | --- | --- |
| `activateCelestialBodyMetaData` | POST | `api/celestialBodiesMetaData/{id}/activate` | `id` |
| `cloneCelestialBodyMetaData` | POST | `api/celestialBodiesMetaData/{id}/clone` | `id` |
| `createCelestialBodyMetaData` | POST | `api/celestialBodiesMetaData` | – |
| `createCelestialBodyMetaDataWithOptions` | POST | `api/celestialBodiesMetaData/create` | – |
| `deactivateCelestialBodyMetaData` | POST | `api/celestialBodiesMetaData/{id}/deactivate` | `id` |
| `deleteCelestialBodyMetaData` | DELETE | `api/celestialBodiesMetaData/{id}` | `id` |
| `downloadCelestialBodyMetaData` | POST | `api/celestialBodiesMetaData/{id}/download` | `id` |
| `editCelestialBodyMetaData` | PUT | `api/celestialBodiesMetaData/{id}/edit` | `id` |
| `getAllCelestialBodiesMetaData` | GET | `api/celestialBodiesMetaData` | – |
| `getCelestialBodyMetaData` | GET | `api/celestialBodiesMetaData/{id}` | `id` |
| `getCelestialBodyMetaDataVersions` | GET | `api/celestialBodiesMetaData/{id}/versions` | `id` |
| `loadAllCelestialBodyMetaDataForAvatar` | GET | `api/celestialBodiesMetaData/load-all-for-avatar` | – |
| `loadCelestialBodyMetaDataFromPath` | GET | `api/celestialBodiesMetaData/load-from-path` | – |
| `loadCelestialBodyMetaDataFromPublished` | GET | `api/celestialBodiesMetaData/load-from-published` | – |
| `loadCelestialBodyMetaDataVersion` | GET | `api/celestialBodiesMetaData/{id}/versions/{version}` | `id`, `version` |
| `publishCelestialBodyMetaData` | POST | `api/celestialBodiesMetaData/{id}/publish` | `id` |
| `republishCelestialBodyMetaData` | POST | `api/celestialBodiesMetaData/{id}/republish` | `id` |
| `searchCelestialBodiesMetaDataGet` | GET | `api/celestialBodiesMetaData/search` | – |
| `searchCelestialBodiesMetaDataPost` | POST | `api/celestialBodiesMetaData/search` | – |
| `unpublishCelestialBodyMetaData` | POST | `api/celestialBodiesMetaData/{id}/unpublish` | `id` |
| `updateCelestialBodyMetaData` | PUT | `api/celestialBodiesMetaData/{id}` | `id` |

## Example

```js
const star = new STARClient({ baseUrl: '...' });
star.setToken(jwtToken); // or: await star.auth.login({ username, password })

const { isError, message, result } = await star.celestialBodiesMetaData.activateCelestialBodyMetaData({
    id: '<id>',
    /* ...other fields per the request body */
  });
if (isError) throw new Error(message);
console.log(result);
```
