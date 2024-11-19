<script>
  export let title
  export let text
  export let custom_class = ""
  export let left = -30

  export let line_img_src = "trace_quiSommesNous_1.png"

  let title_width = 0
</script>

<div class="{custom_class} lg:pt-10">
  {#if title}
    <div class="relative z-0">
      <h2 class="w-fit" bind:offsetWidth="{title_width}">{title}</h2>
      {#if line_img_src}
        <img
          src="src/lib/assets/img/lines/{line_img_src}"
          alt="title bottom border"
          class="absolute z-10 subtitle-line"
          style="{`width : ${title_width + 40}px; top: 38px; left: ${left}px; height: 15px;`}"
        />
      {/if}
    </div>
  {/if}
  <div class="text-content pt-5 md:pt-0">
    <slot />
  </div>
</div>

<style>
  .text-content {
    padding-bottom: 3rem;
  }

  @media (min-width: 480px) {
    .subtitle-line {
      top: 50px;
      height: 20px;
    }
  }

  @media (min-width: 1024px) {
    .subtitle-line {
      top: 40px;
      height: 20px;
    }
  }
</style>
