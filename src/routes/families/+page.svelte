<script lang="ts">
	import EventsPanel from '$lib/components/EventsPanel.svelte';
	import Card from '$lib/components/Card.svelte';
	import CalendlyPopupButton from '$lib/components/CalendlyPopupButton.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	const { workshopEventData, lectureEventData, privateSessionData } = data;
	const consultationLink = 'https://calendly.com/birthkuwait/consultation';
</script>

<section class="w-full h-full bg-cover bg-[url($lib/assets/design/families-background.png)]">
	<div class="flex flex-row flex-wrap w-full p-4 md:p-8 justify-around gap-4">
		<div class="w-[60rem]">
			<p class="font-bold text-xl text-white text-center">
				Some introductory text. This is a placeholder.
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
				ccumsan in nisl nisi scelerisque eu ultrices vitae auctor eu. Varius vel pharetra vel turpis nunc eget.
			</p>
		</div>
		<Card underline class="w-[40rem] flex flex-col items-center">
			<h2 slot="header" class="h3 font-bold text-primary-500 text-center">Consult a Professional</h2>
			<p class="text-xl">
				Meet with one of our experts to craft a plan that will work best for you, whatever phase of motherhood you are
				in.
			</p>
			<p class="text-lg mt-5 mb-5">
				What to expect: Some details about the consultation like length, what will be discussed, outcomes, etc.
			</p>
			<CalendlyPopupButton bookingLink={consultationLink}>Book Now!</CalendlyPopupButton>
		</Card>
		<Card underline class="card bg-white w-[40rem] p-6">
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
		<div class="w-[25rem] h-full">
			<EventsPanel
				title="Free Events"
				description="Join us and our amazing speakers for these absolutely free lectures on fascinating topics!"
				events={lectureEventData}
			/>
		</div>
		<div class="w-[25rem]">
			<EventsPanel
				title="Workshops and Classes"
				description="Whether you're looking for group classes or one-on-one sessions, you can book your seat now!"
				events={workshopEventData}
			/>
		</div>
		<div class="w-[25rem]">
			<EventsPanel
				title="Didn't find what you are looking for?"
				description="We have a rotating basis of professionals that you can book private time with! Check our schedule and book below."
				events={privateSessionData}
			/>
		</div>
	</div>
</section>
