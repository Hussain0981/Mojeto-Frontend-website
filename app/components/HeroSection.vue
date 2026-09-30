<script lang="ts" setup>
const cocktails = reactive({
  left: {
    title: "Most Popular Cocktails",
    data: [
      { title: "Mojito", description: "Rum, mint, lime, soda · 100ml", price: "$10" },
      { title: "Margarita", description: "Tequila, triple sec, lime · 100ml", price: "$12" },
      { title: "Old Fashioned", description: "Bourbon, bitters, sugar · 100ml", price: "$14" },
      { title: "Cosmopolitan", description: "Vodka, cranberry, lime · 100ml", price: "$11" },
    ],
  },
  right: {
    title: "Signature Cocktails",
    data: [
      { title: "Velvet Pour", description: "Whiskey, orange, honey · 100ml", price: "$15" },
      { title: "Cool Orange", description: "Gin, orange, sparkling water · 100ml", price: "$13" },
      { title: "Summer Sprite", description: "Vodka, lime, lemonade · 100ml", price: "$12" },
      { title: "Mint Noir", description: "Rum, mint, dark cherry · 100ml", price: "$14" },
    ],
  },
})
</script>

<template>
  <!-- outer wrapper: shared background for all sections -->
  <div class="w-full bg-gray-950 text-slate-300" style="background-image: url('/images/noise.png');">

    <div class="relative" style="height: 200vh">
      <header class=" max-w-7xl mx-auto flex items-center justify-between h-20">
        <div class="flex items-center gap-3">
          <img class="w-8 max-w-8" src="/images/logo.png" alt="Velvet Pour logo" />
          <span>Velvet Pour</span>
        </div>
        <div class="space-x-3 text-sm font-semibold">
          <nuxt-link class="p-2" to="#">Cookies</nuxt-link>
          <nuxt-link class="p-2" to="#">About Us</nuxt-link>
          <nuxt-link class="p-2" to="#">The Art</nuxt-link>
          <nuxt-link class="p-2" to="#">Consent</nuxt-link>
        </div>
      </header>
      <main>
        <section class="relative z-10 flex flex-col justify-between py-2 max-w-7xl mx-auto"
          style="height: calc(100vh - 80px);">
          <div class="grid place-items-center">
            <h1 class="text-[length:14vw] leading-none uppercase font-bold
                       bg-gradient-to-b from-slate-200 via-slate-300 to-slate-700
                       bg-clip-text text-transparent">
              Mojeto
            </h1>
          </div>

          <div class="flex items-center justify-between">
            <div id="left" class="w-60 overflow-hidden">
              <h3 class="text-sm">Cool Orange Classic</h3>
              <h2 class="text-3xl font-bold mt-2">Slip the Sprite <br /> of Summer</h2>
            </div>
            <div id="right" class="w-60 overflow-hidden">
              <p class="text-sm">Aspernatur! Debitis eius omnis, reiciendis facere distinctio id delectus dicta dolorem
                maxime vero veniam recusandae quis minima quibusdam laudantium expedita adipisci.</p>
              <NuxtLink class="mt-3 underline text-sm" to="#">View Cookies</NuxtLink>
            </div>
          </div>

          <!-- video overlay -->
                <!-- video overlay -->
        <div class="pointer-events-none absolute inset-x-0 bottom-0  -z-10 flex justify-center">
          <video class="h-[75vh] w-auto max-w-[80%] object-contain mix-blend-screen" autoplay muted loop playsinline>
            <source src="/videos/input.mp4" type="video/mp4" />
          </video>
        </div>
          <!-- right arrow -->
          <img class="pointer-events-none absolute right-0 top-1/4 h-32 z-0" src="/images/arrow.png" alt="" />
        </section>

        <!-- section 1 end  -->

        <!-- section 2 -->
        <section
          class="min-h-screen w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-y-16 py-20 px-4 even:justify-end">
          <div v-for="(col, key) in cocktails" :key="key" class="w-1/2">
            <h2 class="text-2xl font-semibold pb-6">{{ col.title }}</h2>

            <div v-for="item in col.data" :key="item.title"
              class="flex items-start justify-between gap-6 py-4 border-b border-slate-700">
              <div>
                <h3 class="text-xl font-medium">{{ item.title }}</h3>
                <p class="text-sm text-slate-400">{{ item.description }}</p>
              </div>
              <span class="text-lg font-semibold">{{ item.price }}</span>
            </div>
          </div>
        </section>
      </main>

      <!-- overlays -->
       

      <!-- overlay leafs -->
      <!-- bottom leafs -->
      <img class="pointer-events-none absolute left-0 bottom-0 h-60 z-0"
        src="/images/cocktail-left-leaf.png" alt="" />
      <img class="pointer-events-none absolute bottom-0 right-0 h-60 " src="/images/cocktail-right-leaf.png" alt="" />
      <!-- top hero leafs -->
      <img class="pointer-events-none absolute left-0 top-1/4 h-60 z-0"
        src="/images/hero-left-leaf.png" alt="" />
      <img class="pointer-events-none absolute top-0 right-0 h-60 " src="/images/hero-right-leaf.png" alt="" />
    </div>

    <section id="page3" class="h-screen bg-black"></section>
  </div>
</template>

<style lang="postcss" scoped></style>
