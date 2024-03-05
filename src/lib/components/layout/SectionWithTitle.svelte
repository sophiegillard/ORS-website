<script>
  export let title
  export let text
</script>

<div>
  <h2>{title}</h2>
  <div class="text-content">
    <slot />
  </div>
</div>

<style>
  .text-content {
    padding-bottom: 3rem;
  }
</style>
