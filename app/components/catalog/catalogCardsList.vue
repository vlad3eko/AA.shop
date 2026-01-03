<template>
<div class="grid grid-cols-3 gap-6 mx-4 max-w-9/12">
  <div  v-for="card in cards" :key="card.id" class="w-full rounded-xl text-center  mr-10 card">
    <catalog-card-single :card="card"/>
  </div>
</div>
</template>

<script setup>

defineProps(['cards'])

</script>

<style scoped>

</style>
