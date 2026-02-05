import {defineStore} from "pinia";

export const useOrdersStore = defineStore('orders', () => {
    const orders = ref([] as IOrder[])

    const isEmpty = computed(() => {
        return orders.value.length
    })

    const totalPrice = (item: IBasketItem) => {
        const price = Array.isArray(item.card.price)
            ? item.card.price[1]
            : item.card.price

        return price * item.quantity
    }

    const concatProductsNPrice = (item: IOrder) => {
        const itemsList = ref({
            products: ref(''),
            priceProducts: ref(0)
        })

        item.items.forEach(products => {
            const list = `${products.card.product}/${products.quantity}шт `
            itemsList.value.products += list
            itemsList.value.priceProducts += totalPrice(products)
        })

        return itemsList
    }

    function calcOrderTotal(order: IOrder) {
        return order.items.reduce((sum, item) => {
            return sum + totalPrice(item)
        }, 0)
    }

    function createOrder(order: IOrder) {
        orders.value.push(order)
    }

    return {
        orders,
        isEmpty,
        calcOrderTotal,
        concatProductsNPrice,
        totalPrice,
        createOrder
    }
})
