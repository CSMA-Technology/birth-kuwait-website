<script>
	import EventsPanel from '$lib/components/EventsPanel.svelte';
	import bkLogo from '$lib/assets/bk_logo.jpeg';
	import Card from '$lib/components/Card.svelte';
</script>

<section class="w-full h-full bg-cover bg-[url($lib/assets/design/families-background.png)]">
	<div class="flex flex-row flex-wrap w-full p-4 md:p-8 justify-around gap-8">
		<Card underline class="w-[40rem] ">
			<h2 slot="header" class="h3 font-bold text-primary-500 text-center">Ready to talk?</h2>
			<p class="text-xl">Consultations are available every week. Use the calendar below to schedule yours today.</p>
			<div class="text-center mt-4 w-full h-44 bg-gray-400">Booking calendar goes here</div>
		</Card>
		<Card underline class="card h-fit bg-white w-[40rem] p-6">
			<h2 slot="header" class="h3 font-bold text-primary-500 text-center">Our facilities</h2>
			<div class="flex flex-row">
				<div class="w-2/3">
					<p class="text-xl">
						Aliqua eu eu veniam qui nostrud est officia. Lorem eu irure culpa proident pariatur voluptate non pariatur
						eu ullamco elit cupidatat sit non.Ea elit sunt aute fugiat sit minim irure irure culpa nulla sint cupidatat
						ea ex deserunt anim labore velit
					</p>
				</div>
				<div class="w-1/3">
					<img class="w-full" src="$lib/assets/stock/lounge.png" alt="Our facilities" />
				</div>
			</div>
		</Card>
		<div class="w-[25rem]">
			<EventsPanel
				title="Free Lectures"
				description="Join us and our amazing speakers for these absolutely free lectures on fascinating topics!"
				events={[
					{
						id: '123',
						date: '12/12/2021',
						title: 'Event 1',
						description: 'This is a description',
						imageSrc: bkLogo
					},
					{
						id: '234',
						date: '12/12/2021',
						title: 'Event 2',
						description: 'This is a description',
						imageSrc: bkLogo
					}
				]}
			/>
		</div>
		<div class="w-[25rem]">
			<EventsPanel
				title="Group Workshops"
				description="We offer group workshops, too! Reserve your seat today. "
				events={[
					{
						id: '123',
						date: '12/12/2021',
						title: 'Event 1',
						description: 'This is a description',
						imageSrc: bkLogo
					},
					{
						id: '234',
						date: '12/12/2021',
						title: 'Event 2',
						description: 'This is a description',
						imageSrc: bkLogo
					}
				]}
			/>
		</div>
	</div>
</section>
