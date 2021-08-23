import Vue from 'vue'
import VueRouter from 'vue-router'
import ViewSalaries from '../views/ViewSalaries.vue'
import AddSalary from '../views/AddSalary.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'ViewSalaries',
    component: ViewSalaries
  },
  {
    path: '/add',
    name: 'Add Salary',
    component: AddSalary
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
