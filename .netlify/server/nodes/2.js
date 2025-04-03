import * as server from '../entries/pages/_page.server.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.ts";
export const imports = ["_app/immutable/nodes/2.tRRqg4ZN.js","_app/immutable/chunks/Cp7EwV3K.js","_app/immutable/chunks/BbjLgv-f.js","_app/immutable/chunks/C6gcHL8Z.js","_app/immutable/chunks/B2D20eJu.js","_app/immutable/chunks/DtMnDJjb.js","_app/immutable/chunks/1UrTQeer.js","_app/immutable/chunks/C_QQLzkl.js","_app/immutable/chunks/CbwIA3qU.js"];
export const stylesheets = ["_app/immutable/assets/stores.l4HYDMnt.css","_app/immutable/assets/2.DI5T5QPT.css"];
export const fonts = [];
