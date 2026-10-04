<script lang="ts" setup></script>

<template>
  <section
    id="page3"
    class="bg-black py md:py-20 max-w-7xl p-4 md:p-10 mx-auto"
  >
    <div id="top" class="md:flex-row gap-10 flex flex-col justify-between">
      <div id="page3Right" class="flex-1">
        <div class="xl:w-2/3 w-full">
          <button
            class="font-bold text-sm px-5 py-2 bg-white text-black shadow-sm rounded-full"
          >
            Best Cookies
          </button>
          <h1 class="font-bold text-3xl mt-3">
            Where every detail matters-from muddle to garnish
          </h1>
        </div>
      </div>
      <div id="page3Left" class="xl:justify-end flex flex-1">
        <div class="xl:w-2/3 w-full">
          <p class="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            corrupti enim voluptatem maiores optio earum aperiam iure cumque,
            officiis, eum aliquid quos dolorem. Quisquam nostrum, temporibus
            vitae nesciunt magnam cupiditate neque veniam architecto saepe
            assumenda. Sint itaque, eius ullam inventore fuga, debitis
            voluptatum at animi distinctio, molestiae beatae. Saepe, eos?
          </p>
          <div
            class="gap-2 md:gap-3 xl:gap-5 flex items-center justify-between"
          >
            <div class="mt-6">
              <h4 class="text-sm font-medium">XXXXX</h4>
              <h4 class="text-bold">4.5/5</h4>
              <p class="text-sm">Lorem ipsum dolor sit amet.</p>
            </div>
            <span class="h-14 border-gray-600 border" />
            <div class="bg-slate-100/50 p-3 flex items-center rounded-full">
              <img
                class="h-7 w-7 rounded-full object-cover object-center"
                src="/images/profile1.png"
                alt=""
              />
              <img
                class="h-7 w-7 rounded-full object-cover object-center"
                src="/images/profile2.png"
                alt=""
              />
              <img
                class="h-7 w-7 rounded-full object-cover object-center"
                src="/images/profile3.png"
                alt=""
              />
              <img
                class="h-7 w-7 rounded-full object-cover object-center"
                src="/images/profile4.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="mid" class="md:grid-cols-2 xl:grid-cols-4 mt-14 gap-5 grid">
      <div class="">
        <img
          class="rounded-xl h-60 w-full object-cover object-top"
          src="/images/abt1.png"
          alt=""
        />
      </div>
      <div class="bg-white/10 p-3 rounded-xl">
        <h3 class="text-2xl font-bold">Crafted to impress</h3>
        <div class="bg-slate-300 my-3 h-px w-full" />
        <div class="gap-2 flex flex-col">
          <div class="gap-2 flex items-center">
            <img class="h-4 w-4" src="/images/check.png" alt="" />
            <span>Phase1</span>
          </div>
          <div class="gap-2 flex items-center">
            <img class="h-4 w-4" src="/images/check.png" alt="" />
            <span>Phase2</span>
          </div>
          <div class="gap-2 flex items-center">
            <img class="h-4 w-4" src="/images/check.png" alt="" />
            <span>Phase3</span>
          </div>
          <div class="gap-2 flex items-center">
            <img class="h-4 w-4" src="/images/check.png" alt="" />
            <span>Phase4</span>
          </div>
        </div>
      </div>
      <!-- right photo -->
      <div class="xl:col-span-2">
        <img
          class="rounded-xl h-60 w-full object-cover object-center"
          src="/images/abt2.png"
          alt=""
        />
      </div>
    </div>
    <div
      id="bottom"
      class="md:grid-cols-2 xl:grid-cols-3 gap-5 mt-5 grid w-full"
    >
      <div class="xl:col-span-2 h-60">
        <img
          class="rounded-xl h-full w-full object-cover object-center"
          src="/images/abt3.png"
          alt=""
        />
      </div>
      <div class="h-60">
        <img
          class="rounded-xl h-full w-full object-cover object-center"
          src="/images/abt4.png"
          alt=""
        />
      </div>
    </div>
  </section>
</template>

<style lang="postcss" scoped></style>
