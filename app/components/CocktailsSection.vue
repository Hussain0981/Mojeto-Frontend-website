<script lang="ts" setup>
const { $gsap } = useNuxtApp()
let ctx: any

const leftCocktails = reactive({
  title: "Most Popular Cocktails",
  data: [
    { title: "Mojito", description: "Rum, mint, lime, soda · 100ml", price: "$10" },
    { title: "Margarita", description: "Tequila, triple sec, lime · 100ml", price: "$12" },
    { title: "Old Fashioned", description: "Bourbon, bitters, sugar · 100ml", price: "$14" },
    { title: "Cosmopolitan", description: "Vodka, cranberry, lime · 100ml", price: "$11" },
  ],
})

const rightCocktails = reactive({
  title: "Signature Cocktails",
  data: [
    { title: "Velvet Pour", description: "Whiskey, orange, honey · 100ml", price: "$15" },
    { title: "Cool Orange", description: "Gin, orange, sparkling water · 100ml", price: "$13" },
    { title: "Summer Sprite", description: "Vodka, lime, lemonade · 100ml", price: "$12" },
    { title: "Mint Noir", description: "Rum, mint, dark cherry · 100ml", price: "$14" },
  ],
})

onMounted(() => {
  ctx = $gsap.context(() => {
    const tl = $gsap.timeline({
      scrollTrigger: {
        trigger: "#cocktail-section",
        start: "top 60%",
        toggleActions: "play none none reverse",
      },
    })

    tl.from("#cocktail-left-leaf", { x: -70, y: 70, opacity: 0, duration: 1 })
      .from("#cocktail-right-leaf", { x: 70, y: 70, opacity: 0, duration: 1 }, "<")
      // '<' ka matlab: pichli animation ke saath hi shuru karo

    // lists ka halka sa fade-in
    $gsap.from("#cocktail-section .border-b", {
      y: 30,
      opacity: 0,
      stagger: 0.1,
      duration: 0.6,
      scrollTrigger: {
        trigger: "#cocktail-section",
        start: "top 60%",
      },
    })
  })
})

onUnmounted(() => ctx?.revert())
</script>

<template>
  <div id="cocktail-section" class="relative">
    <section
      class="relative z-30 h-auto md:h-screen w-full max-w-7xl mx-auto flex flex-col items-start md:flex-row gap-y-16 py-28 px-3 md:px-6 xl:px-0"
    >
      <div class="w-full">
        <div class="w-full md:w-1/2">
          <h2 class="text-2xl font-semibold pb-6">
            {{ rightCocktails.title }}
          </h2>

          <div
            v-for="item in rightCocktails.data" :key="item.title"
            class="flex items-start justify-between gap-6 py-4 border-b border-slate-700"
          >
            <div>
              <h3 class="text-xl font-medium">
                {{ item.title }}
              </h3>
              <p class="text-sm text-slate-400">
                {{ item.description }}
              </p>
            </div>
            <span class="text-lg font-semibold">{{ item.price }}</span>
          </div>
        </div>
      </div>
      <div class="w-full flex md:justify-end">
        <div class="w-full md:w-1/2">
          <h2 class="text-2xl font-semibold pb-6">
            {{ leftCocktails.title }}
          </h2>

          <div
            v-for="item in leftCocktails.data" :key="item.title"
            class="flex items-start justify-between gap-6 py-4 border-b border-slate-700"
          >
            <div>
              <h3 class="text-xl font-medium">
                {{ item.title }}
              </h3>
              <p class="text-sm text-slate-400">
                {{ item.description }}
              </p>
            </div>
            <span class="text-lg font-semibold">{{ item.price }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- leaves: text ke neeche ya barabar -->
    <img
      id="cocktail-left-leaf" class="pointer-events-none absolute left-0 bottom-0 h-32 sm:h-40 md:h-60 z-20"
      src="/images/cocktail-left-leaf.png" alt=""
    >
    <img
      id="cocktail-right-leaf" class="pointer-events-none absolute bottom-0 right-0 h-32 sm:h-40 md:h-60 z-20"
      src="/images/cocktail-right-leaf.png" alt=""
    >
  </div>
</template>

<style lang="postcss" scoped>

</style>
