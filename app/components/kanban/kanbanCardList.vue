<template>
  <div class="bg-background border rounded-2xl border-border p-5 w-full">
    <div class="grid grid-cols-17 text-center bg-panel rounded-2xl mb-5 ">
      <div
          v-for="col in titlesOrders"
          :key="col.key"
          :class="`${col.col} border-r border-border flex items-center justify-center gap-1 p-2`"
      >
        {{ col.label }}
        <SortIcon/>
      </div>
    </div>
    <div
        v-if="!ordersList.isEmpty"
        class="border-border border p-3">
      список заказов пуст...
    </div>
    <div v-else class="rounded-b-2xl">
      <div v-for="(order, orderIndex) in ordersList.orders" :key="orderIndex"
           draggable="true"
           class="border-border border mb-2 grid grid-cols-17 truncate-wrapper hover:bg-panel cursor-pointer drag">
        <kanban-card-item :order="order"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {useOrdersStore} from "~/store/orders.store";
import {titlesOrders} from "~~/server/utils/data.orders.card";
import SortIcon from "~/components/kanban/SortIcon.vue";

const ordersList = useOrdersStore()
</script>

<style scoped>
.drag {
  cursor: grab;
  &:active {
    cursor: grabbing
  }
}
</style>
