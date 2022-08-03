var ne=Object.defineProperty,te=Object.defineProperties;var oe=Object.getOwnPropertyDescriptors;var q=Object.getOwnPropertySymbols;var me=Object.prototype.hasOwnProperty,ue=Object.prototype.propertyIsEnumerable;var L=(e,n,t)=>n in e?ne(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,P=(e,n)=>{for(var t in n||(n={}))me.call(n,t)&&L(e,t,n[t]);if(q)for(var t of q(n))ue.call(n,t)&&L(e,t,n[t]);return e},Y=(e,n)=>te(e,oe(n));var U=(e,n,t)=>(L(e,typeof n!="symbol"?n+"":n,t),t);import{d as k,o as y,e as g,f as B,h as V,t as ce,T as J,i as ae,j as z,v as F,a as f,c as S,k as ie,l as _,F as j,n as v,m as p,p as s,r as T,u as c,q as Q,s as $,x as X,y as w,z as G,A as Z,B as le,w as H,C as W,D as se}from"./@vue-0b9ec403.js";var D,I=k({setup:()=>({listeners:{beforeEnter(e){e.classList.add("collapse-transition"),e.dataset||(e.dataset={}),e.dataset.oldPaddingTop=e.style.paddingTop,e.dataset.oldPaddingBottom=e.style.paddingBottom,e.style.maxHeight=0,e.style.paddingTop=0,e.style.paddingBottom=0},enter(e){e.dataset.oldOverflow=e.style.overflow,e.scrollHeight!==0?(e.style.maxHeight=`${e.scrollHeight}px`,e.style.paddingTop=e.dataset.oldPaddingTop,e.style.paddingBottom=e.dataset.oldPaddingBottom):(e.style.maxHeight=0,e.style.paddingTop=e.dataset.oldPaddingTop,e.style.paddingBottom=e.dataset.oldPaddingBottom),e.style.overflow="hidden"},afterEnter(e){e.style.maxHeight="",e.style.overflow=e.dataset.oldOverflow},beforeLeave(e){e.classList.add("collapse-transition"),e.dataset||(e.dataset={}),e.dataset.oldPaddingTop=e.style.paddingTop,e.dataset.oldPaddingBottom=e.style.paddingBottom,e.dataset.oldOverflow=e.style.overflow,e.style.maxHeight=`${e.scrollHeight}px`,e.style.overflow="hidden"},leave(e){e.scrollHeight!==0&&(e.style.maxHeight=0,e.style.paddingTop=0,e.style.paddingBottom=0)},afterLeave(e){e.style.maxHeight="",e.style.overflow=e.dataset.oldOverflow,e.style.paddingTop=e.dataset.oldPaddingTop,e.style.paddingBottom=e.dataset.oldPaddingBottom}}})});I.render=function(e,n,t,m,o,u){return y(),g(J,ce(e.listeners),{default:B(()=>[V(e.$slots,"default")]),_:3},16)},I.__file="src/components/menu-collapse/index.vue",function(e){e.mainClass="cy-menu",e.stylePrefix="--cy-menu-",e.classPrefix="cy-menu-"}(D||(D={}));const re={normal:{closeWidth:"44px",backgroundColor:"#333",activeColor:"#425873",textColor:"#b7b7b7",activeTextCorlor:"#fff"},primary:{closeWidth:"38px",backgroundColor:"#002654",activeColor:"#285a92",textColor:"#fff",activeTextCorlor:"#54c5ff"},dark:{closeWidth:"38px",backgroundColor:"#1e1e2f",activeColor:"#3a3f51",textColor:"#8c909a",activeTextCorlor:"#007bff"}},N=e=>{const n={};return e.forEach(t=>{const m=D.stylePrefix+t.prop;let o=null;t.type==="num"?o=/^[1-9][0-9]*([\.][0-9]+)?$/g.test(t.val)?t.val+"px":t.val:o=t.val,n[m]=o}),n},d=e=>(typeof e=="string"?e.split(" "):e).map(n=>n?D.classPrefix+n:null).filter(n=>!!n).join(" ");var E=k({components:{collapse:I},props:{child:{type:Array,default:()=>[]},deep:{type:Number,default:0},open:{type:Boolean||void 0,default:void 0},isPopover:{type:Boolean||void 0,default:void 0}},setup:e=>({props:e,getClassFomat:d})});E.render=function(e,n,t,m,o,u){const l=ae("collapse");return y(),g(l,null,{default:B(()=>[z(f("ul",{class:v(e.getClassFomat(`menu-list list-child-${e.props.deep} ${e.props.open?"toggle-open":"toggle-close"}`))},[(y(!0),S(j,null,ie(e.props.child,r=>(y(),g(_(r),{key:r,"is-popover":e.props.isPopover},null,8,["is-popover"]))),128))],2),[[F,e.props.open]])]),_:1})},E.__file="src/components/menu-list/menu-list.vue";var O=k({props:{type:{type:String,default:"item"},class:{type:String,default:""},width:{type:String,default:"100%"},height:{type:String,default:"100%"},color:{type:String,default:""}},setup(e){const n=p(()=>({item:s("svg",{viewBox:"0 0 1024 1024",class:e.class,width:e.width,height:e.height,fill:e.color},s("path",{d:"M512 877.714286c-204.8 0-365.714286-160.914286-365.714286-365.714286s160.914286-365.714286 365.714286-365.714286 365.714286 160.914286 365.714286 365.714286-160.914286 365.714286-365.714286 365.714286M512 0C226.742857 0 0 226.742857 0 512s226.742857 512 512 512 512-226.742857 512-512-226.742857-512-512-512m0 365.714286c-80.457143 0-146.285714 65.828571-146.285714 146.285714s65.828571 146.285714 146.285714 146.285714 146.285714-65.828571 146.285714-146.285714-65.828571-146.285714-146.285714-146.285714"})),arrow1:s("svg",{viewBox:"0 0 1024 1024",class:e.class,width:e.width,height:e.height,fill:e.color},s("path",{d:"M677.888 598.528l-254.464 239.616c-15.872 14.848-38.912 18.944-59.392 11.264-20.48-8.192-33.792-26.624-33.792-47.616V322.56c0-20.992 13.312-39.424 33.792-47.616 6.656-2.56 13.824-4.096 20.992-4.096 14.336 0 28.16 5.12 38.4 15.36l254.464 239.616c10.24 9.728 15.872 23.04 15.872 36.352 0.512 13.824-5.632 26.624-15.872 36.352z"})),arrow2:s("svg",{viewBox:"0 0 1024 1024",class:e.class,width:e.width,height:e.height,fill:e.color},s("path",{d:"M558.933333 490.666667L384 665.6l59.733333 59.733333 234.666667-234.666666L443.733333 256 384 315.733333l174.933333 174.933334z"})),arrow3:s("svg",{viewBox:"0 0 1024 1024",class:e.class,width:e.width,height:e.height,fill:e.color},[s("path",{d:"M837.9904 570.0608H124.5696a29.0304 29.0304 0 0 1-29.0304-29.0304V482.9696a29.0304 29.0304 0 0 1 29.0304-29.0304h713.4208z"}),s("path",{d:"M561.3056 808.96l-40.96-40.96a28.928 28.928 0 0 1 0-40.96l215.04-215.04-215.04-215.04a28.9792 28.9792 0 0 1 0-40.96l40.96-40.96a28.9792 28.9792 0 0 1 40.96 0l296.96 296.96-296.96 296.96a28.9792 28.9792 0 0 1-40.96 0z"})])}));return()=>n.value[e.type]}});O.__file="src/components/menu-item/icon.vue";var ee=k({props:{disabled:{type:Boolean,default:!1}},setup(e){const n=e,t=T({show:!1,stopClose:!1,x:0,y:0,gap:12}),m=T(null),o=p(()=>N([{prop:"popover-x",val:t.value.x,type:"num"},{prop:"popover-y",val:t.value.y,type:"num"}])),u=()=>{setTimeout(()=>{t.value.stopClose||(t.value.show=!1)},200)},l=i=>{if(n.disabled)return!1;const{right:h,top:x}=i.target.getBoundingClientRect();t.value.x=h,t.value.y=x,t.value.show=!0,t.value.stopClose=!0,W(()=>{const a=m.value.offsetHeight+x-document.body.clientHeight;if(a>0){const C=x-a<0;t.value.y=C?0:x-a,t.value.gap=C?12+x:12+a}else t.value.gap=12})},r=()=>{t.value.stopClose=!1,u()},b=()=>{t.value.stopClose=!0},M=()=>{t.value.stopClose=!1,u()};return(i,h)=>(y(),S(j,null,[f("div",{class:v(c(d)("popover-template")),onMouseenter:l,onMouseleave:r},[V(i.$slots,"trigger"),V(i.$slots,"default")],34),Q(J,{name:"popover"},{default:B(()=>[z(f("div",{class:v(c(d)("popover")),style:$(c(o)),onMouseenter:b,onMouseleave:M},[f("div",{class:v(c(d)("popover-tip")),style:$(c(N)([{prop:"gap",val:t.value.gap,type:"num"}]))},null,6),f("div",{ref_key:"popoverContRef",ref:m,class:v(c(d)("popover-content"))},[V(i.$slots,"content")],2)],38),[[F,t.value.show]])]),_:3})],64))}});ee.__file="src/components/menu-popover/index.vue";var K=k({props:{data:{type:Object,default:""},deep:{type:Number,default:0},isPopover:{type:Boolean||void 0,default:void 0},itemSlot:{},iconSlot:{}},setup(e){const n=e,t=X("globalState"),m=p(()=>t.state.openedMenus.findIndex(a=>a.key===n.data.key&&a.deep===n.deep)>-1),o=p(()=>t.state.activeMenus.includes(n.data.key)),u=T(n.data.children&&n.data.children.length>0),l=()=>{if(n.data.disabled)return!1;if(!u.value){const a=t.state.MenuPropsData.beforeRouter;a?a(t.state.activeMenuKey,n.data.key,r):r(n.data.key)}if(u.value&&!n.isPopover&&t.state.MenuPropsData.open!==!1&&t.state.MenuPropsData.alwaysPopover===!1){const a=P({},n.data);m.value?t.remove(a):t.pushMenu(a)}t.menuEmitsMethod("menu-click",n.data)},r=(a=n.data.key)=>{t.state.MenuPropsData.modelValue===void 0&&t.pushActiveMenu(a),t.menuEmitsMethod("update:modelValue",a)},b=p(()=>!t.state.MenuPropsData.alwaysPopover&&(!u.value&&n.isPopover||t.state.MenuPropsData.open||t.state.MenuPropsData.open===void 0&&t.state.isOpen)),M=p(()=>{let a="";return a+=m.value?"open-list ":"",a+=o.value?"open-active ":"",a+=n.data.disabled?"menu-disabled ":"",a+=n.isPopover?"is-popover ":"",a}),i=p(()=>({"padding-left":n.isPopover?null:n.deep*t.state.MenuPropsData.offset+"px"})),h=T(u.value?n.data.children:[]),x=p(()=>h.value.map(a=>s(K,{data:a,deep:n.deep+1,itemSlot:n.itemSlot})));return(a,C)=>(y(),S("li",{class:v(c(d)("menu-item"))},[Q(ee,{disabled:c(b)},{trigger:B(()=>[f("div",{class:v(c(d)(`menu-item-box ${c(M)}`)),style:$(c(i)),onClick:l},[w(" \u81EA\u5B9A\u4E49\u6E32\u67D3\u6216\u63D2\u69FD "),n.itemSlot||c(t).state.MenuPropsData.itemRender?(y(),g(_(n.itemSlot||c(t).state.MenuPropsData.itemRender),{key:0,data:n.data,active:c(o),popover:n.isPopover,disabled:n.data.disabled,open:c(m)},null,8,["data","active","popover","disabled","open"])):(y(),S(j,{key:1},[w(" \u9ED8\u8BA4\u83DC\u5355\u9879DOM "),w(" \u81EA\u5B9A\u4E49\u56FE\u6807\u6E32\u67D3\u6216\u63D2\u69FD "),z(f("div",{class:v(c(d)("menu-icon"))},[n.iconSlot||c(t).state.MenuPropsData.iconRender?(y(),g(_(n.iconSlot||c(t).state.MenuPropsData.iconRender),{key:0,data:n.data,active:c(o),open:c(m),disabled:n.data.disabled,deep:n.deep},null,8,["data","active","open","disabled","deep"])):c(t).state.MenuPropsData.showIcon&&n.deep===1?(y(),g(O,{key:1})):w("v-if",!0)],2),[[F,c(t).state.MenuPropsData.showIcon]]),f("span",{class:v(c(d)("menu-text"))},G(n.data.name),3),u.value?(y(),g(O,{key:0,class:v(c(d)(`col-icon ${c(m)?"open-status":""} ${c(o)?"active-status":""}`)),type:c(t).state.MenuPropsData.arrowType,width:"16",height:"16"},null,8,["class","type"])):w("v-if",!0)],64))],6)]),content:B(()=>[u.value?(y(),g(E,{key:0,child:c(x),deep:n.deep,open:!0,"is-popover":!0},null,8,["child","deep"])):(y(),S("span",{key:1,class:v(c(d)("popover-label"))},G(n.data.name),3))]),_:1},8,["disabled"]),w(" \u5B50\u83DC\u5355\u9879\u5217\u8868 "),u.value&&!n.isPopover?(y(),g(E,{key:0,child:c(x),deep:n.deep,open:c(m)},null,8,["child","deep","open"])):w("v-if",!0)],2))}});K.__file="src/components/menu-item/menu-item.vue";const ye=k({name:"CyaneryMenuList",props:{menuList:{type:Array,default:()=>[]},deep:{type:Number,default:0},itemSlot:{},iconSlot:{}},setup(e){const n=X("globalState"),t=p(()=>{const o=m([...e.menuList]);return n.saveMenus(o),o.map(u=>s(K,{data:u,deep:e.deep+1,itemSlot:e.itemSlot,iconSlot:e.iconSlot}))}),m=(o,u=1)=>o.map(l=>{var b;const r=P({},l);return l.children&&(r.children=m(l.children,u+1)),Y(P({},r),{key:(b=r.key)!=null?b:r.path,deep:u})});return()=>s(E,{child:t.value,deep:e.deep,open:!0})}}),pe=k({name:"CyaneryMenuToggle",props:{modelValue:{type:Boolean,default:!1},type:{type:String,default:""}},emits:["update:modelValue"],setup(e,{emit:n}){const t=p(()=>e.modelValue?"is-open":"is-close");return()=>s(O,{class:d("toggle-box "+t.value),type:"arrow2",onClick:()=>(()=>{const m=!e.modelValue;n("update:modelValue",m)})()})}}),A=[String,Function],de={modelValue:{type:String||void 0,default:void 0},data:{type:Array,default:()=>[]},className:{type:String,default:""},width:{type:[Number,String],default:"100%"},open:{type:Boolean||void 0,default:void 0},toggleButton:{type:Boolean,default:!1},unique:{type:Boolean,default:!1},trigger:{type:String,default:"click"},beforeRouter:{type:Function||void 0,default:void 0},showIcon:{type:Boolean,default:!0},closeWidth:{type:String,default:""},offset:{type:Number,default:6},alwaysPopover:{type:Boolean,default:!1},arrowType:{type:String,default:"arrow1"},theme:{type:String,default:"normal"},backgroundColor:{type:String,default:""},activeColor:{type:String,default:""},textColor:{type:String,default:""},activeTextCorlor:{type:String,default:""},headerRender:A,footerRender:A,itemRender:A,iconRender:A};class he{constructor(){U(this,"state");this.state=Z({isOpen:!0,allMenus:[],openedMenus:[],activeMenuKey:"",activeMenus:p(()=>this.getActiveMenus(this.state.activeMenuKey,this.state.allMenus)),MenuPropsData:{},menuEmitFn:null})}setMenuProps(n){this.state.MenuPropsData=n}setMenuEmit(n){this.state.menuEmitFn=n}menuEmitsMethod(n,t){this.state.menuEmitFn&&this.state.menuEmitFn(n,t)}saveMenus(n){n instanceof Array&&(this.state.allMenus=n)}pushActiveMenu(n,t){this.state.activeMenuKey=n,W(()=>{this.state.MenuPropsData.alwaysPopover||this.setActiveOpen(this.state.allMenus,this.state.activeMenus,t)})}getActiveMenus(n,t,m=0,o=[]){for(let u=0;u<t.length&&o[o.length-1]!==n;u++){const l=t[u];if(o[m]=l.key,n===l.key){o.splice(m+1);break}l.children&&l.children.length&&this.getActiveMenus(n,l.children,m+1,o)}return o[o.length-1]!==n?[]:o}setActiveOpen(n,t,m){t.forEach(o=>{const u=this.findMenuItem(n,o);this.state.openedMenus.findIndex(l=>l.key===u.key&&l.deep===u.deep)<0&&m&&this.pushMenu(u)})}findMenuItem(n=this.state.allMenus,t){const m=[];for(let o=0;o<n.length;o++){const u=n[o];if(m.length>0)break;if(u.key===t){m.push(u);break}m.length===0&&u.children&&u.children.length>0&&this.findMenuItem(u.children,t).key&&m.push(this.findMenuItem(u.children,t))}return m[0]||{}}pushMenu(n){const t=n.children&&n.children.length>0;if(this.state.MenuPropsData.unique&&t){const m=this.state.openedMenus.findIndex(o=>o.deep===n.deep);m>-1&&this.state.openedMenus.splice(m,1)}if(t){const m=P({},n);delete m.children,this.state.openedMenus.push(m)}}remove(n){const t=this.state.openedMenus.findIndex(m=>m.key===n.key&&m.deep===n.deep);this.state.openedMenus.splice(t,1)}closeAllMenu(){this.state.openedMenus.splice(0,this.state.openedMenus.length)}}const ve=k({name:"CyaneryMenu",props:de,emits:["update:modelValue","update:open","menu-click"],setup(e,{emit:n,slots:t,expose:m}){var M;const o=Z(new he),u=T(null);le("globalState",o),o.setMenuEmit(n),o.setMenuProps(e),o.state.isOpen=(M=e.open)!=null?M:!0,H(()=>e.open,i=>{o.state.isOpen=i,W(()=>{i===!1&&o.closeAllMenu()})}),H(()=>e.modelValue,i=>o.pushActiveMenu(i,o.state.isOpen),{immediate:!0}),se(()=>{H(()=>e.trigger,i=>{const h=u.value;i==="hover"?(o.menuEmitsMethod("update:open",!1),h.addEventListener("mouseenter",l),h.addEventListener("mouseleave",l)):(h.removeEventListener("mouseenter",l),h.removeEventListener("mouseleave",l))},{immediate:!0})});const l=()=>o.menuEmitsMethod("update:open",!e.open),r=p(()=>{var C;const i=e.headerRender?s(e.headerRender):s("div",null,t.header?t.header({open:e.open}):null),h=s(pe,{modelValue:(C=e.open)!=null?C:o.state.isOpen,"onUpdate:modelValue":R=>{o.state.isOpen=R,o.menuEmitsMethod("update:open",R),R===!1&&o.closeAllMenu()}}),x=s(ye,{menuList:e.data,itemSlot:t.menuItem,iconSlot:t.icon}),a=e.footerRender?s(e.footerRender):s("div",null,t.footer?t.footer({open:e.open}):null);return[i,e.toggleButton?h:null,x,a]}),b=p(()=>{const i=re[e.theme];return N([{prop:"width",val:e.width,type:"num"},{prop:"close-width",val:e.closeWidth||i.closeWidth,type:"num"},{prop:"theme-bg-color",val:e.backgroundColor||i.backgroundColor,type:"color"},{prop:"theme-active-color",val:e.activeColor||i.activeColor,type:"color"},{prop:"theme-text-color",val:e.textColor||i.textColor,type:"color"},{prop:"theme-active-text-color",val:e.activeTextCorlor||i.activeTextCorlor,type:"color"}])});return m({closeAll:()=>o.closeAllMenu(),openMenu:i=>o.pushMenu(i),closeMenu:i=>o.remove(i)}),{ContentRef:u,props:e,globalState:o,styleVar:b,childDomList:r}},render(){var e;return s("div",{class:`${D.mainClass} `+d(this.props.className+` theme-${this.props.theme} ${((e=this.props.open)!=null?e:this.globalState.state.isOpen)?"open-status":"close-status"}`),style:this.styleVar,ref:"ContentRef"},this.childDomList)}});(function(e,n){n===void 0&&(n={});var t=n.insertAt;if(e&&typeof document!="undefined"){var m=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css",t==="top"&&m.firstChild?m.insertBefore(o,m.firstChild):m.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}})(`.cy-menu.cy-menu-theme-normal .cy-menu-menu-list {
  color: var(--cy-menu-theme-text-color);
  background-color: var(--cy-menu-theme-bg-color);
}
.cy-menu.cy-menu-theme-normal .cy-menu-menu-list .cy-menu-menu-item .cy-menu-menu-item-box {
  border-left: 3px solid transparent;
  border-left-width: initial;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  border-top: 1px solid rgba(255, 255, 255, 0.05);
}
.cy-menu.cy-menu-theme-normal .cy-menu-menu-list .cy-menu-menu-item .cy-menu-menu-item-box:hover {
  background-color: rgba(0, 0, 0, 0.1);
  border-left-color: var(--cy-menu-theme-active-text-color);
}
.cy-menu.cy-menu-theme-normal .cy-menu-menu-list .cy-menu-menu-item .cy-menu-menu-item-box.cy-menu-open-active {
  color: var(--cy-menu-theme-active-text-color);
  border-left-color: var(--cy-menu-theme-active-text-color);
}
.cy-menu.cy-menu-theme-normal .cy-menu-menu-list .cy-menu-menu-item .cy-menu-menu-item-box.cy-menu-open-active::before {
  content: "";
  position: absolute;
  left: 0;
  top: 50%;
  border: 4px solid transparent;
  border-left-color: var(--cy-menu-theme-active-text-color);
  transform: translateY(-50%);
  transition: border 0.3s ease-in-out;
}
.cy-menu.cy-menu-theme-normal .cy-menu-menu-list .cy-menu-menu-item .cy-menu-menu-item-box.cy-menu-open-active > .cy-menu-menu-icon, .cy-menu.cy-menu-theme-normal .cy-menu-menu-list .cy-menu-menu-item .cy-menu-menu-item-box.cy-menu-open-active > .cy-menu-menu-text, .cy-menu.cy-menu-theme-normal .cy-menu-menu-list .cy-menu-menu-item .cy-menu-menu-item-box.cy-menu-open-active > .cy-menu-active-status {
  color: var(--cy-menu-theme-active-text-color);
  fill: var(--cy-menu-theme-active-text-color);
}
.cy-menu.cy-menu-theme-normal .cy-menu-menu-list .cy-menu-menu-item .cy-menu-menu-item-box.cy-menu-menu-disabled {
  color: #ccc;
  background-color: #a7b4bf;
}
.cy-menu.cy-menu-theme-normal .cy-menu-menu-list .cy-menu-menu-item .cy-menu-menu-item-box.cy-menu-menu-disabled > .cy-menu-menu-icon, .cy-menu.cy-menu-theme-normal .cy-menu-menu-list .cy-menu-menu-item .cy-menu-menu-item-box.cy-menu-menu-disabled > .cy-menu-col-icon {
  fill: #ccc;
}
.cy-menu.cy-menu-theme-normal .cy-menu-menu-list[class*=cy-menu-list-child]:not(.cy-menu-list-child-0) {
  background-color: var(--cy-menu-theme-active-color);
}
.cy-menu.cy-menu-theme-normal .cy-menu-popover-content .cy-menu-menu-item-box.cy-menu-is-popover {
  background-color: var(--cy-menu-theme-bg-color);
}

.cy-menu.cy-menu-theme-primary .cy-menu-menu-list {
  color: var(--cy-menu-theme-text-color);
  background-color: var(--cy-menu-theme-bg-color);
}
.cy-menu.cy-menu-theme-primary .cy-menu-menu-list .cy-menu-menu-item .cy-menu-menu-item-box {
  padding-top: 12px;
  padding-bottom: 12px;
}
.cy-menu.cy-menu-theme-primary .cy-menu-menu-list .cy-menu-menu-item .cy-menu-menu-item-box:hover {
  color: var(--cy-menu-theme-active-text-color);
  background-color: var(--cy-menu-theme-active-color);
}
.cy-menu.cy-menu-theme-primary .cy-menu-menu-list .cy-menu-menu-item .cy-menu-menu-item-box:hover > .cy-menu-menu-icon, .cy-menu.cy-menu-theme-primary .cy-menu-menu-list .cy-menu-menu-item .cy-menu-menu-item-box:hover > .cy-menu-col-icon {
  fill: var(--cy-menu-theme-active-text-color);
}
.cy-menu.cy-menu-theme-primary .cy-menu-menu-list .cy-menu-menu-item .cy-menu-menu-item-box.cy-menu-open-active > .cy-menu-menu-icon, .cy-menu.cy-menu-theme-primary .cy-menu-menu-list .cy-menu-menu-item .cy-menu-menu-item-box.cy-menu-open-active > .cy-menu-menu-text, .cy-menu.cy-menu-theme-primary .cy-menu-menu-list .cy-menu-menu-item .cy-menu-menu-item-box.cy-menu-open-active > .cy-menu-active-status {
  color: var(--cy-menu-theme-active-text-color);
  fill: var(--cy-menu-theme-active-text-color);
}
.cy-menu.cy-menu-theme-primary .cy-menu-menu-list .cy-menu-menu-item .cy-menu-menu-item-box.cy-menu-menu-disabled {
  color: #e9e9ee;
}
.cy-menu.cy-menu-theme-primary .cy-menu-menu-list .cy-menu-menu-item .cy-menu-menu-item-box.cy-menu-menu-disabled > .cy-menu-menu-icon, .cy-menu.cy-menu-theme-primary .cy-menu-menu-list .cy-menu-menu-item .cy-menu-menu-item-box.cy-menu-menu-disabled > .cy-menu-col-icon {
  fill: #e9e9ee;
}
.cy-menu.cy-menu-theme-primary .cy-menu-menu-list[class*=cy-menu-list-child]:not(.cy-menu-list-child-0) .cy-menu-popover-template > .cy-menu-menu-item-box:not(.cy-menu-is-popover) {
  padding-top: 8px;
  padding-bottom: 8px;
  padding-right: 26px;
}
.cy-menu.cy-menu-theme-primary .cy-menu-menu-list[class*=cy-menu-list-child]:not(.cy-menu-list-child-0) .cy-menu-popover-template > .cy-menu-menu-item-box:not(.cy-menu-is-popover)::before {
  content: "";
  position: absolute;
  left: 18px;
  top: 0;
  bottom: 0;
  width: 2px;
  background-color: #0355a3;
}
.cy-menu.cy-menu-theme-primary .cy-menu-menu-list[class*=cy-menu-list-child]:not(.cy-menu-list-child-0) .cy-menu-popover-template > .cy-menu-menu-item-box:not(.cy-menu-is-popover).cy-menu-open-active::before {
  background-color: #a2b5f7;
}
.cy-menu.cy-menu-theme-primary .cy-menu-menu-list[class*=cy-menu-list-child]:not(.cy-menu-list-child-0) .cy-menu-popover-template > .cy-menu-menu-item-box:not(.cy-menu-is-popover):hover {
  color: var(--cy-menu-theme-active-text-color);
  background-color: var(--cy-menu-theme-bg-color);
}
.cy-menu.cy-menu-theme-primary .cy-menu-popover-content .cy-menu-menu-item-box.cy-menu-is-popover {
  padding-top: 10px;
  padding-bottom: 10px;
}

.cy-menu.cy-menu-theme-dark > .cy-menu-menu-list > .cy-menu-menu-item {
  margin-top: 4px;
}
.cy-menu.cy-menu-theme-dark > .cy-menu-menu-list > .cy-menu-menu-item:nth-child(1) {
  margin-top: 10px;
}
.cy-menu.cy-menu-theme-dark .cy-menu-menu-list {
  color: var(--cy-menu-theme-text-color);
  background-color: var(--cy-menu-theme-bg-color);
}
.cy-menu.cy-menu-theme-dark .cy-menu-menu-list .cy-menu-menu-item .cy-menu-menu-item-box {
  padding-top: 12px;
  padding-bottom: 12px;
  padding-right: 28px;
}
.cy-menu.cy-menu-theme-dark .cy-menu-menu-list .cy-menu-menu-item .cy-menu-menu-item-box > .cy-menu-col-icon {
  right: 12px;
}
.cy-menu.cy-menu-theme-dark .cy-menu-menu-list .cy-menu-menu-item .cy-menu-menu-item-box:hover {
  color: var(--cy-menu-theme-active-text-color);
  background-color: var(--cy-menu-theme-active-color);
}
.cy-menu.cy-menu-theme-dark .cy-menu-menu-list .cy-menu-menu-item .cy-menu-menu-item-box:hover > .cy-menu-menu-icon, .cy-menu.cy-menu-theme-dark .cy-menu-menu-list .cy-menu-menu-item .cy-menu-menu-item-box:hover > .cy-menu-col-icon {
  fill: var(--cy-menu-theme-active-text-color);
}
.cy-menu.cy-menu-theme-dark .cy-menu-menu-list .cy-menu-menu-item .cy-menu-menu-item-box.cy-menu-open-list {
  border-radius: 10px 10px 0 0;
  background-color: var(--cy-menu-theme-active-color);
}
.cy-menu.cy-menu-theme-dark .cy-menu-menu-list .cy-menu-menu-item .cy-menu-menu-item-box.cy-menu-open-active {
  background-color: var(--cy-menu-theme-active-color);
}
.cy-menu.cy-menu-theme-dark .cy-menu-menu-list .cy-menu-menu-item .cy-menu-menu-item-box.cy-menu-open-active > .cy-menu-menu-icon, .cy-menu.cy-menu-theme-dark .cy-menu-menu-list .cy-menu-menu-item .cy-menu-menu-item-box.cy-menu-open-active > .cy-menu-menu-text, .cy-menu.cy-menu-theme-dark .cy-menu-menu-list .cy-menu-menu-item .cy-menu-menu-item-box.cy-menu-open-active > .cy-menu-active-status {
  color: var(--cy-menu-theme-active-text-color);
  fill: var(--cy-menu-theme-active-text-color);
}
.cy-menu.cy-menu-theme-dark .cy-menu-menu-list .cy-menu-menu-item .cy-menu-menu-item-box.cy-menu-menu-disabled {
  color: #e9e9ee;
}
.cy-menu.cy-menu-theme-dark .cy-menu-menu-list .cy-menu-menu-item .cy-menu-menu-item-box.cy-menu-menu-disabled > .cy-menu-menu-icon, .cy-menu.cy-menu-theme-dark .cy-menu-menu-list .cy-menu-menu-item .cy-menu-menu-item-box.cy-menu-menu-disabled > .cy-menu-col-icon {
  fill: #e9e9ee;
}
.cy-menu.cy-menu-theme-dark .cy-menu-menu-list .cy-menu-list-child-1 {
  box-shadow: 0px -18px 0 -12px var(--cy-menu-theme-active-color);
}
.cy-menu.cy-menu-theme-dark:not(.cy-menu-close-status) .cy-menu-menu-list .cy-menu-menu-item-box {
  margin: 0 12px;
  border-radius: 10px;
}
.cy-menu.cy-menu-theme-dark .cy-menu-menu-list[class*=cy-menu-list-child]:not(.cy-menu-list-child-0) .cy-menu-popover-template > .cy-menu-menu-item-box:not(.cy-menu-is-popover) {
  padding-top: 8px;
  padding-bottom: 8px;
  padding-right: 26px;
  color: var(--cy-menu-theme-text-color);
  border-radius: 0;
  background-color: var(--cy-menu-theme-active-color);
}
.cy-menu.cy-menu-theme-dark .cy-menu-menu-list[class*=cy-menu-list-child]:not(.cy-menu-list-child-0) .cy-menu-popover-template > .cy-menu-menu-item-box:not(.cy-menu-is-popover)::before {
  content: "";
  position: absolute;
  left: 18px;
  top: 50%;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: var(--cy-menu-theme-text-color);
  transform: translateY(-50%);
}
.cy-menu.cy-menu-theme-dark .cy-menu-menu-list[class*=cy-menu-list-child]:not(.cy-menu-list-child-0) .cy-menu-popover-template > .cy-menu-menu-item-box:not(.cy-menu-is-popover).cy-menu-open-active::before {
  background-color: var(--cy-menu-theme-active-text-color);
}
.cy-menu.cy-menu-theme-dark .cy-menu-menu-list[class*=cy-menu-list-child]:not(.cy-menu-list-child-0) .cy-menu-popover-template > .cy-menu-menu-item-box:not(.cy-menu-is-popover):hover {
  color: var(--cy-menu-theme-active-text-color);
  background-color: var(--cy-menu-theme-active-color);
}
.cy-menu.cy-menu-theme-dark .cy-menu-popover-content {
  box-shadow: 4px 4px 12px rgba(0, 0, 0, 0.2);
}
.cy-menu.cy-menu-theme-dark .cy-menu-popover-content .cy-menu-list-child-1 {
  box-shadow: none;
}
.cy-menu.cy-menu-theme-dark .cy-menu-popover-content .cy-menu-menu-item-box.cy-menu-is-popover {
  padding-top: 10px;
  padding-bottom: 10px;
  margin: 0;
  border-radius: 0;
}

.cy-menu {
  --cy-menu-animate-time: 0.3s;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  height: 100%;
  width: var(--cy-menu-width);
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.2901960784);
  user-select: none;
  transition: width 0.2s ease-in-out;
}
.cy-menu.cy-menu-close-status {
  width: var(--cy-menu-close-width);
}
.cy-menu.cy-menu-close-status .cy-menu-menu-list:not(.cy-menu-list-child-0) .cy-menu-menu-icon {
  display: none;
}
.cy-menu.cy-menu-close-status > .cy-menu-list-child-0 > .cy-menu-menu-item > .cy-menu-popover-template > .cy-menu-menu-item-box .cy-menu-menu-icon {
  display: unset;
}
.cy-menu.cy-menu-close-status > .cy-menu-list-child-0 > .cy-menu-menu-item > .cy-menu-popover-template > .cy-menu-menu-item-box .cy-menu-menu-text, .cy-menu.cy-menu-close-status > .cy-menu-list-child-0 > .cy-menu-menu-item > .cy-menu-popover-template > .cy-menu-menu-item-box .cy-menu-col-icon {
  display: none;
}
.cy-menu.cy-menu-open-status {
  width: var(--cy-menu-width);
}
.cy-menu .cy-menu-toggle-box {
  position: absolute;
  right: -30px;
  width: 30px;
  height: 30px;
  background-color: var(--cy-menu-theme-bg-color);
  fill: var(--cy-menu-theme-text-color);
  cursor: pointer;
}
.cy-menu .cy-menu-toggle-box:hover {
  fill: var(--cy-menu-theme-active-text-color);
}
.cy-menu .cy-menu-toggle-box.cy-menu-is-open {
  transform: rotate(180deg);
}
.cy-menu .cy-menu-menu-list {
  position: relative;
  margin: 0;
  padding: 0;
  width: 100%;
  flex: 1;
  overflow: auto;
}
.cy-menu .cy-menu-menu-list .cy-menu-menu-item {
  list-style: none;
  width: 100%;
  overflow: hidden;
}
.cy-menu .cy-menu-menu-list .cy-menu-menu-item .cy-menu-menu-item-box {
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 12px 24px 12px 12px;
  font-size: 14px;
  white-space: nowrap;
  cursor: pointer;
  text-overflow: ellipsis;
  overflow: hidden;
  transition: background 0.2s ease-in-out, border 0.2s ease-in-out, color 0.2s ease-in-out;
}
.cy-menu .cy-menu-menu-list .cy-menu-menu-item .cy-menu-menu-item-box .cy-menu-menu-icon {
  fill: var(--cy-menu-theme-text-color);
  min-width: 22px;
  width: 22px;
  height: 22px;
  padding: 0 4px;
  margin-right: 6px;
}
.cy-menu .cy-menu-menu-list .cy-menu-menu-item .cy-menu-menu-item-box .cy-menu-col-icon {
  fill: var(--cy-menu-theme-text-color);
  position: absolute;
  right: 4px;
  transition: transform 0.2s linear;
}
.cy-menu .cy-menu-menu-list .cy-menu-menu-item .cy-menu-menu-item-box .cy-menu-col-icon.cy-menu-open-status {
  transform: rotate(90deg);
}
.cy-menu .cy-menu-menu-list .cy-menu-menu-item .cy-menu-menu-item-box.cy-menu-menu-disabled {
  cursor: not-allowed;
}
.cy-menu .cy-menu-menu-list[class*=cy-menu-list-child]:not(.cy-menu-list-child-0) {
  overflow: hidden;
}
.cy-menu .cy-menu-menu-list[class*=cy-menu-list-child]:not(.cy-menu-list-child-0) .cy-menu-menu-item-box {
  font-size: 12px;
}
.cy-menu .cy-menu-menu-list::-webkit-scrollbar {
  width: 4px;
  background-color: var(--cy-menu-theme-bg-color);
}
.cy-menu .cy-menu-menu-list::-webkit-scrollbar-thumb {
  border-radius: 2px;
  background-color: #c1c1c1;
}
.cy-menu .cy-menu-menu-list::-webkit-scrollbar-thumb:hover {
  background-color: #a8a8a8;
}
.cy-menu .cy-menu-menu-list::-webkit-scrollbar-thumb:active {
  background-color: #787878;
}
.cy-menu .cy-menu-menu-list {
  scrollbar-width: thin;
  scrollbar-color: #c1c1c1 #eee;
}

.cy-menu-popover {
  position: fixed;
  left: var(--cy-menu-popover-x);
  top: var(--cy-menu-popover-y);
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  z-index: 99;
}
.cy-menu-popover .cy-menu-popover-tip {
  position: absolute;
  left: 0;
  top: var(--cy-menu-gap);
  border: 10px solid transparent;
  border-right-color: var(--cy-menu-theme-bg-color, #909090);
  margin-left: -4px;
}
.cy-menu-popover .cy-menu-popover-content {
  position: absolute;
  left: 15px;
  min-height: 40px;
  box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.3607843137);
  border-radius: 2px;
  background-color: var(--cy-menu-theme-bg-color, #909090);
}
.cy-menu-popover .cy-menu-popover-content .cy-menu-popover-label {
  display: block;
  white-space: nowrap;
  padding: 12px;
  font-size: 12px;
}
.cy-menu-popover .cy-menu-popover-content .cy-menu-menu-item-box.cy-menu-is-popover {
  min-height: 40px;
}

.collapse-transition {
  transition: height var(--cy-menu-animate-time, 0.3s) ease-in-out, padding-top var(--cy-menu-animate-time, 0.3s) ease-in-out, padding-bottom var(--cy-menu-animate-time, 0.3s) ease-in-out, max-height var(--cy-menu-animate-time, 0.3s) ease-in-out;
}

.popover-enter-active,
.popover-leave-active {
  transition: all 0.2s;
}

.popover-enter-from,
.popover-leave-to {
  opacity: 0;
}`);const be=((e,n)=>{if(e.install=t=>{for(const m of[e,...Object.values(n!=null?n:{})])t.component(m.name,m)},n)for(const[t,m]of Object.entries(n))e[t]=m;return e})(ve);export{I as A,be as K};
