<script setup>
import OwnerSideBar from '../components/OwnerSideBar.vue';
import TopBar from '../components/TopBar.vue';

</script>

<template>
 
  <!-- <TopBar /> -->
  <!-- 导入topbar后sidebar的router不灵了 -->
  <div class="flex h-screen">
    <!-- Sidebar -->
    <OwnerSideBar />

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