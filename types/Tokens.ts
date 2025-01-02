export interface TokenInterface {
    accessToken: string;
    refreshToken: string;
}

class Token implements TokenInterface {
    public readonly accessToken: string;
    public readonly refreshToken: string;

    public constructor(accessToken: string, refreshToken: string,) {
        this.accessToken = accessToken;
        this.refreshToken = refreshToken;
    }
}