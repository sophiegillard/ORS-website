<script>
  export let href = ""
</script>

<button
  on:click="{() => (window.location.href = href)}"
  class=" bg-blue hover:bg-blue-hover py-4 px-8 rounded-3xl border-grey border w-1/5"
>
  <slot />
</button>
