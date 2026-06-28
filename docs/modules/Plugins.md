# Plugins — `star.plugins`

Source controller: [`PluginsController.cs`](https://github.com/NextGenSoftwareUK/OASIS2/blob/main/STAR%20ODK/NextGenSoftware.OASIS.STAR.WebAPI/Controllers/PluginsController.cs)
Route prefix: `api/plugins`
24 operation(s).

All methods are generated 1:1 from the controller's real `[Http*]` routes (see
[Conventions](../README.md#calling-any-endpoint)). They take a single args
object: any key matching a `{token}` in the route is substituted into the
URL; everything else becomes the query string (GET/DELETE) or JSON body
(POST/PUT).

## Methods

| Method | HTTP | Route | Route params |
| --- | --- | --- | --- |
| `activatePlugin` | POST | `api/plugins/{id}/activate` | `id` |
| `clonePlugin` | POST | `api/plugins/{id}/clone` | `id` |
| `createPlugin` | POST | `api/plugins` | – |
| `createPluginWithOptions` | POST | `api/plugins/create` | – |
| `deactivatePlugin` | POST | `api/plugins/{id}/deactivate` | `id` |
| `deletePlugin` | DELETE | `api/plugins/{id}` | `id` |
| `downloadPlugin` | POST | `api/plugins/{id}/download` | `id` |
| `editPlugin` | POST | `api/plugins/{id}/edit` | `id` |
| `getAllPlugins` | GET | `api/plugins` | – |
| `getPlugin` | GET | `api/plugins/{id}` | `id` |
| `getPluginsByType` | GET | `api/plugins/by-type/{type}` | `type` |
| `getPluginVersions` | GET | `api/plugins/{id}/versions` | `id` |
| `installPlugin` | POST | `api/plugins/{id}/install` | `id` |
| `loadAllPluginsForAvatar` | GET | `api/plugins/load-all-for-avatar` | – |
| `loadPlugin` | GET | `api/plugins/{id}/load` | `id` |
| `loadPluginFromPath` | GET | `api/plugins/load-from-path` | – |
| `loadPluginFromPublished` | GET | `api/plugins/load-from-published` | – |
| `loadPluginVersion` | GET | `api/plugins/{id}/version/{version}` | `id`, `version` |
| `publishPlugin` | POST | `api/plugins/{id}/publish` | `id` |
| `republishPlugin` | POST | `api/plugins/{id}/republish` | `id` |
| `searchPlugins` | GET | `api/plugins/search` | – |
| `uninstallPlugin` | POST | `api/plugins/{id}/uninstall` | `id` |
| `unpublishPlugin` | POST | `api/plugins/{id}/unpublish` | `id` |
| `updatePlugin` | PUT | `api/plugins/{id}` | `id` |

## Example

```js
const star = new STARClient({ baseUrl: '...' });
star.setToken(jwtToken); // or: await star.auth.login({ username, password })

const { isError, message, result } = await star.plugins.activatePlugin({
    id: '<id>',
    /* ...other fields per the request body */
  });
if (isError) throw new Error(message);
console.log(result);
```
