<template>
  <v-app id="inspire">
    <v-app-bar app color="white" flat>
    <router-link to="/" tag="button"><v-app-bar-title class="ml-5">VIET SALARY</v-app-bar-title></router-link>
      <v-container class="py-0 fill-height">
        <v-spacer></v-spacer>
        <v-btn v-for="link in links" :key="link" text>
          {{ link }}
        </v-btn>

      </v-container>
    </v-app-bar>

    <v-main class="white">
      <router-view></router-view>
    </v-main>
  </v-app>

</template>

<script>
export default {
  data: () => ({
    links: [
      'Placerholder 1',
      'Placerholder 2',
      'Placerholder 3',
      'Placerholder 4'
    ]
  })
}
</script>
