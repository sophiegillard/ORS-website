<script>
  export let month = ""
  export let year = ""
</script>

<div class="pb-10">
  <h7 class="flex flex-row justify-between">
    <div>{month}</div>
    <div>{year}</div>
  </h7>

  <slot />
</div>
