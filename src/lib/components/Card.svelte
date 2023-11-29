<script lang="ts">
	export let underline = false;
	let classes: string = '';
	export { classes as class };
</script>

<div class={`bg-white shadow-md card p-4 ${classes}`}>
	<slot name="header" />
	{#if underline}
		<img class="mx-auto w-44 mb-2" src="$lib/assets/design/purple_underline.png" aria-hidden alt="" />
	{/if}
	<slot />
</div>
