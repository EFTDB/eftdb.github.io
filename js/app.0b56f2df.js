(function(t){function e(e){for(var a,r,s=e[0],c=e[1],u=e[2],l=0,m=[];l<s.length;l++)r=s[l],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&m.push(o[r][0]),o[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);p&&p(e);while(m.length)m.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,r=1;r<n.length;r++){var s=n[r];0!==o[s]&&(a=!1)}a&&(i.splice(e--,1),t=c(c.s=n[0]))}return t}var a={},r={app:0},o={app:0},i=[];function s(t){return c.p+"js/"+({"armor~weapons":"armor~weapons",armor:"armor",weapons:"weapons",backpacks:"backpacks",items:"items",maps:"maps",notfound:"notfound",rigs:"rigs",status:"status"}[t]||t)+"."+{"armor~weapons":"62c0ddbc",armor:"995dde55",weapons:"5e9e0178",backpacks:"e6f9d042",items:"f156767e",maps:"4cf28908",notfound:"108c5778",rigs:"68957794",status:"6b8043cc"}[t]+".js"}function c(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={"armor~weapons":1,weapons:1,backpacks:1,items:1,maps:1,rigs:1,status:1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=new Promise((function(e,n){for(var a="css/"+({"armor~weapons":"armor~weapons",armor:"armor",weapons:"weapons",backpacks:"backpacks",items:"items",maps:"maps",notfound:"notfound",rigs:"rigs",status:"status"}[t]||t)+"."+{"armor~weapons":"1c999e80",armor:"31d6cfe0",weapons:"8f8f8f02",backpacks:"95549bc3",items:"0bb9858c",maps:"d7eb69dc",notfound:"31d6cfe0",rigs:"95549bc3",status:"6ee0d413"}[t]+".css",o=c.p+a,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var u=i[s],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===a||l===o))return e()}var m=document.getElementsByTagName("style");for(s=0;s<m.length;s++){u=m[s],l=u.getAttribute("data-href");if(l===a||l===o)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var a=e&&e.target&&e.target.src||o,i=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=a,delete r[t],p.parentNode.removeChild(p),n(i)},p.href=o;var d=document.getElementsByTagName("head")[0];d.appendChild(p)})).then((function(){r[t]=0})));var a=o[t];if(0!==a)if(a)e.push(a[2]);else{var i=new Promise((function(e,n){a=o[t]=[e,n]}));e.push(a[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=s(t);var m=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(p);var n=o[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;m.message="Loading chunk "+t+" failed.\n("+a+": "+r+")",m.name="ChunkLoadError",m.type=a,m.request=r,n[1](m)}o[t]=void 0}};var p=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},c.m=t,c.c=a,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(n,a,function(e){return t[e]}.bind(null,a));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var m=0;m<u.length;m++)e(u[m]);var p=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"034f":function(t,e,n){"use strict";n("85ec")},"227b":function(t,e,n){"use strict";var a,r,o,i,s,c,u;n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return u})),function(t){t[t["Assault Rifle"]=0]="Assault Rifle",t[t["Assault Carbine"]=1]="Assault Carbine",t[t["Submachine Gun"]=2]="Submachine Gun",t[t["Sniper Rifle"]=3]="Sniper Rifle",t[t["Marksman Rifle"]=4]="Marksman Rifle",t[t["Shotgun"]=5]="Shotgun",t[t["Handgun"]=6]="Handgun",t[t["Light Machine Gun"]=7]="Light Machine Gun"}(a||(a={})),function(t){t["MAGAZINE"]="Magazine",t["PISTOL_GRIP"]="Pistol Grip",t["STOCK"]="Stock",t["FOREGRIP"]="Foregrip",t["GAS_MOD"]="Gas Mod",t["CHARGE"]="Charge",t["DUST_COVER"]="Dust Cover",t["OPTIC"]="Optic",t["SIGHT"]="Sight",t["MUZZLE"]="Muzzle",t["TACTICAL"]="Tactical",t["MOUNT"]="Mount",t["HANDGUARD"]="Handguard",t["BARREL"]="Barrel",t["RECEIVER"]="Receiver",t["BIPOD"]="Bipod",t["OTHER"]="Other",t["AUXILIARY"]="Auxiliary"}(r||(r={})),function(t){t[t["9x18"]=0]="9x18",t[t["9x19"]=1]="9x19",t[t["9x21"]=2]="9x21",t[t["9x39"]=3]="9x39",t[t[".366"]=4]=".366",t[t["5.45x39"]=5]="5.45x39",t[t["5.56x45"]=6]="5.56x45",t[t["7.62x25"]=7]="7.62x25",t[t["7.62x39"]=8]="7.62x39",t[t["7.62x51"]=9]="7.62x51",t[t["7.62x54R"]=10]="7.62x54R",t[t["12x70"]=11]="12x70",t[t["20x70"]=12]="20x70",t[t["4.6x30"]=13]="4.6x30",t[t[".45"]=14]=".45",t[t["5.7x28"]=15]="5.7x28",t[t["40x46"]=16]="40x46",t[t["12.7x55"]=17]="12.7x55"}(o||(o={})),function(t){t["PRAPOR"]="Prapor",t["THERAPIST"]="Therapist",t["SKIER"]="Skier",t["PEACEKEEPER"]="Peacekeeper",t["MECHANIC"]="Mechanic",t["RAGMAN"]="Ragman",t["JAEGER"]="Jaeger",t["FENCE"]="Fence"}(i||(i={})),function(t){t["ROUBLE"]="R",t["EURO"]="E",t["DOLLAR"]="D"}(s||(s={})),function(t){t["LEFT"]="Left",t["RIGHT"]="Right",t["UP"]="Up",t["DOWN"]="Down"}(c||(c={})),function(t){t[t["INACTIVE"]=0]="INACTIVE",t[t["REGISTERED"]=2]="REGISTERED",t[t["ACTIVE"]=1]="ACTIVE",t[t["UPDATING"]=2]="UPDATING",t[t["UPDATED"]=3]="UPDATED"}(u||(u={}))},"85ec":function(t,e,n){},9224:function(t){t.exports=JSON.parse('{"a":"0.1.0"}')},a020:function(t,e,n){},b89e:function(t,e,n){"use strict";var a=n("94ed");e["a"]={home:a["B"],weapons:a["t"],gear:a["A"],maps:a["q"],expand:a["f"],retract:a["g"],discord:a["l"],patreon:a["s"],ammo:a["c"],ammunition:a["a"],menu:a["r"],stats:a["o"],shop:a["d"],basket:a["b"],1:a["v"],2:a["w"],3:a["x"],4:a["y"],R:a["j"],D:a["k"],E:a["i"],weaponmodding:a["D"],empty:a["z"],items:a["h"],filter:a["m"],info:a["p"],check:a["e"],donate:a["C"],save:a["n"],load:a["u"]}},cd49:function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-app-bar",{attrs:{app:"",flat:"",color:t.mobile?"":"transparent",absolute:""}},[t.mobile?t._e():n("v-btn",{staticClass:"mr-4",attrs:{fab:"","x-small":""},on:{click:function(e){t.mini=!t.mini}}},[n("v-icon",{domProps:{textContent:t._s(t.mini?t.icons.retract:t.icons.expand)}})],1),t.mobile?n("v-btn",{staticClass:"ml-n3 mr-1",attrs:{depressed:"",fab:""},on:{click:function(e){t.menuActive=!t.menuActive}}},[n("v-icon",{domProps:{textContent:t._s(t.icons.menu)}})],1):t._e(),n("v-toolbar-title",{domProps:{textContent:t._s(t.currentPageTitle)}}),n("v-spacer"),n("v-btn",{staticClass:"mr-2",attrs:{tile:!t.mobile,href:"https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=QMVVGNTE7D8RY&source=url",fab:t.mobile,depressed:t.mobile,small:""}},[n("svg",{staticStyle:{"-ms-transform":"rotate(360deg)","-webkit-transform":"rotate(360deg)",transform:"rotate(360deg)"},attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":"true",focusable:"false",width:"2em",height:"2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"}},[n("path",{attrs:{d:"M8.32 21.97a.546.546 0 0 1-.26-.32c-.03-.15-.06.11.6-4.09c.6-3.8.59-3.74.67-3.85c.13-.17.11-.17 1.61-.18c1.32-.03 1.6-.03 2.19-.12c3.25-.45 5.26-2.36 5.96-5.66c.04-.22.08-.41.09-.41c0-.01.07.04.15.1c1.03.78 1.38 2.22.99 4.14c-.46 2.29-1.68 3.81-3.58 4.46c-.81.28-1.49.39-2.69.42c-.8.04-.82.04-1.05.19c-.17.17-.16.14-.55 2.55c-.27 1.7-.37 2.25-.41 2.35c-.07.16-.21.3-.37.38l-.11.07H10c-1.29 0-1.62 0-1.68-.03m-4.5-2.23c-.19-.1-.32-.27-.32-.47C3.5 19 6.11 2.68 6.18 2.5c.09-.18.32-.37.5-.44L6.83 2h3.53c3.91 0 3.76 0 4.64.2c2.62.55 3.82 2.3 3.37 4.93c-.5 2.93-1.98 4.67-4.5 5.3c-.87.21-1.48.27-3.14.27c-1.31 0-1.41.01-1.67.15c-.26.15-.47.42-.56.75c-.04.07-.27 1.47-.53 3.1a241.3 241.3 0 0 0-.47 3.02l-.03.06H5.69c-1.58 0-1.8 0-1.87-.04z",fill:"#3b7bbf"}})]),n("span",{staticClass:"ml-2 hidden-sm-and-down"},[t._v("Buy me a coffee")])]),n("v-btn",{attrs:{tile:!t.mobile,href:"https://discord.gg/3bsy36a",target:"blank",fab:t.mobile,depressed:t.mobile,small:""}},[n("v-icon",{attrs:{color:"#7289da"},domProps:{textContent:t._s(t.icons.discord)}}),n("span",{staticClass:"ml-2 hidden-sm-and-down"},[t._v("Join Discord")])],1)],1),n("v-navigation-drawer",{attrs:{app:"",permanent:!t.mobile,dark:"",src:t.publicPath+"static/misc/sidebar.jpg","mini-variant":t.mini&&!t.mobile,"mini-variant-width":"80"},model:{value:t.menuActive,callback:function(e){t.menuActive=e},expression:"menuActive"}},[n("v-img",{class:t.mini&&!t.mobile?"mx-2 my-8":"mx-12 my-6",attrs:{"max-height":"40",contain:"",src:"/static/misc/logo_wide.png"}}),n("v-divider"),n("v-list",{attrs:{nav:""}},[t._l(t.navItems,(function(e,a){return n("v-list-item",{key:a,staticClass:"mx-1 px-4",attrs:{to:e.route,"active-class":"active-nav"}},[n("v-list-item-icon",[n("v-icon",{domProps:{textContent:t._s(e.icon)}})],1),n("v-list-item-title",{domProps:{textContent:t._s(e.name)}})],1)}))],2)],1),n("v-main",[n("router-view")],1),n("ServiceWorkerWatcher"),n("v-footer",{attrs:{dark:"",padless:"",app:"",inset:"",absolute:""}},[n("v-card",{staticClass:"text-center",attrs:{flat:"",tile:"",width:"100%"}},[n("v-divider"),n("v-card-text",[n("strong",[t._v("EFTDB.one")]),t._v(" — Escape From Tarkov Database © "+t._s((new Date).getFullYear())+" ")])],1)],1)],1)},o=[],i=(n("b0c0"),n("b89e")),s=n("9224"),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-snackbar",{attrs:{timeout:5e3},model:{value:t.updating,callback:function(e){t.updating=e},expression:"updating"}},[t._v(" Updating content... "),n("v-btn",{attrs:{color:"white",text:""},on:{click:function(e){t.updating=!1}}},[t._v(" Dismiss ")])],1),n("v-snackbar",{attrs:{timeout:-1,color:"info"},model:{value:t.updated,callback:function(e){t.updated=e},expression:"updated"}},[t._v(" Update complete. "),n("v-btn",{attrs:{color:"white",text:""},on:{click:t.reloadApp}},[t._v(" Reload now ")])],1)],1)},u=[],l=n("5530"),m=n("227b"),p=n("2f62"),d=a["default"].extend({name:"ServiceWorkerWatcher",data:function(){return{updating:!1,updated:!1}},methods:{reloadApp:function(){this.updated=!1,window.location.reload()},processStatus:function(t){switch(t){case m["b"].INACTIVE:break;case m["b"].ACTIVE:break;case m["b"].UPDATING:this.updating=!0;break;case m["b"].UPDATED:this.updating=!1,this.updated=!0;break;default:break}}},computed:Object(l["a"])({},Object(p["b"])(["swState"])),watch:{swState:function(t){this.processStatus(t)}},mounted:function(){this.processStatus(this.swState)}}),f=d,h=n("2877"),b=n("6544"),v=n.n(b),g=n("8336"),w=n("2db4"),k=Object(h["a"])(f,c,u,!1,null,"74a12085",null),x=k.exports;v()(k,{VBtn:g["a"],VSnackbar:w["a"]});var A=a["default"].extend({name:"App",components:{ServiceWorkerWatcher:x},metaInfo:{title:"Escape From Tarkov Database",titleTemplate:"%s - EFTDB.one"},data:function(){return{mini:!1,menuActive:!0,icons:i["a"],version:s["a"],navItems:[{name:"Landing Page",icon:i["a"].home,route:"/"},{name:"Weapons",icon:i["a"].weapons,route:"/weapons"},{name:"Items",icon:i["a"].items,route:"/items"},{name:"Maps",icon:i["a"].maps,route:"/maps"}],publicPath:"/"}},computed:{currentPageTitle:function(){return this.$route.name},mobile:function(){return"xs"===this.$vuetify.breakpoint.name}},mounted:function(){"xs"===this.$vuetify.breakpoint.name&&(this.menuActive=!1)},watch:{mobile:function(t){this.menuActive=!t}}}),E=A,y=(n("034f"),n("7496")),T=n("40dc"),C=n("b0af"),S=n("99d9"),P=n("ce7e"),_=n("553a"),D=n("132d"),I=n("adda"),R=n("8860"),B=n("da13"),O=n("34c3"),j=n("5d23"),V=n("f6c4"),N=n("f774"),F=n("2fa4"),M=n("2a7f"),G=Object(h["a"])(E,r,o,!1,null,null,null),L=G.exports;v()(G,{VApp:y["a"],VAppBar:T["a"],VBtn:g["a"],VCard:C["a"],VCardText:S["c"],VDivider:P["a"],VFooter:_["a"],VIcon:D["a"],VImg:I["a"],VList:R["a"],VListItem:B["a"],VListItemIcon:O["a"],VListItemTitle:j["a"],VMain:V["a"],VNavigationDrawer:N["a"],VSpacer:F["a"],VToolbarTitle:M["a"]});var W=n("9483"),U=n("1da1");n("96cf"),n("7db0"),n("159b"),n("caad"),n("2532"),n("4de4"),n("d3b7");a["default"].use(p["a"]);var H=new p["a"].Store({state:{calibres:[],weapons:[],attachments:[],armors:[],rigs:[],backpacks:[],swState:m["b"].INACTIVE},getters:{allWeapons:function(t){return t.weapons},allArmors:function(t){return t.armors},allRigs:function(t){return t.rigs},allBackpacks:function(t){return t.backpacks},allAttachments:function(t){return t.attachments},allCalibres:function(t){return t.calibres},weaponByName:function(t){return function(e){return t.weapons.find((function(t){return t.name===e}))}},attachmentByName:function(t){return function(e){return t.attachments.find((function(t){return t.name===e}))}},attachmentByID:function(t){return function(e){return t.attachments.find((function(t){return t._id===e}))}},calibreById:function(t){return function(e){return t.calibres.find((function(t){return t._id===e}))}},attachmentParentsByID:function(t){return function(e){var n=[];return t.attachments.forEach((function(t){var a=!1;t.fields.forEach((function(t){t.attachments.includes(e)&&(a=!0)})),a&&n.push(t)})),n}},attachmentWeaponsByID:function(t){return function(e){var n=[];return t.weapons.forEach((function(t){var a=!1;t.fields.forEach((function(a){a.attachments.includes(e)&&n.push(t)})),a&&n.push(t)})),n}}},mutations:{setCalibres:function(t,e){t.calibres=e},setWeapons:function(t,e){for(var n=function(n){e[n].calibre=t.calibres.find((function(t){return t._id===e[n].calibre}));for(var a=function(a){e[n].builds[a].attachments=t.attachments.filter((function(t){return e[n].builds[a].attachments.includes(t._id)}))},r=0;r<e[n].builds.length;r++)a(r)},a=0;a<e.length;a++)n(a);t.weapons=e},setAttachments:function(t,e){t.attachments=e},setArmors:function(t,e){t.armors=e},setRigs:function(t,e){t.rigs=e},setBackpacks:function(t,e){t.backpacks=e},setSWState:function(t,e){t.swState=e}},actions:{setSWState:function(t,e){var n=t.commit;n("setSWState",e)},fetchCalibres:function(t){var e=t.commit;return new Promise((function(t,n){fetch("/static/data/calibres.json").then((function(t){return t.json()})).then((function(n){e("setCalibres",n),t(n)})).catch((function(t){return n(t)}))}))},fetchWeapons:function(t){var e=t.commit,n=t.getters,a=t.dispatch;return new Promise(function(){var t=Object(U["a"])(regeneratorRuntime.mark((function t(r,o){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!(n.allAttachments.length<1)){t.next=3;break}return t.next=3,a("fetchAttachments");case 3:if(!(n.allCalibres.length<1)){t.next=6;break}return t.next=6,a("fetchCalibres");case 6:fetch("/static/data/weapons.json").then((function(t){return t.json()})).then((function(t){e("setWeapons",t),r(t)})).catch((function(t){return o(t)}));case 7:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}())},fetchAttachments:function(t){var e=t.commit;return new Promise((function(t,n){fetch("/static/data/attachments.json").then((function(t){return t.json()})).then((function(n){e("setAttachments",n),t(n)})).catch((function(t){return n(t)}))}))},fetchArmors:function(t){var e=t.commit;return new Promise((function(t,n){fetch("/static/data/armors.json").then((function(t){return t.json()})).then((function(n){e("setArmors",n),t(n)})).catch((function(t){return n(t)}))}))},fetchRigs:function(t){var e=t.commit;return new Promise((function(t,n){fetch("/static/data/rigs.json").then((function(t){return t.json()})).then((function(n){e("setRigs",n),t(n)})).catch((function(t){return n(t)}))}))},fetchBackpacks:function(t){var e=t.commit;return new Promise((function(t,n){fetch("/static/data/backpacks.json").then((function(t){return t.json()})).then((function(n){e("setBackpacks",n),t(n)})).catch((function(t){return n(t)}))}))}}});Object(W["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered."),H.dispatch("setSWState",m["b"].ACTIVE)},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading."),H.dispatch("setSWState",m["b"].UPDATING)},updated:function(){console.log("New content is available; please refresh."),H.dispatch("setSWState",m["b"].UPDATED)},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t),H.dispatch("setSWState",m["b"].INACTIVE)}});n("3ca3"),n("ddb0");var $=n("8c4f"),J=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"weapon-test-img"},[n("v-img",{attrs:{gradient:"to top, rgba(18,18,18,1), rgba(18,18,18,.4)",src:"/static/misc/landing_bg.jpg"}})],1),n("v-card",{staticClass:"mx-auto px-8",attrs:{flat:"",color:"transparent","max-width":"600"}},[n("v-img",{staticClass:"mx-4 cover-logo",attrs:{contain:"",src:"/static/misc/logo_trans.png"}})],1),n("div",{staticClass:"px-4"},[n("v-alert",{staticClass:"mx-auto caption",attrs:{border:"top","colored-border":"",type:"warning","max-width":"600"}},[t._v(" Website is still in development. Some menu options might be unavailable. "),n("br"),t._v(" Coming soon: "),n("br"),t._v(" - Medication and consumables "),n("br"),t._v(" - Better sorting and filtering of tables "),n("br"),t._v(" - Using a trader loadout as starting point for weapon modding "),n("br"),t._v(" - Proper implementation of saving and sharing weapon modding builds "),n("br"),t._v(" - Factory map "),n("br"),n("br"),t._v(" Older attachments might have some outdated data. If you find any errors in attachment or weapon data, please report it in the Discord. The join button is in the top right. ")]),n("v-alert",{staticClass:"mx-auto caption",attrs:{border:"top","colored-border":"",type:"info","max-width":"600"}},[t._v(" EFTDB isn't endorsed by Battlestate Games and doesn't reflect the views or opinions of Battlestate Games or anyone officially involved in producing or managing Escape From Tarkov. "),n("br"),n("br"),t._v(" All the information and assets shown are directly observable in-game. All data was acquired purely by observing and no third-party software was used to mine data in any way. ")])],1)],1)},q=[],z=a["default"].extend({name:"Home",metaInfo:{title:"Escape From Tarkov Database",meta:[{property:"description",content:"Escape From Tarkov Database (EFTDB) provides an overview of in-game items and modding options."},{property:"og:description",content:"Escape From Tarkov Database (EFTDB) provides an overview of in-game items and modding options."},{property:"twitter:description",content:"Escape From Tarkov Database (EFTDB) provides an overview of in-game items and modding options."},{property:"og:title",content:"Escape From Tarkov Database - EFTDB.one"},{property:"twitter:title",content:"Escape From Tarkov Database - EFTDB.one"},{property:"og:url",content:"https://www.eftdb.one/"},{property:"twitter:url",content:"https://www.eftdb.one/"}]},components:{},data:function(){return{icons:i["a"]}}}),K=z,Y=(n("f987"),n("0798")),Z=Object(h["a"])(K,J,q,!1,null,"175dbddb",null),Q=Z.exports;v()(Z,{VAlert:Y["a"],VCard:C["a"],VImg:I["a"]});var X=n("58ca");a["default"].use($["a"]),a["default"].use(X["a"]);var tt=[{path:"/",name:"Home",component:Q},{path:"/weapons",name:"Weapons",component:function(){return Promise.all([n.e("armor~weapons"),n.e("weapons")]).then(n.bind(null,"d130"))}},{path:"/attachments",name:"Attachments",component:function(){return Promise.all([n.e("armor~weapons"),n.e("weapons")]).then(n.bind(null,"6fe3"))}},{path:"/items",name:"Items",component:function(){return n.e("items").then(n.bind(null,"5b8f"))}},{path:"/armor",name:"Armor",component:function(){return Promise.all([n.e("armor~weapons"),n.e("armor")]).then(n.bind(null,"01dc"))}},{path:"/rigs",name:"Rigs",component:function(){return n.e("rigs").then(n.bind(null,"baff"))}},{path:"/backpacks",name:"Backpacks",component:function(){return n.e("backpacks").then(n.bind(null,"8861"))}},{path:"/maps",name:"Maps",component:function(){return n.e("maps").then(n.bind(null,"daba"))}},{path:"/status",name:"Status",component:function(){return n.e("status").then(n.bind(null,"9989"))}},{path:"/weapon/:name",name:"Weapon",component:function(){return Promise.all([n.e("armor~weapons"),n.e("weapons")]).then(n.bind(null,"09cf"))}},{path:"/attachment/:name",name:"Attachment",component:function(){return Promise.all([n.e("armor~weapons"),n.e("weapons")]).then(n.bind(null,"7b6e"))}},{path:"*",name:"404 Not Found",component:function(){return n.e("notfound").then(n.bind(null,"9703"))}}],et=new $["a"]({mode:"history",base:"/",routes:tt,scrollBehavior:function(t,e,n){return n||(t.hash?{selector:t.hash}:{x:0,y:0})}}),nt=et,at=n("ce5b"),rt=n.n(at);a["default"].use(rt.a);var ot=new rt.a({theme:{dark:!0}});a["default"].config.productionTip=!1,new a["default"]({router:nt,store:H,vuetify:ot,render:function(t){return t(L)}}).$mount("#app")},f987:function(t,e,n){"use strict";n("a020")}});