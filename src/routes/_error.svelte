<script>
	export let status;
	export let error;

	const dev = process.env.NODE_ENV === 'development';
</script>

<style>
	h1, p {
		@apply my-0 mx-auto;
	}

	h1 {
		@apply text-5xl font-bold m-0 mb-2;
		@screen sm{
			@apply text-6xl;
		}
	}

	p {
		@apply my-4 m-auto;
	}

</style>

<svelte:head>
	<title>{status}</title>
</svelte:head>

<h1>{status}</h1>

<p>{error.message}</p>

{#if dev && error.stack}
	<pre>{error.stack}</pre>
{/if}
