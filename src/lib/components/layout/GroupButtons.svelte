<script>
</script>

<div
  class="flex flex-custom gap-5 sm:gap-7 sm:w-3/4 mx-2 sm:mx-0 md:w-full lg:px-16 xl:px-0 lg:gap-12 2xl:gap-24 py-3 flex-wrap"
>
  <slot />
</div>

<style>
  @media (max-width: 480px) {
    .flex-custom {
      flex-direction: column !important;
      justify-content: center !important;
    }
  }
  .flex-custom {
    flex-direction: row;
    justify-content: center !important;
    align-content: center;
  }
</style>
