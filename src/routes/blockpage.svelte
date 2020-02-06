<script>
	import Slider from '../components/blocks/Slider.svelte';
	import Grid from '../components/blocks/Grid.svelte';
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
	<div class="fluid-row">
			<Slider />
	</div>
	<div class="content-row">
		<div class="center-row-content" >
			<Grid />
		</div>
	</div>
</div>
