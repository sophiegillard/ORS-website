<script>
  import SectionWithTitle from "$lib/components/layout/SectionWithTitle.svelte"
  import SectionWithTitleMain from "$lib/components/layout/SectionWithTitleMain.svelte"
  import ContactButton from "$lib/components/button/ContactButton.svelte"
  import SecondaryLinkButton from "$lib/components/button/SecondaryLinkButton.svelte"
  import { fly } from "svelte/transition"

  let topValue = 90
  let topValueMobile = 90
  let page_width = 0

  $: if (page_width >= 590 && page_width < 977) {
    topValue = 50
  } else {
    topValue = 90
  }

  $: if (page_width < 330) {
    topValueMobile = 70
  } else {
    topValueMobile = 50
  }
  let selected_section = ""

  function handleGoToSection(section_id) {
    selected_section = section_id
    const section = document.getElementById("section_accompagnement")
    if (section) {
      const offsetTop = section.offsetTop - 40 // Get the top position relative to the document
      window.scrollTo({
        top: offsetTop + 80,
        behavior: "smooth",
      })
    }
  }
</script>

<svelte:head>
  <title>ORS Espace Libre | Auteurs</title>
  <meta name="auteurs" content="auteurs" />
</svelte:head>

<div class="text-column" bind:offsetWidth="{page_width}">
  <div>
    <!-- MOBILE -->
    <SectionWithTitleMain
      first_line_title="Aide auteur·e·s non incarcéré·e·s"
      title="et à leurs proches"
      custom_class="font-epilogue block sm:hidden"
      top="{topValueMobile}"
    >
      <div class="flex justify-center">
        <img
          src="$lib/assets/img/SVG/ORS_illustrations_Aide aux auteur.es.svg"
          alt="illustration"
          class="pb-6 w-4/5 sm:hidden"
          style="max-width: 250px;"
        />
      </div>
      <img
        src="$lib/assets/img/SVG/ORS_illustrations_Aide aux auteur.es.svg"
        alt="illustration"
        class="float-right relative hidden sm:block w-2/5 bottom-5"
      />
      <div>
        <ul class="flex flex-col items-center">
          <li>
            Vous avez commis ou un des vos proches a commis un <span class="markup-text"
              >acte délictueux</span
            >, même en dehors de toute procédure judiciaire,
          </li>
          <li>
            Vous êtes confronté·e à la justice en tant <span class="markup-text"
              >qu'auteur·e d'une infraction</span
            > ,
          </li>
          <li>
            Vous faites l'objet de <span class="markup-text">poursuites pénales </span> (médiation pénale,
            alternative à la détention préventive...) ou d'une condamnation pénale et vous êtes en libération
            provisoire, conditionnelle, à l’essai…
          </li>
        </ul>

        <p>Nous proposons :</p>
        <div class="flex flex-col items-center py-6">
          <div class=" flex flex-col items-center justify-center sm:hidden gap-6 w-2/3">
            <SecondaryLinkButton
              custom_class="grow"
              on:click="{() => handleGoToSection('psychologique')}"
            >
              <p class="text-center">
                Accompagnement <span class="markup-text">psychologique</span>
              </p>
            </SecondaryLinkButton>

            <SecondaryLinkButton
              custom_class="grow"
              on:click="{() => handleGoToSection('sociale')}"
            >
              <p class="text-center">Aide <span class="markup-text">sociale</span></p>
            </SecondaryLinkButton>

            <SecondaryLinkButton
              custom_class="grow"
              on:click="{() => handleGoToSection('collectif')}"
            >
              <p class="text-center">Accompagnement <span class="markup-text">collectif</span></p>
            </SecondaryLinkButton>

            <SecondaryLinkButton
              custom_class="grow"
              on:click="{() => handleGoToSection('proches')}"
            >
              <p class="text-center">Aide pour les <span class="markup-text">proches</span></p>
            </SecondaryLinkButton>
          </div>
        </div>
      </div>
    </SectionWithTitleMain>

    <!-- DESKTOP -->
    <SectionWithTitleMain
      first_line_title="Aide auteur·e·s non incarcéré·e·s"
      title="et à leurs proches"
      custom_class="top-custom hidden sm:block"
      top="{topValue}"
    >
      <div class="flex justify-center">
        <img
          src="$lib/assets/img/SVG/ORS_illustrations_Aide aux auteur.es.svg"
          alt="illustration"
          class="pb-6 w-4/5 sm:hidden"
          style="max-width: 300px;"
        />
      </div>
      <img
        src="$lib/assets/img/SVG/ORS_illustrations_Aide aux auteur.es.svg"
        alt="illustration"
        class="float-right relative hidden sm:block w-1/3 bottom-5"
      />
      <div>
        <ul class="flex flex-col items-center">
          <li>
            Vous avez commis ou un des vos proches a commis un <span class="markup-text"
              >acte délictueux</span
            >, même en dehors de toute procédure judiciaire,
          </li>
          <li>
            Vous êtes confronté·e à la justice en tant <span class="markup-text"
              >qu'auteur·e d'une infraction</span
            > ,
          </li>
          <li>
            Vous faites l'objet de <span class="markup-text">poursuites pénales </span> (médiation pénale,
            alternative à la détention préventive...) ou d'une condamnation pénale et vous êtes en libération
            provisoire, conditionnelle, à l’essai…
          </li>
        </ul>

        <p>Nous proposons :</p>
        <div class="flex flex-col items-center sm:items-start pb-20">
          <div class="sm:flex flex-col hidden lg:flex-row gap-6 pt-3 pb-6 w-3/4">
            <div class="grid grid-cols-5 gap-6">
              <!-- First Column (Wider) -->
              <div class="col-span-3">
                <SecondaryLinkButton
                  class="w-full"
                  on:click="{() => handleGoToSection('psychologique')}"
                >
                  <p class="text-center">
                    Accompagnement <span class="markup-text">psychologique</span>
                  </p>
                </SecondaryLinkButton>
              </div>

              <!-- Second Column -->
              <div class="col-span-2 flex">
                <SecondaryLinkButton
                  custom_class=" flex-grow"
                  on:click="{() => handleGoToSection('sociale')}"
                >
                  <p class="text-center">Aide <span class="markup-text">sociale</span></p>
                </SecondaryLinkButton>
              </div>

              <!-- Third Row, First Column -->
              <div class="col-span-3 flex">
                <SecondaryLinkButton
                  custom_class=" flex-grow"
                  on:click="{() => handleGoToSection('collectif')}"
                >
                  <p class="text-center">
                    Accompagnement <span class="markup-text">collectif</span>
                  </p>
                </SecondaryLinkButton>
              </div>

              <!-- Third Row, Second Column -->
              <div class="col-span-2 flex">
                <SecondaryLinkButton
                  custom_class=" flex-grow"
                  on:click="{() => handleGoToSection('proches')}"
                >
                  <p class="text-center">Aide pour les <span class="markup-text">proches</span></p>
                </SecondaryLinkButton>
              </div>
            </div>
          </div>
        </div>
      </div></SectionWithTitleMain
    >

    <div id="section_accompagnement">
      {#if selected_section === "psychologique"}
        <div id="psychologique" class="pt-5">
          <div in:fly="{{ y: 50, duration: 3000 }}">
            <SectionWithTitle title="Accompagnement psychologique" width="{220}">
              <div>
                <ul>
                  <li>S’interroger sur ce qui a mené aux passages à l’acte</li>
                  <li>Favoriser la responsabilisation</li>
                  <li>Favoriser une meilleure compréhension de soi et de sa trajectoire de vie</li>
                  <li>Être accompagné et soutenu dans un processus de changement</li>
                  <li>Privilégier un mieux-être dans le respect de soi et des autres</li>
                  <li>Comprendre et gérer ses émotions</li>
                  <li>...</li>
                </ul>
              </div>

              <div class="">
                <!-- WEB -->
                <img
                  src="$lib/assets/img/SVG/ORS_illustrations_Detenus - Acc. psy - Web.svg"
                  class=" hidden lg:block"
                  alt="ORS logo"
                />

                <!-- DESKTOP -->
                <img
                  src="$lib/assets/img/SVG/ORS_illustrations_Detenus - Acc. psy - Web.svg"
                  class=" hidden sm:block lg:hidden"
                  alt="ORS logo"
                />

                <!-- MOBILE -->
                <div class="relative py-4 overflow-hidden sm:hidden">
                  <img
                    src="$lib/assets/img/SVG/ORS_illustrations_Detenus - Acc. psy - Mobile.svg"
                    alt="Illustration of psychological support for victims"
                    class="h-full w-full object-cover transition-transform duration-300 ease-in-out scale-140"
                  />
                </div>
              </div>
            </SectionWithTitle>
          </div>
        </div>
      {/if}

      {#if selected_section === "sociale"}
        <div id="sociale" class="pt-5">
          <div in:fly="{{ y: 50, duration: 3000 }}">
            <SectionWithTitle title="Aide social">
              <div>
                <ul>
                  <li>Accueil - écoute - Informations - Soutien</li>
                  <li>
                    Accompagnement dans les démarches administratives, sociales, juridiques...
                  </li>
                  <li>Construire et concrétiser un projet de vie sociale, professionnelle...</li>
                  <li>Favoriser le maintien des relations familiales et sociales</li>
                  <li>...</li>
                </ul>
              </div>
              <div class="">
                <!-- WEB -->
                <img
                  src="$lib/assets/img/SVG/ORS_illustrations_Auteur.es - Aide sociale - Web.svg"
                  class=" hidden lg:block"
                  alt="ORS logo"
                />

                <!-- DESKTOP -->
                <img
                  src="$lib/assets/img/SVG/ORS_illustrations_Auteur.es - Aide sociale - Web.svg"
                  class=" hidden md:block lg:hidden"
                  alt="ORS logo"
                />

                <!-- MOBILE -->
                <div class="relative py-4 overflow-hidden md:hidden">
                  <img
                    src="$lib/assets/img/SVG/ORS_illustrations_Auteur.es - Aide sociale - Mobile.svg"
                    alt="Illustration of psychological support for victims"
                    class="sm:hidden h-full w-full object-cover transition-transform duration-300 ease-in-out scale-140"
                  />
                </div>
              </div>
            </SectionWithTitle>
          </div>
        </div>
      {/if}

      {#if selected_section === "collectif"}
        <div id="collectif" class="pt-5">
          <div in:fly="{{ y: 50, duration: 3000 }}">
            <img
              src="$lib/assets/img/SVG/ORS_illustrations_Aide auteur.es & Detenus - Acc. collectif.svg"
              alt="illustration"
              class="float-right relative hidden sm:block w-2/5 bottom-5"
            />

            <SectionWithTitle title="Accompagnement collectif">
              <div class=" flex justify-center">
                <img
                  src="$lib/assets/img/SVG/ORS_illustrations_Aide auteur.es & Detenus - Acc. collectif.svg"
                  alt="illustration"
                  class="zoomed w-4/5 sm:hidden"
                />
              </div>

              <div>
                <h8>Groupe de réflexion pour auteurs de violence conjugale</h8>
                <ul class="pt-5">
                  <li>
                    15 séances de 3 heures, soit en journée, soit en soirée, au rythme d’une fois
                    par semaine
                  </li>
                  <li>10 participants maximum</li>
                  <li>Groupe fermé avec 2 entretiens d’admission préalable</li>
                  <li>Sur base volontaire ou sous condition judiciaire</li>
                </ul>

                <p class="objectif">→ Objectifs</p>

                <ul>
                  <li>
                    Sensibiliser aux comportements violents et à leurs conséquences (sur le
                    conjoint, sur les enfants, sur la famille élargie, etc.)
                  </li>
                  <li>
                    Identifier et réfléchir sur les croyances et les schémas relationnels
                    dysfonctionnels
                  </li>
                  <li>
                    Reconnaitre ses émotions et ses besoins, plus particulièrement dans la dynamique
                    du couple
                  </li>
                  <li>
                    Développer des manières d’agir et de communiquer dans le respect de soi et des
                    autres
                  </li>
                </ul>

                <hr class="text-nude bg-nude w-3/4 mb-5 mb-9 mt-7" style="height:2px !important" />

                <h8 class="call_to_action">
                  Groupe de rencontre pour auteurs de violences conjugales
                </h8>

                <p>A venir</p>
              </div>
            </SectionWithTitle>
          </div>
        </div>
      {/if}

      {#if selected_section === "proches"}
        <div id="proches" class="pt-5">
          <div in:fly="{{ y: 50, duration: 3000 }}">
            <SectionWithTitle title="Aide pour les proches">
              <p>
                Un de vos proches a subi un acte délictueux et vous vous sentez en
                <span class="markup-text">souffrance</span>
                et/ou en
                <span class="markup-text">questionnement</span> par rapport à cette situation?
              </p>
              <p>Nous vous proposons :</p>

              <ul>
                <li>Un soutien</li>
                <li>Un accompagnement psychologique individuel</li>
                <li>
                  Une aide et un accompagnement dans vos démarches sociales, administratives et
                  juridiques
                </li>
                <li class="text-dark-blue italic font-gyst">Un accompagnement collectif</li>
              </ul>

              <div class="">
                <!-- WEB -->
                <img
                  src="$lib/assets/img/SVG/ORS_illustrations_Auteur.es - Aide proches - Web.svg"
                  class="hidden md:block my-6"
                  alt="ORS logo"
                />

                <!-- DESKTOP -->
                <img
                  src="$lib/assets/img/SVG/ORS_illustrations_Auteur.es - Aide proches - Web.svg"
                  class="hidden sm:block md:hidden my-6"
                  alt="ORS logo"
                />

                <!-- MOBILE -->
                <div class="relative my-8 overflow-hidden md:hidden">
                  <img
                    src="$lib/assets/img/SVG/ORS_illustrations_Auteur.es - Aide proches - Mobile.svg"
                    alt="Illustration of psychological support for victims"
                    class="sm:hidden h-full w-full object-cover transition-transform duration-300 ease-in-out scale-140"
                    style="padding-top:30px"
                  />
                </div>
              </div>
            </SectionWithTitle>
          </div>
        </div>
      {/if}
    </div>

    <div class="flex flex-col justify-center items-center pt-10">
      <ContactButton />
    </div>
  </div>
</div>

<style>
  ul {
    list-style-type: disc;
    font-weight: 300;
  }

  .zoomed {
    transform: scale(1.3); /* Adjust scale as needed */
    overflow: hidden; /* Hide any overflow from scaling */
  }

  @media (min-width: 550px) {
    .zoomed {
      transform: scale(1.15); /* Adjust scale as needed */
    }
  }

  @media (min-width: 900px) {
    .zoomed {
      transform: scale(0.7); /* Adjust scale as needed */
    }
  }
</style>
