# NFTs — `star.nFTs`

Source controller: [`NFTsController.cs`](https://github.com/NextGenSoftwareUK/OASIS2/blob/main/STAR%20ODK/NextGenSoftware.OASIS.STAR.WebAPI/Controllers/NFTsController.cs)
Route prefix: `api/nFTs`
21 operation(s).

All methods are generated 1:1 from the controller's real `[Http*]` routes (see
[Conventions](../README.md#calling-any-endpoint)). They take a single args
object: any key matching a `{token}` in the route is substituted into the
URL; everything else becomes the query string (GET/DELETE) or JSON body
(POST/PUT).

## Methods

| Method | HTTP | Route | Route params |
| --- | --- | --- | --- |
| `activateNFT` | POST | `api/nFTs/{id}/activate` | `id` |
| `cloneNFT` | POST | `api/nFTs/{id}/clone` | `id` |
| `createNFT` | POST | `api/nFTs` | – |
| `createNFTWithOptions` | POST | `api/nFTs/create` | – |
| `deactivateNFT` | POST | `api/nFTs/{id}/deactivate` | `id` |
| `deleteNFT` | DELETE | `api/nFTs/{id}` | `id` |
| `downloadNFT` | POST | `api/nFTs/{id}/download` | `id` |
| `editNFT` | POST | `api/nFTs/{id}/edit` | `id` |
| `getAllNFTs` | GET | `api/nFTs` | – |
| `getNFT` | GET | `api/nFTs/{id}` | `id` |
| `getNFTVersions` | GET | `api/nFTs/{id}/versions` | `id` |
| `loadAllNFTsForAvatar` | GET | `api/nFTs/load-all-for-avatar` | – |
| `loadNFT` | GET | `api/nFTs/{id}/load` | `id` |
| `loadNFTFromPath` | GET | `api/nFTs/load-from-path` | – |
| `loadNFTFromPublished` | GET | `api/nFTs/load-from-published` | – |
| `loadNFTVersion` | GET | `api/nFTs/{id}/version/{version}` | `id`, `version` |
| `publishNFT` | POST | `api/nFTs/{id}/publish` | `id` |
| `republishNFT` | POST | `api/nFTs/{id}/republish` | `id` |
| `searchNFTs` | GET | `api/nFTs/search` | – |
| `unpublishNFT` | POST | `api/nFTs/{id}/unpublish` | `id` |
| `updateNFT` | PUT | `api/nFTs/{id}` | `id` |

## Example

```js
const star = new STARClient({ baseUrl: '...' });
star.setToken(jwtToken); // or: await star.auth.login({ username, password })

const { isError, message, result } = await star.nFTs.activateNFT({
    id: '<id>',
    /* ...other fields per the request body */
  });
if (isError) throw new Error(message);
console.log(result);
```
