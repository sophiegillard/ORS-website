<script>
  export let title
  export let text
  export let custom_class = ""
  export let top = 45
  export let left = -30
  export let width = 400
  export let line_img_src = "trace_quiSommesNous_1.png"
</script>

<div class="{custom_class}">
  {#if title}
    <div class="relative z-0">
      <h2>{title}</h2>
      {#if line_img_src}
        <img
          src="src/lib/assets/img/lines/{line_img_src}"
          alt="title bottom border"
          class="absolute z-10"
          style="{`width : ${width}px; top: ${top}px; left: ${left}px; height: 13px;`}"
        />
      {/if}
    </div>
  {/if}
  <div class="text-content">
    <slot />
  </div>
</div>

<style>
  .text-content {
    padding-bottom: 3rem;
  }
</style>
