<script setup>
import EyeOffIcon from 'vue-material-design-icons/EyeOff.vue';
</script>

<template>
  <p class="text-3xl font-bold underline">home</p>

  <router-link to="/login">
    <v-btn class="me-2 text-none" color="indigo" prepend-icon="mdi-export-variant" variant="flat">
      login
    </v-btn>
  </router-link>

  <eye-off-icon fillColor="#FF0000" :size="24"/>
</template>

<style scoped></style>
