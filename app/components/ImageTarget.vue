<script lang="ts" setup>
import { drinkList } from '~/data/drinkList'

type Drink = (typeof drinkList)[number]

// ek hi state: konsa drink abhi dikh raha hai
const currentIndex = ref(0)
const total = drinkList.length

const current = computed(() => drinkList[currentIndex.value] as Drink)
const prevDrink = computed(
  () => drinkList[(currentIndex.value - 1 + total) % total] as Drink,
)
const nextDrink = computed(
  () => drinkList[(currentIndex.value + 1) % total] as Drink,
)

function goTo(index: number) {
  currentIndex.value = index
}

function next() {
  currentIndex.value = (currentIndex.value + 1) % total
}

function prev() {
  currentIndex.value = (currentIndex.value - 1 + total) % total
}
</script>

<template>
  <div class="relative">
    <section
      id="verticle-scrolling"
      class="max-w-7xl p-2 py-10 sm:p-4 md:p-6 md:min-h-screen relative mx-auto flex flex-col items-center justify-between"
    >
      <!-- tabs: active wohi jo currentIndex hai, is liye hamesha sirf ek active -->
      <div
        class="gap-4 md:flex-row md:items-start md:justify-center relative z-10 flex flex-col justify-start"
      >
        <button
          v-for="(item, index) in drinkList"
          :key="item.id"
          type="button"
          class="md:text-2xl font-bold border-b transition-colors"
          :class="
            index === currentIndex
              ? 'border-white text-white'
              : 'border-white/50 text-white/50'
          "
          :aria-pressed="index === currentIndex"
          @click="goTo(index)"
        >
          {{ item.title }}
        </button>
      </div>

      <!-- image: section ke center mein -->
      <div
        class="inset-0 md:absolute pointer-events-none z-0 flex items-center justify-center"
      >
        <Transition name="fade-up" mode="out-in">
          <img
            :key="current.id"
            class="md:h-[80vh] h-[60vh] w-auto object-contain"
            :src="current.image"
            :alt="current.title"
          />
        </Transition>
      </div>

      <!-- arrows: prev aur next, label unke drink ka title -->
      <div
        class="inset-x-0 px-2 pointer-events-none absolute top-1/2 z-20 flex -translate-y-1/2 items-center justify-between"
      >
        <button
          type="button"
          class="gap-2 pointer-events-auto flex flex-col items-start"
          @click="prev"
        >
          <span class="max-w-32 text-xl font-bold">{{ prevDrink.title }}</span>
          <img class="h-10" src="/images/right-arrow.png" alt="Previous" />
        </button>

        <button
          type="button"
          class="gap-2 pointer-events-auto flex flex-col items-end"
          @click="next"
        >
          <span class="max-w-32 text-xl font-bold text-end">{{
            nextDrink.title
          }}</span>
          <img class="h-10" src="/images/left-arrow.png" alt="Next" />
        </button>
      </div>

      <!-- info: neeche -->
      <div class="relative z-10 flex w-full items-center justify-between">
        <Transition name="fade-up" mode="out-in">
          <div
            :key="current.id"
            class="md:flex-row flex w-full flex-col items-center justify-between"
          >
            <div class="md:pl-16 w-full flex-1">
              <p class="text-sm font-medium text-slate-300">Recipes for:</p>
              <h3 class="md:w-40 text-4xl font-bold text-slate-100 w-full">
                {{ current.name }}
              </h3>
            </div>
            <div class="mb-20 mt-6 grid flex-1 place-items-end">
              <div class="md:pl-20 md:w-[80%]">
                <h3 class="text-4xl font-bold">
                  {{ current.title }}
                </h3>
                <p class="mt-5">
                  {{ current.description }}
                </p>
              </div>
            </div>
          </div>
        </Transition>
      </div>
    </section>
  </div>
</template>

<style lang="postcss" scoped>
.fade-up-enter-active,
.fade-up-leave-active {
  transition:
    opacity 0.35s ease,
    transform 0.35s ease;
}

.fade-up-enter-from {
  opacity: 0;
  transform: translateY(24px);
}

.fade-up-leave-to {
  opacity: 0;
  transform: translateY(-24px);
}
</style>
