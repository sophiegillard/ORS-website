import { c as create_ssr_component, h as createEventDispatcher, d as add_attribute, f as escape, i as null_to_empty, v as validate_component } from "../../../chunks/ssr.js";
import { S as SectionWithTitleMain } from "../../../chunks/SectionWithTitleMain.js";
import { C as ContactButton } from "../../../chunks/ContactButton.js";
const css$1 = {
  code: ".line_img.svelte-b00pib{width:100px;min-height:100%}@media(max-width: 1024px){.line_img.svelte-b00pib{height:50px !important\n      }}.info-button.svelte-b00pib{border:1px solid #47474C;font-family:Epilogue;font-size:20px;font-weight:400;line-height:20.5px;text-align:center;text-underline-position:from-font;-webkit-text-decoration-skip-ink:none;text-decoration-skip-ink:none}.info-button.svelte-b00pib:hover{background-color:#47474C;color:#FFF6F3}",
  map: `{"version":3,"file":"InfoButton.svelte","sources":["InfoButton.svelte"],"sourcesContent":["<script>\\n  import { createEventDispatcher } from \\"svelte\\"\\n  const dispatch = createEventDispatcher()\\n\\n  // export let line_img_src = \\"ORS_illustrations_Actu_trace_1.svg\\"\\n  let line_img_src = \\"lib/assets/img/SVG/ORS_illustrations_Actu_trace_2.svg\\"\\n  export let title = \\"info\\"\\n<\/script>\\n\\n<div class=\\"flex row sm:pt-0\\">\\n  <div\\n    class=\\"line_img relative left-3 bottom-2 w-1/3 sm:block sm:left-0 sm:bottom-0 sm:w-full\\"\\n    style=\\"width: 100px; min-height: 100%;\\"\\n  >\\n    <img\\n      src=\\"{line_img_src}\\"\\n      class=\\"w-full h-full object-cover rotate-45 sm:rotate-0\\"\\n      alt=\\"ORS logo\\"\\n    />\\n  </div>\\n\\n  <div class=\\" items-center flex\\">\\n    <button\\n      class=\\"info-button hover:bg-brown-hover rounded-full hover:text-off-white px-4 py-1 pt-2 my-6 lg:px-10 lg:py-2 font-light\\"\\n      on:click=\\"{() => dispatch('click')}\\"\\n    >\\n      {title}\\n    </button>\\n  </div>\\n</div>\\n\\n<style>\\n  .line_img {\\n    width: 100px;\\n    min-height: 100%;\\n  }\\n\\n  @media (max-width: 1024px) {\\n    .line_img {\\n      height: 50px !important\\n      ;\\n    }\\n  }\\n  .info-button {\\n    border: 1px solid #47474C;\\n    font-family: Epilogue;\\n    font-size: 20px;\\n    font-weight: 400;\\n    line-height: 20.5px;\\n    text-align: center;\\n    text-underline-position: from-font;\\n    -webkit-text-decoration-skip-ink: none;\\n            text-decoration-skip-ink: none;\\n  }\\n  .info-button:hover {\\n    background-color: #47474C;\\n    color: #FFF6F3;\\n  }\\n</style>\\n"],"names":[],"mappings":"AAgCE,uBAAU,CACR,KAAK,CAAE,KAAK,CACZ,UAAU,CAAE,IACd,CAEA,MAAO,YAAY,MAAM,CAAE,CACzB,uBAAU,CACR,MAAM,CAAE,IAAI,CAAC;AACnB,MACI,CACF,CACA,0BAAa,CACX,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,OAAO,CACzB,WAAW,CAAE,QAAQ,CACrB,SAAS,CAAE,IAAI,CACf,WAAW,CAAE,GAAG,CAChB,WAAW,CAAE,MAAM,CACnB,UAAU,CAAE,MAAM,CAClB,uBAAuB,CAAE,SAAS,CAClC,gCAAgC,CAAE,IAAI,CAC9B,wBAAwB,CAAE,IACpC,CACA,0BAAY,MAAO,CACjB,gBAAgB,CAAE,OAAO,CACzB,KAAK,CAAE,OACT"}`
};
let line_img_src = "lib/assets/img/SVG/ORS_illustrations_Actu_trace_2.svg";
const InfoButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher();
  let { title = "info" } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  $$result.css.add(css$1);
  return `<div class="flex row sm:pt-0"><div class="line_img relative left-3 bottom-2 w-1/3 sm:block sm:left-0 sm:bottom-0 sm:w-full svelte-b00pib" style="width: 100px; min-height: 100%;"><img${add_attribute("src", line_img_src, 0)} class="w-full h-full object-cover rotate-45 sm:rotate-0" alt="ORS logo"></div> <div class="items-center flex"><button class="info-button hover:bg-brown-hover rounded-full hover:text-off-white px-4 py-1 pt-2 my-6 lg:px-10 lg:py-2 font-light svelte-b00pib">${escape(title)}</button></div> </div>`;
});
const css = {
  code: 'span.svelte-1qhkfgl:not(:last-child)::after{content:" | ";color:#47474C;font-style:normal;font-family:Epilogue;font-weight:300}.line_img.svelte-1qhkfgl{width:100px;min-height:100%}@media(max-width: 1024px){.line_img.svelte-1qhkfgl{height:50px !important\n      }}.info-button.svelte-1qhkfgl{border:1px solid #47474C;font-weight:500 !important;letter-spacing:0.05rem}',
  map: `{"version":3,"file":"Event.svelte","sources":["Event.svelte"],"sourcesContent":["<script>\\n  import InfoButton from \\"$lib/components/button/InfoButton.svelte\\"\\n\\n  export let nom_evenement = \\"\\"\\n  export let date = \\"\\"\\n  export let prix = \\"\\"\\n  export let durée = \\"\\"\\n  export let lieu = \\"\\"\\n  export let is_last = true\\n  export let is_detail = true\\n  export let description = \\"\\"\\n  export let btn_line_img_src = \\"ORS_illustrations_Actu_trace_2.svg\\"\\n  export let info_button = true\\n  export let btn_title = \\"Infos\\"\\n  export let link = \\"\\"\\n<\/script>\\n\\n<div class=\\"{info_button && 'md:w-10/12'}\\">\\n  <div class=\\"flex flex-col sm:flex-row justify-between\\">\\n    <div class=\\"\\">\\n      {#if nom_evenement}\\n        <p class=\\"pb-3\\" style=\\"font-weight:400\\">{nom_evenement}</p>\\n      {/if}\\n      <div>\\n        {#if is_detail}\\n          <p class=\\"pt-0\\">\\n            {#if date}\\n              <span class=\\"date\\">{date}</span>\\n            {/if}\\n            {#if prix}\\n              <span>{prix}</span>\\n            {/if}\\n            {#if durée}\\n              <span>{durée}</span>\\n            {/if}\\n            {#if lieu}\\n              <span>{lieu}</span>\\n            {/if}\\n          </p>\\n        {/if}\\n        {#if description}\\n          <p>{description}</p>\\n        {/if}\\n      </div>\\n    </div>\\n\\n    {#if info_button}\\n      <InfoButton\\n        title=\\"{btn_title}\\"\\n        line_img_src=\\"{btn_line_img_src}\\"\\n        on:click=\\"{() => {\\n          if (link) {\\n            window.open(link, '_blank')\\n          } else {\\n            const url = new URL('/contact', window.location.origin)\\n            url.searchParams.append('title', nom_evenement)\\n            window.location.href = url.toString()\\n          }\\n        }}\\"\\n      ></InfoButton>\\n    {/if}\\n  </div>\\n\\n  {#if !is_last}\\n    <hr class=\\" border border-pink my-4 md:my-0\\" style=\\"height:2px !important\\" />\\n  {/if}\\n</div>\\n\\n<style>\\n  span:not(:last-child)::after {\\n    content: \\" | \\";\\n    color: #47474C;\\n    font-style: normal;\\n    font-family: Epilogue;\\n    font-weight: 300;\\n  }\\n\\n  .line_img {\\n    width: 100px;\\n    min-height: 100%;\\n  }\\n\\n  @media (max-width: 1024px) {\\n    .line_img {\\n      height: 50px !important\\n      ;\\n    }\\n  }\\n  .info-button {\\n    border: 1px solid #47474C;\\n    font-weight: 500 !important;\\n    letter-spacing: 0.05rem;\\n  }\\n</style>\\n"],"names":[],"mappings":"AAqEE,mBAAI,KAAK,WAAW,CAAC,OAAQ,CAC3B,OAAO,CAAE,KAAK,CACd,KAAK,CAAE,OAAO,CACd,UAAU,CAAE,MAAM,CAClB,WAAW,CAAE,QAAQ,CACrB,WAAW,CAAE,GACf,CAEA,wBAAU,CACR,KAAK,CAAE,KAAK,CACZ,UAAU,CAAE,IACd,CAEA,MAAO,YAAY,MAAM,CAAE,CACzB,wBAAU,CACR,MAAM,CAAE,IAAI,CAAC;AACnB,MACI,CACF,CACA,2BAAa,CACX,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,OAAO,CACzB,WAAW,CAAE,GAAG,CAAC,UAAU,CAC3B,cAAc,CAAE,OAClB"}`
};
const Event = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { nom_evenement = "" } = $$props;
  let { date = "" } = $$props;
  let { prix = "" } = $$props;
  let { durée = "" } = $$props;
  let { lieu = "" } = $$props;
  let { is_last = true } = $$props;
  let { is_detail = true } = $$props;
  let { description = "" } = $$props;
  let { btn_line_img_src = "ORS_illustrations_Actu_trace_2.svg" } = $$props;
  let { info_button = true } = $$props;
  let { btn_title = "Infos" } = $$props;
  let { link = "" } = $$props;
  if ($$props.nom_evenement === void 0 && $$bindings.nom_evenement && nom_evenement !== void 0)
    $$bindings.nom_evenement(nom_evenement);
  if ($$props.date === void 0 && $$bindings.date && date !== void 0)
    $$bindings.date(date);
  if ($$props.prix === void 0 && $$bindings.prix && prix !== void 0)
    $$bindings.prix(prix);
  if ($$props.durée === void 0 && $$bindings.durée && durée !== void 0)
    $$bindings.durée(durée);
  if ($$props.lieu === void 0 && $$bindings.lieu && lieu !== void 0)
    $$bindings.lieu(lieu);
  if ($$props.is_last === void 0 && $$bindings.is_last && is_last !== void 0)
    $$bindings.is_last(is_last);
  if ($$props.is_detail === void 0 && $$bindings.is_detail && is_detail !== void 0)
    $$bindings.is_detail(is_detail);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  if ($$props.btn_line_img_src === void 0 && $$bindings.btn_line_img_src && btn_line_img_src !== void 0)
    $$bindings.btn_line_img_src(btn_line_img_src);
  if ($$props.info_button === void 0 && $$bindings.info_button && info_button !== void 0)
    $$bindings.info_button(info_button);
  if ($$props.btn_title === void 0 && $$bindings.btn_title && btn_title !== void 0)
    $$bindings.btn_title(btn_title);
  if ($$props.link === void 0 && $$bindings.link && link !== void 0)
    $$bindings.link(link);
  $$result.css.add(css);
  return `<div class="${escape(null_to_empty(info_button && "md:w-10/12"), true) + " svelte-1qhkfgl"}"><div class="flex flex-col sm:flex-row justify-between"><div class="">${nom_evenement ? `<p class="pb-3" style="font-weight:400">${escape(nom_evenement)}</p>` : ``} <div>${is_detail ? `<p class="pt-0">${date ? `<span class="date svelte-1qhkfgl">${escape(date)}</span>` : ``} ${prix ? `<span class="svelte-1qhkfgl">${escape(prix)}</span>` : ``} ${durée ? `<span class="svelte-1qhkfgl">${escape(durée)}</span>` : ``} ${lieu ? `<span class="svelte-1qhkfgl">${escape(lieu)}</span>` : ``}</p>` : ``} ${description ? `<p>${escape(description)}</p>` : ``}</div></div> ${info_button ? `${validate_component(InfoButton, "InfoButton").$$render(
    $$result,
    {
      title: btn_title,
      line_img_src: btn_line_img_src
    },
    {},
    {}
  )}` : ``}</div> ${!is_last ? `<hr class="border border-pink my-4 md:my-0" style="height:2px !important">` : ``} </div>`;
});
const MonthActualites = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { month = "" } = $$props;
  let { year = "" } = $$props;
  if ($$props.month === void 0 && $$bindings.month && month !== void 0)
    $$bindings.month(month);
  if ($$props.year === void 0 && $$bindings.year && year !== void 0)
    $$bindings.year(year);
  return `<div class="pb-10 lg:pt-6"><h7 class="flex flex-row justify-between"><div>${escape(month)}</div> <div>${escape(year)}</div></h7> ${slots.default ? slots.default({}) : ``}</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-wxaw7e_START -->${$$result.title = `<title>Actualités</title>`, ""}<meta name="Actualités" content="actualités"><!-- HEAD_svelte-wxaw7e_END -->`, ""} ${validate_component(SectionWithTitleMain, "SectionWithTitleMain").$$render($$result, { title: "Actualités" }, {}, {
    default: () => {
      return `${validate_component(MonthActualites, "MonthActualites").$$render($$result, { month: "Novembre", year: "2026" }, {}, {
        default: () => {
          return `${validate_component(Event, "Event").$$render(
            $$result,
            {
              nom_evenement: "Journées nationales de la prison",
              date: "Du 12 au 22 ",
              lieu: "CAAP Culture",
              is_last: false,
              link: "https://www.jnpndg.be/"
            },
            {},
            {}
          )} ${validate_component(Event, "Event").$$render(
            $$result,
            {
              nom_evenement: "Campagne Ruban Blanc",
              date: "Du 23 au 04 décembre",
              lieu: "Plate-forme Ruban Blanc",
              btn_line_img_src: "ORS_illustrations_Actu trace_2.svg"
            },
            {},
            {}
          )}`;
        }
      })} ${validate_component(MonthActualites, "MonthActualites").$$render($$result, { month: "Janvier", year: "2027" }, {}, {
        default: () => {
          return `${validate_component(Event, "Event").$$render(
            $$result,
            {
              nom_evenement: "Groupe de réflexion pour auteurs de violence conjugale",
              lieu: "ORS-Espace Libre",
              btn_line_img_src: "ORS_illustrations_Actu trace 3.svg",
              btn_title: "S'inscrire"
            },
            {},
            {}
          )}`;
        }
      })} ${validate_component(MonthActualites, "MonthActualites").$$render($$result, { month: "Stage" }, {}, {
        default: () => {
          return `${validate_component(Event, "Event").$$render(
            $$result,
            {
              description: "Les candidatures pour les stages d’assistant·e social·e et de psychologue sont clôturées pour l’année académique 2026/2027",
              is_detail: false,
              info_button: false
            },
            {},
            {}
          )}`;
        }
      })} ${validate_component(MonthActualites, "MonthActualites").$$render($$result, { month: "Offre d'emploi" }, {}, {
        default: () => {
          return `${validate_component(Event, "Event").$$render(
            $$result,
            {
              description: "Aucun poste n’est à pourvoir actuellement ",
              is_detail: false,
              info_button: false
            },
            {},
            {}
          )}`;
        }
      })}`;
    }
  })} <div class="flex flex-col justify-center items-center gap-10">${validate_component(ContactButton, "ContactButton").$$render($$result, {}, {}, {})}</div>`;
});
export {
  Page as default
};
