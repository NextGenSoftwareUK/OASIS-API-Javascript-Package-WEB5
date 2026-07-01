# Cosmic — `star.cosmic`

Source controller: [`CosmicController.cs`](https://github.com/NextGenSoftwareUK/OASIS/blob/main/STAR%20ODK/NextGenSoftware.OASIS.STAR.WebAPI/Controllers/CosmicController.cs)
Route prefix: `api/cosmic`
72 operation(s).

Every method takes a single args object: any key matching a `{token}` in the route is substituted into the URL; everything else becomes the query string (GET/DELETE) or JSON body (POST/PUT). Every call resolves to the standard OASIS envelope:

```ts
{
  isError: boolean;
  isWarning: boolean;
  message: string;
  errorCode?: string;
  result: T; // see each endpoint's Response section below
}
```

## Operations

### `addAsteroid`

Adds an Asteroid to a Galaxy.

**POST** `api/cosmic/galaxy/{parentGalaxyId}/asteroid`

Route parameters:

| Field | Type |
| --- | --- |
| `parentGalaxyId` | `Guid` |

**Request**

Body type: `IAsteroid`

_No fields._

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IActionResult` (not part of the request/response payload).

**Example**

```js
const { isError, message, result } = await star.cosmic.addAsteroid({
    parentGalaxyId: '<parentGalaxyId>'
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": null
}
```

---

### `addComet`

Adds a Comet to a Galaxy.

**POST** `api/cosmic/galaxy/{parentGalaxyId}/comet`

Route parameters:

| Field | Type |
| --- | --- |
| `parentGalaxyId` | `Guid` |

**Request**

Body type: `IComet`

_No fields._

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IActionResult` (not part of the request/response payload).

**Example**

```js
const { isError, message, result } = await star.cosmic.addComet({
    parentGalaxyId: '<parentGalaxyId>'
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": null
}
```

---

### `addGalaxy`

Adds a Galaxy to a GalaxyCluster.

**POST** `api/cosmic/galaxy-cluster/{parentGalaxyClusterId}/galaxy`

Route parameters:

| Field | Type |
| --- | --- |
| `parentGalaxyClusterId` | `Guid` |

**Request**

Body type: `IGalaxy`

| Field | Type |
| --- | --- |
| `SuperStar` | `ISuperStar` |
| `SolarSystems` | `List<ISolarSystem>` |
| `Nebulas` | `List<INebula>` |
| `Stars` | `List<IStar>` |
| `Planets` | `List<IPlanet>` |
| `Asteroids` | `List<IAsteroid>` |
| `Comets` | `List<IComet>` |
| `Meteroids` | `List<IMeteroid>` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IActionResult` (not part of the request/response payload).

**Example**

```js
const { isError, message, result } = await star.cosmic.addGalaxy({
    parentGalaxyClusterId: '<parentGalaxyClusterId>',
    superStar: { "Stars": [{ "Luminosity": 1, "StarType": {  }, "StarClassification": {  }, "StarBinaryType": {  } }] },
    solarSystems: [{ "Star": { "Luminosity": 1, "StarType": {  }, "StarClassification": {  }, "StarBinaryType": {  } }, "Planets": [{ "Moons": [{  }] }], "Asteroids": [{  }], "Comets": [{  }], "Meteroids": [{  }] }],
    nebulas: [{  }],
    stars: [{ "Luminosity": 1, "StarType": {  }, "StarClassification": {  }, "StarBinaryType": {  } }],
    planets: [{ "Moons": [{  }] }],
    asteroids: [{  }],
    comets: [{  }],
    meteroids: [{  }]
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": null
}
```

---

### `addGalaxyCluster`

Adds a GalaxyCluster to a Universe.

**POST** `api/cosmic/universe/{parentUniverseId}/galaxy-cluster`

Route parameters:

| Field | Type |
| --- | --- |
| `parentUniverseId` | `Guid` |

**Request**

Body type: `IGalaxyCluster`

| Field | Type |
| --- | --- |
| `Galaxies` | `List<IGalaxy>` |
| `SolarSystems` | `List<ISolarSystem>` |
| `Stars` | `List<IStar>` |
| `Planets` | `List<IPlanet>` |
| `Asteroids` | `List<IAsteroid>` |
| `Comets` | `List<IComet>` |
| `Meteroids` | `List<IMeteroid>` |
| `IsSuperCluster` | `bool` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IActionResult` (not part of the request/response payload).

**Example**

```js
const { isError, message, result } = await star.cosmic.addGalaxyCluster({
    parentUniverseId: '<parentUniverseId>',
    galaxies: [{ "SuperStar": { "Stars": [{ "Luminosity": 1, "StarType": {  }, "StarClassification": {  }, "StarBinaryType": {  } }] }, "SolarSystems": [{ "Star": {}, "Planets": [{ "Moons": [{  }] }], "Asteroids": [{  }], "Comets": [{  }], "Meteroids": [{  }] }], "Nebulas": [{  }], "Stars": [], "Planets": [], "Asteroids": [], "Comets": [], "Meteroids": [] }],
    solarSystems: [{ "Star": { "Luminosity": 1, "StarType": {  }, "StarClassification": {  }, "StarBinaryType": {  } }, "Planets": [{ "Moons": [{  }] }], "Asteroids": [{  }], "Comets": [{  }], "Meteroids": [{  }] }],
    stars: [{ "Luminosity": 1, "StarType": {  }, "StarClassification": {  }, "StarBinaryType": {  } }],
    planets: [{ "Moons": [{  }] }],
    asteroids: [{  }],
    comets: [{  }],
    meteroids: [{  }],
    isSuperCluster: true
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": null
}
```

---

### `addMeteroid`

Adds a Meteroid to a Galaxy.

**POST** `api/cosmic/galaxy/{parentGalaxyId}/meteroid`

Route parameters:

| Field | Type |
| --- | --- |
| `parentGalaxyId` | `Guid` |

**Request**

Body type: `IMeteroid`

_No fields._

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IActionResult` (not part of the request/response payload).

**Example**

```js
const { isError, message, result } = await star.cosmic.addMeteroid({
    parentGalaxyId: '<parentGalaxyId>'
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": null
}
```

---

### `addMoon`

Adds a Moon to a Planet.

**POST** `api/cosmic/planet/{parentPlanetId}/moon`

Route parameters:

| Field | Type |
| --- | --- |
| `parentPlanetId` | `Guid` |

**Request**

Body type: `IMoon`

_No fields._

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IActionResult` (not part of the request/response payload).

**Example**

```js
const { isError, message, result } = await star.cosmic.addMoon({
    parentPlanetId: '<parentPlanetId>'
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": null
}
```

---

### `addMultiverse`

Adds a Multiverse to an Omniverse.

**POST** `api/cosmic/omniverse/{parentOmniverseId}/multiverse`

Route parameters:

| Field | Type |
| --- | --- |
| `parentOmniverseId` | `Guid` |

**Request**

Body type: `IMultiverse`

| Field | Type |
| --- | --- |
| `GrandSuperStar` | `IGrandSuperStar` |
| `Dimensions` | `IMultiverseDimensions` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IActionResult` (not part of the request/response payload).

**Example**

```js
const { isError, message, result } = await star.cosmic.addMultiverse({
    parentOmniverseId: '<parentOmniverseId>',
    grandSuperStar: { "Stars": [ /* <I> */ ] },
    dimensions: { "FirstDimension": { "Universe": { "Dimensions": [{ "DimensionLevel": {  } }], "GalaxyClusters": [{ "Galaxies": [{ "SuperStar": { "Stars": [{ "Luminosity": 1, "StarType": {  }, "StarClassification": {  }, "StarBinaryType": {  } }] }, "SolarSystems": [{ "Star": {}, "Planets": [{ "Moons": [{  }] }], "Asteroids": [{  }], "Comets": [{  }], "Meteroids": [{  }] }], "Nebulas": [{  }], "Stars": [], "Planets": [], "Asteroids": [], "Comets": [], "Meteroids": [] }], "SolarSystems": [], "Stars": [], "Planets": [], "Asteroids": [], "Comets": [], "Meteroids": [], "IsSuperCluster": true }], "SolarSystems": [], "Nebulas": [], "Stars": [], "Planets": [], "Asteroids": [], "Comets": [], "Meteroids": [] } }, "SecondDimension": { "Universe": {} }, "ThirdDimension": { "UniversePrime": {}, "MagicVerse": {}, "ParallelUniverses": [] }, "FourthDimension": { "Universe": {} }, "FifthDimension": { "Universe": {} }, "SixthDimension": { "Universe": {} }, "SeventhDimension": { "Universe": {} }, "CustomDimensions": [] }
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": null
}
```

---

### `addPlanet`

Adds a Planet to a SolarSystem.

**POST** `api/cosmic/solar-system/{parentSolarSystemId}/planet`

Route parameters:

| Field | Type |
| --- | --- |
| `parentSolarSystemId` | `Guid` |

**Request**

Body type: `IPlanet`

| Field | Type |
| --- | --- |
| `Moons` | `List<IMoon>` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IActionResult` (not part of the request/response payload).

**Example**

```js
const { isError, message, result } = await star.cosmic.addPlanet({
    parentSolarSystemId: '<parentSolarSystemId>',
    moons: [{  }]
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": null
}
```

---

### `addSolarSystem`

Adds a SolarSystem to a Galaxy.

**POST** `api/cosmic/galaxy/{parentGalaxyId}/solar-system`

Route parameters:

| Field | Type |
| --- | --- |
| `parentGalaxyId` | `Guid` |

**Request**

Body type: `ISolarSystem`

| Field | Type |
| --- | --- |
| `Star` | `IStar` |
| `Planets` | `List<IPlanet>` |
| `Asteroids` | `List<IAsteroid>` |
| `Comets` | `List<IComet>` |
| `Meteroids` | `List<IMeteroid>` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IActionResult` (not part of the request/response payload).

**Example**

```js
const { isError, message, result } = await star.cosmic.addSolarSystem({
    parentGalaxyId: '<parentGalaxyId>',
    star: { "Luminosity": 1, "StarType": {  }, "StarClassification": {  }, "StarBinaryType": {  } },
    planets: [{ "Moons": [{  }] }],
    asteroids: [{  }],
    comets: [{  }],
    meteroids: [{  }]
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": null
}
```

---

### `addStar`

Adds a Star to a Galaxy.

**POST** `api/cosmic/galaxy/{parentGalaxyId}/star`

Route parameters:

| Field | Type |
| --- | --- |
| `parentGalaxyId` | `Guid` |

**Request**

Body type: `IStar`

| Field | Type |
| --- | --- |
| `Luminosity` | `int` |
| `StarType` | `StarType` |
| `StarClassification` | `StarClassification` |
| `StarBinaryType` | `StarBinaryType` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IActionResult` (not part of the request/response payload).

**Example**

```js
const { isError, message, result } = await star.cosmic.addStar({
    parentGalaxyId: '<parentGalaxyId>',
    luminosity: 1,
    starType: {  },
    starClassification: {  },
    starBinaryType: {  }
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": null
}
```

---

### `addUniverse`

Adds a Universe to a Multiverse.

**POST** `api/cosmic/multiverse/{parentMultiverseId}/universe`

Route parameters:

| Field | Type |
| --- | --- |
| `parentMultiverseId` | `Guid` |

**Request**

Body type: `IUniverse`

| Field | Type |
| --- | --- |
| `Dimensions` | `List<IDimension>` |
| `GalaxyClusters` | `List<IGalaxyCluster>` |
| `SolarSystems` | `List<ISolarSystem>` |
| `Nebulas` | `List<INebula>` |
| `Stars` | `List<IStar>` |
| `Planets` | `List<IPlanet>` |
| `Asteroids` | `List<IAsteroid>` |
| `Comets` | `List<IComet>` |
| `Meteroids` | `List<IMeteroid>` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IActionResult` (not part of the request/response payload).

**Example**

```js
const { isError, message, result } = await star.cosmic.addUniverse({
    parentMultiverseId: '<parentMultiverseId>',
    dimensions: [{ "DimensionLevel": {  } }],
    galaxyClusters: [{ "Galaxies": [{ "SuperStar": { "Stars": [{ "Luminosity": 1, "StarType": {  }, "StarClassification": {  }, "StarBinaryType": {  } }] }, "SolarSystems": [{ "Star": {}, "Planets": [{ "Moons": [{  }] }], "Asteroids": [{  }], "Comets": [{  }], "Meteroids": [{  }] }], "Nebulas": [{  }], "Stars": [], "Planets": [], "Asteroids": [], "Comets": [], "Meteroids": [] }], "SolarSystems": [], "Stars": [], "Planets": [], "Asteroids": [], "Comets": [], "Meteroids": [], "IsSuperCluster": true }],
    solarSystems: [{ "Star": { "Luminosity": 1, "StarType": {  }, "StarClassification": {  }, "StarBinaryType": {  } }, "Planets": [{ "Moons": [{  }] }], "Asteroids": [{  }], "Comets": [{  }], "Meteroids": [{  }] }],
    nebulas: [{  }],
    stars: [{ "Luminosity": 1, "StarType": {  }, "StarClassification": {  }, "StarBinaryType": {  } }],
    planets: [{ "Moons": [{  }] }],
    asteroids: [{  }],
    comets: [{  }],
    meteroids: [{  }]
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": null
}
```

---

### `deleteAsteroid`

Deletes an Asteroid.

**DELETE** `api/cosmic/asteroid/{asteroidId}`

Route parameters:

| Field | Type |
| --- | --- |
| `asteroidId` | `Guid` |

**Request**

Query parameters:

| Field | Type |
| --- | --- |
| `softDelete` | `bool (optional)` |
| `providerType` | `ProviderType (optional)` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IActionResult` (not part of the request/response payload).

**Example**

```js
const { isError, message, result } = await star.cosmic.deleteAsteroid({
    asteroidId: '<asteroidId>',
    softDelete: true,
    providerType: '<providerType>'
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": null
}
```

---

### `deleteBlackHole`

Deletes a BlackHole.

**DELETE** `api/cosmic/blackhole/{blackHoleId}`

Route parameters:

| Field | Type |
| --- | --- |
| `blackHoleId` | `Guid` |

**Request**

Query parameters:

| Field | Type |
| --- | --- |
| `softDelete` | `bool (optional)` |
| `providerType` | `ProviderType (optional)` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IActionResult` (not part of the request/response payload).

**Example**

```js
const { isError, message, result } = await star.cosmic.deleteBlackHole({
    blackHoleId: '<blackHoleId>',
    softDelete: true,
    providerType: '<providerType>'
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": null
}
```

---

### `deleteComet`

Deletes a Comet.

**DELETE** `api/cosmic/comet/{cometId}`

Route parameters:

| Field | Type |
| --- | --- |
| `cometId` | `Guid` |

**Request**

Query parameters:

| Field | Type |
| --- | --- |
| `softDelete` | `bool (optional)` |
| `providerType` | `ProviderType (optional)` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IActionResult` (not part of the request/response payload).

**Example**

```js
const { isError, message, result } = await star.cosmic.deleteComet({
    cometId: '<cometId>',
    softDelete: true,
    providerType: '<providerType>'
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": null
}
```

---

### `deleteCosmicRay`

Deletes a CosmicRay.

**DELETE** `api/cosmic/cosmic-ray/{rayId}`

Route parameters:

| Field | Type |
| --- | --- |
| `rayId` | `Guid` |

**Request**

Query parameters:

| Field | Type |
| --- | --- |
| `softDelete` | `bool (optional)` |
| `providerType` | `ProviderType (optional)` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IActionResult` (not part of the request/response payload).

**Example**

```js
const { isError, message, result } = await star.cosmic.deleteCosmicRay({
    rayId: '<rayId>',
    softDelete: true,
    providerType: '<providerType>'
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": null
}
```

---

### `deleteCosmicWave`

Deletes a CosmicWave.

**DELETE** `api/cosmic/cosmic-wave/{waveId}`

Route parameters:

| Field | Type |
| --- | --- |
| `waveId` | `Guid` |

**Request**

Query parameters:

| Field | Type |
| --- | --- |
| `softDelete` | `bool (optional)` |
| `providerType` | `ProviderType (optional)` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IActionResult` (not part of the request/response payload).

**Example**

```js
const { isError, message, result } = await star.cosmic.deleteCosmicWave({
    waveId: '<waveId>',
    softDelete: true,
    providerType: '<providerType>'
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": null
}
```

---

### `deleteGalaxy`

Deletes a Galaxy.

**DELETE** `api/cosmic/galaxy/{galaxyId}`

Route parameters:

| Field | Type |
| --- | --- |
| `galaxyId` | `Guid` |

**Request**

Query parameters:

| Field | Type |
| --- | --- |
| `softDelete` | `bool (optional)` |
| `providerType` | `ProviderType (optional)` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IActionResult` (not part of the request/response payload).

**Example**

```js
const { isError, message, result } = await star.cosmic.deleteGalaxy({
    galaxyId: '<galaxyId>',
    softDelete: true,
    providerType: '<providerType>'
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": null
}
```

---

### `deleteGalaxyCluster`

Deletes a GalaxyCluster.

**DELETE** `api/cosmic/galaxy-cluster/{galaxyClusterId}`

Route parameters:

| Field | Type |
| --- | --- |
| `galaxyClusterId` | `Guid` |

**Request**

Query parameters:

| Field | Type |
| --- | --- |
| `softDelete` | `bool (optional)` |
| `providerType` | `ProviderType (optional)` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IActionResult` (not part of the request/response payload).

**Example**

```js
const { isError, message, result } = await star.cosmic.deleteGalaxyCluster({
    galaxyClusterId: '<galaxyClusterId>',
    softDelete: true,
    providerType: '<providerType>'
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": null
}
```

---

### `deleteGravitationalWave`

Deletes a GravitationalWave.

**DELETE** `api/cosmic/gravitational-wave/{waveId}`

Route parameters:

| Field | Type |
| --- | --- |
| `waveId` | `Guid` |

**Request**

Query parameters:

| Field | Type |
| --- | --- |
| `softDelete` | `bool (optional)` |
| `providerType` | `ProviderType (optional)` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IActionResult` (not part of the request/response payload).

**Example**

```js
const { isError, message, result } = await star.cosmic.deleteGravitationalWave({
    waveId: '<waveId>',
    softDelete: true,
    providerType: '<providerType>'
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": null
}
```

---

### `deleteMeteroid`

Deletes a Meteroid.

**DELETE** `api/cosmic/meteroid/{meteroidId}`

Route parameters:

| Field | Type |
| --- | --- |
| `meteroidId` | `Guid` |

**Request**

Query parameters:

| Field | Type |
| --- | --- |
| `softDelete` | `bool (optional)` |
| `providerType` | `ProviderType (optional)` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IActionResult` (not part of the request/response payload).

**Example**

```js
const { isError, message, result } = await star.cosmic.deleteMeteroid({
    meteroidId: '<meteroidId>',
    softDelete: true,
    providerType: '<providerType>'
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": null
}
```

---

### `deleteMoon`

Deletes a Moon.

**DELETE** `api/cosmic/moon/{moonId}`

Route parameters:

| Field | Type |
| --- | --- |
| `moonId` | `Guid` |

**Request**

Query parameters:

| Field | Type |
| --- | --- |
| `softDelete` | `bool (optional)` |
| `providerType` | `ProviderType (optional)` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IActionResult` (not part of the request/response payload).

**Example**

```js
const { isError, message, result } = await star.cosmic.deleteMoon({
    moonId: '<moonId>',
    softDelete: true,
    providerType: '<providerType>'
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": null
}
```

---

### `deleteMultiverse`

Deletes a Multiverse.

**DELETE** `api/cosmic/multiverse/{multiverseId}`

Route parameters:

| Field | Type |
| --- | --- |
| `multiverseId` | `Guid` |

**Request**

Query parameters:

| Field | Type |
| --- | --- |
| `softDelete` | `bool (optional)` |
| `providerType` | `ProviderType (optional)` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IActionResult` (not part of the request/response payload).

**Example**

```js
const { isError, message, result } = await star.cosmic.deleteMultiverse({
    multiverseId: '<multiverseId>',
    softDelete: true,
    providerType: '<providerType>'
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": null
}
```

---

### `deleteNebula`

Deletes a Nebula.

**DELETE** `api/cosmic/nebula/{nebulaId}`

Route parameters:

| Field | Type |
| --- | --- |
| `nebulaId` | `Guid` |

**Request**

Query parameters:

| Field | Type |
| --- | --- |
| `softDelete` | `bool (optional)` |
| `providerType` | `ProviderType (optional)` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IActionResult` (not part of the request/response payload).

**Example**

```js
const { isError, message, result } = await star.cosmic.deleteNebula({
    nebulaId: '<nebulaId>',
    softDelete: true,
    providerType: '<providerType>'
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": null
}
```

---

### `deleteOmniverse`

Deletes an Omniverse.

**DELETE** `api/cosmic/omniverse/{omniverseId}`

Route parameters:

| Field | Type |
| --- | --- |
| `omniverseId` | `Guid` |

**Request**

Query parameters:

| Field | Type |
| --- | --- |
| `softDelete` | `bool (optional)` |
| `providerType` | `ProviderType (optional)` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IActionResult` (not part of the request/response payload).

**Example**

```js
const { isError, message, result } = await star.cosmic.deleteOmniverse({
    omniverseId: '<omniverseId>',
    softDelete: true,
    providerType: '<providerType>'
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": null
}
```

---

### `deletePlanet`

Deletes a Planet.

**DELETE** `api/cosmic/planet/{planetId}`

Route parameters:

| Field | Type |
| --- | --- |
| `planetId` | `Guid` |

**Request**

Query parameters:

| Field | Type |
| --- | --- |
| `softDelete` | `bool (optional)` |
| `providerType` | `ProviderType (optional)` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IActionResult` (not part of the request/response payload).

**Example**

```js
const { isError, message, result } = await star.cosmic.deletePlanet({
    planetId: '<planetId>',
    softDelete: true,
    providerType: '<providerType>'
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": null
}
```

---

### `deletePortal`

Deletes a Portal.

**DELETE** `api/cosmic/portal/{portalId}`

Route parameters:

| Field | Type |
| --- | --- |
| `portalId` | `Guid` |

**Request**

Query parameters:

| Field | Type |
| --- | --- |
| `softDelete` | `bool (optional)` |
| `providerType` | `ProviderType (optional)` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IActionResult` (not part of the request/response payload).

**Example**

```js
const { isError, message, result } = await star.cosmic.deletePortal({
    portalId: '<portalId>',
    softDelete: true,
    providerType: '<providerType>'
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": null
}
```

---

### `deleteSolarSystem`

Deletes a SolarSystem.

**DELETE** `api/cosmic/solar-system/{solarSystemId}`

Route parameters:

| Field | Type |
| --- | --- |
| `solarSystemId` | `Guid` |

**Request**

Query parameters:

| Field | Type |
| --- | --- |
| `softDelete` | `bool (optional)` |
| `providerType` | `ProviderType (optional)` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IActionResult` (not part of the request/response payload).

**Example**

```js
const { isError, message, result } = await star.cosmic.deleteSolarSystem({
    solarSystemId: '<solarSystemId>',
    softDelete: true,
    providerType: '<providerType>'
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": null
}
```

---

### `deleteSpaceTimeAbnormally`

Deletes a SpaceTimeAbnormally.

**DELETE** `api/cosmic/spacetime-abnormally/{abnormallyId}`

Route parameters:

| Field | Type |
| --- | --- |
| `abnormallyId` | `Guid` |

**Request**

Query parameters:

| Field | Type |
| --- | --- |
| `softDelete` | `bool (optional)` |
| `providerType` | `ProviderType (optional)` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IActionResult` (not part of the request/response payload).

**Example**

```js
const { isError, message, result } = await star.cosmic.deleteSpaceTimeAbnormally({
    abnormallyId: '<abnormallyId>',
    softDelete: true,
    providerType: '<providerType>'
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": null
}
```

---

### `deleteSpaceTimeDistortion`

Deletes a SpaceTimeDistortion.

**DELETE** `api/cosmic/spacetime-distortion/{distortionId}`

Route parameters:

| Field | Type |
| --- | --- |
| `distortionId` | `Guid` |

**Request**

Query parameters:

| Field | Type |
| --- | --- |
| `softDelete` | `bool (optional)` |
| `providerType` | `ProviderType (optional)` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IActionResult` (not part of the request/response payload).

**Example**

```js
const { isError, message, result } = await star.cosmic.deleteSpaceTimeDistortion({
    distortionId: '<distortionId>',
    softDelete: true,
    providerType: '<providerType>'
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": null
}
```

---

### `deleteStar`

Deletes a Star.

**DELETE** `api/cosmic/star/{starId}`

Route parameters:

| Field | Type |
| --- | --- |
| `starId` | `Guid` |

**Request**

Query parameters:

| Field | Type |
| --- | --- |
| `softDelete` | `bool (optional)` |
| `providerType` | `ProviderType (optional)` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IActionResult` (not part of the request/response payload).

**Example**

```js
const { isError, message, result } = await star.cosmic.deleteStar({
    starId: '<starId>',
    softDelete: true,
    providerType: '<providerType>'
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": null
}
```

---

### `deleteStarDust`

Deletes a StarDust.

**DELETE** `api/cosmic/stardust/{starDustId}`

Route parameters:

| Field | Type |
| --- | --- |
| `starDustId` | `Guid` |

**Request**

Query parameters:

| Field | Type |
| --- | --- |
| `softDelete` | `bool (optional)` |
| `providerType` | `ProviderType (optional)` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IActionResult` (not part of the request/response payload).

**Example**

```js
const { isError, message, result } = await star.cosmic.deleteStarDust({
    starDustId: '<starDustId>',
    softDelete: true,
    providerType: '<providerType>'
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": null
}
```

---

### `deleteStarGate`

Deletes a StarGate.

**DELETE** `api/cosmic/stargate/{starGateId}`

Route parameters:

| Field | Type |
| --- | --- |
| `starGateId` | `Guid` |

**Request**

Query parameters:

| Field | Type |
| --- | --- |
| `softDelete` | `bool (optional)` |
| `providerType` | `ProviderType (optional)` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IActionResult` (not part of the request/response payload).

**Example**

```js
const { isError, message, result } = await star.cosmic.deleteStarGate({
    starGateId: '<starGateId>',
    softDelete: true,
    providerType: '<providerType>'
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": null
}
```

---

### `deleteSuperVerse`

Deletes a SuperVerse.

**DELETE** `api/cosmic/superverse/{superVerseId}`

Route parameters:

| Field | Type |
| --- | --- |
| `superVerseId` | `Guid` |

**Request**

Query parameters:

| Field | Type |
| --- | --- |
| `softDelete` | `bool (optional)` |
| `providerType` | `ProviderType (optional)` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IActionResult` (not part of the request/response payload).

**Example**

```js
const { isError, message, result } = await star.cosmic.deleteSuperVerse({
    superVerseId: '<superVerseId>',
    softDelete: true,
    providerType: '<providerType>'
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": null
}
```

---

### `deleteTemporalRift`

Deletes a TemporalRift.

**DELETE** `api/cosmic/temporal-rift/{riftId}`

Route parameters:

| Field | Type |
| --- | --- |
| `riftId` | `Guid` |

**Request**

Query parameters:

| Field | Type |
| --- | --- |
| `softDelete` | `bool (optional)` |
| `providerType` | `ProviderType (optional)` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IActionResult` (not part of the request/response payload).

**Example**

```js
const { isError, message, result } = await star.cosmic.deleteTemporalRift({
    riftId: '<riftId>',
    softDelete: true,
    providerType: '<providerType>'
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": null
}
```

---

### `deleteUniverse`

Deletes a Universe.

**DELETE** `api/cosmic/universe/{universeId}`

Route parameters:

| Field | Type |
| --- | --- |
| `universeId` | `Guid` |

**Request**

Query parameters:

| Field | Type |
| --- | --- |
| `softDelete` | `bool (optional)` |
| `providerType` | `ProviderType (optional)` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IActionResult` (not part of the request/response payload).

**Example**

```js
const { isError, message, result } = await star.cosmic.deleteUniverse({
    universeId: '<universeId>',
    softDelete: true,
    providerType: '<providerType>'
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": null
}
```

---

### `deleteWormHole`

Deletes a WormHole.

**DELETE** `api/cosmic/wormhole/{wormHoleId}`

Route parameters:

| Field | Type |
| --- | --- |
| `wormHoleId` | `Guid` |

**Request**

Query parameters:

| Field | Type |
| --- | --- |
| `softDelete` | `bool (optional)` |
| `providerType` | `ProviderType (optional)` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IActionResult` (not part of the request/response payload).

**Example**

```js
const { isError, message, result } = await star.cosmic.deleteWormHole({
    wormHoleId: '<wormHoleId>',
    softDelete: true,
    providerType: '<providerType>'
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": null
}
```

---

### `getChildrenForParent`

Gets children of a specific type for a parent holon.

**GET** `api/cosmic/children/{parentId}`

Route parameters:

| Field | Type |
| --- | --- |
| `parentId` | `Guid` |

**Request**

Query parameters:

| Field | Type |
| --- | --- |
| `parentHolonType` | `string` |
| `childHolonType` | `string` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IActionResult` (not part of the request/response payload).

**Example**

```js
const { isError, message, result } = await star.cosmic.getChildrenForParent({
    parentId: '<parentId>',
    parentHolonType: 'example string',
    childHolonType: 'example string'
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": null
}
```

---

### `getMoonsForGalaxy`

Gets all moons for a galaxy.

**GET** `api/cosmic/galaxy/{galaxyId}/moons`

Route parameters:

| Field | Type |
| --- | --- |
| `galaxyId` | `Guid` |

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IActionResult` (not part of the request/response payload).

**Example**

```js
const { isError, message, result } = await star.cosmic.getMoonsForGalaxy({
    galaxyId: '<galaxyId>'
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": null
}
```

---

### `getOmniverse`

Gets the Omniverse instance.

**GET** `api/cosmic/omniverse`

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IOmiverse`

| Field | Type |
| --- | --- |
| `GreatGrandSuperStar` | `IGreatGrandSuperStar` |
| `Dimensions` | `IOmniverseDimensions` |
| `Multiverses` | `List<IMultiverse>` |

**Example**

```js
const { isError, message, result } = await star.cosmic.getOmniverse({});
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": { "GreatGrandSuperStar": {  }, "Dimensions": { "EighthDimension": {  }, "NinthDimension": {  }, "TenthDimension": {  }, "EleventhDimension": {  }, "TwelfthDimension": {  }, "CustomDimensions": [{ "DimensionLevel": {  } }] }, "Multiverses": [{ "GrandSuperStar": { "Stars": [ /* <I> */ ] }, "Dimensions": { "FirstDimension": { "Universe": { "Dimensions": [], "GalaxyClusters": [{ "Galaxies": [{ "SuperStar": { "Stars": [{ "Luminosity": 1, "StarType": {  }, "StarClassification": {  }, "StarBinaryType": {  } }] }, "SolarSystems": [{ "Star": {}, "Planets": [{ "Moons": [{  }] }], "Asteroids": [{  }], "Comets": [{  }], "Meteroids": [{  }] }], "Nebulas": [{  }], "Stars": [], "Planets": [], "Asteroids": [], "Comets": [], "Meteroids": [] }], "SolarSystems": [], "Stars": [], "Planets": [], "Asteroids": [], "Comets": [], "Meteroids": [], "IsSuperCluster": true }], "SolarSystems": [], "Nebulas": [], "Stars": [], "Planets": [], "Asteroids": [], "Comets": [], "Meteroids": [] } }, "SecondDimension": { "Universe": {} }, "ThirdDimension": { "UniversePrime": {}, "MagicVerse": {}, "ParallelUniverses": [] }, "FourthDimension": { "Universe": {} }, "FifthDimension": { "Universe": {} }, "SixthDimension": { "Universe": {} }, "SeventhDimension": { "Universe": {} }, "CustomDimensions": [] } }] }
}
```

---

### `getPlanetsForGalaxy`

Gets all planets for a galaxy.

**GET** `api/cosmic/galaxy/{galaxyId}/planets`

Route parameters:

| Field | Type |
| --- | --- |
| `galaxyId` | `Guid` |

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IActionResult` (not part of the request/response payload).

**Example**

```js
const { isError, message, result } = await star.cosmic.getPlanetsForGalaxy({
    galaxyId: '<galaxyId>'
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": null
}
```

---

### `getPlanetsForSolarSystem`

Gets all planets for a solar system.

**GET** `api/cosmic/solar-system/{solarSystemId}/planets`

Route parameters:

| Field | Type |
| --- | --- |
| `solarSystemId` | `Guid` |

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IActionResult` (not part of the request/response payload).

**Example**

```js
const { isError, message, result } = await star.cosmic.getPlanetsForSolarSystem({
    solarSystemId: '<solarSystemId>'
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": null
}
```

---

### `getSolarSystemsForGalaxy`

Gets all solar systems for a galaxy.

**GET** `api/cosmic/galaxy/{galaxyId}/solar-systems`

Route parameters:

| Field | Type |
| --- | --- |
| `galaxyId` | `Guid` |

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IActionResult` (not part of the request/response payload).

**Example**

```js
const { isError, message, result } = await star.cosmic.getSolarSystemsForGalaxy({
    galaxyId: '<galaxyId>'
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": null
}
```

---

### `getStarsForGalaxy`

Gets all stars for a galaxy.

**GET** `api/cosmic/galaxy/{galaxyId}/stars`

Route parameters:

| Field | Type |
| --- | --- |
| `galaxyId` | `Guid` |

**Request**

No request body.

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IActionResult` (not part of the request/response payload).

**Example**

```js
const { isError, message, result } = await star.cosmic.getStarsForGalaxy({
    galaxyId: '<galaxyId>'
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": null
}
```

---

### `saveOmniverse`

Saves an Omniverse.

**POST** `api/cosmic/omniverse`

**Request**

Body type: `IOmiverse`

| Field | Type |
| --- | --- |
| `GreatGrandSuperStar` | `IGreatGrandSuperStar` |
| `Dimensions` | `IOmniverseDimensions` |
| `Multiverses` | `List<IMultiverse>` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IActionResult` (not part of the request/response payload).

**Example**

```js
const { isError, message, result } = await star.cosmic.saveOmniverse({
    greatGrandSuperStar: {  },
    dimensions: { "EighthDimension": {  }, "NinthDimension": {  }, "TenthDimension": {  }, "EleventhDimension": {  }, "TwelfthDimension": {  }, "CustomDimensions": [{ "DimensionLevel": {  } }] },
    multiverses: [{ "GrandSuperStar": { "Stars": [ /* <I> */ ] }, "Dimensions": { "FirstDimension": { "Universe": { "Dimensions": [{ "DimensionLevel": {  } }], "GalaxyClusters": [{ "Galaxies": [{ "SuperStar": { "Stars": [{ "Luminosity": 1, "StarType": {  }, "StarClassification": {  }, "StarBinaryType": {  } }] }, "SolarSystems": [{ "Star": {}, "Planets": [{ "Moons": [{  }] }], "Asteroids": [{  }], "Comets": [{  }], "Meteroids": [{  }] }], "Nebulas": [{  }], "Stars": [], "Planets": [], "Asteroids": [], "Comets": [], "Meteroids": [] }], "SolarSystems": [], "Stars": [], "Planets": [], "Asteroids": [], "Comets": [], "Meteroids": [], "IsSuperCluster": true }], "SolarSystems": [], "Nebulas": [], "Stars": [], "Planets": [], "Asteroids": [], "Comets": [], "Meteroids": [] } }, "SecondDimension": { "Universe": {} }, "ThirdDimension": { "UniversePrime": {}, "MagicVerse": {}, "ParallelUniverses": [] }, "FourthDimension": { "Universe": {} }, "FifthDimension": { "Universe": {} }, "SixthDimension": { "Universe": {} }, "SeventhDimension": { "Universe": {} }, "CustomDimensions": [] } }]
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": null
}
```

---

### `searchChildrenForParent`

Searches children for a parent holon.

**GET** `api/cosmic/search-children`

**Request**

Query parameters:

| Field | Type |
| --- | --- |
| `searchTerm` | `string` |
| `parentId` | `Guid` |
| `parentHolonType` | `string` |
| `childHolonType` | `string` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IActionResult` (not part of the request/response payload).

**Example**

```js
const { isError, message, result } = await star.cosmic.searchChildrenForParent({
    searchTerm: 'example string',
    parentId: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
    parentHolonType: 'example string',
    childHolonType: 'example string'
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": null
}
```

---

### `searchHolonsForParent`

Searches holons for a parent (async).

**GET** `api/cosmic/search-holons`

**Request**

Query parameters:

| Field | Type |
| --- | --- |
| `searchTerm` | `string` |
| `parentId` | `Guid` |
| `parentHolonType` | `string` |
| `childHolonType` | `string` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IActionResult` (not part of the request/response payload).

**Example**

```js
const { isError, message, result } = await star.cosmic.searchHolonsForParent({
    searchTerm: 'example string',
    parentId: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
    parentHolonType: 'example string',
    childHolonType: 'example string'
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": null
}
```

---

### `searchHolonsForParentSync`

Searches holons for a parent (synchronous).

**GET** `api/cosmic/search-holons-sync`

**Request**

Query parameters:

| Field | Type |
| --- | --- |
| `searchTerm` | `string` |
| `parentId` | `Guid` |
| `parentHolonType` | `string` |
| `childHolonType` | `string` |
| `searchOnlyForCurrentAvatar` | `bool (optional)` |
| `providerType` | `ProviderType (optional)` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IHolon` (array)

| Field | Type |
| --- | --- |
| `CreatedOASISType` | `EnumValue<OASISType>` |
| `CreatedProviderType` | `EnumValue<ProviderType>` |
| `GlobalHolonData` | `GlobalHolonData` |
| `InstanceSavedOnProviderType` | `EnumValue<ProviderType>` |
| `IsChanged` | `bool` |
| `IsNewHolon` | `bool` |
| `IsSaving` | `bool` |
| `Original` | `IHolon` |
| `PreviousVersionId` | `Guid` |
| `PreviousVersionProviderUniqueStorageKey` | `Dictionary<ProviderType, string>` |
| `ProviderMetaData` | `Dictionary<ProviderType, Dictionary<string, string>>` |
| `ProviderUniqueStorageKey` | `Dictionary<ProviderType, string>` |
| `Nodes` | `IList<INode>` |
| `ParentOmniverseId` | `Guid` |
| `ParentOmniverse` | `IOmiverse` |
| `ParentMultiverseId` | `Guid` |
| `ParentMultiverse` | `IMultiverse` |
| `ParentUniverseId` | `Guid` |
| `ParentUniverse` | `IUniverse` |
| `ParentDimensionId` | `Guid` |
| `ParentDimension` | `IDimension` |
| `DimensionLevel` | `DimensionLevel` |
| `SubDimensionLevel` | `SubDimensionLevel` |
| `ParentGalaxyClusterId` | `Guid` |
| `ParentGalaxyCluster` | `IGalaxyCluster` |
| `ParentGalaxyId` | `Guid` |
| `ParentGalaxy` | `IGalaxy` |
| `ParentSolarSystemId` | `Guid` |
| `ParentSolarSystem` | `ISolarSystem` |
| `ParentGreatGrandSuperStarId` | `Guid` |
| `ParentGreatGrandSuperStar` | `IGreatGrandSuperStar` |
| `ParentGrandSuperStarId` | `Guid` |
| `ParentGrandSuperStar` | `IGrandSuperStar` |
| `ParentSuperStarId` | `Guid` |
| `ParentSuperStar` | `ISuperStar` |
| `ParentStarId` | `Guid` |
| `ParentStar` | `IStar` |
| `ParentPlanetId` | `Guid` |
| `ParentPlanet` | `IPlanet` |
| `ParentMoonId` | `Guid` |
| `ParentMoon` | `IMoon` |
| `ParentCelestialSpaceId` | `Guid` |
| `ParentCelestialSpace` | `ICelestialSpace` |
| `ParentCelestialBodyId` | `Guid` |
| `ParentCelestialBody` | `ICelestialBody` |
| `ParentZomeId` | `Guid` |
| `ParentZome` | `IZome` |

**Example**

```js
const { isError, message, result } = await star.cosmic.searchHolonsForParentSync({
    searchTerm: 'example string',
    parentId: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
    parentHolonType: 'example string',
    childHolonType: 'example string',
    searchOnlyForCurrentAvatar: true,
    providerType: '<providerType>'
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": [{ "CreatedOASISType": { "Score": 1.0 }, "CreatedProviderType": { "Score": 1.0 }, "GlobalHolonData": {  }, "InstanceSavedOnProviderType": {}, "IsChanged": true, "IsNewHolon": true, "IsSaving": true, "Original": {}, "PreviousVersionId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "PreviousVersionProviderUniqueStorageKey": { "<ProviderType>": "example string" }, "ProviderMetaData": { "<ProviderType>": { "<string>": "example string" } }, "ProviderUniqueStorageKey": { "<ProviderType>": "example string" }, "Nodes": [{ "Id": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "Parent": {}, "NodeName": "example string", "NodeType": {  } }], "ParentOmniverseId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentOmniverse": { "GreatGrandSuperStar": {  }, "Dimensions": { "EighthDimension": {  }, "NinthDimension": {  }, "TenthDimension": {  }, "EleventhDimension": {  }, "TwelfthDimension": {  }, "CustomDimensions": [{ "DimensionLevel": {  } }] }, "Multiverses": [{ "GrandSuperStar": { "Stars": [ /* <I> */ ] }, "Dimensions": { "FirstDimension": { "Universe": { "Dimensions": [], "GalaxyClusters": [{ "Galaxies": [{ "SuperStar": { "Stars": [{ "Luminosity": 1, "StarType": {  }, "StarClassification": {  }, "StarBinaryType": {  } }] }, "SolarSystems": [{ "Star": {}, "Planets": [{ "Moons": [{  }] }], "Asteroids": [{  }], "Comets": [{  }], "Meteroids": [{  }] }], "Nebulas": [{  }], "Stars": [], "Planets": [], "Asteroids": [], "Comets": [], "Meteroids": [] }], "SolarSystems": [], "Stars": [], "Planets": [], "Asteroids": [], "Comets": [], "Meteroids": [], "IsSuperCluster": true }], "SolarSystems": [], "Nebulas": [], "Stars": [], "Planets": [], "Asteroids": [], "Comets": [], "Meteroids": [] } }, "SecondDimension": { "Universe": {} }, "ThirdDimension": { "UniversePrime": {}, "MagicVerse": {}, "ParallelUniverses": [] }, "FourthDimension": { "Universe": {} }, "FifthDimension": { "Universe": {} }, "SixthDimension": { "Universe": {} }, "SeventhDimension": { "Universe": {} }, "CustomDimensions": [] } }] }, "ParentMultiverseId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentMultiverse": {}, "ParentUniverseId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentUniverse": {}, "ParentDimensionId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentDimension": {}, "DimensionLevel": {}, "SubDimensionLevel": {  }, "ParentGalaxyClusterId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentGalaxyCluster": {}, "ParentGalaxyId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentGalaxy": {}, "ParentSolarSystemId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentSolarSystem": {}, "ParentGreatGrandSuperStarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentGreatGrandSuperStar": {}, "ParentGrandSuperStarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentGrandSuperStar": {}, "ParentSuperStarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentSuperStar": {}, "ParentStarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentStar": {}, "ParentPlanetId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentPlanet": {}, "ParentMoonId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentMoon": {}, "ParentCelestialSpaceId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentCelestialSpace": { "NearestStar": {}, "CelestialBodies": /* <ReadOnlyCollection<ICelestialBody>> */, "CelestialSpaces": /* <ReadOnlyCollection<ICelestialSpace>> */, "Children": /* <new ReadOnlyCollection<IHolon>> */ }, "ParentCelestialBodyId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentCelestialBody": { "CelestialBodyCore": { "Holons": [], "Zomes": [{ "HoloNETClient": { "WebSocket": /* <WebSocket.WebSocket> */, "Logger": /* <ILogger> */, "HolochainVersion": {  } }, "ZomeName": "example string", "Holons": [{ "GlobalHolonData": {}, "ProviderUniqueStorageKey": { "<ProviderType>": "example string" }, "ProviderMetaData": { "<ProviderType>": { "<string>": "example string" } }, "CustomKey": "example string", "IsNewHolon": true, "IsSaving": true, "PreviousVersionId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "PreviousVersionProviderUniqueStorageKey": { "<ProviderType>": "example string" }, "CreatedProviderType": {}, "InstanceSavedOnProviderType": {}, "CreatedOASISType": {}, "Nodes": [], "ParentOmniverseId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentOmniverse": {}, "ParentMultiverseId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentMultiverse": {}, "ParentUniverseId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentUniverse": {}, "ParentDimensionId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentDimension": {}, "DimensionLevel": {}, "SubDimensionLevel": {}, "ParentGalaxyClusterId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentGalaxyCluster": {}, "ParentGalaxyId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentGalaxy": {}, "ParentSolarSystemId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentSolarSystem": {}, "ParentGreatGrandSuperStarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentGreatGrandSuperStar": {}, "ParentGrandSuperStarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentGrandSuperStar": {}, "ParentSuperStarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentSuperStar": {}, "ParentStarId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentStar": {}, "ParentPlanetId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentPlanet": {}, "ParentMoonId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentMoon": {}, "ParentCelestialSpaceId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentCelestialSpace": {}, "ParentCelestialBodyId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentCelestialBody": {}, "ParentZomeId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentZome": {} }] }] }, "CurrentOrbitAngleOfParentStar": 1, "Density": 1, "DistanceFromParentStarInMetres": 1, "GravitaionalPull": 1, "Id": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "Mass": 1, "NumberActiveAvatars": 1, "NumberRegisteredAvatars": 1, "OrbitPeriod": 1, "OrbitPositionFromParentStar": 1, "ProviderUniqueStorageKey": { "<ProviderType>": "example string" }, "RotationPeriod": 1, "RotationSpeed": 1, "TiltAngle": 1, "Weight": 1 }, "ParentZomeId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "ParentZome": {} }]
}
```

---

### `updateAsteroid`

Updates an Asteroid.

**PUT** `api/cosmic/asteroid`

**Request**

Body type: `IAsteroid`

_No fields._

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IActionResult` (not part of the request/response payload).

**Example**

```js
const { isError, message, result } = await star.cosmic.updateAsteroid({
    saveChildren: true,
    recursive: true,
    maxChildDepth: 1,
    continueOnError: true,
    saveChildrenOnProvider: true,
    providerType: '<providerType>'
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": null
}
```

---

### `updateBlackHole`

Updates a BlackHole.

**PUT** `api/cosmic/blackhole`

**Request**

Body type: `IBlackHole`

_No fields._

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IActionResult` (not part of the request/response payload).

**Example**

```js
const { isError, message, result } = await star.cosmic.updateBlackHole({
    saveChildren: true,
    recursive: true,
    maxChildDepth: 1,
    continueOnError: true,
    saveChildrenOnProvider: true,
    providerType: '<providerType>'
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": null
}
```

---

### `updateComet`

Updates a Comet.

**PUT** `api/cosmic/comet`

**Request**

Body type: `IComet`

_No fields._

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IActionResult` (not part of the request/response payload).

**Example**

```js
const { isError, message, result } = await star.cosmic.updateComet({
    saveChildren: true,
    recursive: true,
    maxChildDepth: 1,
    continueOnError: true,
    saveChildrenOnProvider: true,
    providerType: '<providerType>'
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": null
}
```

---

### `updateCosmicRay`

Updates a CosmicRay.

**PUT** `api/cosmic/cosmic-ray`

**Request**

Body type: `ICosmicRay`

_No fields._

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IActionResult` (not part of the request/response payload).

**Example**

```js
const { isError, message, result } = await star.cosmic.updateCosmicRay({
    saveChildren: true,
    recursive: true,
    maxChildDepth: 1,
    continueOnError: true,
    saveChildrenOnProvider: true,
    providerType: '<providerType>'
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": null
}
```

---

### `updateCosmicWave`

Updates a CosmicWave.

**PUT** `api/cosmic/cosmic-wave`

**Request**

Body type: `ICosmicWave`

_No fields._

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IActionResult` (not part of the request/response payload).

**Example**

```js
const { isError, message, result } = await star.cosmic.updateCosmicWave({
    saveChildren: true,
    recursive: true,
    maxChildDepth: 1,
    continueOnError: true,
    saveChildrenOnProvider: true,
    providerType: '<providerType>'
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": null
}
```

---

### `updateGalaxy`

Updates a Galaxy.

**PUT** `api/cosmic/galaxy`

**Request**

Body type: `IGalaxy`

| Field | Type |
| --- | --- |
| `SuperStar` | `ISuperStar` |
| `SolarSystems` | `List<ISolarSystem>` |
| `Nebulas` | `List<INebula>` |
| `Stars` | `List<IStar>` |
| `Planets` | `List<IPlanet>` |
| `Asteroids` | `List<IAsteroid>` |
| `Comets` | `List<IComet>` |
| `Meteroids` | `List<IMeteroid>` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IActionResult` (not part of the request/response payload).

**Example**

```js
const { isError, message, result } = await star.cosmic.updateGalaxy({
    saveChildren: true,
    recursive: true,
    maxChildDepth: 1,
    continueOnError: true,
    saveChildrenOnProvider: true,
    providerType: '<providerType>',
    superStar: { "Stars": [{ "Luminosity": 1, "StarType": {  }, "StarClassification": {  }, "StarBinaryType": {  } }] },
    solarSystems: [{ "Star": { "Luminosity": 1, "StarType": {  }, "StarClassification": {  }, "StarBinaryType": {  } }, "Planets": [{ "Moons": [{  }] }], "Asteroids": [{  }], "Comets": [{  }], "Meteroids": [{  }] }],
    nebulas: [{  }],
    stars: [{ "Luminosity": 1, "StarType": {  }, "StarClassification": {  }, "StarBinaryType": {  } }],
    planets: [{ "Moons": [{  }] }],
    asteroids: [{  }],
    comets: [{  }],
    meteroids: [{  }]
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": null
}
```

---

### `updateGalaxyCluster`

Updates a GalaxyCluster.

**PUT** `api/cosmic/galaxy-cluster`

**Request**

Body type: `IGalaxyCluster`

| Field | Type |
| --- | --- |
| `Galaxies` | `List<IGalaxy>` |
| `SolarSystems` | `List<ISolarSystem>` |
| `Stars` | `List<IStar>` |
| `Planets` | `List<IPlanet>` |
| `Asteroids` | `List<IAsteroid>` |
| `Comets` | `List<IComet>` |
| `Meteroids` | `List<IMeteroid>` |
| `IsSuperCluster` | `bool` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IActionResult` (not part of the request/response payload).

**Example**

```js
const { isError, message, result } = await star.cosmic.updateGalaxyCluster({
    saveChildren: true,
    recursive: true,
    maxChildDepth: 1,
    continueOnError: true,
    saveChildrenOnProvider: true,
    providerType: '<providerType>',
    galaxies: [{ "SuperStar": { "Stars": [{ "Luminosity": 1, "StarType": {  }, "StarClassification": {  }, "StarBinaryType": {  } }] }, "SolarSystems": [{ "Star": {}, "Planets": [{ "Moons": [{  }] }], "Asteroids": [{  }], "Comets": [{  }], "Meteroids": [{  }] }], "Nebulas": [{  }], "Stars": [], "Planets": [], "Asteroids": [], "Comets": [], "Meteroids": [] }],
    solarSystems: [{ "Star": { "Luminosity": 1, "StarType": {  }, "StarClassification": {  }, "StarBinaryType": {  } }, "Planets": [{ "Moons": [{  }] }], "Asteroids": [{  }], "Comets": [{  }], "Meteroids": [{  }] }],
    stars: [{ "Luminosity": 1, "StarType": {  }, "StarClassification": {  }, "StarBinaryType": {  } }],
    planets: [{ "Moons": [{  }] }],
    asteroids: [{  }],
    comets: [{  }],
    meteroids: [{  }],
    isSuperCluster: true
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": null
}
```

---

### `updateGravitationalWave`

Updates a GravitationalWave.

**PUT** `api/cosmic/gravitational-wave`

**Request**

Body type: `IGravitationalWave`

_No fields._

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IActionResult` (not part of the request/response payload).

**Example**

```js
const { isError, message, result } = await star.cosmic.updateGravitationalWave({
    saveChildren: true,
    recursive: true,
    maxChildDepth: 1,
    continueOnError: true,
    saveChildrenOnProvider: true,
    providerType: '<providerType>'
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": null
}
```

---

### `updateMeteroid`

Updates a Meteroid.

**PUT** `api/cosmic/meteroid`

**Request**

Body type: `IMeteroid`

_No fields._

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IActionResult` (not part of the request/response payload).

**Example**

```js
const { isError, message, result } = await star.cosmic.updateMeteroid({
    saveChildren: true,
    recursive: true,
    maxChildDepth: 1,
    continueOnError: true,
    saveChildrenOnProvider: true,
    providerType: '<providerType>'
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": null
}
```

---

### `updateMoon`

Updates a Moon.

**PUT** `api/cosmic/moon`

**Request**

Body type: `IMoon`

_No fields._

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IActionResult` (not part of the request/response payload).

**Example**

```js
const { isError, message, result } = await star.cosmic.updateMoon({
    saveChildren: true,
    recursive: true,
    maxChildDepth: 1,
    continueOnError: true,
    saveChildrenOnProvider: true,
    providerType: '<providerType>'
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": null
}
```

---

### `updateMultiverse`

Updates a Multiverse.

**PUT** `api/cosmic/multiverse`

**Request**

Body type: `IMultiverse`

| Field | Type |
| --- | --- |
| `GrandSuperStar` | `IGrandSuperStar` |
| `Dimensions` | `IMultiverseDimensions` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IActionResult` (not part of the request/response payload).

**Example**

```js
const { isError, message, result } = await star.cosmic.updateMultiverse({
    saveChildren: true,
    recursive: true,
    maxChildDepth: 1,
    continueOnError: true,
    saveChildrenOnProvider: true,
    providerType: '<providerType>',
    grandSuperStar: { "Stars": [ /* <I> */ ] },
    dimensions: { "FirstDimension": { "Universe": { "Dimensions": [{ "DimensionLevel": {  } }], "GalaxyClusters": [{ "Galaxies": [{ "SuperStar": { "Stars": [{ "Luminosity": 1, "StarType": {  }, "StarClassification": {  }, "StarBinaryType": {  } }] }, "SolarSystems": [{ "Star": {}, "Planets": [{ "Moons": [{  }] }], "Asteroids": [{  }], "Comets": [{  }], "Meteroids": [{  }] }], "Nebulas": [{  }], "Stars": [], "Planets": [], "Asteroids": [], "Comets": [], "Meteroids": [] }], "SolarSystems": [], "Stars": [], "Planets": [], "Asteroids": [], "Comets": [], "Meteroids": [], "IsSuperCluster": true }], "SolarSystems": [], "Nebulas": [], "Stars": [], "Planets": [], "Asteroids": [], "Comets": [], "Meteroids": [] } }, "SecondDimension": { "Universe": {} }, "ThirdDimension": { "UniversePrime": {}, "MagicVerse": {}, "ParallelUniverses": [] }, "FourthDimension": { "Universe": {} }, "FifthDimension": { "Universe": {} }, "SixthDimension": { "Universe": {} }, "SeventhDimension": { "Universe": {} }, "CustomDimensions": [] }
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": null
}
```

---

### `updateNebula`

Updates a Nebula.

**PUT** `api/cosmic/nebula`

**Request**

Body type: `INebula`

_No fields._

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IActionResult` (not part of the request/response payload).

**Example**

```js
const { isError, message, result } = await star.cosmic.updateNebula({
    saveChildren: true,
    recursive: true,
    maxChildDepth: 1,
    continueOnError: true,
    saveChildrenOnProvider: true,
    providerType: '<providerType>'
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": null
}
```

---

### `updateOmniverse`

Updates an Omniverse.

**PUT** `api/cosmic/omniverse`

**Request**

Body type: `IOmiverse`

| Field | Type |
| --- | --- |
| `GreatGrandSuperStar` | `IGreatGrandSuperStar` |
| `Dimensions` | `IOmniverseDimensions` |
| `Multiverses` | `List<IMultiverse>` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IActionResult` (not part of the request/response payload).

**Example**

```js
const { isError, message, result } = await star.cosmic.updateOmniverse({
    saveChildren: true,
    recursive: true,
    maxChildDepth: 1,
    continueOnError: true,
    saveChildrenOnProvider: true,
    providerType: '<providerType>',
    greatGrandSuperStar: {  },
    dimensions: { "EighthDimension": {  }, "NinthDimension": {  }, "TenthDimension": {  }, "EleventhDimension": {  }, "TwelfthDimension": {  }, "CustomDimensions": [{ "DimensionLevel": {  } }] },
    multiverses: [{ "GrandSuperStar": { "Stars": [ /* <I> */ ] }, "Dimensions": { "FirstDimension": { "Universe": { "Dimensions": [{ "DimensionLevel": {  } }], "GalaxyClusters": [{ "Galaxies": [{ "SuperStar": { "Stars": [{ "Luminosity": 1, "StarType": {  }, "StarClassification": {  }, "StarBinaryType": {  } }] }, "SolarSystems": [{ "Star": {}, "Planets": [{ "Moons": [{  }] }], "Asteroids": [{  }], "Comets": [{  }], "Meteroids": [{  }] }], "Nebulas": [{  }], "Stars": [], "Planets": [], "Asteroids": [], "Comets": [], "Meteroids": [] }], "SolarSystems": [], "Stars": [], "Planets": [], "Asteroids": [], "Comets": [], "Meteroids": [], "IsSuperCluster": true }], "SolarSystems": [], "Nebulas": [], "Stars": [], "Planets": [], "Asteroids": [], "Comets": [], "Meteroids": [] } }, "SecondDimension": { "Universe": {} }, "ThirdDimension": { "UniversePrime": {}, "MagicVerse": {}, "ParallelUniverses": [] }, "FourthDimension": { "Universe": {} }, "FifthDimension": { "Universe": {} }, "SixthDimension": { "Universe": {} }, "SeventhDimension": { "Universe": {} }, "CustomDimensions": [] } }]
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": null
}
```

---

### `updatePlanet`

Updates a Planet.

**PUT** `api/cosmic/planet`

**Request**

Body type: `IPlanet`

| Field | Type |
| --- | --- |
| `Moons` | `List<IMoon>` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IActionResult` (not part of the request/response payload).

**Example**

```js
const { isError, message, result } = await star.cosmic.updatePlanet({
    saveChildren: true,
    recursive: true,
    maxChildDepth: 1,
    continueOnError: true,
    saveChildrenOnProvider: true,
    providerType: '<providerType>',
    moons: [{  }]
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": null
}
```

---

### `updatePortal`

Updates a Portal.

**PUT** `api/cosmic/portal`

**Request**

Body type: `IPortal`

_No fields._

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IActionResult` (not part of the request/response payload).

**Example**

```js
const { isError, message, result } = await star.cosmic.updatePortal({
    saveChildren: true,
    recursive: true,
    maxChildDepth: 1,
    continueOnError: true,
    saveChildrenOnProvider: true,
    providerType: '<providerType>'
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": null
}
```

---

### `updateSolarSystem`

Updates a SolarSystem.

**PUT** `api/cosmic/solar-system`

**Request**

Body type: `ISolarSystem`

| Field | Type |
| --- | --- |
| `Star` | `IStar` |
| `Planets` | `List<IPlanet>` |
| `Asteroids` | `List<IAsteroid>` |
| `Comets` | `List<IComet>` |
| `Meteroids` | `List<IMeteroid>` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IActionResult` (not part of the request/response payload).

**Example**

```js
const { isError, message, result } = await star.cosmic.updateSolarSystem({
    saveChildren: true,
    recursive: true,
    maxChildDepth: 1,
    continueOnError: true,
    saveChildrenOnProvider: true,
    providerType: '<providerType>',
    star: { "Luminosity": 1, "StarType": {  }, "StarClassification": {  }, "StarBinaryType": {  } },
    planets: [{ "Moons": [{  }] }],
    asteroids: [{  }],
    comets: [{  }],
    meteroids: [{  }]
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": null
}
```

---

### `updateSpaceTimeAbnormally`

Updates a SpaceTimeAbnormally.

**PUT** `api/cosmic/spacetime-abnormally`

**Request**

Body type: `ISpaceTimeAbnormally`

_No fields._

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IActionResult` (not part of the request/response payload).

**Example**

```js
const { isError, message, result } = await star.cosmic.updateSpaceTimeAbnormally({
    saveChildren: true,
    recursive: true,
    maxChildDepth: 1,
    continueOnError: true,
    saveChildrenOnProvider: true,
    providerType: '<providerType>'
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": null
}
```

---

### `updateSpaceTimeDistortion`

Updates a SpaceTimeDistortion.

**PUT** `api/cosmic/spacetime-distortion`

**Request**

Body type: `ISpaceTimeDistortion`

_No fields._

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IActionResult` (not part of the request/response payload).

**Example**

```js
const { isError, message, result } = await star.cosmic.updateSpaceTimeDistortion({
    saveChildren: true,
    recursive: true,
    maxChildDepth: 1,
    continueOnError: true,
    saveChildrenOnProvider: true,
    providerType: '<providerType>'
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": null
}
```

---

### `updateStar`

Updates a Star.

**PUT** `api/cosmic/star`

**Request**

Body type: `IStar`

| Field | Type |
| --- | --- |
| `Luminosity` | `int` |
| `StarType` | `StarType` |
| `StarClassification` | `StarClassification` |
| `StarBinaryType` | `StarBinaryType` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IActionResult` (not part of the request/response payload).

**Example**

```js
const { isError, message, result } = await star.cosmic.updateStar({
    saveChildren: true,
    recursive: true,
    maxChildDepth: 1,
    continueOnError: true,
    saveChildrenOnProvider: true,
    providerType: '<providerType>',
    luminosity: 1,
    starType: {  },
    starClassification: {  },
    starBinaryType: {  }
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": null
}
```

---

### `updateStarDust`

Updates a StarDust.

**PUT** `api/cosmic/stardust`

**Request**

Body type: `IStarDust`

_No fields._

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IActionResult` (not part of the request/response payload).

**Example**

```js
const { isError, message, result } = await star.cosmic.updateStarDust({
    saveChildren: true,
    recursive: true,
    maxChildDepth: 1,
    continueOnError: true,
    saveChildrenOnProvider: true,
    providerType: '<providerType>'
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": null
}
```

---

### `updateStarGate`

Updates a StarGate.

**PUT** `api/cosmic/stargate`

**Request**

Body type: `IStarGate`

_No fields._

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IActionResult` (not part of the request/response payload).

**Example**

```js
const { isError, message, result } = await star.cosmic.updateStarGate({
    saveChildren: true,
    recursive: true,
    maxChildDepth: 1,
    continueOnError: true,
    saveChildrenOnProvider: true,
    providerType: '<providerType>'
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": null
}
```

---

### `updateSuperVerse`

Updates a SuperVerse.

**PUT** `api/cosmic/superverse`

**Request**

Body type: `ISuperVerse`

| Field | Type |
| --- | --- |
| `Universes` | `List<IUniverse>` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IActionResult` (not part of the request/response payload).

**Example**

```js
const { isError, message, result } = await star.cosmic.updateSuperVerse({
    saveChildren: true,
    recursive: true,
    maxChildDepth: 1,
    continueOnError: true,
    saveChildrenOnProvider: true,
    providerType: '<providerType>',
    universes: [{ "Dimensions": [{ "DimensionLevel": {  } }], "GalaxyClusters": [{ "Galaxies": [{ "SuperStar": { "Stars": [{ "Luminosity": 1, "StarType": {  }, "StarClassification": {  }, "StarBinaryType": {  } }] }, "SolarSystems": [{ "Star": {}, "Planets": [{ "Moons": [{  }] }], "Asteroids": [{  }], "Comets": [{  }], "Meteroids": [{  }] }], "Nebulas": [{  }], "Stars": [], "Planets": [], "Asteroids": [], "Comets": [], "Meteroids": [] }], "SolarSystems": [], "Stars": [], "Planets": [], "Asteroids": [], "Comets": [], "Meteroids": [], "IsSuperCluster": true }], "SolarSystems": [], "Nebulas": [], "Stars": [], "Planets": [], "Asteroids": [], "Comets": [], "Meteroids": [] }]
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": null
}
```

---

### `updateTemporalRift`

Updates a TemporalRift.

**PUT** `api/cosmic/temporal-rift`

**Request**

Body type: `ITemporalRift`

_No fields._

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IActionResult` (not part of the request/response payload).

**Example**

```js
const { isError, message, result } = await star.cosmic.updateTemporalRift({
    saveChildren: true,
    recursive: true,
    maxChildDepth: 1,
    continueOnError: true,
    saveChildrenOnProvider: true,
    providerType: '<providerType>'
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": null
}
```

---

### `updateUniverse`

Updates a Universe.

**PUT** `api/cosmic/universe`

**Request**

Body type: `IUniverse`

| Field | Type |
| --- | --- |
| `Dimensions` | `List<IDimension>` |
| `GalaxyClusters` | `List<IGalaxyCluster>` |
| `SolarSystems` | `List<ISolarSystem>` |
| `Nebulas` | `List<INebula>` |
| `Stars` | `List<IStar>` |
| `Planets` | `List<IPlanet>` |
| `Asteroids` | `List<IAsteroid>` |
| `Comets` | `List<IComet>` |
| `Meteroids` | `List<IMeteroid>` |

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IActionResult` (not part of the request/response payload).

**Example**

```js
const { isError, message, result } = await star.cosmic.updateUniverse({
    saveChildren: true,
    recursive: true,
    maxChildDepth: 1,
    continueOnError: true,
    saveChildrenOnProvider: true,
    providerType: '<providerType>',
    dimensions: [{ "DimensionLevel": {  } }],
    galaxyClusters: [{ "Galaxies": [{ "SuperStar": { "Stars": [{ "Luminosity": 1, "StarType": {  }, "StarClassification": {  }, "StarBinaryType": {  } }] }, "SolarSystems": [{ "Star": {}, "Planets": [{ "Moons": [{  }] }], "Asteroids": [{  }], "Comets": [{  }], "Meteroids": [{  }] }], "Nebulas": [{  }], "Stars": [], "Planets": [], "Asteroids": [], "Comets": [], "Meteroids": [] }], "SolarSystems": [], "Stars": [], "Planets": [], "Asteroids": [], "Comets": [], "Meteroids": [], "IsSuperCluster": true }],
    solarSystems: [{ "Star": { "Luminosity": 1, "StarType": {  }, "StarClassification": {  }, "StarBinaryType": {  } }, "Planets": [{ "Moons": [{  }] }], "Asteroids": [{  }], "Comets": [{  }], "Meteroids": [{  }] }],
    nebulas: [{  }],
    stars: [{ "Luminosity": 1, "StarType": {  }, "StarClassification": {  }, "StarBinaryType": {  } }],
    planets: [{ "Moons": [{  }] }],
    asteroids: [{  }],
    comets: [{  }],
    meteroids: [{  }]
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": null
}
```

---

### `updateWormHole`

Updates a WormHole.

**PUT** `api/cosmic/wormhole`

**Request**

Body type: `IWormHole`

_No fields._

**Response**

Standard `OASISResult` envelope (see top of this page) with:

`result` type: `IActionResult` (not part of the request/response payload).

**Example**

```js
const { isError, message, result } = await star.cosmic.updateWormHole({
    saveChildren: true,
    recursive: true,
    maxChildDepth: 1,
    continueOnError: true,
    saveChildrenOnProvider: true,
    providerType: '<providerType>'
  });
if (isError) throw new Error(message);
console.log(result);
```

Example response:

```json
{
  "isError": false,
  "message": "",
  "result": null
}
```

