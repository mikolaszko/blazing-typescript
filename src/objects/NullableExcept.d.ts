// Description:
// simple utility type to make all properties of an object nullable
// except for the ones specified in the generic type K

export declare type NullableExcept<T, K extends keyof T> = {
	[P in keyof T]: P extends K ? T[P] : T[P] | null
}

type test = {
	name: string
	age: number
	address: string
}
