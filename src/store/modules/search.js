import Vue from 'vue'

const state = {
  queryRes_movie: [],
  queryRes_book: [],
  queryRes_music: []
}

const mutations = {
  query (state, payload) {
    switch (payload.tag) {
      case 'movie':
        state.queryRes_movie = payload.res
        break
      case 'book':
        state.queryRes_book = payload.res
        break
      case 'music':
        state.queryRes_music = payload.res
        break
      default:
        console.log('[Error]:Api is error!')
    }
  }
}

const actions = {
  query ({ commit }, payload) {
    Vue.http.jsonp('https://api.douban.com/v2/movie/search?q=' +
                   payload.queryStr + '&count=3')
            .then(res => {
              commit({
                type: 'query',
                tag: 'movie',
                res: res.body.subjects
              })
            })
    // API rate limit exceeded
    // Vue.http.jsonp('https://api.douban.com/v2/book/search?q=' +
    //                payload.queryStr + '&count=3')
    //         .then(res => {
    //           commit({
    //             type: 'query',
    //             tag: 'book',
    //             res: res.body
    //           })
    //         })
    // Vue.http.jsonp('https://api.douban.com/v2/music/search?q=' +
    //                payload.queryStr + '&count=3')
    //         .then(res => {
    //           commit({
    //             type: 'query',
    //             tag: 'music',
    //             res: res.body.subjects
    //           })
    //         })
  }
}

export default {
  state,
  mutations,
  actions
}
