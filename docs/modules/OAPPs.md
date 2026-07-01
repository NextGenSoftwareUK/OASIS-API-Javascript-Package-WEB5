# OAPPs — `star.oAPPs`

Source controller: [`OAPPsController.cs`](https://github.com/NextGenSoftwareUK/OASIS/blob/main/STAR%20ODK/NextGenSoftware.OASIS.STAR.WebAPI/Controllers/OAPPsController.cs)
Route prefix: `api/oAPPs`
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

### `activateOAPP`

Activates an OAPP in the STARNET system.

**POST** `api/oAPPs/{id}/activate`

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
const { isError, message, result } = await star.oAPPs.activateOAPP({
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

### `cloneOAPP`

**POST** `api/oAPPs/{id}/clone`

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
const { isError, message, result } = await star.oAPPs.cloneOAPP({
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

### `createOAPP`

Creates a new OAPP for the authenticated avatar.

**POST** `api/oAPPs`

**Request**

Body type: `OAPP`

| Field | Type |
| --- | --- |
| `OAPPTemplateId` | `Guid` |
| `OAPPTemplateName` | `string` |
| `OAPPTemplateDescription` | `string` |
| `OAPPTemplateType` | `OAPPTemplateType` |
| `OAPPTemplateVersionSequence` | `int` |
| `OAPPTemplateVersion` | `string` |
| `MetaTagMappings` | `Dictionary<string, string>` |
| `CelestialBodyMetaDataId` | `Guid` |
| `CelestialBodyMetaDataName` | `string` |
| `CelestialBodyMetaDataDescription` | `string` |
| `CelestialBodyMetaDataType` | `CelestialBodyType` |
| `CelestialBodyMetaDataVersionSequence` | `int` |
| `CelestialBodyMetaDataVersion` | `string` |
| `CelestialBodyMetaDataGeneratedPath` | `string` |
| `OurWorldLat` | `long` |
| `OurWorldLong` | `long` |
| `OneWorldLat` | `long` |
| `OneWorldLong` | `long` |
| `OurWorld3dObjectPath` | `string` |
| `OurWorld3dObject` | `byte[]` |
| `OurWorld3dObjectURI` | `Uri` |
| `OurWorld2dSpritePath` | `string` |
| `OurWorld2dSprite` | `byte[]` |
| `OurWorld2dSpriteURI` | `Uri` |
| `OneWorld3dObjectPath` | `string` |
| `OneWorld3dObject` | `byte[]` |
| `OneWorld3dObjectURI` | `Uri` |
| `OneWorld2dSpritePath` | `string` |
| `OneWorld2dSprite` | `byte[]` |
| `OneWorld2dSpriteURI` | `Uri` |
| `SelfContainedPublishedPath` | `string` |
| `SelfContainedFullPublishedPath` | `string` |
| `SelfContainedPublishedToCloud` | `bool` |
| `SelfContainedFullPublishedToCloud` | `bool` |
| `SelfContainedPublishedProviderType` | `ProviderType` |
| `SelfContainedFullPublishedProviderType` | `ProviderType` |
| `SelfContainedFileSize` | `long` |
| `SelfContainedFullFileSize` | `long` |
| `SourcePublishedPath` | `string` |
| `SourcePublishedOnSTARNET` | `bool` |
| `SourcePublicOnSTARNET` | `bool` |
| `SourceFileSize` | `long` |
| `IsActive` | `bool` |
| `OAPPType` | `OAPPType` |
| `GenesisType` | `GenesisType` |
| `CelestialBodyId` | `Guid` |
| `CelestialBodyName` | `string` |
| `CelestialBodyType` | `HolonType` |
| `Zomes` | `IEnumerable<IZome>` |
| `SelfContainedDownloads` | `int` |
| `SelfContainedFullDownloads` | `int` |
| `SourceDownloads` | `int` |
| `TotalSelfContainedDownloads` | `int` |
| `TotalSelfContainedFullDownloads` | `int` |
| `TotalSourceDownloads` | `int` |
| `SelfContainedInstalls` | `int` |
| `SelfContainedFullInstalls` | `int` |
| `SourceInstalls` | `int` |
| `TotalSelfContainedInstalls` | `int` |
| `TotalSelfContainedFullInstalls` | `int` |
| `TotalSourceInstalls` | `int` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IActionResult` (not part of the request/response payload).

**Example**

```js
const { isError, message, result } = await star.oAPPs.createOAPP({
    oAPPTemplateId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    oAPPTemplateName: "example string",
    oAPPTemplateDescription: "example string",
    oAPPTemplateType: {  },
    oAPPTemplateVersionSequence: 1,
    oAPPTemplateVersion: "example string",
    metaTagMappings: { "<string>": "example string" },
    celestialBodyMetaDataId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    celestialBodyMetaDataName: "example string",
    celestialBodyMetaDataDescription: "example string",
    celestialBodyMetaDataType: {  },
    celestialBodyMetaDataVersionSequence: 1,
    celestialBodyMetaDataVersion: "example string",
    celestialBodyMetaDataGeneratedPath: "example string",
    ourWorldLat: 1,
    ourWorldLong: 1,
    oneWorldLat: 1,
    oneWorldLong: 1,
    ourWorld3dObjectPath: "example string",
    ourWorld3dObject: "<base64-bytes>",
    ourWorld3dObjectURI: "https://example.com/asset.png",
    ourWorld2dSpritePath: "example string",
    ourWorld2dSprite: "<base64-bytes>",
    ourWorld2dSpriteURI: "https://example.com/asset.png",
    oneWorld3dObjectPath: "example string",
    oneWorld3dObject: "<base64-bytes>",
    oneWorld3dObjectURI: "https://example.com/asset.png",
    oneWorld2dSpritePath: "example string",
    oneWorld2dSprite: "<base64-bytes>",
    oneWorld2dSpriteURI: "https://example.com/asset.png",
    selfContainedPublishedPath: "example string",
    selfContainedFullPublishedPath: "example string",
    selfContainedPublishedToCloud: true,
    selfContainedFullPublishedToCloud: true,
    selfContainedPublishedProviderType: {  },
    selfContainedFullPublishedProviderType: {  },
    selfContainedFileSize: 1,
    selfContainedFullFileSize: 1,
    sourcePublishedPath: "example string",
    sourcePublishedOnSTARNET: true,
    sourcePublicOnSTARNET: true,
    sourceFileSize: 1,
    isActive: true,
    oAPPType: {  },
    genesisType: {  },
    celestialBodyId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    celestialBodyName: "example string",
    celestialBodyType: {  },
    zomes: [{ "HoloNETClient": { "WebSocket": /* <WebSocket.WebSocket> */, "Logger": /* <ILogger> */, "HolochainVersion": {  } }, "ZomeName": "example string", "Holons": [{ "GlobalHolonData": {  }, "ProviderUniqueStorageKey": { "<ProviderType>": "example string" }, "ProviderMetaData": { "<ProviderType>": { "<string>": "example string" } }, "CustomKey": "example string", "IsNewHolon": true, "IsSaving": true, "PreviousVersionId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "PreviousVersionProviderUniqueStorageKey": { "<ProviderType>": "example string" }, "CreatedProviderType": { "Score": 1.0 }, "InstanceSavedOnProviderType": {}, "CreatedOASISType": { "Score": 1.0 }, "Nodes": [{ "Id": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "Parent": { "CreatedOASISType": {}, "CreatedProviderType": {}, "GlobalHolonData": {}, "InstanceSavedOnProviderType": {}, "IsChanged": true, "IsNewHolon": true, "IsSaving": true, "Original": {}, "PreviousVersionId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "PreviousVersionProviderUniqueStorageKey": { "<ProviderType>": "example string" }, "ProviderMetaData": { "<ProviderType>": { "<string>": "example string" } }, "ProviderUniqueStorageKey": { "<ProviderType>": "example string" }, "Nodes": [], "ParentOmniverseId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentOmniverse": { "GreatGrandSuperStar": {  }, "Dimensions": { "EighthDimension": {  }, "NinthDimension": {  }, "TenthDimension": {  }, "EleventhDimension": {  }, "TwelfthDimension": {  }, "CustomDimensions": [{ "DimensionLevel": {  } }] }, "Multiverses": [{ "GrandSuperStar": { "Stars": [ /* <I> */ ] }, "Dimensions": { "FirstDimension": { "Universe": { "Dimensions": [], "GalaxyClusters": [{ "Galaxies": [{ "SuperStar": { "Stars": [{ "Luminosity": 1, "StarType": {  }, "StarClassification": {  }, "StarBinaryType": {  } }] }, "SolarSystems": [{ "Star": {}, "Planets": [{ "Moons": [{  }] }], "Asteroids": [{  }], "Comets": [{  }], "Meteroids": [{  }] }], "Nebulas": [{  }], "Stars": [], "Planets": [], "Asteroids": [], "Comets": [], "Meteroids": [] }], "SolarSystems": [], "Stars": [], "Planets": [], "Asteroids": [], "Comets": [], "Meteroids": [], "IsSuperCluster": true }], "SolarSystems": [], "Nebulas": [], "Stars": [], "Planets": [], "Asteroids": [], "Comets": [], "Meteroids": [] } }, "SecondDimension": { "Universe": {} }, "ThirdDimension": { "UniversePrime": {}, "MagicVerse": {}, "ParallelUniverses": [] }, "FourthDimension": { "Universe": {} }, "FifthDimension": { "Universe": {} }, "SixthDimension": { "Universe": {} }, "SeventhDimension": { "Universe": {} }, "CustomDimensions": [] } }] }, "ParentMultiverseId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentMultiverse": {}, "ParentUniverseId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentUniverse": {}, "ParentDimensionId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentDimension": {}, "DimensionLevel": {}, "SubDimensionLevel": {  }, "ParentGalaxyClusterId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentGalaxyCluster": {}, "ParentGalaxyId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentGalaxy": {}, "ParentSolarSystemId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentSolarSystem": {}, "ParentGreatGrandSuperStarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentGreatGrandSuperStar": {}, "ParentGrandSuperStarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentGrandSuperStar": {}, "ParentSuperStarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentSuperStar": {}, "ParentStarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentStar": {}, "ParentPlanetId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentPlanet": {}, "ParentMoonId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentMoon": {}, "ParentCelestialSpaceId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentCelestialSpace": { "NearestStar": {}, "CelestialBodies": /* <ReadOnlyCollection<ICelestialBody>> */, "CelestialSpaces": /* <ReadOnlyCollection<ICelestialSpace>> */, "Children": /* <new ReadOnlyCollection<IHolon>> */ }, "ParentCelestialBodyId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentCelestialBody": { "CelestialBodyCore": { "Holons": [], "Zomes": [] }, "CurrentOrbitAngleOfParentStar": 1, "Density": 1, "DistanceFromParentStarInMetres": 1, "GravitaionalPull": 1, "Id": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "Mass": 1, "NumberActiveAvatars": 1, "NumberRegisteredAvatars": 1, "OrbitPeriod": 1, "OrbitPositionFromParentStar": 1, "ProviderUniqueStorageKey": { "<ProviderType>": "example string" }, "RotationPeriod": 1, "RotationSpeed": 1, "TiltAngle": 1, "Weight": 1 }, "ParentZomeId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentZome": {} }, "NodeName": "example string", "NodeType": {  } }], "ParentOmniverseId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentOmniverse": {}, "ParentMultiverseId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentMultiverse": {}, "ParentUniverseId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentUniverse": {}, "ParentDimensionId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentDimension": {}, "DimensionLevel": {}, "SubDimensionLevel": {}, "ParentGalaxyClusterId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentGalaxyCluster": {}, "ParentGalaxyId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentGalaxy": {}, "ParentSolarSystemId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentSolarSystem": {}, "ParentGreatGrandSuperStarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentGreatGrandSuperStar": {}, "ParentGrandSuperStarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentGrandSuperStar": {}, "ParentSuperStarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentSuperStar": {}, "ParentStarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentStar": {}, "ParentPlanetId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentPlanet": {}, "ParentMoonId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentMoon": {}, "ParentCelestialSpaceId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentCelestialSpace": {}, "ParentCelestialBodyId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentCelestialBody": {}, "ParentZomeId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentZome": {} }] }],
    selfContainedDownloads: 1,
    selfContainedFullDownloads: 1,
    sourceDownloads: 1,
    totalSelfContainedDownloads: 1,
    totalSelfContainedFullDownloads: 1,
    totalSourceDownloads: 1,
    selfContainedInstalls: 1,
    selfContainedFullInstalls: 1,
    sourceInstalls: 1,
    totalSelfContainedInstalls: 1,
    totalSelfContainedFullInstalls: 1,
    totalSourceInstalls: 1
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

### `createOAPPWithOptions`

Creates a new OAPP with specified parameters.

**POST** `api/oAPPs/create`

**Request**

Body type: `CreateOAPPRequest`

| Field | Type |
| --- | --- |
| `Name` | `string` |
| `Description` | `string` |
| `HolonSubType` | `OAPPType` |
| `SourceFolderPath` | `string` |
| `CreateOptions` | `ISTARNETCreateOptions<OAPP, STARNETDNA>?` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IActionResult` (not part of the request/response payload).

**Example**

```js
const { isError, message, result } = await star.oAPPs.createOAPPWithOptions({
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

### `deactivateOAPP`

Deactivates an OAPP in the STARNET system.

**POST** `api/oAPPs/{id}/deactivate`

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
const { isError, message, result } = await star.oAPPs.deactivateOAPP({
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

### `deleteOAPP`

**DELETE** `api/oAPPs/{id}`

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
const { isError, message, result } = await star.oAPPs.deleteOAPP({
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

### `downloadOAPP`

Downloads an OAPP from the STARNET system.

**POST** `api/oAPPs/{id}/download`

Route parameters:

| Field | Type |
| --- | --- |
| `id` | `Guid` |

**Request**

Body type: `DownloadOAPPRequest`

| Field | Type |
| --- | --- |
| `DestinationPath` | `string` |
| `Overwrite` | `bool` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IActionResult` (not part of the request/response payload).

**Example**

```js
const { isError, message, result } = await star.oAPPs.downloadOAPP({
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

### `editOAPP`

Edits an OAPP with the provided changes.

**PUT** `api/oAPPs/{id}/edit`

Route parameters:

| Field | Type |
| --- | --- |
| `id` | `Guid` |

**Request**

Body type: `EditOAPPRequest`

| Field | Type |
| --- | --- |
| `NewDNA` | `STARNETDNA` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IActionResult` (not part of the request/response payload).

**Example**

```js
const { isError, message, result } = await star.oAPPs.editOAPP({
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

### `getAllOAPPs`

Retrieves all OAPPs in the system.

**GET** `api/oAPPs`

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IActionResult` (not part of the request/response payload).

**Example**

```js
const { isError, message, result } = await star.oAPPs.getAllOAPPs({});
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

### `getOAPP`

Retrieves a specific OAPP by its unique identifier.

**GET** `api/oAPPs/{id}`

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
const { isError, message, result } = await star.oAPPs.getOAPP({
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

### `getOAPPVersions`

Gets all versions of a specific OAPP.

**GET** `api/oAPPs/{id}/versions`

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
const { isError, message, result } = await star.oAPPs.getOAPPVersions({
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

### `loadAllOAPPsForAvatar`

Loads all OAPPs for the current avatar.

**GET** `api/oAPPs/load-all-for-avatar`

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IActionResult` (not part of the request/response payload).

**Example**

```js
const { isError, message, result } = await star.oAPPs.loadAllOAPPsForAvatar({});
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

### `loadOAPPFromPath`

Loads an OAPP from the specified path.

**GET** `api/oAPPs/load-from-path`

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
const { isError, message, result } = await star.oAPPs.loadOAPPFromPath({
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

### `loadOAPPFromPublished`

Loads an OAPP from published sources.

**GET** `api/oAPPs/load-from-published`

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
const { isError, message, result } = await star.oAPPs.loadOAPPFromPublished({
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

### `loadOAPPVersion`

Loads a specific version of an OAPP.

**GET** `api/oAPPs/{id}/versions/{version}`

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
const { isError, message, result } = await star.oAPPs.loadOAPPVersion({
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

### `publishOAPP`

Publishes an OAPP to the STARNET system with optional cloud upload.

**POST** `api/oAPPs/{id}/publish`

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
const { isError, message, result } = await star.oAPPs.publishOAPP({
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

### `republishOAPP`

Republishes an OAPP to the STARNET system.

**POST** `api/oAPPs/{id}/republish`

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
const { isError, message, result } = await star.oAPPs.republishOAPP({
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

### `searchOAPPs`

Searches for OAPPs based on the provided search criteria.

**POST** `api/oAPPs/search`

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
const { isError, message, result } = await star.oAPPs.searchOAPPs({
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

### `unpublishOAPP`

Unpublishes an OAPP from the STARNET system.

**POST** `api/oAPPs/{id}/unpublish`

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
const { isError, message, result } = await star.oAPPs.unpublishOAPP({
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

### `updateOAPP`

**PUT** `api/oAPPs/{id}`

Route parameters:

| Field | Type |
| --- | --- |
| `id` | `Guid` |

**Request**

Body type: `OAPP`

| Field | Type |
| --- | --- |
| `OAPPTemplateId` | `Guid` |
| `OAPPTemplateName` | `string` |
| `OAPPTemplateDescription` | `string` |
| `OAPPTemplateType` | `OAPPTemplateType` |
| `OAPPTemplateVersionSequence` | `int` |
| `OAPPTemplateVersion` | `string` |
| `MetaTagMappings` | `Dictionary<string, string>` |
| `CelestialBodyMetaDataId` | `Guid` |
| `CelestialBodyMetaDataName` | `string` |
| `CelestialBodyMetaDataDescription` | `string` |
| `CelestialBodyMetaDataType` | `CelestialBodyType` |
| `CelestialBodyMetaDataVersionSequence` | `int` |
| `CelestialBodyMetaDataVersion` | `string` |
| `CelestialBodyMetaDataGeneratedPath` | `string` |
| `OurWorldLat` | `long` |
| `OurWorldLong` | `long` |
| `OneWorldLat` | `long` |
| `OneWorldLong` | `long` |
| `OurWorld3dObjectPath` | `string` |
| `OurWorld3dObject` | `byte[]` |
| `OurWorld3dObjectURI` | `Uri` |
| `OurWorld2dSpritePath` | `string` |
| `OurWorld2dSprite` | `byte[]` |
| `OurWorld2dSpriteURI` | `Uri` |
| `OneWorld3dObjectPath` | `string` |
| `OneWorld3dObject` | `byte[]` |
| `OneWorld3dObjectURI` | `Uri` |
| `OneWorld2dSpritePath` | `string` |
| `OneWorld2dSprite` | `byte[]` |
| `OneWorld2dSpriteURI` | `Uri` |
| `SelfContainedPublishedPath` | `string` |
| `SelfContainedFullPublishedPath` | `string` |
| `SelfContainedPublishedToCloud` | `bool` |
| `SelfContainedFullPublishedToCloud` | `bool` |
| `SelfContainedPublishedProviderType` | `ProviderType` |
| `SelfContainedFullPublishedProviderType` | `ProviderType` |
| `SelfContainedFileSize` | `long` |
| `SelfContainedFullFileSize` | `long` |
| `SourcePublishedPath` | `string` |
| `SourcePublishedOnSTARNET` | `bool` |
| `SourcePublicOnSTARNET` | `bool` |
| `SourceFileSize` | `long` |
| `IsActive` | `bool` |
| `OAPPType` | `OAPPType` |
| `GenesisType` | `GenesisType` |
| `CelestialBodyId` | `Guid` |
| `CelestialBodyName` | `string` |
| `CelestialBodyType` | `HolonType` |
| `Zomes` | `IEnumerable<IZome>` |
| `SelfContainedDownloads` | `int` |
| `SelfContainedFullDownloads` | `int` |
| `SourceDownloads` | `int` |
| `TotalSelfContainedDownloads` | `int` |
| `TotalSelfContainedFullDownloads` | `int` |
| `TotalSourceDownloads` | `int` |
| `SelfContainedInstalls` | `int` |
| `SelfContainedFullInstalls` | `int` |
| `SourceInstalls` | `int` |
| `TotalSelfContainedInstalls` | `int` |
| `TotalSelfContainedFullInstalls` | `int` |
| `TotalSourceInstalls` | `int` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IActionResult` (not part of the request/response payload).

**Example**

```js
const { isError, message, result } = await star.oAPPs.updateOAPP({
    id: '<id>',
    oAPPTemplateId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    oAPPTemplateName: "example string",
    oAPPTemplateDescription: "example string",
    oAPPTemplateType: {  },
    oAPPTemplateVersionSequence: 1,
    oAPPTemplateVersion: "example string",
    metaTagMappings: { "<string>": "example string" },
    celestialBodyMetaDataId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    celestialBodyMetaDataName: "example string",
    celestialBodyMetaDataDescription: "example string",
    celestialBodyMetaDataType: {  },
    celestialBodyMetaDataVersionSequence: 1,
    celestialBodyMetaDataVersion: "example string",
    celestialBodyMetaDataGeneratedPath: "example string",
    ourWorldLat: 1,
    ourWorldLong: 1,
    oneWorldLat: 1,
    oneWorldLong: 1,
    ourWorld3dObjectPath: "example string",
    ourWorld3dObject: "<base64-bytes>",
    ourWorld3dObjectURI: "https://example.com/asset.png",
    ourWorld2dSpritePath: "example string",
    ourWorld2dSprite: "<base64-bytes>",
    ourWorld2dSpriteURI: "https://example.com/asset.png",
    oneWorld3dObjectPath: "example string",
    oneWorld3dObject: "<base64-bytes>",
    oneWorld3dObjectURI: "https://example.com/asset.png",
    oneWorld2dSpritePath: "example string",
    oneWorld2dSprite: "<base64-bytes>",
    oneWorld2dSpriteURI: "https://example.com/asset.png",
    selfContainedPublishedPath: "example string",
    selfContainedFullPublishedPath: "example string",
    selfContainedPublishedToCloud: true,
    selfContainedFullPublishedToCloud: true,
    selfContainedPublishedProviderType: {  },
    selfContainedFullPublishedProviderType: {  },
    selfContainedFileSize: 1,
    selfContainedFullFileSize: 1,
    sourcePublishedPath: "example string",
    sourcePublishedOnSTARNET: true,
    sourcePublicOnSTARNET: true,
    sourceFileSize: 1,
    isActive: true,
    oAPPType: {  },
    genesisType: {  },
    celestialBodyId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    celestialBodyName: "example string",
    celestialBodyType: {  },
    zomes: [{ "HoloNETClient": { "WebSocket": /* <WebSocket.WebSocket> */, "Logger": /* <ILogger> */, "HolochainVersion": {  } }, "ZomeName": "example string", "Holons": [{ "GlobalHolonData": {  }, "ProviderUniqueStorageKey": { "<ProviderType>": "example string" }, "ProviderMetaData": { "<ProviderType>": { "<string>": "example string" } }, "CustomKey": "example string", "IsNewHolon": true, "IsSaving": true, "PreviousVersionId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "PreviousVersionProviderUniqueStorageKey": { "<ProviderType>": "example string" }, "CreatedProviderType": { "Score": 1.0 }, "InstanceSavedOnProviderType": {}, "CreatedOASISType": { "Score": 1.0 }, "Nodes": [{ "Id": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "Parent": { "CreatedOASISType": {}, "CreatedProviderType": {}, "GlobalHolonData": {}, "InstanceSavedOnProviderType": {}, "IsChanged": true, "IsNewHolon": true, "IsSaving": true, "Original": {}, "PreviousVersionId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "PreviousVersionProviderUniqueStorageKey": { "<ProviderType>": "example string" }, "ProviderMetaData": { "<ProviderType>": { "<string>": "example string" } }, "ProviderUniqueStorageKey": { "<ProviderType>": "example string" }, "Nodes": [], "ParentOmniverseId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentOmniverse": { "GreatGrandSuperStar": {  }, "Dimensions": { "EighthDimension": {  }, "NinthDimension": {  }, "TenthDimension": {  }, "EleventhDimension": {  }, "TwelfthDimension": {  }, "CustomDimensions": [{ "DimensionLevel": {  } }] }, "Multiverses": [{ "GrandSuperStar": { "Stars": [ /* <I> */ ] }, "Dimensions": { "FirstDimension": { "Universe": { "Dimensions": [], "GalaxyClusters": [{ "Galaxies": [{ "SuperStar": { "Stars": [{ "Luminosity": 1, "StarType": {  }, "StarClassification": {  }, "StarBinaryType": {  } }] }, "SolarSystems": [{ "Star": {}, "Planets": [{ "Moons": [{  }] }], "Asteroids": [{  }], "Comets": [{  }], "Meteroids": [{  }] }], "Nebulas": [{  }], "Stars": [], "Planets": [], "Asteroids": [], "Comets": [], "Meteroids": [] }], "SolarSystems": [], "Stars": [], "Planets": [], "Asteroids": [], "Comets": [], "Meteroids": [], "IsSuperCluster": true }], "SolarSystems": [], "Nebulas": [], "Stars": [], "Planets": [], "Asteroids": [], "Comets": [], "Meteroids": [] } }, "SecondDimension": { "Universe": {} }, "ThirdDimension": { "UniversePrime": {}, "MagicVerse": {}, "ParallelUniverses": [] }, "FourthDimension": { "Universe": {} }, "FifthDimension": { "Universe": {} }, "SixthDimension": { "Universe": {} }, "SeventhDimension": { "Universe": {} }, "CustomDimensions": [] } }] }, "ParentMultiverseId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentMultiverse": {}, "ParentUniverseId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentUniverse": {}, "ParentDimensionId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentDimension": {}, "DimensionLevel": {}, "SubDimensionLevel": {  }, "ParentGalaxyClusterId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentGalaxyCluster": {}, "ParentGalaxyId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentGalaxy": {}, "ParentSolarSystemId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentSolarSystem": {}, "ParentGreatGrandSuperStarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentGreatGrandSuperStar": {}, "ParentGrandSuperStarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentGrandSuperStar": {}, "ParentSuperStarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentSuperStar": {}, "ParentStarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentStar": {}, "ParentPlanetId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentPlanet": {}, "ParentMoonId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentMoon": {}, "ParentCelestialSpaceId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentCelestialSpace": { "NearestStar": {}, "CelestialBodies": /* <ReadOnlyCollection<ICelestialBody>> */, "CelestialSpaces": /* <ReadOnlyCollection<ICelestialSpace>> */, "Children": /* <new ReadOnlyCollection<IHolon>> */ }, "ParentCelestialBodyId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentCelestialBody": { "CelestialBodyCore": { "Holons": [], "Zomes": [] }, "CurrentOrbitAngleOfParentStar": 1, "Density": 1, "DistanceFromParentStarInMetres": 1, "GravitaionalPull": 1, "Id": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "Mass": 1, "NumberActiveAvatars": 1, "NumberRegisteredAvatars": 1, "OrbitPeriod": 1, "OrbitPositionFromParentStar": 1, "ProviderUniqueStorageKey": { "<ProviderType>": "example string" }, "RotationPeriod": 1, "RotationSpeed": 1, "TiltAngle": 1, "Weight": 1 }, "ParentZomeId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentZome": {} }, "NodeName": "example string", "NodeType": {  } }], "ParentOmniverseId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentOmniverse": {}, "ParentMultiverseId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentMultiverse": {}, "ParentUniverseId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentUniverse": {}, "ParentDimensionId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentDimension": {}, "DimensionLevel": {}, "SubDimensionLevel": {}, "ParentGalaxyClusterId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentGalaxyCluster": {}, "ParentGalaxyId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentGalaxy": {}, "ParentSolarSystemId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentSolarSystem": {}, "ParentGreatGrandSuperStarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentGreatGrandSuperStar": {}, "ParentGrandSuperStarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentGrandSuperStar": {}, "ParentSuperStarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentSuperStar": {}, "ParentStarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentStar": {}, "ParentPlanetId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentPlanet": {}, "ParentMoonId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentMoon": {}, "ParentCelestialSpaceId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentCelestialSpace": {}, "ParentCelestialBodyId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentCelestialBody": {}, "ParentZomeId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentZome": {} }] }],
    selfContainedDownloads: 1,
    selfContainedFullDownloads: 1,
    sourceDownloads: 1,
    totalSelfContainedDownloads: 1,
    totalSelfContainedFullDownloads: 1,
    totalSourceDownloads: 1,
    selfContainedInstalls: 1,
    selfContainedFullInstalls: 1,
    sourceInstalls: 1,
    totalSelfContainedInstalls: 1,
    totalSelfContainedFullInstalls: 1,
    totalSourceInstalls: 1
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

