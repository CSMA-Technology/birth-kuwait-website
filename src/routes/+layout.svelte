<script lang="ts">
	import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
</script>

<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="pageHeader">
		<!-- App Bar -->
		<AppBar>
			<svelte:fragment slot="lead">
				<!-- TODO: Get higher res logo -->
				<img src="$lib/assets/bk_logo.png" alt="the BirthKuwait Logo" />
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
	<slot />
</AppShell>
