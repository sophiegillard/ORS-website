export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["lib/assets/img/SVG/ORS_illustrations_Actu trace 3.svg","lib/assets/img/SVG/ORS_illustrations_Actu_trace_1.svg","lib/assets/img/SVG/ORS_illustrations_Actu_trace_2.svg","lib/assets/img/SVG/ORS_illustrations_Aide auteur.es & Detenus - Acc. collectif.svg","lib/assets/img/SVG/ORS_illustrations_Aide aux auteur.es.svg","lib/assets/img/SVG/ORS_illustrations_Aide victimes - Acc. collectif.svg","lib/assets/img/SVG/ORS_illustrations_Aide victimes.svg","lib/assets/img/SVG/ORS_illustrations_Aides aux detenus.svg","lib/assets/img/SVG/ORS_illustrations_Auteur.es - Acc. psy - Mobile.svg","lib/assets/img/SVG/ORS_illustrations_Auteur.es - Acc. psy - Web.svg","lib/assets/img/SVG/ORS_illustrations_Auteur.es - Aide proches - Mobile.svg","lib/assets/img/SVG/ORS_illustrations_Auteur.es - Aide proches - Web.svg","lib/assets/img/SVG/ORS_illustrations_Auteur.es - Aide sociale - Mobile.svg","lib/assets/img/SVG/ORS_illustrations_Auteur.es - Aide sociale - Web.svg","lib/assets/img/SVG/ORS_illustrations_Detenus - AD Form - Mobile.svg","lib/assets/img/SVG/ORS_illustrations_Detenus - AD Form - Web.svg","lib/assets/img/SVG/ORS_illustrations_Detenus - Acc. psy - Mobile.svg","lib/assets/img/SVG/ORS_illustrations_Detenus - Acc. psy - Web.svg","lib/assets/img/SVG/ORS_illustrations_Detenus - Aide proches - Mobile.svg","lib/assets/img/SVG/ORS_illustrations_Detenus - Aide proches - Web.svg","lib/assets/img/SVG/ORS_illustrations_Detenus - Aide sociale - Mobile.svg","lib/assets/img/SVG/ORS_illustrations_Detenus - Aide sociale - Web.svg","lib/assets/img/SVG/ORS_illustrations_Nous soutenir-07.svg","lib/assets/img/SVG/ORS_illustrations_Nous soutenir-07_2.svg","lib/assets/img/SVG/ORS_illustrations_Nous soutenir-12.svg","lib/assets/img/SVG/ORS_illustrations_Numeros utiles.svg","lib/assets/img/SVG/ORS_illustrations_Numeros utiles_1.png","lib/assets/img/SVG/ORS_illustrations_Qui sommes-nous - Organigramme - Mobile.svg","lib/assets/img/SVG/ORS_illustrations_Qui sommes-nous - Organigramme - Web.svg","lib/assets/img/SVG/ORS_illustrations_Qui sommes-nous - Quelques mots d'histoire.svg","lib/assets/img/SVG/ORS_illustrations_Trace titres (identique partout mais allongé en fonction du titre).svg","lib/assets/img/SVG/ORS_illustrations_Victimes - Acc. psy - Mobile.eps","lib/assets/img/SVG/ORS_illustrations_Victimes - Acc. psy - Mobile.png","lib/assets/img/SVG/ORS_illustrations_Victimes - Acc. psy - Mobile.svg","lib/assets/img/SVG/ORS_illustrations_Victimes - Acc. psy - Web.svg","lib/assets/img/SVG/ORS_illustrations_Victimes - Aide proches - Mobile.svg","lib/assets/img/SVG/ORS_illustrations_Victimes - Aide proches - Web.svg","lib/assets/img/SVG/ORS_illustrations_Victimes - Aide sociale - Mobile.svg","lib/assets/img/SVG/ORS_illustrations_Victimes - Aide sociale - Web.svg","lib/assets/img/SVG/ORS_illustrations_nos_missions.svg"]),
	mimeTypes: {".svg":"image/svg+xml",".png":"image/png",".eps":"application/postscript"},
	_: {
		client: {"start":"_app/immutable/entry/start.DfGEajz1.js","app":"_app/immutable/entry/app.Cb_ryKFl.js","imports":["_app/immutable/entry/start.DfGEajz1.js","_app/immutable/chunks/entry.BoQAbYmg.js","_app/immutable/chunks/scheduler.5EadbRtP.js","_app/immutable/entry/app.Cb_ryKFl.js","_app/immutable/chunks/scheduler.5EadbRtP.js","_app/immutable/chunks/index.BMNSwIlz.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/8.js')),
			__memo(() => import('./nodes/9.js')),
			__memo(() => import('./nodes/10.js')),
			__memo(() => import('./nodes/11.js')),
			__memo(() => import('./nodes/12.js')),
			__memo(() => import('./nodes/13.js'))
		],
		routes: [
			{
				id: "/accueil",
				pattern: /^\/accueil\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/accueil/auteurs",
				pattern: /^\/accueil\/auteurs\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/accueil/détenus",
				pattern: /^\/accueil\/détenus\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/accueil/victimes",
				pattern: /^\/accueil\/victimes\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/api/contact",
				pattern: /^\/api\/contact\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/contact/_server.js'))
			},
			{
				id: "/contact",
				pattern: /^\/contact\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/mentions-legales",
				pattern: /^\/mentions-legales\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/nos-missions",
				pattern: /^\/nos-missions\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/nous-soutenir",
				pattern: /^\/nous-soutenir\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/numeros-utiles",
				pattern: /^\/numeros-utiles\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/qui-sommes-nous",
				pattern: /^\/qui-sommes-nous\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 11 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
