<script>
  export let guid = null;
</script>

<style>
 .grid-main{
   @apply grid grid-cols-2 gap-4;
   
   @screen md{
     @apply grid-cols-3;
   }
   
   @screen lg{
     @apply grid-cols-4;
   }
 }

 .grid-child {
	 @apply text-white bg-black;
 }

 img{
   @apply w-full h-auto m-0 p-0;
 }

</style>
{#if guid !== null}
  <div class="grid-main">
    <div class="grid-child"><img src="https://placekitten.com/450/550" alt="Kitty" /></div>
    <div class="grid-child"><img src="https://placekitten.com/450/550" alt="Kitty" /></div>
    <div class="grid-child"><img src="https://placekitten.com/450/550" alt="Kitty" /></div>
    <div class="grid-child"><img src="https://placekitten.com/450/550" alt="Kitty" /></div>
    <div class="grid-child"><img src="https://placekitten.com/450/550" alt="Kitty" /></div>
    <div class="grid-child"><img src="https://placekitten.com/450/550" alt="Kitty" /></div>
  </div>
{/if}