import { c as create_ssr_component, v as validate_component, d as add_attribute } from "../../../chunks/ssr.js";
import { S as SectionWithTitleMain } from "../../../chunks/SectionWithTitleMain.js";
const ___ASSET___0 = "/_app/immutable/assets/ORS_illustrations_Numeros utiles_1.6aygqCSQ.png";
const ___ASSET___1 = "/_app/immutable/assets/ORS_illustrations_Numeros utiles.WUtAt1Wq.svg";
const css = {
  code: "p.svelte-ak5g9f{padding-block:4px}",
  map: '{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script>import ___ASSET___0 from \\"$lib/assets/img/SVG/ORS_illustrations_Numeros utiles_1.png\\";import ___ASSET___1 from \\"$lib/assets/img/SVG/ORS_illustrations_Numeros utiles.svg\\";\\n  import SectionWithTitleMain from \\"$lib/components/layout/SectionWithTitleMain.svelte\\"\\n<\/script>\\n\\n<svelte:head>\\n  <title>Numéros utiles</title>\\n  <meta name=\\"numeros-utiles\\" content=\\"numeros-utiles\\" />\\n</svelte:head>\\n\\n<div class=\\"text-column\\">\\n  <SectionWithTitleMain title=\\"Numéros utiles\\" width=\\"{220}\\">\\n    <img\\n      src=\\"{___ASSET___0}\\"\\n      alt=\\"illustration\\"\\n      class=\\"float-right hidden sm:block w-1/3 relative\\"\\n    />\\n\\n    <p class=\\"lg:mt-7\\">\\n      Télé-Accueil – Quelqu’un à qui parler 24h/24 : <a class=\\"phone_link\\" href=\\"tel:107\\">107</a>\\n    </p>\\n    <p>\\n      Ecoute violences conjugales :\\n      <a class=\\"phone_link\\" href=\\"tel:0800 30 030 \\">0800 30 030 </a>\\n    </p>\\n    <p>\\n      Service écoute-Enfants :\\n      <a class=\\"phone_link\\" href=\\"tel:103\\">103</a>\\n    </p>\\n    <p>\\n      Centre de prévention du suicide :\\n      <a class=\\"phone_link\\" href=\\"tel: 0800 32 123\\"> 0800 32 123</a>\\n    </p>\\n    <p>\\n      SOS viol :\\n      <a class=\\"phone_link\\" href=\\"tel:0800 98 100\\">0800 98 100</a>\\n    </p>\\n    <p>\\n      SéOS – Service d’écoute et d’orientation spécialisé en matière sexuelle :\\n      <a class=\\"phone_link\\" href=\\"tel: 0800 200 99\\"> 0800 200 99</a>\\n    </p>\\n  </SectionWithTitleMain>\\n\\n  <div class=\\"flex justify-center\\" style=\\"max-height:270px\\">\\n    <img\\n      src=\\"{___ASSET___1}\\"\\n      alt=\\"illustration\\"\\n      class=\\"sm:hidden object-cover\\"\\n      style=\\"max-height: 370px !important\\"\\n    />\\n  </div>\\n</div>\\n\\n<style>\\n  p {\\n    padding-block: 4px;\\n  }\\n</style>\\n"],"names":[],"mappings":"AAqDE,eAAE,CACA,aAAa,CAAE,GACjB"}'
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-10wifzw_START -->${$$result.title = `<title>Numéros utiles</title>`, ""}<meta name="numeros-utiles" content="numeros-utiles"><!-- HEAD_svelte-10wifzw_END -->`, ""} <div class="text-column">${validate_component(SectionWithTitleMain, "SectionWithTitleMain").$$render($$result, { title: "Numéros utiles", width: 220 }, {}, {
    default: () => {
      return `<img${add_attribute("src", ___ASSET___0, 0)} alt="illustration" class="float-right hidden sm:block w-1/3 relative"> <p class="lg:mt-7 svelte-ak5g9f" data-svelte-h="svelte-1y1erdm">Télé-Accueil – Quelqu’un à qui parler 24h/24 : <a class="phone_link" href="tel:107">107</a></p> <p class="svelte-ak5g9f" data-svelte-h="svelte-6qwiay">Ecoute violences conjugales :
      <a class="phone_link" href="tel:0800 30 030 ">0800 30 030</a></p> <p class="svelte-ak5g9f" data-svelte-h="svelte-e5lqgk">Service écoute-Enfants :
      <a class="phone_link" href="tel:103">103</a></p> <p class="svelte-ak5g9f" data-svelte-h="svelte-1np3ipd">Centre de prévention du suicide :
      <a class="phone_link" href="tel: 0800 32 123">0800 32 123</a></p> <p class="svelte-ak5g9f" data-svelte-h="svelte-82unlt">SOS viol :
      <a class="phone_link" href="tel:0800 98 100">0800 98 100</a></p> <p class="svelte-ak5g9f" data-svelte-h="svelte-acldls">SéOS – Service d’écoute et d’orientation spécialisé en matière sexuelle :
      <a class="phone_link" href="tel: 0800 200 99">0800 200 99</a></p>`;
    }
  })} <div class="flex justify-center" style="max-height:270px" data-svelte-h="svelte-7oy22a"><img${add_attribute("src", ___ASSET___1, 0)} alt="illustration" class="sm:hidden object-cover" style="max-height: 370px !important"></div> </div>`;
});
export {
  Page as default
};
