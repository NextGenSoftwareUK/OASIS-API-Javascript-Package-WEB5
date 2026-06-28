# Holons — `star.holons`

Source controller: [`HolonsController.cs`](https://github.com/NextGenSoftwareUK/OASIS2/blob/main/STAR%20ODK/NextGenSoftware.OASIS.STAR.WebAPI/Controllers/HolonsController.cs)
Route prefix: `api/holons`
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

### `activateHolon`

Activates a holon.

**POST** `api/holons/{id}/activate`

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
const { isError, message, result } = await star.holons.activateHolon({
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

### `createHolon`

Creates a new holon for the authenticated avatar.

**POST** `api/holons`

**Request**

Body type: `STARHolon`

| Field | Type |
| --- | --- |
| `HolonType` | `new HolonType` |
| `Holon` | `IHolon` |
| `HolonId` | `Guid` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IActionResult` (not part of the request/response payload).

**Example**

```js
const { isError, message, result } = await star.holons.createHolon({
    holonType: /* <new HolonType> */,
    holon: { "CreatedOASISType": { "Score": 1.0 }, "CreatedProviderType": { "Score": 1.0 }, "GlobalHolonData": {  }, "InstanceSavedOnProviderType": {}, "IsChanged": true, "IsNewHolon": true, "IsSaving": true, "Original": {}, "PreviousVersionId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "PreviousVersionProviderUniqueStorageKey": { "<ProviderType>": "example string" }, "ProviderMetaData": { "<ProviderType>": { "<string>": "example string" } }, "ProviderUniqueStorageKey": { "<ProviderType>": "example string" }, "Nodes": [{ "Id": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "Parent": {}, "NodeName": "example string", "NodeType": {  } }], "ParentOmniverseId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentOmniverse": { "GreatGrandSuperStar": {  }, "Dimensions": { "EighthDimension": {  }, "NinthDimension": {  }, "TenthDimension": {  }, "EleventhDimension": {  }, "TwelfthDimension": {  }, "CustomDimensions": [{ "DimensionLevel": {  } }] }, "Multiverses": [{ "GrandSuperStar": { "Stars": [ /* <I> */ ] }, "Dimensions": { "FirstDimension": { "Universe": { "Dimensions": [], "GalaxyClusters": [{ "Galaxies": [{ "SuperStar": { "Stars": [{ "Luminosity": 1, "StarType": {  }, "StarClassification": {  }, "StarBinaryType": {  } }] }, "SolarSystems": [{ "Star": {}, "Planets": [{ "Moons": [{  }] }], "Asteroids": [{  }], "Comets": [{  }], "Meteroids": [{  }] }], "Nebulas": [{  }], "Stars": [], "Planets": [], "Asteroids": [], "Comets": [], "Meteroids": [] }], "SolarSystems": [], "Stars": [], "Planets": [], "Asteroids": [], "Comets": [], "Meteroids": [], "IsSuperCluster": true }], "SolarSystems": [], "Nebulas": [], "Stars": [], "Planets": [], "Asteroids": [], "Comets": [], "Meteroids": [] } }, "SecondDimension": { "Universe": {} }, "ThirdDimension": { "UniversePrime": {}, "MagicVerse": {}, "ParallelUniverses": [] }, "FourthDimension": { "Universe": {} }, "FifthDimension": { "Universe": {} }, "SixthDimension": { "Universe": {} }, "SeventhDimension": { "Universe": {} }, "CustomDimensions": [] } }] }, "ParentMultiverseId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentMultiverse": {}, "ParentUniverseId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentUniverse": {}, "ParentDimensionId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentDimension": {}, "DimensionLevel": {}, "SubDimensionLevel": {  }, "ParentGalaxyClusterId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentGalaxyCluster": {}, "ParentGalaxyId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentGalaxy": {}, "ParentSolarSystemId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentSolarSystem": {}, "ParentGreatGrandSuperStarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentGreatGrandSuperStar": {}, "ParentGrandSuperStarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentGrandSuperStar": {}, "ParentSuperStarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentSuperStar": {}, "ParentStarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentStar": {}, "ParentPlanetId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentPlanet": {}, "ParentMoonId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentMoon": {}, "ParentCelestialSpaceId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentCelestialSpace": { "NearestStar": {}, "CelestialBodies": /* <ReadOnlyCollection<ICelestialBody>> */, "CelestialSpaces": /* <ReadOnlyCollection<ICelestialSpace>> */, "Children": /* <new ReadOnlyCollection<IHolon>> */ }, "ParentCelestialBodyId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentCelestialBody": { "CelestialBodyCore": { "Holons": [], "Zomes": [{ "HoloNETClient": { "WebSocket": /* <WebSocket.WebSocket> */, "Logger": /* <ILogger> */, "HolochainVersion": {  } }, "ZomeName": "example string", "Holons": [{ "GlobalHolonData": {}, "ProviderUniqueStorageKey": { "<ProviderType>": "example string" }, "ProviderMetaData": { "<ProviderType>": { "<string>": "example string" } }, "CustomKey": "example string", "IsNewHolon": true, "IsSaving": true, "PreviousVersionId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "PreviousVersionProviderUniqueStorageKey": { "<ProviderType>": "example string" }, "CreatedProviderType": {}, "InstanceSavedOnProviderType": {}, "CreatedOASISType": {}, "Nodes": [], "ParentOmniverseId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentOmniverse": {}, "ParentMultiverseId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentMultiverse": {}, "ParentUniverseId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentUniverse": {}, "ParentDimensionId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentDimension": {}, "DimensionLevel": {}, "SubDimensionLevel": {}, "ParentGalaxyClusterId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentGalaxyCluster": {}, "ParentGalaxyId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentGalaxy": {}, "ParentSolarSystemId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentSolarSystem": {}, "ParentGreatGrandSuperStarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentGreatGrandSuperStar": {}, "ParentGrandSuperStarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentGrandSuperStar": {}, "ParentSuperStarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentSuperStar": {}, "ParentStarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentStar": {}, "ParentPlanetId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentPlanet": {}, "ParentMoonId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentMoon": {}, "ParentCelestialSpaceId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentCelestialSpace": {}, "ParentCelestialBodyId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentCelestialBody": {}, "ParentZomeId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentZome": {} }] }] }, "CurrentOrbitAngleOfParentStar": 1, "Density": 1, "DistanceFromParentStarInMetres": 1, "GravitaionalPull": 1, "Id": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "Mass": 1, "NumberActiveAvatars": 1, "NumberRegisteredAvatars": 1, "OrbitPeriod": 1, "OrbitPositionFromParentStar": 1, "ProviderUniqueStorageKey": { "<ProviderType>": "example string" }, "RotationPeriod": 1, "RotationSpeed": 1, "TiltAngle": 1, "Weight": 1 }, "ParentZomeId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentZome": {} },
    holonId: "3fa85f64-5717-4562-b3fc-2c963f66afa6"
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

