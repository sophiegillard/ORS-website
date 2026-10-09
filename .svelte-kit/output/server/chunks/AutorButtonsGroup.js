import { c as create_ssr_component, v as validate_component } from "./ssr.js";
import { C as ContactButton } from "./ContactButton.js";
const css$2 = {
  code: "@media(max-width: 1024px){button.svelte-8lh4wo{max-width:250px;min-height:116px}}@media(min-width: 687){.button-width.svelte-8lh4wo{width:250px;max-width:100%;min-height:116px}}",
  map: '{"version":3,"file":"LinkButton.svelte","sources":["LinkButton.svelte"],"sourcesContent":["<script>\\n  export let href = \\"\\"\\n<\/script>\\n\\n<button\\n  on:click=\\"{() => (window.location.href = href)}\\"\\n  class=\\"bg-blue hover:bg-blue-hover px-6 py-3 lg:py-10   rounded-3xl border-grey border lg:w-1/5 grow button-width\\"\\n>\\n  <slot />\\n</button>\\n\\n<style>\\n  @media (max-width: 1024px) {\\n    button {\\n      max-width: 250px;\\n      min-height: 116px;\\n    }\\n  }\\n\\n  @media (min-width: 687) {\\n   /* Set a uniform width for all buttons */\\n   .button-width {\\n    width: 250px; /* Adjust as needed */\\n    max-width: 100%; /* Ensures responsiveness */\\n    min-height: 116px; /* Maintains consistent height */\\n  }\\n\\n  }\\n\\n</style>\\n"],"names":[],"mappings":"AAYE,MAAO,YAAY,MAAM,CAAE,CACzB,oBAAO,CACL,SAAS,CAAE,KAAK,CAChB,UAAU,CAAE,KACd,CACF,CAEA,MAAO,YAAY,GAAG,CAAE,CAEvB,2BAAc,CACb,KAAK,CAAE,KAAK,CACZ,SAAS,CAAE,IAAI,CACf,UAAU,CAAE,KACd,CAEA"}'
};
const LinkButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { href = "" } = $$props;
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  $$result.css.add(css$2);
  return `<button class="bg-blue hover:bg-blue-hover px-6 py-3 lg:py-10 rounded-3xl border-grey border lg:w-1/5 grow button-width svelte-8lh4wo">${slots.default ? slots.default({}) : ``} </button>`;
});
const css$1 = {
  code: "@media(max-width: 480px){.flex-custom.svelte-109e27k{flex-direction:column !important;justify-content:center !important}}.flex-custom.svelte-109e27k{flex-direction:row;justify-content:center !important}",
  map: '{"version":3,"file":"GroupButtons.svelte","sources":["GroupButtons.svelte"],"sourcesContent":["<script>\\n  \\n<\/script>\\n\\n<div class=\\"flex flex-custom gap-5 sm:w-3/4 md:w-full lg:gap-16  py-6 flex-wrap\\">\\n  <slot />\\n</div>\\n\\n<style>\\n\\n  @media (max-width: 480px) {\\n    .flex-custom {\\n    flex-direction: column !important;\\n    justify-content: center !important;\\n    }\\n  }\\n  .flex-custom {\\n    flex-direction: row;\\n    justify-content: center !important;\\n  }\\n</style>"],"names":[],"mappings":"AAUE,MAAO,YAAY,KAAK,CAAE,CACxB,2BAAa,CACb,cAAc,CAAE,MAAM,CAAC,UAAU,CACjC,eAAe,CAAE,MAAM,CAAC,UACxB,CACF,CACA,2BAAa,CACX,cAAc,CAAE,GAAG,CACnB,eAAe,CAAE,MAAM,CAAC,UAC1B"}'
};
const GroupButtons = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<div class="flex flex-custom gap-5 sm:w-3/4 md:w-full lg:gap-16 py-6 flex-wrap svelte-109e27k">${slots.default ? slots.default({}) : ``} </div>`;
});
const css = {
  code: "p.svelte-6rb0gc{text-align:center}",
  map: '{"version":3,"file":"AutorButtonsGroup.svelte","sources":["AutorButtonsGroup.svelte"],"sourcesContent":["<script>\\n  import LinkButton from \\"$lib/components/button/LinkButton.svelte\\"\\n  import GroupButtons from \\"$lib/components/layout/GroupButtons.svelte\\"\\n  import ContactButton from \\"$lib/components/button/ContactButton.svelte\\"\\n\\n\\n<\/script>\\n\\n\\n  <GroupButtons>\\n    <LinkButton href=\\"/accueil/victimes\\">\\n      <p class=\\"p-secondary\\">\\n        Aux <span class=\\"markup-text-accueil\\">victimes</span> <br /> & leurs proches\\n      </p>\\n    </LinkButton>\\n\\n    <LinkButton href=\\"/accueil/auteurs\\">\\n      <p class=\\"p-secondary\\">\\n        Aux <span class=\\"markup-text-accueil\\">auteur·e·s <br /> non incarcéré·e·s</span><br /> & leurs\\n        proches\\n      </p>\\n    </LinkButton>\\n\\n\\n    <LinkButton href=\\"/accueil/détenus\\">\\n      <p class=\\"p-secondary\\">\\n        Aux <span class=\\"markup-text-accueil\\">personnes détenues</span> <br />& leurs proches\\n      </p>\\n    </LinkButton>\\n  </GroupButtons>\\n  <div class=\\"flex justify-center pt-8 pb-4\\"><ContactButton /></div>\\n\\n\\n<style>\\n  p {\\n    text-align: center;\\n  }\\n</style>\\n"],"names":[],"mappings":"AAkCE,eAAE,CACA,UAAU,CAAE,MACd"}'
};
const AutorButtonsGroup = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${validate_component(GroupButtons, "GroupButtons").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(LinkButton, "LinkButton").$$render($$result, { href: "/accueil/victimes" }, {}, {
        default: () => {
          return `<p class="p-secondary svelte-6rb0gc" data-svelte-h="svelte-uuoj1d">Aux <span class="markup-text-accueil">victimes</span> <br> &amp; leurs proches</p>`;
        }
      })} ${validate_component(LinkButton, "LinkButton").$$render($$result, { href: "/accueil/auteurs" }, {}, {
        default: () => {
          return `<p class="p-secondary svelte-6rb0gc" data-svelte-h="svelte-19hb3f">Aux <span class="markup-text-accueil">auteur·e·s <br> non incarcéré·e·s</span><br> &amp; leurs
        proches</p>`;
        }
      })} ${validate_component(LinkButton, "LinkButton").$$render($$result, { href: "/accueil/détenus" }, {}, {
        default: () => {
          return `<p class="p-secondary svelte-6rb0gc" data-svelte-h="svelte-qn9kuh">Aux <span class="markup-text-accueil">personnes détenues</span> <br>&amp; leurs proches</p>`;
        }
      })}`;
    }
  })} <div class="flex justify-center pt-8 pb-4">${validate_component(ContactButton, "ContactButton").$$render($$result, {}, {}, {})}</div>`;
});
export {
  AutorButtonsGroup as A
};
