# GeoHotSpots — `star.geoHotSpots`

Source controller: [`GeoHotSpotsController.cs`](https://github.com/NextGenSoftwareUK/OASIS/blob/main/STAR%20ODK/NextGenSoftware.OASIS.STAR.WebAPI/Controllers/GeoHotSpotsController.cs)
Route prefix: `api/geoHotSpots`
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

### `activateGeoHotSpot`

Activates a geo hot spot.

**POST** `api/geoHotSpots/{id}/activate`

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
const { isError, message, result } = await star.geoHotSpots.activateGeoHotSpot({
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

### `createGeoHotSpot`

Creates a new geo hot spot for the authenticated avatar.

**POST** `api/geoHotSpots`

**Request**

Body type: `GeoHotSpot`

| Field | Type |
| --- | --- |
| `TriggerType` | `GeoHotSpotTriggeredType` |
| `TimeInSecondsNeedToBeAtLocationToTriggerHotSpot` | `int` |
| `Lat` | `double` |
| `Long` | `double` |
| `HotSpotRadiusInMetres` | `int` |
| `Object3D` | `byte[]` |
| `Object3DURI` | `Uri` |
| `Image2D` | `byte[]` |
| `Image2DURI` | `Uri` |
| `TimeInSecondsNeedToLookAt3DObjectOr2DImageToTriggerHotSpot` | `int` |
| `Rewards` | `IList<IInventoryItem>` |
| `RewardIds` | `IList<string>` |
| `AudioData` | `byte[]` |
| `AudioUrl` | `string` |
| `VideoData` | `byte[]` |
| `VideoUrl` | `string` |
| `TextContent` | `string` |
| `WebsiteUrl` | `string` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IActionResult` (not part of the request/response payload).

**Example**

```js
const { isError, message, result } = await star.geoHotSpots.createGeoHotSpot({
    triggerType: {  },
    timeInSecondsNeedToBeAtLocationToTriggerHotSpot: 1,
    lat: 1.0,
    long: 1.0,
    hotSpotRadiusInMetres: 1,
    object3D: "<base64-bytes>",
    object3DURI: "https://example.com/asset.png",
    image2D: "<base64-bytes>",
    image2DURI: "https://example.com/asset.png",
    timeInSecondsNeedToLookAt3DObjectOr2DImageToTriggerHotSpot: 1,
    rewards: [{ "Image2D": "<base64-bytes>", "Image2DURI": "https://example.com/asset.png", "ThumbnailUrl": "example string", "Object3D": "<base64-bytes>", "Object3DURI": "https://example.com/asset.png", "Quantity": 1, "Stack": true, "IsStackable": true, "GameSource": "example string", "ItemType": "example string", "NftId": "example string", "Rarity": "example string", "MaxQuantity": 1, "Weight": 1.0, "IsUsable": true, "IsTradeable": true, "OwnerAvatarId": "example string", "AcquiredOn": "2026-01-01T00:00:00Z", "LastUsedOn": "2026-01-01T00:00:00Z", "Properties": { "<string>": {} } }],
    rewardIds: ["example string"],
    audioData: "<base64-bytes>",
    audioUrl: "example string",
    videoData: "<base64-bytes>",
    videoUrl: "example string",
    textContent: "example string",
    websiteUrl: "example string"
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

### `createGeoHotSpotWithOptions`

Creates a new geo hot spot with specified parameters.

**POST** `api/geoHotSpots/create`

**Request**

Body type: `CreateGeoHotSpotRequest`

| Field | Type |
| --- | --- |
| `Name` | `string` |
| `Description` | `string` |
| `HolonSubType` | `HolonType` |
| `SourceFolderPath` | `string` |
| `CreateOptions` | `ISTARNETCreateOptions<GeoHotSpot, STARNETDNA>` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IActionResult` (not part of the request/response payload).

**Example**

```js
const { isError, message, result } = await star.geoHotSpots.createGeoHotSpotWithOptions({
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

### `deactivateGeoHotSpot`

Deactivates a geo hot spot.

**POST** `api/geoHotSpots/{id}/deactivate`

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
const { isError, message, result } = await star.geoHotSpots.deactivateGeoHotSpot({
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

### `deleteGeoHotSpot`

Deletes a geo hot spot by its unique identifier.

**DELETE** `api/geoHotSpots/{id}`

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
const { isError, message, result } = await star.geoHotSpots.deleteGeoHotSpot({
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

### `downloadGeoHotSpot`

Downloads a geo hot spot from the STARNET system.

**POST** `api/geoHotSpots/{id}/download`

Route parameters:

| Field | Type |
| --- | --- |
| `id` | `Guid` |

**Request**

Body fields:

| Field | Type |
| --- | --- |
| `version` | `int (optional)` |
| `downloadPath` | `string (optional)` |
| `reInstall` | `bool (optional)` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IActionResult` (not part of the request/response payload).

**Example**

```js
const { isError, message, result } = await star.geoHotSpots.downloadGeoHotSpot({
    id: '<id>',
    version: 1,
    downloadPath: 'example string',
    reInstall: true
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

### `editGeoHotSpot`

Edits a geo hot spot with new DNA configuration.

**POST** `api/geoHotSpots/{id}/edit`

Route parameters:

| Field | Type |
| --- | --- |
| `id` | `Guid` |

**Request**

Body type: `EditGeoHotSpotRequest`

| Field | Type |
| --- | --- |
| `NewDNA` | `STARNETDNA` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IActionResult` (not part of the request/response payload).

**Example**

```js
const { isError, message, result } = await star.geoHotSpots.editGeoHotSpot({
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

### `getAllGeoHotSpots`

Retrieves all geo hot spots in the system.

**GET** `api/geoHotSpots`

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IActionResult` (not part of the request/response payload).

**Example**

```js
const { isError, message, result } = await star.geoHotSpots.getAllGeoHotSpots({});
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

### `getGeoHotSpot`

Retrieves a specific geo hot spot by its unique identifier.

**GET** `api/geoHotSpots/{id}`

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
const { isError, message, result } = await star.geoHotSpots.getGeoHotSpot({
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

### `getGeoHotSpotVersions`

Gets all versions of a specific geo hot spot.

**GET** `api/geoHotSpots/{id}/versions`

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
const { isError, message, result } = await star.geoHotSpots.getGeoHotSpotVersions({
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

### `getNearbyGeoHotSpots`

Retrieves geo hot spots within a specified radius of given coordinates.

**GET** `api/geoHotSpots/nearby`

**Request**

Query parameters:

| Field | Type |
| --- | --- |
| `latitude` | `double` |
| `longitude` | `double` |
| `radiusKm` | `double (optional)` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IActionResult` (not part of the request/response payload).

**Example**

```js
const { isError, message, result } = await star.geoHotSpots.getNearbyGeoHotSpots({
    latitude: 1.0,
    longitude: 1.0,
    radiusKm: 1.0
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

### `loadAllGeoHotSpotsForAvatar`

Loads all geo hot spots for the authenticated avatar.

**GET** `api/geoHotSpots/load-all-for-avatar`

**Request**

Query parameters:

| Field | Type |
| --- | --- |
| `showAllVersions` | `bool (optional)` |
| `version` | `int (optional)` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IActionResult` (not part of the request/response payload).

**Example**

```js
const { isError, message, result } = await star.geoHotSpots.loadAllGeoHotSpotsForAvatar({
    showAllVersions: true,
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

### `loadGeoHotSpot`

Loads a geo hot spot by ID with optional version and holon type.

**GET** `api/geoHotSpots/{id}/load`

Route parameters:

| Field | Type |
| --- | --- |
| `id` | `Guid` |

**Request**

Query parameters:

| Field | Type |
| --- | --- |
| `version` | `int (optional)` |
| `holonType` | `string (optional)` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IActionResult` (not part of the request/response payload).

**Example**

```js
const { isError, message, result } = await star.geoHotSpots.loadGeoHotSpot({
    id: '<id>',
    version: 1,
    holonType: 'example string'
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

### `loadGeoHotSpotFromPath`

Loads a geo hot spot from source or installed folder path.

**GET** `api/geoHotSpots/load-from-path`

**Request**

Query parameters:

| Field | Type |
| --- | --- |
| `path` | `string` |
| `holonType` | `string (optional)` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IActionResult` (not part of the request/response payload).

**Example**

```js
const { isError, message, result } = await star.geoHotSpots.loadGeoHotSpotFromPath({
    path: 'example string',
    holonType: 'example string'
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

### `loadGeoHotSpotFromPublished`

Loads a geo hot spot from a published file.

**GET** `api/geoHotSpots/load-from-published`

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
const { isError, message, result } = await star.geoHotSpots.loadGeoHotSpotFromPublished({
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

### `loadGeoHotSpotVersion`

Loads a specific version of a geo hot spot.

**GET** `api/geoHotSpots/{id}/version/{version}`

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
const { isError, message, result } = await star.geoHotSpots.loadGeoHotSpotVersion({
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

### `publishGeoHotSpot`

Publishes a geo hot spot to the STARNET system.

**POST** `api/geoHotSpots/{id}/publish`

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
const { isError, message, result } = await star.geoHotSpots.publishGeoHotSpot({
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

### `republishGeoHotSpot`

Republishes a geo hot spot to the STARNET system.

**POST** `api/geoHotSpots/{id}/republish`

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
const { isError, message, result } = await star.geoHotSpots.republishGeoHotSpot({
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

### `unpublishGeoHotSpot`

Unpublishes a geo hot spot from the STARNET system.

**POST** `api/geoHotSpots/{id}/unpublish`

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
const { isError, message, result } = await star.geoHotSpots.unpublishGeoHotSpot({
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

### `updateGeoHotSpot`

Updates an existing geo hot spot by its unique identifier.

**PUT** `api/geoHotSpots/{id}`

Route parameters:

| Field | Type |
| --- | --- |
| `id` | `Guid` |

**Request**

Body type: `GeoHotSpot`

| Field | Type |
| --- | --- |
| `TriggerType` | `GeoHotSpotTriggeredType` |
| `TimeInSecondsNeedToBeAtLocationToTriggerHotSpot` | `int` |
| `Lat` | `double` |
| `Long` | `double` |
| `HotSpotRadiusInMetres` | `int` |
| `Object3D` | `byte[]` |
| `Object3DURI` | `Uri` |
| `Image2D` | `byte[]` |
| `Image2DURI` | `Uri` |
| `TimeInSecondsNeedToLookAt3DObjectOr2DImageToTriggerHotSpot` | `int` |
| `Rewards` | `IList<IInventoryItem>` |
| `RewardIds` | `IList<string>` |
| `AudioData` | `byte[]` |
| `AudioUrl` | `string` |
| `VideoData` | `byte[]` |
| `VideoUrl` | `string` |
| `TextContent` | `string` |
| `WebsiteUrl` | `string` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IActionResult` (not part of the request/response payload).

**Example**

```js
const { isError, message, result } = await star.geoHotSpots.updateGeoHotSpot({
    id: '<id>',
    triggerType: {  },
    timeInSecondsNeedToBeAtLocationToTriggerHotSpot: 1,
    lat: 1.0,
    long: 1.0,
    hotSpotRadiusInMetres: 1,
    object3D: "<base64-bytes>",
    object3DURI: "https://example.com/asset.png",
    image2D: "<base64-bytes>",
    image2DURI: "https://example.com/asset.png",
    timeInSecondsNeedToLookAt3DObjectOr2DImageToTriggerHotSpot: 1,
    rewards: [{ "Image2D": "<base64-bytes>", "Image2DURI": "https://example.com/asset.png", "ThumbnailUrl": "example string", "Object3D": "<base64-bytes>", "Object3DURI": "https://example.com/asset.png", "Quantity": 1, "Stack": true, "IsStackable": true, "GameSource": "example string", "ItemType": "example string", "NftId": "example string", "Rarity": "example string", "MaxQuantity": 1, "Weight": 1.0, "IsUsable": true, "IsTradeable": true, "OwnerAvatarId": "example string", "AcquiredOn": "2026-01-01T00:00:00Z", "LastUsedOn": "2026-01-01T00:00:00Z", "Properties": { "<string>": {} } }],
    rewardIds: ["example string"],
    audioData: "<base64-bytes>",
    audioUrl: "example string",
    videoData: "<base64-bytes>",
    videoUrl: "example string",
    textContent: "example string",
    websiteUrl: "example string"
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

