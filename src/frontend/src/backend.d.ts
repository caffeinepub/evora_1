import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface ContactForm {
    name: string;
    email: string;
    message: string;
}
export interface Order {
    customerName: string;
    status: string;
    email: string;
    address: string;
    quantity: bigint;
    phone: string;
}
export interface backendInterface {
    getAllContacts(): Promise<Array<ContactForm>>;
    getAllOrders(): Promise<Array<Order>>;
    placeOrder(customerName: string, email: string, phone: string, address: string, quantity: bigint): Promise<void>;
    submitContactForm(name: string, email: string, message: string): Promise<void>;
    updateOrderStatus(email: string, newStatus: string): Promise<void>;
}
