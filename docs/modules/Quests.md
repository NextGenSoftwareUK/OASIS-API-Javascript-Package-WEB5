# Quests — `star.quests`

Source controller: [`QuestsController.cs`](https://github.com/NextGenSoftwareUK/OASIS2/blob/main/STAR%20ODK/NextGenSoftware.OASIS.STAR.WebAPI/Controllers/QuestsController.cs)
Route prefix: `api/quests`
41 operation(s).

All methods are generated 1:1 from the controller's real `[Http*]` routes (see
[Conventions](../README.md#calling-any-endpoint)). They take a single args
object: any key matching a `{token}` in the route is substituted into the
URL; everything else becomes the query string (GET/DELETE) or JSON body
(POST/PUT).

## Methods

| Method | HTTP | Route | Route params |
| --- | --- | --- | --- |
| `activateQuest` | POST | `api/quests/{id}/activate` | `id` |
| `addQuestObjective` | POST | `api/quests/{id}/objectives` | `id` |
| `addSubQuest` | POST | `api/quests/{id}/subquests` | `id` |
| `applyQuestProgress` | POST | `api/quests/{id}/progress` | `id` |
| `canStartQuest` | GET | `api/quests/{id}/can-start` | `id` |
| `cloneQuest` | POST | `api/quests/{id}/clone` | `id` |
| `completeQuest` | POST | `api/quests/{id}/complete` | `id` |
| `completeQuestObjective` | POST | `api/quests/{id}/objectives/{objectiveId}/complete` | `id`, `objectiveId` |
| `completeQuestObjectiveByIdentifiers` | POST | `api/quests/objectives/complete` | – |
| `createIQuest` | POST | `api/quests` | – |
| `createQuestWithOptions` | POST | `api/quests/create` | – |
| `deactivateQuest` | POST | `api/quests/{id}/deactivate` | `id` |
| `deleteIQuest` | DELETE | `api/quests/{id}` | `id` |
| `downloadQuest` | POST | `api/quests/{id}/download` | `id` |
| `editQuest` | POST | `api/quests/{id}/edit` | `id` |
| `getAllIQuests` | GET | `api/quests` | – |
| `getAllQuestsForAvatar` | GET | `api/quests/all-for-avatar` | – |
| `getAllQuestsForAvatarGame` | GET | `api/quests/all-for-avatar/game` | – |
| `getIQuest` | GET | `api/quests/{id}` | `id` |
| `getIQuestsByAvatar` | GET | `api/quests/by-avatar/{avatarId}` | `avatarId` |
| `getQuestLeaderboard` | GET | `api/quests/{id}/leaderboard` | `id` |
| `getQuestRewards` | GET | `api/quests/{id}/rewards` | `id` |
| `getQuestsByStatus` | GET | `api/quests/by-status/{status}` | `status` |
| `getQuestsByStatusGame` | GET | `api/quests/by-status/{status}/game` | `status` |
| `getQuestsByType` | GET | `api/quests/by-type/{type}` | `type` |
| `getQuestStats` | GET | `api/quests/stats` | – |
| `getQuestVersions` | GET | `api/quests/{id}/versions` | `id` |
| `loadAllQuestsForAvatar` | GET | `api/quests/load-all-for-avatar` | – |
| `loadQuest` | GET | `api/quests/{id}/load` | `id` |
| `loadQuestFromPath` | GET | `api/quests/load-from-path` | – |
| `loadQuestFromPublished` | GET | `api/quests/load-from-published` | – |
| `loadQuestVersion` | GET | `api/quests/{id}/version/{version}` | `id`, `version` |
| `publishQuest` | POST | `api/quests/{id}/publish` | `id` |
| `removeQuestObjective` | DELETE | `api/quests/{parentId}/objectives/{objectiveId}` | `parentId`, `objectiveId` |
| `removeSubQuest` | DELETE | `api/quests/{parentId}/subquests/{subQuestId}` | `parentId`, `subQuestId` |
| `republishQuest` | POST | `api/quests/{id}/republish` | `id` |
| `resetObjectiveProgress` | POST | `api/quests/{id}/progress/reset` | `id` |
| `searchQuests` | GET | `api/quests/search` | – |
| `startQuest` | POST | `api/quests/{id}/start` | `id` |
| `unpublishQuest` | POST | `api/quests/{id}/unpublish` | `id` |
| `updateIQuest` | PUT | `api/quests/{id}` | `id` |

## Example

```js
const star = new STARClient({ baseUrl: '...' });
star.setToken(jwtToken); // or: await star.auth.login({ username, password })

const { isError, message, result } = await star.quests.activateQuest({
    id: '<id>',
    /* ...other fields per the request body */
  });
if (isError) throw new Error(message);
console.log(result);
```
