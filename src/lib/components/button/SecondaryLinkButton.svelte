<script>
  export let href = ""
  export let title = ""
  export let custom_class = ""
</script>

<button
  on:click="{() => (window.location.href = href)}"
  class=" bg-blue hover:bg-blue-hover py-3 px-8 rounded-full border-grey border w-1/5 {custom_class}"
>
  {title}
</button>
