import Token from "~/types/Tokens";
import { Customer } from "~/types/Customer";

export interface AuthResponseInterface {
    tokens: Token,
    customer: Customer
}