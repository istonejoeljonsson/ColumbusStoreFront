<script>
	import Tailwindcss from '../components/Tailwindcss.svelte';
	import Nav from '../components/Nav.svelte';

	export let segment;
</script>

<style>
	main {
		@apply relative max-w-4xl bg-white p-8 mx-auto my-0 box-border;
	}
</style>

<Tailwindcss />

<Nav {segment}/>

<main>
	<slot></slot>
</main>