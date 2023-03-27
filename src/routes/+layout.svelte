<script>
	import '../app.css';
	export let isLoggedIn = false;
</script>

<main class="min-h-screen bg-slate-900">
	<nav
		class="flex justify-between w-10/12 mx-auto relative top-10 items-center bg-slate-800 rounded-lg shadow-lg py-4 px-6"
	>
		<div class="flex items-center">
			<a href="#" class="block">
				<img src="/images/topnav-logo.png" alt="Logo" class="h-8" />
			</a>
		</div>
		<div class="flex items-center space-x-6">
			<ul class="ml-4 flex space-x-4">
				<li>
					<a
						href="https://vkydlabs.com" target="_blank"
						class="text-sm font-semibold text-white hover:text-slate-300 duration-300 ml-6"
					>
						About Us
					</a>
				</li>
			</ul>
			<!-- <a
				href={isLoggedIn ? '/logout' : '/login'}
				class="inline-flex justify-center rounded-lg text-sm font-semibold py-3 px-5 bg-sky-600 text-white hover:bg-indigo-900 duration-300 cursor-pointer shadow-xl hover:shadow-none"
			>
				{isLoggedIn ? 'Log Out' : 'Log In'}
				<span aria-hidden="true" class="sm:inline pl-2 font-extra bold">→</span>
			</a> -->
		</div>
	</nav>

	<div class="w-10/12 mx-auto">
		<slot />
	</div>
</main>
