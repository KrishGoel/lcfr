import { json } from "@sveltejs/kit"
import { _insert } from "../../+page.server"

export async function POST({ request }) {
	const requestBody = await request.json()
	try {
		_insert(requestBody)
		console.log("_insert from +page.server.js returned the following\n", await _insert(requestBody), "\n")
		return json({ 
			status: 200,
			body: {
				request: JSON.stringify(requestBody)
			} 
		})
	} catch (error) {
		console.log(error)
		return {
			status: 500,
			body: {
				message: "Kuch toh locha hai hmmm"
			}
		}
	}
}
