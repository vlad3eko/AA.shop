<template>
  <div class="text-accent-foreground p-5">
   <kanban-card-item/>
  </div>
</template>

<script lang="ts" setup>
import KanbanCardItem from "~/components/kanban/kanbanCardItem.vue";

definePageMeta({
  layout: 'kanban',
})
</script>

<style scoped>

</style>
