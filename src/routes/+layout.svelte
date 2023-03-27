<script>
	import '../app.css';
	export let isLoggedIn = false;
</script>

<main class="min-h-screen bg-slate-900">
	<div class="w-10/12 mx-auto py-[40px]">
		<slot />
	</div>
</main>
