<script setup>

</script>

<template>
  <div id="TopBar" class="fixed bg-gray-100 w-full border-b h-[60px] flex items-center z-10">
    

    <div class="flex-1 text-center text-white"> <!-- flex-1类会使该 div 元素扩展以填充剩余的可用空间，从而将其余内容推到顶部栏的右侧 -->

      <span class="text-teal-500 text-xl">Cheif</span>
    </div>
  </div>

   <!-- Sidebar -->
   <div class="bg-gray-800 text-white w-64 pt-[60px]">
    <div class="p-4">
      <h1 class="text-2xl font-bold">Sidebar</h1>
    </div>
    <ul class="py-4">
      <li class="px-4 py-2 hover:bg-gray-700">
        <a href="#" class="block">Link 1</a>
      </li>
      <li class="px-4 py-2 hover:bg-gray-700">
        <a href="#" class="block">Link 2</a>
      </li>
      <li class="px-4 py-2 hover:bg-gray-700">
        <a href="#" class="block">Link 3</a>
      </li>
      <li class="px-4 py-2 hover:bg-gray-700">
        <a href="#" class="block">Link 4</a>
      </li>
    </ul>
  </div>
  
  
</template>

<style scoped>
</style>
