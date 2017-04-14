import Vue from 'vue'
import Vuex from 'vuex'

import movie from './modules/movie'
import activities from './modules/activities'
import book from './modules/book'
import subject from './modules/subject'
import search from './modules/search'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    movie,
    activities,
    book,
    subject,
    search
  }
})
