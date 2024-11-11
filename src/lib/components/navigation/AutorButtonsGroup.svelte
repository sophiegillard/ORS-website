<script>
  import LinkButton from "$lib/components/button/LinkButton.svelte"
  import GroupButtons from "$lib/components/layout/GroupButtons.svelte"
  import ContactButton from "$lib/components/button/ContactButton.svelte"
</script>

<div class="w-full">
  <GroupButtons>
    <LinkButton href="/accueil/victimes">
      <p>Aux <span class="markup-text">victimes</span> <br /> & leurs proches</p>
    </LinkButton>

    <LinkButton href="/accueil/auteurs">
      <p>
        Aux <span class="markup-text">auteur.e.s <br /> non incarcéré.e.s</span><br /> & leurs proches
      </p>
    </LinkButton>

    <LinkButton href="/accueil/détenus">
      <p>Aux <span class="markup-text">personnes détenues</span> <br />& leurs proches</p>
    </LinkButton>
  </GroupButtons>
  <div class="flex justify-center pt-8 pb-4"><ContactButton /></div>
</div>
