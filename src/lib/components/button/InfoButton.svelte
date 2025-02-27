<script>
  import { createEventDispatcher } from "svelte"
  const dispatch = createEventDispatcher()

  // export let line_img_src = "ORS_illustrations_Actu_trace_1.svg"
  export let line_img_src = "lib/assets/img/SVG/ORS_illustrations_Actu_trace_1.svg"
  export let title = "info"
</script>

<div class="flex row sm:pt-0">
  <div
    class="line_img relative left-3 bottom-2 w-1/3 sm:block sm:left-0 sm:bottom-0 sm:w-full mr-3"
    style="width: 100px; min-height: 100%;"
  >
    <img
      src="{line_img_src}"
      class="w-full h-full object-cover rotate-45 sm:rotate-0"
      alt="ORS logo"
    />
  </div>

  <div class=" items-center flex">
    <button
      class="info-button hover:bg-brown-hover rounded-full hover:text-off-white py-1 pt-2 mr-8 md:py-2 2xl:py-4 font-light"
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
    border: 2px solid theme("colors.grey");
    font-family: Epilogue;

    font-weight: 400;
    line-height: 20.5px;
    text-align: center;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    width: 190px;
  }
  .info-button:hover {
    background-color: theme("colors.grey");
    color: theme("colors.off-white");
  }
</style>
