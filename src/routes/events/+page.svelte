<script lang="ts" context="module">
	// Calendly gets loaded by the script tag in the head
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	declare const Calendly: any;
</script>

<script lang="ts">
	import { browser } from '$app/environment';

	let calendlyRef: HTMLElement;
	const onScriptLoad = () => {
		Calendly.initInlineWidget({
			url: 'https://calendly.com/birthkuwait',
			parentElement: calendlyRef
		});
	};

	$: browser && Calendly && calendlyRef && onScriptLoad();
</script>

<svelte:head>
	<script src="https://assets.calendly.com/assets/external/widget.js" async></script>
</svelte:head>

<div class="w-full h-full">
	<div>
		<h1 class="h3 font-bold text-primary-500 text-center">Book a session with us below!</h1>
	</div>
	<div bind:this={calendlyRef} class="w-full h-full pb-8" />
</div>
