<script>
  export let isMobile
</script>

<footer class=" bg-grey flex justify-center flex-col pb-4 items-center">
  <div
    class="bg-pink mention-service w-full text-center text-grey py-3 px-3 md:py-4 lg:py-5 2xl:py-8"
  >
    {#if isMobile}
      Service gratuit &nbsp;•&nbsp; Confidentiel <br /> Indépendant des instances judiciaires
    {:else}
      Service gratuit &nbsp;•&nbsp; Confidentiel &nbsp;•&nbsp; Indépendant des instances judiciaires
    {/if}
  </div>

  <div class="flex flex-col sm:flex-row justify-center px-4 sm:px-10 py-5 gap-8 md:max-w-7xl">
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
    <div class="section section-text px-4 order-1 sm:order-2 text-center pt-4">
      <p class="footer-title uppercase block">
        Ors-Espace Libre <span class="lowercase">Asbl</span>
      </p>

      <p class="footer-secondary sm:inline-block hidden text-nowrap">
        Service d’aide aux Justiciables de l’arrondissement
      </p>
      <p class="footer-secondary sm:inline-block hidden">
        judiciaire du Hainaut - Division Charleroi
      </p>

      <p class="footer-secondary inline-block sm:hidden">
        Service d’aide aux Justiciables de l’arrondissement judiciaire du Hainaut - Division
        Charleroi
      </p>

      <p class="footer-contact-info">Rue Léon Bernus 27 - 6000 Charleroi</p>
      <p class="footer-contact-info">Tél 071/27.88.00</p>
      <p class="footer-contact-info">Fax 071/27.88.01</p>
      <a href="mailto:contact@espacelibre.be" class="footer-contact-info">contact@espacelibre.be</a>

      <div>
        <a href="/mentions-legales" class="">
          <p class="text-center mention-legales hidden sm:block lg:hidden">Mentions légales</p>
        </a>
      </div>
    </div>

    <!-- LEGAL -->
    <div
      class="section flex items-center justify-center section-legale order-3 sm:order-3 lg:flex lg:items-end lg:justify-end"
    >
      <div>
        <div>
          <a href="/mentions-legales" class="pb-4 lg:pb-32 pt-0">
            <p class=" pt-0 text-center hidden lg:block sm:text-right mention-legales">
              Mentions légales
            </p>
          </a>
        </div>

        <div>
          <a href="/mentions-legales" class="">
            <p class="text-center mention-legales sm:hidden">Mentions légales</p>
          </a>
        </div>

        <div class="text-xs">
          <p class="mention-footer text-center sm:text-right align-middle">
            Design © Marion Daubresse
          </p>
          <p class="mention-footer text-center sm:text-right">Développement © Sophie Gillard</p>
        </div>
      </div>
    </div>
  </div>
</footer>

<style>
  footer {
    color: theme("colors.off-white");
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
      bottom: 25px;
      left: 30px;
    }
    .section-text {
      max-width: 80%;
      /* padding-bottom: 60px; */
    }
    .section-legale {
      position: absolute;
      bottom: 25px;
      right: 30px;
    }

    .mention-legales {
      padding-bottom: 0px !important;
      margin-top: 50px !important;
    }
  }

  @media (min-width: 1024px) {
    .image-parent {
      width: 70px;
      height: 70px;
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

  @media (min-width: 1366px) {
    .image-parent {
      width: 70px;
      height: 70px;
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
