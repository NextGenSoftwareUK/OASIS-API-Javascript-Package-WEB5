# Portals — `star.portals`

Source controller: [`PortalsController.cs`](https://github.com/NextGenSoftwareUK/OASIS/blob/main/STAR ODK/NextGenSoftware.OASIS.STAR.WebAPI/Controllers/PortalsController.cs)
Route prefix: `api/portals`
5 operation(s).

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

### `getAllPortals`

List all registered portals (both locked and unlocked).

**GET** `api/portals`

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `PortalRecord`

_No fields._

**Example**

```js
const { isError, message, result } = await star.portals.getAllPortals({});
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

### `getPortal`

Get a specific portal by ID.

**GET** `api/portals/{portalId}`

Route parameters:

| Field | Type |
| --- | --- |
| `portalId` | `string` |

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `PortalRecord`

_No fields._

**Example**

```js
const { isError, message, result } = await star.portals.getPortal({
    portalId: '<portalId>'
  });
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

### `lockPortal`

Reset (re-lock) a portal.  Use for testing or when a quest resets.

**POST** `api/portals/{portalId}/lock`

Route parameters:

| Field | Type |
| --- | --- |
| `portalId` | `string` |

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `object`

**Example**

```js
const { isError, message, result } = await star.portals.lockPortal({
    portalId: '<portalId>'
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

### `registerPortal`

Register or update a portal endpoint.  Games call this on map load so the registry always knows which portals exist across the omniverse.

**POST** `api/portals`

**Request**

Body type: `PortalRegistration`

_No fields._

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `object`

**Example**

```js
const { isError, message, result } = await star.portals.registerPortal({});
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

### `unlockPortal`

Mark a portal as unlocked.  Called by OGEditor/OmniverseKernel when it detects the oasis_portal_unlock_{portalId}.json IPC file written by ogengine_notify_portal_unlock.

**POST** `api/portals/{portalId}/unlock`

Route parameters:

| Field | Type |
| --- | --- |
| `portalId` | `string` |

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `object`

**Example**

```js
const { isError, message, result } = await star.portals.unlockPortal({
    portalId: '<portalId>'
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

