# Zomes — `star.zomes`

Source controller: [`ZomesController.cs`](https://github.com/NextGenSoftwareUK/OASIS2/blob/main/STAR%20ODK/NextGenSoftware.OASIS.STAR.WebAPI/Controllers/ZomesController.cs)
Route prefix: `api/zomes`
22 operation(s).

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

### `activateZome`

Activates a zome.

**POST** `api/zomes/{id}/activate`

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
const { isError, message, result } = await star.zomes.activateZome({
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

### `createZome`

Creates a new zome for the authenticated avatar.

**POST** `api/zomes`

**Request**

Body type: `STARZome`

| Field | Type |
| --- | --- |
| `ZomeType` | `ZomeType` |
| `Zome` | `IZome` |
| `ZomeId` | `Guid` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IActionResult` (not part of the request/response payload).

**Example**

```js
const { isError, message, result } = await star.zomes.createZome({
    zomeType: {  },
    zome: { "HoloNETClient": { "WebSocket": /* <WebSocket.WebSocket> */, "Logger": /* <ILogger> */, "HolochainVersion": {  } }, "ZomeName": "example string", "Holons": [{ "GlobalHolonData": {  }, "ProviderUniqueStorageKey": { "<ProviderType>": "example string" }, "ProviderMetaData": { "<ProviderType>": { "<string>": "example string" } }, "CustomKey": "example string", "IsNewHolon": true, "IsSaving": true, "PreviousVersionId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "PreviousVersionProviderUniqueStorageKey": { "<ProviderType>": "example string" }, "CreatedProviderType": { "Score": 1.0 }, "InstanceSavedOnProviderType": {}, "CreatedOASISType": { "Score": 1.0 }, "Nodes": [{ "Id": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "Parent": { "CreatedOASISType": {}, "CreatedProviderType": {}, "GlobalHolonData": {}, "InstanceSavedOnProviderType": {}, "IsChanged": true, "IsNewHolon": true, "IsSaving": true, "Original": {}, "PreviousVersionId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "PreviousVersionProviderUniqueStorageKey": { "<ProviderType>": "example string" }, "ProviderMetaData": { "<ProviderType>": { "<string>": "example string" } }, "ProviderUniqueStorageKey": { "<ProviderType>": "example string" }, "Nodes": [], "ParentOmniverseId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentOmniverse": { "GreatGrandSuperStar": {  }, "Dimensions": { "EighthDimension": {  }, "NinthDimension": {  }, "TenthDimension": {  }, "EleventhDimension": {  }, "TwelfthDimension": {  }, "CustomDimensions": [{ "DimensionLevel": {  } }] }, "Multiverses": [{ "GrandSuperStar": { "Stars": [ /* <I> */ ] }, "Dimensions": { "FirstDimension": { "Universe": { "Dimensions": [], "GalaxyClusters": [{ "Galaxies": [{ "SuperStar": { "Stars": [{ "Luminosity": 1, "StarType": {  }, "StarClassification": {  }, "StarBinaryType": {  } }] }, "SolarSystems": [{ "Star": {}, "Planets": [{ "Moons": [{  }] }], "Asteroids": [{  }], "Comets": [{  }], "Meteroids": [{  }] }], "Nebulas": [{  }], "Stars": [], "Planets": [], "Asteroids": [], "Comets": [], "Meteroids": [] }], "SolarSystems": [], "Stars": [], "Planets": [], "Asteroids": [], "Comets": [], "Meteroids": [], "IsSuperCluster": true }], "SolarSystems": [], "Nebulas": [], "Stars": [], "Planets": [], "Asteroids": [], "Comets": [], "Meteroids": [] } }, "SecondDimension": { "Universe": {} }, "ThirdDimension": { "UniversePrime": {}, "MagicVerse": {}, "ParallelUniverses": [] }, "FourthDimension": { "Universe": {} }, "FifthDimension": { "Universe": {} }, "SixthDimension": { "Universe": {} }, "SeventhDimension": { "Universe": {} }, "CustomDimensions": [] } }] }, "ParentMultiverseId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentMultiverse": {}, "ParentUniverseId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentUniverse": {}, "ParentDimensionId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentDimension": {}, "DimensionLevel": {}, "SubDimensionLevel": {  }, "ParentGalaxyClusterId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentGalaxyCluster": {}, "ParentGalaxyId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentGalaxy": {}, "ParentSolarSystemId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentSolarSystem": {}, "ParentGreatGrandSuperStarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentGreatGrandSuperStar": {}, "ParentGrandSuperStarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentGrandSuperStar": {}, "ParentSuperStarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentSuperStar": {}, "ParentStarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentStar": {}, "ParentPlanetId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentPlanet": {}, "ParentMoonId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentMoon": {}, "ParentCelestialSpaceId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentCelestialSpace": { "NearestStar": {}, "CelestialBodies": /* <ReadOnlyCollection<ICelestialBody>> */, "CelestialSpaces": /* <ReadOnlyCollection<ICelestialSpace>> */, "Children": /* <new ReadOnlyCollection<IHolon>> */ }, "ParentCelestialBodyId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentCelestialBody": { "CelestialBodyCore": { "Holons": [], "Zomes": [] }, "CurrentOrbitAngleOfParentStar": 1, "Density": 1, "DistanceFromParentStarInMetres": 1, "GravitaionalPull": 1, "Id": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "Mass": 1, "NumberActiveAvatars": 1, "NumberRegisteredAvatars": 1, "OrbitPeriod": 1, "OrbitPositionFromParentStar": 1, "ProviderUniqueStorageKey": { "<ProviderType>": "example string" }, "RotationPeriod": 1, "RotationSpeed": 1, "TiltAngle": 1, "Weight": 1 }, "ParentZomeId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentZome": {} }, "NodeName": "example string", "NodeType": {  } }], "ParentOmniverseId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentOmniverse": {}, "ParentMultiverseId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentMultiverse": {}, "ParentUniverseId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentUniverse": {}, "ParentDimensionId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentDimension": {}, "DimensionLevel": {}, "SubDimensionLevel": {}, "ParentGalaxyClusterId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentGalaxyCluster": {}, "ParentGalaxyId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentGalaxy": {}, "ParentSolarSystemId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentSolarSystem": {}, "ParentGreatGrandSuperStarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentGreatGrandSuperStar": {}, "ParentGrandSuperStarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentGrandSuperStar": {}, "ParentSuperStarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentSuperStar": {}, "ParentStarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentStar": {}, "ParentPlanetId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentPlanet": {}, "ParentMoonId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentMoon": {}, "ParentCelestialSpaceId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentCelestialSpace": {}, "ParentCelestialBodyId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentCelestialBody": {}, "ParentZomeId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentZome": {} }] },
    zomeId: "3fa85f64-5717-4562-b3fc-2c963f66afa6"
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

### `createZomeWithOptions`

Creates a new zome with specified parameters.

**POST** `api/zomes/create`

**Request**

Body type: `CreateZomeRequest`

| Field | Type |
| --- | --- |
| `Name` | `string` |
| `Description` | `string` |
| `HolonSubType` | `HolonType` |
| `SourceFolderPath` | `string` |
| `CreateOptions` | `ISTARNETCreateOptions<STARZome, STARNETDNA>` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IActionResult` (not part of the request/response payload).

**Example**

```js
const { isError, message, result } = await star.zomes.createZomeWithOptions({
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

### `deactivateZome`

Deactivates a zome.

**POST** `api/zomes/{id}/deactivate`

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
const { isError, message, result } = await star.zomes.deactivateZome({
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

### `deleteZome`

**DELETE** `api/zomes/{id}`

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
const { isError, message, result } = await star.zomes.deleteZome({
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

### `downloadZome`

Downloads a zome from the STARNET system.

**POST** `api/zomes/{id}/download`

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
const { isError, message, result } = await star.zomes.downloadZome({
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

### `editZome`

Edits a zome with new DNA configuration.

**POST** `api/zomes/{id}/edit`

Route parameters:

| Field | Type |
| --- | --- |
| `id` | `Guid` |

**Request**

Body type: `EditZomeRequest`

| Field | Type |
| --- | --- |
| `NewDNA` | `STARNETDNA` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IActionResult` (not part of the request/response payload).

**Example**

```js
const { isError, message, result } = await star.zomes.editZome({
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

### `getAllZomes`

Retrieves all zomes in the system.

**GET** `api/zomes`

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IActionResult` (not part of the request/response payload).

**Example**

```js
const { isError, message, result } = await star.zomes.getAllZomes({});
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

### `getZome`

Retrieves a specific zome by its unique identifier.

**GET** `api/zomes/{id}`

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
const { isError, message, result } = await star.zomes.getZome({
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

### `getZomeVersions`

Gets all versions of a specific zome.

**GET** `api/zomes/{id}/versions`

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
const { isError, message, result } = await star.zomes.getZomeVersions({
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

### `getZomesByType`

**GET** `api/zomes/by-type/{type}`

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
const { isError, message, result } = await star.zomes.getZomesByType({
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

### `getZomesInSpace`

**GET** `api/zomes/in-space/{spaceId}`

Route parameters:

| Field | Type |
| --- | --- |
| `spaceId` | `Guid` |

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IActionResult` (not part of the request/response payload).

**Example**

```js
const { isError, message, result } = await star.zomes.getZomesInSpace({
    spaceId: '<spaceId>'
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

### `loadAllZomesForAvatar`

Loads all zomes for the authenticated avatar.

**GET** `api/zomes/load-all-for-avatar`

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
const { isError, message, result } = await star.zomes.loadAllZomesForAvatar({
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

### `loadZome`

Loads a zome by ID with optional version and holon type.

**GET** `api/zomes/{id}/load`

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
const { isError, message, result } = await star.zomes.loadZome({
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

### `loadZomeFromPath`

Loads a zome from source or installed folder path.

**GET** `api/zomes/load-from-path`

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
const { isError, message, result } = await star.zomes.loadZomeFromPath({
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

### `loadZomeFromPublished`

Loads a zome from a published file.

**GET** `api/zomes/load-from-published`

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
const { isError, message, result } = await star.zomes.loadZomeFromPublished({
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

### `loadZomeVersion`

Loads a specific version of a zome.

**GET** `api/zomes/{id}/version/{version}`

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
const { isError, message, result } = await star.zomes.loadZomeVersion({
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

### `publishZome`

Publishes a zome to the STARNET system.

**POST** `api/zomes/{id}/publish`

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
const { isError, message, result } = await star.zomes.publishZome({
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

### `republishZome`

Republishes a zome to the STARNET system.

**POST** `api/zomes/{id}/republish`

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
const { isError, message, result } = await star.zomes.republishZome({
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

### `searchZomes`

Searches for zomes by name or description.

**GET** `api/zomes/search`

**Request**

Query parameters:

| Field | Type |
| --- | --- |
| `searchTerm` | `string` |
| `searchOnlyForCurrentAvatar` | `bool (optional)` |
| `showAllVersions` | `bool (optional)` |
| `version` | `int (optional)` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IActionResult` (not part of the request/response payload).

**Example**

```js
const { isError, message, result } = await star.zomes.searchZomes({
    searchTerm: 'example string',
    searchOnlyForCurrentAvatar: true,
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

### `unpublishZome`

Unpublishes a zome from the STARNET system.

**POST** `api/zomes/{id}/unpublish`

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
const { isError, message, result } = await star.zomes.unpublishZome({
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

### `updateZome`

**PUT** `api/zomes/{id}`

Route parameters:

| Field | Type |
| --- | --- |
| `id` | `Guid` |

**Request**

Body type: `STARZome`

| Field | Type |
| --- | --- |
| `ZomeType` | `ZomeType` |
| `Zome` | `IZome` |
| `ZomeId` | `Guid` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IActionResult` (not part of the request/response payload).

**Example**

```js
const { isError, message, result } = await star.zomes.updateZome({
    id: '<id>',
    zomeType: {  },
    zome: { "HoloNETClient": { "WebSocket": /* <WebSocket.WebSocket> */, "Logger": /* <ILogger> */, "HolochainVersion": {  } }, "ZomeName": "example string", "Holons": [{ "GlobalHolonData": {  }, "ProviderUniqueStorageKey": { "<ProviderType>": "example string" }, "ProviderMetaData": { "<ProviderType>": { "<string>": "example string" } }, "CustomKey": "example string", "IsNewHolon": true, "IsSaving": true, "PreviousVersionId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "PreviousVersionProviderUniqueStorageKey": { "<ProviderType>": "example string" }, "CreatedProviderType": { "Score": 1.0 }, "InstanceSavedOnProviderType": {}, "CreatedOASISType": { "Score": 1.0 }, "Nodes": [{ "Id": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "Parent": { "CreatedOASISType": {}, "CreatedProviderType": {}, "GlobalHolonData": {}, "InstanceSavedOnProviderType": {}, "IsChanged": true, "IsNewHolon": true, "IsSaving": true, "Original": {}, "PreviousVersionId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "PreviousVersionProviderUniqueStorageKey": { "<ProviderType>": "example string" }, "ProviderMetaData": { "<ProviderType>": { "<string>": "example string" } }, "ProviderUniqueStorageKey": { "<ProviderType>": "example string" }, "Nodes": [], "ParentOmniverseId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentOmniverse": { "GreatGrandSuperStar": {  }, "Dimensions": { "EighthDimension": {  }, "NinthDimension": {  }, "TenthDimension": {  }, "EleventhDimension": {  }, "TwelfthDimension": {  }, "CustomDimensions": [{ "DimensionLevel": {  } }] }, "Multiverses": [{ "GrandSuperStar": { "Stars": [ /* <I> */ ] }, "Dimensions": { "FirstDimension": { "Universe": { "Dimensions": [], "GalaxyClusters": [{ "Galaxies": [{ "SuperStar": { "Stars": [{ "Luminosity": 1, "StarType": {  }, "StarClassification": {  }, "StarBinaryType": {  } }] }, "SolarSystems": [{ "Star": {}, "Planets": [{ "Moons": [{  }] }], "Asteroids": [{  }], "Comets": [{  }], "Meteroids": [{  }] }], "Nebulas": [{  }], "Stars": [], "Planets": [], "Asteroids": [], "Comets": [], "Meteroids": [] }], "SolarSystems": [], "Stars": [], "Planets": [], "Asteroids": [], "Comets": [], "Meteroids": [], "IsSuperCluster": true }], "SolarSystems": [], "Nebulas": [], "Stars": [], "Planets": [], "Asteroids": [], "Comets": [], "Meteroids": [] } }, "SecondDimension": { "Universe": {} }, "ThirdDimension": { "UniversePrime": {}, "MagicVerse": {}, "ParallelUniverses": [] }, "FourthDimension": { "Universe": {} }, "FifthDimension": { "Universe": {} }, "SixthDimension": { "Universe": {} }, "SeventhDimension": { "Universe": {} }, "CustomDimensions": [] } }] }, "ParentMultiverseId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentMultiverse": {}, "ParentUniverseId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentUniverse": {}, "ParentDimensionId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentDimension": {}, "DimensionLevel": {}, "SubDimensionLevel": {  }, "ParentGalaxyClusterId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentGalaxyCluster": {}, "ParentGalaxyId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentGalaxy": {}, "ParentSolarSystemId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentSolarSystem": {}, "ParentGreatGrandSuperStarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentGreatGrandSuperStar": {}, "ParentGrandSuperStarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentGrandSuperStar": {}, "ParentSuperStarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentSuperStar": {}, "ParentStarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentStar": {}, "ParentPlanetId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentPlanet": {}, "ParentMoonId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentMoon": {}, "ParentCelestialSpaceId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentCelestialSpace": { "NearestStar": {}, "CelestialBodies": /* <ReadOnlyCollection<ICelestialBody>> */, "CelestialSpaces": /* <ReadOnlyCollection<ICelestialSpace>> */, "Children": /* <new ReadOnlyCollection<IHolon>> */ }, "ParentCelestialBodyId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentCelestialBody": { "CelestialBodyCore": { "Holons": [], "Zomes": [] }, "CurrentOrbitAngleOfParentStar": 1, "Density": 1, "DistanceFromParentStarInMetres": 1, "GravitaionalPull": 1, "Id": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "Mass": 1, "NumberActiveAvatars": 1, "NumberRegisteredAvatars": 1, "OrbitPeriod": 1, "OrbitPositionFromParentStar": 1, "ProviderUniqueStorageKey": { "<ProviderType>": "example string" }, "RotationPeriod": 1, "RotationSpeed": 1, "TiltAngle": 1, "Weight": 1 }, "ParentZomeId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentZome": {} }, "NodeName": "example string", "NodeType": {  } }], "ParentOmniverseId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentOmniverse": {}, "ParentMultiverseId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentMultiverse": {}, "ParentUniverseId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentUniverse": {}, "ParentDimensionId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentDimension": {}, "DimensionLevel": {}, "SubDimensionLevel": {}, "ParentGalaxyClusterId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentGalaxyCluster": {}, "ParentGalaxyId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentGalaxy": {}, "ParentSolarSystemId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentSolarSystem": {}, "ParentGreatGrandSuperStarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentGreatGrandSuperStar": {}, "ParentGrandSuperStarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentGrandSuperStar": {}, "ParentSuperStarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentSuperStar": {}, "ParentStarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentStar": {}, "ParentPlanetId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentPlanet": {}, "ParentMoonId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentMoon": {}, "ParentCelestialSpaceId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentCelestialSpace": {}, "ParentCelestialBodyId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentCelestialBody": {}, "ParentZomeId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentZome": {} }] },
    zomeId: "3fa85f64-5717-4562-b3fc-2c963f66afa6"
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

