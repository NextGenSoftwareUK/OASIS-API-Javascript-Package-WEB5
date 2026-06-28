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

| Method | HTTP | Route | Route params |
| --- | --- | --- | --- |
| `activateChapter` | POST | `api/chapters/{id}/activate` | `id` |
| `createChapter` | POST | `api/chapters` | – |
| `createChapterWithOptions` | POST | `api/chapters/create` | – |
| `deactivateChapter` | POST | `api/chapters/{id}/deactivate` | `id` |
| `deleteChapter` | DELETE | `api/chapters/{id}` | `id` |
| `downloadChapter` | POST | `api/chapters/{id}/download` | `id` |
| `editChapter` | POST | `api/chapters/{id}/edit` | `id` |
| `getAllChapters` | GET | `api/chapters` | – |
| `getChapter` | GET | `api/chapters/{id}` | `id` |
| `getChapterVersions` | GET | `api/chapters/{id}/versions` | `id` |
| `loadAllChaptersForAvatar` | GET | `api/chapters/load-all-for-avatar` | – |
| `loadChapter` | GET | `api/chapters/{id}/load` | `id` |
| `loadChapterFromPath` | GET | `api/chapters/load-from-path` | – |
| `loadChapterFromPublished` | GET | `api/chapters/load-from-published` | – |
| `loadChapterVersion` | GET | `api/chapters/{id}/version/{version}` | `id`, `version` |
| `publishChapter` | POST | `api/chapters/{id}/publish` | `id` |
| `republishChapter` | POST | `api/chapters/{id}/republish` | `id` |
| `searchChapters` | GET | `api/chapters/search` | – |
| `unpublishChapter` | POST | `api/chapters/{id}/unpublish` | `id` |
| `updateChapter` | PUT | `api/chapters/{id}` | `id` |

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
