<script>
  export let href = ""
</script>

<button
  on:click="{() => (window.location.href = href)}"
  class="bg-blue hover:bg-blue-hover px-3 py-3 md:py-8 rounded-3xl border-grey border lg:w-1/5 grow"
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
</style>
