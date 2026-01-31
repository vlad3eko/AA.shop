export interface IOrder {
    id: number
    product: string[]
    price: number | [number, number]
    img?: string[]
    name: string
    address: string
    date: string
    delivery: string
    manager?: string
    createdAt?: number
}
