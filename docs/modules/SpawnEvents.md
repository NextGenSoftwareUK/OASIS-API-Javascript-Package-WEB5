# SpawnEvents — `oasis.spawnEvents`

Source controller: [`SpawnEventsController.cs`](https://github.com/NextGenSoftwareUK/OASIS/blob/main/ONODE/NextGenSoftware.OASIS.API.ONODE.WebAPI/Controllers/SpawnEventsController.cs)
Route prefix: `api/spawn-events`
3 operation(s).

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

### `confirmSpawn`

Acknowledges a completed entity spawn. No persistent state is updated; this endpoint exists for logging and future confirmation tracking.

**POST** `api/spawn-events/confirm`

**Request**

Body type: `SpawnConfirmRequest` _(type definition not found in the OASIS source - field list unavailable)_

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `object`

**Example**

```js
const { isError, message, result } = await oasis.spawnEvents.confirmSpawn({
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

---

### `getPendingSpawnEvent`

Pops and returns the next pending spawn event for the given game and avatar, or 204 if none.

**GET** `api/spawn-events/pending`

**Request**

Query parameters:

| Field | Type |
| --- | --- |
| `game` | `string` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `SpawnEvent` _(type definition not found in the OASIS source - field list unavailable)_

**Example**

```js
const { isError, message, result } = await oasis.spawnEvents.getPendingSpawnEvent({
    game: 'example string'
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": /* <SpawnEvent> */
}
```

---

### `queueSpawnEvent`

Queues a cross-game entity spawn event. The target game retrieves it via GET api/spawn-events/pending.

**POST** `api/spawn-events`

**Request**

Body type: `SpawnEvent` _(type definition not found in the OASIS source - field list unavailable)_

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `object`

**Example**

```js
const { isError, message, result } = await oasis.spawnEvents.queueSpawnEvent({
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

