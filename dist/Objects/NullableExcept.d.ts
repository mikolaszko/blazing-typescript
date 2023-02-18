export type NullableExcept<T, K extends keyof T> = {
    [P in keyof T]: P extends K ? T[P] : T[P] | null;
};
