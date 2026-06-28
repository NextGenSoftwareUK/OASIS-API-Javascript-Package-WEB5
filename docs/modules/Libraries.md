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

| Method | HTTP | Route | Route params | Query params | Body |
| --- | --- | --- | --- | --- | --- |
| `activateLibrary` | POST | `api/libraries/{id}/activate` | `id` | `version` | remaining args |
| `cloneLibrary` | POST | `api/libraries/{id}/clone` | `id` | – | remaining args |
| `createLibrary` | POST | `api/libraries` | – | – | remaining args |
| `createLibraryWithOptions` | POST | `api/libraries/create` | – | – | remaining args |
| `deactivateLibrary` | POST | `api/libraries/{id}/deactivate` | `id` | `version` | remaining args |
| `deleteLibrary` | DELETE | `api/libraries/{id}` | `id` | – | – |
| `downloadLibrary` | POST | `api/libraries/{id}/download` | `id` | `version`, `downloadPath`, `reInstall` | remaining args |
| `editLibrary` | POST | `api/libraries/{id}/edit` | `id` | – | remaining args |
| `getAllLibraries` | GET | `api/libraries` | – | – | – |
| `getLibrariesByCategory` | GET | `api/libraries/by-category/{category}` | `category` | – | – |
| `getLibrary` | GET | `api/libraries/{id}` | `id` | – | – |
| `getLibraryVersions` | GET | `api/libraries/{id}/versions` | `id` | – | – |
| `loadAllLibrariesForAvatar` | GET | `api/libraries/load-all-for-avatar` | – | `showAllVersions`, `version` | – |
| `loadLibrary` | GET | `api/libraries/{id}/load` | `id` | `version`, `holonType` | – |
| `loadLibraryFromPath` | GET | `api/libraries/load-from-path` | – | `path`, `holonType` | – |
| `loadLibraryFromPublished` | GET | `api/libraries/load-from-published` | – | `publishedFilePath` | – |
| `loadLibraryVersion` | GET | `api/libraries/{id}/version/{version}` | `id`, `version` | – | – |
| `publishLibrary` | POST | `api/libraries/{id}/publish` | `id` | – | remaining args |
| `republishLibrary` | POST | `api/libraries/{id}/republish` | `id` | `version` | remaining args |
| `searchLibraries` | GET | `api/libraries/search` | – | `searchTerm` | – |
| `unpublishLibrary` | POST | `api/libraries/{id}/unpublish` | `id` | `version` | remaining args |
| `updateLibrary` | PUT | `api/libraries/{id}` | `id` | – | remaining args |

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
