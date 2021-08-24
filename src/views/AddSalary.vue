<template>
  <v-container>
    <v-card class="elevation-0">
      <v-card-title class="mx-10">
        <v-spacer />
        SHARE YOUR SALARY
        <v-spacer />
      </v-card-title>
      <v-card-text>
        <v-form
          ref="form"
          v-model="validForm"
          class="px-10 pt-3"
        >
          <v-text-field
            v-model="companyName"
            :rules="[rules.required, rules.maxLength50]"
            class="px-10 py-2"
            label="Your company name"
          />
          <v-text-field
            v-model="level"
            :rules="[rules.maxLength5]"
            class="px-10 py-2"
            label="Level"
          />
          <v-text-field
            v-model="field"
            :rules="[rules.maxLength20]"
            class="px-10 py-2"
            label="Field"
          />
          <v-text-field
            v-model="yoe"
            :rules="[rules.required, rules.lessThan50, rules.isPositiveNumber]"
            class="px-10 py-2"
            label="Years of Experience"
          />
          <vuetify-money
            v-model="tc"
            :rules="[rules.required]"
            class="px-10 py-2"
            label="Total Compensation"
            :options="money"
          />
        </v-form>
      </v-card-text>
      <v-card-title class="mb-10">
        <v-spacer />
        <v-btn
          class="elevation-0"
          color="primary"
          min-width="140px"
          @click="submit"
        >
          SHARE
        </v-btn>
        <v-spacer />
      </v-card-title>
    </v-card>
  </v-container>
</template>

<script>
import api from '../services/api'
import VMoneyField from "../plugins/vuetify-money"

export default {

  data: () => ({
	validForm: false,
    companyName: '',
    level: '',
    field: '',
    yoe: '',
    tc: '',
	rules: {
		required: value => !!value || 'Required.',
		maxLength5: value => value.length <= 5 || 'Max 5 characters',
		maxLength20: value => value.length <= 20 || 'Max 20 characters',
        maxLength50: value => value.length <= 50 || 'Max 50 characters',
		lessThan50: value => value <= 50 || 'Maximum at 50',
		isPositiveNumber: value => Number.isInteger(Number(value)) && value >= 0 || 'Must input number'
    },
	money: {
		  locale: 'vi-VN',
          suffix: ' VND',
          precision: 0
        }
  }),
  computed: {
    headers () {
      return [
        { text: 'Company', align: 'start', value: 'companyName' },
        { text: 'Date', align: 'start', value: 'date' },
        { text: 'Level', align: 'start', value: 'level' },
        { text: 'Focus', align: 'start', value: 'focus' },
        { text: 'Years of Experience', align: 'center', value: 'yoe' },
        { text: 'Total Compensation', align: 'center', value: 'tc' }
      ]
    },
	form () {
        return {
          companyName: this.companyName,
          address: this.address,
          city: this.city,
          state: this.state,
          zip: this.zip,
          country: this.country,
        }
      },

  },
  methods: {
    submit () {
      this.$refs.form.validate()
	  if (!this.validForm) return;
      const salary = {
		  companyName: this.companyName,
		  level: this.level,
		  field: this.field,
		  yoe: this.yoe,
		  tc: this.tc
		}
      api.submitSalary(salary)
	  this.$router.push('/add/submitted')

    }
  }
}
</script>

<style scoped>
</style>
