export interface ApiErrorInterface {
    message: string;
    code?: string;
    details?: Record<string, unknown>;
}

export class APIError extends Error {
    public readonly code: string;
    public readonly details: Record<string, unknown>;

    public constructor(
        message: string,
        code: string = '',
        details: Record<string, unknown> = {}
    ) {
        super(message);
        this.name = 'APIError';
        this.code = code;
        this.details = details;

        // This is necessary for proper error inheritance in TypeScript
        Object.setPrototypeOf(this, APIError.prototype);
    }

    public static fromJson(error: ApiErrorInterface): APIError {
        return new APIError(
            error.message,
            error.code ?? '',
            error.details ?? {}
        );
    }
}