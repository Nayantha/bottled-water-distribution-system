export interface TokenInterface {
    accessToken: string;
    refreshToken: string;
}

export default class Token implements TokenInterface {
    public readonly accessToken: string;
    public readonly refreshToken: string;

    public constructor(accessToken: string, refreshToken: string,) {
        this.accessToken = accessToken;
        this.refreshToken = refreshToken;
    }

    public static constructFromJson(JsonObj: TokenInterface): Token {
        return new Token(JsonObj.accessToken, JsonObj.refreshToken);
    }
}