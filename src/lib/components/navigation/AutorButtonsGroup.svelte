<script>
  import LinkButton from "$lib/components/button/LinkButton.svelte"
  import GroupButtons from "$lib/components/layout/GroupButtons.svelte"
  import ContactButton from "$lib/components/button/ContactButton.svelte"
</script>

<div class="w-full">
  <GroupButtons>
    <LinkButton href="/accueil/victimes">
      <p class="p-accueil">
        Aux <span class="markup-text-accueil">victimes</span> <br /> & leurs proches
      </p>
    </LinkButton>

    <LinkButton href="/accueil/auteurs">
      <p class="p-accueil">
        Aux <span class="markup-text-accueil">auteur.e.s <br /> non incarcéré.e.s</span><br /> & leurs
        proches
      </p>
    </LinkButton>

    <LinkButton href="/accueil/détenus">
      <p class="p-accueil">
        Aux <span class="markup-text-accueil">personnes détenues</span> <br />& leurs proches
      </p>
    </LinkButton>
  </GroupButtons>
  <div class="flex justify-center pt-8 pb-4"><ContactButton /></div>
</div>

<style>
  p {
    text-align: center;
  }
</style>
