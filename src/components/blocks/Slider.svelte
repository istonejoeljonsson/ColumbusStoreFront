<script>
  export let guid = null;
</script>

<style>

  figure{
    @apply w-full;
  }

 img{
   @apply w-full h-auto m-0 p-0;
 }

</style>

{#if guid !== null}
  <figure>
    <img src="https://placekitten.com/1440/500" alt="Kitty" />
  </figure>
{/if}
