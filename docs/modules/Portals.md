# Portals — `star.portals`

Source controller: [`PortalsController.cs`](https://github.com/NextGenSoftwareUK/OASIS/blob/main/STAR%20ODK/NextGenSoftware.OASIS.STAR.WebAPI/Controllers/PortalsController.cs)
Route prefix: `api/portals`
5 operation(s).

All methods are generated 1:1 from the controller's real `[Http*]` routes (see
[Conventions](../README.md#calling-any-endpoint)). They take a single args
object: any key matching a `{token}` in the route is substituted into the
URL; everything else becomes the query string (GET/DELETE) or JSON body
(POST/PUT).

## Methods

| Method | HTTP | Route | Route params | Query params | Body |
| --- | --- | --- | --- | --- | --- |
| `getAllPortals` | GET | `api/portals` | – | – | – |
| `getPortal` | GET | `api/portals/{portalId}` | `portalId` | – | – |
| `lockPortal` | POST | `api/portals/{portalId}/lock` | `portalId` | – | remaining args |
| `registerPortal` | POST | `api/portals` | – | – | remaining args |
| `unlockPortal` | POST | `api/portals/{portalId}/unlock` | `portalId` | – | remaining args |

## Example

```js
const star = new STARClient({ baseUrl: '...' });
star.setToken(jwtToken); // or: await star.auth.login({ username, password })

const { isError, message, result } = await star.portals.getAllPortals({});
if (isError) throw new Error(message);
console.log(result);
```
