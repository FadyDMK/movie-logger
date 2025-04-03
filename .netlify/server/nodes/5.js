import * as server from '../entries/pages/auth/register/_page.server.ts.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/auth/register/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/auth/register/+page.server.ts";
export const imports = ["_app/immutable/nodes/5.DSSuc4Tr.js","_app/immutable/chunks/Cp7EwV3K.js","_app/immutable/chunks/BbjLgv-f.js","_app/immutable/chunks/C6gcHL8Z.js","_app/immutable/chunks/Nn1O9p7-.js","_app/immutable/chunks/BcxPvosT.js","_app/immutable/chunks/1UrTQeer.js","_app/immutable/chunks/C_QQLzkl.js","_app/immutable/chunks/DtMnDJjb.js","_app/immutable/chunks/BJ0S3ddi.js"];
export const stylesheets = ["_app/immutable/assets/5.DVdD1ZDG.css"];
export const fonts = [];
