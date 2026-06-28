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

| Method | HTTP | Route | Route params |
| --- | --- | --- | --- |
| `activateGame` | POST | `api/games/{id}/activate` | `id` |
| `addItemToInventory` | POST | `api/games/shared-inventory/add` | – |
| `bindKeys` | POST | `api/games/{gameId}/input/bind-keys` | `gameId` |
| `cloneGame` | POST | `api/games/{id}/clone` | `id` |
| `createGame` | POST | `api/games` | – |
| `createGameWithOptions` | POST | `api/games/create` | – |
| `deactivateGame` | POST | `api/games/{id}/deactivate` | `id` |
| `deleteGame` | DELETE | `api/games/{id}` | `id` |
| `downloadGame` | POST | `api/games/{id}/download` | `id` |
| `editGame` | POST | `api/games/{id}/edit` | `id` |
| `endGame` | POST | `api/games/{gameId}/end` | `gameId` |
| `getAllGames` | GET | `api/games` | – |
| `getAvatarKarma` | GET | `api/games/karma` | – |
| `getCrossGameQuests` | GET | `api/games/cross-game-quests` | – |
| `getGame` | GET | `api/games/{id}` | `id` |
| `getGamesByType` | GET | `api/games/by-type/{type}` | `type` |
| `getGameVersions` | GET | `api/games/{id}/versions` | `id` |
| `getKeyBindings` | GET | `api/games/{gameId}/input/bind-keys` | `gameId` |
| `getMasterVolume` | GET | `api/games/{gameId}/audio/master-volume` | `gameId` |
| `getSharedInventory` | GET | `api/games/shared-inventory` | – |
| `getSoundVolume` | GET | `api/games/{gameId}/audio/sound-volume` | `gameId` |
| `getVideoSetting` | GET | `api/games/{gameId}/video/setting` | `gameId` |
| `getVoiceVolume` | GET | `api/games/{gameId}/audio/voice-volume` | `gameId` |
| `hasItem` | GET | `api/games/shared-inventory/{itemId}/has` | `itemId` |
| `hasItemByName` | GET | `api/games/shared-inventory/has-by-name` | – |
| `installGame` | POST | `api/games/{id}/install` | `id` |
| `jumpToArea` | POST | `api/games/{gameId}/areas/jump` | `gameId` |
| `jumpToLevel` | POST | `api/games/{gameId}/levels/{level}/jump` | `gameId`, `level` |
| `jumpToPointInLevel` | POST | `api/games/{gameId}/levels/{level}/jump-to-point` | `gameId`, `level` |
| `loadAllGamesForAvatar` | GET | `api/games/load-all-for-avatar` | – |
| `loadArea` | POST | `api/games/{gameId}/areas/load` | `gameId` |
| `loadGame` | POST | `api/games/{gameId}/load` | `gameId` |
| `loadGameById` | GET | `api/games/{id}/load` | `id` |
| `loadGameFromPath` | GET | `api/games/load-from-path` | – |
| `loadGameFromPublished` | GET | `api/games/load-from-published` | – |
| `loadGameVersion` | GET | `api/games/{id}/version/{version}` | `id`, `version` |
| `loadLevel` | POST | `api/games/{gameId}/levels/{level}/load` | `gameId`, `level` |
| `publishGame` | POST | `api/games/{id}/publish` | `id` |
| `removeItemFromInventory` | DELETE | `api/games/shared-inventory/{itemId}` | `itemId` |
| `republishGame` | POST | `api/games/{id}/republish` | `id` |
| `searchGames` | GET | `api/games/search` | – |
| `setMasterVolume` | POST | `api/games/{gameId}/audio/master-volume` | `gameId` |
| `setSoundVolume` | POST | `api/games/{gameId}/audio/sound-volume` | `gameId` |
| `setVideoSetting` | POST | `api/games/{gameId}/video/setting` | `gameId` |
| `setVoiceVolume` | POST | `api/games/{gameId}/audio/voice-volume` | `gameId` |
| `showCredits` | POST | `api/games/{gameId}/ui/credits` | `gameId` |
| `showMainMenu` | POST | `api/games/{gameId}/ui/main-menu` | `gameId` |
| `showOptions` | POST | `api/games/{gameId}/ui/options` | `gameId` |
| `showTitleScreen` | POST | `api/games/{gameId}/ui/title-screen` | `gameId` |
| `startGame` | POST | `api/games/{gameId}/start` | `gameId` |
| `unloadArea` | POST | `api/games/{gameId}/areas/{areaId}/unload` | `gameId`, `areaId` |
| `unloadGame` | POST | `api/games/{gameId}/unload` | `gameId` |
| `unloadLevel` | POST | `api/games/{gameId}/levels/{level}/unload` | `gameId`, `level` |
| `unpublishGame` | POST | `api/games/{id}/unpublish` | `id` |
| `updateGame` | PUT | `api/games/{id}` | `id` |

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
