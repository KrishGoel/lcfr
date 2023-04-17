import db from '$lib/server/db'

export async function load() {
	try {
		const users = await db.collection(`users`).find().toArray()
		const assignments = await db.collection(`assignments`).find().toArray()

		return {
			status: 200,
			users: JSON.parse(JSON.stringify(users)),
			assignments: JSON.parse(JSON.stringify(assignments))
		}
	} catch (error) {
		console.log(error)
		return {
			status: 500,
			body: {
				message: 'An error occurred while loading the data from MongoDB: ' + error
			}
		}
	}
}