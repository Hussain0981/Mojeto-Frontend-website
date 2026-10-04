<script lang="ts" setup></script>

<template>
  <header
    class="px-3 md:px-0 max-w-7xl h-20 z-50 mx-auto flex items-center justify-between"
  >
    <div class="gap-3 flex items-center">
      <img class="w-8 max-w-8" src="/images/logo.png" alt="Velvet Pour logo" />
      <span>Velvet Pour</span>
    </div>
    <div class="md:hidden block">
      <span class="font-bold">X</span>
    </div>
    <div class="md:block space-x-3 text-sm font-semibold hidden">
      <nuxt-link class="p-2" to="#"> Cookies </nuxt-link>
      <nuxt-link class="p-2" to="#"> About Us </nuxt-link>
      <nuxt-link class="p-2" to="#"> The Art </nuxt-link>
      <nuxt-link class="p-2" to="#"> Consent </nuxt-link>
    </div>
  </header>
</template>

<style lang="postcss" scoped></style>
