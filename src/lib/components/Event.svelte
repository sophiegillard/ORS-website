<script>
  export let nom_evenement = ""
  export let date = ""
  export let prix = ""
  export let durée = ""
  export let lieu = ""
  export let is_last = true
  export let is_detail = true
  export let description = ""
  export let line_img_src = "ORS_illustrations_Actu_tracé_1.svg"
  export let info_button = true
</script>

<div class="{info_button && 'lg:w-10/12'}">
  <div class="flex flex-col sm:flex-row justify-between">
    <div class="">
      <p class="pb-0 font-medium">{nom_evenement}</p>
      <div>
        {#if is_detail}
          <p class="pt-0">
            {#if date}
              <span class="date">{date}</span>
            {/if}
            {#if prix}
              <span>{prix}</span>
            {/if}
            {#if durée}
              <span>{durée}</span>
            {/if}
            {#if lieu}
              <span>{lieu}</span>
            {/if}
          </p>
        {/if}
        {#if description}
          <p>{description}</p>
        {/if}
      </div>
    </div>

    {#if info_button}
      <div class="flex row sm:pt-0">
        <div
          class="line_img relative left-3 bottom-2 w-1/3 sm:block sm:left-0 sm:bottom-0 sm:w-full"
          style="width: 100px; min-height: 100%;"
        >
          <img
            src="src/lib/assets/img/SVG/{line_img_src}"
            class="w-full h-full object-cover rotate-45 sm:rotate-0"
            alt="ORS logo"
          />
        </div>

        <div class=" items-center flex">
          <button
            class="border-grey border-solid border-2 hover:bg-brown-hover rounded-full hover:text-off-white px-8 py-1 lg:px-10 lg:py-2 font-light"
          >
            Infos
          </button>
        </div>
      </div>
    {/if}
  </div>

  {#if !is_last}
    <hr class=" border border-pink my-3" />
  {/if}
</div>

<style>
  .date {
    font-family: Gyst Variable;
    font-style: italic;
    font-weight: 550;
    letter-spacing: 0em;
    text-align: left;
    color: theme("colors.dark-blue");
  }

  span:not(:last-child)::after {
    content: " | ";
    color: theme("colors.grey");
    font-style: normal;
    font-family: Epilogue;
    font-weight: 300;
  }

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
</style>
