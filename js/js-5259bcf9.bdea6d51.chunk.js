"use strict";(self["b-index-lp-web-mfe__LOADABLE_LOADED_CHUNKS__"]=self["b-index-lp-web-mfe__LOADABLE_LOADED_CHUNKS__"]||[]).push([["5259bcf9"],{"07ee7421":(e,t,n)=>{n.d(t,{nI:()=>s});var r=n("43a4d203"),i=n("dc6d28ff");const o=()=>{switch((0,i.getRequestContext)().getSiteType()){case r.SiteType.MDOT:case r.SiteType.ANDROID:case r.SiteType.IOS:return"mobile";case r.SiteType.TDOT:return"tablet";case r.SiteType.WWW:default:return"desktop"}},s=()=>"desktop"===o()},af1e2b38:(e,t,n)=>{n.d(t,{NM:()=>r.N,sv:()=>o,Z6:()=>s});var r=n("6ee88c54"),i=n("dc6d28ff");const o=()=>(0,i.getRequestContext)().getSiteType()??r.N.WWW,s=()=>{const e=o();return{isWWW:e===r.N.WWW,isMDOT:e===r.N.MDOT,isTDOT:e===r.N.TDOT}}},"58729a71":(e,t,n)=>{n.r(t),n.d(t,{default:()=>E,inViewOnChangeFn:()=>M});var r=n("ead71eb0"),i=n.n(r),o=n("9a67ad93"),s=n("07ee7421"),a=n("af1e2b38"),c=n("dc6d28ff"),d=n.n(c),l=n("28dbd132"),h=n.n(l),b=n("d16e9636"),p=n.n(b),u=n("d1e54a96"),f=n.n(u),g=n("bb52dc60"),y=n("d24046b7"),v=n("6c1c5ad5");const m=(0,b.loadable)({resolved:{},chunkName(){return"bIndexLpWebMfe-bookingcom-lp-web-bh-mfe-components-PropertyTypeShowcase-PropertyTypeShowcase"},isReady(e){const t=this.resolve(e);return!0===this.resolved[t]&&!!n.m[t]},importAsync:()=>n.e("81ac3c8c").then(n.bind(n,"8dc4d5fd")),requireAsync(e){const t=this.resolve(e);return this.resolved[t]=!1,this.importAsync(e).then((e=>(this.resolved[t]=!0,e)))},requireSync(e){const t=this.resolve(e);return n(t)},resolve(){return"8dc4d5fd"}}),C=l.exp`cCHObKdcfFdHMOIaIdTUSXVVQaZaTaTaET`,w=l.exp`cCHObKdcfFdHMOIaIdTUSXVVQaHYYfPHe`,k=(0,c.getRequestContext)().getLanguage(),V=(0,u.constructUrl)({pathname:`/booking-home/index.${k}.html`}).toString(),M=(e,t,n,r,i,o,s)=>{e&&((0,l.trackExperimentStage)(s,1),t&&(0,l.trackExperimentStage)(s,2),n&&(0,l.trackExperimentStage)(s,3),r&&(0,l.trackExperimentStage)(s,4),i&&(0,l.trackExperimentStage)(s,5),o&&(0,l.trackExperimentStage)(s,6))},{isWWW:x,isMDOT:O}=(0,a.Z6)(),S=(0,c.getRequestContext)().getVisitorCountry()??"",T=()=>i().createElement(o.df,{onChange:e=>M(e,(0,s.nI)(),O,(0,y.mD)(S),(0,y.Bb)(S),(0,y.nI)(S),l.exp`NAFLeOeJYTBfFdHMfEWEYcZbBNfCKTfNcO`)},i().createElement(m,{additionalClassNames:[O?g.Z.cardContainerMdot:g.Z.cardContainer,x&&1===(0,l.trackExperiment)(C)?g.Z.alignmentExp:"",O&&1===(0,l.trackExperiment)(w)?g.Z.alignmentExpMdot:""],ctaUrl:V,actionableClassNames:[v.Z.layoutContainer]})),E=T},d24046b7:(e,t,n)=>{n.d(t,{Bb:()=>o,mD:()=>i,nI:()=>s});const r=["it","es","fr","de","gb"],i=e=>"us"===e.toLowerCase(),o=e=>r.includes(e.toLowerCase()),s=e=>"au"===e.toLowerCase()},"6c1c5ad5":(e,t,n)=>{n.d(t,{Z:()=>r});const r={layoutContainer:"ee82b96612"}},bb52dc60:(e,t,n)=>{n.d(t,{Z:()=>r});const r={cardContainer:"e6cb6f91d0",alignmentExp:"a310cb2713",layoutContainer:"ce12ce240a",wwwBackgroundDetail:"c98172b7b7",contentArea:"f1b4cf3f71",contentAreaText:"bd7e3b79e8",scrollableContainer:"fc4a7c1105",contentAreaButton:"aba7299e14",imageContainer:"bd6aaa8dac",cardContainerMdot:"a55ed17628",alignmentExpMdot:"ce3112fae5",layoutContainerMdot:"d21fb5d7e7",imageContainerMdot:"b1e9d4668f",contentAreaMdot:"a9c087c7c6",contentAreaTextMdot:"b1156523f8",contentAreaButtonMdot:"efd5f2523c",scrollableContainerMdot:"d11d7e2a1a",scrollableListContainer:"acc470a65f","bh-awareness-campaign-scrollable-text-animation-slidein":"fecac1391a",scrollableItemContainer:"a347cb04b1",scrollableTextItem:"b465d87da5"}},"9a67ad93":(e,t,n)=>{n.d(t,{YD:()=>p,df:()=>b});var r=n("ead71eb0"),i=Object.defineProperty,o=(e,t,n)=>(((e,t,n)=>{t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n})(e,"symbol"!==typeof t?t+"":t,n),n),s=new Map,a=new WeakMap,c=0,d=void 0;function l(e){return Object.keys(e).sort().filter((t=>void 0!==e[t])).map((t=>{return`${t}_${"root"===t?(n=e.root,n?(a.has(n)||(c+=1,a.set(n,c.toString())),a.get(n)):"0"):e[t]}`;var n})).toString()}function h(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:d;if("undefined"===typeof window.IntersectionObserver&&void 0!==r){const i=e.getBoundingClientRect();return t(r,{isIntersecting:r,target:e,intersectionRatio:"number"===typeof n.threshold?n.threshold:0,time:0,boundingClientRect:i,intersectionRect:i,rootBounds:i}),()=>{}}const{id:i,observer:o,elements:a}=function(e){const t=l(e);let n=s.get(t);if(!n){const r=new Map;let i;const o=new IntersectionObserver((t=>{t.forEach((t=>{var n;const o=t.isIntersecting&&i.some((e=>t.intersectionRatio>=e));e.trackVisibility&&"undefined"===typeof t.isVisible&&(t.isVisible=o),null==(n=r.get(t.target))||n.forEach((e=>{e(o,t)}))}))}),e);i=o.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:o,elements:r},s.set(t,n)}return n}(n),c=a.get(e)||[];return a.has(e)||a.set(e,c),c.push(t),o.observe(e),function(){c.splice(c.indexOf(t),1),0===c.length&&(a.delete(e),o.unobserve(e)),0===a.size&&(o.disconnect(),s.delete(i))}}var b=class extends r.Component{constructor(e){super(e),o(this,"node",null),o(this,"_unobserveCb",null),o(this,"handleNode",(e=>{this.node&&(this.unobserve(),e||this.props.triggerOnce||this.props.skip||this.setState({inView:!!this.props.initialInView,entry:void 0})),this.node=e||null,this.observeNode()})),o(this,"handleChange",((e,t)=>{e&&this.props.triggerOnce&&this.unobserve(),function(e){return"function"!==typeof e.children}(this.props)||this.setState({inView:e,entry:t}),this.props.onChange&&this.props.onChange(e,t)})),this.state={inView:!!e.initialInView,entry:void 0}}componentDidMount(){this.unobserve(),this.observeNode()}componentDidUpdate(e){e.rootMargin===this.props.rootMargin&&e.root===this.props.root&&e.threshold===this.props.threshold&&e.skip===this.props.skip&&e.trackVisibility===this.props.trackVisibility&&e.delay===this.props.delay||(this.unobserve(),this.observeNode())}componentWillUnmount(){this.unobserve()}observeNode(){if(!this.node||this.props.skip)return;const{threshold:e,root:t,rootMargin:n,trackVisibility:r,delay:i,fallbackInView:o}=this.props;this._unobserveCb=h(this.node,this.handleChange,{threshold:e,root:t,rootMargin:n,trackVisibility:r,delay:i},o)}unobserve(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)}render(){const{children:e}=this.props;if("function"===typeof e){const{inView:t,entry:n}=this.state;return e({inView:t,entry:n,ref:this.handleNode})}const{as:t,triggerOnce:n,threshold:i,root:o,rootMargin:s,onChange:a,skip:c,trackVisibility:d,delay:l,initialInView:h,fallbackInView:b,...p}=this.props;return r.createElement(t||"div",{ref:this.handleNode,...p},e)}};function p(){let{threshold:e,delay:t,trackVisibility:n,rootMargin:i,root:o,triggerOnce:s,skip:a,initialInView:c,fallbackInView:d,onChange:l}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};var b;const[p,u]=r.useState(null),f=r.useRef(),[g,y]=r.useState({inView:!!c,entry:void 0});f.current=l,r.useEffect((()=>{if(a||!p)return;let r;return r=h(p,((e,t)=>{y({inView:e,entry:t}),f.current&&f.current(e,t),t.isIntersecting&&s&&r&&(r(),r=void 0)}),{root:o,rootMargin:i,threshold:e,trackVisibility:n,delay:t},d),()=>{r&&r()}}),[Array.isArray(e)?e.toString():e,p,o,i,s,a,n,d,t]);const v=null==(b=g.entry)?void 0:b.target,m=r.useRef();p||!v||s||a||m.current===v||(m.current=v,y({inView:!!c,entry:void 0}));const C=[u,g.inView,g.entry];return C.ref=C[0],C.inView=C[1],C.entry=C[2],C}}}]);
//# sourceMappingURL=https://istatic.booking.com/internal-static/capla/static/js/5259bcf9.bdea6d51.chunk.js.map