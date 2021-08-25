<template>
  <v-app id="inspire">
    <v-app-bar
      app
      color="white"
      flat
    >
      <v-container class="py-0 fill-height">
        <router-link
          to="/"
          tag="button"
        >
          <v-tool-bar-title class="toolbar_title ml-5 overflow-visible">
            <img src="@/assets/logo.svg" width="30" class="mr-2"/>  VietSalary
          </v-tool-bar-title>
        </router-link>
        <v-spacer />
        <v-btn
          v-for="link in links"
          :key="link"
          text
        >
          {{ link }}
        </v-btn>
      </v-container>
    </v-app-bar>

    <v-main class="white">
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    links: [
    //   'Placerholder 1',
    //   'Placerholder 2',
    //   'Placerholder 3',
    //   'Placerholder 4'
    ]
  })
}
</script>

<style scoped>
.toolbar_title {
	font-family: 'Roboto';
  font-size: 1.25rem;
    line-height: 1.5;
}
</style>
