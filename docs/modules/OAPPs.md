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

| Method | HTTP | Route | Route params |
| --- | --- | --- | --- |
| `activateOAPP` | POST | `api/oAPPs/{id}/activate` | `id` |
| `cloneOAPP` | POST | `api/oAPPs/{id}/clone` | `id` |
| `createOAPP` | POST | `api/oAPPs` | – |
| `createOAPPWithOptions` | POST | `api/oAPPs/create` | – |
| `deactivateOAPP` | POST | `api/oAPPs/{id}/deactivate` | `id` |
| `deleteOAPP` | DELETE | `api/oAPPs/{id}` | `id` |
| `downloadOAPP` | POST | `api/oAPPs/{id}/download` | `id` |
| `editOAPP` | PUT | `api/oAPPs/{id}/edit` | `id` |
| `getAllOAPPs` | GET | `api/oAPPs` | – |
| `getOAPP` | GET | `api/oAPPs/{id}` | `id` |
| `getOAPPVersions` | GET | `api/oAPPs/{id}/versions` | `id` |
| `loadAllOAPPsForAvatar` | GET | `api/oAPPs/load-all-for-avatar` | – |
| `loadOAPPFromPath` | GET | `api/oAPPs/load-from-path` | – |
| `loadOAPPFromPublished` | GET | `api/oAPPs/load-from-published` | – |
| `loadOAPPVersion` | GET | `api/oAPPs/{id}/versions/{version}` | `id`, `version` |
| `publishOAPP` | POST | `api/oAPPs/{id}/publish` | `id` |
| `republishOAPP` | POST | `api/oAPPs/{id}/republish` | `id` |
| `searchOAPPsGet` | GET | `api/oAPPs/search` | – |
| `searchOAPPsPost` | POST | `api/oAPPs/search` | – |
| `unpublishOAPP` | POST | `api/oAPPs/{id}/unpublish` | `id` |
| `updateOAPP` | PUT | `api/oAPPs/{id}` | `id` |

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
