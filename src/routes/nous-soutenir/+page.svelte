<script>
  import SectionWithTitleMain from "$lib/components/layout/SectionWithTitleMain.svelte"
  import ContactButton from "$lib/components/button/ContactButton.svelte"
</script>

<svelte:head>
  <title>ORS Espace Libre | Nous soutenir</title>
  <meta name="nous-soutenir" content="Aide / volontariat" />
</svelte:head>

<div class="text-column">
  <SectionWithTitleMain title="Nous soutenir">
    <div class="image-container flex justify-center">
      <img
        src="$lib/assets/img/SVG/ORS_illustrations_Nous soutenir-12.svg"
        class=" pt-6 max-w-96 md:max-w-none lg:pt-0 w-10/12 sm:w-9/12 md:w-8/12 lg:w-6/12 pb-10"
        style="min-width: 200px"
        alt="ORS logo"
      />
    </div>

    <div>
      <p>
        Si notre asbl est portée par des professionnels de l’aide et financée par divers pouvoirs
        publics, toute forme d’<span class="markup-text">implication citoyenne</span> est précieuse,
        que ce soit via un <span class="markup-text">volontariat</span>
        (par exemple en devenant
        <span class="inline-block">
          <span class="markup-text text-dark-blue">
            <a href="/accueil/détenus?selected_section=visiteurs">visiteur·euse de prison</a></span
          >),</span
        >
        ou via un
        <span class="markup-text">don</span>, financier ou matériel.
      </p>

      <p>
        Ces aides, si minimes soient-elles, nous aident à <span class="markup-text">améliorer</span>
        la qualité de notre accueil et de nos services, à
        <span class="markup-text">diversifier</span>
        nos actions, à <span class="markup-text">maintenir</span> un lien citoyen.
      </p>

      <p>
        N’hésitez pas à <span class="markup-text">prendre contact</span> avec nous pour tout renseignement.
      </p>
    </div>
  </SectionWithTitleMain>

  <div class="flex flex-col justify-center items-center gap-10">
    <img
      src="$lib/assets/img/SVG/ORS_illustrations_Nous soutenir-07_2.svg"
      class="w-4/5 pt-4 sm:pt-0 sm:w-3/5 md:w-5/12 max-w-80 lg:max-w-none"
      alt="ORS logo"
    />
    <ContactButton />
  </div>
</div>

<style>
  .decorated-text p {
    font-family: theme("fontFamily.gyst");
    font-size: 50px;
    font-style: italic;
    font-weight: 400;
    line-height: 62px;
    letter-spacing: 0em;
    text-align: left;
  }

  .image-container {
    overflow: hidden; /* Prevents the zoomed image from causing scroll */
    max-height: 160px;
  }

  .zoomed {
    transform: scale(1.1); /* Adjust scale as needed */
    overflow: hidden; /* Hide any overflow from scaling */
    margin-top: -10%; /* Centers the zoomed image within the container */
    height: fit-content;
  }

  @media (min-width: 550px) {
    .zoomed {
      transform: scale(0.9); /* Adjust scale as needed */
    }
  }

  @media (min-width: 900px) {
    .zoomed {
      transform: scale(0.6); /* Adjust scale as needed */
    }
  }
</style>
