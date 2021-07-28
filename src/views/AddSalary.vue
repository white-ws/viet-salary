<template>
  <v-container>
    <v-card class="elevation-0">
      <v-card-title class="mx-10">
        <v-spacer></v-spacer>
        SHARE YOUR SALARY
        <v-spacer></v-spacer>
      </v-card-title>
      <v-card-text>
        <v-form class="px-10 pt-3">
          <v-text-field class="px-10 py-2" v-model="name" label="Your company name"></v-text-field>
          <v-text-field class="px-10 py-2" v-model="level" label="Level"></v-text-field>
          <v-text-field class="px-10 py-2" v-model="field" label="Field"></v-text-field>
          <v-text-field class="px-10 py-2" v-model="yoe" label="Years of Experience"></v-text-field>
          <v-text-field class="px-10 py-2" v-model="tc" label="Total Compensation"></v-text-field>
        </v-form>
      </v-card-text>
      <v-card-title class="mb-10">
            <v-spacer></v-spacer>
            <v-btn class="elevation-0" color="primary" @click="$router.push('/')" min-width="140px">SHARE</v-btn>
            <v-spacer></v-spacer>
      </v-card-title>
    </v-card>
      </v-container>
</template>

<script>
export default {
  data: () => ({
  }),
  computed: {
    headers () {
      return [
        { text: 'Company', align: 'start', value: 'name' },
        { text: 'Date', align: 'start', value: 'date' },
        { text: 'Level', align: 'start', value: 'level' },
        { text: 'Focus', align: 'start', value: 'focus' },
        { text: 'Years of Experience', align: 'center', value: 'yoe' },
        { text: 'Total Compensation', align: 'center', value: 'tc' }
      ]
    }
  },
  methods: {
    filterCompanies (value, search) {
      return value != null &&
          search != null &&
          typeof value === 'string' &&
          value.toString().toLocaleLowerCase().indexOf(search.toLocaleLowerCase()) !== -1
    },
    formattedCurrency (value) {
      return value.toLocaleString('en-US', {
        style: 'currency',
        currency: 'JPY'
      })
    }
  }
}
</script>

<style scoped>
</style>
