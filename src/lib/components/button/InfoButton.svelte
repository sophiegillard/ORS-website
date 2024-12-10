<script>
  import { createEventDispatcher } from "svelte"
  const dispatch = createEventDispatcher()

  export let line_img_src = "ORS_illustrations_Actu_trace_1.svg"
  export let title = "info"
</script>

<div class="flex row sm:pt-0">
  <div
    class="line_img relative left-3 bottom-2 w-1/3 sm:block sm:left-0 sm:bottom-0 sm:w-full"
    style="width: 100px; min-height: 100%;"
  >
    <!-- <img
      src="$lib/assets/img/SVG/{line_img_src}"
      class="w-full h-full object-cover rotate-45 sm:rotate-0"
      alt="ORS logo"
    /> -->
  </div>

  <div class=" items-center flex">
    <button
      class="info-button hover:bg-brown-hover rounded-full hover:text-off-white px-4 py-1 pt-2 my-6 lg:px-10 lg:py-2 font-light"
      on:click="{() => dispatch('click')}"
    >
      {title}
    </button>
  </div>
</div>

<style>
  .line_img {
    width: 100px;
    min-height: 100%;
  }

  @media (max-width: 1024px) {
    .line_img {
      height: 50px !important
      ;
    }
  }
  .info-button {
    border: 1px solid theme("colors.grey");
    font-family: Epilogue;
    font-size: 20px;
    font-weight: 400;
    line-height: 20.5px;
    text-align: center;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
  }
  .info-button:hover {
    background-color: theme("colors.grey");
    color: theme("colors.off-white");
  }
</style>
