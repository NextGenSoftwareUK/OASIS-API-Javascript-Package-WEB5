# Starnet — `star.starnet`

Source controller: [`StarnetController.cs`](https://github.com/NextGenSoftwareUK/OASIS/blob/main/STAR%20ODK/NextGenSoftware.OASIS.STAR.WebAPI/Controllers/StarnetController.cs)
Route prefix: `api/starnet`
3 operation(s).

All methods are generated 1:1 from the controller's real `[Http*]` routes (see
[Conventions](../README.md#calling-any-endpoint)). They take a single args
object: any key matching a `{token}` in the route is substituted into the
URL; everything else becomes the query string (GET/DELETE) or JSON body
(POST/PUT).

## Methods

| Method | HTTP | Route | Route params | Query params | Body |
| --- | --- | --- | --- | --- | --- |
| `addDependency` | POST | `api/starnet/{type}/{id}/dependencies` | `type`, `id` | – | remaining args |
| `downloadPackage` | GET | `api/starnet/{type}/{id}/package` | `type`, `id` | – | – |
| `removeDependency` | POST | `api/starnet/{type}/{id}/dependencies/remove` | `type`, `id` | – | remaining args |

## Example

```js
const star = new STARClient({ baseUrl: '...' });
star.setToken(jwtToken); // or: await star.auth.login({ username, password })

const { isError, message, result } = await star.starnet.addDependency({
    type: '<type>',
    id: '<id>',
    /* ...other fields per the request body */
  });
if (isError) throw new Error(message);
console.log(result);
```
