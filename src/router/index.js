import Vue from 'vue'
import Router from 'vue-router'
// Import of pages
// import UserSearch from '../pages/UserSearch.vue'
import HomePage from '@/components/HomePage.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    }
  ],
  mode: 'history'
})
