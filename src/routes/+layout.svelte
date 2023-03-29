<script>
	import '../app.css';

	import { page } from '$app/stores';
</script>

<main class="min-h-screen pt-[120px] pb-[40px] bg-slate-900">
	<div class="w-10/12 mx-auto">
		<nav class="fixed top-8 w-10/12 whitespace-nowrap overflow-x-auto rounded-lg py-4 px-8 bg-slate-700 ring-1 ring-slate-500 shadow-xl flex justify-between items-center">
			<h2 class="text-xl font-bold pr-4 text-slate-100">VKYD Labs</h2>
			<div class="whitespace-nowrap overflow-x-auto">
				{#if $page.data.session}
					<a href="/auth/{$page.data.session ? 'signout' : 'signin'}" class="inline-flex justify-center rounded-lg text-sm font-semibold py-3 px-5 bg-sky-600 text-white hover:bg-indigo-700 duration-300 cursor-pointer shadow-xl hover:shadow-none sm:py-2 sm:px-3 sm:text-xs">
						{$page.data.session ? 'Log Out' : 'Log In'}
						<span aria-hidden="true" class="sm:inline pl-2 font-extra bold">→</span>
					</a>
				{/if}
			</div>
		</nav>
	</div>

	<slot />

</main>
