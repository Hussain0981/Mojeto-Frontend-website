<script lang="ts" setup>
const { $gsap, $ScrollTrigger } = useNuxtApp()

// section ka element: trigger aur scope dono ke liye string ki jagah element use hota hai
const sectionRef = ref<HTMLElement>()
let ctx: any

const refresh = () => $ScrollTrigger.refresh()

onMounted(async () => {
  await nextTick()

  ctx = $gsap.context(() => {
    const tl = $gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.value,
        start: () => (window.innerWidth < 768 ? 'top top' : 'top top'),
        end: () => `+=${window.innerHeight * 2}`, // 150vh scroll, pixels mein
        scrub: 1.5,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        // markers: true, // debug ke liye on karein
      },
    })

    // 1) scroll down: purana content ek ek kar ke fade out
    //    scroll up: ye animation ulti chalti hai, content wapas show
    tl.to('.will-fade', {
      opacity: 0,
      y: -40,
      stagger: 0.2,
      ease: 'power1.out',
    })

    tl.fromTo('#mask-img',
      { maskSize: '50%', scale: 1 }, {
      scale: 1.3,
      maskPosition: 'center',
      maskSize: '400%',
      duration: 1,
      ease: 'power1.out',
    })

    // 2) uske baad naya text fade in
    tl.fromTo(
      '#final-text',
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, ease: 'power1.out' },
    )

  }, sectionRef.value)

  // images load hone par page ki lambai badalti hai, is liye dobara hisab
  window.addEventListener('load', refresh)
  setTimeout(refresh, 500)
})

onUnmounted(() => {
  window.removeEventListener('load', refresh)
  ctx?.revert()
})

const leftPhases = [
  'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  'Aspernatur debitis eius omnis reiciendis facere distinctio.',
  'Id delectus dicta dolorem maxime vero veniam recusandae.',
  'Quis minima quibusdam laudantium expedita adipisci.',
]

const rightPhases = [
  'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  'Aspernatur debitis eius omnis reiciendis facere distinctio.',
  'Id delectus dicta dolorem maxime vero veniam recusandae.',
  'Quis minima quibusdam laudantium expedita adipisci.',
]
</script>

<template>
  <!-- full width section carries the background -->
  <section id="theArt" ref="sectionRef"
    class="relative h-auto md:min-h-screen w-full bg-zinc-600 bg-[linear-gradient(to_right,black,transparent,black),linear-gradient(to_bottom,black,transparent,black)] py-10 text-white">
    <!-- inner container keeps the content width -->
    <div class="mx-auto w-full max-w-7xl px-3">
      <div id="center-image"
        class="relative md:absolute md:left-1/2 md:top-1/2 md:h-98 md:-translate-x-1/2 md:-translate-y-2/3">
        <img id="mask-img" class="z-10 mx-auto masked-image h-60 md:h-[50vh] md:w-[70vw] object-cover object-center"
          src="/images/under-img.jpg" alt="" />
        <h2 class="will-fade text-center text-2xl font-bold mt-6">
          Sip-Worthy Perfection
        </h2>
      </div>

      <h1 class="will-fade mt-4 text-center text-[16vw] font-bold leading-none text-white/20">
        The ART
      </h1>

      <div class="will-fade mt-10 flex w-full flex-col items-start justify-between gap-8 md:flex-row">
        <!-- left column -->
        <ul class="flex w-full flex-col gap-3 md:w-64">
          <li v-for="text in leftPhases" :key="text" class="flex items-start gap-2">
            <img class="mt-0.5 h-4 w-4 shrink-0" src="/images/check.png" alt="" />
            <span class="text-sm text-slate-300">{{ text }}</span>
          </li>
        </ul>

        <!-- right column: wrapper pushes it to the end -->
        <div class="flex w-full justify-end">
          <ul class="flex w-full flex-col gap-3 md:w-64">
            <li v-for="text in rightPhases" :key="text" class="flex items-start gap-2">
              <img class="mt-0.5 h-4 w-4 shrink-0" src="/images/check.png" alt="" />
              <span class="text-sm text-slate-300">{{ text }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- final text: pehle chhupa hua, scroll par show hota hai -->
    <div class="pointer-events-none px-3">
      <div id="final-text" class="text-center opacity-0">
        <h3 class="text-2xl font-bold">
          Made with Craft, Poured with Passion
        </h3>
        <p class="mx-auto max-w-xl text-slate-300 mt-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim minus numquam dolore ducimus ab? Placeat cumque
          expedita ut libero esse.
        </p>
      </div>
    </div>
  </section>
</template>

<style lang="postcss" scoped>
.masked-image {
  mask-image: url('/images/mask-img.png');
  mask-repeat: no-repeat;
  mask-position: center;
  mask-size: 50%;
}
</style>
