// Description:
// simple utility type to make all properties of an object nullable
// that uses the keyof operator to get all the keys of the object
// and then uses the in operator to iterate over all the keys

export declare type Nullable<T> = { [K in keyof T]: T[K] | null }
