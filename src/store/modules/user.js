import Vue from 'vue'

const state = {
  login_email: '',
  login_token: '',
  login_name: '',
  temp_email: '',
  temp_token: '',
  temp_name: ''
}

const getters = {
  currentUser: state => {
    return {
      email: state.login_email,
      token: state.login_token,
      name: state.login_name
    }
  }
}

const mutations = {
  updateData (state, payload) {
    switch (payload.name) {
      case 'email':
        state.temp_email = payload.value
        break
      case 'token':
        state.temp_token = payload.value
        break
      case 'name':
        state.temp_name = payload.name
        break
      default:
        console.log('Error:Dont directly mutate Vuex store')
    }
  },
  getLocalUser (state) {
    state.login_email = localStorage.getItem('email')
    state.login_token = localStorage.getItem('token')
    state.login_name = localStorage.getItem('name')
  },
  setUser (state, payload) {
    state.login_email = payload.email
    state.login_token = payload.token
    state.login_name = payload.name
  },
  logout (state) {
    localStorage.removeItem('email')
    localStorage.removeItem('token')
    localStorage.removeItem('name')
    state.login_email = ''
    state.login_token = ''
    state.login_name = ''
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
  getters,
  mutations,
  actions
}
