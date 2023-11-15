<script>
	import Bubble from '$lib/components/Bubble.svelte';
	import EventsPanel from '$lib/components/EventsPanel.svelte';
	import bkLogo from '$lib/assets/bk_logo.png';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import ServiceCard from '$lib/components/ServiceCard.svelte';
	let mounted = false;
	onMount(() => {
		mounted = true;
	});
</script>

<!-- Decorations container For Large Screens -->
<div class="hidden md:block relative w-full left-0 top-0">
	{#if mounted}
		<div in:fade>
			<img src="$lib/assets/design/Doodle-1.png" class="absolute opacity-90 w-16 top-44 left-10" alt="" aria-hidden />
			<img src="$lib/assets/design/Doodle-2.png" class="absolute opacity-90 w-20 top-10 left-1/4" alt="" aria-hidden />
			<img src="$lib/assets/design/Doodle-3.png" class="absolute opacity-90 w-16 top-48 right-5" alt="" aria-hidden />
			<img src="$lib/assets/design/Doodle-4.png" class="absolute opacity-90 w-16 top-60 right-1/3" alt="" aria-hidden />
			<img src="$lib/assets/design/Doodle-4.png" class="absolute opacity-90 w-24 top-96 left-1/3" alt="" aria-hidden />
		</div>
	{/if}
	<Bubble class="bg-primary-500 w-32 h-32 left-10 top-96" flair>
		<img class="h-full" src="$lib/assets/stock/mother-1.png" alt="" />
	</Bubble>
	<Bubble class="bg-primary-500 w-32 h-32 right-1/3 top-20" flair>
		<img class="h-full" src="$lib/assets/stock/mother-2.png" alt="" />
	</Bubble>
	<Bubble class="bg-primary-500 w-24 h-24 right-1/2 top-80" flair>
		<img class="h-full" src="$lib/assets/stock/mother-3.png" alt="" />
	</Bubble>
</div>
<section
	class="px-5 pt-16 pb-16 bg-primary-400 z-0 bg-[url('$lib/assets/stock/mother-4.png')] bg-cover bg-blend-multiply"
	id="hero"
>
	<div class="flex flex-row flex-wrap justify-around items-center relative">
		<div class="h-fit mb-10">
			<p class="text-white text-4xl max-w-md text-center">
				We bring world-class maternal support to professionals and families
			</p>
			<span class="flex flex-row justify-center gap-5 pt-5">
				<a class="btn bg-bkBlue text-white" href="/find-a-professional">Find a Professional</a>
				<a class="btn bg-slate-200" href="/find-a-professional">Learn More</a>
			</span>
		</div>
		<EventsPanel
			events={[
				{
					id: '123',
					date: '12/1',
					description: 'A great event',
					title: 'Event 1',
					imageSrc: bkLogo
				},
				{
					id: '123',
					date: '12/1',
					description: 'A great event',
					title: 'Event 2',
					imageSrc: bkLogo
				},
				{
					id: '123',
					date: '12/1',
					description: 'A great event',
					title: 'Event 3',
					imageSrc: bkLogo
				}
			]}
		/>
	</div>
</section>
<section>
	<h1 class="h1 text-center my-4">What We Offer</h1>
	<div class="flex flex-row flex-wrap mx-8 gap-4">
		<ServiceCard class="w-96 p-6 grow-[1]">
			<h2 class="h3 text-primary-500 my-2">Service 1</h2>
			<div class="flex flex-row w-full justify-between">
				<p>Labore proident nisi fugiat nostrud sint mollit aliqua ipsum ad veniam cupidatat</p>
				<img class="h-28" src="$lib/assets/design/pregnant-outline.png" alt="" />
			</div>
		</ServiceCard>
		<ServiceCard class="w-96 p-6 grow-[2]">
			<h2 class="h3 text-bkBlue my-2">Service 1</h2>
			<div class="flex flex-row w-full justify-between">
				<p>Labore proident nisi fugiat nostrud sint mollit aliqua ipsum ad veniam cupidatat</p>
				<img class="h-28" src="$lib/assets/design/baby-outline-2.png" alt="" />
			</div>
		</ServiceCard>
	</div>
	<div class="flex flex-row flex-wrap mx-8 gap-4 mt-4">
		<ServiceCard class="w-96 p-6 grow-[2]">
			<h2 class="h3 text-bkGreen my-2">Service 1</h2>
			<div class="flex flex-row w-full justify-between">
				<p>Labore proident nisi fugiat nostrud sint mollit aliqua ipsum ad veniam cupidatat</p>
				<img class="h-28" src="$lib/assets/design/baby-outline-1.png" alt="" />
			</div>
		</ServiceCard>
		<ServiceCard class="w-96 p-6 grow-[1]">
			<h2 class="h3 text-bkBlue my-2">Service 1</h2>
			<div class="flex flex-row w-full justify-between">
				<p>Labore proident nisi fugiat nostrud sint mollit aliqua ipsum ad veniam cupidatat</p>
				<img class="h-28" src="$lib/assets/design/mother-outline.png" alt="" />
			</div>
		</ServiceCard>
	</div>
</section>

<style lang="postcss">
	#hero {
		/* background-image: url('$lib/assets/stock/mother-4.png');
		background-size: cover; */
	}
</style>
