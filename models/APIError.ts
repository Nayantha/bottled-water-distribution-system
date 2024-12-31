export interface ApiErrorInterface {
    message: string;
    code?: string;
    details?: Record<string, unknown>;
}