<script lang="ts" setup>
const { $gsap, $SplitText } = useNuxtApp()

const videoRef = ref<HTMLVideoElement>() // top level par
let ctx: any

onMounted(() => {
  ctx = $gsap.context(() => {
    // 1) heading animation
    const split = $SplitText.create('#heading-name', { type: 'chars' })
    $gsap.from(split.chars, {
      y: 0,
      opacity: 0,
      duration: 0.8,
      stagger: 0.05,
      ease: 'power4.out',
    })

    // 2) hero leaves
    $gsap.from('#hero-left-leaf', { x: -70, y: 70, duration: 1 })
    $gsap.from('#hero-right-leaf', { x: 70, y: -70, duration: 1 })

    // 3) video: zoom + neeche jao + stop
    const DISTANCE = 1 // 2 = 200vh, apne hisab se change karein

    $gsap
      .timeline({
        scrollTrigger: {
          trigger: '#hero-section',
          start: 'top top',
          end: '+=100%', // 100vh scroll tak animation chalegi
          scrub: 1, // scroll ke saath smooth chalega
          invalidateOnRefresh: true,
          // markers: true,         // debug ke liye
          onEnter: () => videoRef.value?.play(),
          onEnterBack: () => videoRef.value?.play(),
        },
      })
      .to('#video', {
        scale: 1.2, // thora zoom
        y: () => window.innerHeight * DISTANCE, // 200vh neeche
        ease: 'none',
      })
  })
})

onUnmounted(() => ctx?.revert())
</script>

<template>
  <div>
    <!-- section: z hata diya, sirf relative -->
    <section
      id="hero-section"
      class="py-2 max-w-7xl p-3 md:p-0 relative mx-auto flex flex-col justify-between"
      style="height: calc(100vh - 80px)"
    >
      <!-- heading: text, video ke upar -->
      <div class="relative z-30 grid place-items-center">
        <h1
          id="heading-name"
          class="from-slate-200 via-slate-300 to-slate-700 md:text-[length:14vw] font-bold bg-gradient-to-b bg-clip-text text-[length:18vw] leading-none text-transparent uppercase"
        >
          Mojeto
        </h1>
      </div>

      <!-- left/right text: video ke upar -->
      <div
        class="gap-10 md:gap-0 md:flex-row relative z-30 flex flex-col items-center justify-between"
      >
        <div id="left" class="md:w-60 w-full overflow-hidden">
          <h3 class="text-sm">Cool Orange Classic</h3>
          <h2 class="text-3xl font-bold mt-2">
            Slip the Sprite <br />
            of Summer
          </h2>
        </div>
        <div id="right" class="md:w-60 w-full overflow-hidden">
          <p class="text-sm">
            Aspernatur! Debitis eius omnis, reiciendis facere distinctio id
            delectus dicta dolorem maxime vero veniam recusandae quis minima
            quibusdam laudantium expedita adipisci.
          </p>
          <NuxtLink class="mt-3 text-sm underline" to="#">
            View Cookies
          </NuxtLink>
        </div>
      </div>

      <!-- video: background ke upar, text ke neeche -->
      <div
        id="video-wrapper"
        class="inset-x-0 bottom-0 pointer-events-none absolute z-10 flex justify-center"
      >
        <video
          id="video"
          ref="videoRef"
          class="md:h-[75vh] mx-auto h-[100vh] w-auto max-w-[80%] object-contain mix-blend-screen"
          muted
          loop
          playsinline
        >
          <source src="/videos/input.mp4" type="video/mp4" />
        </video>
      </div>

      <!-- arrow -->
      <img
        class="right-0 h-32 pointer-events-none absolute top-1/4 z-20"
        src="/images/arrow.png"
        alt=""
      />
    </section>

    <!-- overlays -->

    <!-- top hero leafs -->
    <img
      id="hero-left-leaf"
      class="left-0 h-32 sm:40 md:h-60 pointer-events-none absolute top-1/4 z-0"
      src="/images/hero-left-leaf.png"
      alt=""
    />
    <img
      id="hero-right-leaf"
      class="top-0 right-0 h-32 sm:40 md:h-60 pointer-events-none absolute"
      src="/images/hero-right-leaf.png"
      alt=""
    />
  </div>
</template>

<style lang="postcss" scoped></style>
