# OAssets — `star.oAssets`

Source controller: [`OAssetsController.cs`](https://github.com/NextGenSoftwareUK/OASIS/blob/main/STAR ODK/NextGenSoftware.OASIS.STAR.WebAPI/Controllers/OAssetsController.cs)
Route prefix: `api/oAssets`
1 operation(s).

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

### `getAssets`

Returns all OASIS game assets, optionally filtered by gameId. OQUAKE2-RTX → aliased to OQUAKE2; ODUKE3D-RT → ODUKE3D; ODOOM3-BFG → ODOOM3.

**GET** `api/oAssets`

**Request**

Query parameters:

| Field | Type |
| --- | --- |
| `gameId` | `string (optional)` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `object`

**Example**

```js
const { isError, message, result } = await star.oAssets.getAssets({
    gameId: 'example string'
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

