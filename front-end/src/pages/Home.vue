<script setup>
import EyeOffIcon from 'vue-material-design-icons/EyeOff.vue';
import AccountIcon from 'vue-material-design-icons/Account.vue';
import AccountTieIcon from 'vue-material-design-icons/AccountTie.vue';
import SecurityIcon from 'vue-material-design-icons/Security.vue';
</script>

<template>
  <v-container class="d-flex flex-row justify-center">
    <v-card :to="{ name: 'UserLogin'}" class="ma-2">
      <v-card-title>
        ユーザーとしてログイン
      </v-card-title>
      <account-icon :size="100"/>
    </v-card>

    <v-card :to="{ name: 'OwnerLogin'}"  class="ma-2">
      <v-card-title>
        オーナーとしてログイン
      </v-card-title>
      <account-tie-icon :size="100" />
    </v-card>
  </v-container>

  <!-- <v-container class="d-flex flex-row justify-center">
    <v-card :to="{ name: 'Login'}" 
    class="ma-2 w-50">
      <v-card-title>
        管理者としてログイン
      </v-card-title>
      <security-icon :size="50" />
    </v-card>
  </v-container> -->


  <!-- <p class="text-3xl font-bold underline">home</p>

  <router-link to="/login">
    <v-btn class="me-2 text-none" color="indigo" prepend-icon="mdi-export-variant" variant="flat">
      login
    </v-btn>
  </router-link>

  <eye-off-icon fillColor="#FF0000" :size="24"/> -->
</template>

<style scoped></style>
