<script>
  import SectionWithTitle from "$lib/components/layout/SectionWithTitle.svelte"
  import ContactButton from "$lib/components/button/ContactButton.svelte"
</script>

<svelte:head>
  <title>Nous aider</title>
  <meta name="nous-aider" content="Aide / volontariat" />
</svelte:head>

<div class="text-column">
  <SectionWithTitle title="Nous aider">
    <div class="flex flex-row decorated-text gap-20 pb-10">
      <div class="relative">
        <p class="">Volontariat</p>
        <img
          src="$lib/assets/img/illustration/nous-aider-line-volontariat.png"
          alt="illustration"
          class="absolute max-w-full"
        />
      </div>

      <div class="flex items-center justify-center">
        <p class="">Dons</p>
        <img
          src="$lib/assets/img/illustration/nous-aider-line-dons.png"
          alt="illustration"
          class="absolute"
        />
      </div>
    </div>

    <div>
      <p>
        Si notre asbl est portée par des professionnels de l’aide et financée par divers pouvoirs
        publics, toute forme d’implication citoyenne est précieuse, que ce soit via un bénévolat
        (par exemple en devenant visiteur), ou via un don, financier ou matériel.
      </p>

      <p>
        Ces aides, si minimes soient-elles, nous aident à améliorer la qualité de notre accueil et
        de nos services, à diversifier nos actions, à maintenir un lien citoyen.
      </p>

      <p>N’hésitez pas à prendre contact avec nous pour tout renseignement.</p>
    </div>
  </SectionWithTitle>

  <div class="flex flex-col justify-center items-center gap-10">
    <img src="$lib/assets/img/illustration/shape.png" alt="illustration" />

    <ContactButton />
  </div>
</div>

<style>
  .decorated-text p {
    font-family: Gyst Variable;
    font-size: 50px;
    font-style: italic;
    font-weight: 400;
    line-height: 62px;
    letter-spacing: 0em;
    text-align: left;
  }
</style>
