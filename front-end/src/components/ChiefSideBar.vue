<script setup>
</script>

<template>
  <!-- Sidebar -->
  <div class="bg-indigo-800 text-white w-64">
    <div class="p-4">
      <h1 class="text-2xl font-bold">Sidebar</h1>
    </div>
    <ul class="py-4">
      <li class="px-4 py-2 hover:bg-indigo-700 focus:bg-indigo-700" @click="currentComponent = 'ComponentA'">
        <a href="#" class="block">Link 1</a>
      </li>
      <li class="px-4 py-2 hover:bg-indigo-700 focus:bg-indigo-700">
        <a href="#" class="block">Link 2</a>
      </li>
      <li class="px-4 py-2 hover:bg-indigo-700 focus:bg-indigo-700">
        <a href="#" class="block">Link 3</a>
      </li>
      <li class="px-4 py-2 hover:bg-indigo-700 focus:bg-indigo-700">
        <a href="#" class="block">Link 4</a>
      </li>
    </ul>
  </div>
</template>

<style scoped>
</style>