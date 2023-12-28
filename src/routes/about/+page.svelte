<script>
	import Card from '$lib/components/Card.svelte';
</script>

<section id="hero" class="bg-[url($lib/assets/design/aboutus-background.png)] bg-no-repeat bg-cover bg-bottom p-8">
	<div class="relative flex flex-row flex-wrap content-center gap-y-7 justify-around w-full md:h-[30rem] items-end">
		<Card underline class="md:w-96 md:ml-8">
			<h1 slot="header" class="h2 font-bold text-primary-500 text-center">Our Story</h1>

			<p class="text-xl">
				BirthKuwait is a non-profit community organization dedicated to providing up-to-date evidence based educational
				services, advocacy and support to promote infant and maternal health in Kuwait and the Arabic speaking world.
			</p>
			<p class="text-xl mt-3">
				Over the past 12 years we have become leaders in the field, by providing the important combination of
				cutting-edge training and educational services for professionals, and support and educational services for
				families.
			</p>
		</Card>

		<Card underline class="md:w-96 h-full">
			<h2 slot="header" class="h2 font-bold text-primary-500 text-center">Our Impact</h2>
			<p class="text-xl">
				The BirthKuwait's have helped build a vibrant community of well trained, passionate, and hardworking
				professionals, who serve families in Kuwait and the region during the most important stages of their lives, as
				they become parents, and raise the future generations.
			</p>
		</Card>
		<Card class="card md:w-96 h-full">
			<p class="text-xl">
				To learn more and get involved, <a class="anchor" href="/contact">contact us</a>!
			</p>
		</Card>
	</div>
</section>

<style>
	#hero::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-image: url('$lib/assets/design/aboutus-decorations.png');
	}
</style>
