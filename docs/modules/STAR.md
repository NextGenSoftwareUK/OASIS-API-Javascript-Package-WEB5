# STAR — `star.sTAR`

Source controller: [`STARController.cs`](https://github.com/NextGenSoftwareUK/OASIS2/blob/main/STAR%20ODK/NextGenSoftware.OASIS.STAR.WebAPI/Controllers/STARController.cs)
Route prefix: `api/sTAR`
4 operation(s).

All methods are generated 1:1 from the controller's real `[Http*]` routes (see
[Conventions](../README.md#calling-any-endpoint)). They take a single args
object: any key matching a `{token}` in the route is substituted into the
URL; everything else becomes the query string (GET/DELETE) or JSON body
(POST/PUT).

## Methods

| Method | HTTP | Route | Route params | Query params | Body |
| --- | --- | --- | --- | --- | --- |
| `beamIn` | POST | `api/sTAR/beam-in` | – | – | remaining args |
| `extinguishSTAR` | POST | `api/sTAR/extinguish` | – | – | remaining args |
| `getStatus` | GET | `api/sTAR/status` | – | – | – |
| `igniteSTAR` | POST | `api/sTAR/ignite` | – | – | remaining args |

## Example

```js
const star = new STARClient({ baseUrl: '...' });
star.setToken(jwtToken); // or: await star.auth.login({ username, password })

const { isError, message, result } = await star.sTAR.beamIn({
    /* ...other fields per the request body */
  });
if (isError) throw new Error(message);
console.log(result);
```
