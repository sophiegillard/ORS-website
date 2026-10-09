import { c as create_ssr_component, h as createEventDispatcher, f as escape } from "./ssr.js";
const SecondaryLinkButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { href = "" } = $$props;
  let { title = "" } = $$props;
  let { custom_class = "" } = $$props;
  createEventDispatcher();
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.custom_class === void 0 && $$bindings.custom_class && custom_class !== void 0)
    $$bindings.custom_class(custom_class);
  return `<button class="${"bg-blue hover:bg-blue-hover px-6 lg:px-8 py-3 rounded-full border-grey border w-auto " + escape(custom_class, true)}" style="min-width: 20%; width: fit-content; min-height: 60px">${title ? `${escape(title)}` : `${slots.default ? slots.default({}) : ``}`}</button>`;
});
export {
  SecondaryLinkButton as S
};
