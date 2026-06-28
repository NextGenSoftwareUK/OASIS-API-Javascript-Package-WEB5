# Avatar — `star.avatar`

Source controller: [`AvatarController.cs`](https://github.com/NextGenSoftwareUK/OASIS2/blob/main/STAR%20ODK/NextGenSoftware.OASIS.STAR.WebAPI/Controllers/AvatarController.cs)
Route prefix: `api/avatar`
13 operation(s).

All methods are generated 1:1 from the controller's real `[Http*]` routes (see
[Conventions](../README.md#calling-any-endpoint)). They take a single args
object: any key matching a `{token}` in the route is substituted into the
URL; everything else becomes the query string (GET/DELETE) or JSON body
(POST/PUT).

## Methods

| Method | HTTP | Route | Route params |
| --- | --- | --- | --- |
| `addItemToInventory` | POST | `api/avatar/inventory` | – |
| `addXp` | POST | `api/avatar/add-xp` | – |
| `authenticate` | POST | `api/avatar/authenticate` | – |
| `getCurrentAvatar` | GET | `api/avatar/current` | – |
| `getInventory` | GET | `api/avatar/inventory` | – |
| `getInventoryItem` | GET | `api/avatar/inventory/{itemId}` | `itemId` |
| `hasItem` | GET | `api/avatar/inventory/{itemId}/has` | `itemId` |
| `hasItemByName` | GET | `api/avatar/inventory/has-by-name` | – |
| `removeItemFromInventory` | DELETE | `api/avatar/inventory/{itemId}` | `itemId` |
| `searchInventory` | GET | `api/avatar/inventory/search` | – |
| `sendItemToAvatar` | POST | `api/avatar/inventory/send-to-avatar` | – |
| `sendItemToClan` | POST | `api/avatar/inventory/send-to-clan` | – |
| `setActiveQuest` | POST | `api/avatar/set-active-quest` | – |

## Example

```js
const star = new STARClient({ baseUrl: '...' });
star.setToken(jwtToken); // or: await star.auth.login({ username, password })

const { isError, message, result } = await star.avatar.addItemToInventory({
    /* ...other fields per the request body */
  });
if (isError) throw new Error(message);
console.log(result);
```
