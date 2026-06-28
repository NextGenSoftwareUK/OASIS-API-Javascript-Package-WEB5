# Missions — `star.missions`

Source controller: [`MissionsController.cs`](https://github.com/NextGenSoftwareUK/OASIS2/blob/main/STAR%20ODK/NextGenSoftware.OASIS.STAR.WebAPI/Controllers/MissionsController.cs)
Route prefix: `api/missions`
27 operation(s).

All methods are generated 1:1 from the controller's real `[Http*]` routes (see
[Conventions](../README.md#calling-any-endpoint)). They take a single args
object: any key matching a `{token}` in the route is substituted into the
URL; everything else becomes the query string (GET/DELETE) or JSON body
(POST/PUT).

## Methods

| Method | HTTP | Route | Route params | Query params | Body |
| --- | --- | --- | --- | --- | --- |
| `activateMission` | POST | `api/missions/{id}/activate` | `id` | `version` | remaining args |
| `cloneMission` | POST | `api/missions/{id}/clone` | `id` | – | remaining args |
| `completeMission` | POST | `api/missions/{id}/complete` | `id` | – | `completionNotes` |
| `createMission` | POST | `api/missions` | – | – | remaining args |
| `createMissionWithOptions` | POST | `api/missions/create` | – | – | remaining args |
| `deactivateMission` | POST | `api/missions/{id}/deactivate` | `id` | `version` | remaining args |
| `deleteMission` | DELETE | `api/missions/{id}` | `id` | – | – |
| `downloadMission` | POST | `api/missions/{id}/download` | `id` | `version`, `downloadPath`, `reInstall` | remaining args |
| `editMission` | POST | `api/missions/{id}/edit` | `id` | – | remaining args |
| `getAllMissions` | GET | `api/missions` | – | – | – |
| `getMission` | GET | `api/missions/{id}` | `id` | – | – |
| `getMissionLeaderboard` | GET | `api/missions/{id}/leaderboard` | `id` | `limit` | – |
| `getMissionRewards` | GET | `api/missions/{id}/rewards` | `id` | – | – |
| `getMissionsByStatus` | GET | `api/missions/by-status/{status}` | `status` | – | – |
| `getMissionsByType` | GET | `api/missions/by-type/{type}` | `type` | – | – |
| `getMissionStats` | GET | `api/missions/stats` | – | – | – |
| `getMissionVersions` | GET | `api/missions/{id}/versions` | `id` | – | – |
| `loadAllMissionsForAvatar` | GET | `api/missions/load-all-for-avatar` | – | `showAllVersions`, `version` | – |
| `loadMission` | GET | `api/missions/{id}/load` | `id` | `version`, `holonType` | – |
| `loadMissionFromPath` | GET | `api/missions/load-from-path` | – | `path`, `holonType` | – |
| `loadMissionFromPublished` | GET | `api/missions/load-from-published` | – | `publishedFilePath` | – |
| `loadMissionVersion` | GET | `api/missions/{id}/version/{version}` | `id`, `version` | – | – |
| `publishMission` | POST | `api/missions/{id}/publish` | `id` | – | remaining args |
| `republishMission` | POST | `api/missions/{id}/republish` | `id` | `version` | remaining args |
| `searchMissions` | GET | `api/missions/search` | – | `query` | – |
| `unpublishMission` | POST | `api/missions/{id}/unpublish` | `id` | `version` | remaining args |
| `updateMission` | PUT | `api/missions/{id}` | `id` | – | remaining args |

## Example

```js
const star = new STARClient({ baseUrl: '...' });
star.setToken(jwtToken); // or: await star.auth.login({ username, password })

const { isError, message, result } = await star.missions.activateMission({
    id: '<id>',
    /* ...other fields per the request body */
  });
if (isError) throw new Error(message);
console.log(result);
```
