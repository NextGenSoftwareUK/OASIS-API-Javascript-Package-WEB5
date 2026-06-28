# STAR — `star.sTAR`

Source controller: [`STARController.cs`](https://github.com/NextGenSoftwareUK/OASIS2/blob/main/STAR%20ODK/NextGenSoftware.OASIS.STAR.WebAPI/Controllers/STARController.cs)
Route prefix: `api/sTAR`
4 operation(s).

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

### `beamIn`

Beams in (authenticates) an avatar to the STAR system.

**POST** `api/sTAR/beam-in`

**Request**

Body type: `BeamInRequest`

| Field | Type |
| --- | --- |
| `Username` | `string` |
| `Password` | `string` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IActionResult` (not part of the request/response payload).

**Example**

```js
const { isError, message, result } = await star.sTAR.beamIn({
    username: "example string",
    password: "example string"
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

### `extinguishSTAR`

Extinguishes (stops) the STAR system.

**POST** `api/sTAR/extinguish`

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IActionResult` (not part of the request/response payload).

**Example**

```js
const { isError, message, result } = await star.sTAR.extinguishSTAR({});
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

### `getStatus`

Retrieves the current status of the STAR system.

**GET** `api/sTAR/status`

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `object`

**Example**

```js
const { isError, message, result } = await star.sTAR.getStatus({});
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

### `igniteSTAR`

Ignites (starts) the STAR system with optional authentication credentials.

**POST** `api/sTAR/ignite`

**Request**

Body type: `IgniteRequest`

| Field | Type |
| --- | --- |
| `UserName` | `string` |
| `Password` | `string` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IActionResult` (not part of the request/response payload).

**Example**

```js
const { isError, message, result } = await star.sTAR.igniteSTAR({
    userName: "example string",
    password: "example string"
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

