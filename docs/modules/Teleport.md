# Teleport — `oasis.teleport`

Source controller: [`TeleportController.cs`](https://github.com/NextGenSoftwareUK/OASIS/blob/main/ONODE/NextGenSoftware.OASIS.API.ONODE.WebAPI/Controllers/TeleportController.cs)
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

`result` type: `TeleportRequest` _(type definition not found in the OASIS source - field list unavailable)_

**Example**

```js
const { isError, message, result } = await oasis.teleport.getPendingTeleport({});
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": /* <TeleportRequest> */
}
```

---

### `recordTeleport`

Records a cross-game teleport request for the given avatar. The target game will pick this up via GET api/teleport/pending.

**POST** `api/teleport`

**Request**

Body type: `TeleportRequest` _(type definition not found in the OASIS source - field list unavailable)_

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `object`

**Example**

```js
const { isError, message, result } = await oasis.teleport.recordTeleport({
    /* ...request body fields */
  });
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

