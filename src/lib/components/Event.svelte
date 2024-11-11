<script>
  export let nom_evenement = ""
  export let date = ""
  export let prix = "Service gratuit"
  export let durée = ""
  export let lieu = "ORS Espace Libre"
  export let is_last = false
  export let is_detail = true
  export let description = ""
</script>

<div>
  <p class="pb-0 font-medium">{nom_evenement}</p>
  <div>
    {#if is_detail}
      <p class="pt-0"><span class="date">{date}</span> | {prix} | {durée} | {lieu}</p>
    {/if}
    {#if description}
      <p class="leading-5">{description}</p>
    {/if}
  </div>
</div>
{#if !is_last}
  <hr class=" border border-pink my-3" />
{/if}

<style>
  .date {
    font-family: Gyst Variable;
    font-style: italic;
    font-weight: 550;
    letter-spacing: 0em;
    text-align: left;
    color: theme("colors.dark-blue");
  }
</style>
