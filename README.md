<p align="center">
	<img src="./screenshot/douban_logo.png">
</p>

<br>

<p align="center">
Awesome douban DEMO created with Vue2.x + Vuex + Vue-router + Superagent
</p>

<p align="center">

[![Build Status](https://travis-ci.org/jeneser/douban.svg?branch=master)](https://travis-ci.org/jeneser/douban) [![David](https://img.shields.io/david/expressjs/express.svg?style=flat-square)](https://github.com/jeneser/douban) [![Codacy Badge](https://api.codacy.com/project/badge/Grade/aa2dd7f4191546258edf6e55464d1962)](https://www.codacy.com/app/jeneser/douban?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=jeneser/douban&amp;utm_campaign=Badge_Grade) [![Powered](https://img.shields.io/badge/Powered%20by-vue2%2B-brightgreen.svg)](https://github.com/vuejs/vue) [![Percentage of issues still open](http://isitmaintained.com/badge/open/jeneser/douban.svg)](http://isitmaintained.com/project/jeneser/douban "Percentage of issues still open") [![Average time to resolve an issue](http://isitmaintained.com/badge/resolution/jeneser/douban.svg)](http://isitmaintained.com/project/jeneser/douban "Average time to resolve an issue") [![PR](https://img.shields.io/badge/PR-welcome-brightgreen.svg)](https://github.com/jeneser/douban/pulls) [![license](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://github.com/jeneser/douban/blob/master/LICENSE)

</p>
<br>

<p align="center">
    <img src="./screenshot/douban_home.gif" >
    <img src="./screenshot/douban_movie.gif" >
    <br>
     <img src="./screenshot/douban_login.gif" >
    <img src="./screenshot/douban_search.gif" >
    <br><br>
    <strong>......</strong>
    <br>
	 <strong><a href="https://jeneser.github.io/douban/">Live Demo</a></strong>
</p>

## Features

- Vue + vue-router + vuex + Superagent working together
- Vuex divide store into modules
- Modern JavaScript syntax with ES6
- vue-cli webpack template
- Single-file Vue Components
- API request seperated
- Real remote API and some mock data
- eslint linter integration
- Hot-reload in development
- Css with Sass
- No third party CSS framework
- Complex and different style view logic
- Infinite loading list
- Complete search logic
- Custom components like List, Rating, Tags ...
- Authentication with JSON Web Tokens
- Complete register login logic
......


## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## Libraries

- [Vuex](https://vuex.vuejs.org) : Centralized State Management for Vue.js
- [Vue-router](http://router.vuejs.org/) : The official router for Vue.js
- ~~[vue-resource](https://github.com/pagekit/vue-resource) : The HTTP client for Vue.js~~
- [Superagent](https://github.com/visionmedia/superagent) : Ajax with less suck - (and node.js HTTP client to match)
- [vue-infinite-loading](https://github.com/PeachScript/vue-infinite-loading) : An infinite scroll plugin for Vue.js 1.0 & Vue.js 2.0.
- [normalize.css](https://github.com/necolas/normalize.css) :  A collection of HTML element and attribute style-normalizations
- [vue-scroll-behavior](https://www.npmjs.com/package/vue-scroll-behavior) :  Completely customize the scroll behavior on route navigation

## API

Douban Api V2
- Basic URI : `https://api.douban.com/V2/`
- Online activities
  - Activities list : `/event/list?loc=108288&count=&start=`
  - Single activitie info : `/event/id`
- Movie
  - In theaters : `/movie/in_theaters?count=`
  - Coming soon : `/movie/coming_soon?count=`
  - Top 250 : `/movie/top250?count=`
  - Single movie info : `/movie/subject/id`
- Book
  - Search some books : `/book/search?q=&count=`
  - Single book info : `/book/id`
- Search
  - Search books : `/book/search?q=`
  - Search movie : `/movie/search?q=`
  - Search music : `/music/search?q=`

Mock Douban Backend
- User Basic URI : `https://douban.herokuapp.com/user/`
- Register
  - Path: `/user`
  - method: `POST`
- Login
  - Path: `/user/:id`
  - method: `GET`

For detailed explanation, checkout the [Douban Api V2](https://developers.douban.com/wiki/?title=api_v2) and [Douban Backend](https://github.com/jeneser/douban-backend)

## File Structure
```
.
├── build
│   ├── build.js
│   ├── check-versions.js
│   ├── dev-client.js
│   ├── dev-server.js
│   ├── utils.js
│   ├── vue-loader.conf.js
│   ├── webpack.base.conf.js
│   ├── webpack.dev.conf.js
│   └── webpack.prod.conf.js
├── config
│   ├── dev.env.js
│   ├── index.js
│   └── prod.env.js
├── index.html
├── LICENSE
├── package.json
├── README.md
├── src
│   ├── App.vue
│   ├── assets
│   │   ├── avatar.png
│   │   ├── book_zw.jpg
│   │   ├── camera.svg
│   │   ├── douban-app-logo.png
│   │   ├── pen.svg
│   │   ├── promotion_bg.jpg
│   │   └── user_normal.jpg
│   ├── components
│   │   ├── Banner.vue
│   │   ├── Card.vue
│   │   ├── DownloadApp.vue
│   │   ├── Group.vue
│   │   ├── HeaderBar.vue
│   │   ├── List.vue
│   │   ├── Rating.vue
│   │   ├── Scroller.vue
│   │   ├── Marking.vue
│   │   ├── SubNav.vue
│   │   ├── Tags.vue
│   │   ├── Types.vue
│   │   └── UserBar.vue
│   ├── main.js
│   ├── router
│   │   └── index.js
│   ├── store
│   │   ├── index.js
│   │   └── modules
│   │       ├── activities.js
│   │       ├── book.js
│   │       ├── group.js
│   │       ├── movie.js
│   │       ├── search.js
│   │       ├── subject.js
│   │       └── user.js
│   └── views
│       ├── BookView.vue
│       ├── DetailView.vue
│       ├── GroupView.vue
│       ├── HomeView.vue
│       ├── LoginView.vue
│       ├── MovieView.vue
│       ├── PagesView.vue
│       ├── RegisterView.vue
│       ├── SearchView.vue
│       ├── StatusView.vue
│       ├── SubjectView.vue
│       └── TalionView.vue
└── static
    └── logo.png
```

## Change log

- Aug 24, 2017:
  - Merged PR #19
  - Remove dist/, use tschaub/gh-pages
- Aug 11, 2017:
  - Add dir /screenshot.
  - Update README fix screenshot
- June 24, 2017:
  - Update vue-scroll-behavior fix scroll behavior
- May 28, 2017:
  - Using superagent

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request

## Thanks

<a href="https://github.com/LIANGWEIBIAO" target="_blank"><img src="https://avatars2.githubusercontent.com/u/24608984?v=4&s=460" width="38px"></a> <a href="https://github.com/lizhanjie1314" target="_blank"><img src="https://avatars1.githubusercontent.com/u/15324887?v=4&s=460" width="38px"></a> <a href="https://github.com/fredshare" target="_blank"><img src="https://avatars3.githubusercontent.com/u/765082?v=4&s=460" width="38px"></a> <a href="https://github.com/Werb" target="_blank"><img src="https://avatars1.githubusercontent.com/u/12763277?v=4&s=460" width="38px"></a> <a href="https://github.com/jfliapp" target="_blank"><img src="https://avatars2.githubusercontent.com/u/27725921?v=4&s=460" width="38px"></a> <a href="https://github.com/bluestrings" target="_blank"><img src="https://avatars2.githubusercontent.com/u/6144152?v=4&s=460" width="38px"></a> <a href="https://github.com/silverpeng" target="_blank"><img src="https://avatars2.githubusercontent.com/u/25680922?v=4&s=460" width="38px"></a> <a href="https://github.com/KngZhi" target="_blank"><img src="https://avatars1.githubusercontent.com/u/11361147?v=4&s=460" width="38px"></a>

## License

[MIT](https://github.com/jeneser/douban/blob/master/LICENSE) Copyright (c) 2017 [Jeneser](https://jeneser.github.io/)
