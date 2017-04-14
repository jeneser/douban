import Vue from 'vue'

const state = {
  events: [],
  temp: [],
  skip: 0,
  bannerTitle: '每天看点好内容',
  eventItem: {}
}

const mutations = {
  getEvent (state, payload) {
    state.events = payload.res
  },
  loadMore (state, payload) {
    state.skip += 2
    state.events = state.events.concat(payload.res)
  },
  getSingleEvent (state, payload) {
    state.eventItem = payload.res
  }
}

const actions = {
  getEvent ({commit}) {
    Vue.http.jsonp('https://api.douban.com/v2/event/list?loc=108288&count=5')
            .then(res => {
              commit({
                type: 'getEvent',
                res: res.body.events
              })
            })
  },
  loadMore ({commit, state}) {
    Vue.http.jsonp('https://api.douban.com/v2/event/list?loc=108288&start=' +
                      state.skip + '&count=5')
            .then(res => {
              commit({
                type: 'loadMore',
                res: res.body.events
              })
            })
  },
  getSingleEvent ({commit, state}, payload) {
    Vue.http.jsonp('https://api.douban.com/v2/event/' + payload.id)
            .then(res => {
              commit({
                type: 'getSingleEvent',
                res: res.body
              })
            })
  }
}

export default {
  state,
  mutations,
  actions
}
