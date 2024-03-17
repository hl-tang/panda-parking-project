<script setup>
</script>

<template>
  <!-- Sidebar -->
  <div class="bg-indigo-800 text-white w-64">
    <div class="p-4">
      <h1 class="text-2xl font-bold">Sidebar</h1>
    </div>
    <ul class="py-4">
      <li class="px-4 py-2 hover:bg-indigo-700 focus:bg-indigo-700">
        <!-- <a href="#" class="block">オーナー情報</a> -->
        <router-link to="/owner" >オーナー情報</router-link>
      </li>
      <li class="px-4 py-2 hover:bg-indigo-700 focus:bg-indigo-700">
        <router-link to="/owner/ownerlist" >駐車所リスト一覧</router-link>
      </li>
      <li class="px-4 py-2 hover:bg-indigo-700 focus:bg-indigo-700">
        <router-link to="/owner/statistics" >売上確認</router-link>
      </li>
      
    </ul>
  </div>
</template>

<style scoped>
</style>