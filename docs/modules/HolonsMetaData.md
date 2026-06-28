# HolonsMetaData — `star.holonsMetaData`

Source controller: [`HolonsMetaDataController.cs`](https://github.com/NextGenSoftwareUK/OASIS2/blob/main/STAR%20ODK/NextGenSoftware.OASIS.STAR.WebAPI/Controllers/HolonsMetaDataController.cs)
Route prefix: `api/holonsMetaData`
21 operation(s).

All methods are generated 1:1 from the controller's real `[Http*]` routes (see
[Conventions](../README.md#calling-any-endpoint)). They take a single args
object: any key matching a `{token}` in the route is substituted into the
URL; everything else becomes the query string (GET/DELETE) or JSON body
(POST/PUT).

## Methods

| Method | HTTP | Route | Route params |
| --- | --- | --- | --- |
| `activateHolonMetaData` | POST | `api/holonsMetaData/{id}/activate` | `id` |
| `cloneHolonMetaData` | POST | `api/holonsMetaData/{id}/clone` | `id` |
| `createHolonMetaData` | POST | `api/holonsMetaData` | – |
| `createHolonMetaDataWithOptions` | POST | `api/holonsMetaData/create` | – |
| `deactivateHolonMetaData` | POST | `api/holonsMetaData/{id}/deactivate` | `id` |
| `deleteHolonMetaData` | DELETE | `api/holonsMetaData/{id}` | `id` |
| `downloadHolonMetaData` | POST | `api/holonsMetaData/{id}/download` | `id` |
| `editHolonMetaData` | PUT | `api/holonsMetaData/{id}/edit` | `id` |
| `getAllHolonsMetaData` | GET | `api/holonsMetaData` | – |
| `getHolonMetaData` | GET | `api/holonsMetaData/{id}` | `id` |
| `getHolonMetaDataVersions` | GET | `api/holonsMetaData/{id}/versions` | `id` |
| `loadAllHolonMetaDataForAvatar` | GET | `api/holonsMetaData/load-all-for-avatar` | – |
| `loadHolonMetaDataFromPath` | GET | `api/holonsMetaData/load-from-path` | – |
| `loadHolonMetaDataFromPublished` | GET | `api/holonsMetaData/load-from-published` | – |
| `loadHolonMetaDataVersion` | GET | `api/holonsMetaData/{id}/versions/{version}` | `id`, `version` |
| `publishHolonMetaData` | POST | `api/holonsMetaData/{id}/publish` | `id` |
| `republishHolonMetaData` | POST | `api/holonsMetaData/{id}/republish` | `id` |
| `searchHolonsMetaDataGet` | GET | `api/holonsMetaData/search` | – |
| `searchHolonsMetaDataPost` | POST | `api/holonsMetaData/search` | – |
| `unpublishHolonMetaData` | POST | `api/holonsMetaData/{id}/unpublish` | `id` |
| `updateHolonMetaData` | PUT | `api/holonsMetaData/{id}` | `id` |

## Example

```js
const star = new STARClient({ baseUrl: '...' });
star.setToken(jwtToken); // or: await star.auth.login({ username, password })

const { isError, message, result } = await star.holonsMetaData.activateHolonMetaData({
    id: '<id>',
    /* ...other fields per the request body */
  });
if (isError) throw new Error(message);
console.log(result);
```
