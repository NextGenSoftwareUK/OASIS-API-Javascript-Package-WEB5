# Templates — `star.templates`

Source controller: [`TemplatesController.cs`](https://github.com/NextGenSoftwareUK/OASIS2/blob/main/STAR%20ODK/NextGenSoftware.OASIS.STAR.WebAPI/Controllers/TemplatesController.cs)
Route prefix: `api/templates`
22 operation(s).

All methods are generated 1:1 from the controller's real `[Http*]` routes (see
[Conventions](../README.md#calling-any-endpoint)). They take a single args
object: any key matching a `{token}` in the route is substituted into the
URL; everything else becomes the query string (GET/DELETE) or JSON body
(POST/PUT).

## Methods

| Method | HTTP | Route | Route params | Query params | Body |
| --- | --- | --- | --- | --- | --- |
| `activateTemplate` | POST | `api/templates/{id}/activate` | `id` | – | remaining args |
| `cloneTemplate` | POST | `api/templates/{id}/clone` | `id` | – | remaining args |
| `createTemplate` | POST | `api/templates` | – | – | remaining args |
| `createTemplateWithOptions` | POST | `api/templates/create` | – | – | remaining args |
| `deactivateTemplate` | POST | `api/templates/{id}/deactivate` | `id` | – | remaining args |
| `deleteTemplate` | DELETE | `api/templates/{id}` | `id` | – | – |
| `downloadTemplate` | POST | `api/templates/{id}/download` | `id` | – | remaining args |
| `editTemplate` | PUT | `api/templates/{id}/edit` | `id` | – | remaining args |
| `getAllTemplates` | GET | `api/templates` | – | – | – |
| `getTemplate` | GET | `api/templates/{id}` | `id` | – | – |
| `getTemplatesByType` | GET | `api/templates/by-type/{type}` | `type` | – | – |
| `getTemplateVersions` | GET | `api/templates/{id}/versions` | `id` | – | – |
| `loadAllTemplatesForAvatar` | GET | `api/templates/load-all-for-avatar` | – | – | – |
| `loadTemplateFromPath` | GET | `api/templates/load-from-path` | – | `path` | – |
| `loadTemplateFromPublished` | GET | `api/templates/load-from-published` | – | `publishedFilePath` | – |
| `loadTemplateVersion` | GET | `api/templates/{id}/versions/{version}` | `id`, `version` | – | – |
| `publishTemplate` | POST | `api/templates/{id}/publish` | `id` | – | remaining args |
| `republishTemplate` | POST | `api/templates/{id}/republish` | `id` | – | remaining args |
| `searchTemplates` | GET | `api/templates/search` | – | `searchTerm` | – |
| `searchTemplatesPost` | POST | `api/templates/search` | – | – | remaining args |
| `unpublishTemplate` | POST | `api/templates/{id}/unpublish` | `id` | – | remaining args |
| `updateTemplate` | PUT | `api/templates/{id}` | `id` | – | remaining args |

## Example

```js
const star = new STARClient({ baseUrl: '...' });
star.setToken(jwtToken); // or: await star.auth.login({ username, password })

const { isError, message, result } = await star.templates.activateTemplate({
    id: '<id>',
    /* ...other fields per the request body */
  });
if (isError) throw new Error(message);
console.log(result);
```
