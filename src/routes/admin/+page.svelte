<script>
	import { page } from '$app/stores';
	export let data;

	if ($page.data.session) {
		console.log('Session Data:', $page.data.session);
	}

	let assignment_name = ''
	let assignment_details = ''

	async function pushAssignment() {
		const insertData = JSON.stringify({
			name: assignment_name,
			details: assignment_details
		})
		console.log('Data requested to be inserted:', insertData)
		const response = await insertTrigger(insertData)
		console.log('Response on that request:', response)
	}
	async function insertTrigger(insertData) {
		try {
			const response = await fetch('api/assignments', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: insertData
			})
			const res = await response.json()
			return {
				status: 200,
				assignments: res
			}
		} catch (error) {
			console.error(error)
			return {
				status: 500,
				body: {
					message: 'An error occurred while loading the assignments: ' + error.message
				}
			}
		}
	}
</script>

<div class="w-10/12 mx-auto min-h-[calc(100vh-160px)] flex">
	{#if $page.data.session && $page.data.session.isAdmin}
		<div class="mt-8 w-full">
			<h3 class="font-semibold text-slate-400 text-lg">Welcome Back</h3>
			<h2 class="font-extrabold text-slate-200 text-3xl mb-4">
				{$page.data.session.user?.name}
			</h2>
			<p class="font-semibold text-slate-200 text-base mb-8">
				[Admin Access]
				{$page.data.session.user?.email}
			</p>
			<h3 class="font-semibold text-slate-200 text-lg mb-2">Add an assignment</h3>
			<form id="assignment-form" class="mb-8">
				<input type="text" name="assignment-name" bind:value={assignment_name} id="assignment-name" class="w-1/2 mb-4 block focus:outline-none rounded-md py-2 px-3 bg-slate-700 text-slate-100 ring-1 ring-slate-300" placeholder="Assignment Name">
				<textarea name="assignment-details" id="assignment-details" bind:value={assignment_details} class="w-1/2 mb-4 min-h-[100px] focus:outline-none rounded-md py-2 px-3 bg-slate-700 text-slate-100 ring-1 ring-slate-300" placeholder="Assignment Details"></textarea>
				<input type="submit" on:click={pushAssignment} value="Post Assignment" class="block w-content justify-center rounded-lg text-sm font-semibold py-3 px-5 bg-sky-600 text-white hover:bg-indigo-700 duration-300 cursor-pointer shadow-xl hover:shadow-none sm:py-2 sm:px-3 sm:text-xs"/>
			</form>
			<p class="font-regular text-slate-200 text-base mb-8">
				Session expiry: {$page.data.session?.expires}
			</p>
		</div>
	{:else}
		<div class="mt-8">
			<h3 class="font-semibold text-slate-400 text-lg">Non Admin Access is not authorized.</h3>
		</div>
	{/if}
</div>
