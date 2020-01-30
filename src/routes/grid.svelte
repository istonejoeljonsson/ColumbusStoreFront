<style>
 .grid-main{
	 @apply grid grid-cols-3 gap-4;
 }

 .grid-child {
	 @apply text-white bg-black;
 }

 .grid-child-1 {
	 @apply col-span-3 text-white bg-black text-yellow-400;
 } 
</style>

<svelte:head>
	<title>Grid</title>
</svelte:head>


<div class="grid-main">
  <div class="grid-child">dsfs fsf</div>
  <div class="grid-child-1">dsf sfds</div>
  <div class="grid-child">ds f</div>
  <div class="grid-child">sdfsdfsdfs</div>
  <div class="grid-child">ds fsdf s</div>
</div>