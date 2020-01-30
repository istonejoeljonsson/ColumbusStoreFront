<style>
	h1, figure, p {
		@apply text-center m-0 mx-auto;
	}

	h1 {
		@apply text-5xl uppercase font-bold m-0 mb-2;
	}

	figure {
		@apply m-0 mb-4;
	}

	img {
		@apply m-auto w-full max-w-sm;
		@screen md {
			@apply max-w-xs;
		}
	}

	p {
		@apply m-4 mx-auto;
	}

	h1 {
		@apply text-6xl;
	}	
</style>

<svelte:head>
	<title>Sapper project template</title>
</svelte:head>

<h1>Great success!</h1>

<figure>
	<img alt='Borat' src='great-success.png'>
	<figcaption>HIGH FIVE!</figcaption>
</figure>

<p><strong>Try editing this file (src/routes/index.svelte) to test live reloading.</strong></p>
