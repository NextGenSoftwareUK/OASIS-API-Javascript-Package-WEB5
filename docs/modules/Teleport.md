# Teleport — `star.teleport`

Source controller: [`TeleportController.cs`](https://github.com/NextGenSoftwareUK/OASIS/blob/main/STAR ODK/NextGenSoftware.OASIS.STAR.WebAPI/Controllers/TeleportController.cs)
Route prefix: `api/teleport`
2 operation(s).

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

### `getPendingTeleport`

Returns and removes the pending teleport request for the given avatarId, or 204 if none exists. Games should poll this on map load or at an interval to detect incoming cross-game teleports.

**GET** `api/teleport/pending`

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `TeleportRequest`

_No fields._

**Example**

```js
const { isError, message, result } = await star.teleport.getPendingTeleport({});
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": {  }
}
```

---

### `recordTeleport`

Records a cross-game teleport request for the given avatar. The target game will pick this up via GET api/teleport/pending.

**POST** `api/teleport`

**Request**

Body type: `TeleportRequest`

_No fields._

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `object`

**Example**

```js
const { isError, message, result } = await star.teleport.recordTeleport({});
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": {}
}
```

