<script>
	import EventsPanel from '$lib/components/EventsPanel.svelte';
	import bkLogo from '$lib/assets/bk_logo.jpeg';
	import Card from '$lib/components/Card.svelte';

	const consultationLink = 'https://zcal.co/birthkuwait/consultation';
	const prenatalWorkshopLink = 'https://zcal.co/birthkuwait/prenatal';
	const newbornWorkshopLink = 'https://zcal.co/birthkuwait/newborn';
	const breastfeedingWorkshopLink = 'https://zcal.co/birthkuwait/breastfeeding';
	const childbirthWorkshopLink = 'https://zcal.co/birthkuwait/childbirth';
	const doulaLectureLink = 'https://zcal.co/birthkuwait/doula';
	const myLifeGuideLink = 'https://zcal.co/birthkuwait/mylifeguide';
</script>

<section class="w-full h-full bg-cover bg-[url($lib/assets/design/families-background.png)]">
	<div class="flex flex-row flex-wrap w-full p-4 md:p-8 justify-around gap-8">
		<Card underline class="w-[40rem] flex flex-col items-center">
			<h2 slot="header" class="h3 font-bold text-primary-500 text-center">Ready to talk?</h2>
			<p class="text-xl">Meet with one of our experts to craft a plan that will work best for you, whatever phase of motherhood you are in.</p>
			<p class="text-lg mt-5 mb-5">What to expect: Some details about the consultation like length, what will be discussed, outcomes, etc.</p>
			<a class="btn bg-primary-500 text-white" href={consultationLink} target="_blank">Book Now!</a>
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
						link: doulaLectureLink
					},
					{
						id: '234',
						date: '02/12/2021',
						title: 'My Life Guide',
						description: 'This is a description',
						imageSrc: bkLogo,
						link: myLifeGuideLink
					}
				]}
			/>
		</div>
		<div class="w-[25rem]">
			<EventsPanel
				title="Group Workshops"
				description="We offer group workshops, too! Reserve your seat below. "
				events={[
					{
						id: '123',
						date: 'Thursdays',
						title: 'Prenatal Exercise',
						description: 'Short description',
						imageSrc: bkLogo,
						link: prenatalWorkshopLink
					},
					{
						id: '123',
						date: 'Thursdays',
						title: 'Childbirth Prep',
						description: 'Short description',
						imageSrc: bkLogo,
						link: childbirthWorkshopLink
					},
					{
						id: '234',
						date: 'Saturdays',
						title: 'Breastfeeding Basics',
						description: 'Short description',
						imageSrc: bkLogo,
						link: breastfeedingWorkshopLink
					},
					{
						id: '123',
						date: 'Sundays',
						title: 'Newborn Care',
						description: 'Short description',
						imageSrc: bkLogo,
						link: newbornWorkshopLink
					}
				]}
			/>
		</div>
	</div>
</section>
