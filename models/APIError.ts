export interface ApiErrorInterface {
    message: string;
    statusCode: number;
    url: string;
}

export class APIError extends Error {
    public readonly statusCode: number;
    public readonly url: string;

    public constructor(
        message: string,
        code: number,
        url: string
    ) {
        super(message);
        this.name = 'APIError';
        this.statusCode = code;
        this.url = url;

        // This is necessary for proper error inheritance in TypeScript
        Object.setPrototypeOf(this, APIError.prototype);
    }

    public static fromJson(error: ApiErrorInterface): APIError {
        return new APIError(
            error.message,
            error.statusCode,
            error.url
        );
    }
}