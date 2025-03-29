export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {start:"_app/immutable/entry/start.B5nRyPq6.js",app:"_app/immutable/entry/app.CsyCfSPs.js",imports:["_app/immutable/entry/start.B5nRyPq6.js","_app/immutable/chunks/Cc_LQDc0.js","_app/immutable/chunks/moBH5p9l.js","_app/immutable/chunks/DIeogL5L.js","_app/immutable/chunks/C2AvfynC.js","_app/immutable/entry/app.CsyCfSPs.js","_app/immutable/chunks/moBH5p9l.js","_app/immutable/chunks/DIeogL5L.js","_app/immutable/chunks/BQbJ5vmh.js","_app/immutable/chunks/C5RgbqC6.js","_app/immutable/chunks/CWj6FrbW.js","_app/immutable/chunks/C2AvfynC.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
