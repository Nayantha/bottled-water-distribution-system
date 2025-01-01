export interface UserInterface {
    name: string;
    username: string;
    email: string;
    id: string;
}

export class User {
    public readonly name: string;
    public readonly username: string;
    public readonly email: string;
    public readonly id: string;

    public constructor(name: string, username: string, email: string, id: string) {
        this.name = name;
        this.username = username;
        this.email = email;
        this.id = id;
    }
}