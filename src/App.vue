<template>
  <v-app>
    <!-- <v-content>
      <v-container fluid fill-height>
        <v-layout align-center>
          <v-flex xs12 class="text-center">
            <h1 class="title white--text">반가워요!</h1>
            <p class="text-caption">by VueJs</p>
            <img src="./assets/logo.png" alt="" width="100" height="100">
          </v-flex>
        </v-layout>
      </v-container>
    </v-content> -->
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  data() {
    return {
      
    }
  },
};
</script>
