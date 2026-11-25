# SpawnEvents — `star.spawnEvents`

Source controller: [`SpawnEventsController.cs`](https://github.com/NextGenSoftwareUK/OASIS/blob/main/STAR%20ODK/NextGenSoftware.OASIS.STAR.WebAPI/Controllers/SpawnEventsController.cs)
Route prefix: `api/spawn-events`
3 operation(s).

All methods are generated 1:1 from the controller's real `[Http*]` routes (see
[Conventions](../README.md#calling-any-endpoint)). They take a single args
object: any key matching a `{token}` in the route is substituted into the
URL; everything else becomes the query string (GET/DELETE) or JSON body
(POST/PUT).

## Methods

| Method | HTTP | Route | Route params | Query params | Body |
| --- | --- | --- | --- | --- | --- |
| `confirmSpawn` | POST | `api/spawn-events/confirm` | – | – | remaining args |
| `getPendingSpawnEvent` | GET | `api/spawn-events/pending` | – | `game` | – |
| `queueSpawnEvent` | POST | `api/spawn-events` | – | – | remaining args |

## Example

```js
const star = new STARClient({ baseUrl: '...' });
star.setToken(jwtToken); // or: await star.auth.login({ username, password })

const { isError, message, result } = await star.spawnEvents.confirmSpawn({
    /* ...other fields per the request body */
  });
if (isError) throw new Error(message);
console.log(result);
```
