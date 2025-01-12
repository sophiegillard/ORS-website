<script>
  import { createEventDispatcher } from "svelte"

  export let href = ""
  export let title = ""
  export let custom_class = ""

  const dispatch = createEventDispatcher()
</script>

<button
  on:click="{() => dispatch('click')}"
  class=" bg-blue hover:bg-blue-hover px-7 lg:px-8 pt-1 rounded-full border-grey border w-auto {custom_class}"
  style="min-width: 20%; width: fit-content;  min-height: 60px"
>
  {#if title}
    {title}
  {:else}
    <slot></slot>
  {/if}
</button>
