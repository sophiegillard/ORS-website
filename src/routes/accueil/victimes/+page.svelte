<script>
  import { onMount } from "svelte"
  import SectionWithTitle from "$lib/components/layout/SectionWithTitle.svelte"
  import SectionWithTitleMain from "$lib/components/layout/SectionWithTitleMain.svelte"
  import ContactButton from "$lib/components/button/ContactButton.svelte"
  import SecondaryLinkButton from "$lib/components/button/SecondaryLinkButton.svelte"
  import { fly } from "svelte/transition"

  let topValue = 90 // Default value for SSR
  let page_width = 0

  $: if (page_width >= 590 && page_width < 977) {
    topValue = 50
  } else {
    topValue = 90
  }
  let selected_section = "collectif"

  function handleGoToSection(section_id) {
    selected_section = section_id
    const section = document.getElementById("section_accompagnement")
    if (section) {
      const offsetTop = section.offsetTop // Get the top position relative to the document
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      })
    }
  }
</script>

<svelte:head>
  <title>Victimes</title>
  <meta name="victimes" content="sociale" />
</svelte:head>

<div class="text-column" bind:offsetWidth="{page_width}">
  <div>
    <!-- MOBILE -->
    <SectionWithTitleMain
      title="Aide aux victimes d’infractions pénales et à leurs proches"
      custom_class="font-epilogue block sm:hidden"
      top="{50}"
    >
      <div class="flex justify-center">
        <img
          src="$lib/assets/img/illustration/victime_illu_mains.png"
          alt="illustration"
          class="pb-6 w-4/5 sm:hidden"
          style="max-width: 250px;"
        />
      </div>
      <img
        src="$lib/assets/img/illustration/victime_illu_mains.png"
        alt="illustration"
        class="float-right relative hidden sm:block w-2/5 bottom-5"
      />
      <div>
        <ul class="flex flex-col items-center">
          <li>
            Vous êtes victime ou vous êtes <span class="markup-text">proche</span> d'une personne
            victime de faits pouvant être qualifiés
            <span class="markup-text">d'infraction pénale</span> (agression physique, verbale, violence
            sexuelle, harcèlement, cambriolage, hold-up...)
          </li>
          <li>
            Vous vivez une <span class="markup-text">situation de violence conjugale</span>, de
            conflit de voisinage,...
          </li>
          <li>
            Vous avez vécu un <span class="markup-text">événement de grande ampleur</span> (attentat,
            agression collective,...)
          </li>
          <li>
            Vous avez <span class="markup-text">perdu un proche</span> suite à un accident de la route,
            un suicide...
          </li>
        </ul>

        <p class="py-5 sm:w-2/3 md:w-full">
          Que les faits soient <span class="markup-text">actuels</span> ou
          <span class="markup-text">passés</span>
          ou qu'une <span class="markup-text">procédure judiciaire</span> soit en cours ou non.
        </p>

        <p>Nous proposons :</p>
        <div class="flex flex-col items-center sm:items-start">
          <div
            class="flex flex-col sm:hidden items-center lg:flex-row gap-6 pt-3 pb-6"
            style="max-width: 70%;"
          >
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
      first_line_title="Aide aux victimes d’infractions pénales"
      title="et à leurs proches"
      custom_class="top-custom hidden sm:block"
      top="{topValue}"
    >
      <div class="flex justify-center">
        <img
          src="$lib/assets/img/illustration/victime_illu_mains.png"
          alt="illustration"
          class="pb-6 w-4/5 sm:hidden"
          style="max-width: 300px;"
        />
      </div>
      <img
        src="$lib/assets/img/illustration/victime_illu_mains.png"
        alt="illustration"
        class="float-right relative hidden sm:block w-1/3 bottom-5"
      />
      <div>
        <ul class="flex flex-col">
          <li>
            Vous êtes victime ou vous êtes <span class="markup-text">proche</span> d'une personne
            victime de faits pouvant être qualifiés
            <span class="markup-text">d'infraction pénale</span> (agression physique, verbale, violence
            sexuelle, harcèlement, cambriolage, hold-up...)
          </li>
          <li>
            Vous vivez une <span class="markup-text">situation de violence conjugale</span>, de
            conflit de voisinage,...
          </li>
          <li>
            Vous avez vécu un <span class="markup-text">événement de grande ampleur</span> (attentat,
            agression collective,...)
          </li>
          <li>
            Vous avez <span class="markup-text">perdu un proche</span> suite à un accident de la route,
            un suicide...
          </li>
        </ul>

        <p class="py-5 sm:w-2/3 md:w-full">
          Que les faits soient <span class="markup-text">actuels</span> ou
          <span class="markup-text">passés</span>
          ou qu'une <span class="markup-text">procédure judiciaire</span> soit en cours ou non.
        </p>

        <p>Nous proposons :</p>
        <div class="flex flex-col lg:block items-center sm:items-start lg:pb-10">
          <div class="sm:flex flex-col hidden lg:hidden gap-6 pt-3 pb-6 w-4/5 md:w-3/5">
            <div class="grid grid-cols-5 gap-6">
              <!-- First Column (Wider) -->
              <div class="col-span-3 flex">
                <SecondaryLinkButton
                  custom_class=" flex-grow"
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

          <div
            class="flex flex-col sm:hidden lg:flex items-center lg:flex-row gap-6 pt-3 pb-6 min-w-full items-stretch"
          >
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

    <div id="section_accompagnement">
      {#if selected_section === "psychologique"}
        <div id="psychologique" class="pt-5">
          <div in:fly="{{ y: 50, duration: 3000 }}">
            <SectionWithTitle title="Accompagnement psychologique" width="{220}">
              <div>
                <ul>
                  <li>Assimilation du traumatisme et de ses répercussions</li>
                  <li>Soutien dans un processus de reconstruction</li>
                  <li>Soutien durant la procédure pénale</li>
                  <li>Mise en évidence des besoins et des ressources</li>
                  <li>...</li>
                </ul>
              </div>

              <div class="">
                <!-- WEB -->
                <img
                  src="$lib/assets/img/SVG/ORS_illustrations_Victimes - Acc. psy - Web.svg"
                  class=" hidden lg:block"
                  alt="ORS logo"
                />

                <!-- DESKTOP -->
                <img
                  src="$lib/assets/img/SVG/ORS_illustrations_Victimes - Acc. psy - Web.svg"
                  class=" hidden sm:block lg:hidden"
                  alt="ORS logo"
                />

                <!-- MOBILE -->
                <div class="relative py-4 overflow-hidden sm:hidden">
                  <img
                    src="$lib/assets/img/SVG/ORS_illustrations_Victimes - Acc. psy - Mobile.svg"
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
                  <li>Accueil - Ecoute - Informations</li>
                  <li>Accompagnement dans les démarches administratives, sociales, juridiques</li>
                  <li>Aide pour la procédure d’indemnisation</li>
                  <li>...</li>
                </ul>
              </div>
              <div class="">
                <!-- WEB -->
                <img
                  src="$lib/assets/img/SVG/ORS_illustrations_Victimes - Aide sociale - Web.svg"
                  class=" hidden lg:block"
                  alt="ORS logo"
                />

                <!-- DESKTOP -->
                <img
                  src="$lib/assets/img/SVG/ORS_illustrations_Victimes - Aide sociale - Web.svg"
                  class=" hidden md:block lg:hidden"
                  alt="ORS logo"
                />

                <!-- MOBILE -->
                <div class="relative py-4 overflow-hidden md:hidden">
                  <img
                    src="$lib/assets/img/SVG/ORS_illustrations_Victimes - Aide sociale - Mobile.svg"
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
              src="$lib/assets/img/illustration/victime_illu_visage.png"
              alt="illustration"
              class="float-right relative hidden sm:block md:hidden w-2/5 bottom-5"
              style="transform: rotate(-20deg);"
            />

            <SectionWithTitle title="Accompagnement collectif">
              <p>
                Nous vous proposons des <span class="markup-text">interventions en groupes</span>
                : groupe de parole thérapeutique, intervention précoce lors d'évènement collectif (defusing/debriefing
                psychologique).
              </p>

              <div class="flex flex-col items-center pb-3">
                <img
                  src="$lib/assets/img/illustration/victime_illu_visage.png"
                  alt="illustration"
                  class="sm:hidden w-3/4"
                />
              </div>

              <div>
                <h8>Groupe de parole</h8>
                <p class="projet">En projet</p>
                <!-- <hr style="height:2px;border-width:0;color:gray;background-color:gray">  -->
                <hr class="text-nude bg-nude w-3/4 mb-5" style="height:2px !important" />
                <h8> Intervention en cas d’évènements traumatiques collectifs </h8>
                <!-- IMAGE DESKTOP -->
                <img
                  src="$lib/assets/img/illustration/victime_illu_visage.png"
                  alt="illustration"
                  class="float-right relative hidden md:block w-2/5 bottom-5"
                  style="transform: rotate(-20deg);"
                />
                <p class="blue_title">
                  Defusing et débriefing psychologique immédiatement après un évènement
                </p>
                <ul>
                  <li>Verbaliser immédiatement les émotions en lien avec l'événement</li>
                  <li>Mise en évidence des besoins de chacun</li>
                  <li>Mutualiser les ressources</li>
                  <li>Eclaircir le processus de deuil</li>
                </ul>

                <p class="blue_title">
                  Atelier de parole pour victimes d’un évènement de grande ampleur
                </p>
                <ul>
                  <li>Permettre l'échange autour d'un vécu commun</li>
                  <li>Libérer la parole par rapport aux conséquences de l'événement</li>
                  <li>Assimiler le traumatisme et de ses répercussions</li>
                  <li>Mutualiser les ressources</li>
                  <li>Soutenir le processus de reconstruction</li>
                  <li>Travailler sur le processus de deuil</li>
                </ul>
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
                Un de vos proches a subi un acte délictueux et vous vous sentez en souffrance et/ou
                en questionnement par rapport à cette situation?
              </p>
              <p>Nous vous proposons :</p>
              <ul>
                <li>Un soutien</li>
                <li>Un accompagnement psychologique individuel</li>
                <li>
                  Une aide et un accompagnement dans vos démarches sociales, administratives et
                  juridiques
                </li>
                <li>Un accompagnement collectif (en projet)</li>
                <li>...</li>
              </ul>

              <div class="">
                <!-- WEB -->
                <img
                  src="$lib/assets/img/SVG/ORS_illustrations_Victimes - Aide proches - Web.svg"
                  class="hidden md:block my-6"
                  alt="ORS logo"
                />

                <!-- DESKTOP -->
                <img
                  src="$lib/assets/img/SVG/ORS_illustrations_Victimes - Aide proches - Web.svg"
                  class="hidden sm:block md:hidden my-6"
                  alt="ORS logo"
                />

                <!-- MOBILE -->
                <div class="relative my-8 overflow-hidden md:hidden">
                  <img
                    src="$lib/assets/img/SVG/ORS_illustrations_Victimes - Aide proches - Mobile.svg"
                    alt="Illustration of psychological support for victims"
                    class="sm:hidden h-full w-full object-cover transition-transform duration-300 ease-in-out scale-140"
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
    transform: scale(1.2); /* Adjust scale as needed */
    overflow: hidden; /* Hide any overflow from scaling */
    height: fit-content;
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
