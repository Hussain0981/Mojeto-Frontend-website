<script lang="ts" setup>
const { $gsap, $SplitText } = useNuxtApp()

const videoRef = ref<HTMLVideoElement>() // top level par
let ctx: any

onMounted(() => {
  ctx = $gsap.context(() => {
    // 1) heading animation
    const split = $SplitText.create("#heading-name", { type: "chars" })
    $gsap.from(split.chars, {
      y: 0,
      opacity: 0,
      duration: 0.8,
      stagger: 0.05,
      ease: "power4.out",
    })

    // 2) hero leaves
    $gsap.from("#hero-left-leaf", { x: -70, y: 70, duration: 1 })
    $gsap.from("#hero-right-leaf", { x: 70, y: -70, duration: 1 })

    // 3) video: zoom + neeche jao + stop
    const DISTANCE = 1 // 2 = 200vh, apne hisab se change karein

    $gsap.timeline({
      scrollTrigger: {
        trigger: "#hero-section",
        start: "top top",
        end: "+=100%", // 100vh scroll tak animation chalegi
        scrub: 1, // scroll ke saath smooth chalega
        invalidateOnRefresh: true,
        // markers: true,         // debug ke liye
        onEnter: () => videoRef.value?.play(),
        onEnterBack: () => videoRef.value?.play(),
      },
    }).to("#video", {
      scale: 1.2, // thora zoom
      y: () => window.innerHeight * DISTANCE, // 200vh neeche
      ease: "none",
    })
  })
})

onUnmounted(() => ctx?.revert())
</script>

<template>
  <div>
    <!-- section: z hata diya, sirf relative -->
    <section
      id="hero-section" class="relative flex flex-col justify-between py-2 max-w-7xl mx-auto p-3 md:p-0"
      style="height: calc(100vh - 80px);"
    >
      <!-- heading: text, video ke upar -->
      <div class="relative z-30 grid place-items-center">
        <h1
          id="heading-name" class="text-[length:18vw] md:text-[length:14vw] leading-none uppercase font-bold
               bg-gradient-to-b from-slate-200 via-slate-300 to-slate-700
               bg-clip-text text-transparent"
        >
          Mojeto
        </h1>
      </div>

      <!-- left/right text: video ke upar -->
      <div class="relative z-30 flex flex-col gap-10 md:gap-0 md:flex-row items-center justify-between">
        <div id="left" class="w-full md:w-60 overflow-hidden">
          <h3 class="text-sm">
            Cool Orange Classic
          </h3>
          <h2 class="text-3xl font-bold mt-2">
            Slip the Sprite <br> of Summer
          </h2>
        </div>
        <div id="right" class="w-full md:w-60 overflow-hidden">
          <p class="text-sm">
            Aspernatur! Debitis eius omnis, reiciendis facere distinctio id delectus dicta dolorem
            maxime vero veniam recusandae quis minima quibusdam laudantium expedita adipisci.
          </p>
          <NuxtLink class="mt-3 underline text-sm" to="#">
            View Cookies
          </NuxtLink>
        </div>
      </div>

      <!-- video: background ke upar, text ke neeche -->
      <div id="video-wrapper" class="pointer-events-none absolute inset-x-0 bottom-0 z-10 flex justify-center">
        <video
          id="video" ref="videoRef"
          class="h-[100vh] md:h-[75vh] w-auto max-w-[80%] mx-auto object-contain mix-blend-screen"
          muted loop playsinline
        >
          <source src="/videos/input.mp4" type="video/mp4">
        </video>
      </div>

      <!-- arrow -->
      <img class="pointer-events-none absolute right-0 top-1/4 h-32 z-20" src="/images/arrow.png" alt="">
    </section>

    <!-- overlays -->

    <!-- top hero leafs -->
    <img
      id="hero-left-leaf" class="pointer-events-none absolute left-0 top-1/4 h-32 sm:40 md:h-60 z-0"
      src="/images/hero-left-leaf.png" alt=""
    >
    <img id="hero-right-leaf" class="pointer-events-none absolute top-0 right-0 h-32 sm:40 md:h-60 " src="/images/hero-right-leaf.png" alt="">
  </div>
</template>

<style lang="postcss" scoped></style>
