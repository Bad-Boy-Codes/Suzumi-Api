<div align="center">

  <p>
    <a href="https://www.npmjs.com/package/suzumi-api"><img src="https://img.shields.io/npm/v/suzumi-api.svg?maxAge=3600" alt="NPM version" /></a>
    <a href="https://www.npmjs.com/package/amethyste-api"><img src="https://img.shields.io/npm/dt/suzumj-api.svg?maxAge=3600" alt="NPM downloads" /></a>
  </p>
  <p>
    <a href="https://nodei.co/npm/suzumi-api/"><img src="https://nodei.co/npm/suzumi-api.png?downloads=true&stars=true" alt="npm installnfo" /></a>
  </p>
</div>

## Description
Official npm module for [Suzumi Api]("https://badboy.is-a.dev/")

## Installation
```
npm i suzumi-api
```

## Utilisation

**Connetion :**
```js
const suzuClient = require("suzumi-api");
const suzuApi = new suzuClient();
```
**Check All Endpoint :**
```js
suzuApi.endpoint().then(data => {
    console.log(data);
}).catch(err => {
    throw err;
});
```
*Returns*
```
[
  {
    description: 'Search videos on Youtube',
    link: '/api/json/youtube?query=never%20gonna%20give%20you%20up',
    args: [ [Object] ],
    name: 'youtube',
    route: 'youtube',
    category: '/json',
    errMsg: null,
    auth: false,
    premium: false
  },
  {
    description: 'Search accounts on Twitter',
    link: '/api/json/twitter?username=narendramodi',
    errMsg: 'Cannot find account',
    args: [ [Object] ],
    name: 'twitter',
    route: 'twitter',
    category: '/json',
    auth: false,
    premium: false
  },
  {
    description: 'Search accounts on Twitch',
    link: '/api/json/twitch?channel=pokimane',
    args: [ [Object] ],
    name: 'twitch',
    route: 'twitch',
    category: '/json',
    errMsg: null,
    auth: false,
    premium: false
  },
   /* and you'll see much more...*/
  ]
```
**Endpoint Image :**
```js
suzuApi.image("endpoint", {
  "image": "url"
}).then(data => {
    console.log(data);
}).catch(err => {
    throw err;
});
```
*Returns*
```
<Buffer ... >
```
**Endpoint Json :**
```js
suzuApi.json("shitpost", /*options*/ ).then(data => {
	console.log(data);
}).catch(err => {
	throw err;
});
```
*Returns*
```json
{
 "subreddit": "https://reddit.com/r/shitposting/comments/txk5la/must_be_for_charity/",
 "title": "must be for charity 😃",
 "image": "https://i.redd.it/zqjep3wyawr81.jpg",
 "upvotes": 58,
 "comments": 1
}
```

**Endpoint Get Example:**
```js
suzuApi.get("category", "endpoint", /*options*/).then(image => {
    console.log(image);
}).catch(err => {
    throw err;
});
```