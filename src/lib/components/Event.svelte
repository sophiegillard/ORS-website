<script>
  import InfoButton from '$lib/components/button/InfoButton.svelte';

  export let nom_evenement = ""
  export let date = ""
  export let prix = ""
  export let durée = ""
  export let lieu = ""
  export let is_last = true
  export let is_detail = true
  export let description = ""
  export let btn_line_img_src = "ORS_illustrations_Actu_tracé_1.svg"
  export let info_button = true
  export let btn_title = "Infos"
</script>

<div class="{info_button && 'md:w-10/12'}">
  <div class="flex flex-col sm:flex-row justify-between">
    <div class="">
      {#if nom_evenement}
      <p class="pb-3" style="font-weight:400">{nom_evenement}</p>
      {/if}
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
     <InfoButton title={btn_title} line_img_src={btn_line_img_src}
     on:click={() => {
      const url = new URL('/contact', window.location.origin);
      url.searchParams.append('title', nom_evenement);
      window.location.href = url.toString();
    }}
     >
    </InfoButton>
    {/if}
  </div>

  {#if !is_last}
    <hr class=" border border-pink my-4 md:my-0" style="height:2px !important"/>
  {/if}
</div>

<style>
 
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
  .info-button {
    border : 1px solid theme("colors.grey");
    font-weight: 500 !important;
    letter-spacing: 0.05rem;
  }
</style>
