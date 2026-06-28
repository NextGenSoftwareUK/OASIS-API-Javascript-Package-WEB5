# Runtimes — `star.runtimes`

Source controller: [`RuntimesController.cs`](https://github.com/NextGenSoftwareUK/OASIS2/blob/main/STAR%20ODK/NextGenSoftware.OASIS.STAR.WebAPI/Controllers/RuntimesController.cs)
Route prefix: `api/runtimes`
24 operation(s).

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

### `activateRuntime`

Activates a runtime in the STARNET system.

**POST** `api/runtimes/{id}/activate`

Route parameters:

| Field | Type |
| --- | --- |
| `id` | `Guid` |

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IActionResult` (not part of the request/response payload).

**Example**

```js
const { isError, message, result } = await star.runtimes.activateRuntime({
    id: '<id>'
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

### `cloneRuntime`

**POST** `api/runtimes/{id}/clone`

Route parameters:

| Field | Type |
| --- | --- |
| `id` | `Guid` |

**Request**

Body type: `CloneRequest`

| Field | Type |
| --- | --- |
| `NewName` | `string` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IActionResult` (not part of the request/response payload).

**Example**

```js
const { isError, message, result } = await star.runtimes.cloneRuntime({
    id: '<id>',
    newName: "example string"
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

### `createRuntime`

Creates a new runtime for the authenticated avatar.

**POST** `api/runtimes`

**Request**

Body type: `CreateRuntimeRequest`

| Field | Type |
| --- | --- |
| `Name` | `string` |
| `Description` | `string` |
| `RuntimeType` | `string` |
| `Version` | `string` |
| `Category` | `string` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IActionResult` (not part of the request/response payload).

**Example**

```js
const { isError, message, result } = await star.runtimes.createRuntime({
    name: "example string",
    description: "example string",
    runtimeType: "example string",
    version: "example string",
    category: "example string"
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

### `createRuntimeWithOptions`

Creates a new runtime with specified parameters.

**POST** `api/runtimes/create`

**Request**

Body type: `CreateRuntimeWithOptionsRequest`

| Field | Type |
| --- | --- |
| `Name` | `string` |
| `Description` | `string` |
| `HolonSubType` | `HolonType` |
| `SourceFolderPath` | `string` |
| `CreateOptions` | `ISTARNETCreateOptions<Runtime, STARNETDNA>?` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IActionResult` (not part of the request/response payload).

**Example**

```js
const { isError, message, result } = await star.runtimes.createRuntimeWithOptions({
    name: "example string",
    description: "example string",
    holonSubType: {  },
    sourceFolderPath: "example string",
    createOptions: { "STARNETHolon": /* <T1> */, "STARNETDNA": /* <T2> */, "MetaTagMappings": { "MetaHolonTags": [{ "HolonName": "example string", "HolonType": {  }, "NodeName": "example string", "NodeType": { "Score": 1.0 }, "MetaTag": "example string" }], "MetaTags": { "<string>": "example string" } }, "CheckIfSourcePathExists": true, "CustomCreateParams": { "<string>": {} } }
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

### `deactivateRuntime`

Deactivates a runtime in the STARNET system.

**POST** `api/runtimes/{id}/deactivate`

Route parameters:

| Field | Type |
| --- | --- |
| `id` | `Guid` |

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IActionResult` (not part of the request/response payload).

**Example**

```js
const { isError, message, result } = await star.runtimes.deactivateRuntime({
    id: '<id>'
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

### `deleteRuntime`

**DELETE** `api/runtimes/{id}`

Route parameters:

| Field | Type |
| --- | --- |
| `id` | `Guid` |

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IActionResult` (not part of the request/response payload).

**Example**

```js
const { isError, message, result } = await star.runtimes.deleteRuntime({
    id: '<id>'
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

### `downloadRuntime`

Downloads a runtime from the STARNET system.

**POST** `api/runtimes/{id}/download`

Route parameters:

| Field | Type |
| --- | --- |
| `id` | `Guid` |

**Request**

Body type: `DownloadRuntimeRequest`

| Field | Type |
| --- | --- |
| `DestinationPath` | `string` |
| `Overwrite` | `bool` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IActionResult` (not part of the request/response payload).

**Example**

```js
const { isError, message, result } = await star.runtimes.downloadRuntime({
    id: '<id>',
    destinationPath: "example string",
    overwrite: true
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

### `editRuntime`

Edits a runtime with the provided changes.

**PUT** `api/runtimes/{id}/edit`

Route parameters:

| Field | Type |
| --- | --- |
| `id` | `Guid` |

**Request**

Body type: `EditRuntimeRequest`

| Field | Type |
| --- | --- |
| `NewDNA` | `STARNETDNA` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IActionResult` (not part of the request/response payload).

**Example**

```js
const { isError, message, result } = await star.runtimes.editRuntime({
    id: '<id>',
    newDNA: { "Id": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "Name": "example string", "Description": "example string", "STARNETHolonType": "example string", "STARNETCategory": {}, "STARNETSubCategory": {}, "Dependencies": { "OAPPs": [{ "Type": {  }, "HolonId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "STARNETHolonId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "Name": "example string", "Description": "example string", "Version": "example string", "VersionSequence": 1, "Install": true, "InstallMode": {  }, "InstalledFrom": "example string", "InstalledTo": "example string" }], "Runtimes": [], "Libraries": [], "Templates": [], "NFTs": [], "NFTCollections": [], "GeoNFTs": [], "GeoNFTCollections": [], "GeoHotSpots": [], "Quests": [], "Missions": [], "Chapters": [], "InventoryItems": [], "CelestialSpaces": [], "CelestialBodies": [], "Zomes": [], "Holons": [], "CelestialBodiesMetaDataDNA": [], "ZomesMetaDataDNA": [], "HolonsMetaDataDNA": [] }, "MetaData": { "<string>": {} }, "MetaHolonTagMappings": /* <>> */, "MetaTagMappings": { "<string>": "example string" }, "CreatedByAvatarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "CreatedByAvatarUsername": "example string", "CreatedOn": "2026-01-01T00:00:00Z", "SourcePath": "example string", "PublishedPath": "example string", "PublishedByAvatarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "PublishedByAvatarUsername": "example string", "PublishedOn": "2026-01-01T00:00:00Z", "LaunchTarget": "example string", "ModifiedByAvatarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ModifiedByAvatarUsername": "example string", "ModifiedOn": "2026-01-01T00:00:00Z", "PublishedOnSTARNET": true, "PublishedToCloud": true, "PublishedToPinata": true, "PinataIPFSHash": "example string", "PublishedProviderType": "example string", "FileSize": 1, "Version": "example string", "OASISRuntimeVersion": "example string", "OASISAPIVersion": "example string", "COSMICVersion": "example string", "STARRuntimeVersion": "example string", "STARODKVersion": "example string", "STARAPIVersion": "example string", "STARNETVersion": "example string", "DotNetVersion": "example string", "VersionSequence": 1, "Downloads": 1, "Installs": 1, "TotalDownloads": 1, "TotalInstalls": 1, "NumberOfVersions": 1 }
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

### `getAllRuntimes`

Retrieves all runtimes in the system.

**GET** `api/runtimes`

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IActionResult` (not part of the request/response payload).

**Example**

```js
const { isError, message, result } = await star.runtimes.getAllRuntimes({});
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

### `getRuntime`

Retrieves a specific runtime by its unique identifier.

**GET** `api/runtimes/{id}`

Route parameters:

| Field | Type |
| --- | --- |
| `id` | `Guid` |

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IActionResult` (not part of the request/response payload).

**Example**

```js
const { isError, message, result } = await star.runtimes.getRuntime({
    id: '<id>'
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

### `getRuntimeStatus`

**GET** `api/runtimes/{id}/status`

Route parameters:

| Field | Type |
| --- | --- |
| `id` | `Guid` |

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IActionResult` (not part of the request/response payload).

**Example**

```js
const { isError, message, result } = await star.runtimes.getRuntimeStatus({
    id: '<id>'
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

### `getRuntimeVersions`

Gets all versions of a runtime.

**GET** `api/runtimes/{id}/versions`

Route parameters:

| Field | Type |
| --- | --- |
| `id` | `Guid` |

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IActionResult` (not part of the request/response payload).

**Example**

```js
const { isError, message, result } = await star.runtimes.getRuntimeVersions({
    id: '<id>'
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

### `getRuntimesByType`

**GET** `api/runtimes/by-type/{type}`

Route parameters:

| Field | Type |
| --- | --- |
| `type` | `string` |

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IActionResult` (not part of the request/response payload).

**Example**

```js
const { isError, message, result } = await star.runtimes.getRuntimesByType({
    type: '<type>'
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

### `loadAllRuntimesForAvatar`

Loads all runtimes for the current avatar.

**GET** `api/runtimes/load-all-for-avatar`

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IActionResult` (not part of the request/response payload).

**Example**

```js
const { isError, message, result } = await star.runtimes.loadAllRuntimesForAvatar({});
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

### `loadRuntimeFromPath`

Loads a runtime from the specified path.

**GET** `api/runtimes/load-from-path`

**Request**

Query parameters:

| Field | Type |
| --- | --- |
| `path` | `string` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IActionResult` (not part of the request/response payload).

**Example**

```js
const { isError, message, result } = await star.runtimes.loadRuntimeFromPath({
    path: 'example string'
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

### `loadRuntimeFromPublished`

Loads a runtime from published sources.

**GET** `api/runtimes/load-from-published`

**Request**

Query parameters:

| Field | Type |
| --- | --- |
| `publishedFilePath` | `string` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IActionResult` (not part of the request/response payload).

**Example**

```js
const { isError, message, result } = await star.runtimes.loadRuntimeFromPublished({
    publishedFilePath: 'example string'
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

### `loadRuntimeVersion`

Loads a specific version of a runtime.

**GET** `api/runtimes/{id}/versions/{version}`

Route parameters:

| Field | Type |
| --- | --- |
| `id` | `Guid` |
| `version` | `string` |

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IActionResult` (not part of the request/response payload).

**Example**

```js
const { isError, message, result } = await star.runtimes.loadRuntimeVersion({
    id: '<id>',
    version: '<version>'
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

### `publishRuntime`

Publishes a runtime to the STARNET system with optional cloud upload.

**POST** `api/runtimes/{id}/publish`

Route parameters:

| Field | Type |
| --- | --- |
| `id` | `Guid` |

**Request**

Body type: `PublishRequest`

| Field | Type |
| --- | --- |
| `SourcePath` | `string` |
| `LaunchTarget` | `string` |
| `PublishPath` | `string` |
| `Edit` | `bool` |
| `RegisterOnSTARNET` | `bool` |
| `GenerateBinary` | `bool` |
| `UploadToCloud` | `bool` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IActionResult` (not part of the request/response payload).

**Example**

```js
const { isError, message, result } = await star.runtimes.publishRuntime({
    id: '<id>',
    sourcePath: "example string",
    launchTarget: "example string",
    publishPath: "example string",
    edit: true,
    registerOnSTARNET: true,
    generateBinary: true,
    uploadToCloud: true
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

### `republishRuntime`

Republishes a runtime to the STARNET system.

**POST** `api/runtimes/{id}/republish`

Route parameters:

| Field | Type |
| --- | --- |
| `id` | `Guid` |

**Request**

Body type: `PublishRequest`

| Field | Type |
| --- | --- |
| `SourcePath` | `string` |
| `LaunchTarget` | `string` |
| `PublishPath` | `string` |
| `Edit` | `bool` |
| `RegisterOnSTARNET` | `bool` |
| `GenerateBinary` | `bool` |
| `UploadToCloud` | `bool` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IActionResult` (not part of the request/response payload).

**Example**

```js
const { isError, message, result } = await star.runtimes.republishRuntime({
    id: '<id>',
    sourcePath: "example string",
    launchTarget: "example string",
    publishPath: "example string",
    edit: true,
    registerOnSTARNET: true,
    generateBinary: true,
    uploadToCloud: true
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

### `searchRuntimes`

**GET** `api/runtimes/search`

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
const { isError, message, result } = await star.runtimes.searchRuntimes({
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

### `startRuntime`

**POST** `api/runtimes/{id}/start`

Route parameters:

| Field | Type |
| --- | --- |
| `id` | `Guid` |

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IActionResult` (not part of the request/response payload).

**Example**

```js
const { isError, message, result } = await star.runtimes.startRuntime({
    id: '<id>'
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

### `stopRuntime`

**POST** `api/runtimes/{id}/stop`

Route parameters:

| Field | Type |
| --- | --- |
| `id` | `Guid` |

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IActionResult` (not part of the request/response payload).

**Example**

```js
const { isError, message, result } = await star.runtimes.stopRuntime({
    id: '<id>'
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

### `unpublishRuntime`

Unpublishes a runtime from the STARNET system.

**POST** `api/runtimes/{id}/unpublish`

Route parameters:

| Field | Type |
| --- | --- |
| `id` | `Guid` |

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IActionResult` (not part of the request/response payload).

**Example**

```js
const { isError, message, result } = await star.runtimes.unpublishRuntime({
    id: '<id>'
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

### `updateRuntime`

**PUT** `api/runtimes/{id}`

Route parameters:

| Field | Type |
| --- | --- |
| `id` | `Guid` |

**Request**

Body type: `UpdateRuntimeRequest`

| Field | Type |
| --- | --- |
| `Name` | `string?` |
| `Description` | `string?` |
| `Category` | `string?` |
| `Version` | `string?` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IActionResult` (not part of the request/response payload).

**Example**

```js
const { isError, message, result } = await star.runtimes.updateRuntime({
    id: '<id>',
    name: "example string",
    description: "example string",
    category: "example string",
    version: "example string"
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

