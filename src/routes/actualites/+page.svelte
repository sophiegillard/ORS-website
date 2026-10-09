<script>
  import SectionWithTitleMain from "$lib/components/layout/SectionWithTitleMain.svelte"
  import Event from "$lib/components/Event.svelte"
  import MonthActualites from "$lib/components/MonthActualites.svelte"
  import ContactButton from "$lib/components/button/ContactButton.svelte"
</script>

<svelte:head>
  <title>Actualités</title>
  <meta name="Actualités" content="actualités" />
</svelte:head>

<SectionWithTitleMain title="Actualités">
  <MonthActualites month="{'Novembre'}" year="{'2026'}">
    <Event
      nom_evenement="Journées nationales de la prison"
      date="Du 12 au 22 "
      lieu="{'CAAP Culture'}"
      is_last="{false}"
      link="https://www.jnpndg.be/"
    />
    <Event
      nom_evenement="Campagne Ruban Blanc"
      date="Du 23 au 04 décembre"
      lieu="{'Plate-forme Ruban Blanc'}"
      btn_line_img_src="ORS_illustrations_Actu trace_2.svg"
    />
  </MonthActualites>

  <MonthActualites month="{'Janvier'}" year="{'2027'}">
    <Event
      nom_evenement="Groupe de réflexion pour auteurs de violence conjugale"
      lieu="{'ORS-Espace Libre'}"
      btn_line_img_src="ORS_illustrations_Actu trace 3.svg"
      btn_title="S'inscrire"
    />
  </MonthActualites>

  <MonthActualites month="{'Stage'}">
    <Event
      description="Les candidatures pour les stages d’assistant·e social·e et de psychologue sont clôturées pour l’année académique 2026/2027"
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
</SectionWithTitleMain>

<div class="flex flex-col justify-center items-center gap-10">
  <ContactButton />
</div>
