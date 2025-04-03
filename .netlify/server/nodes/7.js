import * as universal from '../entries/pages/movie/_imdbID_/_page.ts.js';
import * as server from '../entries/pages/movie/_imdbID_/_page.server.ts.js';

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/movie/_imdbID_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/movie/[imdbID]/+page.ts";
export { server };
export const server_id = "src/routes/movie/[imdbID]/+page.server.ts";
export const imports = ["_app/immutable/nodes/7.Dpp_N3nw.js","_app/immutable/chunks/Cp7EwV3K.js","_app/immutable/chunks/BbjLgv-f.js","_app/immutable/chunks/C6gcHL8Z.js","_app/immutable/chunks/Nn1O9p7-.js","_app/immutable/chunks/DtMnDJjb.js","_app/immutable/chunks/BcxPvosT.js","_app/immutable/chunks/1UrTQeer.js","_app/immutable/chunks/C_QQLzkl.js","_app/immutable/chunks/DK56ITja.js","_app/immutable/chunks/l17r96g0.js","_app/immutable/chunks/BJ0S3ddi.js"];
export const stylesheets = ["_app/immutable/assets/Trigger.DAvQSL2r.css","_app/immutable/assets/7.CpAiVXgi.css"];
export const fonts = [];
