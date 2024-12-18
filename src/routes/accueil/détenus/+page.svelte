<script>
  import { onMount } from "svelte"

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

  onMount(() => {
    const params = new URLSearchParams(window.location.search)
    selected_section = params.get("selected_section")
    if (selected_section) {
      handleGoToSection(selected_section)
    }
  })

  let selected_section = ""

  function handleGoToSection(section_id) {
    selected_section = section_id

    // Defer the scroll action to allow the DOM to be fully ready
    setTimeout(() => {
      const section = document.getElementById(section_id)
      if (section) {
        const offsetTop = section.offsetTop // Get the top position relative to the document
        window.scrollTo({
          top: offsetTop + 40, // Add extra space to offset
          behavior: "smooth",
        })
      }
    }, 100) // Delay the scroll by 100ms (adjust as needed)
  }
</script>

<svelte:head>
  <title>ORS Espace Libre | Détenu.e.s</title>
  <meta name="détenus" content="détenus" />
</svelte:head>

<div class="text-column" bind:offsetWidth="{page_width}">
  <div>
    <!-- MOBILE -->
    <SectionWithTitleMain
      first_line_title="Aide aux personnes détenues et"
      title="et à leurs proches"
      custom_class="font-epilogue block sm:hidden"
      top="{topValueMobile}"
    >
      <div class="flex justify-center">
        <img
          src="$lib/assets/img/SVG/ORS_illustrations_Aides aux detenus.svg"
          alt="illustration"
          class="pb-3 sm:hidden"
          style="max-width: 250px;"
        />
      </div>
      <div>
        <ul class="flex flex-col items-center pb-4">
          <li>
            Vous êtes prévenu, condamné, interné au sein de la prison de <span class="markup-text"
              >Jamioulx</span
            >,
          </li>
          <li>
            Vous exécutez une peine au sein d'une autre prison et vous souhaitez vous <span
              class="markup-text">réinsérer</span
            > dans l'arrondissement de Charleroi,
          </li>
          <li>
            Un de vos proches est <span class="markup-text">incarcéré</span> au sein d'un établissement
            pénitentiaire ou de défense sociale,
          </li>
        </ul>

        <p>Nous proposons :</p>
        <div class="flex flex-col items-center py-6">
          <div class=" flex flex-col items-center justify-center sm:hidden gap-6 w-3/4">
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

            <SecondaryLinkButton custom_class="grow" on:click="{() => handleGoToSection('adform')}">
              <p class="text-center"><span class="markup-text">ADForm</span> - Aide Formations</p>
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

            <SecondaryLinkButton
              custom_class="grow"
              on:click="{() => handleGoToSection('visiteurs')}"
            >
              <p class="text-center"><span class="markup-text">Visiteur.euse</span> de prison</p>
            </SecondaryLinkButton>
          </div>
        </div>
      </div>
    </SectionWithTitleMain>

    <img
      src="$lib/assets/img/SVG/ORS_illustrations_Aides aux detenus.svg"
      alt="illustration"
      class="float-right hidden sm:block relative m-5 w-1/3 lg:w-1/3"
    />
    <!-- DESKTOP -->
    <SectionWithTitleMain
      first_line_title="Aide aux personnes détenues et"
      title="et à leurs proches"
      custom_class="top-custom hidden sm:block"
      top="{topValue}"
    >
      <div class="flex justify-center"></div>

      <div>
        <ul class="flex flex-col items-center">
          <li>
            Vous êtes prévenu, condamné, interné au sein de la prison de <span class="markup-text"
              >Jamioulx</span
            >,
          </li>
          <li>
            Vous exécutez une peine au sein d'une autre prison et vous souhaitez vous <span
              class="markup-text">réinsérer</span
            > dans l'arrondissement de Charleroi,
          </li>
          <li>
            Un de vos proches est <span class="markup-text">incarcéré</span> au sein d'un établissement
            pénitentiaire ou de défense sociale,
          </li>
        </ul>

        <p>Nous proposons :</p>
        <div class="flex flex-col items-center sm:items-start pb-20">
          <div class="sm:flex flex-col hidden lg:flex-row gap-6 pt-3 pb-6 w-3/4 md:w-11/12">
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
              <div class="col-span-2 flex">
                <SecondaryLinkButton
                  custom_class=" flex-grow"
                  on:click="{() => handleGoToSection('adform')}"
                >
                  <p class="text-center">
                    <span class="markup-text">ADForm</span> - Aide Formations
                  </p>
                </SecondaryLinkButton>
              </div>

              <!-- Third Row, Second Column -->
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

              <!-- Third Row, First Column -->
              <div class="col-span-2 flex">
                <SecondaryLinkButton
                  custom_class=" flex-grow"
                  on:click="{() => handleGoToSection('proches')}"
                >
                  <p class="text-center">Aide pour les <span class="markup-text">proches</span></p>
                </SecondaryLinkButton>
              </div>

              <!-- Third Row, Second Column -->
              <div class="col-span-3 flex">
                <SecondaryLinkButton
                  custom_class="grow"
                  on:click="{() => handleGoToSection('visiteurs')}"
                >
                  <p class="text-center">
                    <span class="markup-text">Visiteur.euse</span> de prison
                  </p>
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
                  <li>Limiter les impacts psychologiques de la détention</li>
                  <li>Aider à "mieux-vivre" la période de détention</li>
                  <li>Favoriser la responsabilisation et la gestion de soi</li>
                  <li>Soutenir un processus de changement</li>
                  <li>Comprendre et gérer ses émotions</li>
                  <li>
                    Relais/orientation vers des services adéquats intra ou extra-muros selon les
                    situations
                  </li>
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
                  src="$lib/assets/img/SVG/ORS_illustrations_Detenus - Acc. psy - Tablette.svg"
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
                  <li>Accueil - écoute - Soutien</li>
                  <li>
                    Informations (organisation de la prison, services accessibles, procédures
                    judiciaires...)
                  </li>
                  <li>
                    Accompagner dans les démarches sociales, administratives, juridiques... pour
                    atténuer les conséquences de la détention et en vue de préparer la libération
                  </li>
                  <li>
                    Construire et préparer un projet de réinsertion (en alternative à la détention
                    préventive ou en vue d'une libération anticipée)
                  </li>
                  <li>Mettre en lien avec les services extérieurs</li>
                  <li>Favoriser le maintien des relations familiales</li>
                  <li>...</li>
                </ul>
              </div>
              <div class="">
                <!-- WEB -->
                <img
                  src="$lib/assets/img/SVG/ORS_illustrations_Detenus - Aide sociale - Web.svg"
                  class=" hidden lg:block"
                  alt="ORS logo"
                />

                <!-- DESKTOP -->
                <img
                  src="$lib/assets/img/SVG/ORS_illustrations_Detenus - Aide sociale - Tablette.svg"
                  class=" hidden sm:block lg:hidden"
                  alt="ORS logo"
                />

                <!-- MOBILE -->
                <div class="relative py-4 overflow-hidden md:hidden">
                  <img
                    src="$lib/assets/img/SVG/ORS_illustrations_Detenus - Aide sociale - Mobile.svg"
                    alt="Illustration of psychological support for victims"
                    class="sm:hidden h-full w-full object-cover transition-transform duration-300 ease-in-out scale-140"
                  />
                </div>
              </div>
            </SectionWithTitle>
          </div>
        </div>
      {/if}

      {#if selected_section === "adform"}
        <div id="adform" class="pt-5">
          <div in:fly="{{ y: 50, duration: 3000 }}">
            <SectionWithTitle title="ADForm - Aide Formations">
              <div>
                <p>
                  Notre équipe compte un référent formation au sein de la prison de Jamioulx pour
                  vous aider dans votre parcours de formation.
                </p>
                <ul>
                  <li>
                    Informer sur les formations disponibles durant et après la détention, y compris
                    l’enseignement à distance (à Jamioulx ou dans une autre prison, en cas de
                    transfert)
                  </li>
                  <li>Suivi et accompagnement tout au long de la formation</li>
                  <li>Construire un projet professionnel</li>
                  <li>Renseigner sur les formations extérieures (en vue d’une libération)</li>
                </ul>
              </div>
              <div class="">
                <!-- WEB -->
                <img
                  src="$lib/assets/img/SVG/ORS_illustrations_Detenus - AD Form - Web.svg"
                  class=" hidden lg:block"
                  alt="ORS logo"
                />

                <!-- DESKTOP -->
                <img
                  src="$lib/assets/img/SVG/ORS_illustrations_Detenus - AD Form - Tablette.svg"
                  class=" hidden sm:block lg:hidden"
                  alt="ORS logo"
                />

                <!-- MOBILE -->
                <div class="relative py-4 overflow-hidden md:hidden">
                  <img
                    src="$lib/assets/img/SVG/ORS_illustrations_Detenus - AD Form - Mobile.svg"
                    alt="Illustration of psychological support for victims"
                    class="sm:hidden pt-10 h-full w-full object-cover transition-transform duration-300 ease-in-out scale-140"
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

                <h8>Plate-forme d’informations</h8>
                <ul>
                  <li>
                    Rencontre au sein de la prison de Jamioulx, tous les deux mois, qui rassemble
                    des représentants de services extérieurs susceptibles de vous aider dans votre
                    réinsertion
                  </li>
                  <li>
                    Echanges avec les services pour connaitre les aides dont vous pourrez bénéficier
                  </li>
                  <li>
                    Recevoir une information globale sur les démarches à accomplir lors de votre
                    libération
                  </li>
                </ul>

                <hr class="text-nude bg-nude w-3/4 mb-5 mb-9 mt-7" style="height:2px !important" />

                <h8>Brochure d’informations</h8>
                <p>
                  Brochure distribuée à tous les entrants de la prison de Jamioulx, réalisée en
                  collaboration avec la prison et reprenant une série d’informations utiles sur :
                </p>
                <ul>
                  <li>Le fonctionnement de la prison</li>
                  <li>Les procédures judiciaires</li>
                  <li>
                    Les démarches et services d’aide durant la détention et/ou en vue de préparer la
                    réinsertion
                  </li>
                </ul>

                <hr class="text-nude bg-nude w-3/4 mb-5 mb-9 mt-7" style="height:2px !important" />
                <h8>Groupe de rencontre pour les proches</h8>

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
                <li
                  class="text-dark-blue italic font-gyst cursor-pointer"
                  on:click="{() => handleGoToSection('collectif')}"
                  on:keydown="{(event) => {
                    if (event.key === 'Enter') handleGoToSection('collectif')
                  }}"
                  tabindex="0"
                >
                  Un accompagnement collectif
                </li>
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
                  src="$lib/assets/img/SVG/ORS_illustrations_Detenus - Aide proche - Tablette.svg"
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

      {#if selected_section === "visiteurs"}
        <div id="visiteurs" class="pt-5">
          <div in:fly="{{ y: 50, duration: 3000 }}">
            <SectionWithTitle title="Soutien par des visiteurs de prison">
              <p>
                Notre service compte, au sein de la prison de Jamioulx, une <span
                  class="markup-text">équipe de visiteur·euse·s bénévoles</span
                >, citoyens non professionnels, indépendants du monde judiciaire et de la prison,
                qui font le choix de vous consacrer du temps et qui sont sensibles à votre
                situation.
              </p>
              <p>
                Le rôle du visiteur est de vous soutenir, de se mettre à votre écoute et de
                <span class="markup-text">dialoguer</span> avec vous dans un climat de
                <span class="markup-text">confiance</span>
                réciproque. Il n'effectue aucune démarche mais peut aborder avec vous tous les
                sujets qui vous préoccupent. Il représente un
                <span class="markup-text">lien neutre</span>
                avec l'extérieur et peut vous aider à <span class="markup-text">rompre</span> avec l'isolement.
              </p>
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
