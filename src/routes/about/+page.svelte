<script>
	import Card from '$lib/components/Card.svelte';
</script>

<section
	class="bg-[url($lib/assets/design/aboutus-new.jpg)] bg-bkBlue/20 bg-no-repeat bg-contain md:bg-cover md:h-[40rem] p-8"
>
	<div class="flex flex-col flex-wrap content-between gap-7 h-full">
		<Card underline class="w-96 md:ml-8">
			<h1 slot="header" class="h2 font-bold text-primary-500 text-center">Our Story</h1>

			<p class="text-xl">
				BirthKuwait is a non-profit community organization dedicated to providing up-to-date evidence based educational
				services, advocacy and support to promote infant and maternal health in Kuwait and the Arabic speaking world.
			</p>
		</Card>
		<Card class="card w-96 md:ml-8 ">
			<p class="text-xl">
				Over the past 12 years we have become leaders in the field, by providing the important combination of
				cutting-edge training and educational services for professionals, and support and educational services for
				families.
			</p>
		</Card>
		<Card class="card w-96 md:ml-8 ">
			<p class="text-xl">
				The BirthKuwait's has helped build a vibrant community of well trained, passionate, and hardworking
				professionals, who serve families in Kuwait and the region during the most important stages of their lives, as
				they become parents, and raise the future generations.
			</p>
		</Card>
		<Card class="card w-96 md:ml-8 ">
			<p class="text-xl">
				To learn more and get involved, <a class="anchor" href="/contact">contact us</a>!
			</p>
		</Card>
	</div>
</section>
