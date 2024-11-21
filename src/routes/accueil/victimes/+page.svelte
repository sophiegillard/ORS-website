<script>
  import SectionWithTitle from "$lib/components/layout/SectionWithTitle.svelte"
  import ContactButton from "$lib/components/button/ContactButton.svelte"
  import SecondaryLinkButton from "$lib/components/button/SecondaryLinkButton.svelte"
  import Event from "$lib/components/Event.svelte"
</script>

<svelte:head>
  <title>Victimes</title>
  <meta name="victimes" content="victimes" />
</svelte:head>

<div class="text-column">
  <div>
    <SectionWithTitle
      first_line_title="Aide aux victimes d’infractions pénales"
      title="et à leurs proches"
      width="{220}"
      custom_class="font-epilogue"
      line_img_src="{'../src/lib/assets/img/lines/trace_quiSommesNous_1.png'}"
    >
      <div>
        <ul>
          <img
            src="$lib/assets/img/illustration/victime_illu_mains.png"
            alt="illustration"
            class="float-right relative z-0 bottom-28 hidden md:block"
            style="width: 26%;"
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
        <p>
          Que les faits soient <span class="markup-text">actuels</span> ou
          <span class="markup-text">passés</span>
          ou qu'une <span class="markup-text">procédure judiciaire</span> soit en cours ou non.
        </p>
        <p>Nous proposons :</p>
        <div class="flex flex-row gap-6 pt-3 pb-6">
          <SecondaryLinkButton custom_class="grow">
            <p class="text-center">Accompagnement <span class="markup-text">psychologique</span></p>
          </SecondaryLinkButton>
          <SecondaryLinkButton custom_class="grow">
            <p class="text-center">Aide <span class="markup-text">sociale</span></p>
          </SecondaryLinkButton>
          <SecondaryLinkButton custom_class="grow">
            <p class="text-center">Accompagnement <span class="markup-text">collectif</span></p>
          </SecondaryLinkButton>
          <SecondaryLinkButton custom_class="grow">
            <p class="text-center">Aide pour les <span class="markup-text">proches</span></p>
          </SecondaryLinkButton>
        </div>
      </div>
    </SectionWithTitle>

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
      <div class="parent grid grid-cols-4 grid-rows-3 gap-20">
        <div class="div1 bg-blue flex justify-center items-end relative">
          <p>Je n'ose plus sortir de chez moi</p>
          <img src="$lib/assets/img/lines/victime_1.png" alt="illustration" class="absolute" />
        </div>
        <div class="div2 bg-blue relative">
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
        <div class="div4 bg-blue">
          <p>Je sursaute au moindre bruit</p>
          <img src="$lib/assets/img/lines/victime_4.png" alt="illustration" class="absolute" />
        </div>
        <div class="div5 bg-blue">
          <p>Je suis irritable</p>
          <img src="$lib/assets/img/lines/victime_5.png" alt="illustration" class="absolute" />
        </div>
        <div class="div6 bg-blue">
          <p>J'ai peur de mon/ma partenaire</p>
          <img src="$lib/assets/img/lines/victime_6.png" alt="illustration" class="absolute" />
        </div>
        <div class="div7 bg-blue">
          <p>Je fais des cauchemards</p>
          <img src="$lib/assets/img/lines/victime_7.png" alt="illustration" class="absolute" />
        </div>
        <div class="div8 bg-blue">
          <p>Je suis angoissé.e</p>
          <img src="$lib/assets/img/lines/victime_8.png" alt="illustration" class="absolute" />
        </div>
        <div class="div9 bg-blue">
          <p>Je revis constamment l'évènement</p>
          <img src="$lib/assets/img/lines/victime_9.png" alt="illustration" class="absolute" />
        </div>
      </div></SectionWithTitle
    >

    <SectionWithTitle title="Accompagnement social">
      <div>
        <ul>
          <li>Accueil - Ecoute - Informations</li>
          <li>Accompagnement dans les démarches administratives, sociales, juridiques</li>
          <li>Aide pour la procédure d’indemnisation</li>
        </ul>
      </div>
    </SectionWithTitle>

    <SectionWithTitle title="Groupe de parole">
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
    </SectionWithTitle>

    <SectionWithTitle title="Aide pour les proches">
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
      </ul>
    </SectionWithTitle>

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

  h7 {
    padding-top: 30px;
  }
  .clear-left::after {
    content: "";
    display: table;
    clear: right;
  }

  .separator {
    position: absolute;
    width: auto;
  }

  .collab-section p:nth-child(odd) {
    text-align: right;
  }

  .collab-section p:nth-child(even) {
    text-align: left;
  }

  .parent div {
    text-align: center;
  }

  .div1 {
    grid-column: 1 / 2;
    grid-row: 1 / 2;
  }
  .div2 {
    grid-column: 2 / 3;
    grid-row: 1 / 2;
  }
  .div3 {
    grid-column: 3 / 4;
    grid-row: 1 / 2;
  }
  .div4 {
    grid-column: 4 / 5;
    grid-row: 1 / 2;
  }
  .div5 {
    grid-column: 1 / 2;
    grid-row: 2 / 3;
  }
  .div6 {
    grid-column: 2 / 3;
    grid-row: 2 / 3;
  }
  .div7 {
    grid-column: 3 / 4;
    grid-row: 2 / 3;
  }
  .div8 {
    grid-column: 4 / 5;
    grid-row: 2 / 3;
  }
  .div9 {
    grid-column: 1 / 2;
    grid-row: 3 / 4;
  }
</style>
