<script lang="ts" setup>
const name = "Hussain"
</script>

<template>
  <!-- full width section carries the background -->
  <section
    id="theArt"
    class="h-screen w-full py-10 text-white
           bg-zinc-600
           bg-[linear-gradient(to_right,black,transparent,black),linear-gradient(to_bottom,black,transparent,black)]"
  >
    <!-- inner container keeps the content width -->
    <div class="max-w-7xl mx-auto px-3">
      <h1 class="text-[16vw] font-bold text-center leading-none">
        The ART
      </h1>

      <div class="flex justify-between items-center mt-10">
        <div class="flex flex-col gap-2 w-40 border">
          <div class="flex items-center gap-2">
            <img class="h-4 w-4" src="/images/check.png" alt="">
            <span>Phase1</span>
          </div>
          <div class="flex items-center gap-2">
            <img class="h-4 w-4" src="/images/check.png" alt="">
            <span>Phase2</span>
          </div>
          <div class="flex items-center gap-2">
            <img class="h-4 w-4" src="/images/check.png" alt="">
            <span>Phase3</span>
          </div>
          <div class="flex items-center gap-2">
            <img class="h-4 w-4" src="/images/check.png" alt="">
            <span>Phase4</span>
          </div>
        </div>
        <div class="flex flex-col gap-2 w-40 border">
          <div class="flex items-center gap-2">
            <img class="h-4 w-4" src="/images/check.png" alt="">
            <span>Phase1</span>
          </div>
          <div class="flex items-center gap-2">
            <img class="h-4 w-4" src="/images/check.png" alt="">
            <span>Phase2</span>
          </div>
          <div class="flex items-center gap-2">
            <img class="h-4 w-4" src="/images/check.png" alt="">
            <span>Phase3</span>
          </div>
          <div class="flex items-center gap-2">
            <img class="h-4 w-4" src="/images/check.png" alt="">
            <span>Phase4</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
