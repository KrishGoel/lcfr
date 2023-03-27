import { writable } from 'svelte/store'

export const count = writable(0)

export function login(username, password) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			// if username in database and password matches
			// if (username === 'john' && password === '123') {
			// 	resolve({ name: 'John' })
			// } else {
			// 	reject(new Error('Invalid credentials'))
			// }
		}, 1000)
	})
}

// export const user = writable({})
//
// export function createUserStore() {
//   const { subscribe, set, update } = writable({})
//
//   return {
//     subscribe,
//     set,
//     update,
//     login: (user) => set(user),
//     logout: () => set({}),
//   }
// }
//
// export const user = createUserStore()
//
// import { user } from '$lib/stores'
//
// user.subscribe((user) => {
//   // do something with the user
// })
//
// user.login({ name: 'John' })
//
// user.logout()

// Write a function to create a store for a user on login
// import { writable } from 'svelte/store'
//
// export const user = writable({})
//
// export function createUserStore() {
//   const { subscribe, set, update } = writable({})
//
//   return {
//     subscribe,
//     set,
//     update,
//     login: (user) => set(user),
//     logout: () => set({}),
//   }
// }
//
// export const user = createUserStore()
//
// import { user } from '$lib/stores'
//
// user.subscribe((user) => {
//   // do something with the user
// })
//
// user.login({ name: 'John' })
//
// user.logout()

// Write a function to create a store for a user on login
// import { writable } from 'svelte/store'
//
// export const user = writable({})
//
// export function createUserStore() {
//   const { subscribe, set, update } = writable({})
//
//   return {
//     subscribe,
//     set,
//     update,
//     login: (user) => set(user),
//     logout: () => set({}),
//   }
// }
//
// export const user = createUserStore()
//
// import { user } from '$lib/stores'
//
// user.subscribe((user) => {
//   // do something with the user
// })
//
// user.login({ name: 'John' })
//
// user.logout()

// Write a function to create a store for a user on login
// import { writable } from 'svelte/store'
//
// export