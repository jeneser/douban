import Vue from 'vue'

const state = {
  queryRes: []
}

const mutations = {
  query (state, payload) {
    state.queryRes = payload.res
  }
}

const actions = {
  query ({ commit }, payload) {
    Vue.http.jsonp('https://api.douban.com/v2/movie/search?q=' +
                   payload.queryStr + '&count=3')
            .then(res => {
              commit({
                type: 'query',
                res: res.body.subjects
              })
            })
  }
}

export default {
  state,
  mutations,
  actions
}
