<script>
  import SectionWithTitleMain from "$lib/components/layout/SectionWithTitleMain.svelte"
  import Event from "$lib/components/Event.svelte"
  import MonthActualites from "$lib/components/MonthActualites.svelte"
  import ContactButton from "$lib/components/button/ContactButton.svelte"
</script>

<svelte:head>
  <title>ORS Espace Libre | Actualités</title>
  <meta name="Actualités" content="actualités" />
</svelte:head>

<SectionWithTitleMain title="Actualités">
  <MonthActualites month="{'Novembre'}" year="{'2024'}">
    <Event
      nom_evenement="Journées nationales de la prison"
      date="Du 14 au 24 "
      lieu="{'CAAP Culture'}"
      is_last="{false}"
      info_button_url="http://www.jnpndg.be/"
    />
    <Event
      nom_evenement="Campagne Ruban Blanc"
      date="Du 22 au 06 "
      lieu="{'Plate-forme Ruban Blanc'}"
      btn_line_img_src="lib/assets/img/SVG/ORS_illustrations_Actu_trace_2.svg"
      info_button_url="http://www.plateformerubanblanc.be/"
    />
  </MonthActualites>

  <MonthActualites month="{'Mars'}" year="{'2025'}">
    <Event
      nom_evenement="Groupe de réflexion pour auteurs de violence conjugale"
      lieu="{'ORS-Espace Libre'}"
      btn_line_img_src="lib/assets/img/SVG/ORS_illustrations_Actu_trace_3.svg"
      btn_title="S'inscrire"
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
</SectionWithTitleMain>

<div class="flex flex-col justify-center items-center gap-10">
  <ContactButton />
</div>
