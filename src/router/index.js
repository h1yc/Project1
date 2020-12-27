import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../components/HelloWorld.vue'
import Login from '../components/login.vue'
import Main from '../components/main.vue'
import Information from '../components/information.vue'
import Money from '../components/money.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/',
    name: 'Main',
    component: Main
  },
  {
    path: '/information',
    name: 'Information',
    component: Information
  },
  {
    path: '/money',
    name: 'money',
    component: Money
  }
]

const router = new VueRouter({
  routes
})

export default router
