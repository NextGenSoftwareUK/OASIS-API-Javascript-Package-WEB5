# OAPPs — `star.oAPPs`

Source controller: [`OAPPsController.cs`](https://github.com/NextGenSoftwareUK/OASIS2/blob/main/STAR%20ODK/NextGenSoftware.OASIS.STAR.WebAPI/Controllers/OAPPsController.cs)
Route prefix: `api/oAPPs`
21 operation(s).

All methods are generated 1:1 from the controller's real `[Http*]` routes (see
[Conventions](../README.md#calling-any-endpoint)). They take a single args
object: any key matching a `{token}` in the route is substituted into the
URL; everything else becomes the query string (GET/DELETE) or JSON body
(POST/PUT).

## Methods

| Method | HTTP | Route | Route params | Query params | Body |
| --- | --- | --- | --- | --- | --- |
| `activateOAPP` | POST | `api/oAPPs/{id}/activate` | `id` | `version` | remaining args |
| `cloneOAPP` | POST | `api/oAPPs/{id}/clone` | `id` | – | remaining args |
| `createOAPP` | POST | `api/oAPPs` | – | – | remaining args |
| `createOAPPWithOptions` | POST | `api/oAPPs/create` | – | – | remaining args |
| `deactivateOAPP` | POST | `api/oAPPs/{id}/deactivate` | `id` | `version` | remaining args |
| `deleteOAPP` | DELETE | `api/oAPPs/{id}` | `id` | – | – |
| `downloadOAPP` | POST | `api/oAPPs/{id}/download` | `id` | – | remaining args |
| `editOAPP` | PUT | `api/oAPPs/{id}/edit` | `id` | – | remaining args |
| `getAllOAPPs` | GET | `api/oAPPs` | – | – | – |
| `getOAPP` | GET | `api/oAPPs/{id}` | `id` | – | – |
| `getOAPPVersions` | GET | `api/oAPPs/{id}/versions` | `id` | – | – |
| `loadAllOAPPsForAvatar` | GET | `api/oAPPs/load-all-for-avatar` | – | – | – |
| `loadOAPPFromPath` | GET | `api/oAPPs/load-from-path` | – | `path` | – |
| `loadOAPPFromPublished` | GET | `api/oAPPs/load-from-published` | – | `publishedFilePath` | – |
| `loadOAPPVersion` | GET | `api/oAPPs/{id}/versions/{version}` | `id`, `version` | – | – |
| `publishOAPP` | POST | `api/oAPPs/{id}/publish` | `id` | – | remaining args |
| `republishOAPP` | POST | `api/oAPPs/{id}/republish` | `id` | `version` | remaining args |
| `searchOAPPs` | GET | `api/oAPPs/search` | – | `searchTerm`, `showAllVersions`, `version` | – |
| `searchOAPPsPost` | POST | `api/oAPPs/search` | – | – | remaining args |
| `unpublishOAPP` | POST | `api/oAPPs/{id}/unpublish` | `id` | `version` | remaining args |
| `updateOAPP` | PUT | `api/oAPPs/{id}` | `id` | – | remaining args |

## Example

```js
const star = new STARClient({ baseUrl: '...' });
star.setToken(jwtToken); // or: await star.auth.login({ username, password })

const { isError, message, result } = await star.oAPPs.activateOAPP({
    id: '<id>',
    /* ...other fields per the request body */
  });
if (isError) throw new Error(message);
console.log(result);
```
