<script>
  import SectionWithTitle from "$lib/components/layout/SectionWithTitle.svelte"
  import ContactButton from "$lib/components/button/ContactButton.svelte"

  let section_height
  let biggest_title
</script>

<svelte:head>
  <title>Qui sommes-nous</title>
  <meta name="qui-sommes-nous" content="Présentation de l'asbl" />
</svelte:head>

<div class="text-column">
  <div>
    <SectionWithTitle title="Quelques mots d’histoire...">
      <p>
        Notre association est âgée de plus de <span class="markup-text">130 ans</span> et trouve son
        origine dans les « Comités de Patronage » dont le but était de porter secours aux personnes démunies
        et en détresse, en lien avec la Justice.
      </p>

      <p>
        La dénomination de l’asbl deviendra « Office de Réadaptation Sociale - ORS » dans les années
        <span class="markup-text">1960</span>. L’asbl va <span class="markup-text">préciser</span>
        son objet social et <span class="markup-text">diversifier</span> ses activités au fil du temps
        afin de d’adapter aux réalités sociales et aux cadres législatifs.
      </p>

      <p>
        En <span class="markup-text">1989</span> naît le secteur d’activités « Espace Libre », service
        d’aide aux justiciables de l’arrondissement judiciaire de Charleroi qui sera agréé par la Communauté
        française en 1990.
      </p>

      <img
        src="$lib/assets/img/illustration/illu_qui_sommes_nous.png"
        alt="illustration"
        class="float-right top-28 hidden md:block"
      />

      <p>
        En <span class="markup-text">2005</span>, l’asbl prendra l’appellation de ce secteur pour se
        dénommer « ORS - Espace Libre ».
      </p>

      <p>
        <span class="markup-text">Aujourd'hui</span>, le service est agréé et subsidié par la
        Fédération Wallonie Bruxelles - Direction Partenariat de l'Administration Générale des
        Maisons de Justice. Il bénéficie également d'un soutien financier de la Région wallonne, de
        la Ville de Charleroi et du Fonds Social Européen.
      </p>
    </SectionWithTitle>

    <SectionWithTitle title="Objectifs et valeurs">
      <p>
        De par ses missions, notre service <span class="markup-text">offre</span> une aide à toute personne
        confrontée à la justice, qu’elle soit victime ou auteur des faits.
      </p>

      <p>
        Accompagner les victimes et les auteurs, c'est faire le pari d'une justice <span
          class="markup-text">restauratrice</span
        >, d'une justice <span class="markup-text">constructive</span> et
        <span class="markup-text">intégrative</span>. C’est viser à recréer du lien pour tout un
        chacun, mais c’est aussi viser à restaurer l’appartenance à la communauté.
      </p>

      <p>
        Accompagner les victimes et les auteurs, c’est aborder de manière <span class="markup-text"
          >systémique</span
        > la problématique des violences, notamment dans le domaine intrafamilial, mais également à un
        niveau sociétal. C’est développer une vision et une gestion globale de cette problématique.
      </p>
      <p>
        Accompagner les auteurs, c’est aussi agir sur de potentielles victimisations, c’est aussi
        <span class="markup-text">protéger</span> les victimes. Accompagner les personnes malmenées
        par la vie, par les autres, c'est viser à les réconcilier avec
        <span class="markup-text">l'humain</span>.
      </p>

      <p>
        Nous croyons qu’il existe en chacun une humanité, parfois enfouie, qu’il existe en chacun
        une capacité de <span class="markup-text">changement</span>.
      </p>

      <p>
        Notre accompagnement se veut sans jugement, au rythme de chacun, et vise <span
          class="markup-text">l’inclusion</span
        > et le mieux-vivre ensemble.
      </p>

      <p>
        Si les actes délictueux n'appellent aucune tolérance, les personnes sont, quant à elles,
        <span class="markup-text">dignes d'attention</span>. Chaque personne a son histoire propre
        et il nous appartient de l’accueillir en toute bienveillance, dans le respect de soi et de
        l’autre.
      </p>
    </SectionWithTitle>

    <SectionWithTitle title="Equipe">
      <p>
        Notre <span class="markup-text">équipe</span> compte assistants sociaux, criminologues et psychologues.
      </p>

      <p>
        Celle-ci est <span class="markup-text">spécialisée</span> en victimologie et en matière de procédures
        pénales.
      </p>

      <p>
        Elle est également formée en EMDR, hypnose thérapeutique, thérapie du deuil, TCC, PNL,
        thérapie sensorimotrice, cohérence cardiaque, processus de domination conjugale, etc.
      </p>

      <p>
        Elle est <span class="markup-text">sensibilisée</span> aux questions liées aux genres et à l’orientation
        sexuelle.
      </p>

      <p>
        Enfin, elle est en formation continue afin de répondre au mieux aux <span
          class="markup-text">besoins</span
        > des patients.
      </p>
    </SectionWithTitle>

    <SectionWithTitle title="Collaborations">
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
          De manière plus structurée, nous sommes également actifs au sein de réseaux, tels que le
          Réseau des Services Partenaires des Maisons de Justice (RSPMJ), le réseau carolo des
          services d’aide aux victimes, la plate-forme “violence conjugale”, etc.
        </p>
      </div>

      <div class="flex flex-row gap-20 relative pt-10" bind:offsetHeight="{section_height}">
        <div class="collab-section w-1/3">
          <h7 class="col-title" bind:offsetHeight="{biggest_title}"
            >Sphère Judiciaire / Juridique</h7
          >
          <p class="pl-4">Avocats</p>
          <p class="">Maisons de Justice</p>
          <p class="pl-10">Prisons</p>
          <p class="pr-4">Magistrats</p>
        </div>

        <img
          src="$lib/assets/img/illustration/qui_sommes_nous_separator_1.png"
          alt="illustration"
          class="separator"
          style="{`left: 22%; max-height:${section_height}px;`}"
        />

        <div class="collab-section w-1/3">
          <h7 class="col-title" style="{`min-height: ${biggest_title}px`}">Services d'aide</h7>
          <p class="relative right-2">Soins de santé</p>
          <p class="pr-4">Aide de 1ère ligne</p>
          <p class="pl-4">Logements</p>
          <p class="relative left-6">Formations/insertion</p>
          <p class="relative right-6">Médiation</p>
        </div>

        <img
          src="$lib/assets/img/illustration/qui_sommes_nous_separator_2.png"
          alt="illustration"
          class="separator"
          style="{`left: 66%; max-height:${section_height}px;`}"
        />

        <div class="collab-section w-1/3">
          <h7 class="col-title">Organismes socio-administratifs</h7>
          <p class="pl-4">CPAS</p>
          <p class="relative right-16">Forem</p>
          <p class="pl-8">Mutuelles</p>
          <p class="relative right-10">Onem</p>
        </div>
      </div>
    </SectionWithTitle>

    <div class="flex flex-col justify-center items-center pt-10">
      <ContactButton />
    </div>
  </div>
</div>

<style>
  .clear-left::after {
    content: "";
    display: table;
    clear: right;
  }

  h7 {
    font-family: Gyst Variable;
    font-size: 1.5rem;
    font-style: italic;
    font-weight: 400;
    letter-spacing: 0em;
    text-align: center;
    border-bottom: 1px solid theme("colors.grey");
    border-top: 1px solid theme("colors.grey");
    padding-block: 5px;

    justify-content: center;
    display: flex;
    flex-direction: column;
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
</style>
