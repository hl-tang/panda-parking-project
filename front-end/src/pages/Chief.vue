<script setup>
import ChiefSideBar from '../components/ChiefSideBar.vue';

</script>

<template>
  <div class="flex h-screen">
    <!-- Sidebar -->
    <ChiefSideBar />

    <!-- Main Content -->
    <div class="flex-1">
      <div class="p-4">
        <h1 class="text-2xl font-bold">Main Content</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.</p>
      </div>
    </div>
  </div>

</template>

<style scoped></style>
