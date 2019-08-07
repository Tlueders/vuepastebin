import Vue from 'vue'
import Router from 'vue-router'
import Paste from './views/Paste.vue'
import Pastes from './views/Pastes.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'paste',
      component: Paste
    },
    {
      path: '/pastes/:id',
      name: 'pastes',
      component: Pastes
    }
  ]
})
