# MapEntities — `star.mapEntities`

Source controller: [`MapEntitiesController.cs`](https://github.com/NextGenSoftwareUK/OASIS/blob/main/STAR%20ODK/NextGenSoftware.OASIS.STAR.WebAPI/Controllers/MapEntitiesController.cs)
Route prefix: `api/maps`
2 operation(s).

All methods are generated 1:1 from the controller's real `[Http*]` routes (see
[Conventions](../README.md#calling-any-endpoint)). They take a single args
object: any key matching a `{token}` in the route is substituted into the
URL; everything else becomes the query string (GET/DELETE) or JSON body
(POST/PUT).

## Methods

| Method | HTTP | Route | Route params | Query params | Body |
| --- | --- | --- | --- | --- | --- |
| `getEntities` | GET | `api/maps/{game}/{map}/entities` | `game`, `map` | – | – |
| `putEntities` | PUT | `api/maps/{game}/{map}/entities` | `game`, `map` | – | remaining args |

## Example

```js
const star = new STARClient({ baseUrl: '...' });
star.setToken(jwtToken); // or: await star.auth.login({ username, password })

const { isError, message, result } = await star.mapEntities.getEntities({
    game: '<game>',
    map: '<map>'
  });
if (isError) throw new Error(message);
console.log(result);
```
