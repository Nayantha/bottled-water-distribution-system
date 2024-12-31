export interface RegisterUserRequestInterface {
    email: string;
    name: string;
    username: string;
    password: string;
}

export interface ValidationResult {
    valid: boolean;
    message: string;
}

export class RegisterUserRequest {
    email: string;
    name: string;
    username: string;
    password: string;

    constructor(email: string, name: string, username: string, password: string) {
        this.email = email;
        this.name = name;
        this.username = username;
        this.password = password;
    }

    public static constructFromJson(JsonBody: RegisterUserRequestInterface) {
        return new RegisterUserRequest(JsonBody.email, JsonBody.name, JsonBody.username, JsonBody.password);
    }

    public validateInputs(): ValidationResult {

        const requiredFields = {
            email: this.email,
            password: this.password,
            username: this.username,
            name: this.name
        };

        const missingFields = Object.entries(requiredFields)
            .filter(([_, value]) => !value?.trim())
            .map(([field]) => `${field} is missing.`);

        if (missingFields.length === 0) {
            return {valid: true, message: 'valid'};
        }

        return {
            valid: false,
            message: missingFields.join('\n')
        };

    }
}