import { c as create_ssr_component, f as escape, i as null_to_empty, d as add_attribute } from "./ssr.js";
const ___ASSET___0 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAkIAAAAUCAYAAABh71LDAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAM5SURBVHgB7dxbUhNBFMbx0wlU+QY7sHcgOxCW4IulT+AOcAmuQF2B+ITig0sYXAG4g3YH4c0qIW3PNRMq032STIpc/r8qmJA+uUAB/c3pTowAANR89vMwHA71t/gXas0c9c0jWelFX/ezCYyThfmRyGA0X/2+qt6cvHKCtWUEADqkJ/3UJJ+ahFPj5rmk2fiwVwaX/PvwCwQWoA9mVIarmUbl+GN+xvXFfdw9um83Pd4OfFOBbhRC2xxhcDsQhIA5pcPBvY3cOjKWGo+FAh8JJMkgYAUApjTBrBW26uDVDlt5yGqHqz0nGxaoCEJI0i8FaJYAxsplgmU7BX7JTgXhAACWU4empiPlJiEqv66+fs895fLhTgWhMKFbXeW9ok47oWvrVEsAkp7g6xr1HgYrAAA8uSI4uaoDFY7+zyQwFUt4bhWdpiYI+ezHcfwsWbXh7kB5tt9TV6ChrQOAPrg5ajv2d/T6GBHjuwUffwNpTyhn0c5LTb3V1zJH9af4Xb6tOku/y8smBKTXt7KgIgj57PtNOBwJAEyJbuDMpSZ5J1H5GV/M2ElaomYYnt+DIgg828mNolgPPru03aPDENAeZoS0wWG56tBmZgS6dkB8HPimVhCsbKwmIP0KP5frsNx2q/17Nj67Ogs3/CIAlFLhIPoS3tiYxINBLBTkGxXHHc8pHgTMyVsnANAyCWbtEFYHrzps5SFqcDAdrvJO2bq8AtNch09fw/O/jv2fC0Ho23k4fBSgU7IrUFMsAXhFjaaVn+oUxIJBwUXGCAcAsKTyhTZ/80Bkq6vCcWAnAUqqy8auPjh1hyJTpr7hzXqkt5VzujLNm3JpJvScdn1etQSQU9RplwKY8AEA66HqQtmy81R3loplPVvtybLSC3MR5sgP9fxnJg9uzquE1vUUE2v5RY2yc5A8W685RQ2TOQAAO8BnV0flUp3J9zXbkCdeSLHHeZFmTh6I9t/zPkIAAGCjVQEpfAyOw5cvRd098gQhAACwXcpgND4OXZ9Tib0q3pgLghAAANhaZSjy5zKzUzR+RxACAAA7wWeXZyLD03Lztf9sTt58EgAAAAAAAAAAAAAAAAAAAADYRv8Bps4xPzDQzGMAAAAASUVORK5CYII=";
const css = {
  code: ".text-content.svelte-1pg55je{padding-bottom:3rem}.subtitle-line.svelte-1pg55je{top:25px}@media(min-width: 480px){.subtitle-line.svelte-1pg55je{height:20px}}@media(min-width: 1024px){.subtitle-line.svelte-1pg55je{top:50px;height:20px !important}}",
  map: '{"version":3,"file":"SectionWithTitleMain.svelte","sources":["SectionWithTitleMain.svelte"],"sourcesContent":["<script>import ___ASSET___0 from \\"$lib/assets/img/lines/trace_quiSommesNous_1.png\\";\\n  export let title\\n  export let first_line_title\\n  export let custom_class = \\"\\"\\n  export let left = -10\\n  export let top\\n\\n  let title_width = 0\\n<\/script>\\n\\n<div class=\\"{custom_class}\\">\\n  {#if title}\\n    <div class=\\"relative z-0\\">\\n      <h2 class=\\"p-0 pb-0 {custom_class} \\">\\n        {#if first_line_title}\\n          {first_line_title}\\n          <br />\\n        {/if}\\n      </h2>\\n      <h2 class=\\"w-fit {custom_class}\\" bind:offsetWidth=\\"{title_width}\\">\\n        {title}\\n      </h2>\\n      <img\\n        src=\\"{___ASSET___0}\\"\\n        alt=\\"title bottom border\\"\\n        class=\\" z-10 subtitle-line absolute\\"\\n        style=\\"{`width : ${title_width + 15}px; left: ${left}px; height: 12px; top: ${top}px;`}\\"\\n      />\\n    </div>\\n  {/if}\\n  <div class=\\"text-content pt-5 px-5 sm:pt-8 md:pt-12\\">\\n    <slot />\\n  </div>\\n</div>\\n\\n<style>\\n  .text-content {\\n    padding-bottom: 3rem;\\n  }\\n\\n  .subtitle-line {\\n    top: 25px;\\n  }\\n\\n  @media (min-width: 480px) {\\n    .subtitle-line {\\n      height: 20px;\\n    }\\n  }\\n\\n  @media (min-width: 1024px) {\\n    .subtitle-line {\\n      top: 50px;\\n      height: 20px !important;\\n    }\\n  }\\n</style>\\n"],"names":[],"mappings":"AAoCE,4BAAc,CACZ,cAAc,CAAE,IAClB,CAEA,6BAAe,CACb,GAAG,CAAE,IACP,CAEA,MAAO,YAAY,KAAK,CAAE,CACxB,6BAAe,CACb,MAAM,CAAE,IACV,CACF,CAEA,MAAO,YAAY,MAAM,CAAE,CACzB,6BAAe,CACb,GAAG,CAAE,IAAI,CACT,MAAM,CAAE,IAAI,CAAC,UACf,CACF"}'
};
const SectionWithTitleMain = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  let { first_line_title } = $$props;
  let { custom_class = "" } = $$props;
  let { left = -10 } = $$props;
  let { top } = $$props;
  let title_width = 0;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.first_line_title === void 0 && $$bindings.first_line_title && first_line_title !== void 0)
    $$bindings.first_line_title(first_line_title);
  if ($$props.custom_class === void 0 && $$bindings.custom_class && custom_class !== void 0)
    $$bindings.custom_class(custom_class);
  if ($$props.left === void 0 && $$bindings.left && left !== void 0)
    $$bindings.left(left);
  if ($$props.top === void 0 && $$bindings.top && top !== void 0)
    $$bindings.top(top);
  $$result.css.add(css);
  return `<div class="${escape(null_to_empty(custom_class), true) + " svelte-1pg55je"}">${title ? `<div class="relative z-0"><h2 class="${"p-0 pb-0 " + escape(custom_class, true) + " svelte-1pg55je"}">${first_line_title ? `${escape(first_line_title)} <br>` : ``}</h2> <h2 class="${"w-fit " + escape(custom_class, true) + " svelte-1pg55je"}">${escape(title)}</h2> <img${add_attribute("src", ___ASSET___0, 0)} alt="title bottom border" class="z-10 subtitle-line absolute svelte-1pg55je"${add_attribute("style", `width : ${title_width + 15}px; left: ${left}px; height: 12px; top: ${top}px;`, 0)}></div>` : ``} <div class="text-content pt-5 px-5 sm:pt-8 md:pt-12 svelte-1pg55je">${slots.default ? slots.default({}) : ``}</div> </div>`;
});
export {
  SectionWithTitleMain as S
};
