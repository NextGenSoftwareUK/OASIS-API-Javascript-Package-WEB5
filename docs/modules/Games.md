# Games — `star.games`

Source controller: [`GamesController.cs`](https://github.com/NextGenSoftwareUK/OASIS2/blob/main/STAR%20ODK/NextGenSoftware.OASIS.STAR.WebAPI/Controllers/GamesController.cs)
Route prefix: `api/games`
55 operation(s).

All methods are generated 1:1 from the controller's real `[Http*]` routes (see
[Conventions](../README.md#calling-any-endpoint)). They take a single args
object: any key matching a `{token}` in the route is substituted into the
URL; everything else becomes the query string (GET/DELETE) or JSON body
(POST/PUT).

## Methods

| Method | HTTP | Route | Route params | Query params | Body |
| --- | --- | --- | --- | --- | --- |
| `activateGame` | POST | `api/games/{id}/activate` | `id` | `version` | remaining args |
| `addItemToInventory` | POST | `api/games/shared-inventory/add` | – | – | remaining args |
| `bindKeys` | POST | `api/games/{gameId}/input/bind-keys` | `gameId` | – | remaining args |
| `cloneGame` | POST | `api/games/{id}/clone` | `id` | – | remaining args |
| `createGame` | POST | `api/games` | – | – | remaining args |
| `createGameWithOptions` | POST | `api/games/create` | – | – | remaining args |
| `deactivateGame` | POST | `api/games/{id}/deactivate` | `id` | `version` | remaining args |
| `deleteGame` | DELETE | `api/games/{id}` | `id` | – | – |
| `downloadGame` | POST | `api/games/{id}/download` | `id` | `version`, `downloadPath`, `reInstall` | remaining args |
| `editGame` | POST | `api/games/{id}/edit` | `id` | – | remaining args |
| `endGame` | POST | `api/games/{gameId}/end` | `gameId` | – | remaining args |
| `getAllGames` | GET | `api/games` | – | – | – |
| `getAvatarKarma` | GET | `api/games/karma` | – | – | – |
| `getCrossGameQuests` | GET | `api/games/cross-game-quests` | – | – | – |
| `getGame` | GET | `api/games/{id}` | `id` | – | – |
| `getGamesByType` | GET | `api/games/by-type/{type}` | `type` | – | – |
| `getGameVersions` | GET | `api/games/{id}/versions` | `id` | – | – |
| `getKeyBindings` | GET | `api/games/{gameId}/input/bind-keys` | `gameId` | – | – |
| `getMasterVolume` | GET | `api/games/{gameId}/audio/master-volume` | `gameId` | – | – |
| `getSharedInventory` | GET | `api/games/shared-inventory` | – | – | – |
| `getSoundVolume` | GET | `api/games/{gameId}/audio/sound-volume` | `gameId` | – | – |
| `getVideoSetting` | GET | `api/games/{gameId}/video/setting` | `gameId` | – | – |
| `getVoiceVolume` | GET | `api/games/{gameId}/audio/voice-volume` | `gameId` | – | – |
| `hasItem` | GET | `api/games/shared-inventory/{itemId}/has` | `itemId` | – | – |
| `hasItemByName` | GET | `api/games/shared-inventory/has-by-name` | – | `itemName` | – |
| `installGame` | POST | `api/games/{id}/install` | `id` | `version`, `installPath` | remaining args |
| `jumpToArea` | POST | `api/games/{gameId}/areas/jump` | `gameId` | – | remaining args |
| `jumpToLevel` | POST | `api/games/{gameId}/levels/{level}/jump` | `gameId`, `level` | – | remaining args |
| `jumpToPointInLevel` | POST | `api/games/{gameId}/levels/{level}/jump-to-point` | `gameId`, `level` | – | remaining args |
| `loadAllGamesForAvatar` | GET | `api/games/load-all-for-avatar` | – | `showAllVersions`, `version` | – |
| `loadArea` | POST | `api/games/{gameId}/areas/load` | `gameId` | – | remaining args |
| `loadGame` | POST | `api/games/{gameId}/load` | `gameId` | – | remaining args |
| `loadGameById` | GET | `api/games/{id}/load` | `id` | `version`, `holonType` | – |
| `loadGameFromPath` | GET | `api/games/load-from-path` | – | `path`, `holonType` | – |
| `loadGameFromPublished` | GET | `api/games/load-from-published` | – | `publishedFilePath` | – |
| `loadGameVersion` | GET | `api/games/{id}/version/{version}` | `id`, `version` | – | – |
| `loadLevel` | POST | `api/games/{gameId}/levels/{level}/load` | `gameId`, `level` | – | remaining args |
| `publishGame` | POST | `api/games/{id}/publish` | `id` | – | remaining args |
| `removeItemFromInventory` | DELETE | `api/games/shared-inventory/{itemId}` | `itemId` | – | – |
| `republishGame` | POST | `api/games/{id}/republish` | `id` | – | remaining args |
| `searchGames` | GET | `api/games/search` | – | `query` | – |
| `setMasterVolume` | POST | `api/games/{gameId}/audio/master-volume` | `gameId` | – | remaining args |
| `setSoundVolume` | POST | `api/games/{gameId}/audio/sound-volume` | `gameId` | – | remaining args |
| `setVideoSetting` | POST | `api/games/{gameId}/video/setting` | `gameId` | – | remaining args |
| `setVoiceVolume` | POST | `api/games/{gameId}/audio/voice-volume` | `gameId` | – | remaining args |
| `showCredits` | POST | `api/games/{gameId}/ui/credits` | `gameId` | – | remaining args |
| `showMainMenu` | POST | `api/games/{gameId}/ui/main-menu` | `gameId` | – | remaining args |
| `showOptions` | POST | `api/games/{gameId}/ui/options` | `gameId` | – | remaining args |
| `showTitleScreen` | POST | `api/games/{gameId}/ui/title-screen` | `gameId` | – | remaining args |
| `startGame` | POST | `api/games/{gameId}/start` | `gameId` | – | remaining args |
| `unloadArea` | POST | `api/games/{gameId}/areas/{areaId}/unload` | `gameId`, `areaId` | – | remaining args |
| `unloadGame` | POST | `api/games/{gameId}/unload` | `gameId` | – | remaining args |
| `unloadLevel` | POST | `api/games/{gameId}/levels/{level}/unload` | `gameId`, `level` | – | remaining args |
| `unpublishGame` | POST | `api/games/{id}/unpublish` | `id` | `version` | remaining args |
| `updateGame` | PUT | `api/games/{id}` | `id` | – | remaining args |

## Example

```js
const star = new STARClient({ baseUrl: '...' });
star.setToken(jwtToken); // or: await star.auth.login({ username, password })

const { isError, message, result } = await star.games.activateGame({
    id: '<id>',
    /* ...other fields per the request body */
  });
if (isError) throw new Error(message);
console.log(result);
```
