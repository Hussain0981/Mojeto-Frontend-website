<script lang="ts" setup>
import { heroAnimation } from '~/gsap/HeroAnimation'

let cleanup: (() => void) | undefined
const videoRef = ref<HTMLVideoElement | null>(null)

onMounted(() => {
  cleanup = heroAnimation(
    '#heading-name',
    '#left .title', // left text
    '#right p', // right text
    '#hero-left-leaf', // matches your template id
    '#hero-right-leaf', // matches your template id
    '#hero-section', // scroll trigger
    '#video', // video selector
    '#video-wrapper',
    videoRef.value,
  )
})

onBeforeUnmount(() => {
  cleanup?.()
})
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
      <div class="relative z-40 grid place-items-center">
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
          <h3 class="text-sm sub-title">Cool Orange Classic</h3>
          <h2 class="text-3xl font-bold mt-2 title">
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
          class="md:h-[75vh] xl:max-w-[80%] mx-auto h-[100vh] w-auto w-full object-contain mix-blend-screen"
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

<style lang="postcss" scoped>
#heading-name :deep(.hero-char) {
  @apply from-slate-200 via-slate-300 to-slate-700 bg-gradient-to-b bg-clip-text text-transparent;
}
</style>
