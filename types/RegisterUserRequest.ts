export interface RegisterUserRequestInterface {
    email: string;
    name: string;
    address: string;
    phone: string;
    password: string;
}

interface ValidationRule {
    validate: (value: string) => boolean;
    message: string;
}

interface ValidationFields {
    email: string;
    name: string;
    address: string;
    phone: string;
    password: string;
}

export interface ValidationResult {
    valid: boolean;
    message: string;
}

export class RegisterUserRequest {
    email: string;
    name: string;
    address: string;
    phone: string;
    password: string;

    constructor(email: string, name: string, address: string, password: string, phone: string) {
        this.email = email;
        this.name = name;
        this.address = address;
        this.phone = phone;
        this.password = password;
    }

    public static constructFromJson(JsonBody: RegisterUserRequestInterface) {
        return new RegisterUserRequest(JsonBody.email, JsonBody.name, JsonBody.address, JsonBody.password, JsonBody.phone);
    }

    public validateInputs(this: ValidationFields): ValidationResult {
        const validationRules: Record<keyof ValidationFields, ValidationRule> = {
            email: {
                validate: (value: string) => Boolean(value?.trim() && value.includes('@')),
                message: 'Email is missing or invalid.'
            },
            password: {
                validate: (value: string) => Boolean(value?.trim()),
                message: 'Password is missing.'
            },
            address: {
                validate: (value: string) => Boolean(value?.trim()),
                message: 'Address is missing.'
            },
            phone: {
                validate: (value: string) => Boolean(value?.trim()),
                message: 'Phone number is missing.'
            },
            name: {
                validate: (value: string) => Boolean(value?.trim()),
                message: 'Name is missing.'
            }
        };

        const failures = Object.entries(validationRules)
            .filter(([field, rule]) => !rule.validate(this[field as keyof ValidationFields]))
            .map(([_, rule]) => rule.message);

        return {
            valid: failures.length === 0,
            message: failures.length ? failures.join('\n') : 'valid'
        };
    }
}