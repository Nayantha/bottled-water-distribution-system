import Token from "~/types/Tokens";
import { Customer } from "~/types/Customer";

export interface AuthResponseInterface {
    tokens: Token,
    customer: Customer
}

export default class AuthResponse implements AuthResponseInterface {
    public customer: Customer;
    public tokens: Token;

    public constructor(customer: Customer, tokens: Token) {
        this.customer = customer;
        this.tokens = tokens;
    }

}