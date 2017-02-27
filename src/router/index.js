import Vue from 'vue'
import Router from 'vue-router'
import MovieView from '../views/MovieView.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MovieView',
      component: MovieView
    }
  ]
})
