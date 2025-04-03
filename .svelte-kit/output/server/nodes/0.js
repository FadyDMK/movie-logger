import * as server from '../entries/pages/_layout.server.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/+layout.server.ts";
export const imports = ["_app/immutable/nodes/0.D2QCgTEh.js","_app/immutable/chunks/Cp7EwV3K.js","_app/immutable/chunks/BbjLgv-f.js","_app/immutable/chunks/C6gcHL8Z.js","_app/immutable/chunks/Nn1O9p7-.js","_app/immutable/chunks/B2D20eJu.js","_app/immutable/chunks/DtMnDJjb.js","_app/immutable/chunks/DK56ITja.js","_app/immutable/chunks/BmfEcAX3.js","_app/immutable/chunks/C_QQLzkl.js","_app/immutable/chunks/CbwIA3qU.js"];
export const stylesheets = ["_app/immutable/assets/stores.l4HYDMnt.css","_app/immutable/assets/0.Ib2ksPPc.css"];
export const fonts = [];
