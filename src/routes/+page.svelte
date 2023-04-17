<script>
	import { page } from '$app/stores';
	export let data;

	if ($page.data.session) {
		console.log('Session Data:', $page.data.session);
	}
</script>

<div class="w-10/12 mx-auto min-h-[calc(100vh-160px)] flex">
	{#if $page.data.session}
		<div class="mt-8 w-full">
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
			<h3 class="font-semibold text-slate-200 text-lg mb-2">Available Assignments</h3>

			<div class="overflow-x-auto rounded-lg border border-slate-200 w-full">
				<table class="min-w-full divide-y-2 divide-slate-200 text-sm">
					<thead align="left">
						<tr>
							<th class="whitespace-nowrap px-4 py-4 font-medium text-slate-200 text-left">
								Assignment Name
							</th>
							<th class="whitespace-nowrap px-4 py-4 font-medium text-slate-200"> Details </th>
							<th class="whitespace-nowrap px-4 py-4 font-medium text-slate-200"> ID </th>
						</tr>
					</thead>

					<tbody class="divide-y divide-slate-200">
						{#each data.assignments as assignment}
							<tr>
								<td class="whitespace-nowrap px-4 py-2 font-medium text-slate-300">{assignment.name}</td>
								<td class="whitespace-nowrap px-4 py-2 text-slate-300">{assignment.details}</td>
								<td class="whitespace-nowrap px-4 py-2 text-slate-300">{assignment._id}</td>
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
		</div>
	{:else}
		<div class="grid grid-cols-2 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-1 gap-8">
			<div class="m-auto">
				<h1 class="font-extrabold text-slate-200 text-5xl mb-4">LCFR</h1>
				<h2 class="font-bold text-slate-200 text-2xl mb-4">
					The Internal Management Tool for our 3D-Creation Partners at VKYD Labs.
				</h2>
				<p class="text-slate-200 text-base mb-10">
					We are pioneering brand on-boarding and creation of digital assets for the new generation
					of businesses. Welcome to <span class="font-bold">VKYD Labs</span>, we call this
					<span class="italic">Phygital Commerce</span>.
				</p>

				<a
					href="/auth/{$page.data.session ? 'signout' : 'signin'}"
					class="inline-flex justify-center rounded-lg text-sm font-semibold py-3 px-5 bg-sky-600 text-white hover:bg-indigo-700 duration-300 cursor-pointer shadow-xl hover:shadow-none sm:py-2 sm:px-3 sm:text-xs"
				>
					{$page.data.session ? 'Log Out' : 'Log In'}
					<span aria-hidden="true" class="sm:inline pl-2 font-extra bold">→</span>
				</a>
				<a
					href="/auth/signin"
					class="text-sm font-semibold text-white hover:text-slate-300 duration-300 ml-6"
				>
					Admin Access
					<span aria-hidden="true" class="sm:inline pl-2 font-extra bold">→</span>
				</a>
			</div>
			<div class="m-auto">
				<img
					class="rounded-md bg-white/5 ring-1 ring-white/10"
					src="images/dashboard-screenshot.png"
					alt="App screenshot"
				/>
			</div>
		</div>
	{/if}
</div>
