import axios from 'axios'

const API_URL = process.env.VUE_APP_API_URL

function getSalaries () {
  return axios.get(`${API_URL}/salaries`)
}

function submitSalary (salary) {
  return axios.post(`${API_URL}/salaries`, salary)
}

export default {
  getSalaries,
  submitSalary
}
