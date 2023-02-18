export type Nullable<T> = {
    [K in keyof T]: T[K] | null;
};
export type NullableExcept<T, K extends keyof T> = {
    [P in keyof T]: P extends K ? T[P] : T[P] | null;
};
//# sourceMappingURL=objectUtilityTypes.d.ts.map