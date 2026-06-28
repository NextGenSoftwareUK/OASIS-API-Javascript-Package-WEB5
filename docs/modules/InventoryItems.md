# InventoryItems — `star.inventoryItems`

Source controller: [`InventoryItemsController.cs`](https://github.com/NextGenSoftwareUK/OASIS2/blob/main/STAR%20ODK/NextGenSoftware.OASIS.STAR.WebAPI/Controllers/InventoryItemsController.cs)
Route prefix: `api/inventoryItems`
21 operation(s).

All methods are generated 1:1 from the controller's real `[Http*]` routes (see
[Conventions](../README.md#calling-any-endpoint)). They take a single args
object: any key matching a `{token}` in the route is substituted into the
URL; everything else becomes the query string (GET/DELETE) or JSON body
(POST/PUT).

## Methods

| Method | HTTP | Route | Route params | Query params | Body |
| --- | --- | --- | --- | --- | --- |
| `activateInventoryItem` | POST | `api/inventoryItems/{id}/activate` | `id` | `version` | remaining args |
| `createInventoryItem` | POST | `api/inventoryItems` | – | – | remaining args |
| `createInventoryItemWithOptions` | POST | `api/inventoryItems/create` | – | – | remaining args |
| `deactivateInventoryItem` | POST | `api/inventoryItems/{id}/deactivate` | `id` | `version` | remaining args |
| `deleteInventoryItem` | DELETE | `api/inventoryItems/{id}` | `id` | – | – |
| `downloadInventoryItem` | POST | `api/inventoryItems/{id}/download` | `id` | `version`, `downloadPath`, `reInstall` | remaining args |
| `editInventoryItem` | POST | `api/inventoryItems/{id}/edit` | `id` | – | remaining args |
| `getAllInventoryItems` | GET | `api/inventoryItems` | – | – | – |
| `getInventoryItem` | GET | `api/inventoryItems/{id}` | `id` | – | – |
| `getInventoryItemsByAvatar` | GET | `api/inventoryItems/by-avatar/{avatarId}` | `avatarId` | – | – |
| `getInventoryItemVersions` | GET | `api/inventoryItems/{id}/versions` | `id` | – | – |
| `loadAllInventoryItemsForAvatar` | GET | `api/inventoryItems/load-all-for-avatar` | – | `showAllVersions`, `version` | – |
| `loadInventoryItem` | GET | `api/inventoryItems/{id}/load` | `id` | `version`, `holonType` | – |
| `loadInventoryItemFromPath` | GET | `api/inventoryItems/load-from-path` | – | `path`, `holonType` | – |
| `loadInventoryItemFromPublished` | GET | `api/inventoryItems/load-from-published` | – | `publishedFilePath` | – |
| `loadInventoryItemVersion` | GET | `api/inventoryItems/{id}/version/{version}` | `id`, `version` | – | – |
| `publishInventoryItem` | POST | `api/inventoryItems/{id}/publish` | `id` | – | remaining args |
| `republishInventoryItem` | POST | `api/inventoryItems/{id}/republish` | `id` | `version` | remaining args |
| `searchInventoryItems` | POST | `api/inventoryItems/search` | – | – | remaining args |
| `unpublishInventoryItem` | POST | `api/inventoryItems/{id}/unpublish` | `id` | `version` | remaining args |
| `updateInventoryItem` | PUT | `api/inventoryItems/{id}` | `id` | – | remaining args |

## Example

```js
const star = new STARClient({ baseUrl: '...' });
star.setToken(jwtToken); // or: await star.auth.login({ username, password })

const { isError, message, result } = await star.inventoryItems.activateInventoryItem({
    id: '<id>',
    /* ...other fields per the request body */
  });
if (isError) throw new Error(message);
console.log(result);
```
