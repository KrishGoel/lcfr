import type { LayoutServerLoad } from './$types'

import { ADMINS } from '$env/static/private'
const admins = ADMINS.split(",")

export const load: LayoutServerLoad = async (event) => {
	let currentSession = await event.locals.getSession()
	if (currentSession?.user?.email) {
		if (admins.includes(currentSession.user.email)) {
			currentSession.isAdmin = true
		} else {
			currentSession.isAdmin = false
		}
	}

	return {
		session: currentSession
	}
}
