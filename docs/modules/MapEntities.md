# MapEntities — `oasis.mapEntities`

Source controller: [`MapEntitiesController.cs`](https://github.com/NextGenSoftwareUK/OASIS/blob/main/ONODE/NextGenSoftware.OASIS.API.ONODE.WebAPI/Controllers/MapEntitiesController.cs)
Route prefix: `api/maps`
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

### `getEntities`

Returns the entity list for the specified game map. Used by ogengine_get_map_entities() at map load time.

**GET** `api/maps/{game}/{map}/entities`

Route parameters:

| Field | Type |
| --- | --- |
| `game` | `string` |
| `map` | `string` |

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IActionResult` (not part of the request/response payload).

**Example**

```js
const { isError, message, result } = await oasis.mapEntities.getEntities({
    game: '<game>',
    map: '<map>'
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

### `putEntities`

Replaces the entity list for the specified map. The new list is stored as a Holon. Used by UDB map export / OASIS entity placement tools.

**PUT** `api/maps/{game}/{map}/entities`

Route parameters:

| Field | Type |
| --- | --- |
| `game` | `string` |
| `map` | `string` |

**Request**

Body type: `MapEntity` (array) _(type definition not found in the OASIS source - field list unavailable)_

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IActionResult` (not part of the request/response payload).

**Example**

```js
const { isError, message, result } = await oasis.mapEntities.putEntities({
    game: '<game>',
    map: '<map>',
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
  "result": null
}
```

