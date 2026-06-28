# Missions — `star.missions`

Source controller: [`MissionsController.cs`](https://github.com/NextGenSoftwareUK/OASIS2/blob/main/STAR%20ODK/NextGenSoftware.OASIS.STAR.WebAPI/Controllers/MissionsController.cs)
Route prefix: `api/missions`
27 operation(s).

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

### `activateMission`

Activates a mission.

**POST** `api/missions/{id}/activate`

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
const { isError, message, result } = await star.missions.activateMission({
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

### `cloneMission`

Clones an existing mission with a new name.

**POST** `api/missions/{id}/clone`

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
const { isError, message, result } = await star.missions.cloneMission({
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

### `completeMission`

Completes a mission for the authenticated avatar.

**POST** `api/missions/{id}/complete`

Route parameters:

| Field | Type |
| --- | --- |
| `id` | `Guid` |

**Request**

Body fields:

| Field | Type |
| --- | --- |
| `completionNotes` | `string (optional)` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IActionResult` (not part of the request/response payload).

**Example**

```js
const { isError, message, result } = await star.missions.completeMission({
    id: '<id>',
    completionNotes: 'example string'
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

### `createMission`

Creates a new mission for the authenticated avatar.

**POST** `api/missions`

**Request**

Body type: `IMission`

| Field | Type |
| --- | --- |
| `PublishedOn` | `DateTime` |
| `PublishedByAvatarId` | `Guid` |
| `PublishedByAvatar` | `IAvatar` |
| `Quests` | `IList<IQuest>` |
| `Chapters` | `IList<IChapter>` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IActionResult` (not part of the request/response payload).

**Example**

```js
const { isError, message, result } = await star.missions.createMission({
    publishedOn: "2026-01-01T00:00:00Z",
    publishedByAvatarId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    publishedByAvatar: { "ProviderWallets": { "<ProviderType>": [{ "AvatarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "WalletId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "Name": "example string", "Description": /* <new string> */, "PrivateKey": "example string", "PublicKey": "example string", "WalletAddress": "example string", "WalletAddressSegwitP2SH": "example string", "SecretRecoveryPhrase": "example string", "Transactions": [{ "TransactionId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "FromWalletAddress": "example string", "ToWalletAddress": "example string", "Amount": 1.0, "Description": "example string", "CreatedDate": "2026-01-01T00:00:00Z", "TransactionType": {  }, "TransactionCategory": {  } }], "ProviderType": {  }, "Balance": 1.0, "IsDefaultWallet": true }] }, "ProviderPrivateKey": { "<ProviderType>": "example string" }, "ProviderPublicKey": { "<ProviderType>": ["example string"] }, "ProviderUsername": { "<ProviderType>": "example string" }, "ProviderWalletAddress": { "<ProviderType>": ["example string"] }, "AvatarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "Title": "example string", "FirstName": "example string", "LastName": "example string", "FullName": "example string", "FullNameWithTitle": "example string", "Username": "example string", "Email": "example string", "Password": "example string", "AvatarType": { "Score": 1.0 }, "AcceptTerms": true, "IsVerified": true, "JwtToken": "example string", "PasswordReset": "2026-01-01T00:00:00Z", "RefreshToken": "example string", "RefreshTokens": [{ "Id": 1, "Avatar": {}, "Token": "example string", "Expires": "2026-01-01T00:00:00Z", "Created": "2026-01-01T00:00:00Z", "CreatedByIp": "example string", "Revoked": "2026-01-01T00:00:00Z", "RevokedByIp": "example string", "ReplacedByToken": "example string" }], "ResetToken": "example string", "ResetTokenExpires": "2026-01-01T00:00:00Z", "VerificationToken": "example string", "Verified": "2026-01-01T00:00:00Z", "LastBeamedIn": "2026-01-01T00:00:00Z", "LastBeamedOut": "2026-01-01T00:00:00Z", "IsBeamedIn": true, "Image2D": "example string", "Karma": 1, "Level": 1, "XP": 1 },
    quests: [{ "ParentMissionId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentQuestId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "QuestType": {  }, "GeoSpatialNFTIds": ["example string"], "GeoSpatialNFTs": [ /* <IOASISGeoSpatialNFT> */ ], "GeoHotSpotIds": ["example string"], "GeoHotSpots": [{ "TriggerType": {  }, "Lat": 1.0, "Long": 1.0, "HotSpotRadiusInMetres": 1, "TimeInSecondsNeedToBeAtLocationToTriggerHotSpot": 1, "TimeInSecondsNeedToLookAt3DObjectOr2DImageToTriggerHotSpot": 1, "Object3D": "<base64-bytes>", "Image2D": "<base64-bytes>", "Rewards": [{ "Image2D": "<base64-bytes>", "Image2DURI": "https://example.com/asset.png", "ThumbnailUrl": "example string", "Object3D": "<base64-bytes>", "Object3DURI": "https://example.com/asset.png", "Quantity": 1, "Stack": true, "IsStackable": true, "GameSource": "example string", "ItemType": "example string", "NftId": "example string", "Rarity": "example string", "MaxQuantity": 1, "Weight": 1.0, "IsUsable": true, "IsTradeable": true, "OwnerAvatarId": "example string", "AcquiredOn": "2026-01-01T00:00:00Z", "LastUsedOn": "2026-01-01T00:00:00Z", "Properties": { "<string>": {} } }], "AudioData": "<base64-bytes>", "AudioUrl": "example string", "VideoData": "<base64-bytes>", "VideoUrl": "example string", "TextContent": "example string", "WebsiteUrl": "example string" }], "CurrentSubQuest": {}, "CurrentSubQuestNumber": 1 }],
    chapters: [{ "ChapterDisplayName": "example string" }]
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

### `createMissionWithOptions`

Creates a new mission with specified parameters.

**POST** `api/missions/create`

**Request**

Body type: `CreateMissionRequest`

| Field | Type |
| --- | --- |
| `Name` | `string` |
| `Description` | `string` |
| `HolonSubType` | `HolonType` |
| `SourceFolderPath` | `string` |
| `CreateOptions` | `ISTARNETCreateOptions<Mission, STARNETDNA>` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IActionResult` (not part of the request/response payload).

**Example**

```js
const { isError, message, result } = await star.missions.createMissionWithOptions({
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

### `deactivateMission`

Deactivates a mission.

**POST** `api/missions/{id}/deactivate`

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
const { isError, message, result } = await star.missions.deactivateMission({
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

### `deleteMission`

Deletes a mission by its unique identifier.

**DELETE** `api/missions/{id}`

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
const { isError, message, result } = await star.missions.deleteMission({
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

### `downloadMission`

Downloads a mission from the STARNET system.

**POST** `api/missions/{id}/download`

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
const { isError, message, result } = await star.missions.downloadMission({
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

### `editMission`

Edits a mission with new DNA configuration.

**POST** `api/missions/{id}/edit`

Route parameters:

| Field | Type |
| --- | --- |
| `id` | `Guid` |

**Request**

Body type: `EditMissionRequest`

| Field | Type |
| --- | --- |
| `NewDNA` | `STARNETDNA` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IActionResult` (not part of the request/response payload).

**Example**

```js
const { isError, message, result } = await star.missions.editMission({
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

### `getAllMissions`

Retrieves all missions in the system.

**GET** `api/missions`

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IActionResult` (not part of the request/response payload).

**Example**

```js
const { isError, message, result } = await star.missions.getAllMissions({});
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

### `getMission`

Retrieves a specific mission by its unique identifier.

**GET** `api/missions/{id}`

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
const { isError, message, result } = await star.missions.getMission({
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

### `getMissionLeaderboard`

Gets mission leaderboard for a specific mission.

**GET** `api/missions/{id}/leaderboard`

Route parameters:

| Field | Type |
| --- | --- |
| `id` | `Guid` |

**Request**

Query parameters:

| Field | Type |
| --- | --- |
| `limit` | `int (optional)` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IActionResult` (not part of the request/response payload).

**Example**

```js
const { isError, message, result } = await star.missions.getMissionLeaderboard({
    id: '<id>',
    limit: 1
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

### `getMissionRewards`

Gets mission rewards for a specific mission.

**GET** `api/missions/{id}/rewards`

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
const { isError, message, result } = await star.missions.getMissionRewards({
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

### `getMissionStats`

Gets mission statistics for the authenticated avatar.

**GET** `api/missions/stats`

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IActionResult` (not part of the request/response payload).

**Example**

```js
const { isError, message, result } = await star.missions.getMissionStats({});
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

### `getMissionVersions`

Gets all versions of a specific mission.

**GET** `api/missions/{id}/versions`

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
const { isError, message, result } = await star.missions.getMissionVersions({
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

### `getMissionsByStatus`

Retrieves missions by status.

**GET** `api/missions/by-status/{status}`

Route parameters:

| Field | Type |
| --- | --- |
| `status` | `string` |

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IActionResult` (not part of the request/response payload).

**Example**

```js
const { isError, message, result } = await star.missions.getMissionsByStatus({
    status: '<status>'
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

### `getMissionsByType`

Retrieves missions by a specific type.

**GET** `api/missions/by-type/{type}`

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
const { isError, message, result } = await star.missions.getMissionsByType({
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

### `loadAllMissionsForAvatar`

Loads all missions for the authenticated avatar.

**GET** `api/missions/load-all-for-avatar`

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
const { isError, message, result } = await star.missions.loadAllMissionsForAvatar({
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

### `loadMission`

Loads a mission by ID with optional version and holon type.

**GET** `api/missions/{id}/load`

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
const { isError, message, result } = await star.missions.loadMission({
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

### `loadMissionFromPath`

Loads a mission from source or installed folder path.

**GET** `api/missions/load-from-path`

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
const { isError, message, result } = await star.missions.loadMissionFromPath({
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

### `loadMissionFromPublished`

Loads a mission from a published file.

**GET** `api/missions/load-from-published`

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
const { isError, message, result } = await star.missions.loadMissionFromPublished({
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

### `loadMissionVersion`

Loads a specific version of a mission.

**GET** `api/missions/{id}/version/{version}`

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
const { isError, message, result } = await star.missions.loadMissionVersion({
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

### `publishMission`

Publishes a mission to the STARNET system.

**POST** `api/missions/{id}/publish`

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
const { isError, message, result } = await star.missions.publishMission({
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

### `republishMission`

Republishes a mission to the STARNET system.

**POST** `api/missions/{id}/republish`

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
const { isError, message, result } = await star.missions.republishMission({
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

### `searchMissions`

Searches missions by name or description.

**GET** `api/missions/search`

**Request**

Query parameters:

| Field | Type |
| --- | --- |
| `query` | `string` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IActionResult` (not part of the request/response payload).

**Example**

```js
const { isError, message, result } = await star.missions.searchMissions({
    query: 'example string'
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

### `unpublishMission`

Unpublishes a mission from the STARNET system.

**POST** `api/missions/{id}/unpublish`

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
const { isError, message, result } = await star.missions.unpublishMission({
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

### `updateMission`

Updates an existing mission by its unique identifier.

**PUT** `api/missions/{id}`

Route parameters:

| Field | Type |
| --- | --- |
| `id` | `Guid` |

**Request**

Body type: `IMission`

| Field | Type |
| --- | --- |
| `PublishedOn` | `DateTime` |
| `PublishedByAvatarId` | `Guid` |
| `PublishedByAvatar` | `IAvatar` |
| `Quests` | `IList<IQuest>` |
| `Chapters` | `IList<IChapter>` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IActionResult` (not part of the request/response payload).

**Example**

```js
const { isError, message, result } = await star.missions.updateMission({
    id: '<id>',
    publishedOn: "2026-01-01T00:00:00Z",
    publishedByAvatarId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    publishedByAvatar: { "ProviderWallets": { "<ProviderType>": [{ "AvatarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "WalletId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "Name": "example string", "Description": /* <new string> */, "PrivateKey": "example string", "PublicKey": "example string", "WalletAddress": "example string", "WalletAddressSegwitP2SH": "example string", "SecretRecoveryPhrase": "example string", "Transactions": [{ "TransactionId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "FromWalletAddress": "example string", "ToWalletAddress": "example string", "Amount": 1.0, "Description": "example string", "CreatedDate": "2026-01-01T00:00:00Z", "TransactionType": {  }, "TransactionCategory": {  } }], "ProviderType": {  }, "Balance": 1.0, "IsDefaultWallet": true }] }, "ProviderPrivateKey": { "<ProviderType>": "example string" }, "ProviderPublicKey": { "<ProviderType>": ["example string"] }, "ProviderUsername": { "<ProviderType>": "example string" }, "ProviderWalletAddress": { "<ProviderType>": ["example string"] }, "AvatarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "Title": "example string", "FirstName": "example string", "LastName": "example string", "FullName": "example string", "FullNameWithTitle": "example string", "Username": "example string", "Email": "example string", "Password": "example string", "AvatarType": { "Score": 1.0 }, "AcceptTerms": true, "IsVerified": true, "JwtToken": "example string", "PasswordReset": "2026-01-01T00:00:00Z", "RefreshToken": "example string", "RefreshTokens": [{ "Id": 1, "Avatar": {}, "Token": "example string", "Expires": "2026-01-01T00:00:00Z", "Created": "2026-01-01T00:00:00Z", "CreatedByIp": "example string", "Revoked": "2026-01-01T00:00:00Z", "RevokedByIp": "example string", "ReplacedByToken": "example string" }], "ResetToken": "example string", "ResetTokenExpires": "2026-01-01T00:00:00Z", "VerificationToken": "example string", "Verified": "2026-01-01T00:00:00Z", "LastBeamedIn": "2026-01-01T00:00:00Z", "LastBeamedOut": "2026-01-01T00:00:00Z", "IsBeamedIn": true, "Image2D": "example string", "Karma": 1, "Level": 1, "XP": 1 },
    quests: [{ "ParentMissionId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentQuestId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "QuestType": {  }, "GeoSpatialNFTIds": ["example string"], "GeoSpatialNFTs": [ /* <IOASISGeoSpatialNFT> */ ], "GeoHotSpotIds": ["example string"], "GeoHotSpots": [{ "TriggerType": {  }, "Lat": 1.0, "Long": 1.0, "HotSpotRadiusInMetres": 1, "TimeInSecondsNeedToBeAtLocationToTriggerHotSpot": 1, "TimeInSecondsNeedToLookAt3DObjectOr2DImageToTriggerHotSpot": 1, "Object3D": "<base64-bytes>", "Image2D": "<base64-bytes>", "Rewards": [{ "Image2D": "<base64-bytes>", "Image2DURI": "https://example.com/asset.png", "ThumbnailUrl": "example string", "Object3D": "<base64-bytes>", "Object3DURI": "https://example.com/asset.png", "Quantity": 1, "Stack": true, "IsStackable": true, "GameSource": "example string", "ItemType": "example string", "NftId": "example string", "Rarity": "example string", "MaxQuantity": 1, "Weight": 1.0, "IsUsable": true, "IsTradeable": true, "OwnerAvatarId": "example string", "AcquiredOn": "2026-01-01T00:00:00Z", "LastUsedOn": "2026-01-01T00:00:00Z", "Properties": { "<string>": {} } }], "AudioData": "<base64-bytes>", "AudioUrl": "example string", "VideoData": "<base64-bytes>", "VideoUrl": "example string", "TextContent": "example string", "WebsiteUrl": "example string" }], "CurrentSubQuest": {}, "CurrentSubQuestNumber": 1 }],
    chapters: [{ "ChapterDisplayName": "example string" }]
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

