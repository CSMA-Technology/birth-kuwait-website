<script lang="ts">
	export let events: Array<{
		id: string;
		title: string;
		description: string;
		date: string;
		imageSrc: string;
	}>;
	export let title = 'Featured Events';
	export let description = '';
</script>

<div class="bg-white shadow-md rounded-lg p-4">
	<h2 class="text-xl mb-2 text-center text-primary-500 font-bold">{title}</h2>
	<img class="mx-auto w-44 mb-2" src="$lib/assets/design/purple_underline.png" aria-hidden alt="" />
	{#if description}
		<p class="text-center text-gray-600 mb-4">{description}</p>
	{/if}
	<div class="grid grid-cols-1 gap-2">
		{#each events as event}
			<div class="flex items-center p-2 border rounded-lg">
				<div class="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden">
					<img src={event.imageSrc} alt={event.title} class="object-cover w-full h-full" />
				</div>
				<div class="ml-4 flex-grow">
					<h3 class="font-semibold">{event.title}</h3>
					<p class="text-sm text-gray-600 truncate">{event.description}</p>
				</div>
				<div class="ml-4">
					<span class="block text-sm bg-gray-100 py-2 px-4 rounded" aria-label="Event Date">
						<img class="mx-auto" src="$lib/assets/design/icons/calendar.svg" alt="" aria-hidden />
						{event.date}
					</span>
				</div>
			</div>
		{/each}
	</div>
</div>

<style>
	/* Add custom styles or override Tailwind styles here if needed */
</style>
