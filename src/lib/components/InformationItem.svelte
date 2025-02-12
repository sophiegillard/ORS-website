<script>
  export let title = ""
  export let custom_class = ""
</script>

<div class="text-center py-3 pt-4 sm:py-4 grow-1 {custom_class}">
  <h4 class="pb-3">{title}</h4>
  <slot />
</div>
