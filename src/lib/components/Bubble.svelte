<script lang="ts">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	let classes: string = '';
	export let flair: boolean = false;
	export { classes as class };
	let mounted = false;
	onMount(() => {
		mounted = true;
	});
</script>

{#if mounted}
	<div
		class={`absolute rounded-full flex items-center justify-center z-0 ${classes}`}
		transition:fade={{ delay: Math.random() * 500, duration: 1000 }}
	>
		{#if flair}
			<div class="absolute -z-10 top-0 right-0 bottom-0 left-0 flex items-center justify-center">
				<div
					class="w-full h-full rounded-full border-4 border-white absolute"
					style="transform: scale(1.1) translate(-5%, 5%);"
				/>
				<div
					class="w-full h-full rounded-full border-4 border-white absolute"
					style="transform: scale(1.1) translate(5%, -5%);"
				/>
				<div
					class="w-full h-full rounded-full border-4 border-white absolute"
					style="transform: scale(1.15) translate(5%, 5%);"
				/>
			</div>
		{/if}
		<div class="overflow-hidden flex flex-col justify-center rounded-full w-full h-full bg-inherit">
			<slot />
		</div>
	</div>
{/if}
