<script>
  export let title = ""
  export let custom_class = ""
</script>

<div class="text-center py-2 sm:py-4 grow-1 {custom_class}">
  <h4>{title}</h4>
  <slot />
</div>
