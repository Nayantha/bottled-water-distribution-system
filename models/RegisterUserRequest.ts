export interface RegisterUserRequestInterface {
    email: string;
    name: string;
    username: string;
    password: string;
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

    public validateInputs() {
        let message = "";

        if (!this.email || this.email.replaceAll(" ", "").length === 0 || this.email.replaceAll(" ", "") === "") {
            message += "email is missing.\n";
        }

        if (!this.password || this.password.replaceAll(" ", "").length === 0 || this.password.replaceAll(" ", "") === "") {
            message += "password is missing.\n";
        }

        if (!this.username || this.username.replaceAll(" ", "").length === 0 || this.username.replaceAll(" ", "") === "") {
            message += "username is missing.\n";
        }

        if (!this.name || this.name.replaceAll(" ", "").length === 0 || this.name.replaceAll(" ", "") === "") {
            message += "name is missing.\n";
        }

        if (!message) {
            return {valid: true, message: 'valid'}
        } else {
            return {valid: false, message: message}
        }

    }
}