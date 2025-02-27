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
  <div class="pb-6 md:py-0 md:w-2/5 md:pb-9 2xl:w-5/12 lg:pt-0 xl:pb-10 2xl:pb-16 logo">
    <img
      src="$lib/assets/img/logo/ors-logo.png"
      class="logo"
      alt="ORS logo"
      class:is-scrolled="{isScrolled}"
    />
  </div>

  <p class="sub-title">Service d'Aide aux Justiciables</p>

  <div class="pb-5 lg:pb-10 hidden xs:block">
    <p class="p-accueil pb-10 sm:px-14 md:px-28 text-center inline-block">
      Nous proposons une <span class="markup-text-accueil block sm:inline-block">
        aide psychologique et/ou sociale</span
      >
      <br class="hidden md:block" />
      à toute personne confrontée au monde judiciaire
    </p>
  </div>

  <div class="pb-5 md:pb-0 lg:pb-10 xs:hidden">
    <p class="p-accueil pb-10 sm:px-14 md:px-28 text-center inline-block">
      Nous proposons une
      <br />
      <span class="markup-text-accueil">aide psychologique et/ou sociale</span>
      <span>à toute personne confrontée au monde judiciaire</span>
    </p>
  </div>

  <p class=" pb-0 md:mb-5 2xl:mb-8 p-secondary">Nous nous adressons dès lors aux :</p>

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
