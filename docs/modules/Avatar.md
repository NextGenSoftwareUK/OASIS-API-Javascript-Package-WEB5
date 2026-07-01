# Avatar — `star.avatar`

Source controller: [`AvatarController.cs`](https://github.com/NextGenSoftwareUK/OASIS/blob/main/STAR%20ODK/NextGenSoftware.OASIS.STAR.WebAPI/Controllers/AvatarController.cs)
Route prefix: `api/avatar`
13 operation(s).

Every method takes a single args object: any key matching a `{token}` in the route is substituted into the URL; everything else becomes the query string (GET/DELETE) or JSON body (POST/PUT). Every call resolves to the standard OASIS envelope:

```ts
{
  isError: boolean;
  isWarning: boolean;
  message: string;
  errorCode?: string;
  result: T; // see each endpoint's Response section below
}
```

## Operations

### `addItemToInventory`

Adds an item to the avatar's inventory. Accepts InventoryItem object directly (ASP.NET Core automatically deserializes JSON). Delegates to WEB4 OASIS API.

**POST** `api/avatar/inventory`

**Request**

Body type: `InventoryItem`

| Field | Type |
| --- | --- |
| `Image2D` | `byte[]` |
| `Image2DURI` | `Uri` |
| `ThumbnailUrl` | `string` |
| `Object3D` | `byte[]` |
| `Object3DURI` | `Uri` |
| `Quantity` | `int` |
| `Stack` | `bool` |
| `GameSource` | `string` |
| `ItemType` | `string` |
| `NftId` | `string` |
| `InventoryItemType` | `InventoryItemType` |
| `Rarity` | `string` |
| `MaxQuantity` | `int` |
| `Weight` | `float` |
| `IsUsable` | `bool` |
| `IsTradeable` | `bool` |
| `OwnerAvatarId` | `string` |
| `AcquiredOn` | `DateTime` |
| `LastUsedOn` | `DateTime` |
| `Properties` | `Dictionary<string, object>` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IActionResult` (not part of the request/response payload).

**Example**

```js
const { isError, message, result } = await star.avatar.addItemToInventory({
    image2D: "<base64-bytes>",
    image2DURI: "https://example.com/asset.png",
    thumbnailUrl: "example string",
    object3D: "<base64-bytes>",
    object3DURI: "https://example.com/asset.png",
    quantity: 1,
    stack: true,
    gameSource: "example string",
    itemType: "example string",
    nftId: "example string",
    inventoryItemType: {  },
    rarity: "example string",
    maxQuantity: 1,
    weight: 1.0,
    isUsable: true,
    isTradeable: true,
    ownerAvatarId: "example string",
    acquiredOn: "2026-01-01T00:00:00Z",
    lastUsedOn: "2026-01-01T00:00:00Z",
    properties: { "<string>": {} }
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": null
}
```

---

### `addXp`

Add experience points to the authenticated avatar (e.g. from game actions like killing monsters). Amount 0 is allowed (returns current XP without change; used to refresh cache after beam-in). Forwards to WEB4 OASIS API.

**POST** `api/avatar/add-xp`

**Request**

Body type: `AddXpRequest`

| Field | Type |
| --- | --- |
| `Amount` | `int` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IActionResult` (not part of the request/response payload).

**Example**

```js
const { isError, message, result } = await star.avatar.addXp({
    amount: 1
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": null
}
```

---

### `authenticate`

Authenticates with the WEB4 OASIS API and returns a JWT token for subsequent requests.

**POST** `api/avatar/authenticate`

**Request**

Body type: `AuthenticateRequest`

_No fields._

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IActionResult` (not part of the request/response payload).

**Example**

```js
const { isError, message, result } = await star.avatar.authenticate({});
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": null
}
```

---

### `getCurrentAvatar`

Gets the current authenticated avatar with XP and active quest/objective (for STAR client refresh). Delegates to WEB4 get-logged-in-avatar-with-xp so response includes AvatarDetail.XP, ActiveQuestId, ActiveObjectiveId.

**GET** `api/avatar/current`

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IActionResult` (not part of the request/response payload).

**Example**

```js
const { isError, message, result } = await star.avatar.getCurrentAvatar({});
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": null
}
```

---

### `getInventory`

Gets all inventory items owned by the authenticated avatar. This is the avatar's actual inventory (items they own), not items they created. Inventory is shared across all games, apps, websites, and services. Delegates to WEB4 OASIS API.

**GET** `api/avatar/inventory`

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IActionResult` (not part of the request/response payload).

**Example**

```js
const { isError, message, result } = await star.avatar.getInventory({});
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": null
}
```

---

### `getInventoryItem`

Gets a specific item from the avatar's inventory by ID. Delegates to WEB4 OASIS API.

**GET** `api/avatar/inventory/{itemId}`

Route parameters:

| Field | Type |
| --- | --- |
| `itemId` | `Guid` |

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IActionResult` (not part of the request/response payload).

