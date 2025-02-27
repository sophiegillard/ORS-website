<script>
  export let month = ""
  export let year = ""
</script>

<div class="pb-10 lg:pt-6">
  <h7 class="flex flex-row justify-between lg:mb-3 xl:pb-3">
    <div>{month}</div>
    <div>{year}</div>
  </h7>

  <slot />
</div>
