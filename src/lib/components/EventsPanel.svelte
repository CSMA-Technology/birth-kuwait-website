<script lang="ts">
	import Card from './Card.svelte';

	export let events: Array<{
		id: string;
		title: string;
		description: string;
		date: string;
		imageSrc: string;
		link?: string;
	}>;
	export let title = 'Featured Events';
	export let description = '';
</script>

<Card underline>
	<h2 slot="header" class="h3 mb-1 text-center text-primary-500 font-bold">{title}</h2>
	{#if description}
		<p class="text-center text-gray-600 mb-4">{description}</p>
	{/if}
	<div class="grid grid-cols-1 gap-2">
		{#each events as event}
			<a href={event.link} aria-disabled={!event.link} target="_blank">
				<div class="flex items-center p-2 border rounded-lg">
					<div class="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden">
						<img src={event.imageSrc} alt={event.title} class="object-cover w-full h-full" />
					</div>
					<div class="ml-4 flex-grow">
						<h3 class="font-semibold">{event.title}</h3>
						<p class="text-sm text-gray-600 truncate">{event.description}</p>
					</div>
					<div class="ml-4">
						<span class="block text-sm bg-gray-100 py-2 px-4 rounded w-[6.5rem] text-center" aria-label="Event Date">
							<img class="mx-auto" src="$lib/assets/design/icons/calendar.svg" alt="" aria-hidden />
							{event.date}
						</span>
					</div>
				</div>
			</a>
		{/each}
	</div>
</Card>

<style>
	/* Add custom styles or override Tailwind styles here if needed */
</style>
