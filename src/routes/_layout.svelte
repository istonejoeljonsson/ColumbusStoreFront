<script>
	import Tailwindcss from '../components/Tailwindcss.svelte';
	import Nav from '../components/Nav.svelte';

	export let segment;
</script>

<style>
	:global(#sapper){
		@apply flex flex-col h-full;
	}
	main {
		@apply flex w-full flex-auto mx-auto justify-center;
	}
	header{
		@apply flex-initial flex w-full p-0 justify-center mx-auto bg-yellow-100 border-b border-solid border-black;
	}
	footer{
		@apply mt-4 flex-initial;
	}

</style>

<Tailwindcss />

<header>
	<Nav {segment}/>
</header>

<main>
		<slot></slot>
</main>

<footer>
	my footer
</footer>