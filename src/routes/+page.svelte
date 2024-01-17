<script lang="ts">
	import Bubble from '$lib/components/Bubble.svelte';
	import EventsPanel from '$lib/components/EventsPanel.svelte';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import ServiceCard from '$lib/components/ServiceCard.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	const { featuredEventData } = data;
	let mounted = false;
	onMount(() => {
		mounted = true;
	});
</script>

<section
	class="px-5 pt-16 pb-16 md:bg-[url('$lib/assets/home/full-shot-islamic-family-couch-cropped.jpg')] bg-cover
				max-md:bg-[url('$lib/assets/design/home-background-mobile.png')]"
	id="hero"
>
	<!-- Decorations container For Large Screens -->
	<div class="max-md:hidden relative w-full left-0 top-0">
		{#if mounted}
			<div in:fade>
				<img src="$lib/assets/design/Doodle-1.png" class="absolute opacity-90 w-16 top-44 left-10" alt="" aria-hidden />
				<img
					src="$lib/assets/design/Doodle-2.png"
					class="absolute opacity-90 w-20 top-10 left-1/4"
					alt=""
					aria-hidden
				/>
				<img src="$lib/assets/design/Doodle-3.png" class="absolute opacity-90 w-16 top-48 right-5" alt="" aria-hidden />
				<img
					src="$lib/assets/design/Doodle-4.png"
					class="absolute opacity-90 w-16 top-60 right-1/3"
					alt=""
					aria-hidden
				/>
				<img
					src="$lib/assets/design/Doodle-4.png"
					class="absolute opacity-90 w-24 top-96 left-1/3"
					alt=""
					aria-hidden
				/>
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
	<div class="flex flex-col">
		<div class="flex flex-row flex-wrap justify-between md:px-24 items-center relative min-h-[20rem]">
			<div class="h-fit mb-10">
				<p class="text-white text-4xl max-w-md text-center">
					We bring world-class maternal support to professionals and families
				</p>
				<span class="flex flex-row justify-center gap-5 pt-5">
					<a class="btn bg-bkBlue text-white" href="/find-a-professional">Find a Professional</a>
					<a class="btn bg-slate-200" href="/find-a-professional">Learn More</a>
				</span>
			</div>
			<div class="flex flex-col items-center max-w-[24rem]">
				<EventsPanel events={featuredEventData} />
				<a class="btn bg-secondary-200 mt-4" href="/events">See all events</a>
			</div>
		</div>
		<div class="flex justify-end">
			<p class="relative text-sm text-gray-700">
				Image by <a href="https://www.freepik.com/free-photo/full-shot-islamic-family-couch_33808592.htm#query=family&position=10&from_view=search&track=sph&uuid=6b8bbc07-af51-4d1e-ad6d-683c81c07176" target="_blank" rel="noopener noreferrer">Freepik</a>
			</p>
		</div>
	</div>
</section>
<section>
	<h1 class="h1 text-center mt-6 mb-4">What We Offer</h1>
	<div class="flex flex-row flex-wrap mx-8 gap-4">
		<ServiceCard class="w-96 p-6 grow-[1]">
			<h2 class="h3 text-primary-500 my-2 font-bold">One-on-One Consultation</h2>
			<div class="flex flex-row w-full justify-between">
				<p>Labore proident nisi fugiat nostrud sint mollit aliqua ipsum ad veniam cupidatat</p>
				<img class="w-16 h-fit" src="$lib/assets/design/pregnant-outline.png" alt="" />
			</div>
		</ServiceCard>
		<ServiceCard class="w-96 p-6 grow-[2]">
			<h2 class="h3 text-bkBlue my-2 font-bold">Group Classes</h2>
			<div class="flex flex-row w-full justify-between">
				<p>Labore proident nisi fugiat nostrud sint mollit aliqua ipsum ad veniam cupidata</p>
				<img class="w-24 h-fit relative -bottom-10" src="$lib/assets/design/baby-outline-2.png" alt="" />
			</div>
		</ServiceCard>
	</div>
	<div class="flex flex-row flex-wrap mx-8 gap-4 mt-4">
		<ServiceCard class="w-96 p-6 grow-[2]">
			<h2 class="h3 text-bkGreen my-2 font-bold">Virtual Care</h2>
			<div class="flex flex-row w-full justify-between">
				<p>Labore proident nisi fugiat nostrud sint mollit aliqua ipsum ad veniam cupidatat</p>
				<img class="w-16 h-fit" src="$lib/assets/design/baby-outline-1.png" alt="" />
			</div>
		</ServiceCard>
		<ServiceCard class="w-96 p-6 grow-[1]">
			<h2 class="h3 text-bkPink my-2 font-bold">Find a Doula</h2>
			<div class="flex flex-row w-full justify-between">
				<p>Labore proident nisi fugiat nostrud sint mollit aliqua ipsum ad veniam cupidatat</p>
				<img class="w-16 h-fit relative -bottom-10" src="$lib/assets/design/mother-outline.png" alt="" />
			</div>
		</ServiceCard>
	</div>
</section>
<section class="mt-8 bg-slate-200 bg-[url('$lib/assets/stock/baby-sleeping.png')] bg-cover bg-blend-multiply">
	<div class="flex flex-row mx-8 gap-4">
		<div class="p-8 w-full md:w-1/2">
			<h1 class="h1 mt-4 mb-0">About Us</h1>
			<img class="w-44 mt-0" src="$lib/assets/design/purple_underline-2.png" alt="" />
			<p class="mt-4">
				We are dedicated to enhancing infant and maternal health in Kuwait and the Arabic-speaking world through
				evidence-based education and advocacy. For over a decade, we've offered advanced training for professionals and
				vital support for families. We've cultivated a community of skilled and dedicated professionals serving families
				and shaping future generations.
			</p>
		</div>
		<div class="w-1/2 my-10 max-md:hidden">
			<div class="inline-block -mr-6 z-10 relative">
				<div class="flex flex-col items-center py-4 px-2 w-[180px] bg-primary-100/90 rounded-lg shadow-md">
					<p class="h4 text-bkPurple/90 font-bold mb-4">We're here for</p>
					<div class="flex w-full items-center mb-2 bg-secondary-100 px-2 py-1 rounded-md">
						<img src="$lib/assets/design/icons/egg.png" alt="Prenatal" class="h-6 w-6" />
						<span class="ml-2 text-sm font-semibold text-gray-700">Prenatal</span>
					</div>
					<div class="flex w-full items-center mb-2 bg-secondary-100 px-2 py-1 rounded-md">
						<img src="$lib/assets/design/icons/egg-cracked.png" alt="Prenatal" class="h-6 w-6" />
						<span class="ml-2 text-sm font-semibold text-gray-700">Birth</span>
					</div>
					<div class="flex w-full items-center bg-secondary-100 px-2 py-1 rounded-md">
						<img src="$lib/assets/design/icons/baby.png" alt="Prenatal" class="h-6 w-6" />
						<span class="ml-2 text-sm font-semibold text-gray-700">Early Life</span>
					</div>
				</div>
			</div>
			<img
				class="w-80 h-80 rounded-t-full object-cover object-center mx-auto inline-block"
				src="$lib/assets/stock/mother-with-sleeping-baby.png"
				alt=""
			/>
		</div>
	</div>
</section>
