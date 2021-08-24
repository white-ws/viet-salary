<template>
  <v-container>
    <v-card class="elevation-0 text-center">
      <v-icon
        x-large
        color="green darken-2"
      >
        mdi-check-circle
      </v-icon>
      <v-card-title class="mx-10 text-h5">
        <v-spacer />
        Thank you for sharing!
        <v-spacer />
      </v-card-title>
      <v-card-text class="text-body-1 justify-center">
        Your form has been submitted successfully. 
      </v-card-text>
      <v-card-title class="mb-10">
        <v-spacer />
        <v-btn
          class="elevation-0"
          color="primary"
          min-width="140px"
          @click="$router.push('/')"
        >
          <v-icon
            dark
            left
          >
            mdi-arrow-left
          </v-icon>BACK TO HOMEPAGE
        </v-btn>
        <v-spacer />
      </v-card-title>
    </v-card>
  </v-container>
</template>

<script>

export default {
}
</script>

<style scoped>
</style>
