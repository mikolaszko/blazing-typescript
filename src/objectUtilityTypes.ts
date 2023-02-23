// Description:
// simple utility type to make all properties of an object nullable
// that uses the keyof operator to get all the keys of the object
// and then uses the in operator to iterate over all the keys

export type Nullable<T> = { [K in keyof T]: T[K] | null }

// Description:
// simple utility type to make all properties of an object nullable
// except for the ones specified in the generic type K

export type NullableExcept<T, K extends keyof T> = {
	[P in keyof T]: P extends K ? T[P] : T[P] | null
}

// Description:
// simple utility type tha takes to objects and give unique keys

export type UniqueKeys<T, U> = Exclude<keyof T, keyof U>
