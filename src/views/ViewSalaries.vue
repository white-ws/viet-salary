<template>
  <v-container>
    <v-card class="elevation-0">
      <v-card-title>
        <v-spacer />
        <v-btn
          class="elevation-0"
          color="primary"
          @click="$router.push('add')"
        >
          Add your salary
        </v-btn>
        <v-spacer />
      </v-card-title>
      <v-card-title>
        Vietnamese Software Engineer Salary
        <v-spacer />
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search company"
          single-line
          hide-details
        />
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="items"
        class="elevation-0"
        :search="search"
        :custom-filter="filterCompanies"
      >
        <template v-slot:item.tc="{ item }">
          <span>{{ formattedCurrency(item.tc) }}</span>
        </template>
      </v-data-table>
    </v-card>
  </v-container>
</template>

<script>
import api from '../services/api'

export default {
  data: () => ({
    links: [
      'Placerholder 1',
      'Placerholder 2',
      'Placerholder 3',
      'Placerholder 4'
    ],
    search: '',
    items: [
    //   {
    //     name: 'LINE',
    //     date: '2021/09/21',
    //     level: 'I3',
    //     field: 'Devops',
    //     yoe: 5,
    //     tc: 7000000
    //   },
    //   {
    //     name: 'Indeed',
    //     date: '2020/06/21',
    //     level: 'SWE2',
    //     field: 'Backend',
    //     yoe: 6,
    //     tc: 17930000
    //   },
    //   {
    //     name: 'Mercari',
    //     date: '2021/11/21',
    //     level: 'EX2',
    //     field: 'Frontend',
    //     yoe: 8,
    //     tc: 11000000
    //   },
    //   {
    //     name: 'Rakuten',
    //     date: '2020/06/30',
    //     level: 'BBB',
    //     field: 'Backend',
    //     yoe: 3,
    //     tc: 7000000
    //   },
    //   {
    //     name: 'Amazon',
    //     date: '2019/08/21',
    //     level: 'L5',
    //     field: 'Fullstack',
    //     yoe: 2,
    //     tc: 8000000
    //   },
    //   {
    //     name: 'Rakuten',
    //     date: '2020/05/21',
    //     level: 'SE1',
    //     field: 'Data',
    //     yoe: 2,
    //     tc: 7000000
    //   },
    //   {
    //     name: 'Paypay',
    //     date: '2021/09/10',
    //     level: 'E3',
    //     field: 'Backend',
    //     yoe: 7,
    //     tc: 12000000
    //   },
    //   {
    //     name: 'Rakuten',
    //     date: '2020/01/02',
    //     level: 'BBB',
    //     field: 'Backend',
    //     yoe: 2,
    //     tc: 8000000
    //   },
    //   {
    //     name: 'Yahoo',
    //     date: '2021/05/24',
    //     level: 'SE2',
    //     field: 'Automotive',
    //     yoe: 6,
    //     tc: 12000000
    //   },
    //   {
    //     name: 'LINE',
    //     date: '2021/05/12',
    //     level: 'I4',
    //     field: 'Frontend',
    //     yoe: 7,
    //     tc: 6000000
    //   }
    ]
  }),
  computed: {
    headers () {
      return [
        { text: 'Company', align: 'start', value: 'name' },
        { text: 'Date', align: 'start', value: 'date' },
        { text: 'Level', align: 'start', value: 'level' },
        { text: 'Field', align: 'start', value: 'field' },
        { text: 'Years of Experience', align: 'center', value: 'yoe' },
        { text: 'Total Compensation', align: 'end', value: 'tc' }
      ]
    }
  },
  mounted () {
    api.getSalaries()
      .then(response => {
        this.items = response.data.map(res => ({
			name: res.company.name,
			date: res.createdDt,
			level: res.level,
			field: res.field,
			yoe: res.yoe,
			tc: res.tc
		}))
      })
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
