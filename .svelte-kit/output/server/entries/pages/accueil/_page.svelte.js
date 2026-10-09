import { c as create_ssr_component, d as add_attribute, v as validate_component } from "../../../chunks/ssr.js";
import { _ as ___ASSET___0 } from "../../../chunks/ors-logo.js";
import { A as AutorButtonsGroup } from "../../../chunks/AutorButtonsGroup.js";
const css = {
  code: "img.svelte-1x1um82{transition:transform 0.3s ease,\n      opacity 0.3s ease}img.is-scrolled.svelte-1x1um82{transform:scale(0.5);opacity:0}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script>import ___ASSET___0 from \\"$lib/assets/img/logo/ors-logo.png\\";\\n  import AutorButtonsGroup from \\"$lib/components/navigation/AutorButtonsGroup.svelte\\"\\n\\n  let y = 0\\n  $: isScrolled = y > 150\\n<\/script>\\n\\n<svelte:head>\\n  <title>Accueil</title>\\n  <meta name=\\"Accueil\\" content=\\"Accueil\\" />\\n</svelte:head>\\n\\n<svelte:window bind:scrollY=\\"{y}\\" />\\n<div class=\\"text-column text-center flex flex-col items-center justify-center\\">\\n  <div class=\\"py-6 w-64 md:py-0 md:w-2/5 md:pb-14 lg:w-1/2 lg:pt-0 lg:pb-28\\">\\n    <img src=\\"{___ASSET___0}\\" alt=\\"ORS logo\\" class:is-scrolled=\\"{isScrolled}\\" />\\n  </div>\\n\\n  <p class=\\"sub-title\\">Service d'Aide aux Justiciables</p>\\n\\n  <div class=\\"\\">\\n    <p class=\\"p-accueil pb-10 sm:px-14 md:px-28 text-center\\">\\n      Nous proposons une <span class=\\"markup-text-accueil block sm:inline-block\\">\\n        aide psychologique et/ou sociale</span\\n      >\\n\\n      à toute personne confrontée au monde judiciaire.\\n    </p>\\n  </div>\\n\\n  <p class=\\"pb-0 lg:pb-8 p-secondary\\">Nous nous adressons dès lors :</p>\\n\\n  <AutorButtonsGroup />\\n</div>\\n\\n<style>\\n  img {\\n    transition:\\n      transform 0.3s ease,\\n      opacity 0.3s ease;\\n  }\\n  img.is-scrolled {\\n    transform: scale(0.5);\\n    opacity: 0;\\n  }\\n</style>\\n"],"names":[],"mappings":"AAoCE,kBAAI,CACF,UAAU,CACR,SAAS,CAAC,IAAI,CAAC,IAAI;AACzB,MAAM,OAAO,CAAC,IAAI,CAAC,IACjB,CACA,GAAG,2BAAa,CACd,SAAS,CAAE,MAAM,GAAG,CAAC,CACrB,OAAO,CAAE,CACX"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let isScrolled;
  let y = 0;
  $$result.css.add(css);
  isScrolled = y > 150;
  return `${$$result.head += `<!-- HEAD_svelte-1kb3vdz_START -->${$$result.title = `<title>Accueil</title>`, ""}<meta name="Accueil" content="Accueil"><!-- HEAD_svelte-1kb3vdz_END -->`, ""}  <div class="text-column text-center flex flex-col items-center justify-center"><div class="py-6 w-64 md:py-0 md:w-2/5 md:pb-14 lg:w-1/2 lg:pt-0 lg:pb-28"><img${add_attribute("src", ___ASSET___0, 0)} alt="ORS logo" class="${["svelte-1x1um82", isScrolled ? "is-scrolled" : ""].join(" ").trim()}"></div> <p class="sub-title" data-svelte-h="svelte-f7nlp9">Service d&#39;Aide aux Justiciables</p> <div class="" data-svelte-h="svelte-ljp8t3"><p class="p-accueil pb-10 sm:px-14 md:px-28 text-center">Nous proposons une <span class="markup-text-accueil block sm:inline-block">aide psychologique et/ou sociale</span>

      à toute personne confrontée au monde judiciaire.</p></div> <p class="pb-0 lg:pb-8 p-secondary" data-svelte-h="svelte-1gnmgle">Nous nous adressons dès lors :</p> ${validate_component(AutorButtonsGroup, "AutorButtonsGroup").$$render($$result, {}, {}, {})} </div>`;
});
export {
  Page as default
};
