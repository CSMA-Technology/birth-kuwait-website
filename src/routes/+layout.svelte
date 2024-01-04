<script lang="ts">
	import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	import { page } from '$app/stores';
	import { onNavigate } from '$app/navigation';
	$: activePage = $page.route.id;
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

	// This creates a cross-fade between pages. As of this writing it is only supported in Chrome, other browsers will simply have no page transition.
	// https://developer.mozilla.org/en-US/docs/Web/API/View_Transitions_API#browser_compatibility
	onNavigate((navigation) => {
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});

	let isMenuOpen = false;
	const toggleMenu = () => {
		isMenuOpen = !isMenuOpen;
	};
</script>

<!-- App Shell -->
<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<AppShell>
	<svelte:fragment slot="pageHeader">
		<!-- App Bar -->
		<div class="relative">
			<AppBar>
				<svelte:fragment slot="lead">
					<a href="/">
						<!-- TODO: Get higher res logo -->
						<img class="h-14" src="$lib/assets/bk_logo.jpeg" alt="the BirthKuwait Logo" />
					</a>
				</svelte:fragment>
				<svelte:fragment slot="trail">
					<nav class="list-nav" aria-label="Main navigation">
						<ul
							class={`flex flex-row align-bottom [&>li]:!mt-0 z-50 transition-all duration-500 ease-in-out
							max-md:flex-col max-md:absolute left-0 max-md:mt-14 max-md:w-full max-md:bg-white
							${isMenuOpen ? 'visible opacity-100' : 'invisible opacity-0'} md:!visible md:!opacity-100`}
							on:click={toggleMenu}
							on:keypress={toggleMenu}
						>
							{#each [{ name: 'About', href: '/about' }, { name: 'Professionals', href: '/professionals' }, { name: 'Family Services', href: '/families' }, { name: 'Events', href: '/events' }, { name: 'Contact Us', href: '/contact' }] as { name, href }}
								<li>
									<a {href}>
										<span class:active={activePage === href} class="flex-auto">{name}</span>
									</a>
								</li>
							{/each}
						</ul>
						<button
							on:click={toggleMenu}
							class="z-20 !bg-transparent relative md:!hidden"
							aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
							aria-expanded={isMenuOpen}
						>
							{#if !isMenuOpen}
								<img src="$lib/assets/design/icons/hamburger-menu.png" alt="" />
							{:else}
								<img src="$lib/assets/design/icons/close.png" alt="" />
							{/if}
						</button>
					</nav>
				</svelte:fragment>
			</AppBar>
		</div>
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot />
	<svelte:fragment slot="pageFooter">
		<div class="w-full bg-neutral-100 h-32 p-4">
			<div class="w-5/6 mx-auto">
				<div class="flex flex-row justify-between items-center">
					<div class="w-40" />
					<div class="flex flex-row gap-1 h-10">
						<img class="p-1" src="$lib/assets/design/icons/instagram-bk.png" alt="Instagram Logo" />
						<img class="p-1" src="$lib/assets/design/icons/facebook-bk.png" alt="Facebook Logo" />
						<img class="p-1" src="$lib/assets/design/icons/youtube-bk.png" alt="Youtube Logo" />
					</div>
					<img class="w-40 max-md:invisible" src="$lib/assets/bk_logo.jpeg" alt="the BirthKuwait Logo" />
				</div>
				<hr class="border-neutral-200 divider my-2" />
				<p class="text-slate-400 text-center">© 2024 Birth Kuwait, Inc.</p>
			</div>
		</div>
	</svelte:fragment>
</AppShell>

<style>
	.active {
		position: relative;
	}

	.active::after {
		content: '';
		position: absolute;
		left: 0;
		bottom: -6px;
		width: 100%;
		height: 7px;
		background: url('$lib/assets/design/purple_underline.png') no-repeat;
		background-size: 100% 100%;
		max-width: 7rem;
	}
</style>
