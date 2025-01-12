<script>
  export let title
  export let first_line_title
  export let custom_class = ""
  export let left = -10
  export let top

  let title_width = 0
</script>

<div class=" lg:pt-16"></div>
<div class="{custom_class}">
  {#if title}
    <div class="relative z-0">
      <h2 class="p-0 pb-0 {custom_class} ">
        {#if first_line_title}
          {first_line_title}
          <br />
        {/if}
      </h2>
      <h2 class="w-fit {custom_class}" bind:offsetWidth="{title_width}">
        {title}
      </h2>
      <img
        src="$lib/assets/img/lines/trace_quiSommesNous_1.png"
        alt="title bottom border"
        class=" z-10 subtitle-line absolute"
        style="{`width : ${title_width + 15}px; left: ${left}px; height: 12px; top: ${top}px;`}"
      />
    </div>
  {/if}
  <div class="text-content pt-5 px-5 sm:pt-8 md:pt-12">
    <slot />
  </div>
</div>

<style>
  .subtitle-line {
    top: 25px;
  }

  @media (min-width: 480px) {
    .subtitle-line {
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
