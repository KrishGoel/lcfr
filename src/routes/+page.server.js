import db from "$lib/db"

// import { writable, derived } from 'svelte/store'
// export const isAuthenticated = writable(false)

export async function load() {
	try {
		const assignments = await db.collection(`assignments`).find().toArray()

		return {
			status: 200,
			assignments: JSON.parse(JSON.stringify(assignments))
		}
	} catch (error) {
		console.log(error);
		return {
			status: 500,
			body: {
				message: "An error occurred while loading the assignments: " + error
			}
		}
	}
}

export async function _insert(request) {
	try {
		// const result = await db.collection("assignments").insertOne({"make": "BMW"})
		const result = await db.collection("assignments").insertOne(request)

		return {
			status: 200,
			message: "Document inserted successfully: " + JSON.stringify(result)
		}
	} catch (error) {
		return {
			status: 500,
			body: {
				message: "An error occurred while inserting the assignments: " + error
			}
		}
	}
}