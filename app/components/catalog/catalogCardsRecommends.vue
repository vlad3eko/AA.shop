<template>
  <h2 class="text-2xl text-left border-b-gray-700 pb-5">Так-же выбирают</h2>
  <div class="flex items-center gap-5">
    <button @click="swiper.prev()">
      <span class="material-symbols-outlined scale-x-[-2] scale-y-[2] theme-text">arrow_forward</span>
    </button>
    <ClientOnly>
    <swiper-container ref="swiperRef" :init="false" :slides-per-view="6" class="flex overflow-hidden relative">
      <swiper-slide v-for="recommend in cards" class="mr-5 self-end">
        <NuxtLink :to="`/catalog/${recommend.id}`">
          <div class="w-[250px]">
            <NuxtImg :src="recommend.img"
                     class="max-h-[250px] mx-auto object-cover z-[999]"/>
            <span class="text-[#10C44C] font-bold text-2xl mb-2 block">
              {{ recommend.price }} ₽</span>
            <span class="block theme-titles rounded-2xl uppercase border-b">
              {{ recommend.name }}</span>
          </div>
        </NuxtLink>
      </swiper-slide>
    </swiper-container>
    </ClientOnly>

    <!-- Go forward one slide -->
    <button @click="swiper.next()">
      <span class="material-symbols-outlined scale-x-[2] scale-y-[2] theme-text">arrow_forward</span>
    </button>
  </div>
</template>

<script lang="ts" setup>

const {data: cards} = await useFetch('/api/catalog')

const swiperRef = ref(null)

const swiper = useSwiper(swiperRef, {
  effect: 'slide',
  loop: true,
  creativeEffect: {
    prev: {
      shadow: true,
    },
    next: {
      shadow: true,
    },
  },
})

onMounted(() => {
  console.log(swiper.instance)
})

</script>

<style scoped>

</style>
