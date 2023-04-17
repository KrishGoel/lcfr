<script>
	import { page } from '$app/stores';
	export let data;

	if ($page.data.session) {
		console.log('Session Data:', $page.data.session);
	}
</script>

<div class="w-10/12 mx-auto min-h-[calc(100vh-160px)] flex">
	{#if $page.data.session && $page.data.session.isAdmin}
		<div class="mt-8">
			<h3 class="font-semibold text-slate-400 text-lg">Welcome Back</h3>
			<h2 class="font-extrabold text-slate-200 text-3xl mb-4">
				{$page.data.session.user?.name}
			</h2>
			<p class="font-semibold text-slate-200 text-base mb-12">
				{#if $page.data.session.isAdmin}[Admin Access]{:else}[Non-Admin Access]{/if}
				{$page.data.session.user?.email}
			</p>
			<p class="font-regular text-slate-200 text-base mb-8">
				Session expiry: {$page.data.session?.expires}
			</p>
			<p class="font-regular text-slate-200 text-base mb-8 break-all">
				Data: {JSON.stringify(data)}
			</p>
		</div>
	{:else}
		<div class="mt-8">
			<h3 class="font-semibold text-slate-400 text-lg">Non Admin Access is not authorized.</h3>
			<!-- <h2 class="font-extrabold text-slate-200 text-3xl mb-4">
				{$page.data.session.user?.name}
			</h2>
			<p class="font-semibold text-slate-200 text-base mb-12">
				{#if $page.data.session.isAdmin}[Admin Access]{:else}[Non-Admin Access]{/if}
				{$page.data.session.user?.email}
			</p>
			<p class="font-regular text-slate-200 text-base mb-8">
				Session expiry: {$page.data.session?.expires}
			</p>
			<p class="font-regular text-slate-200 text-base mb-8 break-all">
				Data: {JSON.stringify(data)}
			</p> -->
		</div>
	{/if}
</div>
