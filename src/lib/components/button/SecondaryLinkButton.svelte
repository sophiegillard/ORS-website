<script>
  export let href = ""
  export let title = ""
  export let custom_class = ""
</script>

<button
  on:click="{() => (window.location.href = href)}"
  class=" bg-blue hover:bg-blue-hover px-8 rounded-full border-grey border w-auto {custom_class}"
  style="min-width: 20%;"
>
  {#if title}
    {title}
  {:else}
    <slot></slot>
  {/if}
</button>
