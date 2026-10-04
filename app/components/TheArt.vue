<script lang="ts" setup>
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
  <section
    id="theArt"
    class="bg-zinc-600 py-10 text-white relative min-h-screen w-full bg-[linear-gradient(to_right,black,transparent,black),linear-gradient(to_bottom,black,transparent,black)]"
  >
    <!-- inner container keeps the content width -->
    <div class="max-w-7xl px-3 mx-auto w-full">
      <div
        class="md:absolute md:left-1/2 md:top-1/2 md:h-80 md:-translate-x-1/2 md:-translate-y-1/3 relative"
      >
        <img class="h-60 z-10 mx-auto" src="/images/drink1.png" alt="" />
        <h2 class="mt-6 text-2xl font-bold text-center">
          Sip-Worthy Perfection
        </h2>
      </div>

      <h1
        class="mt-4 font-bold text-white/20 text-center text-[16vw] leading-none"
      >
        The ART
      </h1>

      <div
        class="mt-10 gap-8 md:flex-row flex w-full flex-col items-start justify-between"
      >
        <!-- left column -->
        <ul class="gap-3 md:w-64 flex w-full flex-col">
          <li
            v-for="text in leftPhases"
            :key="text"
            class="gap-2 flex items-start"
          >
            <img
              class="mt-0.5 h-4 w-4 shrink-0"
              src="/images/check.png"
              alt=""
            />
            <span class="text-sm text-slate-300">{{ text }}</span>
          </li>
        </ul>

        <!-- right column: wrapper pushes it to the end -->
        <div class="flex w-full justify-end">
          <ul class="md:w-64 gap-3 flex w-full flex-col">
            <li
              v-for="text in rightPhases"
              :key="text"
              class="gap-2 flex items-start"
            >
              <img
                class="mt-0.5 h-4 w-4 shrink-0"
                src="/images/check.png"
                alt=""
              />
              <span class="text-sm text-slate-300">{{ text }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
