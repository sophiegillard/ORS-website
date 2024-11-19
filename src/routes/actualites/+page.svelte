<script>
  import SectionWithTitle from "$lib/components/layout/SectionWithTitle.svelte"
  import Event from "$lib/components/Event.svelte"
  import MonthActualites from "../../lib/components/MonthActualites.svelte"
</script>

<svelte:head>
  <title>Actualités</title>
  <meta name="Actualités" content="actualités" />
</svelte:head>

<SectionWithTitle title="Actualités">
  <MonthActualites month="{'Novembre'}" year="{'2024'}">
    <Event
      nom_evenement="Journées nationales de la prison"
      date="Du 14 au 24 "
      lieu="{'CAAP Culture'}"
      is_last="{false}"
    />
    <Event
      nom_evenement="Campagne Ruban Blanc"
      date="Du 22 au 06 "
      lieu="{'Plate-forme Ruban Blanc'}"
      line_img_src="ORS_illustrations_Actu tracé 2.svg"
    />
  </MonthActualites>

  <MonthActualites month="{'Mars'}" year="{'2025'}">
    <Event
      nom_evenement="Groupe de réflexion pour auteurs de violence conjugale"
      lieu="{'ORS-Espace Libre'}"
      line_img_src="ORS_illustrations_Actu tracé 3.svg"
    />
  </MonthActualites>

  <MonthActualites month="{'Stage'}">
    <Event
      description="Les candidatures pour les stages d’assistant·e social·e et de psychologue sont clôturées pour l’année académique 2024/2025"
      is_detail="{false}"
      info_button="{false}"
    />
  </MonthActualites>

  <MonthActualites month="{"Offre d'emploi"}">
    <Event
      description="Aucun poste n’est à pourvoir actuellement "
      is_detail="{false}"
      info_button="{false}"
    />
  </MonthActualites>
</SectionWithTitle>
