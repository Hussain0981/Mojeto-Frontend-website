<script lang="ts" setup>
const { $gsap } = useNuxtApp()
function gsapAnimation() {
  $gsap.from('#mainHeading', {
    y: 100,
	stagger: {
    ease: "power2.in",
    each: 0.1,
  }
  })
}
onMounted(() => {
  gsapAnimation()
})
</script>

<template>
  <section style="height : calc(100vh - 80px)" class="flex flex-col justify-between pb-3">
    <div class="-mt-14"> 
      <h1 id="mainHeading" class="text-[14vw] uppercase font-bold text-center" >mojeto</h1>
    </div>
    <div class="flex items-center justify-between"> 
      <div id="right" class="w-60">
        <h3 class="text-sm font-semibold">Cool Crisco Classic</h3>
        <h2 class="text-3xl font-bold mt-2">Sip The Sprit <br /> Of Summer</h2>
      </div>
      <div id="left" class="w-60 text-sm font-semibold">
        <p>Loremero cumque molestiae officiis aliquid laudantium esse, ipsa veritatis explicabo sit molestias facere est impedit.</p>
        <button class="mt-4 hover:underline hover:text-slate-400 transition-all">View Cocktails</button>
      </div>
    </div>
  </section>
</template>
