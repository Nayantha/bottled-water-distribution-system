export interface CustomerInterface {
    id: string;
    name: string;
    email: string;
    address: string;
    phone: string;
}

export class Customer implements CustomerInterface {
    public readonly id: string;
    public readonly name: string;
    public readonly email: string;
    public readonly address: string;
    public readonly phone: string;

    public constructor(id: string, name: string, email: string, address: string, phone: string) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.address = address;
        this.phone = phone;
    }

    public static constructFromJson(customer: CustomerInterface) {
        return new Customer(customer.id, customer.name, customer.email, customer.address, customer.phone);
    }
}