<script>
  import AutorButtonsGroup from "$lib/components/navigation/AutorButtonsGroup.svelte"
</script>

<svelte:head>
  <title>Accueil</title>
  <meta name="Accueil" content="Accueil" />
</svelte:head>

<div class="text-column text-center flex flex-col items-center justify-center">
  <img src="$lib/assets/img/logo/ors-logo.png" class="py-10" style="width: 50%;" alt="ORS logo" />

  <h3>Service d'aide aux Justiciables</h3>

  <p class="py-14">
    Nous proposons une <span class="markup-text">aide psychologique et/ou sociale</span>
    <br />
    à toute personne confrontée au monde judiciaire
  </p>

  <p class="pb-10 p-secondary">Nous nous adressons dès lors :</p>

  <AutorButtonsGroup />
</div>
