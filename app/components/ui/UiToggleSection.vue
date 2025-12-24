<template>
  <div
      v-for="section in catalogSections"
      class="relative">
          <span
              @click="section.open != section.open"
              class="text-[#c4c4c4] block text-3xl text-center uppercase border-b pb-5 mt-5 cursor-pointer">
            {{ section.name }}
          </span>
    <div
        class="absolute top-3 right-0 cursor-pointer">
      <span
          v-if="!section.open"
          class="material-symbols-outlined theme-text">visibility_off</span>
      <span
          v-else
          class="material-symbols-outlined theme-text">visibility</span>

    </div>

    <div v-if="section.open">
      <div v-for="infoCard in props.card.info" class="mb-5">
        <p
            class="text-3xl font-bold text-center mb-5 theme-titles rounded-2xl uppercase">
          {{ infoCard.title }} </p>
        <div v-for="infoCardData in infoCard.data" class="mb-2">
          <p
              class="inline font-bold">
            {{ infoCardData.title }}
          </p>
          <span>
              {{ infoCardData.description }}
            </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

import {catalogSections} from "~~/server/utils/data.catalog.sections";

const props = defineProps<{
  card: ICard
}>()

</script>

<style scoped>

</style>
