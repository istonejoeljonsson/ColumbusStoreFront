<script context="module">
	export async function preload({ params, query }) {
		return this.fetch(`blockpage.json`).then(r => r.json()).then(blocks => {
			return { blocks };
		});
	}
</script>

<script>
	export let blocks = [];
	export let loadedBlockTypes = [];
	let blocksToRender = [];
	let uniqueBlocks = blocks.map(block => block.type)
	uniqueBlocks = new Set(uniqueBlocks);
	uniqueBlocks = [...uniqueBlocks];
  import('../../components/blocks/Slider.svelte').then(res => loadedBlockTypes = [...loadedBlockTypes, res.default])

	uniqueBlocks.forEach(block => {
		if(block === 'Slider') {
			import('../../components/blocks/Slider.svelte').then(res => loadedBlockTypes = [...loadedBlockTypes, res.default])
		}
		if(block === 'Grid') {
    	import('../../components/blocks/Grid.svelte').then(res => loadedBlockTypes = [...loadedBlockTypes, res.default])
		}
	});																								


	$: blocksToRender = blocks.filter(block => loadedBlockTypes.some(vendor => {
			return  vendor.name === block.type
		}));

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
		{#each blocksToRender as block, i}
				<div class="fluid-row">
					<svelte:component this={loadedBlockTypes.find(type => type.name === block.type)} guid={block.id} />
				</div>
		{/each}
	<div class="content-row">
		<div class="center-row-content" >
		</div>
	</div>
</div>
