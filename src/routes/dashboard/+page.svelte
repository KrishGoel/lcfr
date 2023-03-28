<script>
	import { page } from '$app/stores';
</script>

<div class="w-10/12 mx-auto min-h-[calc(100vh-160px)] flex">
	<div class="my-auto">
		<h1 class="font-extrabold text-slate-200 text-5xl mb-16">Dashboard</h1>
		{#if $page.data.session}
			<p class="font-regular text-slate-200 text-base">
				Welcome Back {$page.data.session.user?.email ?? $page.data.session.user?.name}
			</p>
			<p class="font-regular text-slate-200 text-base">
				Session expiry: {$page.data.session?.expires}
			</p>

			<a
				href="/auth/signout"
				data-sveltekit-preload-data="off"
				class="inline-flex justify-center rounded-lg text-sm font-semibold py-3 px-5 bg-sky-600 text-white hover:bg-indigo-900 duration-300 cursor-pointer shadow-xl hover:shadow-none"
			>
				Logout
			</a>
		{:else}
			<h2 class="font-bold text-slate-200 text-xl mb-6">Kindly log-in to access your dashboard.</h2>
			<a
				href="/auth/signin"
				class="inline-flex justify-center rounded-lg text-sm font-semibold py-3 px-5 bg-sky-600 text-white hover:bg-indigo-900 duration-300 cursor-pointer shadow-xl hover:shadow-none"
			>
				Log In
				<span aria-hidden="true" class="sm:inline pl-2 font-extra bold">→</span>
			</a>
		{/if}
	</div>
</div>
