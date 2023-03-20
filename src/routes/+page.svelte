<script>
	export let data

	import { getContext } from "svelte"
	const user = getContext("user")

	let make = ""
	let model = ""

	async function handleClick() {
		const insertData = JSON.stringify({
			make: make,
			model: model
		})

		console.log("Data requested to be inserted:", insertData)

		const response = await insertTrigger(insertData)

		console.log("Response on that request:", response)
	}

	/** @param {object} insertData */
	async function insertTrigger(insertData) {
		try {
			const response = await fetch("api/assignments", {
				method: "POST",
				headers: {
					"Content-Type": "application/json"
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
					message: "An error occurred while loading the assignments: " + error.message
				}
			}
		}
	}
</script>

<!-- <form>
	<label>
		Make:
		<input type="text" bind:value={make} />
	</label>
	<label>
		Model:
		<input type="text" bind:value={model} />
	</label>
	<button on:click={handleClick}>Insert Document</button>
</form> -->

<!-- Login -->

<div class="flex justify-center items-center h-screen bg-gray-100">
	<form class="bg-white p-6 rounded-lg shadow-md">
		<h1 class="text-4xl font-bold mb-6">LCFR</h1>
		<h2 class="text-2xl font-semibold mb-6">Log in</h2>
		<div class="mb-4">
			<label class="block font-semibold mb-2" for="email">Email</label>
			<input class="border-gray-300 border-solid border-2 p-2 w-full rounded-lg" type="text" bind:value={model}/>
		</div>
		<div class="mb-6">
			<label class="block font-semibold mb-2" for="password">Password</label>
			<input class="border-gray-300 border-solid border-2 p-2 w-full rounded-lg" type="password" bind:value={make}/>
		</div>
		<div class="flex justify-end">
			<button class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg" on:click={handleClick}>Log in</button>
		</div>
	</form>
</div>

<div class="flex justify-center items-center bg-gray-100">
	<p>{JSON.stringify(data)}</p>
</div>