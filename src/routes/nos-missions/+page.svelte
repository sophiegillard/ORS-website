<script>
  import SectionWithTitleMain from "$lib/components/layout/SectionWithTitleMain.svelte"
  import AutorButtonsGroup from "$lib/components/navigation/AutorButtonsGroup.svelte"
</script>

<svelte:head>
  <title>ORS Espace Libre | Nos missions</title>
  <meta name="nos-misisons" content="missions" />
</svelte:head>

<div class="text-column">
  <SectionWithTitleMain title="Nos missions" width="{220}">
    <img
      src="$lib/assets/img/illustration/nos_missions_bonhomme.png"
      alt="illustration"
      class="float-right hidden md:block w-1/3 relative mb-10"
      style="max-width: 330px;"
    />
    <p>
      Notre service s’adresse à <span class="markup-text">tout justiciable</span>, victime ou
      auteur·e·s d’une infraction pénale, ainsi qu’à ses proches, en vue de leur apporter une
      <span class="markup-text">aide sociale et/ou psychologique</span>.
      <br />
      Ces aides sont définies par le décret du 05/10/2023 du Ministère de la Communauté française introduisant
      le code de la justice communautaire.
    </p>

    <p>
      « La mission d’aide sociale s’entend comme toute aide de nature non financière destinée à
      permettre au justiciable de <span class="markup-text">préserver, d’améliorer</span> ou de
      <span class="markup-text">restaurer</span> ses conditions de vie, sur le plan familial, social,
      économique, professionnel, politique ou culturel. »
    </p>

    <p>
      « La mission d’aide psychologique s’entend comme toute aide destinée à
      <span class="markup-text">soutenir</span>
      psychologiquement le justiciable afin qu’il trouve un nouvel équilibre de vie. »
    </p>

    <p>
      Toutes nos interventions sont soumises au
      <span class="markup-text">secret professionnel</span> et indépendantes des instances judiciaires
      ou autres. Nous ne rédigeons et ne remettons aucun rapport, aucune expertise, quelle que soit l’institution
      ou la personne qui en fait la demande.
    </p>

    <p>
      Nous recevons sur rendez-vous au sein du service. Des visites à domicile et/ou à l'extérieur
      sont également envisageables sous certaines conditions.
    </p>
  </SectionWithTitleMain>

  <div class="flex justify-center">
    <img
      src="$lib/assets/img/illustration/nos_missions_bonhomme.png"
      alt="illustration"
      class="md:hidden sm:w-1/4 max-w-60 pb-8"
    />
  </div>

  <div class="flex flex-col items-center">
    <AutorButtonsGroup />
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
</style>
