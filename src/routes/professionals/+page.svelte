<script lang="ts">
	import EventsPanel from '$lib/components/EventsPanel.svelte';
	import Card from '$lib/components/Card.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	const { trainingEventData } = data;
</script>

<section class="w-full bg-cover md:min-h-[30rem] bg-[url($lib/assets/design/professionals-background.png)]">
	<div class="relative">
		<img class="absolute h-80 top-12" src="$lib/assets/design/squiggle-1.png" alt="" />
		<img class="absolute h-80 right-0" src="$lib/assets/design/squiggle-2.png" alt="" />
	</div>
	<div class="flex flex-row flex-wrap justify-around p-4 md:p-12 w-full">
		<div class="md:w-[25rem]">
			<EventsPanel
				events={trainingEventData}
				title="Professional Training"
				description="We offer a wide selection of training sessions! Check out our schedule below and contact us for more details"
			/>
		</div>
		<div class="flex flex-col gap-8 items-end mt-8">
			<Card underline class="md:w-[35rem] h-fit">
				<h1 slot="header" class="h3 text-primary-500 text-center font-bold">Become a Member</h1>
				<p class="text-xl w-full text-center">
					Our brand new professional membership offers exclusive access to new products and services! To learn more,
					click here.
				</p>
			</Card>
			<Card underline class="md:w-[35rem] h-fit xl:mr-20">
				<h1 slot="header" class="h3 text-primary-500 text-center font-bold">Collaborate with BirthKuwait</h1>
				<p class="text-xl w-full text-center">
					Are you looking to offer professional services to our clients? We're always looking for more content and
					talent. Reach out to us on the <a class="anchor" href="/contact">contact page</a>, and we'll be in touch!
				</p>
			</Card>
		</div>
	</div>
</section>
