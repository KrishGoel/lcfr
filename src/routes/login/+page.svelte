<script>
	import { sha256 } from 'js-sha256';

	export let data;

	import { getContext } from 'svelte';
	const user = getContext('user');

	let make = '';
	let model = '';

	async function handleClick() {
		const insertData = JSON.stringify({
			Param1: make,
			Param2: model,
			encryptParam1: sha256(make),
			encryptParam2: sha256(model)
		});

		console.log('Data requested to be inserted:', insertData);

		const response = await insertTrigger(insertData);

		console.log('Response on that request:', response);
	}

	/** @param {object} insertData */
	async function insertTrigger(insertData) {
		try {
			const response = await fetch('api/users', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: insertData
			});

			const res = await response.json();

			return {
				status: 200,
				assignments: res
			};
		} catch (error) {
			console.error(error);

			return {
				status: 500,
				body: {
					message: 'An error occurred while loading the assignments: ' + error.message
				}
			};
		}
	}

	import { count } from '$lib/stores';
	let countValue;

	count.subscribe((value) => {
		countValue = value;
	});
</script>

<form class="text-slate-200">
	<label>
		Param1:
		<input type="text" class="text-slate-800" bind:value={make} />
	</label>
	<label>
		Param2:
		<input type="text" class="text-slate-800" bind:value={model} />
	</label>
	<button on:click={handleClick} class="inline-flex justify-center rounded-lg text-sm font-semibold py-3 px-5 bg-sky-600 text-white hover:bg-indigo-900 duration-300 cursor-pointer shadow-xl hover:shadow-none">
		Log In
		<span aria-hidden="true" class="sm:inline pl-2 font-extra bold">→</span>
	</button>
	<!-- <button on:click={handleClick}>Insert Document</button> -->
</form>

<div class="text-slate-200 py-8">
	<p>{JSON.stringify(data)}</p>
	<!-- <p>{countValue}</p> -->
	<p>Hash-256 for " ": {sha256("")}</p>
</div>
