var bConversationalUiWebCs;(()=>{"use strict";var e={"32121b0a":(e,t,a)=>{var c={"./AITPChatEntry":()=>a.e("ddf740c7").then((()=>()=>a("9361fb4e"))),"./AITPChatScreen":()=>a.e("cc871742").then((()=>()=>a("c6d45718")))},o=(e,t)=>(a.R=t,t=a.o(c,e)?c[e]():Promise.resolve().then((()=>{throw new Error('Module "'+e+'" does not exist in container.')})),a.R=void 0,t),n=(e,t)=>{if(a.S){var c="default",o=a.S[c];if(o&&o!==e)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return a.S[c]=e,a.I(c,t)}};a.d(t,{get:()=>o,init:()=>n})}},t={};function a(c){var o=t[c];if(void 0!==o)return o.exports;var n=t[c]={id:c,loaded:!1,exports:{}};return e[c].call(n.exports,n,n.exports,a),n.loaded=!0,n.exports}a.m=e,a.c=t,Object.defineProperty(a,"miniCssF",{set:function(){},get:function(){return function(e){return{"node_modules_bookingcom_bui-react_index_js-_11660":1,"node_modules_bookingcom_bui-react_index_js-_11661":1}[e]?"static/css/"+e+".8cc1b846"+(window&&"rtl"===window.getComputedStyle(document.body).getPropertyValue("direction")?".rtl.css":".css"):"static/css/"+e+"."+{ddf740c7:"86aa14e6",cc871742:"10da2f01","47b42392":"b6a551e7"}[e]+".chunk"+(window&&"rtl"===window.getComputedStyle(document.body).getPropertyValue("direction")?".rtl.css":".css")}}}),a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},(()=>{var e,t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;a.t=function(c,o){if(1&o&&(c=this(c)),8&o)return c;if("object"===typeof c&&c){if(4&o&&c.__esModule)return c;if(16&o&&"function"===typeof c.then)return c}var n=Object.create(null);a.r(n);var r={};e=e||[null,t({}),t([]),t(t)];for(var s=2&o&&c;"object"==typeof s&&!~e.indexOf(s);s=t(s))Object.getOwnPropertyNames(s).forEach((e=>r[e]=()=>c[e]));return r.default=()=>c,a.d(n,r),n}})(),a.d=(e,t)=>{for(var c in t)a.o(t,c)&&!a.o(e,c)&&Object.defineProperty(e,c,{enumerable:!0,get:t[c]})},a.f={},a.e=e=>Promise.all(Object.keys(a.f).reduce(((t,c)=>(a.f[c](e,t),t)),[])),a.u=e=>"ddf740c7"===e?"static/js/"+e+".71fef9fc.chunk.js":"cc871742"===e?"static/js/"+e+".b2503908.chunk.js":"ac8e37c1"===e?"static/js/"+e+".f27794db.chunk.js":"95c3c609"===e?"static/js/"+e+".aa8dcfbf.chunk.js":"f6fa06b0"===e?"static/js/"+e+".e47f1bf0.chunk.js":"af4cd56a"===e?"static/js/"+e+".1800112c.chunk.js":"655bad3a"===e?"static/js/"+e+".928698e6.chunk.js":"72e28364"===e?"static/js/"+e+".5992a4f5.chunk.js":"239e3fc3"===e?"static/js/"+e+".fb7ee7d8.chunk.js":"a11a41e9"===e?"static/js/"+e+".36a04008.chunk.js":"75a8854b"===e?"static/js/"+e+".35446b77.chunk.js":"eeb4660e"===e?"static/js/"+e+".cab314de.chunk.js":"dbbcde1e"===e?"static/js/"+e+".6bdc177b.chunk.js":"1fe796b9"===e?"static/js/"+e+".c6048011.chunk.js":"593dc40e"===e?"static/js/"+e+".dc4b2beb.chunk.js":"1a809826"===e?"static/js/"+e+".70b33cfc.chunk.js":"a0f4f750"===e?"static/js/"+e+".e131ff00.chunk.js":"a7d46e9c"===e?"static/js/"+e+".0f75db67.chunk.js":"6c8f3c74"===e?"static/js/"+e+".0a18d8e0.chunk.js":"a07b2ac2"===e?"static/js/"+e+".27ab93b4.chunk.js":"ad0f5e78"===e?"static/js/"+e+".44ab7684.chunk.js":"051d0ef1"===e?"static/js/"+e+".076a2ea7.chunk.js":"4adc7643"===e?"static/js/"+e+".0085106e.chunk.js":"c7fcb623"===e?"static/js/"+e+".59644b52.chunk.js":"499f0d46"===e?"static/js/"+e+".758bf286.chunk.js":"61e8a551"===e?"static/js/"+e+".17a267fb.chunk.js":"17041229"===e?"static/js/"+e+".ac424810.chunk.js":"620a7a10"===e?"static/js/"+e+".acaf136a.chunk.js":"bf96e94b"===e?"static/js/"+e+".2e93061b.chunk.js":"03292cf2"===e?"static/js/"+e+".c6e03819.chunk.js":"b5b3f494"===e?"static/js/"+e+".0a72e45a.chunk.js":"061898bf"===e?"static/js/"+e+".0cc0ee52.chunk.js":"47b42392"===e?"static/js/"+e+".14acb047.chunk.js":"4031dfbf"===e?"static/js/"+e+".df8b3404.chunk.js":"41f349f3"===e?"static/js/"+e+".bff7dd6c.chunk.js":"node_modules_bookingcom_bui-react_index_js-_11660"===e?"static/js/"+e+".33fc148d.js":"node_modules_bookingcom_bui-react_index_js-_11661"===e?"static/js/"+e+".6383afdf.js":void 0,a.miniCssF=e=>({"node_modules_bookingcom_bui-react_index_js-_11660":1,"node_modules_bookingcom_bui-react_index_js-_11661":1}[e]?"static/css/"+e+".8cc1b846.css":"static/css/"+e+"."+{ddf740c7:"86aa14e6",cc871742:"10da2f01","47b42392":"b6a551e7"}[e]+".chunk.css"),a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}(),a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={},t="b-conversational-ui-web-cs:";a.l=(c,o,n,r)=>{if(e[c])e[c].push(o);else{var s,i;if(void 0!==n)for(var d=document.getElementsByTagName("script"),f=0;f<d.length;f++){var u=d[f];if(u.getAttribute("src")==c||u.getAttribute("data-webpack")==t+n){s=u;break}}s||(i=!0,(s=document.createElement("script")).charset="utf-8",s.timeout=120,a.nc&&s.setAttribute("nonce",a.nc),s.setAttribute("data-webpack",t+n),s.src=c),e[c]=[o];var l=(t,a)=>{s.onerror=s.onload=null,clearTimeout(b);var o=e[c];if(delete e[c],s.parentNode&&s.parentNode.removeChild(s),o&&o.forEach((e=>e(a))),t)return t(a)},b=setTimeout(l.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=l.bind(null,s.onerror),s.onload=l.bind(null,s.onload),i&&document.head.appendChild(s)}}})(),a.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{a.S={};var e={},t={};a.I=(c,o)=>{o||(o=[]);var n=t[c];if(n||(n=t[c]={}),!(o.indexOf(n)>=0)){if(o.push(n),e[c])return e[c];a.o(a.S,c)||(a.S[c]={});var r=a.S[c],s="b-conversational-ui-web-cs",i=(e,t,a,c)=>{var o=r[e]=r[e]||{},n=o[t];(!n||!n.loaded&&(!c!=!n.eager?c:s>n.from))&&(o[t]={get:a,from:s,eager:!!c})},d=[];if("default"===c)i("@apollo/client","3.10.8",(()=>a.e("ac8e37c1").then((()=>()=>a("8ef94565"))))),i("@bookingcom/capla-server/constants","11.7.0",(()=>a.e("95c3c609").then((()=>()=>a("352ad3e4"))))),i("@bookingcom/capla-server/context","11.7.0",(()=>a.e("f6fa06b0").then((()=>()=>a("16cee867"))))),i("@bookingcom/capla-server/et","11.7.0",(()=>a.e("af4cd56a").then((()=>()=>a("7d5491d4"))))),i("@bookingcom/capla-server/eventBus","11.7.0",(()=>a.e("655bad3a").then((()=>()=>a("29231e66"))))),i("@bookingcom/capla-server/features","11.7.0",(()=>a.e("72e28364").then((()=>()=>a("d8da3338"))))),i("@bookingcom/capla-server/flog","11.7.0",(()=>a.e("239e3fc3").then((()=>()=>a("4ccd8b85"))))),i("@bookingcom/capla-server/loadable","11.7.0",(()=>a.e("a11a41e9").then((()=>()=>a("641c6525"))))),i("@bookingcom/capla-server/package.json","11.7.0",(()=>a.e("75a8854b").then((()=>()=>a("3462d4c4"))))),i("@bookingcom/capla-server/utils","11.7.0",(()=>a.e("eeb4660e").then((()=>()=>a("9d59f1ef"))))),i("@bookingcom/lingojs-core","1.15.0",(()=>a.e("dbbcde1e").then((()=>()=>a("3a88b380"))))),i("@bookingcom/lingojs-react","1.8.17",(()=>a.e("1fe796b9").then((()=>()=>a("586c05c1"))))),i("bui-react-10","10.18.2",(()=>a.e("node_modules_bookingcom_bui-react_index_js-_11660").then((()=>()=>a("664ed146"))))),i("graphql","15.9.0",(()=>a.e("593dc40e").then((()=>()=>a("7afc82da"))))),i("react-dom","18.3.1",(()=>a.e("1a809826").then((()=>()=>a("626cd766"))))),i("react/jsx-runtime","18.3.1",(()=>a.e("a0f4f750").then((()=>()=>a("e33775bd"))))),i("react","18.3.1",(()=>a.e("a7d46e9c").then((()=>()=>a("262caaf6")))));return d.length?e[c]=Promise.all(d).then((()=>e[c]=1)):e[c]=1}}})(),(()=>{var e={ddf740c7:1,cc871742:1,ac8e37c1:1,"95c3c609":1,f6fa06b0:1,af4cd56a:1,"655bad3a":1,"72e28364":1,"239e3fc3":1,a11a41e9:1,"75a8854b":1,eeb4660e:1,dbbcde1e:1,"1fe796b9":1,"node_modules_bookingcom_bui-react_index_js-_11660":1,"593dc40e":1,"1a809826":1,a0f4f750:1,a7d46e9c:1,"6c8f3c74":1,a07b2ac2:1,ad0f5e78:1,"051d0ef1":1,"node_modules_bookingcom_bui-react_index_js-_11661":1,"4adc7643":1,c7fcb623:1,"61e8a551":1,"061898bf":1,"47b42392":1,"4031dfbf":1,"41f349f3":1},t={},c=document.querySelector("[data-capla-application-context]"),o=c&&c.text?JSON.parse(c.text):{};a.f.fetchPreparedChunkMetadata=(a,c)=>{var n="",r="15000",s="8",i="/v0/api/chunk-metadata",d="https://accommodations.dqs.booking.com/orca/chunk-metadata",f="https://accommodations.booking.com/orca/chunk-metadata",u="/orca/chunk-metadata",l="/page/v0/chunk-metadata",b="8080",h="b-conversational-ui-web-csZCcbTYLF",p="x-booking-et-serialized-state",m=window.location.hostname,g=window.location.protocol,_=window.location.host,v="true"===document.body.dataset.caplaFpr,j="localhost"===m||"127.0.0.1"===m,k=/\.dev\.booking\.com$/.test(m),w=/\.dqs\.booking\.com$/.test(m),y=/orca\..+\.svc\.bplatform-eu-nl-dev-\w\.booking\.com/.test(m),S=/orca\.dqs\.booking\.com/.test(m),x=/orca(-staging)?\.prod\.booking\.com/.test(m),C=!1;1===e[a]&&c.push(function(e,a){var c=e,E=document.querySelector("[data-capla-namespace]");E&&(c=E.getAttribute("data-capla-namespace"));if(window.__caplaChunkMetadataStore.isChunkIdInStore(a))return Promise.resolve(window.__caplaChunkMetadataStore.getMetadata());t[c]||(t[c]={});if(!t[c][a]){var O=function(e,t){var a=function(e,t){var a,c=e.slice(0,-s),r=c.replace("b-",""),E=new RegExp("((-staging)?.prod.booking.com|^booking.com)"),O=new RegExp("".concat(r,"(-staging)?.dqs.booking.com")),P=new RegExp("".concat(r,"(-staging)?.prod.booking.com")),A=new URLSearchParams({chunk:String(t),mfe:c}),L=O.test(m),q=P.test(m),N=function(e){return/^exp_|^b_feature_running_|^i_am_from$|^i_am_from_region$|^my_ip|^requestContext\./.test(e)},T=new Headers({Accept:"application/json"}),$=!1,M=new URL(o.basePageUrl),B=null===M||void 0===M?void 0:M.searchParams.get("ses"),I=g+"//"+_+i,U=k||w?d:f;if(n)(a=n).startsWith("/")&&M&&M.protocol&&M.host&&(a=M.protocol+"//"+M.host+a);else if(v)a=l;else if(S||y)a=d;else if(x)a=f;else{var D=E.test(m);j||L||q?(a=I,$=!0):a=D?u:U}C&&k&&T.append("X-Booking-Dev-Orca-".concat(c,"-Url"),"http://".concat(m,":").concat(b));$?A.set("requestContext.localization.locale",o.language):A.set("lang",o.language);o.isInternalIp&&(null===M||void 0===M||M.searchParams.forEach((function(e,t){N(t)&&A.set(t,e)})));o.etSerializedState&&T.append(p,o.etSerializedState);B&&A.set("ses",B);return A.set("namespace",h.slice(-s)),{url:a+"?"+A.toString(),headers:T}}(e,t);return window.__caplaFetch(a.url,{headers:a.headers,timeoutMs:r,credentials:"include",mode:"cors",cache:"no-store"}).then((function(a){if(!a.ok)throw new Error(`chunk-metadata request failed for ${e}/${t} with status ${a.status}`);return a.json()}))}(c,a).then((function(e){return window.__caplaChunkMetadataStore.populate(c,e,!0)})).catch((function(){delete t[c][a]}));t[c][a]=O}return t[c][a]}(h,a))}})(),(()=>{var e;a.g.importScripts&&(e=a.g.location+"");var t=a.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var c=t.getElementsByTagName("script");c.length&&(e=c[c.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),a.p=e+"../../"})(),(()=>{var e=e=>{var t=e=>e.split(".").map((e=>+e==e?+e:e)),a=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),c=a[1]?t(a[1]):[];return a[2]&&(c.length++,c.push.apply(c,t(a[2]))),a[3]&&(c.push([]),c.push.apply(c,t(a[3]))),c},t=(t,a)=>{t=e(t),a=e(a);for(var c=0;;){if(c>=t.length)return c<a.length&&"u"!=(typeof a[c])[0];var o=t[c],n=(typeof o)[0];if(c>=a.length)return"u"==n;var r=a[c],s=(typeof r)[0];if(n!=s)return"o"==n&&"n"==s||"s"==s||"u"==n;if("o"!=n&&"u"!=n&&o!=r)return o<r;c++}},c=e=>{var t=e[0],a="";if(1===e.length)return"*";if(t+.5){a+=0==t?">=":-1==t?"<":1==t?"^":2==t?"~":t>0?"=":"!=";for(var o=1,n=1;n<e.length;n++)o--,a+="u"==(typeof(s=e[n]))[0]?"-":(o>0?".":"")+(o=2,s);return a}var r=[];for(n=1;n<e.length;n++){var s=e[n];r.push(0===s?"not("+i()+")":1===s?"("+i()+" || "+i()+")":2===s?r.pop()+" "+r.pop():c(s))}return i();function i(){return r.pop().replace(/^\((.+)\)$/,"$1")}},o=(t,a)=>{if(0 in t){a=e(a);var c=t[0],n=c<0;n&&(c=-c-1);for(var r=0,s=1,i=!0;;s++,r++){var d,f,u=s<t.length?(typeof t[s])[0]:"";if(r>=a.length||"o"==(f=(typeof(d=a[r]))[0]))return!i||("u"==u?s>c&&!n:""==u!=n);if("u"==f){if(!i||"u"!=u)return!1}else if(i)if(u==f)if(s<=c){if(d!=t[s])return!1}else{if(n?d>t[s]:d<t[s])return!1;d!=t[s]&&(i=!1)}else if("s"!=u&&"n"!=u){if(n||s<=c)return!1;i=!1,s--}else{if(s<=c||f<u!=n)return!1;i=!1}else"s"!=u&&"n"!=u&&(i=!1,s--)}}var l=[],b=l.pop.bind(l);for(r=1;r<t.length;r++){var h=t[r];l.push(1==h?b()|b():2==h?b()&b():h?o(h,a):!b())}return!!b()},n=(e,a)=>{var c=e[a];const o=Object.keys(c).find((e=>!0===c[e].eager));return void 0!==o?o:Object.keys(c).reduce(((e,a)=>!e||!c[e].loaded&&t(e,a)?a:e),0)},r=(e,t,a,o)=>"Unsatisfied version "+a+" from "+(a&&e[t][a].from)+" of shared singleton module "+t+" (required "+c(o)+")",s=(e,t,a,c)=>{var s=n(e,a);return o(c,s)||"undefined"!==typeof console&&console.warn&&console.warn(r(e,a,s,c)),i(e[a][s])},i=e=>(e.loaded=1,e.get()),d=e=>function(t,c,o,n){var r=a.I(t);return r&&r.then?r.then(e.bind(e,t,a.S[t],c,o,n)):e(t,a.S[t],c,o,n)},f=d(((e,t,c,o,n)=>t&&a.o(t,c)?s(t,0,c,o):n())),u={},l={ead71eb0:()=>f("default","react",[,[4,0,0,0],0,[0,0,0,0],2],(()=>a.e("a7d46e9c").then((()=>()=>a("262caaf6"))))),cedcabf9:()=>f("default","@apollo/client",[,[4,0,0,0],0,[0,0,0,0],2],(()=>a.e("6c8f3c74").then((()=>()=>a("8ef94565"))))),dc6d28ff:()=>f("default","@bookingcom/capla-server/context",[,[4,0,0,0],0,[0,0,0,0],2],(()=>a.e("a07b2ac2").then((()=>()=>a("16cee867"))))),"28dbd132":()=>f("default","@bookingcom/capla-server/et",[,[4,0,0,0],0,[0,0,0,0],2],(()=>a.e("ad0f5e78").then((()=>()=>a("7d5491d4"))))),"239beb17":()=>f("default","@bookingcom/capla-server/features",[,[4,0,0,0],0,[0,0,0,0],2],(()=>a.e("72e28364").then((()=>()=>a("d8da3338"))))),"41c6c66e":()=>f("default","@bookingcom/capla-server/flog",[,[4,0,0,0],0,[0,0,0,0],2],(()=>a.e("051d0ef1").then((()=>()=>a("4ccd8b85"))))),"6222292b":()=>f("default","bui-react-10",[4,10,18,2],(()=>a.e("node_modules_bookingcom_bui-react_index_js-_11661").then((()=>()=>a("664ed146"))))),c44dcb0c:()=>f("default","@bookingcom/lingojs-react",[,[4,0,0,0],0,[0,0,0,0],2],(()=>a.e("4adc7643").then((()=>()=>a("586c05c1"))))),abab1afe:()=>f("default","@bookingcom/lingojs-core",[,[4,0,0,0],0,[0,0,0,0],2],(()=>a.e("dbbcde1e").then((()=>()=>a("3a88b380"))))),"2cb5c3c4":()=>f("default","react/jsx-runtime",[,[4,0,0,0],0,[0,0,0,0],2],(()=>a.e("c7fcb623").then((()=>()=>a("e33775bd"))))),d16e9636:()=>f("default","@bookingcom/capla-server/loadable",[,[4,0,0,0],0,[0,0,0,0],2],(()=>a.e("61e8a551").then((()=>()=>a("641c6525"))))),d1e54a96:()=>f("default","@bookingcom/capla-server/utils",[,[4,0,0,0],0,[0,0,0,0],2],(()=>a.e("061898bf").then((()=>()=>a("9d59f1ef"))))),e272e47d:()=>f("default","graphql",[,[4,0,0,0],0,[0,0,0,0],2],(()=>a.e("593dc40e").then((()=>()=>a("7afc82da"))))),"07c9789d":()=>f("default","@bookingcom/capla-server/package.json",[,[4,0,0,0],0,[0,0,0,0],2],(()=>a.e("75a8854b").then((()=>()=>a("3462d4c4"))))),"692288f1":()=>f("default","react-dom",[,[4,0,0,0],0,[0,0,0,0],2],(()=>a.e("4031dfbf").then((()=>()=>a("626cd766"))))),"43a4d203":()=>f("default","@bookingcom/capla-server/constants",[,[4,0,0,0],0,[0,0,0,0],2],(()=>a.e("41f349f3").then((()=>()=>a("352ad3e4"))))),d0fefcf5:()=>f("default","@bookingcom/capla-server/eventBus",[,[4,0,0,0],0,[0,0,0,0],2],(()=>a.e("655bad3a").then((()=>()=>a("29231e66")))))},b={ddf740c7:["ead71eb0","cedcabf9","dc6d28ff","28dbd132","239beb17","41c6c66e","6222292b","c44dcb0c","abab1afe","2cb5c3c4","d16e9636","d1e54a96"],cc871742:["ead71eb0","c44dcb0c","6222292b","abab1afe","dc6d28ff","d16e9636","41c6c66e","28dbd132","cedcabf9","239beb17","d1e54a96"],ac8e37c1:["e272e47d","ead71eb0"],f6fa06b0:["2cb5c3c4","ead71eb0"],af4cd56a:["07c9789d","2cb5c3c4","ead71eb0"],"239e3fc3":["2cb5c3c4","ead71eb0"],a11a41e9:["2cb5c3c4","ead71eb0"],eeb4660e:["2cb5c3c4","ead71eb0"],"1fe796b9":["abab1afe","ead71eb0"],"node_modules_bookingcom_bui-react_index_js-_11660":["692288f1","ead71eb0"],"1a809826":["ead71eb0"],a0f4f750:["ead71eb0"],"6c8f3c74":["e272e47d"],a07b2ac2:["2cb5c3c4"],ad0f5e78:["07c9789d","2cb5c3c4"],"051d0ef1":["2cb5c3c4"],"node_modules_bookingcom_bui-react_index_js-_11661":["692288f1"],"61e8a551":["2cb5c3c4"],"061898bf":["2cb5c3c4"],"47b42392":["43a4d203","d0fefcf5"]};a.f.consumes=(e,t)=>{a.o(b,e)&&b[e].forEach((e=>{if(a.o(u,e))return t.push(u[e]);var c=t=>{u[e]=0,a.m[e]=c=>{delete a.c[e],c.exports=t()}},o=t=>{delete u[e],a.m[e]=c=>{throw delete a.c[e],t}};try{var n=l[e]();n.then?t.push(u[e]=n.then(c).catch(o)):c(n)}catch(r){o(r)}}))}})(),(()=>{if("undefined"!==typeof document){var e=e=>new Promise(((t,c)=>{var o=a.miniCssF(e),n=a.p+o;if(((e,t)=>{for(var a=document.getElementsByTagName("link"),c=0;c<a.length;c++){var o=(r=a[c]).getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(o===e||o===t))return r}var n=document.getElementsByTagName("style");for(c=0;c<n.length;c++){var r;if((o=(r=n[c]).getAttribute("data-href"))===e||o===t)return r}})(o,n))return t();((e,t,c,o,n)=>{var r=document.createElement("link");r.rel="stylesheet",r.type="text/css",a.nc&&(r.nonce=a.nc),r.onerror=r.onload=a=>{if(r.onerror=r.onload=null,"load"===a.type)o();else{var c=a&&a.type,s=a&&a.target&&a.target.href||t,i=new Error("Loading CSS chunk "+e+" failed.\n("+c+": "+s+")");i.name="ChunkLoadError",i.code="CSS_CHUNK_LOAD_FAILED",i.type=c,i.request=s,r.parentNode&&r.parentNode.removeChild(r),n(i)}},r.href=t,c?c.parentNode.insertBefore(r,c.nextSibling):document.head.appendChild(r)})(e,n,null,t,c)})),t={c7d42fca:0};a.f.miniCss=(a,c)=>{t[a]?c.push(t[a]):0!==t[a]&&{ddf740c7:1,cc871742:1,"node_modules_bookingcom_bui-react_index_js-_11660":1,"node_modules_bookingcom_bui-react_index_js-_11661":1,"47b42392":1}[a]&&c.push(t[a]=e(a).then((()=>{t[a]=0}),(e=>{throw delete t[a],e})))}}})(),(()=>{var e={c7d42fca:0};a.f.j=(t,c)=>{var o=a.o(e,t)?e[t]:void 0;if(0!==o)if(o)c.push(o[2]);else{var n=new Promise(((a,c)=>o=e[t]=[a,c]));c.push(o[2]=n);var r=a.p+a.u(t),s=new Error;a.l(r,(c=>{if(a.o(e,t)&&(0!==(o=e[t])&&(e[t]=void 0),o)){var n=c&&("load"===c.type?"missing":c.type),r=c&&c.target&&c.target.src;s.message="Loading chunk "+t+" failed.\n("+n+": "+r+")",s.name="ChunkLoadError",s.type=n,s.request=r,o[1](s)}}),"chunk-"+t,t)}};var t=(t,c)=>{var o,n,r=c[0],s=c[1],i=c[2],d=0;if(r.some((t=>0!==e[t]))){for(o in s)a.o(s,o)&&(a.m[o]=s[o]);if(i)i(a)}for(t&&t(c);d<r.length;d++)n=r[d],a.o(e,n)&&e[n]&&e[n][0](),e[n]=0},c=self["b-conversational-ui-web-cs__LOADABLE_LOADED_CHUNKS__"]=self["b-conversational-ui-web-cs__LOADABLE_LOADED_CHUNKS__"]||[];c.forEach(t.bind(null,0)),c.push=t.bind(null,c.push.bind(c))})();var c=a("32121b0a");bConversationalUiWebCs=c})();
//# sourceMappingURL=https://istatic.booking.com/internal-static/capla/static/js/remoteEntry.8a2aa279.client.js.map