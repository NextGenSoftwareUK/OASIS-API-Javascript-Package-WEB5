# Chapters — `star.chapters`

Source controller: [`ChaptersController.cs`](https://github.com/NextGenSoftwareUK/OASIS2/blob/main/STAR%20ODK/NextGenSoftware.OASIS.STAR.WebAPI/Controllers/ChaptersController.cs)
Route prefix: `api/chapters`
20 operation(s).

All methods are generated 1:1 from the controller's real `[Http*]` routes (see
[Conventions](../README.md#calling-any-endpoint)). They take a single args
object: any key matching a `{token}` in the route is substituted into the
URL; everything else becomes the query string (GET/DELETE) or JSON body
(POST/PUT).

## Methods

| Method | HTTP | Route | Route params | Query params | Body |
| --- | --- | --- | --- | --- | --- |
| `activateChapter` | POST | `api/chapters/{id}/activate` | `id` | `version` | remaining args |
| `createChapter` | POST | `api/chapters` | – | – | remaining args |
| `createChapterWithOptions` | POST | `api/chapters/create` | – | – | remaining args |
| `deactivateChapter` | POST | `api/chapters/{id}/deactivate` | `id` | `version` | remaining args |
| `deleteChapter` | DELETE | `api/chapters/{id}` | `id` | – | – |
| `downloadChapter` | POST | `api/chapters/{id}/download` | `id` | `version`, `downloadPath`, `reInstall` | remaining args |
| `editChapter` | POST | `api/chapters/{id}/edit` | `id` | – | remaining args |
| `getAllChapters` | GET | `api/chapters` | – | – | – |
| `getChapter` | GET | `api/chapters/{id}` | `id` | – | – |
| `getChapterVersions` | GET | `api/chapters/{id}/versions` | `id` | – | – |
| `loadAllChaptersForAvatar` | GET | `api/chapters/load-all-for-avatar` | – | `showAllVersions`, `version` | – |
| `loadChapter` | GET | `api/chapters/{id}/load` | `id` | `version`, `holonType` | – |
| `loadChapterFromPath` | GET | `api/chapters/load-from-path` | – | `path`, `holonType` | – |
| `loadChapterFromPublished` | GET | `api/chapters/load-from-published` | – | `publishedFilePath` | – |
| `loadChapterVersion` | GET | `api/chapters/{id}/version/{version}` | `id`, `version` | – | – |
| `publishChapter` | POST | `api/chapters/{id}/publish` | `id` | – | remaining args |
| `republishChapter` | POST | `api/chapters/{id}/republish` | `id` | `version` | remaining args |
| `searchChapters` | GET | `api/chapters/search` | – | `query` | – |
| `unpublishChapter` | POST | `api/chapters/{id}/unpublish` | `id` | `version` | remaining args |
| `updateChapter` | PUT | `api/chapters/{id}` | `id` | – | remaining args |

## Example

```js
const star = new STARClient({ baseUrl: '...' });
star.setToken(jwtToken); // or: await star.auth.login({ username, password })

const { isError, message, result } = await star.chapters.activateChapter({
    id: '<id>',
    /* ...other fields per the request body */
  });
if (isError) throw new Error(message);
console.log(result);
```
