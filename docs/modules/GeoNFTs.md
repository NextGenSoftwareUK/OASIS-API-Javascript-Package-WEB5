# GeoNFTs — `star.geoNFTs`

Source controller: [`GeoNFTsController.cs`](https://github.com/NextGenSoftwareUK/OASIS2/blob/main/STAR%20ODK/NextGenSoftware.OASIS.STAR.WebAPI/Controllers/GeoNFTsController.cs)
Route prefix: `api/geoNFTs`
22 operation(s).

All methods are generated 1:1 from the controller's real `[Http*]` routes (see
[Conventions](../README.md#calling-any-endpoint)). They take a single args
object: any key matching a `{token}` in the route is substituted into the
URL; everything else becomes the query string (GET/DELETE) or JSON body
(POST/PUT).

## Methods

| Method | HTTP | Route | Route params |
| --- | --- | --- | --- |
| `activateGeoNFT` | POST | `api/geoNFTs/{id}/activate` | `id` |
| `createGeoNFT` | POST | `api/geoNFTs` | – |
| `createGeoNFTWithOptions` | POST | `api/geoNFTs/create` | – |
| `deactivateGeoNFT` | POST | `api/geoNFTs/{id}/deactivate` | `id` |
| `deleteGeoNFT` | DELETE | `api/geoNFTs/{id}` | `id` |
| `downloadGeoNFT` | POST | `api/geoNFTs/{id}/download` | `id` |
| `editGeoNFT` | POST | `api/geoNFTs/{id}/edit` | `id` |
| `getAllGeoNFTs` | GET | `api/geoNFTs` | – |
| `getGeoNFT` | GET | `api/geoNFTs/{id}` | `id` |
| `getGeoNFTsByAvatar` | GET | `api/geoNFTs/by-avatar/{avatarId}` | `avatarId` |
| `getGeoNFTVersions` | GET | `api/geoNFTs/{id}/versions` | `id` |
| `getNearbyGeoNFTs` | GET | `api/geoNFTs/nearby` | – |
| `loadAllGeoNFTsForAvatar` | GET | `api/geoNFTs/load-all-for-avatar` | – |
| `loadGeoNFT` | GET | `api/geoNFTs/{id}/load` | `id` |
| `loadGeoNFTFromPath` | GET | `api/geoNFTs/load-from-path` | – |
| `loadGeoNFTFromPublished` | GET | `api/geoNFTs/load-from-published` | – |
| `loadGeoNFTVersion` | GET | `api/geoNFTs/{id}/version/{version}` | `id`, `version` |
| `publishGeoNFT` | POST | `api/geoNFTs/{id}/publish` | `id` |
| `republishGeoNFT` | POST | `api/geoNFTs/{id}/republish` | `id` |
| `searchGeoNFTs` | GET | `api/geoNFTs/search` | – |
| `unpublishGeoNFT` | POST | `api/geoNFTs/{id}/unpublish` | `id` |
| `updateGeoNFT` | PUT | `api/geoNFTs/{id}` | `id` |

## Example

```js
const star = new STARClient({ baseUrl: '...' });
star.setToken(jwtToken); // or: await star.auth.login({ username, password })

const { isError, message, result } = await star.geoNFTs.activateGeoNFT({
    id: '<id>',
    /* ...other fields per the request body */
  });
if (isError) throw new Error(message);
console.log(result);
```
