import Vue from 'vue'

const state = {
  login_email: '',
  login_token: '',
  login_name: ''
}

const mutations = {
  getLocalUser (state, payload) {
    state.login_email = localStorage.getItem('email')
    state.login_token = localStorage.getItem('token')
    state.login_name = localStorage.getItem('name')
  },
  setUser (state, payload) {
    state.login_email = payload.email
    state.login_token = payload.token
    state.login_name = payload.name
  }
}

const actions = {
  login ({ commit }, payload) {
    return new Promise((resolve, reject) => {
      Vue.http.get('https://douban.herokuapp.com/user/' + payload.email, {
        headers: {
          Authorization: 'Bearer ' + payload.token
        }
      }).then(res => {
        commit({
          type: 'setUser',
          email: res.body.email,
          token: res.body.token,
          name: res.body.name
        })
        resolve(res)
      }, err => {
        reject(err)
      })
    })
  },
  register ({ commit }, payload) {
    return new Promise((resolve, reject) => {
      Vue.http.post('https://douban.herokuapp.com/user/', {
        email: payload.email,
        pass: payload.pass,
        name: payload.name
      }).then(res => {
        localStorage.setItem('token', res.body.token)
        localStorage.setItem('email', res.body.email)
        localStorage.setItem('name', res.body.name)

        commit({
          type: 'setUser',
          email: res.body.email,
          token: res.body.token,
          name: res.body.name
        })
        resolve(res)
      }, err => {
        reject(err)
      })
    })
  }
}

export default {
  state,
  mutations,
  actions
}
