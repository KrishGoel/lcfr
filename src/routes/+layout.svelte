<script>
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';
	/** @type {import('./$types').LayoutData} */
	// export let data;
    let data = { name: 'Alice', age: 30 }

    
	// Create the user store and set its initial value
	const user = writable(data.user)
    user.set(data)
    
    console.log("User Test:", user)
	// Set the user store as a context variable
	setContext('user', user);

	// Update the user store with new details
	function updateUserDetails(newDetails) {
		user.set(newDetails);
	}
    // updateUserDetails({ name: 'Alice', age: 30 })
</script>

<!-- <button on:click={() => updateUserDetails({ name: 'Alice', age: 30 })}>Set User Details</button> -->

<main>
	<slot />
</main>
