<script>
  export let title
  export let first_line_title
  export let custom_class = ""
  export let left = -10
  export let top 

  

  export let line_img_src = "/src/lib/assets/img/lines/trace_quiSommesNous_1.png"

  let title_width = 0
</script>

<div class="{custom_class}">
  {#if title}
    <div class="relative z-0">
      <h2 class="p-0 pb-0 {custom_class} ">
        {#if first_line_title}
          {first_line_title}
          <br />
        {/if}
      </h2>
      <h2 class="w-fit {custom_class}"  bind:offsetWidth="{title_width}">
        {title}
      </h2>
      {#if line_img_src}
        <img
          src="{line_img_src}"
          alt="title bottom border"
          class=" z-10 subtitle-line absolute"
          style="{`width : ${title_width + 15}px; left: ${left}px; height: 12px; top: ${top}px;`}"
        />
      {/if}
    </div>
  {/if}
  <div class="text-content pt-5  px-5 sm:pt-8 md:pt-12">
    <slot />
  </div>
</div>

<style>
  .text-content {
    padding-bottom: 3rem;
  }

  .subtitle-line {
      top: 25px;
    }

    @media (min-width: 480px) {
    .subtitle-line {
      top: 50px;
      height: 20px;
    }
  }

  @media (min-width: 1024px) {
    .subtitle-line {
      top: 50px;
      height: 20px !important;
    }
  }
</style>
