# @oasisomniverse/web5-api

- [@oasisomniverse/web5-api](#oasisomniverseweb5-api)
  - [About WEB5](#about-web5)
  - [About The OASIS Omniverse](#about-the-oasis-omniverse)
  - [Benefits Of Building On The WEB5 STAR API](#benefits-of-building-on-the-web5-star-api)
  - [WEB 5 STAR API Packages](#web-5-star-api-packages)
    - [Javascript](#javascript)
    - [Unity](#unity)
    - [Rust](#rust)
    - [Unreal](#unreal)
    - [C#](#c)
  - [Do You Want To Get Involved?](#do-you-want-to-get-involved)
  - [Installation](#installation)
  - [Quick start](#quick-start)
  - [Calling any endpoint](#calling-any-endpoint)
  - [Auth & sessions](#auth--sessions)
  - [STAR runtime convenience methods](#star-runtime-convenience-methods)
  - [Module examples](#module-examples)
  - [Module reference](#module-reference)
  - [Regenerating](#regenerating)
  - [Testing](#testing)
  - [License](#license)

Isomorphic (Node 18+ and browser) JavaScript/TypeScript-friendly client for the
**WEB5 STAR API** - full coverage of the OASIS STAR WebAPI: OAPPs, Quests,
Missions, Games, Celestial Bodies/Spaces, the full Cosmic hierarchy
(Omniverse → Multiverse → Universe → Galaxy → Solar System → Planet/Moon/Star
and beyond), NFTs, GeoNFTs, GeoHotSpots, Plugins, Templates, Libraries,
Runtimes, Holons, Zomes, Parks, Chapters, Inventory Items and
Competition/Leaderboards.

Zero dependencies. Wraps the global `fetch`. Works the same in Node and the
browser.

## About WEB5

> **"Build OAPPs once. Deploy everywhere. 40+ providers. Zero rewrites."**

WEB5 (STAR) is the experience layer of the OASIS Omniverse — a low-code metaverse generator and runtime built on top of WEB4. It aggregates every metaverse into one interoperable simulation via the COSMIC ORM (Omniverse → Multiverse → Universe → Galaxy → Solar System → Planet and beyond), letting you write an OAPP's business logic once and have STAR compile and deploy it across every supported blockchain, database and protocol - no vendor lock-in, no rewrites per platform.

WEB5 is built directly on **[WEB4](https://www.npmjs.com/package/@oasisomniverse/web4-api)** (identity, karma & unification) and is one layer of the wider **[OASIS Omniverse](https://oasisomniverse.one)** (WEB4 through WEB10).

## About The OASIS Omniverse

The OASIS (Open Advanced Sensory Immersion System) is the universal interoperability layer connecting all of WEB2 and WEB3 — every blockchain, database, cloud provider and protocol — into one unified, fault-tolerant API. Rather than picking a single tech stack, the OASIS harnesses the best of every provider (auto-failover, auto-load-balancing, auto-replication) so nothing is ever a single point of failure, and hides the complexity behind one intuitive API so you never need to learn a new stack again — even as underlying tech evolves, your app keeps working with zero changes.

At its core sits one Avatar with one SSO login and one Karma reputation score that travels with you across every app, game and world built on top of it — full transparency and full control over your own data, right down to the field level.

This is the foundation of the OASIS Omniverse: a network of unified layers, WEB4 (identity & unification) through WEB10 (source), each building on the one below to connect blockchains, metaverses, AI, human consciousness and beyond into a single interoperable whole.

👉 See the full ecosystem at **[oasisomniverse.one](https://oasisomniverse.one)**.

<a name="web5-starapi-benefits"></a>

## Benefits Of Building On The WEB5 STAR API

- **Low-code metaverse generator - build OAPPs through the STAR ODK/CLI with minimal code.**
- **COSMIC ORM - the full Cosmic hierarchy (Omniverse → Multiverse → Universe → Galaxy → Solar System → Planet/Moon/Star) as one interoperable simulation.**
- **Aggregates every metaverse into a single unified platform - no more fragmented, walled-garden virtual worlds.**
- **Write an OAPP's business logic once - STAR compiles and deploys it across every supported blockchain, database and protocol (e.g. dynamically generates the Rust DAL for Holochain and the C# BLL on top, giving you the best of both worlds).**
- **Built-in Quests, Missions, Games and Competition/Leaderboards systems.**
- **GeoNFTs & GeoHotSpots for location-based experiences.**
- **Integrate any WEB2 or WEB3 tech into your (web)app without having to learn or worry about new tech stacks/languages.**
- **SSO Avatar with a Karma reputation system (inherited from WEB4 - full accountability, zero crime, dark-net proof).**
- **Maximum integration & interoperability, auto load-balancing, auto fail-over, auto replication.**
- **HOT-swappable plugin architecture. HTTP REST/gRPC/GraphQL/CLI/Native endpoints.**
- **Javascript, Unity, Rust & Unreal packages - more coming.**
- **Write once, deploy everywhere, now and forever - the GOD Protocol/API.**
- **Full smart contract interoperability. AI/machine learning over all of the world's aggregated data.**
- **Full redundancy/zero downtime - impossible to shut down. Zero lag. Infinite players online at once.**
- **Decentralised distributed P2P networking - works offline and syncs automatically (even over LAN/Bluetooth/Mesh).**
- **Agent-centric: you own and store your own data.**
- **Powers WEB/2D/3D/AR/VR/IR/Map/Meta visualization, Our World & One World (Game of Games Engine).**
- **Smart City ready. Bio-feedback ready. IR (Infinite Reality) ready. WEB6 Omniverse Ready.**

Check out more info below:<br><br>
[The Power Of The OASIS API](https://drive.google.com/file/d/1nnhGpXcprr6kota1Y85HDDKsBfJHN6sn/view?usp=sharing) <br>
[What Is WEB4 & WEB5 Really?](https://www.ourworldthegame.com/single-post/what-is-web4-web5-really) <br>
[Annoucing WEB5 STAR ODK/HDK/COSMIC](https://www.ourworldthegame.com/single-post/announcing-star-odk-hdk-cosmic) <br>
[STAR ODK/HDK/COSMIC/OASIS API/Our World Update](https://www.ourworldthegame.com/single-post/star-odk-hdk-cosmic-oasis-api-our-world-update) <br>
[Main OASIS Repo](https://github.com/NextGenSoftwareUK/OASIS)

<a name="web5-starapi-packages"></a>

## WEB 5 STAR API Packages

### Javascript

<https://www.npmjs.com/package/@oasisomniverse/web5-api> \
<https://github.com/NextGenSoftwareUK/OASIS-API-Javascript-Package-WEB5>

### Unity

<https://github.com/NextGenSoftwareUK/OASIS/tree/master/STAR%20ODK/NextGenSoftware.OASIS.STAR.WebUI/ClientApp/public/downloads/oasis-web5-star-unity-sdk>

### Rust

<https://github.com/NextGenSoftwareUK/OASIS/tree/master/STAR%20ODK/NextGenSoftware.OASIS.STAR.WebUI/ClientApp/public/downloads/oasis-web5-star-rust-sdk>

### Unreal

<https://github.com/NextGenSoftwareUK/OASIS/tree/master/STAR%20ODK/NextGenSoftware.OASIS.STAR.WebUI/ClientApp/public/downloads/oasis-web5-star-unreal-sdk>

<a name="csharp"></a>

### C#

<https://github.com/NextGenSoftwareUK/OASIS>

<a name="get-involved"></a>

## Do You Want To Get Involved?

We are always looking for people to jump in and get involved, you do not need to be an existing coder, we can help you with that... you just need a willingness to learn and to have an open heart, we are always more interested with what is in your heart rather than your head! ;-)

The whole world is the Our World team, hence the name... ;-) It is not our project; it is all of humanities...

We also offer FREE training and apprenticeship program with the NextGen Developer Training Programmes. We will teach you all we know over time and you get to work on this real live commercial codebase rather than wasting time working on throw away dummy apps as most training offers. No previous skills/experience required and is open to everyone, but especially for all disadvantaged people including special needs, homeless, unemployed, prison inmates, kids on the streets etc. We want to help the people the world has forgotten and for people who have stopped believing in themselves, we **BELIEVE IN YOU** and in time you will again too. Everyone has a gift for the world, and we will help you find yours… Find out more by checking out the links below:

<a href="https://c8119036-8b0a-4498-ab07-331841f19b4b.filesusr.com/ugd/4280d8_ad8787bd42b1471bae73003bfbf111f7.pdf">NextGen Developer Training Programme</a><br>
<a href="https://c8119036-8b0a-4498-ab07-331841f19b4b.filesusr.com/ugd/4280d8_999d98ba615e4fa6ab4383a415ee24c5.pdf">NextGen Junior Developer Training Programme</a>

We are looking for Web Devs (with any of these: react, angular, vue, js, html, css), Unity Devs & C# Devs.

If anyone is interested in developing this game/platform, then we would LOVE to hear from you! 😊 There will be opportunities for people to own shares and/or cryptocurrency (as well as other unique perks such as premium locations in both the geolocation and VR versions, personal or business service spotlights, free lifetime access to all premium paid services, massive karma points (allowing your avatar to progress to more advanced stages in the game unlocking new exciting quests, areas to explore & new special abilities/superpowers) plus lots more!) based on the input they are willing to provide.

Thank you and we hope we find interest from people to join us on this exciting incredible journey.

**Want to make a difference in the world?**

**What will be your legacy?**

**Ready to be a hero?**

If the answer is YES, then please [proceed to here](https://github.com/NextGenSoftwareUK/OASIS/wiki/So-You-Want-To-Get-Involved%3F-Ready-To-Be-A-Hero%3F)...

<a href="https://drive.google.com/file/d/1b_G08UTALUg4H3jPlBdElZAFvyRcVKj1/view">Dev Requirements To Join The Our World Tribe</a><br>
<a href="https://drive.google.com/file/d/12pCk20iLw_uA1yIfojcP6WwvyOT4WRiO/view?usp=sharing">The Our World Mission (Summary)</a><br>
<http://star.oasisomniverse.one><br>
<http://api.starnet.oasisomniverse.one><br>
<https://github.com/NextGenSoftwareUK/OASIS><br>
<http://oasisomniverse.one><br>
<http://www.ourworldthegame.com><br>

<http://www.nextgenworld.co.uk><br>

<https://youtu.be/wdYa5wQUfrg><br>
<https://www.youtube.com/watch?v=2oY4_LZBW4M&t=3s><br>
<https://www.youtube.com/watch?v=rvNJ6poMduo&t=5s><br>
<https://www.youtube.com/watch?v=zyVmciqD9rs><br>
<https://www.youtube.com/watch?v=SB97mvzJiRg&t=3s><br>

**TOGETHER WE CAN CREATE A BETTER WORLD**

In Love, Light & Hope,<br>
The Our World Tribe

## Installation

```bash
npm install @oasisomniverse/web5-api
```

## Quick start

```js
const { STARClient } = require('@oasisomniverse/web5-api');
// or: import { STARClient } from '@oasisomniverse/web5-api';

const star = new STARClient({ baseUrl: 'https://api.star.oasisweb5.one' });

await star.auth.login({ username: 'me@example.com', password: '...' });

const { isError, message, result } = await star.quests.getAllQuestsForAvatar();
if (isError) throw new Error(message);
console.log(result);
```

## Calling any endpoint

Every controller on the OASIS STAR WebAPI is reachable as a lowerCamel
property on the client (`star.avatar`, `star.quests`, `star.missions`,
`star.games`, `star.cosmic`, `star.holons`, `star.nFTs`, `star.geoNFTs`,
`star.plugins`, `star.templates`, `star.libraries`, `star.runtimes`,
`star.competition`, ...). Every generated method takes a single args object:

- Any key matching a `{token}` in the route template is consumed and
  substituted into the URL (case-insensitive match).
- Any remaining keys become the query string (GET/DELETE) or JSON body
  (POST/PUT) - **matching the real `[FromQuery]`/`[FromBody]` binding of the
  underlying C# action**, not just the HTTP verb. Many STAR actions mix a
  `[FromBody]` payload with several `[FromQuery]` flags (e.g. `version`,
  `providerType`, `softDelete`) even on `POST`/`PUT`/`DELETE` - those flags are
  always sent as query params, never folded into the JSON body, because
  `endpoints.json` records exactly which arg names are query-bound per
  operation (see [`docs/`](./docs/README.md) for the per-method breakdown).
- When an action's entire body is a single primitive `[FromBody]` parameter
  (e.g. `CompleteQuest(Guid id, [FromBody] string completionNotes)`), the
  JSON body is that value directly - not an object wrapping it.

```js
// GET api/celestialBodies/{id} -> id is consumed as a route token
const body = await star.celestialBodies.getCelestialBody({ id: '...' });

// POST api/quests/{id}/complete -> id consumed as a route token, completionNotes
// (a single primitive [FromBody] param) becomes the raw JSON body itself
const done = await star.quests.completeQuest({ id: questId, completionNotes: 'Finished!' });

// PUT api/cosmic/universe -> saveChildren/providerType are [FromQuery] and go
// on the URL; the rest (the universe payload) becomes the JSON body
await star.cosmic.updateUniverse({ name: 'New Universe', saveChildren: true, providerType: 'Default' });

// DELETE api/cosmic/universe/{universeId} -> universeId is a route token,
// softDelete/providerType are [FromQuery] and go on the URL - no body sent
await star.cosmic.deleteUniverse({ universeId, softDelete: true, providerType: 'Default' });
```

Every response has the shape:

```ts
interface OASISResponse<T = any> {
  isError: boolean;
  message: string | null;
  result: T;
  raw: any;
  statusCode: number;
}
```

## Auth & sessions

`star.auth` is a hand-written ergonomic wrapper around the generated
`avatar` module's `authenticate` operation. It manages the SDK's
`TokenStore` for you so you don't have to think about JWTs.

```js
const loginRes = await star.auth.login({ username: 'me@example.com', password: '...' });
if (loginRes.isError) throw new Error(loginRes.message);

console.log(star.auth.isAuthenticated()); // true
console.log(star.auth.getSession());      // { avatarId, username, email, jwtToken, ... }

await star.auth.logout(); // clears the local session
```

> STAR's `AvatarController` has no logout/revoke-token endpoint of its own (it
> only forwards a subset of WEB4 avatar operations), so `logout()` simply
> clears the local session client-side - it does not call the server.

If you already have a JWT (e.g. issued by your own backend), set it directly:

```js
star.setToken(jwtToken, { avatarId, username });
```

## STAR runtime convenience methods

The `STARController` (`api/sTAR`) controls the underlying STAR/OASIS runtime
boot lifecycle. Convenience pass-throughs are exposed directly on the client:

```js
await star.starIgnite();      // boots the STAR/OASIS runtime
await star.starStatus();      // current boot status
await star.starExtinguish();  // shuts the runtime down
```

These are thin wrappers over `star.sTAR.igniteSTAR()`, `star.sTAR.getStatus()`
and `star.sTAR.extinguishSTAR()` - the full generated module is also
available directly under `star.sTAR`.

## Module examples

### Avatar (`star.avatar`)

```js
const inv = await star.avatar.getInventory();
await star.avatar.addXp({ amount: 100 });
```

### Quests (`star.quests`)

```js
const myQuests = await star.quests.getAllQuestsForAvatar();
await star.quests.startQuest({ id: questId });
await star.quests.completeQuest({ id: questId, completionNotes: 'Done!' });
```

### Missions (`star.missions`)

```js
const missions = await star.missions.getAllMissions();
await star.missions.completeMission({ id: missionId, completionNotes: 'Done!' });
```

### Games (`star.games`)

```js
const games = await star.games.getAllGames();
await star.games.startGame({ gameId });
await star.games.loadLevel({ gameId, level: '1-1' });
```

### Cosmic (`star.cosmic`)

```js
const omniverse = await star.cosmic.getOmniverse();
await star.cosmic.addGalaxy({ parentGalaxyClusterId, /* ...IGalaxy fields */ });
```

### Holons (`star.holons`)

```js
const holons = await star.holons.getAllHolons();
const matches = await star.holons.searchHolons({ query: 'forest' });
```

### NFTs (`star.nFTs`)

```js
const nfts = await star.nFTs.getAllNFTs();
await star.nFTs.publishNFT({ id: nftId, /* ...PublishRequest fields */ });
```

### GeoNFTs (`star.geoNFTs`)

```js
const nearby = await star.geoNFTs.getNearbyGeoNFTs({ latitude: 51.5, longitude: -0.12, radiusKm: 5 });
```

### Competition (`star.competition`)

```js
const leaderboard = await star.competition.getLeaderboard({ competitionType: 'Karma', seasonType: 'Weekly' });
const myRank = await star.competition.getMyRank({ competitionType: 'Karma', seasonType: 'Weekly' });
```

## Module reference

26 modules, 616 operations in total. Full per-method tables live in
[`docs/`](./docs/README.md).

| Client property | Route prefix | Operations |
| --- | --- | --- |
| `star.avatar` | `api/avatar` | 13 |
| `star.celestialBodies` | `api/celestialBodies` | 22 |
| `star.celestialBodiesMetaData` | `api/celestialBodiesMetaData` | 21 |
| `star.celestialSpaces` | `api/celestialSpaces` | 22 |
| `star.chapters` | `api/chapters` | 20 |
| `star.competition` | `api/competition` | 9 |
| `star.cosmic` | `api/cosmic` | 72 |
| `star.games` | `api/games` | 55 |
| `star.geoHotSpots` | `api/geoHotSpots` | 20 |
| `star.geoNFTs` | `api/geoNFTs` | 22 |
| `star.health` | `api/health` | 2 |
| `star.holons` | `api/holons` | 24 |
| `star.holonsMetaData` | `api/holonsMetaData` | 21 |
| `star.inventoryItems` | `api/inventoryItems` | 21 |
| `star.libraries` | `api/libraries` | 22 |
| `star.missions` | `api/missions` | 27 |
| `star.nFTs` | `api/nFTs` | 21 |
| `star.oAPPs` | `api/oAPPs` | 21 |
| `star.parks` | `api/parks` | 22 |
| `star.plugins` | `api/plugins` | 24 |
| `star.quests` | `api/quests` | 41 |
| `star.runtimes` | `api/runtimes` | 25 |
| `star.sTAR` | `api/sTAR` | 4 |
| `star.templates` | `api/templates` | 22 |
| `star.zomes` | `api/zomes` | 22 |
| `star.zomesMetaData` | `api/zomesMetaData` | 21 |

See [`docs/README.md`](./docs/README.md) for the full generated reference,
or [`docs/modules/`](./docs/modules) for per-module method tables with
parameter and route details.

## Regenerating

The generated modules, type declarations and docs are produced from
`endpoints.json` (extracted from the STAR WebAPI controller source):

```bash
npm run generate   # src/modules/*.js + src/modules/index.js
npm run types      # src/modules/*.d.ts + index.d.ts + src/core/types.d.ts
npm run docs        # docs/README.md + docs/modules/*.md
```

## Testing

```bash
npm test
```

## License

MIT
