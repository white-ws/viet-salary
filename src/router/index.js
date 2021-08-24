import Vue from 'vue'
import VueRouter from 'vue-router'
import ViewSalaries from '../views/ViewSalaries.vue'
import AddSalary from '../views/AddSalary.vue'
import AddSalaryComplete from '../views/AddSalaryComplete'

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
  },
  {
    path: '/add/submitted',
    name: 'Add Salary Completed',
    component: AddSalaryComplete
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
