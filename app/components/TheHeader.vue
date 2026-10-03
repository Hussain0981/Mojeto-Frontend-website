<script lang="ts" setup>

</script>

<template>
  <header class="px-3 md:px-0 z-50 max-w-7xl mx-auto flex items-center justify-between h-20">
    <div class="flex items-center gap-3">
      <img class="w-8 max-w-8" src="/images/logo.png" alt="Velvet Pour logo">
      <span>Velvet Pour</span>
    </div>
    <div class="block md:hidden">
      <span class="font-bold ">X</span>
    </div>
    <div class="hidden md:block space-x-3 text-sm font-semibold">
      <nuxt-link class="p-2" to="#">
        Cookies
      </nuxt-link>
      <nuxt-link class="p-2" to="#">
        About Us
      </nuxt-link>
      <nuxt-link class="p-2" to="#">
        The Art
      </nuxt-link>
      <nuxt-link class="p-2" to="#">
        Consent
      </nuxt-link>
    </div>
  </header>
</template>

<style lang="postcss" scoped>

</style>
