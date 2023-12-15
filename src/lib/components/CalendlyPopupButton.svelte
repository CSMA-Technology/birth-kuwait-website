<script lang="ts">
	import { onMount } from 'svelte';

	export let bookingLink: string;

	// Function to initialize the Calendly popup widget
	function initializeCalendly() {
		Calendly.initPopupWidget({ url: bookingLink });
	}

	onMount(() => {
		// Load the Calendly widget script dynamically
		const script = document.createElement('script');
		script.src = 'https://assets.calendly.com/assets/external/widget.js';
		script.type = 'text/javascript';
		script.async = true;
		document.head.appendChild(script);
	});
</script>

<!-- Stylesheet for Calendly widget -->
<link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />

<button class="btn bg-primary-500 text-white" on:click={initializeCalendly}>
	<slot />
</button>

<style>
	.calendly-overlay .calendly-popup {
		max-height: 690px;
	}
</style>
