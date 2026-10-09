import { c as create_ssr_component } from "./ssr.js";
const css = {
  code: 'p.svelte-4zjt06{font-family:"Epilogue", sans-serif;font-size:28px;font-weight:400;text-align:center}@media(max-width: 1024px){p.svelte-4zjt06{font-size:18px !important;line-height:25px !important}}@media(max-width: 480px){p.svelte-4zjt06{font-size:20px !important;line-height:20px !important}}',
  map: `{"version":3,"file":"ContactButton.svelte","sources":["ContactButton.svelte"],"sourcesContent":["<button\\n  on:click=\\"{() => (window.location.href = '/contact')}\\"\\n  class=\\" bg-brown hover:bg-brown-hover rounded-full text-off-white px-8 py-1 mb-6 mt-8 sm:mb-4 lg:px-10 lg:py-3 lg:my-16 font-light\\"\\n>\\n  <p>Nous contacter</p>\\n</button>\\n\\n<style >\\n  p {\\n    font-family: \\"Epilogue\\", sans-serif;\\n    font-size: 28px;\\n    font-weight: 400;\\n    text-align: center;\\n  }\\n\\n  @media (max-width: 1024px) {\\n    p {\\n      font-size: 18px !important;\\n      line-height: 25px !important;\\n    }\\n  }\\n\\n  @media (max-width: 480px) {\\n    p {\\n      font-size: 20px !important;\\n      line-height: 20px !important;\\n    }\\n  }\\n</style>"],"names":[],"mappings":"AAQE,eAAE,CACA,WAAW,CAAE,UAAU,CAAC,CAAC,UAAU,CACnC,SAAS,CAAE,IAAI,CACf,WAAW,CAAE,GAAG,CAChB,UAAU,CAAE,MACd,CAEA,MAAO,YAAY,MAAM,CAAE,CACzB,eAAE,CACA,SAAS,CAAE,IAAI,CAAC,UAAU,CAC1B,WAAW,CAAE,IAAI,CAAC,UACpB,CACF,CAEA,MAAO,YAAY,KAAK,CAAE,CACxB,eAAE,CACA,SAAS,CAAE,IAAI,CAAC,UAAU,CAC1B,WAAW,CAAE,IAAI,CAAC,UACpB,CACF"}`
};
const ContactButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<button class="bg-brown hover:bg-brown-hover rounded-full text-off-white px-8 py-1 mb-6 mt-8 sm:mb-4 lg:px-10 lg:py-3 lg:my-16 font-light" data-svelte-h="svelte-18je9s6"><p class="svelte-4zjt06">Nous contacter</p> </button>`;
});
export {
  ContactButton as C
};
