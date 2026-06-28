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

| Method | HTTP | Route | Route params |
| --- | --- | --- | --- |
| `activateInventoryItem` | POST | `api/inventoryItems/{id}/activate` | `id` |
| `createInventoryItem` | POST | `api/inventoryItems` | – |
| `createInventoryItemWithOptions` | POST | `api/inventoryItems/create` | – |
| `deactivateInventoryItem` | POST | `api/inventoryItems/{id}/deactivate` | `id` |
| `deleteInventoryItem` | DELETE | `api/inventoryItems/{id}` | `id` |
| `downloadInventoryItem` | POST | `api/inventoryItems/{id}/download` | `id` |
| `editInventoryItem` | POST | `api/inventoryItems/{id}/edit` | `id` |
| `getAllInventoryItems` | GET | `api/inventoryItems` | – |
| `getInventoryItem` | GET | `api/inventoryItems/{id}` | `id` |
| `getInventoryItemsByAvatar` | GET | `api/inventoryItems/by-avatar/{avatarId}` | `avatarId` |
| `getInventoryItemVersions` | GET | `api/inventoryItems/{id}/versions` | `id` |
| `loadAllInventoryItemsForAvatar` | GET | `api/inventoryItems/load-all-for-avatar` | – |
| `loadInventoryItem` | GET | `api/inventoryItems/{id}/load` | `id` |
| `loadInventoryItemFromPath` | GET | `api/inventoryItems/load-from-path` | – |
| `loadInventoryItemFromPublished` | GET | `api/inventoryItems/load-from-published` | – |
| `loadInventoryItemVersion` | GET | `api/inventoryItems/{id}/version/{version}` | `id`, `version` |
| `publishInventoryItem` | POST | `api/inventoryItems/{id}/publish` | `id` |
| `republishInventoryItem` | POST | `api/inventoryItems/{id}/republish` | `id` |
| `searchInventoryItems` | POST | `api/inventoryItems/search` | – |
| `unpublishInventoryItem` | POST | `api/inventoryItems/{id}/unpublish` | `id` |
| `updateInventoryItem` | PUT | `api/inventoryItems/{id}` | `id` |

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
