import * as universal from '../entries/pages/_page.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.js";
export const imports = ["_app/immutable/nodes/2.BLbpcunH.js","_app/immutable/chunks/scheduler.5EadbRtP.js","_app/immutable/chunks/index.BMNSwIlz.js","_app/immutable/chunks/ors-logo.9TNx7nGw.js","_app/immutable/chunks/AutorButtonsGroup.D3-OGRQp.js","_app/immutable/chunks/ContactButton.BJbaEhFJ.js"];
export const stylesheets = ["_app/immutable/assets/3.BDhCSrm9.css","_app/immutable/assets/AutorButtonsGroup.EYw_4kP8.css","_app/immutable/assets/ContactButton.DJc6zecR.css"];
export const fonts = [];
