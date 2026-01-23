export interface IOrderCard {
    menu: IOrderMenu[]
    sales: IOrdersList[]
}

export interface IOrderMenu {
    name: string
    address: string
    product: string
    price: number
    date: string
    delivery: string
    manager?: string
    $createdAt?: number
}

export interface IOrdersList {
    orders: IOrderMenu[]
}
