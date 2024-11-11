<script>
  export let isMobile

  $: console.log("isMobile", isMobile)
</script>

<footer class=" bg-grey flex justify-center flex-col pb-4 items-center">
  <div class="bg-pink mention-service w-full text-center text-grey py-3 px-3 lg:py-8">
    {#if isMobile}
      Service gratuit • Confidentiel <br /> Indépendant des instances judiciaires
    {:else}
      Service gratuit • Confidentiel • Indépendant des instances judiciaires
    {/if}
  </div>

  <div
    class="flex flex-col sm:flex-row justify-center px-8 py-5 gap-8"
    style="{'max-width: 80rem;'}"
  >
    <!-- LOGOS -->
    <div
      class=" section section-logos order-2 sm:order-1 flex flex-col gap-4 lg:items-baseline lg:justify-end"
    >
      <div class="flex flex-row gap-4 justify-center">
        <div class="flex flex-col image-parent">
          <img src="$lib/assets/img/logo/fwb-blanc.png" class="object-contain" alt="FWB logo" />
        </div>
        <div class="flex flex-col image-parent justify-center items-center">
          <img
            src="$lib/assets/img/logo/wallonie-blanc.png"
            class="wallonie_logo object-cover"
            style="min-width: 70px; min-height: 70px"
            alt="Wallonie logo"
          />
        </div>
        <div class="flex flex-col image-parent">
          <img
            src="$lib/assets/img/logo/charleroi-blanc.png"
            class="object-contain"
            alt="Charleroi logo"
          />
        </div>
      </div>
      <div class="flex flex-row gap-4 justify-center">
        <div class="flex flex-col image-parent">
          <img src="$lib/assets/img/logo/ibz-blanc.png" class="object-contain" alt="IBZ logo" />
        </div>
        <div class="flex flex-col image-parent">
          <img src="$lib/assets/img/logo/maribel-ass.png" class="object-contain" alt="UE logo" />
        </div>
        <div class="flex flex-col image-parent">
          <img src="$lib/assets/img/logo/ue-blanc.png" class="object-contain" alt="UE logo" />
        </div>
      </div>
    </div>

    <!-- TEXT -->
    <div class="section section-text px-4 order-1 sm:order-2 text-center section">
      <p class="footer-title uppercase">
        Ors-Espace Libre <span class="lowercase">Asbl</span>
      </p>

      <p class="footer-secondary">
        Service d’aide aux Justiciables de l’arrondissement judiciaire du Hainaut - Division
        Charleroi
      </p>
      <p class="footer-contact-info">27 Rue Léon Bernus, 6000 Charleroi</p>
      <p class="footer-contact-info">Tél : 071/27.88.00</p>
      <p class="footer-contact-info">Fax : 071/27.88.01</p>
      <a href="mailto:contact@espacelibre.be" class="footer-contact-info">contact@espacelibre.be</a>
    </div>

    <!-- LEGAL -->
    <div class="section section-legale order-3 sm:order-3 lg:flex lg:items-end lg:justify-end">
      <div>
        <div>
          <p class="pb-4 lg:pb-32 pt-0 mention-legales">Mentions Légales</p>
        </div>
        <div class="text-xs">
          <p class="mention-footer">Design © Marion Daubresse</p>
          <p class="mention-footer">Développement © Sophie Gillard</p>
        </div>
      </div>
    </div>
  </div>
</footer>

<style>
  footer {
    color: theme("colors.off-white");
  }
  .footer-information {
    min-width: 40%;
  }

  .footer-information p {
    margin: 0 !important;
    padding: 0 !important;
  }

  .footer-information {
    width: 40% !important;
  }

  .image-parent {
    width: 50px;
    height: 50px;
  }
  img {
    height: inherit;
  }

  @media (min-width: 640px) and (max-width: 1024px) {
    .section-logos {
      position: absolute;
      bottom: 30px;
      left: 30px;
    }
    .section-text {
      max-width: 80%;
      padding-bottom: 60px;
    }
    .section-legale {
      position: absolute;
      bottom: 30px;
      right: 30px;
    }
  }

  @media (min-width: 1024px) {
    .image-parent {
      width: 80px;
      height: 80px;
    }
    .section {
      width: 33%;
    }
    .section-text {
      width: 60%;
    }
    .wallonie_logo {
      min-width: 100px !important;
      min-height: 100px !important;
    }
  }
</style>
