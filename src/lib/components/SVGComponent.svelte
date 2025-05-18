<script>
  let SvgComponent

  import(`./icons/my-icon.svelte`).then((module) => {
    SvgComponent = module.default
  })
</script>

{#if SvgComponent}
  <svelte:component this="{SvgComponent}" />
{:else}
  <p>Loading icon…</p>
{/if}
