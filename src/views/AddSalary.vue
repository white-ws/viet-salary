<template>
  <v-container>
    <v-card class="elevation-0">
      <v-card-title>
      <v-spacer></v-spacer>
      SHARE YOUR SALARY
      <v-spacer></v-spacer>
      </v-card-title>
      <v-form>
        <v-row>
          <v-col cols="2">
            <v-subheader>Company Name</v-subheader>
          </v-col>
          <v-col cols="8">
            <v-text-field
              v-model="first"
              label="Your company name"
              outlined
              solo
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="2">
            <v-subheader>Company Name</v-subheader>
          </v-col>
          <v-col cols="8">
            <v-text-field
              v-model="first"
              label="Your company name"
              outlined
              solo
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="2">
            <v-subheader>Company Name</v-subheader>
          </v-col>
          <v-col cols="8">
            <v-text-field
              v-model="first"
              label="Your company name"
              outlined
              solo
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="2">
            <v-subheader>Company Name</v-subheader>
          </v-col>
          <v-col cols="8">
            <v-text-field
              v-model="first"
              label="Your company name"
              outlined
              solo
            ></v-text-field>
          </v-col>
        </v-row>
      </v-form>
    </v-card>
      </v-container>
</template>

<script>
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
      {
        name: 'LINE',
        date: '2021/09/21',
        level: 'I3',
        focus: 'Devops',
        yoe: 5,
        tc: 7000000
      },
      {
        name: 'Indeed',
        date: '2020/06/21',
        level: 'SWE2',
        focus: 'Backend',
        yoe: 6,
        tc: 17930000
      },
      {
        name: 'Mercari',
        date: '2021/11/21',
        level: 'EX2',
        focus: 'Frontend',
        yoe: 8,
        tc: 11000000
      },
      {
        name: 'Rakuten',
        date: '2020/06/30',
        level: 'BBB',
        focus: 'Backend',
        yoe: 3,
        tc: 7000000
      },
      {
        name: 'Amazon',
        date: '2019/08/21',
        level: 'L5',
        focus: 'Fullstack',
        yoe: 2,
        tc: 8000000
      },
      {
        name: 'Rakuten',
        date: '2020/05/21',
        level: 'SE1',
        focus: 'Data',
        yoe: 2,
        tc: 7000000
      },
      {
        name: 'Paypay',
        date: '2021/09/10',
        level: 'E3',
        focus: 'Backend',
        yoe: 7,
        tc: 12000000
      },
      {
        name: 'Rakuten',
        date: '2020/01/02',
        level: 'BBB',
        focus: 'Backend',
        yoe: 2,
        tc: 8000000
      },
      {
        name: 'Yahoo',
        date: '2021/05/24',
        level: 'SE2',
        focus: 'Automotive',
        yoe: 6,
        tc: 12000000
      },
      {
        name: 'LINE',
        date: '2021/05/12',
        level: 'I4',
        focus: 'Frontend',
        yoe: 7,
        tc: 6000000
      }
    ]
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
