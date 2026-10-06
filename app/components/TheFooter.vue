<script lang="ts" setup></script>

<template>
  <div
    class="gap-5 relative flex min-h-screen flex-col items-center justify-center"
  >
    <h1 class="font-bold text-[6vw]">Where to Find Us</h1>
    <div>
      <h3 class="text-slate-300 font-semibold text-center uppercase">
        Visit Our Store
      </h3>
      <address class="md:text-2xl mt-2">Dhakki, Charsadda KPK Pakistan</address>
    </div>
    <div class="gap-1.5 flex flex-col items-center justify-center">
      <h2 class="text-slate-300 font-semibold text-center uppercase">
        Contact Us
      </h2>
      <span class="md:text-2xl">+923275609507</span>
      <span class="md:text-2xl">enghussainullah@gmail.com</span>
    </div>
    <div>
      <h3 class="text-slate-300 font-semibold text-center uppercase">
        open every day
      </h3>
      <span class="md:text-2xl">Mon - Sat 8:00Am to 4:30PM</span>
    </div>
    <div>
      <h3 class="text-slate-300 font-semibold text-center uppercase">
        social links
      </h3>
      <div class="md:text-2xl gap-2 flex items-center">
        <img
          class="h-7 mt-3 hover:bg-white/20 rounded-md p-0.5"
          src="/images/x.png"
          alt=""
        />
        <img
          class="h-7 mt-3 hover:bg-white/20 rounded-md p-0.5"
          src="/images/fb.png"
          alt=""
        />
        <img
          class="h-7 mt-3 hover:bg-white/20 rounded-md p-0.5"
          src="/images/insta.png"
          alt=""
        />
      </div>
    </div>

    <!-- leafs overlays -->
    <img
      class="-right-20 -top-20 h-40 md:h-60 absolute rotate-[-20deg]"
      src="/images/footer-right-leaf.png"
      alt=""
    />
    <img
      class="-left-10 -bottom-20 h-40 md:h-60 absolute"
      src="/images/footer-left-leaf.png"
      alt=""
    />
    <div class="grid place-items-center">
      <img
        class="right-0 bottom-0 h-80 md:absolute"
        src="/images/footer-drinks.png"
        alt=""
      />
    </div>
  </div>
</template>

<style lang="postcss" scoped></style>
