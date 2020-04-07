<script context="module">
	export async function preload({ params, query }) {
		return this.fetch(`blockpage.json`).then(r => r.json()).then(renderBlocks => {
			return { renderBlocks };
		});
	}
</script>

<script>

	import blocks from '../../components/blocks/';
	export let renderBlocks = [];

</script>
<style>
	.content{	
		@apply flex-auto bg-red-200;
	}
	.fluid-row{
		@apply mb-4 w-full flex justify-center flex-auto;
	}
	.content-row{
		@apply mx-auto mb-4 max-w-screen-xl flex-auto;
	}
	.center-row-content{
		@apply mx-lg;
	}
</style>

<svelte:head>
	<title>Blockpage</title>
</svelte:head>

<div class="content">
		{#each renderBlocks as block, i}
				<div class="fluid-row">
					<svelte:component this={blocks[block.type]} guid={block.id} />
				</div>
		{/each}
	<div class="content-row">
		<div class="center-row-content" >
		</div>
	</div>
</div>
