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
   <!-- Main Content -->
   <div class="flex-1 flex flex-col justify-center items-center">
    <p class="text-lg font-bold mb-5">団体１様、ようこそ</p>
    <div class="p-5 flex justify-center">
      <!-- <p>sdfdsf</p> -->
      <!-- Card 1 -->
      <div class="bg-white shadow-md rounded-lg p-6 flex items-center m-10">
        <!-- Content -->
        <div class="flex flex-col items-center">
          <!-- Image -->
          <img src="../assets/parking_pic.png" alt="Icon" class="w-36 h-36 mb-4">
          <!-- Text -->
          <p class="text-lg font-semibold">駐車場数：4</p>
        </div>
      </div>

      <!-- Card 2 -->
      <div class="bg-white shadow-md rounded-lg p-6 flex items-center m-10">
        <!-- Content -->
        <div class="flex flex-col items-center">
          <!-- Image -->
          <img src="../assets/user_pic.png" alt="Icon" class="w-36 h-36 mb-4">
          <!-- Text -->
          <p class="text-lg font-semibold">ユーザ数：500</p>
        </div>
      </div>
    </div>
  </div>

  </div>

</template>

<style scoped></style>