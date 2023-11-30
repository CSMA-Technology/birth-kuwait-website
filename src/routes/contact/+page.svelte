<script>
	import Card from '$lib/components/Card.svelte';
	import { fade } from 'svelte/transition';
</script>

<!-- Decorations container For Large Screens -->
<div class="hidden md:block relative w-full left-0 top-0">
	<div in:fade>
		<img src="$lib/assets/design/Doodle-1.png" class="absolute opacity-90 w-16 top-44 left-10" alt="" aria-hidden />
		<img src="$lib/assets/design/Doodle-2.png" class="absolute opacity-90 w-20 -top-5 left-1/4" alt="" aria-hidden />
		<img src="$lib/assets/design/Doodle-3.png" class="absolute opacity-90 w-16 top-48 right-32" alt="" aria-hidden />
		<img src="$lib/assets/design/Doodle-4.png" class="absolute opacity-90 w-16 top-60 right-1/3" alt="" aria-hidden />
		<img src="$lib/assets/design/Doodle-4.png" class="absolute opacity-90 w-24 top-96 left-1/3" alt="" aria-hidden />
	</div>
</div>

<section class="w-full bg-primary-400">
	<div class="relative">
		<img class="absolute h-80 top-12" src="$lib/assets/design/squiggle-1.png" alt="" />
		<img class="absolute h-80 right-0" src="$lib/assets/design/squiggle-2.png" alt="" />
	</div>
	<div class="w-full justify-evenly flex flex-row p-10">
		<Card class="card p-6 w-[35rem] bg-white/30">
			<h2 class="h2 font-bold text-gray-600">Get in touch</h2>
			<form>
				<label class="label mt-3">
					<span class="font-bold text-lg text-white">Your Name</span>
					<input class="input placeholder-slate-500/70" type="text" name="name" placeholder="Full Name" />
				</label>
				<label class="label mt-3">
					<span class="font-bold text-lg text-white">Your Email</span>
					<input class="input placeholder-slate-500/70" type="email" name="email" placeholder="example@something.com" />
				</label>
				<label class="label mt-3">
					<span class="font-bold text-lg text-white">How can we help?</span>
					<textarea class="textarea" name="message" />
				</label>
			</form>
		</Card>
		<div class="relative">
			<div class="absolute -left-28 top-20">
				<p class="bg-white text-primary-500 text-lg font-bold rounded-2xl w-fit py-1.5 px-3 rounded-br-none shadow-md">
					Drop us a line
				</p>
				<img class="relative -left-10" src="$lib/assets/design/purple-arrow-left.png" alt="" />
			</div>
			<img class="rounded-top-md h-96" src="$lib/assets/stock/woman-looking-left.png" alt="" />
		</div>
	</div>
</section>
<section class="py-4 bg-[url($lib/assets/design/three-bubbles.png)] bg-cover">
	<div class="my-8 max-w-3xl mx-auto">
		<h1 class="h2 text-center my-4 font-bold text-primary-500">Reach out any time</h1>
		<p>
			Reprehenderit sunt commodo velit ut laboris veniam aute elit dolore. Esse fugiat non dolor pariatur quis aute
			officia eiusmod Lorem.Esse commodo deserunt anim non exercitation magna consectetur duis commodo ut culpa.
		</p>
		<dl class="mt-4 flex flex-row w-full justify-around">
			<div>
				<dt class="font-bold text-center">Email</dt>
				<span>
					<img class="w-4 inline-block mr-1" src="$lib/assets/design/icons/email.png" alt="" />
					<dd class="inline-block">yourcompany@email.com</dd>
				</span>
			</div>

			<div>
				<dt class="font-bold text-center">Whatsapp</dt>
				<span>
					<img class="w-4 inline-block mr-1" src="$lib/assets/design/icons/whatsapp.png" alt="" />
					<dd class="inline-block">+1 (123) 456-7890</dd>
				</span>
			</div>
		</dl>
	</div>
</section>
