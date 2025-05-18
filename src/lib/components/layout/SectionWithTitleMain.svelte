<script>
  export let title
  export let first_line_title
  export let custom_class = ""
  export let custom_style = ""
  export let is_wrap_text = true
  export let custom_class_full = ""
  export let left = -10
  let top

  let title_width = 0
  let second_title_width = 0
  let window_width = 0
  let top_line = 0

  $: if (window_width > 1366) {
    top_line = 90
  } else {
    top_line = 9
  }
</script>

<svelte:window innerWidth="{window_width}" />
<div class="md:pt-4 ld:pt-14 xl:pt-16"></div>
<div class="{custom_class} {custom_class_full} md:mb-10 xl:mb-0">
  {#if title}
    <div class="relative h2-container z-0 pb-5 md:pb-0">
      <h2
        class="p-0 pb-0 {custom_class} "
        class:text-nowrap="{is_wrap_text}"
        syle="{custom_style}"
        bind:offsetWidth="{title_width}"
      >
        {#if first_line_title}
          {first_line_title}
          <br />
        {/if}
      </h2>
      <h2
        class="w-fit {custom_class} {title_width > 240 ? 'text-nowrap' : 'text-nowrap'}"
        bind:offsetWidth="{second_title_width}"
      >
        {title}
      </h2>
      <img
        src="$lib/assets/img/lines/trace_quiSommesNous_1.png"
        alt="title bottom border"
        class="z-10 subtitle-line absolute"
        style="{`width : ${second_title_width ? second_title_width + 15 : title_width + 15}px; left: ${left}px; height: 12px; --top_line: ${top}px;`}"
      />
    </div>
  {/if}
  <div class="text-content pt-2 sm:px-5 md:pt-12">
    <slot />
  </div>
</div>

<style>
  .subtitle-line {
    height: 20px;
    top: var(--top_line) !important;
  }

  .wrap-text {
    white-space: normal;
    word-wrap: break-word;
  }

  @media (max-width: 324px) {
    h2 {
      font-size: 17px !important;
      line-height: 22px !important;
    }
  }

  @media (min-width: 480px) {
    .subtitle-line {
      height: 20px;
    }
  }

  @media (min-width: 900px) {
    .subtitle-line {
      height: 20px;
    }
  }

  @media (min-width: 1024px) {
    .subtitle-line {
      height: 20px !important;
    }
  }

  @media (min-width: 1600px) {
    .subtitle-line {
      height: 20px !important;
    }
  }
</style>
