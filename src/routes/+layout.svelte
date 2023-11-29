<script lang="ts">
	import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	import { fade } from 'svelte/transition';
	import { page } from '$app/stores';

	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
</script>

<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="pageHeader">
		<!-- App Bar -->
		<AppBar>
			<svelte:fragment slot="lead">
				<a href="/">
					<!-- TODO: Get higher res logo -->
					<img src="$lib/assets/bk_logo.png" alt="the BirthKuwait Logo" />
				</a>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<nav class="list-nav">
					<ul class="flex flex-row align-bottom [&>li]:!mt-0">
						<li>
							<a href="/about">
								<span class="flex-auto">About</span>
							</a>
						</li>
						<li>
							<a href="/professionals">
								<span class="flex-auto">Professionals</span>
							</a>
						</li>
						<li>
							<a href="/families">
								<span class="flex-auto">Families</span>
							</a>
						</li>
						<li>
							<a href="/events">
								<span class="flex-auto">Upcoming Events</span>
							</a>
						</li>
						<li>
							<a href="/volunteer">
								<span class="flex-auto">Volunteer</span>
							</a>
						</li>
						<li>
							<a href="/contact">
								<span class="flex-auto">Contact Us</span>
							</a>
						</li>
					</ul>
				</nav>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- Page Route Content -->
	{#key $page}
		<div in:fade={{ duration: 400 }}>
			<slot />
		</div>
	{/key}
	<svelte:fragment slot="pageFooter">
		<div class="w-full bg-neutral-100 h-32 p-4">
			<div class="w-5/6 mx-auto">
				<div class="flex flex-row justify-between">
					<img class="w-40" src="$lib/assets/bk_logo.png" alt="the BirthKuwait Logo" />
					<img class="h-8" src="$lib/assets/design/social-icons.png" alt="Social Media Icons" />
					<div class="w-40" />
				</div>
				<hr class="border-neutral-200 divider my-2" />
				<p class="text-slate-400 text-center">© 2022 Birth Kuwait, Inc.</p>
			</div>
		</div>
	</svelte:fragment>
</AppShell>
