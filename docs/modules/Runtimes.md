# Runtimes — `star.runtimes`

Source controller: [`RuntimesController.cs`](https://github.com/NextGenSoftwareUK/OASIS2/blob/main/STAR%20ODK/NextGenSoftware.OASIS.STAR.WebAPI/Controllers/RuntimesController.cs)
Route prefix: `api/runtimes`
25 operation(s).

All methods are generated 1:1 from the controller's real `[Http*]` routes (see
[Conventions](../README.md#calling-any-endpoint)). They take a single args
object: any key matching a `{token}` in the route is substituted into the
URL; everything else becomes the query string (GET/DELETE) or JSON body
(POST/PUT).

## Methods

| Method | HTTP | Route | Route params |
| --- | --- | --- | --- |
| `activateRuntime` | POST | `api/runtimes/{id}/activate` | `id` |
| `cloneRuntime` | POST | `api/runtimes/{id}/clone` | `id` |
| `createRuntime` | POST | `api/runtimes` | – |
| `createRuntimeWithOptions` | POST | `api/runtimes/create` | – |
| `deactivateRuntime` | POST | `api/runtimes/{id}/deactivate` | `id` |
| `deleteRuntime` | DELETE | `api/runtimes/{id}` | `id` |
| `downloadRuntime` | POST | `api/runtimes/{id}/download` | `id` |
| `editRuntime` | PUT | `api/runtimes/{id}/edit` | `id` |
| `getAllRuntimes` | GET | `api/runtimes` | – |
| `getRuntime` | GET | `api/runtimes/{id}` | `id` |
| `getRuntimesByType` | GET | `api/runtimes/by-type/{type}` | `type` |
| `getRuntimeStatus` | GET | `api/runtimes/{id}/status` | `id` |
| `getRuntimeVersions` | GET | `api/runtimes/{id}/versions` | `id` |
| `loadAllRuntimesForAvatar` | GET | `api/runtimes/load-all-for-avatar` | – |
| `loadRuntimeFromPath` | GET | `api/runtimes/load-from-path` | – |
| `loadRuntimeFromPublished` | GET | `api/runtimes/load-from-published` | – |
| `loadRuntimeVersion` | GET | `api/runtimes/{id}/versions/{version}` | `id`, `version` |
| `publishRuntime` | POST | `api/runtimes/{id}/publish` | `id` |
| `republishRuntime` | POST | `api/runtimes/{id}/republish` | `id` |
| `searchRuntimesGet` | GET | `api/runtimes/search` | – |
| `searchRuntimesPost` | POST | `api/runtimes/search` | – |
| `startRuntime` | POST | `api/runtimes/{id}/start` | `id` |
| `stopRuntime` | POST | `api/runtimes/{id}/stop` | `id` |
| `unpublishRuntime` | POST | `api/runtimes/{id}/unpublish` | `id` |
| `updateRuntime` | PUT | `api/runtimes/{id}` | `id` |

## Example

```js
const star = new STARClient({ baseUrl: '...' });
star.setToken(jwtToken); // or: await star.auth.login({ username, password })

const { isError, message, result } = await star.runtimes.activateRuntime({
    id: '<id>',
    /* ...other fields per the request body */
  });
if (isError) throw new Error(message);
console.log(result);
```
