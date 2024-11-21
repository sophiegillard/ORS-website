<script>
  import SectionWithTitle from "$lib/components/layout/SectionWithTitle.svelte"
  import AutorButtonsGroup from "$lib/components/navigation/AutorButtonsGroup.svelte"
</script>

<svelte:head>
  <title>Numéros utiles</title>
  <meta name="numeros-utiles" content="numeros-utiles" />
</svelte:head>

<div class="text-column">
  <SectionWithTitle title="Numéros utiles" width="{220}">
    <img
      src="$lib/assets/img/SVG/ORS_illustrations_Numéros utiles_1.png"
      alt="illustration"
      class="float-right hidden sm:block w-1/3 relative"
    />

    <p>
      Télé-Accueil – Quelqu’un à qui parler 24h/24 : <a class="phone_link" href="tel:107">107</a>
    </p>
    <p>
      Ecoute violences conjugales :
      <a class="phone_link" href="tel:0800 30 030 ">0800 30 030 </a>
    </p>
    <p>
      Service écoute-Enfants :
      <a class="phone_link" href="tel:103">103</a>
    </p>
    <p>
      Centre de prévention du suicide :
      <a class="phone_link" href="tel: 0800 32 123"> 0800 32 123</a>
    </p>
    <p>
      SOS viol :
      <a class="phone_link" href="tel:0800 98 100">0800 98 100</a>
    </p>
    <p>
      SéOS – Service d’écoute et d’orientation spécialisé en matière sexuelle :
      <a class="phone_link" href="tel: 0800 200 99"> 0800 200 99</a>
    </p>
  </SectionWithTitle>

  <div class="flex justify-center" style="max-height:270px">
    <img
      src="$lib/assets/img/SVG/ORS_illustrations_Numéros utiles.svg"
      alt="illustration"
      class="sm:hidden object-cover"
    />
  </div>
</div>
