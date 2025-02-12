<script>
  import { fly, slide } from "svelte/transition"
  export let title
  export let first_line_title
  export let custom_class = ""
  export let left = -30

  let title_width = 0
</script>

<div class="{custom_class} pt-10">
  {#if title}
    <div class="relative z-0 md:pb-5">
      <h3 class="p-0 pb-0 {custom_class} ">
        {#if first_line_title}
          {first_line_title}
          <br />
        {/if}
      </h3>
      <h3 class="w-fit {custom_class}" bind:offsetWidth="{title_width}">
        {title}
      </h3>
      <img
        src="$lib/assets/img/lines/trace_quiSommesNous_1.png"
        alt="title bottom border"
        class=" z-10 subtitle-line"
        style="{`width : ${title_width + 10}px; top: ${first_line_title ? ' 90px' : '34px'}; left: ${left}px; height: 15px;`}"
      />
    </div>
  {/if}
  <div class="text-content pt-5 sm:px-5 md:pt-0">
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
      height: 2px;
    }
  }

  @media (min-width: 1024px) {
    .subtitle-line {
      top: 90px !important;
      height: 20px;
    }
  }
</style>
