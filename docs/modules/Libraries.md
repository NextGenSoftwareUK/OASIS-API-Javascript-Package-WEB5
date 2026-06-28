# Libraries — `star.libraries`

Source controller: [`LibrariesController.cs`](https://github.com/NextGenSoftwareUK/OASIS2/blob/main/STAR%20ODK/NextGenSoftware.OASIS.STAR.WebAPI/Controllers/LibrariesController.cs)
Route prefix: `api/libraries`
22 operation(s).

All methods are generated 1:1 from the controller's real `[Http*]` routes (see
[Conventions](../README.md#calling-any-endpoint)). They take a single args
object: any key matching a `{token}` in the route is substituted into the
URL; everything else becomes the query string (GET/DELETE) or JSON body
(POST/PUT).

## Methods

| Method | HTTP | Route | Route params |
| --- | --- | --- | --- |
| `activateLibrary` | POST | `api/libraries/{id}/activate` | `id` |
| `cloneLibrary` | POST | `api/libraries/{id}/clone` | `id` |
| `createLibrary` | POST | `api/libraries` | – |
| `createLibraryWithOptions` | POST | `api/libraries/create` | – |
| `deactivateLibrary` | POST | `api/libraries/{id}/deactivate` | `id` |
| `deleteLibrary` | DELETE | `api/libraries/{id}` | `id` |
| `downloadLibrary` | POST | `api/libraries/{id}/download` | `id` |
| `editLibrary` | POST | `api/libraries/{id}/edit` | `id` |
| `getAllLibraries` | GET | `api/libraries` | – |
| `getLibrariesByCategory` | GET | `api/libraries/by-category/{category}` | `category` |
| `getLibrary` | GET | `api/libraries/{id}` | `id` |
| `getLibraryVersions` | GET | `api/libraries/{id}/versions` | `id` |
| `loadAllLibrariesForAvatar` | GET | `api/libraries/load-all-for-avatar` | – |
| `loadLibrary` | GET | `api/libraries/{id}/load` | `id` |
| `loadLibraryFromPath` | GET | `api/libraries/load-from-path` | – |
| `loadLibraryFromPublished` | GET | `api/libraries/load-from-published` | – |
| `loadLibraryVersion` | GET | `api/libraries/{id}/version/{version}` | `id`, `version` |
| `publishLibrary` | POST | `api/libraries/{id}/publish` | `id` |
| `republishLibrary` | POST | `api/libraries/{id}/republish` | `id` |
| `searchLibraries` | GET | `api/libraries/search` | – |
| `unpublishLibrary` | POST | `api/libraries/{id}/unpublish` | `id` |
| `updateLibrary` | PUT | `api/libraries/{id}` | `id` |

## Example

```js
const star = new STARClient({ baseUrl: '...' });
star.setToken(jwtToken); // or: await star.auth.login({ username, password })

const { isError, message, result } = await star.libraries.activateLibrary({
    id: '<id>',
    /* ...other fields per the request body */
  });
if (isError) throw new Error(message);
console.log(result);
```
