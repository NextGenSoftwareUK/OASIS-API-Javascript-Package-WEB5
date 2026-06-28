# HolonsMetaData — `star.holonsMetaData`

Source controller: [`HolonsMetaDataController.cs`](https://github.com/NextGenSoftwareUK/OASIS2/blob/main/STAR%20ODK/NextGenSoftware.OASIS.STAR.WebAPI/Controllers/HolonsMetaDataController.cs)
Route prefix: `api/holonsMetaData`
20 operation(s).

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

### `activateHolonMetaData`

Activates a Holon Metadata.

**POST** `api/holonsMetaData/{id}/activate`

Route parameters:

| Field | Type |
| --- | --- |
| `id` | `Guid` |

**Request**

Body fields:

| Field | Type |
| --- | --- |
| `version` | `int (optional)` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IActionResult` (not part of the request/response payload).

**Example**

```js
const { isError, message, result } = await star.holonsMetaData.activateHolonMetaData({
    id: '<id>',
    version: 1
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

### `cloneHolonMetaData`

Clones an existing Holon Metadata.

**POST** `api/holonsMetaData/{id}/clone`

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
const { isError, message, result } = await star.holonsMetaData.cloneHolonMetaData({
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

### `createHolonMetaData`

Creates a new Holon Metadata for the authenticated avatar.

**POST** `api/holonsMetaData`

**Request**

Body type: `HolonMetaDataDNA`

_No fields._

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IActionResult` (not part of the request/response payload).

**Example**

```js
const { isError, message, result } = await star.holonsMetaData.createHolonMetaData({});
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

### `createHolonMetaDataWithOptions`

Creates a new Holon Metadata with advanced options.

**POST** `api/holonsMetaData/create`

**Request**

Body type: `CreateHolonMetaDataRequest`

| Field | Type |
| --- | --- |
| `Name` | `string` |
| `Description` | `string` |
| `HolonSubType` | `HolonType` |
| `SourceFolderPath` | `string` |
| `CreateOptions` | `ISTARNETCreateOptions<HolonMetaDataDNA, STARNETDNA>?` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IActionResult` (not part of the request/response payload).

**Example**

```js
const { isError, message, result } = await star.holonsMetaData.createHolonMetaDataWithOptions({
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

### `deactivateHolonMetaData`

Deactivates a Holon Metadata.

**POST** `api/holonsMetaData/{id}/deactivate`

Route parameters:

| Field | Type |
| --- | --- |
| `id` | `Guid` |

**Request**

Body fields:

| Field | Type |
| --- | --- |
| `version` | `int (optional)` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IActionResult` (not part of the request/response payload).

**Example**

```js
const { isError, message, result } = await star.holonsMetaData.deactivateHolonMetaData({
    id: '<id>',
    version: 1
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

### `deleteHolonMetaData`

Deletes a Holon Metadata.

**DELETE** `api/holonsMetaData/{id}`

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
const { isError, message, result } = await star.holonsMetaData.deleteHolonMetaData({
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

### `downloadHolonMetaData`

Downloads a Holon Metadata.

**POST** `api/holonsMetaData/{id}/download`

Route parameters:

| Field | Type |
| --- | --- |
| `id` | `Guid` |

**Request**

Body type: `DownloadHolonMetaDataRequest`

| Field | Type |
| --- | --- |
| `DestinationPath` | `string` |
| `Overwrite` | `bool` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IActionResult` (not part of the request/response payload).

**Example**

```js
const { isError, message, result } = await star.holonsMetaData.downloadHolonMetaData({
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

### `editHolonMetaData`

Edits a Holon Metadata.

**PUT** `api/holonsMetaData/{id}/edit`

Route parameters:

| Field | Type |
| --- | --- |
| `id` | `Guid` |

**Request**

Body type: `EditHolonMetaDataRequest`

| Field | Type |
| --- | --- |
| `NewDNA` | `STARNETDNA` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IActionResult` (not part of the request/response payload).

**Example**

```js
const { isError, message, result } = await star.holonsMetaData.editHolonMetaData({
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

### `getAllHolonsMetaData`

Retrieves all Holons Metadata in the system.

**GET** `api/holonsMetaData`

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IActionResult` (not part of the request/response payload).

**Example**

```js
const { isError, message, result } = await star.holonsMetaData.getAllHolonsMetaData({});
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

### `getHolonMetaData`

Retrieves a specific Holon Metadata by its unique identifier.

**GET** `api/holonsMetaData/{id}`

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
const { isError, message, result } = await star.holonsMetaData.getHolonMetaData({
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

### `getHolonMetaDataVersions`

Retrieves all versions of a specific Holon Metadata.

**GET** `api/holonsMetaData/{id}/versions`

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
const { isError, message, result } = await star.holonsMetaData.getHolonMetaDataVersions({
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

### `loadAllHolonMetaDataForAvatar`

Loads all Holons Metadata for the current avatar.

**GET** `api/holonsMetaData/load-all-for-avatar`

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IActionResult` (not part of the request/response payload).

**Example**

```js
const { isError, message, result } = await star.holonsMetaData.loadAllHolonMetaDataForAvatar({});
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

### `loadHolonMetaDataFromPath`

Loads a Holon Metadata from a file path.

**GET** `api/holonsMetaData/load-from-path`

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
const { isError, message, result } = await star.holonsMetaData.loadHolonMetaDataFromPath({
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

### `loadHolonMetaDataFromPublished`

Loads a Holon Metadata from a published file.

**GET** `api/holonsMetaData/load-from-published`

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
const { isError, message, result } = await star.holonsMetaData.loadHolonMetaDataFromPublished({
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

### `loadHolonMetaDataVersion`

Loads a specific version of a Holon Metadata.

**GET** `api/holonsMetaData/{id}/versions/{version}`

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
const { isError, message, result } = await star.holonsMetaData.loadHolonMetaDataVersion({
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

### `publishHolonMetaData`

Publishes a Holon Metadata to the STARNET.

**POST** `api/holonsMetaData/{id}/publish`

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
const { isError, message, result } = await star.holonsMetaData.publishHolonMetaData({
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

### `republishHolonMetaData`

Republishes a Holon Metadata.

**POST** `api/holonsMetaData/{id}/republish`

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
const { isError, message, result } = await star.holonsMetaData.republishHolonMetaData({
    id: '<id>',
    version: 1,
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

### `searchHolonsMetaData`

Searches for Holons Metadata using advanced search criteria.

**POST** `api/holonsMetaData/search`

**Request**

Body type: `SearchRequest`

| Field | Type |
| --- | --- |
| `SearchTerm` | `string` |
| `Filters` | `Dictionary<string, object>` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IActionResult` (not part of the request/response payload).

**Example**

```js
const { isError, message, result } = await star.holonsMetaData.searchHolonsMetaData({
    searchTerm: "example string",
    filters: { "<string>": {} }
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

### `unpublishHolonMetaData`

Unpublishes a Holon Metadata.

**POST** `api/holonsMetaData/{id}/unpublish`

Route parameters:

| Field | Type |
| --- | --- |
| `id` | `Guid` |

**Request**

Body fields:

| Field | Type |
| --- | --- |
| `version` | `int (optional)` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IActionResult` (not part of the request/response payload).

**Example**

```js
const { isError, message, result } = await star.holonsMetaData.unpublishHolonMetaData({
    id: '<id>',
    version: 1
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

### `updateHolonMetaData`

Updates an existing Holon Metadata.

**PUT** `api/holonsMetaData/{id}`

Route parameters:

| Field | Type |
| --- | --- |
| `id` | `Guid` |

**Request**

Body type: `HolonMetaDataDNA`

_No fields._

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IActionResult` (not part of the request/response payload).

**Example**

```js
const { isError, message, result } = await star.holonsMetaData.updateHolonMetaData({
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

