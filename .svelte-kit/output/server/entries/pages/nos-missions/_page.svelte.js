import { c as create_ssr_component, v as validate_component, d as add_attribute } from "../../../chunks/ssr.js";
import { S as SectionWithTitleMain } from "../../../chunks/SectionWithTitleMain.js";
import { A as AutorButtonsGroup } from "../../../chunks/AutorButtonsGroup.js";
const ___ASSET___0 = "/_app/immutable/assets/nos_missions_bonhomme.BP2cdKk4.png";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-1uecubl_START -->${$$result.title = `<title>Nos missions</title>`, ""}<meta name="nos-misisons" content="missions"><!-- HEAD_svelte-1uecubl_END -->`, ""} <div class="text-column">${validate_component(SectionWithTitleMain, "SectionWithTitleMain").$$render($$result, { title: "Nos missions", width: 220 }, {}, {
    default: () => {
      return `<img${add_attribute("src", ___ASSET___0, 0)} alt="illustration" class="float-right hidden md:block w-1/3 relative" style="max-width: 330px"> <p data-svelte-h="svelte-1bqprjt">Notre service s’adresse à <span class="markup-text">tout justiciable</span>, victime ou
      auteur.e d’une infraction pénale, ainsi qu’à ses proches, en vue de leur apporter une
      <span class="markup-text">aide sociale et/ou psychologique</span>.
      <br>
      Ces aides sont définies par le décret du 05/10/2023 du Ministère de la Communauté française introduisant
      le code de la justice communautaire.</p> <p data-svelte-h="svelte-oya6e2">« La mission d’aide sociale s’entend comme toute aide de nature non financière destinée à
      permettre au justiciable de <span class="markup-text">préserver, d’améliorer</span> ou de
      <span class="markup-text">restaurer</span> ses conditions de vie, sur le plan familial, social,
      économique, professionnel, politique ou culturel. »</p> <p data-svelte-h="svelte-1lxvx0">« La mission d’aide psychologique s’entend comme toute aide destinée à
      <span class="markup-text">soutenir</span>
      psychologiquement le justiciable afin qu’il trouve un nouvel équilibre de vie. »</p> <p data-svelte-h="svelte-yz0r7m">Toutes nos interventions sont soumises au
      <span class="markup-text">secret professionnel</span> et indépendantes des instances judiciaires
      ou autres. Nous ne rédigeons et ne remettons aucun rapport, aucune expertise, quelle que soit l’institution
      ou la personne qui en fait la demande.</p> <p data-svelte-h="svelte-1rz1pgx">Nous recevons sur rendez-vous au sein du service. Des visites à domicile et/ou à l&#39;extérieur
      sont également envisageables sous certaines conditions.</p>`;
    }
  })} <div class="flex justify-center" data-svelte-h="svelte-ngkaz9"><img${add_attribute("src", ___ASSET___0, 0)} alt="illustration" class="md:hidden w-2/3 max-w-60 pb-8"></div> <div class="flex flex-col items-center">${validate_component(AutorButtonsGroup, "AutorButtonsGroup").$$render($$result, {}, {}, {})}</div> </div>`;
});
export {
  Page as default
};
