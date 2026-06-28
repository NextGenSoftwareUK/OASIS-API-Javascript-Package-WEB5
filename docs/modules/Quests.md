# Quests — `star.quests`

Source controller: [`QuestsController.cs`](https://github.com/NextGenSoftwareUK/OASIS2/blob/main/STAR%20ODK/NextGenSoftware.OASIS.STAR.WebAPI/Controllers/QuestsController.cs)
Route prefix: `api/quests`
40 operation(s).

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

### `activateQuest`

Activates a quest.

**POST** `api/quests/{id}/activate`

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
const { isError, message, result } = await star.quests.activateQuest({
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

### `addQuestObjective`

Adds an objective (sub-quest) to an existing quest.

**POST** `api/quests/{id}/objectives`

Route parameters:

| Field | Type |
| --- | --- |
| `id` | `Guid` |

**Request**

Body type: `AddQuestObjectiveRequest`

| Field | Type |
| --- | --- |
| `Title` | `string` |
| `Description` | `string` |
| `GameSource` | `string` |
| `Order` | `int` |
| `LinkedGeoHotSpotId` | `Guid?` |
| `ExternalHandoffUri` | `string?` |
| `Dictionaries` | `QuestObjectiveDictionariesRequest?` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IActionResult` (not part of the request/response payload).

**Example**

```js
const { isError, message, result } = await star.quests.addQuestObjective({
    id: '<id>',
    title: "example string",
    description: "example string",
    gameSource: "example string",
    order: 1,
    linkedGeoHotSpotId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    externalHandoffUri: "example string",
    dictionaries: { "NeedToCollectArmor": { "<string>": ["example string"] }, "NeedToCollectAmmo": { "<string>": ["example string"] }, "NeedToCollectHealth": { "<string>": ["example string"] }, "NeedToCollectWeapons": { "<string>": ["example string"] }, "NeedToCollectPowerups": { "<string>": ["example string"] }, "NeedToCollectItems": { "<string>": ["example string"] }, "NeedToCollectKeys": { "<string>": ["example string"] }, "NeedToKillMonsters": { "<string>": ["example string"] }, "NeedToCompleteInMins": { "<string>": ["example string"] }, "NeedToEarnKarma": { "<string>": ["example string"] }, "NeedToEarnXP": { "<string>": ["example string"] }, "NeedToGoToGeoHotSpots": { "<string>": ["example string"] }, "NeedToCompleteLevel": { "<string>": ["example string"] }, "NeedToUseWeapons": { "<string>": ["example string"] }, "NeedToUsePowerups": { "<string>": ["example string"] }, "NeedToVisitLocations": { "<string>": ["example string"] }, "NeedToSurviveMins": { "<string>": ["example string"] }, "ArmorCollected": { "<string>": ["example string"] }, "AmmoCollected": { "<string>": ["example string"] }, "HealthCollected": { "<string>": ["example string"] }, "WeaponsCollected": { "<string>": ["example string"] }, "PowerupsCollected": { "<string>": ["example string"] }, "ItemsCollected": { "<string>": ["example string"] }, "KeysCollected": { "<string>": ["example string"] }, "MonstersKilled": { "<string>": ["example string"] }, "TimeStarted": { "<string>": ["example string"] }, "TimeEnded": { "<string>": ["example string"] }, "TimeTaken": { "<string>": ["example string"] }, "KarmaEarnt": { "<string>": ["example string"] }, "XPEarnt": { "<string>": ["example string"] }, "GeoHotSpotsArrived": { "<string>": ["example string"] }, "LevelsCompleted": { "<string>": ["example string"] } }
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

### `addSubQuest`

Adds a sub-quest (full child quest) to an existing quest. Use for nested quests that can have their own objectives; use POST objectives for checklist items.

**POST** `api/quests/{id}/subquests`

Route parameters:

| Field | Type |
| --- | --- |
| `id` | `Guid` |

**Request**

Body type: `AddSubQuestRequest`

| Field | Type |
| --- | --- |
| `Name` | `string` |
| `Description` | `string` |
| `GameSource` | `string` |
| `Order` | `int` |
| `Dictionaries` | `QuestObjectiveDictionariesRequest?` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IActionResult` (not part of the request/response payload).

**Example**

```js
const { isError, message, result } = await star.quests.addSubQuest({
    id: '<id>',
    name: "example string",
    description: "example string",
    gameSource: "example string",
    order: 1,
    dictionaries: { "NeedToCollectArmor": { "<string>": ["example string"] }, "NeedToCollectAmmo": { "<string>": ["example string"] }, "NeedToCollectHealth": { "<string>": ["example string"] }, "NeedToCollectWeapons": { "<string>": ["example string"] }, "NeedToCollectPowerups": { "<string>": ["example string"] }, "NeedToCollectItems": { "<string>": ["example string"] }, "NeedToCollectKeys": { "<string>": ["example string"] }, "NeedToKillMonsters": { "<string>": ["example string"] }, "NeedToCompleteInMins": { "<string>": ["example string"] }, "NeedToEarnKarma": { "<string>": ["example string"] }, "NeedToEarnXP": { "<string>": ["example string"] }, "NeedToGoToGeoHotSpots": { "<string>": ["example string"] }, "NeedToCompleteLevel": { "<string>": ["example string"] }, "NeedToUseWeapons": { "<string>": ["example string"] }, "NeedToUsePowerups": { "<string>": ["example string"] }, "NeedToVisitLocations": { "<string>": ["example string"] }, "NeedToSurviveMins": { "<string>": ["example string"] }, "ArmorCollected": { "<string>": ["example string"] }, "AmmoCollected": { "<string>": ["example string"] }, "HealthCollected": { "<string>": ["example string"] }, "WeaponsCollected": { "<string>": ["example string"] }, "PowerupsCollected": { "<string>": ["example string"] }, "ItemsCollected": { "<string>": ["example string"] }, "KeysCollected": { "<string>": ["example string"] }, "MonstersKilled": { "<string>": ["example string"] }, "TimeStarted": { "<string>": ["example string"] }, "TimeEnded": { "<string>": ["example string"] }, "TimeTaken": { "<string>": ["example string"] }, "KarmaEarnt": { "<string>": ["example string"] }, "XPEarnt": { "<string>": ["example string"] }, "GeoHotSpotsArrived": { "<string>": ["example string"] }, "LevelsCompleted": { "<string>": ["example string"] } }
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

### `applyQuestProgress`

Apply in-game progress (monster kills, XP, item pickups, keys, level elapsed seconds) to the tracked quest. Updates objective progress and % complete; completes objectives/quest when thresholds are met.</summary>

**POST** `api/quests/{id}/progress`

Route parameters:

| Field | Type |
| --- | --- |
| `id` | `Guid` |

**Request**

Body type: `QuestProgressRequest`

| Field | Type |
| --- | --- |
| `ActiveObjectiveId` | `Guid?` |
| `GameSource` | `string` |
| `MonstersKilledDelta` | `int` |
| `XpEarnedDelta` | `int` |
| `KeysCollectedDelta` | `int` |
| `ArmorCollectedDelta` | `int` |
| `HealthCollectedDelta` | `int` |
| `WeaponsCollectedDelta` | `int` |
| `PowerupsCollectedDelta` | `int` |
| `AmmoCollectedDelta` | `int` |
| `ItemCollectedName` | `string` |
| `GenericItemPickup` | `int` |
| `LevelTimeSeconds` | `int?` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IActionResult` (not part of the request/response payload).

**Example**

```js
const { isError, message, result } = await star.quests.applyQuestProgress({
    id: '<id>',
    activeObjectiveId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    gameSource: "example string",
    monstersKilledDelta: 1,
    xpEarnedDelta: 1,
    keysCollectedDelta: 1,
    armorCollectedDelta: 1,
    healthCollectedDelta: 1,
    weaponsCollectedDelta: 1,
    powerupsCollectedDelta: 1,
    ammoCollectedDelta: 1,
    itemCollectedName: "example string",
    genericItemPickup: 1,
    levelTimeSeconds: 1
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

### `canStartQuest`

Checks whether the authenticated avatar can start the quest (quest is NotStarted and prerequisites are met). Use for the quest popup to enable/disable the Start button. Returns Result=true when the quest can be started, false otherwise with Message explaining why.

**GET** `api/quests/{id}/can-start`

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
const { isError, message, result } = await star.quests.canStartQuest({
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

### `cloneQuest`

Clones an existing quest with a new name.

**POST** `api/quests/{id}/clone`

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
const { isError, message, result } = await star.quests.cloneQuest({
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

### `completeQuest`

Completes a quest for the authenticated avatar.

**POST** `api/quests/{id}/complete`

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
const { isError, message, result } = await star.quests.completeQuest({
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

### `completeQuestObjective`

**POST** `api/quests/{id}/objectives/{objectiveId}/complete`

Route parameters:

| Field | Type |
| --- | --- |
| `id` | `Guid` |
| `objectiveId` | `Guid` |

**Request**

Body type: `CompleteQuestObjectiveRequest`

| Field | Type |
| --- | --- |
| `GameSource` | `string` |
| `CompletionNotes` | `string` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IActionResult` (not part of the request/response payload).

**Example**

```js
const { isError, message, result } = await star.quests.completeQuestObjective({
    id: '<id>',
    objectiveId: '<objectiveId>',
    gameSource: "example string",
    completionNotes: "example string"
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

### `completeQuestObjectiveByIdentifiers`

Complete a quest objective using string identifiers in the JSON body (GUIDs or client slugs such as cross_dimensional_keycard_hunt / doom_red_keycard). Native games use this path; route parameters remain Guid-only.</summary>

**POST** `api/quests/objectives/complete`

**Request**

Body type: `CompleteQuestObjectiveIdentifiersRequest`

| Field | Type |
| --- | --- |
| `QuestId` | `string` |
| `ObjectiveId` | `string` |
| `GameSource` | `string` |
| `CompletionNotes` | `string` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IActionResult` (not part of the request/response payload).

**Example**

```js
const { isError, message, result } = await star.quests.completeQuestObjectiveByIdentifiers({
    questId: "example string",
    objectiveId: "example string",
    gameSource: "example string",
    completionNotes: "example string"
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

### `createIQuest`

Creates a new quest for the authenticated avatar.

**POST** `api/quests`

**Request**

Body type: `IQuest`

| Field | Type |
| --- | --- |
| `ParentMissionId` | `Guid` |
| `ParentQuestId` | `Guid` |
| `QuestType` | `QuestType` |
| `GeoSpatialNFTIds` | `IList<string>` |
| `GeoSpatialNFTs` | `IList<IOASISGeoSpatialNFT>` |
| `GeoHotSpotIds` | `IList<string>` |
| `GeoHotSpots` | `IList<IGeoHotSpot>` |
| `CurrentSubQuest` | `IQuest` |
| `CurrentSubQuestNumber` | `int` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IActionResult` (not part of the request/response payload).

**Example**

```js
const { isError, message, result } = await star.quests.createIQuest({
    parentMissionId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    parentQuestId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    questType: {  },
    geoSpatialNFTIds: ["example string"],
    geoSpatialNFTs: [ /* <IOASISGeoSpatialNFT> */ ],
    geoHotSpotIds: ["example string"],
    geoHotSpots: [{ "TriggerType": {  }, "Lat": 1.0, "Long": 1.0, "HotSpotRadiusInMetres": 1, "TimeInSecondsNeedToBeAtLocationToTriggerHotSpot": 1, "TimeInSecondsNeedToLookAt3DObjectOr2DImageToTriggerHotSpot": 1, "Object3D": "<base64-bytes>", "Image2D": "<base64-bytes>", "Rewards": [{ "Image2D": "<base64-bytes>", "Image2DURI": "https://example.com/asset.png", "ThumbnailUrl": "example string", "Object3D": "<base64-bytes>", "Object3DURI": "https://example.com/asset.png", "Quantity": 1, "Stack": true, "IsStackable": true, "GameSource": "example string", "ItemType": "example string", "NftId": "example string", "Rarity": "example string", "MaxQuantity": 1, "Weight": 1.0, "IsUsable": true, "IsTradeable": true, "OwnerAvatarId": "example string", "AcquiredOn": "2026-01-01T00:00:00Z", "LastUsedOn": "2026-01-01T00:00:00Z", "Properties": { "<string>": {} } }], "AudioData": "<base64-bytes>", "AudioUrl": "example string", "VideoData": "<base64-bytes>", "VideoUrl": "example string", "TextContent": "example string", "WebsiteUrl": "example string" }],
    currentSubQuest: { "ParentMissionId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentQuestId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "QuestType": {  }, "GeoSpatialNFTIds": ["example string"], "GeoSpatialNFTs": [ /* <IOASISGeoSpatialNFT> */ ], "GeoHotSpotIds": ["example string"], "GeoHotSpots": [{ "TriggerType": {  }, "Lat": 1.0, "Long": 1.0, "HotSpotRadiusInMetres": 1, "TimeInSecondsNeedToBeAtLocationToTriggerHotSpot": 1, "TimeInSecondsNeedToLookAt3DObjectOr2DImageToTriggerHotSpot": 1, "Object3D": "<base64-bytes>", "Image2D": "<base64-bytes>", "Rewards": [{ "Image2D": "<base64-bytes>", "Image2DURI": "https://example.com/asset.png", "ThumbnailUrl": "example string", "Object3D": "<base64-bytes>", "Object3DURI": "https://example.com/asset.png", "Quantity": 1, "Stack": true, "IsStackable": true, "GameSource": "example string", "ItemType": "example string", "NftId": "example string", "Rarity": "example string", "MaxQuantity": 1, "Weight": 1.0, "IsUsable": true, "IsTradeable": true, "OwnerAvatarId": "example string", "AcquiredOn": "2026-01-01T00:00:00Z", "LastUsedOn": "2026-01-01T00:00:00Z", "Properties": { "<string>": {} } }], "AudioData": "<base64-bytes>", "AudioUrl": "example string", "VideoData": "<base64-bytes>", "VideoUrl": "example string", "TextContent": "example string", "WebsiteUrl": "example string" }], "CurrentSubQuest": {}, "CurrentSubQuestNumber": 1 },
    currentSubQuestNumber: 1
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

### `createQuestWithOptions`

Creates a new quest with specified parameters.

**POST** `api/quests/create`

**Request**

Body type: `CreateQuestRequest`

| Field | Type |
| --- | --- |
| `Name` | `string` |
| `Description` | `string` |
| `HolonSubType` | `HolonType` |
| `QuestType` | `QuestType` |
| `SourceFolderPath` | `string` |
| `CreateOptions` | `ISTARNETCreateOptions<Quest, STARNETDNA>?` |
| `LinkedGeoHotSpotId` | `Guid?` |
| `ExternalHandoffUri` | `string?` |
| `Objectives` | `List<QuestObjectiveRequest>?` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IActionResult` (not part of the request/response payload).

**Example**

```js
const { isError, message, result } = await star.quests.createQuestWithOptions({
    name: "example string",
    description: "example string",
    holonSubType: {  },
    questType: {  },
    sourceFolderPath: "example string",
    createOptions: { "STARNETHolon": /* <T1> */, "STARNETDNA": /* <T2> */, "MetaTagMappings": { "MetaHolonTags": [{ "HolonName": "example string", "HolonType": {  }, "NodeName": "example string", "NodeType": { "Score": 1.0 }, "MetaTag": "example string" }], "MetaTags": { "<string>": "example string" } }, "CheckIfSourcePathExists": true, "CustomCreateParams": { "<string>": {} } },
    linkedGeoHotSpotId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    externalHandoffUri: "example string",
    objectives: [{ "Title": "example string", "Description": "example string", "GameSource": "example string", "Order": 1, "IsCompleted": true, "CompletedAt": "2026-01-01T00:00:00Z", "CompletedBy": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "LinkedGeoHotSpotId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ExternalHandoffUri": "example string", "Dictionaries": { "NeedToCollectArmor": { "<string>": ["example string"] }, "NeedToCollectAmmo": { "<string>": ["example string"] }, "NeedToCollectHealth": { "<string>": ["example string"] }, "NeedToCollectWeapons": { "<string>": ["example string"] }, "NeedToCollectPowerups": { "<string>": ["example string"] }, "NeedToCollectItems": { "<string>": ["example string"] }, "NeedToCollectKeys": { "<string>": ["example string"] }, "NeedToKillMonsters": { "<string>": ["example string"] }, "NeedToCompleteInMins": { "<string>": ["example string"] }, "NeedToEarnKarma": { "<string>": ["example string"] }, "NeedToEarnXP": { "<string>": ["example string"] }, "NeedToGoToGeoHotSpots": { "<string>": ["example string"] }, "NeedToCompleteLevel": { "<string>": ["example string"] }, "NeedToUseWeapons": { "<string>": ["example string"] }, "NeedToUsePowerups": { "<string>": ["example string"] }, "NeedToVisitLocations": { "<string>": ["example string"] }, "NeedToSurviveMins": { "<string>": ["example string"] }, "ArmorCollected": { "<string>": ["example string"] }, "AmmoCollected": { "<string>": ["example string"] }, "HealthCollected": { "<string>": ["example string"] }, "WeaponsCollected": { "<string>": ["example string"] }, "PowerupsCollected": { "<string>": ["example string"] }, "ItemsCollected": { "<string>": ["example string"] }, "KeysCollected": { "<string>": ["example string"] }, "MonstersKilled": { "<string>": ["example string"] }, "TimeStarted": { "<string>": ["example string"] }, "TimeEnded": { "<string>": ["example string"] }, "TimeTaken": { "<string>": ["example string"] }, "KarmaEarnt": { "<string>": ["example string"] }, "XPEarnt": { "<string>": ["example string"] }, "GeoHotSpotsArrived": { "<string>": ["example string"] }, "LevelsCompleted": { "<string>": ["example string"] } } }]
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

### `deactivateQuest`

Deactivates a quest.

**POST** `api/quests/{id}/deactivate`

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
const { isError, message, result } = await star.quests.deactivateQuest({
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

### `deleteIQuest`

Deletes a quest by its unique identifier.

**DELETE** `api/quests/{id}`

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
const { isError, message, result } = await star.quests.deleteIQuest({
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

### `downloadQuest`

Downloads a quest from the STARNET system.

**POST** `api/quests/{id}/download`

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
const { isError, message, result } = await star.quests.downloadQuest({
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

### `editQuest`

Edits a quest with new DNA configuration.

**POST** `api/quests/{id}/edit`

Route parameters:

| Field | Type |
| --- | --- |
| `id` | `Guid` |

**Request**

Body type: `EditQuestRequest`

| Field | Type |
| --- | --- |
| `NewDNA` | `STARNETDNA` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IActionResult` (not part of the request/response payload).

**Example**

```js
const { isError, message, result } = await star.quests.editQuest({
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

### `getAllIQuests`

Retrieves all quests in the system.

**GET** `api/quests`

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IActionResult` (not part of the request/response payload).

**Example**

```js
const { isError, message, result } = await star.quests.getAllIQuests({});
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

### `getAllQuestsForAvatar`

Retrieves all quests for the current avatar (no status filter). Returns a flat list of every quest where CreatedByAvatarId matches and Active=1: top-level quests, sub-quests, and objectives (child quests with ParentQuestId set). Use this for the quest popup; the client filters by status (Not Started, In Progress, Completed) and by ParentQuestId for sub-quests/objectives.

**GET** `api/quests/all-for-avatar`

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IActionResult` (not part of the request/response payload).

**Example**

```js
const { isError, message, result } = await star.quests.getAllQuestsForAvatar({});
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

### `getAllQuestsForAvatarGame`

Same data path as <see cref="GetAllQuestsForAvatar"/> but returns a flat game-friendly DTO (no full holon graph / STARNET children). Use for native clients and games; keep <c>all-for-avatar</c> for tools and graph consumers.

**GET** `api/quests/all-for-avatar/game`

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IActionResult` (not part of the request/response payload).

**Example**

```js
const { isError, message, result } = await star.quests.getAllQuestsForAvatarGame({});
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

### `getIQuest`

Retrieves a specific quest by its unique identifier.

**GET** `api/quests/{id}`

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
const { isError, message, result } = await star.quests.getIQuest({
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

### `getIQuestsByAvatar`

Retrieves all quests for a specific avatar.

**GET** `api/quests/by-avatar/{avatarId}`

Route parameters:

| Field | Type |
| --- | --- |
| `avatarId` | `Guid` |

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IActionResult` (not part of the request/response payload).

**Example**

```js
const { isError, message, result } = await star.quests.getIQuestsByAvatar({
    avatarId: '<avatarId>'
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

### `getQuestLeaderboard`

Gets quest leaderboard for a specific quest.

**GET** `api/quests/{id}/leaderboard`

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
const { isError, message, result } = await star.quests.getQuestLeaderboard({
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

### `getQuestRewards`

Gets quest rewards for a specific quest.

**GET** `api/quests/{id}/rewards`

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
const { isError, message, result } = await star.quests.getQuestRewards({
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

### `getQuestStats`

Gets quest statistics for the authenticated avatar.

**GET** `api/quests/stats`

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IActionResult` (not part of the request/response payload).

**Example**

```js
const { isError, message, result } = await star.quests.getQuestStats({});
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

### `getQuestVersions`

Gets all versions of a specific quest.

**GET** `api/quests/{id}/versions`

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
const { isError, message, result } = await star.quests.getQuestVersions({
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

### `getQuestsByStatus`

Retrieves quests by status.

**GET** `api/quests/by-status/{status}`

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
const { isError, message, result } = await star.quests.getQuestsByStatus({
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

### `getQuestsByStatusGame`

Same filtering as <see cref="GetQuestsByStatus"/> but returns <see cref="GameQuestSummaryLite"/> rows for small payloads in games.

**GET** `api/quests/by-status/{status}/game`

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
const { isError, message, result } = await star.quests.getQuestsByStatusGame({
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

### `getQuestsByType`

Retrieves quests by a specific type.

**GET** `api/quests/by-type/{type}`

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
const { isError, message, result } = await star.quests.getQuestsByType({
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

### `loadAllQuestsForAvatar`

Loads all quests for the authenticated avatar.

**GET** `api/quests/load-all-for-avatar`

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
const { isError, message, result } = await star.quests.loadAllQuestsForAvatar({
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

### `loadQuest`

Loads a quest by ID with optional version and holon type.

**GET** `api/quests/{id}/load`

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
const { isError, message, result } = await star.quests.loadQuest({
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

### `loadQuestFromPath`

Loads a quest from source or installed folder path.

**GET** `api/quests/load-from-path`

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
const { isError, message, result } = await star.quests.loadQuestFromPath({
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

### `loadQuestFromPublished`

Loads a quest from a published file.

**GET** `api/quests/load-from-published`

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
const { isError, message, result } = await star.quests.loadQuestFromPublished({
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

### `loadQuestVersion`

Loads a specific version of a quest.

**GET** `api/quests/{id}/version/{version}`

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
const { isError, message, result } = await star.quests.loadQuestVersion({
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

### `publishQuest`

Publishes a quest to the STARNET system.

**POST** `api/quests/{id}/publish`

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
const { isError, message, result } = await star.quests.publishQuest({
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

### `removeQuestObjective`

Removes an objective (sub-quest) from a quest.

**DELETE** `api/quests/{parentId}/objectives/{objectiveId}`

Route parameters:

| Field | Type |
| --- | --- |
| `parentId` | `Guid` |
| `objectiveId` | `Guid` |

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IActionResult` (not part of the request/response payload).

**Example**

```js
const { isError, message, result } = await star.quests.removeQuestObjective({
    parentId: '<parentId>',
    objectiveId: '<objectiveId>'
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

### `removeSubQuest`

Removes a sub-quest (child quest) from a quest.

**DELETE** `api/quests/{parentId}/subquests/{subQuestId}`

Route parameters:

| Field | Type |
| --- | --- |
| `parentId` | `Guid` |
| `subQuestId` | `Guid` |

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IActionResult` (not part of the request/response payload).

**Example**

```js
const { isError, message, result } = await star.quests.removeSubQuest({
    parentId: '<parentId>',
    subQuestId: '<subQuestId>'
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

### `republishQuest`

Republishes a quest to the STARNET system.

**POST** `api/quests/{id}/republish`

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
const { isError, message, result } = await star.quests.republishQuest({
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

### `resetObjectiveProgress`

Clears all progress dictionaries on the quest and its embedded objectives (kills, collected counts, XP, etc.) to 0; leaves Need* requirements unchanged. If the quest was Completed, status becomes InProgress.</summary>

**POST** `api/quests/{id}/progress/reset`

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
const { isError, message, result } = await star.quests.resetObjectiveProgress({
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

### `searchQuests`

Searches quests by name or description.

**GET** `api/quests/search`

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
const { isError, message, result } = await star.quests.searchQuests({
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

### `unpublishQuest`

Unpublishes a quest from the STARNET system.

**POST** `api/quests/{id}/unpublish`

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
const { isError, message, result } = await star.quests.unpublishQuest({
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

### `updateIQuest`

Updates an existing quest by its unique identifier.

**PUT** `api/quests/{id}`

Route parameters:

| Field | Type |
| --- | --- |
| `id` | `Guid` |

**Request**

Body type: `Quest`

| Field | Type |
| --- | --- |
| `Id` | `Guid` |
| `Name` | `string` |
| `Description` | `string` |
| `Type` | `QuestType` |
| `Difficulty` | `QuestDifficulty` |
| `RewardKarma` | `long` |
| `RewardExperience` | `long` |
| `Requirements` | `List<string>` |
| `IsActive` | `bool` |
| `CreatedAt` | `DateTime` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IActionResult` (not part of the request/response payload).

**Example**

```js
const { isError, message, result } = await star.quests.updateIQuest({
    id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    name: "example string",
    description: "example string",
    type: {  },
    difficulty: {  },
    rewardKarma: 1,
    rewardExperience: 1,
    requirements: ["example string"],
    isActive: true,
    createdAt: "2026-01-01T00:00:00Z"
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

