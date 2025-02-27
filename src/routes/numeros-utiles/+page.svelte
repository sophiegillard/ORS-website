<script>
  import SectionWithTitleMain from "$lib/components/layout/SectionWithTitleMain.svelte"
</script>

<svelte:head>
  <title>ORS Espace Libre | Numéros utiles</title>
  <meta name="numeros-utiles" content="numeros-utiles" />
</svelte:head>

<div class="text-column">
  <img
    src="$lib/assets/img/SVG/ORS_illustrations_Numeros utiles_1.png"
    alt="illustration"
    class="float-right hidden 2xl:pl-14 md:block w-1/3 relative 2xl:top-24"
    style="max-width:450px;"
  />
  <SectionWithTitleMain title="Numéros utiles" width="{220}">
    <p class="lg:mt-7">
      Télé-Accueil – Quelqu’un à qui parler 24h/24 : <a class="phone_link" href="tel:107">107</a>
    </p>
    <p>
      Écoute violences conjugales :
      <a class="phone_link" href="tel:0800 30 030 ">0800 30 030 </a>
    </p>
    <p>
      Service Écoute-Enfants :
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
  </SectionWithTitleMain>

  <div class="flex justify-center">
    <img
      src="$lib/assets/img/SVG/ORS_illustrations_Numéros utiles.svg"
      alt="illustration"
      class="md:hidden w-4/5 pb-10 pt-7 xs:w-7/12 sm:w-2/4"
    />
  </div>
</div>

<style>
  p {
    padding-block: 4px;
  }
</style>
