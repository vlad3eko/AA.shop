<template>
  <p class="col-span-3 p-2 border-border border-r cut-text truncate">{{ order.checkout.name }}</p>
  <p class="col-span-4 p-2 border-border border-r cut-text truncate">{{ order.checkout.address }}</p>
  <div class="col-start-8 col-span-6">
    <div class="grid grid-cols-6">
      <p class="col-span-5 p-2 border-border border-r truncate">{{ productText }}</p>
      <p class="col-span-1 p-2 border-border border-r">{{ productPrice }}</p>
    </div>
  </div>
  <p class="p-2 border-border border-r">{{ formatDateIso(order.checkout.date) }}</p>
  <p class="p-2 border-border border-r">{{ order.checkout.delivery }}</p>
  <p class="p-2 border-border border-r">{{ }}</p>
  <p class="p-2 border-border">{{ formatDateIso(order.createdAt) }}</p>
</template>

<script lang="ts" setup>

import {formatDateIso} from "~~/server/utils/hooks/formatDate";
import {useOrdersStore} from "~/store/orders.store";

const props = defineProps<{order: IOrder}>()
const ordersStore = useOrdersStore()

const productText = computed(() =>
    props.order.items
        .map(i => `${i.card.product}/${i.quantity}шт`)
        .join(', ')
)

const productPrice = computed(() =>
    ordersStore.calcOrderTotal(props.order)
)
</script>

<style scoped>

</style>
