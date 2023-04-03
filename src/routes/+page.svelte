<script>
	import { page } from '$app/stores'
	export let data

	if ($page.data.session) {
		console.log('Session Data:', $page.data.session)
	}

	// let make = ''
	// let model = ''

	// async function handleClick() {
	// 	const insertData = JSON.stringify({
	// 		make: make,
	// 		model: model
	// 	})
	// 	console.log('Data requested to be inserted:', insertData)
	// 	const response = await insertTrigger(insertData)
	// 	console.log('Response on that request:', response)
	// }
	// async function insertTrigger(insertData) {
	// 	try {
	// 		const response = await fetch('api/assignments', {
	// 			method: 'POST',
	// 			headers: {
	// 				'Content-Type': 'application/json'
	// 			},
	// 			body: insertData
	// 		})
	// 		const res = await response.json()
	// 		return {
	// 			status: 200,
	// 			assignments: res
	// 		}
	// 	} catch (error) {
	// 		console.error(error)
	// 		return {
	// 			status: 500,
	// 			body: {
	// 				message: 'An error occurred while loading the assignments: ' + error.message
	// 			}
	// 		}
	// 	}
	// }
</script>

<div class="w-10/12 mx-auto min-h-[calc(100vh-160px)] flex">
	{#if $page.data.session}
		<div class="mt-8">
			<h3 class="font-semibold text-slate-400 text-lg">Welcome Back</h3>
			<h2 class="font-extrabold text-slate-200 text-3xl mb-4">
				{$page.data.session.user?.name}
			</h2>
			<p class="font-semibold text-slate-200 text-base mb-12">
				{#if $page.data.session.isAdmin}[Admin Access]{:else}[Non-Admin Access]{/if} {$page.data.session.user?.email}
			</p>
			<p class="font-regular text-slate-200 text-base mb-8">
				Session expiry: {$page.data.session?.expires}
			</p>
			<p class="font-regular text-slate-200 text-base mb-8 break-all">
				Data: {JSON.stringify(data)}
			</p>
		</div>
	{:else}
		<div class="grid grid-cols-2 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-1 gap-8">
			<div class="m-auto">
				<h1 class="font-extrabold text-slate-200 text-5xl mb-4">LCFR</h1>
				<h2 class="font-bold text-slate-200 text-2xl mb-4">
					The Internal Management Tool for our 3D-Creation Partners at VKYD Labs.
				</h2>
				<p class="text-slate-200 text-base mb-10">
					We are pioneering brand on-boarding and creation of digital assets for the new generation
					of businesses. Welcome to <span class="font-bold">VKYD Labs</span>, we call this
					<span class="italic">Phygital Commerce</span>.
				</p>

				<a
					href="/auth/{$page.data.session ? 'signout' : 'signin'}"
					class="inline-flex justify-center rounded-lg text-sm font-semibold py-3 px-5 bg-sky-600 text-white hover:bg-indigo-700 duration-300 cursor-pointer shadow-xl hover:shadow-none sm:py-2 sm:px-3 sm:text-xs"
				>
					{$page.data.session ? 'Log Out' : 'Log In'}
					<span aria-hidden="true" class="sm:inline pl-2 font-extra bold">→</span>
				</a>
				<a
					href="/admin"
					class="text-sm font-semibold text-white hover:text-slate-300 duration-300 ml-6"
				>
					Admin Access
					<span aria-hidden="true" class="sm:inline pl-2 font-extra bold">→</span>
				</a>
			</div>
			<div class="m-auto">
				<img
					class="rounded-md bg-white/5 ring-1 ring-white/10"
					src="images/dashboard-screenshot.png"
					alt="App screenshot"
				/>
			</div>
		</div>
	{/if}
</div>
