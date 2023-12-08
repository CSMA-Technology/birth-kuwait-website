<script>
	import EventsPanel from '$lib/components/EventsPanel.svelte';
	import bkLogo from '$lib/assets/bk_logo.jpeg';
	import Card from '$lib/components/Card.svelte';
	import CalendlyPopupButton from '$lib/components/CalendlyPopupButton.svelte';

	const consultationLink = 'https://calendly.com/birthkuwait/consultation';
</script>

<section class="w-full h-full bg-cover bg-[url($lib/assets/design/families-background.png)]">
	<div class="flex flex-row flex-wrap w-full p-4 md:p-8 justify-around gap-8">
		<Card underline class="w-[40rem] flex flex-col items-center">
			<h2 slot="header" class="h3 font-bold text-primary-500 text-center">Ready to talk?</h2>
			<p class="text-xl">Meet with one of our experts to craft a plan that will work best for you, whatever phase of motherhood you are in.</p>
			<p class="text-lg mt-5 mb-5">What to expect: Some details about the consultation like length, what will be discussed, outcomes, etc.</p>
			<CalendlyPopupButton bookingLink={consultationLink}>Book Now!</CalendlyPopupButton>
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
						date: '07/12/2023',
						title: 'Who is a Doula?',
						description: 'This is a description',
						imageSrc: bkLogo,
						bookingLink: 'https://calendly.com/birthkuwait/free-lecture-who-is-a-doula-7-dec'
					},
					{
						id: '234',
						date: '02/12/2021',
						title: 'My Life Guide',
						description: 'This is a description',
						imageSrc: bkLogo,
						bookingLink: 'https://calendly.com/birthkuwait/free-lecture-who-is-a-doula-7-dec'
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
						date: 'Thursdays',
						title: 'Prenatal Exercise',
						description: 'Short description',
						imageSrc: bkLogo,
						bookingLink: 'https://calendly.com/birthkuwait/prenatal-exercise-workshop'
					},
					{
						id: '123',
						date: 'Thursdays',
						title: 'Childbirth Prep',
						description: 'Short description',
						imageSrc: bkLogo,
						bookingLink: 'https://calendly.com/birthkuwait/childbirth-preparations-workshop'
					},
					{
						id: '234',
						date: 'Saturdays',
						title: 'Breastfeeding Basics',
						description: 'Short description',
						imageSrc: bkLogo,
						bookingLink: 'https://calendly.com/birthkuwait/breastfeeding-basics-workshop'
					},
					{
						id: '123',
						date: 'Sundays',
						title: 'Newborn Care',
						description: 'Short description',
						imageSrc: bkLogo,
						bookingLink: 'https://calendly.com/birthkuwait/newborn-care-basics-workshop'
					}
				]}
			/>
		</div>
	</div>
</section>
