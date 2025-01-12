<script>
  import AutorButtonsGroup from "$lib/components/navigation/AutorButtonsGroup.svelte"

  let y = 0
  $: isScrolled = y > 150
</script>

<svelte:head>
  <title>ORS Espace Libre | Accueil</title>
  <meta name="Accueil" content="Accueil" />
</svelte:head>

<svelte:window bind:scrollY="{y}" />
<div class="text-column text-center flex flex-col items-center justify-center">
  <div class="py-6 w-64 md:py-0 md:w-2/5 md:pb-14 lg:w-1/2 lg:pt-0 lg:pb-28">
    <img src="$lib/assets/img/logo/ors-logo.png" alt="ORS logo" class:is-scrolled="{isScrolled}" />
  </div>

  <p class="sub-title">Service d'Aide aux Justiciables</p>

  <div class="">
    <p class="p-accueil pb-10 sm:px-14 md:px-28 text-center">
      Nous proposons une
      <span class="markup-text-accueil block sm:inline-block">
        aide psychologique et/ou sociale
      </span>
      <br />
      à toute personne confrontée au monde judiciaire.
    </p>
  </div>

  <p class="pb-0 lg:pb-8 p-secondary">Nous nous adressons dès lors :</p>

  <AutorButtonsGroup />
</div>

<style>
  img {
    transition:
      transform 0.3s ease,
      opacity 0.3s ease;
  }
  img.is-scrolled {
    transform: scale(0.5);
    opacity: 0;
  }
</style>
