<script>
	export let data;

	let make = '';
	let model = '';
	
	async function handleClick() {
		const insertData = JSON.stringify({
			make: make,
			model: model
		});

		console.log('Data requested to be inserted:', insertData);

		const response = await insertTrigger(insertData);

		console.log("Response on that request:", response);
	}

	async function insertTrigger(insertData) {
		try {
			const response = await fetch('api/assignments', {
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
</script>

<h1>LCFR</h1>
<p>{JSON.stringify(data)}</p>

<form>
	<label>
		Make:
		<input type="text" bind:value={make} />
	</label>
	<label>
		Model:
		<input type="text" bind:value={model} />
	</label>
	<button on:click={handleClick}>Insert Document</button>
</form>
