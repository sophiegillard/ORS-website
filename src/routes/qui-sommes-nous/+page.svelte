<script>
  import SectionWithTitleMain from "$lib/components/layout/SectionWithTitleMain.svelte"
  import ContactButton from "$lib/components/button/ContactButton.svelte"

  let section_height
  let biggest_title
</script>

<svelte:head>
  <title>Qui sommes-nous</title>
  <meta name="qui-sommes-nous" content="Présentation de l'asbl" />
</svelte:head>

<div class="text-column lg:pt-14">
  <div>
    <SectionWithTitleMain title="Quelques mots d’histoire...">
      <p>
        Notre association est âgée de plus de <span class="markup-text">130 ans</span> et trouve son
        origine dans les « Comités de Patronage » dont le but était de porter secours aux personnes démunies
        et en détresse, en lien avec la Justice.
      </p>

      <p>
        La dénomination de l’asbl deviendra « Office de Réadaptation Sociale - ORS » dans les années
        <span class="markup-text">1960</span>. L’asbl va <span class="markup-text">préciser</span>
        son objet social et <span class="markup-text">diversifier</span> ses activités au fil du temps
        afin de s’adapter aux réalités sociales et aux cadres législatifs.
      </p>

      <p>
        En <span class="markup-text">1989</span> naît le secteur d’activités « Espace Libre », service
        d’aide aux justiciables de l’arrondissement judiciaire de Charleroi, qui sera agréé par la Communauté
        française en 1990.
      </p>

      <p>
        En <span class="markup-text">2005</span>, l’asbl prendra l’appellation de ce secteur pour se
        dénommer « ORS - Espace Libre ».
      </p>

      <img
        src="$lib/assets/img/illustration/illu_qui_sommes_nous.png"
        alt="illustration"
        class="float-right hidden sm:block relative m-5 w-1/3 lg:w-1/3"
      />

      <p>
        <span class="markup-text">Aujourd'hui</span>, le service est agréé et subsidié par la
        Fédération Wallonie Bruxelles - Direction Partenariat de l'Administration Générale des
        Maisons de Justice. Il bénéficie également d'un soutien financier de la Région wallonne, de
        la Ville de Charleroi et du Fonds Social Européen.
      </p>

      <div class="flex justify-center">
        <img
          src="$lib/assets/img/illustration/illu_qui_sommes_nous.png"
          alt="illustration"
          class="sm:hidden relative m-5 w-3/4 max-w-56"
        />
      </div>
    </SectionWithTitleMain>

    <SectionWithTitleMain title="Objectifs et valeurs">
      <p>
        De par ses missions, notre service <span class="markup-text">offre une aide</span> à toute personne
        confrontée à la justice, qu’elle soit victime ou auteur·e des faits.
      </p>

      <p>
        Accompagner les victimes et les auteur·e·s, c'est croire en une justice restauratrice, en
        une justice <span class="markup-text">constructive</span> et
        <span class="markup-text">intégrative</span>. C’est viser à recréer du lien pour tout un
        chacun, mais c’est aussi viser à restaurer l’appartenance à la communauté.
      </p>

      <p>
        Accompagner les victimes et les auteur·e·s, c’est aborder de manière
        <span class="markup-text">systémique</span>
        la problématique des violences, notamment dans le domaine intrafamilial, mais également à un
        niveau sociétal. C’est développer une <span class="markup-text">vision</span> et une
        <span class="markup-text">gestion globale</span>
        de cette problématique.
      </p>
      <p>
        Accompagner les auteur·e·s, c’est aussi <span class="markup-text">agir</span> sur de
        potentielles victimisations, c’est aussi
        <span class="markup-text">protéger</span> les victimes.
      </p>

      <p>
        Accompagner les personnes malmenées par la vie, par les autres, c'est viser à les
        <span class="markup-text">réconcilier</span> avec l'humain
      </p>

      <p>
        Nous croyons qu’il existe en chacun une humanité, parfois enfouie, qu’il existe en chacun
        une capacité de <span class="markup-text">changement</span>.
      </p>

      <p>
        Notre accompagnement se veut sans jugement, au rythme de chacun, et vise <span
          class="markup-text">l'inclusion</span
        > et le mieux-vivre ensemble.
      </p>

      <p>
        Si les actes délictueux n'appellent aucune tolérance, les personnes sont, quant à elles, <span
          class="markup-text">dignes d'attention</span
        >. Chaque personne a son histoire propre et il nous appartient de l’accueillir en toute
        bienveillance, dans le respect de soi et de l’autre.
      </p>

      <div class=" flex justify-center">
        <img
          src="$lib/assets/img/illustration/qui_sommes-nous_valeurs.svg"
          class="md:w-2/3 lg:w-1/2 max-w-96 lg:max-w-none"
          alt="ORS logo"
        />
      </div>
    </SectionWithTitleMain>

    <SectionWithTitleMain title="Equipe psychosociale">
      <p>
        Notre <span class="markup-text">équipe</span> compte assistants sociaux, criminologues et psychologues.
      </p>

      <p>
        Celle-ci est <span class="markup-text">spécialisée</span> en victimologie et en matière de procédures
        pénales.
      </p>

      <p>
        Elle est également <span class="markup-text">formée</span> en EMDR, hypnose thérapeutique, thérapie
        systémique, psychothérapie psychanalytique, thérapie des schémas, thérapie du deuil, TCC, thérapie
        sensorimotrice, processus de domination conjugale, etc.
      </p>

      <p>
        Elle est <span class="markup-text">sensibilisée</span> aux questions liées aux genres et à l’orientation
        sexuelle.
      </p>

      <p>
        Par ailleurs, elle est en formation continue afin de répondre au mieux aux <span
          class="markup-text">besoins</span
        > des bénéficiaires.
      </p>

      <p>
        Enfin, toutes les missions du service sont également rendues réalisables grâce à l'appui
        d'un personnel administratif (secrétariat, direction, etc.).
      </p>
    </SectionWithTitleMain>

    <SectionWithTitleMain title="Collaborations">
      <div>
        <p>
          Notre service porte une attention particulière à une approche globale de la personne, de
          sa situation, de ses ressources et difficultés, de son histoire. Nos accompagnements
          s’insèrent dès lors au sein de <span class="markup-text">partenariats</span>.
        </p>

        <p>
          En accord avec chaque personne, nous intervenons en collaboration avec les autres services
          qui gravitent autour d’elle.
        </p>

        <p>
          De manière plus structurée, nous sommes également actifs au sein de <span
            class="markup-text">réseaux</span
          >, tels que le Réseau des Services Partenaires des Maisons de Justice (RSPMJ), le réseau
          carolo des services d’aide aux victimes, la plate-forme “violence conjugale”, etc.
        </p>
      </div>

      <div class="flex justify-center">
        <img
          src="$lib/assets/img/illustration/qui_sommes-nous_organigramme_web.svg"
          class=" hidden md:block"
          alt="ORS logo"
        />

        <!-- TABLET -->
        <img
          src="$lib/assets/img/SVG/ORS_illustrations_Qui sommes-nous - Organigramme - Mobile.svg"
          class=" md:hidden sm:block"
          alt="ORS logo"
        />
        <div class="image-container md:hidden flex justify-center">
          <img
            src="$lib/assets/img/SVG/ORS_illustrations_Qui sommes-nous - Organigramme - Mobile.svg"
            class="zoomed sm:hidden"
            alt="ORS logo"
          />
        </div>
      </div>
    </SectionWithTitleMain>

    <div class="flex flex-col justify-center items-center pt-10">
      <ContactButton />
    </div>
  </div>
</div>

<style>
  h7 {
    border-top: 1px solid theme("colors.grey");
    justify-content: center;
    text-align: center;
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

  .image-container {
    width: 100%; /* Or specify your preferred width */
    overflow: hidden; /* Prevents the zoomed image from causing scroll */
    min-height: 850px;
  }

  .zoomed {
    transform: scale(1.3); /* Adjust scale as needed */
    transform-origin: center center; /* Center the zoom */
    overflow: hidden; /* Hide any overflow from scaling */
    margin-top: 35%; /* Centers the zoomed image within the container */
  }

  @media (min-width: 550px) {
    .zoomed {
      transform: none;
      width: 70%;
      margin-top: 0%;
    }
  }
</style>
