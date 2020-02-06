<script>
	export let segment;
</script>

<style>
	nav {
		@apply flex-auto max-w-screen-xl mx-lg p-0 font-light;
	}

	ul {
		@apply m-0 p-0;
	}

	/* clearfix */
	ul::after {
		@apply clear-both block empty-content;
	}

	li {
		@apply block float-left;
	}

	.selected {
		@apply relative inline-block;
	}

	.selected::after {
		@apply absolute empty-content w-calc-4 h-1 bg-red-400 block -bottom-1;
	}

	a {
		@apply no-underline block px-2 py-4;
	}
</style>

<nav>
	<ul>
		<li><a class:selected='{segment === undefined}' href='.'>home</a></li>
		<li><a class:selected='{segment === "about"}' href='about'>about</a></li>
		<li><a class:selected='{segment === "blockpage"}' href='blockpage'>Blocks</a></li>


		<!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
		     the blog data when we hover over the link or tap it on a touchscreen -->
		<li><a rel=prefetch class:selected='{segment === "blog"}' href='blog'>blog</a></li>
	</ul>
</nav>
