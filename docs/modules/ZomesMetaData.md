# ZomesMetaData — `star.zomesMetaData`

Source controller: [`ZomesMetaDataController.cs`](https://github.com/NextGenSoftwareUK/OASIS2/blob/main/STAR%20ODK/NextGenSoftware.OASIS.STAR.WebAPI/Controllers/ZomesMetaDataController.cs)
Route prefix: `api/zomesMetaData`
21 operation(s).

All methods are generated 1:1 from the controller's real `[Http*]` routes (see
[Conventions](../README.md#calling-any-endpoint)). They take a single args
object: any key matching a `{token}` in the route is substituted into the
URL; everything else becomes the query string (GET/DELETE) or JSON body
(POST/PUT).

## Methods

| Method | HTTP | Route | Route params | Query params | Body |
| --- | --- | --- | --- | --- | --- |
| `activateZomeMetaData` | POST | `api/zomesMetaData/{id}/activate` | `id` | `version` | remaining args |
| `cloneZomeMetaData` | POST | `api/zomesMetaData/{id}/clone` | `id` | – | remaining args |
| `createZomeMetaData` | POST | `api/zomesMetaData` | – | – | remaining args |
| `createZomeMetaDataWithOptions` | POST | `api/zomesMetaData/create` | – | – | remaining args |
| `deactivateZomeMetaData` | POST | `api/zomesMetaData/{id}/deactivate` | `id` | `version` | remaining args |
| `deleteZomeMetaData` | DELETE | `api/zomesMetaData/{id}` | `id` | – | – |
| `downloadZomeMetaData` | POST | `api/zomesMetaData/{id}/download` | `id` | – | remaining args |
| `editZomeMetaData` | PUT | `api/zomesMetaData/{id}/edit` | `id` | – | remaining args |
| `getAllZomesMetaData` | GET | `api/zomesMetaData` | – | – | – |
| `getZomeMetaData` | GET | `api/zomesMetaData/{id}` | `id` | – | – |
| `getZomeMetaDataVersions` | GET | `api/zomesMetaData/{id}/versions` | `id` | – | – |
| `loadAllZomeMetaDataForAvatar` | GET | `api/zomesMetaData/load-all-for-avatar` | – | – | – |
| `loadZomeMetaDataFromPath` | GET | `api/zomesMetaData/load-from-path` | – | `path` | – |
| `loadZomeMetaDataFromPublished` | GET | `api/zomesMetaData/load-from-published` | – | `publishedFilePath` | – |
| `loadZomeMetaDataVersion` | GET | `api/zomesMetaData/{id}/versions/{version}` | `id`, `version` | – | – |
| `publishZomeMetaData` | POST | `api/zomesMetaData/{id}/publish` | `id` | – | remaining args |
| `republishZomeMetaData` | POST | `api/zomesMetaData/{id}/republish` | `id` | `version` | remaining args |
| `searchZomesMetaData` | GET | `api/zomesMetaData/search` | – | `searchTerm`, `showAllVersions`, `version` | – |
| `searchZomesMetaDataPost` | POST | `api/zomesMetaData/search` | – | – | remaining args |
| `unpublishZomeMetaData` | POST | `api/zomesMetaData/{id}/unpublish` | `id` | `version` | remaining args |
| `updateZomeMetaData` | PUT | `api/zomesMetaData/{id}` | `id` | – | remaining args |

## Example

```js
const star = new STARClient({ baseUrl: '...' });
star.setToken(jwtToken); // or: await star.auth.login({ username, password })

const { isError, message, result } = await star.zomesMetaData.activateZomeMetaData({
    id: '<id>',
    /* ...other fields per the request body */
  });
if (isError) throw new Error(message);
console.log(result);
```
