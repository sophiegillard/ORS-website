import * as universal from '../entries/pages/actualites/_page.js';

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/actualites/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/actualites/+page.js";
export const imports = ["_app/immutable/nodes/7.CYpH9D-O.js","_app/immutable/chunks/scheduler.5EadbRtP.js","_app/immutable/chunks/index.BMNSwIlz.js","_app/immutable/chunks/SectionWithTitleMain.Div810i3.js","_app/immutable/chunks/ContactButton.BJbaEhFJ.js"];
export const stylesheets = ["_app/immutable/assets/7.BfDhTrEQ.css","_app/immutable/assets/SectionWithTitleMain.CkyzidI9.css","_app/immutable/assets/ContactButton.DJc6zecR.css"];
export const fonts = [];
