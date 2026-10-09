import { c as create_ssr_component, b as subscribe, d as add_attribute, e as each, f as escape, v as validate_component } from "../../chunks/ssr.js";
import { _ as ___ASSET___0$1 } from "../../chunks/ors-logo.js";
import { p as page } from "../../chunks/stores.js";
const css$3 = {
  code: ".navbar.svelte-1xvtzly{display:flex;justify-content:space-evenly;margin:0 auto}.nav-item.svelte-1xvtzly{list-style:none}@media(min-width: 640px) and (max-width: 1023px){img.svelte-1xvtzly{max-height:40px !important}}",
  map: '{"version":3,"file":"TopNav.svelte","sources":["TopNav.svelte"],"sourcesContent":["<script>import ___ASSET___0 from \\"$lib/assets/img/logo/ors-logo.png\\";\\n  import { page } from \\"$app/stores\\"\\n  let pages = [\\n    { label: \\"Accueil\\", value: \\"\\" },\\n    { label: \\"Qui sommes-nous\\", value: \\"qui-sommes-nous\\" },\\n    { label: \\"Nos Missions\\", value: \\"nos-missions\\" },\\n    { label: \\"Nous soutenir\\", value: \\"nous-soutenir\\" },\\n    { label: \\"Contact\\", value: \\"contact\\" },\\n    { label: \\"Actualités\\", value: \\"actualites\\" },\\n    { label: \\"N° utiles\\", value: \\"numeros-utiles\\" },\\n  ]\\n\\n  export let scrollY\\n  export let nav_height = 0\\n<\/script>\\n\\n<header class=\\"p-6 pt-10 flex-col-center fixed w-full bg-off-white z-10\\">\\n  <div class=\\"flex-row-center gap-4 w-full\\" style=\\"{\' max-width: 80rem;\'}\\">\\n    {#if !(scrollY < 130 && ($page.url.pathname === \\"/accueil\\" || $page.url.pathname === \\"/\\"))}\\n      <a class=\\"onglet\\" href=\\"/\\">\\n        <img\\n          src=\\"{___ASSET___0}\\"\\n          class=\\"\\"\\n          alt=\\"ORS logo\\"\\n          style=\\"{`max-height:${nav_height}px;`}\\"\\n        />\\n      </a>\\n    {/if}\\n\\n    <nav class=\\"navbar border rounded-full w-full flex\\" bind:offsetHeight=\\"{nav_height}\\">\\n      {#each pages as page, index (page)}\\n        <li class=\\"nav-item uppercase py-1 m-0 p-0\\">\\n          <a class=\\"onglet\\" href=\\"/{page.value}\\">{page.label}</a>\\n        </li>\\n        {#if index !== pages.length - 1}\\n          <span class=\\"flex justify-center items-center\\">|</span>\\n        {/if}\\n      {/each}\\n    </nav>\\n  </div>\\n</header>\\n\\n<style>\\n  .navbar {\\n    display: flex;\\n    justify-content: space-evenly;\\n    margin: 0 auto;\\n  }\\n  .nav-item {\\n    list-style: none;\\n  }\\n\\n  @media (min-width: 640px) and (max-width: 1023px) {\\n    img {\\n      max-height: 40px !important;\\n    }\\n  }\\n</style>\\n"],"names":[],"mappings":"AA2CE,sBAAQ,CACN,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,YAAY,CAC7B,MAAM,CAAE,CAAC,CAAC,IACZ,CACA,wBAAU,CACR,UAAU,CAAE,IACd,CAEA,MAAO,YAAY,KAAK,CAAC,CAAC,GAAG,CAAC,YAAY,MAAM,CAAE,CAChD,kBAAI,CACF,UAAU,CAAE,IAAI,CAAC,UACnB,CACF"}'
};
const TopNav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let pages = [
    { label: "Accueil", value: "" },
    {
      label: "Qui sommes-nous",
      value: "qui-sommes-nous"
    },
    {
      label: "Nos Missions",
      value: "nos-missions"
    },
    {
      label: "Nous soutenir",
      value: "nous-soutenir"
    },
    { label: "Contact", value: "contact" },
    { label: "Actualités", value: "actualites" },
    {
      label: "N° utiles",
      value: "numeros-utiles"
    }
  ];
  let { scrollY } = $$props;
  let { nav_height = 0 } = $$props;
  if ($$props.scrollY === void 0 && $$bindings.scrollY && scrollY !== void 0)
    $$bindings.scrollY(scrollY);
  if ($$props.nav_height === void 0 && $$bindings.nav_height && nav_height !== void 0)
    $$bindings.nav_height(nav_height);
  $$result.css.add(css$3);
  $$unsubscribe_page();
  return `<header class="p-6 pt-10 flex-col-center fixed w-full bg-off-white z-10"><div class="flex-row-center gap-4 w-full"${add_attribute("style", " max-width: 80rem;", 0)}>${!(scrollY < 130 && ($page.url.pathname === "/accueil" || $page.url.pathname === "/")) ? `<a class="onglet" href="/"><img${add_attribute("src", ___ASSET___0$1, 0)} class=" svelte-1xvtzly" alt="ORS logo"${add_attribute("style", `max-height:${nav_height}px;`, 0)}></a>` : ``} <nav class="navbar border rounded-full w-full flex svelte-1xvtzly">${each(pages, (page2, index) => {
    return `<li class="nav-item uppercase py-1 m-0 p-0 svelte-1xvtzly"><a class="onglet" href="${"/" + escape(page2.value, true)}">${escape(page2.label)}</a></li> ${index !== pages.length - 1 ? `<span class="flex justify-center items-center" data-svelte-h="svelte-e96wp0">|</span>` : ``}`;
  })}</nav></div> </header>`;
});
const css$2 = {
  code: ".menu-button.svelte-dlmr9i{top:0;right:0;padding-inline:25px;border-radius:50px;border:0.7px solid grey}.menu.svelte-dlmr9i{position:fixed;left:0;width:100%;padding:20px;overflow-y:scroll;display:flex;flex-direction:column;align-items:end;animation:slideDown 0.5s ease-in-out}.menu-item.svelte-dlmr9i{padding:10px;text-align:right;width:inherit}.menu-divider.svelte-dlmr9i{border:0,\n      7px solid grey;max-width:200px;width:inherit}",
  map: '{"version":3,"file":"MobileNav.svelte","sources":["MobileNav.svelte"],"sourcesContent":["<script>import ___ASSET___0 from \\"$lib/assets/img/logo/ors-logo.png\\";\\n  import { slide } from \\"svelte/transition\\"\\n  import { page } from \\"$app/stores\\"\\n\\n  let pages = [\\n    { label: \\"Accueil\\", value: \\"\\" },\\n    { label: \\"Qui sommes-nous\\", value: \\"qui-sommes-nous\\" },\\n    { label: \\"Nos Missions\\", value: \\"nos-missions\\" },\\n    { label: \\"Nous soutenir\\", value: \\"nous-soutenir\\" },\\n    { label: \\"Contact\\", value: \\"contact\\" },\\n    { label: \\"Actualités\\", value: \\"actualites\\" },\\n    { label: \\"N° utiles\\", value: \\"numeros-utiles\\" },\\n  ]\\n\\n  export let scrollY\\n  export let mobile_nav_height = 0\\n  export let isMenuOpen = false\\n\\n  function toggleMenu() {\\n    isMenuOpen = !isMenuOpen\\n  }\\n<\/script>\\n\\n<div\\n  class=\\"bg-off-white flex justify-between px-6 py-5 fixed w-full z-10\\"\\n  bind:offsetHeight=\\"{mobile_nav_height}\\"\\n>\\n  <a class=\\"onglet\\" href=\\"/\\">\\n    <img\\n      src=\\"{___ASSET___0}\\"\\n      class=\\"\\"\\n      alt=\\"ORS logo\\"\\n      style=\\"{`max-height:40px;`}\\"\\n      class:invisible=\\"{scrollY < 130 && $page.url.pathname === \'/\'}\\"\\n    />\\n  </a>\\n\\n  <button class=\\"menu-button nav-onglet\\" on:click=\\"{toggleMenu}\\"> Menu </button>\\n\\n  {#if isMenuOpen}\\n    <div class=\\"menu bg-off-white\\" style=\\"{`top: ${mobile_nav_height}px`}\\" transition:slide>\\n      {#each pages as page, index}\\n        <a class=\\"menu-item nav-onglet\\" href=\\"/{page.value}\\" on:click=\\"{() => (isMenuOpen = false)}\\"\\n          >{page.label}</a\\n        >\\n        {#if index !== pages.length - 1}\\n          <hr class=\\"menu-divider\\" />\\n        {/if}\\n      {/each}\\n    </div>\\n  {/if}\\n</div>\\n\\n<style>\\n  .menu-button {\\n    top: 0;\\n    right: 0;\\n    padding-inline: 25px;\\n    border-radius: 50px;\\n    border: 0.7px solid grey;\\n  }\\n\\n  .menu {\\n    position: fixed;\\n    left: 0;\\n    width: 100%;\\n    padding: 20px;\\n    overflow-y: scroll;\\n    display: flex;\\n    flex-direction: column;\\n    align-items: end;\\n    animation: slideDown 0.5s ease-in-out;\\n  }\\n\\n  .menu-item {\\n    padding: 10px;\\n    text-align: right;\\n    width: inherit;\\n  }\\n\\n  .menu-divider {\\n    border:\\n      0,\\n      7px solid grey;\\n    max-width: 200px;\\n    width: inherit;\\n  }\\n</style>\\n"],"names":[],"mappings":"AAsDE,0BAAa,CACX,GAAG,CAAE,CAAC,CACN,KAAK,CAAE,CAAC,CACR,cAAc,CAAE,IAAI,CACpB,aAAa,CAAE,IAAI,CACnB,MAAM,CAAE,KAAK,CAAC,KAAK,CAAC,IACtB,CAEA,mBAAM,CACJ,QAAQ,CAAE,KAAK,CACf,IAAI,CAAE,CAAC,CACP,KAAK,CAAE,IAAI,CACX,OAAO,CAAE,IAAI,CACb,UAAU,CAAE,MAAM,CAClB,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,WAAW,CAAE,GAAG,CAChB,SAAS,CAAE,SAAS,CAAC,IAAI,CAAC,WAC5B,CAEA,wBAAW,CACT,OAAO,CAAE,IAAI,CACb,UAAU,CAAE,KAAK,CACjB,KAAK,CAAE,OACT,CAEA,2BAAc,CACZ,MAAM,CACJ,CAAC;AACP,MAAM,GAAG,CAAC,KAAK,CAAC,IAAI,CAChB,SAAS,CAAE,KAAK,CAChB,KAAK,CAAE,OACT"}'
};
const MobileNav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let pages = [
    { label: "Accueil", value: "" },
    {
      label: "Qui sommes-nous",
      value: "qui-sommes-nous"
    },
    {
      label: "Nos Missions",
      value: "nos-missions"
    },
    {
      label: "Nous soutenir",
      value: "nous-soutenir"
    },
    { label: "Contact", value: "contact" },
    { label: "Actualités", value: "actualites" },
    {
      label: "N° utiles",
      value: "numeros-utiles"
    }
  ];
  let { scrollY } = $$props;
  let { mobile_nav_height = 0 } = $$props;
  let { isMenuOpen = false } = $$props;
  if ($$props.scrollY === void 0 && $$bindings.scrollY && scrollY !== void 0)
    $$bindings.scrollY(scrollY);
  if ($$props.mobile_nav_height === void 0 && $$bindings.mobile_nav_height && mobile_nav_height !== void 0)
    $$bindings.mobile_nav_height(mobile_nav_height);
  if ($$props.isMenuOpen === void 0 && $$bindings.isMenuOpen && isMenuOpen !== void 0)
    $$bindings.isMenuOpen(isMenuOpen);
  $$result.css.add(css$2);
  $$unsubscribe_page();
  return `<div class="bg-off-white flex justify-between px-6 py-5 fixed w-full z-10"><a class="onglet" href="/"><img${add_attribute("src", ___ASSET___0$1, 0)} class="${[
    "",
    scrollY < 130 && $page.url.pathname === "/" ? "invisible" : ""
  ].join(" ").trim()}" alt="ORS logo"${add_attribute("style", `max-height:40px;`, 0)}></a> <button class="menu-button nav-onglet svelte-dlmr9i" data-svelte-h="svelte-c7zz0g">Menu</button> ${isMenuOpen ? `<div class="menu bg-off-white svelte-dlmr9i"${add_attribute("style", `top: ${mobile_nav_height}px`, 0)}>${each(pages, (page2, index) => {
    return `<a class="menu-item nav-onglet svelte-dlmr9i" href="${"/" + escape(page2.value, true)}">${escape(page2.label)}</a> ${index !== pages.length - 1 ? `<hr class="menu-divider svelte-dlmr9i">` : ``}`;
  })}</div>` : ``} </div>`;
});
const ___ASSET___0 = "/_app/immutable/assets/fwb-blanc.BG8dsE-Z.png";
const ___ASSET___1 = "/_app/immutable/assets/wallonie-blanc.CvFVCfLk.png";
const ___ASSET___2 = "/_app/immutable/assets/charleroi-blanc.UUltpRy5.png";
const ___ASSET___3 = "/_app/immutable/assets/ibz-blanc.aqF3iPcM.png";
const ___ASSET___4 = "/_app/immutable/assets/maribel-ass.xfk56-dH.png";
const ___ASSET___5 = "/_app/immutable/assets/ue-blanc.CAh0QxjG.png";
const css$1 = {
  code: "footer.svelte-1fiepb0{color:#FFF6F3}.image-parent.svelte-1fiepb0{width:50px;height:50px}img.svelte-1fiepb0{height:inherit}@media(min-width: 640px) and (max-width: 1024px){.section-logos.svelte-1fiepb0{position:absolute;bottom:30px;left:30px}.section-text.svelte-1fiepb0{max-width:80%;padding-bottom:60px}.section-legale.svelte-1fiepb0{position:absolute;bottom:30px;right:30px}}@media(min-width: 1024px){.image-parent.svelte-1fiepb0{width:80px;height:80px}.section.svelte-1fiepb0{width:33%}.section-text.svelte-1fiepb0{width:60%}.wallonie_logo.svelte-1fiepb0{min-width:100px !important;min-height:100px !important}}",
  map: `{"version":3,"file":"Footer.svelte","sources":["Footer.svelte"],"sourcesContent":["<script>import ___ASSET___0 from \\"$lib/assets/img/logo/fwb-blanc.png\\";import ___ASSET___1 from \\"$lib/assets/img/logo/wallonie-blanc.png\\";import ___ASSET___2 from \\"$lib/assets/img/logo/charleroi-blanc.png\\";import ___ASSET___3 from \\"$lib/assets/img/logo/ibz-blanc.png\\";import ___ASSET___4 from \\"$lib/assets/img/logo/maribel-ass.png\\";import ___ASSET___5 from \\"$lib/assets/img/logo/ue-blanc.png\\";\\n  export let isMobile\\n<\/script>\\n\\n<footer class=\\" bg-grey flex justify-center flex-col pb-4 items-center\\">\\n  <div class=\\"bg-pink mention-service w-full text-center text-grey py-3 px-3 lg:py-8\\">\\n    {#if isMobile}\\n      Service gratuit • Confidentiel <br /> Indépendant des instances judiciaires\\n    {:else}\\n      Service gratuit • Confidentiel • Indépendant des instances judiciaires\\n    {/if}\\n  </div>\\n\\n  <div\\n    class=\\"flex flex-col sm:flex-row justify-center px-8 py-5 gap-8\\"\\n    style=\\"{'max-width: 80rem;'}\\"\\n  >\\n    <!-- LOGOS -->\\n    <div\\n      class=\\" section section-logos order-2 sm:order-1 flex flex-col gap-4 lg:items-baseline lg:justify-end\\"\\n    >\\n      <div class=\\"flex flex-row gap-4 justify-center\\">\\n        <div class=\\"flex flex-col image-parent\\">\\n          <img src=\\"{___ASSET___0}\\" class=\\"object-contain\\" alt=\\"FWB logo\\" />\\n        </div>\\n        <div class=\\"flex flex-col image-parent justify-center items-center\\">\\n          <img\\n            src=\\"{___ASSET___1}\\"\\n            class=\\"wallonie_logo object-cover\\"\\n            style=\\"min-width: 70px; min-height: 70px\\"\\n            alt=\\"Wallonie logo\\"\\n          />\\n        </div>\\n        <div class=\\"flex flex-col image-parent\\">\\n          <img\\n            src=\\"{___ASSET___2}\\"\\n            class=\\"object-contain\\"\\n            alt=\\"Charleroi logo\\"\\n          />\\n        </div>\\n      </div>\\n      <div class=\\"flex flex-row gap-4 justify-center\\">\\n        <div class=\\"flex flex-col image-parent\\">\\n          <img src=\\"{___ASSET___3}\\" class=\\"object-contain\\" alt=\\"IBZ logo\\" />\\n        </div>\\n        <div class=\\"flex flex-col image-parent\\">\\n          <img src=\\"{___ASSET___4}\\" class=\\"object-contain\\" alt=\\"UE logo\\" />\\n        </div>\\n        <div class=\\"flex flex-col image-parent\\">\\n          <img src=\\"{___ASSET___5}\\" class=\\"object-contain\\" alt=\\"UE logo\\" />\\n        </div>\\n      </div>\\n    </div>\\n\\n    <!-- TEXT -->\\n    <div class=\\"section section-text px-4 order-1 sm:order-2 text-center section\\">\\n      <p class=\\"footer-title uppercase\\">\\n        Ors-Espace Libre <span class=\\"lowercase\\">Asbl</span>\\n      </p>\\n\\n      <p class=\\"footer-secondary\\">\\n        Service d’aide aux Justiciables de l’arrondissement judiciaire du Hainaut - Division\\n        Charleroi\\n      </p>\\n      <p class=\\"footer-contact-info\\">27 Rue Léon Bernus, 6000 Charleroi</p>\\n      <p class=\\"footer-contact-info\\">Tél : 071/27.88.00</p>\\n      <p class=\\"footer-contact-info\\">Fax : 071/27.88.01</p>\\n      <a href=\\"mailto:contact@espacelibre.be\\" class=\\"footer-contact-info\\">contact@espacelibre.be</a>\\n    </div>\\n\\n    <!-- LEGAL -->\\n    <div\\n      class=\\"section flex items-center justify-center section-legale order-3 sm:order-3 lg:flex lg:items-end lg:justify-end\\"\\n    >\\n      <div>\\n        <div>\\n          <a href=\\"/mentions-legales\\" class=\\"pb-4 lg:pb-32 pt-0 mention-legales\\">\\n            <p class=\\"pb-4 lg:pb-32 pt-0 text-center sm:text-right mention-legales\\">\\n              Mentions Légales\\n            </p>\\n          </a>\\n        </div>\\n        <div class=\\"text-xs\\">\\n          <p class=\\"mention-footer text-center sm:text-right align-middle\\">\\n            Design © Marion Daubresse\\n          </p>\\n          <p class=\\"mention-footer text-center sm:text-right\\">Développement © Sophie Gillard</p>\\n        </div>\\n      </div>\\n    </div>\\n  </div>\\n</footer>\\n\\n<style>\\n  footer {\\n    color: #FFF6F3;\\n  }\\n\\n  .image-parent {\\n    width: 50px;\\n    height: 50px;\\n  }\\n  img {\\n    height: inherit;\\n  }\\n\\n  @media (min-width: 640px) and (max-width: 1024px) {\\n    .section-logos {\\n      position: absolute;\\n      bottom: 30px;\\n      left: 30px;\\n    }\\n    .section-text {\\n      max-width: 80%;\\n      padding-bottom: 60px;\\n    }\\n    .section-legale {\\n      position: absolute;\\n      bottom: 30px;\\n      right: 30px;\\n    }\\n  }\\n\\n  @media (min-width: 1024px) {\\n    .image-parent {\\n      width: 80px;\\n      height: 80px;\\n    }\\n    .section {\\n      width: 33%;\\n    }\\n    .section-text {\\n      width: 60%;\\n    }\\n    .wallonie_logo {\\n      min-width: 100px !important;\\n      min-height: 100px !important;\\n    }\\n  }\\n</style>\\n"],"names":[],"mappings":"AA8FE,qBAAO,CACL,KAAK,CAAE,OACT,CAEA,4BAAc,CACZ,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IACV,CACA,kBAAI,CACF,MAAM,CAAE,OACV,CAEA,MAAO,YAAY,KAAK,CAAC,CAAC,GAAG,CAAC,YAAY,MAAM,CAAE,CAChD,6BAAe,CACb,QAAQ,CAAE,QAAQ,CAClB,MAAM,CAAE,IAAI,CACZ,IAAI,CAAE,IACR,CACA,4BAAc,CACZ,SAAS,CAAE,GAAG,CACd,cAAc,CAAE,IAClB,CACA,8BAAgB,CACd,QAAQ,CAAE,QAAQ,CAClB,MAAM,CAAE,IAAI,CACZ,KAAK,CAAE,IACT,CACF,CAEA,MAAO,YAAY,MAAM,CAAE,CACzB,4BAAc,CACZ,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IACV,CACA,uBAAS,CACP,KAAK,CAAE,GACT,CACA,4BAAc,CACZ,KAAK,CAAE,GACT,CACA,6BAAe,CACb,SAAS,CAAE,KAAK,CAAC,UAAU,CAC3B,UAAU,CAAE,KAAK,CAAC,UACpB,CACF"}`
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { isMobile } = $$props;
  if ($$props.isMobile === void 0 && $$bindings.isMobile && isMobile !== void 0)
    $$bindings.isMobile(isMobile);
  $$result.css.add(css$1);
  return `<footer class="bg-grey flex justify-center flex-col pb-4 items-center svelte-1fiepb0"><div class="bg-pink mention-service w-full text-center text-grey py-3 px-3 lg:py-8">${isMobile ? `Service gratuit • Confidentiel <br> Indépendant des instances judiciaires` : `Service gratuit • Confidentiel • Indépendant des instances judiciaires`}</div> <div class="flex flex-col sm:flex-row justify-center px-8 py-5 gap-8"${add_attribute("style", "max-width: 80rem;", 0)} data-svelte-h="svelte-1si53o"> <div class="section section-logos order-2 sm:order-1 flex flex-col gap-4 lg:items-baseline lg:justify-end svelte-1fiepb0"><div class="flex flex-row gap-4 justify-center"><div class="flex flex-col image-parent svelte-1fiepb0"><img${add_attribute("src", ___ASSET___0, 0)} class="object-contain svelte-1fiepb0" alt="FWB logo"></div> <div class="flex flex-col image-parent justify-center items-center svelte-1fiepb0"><img${add_attribute("src", ___ASSET___1, 0)} class="wallonie_logo object-cover svelte-1fiepb0" style="min-width: 70px; min-height: 70px" alt="Wallonie logo"></div> <div class="flex flex-col image-parent svelte-1fiepb0"><img${add_attribute("src", ___ASSET___2, 0)} class="object-contain svelte-1fiepb0" alt="Charleroi logo"></div></div> <div class="flex flex-row gap-4 justify-center"><div class="flex flex-col image-parent svelte-1fiepb0"><img${add_attribute("src", ___ASSET___3, 0)} class="object-contain svelte-1fiepb0" alt="IBZ logo"></div> <div class="flex flex-col image-parent svelte-1fiepb0"><img${add_attribute("src", ___ASSET___4, 0)} class="object-contain svelte-1fiepb0" alt="UE logo"></div> <div class="flex flex-col image-parent svelte-1fiepb0"><img${add_attribute("src", ___ASSET___5, 0)} class="object-contain svelte-1fiepb0" alt="UE logo"></div></div></div>  <div class="section section-text px-4 order-1 sm:order-2 text-center section svelte-1fiepb0"><p class="footer-title uppercase">Ors-Espace Libre <span class="lowercase">Asbl</span></p> <p class="footer-secondary">Service d’aide aux Justiciables de l’arrondissement judiciaire du Hainaut - Division
        Charleroi</p> <p class="footer-contact-info">27 Rue Léon Bernus, 6000 Charleroi</p> <p class="footer-contact-info">Tél : 071/27.88.00</p> <p class="footer-contact-info">Fax : 071/27.88.01</p> <a href="mailto:contact@espacelibre.be" class="footer-contact-info">contact@espacelibre.be</a></div>  <div class="section flex items-center justify-center section-legale order-3 sm:order-3 lg:flex lg:items-end lg:justify-end svelte-1fiepb0"><div><div><a href="/mentions-legales" class="pb-4 lg:pb-32 pt-0 mention-legales"><p class="pb-4 lg:pb-32 pt-0 text-center sm:text-right mention-legales">Mentions Légales</p></a></div> <div class="text-xs"><p class="mention-footer text-center sm:text-right align-middle">Design © Marion Daubresse</p> <p class="mention-footer text-center sm:text-right">Développement © Sophie Gillard</p></div></div></div></div> </footer>`;
});
const css = {
  code: 'body{background-image:url("/src/lib/assets/img/Fonds/Fond_Web.svg");background-size:cover;background-repeat:no-repeat}@media(max-width: 480px){body{background-image:url("/src/lib/assets/img/Fonds/Fond_Mobile.svg")}}.app.svelte-1e5r02p{display:flex;flex-direction:column}.z-negative.svelte-1e5r02p{z-index:-1}main.svelte-1e5r02p{flex:1;display:flex;flex-direction:column;width:100%;max-width:75rem;margin:0 auto;box-sizing:border-box}@media(min-width: 480px){}@media(min-width: 768px){}',
  map: '{"version":3,"file":"+layout.svelte","sources":["+layout.svelte"],"sourcesContent":["<script>\\n  import TopNav from \\"$lib/components/navigation/TopNav.svelte\\"\\n  import MobileNav from \\"$lib/components/navigation/MobileNav.svelte\\"\\n  import Footer from \\"$lib/components/navigation/Footer.svelte\\"\\n  import \\"$lib/styles/styles.css\\"\\n\\n  let nav_height = 0\\n  let mobile_nav_height = 0\\n  let isMobile = false\\n  let isTablet = false\\n  let innerWidth\\n  let innerHeight\\n  let isMenuOpen = false\\n  let content_height\\n  let footer_height\\n\\n  $: content_height = innerHeight - (isMobile ? mobile_nav_height : nav_height) - 40\\n  let y\\n  $: {\\n    isMobile = innerWidth && innerWidth <= 480\\n    isTablet = innerWidth && innerWidth <= 850\\n  }\\n<\/script>\\n\\n<svelte:window bind:innerWidth bind:innerHeight bind:scrollY=\\"{y}\\" />\\n<div class=\\"\\">\\n  {#if !isMobile && !isTablet}\\n    <TopNav bind:nav_height scrollY=\\"{y}\\" />\\n  {:else}\\n    <MobileNav scrollY=\\"{y}\\" bind:mobile_nav_height bind:isMenuOpen />\\n  {/if}\\n\\n  <div\\n    class=\\"app relative\\"\\n    class:z-negative=\\"{isMenuOpen}\\"\\n    style=\\"{`top: ${!isMobile && !isTablet ? nav_height + 90 : mobile_nav_height}px; min-height: ${content_height}px;`}\\"\\n  >\\n    <main class=\\"p-8 px-6 lg:pt-20\\">\\n      <slot {isMobile} {isTablet} />\\n    </main>\\n\\n    <Footer {isMobile} {isTablet} bind:footer_height />\\n  </div>\\n</div>\\n\\n<style>\\n  :global(body) {\\n    background-image: url(\\"/src/lib/assets/img/Fonds/Fond_Web.svg\\");\\n    background-size: cover;\\n    background-repeat: no-repeat;\\n  }\\n\\n  @media (max-width: 480px) {\\n    :global(body) {\\n      background-image: url(\\"/src/lib/assets/img/Fonds/Fond_Mobile.svg\\");\\n    }\\n  }\\n\\n  .app {\\n    display: flex;\\n    flex-direction: column;\\n  }\\n  .z-negative {\\n    z-index: -1;\\n  }\\n\\n  main {\\n    flex: 1;\\n    display: flex;\\n    flex-direction: column;\\n\\n    width: 100%;\\n    max-width: 75rem;\\n    margin: 0 auto;\\n    box-sizing: border-box;\\n  }\\n\\n  footer {\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: center;\\n    align-items: center;\\n    padding: 12px;\\n  }\\n\\n  footer a {\\n    font-weight: bold;\\n  }\\n\\n  @media (min-width: 480px) {\\n    footer {\\n      padding: 12px 0;\\n    }\\n  }\\n\\n  @media (min-width: 768px) {\\n  }\\n</style>\\n"],"names":[],"mappings":"AA8CU,IAAM,CACZ,gBAAgB,CAAE,6CAA6C,CAC/D,eAAe,CAAE,KAAK,CACtB,iBAAiB,CAAE,SACrB,CAEA,MAAO,YAAY,KAAK,CAAE,CAChB,IAAM,CACZ,gBAAgB,CAAE,gDACpB,CACF,CAEA,mBAAK,CACH,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAClB,CACA,0BAAY,CACV,OAAO,CAAE,EACX,CAEA,mBAAK,CACH,IAAI,CAAE,CAAC,CACP,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CAEtB,KAAK,CAAE,IAAI,CACX,SAAS,CAAE,KAAK,CAChB,MAAM,CAAE,CAAC,CAAC,IAAI,CACd,UAAU,CAAE,UACd,CAcA,MAAO,YAAY,KAAK,CAAE,CAI1B,CAEA,MAAO,YAAY,KAAK,CAAE,CAC1B"}'
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let nav_height = 0;
  let mobile_nav_height = 0;
  let isMobile = false;
  let isTablet = false;
  let innerWidth;
  let innerHeight;
  let isMenuOpen = false;
  let content_height;
  let footer_height;
  let y;
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    {
      {
        isMobile = innerWidth;
        isTablet = innerWidth;
      }
    }
    content_height = innerHeight - (isMobile ? mobile_nav_height : nav_height) - 40;
    $$rendered = ` <div class="">${!isMobile && !isTablet ? `${validate_component(TopNav, "TopNav").$$render(
      $$result,
      { scrollY: y, nav_height },
      {
        nav_height: ($$value) => {
          nav_height = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : `${validate_component(MobileNav, "MobileNav").$$render(
      $$result,
      {
        scrollY: y,
        mobile_nav_height,
        isMenuOpen
      },
      {
        mobile_nav_height: ($$value) => {
          mobile_nav_height = $$value;
          $$settled = false;
        },
        isMenuOpen: ($$value) => {
          isMenuOpen = $$value;
          $$settled = false;
        }
      },
      {}
    )}`} <div class="${["app relative svelte-1e5r02p", isMenuOpen ? "z-negative" : ""].join(" ").trim()}"${add_attribute(
      "style",
      `top: ${!isMobile && !isTablet ? nav_height + 90 : mobile_nav_height}px; min-height: ${content_height}px;`,
      0
    )}><main class="p-8 px-6 lg:pt-20 svelte-1e5r02p">${slots.default ? slots.default({ isMobile, isTablet }) : ``}</main> ${validate_component(Footer, "Footer").$$render(
      $$result,
      { isMobile, isTablet, footer_height },
      {
        footer_height: ($$value) => {
          footer_height = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div> </div>`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Layout as default
};
