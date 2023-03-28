<script>
	import '../app.css';

	import { page } from '$app/stores';
</script>

<main class="min-h-screen py-[80px] bg-slate-900">
	<div class="w-10/12 mx-auto">
		{#if $page.data.session}
			<p class="text-slate-200 text-base mb-10">
				Signed in as {$page.data.session.user?.email ?? $page.data.session.user?.name}.
			</p>
			<!-- <a href="/auth/signout" class="button" data-sveltekit-preload-data="off">Sign out</a> -->
		{:else}
		<p class="text-slate-200 text-base mb-10">
			Not signed in
		</p>
			<a href="/auth/signin" data-sveltekit-preload-data="off">Sign in</a>
		{/if}
	</div>

	<slot />

</main>