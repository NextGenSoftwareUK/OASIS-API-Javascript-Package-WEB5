# Zomes — `star.zomes`

Source controller: [`ZomesController.cs`](https://github.com/NextGenSoftwareUK/OASIS2/blob/main/STAR%20ODK/NextGenSoftware.OASIS.STAR.WebAPI/Controllers/ZomesController.cs)
Route prefix: `api/zomes`
22 operation(s).

All methods are generated 1:1 from the controller's real `[Http*]` routes (see
[Conventions](../README.md#calling-any-endpoint)). They take a single args
object: any key matching a `{token}` in the route is substituted into the
URL; everything else becomes the query string (GET/DELETE) or JSON body
(POST/PUT).

## Methods

| Method | HTTP | Route | Route params |
| --- | --- | --- | --- |
| `activateZome` | POST | `api/zomes/{id}/activate` | `id` |
| `createZome` | POST | `api/zomes` | – |
| `createZomeWithOptions` | POST | `api/zomes/create` | – |
| `deactivateZome` | POST | `api/zomes/{id}/deactivate` | `id` |
| `deleteZome` | DELETE | `api/zomes/{id}` | `id` |
| `downloadZome` | POST | `api/zomes/{id}/download` | `id` |
| `editZome` | POST | `api/zomes/{id}/edit` | `id` |
| `getAllZomes` | GET | `api/zomes` | – |
| `getZome` | GET | `api/zomes/{id}` | `id` |
| `getZomesByType` | GET | `api/zomes/by-type/{type}` | `type` |
| `getZomesInSpace` | GET | `api/zomes/in-space/{spaceId}` | `spaceId` |
| `getZomeVersions` | GET | `api/zomes/{id}/versions` | `id` |
| `loadAllZomesForAvatar` | GET | `api/zomes/load-all-for-avatar` | – |
| `loadZome` | GET | `api/zomes/{id}/load` | `id` |
| `loadZomeFromPath` | GET | `api/zomes/load-from-path` | – |
| `loadZomeFromPublished` | GET | `api/zomes/load-from-published` | – |
| `loadZomeVersion` | GET | `api/zomes/{id}/version/{version}` | `id`, `version` |
| `publishZome` | POST | `api/zomes/{id}/publish` | `id` |
| `republishZome` | POST | `api/zomes/{id}/republish` | `id` |
| `searchZomes` | GET | `api/zomes/search` | – |
| `unpublishZome` | POST | `api/zomes/{id}/unpublish` | `id` |
| `updateZome` | PUT | `api/zomes/{id}` | `id` |

## Example

```js
const star = new STARClient({ baseUrl: '...' });
star.setToken(jwtToken); // or: await star.auth.login({ username, password })

const { isError, message, result } = await star.zomes.activateZome({
    id: '<id>',
    /* ...other fields per the request body */
  });
if (isError) throw new Error(message);
console.log(result);
```