### `createHolonWithOptions`

Creates a new holon with specified parameters.

**POST** `api/holons/create`

**Request**

Body type: `CreateHolonRequest`

| Field | Type |
| --- | --- |
| `Name` | `string` |
| `Description` | `string` |
| `HolonSubType` | `HolonType` |
| `SourceFolderPath` | `string` |
| `CreateOptions` | `ISTARNETCreateOptions<STARHolon, STARNETDNA>` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IActionResult` (not part of the request/response payload).

**Example**

```js
const { isError, message, result } = await star.holons.createHolonWithOptions({
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

### `deactivateHolon`

Deactivates a holon.

**POST** `api/holons/{id}/deactivate`

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
const { isError, message, result } = await star.holons.deactivateHolon({
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

### `deleteHolon`

Deletes a holon by its unique identifier.

**DELETE** `api/holons/{id}`

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
const { isError, message, result } = await star.holons.deleteHolon({
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

### `downloadHolon`

Downloads a holon from the STARNET system.

**POST** `api/holons/{id}/download`

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
const { isError, message, result } = await star.holons.downloadHolon({
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

### `editHolon`

Edits a holon with new DNA configuration.

**POST** `api/holons/{id}/edit`

Route parameters:

| Field | Type |
| --- | --- |
| `id` | `Guid` |

**Request**

Body type: `EditHolonRequest`

| Field | Type |
| --- | --- |
| `NewDNA` | `STARNETDNA` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IActionResult` (not part of the request/response payload).

**Example**

```js
const { isError, message, result } = await star.holons.editHolon({
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

### `getAllHolons`

Retrieves all holons in the system.

**GET** `api/holons`

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IActionResult` (not part of the request/response payload).

**Example**

```js
const { isError, message, result } = await star.holons.getAllHolons({});
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

### `getHolon`

Retrieves a specific holon by its unique identifier.

**GET** `api/holons/{id}`

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
const { isError, message, result } = await star.holons.getHolon({
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

### `getHolonVersions`

Gets all versions of a specific holon.

**GET** `api/holons/{id}/versions`

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
const { isError, message, result } = await star.holons.getHolonVersions({
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

### `getHolonsByMetadata`

Retrieves all holons that match specific metadata criteria.

**GET** `api/holons/by-metadata`

**Request**

Query parameters:

| Field | Type |
| --- | --- |
| `key` | `string` |
| `value` | `string` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IActionResult` (not part of the request/response payload).

**Example**

```js
const { isError, message, result } = await star.holons.getHolonsByMetadata({
    key: 'example string',
    value: 'example string'
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

### `getHolonsByParent`

Retrieves all holons that belong to a specific parent holon.

**GET** `api/holons/by-parent/{parentId}`

Route parameters:

| Field | Type |
| --- | --- |
| `parentId` | `Guid` |

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IActionResult` (not part of the request/response payload).

**Example**

```js
const { isError, message, result } = await star.holons.getHolonsByParent({
    parentId: '<parentId>'
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

### `getHolonsByStatus`

Retrieves holons by a specific status.

**GET** `api/holons/by-status/{status}`

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
const { isError, message, result } = await star.holons.getHolonsByStatus({
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

### `getHolonsByType`

Retrieves all holons of a specific type.

**GET** `api/holons/by-type/{type}`

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
const { isError, message, result } = await star.holons.getHolonsByType({
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

### `loadAllHolonsForAvatar`

Loads all holons for the authenticated avatar.

**GET** `api/holons/load-all-for-avatar`

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
const { isError, message, result } = await star.holons.loadAllHolonsForAvatar({
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

### `loadHolon`

Loads a holon by ID with optional version and holon type.

**GET** `api/holons/{id}/load`

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
const { isError, message, result } = await star.holons.loadHolon({
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

### `loadHolonFromPath`

Loads a holon from source or installed folder path.

**GET** `api/holons/load-from-path`

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
const { isError, message, result } = await star.holons.loadHolonFromPath({
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

### `loadHolonFromPublished`

Loads a holon from a published file.

**GET** `api/holons/load-from-published`

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
const { isError, message, result } = await star.holons.loadHolonFromPublished({
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

### `loadHolonVersion`

Loads a specific version of a holon.

**GET** `api/holons/{id}/version/{version}`

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
const { isError, message, result } = await star.holons.loadHolonVersion({
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

### `publishHolon`

Publishes a holon to the STARNET system.

**POST** `api/holons/{id}/publish`

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
const { isError, message, result } = await star.holons.publishHolon({
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

### `republishHolon`

Republishes a holon to the STARNET system.

**POST** `api/holons/{id}/republish`

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
const { isError, message, result } = await star.holons.republishHolon({
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

### `searchHolons`

Searches holons by name or description.

**GET** `api/holons/search`

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
const { isError, message, result } = await star.holons.searchHolons({
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

### `unpublishHolon`

Unpublishes a holon from the STARNET system.

**POST** `api/holons/{id}/unpublish`

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
const { isError, message, result } = await star.holons.unpublishHolon({
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

### `updateHolon`

Updates an existing holon by its unique identifier.

**PUT** `api/holons/{id}`

Route parameters:

| Field | Type |
| --- | --- |
| `id` | `Guid` |

**Request**

Body type: `STARHolon`

| Field | Type |
| --- | --- |
| `HolonType` | `new HolonType` |
| `Holon` | `IHolon` |
| `HolonId` | `Guid` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IActionResult` (not part of the request/response payload).

**Example**

```js
const { isError, message, result } = await star.holons.updateHolon({
    id: '<id>',
    holonType: /* <new HolonType> */,
    holon: { "CreatedOASISType": { "Score": 1.0 }, "CreatedProviderType": { "Score": 1.0 }, "GlobalHolonData": {  }, "InstanceSavedOnProviderType": {}, "IsChanged": true, "IsNewHolon": true, "IsSaving": true, "Original": {}, "PreviousVersionId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "PreviousVersionProviderUniqueStorageKey": { "<ProviderType>": "example string" }, "ProviderMetaData": { "<ProviderType>": { "<string>": "example string" } }, "ProviderUniqueStorageKey": { "<ProviderType>": "example string" }, "Nodes": [{ "Id": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "Parent": {}, "NodeName": "example string", "NodeType": {  } }], "ParentOmniverseId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentOmniverse": { "GreatGrandSuperStar": {  }, "Dimensions": { "EighthDimension": {  }, "NinthDimension": {  }, "TenthDimension": {  }, "EleventhDimension": {  }, "TwelfthDimension": {  }, "CustomDimensions": [{ "DimensionLevel": {  } }] }, "Multiverses": [{ "GrandSuperStar": { "Stars": [ /* <I> */ ] }, "Dimensions": { "FirstDimension": { "Universe": { "Dimensions": [], "GalaxyClusters": [{ "Galaxies": [{ "SuperStar": { "Stars": [{ "Luminosity": 1, "StarType": {  }, "StarClassification": {  }, "StarBinaryType": {  } }] }, "SolarSystems": [{ "Star": {}, "Planets": [{ "Moons": [{  }] }], "Asteroids": [{  }], "Comets": [{  }], "Meteroids": [{  }] }], "Nebulas": [{  }], "Stars": [], "Planets": [], "Asteroids": [], "Comets": [], "Meteroids": [] }], "SolarSystems": [], "Stars": [], "Planets": [], "Asteroids": [], "Comets": [], "Meteroids": [], "IsSuperCluster": true }], "SolarSystems": [], "Nebulas": [], "Stars": [], "Planets": [], "Asteroids": [], "Comets": [], "Meteroids": [] } }, "SecondDimension": { "Universe": {} }, "ThirdDimension": { "UniversePrime": {}, "MagicVerse": {}, "ParallelUniverses": [] }, "FourthDimension": { "Universe": {} }, "FifthDimension": { "Universe": {} }, "SixthDimension": { "Universe": {} }, "SeventhDimension": { "Universe": {} }, "CustomDimensions": [] } }] }, "ParentMultiverseId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentMultiverse": {}, "ParentUniverseId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentUniverse": {}, "ParentDimensionId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentDimension": {}, "DimensionLevel": {}, "SubDimensionLevel": {  }, "ParentGalaxyClusterId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentGalaxyCluster": {}, "ParentGalaxyId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentGalaxy": {}, "ParentSolarSystemId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentSolarSystem": {}, "ParentGreatGrandSuperStarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentGreatGrandSuperStar": {}, "ParentGrandSuperStarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentGrandSuperStar": {}, "ParentSuperStarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentSuperStar": {}, "ParentStarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentStar": {}, "ParentPlanetId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentPlanet": {}, "ParentMoonId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentMoon": {}, "ParentCelestialSpaceId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentCelestialSpace": { "NearestStar": {}, "CelestialBodies": /* <ReadOnlyCollection<ICelestialBody>> */, "CelestialSpaces": /* <ReadOnlyCollection<ICelestialSpace>> */, "Children": /* <new ReadOnlyCollection<IHolon>> */ }, "ParentCelestialBodyId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentCelestialBody": { "CelestialBodyCore": { "Holons": [], "Zomes": [{ "HoloNETClient": { "WebSocket": /* <WebSocket.WebSocket> */, "Logger": /* <ILogger> */, "HolochainVersion": {  } }, "ZomeName": "example string", "Holons": [{ "GlobalHolonData": {}, "ProviderUniqueStorageKey": { "<ProviderType>": "example string" }, "ProviderMetaData": { "<ProviderType>": { "<string>": "example string" } }, "CustomKey": "example string", "IsNewHolon": true, "IsSaving": true, "PreviousVersionId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "PreviousVersionProviderUniqueStorageKey": { "<ProviderType>": "example string" }, "CreatedProviderType": {}, "InstanceSavedOnProviderType": {}, "CreatedOASISType": {}, "Nodes": [], "ParentOmniverseId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentOmniverse": {}, "ParentMultiverseId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentMultiverse": {}, "ParentUniverseId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentUniverse": {}, "ParentDimensionId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentDimension": {}, "DimensionLevel": {}, "SubDimensionLevel": {}, "ParentGalaxyClusterId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentGalaxyCluster": {}, "ParentGalaxyId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentGalaxy": {}, "ParentSolarSystemId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentSolarSystem": {}, "ParentGreatGrandSuperStarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentGreatGrandSuperStar": {}, "ParentGrandSuperStarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentGrandSuperStar": {}, "ParentSuperStarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentSuperStar": {}, "ParentStarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentStar": {}, "ParentPlanetId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentPlanet": {}, "ParentMoonId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentMoon": {}, "ParentCelestialSpaceId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentCelestialSpace": {}, "ParentCelestialBodyId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentCelestialBody": {}, "ParentZomeId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentZome": {} }] }] }, "CurrentOrbitAngleOfParentStar": 1, "Density": 1, "DistanceFromParentStarInMetres": 1, "GravitaionalPull": 1, "Id": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "Mass": 1, "NumberActiveAvatars": 1, "NumberRegisteredAvatars": 1, "OrbitPeriod": 1, "OrbitPositionFromParentStar": 1, "ProviderUniqueStorageKey": { "<ProviderType>": "example string" }, "RotationPeriod": 1, "RotationSpeed": 1, "TiltAngle": 1, "Weight": 1 }, "ParentZomeId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentZome": {} },
    holonId: "3fa85f64-5717-4562-b3fc-2c963f66afa6"
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

