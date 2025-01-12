<script>
  export let href = ""
</script>

<button
  on:click="{() => (window.location.href = href)}"
  class="bg-blue hover:bg-blue-hover px-6 py-3 lg:py-8 rounded-3xl border-grey border lg:w-1/5 grow button-width"
>
  <slot />
</button>

<style>
  @media (max-width: 1024px) {
    button {
      max-width: 250px;
      min-height: 116px;
    }
  }

  @media (min-width: 687) {
    /* Set a uniform width for all buttons */
    .button-width {
      width: 250px; /* Adjust as needed */
      max-width: 100%; /* Ensures responsiveness */
      min-height: 116px; /* Maintains consistent height */
    }
  }
</style>