**Example**

```js
const { isError, message, result } = await star.avatar.getInventoryItem({
    itemId: '<itemId>'
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": null
}
```

---

### `hasItem`

Checks if the avatar has a specific item in their inventory. Delegates to WEB4 OASIS API.

**GET** `api/avatar/inventory/{itemId}/has`

Route parameters:

| Field | Type |
| --- | --- |
| `itemId` | `Guid` |

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IActionResult` (not part of the request/response payload).

**Example**

```js
const { isError, message, result } = await star.avatar.hasItem({
    itemId: '<itemId>'
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": null
}
```

---

### `hasItemByName`

Checks if the avatar has a specific item by name in their inventory. Delegates to WEB4 OASIS API.

**GET** `api/avatar/inventory/has-by-name`

**Request**

Query parameters:

| Field | Type |
| --- | --- |
| `itemName` | `string` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IActionResult` (not part of the request/response payload).

**Example**

```js
const { isError, message, result } = await star.avatar.hasItemByName({
    itemName: 'example string'
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": null
}
```

---

### `removeItemFromInventory`

Removes an item from the avatar's inventory. Delegates to WEB4 OASIS API.

**DELETE** `api/avatar/inventory/{itemId}`

Route parameters:

| Field | Type |
| --- | --- |
| `itemId` | `Guid` |

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IActionResult` (not part of the request/response payload).

**Example**

```js
const { isError, message, result } = await star.avatar.removeItemFromInventory({
    itemId: '<itemId>'
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": null
}
```

---

### `searchInventory`

Searches the avatar's inventory by name or description. Delegates to WEB4 OASIS API.

**GET** `api/avatar/inventory/search`

**Request**

Query parameters:

| Field | Type |
| --- | --- |
| `searchTerm` | `string` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IActionResult` (not part of the request/response payload).

**Example**

```js
const { isError, message, result } = await star.avatar.searchInventory({
    searchTerm: 'example string'
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": null
}
```

---

### `sendItemToAvatar`

Sends an item from the authenticated avatar's inventory to another avatar. Target is the recipient's username or avatar Id. Forwards to WEB4 OASIS API.

**POST** `api/avatar/inventory/send-to-avatar`

**Request**

Body type: `SendItemRequest`

| Field | Type |
| --- | --- |
| `Target` | `string` |
| `ItemName` | `string` |
| `ItemId` | `Guid?` |
| `Quantity` | `int` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IActionResult` (not part of the request/response payload).

**Example**

```js
const { isError, message, result } = await star.avatar.sendItemToAvatar({
    target: "example string",
    itemName: "example string",
    itemId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    quantity: 1
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": null
}
```

---

### `sendItemToClan`

Sends an item from the authenticated avatar's inventory to a clan. Target is the clan name. Forwards to WEB4 OASIS API.

**POST** `api/avatar/inventory/send-to-clan`

**Request**

Body type: `SendItemRequest`

| Field | Type |
| --- | --- |
| `Target` | `string` |
| `ItemName` | `string` |
| `ItemId` | `Guid?` |
| `Quantity` | `int` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IActionResult` (not part of the request/response payload).

**Example**

```js
const { isError, message, result } = await star.avatar.sendItemToClan({
    target: "example string",
    itemName: "example string",
    itemId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    quantity: 1
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": null
}
```

---

### `setActiveQuest`

Sets the active quest and objective for the logged-in avatar (tracker state). Persisted on AvatarDetail; restored after beam-in. Forwards to WEB4.

**POST** `api/avatar/set-active-quest`

**Request**

Body type: `SetActiveQuestRequest`

| Field | Type |
| --- | --- |
| `ActiveQuestId` | `Guid?` |
| `ActiveObjectiveId` | `Guid?` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IActionResult` (not part of the request/response payload).

**Example**

```js
const { isError, message, result } = await star.avatar.setActiveQuest({
    activeQuestId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    activeObjectiveId: "3fa85f64-5717-4562-b3fc-2c963f66afa6"
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": null
}
```

