/* esm.sh - esbuild bundle(scroll-into-view-if-needed@3.0.10) es2021 production */
import{compute as n}from"/v119/compute-scroll-into-view@3.0.3/es2021/compute-scroll-into-view.mjs";var f=t=>t===!1?{block:"end",inline:"nearest"}:(o=>o===Object(o)&&Object.keys(o).length!==0)(t)?t:{block:"start",inline:"nearest"};function c(t,o){if(!t.isConnected||!(r=>{let e=r;for(;e&&e.parentNode;){if(e.parentNode===document)return!0;e=e.parentNode instanceof ShadowRoot?e.parentNode.host:e.parentNode}return!1})(t))return;if((r=>typeof r=="object"&&typeof r.behavior=="function")(o))return o.behavior(n(t,o));let a=typeof o=="boolean"||o==null?void 0:o.behavior;for(let{el:r,top:e,left:i}of n(t,f(o)))r.scroll({top:e,left:i,behavior:a})}export{c as default};
//# sourceMappingURL=scroll-into-view-if-needed.mjs.map