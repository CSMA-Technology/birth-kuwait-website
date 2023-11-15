<script lang="ts">
	let classes: string = '';
	export { classes as class };
</script>

<div class={`relative rounded-2xl bg-slate-100/90 ${classes}`}>
	<slot />
</div>

<style>
	.container {
		position: relative;
		background-color: rgba(255, 255, 255, 0.5);
		padding: 1rem;
		border-radius: 0.5rem;
		overflow: hidden;
	}
	.content {
		margin-bottom: 4rem; /* Adjust as needed to prevent text overlap with image */
	}
	.image {
		width: auto;
		height: 100px; /* Adjust as needed */
	}
</style>
