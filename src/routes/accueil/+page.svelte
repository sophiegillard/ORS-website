<script>
  import AutorButtonsGroup from "$lib/components/navigation/AutorButtonsGroup.svelte"
</script>

<svelte:head>
  <title>Accueil</title>
  <meta name="Accueil" content="Accueil" />
</svelte:head>

<div class="text-column text-center flex flex-col items-center justify-center">
  <div class="py-6 w-72 lg:w-1/2 lg:py-16">
    <img src="$lib/assets/img/logo/ors-logo.png" alt="ORS logo" />
  </div>

  <h3>Service d'aide aux Justiciables</h3>

  <div class="">
    <p class="py-8 sm:py-14 sm:px-8 lg:px-44">
      Nous proposons une <span class="markup-text"> aide psychologique et/ou sociale</span>

      à toute personne confrontée au monde judiciaire.
    </p>
  </div>

  <p class="pb-2 lg:pb-8 p-secondary">Nous nous adressons dès lors :</p>

  <AutorButtonsGroup />
</div>
