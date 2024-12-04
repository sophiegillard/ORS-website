<script>
  import SectionWithTitle from "$lib/components/layout/SectionWithTitle.svelte"
  import ContactButton from "$lib/components/button/ContactButton.svelte"
  import SecondaryLinkButton from "$lib/components/button/SecondaryLinkButton.svelte"
  import { fly } from "svelte/transition"; 


  let selected_section = "";

function handleGoToSection(section_id) {
  selected_section = section_id;  
  const section = document.getElementById("section_accompagnement");
  if (section) {
    const offsetTop = section.offsetTop; // Get the top position relative to the document
    window.scrollTo({
      top: offsetTop,
      behavior: "smooth"
    });
  }
}

</script>

<svelte:head>
  <title>Victimes</title>
  <meta name="victimes" content="victimes" />
</svelte:head>

<div class="text-column">
  <div>
    <SectionWithTitle
      title="Aide aux victimes d’infractions pénales et à leurs proches"
      width="{220}"
      custom_class="font-epilogue"
      line_img_src="{'../src/lib/assets/img/lines/trace_quiSommesNous_1.png'}"
    >
      <div>
        <ul class="flex flex-col items-center">
          <img
            src="$lib/assets/img/illustration/victime_illu_mains.png"
            alt="illustration"
            class="float-right relative z-0 bottom-28 hidden md:block"
            style="width: 26%;"
          />
          <img
          src="$lib/assets/img/illustration/victime_illu_mains.png"
          alt="illustration"
          class="pb-6 w-3/4"
          
        />
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

        <p class="py-5">
          Que les faits soient <span class="markup-text">actuels</span> ou
          <span class="markup-text">passés</span>
          ou qu'une <span class="markup-text">procédure judiciaire</span> soit en cours ou non.
        </p>

        <p>Nous proposons :</p>
        <div class="flex flex-col  items-center  ">
          <div class="flex flex-col  items-center  lg:flex-row gap-6 pt-3 pb-6" style="max-width: 70%;">
          
            <SecondaryLinkButton custom_class="grow"
            on:click={()=> handleGoToSection("psychologique")}
            >
            <p class="text-center">Accompagnement <span class="markup-text">psychologique</span></p>
          </SecondaryLinkButton>

          <SecondaryLinkButton custom_class="grow"
          on:click={()=> handleGoToSection("sociale")}
          >
           <p class="text-center">Aide <span class="markup-text">sociale</span></p>
          </SecondaryLinkButton>

          <SecondaryLinkButton custom_class="grow"
          on:click={()=> handleGoToSection("collectif")}
          >
           <p class="text-center">Accompagnement <span class="markup-text">collectif</span></p>
          </SecondaryLinkButton>

          <SecondaryLinkButton custom_class="grow"
          on:click={()=> handleGoToSection("proches")}
          >
           <p class="text-center">Aide pour les <span class="markup-text">proches</span></p>
          </SecondaryLinkButton>
        </div>
        </div>
      </div>
    </SectionWithTitle>

    
    <div id="section_accompagnement">
    <div id="psychologique" class="pt-5">
      {#if selected_section === "psychologique"}
        <div  in:fly="{{ y: 50, duration: 3000 }}">
          <SectionWithTitle
            title="Accompagnement psychologique"
            width="{220}"
            line_img_src="{'../src/lib/assets/img/lines/trace_quiSommesNous_1.png'}"
          >
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
              <img
              src="$lib/assets/img/SVG/ORS_illustrations_Victimes - Acc. psy - Web.svg"
              class=" hidden md:block"
                alt="ORS logo"
              />
            
              <div class="relative py-4 overflow-hidden md:hidden">
                <img
                src="$lib/assets/img/SVG/ORS_illustrations_Victimes - Acc. psy - Mobile.svg"
                  alt="Illustration of psychological support for victims"
                  class="h-full w-full object-cover transition-transform duration-300 ease-in-out scale-140"
                />
              </div>
        
            </div>

        
          
            <!-- <div class="parent grid grid-cols-4 grid-rows-3 gap-20">
              
              <div class="div1 bg-blue">
                <p>Je revis constamment l'évènement</p>
                <img src="$lib/assets/img/lines/victime_9.png" alt="illustration" class="absolute" />
              </div>

              <div class="div2 bg-blue">
                <p>Je suis angoissé.e</p>
                <img src="$lib/assets/img/lines/victime_8.png" alt="illustration" class="absolute" />
              </div>

              <div class="div3 bg-blue flex justify-center items-end relative">
                <p>Je n'ose plus sortir de chez moi</p>
                <img src="$lib/assets/img/lines/victime_1.png" alt="illustration" class="absolute" />
              </div>

              <div class="div4 bg-blue">
                <p>J'ai peur de mon/ma partenaire</p>
                <img src="$lib/assets/img/lines/victime_6.png" alt="illustration" class="absolute" />
              </div>
              
              <div class="div5 bg-blue">
                <p>Je sursaute au moindre bruit</p>
                <img src="$lib/assets/img/lines/victime_4.png" alt="illustration" class="absolute" />
              </div>


              <div class="div4 bg-blue relative">
                <p>Je suis triste constamment</p>
                <img
                  src="$lib/assets/img/lines/victime_2.png"
                  alt="illustration"
                  class="absolute top-0 right-0"
                />
              </div>

            
              <div class="div3 bg-blue">
                <p>Je ne dors plus</p>
                <img src="$lib/assets/img/lines/victime_3.png" alt="illustration" class="absolute" />
              </div>
            
              <div class="div5 bg-blue">
                <p>Je suis irritable</p>
                <img src="$lib/assets/img/lines/victime_5.png" alt="illustration" class="absolute" />
              </div>
            
              <div class="div7 bg-blue">
                <p>Je fais des cauchemards</p>
                <img src="$lib/assets/img/lines/victime_7.png" alt="illustration" class="absolute" />
              </div> 
            
              
            </div> -->
            </SectionWithTitle>
        </div>
      {/if}
    </div>

    <div id="sociale" class="pt-5">
      {#if selected_section === "sociale"}
        <div  in:fly="{{ y: 50, duration: 3000 }}">
        <SectionWithTitle title="Aide social"
          >
      <div>
    
     
        <ul>
          <li>Accueil - Ecoute - Informations</li>
          <li>Accompagnement dans les démarches administratives, sociales, juridiques</li>
          <li>Aide pour la procédure d’indemnisation</li>
          <li>...</li>
        </ul>
      </div>
      <div class="">
        <img
        src="$lib/assets/img/SVG/ORS_illustrations_Victimes - Aide sociale - Web.svg"
        class=" hidden md:block"
          alt="ORS logo"
        />
       
        <div class="relative py-4 overflow-hidden md:hidden">
          <img
          src="$lib/assets/img/SVG/ORS_illustrations_Victimes - Aide sociale - Mobile.svg"
            alt="Illustration of psychological support for victims"
            class="h-full w-full object-cover transition-transform duration-300 ease-in-out scale-140"
          />
        </div>
      </div>
    </SectionWithTitle>
      </div>
      {/if}
    </div>

 
    <div id="collectif" class="pt-5">
      {#if selected_section === "collectif"}
          <div  in:fly="{{ y: 50, duration: 3000 }}">
          <SectionWithTitle title="Accompagnement collectif"
          >
          
             <p>
              Nous vous proposons des <span class="markup-text">interventions en groupes</span>  
              : groupe de parole thérapeutique, intervention précoce lors d'évènement collectif (defusing/debriefing psychologique).
            </p>
            <div class="flex flex-col items-center pb-3">
              <img
                src="$lib/assets/img/illustration/victime_illu_visage.png"
                alt="illustration"
                class=" w-3/4"
              />
            </div>
            
            <div>
              <h8 >Groupe de parole</h8>
              <p class="projet">En projet</p>
              <!-- <hr style="height:2px;border-width:0;color:gray;background-color:gray">  -->
                <hr class="text-nude bg-nude w-3/4 mb-5" style="height:2px !important">
              <h8 class="call_to_action">
                Intervention en cas d’évènements traumatiques collectifs
              </h8>

              <p class="blue_title">Defusing et débriefing psychologique immédiatement après un évènement</p>
              <ul>
                <li>Verbaliser immédiatement les émotions en lien avec l'événement</li>
                <li>Mise en évidence des besoins de chacun</li>
                <li>Mutualiser les ressources</li>
                <li>Eclaircir le processus de deuil</li>
              </ul>

              <p class="blue_title">Atelier de parole pour victimes d’un évènement de grande ampleur</p>
              <ul>
                <li>Permettre l'échange autour d'un vécu commun</li>
                <li>Libérer la parole par rapport aux conséquences de l'événement</li>
                <li>Assimiler le traumatisme et de ses répercussions</li>
                <li>Mutualiser les ressources 
                </li>
                <li>Soutenir le processus de reconstruction</li>
                <li>Travailler sur le processus de deuil</li>
              </ul>       
            </div>
          </SectionWithTitle>
        </div>
      {/if}
    </div>

    <div id="proches" class="pt-5">
    {#if selected_section === "proches"}
         <div  in:fly="{{ y: 50, duration: 3000 }}">
      <SectionWithTitle title="Aide pour les proches"
      >
        <p>
          Un de vos proches a subi un acte délictueux et vous vous sentez en souffrance et/ou en
          questionnement par rapport à cette situation?
        </p>
        <p>Nous vous proposons :</p>
        <ul>
          <li>Un soutien</li>
          <li>Un accompagnement psychologique individuel</li>
          <li>
            Une aide et un accompagnement dans vos démarches sociales, administratives et juridiques
          </li>
          <li>...</li>

        </ul>

        <div class="">
          <img
          src="$lib/assets/img/SVG/ORS_illustrations_Victimes - Aide proches - Mobile.svg"
          class=" hidden md:block"
            alt="ORS logo"
          />
        
          <div class="relative py-4 overflow-hidden md:hidden">
            <img
            src="$lib/assets/img/SVG/ORS_illustrations_Victimes - Aide proches - Mobile.svg"
              alt="Illustration of psychological support for victims"
              class="h-full w-full object-cover transition-transform duration-300 ease-in-out scale-140"
            />
          </div>
        </div>
      </SectionWithTitle>
      </div>
    {/if}
    </div>
    </div>

    <!-- <SectionWithTitle title="Groupe de parole">
      <img
        src="$lib/assets/img/illustration/victime_illu_visage.png"
        alt="illustration"
        class="float-right top-28 hidden md:block w-1/3"
      />
      <p>
        Nous vous proposons des interventions en groupes : groupe de parole thérapeutique,
        intervention précoce lors d'évènement collectif (defusing/debriefing psychologique).
      </p>
      <div>
        <h7>Groupe de parole et de soutien</h7>
        <Event
          nom_evenement="Pour femmes victimes de violence conjugale"
          date="Tous les 15 jours"
          durée="2h"
        />
        <Event
          nom_evenement="Pour femmes victimes d'agression sexuelle"
          date="Tous les 15 jours"
          durée="2h"
          is_last="true"
          description="Le but est de favoriser la libération de la parole et les ressources des participantes par l'échange et l'utilisation d'outils thérapeutiques"
        />

        <h7>Intervention précoce</h7>

        <Event
          nom_evenement="Defusing et debriefing psychologique"
          is_last="true"
          is_detail="{false}"
          description="Verbalisation immédiate des émotions par un groupe ayant vécu un évènement commun"
        />
      </div>
    </SectionWithTitle> -->

    <div class="flex flex-col justify-center items-center pt-10">
      <ContactButton />
    </div>
  </div>
</div>

<style>
  ul {
    list-style-type: disc;
    font-weight: 300;
    padding-left: 30px;
  }

  .projet{
  font-family: Epilogue;
  font-size: 15px;

  line-height: 18px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  }
  </style>