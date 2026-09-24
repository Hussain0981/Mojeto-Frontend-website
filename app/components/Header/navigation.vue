<script lang="ts" setup>
const navTabs = [
  {id:1, title: 'Contact us', path: '#'},
  {id:2, title: 'About us', path: '#'},
  {id:3, title: 'The Arts', path: '#'},
  {id:4, title: 'Cookies', path: '#'},
]
</script>

<template>
  <div class="flex items-center justify-between h-20">
    <div class="flex items-center gap-2 ">
      <img class="h-10 w-10 " src="" alt="">
      <h1>Velvet Pour</h1>
    </div>
    <div>
      <ul class="flex items-center gap-2">
        <li class="p-2 hover:bg-gray-50 rounded-md cursor-pointer transition-all duration-200 text-sm" v-for="nav in navTabs" :key="nav.id">{{ nav.title }}</li>
      </ul>
    </div>
  </div>
</template>
