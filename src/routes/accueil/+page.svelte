<script>
  import LinkButton from "$lib/components/button/LinkButton.svelte"
  import GroupButtons from "$lib/components/layout/GroupButtons.svelte"
  import ContactButton from "../../lib/components/button/ContactButton.svelte"
</script>

<svelte:head>
  <title>Accueil</title>
  <meta name="Accueil" content="Accueil" />
</svelte:head>

<div class="text-column text-center flex flex-col items-center justify-center">
  <img
    src="$lib/assets/img/logo/ors-logo.png"
    class=""
    style="width: 40%; max-width:270px"
    alt="ORS logo"
  />

  <h3>Service d'aide aux Justiciables</h3>

  <p class="py-6">
    Nous proposons une <span class="markup-text">aide psychologique et/ou sociale</span>
    <br />
    à toute personne confrontée au monde judiciaire.
  </p>

  <p>Nous nous adressons dès lors :</p>

  <div>
    <GroupButtons>
      <LinkButton href="/accueil/victimes">
        <p>Aux <span class="markup-text">victimes</span> & leurs proches</p>
      </LinkButton>

      <LinkButton href="/accueil/auteurs">
        <p>Aux <span class="markup-text">auteur.e.s non incarcéré.e.s</span> & leurs proches</p>
      </LinkButton>

      <LinkButton href="/accueil/détenus">
        <p>Aux <span class="markup-text">personnes détenues</span> & leurs proches</p>
      </LinkButton>
    </GroupButtons>
    <div class="pt-4"><ContactButton /></div>
  </div>
</div>
