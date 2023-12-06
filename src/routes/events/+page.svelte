<!-- Calendly.svelte -->
<script>
  import { onMount } from 'svelte';

  onMount(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;

    script.onload = () => {
      Calendly.initInlineWidget({
        url: 'https://calendly.com/birthkuwait',
        parentElement: document.getElementById('calendly-container'),
      });
    };

    document.body.appendChild(script);
  });
</script>

<div class="w-full text-center text-xl">Book any session with us below!</div>
<div class="w-full h-full" id="calendly-container" style="padding-bottom: 2rem;"></div>
