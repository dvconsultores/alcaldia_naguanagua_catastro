(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{1072:function(t,e,r){"use strict";var n=r(3),o=(r(34),r(44),r(293),r(10),r(4),r(11),r(45),r(69),r(8),r(7),r(16),r(17),r(6)),l=r(114),c=r(80);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(o.a)(l.a,Object(c.b)("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var t=this,e=function(input){return input.$watch("hasError",(function(e){t.$set(t.errorBag,input._uid,e)}),{immediate:!0})},r={_uid:input._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?r.shouldValidate=input.$watch("shouldValidate",(function(n){n&&(t.errorBag.hasOwnProperty(input._uid)||(r.valid=e(input)))})):r.valid=e(input),r},validate:function(){return 0===this.inputs.filter((function(input){return!input.validate(!0)})).length},reset:function(){this.inputs.forEach((function(input){return input.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(input){return input.resetValidation()})),this.resetErrorBag()},register:function(input){this.inputs.push(input),this.watchers.push(this.watchInput(input))},unregister:function(input){var t=this.inputs.find((function(i){return i._uid===input._uid}));if(t){var e=this.watchers.find((function(i){return i._uid===t._uid}));e&&(e.valid(),e.shouldValidate()),this.watchers=this.watchers.filter((function(i){return i._uid!==t._uid})),this.inputs=this.inputs.filter((function(i){return i._uid!==t._uid})),this.$delete(this.errorBag,t._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:v({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},1092:function(t,e,r){"use strict";r(954)},1093:function(t,e,r){var n=r(18)(!1);n.push([t.i,':root{--primary:#810880;--secondary:#810880;--accent:#810880;--active:var(--primary);--error:#ff4081;--warning:#ffc260;--success:#3cd4a0;--clr-gradient:linear-gradient(to right top,#356d74,#2a505c,#21394a,#1a293d,#172035,#161d33,#161e34,#192539,#1e3143,#244251,#2d5862,#387378,#449492,#53b9b1,#63e2d2);--c:var(--clr);--font1:"Inter",sans-serif;--font2:"Inter",sans-serif;--fw:initial;--resizer:clamp(12px,1vw,16px);--resizer-mobile:clamp(10px,1.5vw,12px);--margin-global:9em;--parent:1600px;--subparent:1900px;--h-navbar:100px;--w-scroll:8px;--sombra-filter:drop-shadow(0px 4px 1px rgba(0,0,0,0.3));--sombra-card:0px 4px 4px rgba(0,0,0,0.25);--sombra-btn:0px 4px 4px rgba(0,0,0,0.25)}:root.light{--bg-ap:#f5f5f5;--clr:#000;--clr-hover:#270330;--clr-scroll:var(--primary);--clr-bg-scroll:var(--secondary);--clr-card:#fff;--clr-btn:var(--primary);--clr-text-btn:#000;--clr-badge:var(--primary);--clr-text-badge:#000;--clr-line:rgba(235,231,36,0.5)}:root.dark{--bg-ap:#000;--clr:#fff;--clr-hover:#f3cffc;--clr-scroll:var(--primary);--clr-bg-scroll:var(--secondary);--clr-card:#191919;--clr-btn:var(--primary);--clr-text-btn:#fff;--clr-badge:var(--primary);--clr-text-badge:#000;--clr-line:rgba(235,231,36,0.5)}@media(max-width:880px)and (fixed-width:){:root{--margin-global:clamp(1em,5vw,4em)}}@media(max-width:880px){:root{--margin-global:clamp(1em,5vw,4em)}}@media(max-width:880px)and (fixed-width:){:root{--h-navbar:80px}}@media(max-width:880px){:root{--h-navbar:80px}}.clr_primary{background-color:#810880!important;background-color:var(--primary)!important}.clr_secondary{background-color:#810880!important;background-color:var(--secondary)!important}.clr_accent{background-color:#810880!important;background-color:var(--accent)!important}.clr{color:var(--clr)!important}.clr_btn{background-color:var(--clr-btn)!important}.clr_btn_pressed{background-color:var(--clr-btn-pressed)!important}.clr_btn_inactive{background-color:var(--clr-btn-inactive)!important}.clr_text_btn{color:var(--clr-text-btn)!important}.clr_card{background-color:var(--clr-card)!important}.clr_svg{fill:var(--clr)!important}.flr{filter:invert(100%)!important}.flr_inv{filter:invert(0)!important}.clr-gradient{background:linear-gradient(to right top,#356d74,#2a505c,#21394a,#1a293d,#172035,#161d33,#161e34,#192539,#1e3143,#244251,#2d5862,#387378,#449492,#53b9b1,#63e2d2)!important;background:var(--clr-gradient)!important}.clr_card_2{background-color:var(--clr-card-2)!important}#login .v-main__wrap{padding-left:9em;padding-right:9em;padding-left:var(--margin-global);padding-right:var(--margin-global);padding-top:120px!important;padding-bottom:80px!important;padding-top:calc(var(--h-navbar) + 20px)!important;padding-bottom:var(--h-footer,80px)!important}@media(max-width:880px)and (fixed-width:){#login .v-main__wrap{--margin-global:8em}}@media(max-width:880px){#login .v-main__wrap{--margin-global:8em}}@media(max-width:600px)and (fixed-width:){#login .v-main__wrap{--margin-global:5em}}@media(max-width:600px){#login .v-main__wrap{--margin-global:5em}}@media(max-width:430px)and (fixed-width:){#login .v-main__wrap{--margin-global:3em}}@media(max-width:430px){#login .v-main__wrap{--margin-global:3em}}#login .v-main__wrap>*{font-size:clamp(12px,1vw,16px);font-size:var(--resizer)}@media(max-width:880px)and (fixed-width:){#login .v-main__wrap>*{font-size:clamp(10px,1.5vw,12px);font-size:var(--resizer-mobile)}}@media(max-width:880px){#login .v-main__wrap>*{font-size:clamp(10px,1.5vw,12px);font-size:var(--resizer-mobile)}}#login .v-window-item>section{display:flex;flex-direction:column;align-items:center;grid-gap:24px;gap:24px;width:min(100%,max(270px,24em));margin-left:auto;margin-right:auto}#login label{--fw:900;--fs:max(15px,1.35em);text-indent:.5ch}#login label sup{font-size:1.4em;top:0}#login .v-btn{--w:max-content;--fs:max(15px,1.25em);--p:.45em 1em}#login #register-window>section{width:min(100%,max(270px,28em))}#login #register-window>section .v-input{--bg:var(--primary)}#login #register-window>section .v-input__prepend-outer{margin-top:0;margin-bottom:0}#login #register-window>section .v-input__prepend-outer *{color:#fff!important}#login #register-window>section .v-input__prepend-outer input{display:none}#login #register-window>section .v-input__prepend-outer .v-input__append-inner{padding:0}#login #register-window>section .v-input__prepend-outer .v-input__append-inner .v-icon{font-size:1.1em}',""]),t.exports=n},1278:function(t,e,r){"use strict";r.r(e);var n=r(635),o=r(1072),l=r(647),c=r(671),d=r(662),v=r(848),m=r(849),f=(r(34),r(44),r(21),{name:"LoginPage",layout:"empty-layout",asyncData:function(t){var e,r,n,o=t.from,l=t.store;return null!==(e=o.params.verification)&&void 0!==e&&e.includes(":recover")&&l.state.verificationEmail?n=3:null!==(r=o.params.verification)&&void 0!==r&&r.includes(":register")&&l.state.verificationEmail&&(n=2),{windowStep:n}},data:function(){return{windowStep:1,formLogin:{username:void 0,password:void 0},formRegister:{email:void 0,username:void 0,password:void 0,partner:void 0,phonePrefix:"+593",phone:void 0},passwordConfirmerRegister:void 0,formRecover:{password:void 0},passwordConfirmerRecover:void 0,countryPhoneList:[{icon:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Flag_of_the_First_Spanish_Republic.svg/220px-Flag_of_the_First_Spanish_Republic.svg.png",number:"+593"},{icon:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Flag_of_Venezuela.svg/2560px-Flag_of_Venezuela.svg.png",number:"+58"},{icon:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/1200px-Flag_of_the_United_States.svg.png",number:"+2134"}],rules:{required:[function(t){return!!t||"Field required"}],email:[function(t){return!!t||"Field required"},function(t){return/.+@.+\..+/.test(t)||"E-mail must be valid"}]}}},head:function(){return{title:"Login"}},methods:{login:function(){if(!this.$refs.formLogin.validate())return alert("verifica que los campos sean correctos");localStorage.setItem("auth",!0),this.$router.push(this.localePath("/"))},register:function(){if(!this.$refs.formRegister.validate())return alert("verifica que los campos sean correctos");localStorage.setItem("auth",!0),this.$router.push(this.localePath("/"))},recover:function(){if(!this.$refs.formRecover.validate())return alert("verifica que los campos sean correctos");console.log("recovered"),this.$alert("success",{title:"recovered"}),this.$router.go()}}}),w=(r(1092),r(24)),component=Object(w.a)(f,(function(){var t=this,e=t._self._c;return e(l.a,{attrs:{id:"login"}},[e(v.a,{model:{value:t.windowStep,callback:function(e){t.windowStep=e},expression:"windowStep"}},[e(m.a,{attrs:{id:"login-window",value:1}},[e("section",[e("img",{staticClass:"mb-16",staticStyle:{"--w":"max(150px, 13em)"},attrs:{src:r(865),alt:"logo"}}),t._v(" "),e(o.a,{ref:"formLogin",staticClass:"card divcol",staticStyle:{"--bg":"var(--primary)","--w":"100%",gap:"1em"},on:{submit:function(e){return e.preventDefault(),t.login()}}},[e("div",{staticClass:"divcol",staticStyle:{gap:".5em"}},[e("label",{attrs:{for:"username-login"}},[t._v("USUARIO:")]),t._v(" "),e(d.a,{attrs:{id:"username-login",rules:t.rules.required,placeholder:"Ingresa tu usuario","hide-details":"",solo:""},model:{value:t.formLogin.username,callback:function(e){t.$set(t.formLogin,"username",e)},expression:"formLogin.username"}})],1),t._v(" "),e("div",{staticClass:"divcol",staticStyle:{gap:".5em"}},[e("label",{attrs:{for:"password-login"}},[t._v("CONTRASEÑA:")]),t._v(" "),e(d.a,{attrs:{id:"password-login",type:"password",rules:t.rules.required,placeholder:"Ingresa tu contraseña","hide-details":"",solo:""},model:{value:t.formLogin.password,callback:function(e){t.$set(t.formLogin,"password",e)},expression:"formLogin.password"}})],1),t._v(" "),e(n.a,{staticClass:"btn align",staticStyle:{"--bg":"var(--active)"},on:{click:function(e){return t.login()}}},[t._v("\n            Iniciar sesión\n          ")])],1),t._v(" "),e("aside",{staticClass:"divcol center tcenter",staticStyle:{gap:"inherit","--fs":"max(15px, 1.25em)"}},[e("a",{staticStyle:{"--fw":"800"},on:{click:function(e){t.$store.state.verificationEmail?t.windowStep=3:t.$router.push(t.localePath("/verification-email/:login:recover"))}}},[t._v("\n            ¿Olvidaste tu contraseña?\n          ")]),t._v(" "),e("span",{staticClass:"hspan divcol center"},[t._v("\n            ¿No tienes cuenta?\n            "),e("a",{staticStyle:{"--fw":"800","--fs":"1em"},on:{click:function(e){t.windowStep=2}}},[t._v("Registrate aquí")])])])],1)]),t._v(" "),e(m.a,{attrs:{id:"register-window",value:2}},[e("section",[e("img",{staticClass:"mb-10",staticStyle:{"--w":"max(190px, 17em)"},attrs:{src:r(865),alt:"logo"}}),t._v(" "),e(o.a,{ref:"formRegister",staticClass:"fill_w divcol",staticStyle:{gap:"1em"}},[e("div",{staticClass:"divcol",staticStyle:{gap:".5em"}},[e("label",{attrs:{for:"email-register"}},[t._v("CORREO "),e("sup",[t._v("*")])]),t._v(" "),e(d.a,{attrs:{id:"email-register",solo:"","hide-details":"",rules:t.rules.email},model:{value:t.formRegister.email,callback:function(e){t.$set(t.formRegister,"email",e)},expression:"formRegister.email"}})],1),t._v(" "),e("div",{staticClass:"divcol",staticStyle:{gap:".5em"}},[e("label",{staticClass:"relative",attrs:{for:"username-register"}},[t._v("USUARIO "),e("sup",[t._v("*")])]),t._v(" "),e(d.a,{attrs:{id:"username-register",solo:"","hide-details":"",rules:t.rules.required},model:{value:t.formRegister.username,callback:function(e){t.$set(t.formRegister,"username",e)},expression:"formRegister.username"}})],1),t._v(" "),e("div",{staticClass:"divcol",staticStyle:{gap:"inherit"}},[e("div",{staticClass:"divcol",staticStyle:{gap:".5em"}},[e("label",{staticClass:"relative",attrs:{for:"password-register"}},[t._v("CONTRASEÑA "),e("sup",[t._v("*")])]),t._v(" "),e(d.a,{attrs:{id:t.formRegister.password?"":"password-register",type:"password",solo:"","hide-details":"",rules:t.rules.required},model:{value:t.formRegister.password,callback:function(e){t.$set(t.formRegister,"password",e)},expression:"formRegister.password"}})],1),t._v(" "),e(d.a,{attrs:{id:t.formRegister.password?"password-register":"",type:"password",solo:"","hide-details":"",rules:t.rules.confirmPasswordRegister},model:{value:t.passwordConfirmerRegister,callback:function(e){t.passwordConfirmerRegister=e},expression:"passwordConfirmerRegister"}})],1),t._v(" "),e("div",{staticClass:"divcol",staticStyle:{gap:".5em"}},[e("label",{attrs:{for:"partner-register"}},[t._v("PATROCINADOR")]),t._v(" "),e(d.a,{attrs:{id:"partner-register",solo:"","hide-details":""},model:{value:t.formRegister.partner,callback:function(e){t.$set(t.formRegister,"partner",e)},expression:"formRegister.partner"}})],1),t._v(" "),e("div",{staticClass:"divcol",staticStyle:{gap:".5em"}},[e("label",{attrs:{for:"phone-register"}},[t._v("TELÉFONO "),e("sup",[t._v("*")])]),t._v(" "),e(d.a,{attrs:{id:"phone-register",type:"number","hide-spin-buttons":"",solo:"","hide-details":"",rules:t.rules.required},scopedSlots:t._u([{key:"prepend",fn:function(){return[e(c.a,{attrs:{items:t.countryPhoneList,"item-text":"number",solo:"","hide-details":"","menu-props":"auto","append-icon":"mdi-chevron-down"},scopedSlots:t._u([{key:"selection",fn:function(r){var n=r.item;return[e("img",{staticClass:"mr-2 aspect",staticStyle:{"--w":"22px","--of":"cover","--br":"50%","--b":"1px solid #fff"},attrs:{src:n.icon,alt:"country flag"}}),t._v(" "),e("span",{staticStyle:{"--fw":"100"}},[t._v(t._s(n.number))])]}},{key:"item",fn:function(r){var n=r.item;return[e("img",{staticClass:"mr-2 aspect",staticStyle:{"--w":"22px","--of":"cover","--br":"50%","--b":"1px solid #fff"},attrs:{src:n.icon,alt:"country flag"}}),t._v(" "),e("span",{staticClass:"not_clr",staticStyle:{"--fw":"100"}},[t._v(t._s(n.number))])]}}]),model:{value:t.formRegister.phonePrefix,callback:function(e){t.$set(t.formRegister,"phonePrefix",e)},expression:"formRegister.phonePrefix"}})]},proxy:!0}]),model:{value:t.formRegister.phone,callback:function(e){t.$set(t.formRegister,"phone",e)},expression:"formRegister.phone"}})],1),t._v(" "),e(n.a,{staticClass:"btn align mt-5",staticStyle:{"--bg":"var(--primary)"},on:{click:function(e){return t.register()}}},[t._v("\n            REGISTER\n          ")])],1)],1)]),t._v(" "),e(m.a,{attrs:{id:"login-window",value:3}},[e("section",[e("img",{staticClass:"mb-10",staticStyle:{"--w":"max(190px, 17em)"},attrs:{src:r(865),alt:"logo"}}),t._v(" "),e(o.a,{ref:"formRecover",staticClass:"card divcol",staticStyle:{"--bg":"var(--primary)","--w":"100%",gap:"1em"},on:{submit:function(e){return e.preventDefault(),t.recover()}}},[e("div",{staticClass:"divcol",staticStyle:{gap:".5em"}},[e("label",{staticClass:"relative",attrs:{for:"password-recover"}},[t._v("NUEVA CONTRASEÑA:")]),t._v(" "),e(d.a,{attrs:{id:"password-recover",type:"password",rules:t.rules.required,placeholder:"Ingresa nueva contraseña","hide-details":"",solo:""},model:{value:t.formRecover.password,callback:function(e){t.$set(t.formRecover,"password",e)},expression:"formRecover.password"}})],1),t._v(" "),e("div",{staticClass:"divcol",staticStyle:{gap:".5em"}},[e("label",{attrs:{for:"confirm-password-recover"}},[t._v("CONFIRMAR CONTRASEÑA:")]),t._v(" "),e(d.a,{attrs:{id:"confirm-password-login",type:"password",rules:t.rules.confirmPasswordRecover,placeholder:"Confirma contraseña","hide-details":"",solo:""},model:{value:t.passwordConfirmerRecover,callback:function(e){t.passwordConfirmerRecover=e},expression:"passwordConfirmerRecover"}})],1),t._v(" "),e(n.a,{staticClass:"btn align",staticStyle:{"--bg":"var(--active)"},on:{click:function(e){return t.recover()}}},[t._v("\n            Recuperar\n          ")])],1)],1)])],1)],1)}),[],!1,null,null,null);e.default=component.exports},139:function(t,e,r){"use strict";var n=r(635);e.a=n.a},845:function(t,e,r){var content=r(846);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(19).default)("0d135400",content,!0,{sourceMap:!1})},846:function(t,e,r){var n=r(18)(!1);n.push([t.i,':root{--primary:#810880;--secondary:#810880;--accent:#810880;--active:var(--primary);--error:#ff4081;--warning:#ffc260;--success:#3cd4a0;--clr-gradient:linear-gradient(to right top,#356d74,#2a505c,#21394a,#1a293d,#172035,#161d33,#161e34,#192539,#1e3143,#244251,#2d5862,#387378,#449492,#53b9b1,#63e2d2);--c:var(--clr);--font1:"Inter",sans-serif;--font2:"Inter",sans-serif;--fw:initial;--resizer:clamp(12px,1vw,16px);--resizer-mobile:clamp(10px,1.5vw,12px);--margin-global:9em;--parent:1600px;--subparent:1900px;--h-navbar:100px;--w-scroll:8px;--sombra-filter:drop-shadow(0px 4px 1px rgba(0,0,0,0.3));--sombra-card:0px 4px 4px rgba(0,0,0,0.25);--sombra-btn:0px 4px 4px rgba(0,0,0,0.25)}:root.light{--bg-ap:#f5f5f5;--clr:#000;--clr-hover:#270330;--clr-scroll:var(--primary);--clr-bg-scroll:var(--secondary);--clr-card:#fff;--clr-btn:var(--primary);--clr-text-btn:#000;--clr-badge:var(--primary);--clr-text-badge:#000;--clr-line:rgba(235,231,36,0.5)}:root.dark{--bg-ap:#000;--clr:#fff;--clr-hover:#f3cffc;--clr-scroll:var(--primary);--clr-bg-scroll:var(--secondary);--clr-card:#191919;--clr-btn:var(--primary);--clr-text-btn:#fff;--clr-badge:var(--primary);--clr-text-badge:#000;--clr-line:rgba(235,231,36,0.5)}@media(max-width:880px)and (fixed-width:){:root{--margin-global:clamp(1em,5vw,4em)}}@media(max-width:880px){:root{--margin-global:clamp(1em,5vw,4em)}}@media(max-width:880px)and (fixed-width:){:root{--h-navbar:80px}}@media(max-width:880px){:root{--h-navbar:80px}}.clr_primary{background-color:#810880!important;background-color:var(--primary)!important}.clr_secondary{background-color:#810880!important;background-color:var(--secondary)!important}.clr_accent{background-color:#810880!important;background-color:var(--accent)!important}.clr{color:var(--clr)!important}.clr_btn{background-color:var(--clr-btn)!important}.clr_btn_pressed{background-color:var(--clr-btn-pressed)!important}.clr_btn_inactive{background-color:var(--clr-btn-inactive)!important}.clr_text_btn{color:var(--clr-text-btn)!important}.clr_card{background-color:var(--clr-card)!important}.clr_svg{fill:var(--clr)!important}.flr{filter:invert(100%)!important}.flr_inv{filter:invert(0)!important}.clr-gradient{background:linear-gradient(to right top,#356d74,#2a505c,#21394a,#1a293d,#172035,#161d33,#161e34,#192539,#1e3143,#244251,#2d5862,#387378,#449492,#53b9b1,#63e2d2)!important;background:var(--clr-gradient)!important}.clr_card_2{background-color:var(--clr-card-2)!important}.v-window{overflow:hidden}.v-window__container{display:flex;flex-direction:column;height:inherit;position:relative;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-window__container--is-active{overflow:hidden}.v-window__next,.v-window__prev{background:rgba(0,0,0,.3);border-radius:50%;position:absolute;margin:0 16px;top:calc(50% - 20px);z-index:1}.v-window__next .v-btn:hover,.v-window__prev .v-btn:hover{background:none}.v-application--is-ltr .v-window__prev{left:0}.v-application--is-ltr .v-window__next,.v-application--is-rtl .v-window__prev{right:0}.v-application--is-rtl .v-window__next{left:0}.v-window--show-arrows-on-hover{overflow:hidden}.v-window--show-arrows-on-hover .v-window__next,.v-window--show-arrows-on-hover .v-window__prev{transition:transform .2s cubic-bezier(.25,.8,.5,1)}.v-application--is-ltr .v-window--show-arrows-on-hover .v-window__prev{transform:translateX(-200%)}.v-application--is-ltr .v-window--show-arrows-on-hover .v-window__next,.v-application--is-rtl .v-window--show-arrows-on-hover .v-window__prev{transform:translateX(200%)}.v-application--is-rtl .v-window--show-arrows-on-hover .v-window__next{transform:translateX(-200%)}.v-window--show-arrows-on-hover:hover .v-window__next,.v-window--show-arrows-on-hover:hover .v-window__prev{transform:translateX(0)}.v-window-x-reverse-transition-enter-active,.v-window-x-reverse-transition-leave-active,.v-window-x-transition-enter-active,.v-window-x-transition-leave-active,.v-window-y-reverse-transition-enter-active,.v-window-y-reverse-transition-leave-active,.v-window-y-transition-enter-active,.v-window-y-transition-leave-active{transition:.3s cubic-bezier(.25,.8,.5,1)}.v-window-x-reverse-transition-leave,.v-window-x-reverse-transition-leave-to,.v-window-x-transition-leave,.v-window-x-transition-leave-to,.v-window-y-reverse-transition-leave,.v-window-y-reverse-transition-leave-to,.v-window-y-transition-leave,.v-window-y-transition-leave-to{position:absolute!important;top:0;width:100%}.v-window-x-transition-enter{transform:translateX(100%)}.v-window-x-reverse-transition-enter,.v-window-x-transition-leave-to{transform:translateX(-100%)}.v-window-x-reverse-transition-leave-to{transform:translateX(100%)}.v-window-y-transition-enter{transform:translateY(100%)}.v-window-y-reverse-transition-enter,.v-window-y-transition-leave-to{transform:translateY(-100%)}.v-window-y-reverse-transition-leave-to{transform:translateY(100%)}',""]),t.exports=n},848:function(t,e,r){"use strict";r(8),r(7),r(10),r(16),r(11),r(17);var n=r(3),o=(r(28),r(69),r(4),r(282),r(845),r(286)),l=r(139),c=r(82),d=r(105);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=d.a.extend({name:"v-window",directives:{Touch:o.a},provide:function(){return{windowGroup:this}},props:{activeClass:{type:String,default:"v-window-item--active"},continuous:Boolean,mandatory:{type:Boolean,default:!0},nextIcon:{type:[Boolean,String],default:"$next"},prevIcon:{type:[Boolean,String],default:"$prev"},reverse:Boolean,showArrows:Boolean,showArrowsOnHover:Boolean,touch:Object,touchless:Boolean,value:{required:!1},vertical:Boolean},data:function(){return{changedByDelimiters:!1,internalHeight:void 0,transitionHeight:void 0,transitionCount:0,isBooted:!1,isReverse:!1}},computed:{isActive:function(){return this.transitionCount>0},classes:function(){return m(m({},d.a.options.computed.classes.call(this)),{},{"v-window--show-arrows-on-hover":this.showArrowsOnHover})},computedTransition:function(){if(!this.isBooted)return"";var t=this.vertical?"y":"x",e=(this.internalReverse?!this.isReverse:this.isReverse)?"-reverse":"";return"v-window-".concat(t).concat(e,"-transition")},hasActiveItems:function(){return Boolean(this.items.find((function(t){return!t.disabled})))},hasNext:function(){return this.continuous||this.internalIndex<this.items.length-1},hasPrev:function(){return this.continuous||this.internalIndex>0},internalIndex:function(){var t=this;return this.items.findIndex((function(e,i){return t.internalValue===t.getValue(e,i)}))},internalReverse:function(){return this.$vuetify.rtl?!this.reverse:this.reverse}},watch:{internalIndex:function(t,e){this.isReverse=this.updateReverse(t,e)}},mounted:function(){var t=this;window.requestAnimationFrame((function(){return t.isBooted=!0}))},methods:{genDefaultSlot:function(){return this.$slots.default},genContainer:function(){var t=[this.genDefaultSlot()];return this.showArrows&&t.push(this.genControlIcons()),this.$createElement("div",{staticClass:"v-window__container",class:{"v-window__container--is-active":this.isActive},style:{height:this.internalHeight||this.transitionHeight}},t)},genIcon:function(t,e,r){var n,o,d,v=this,m={click:function(t){t.stopPropagation(),v.changedByDelimiters=!0,r()}},f={"aria-label":this.$vuetify.lang.t("$vuetify.carousel.".concat(t))},w=null!==(d=null===(o=(n=this.$scopedSlots)[t])||void 0===o?void 0:o.call(n,{on:m,attrs:f}))&&void 0!==d?d:[this.$createElement(l.a,{props:{icon:!0},attrs:f,on:m},[this.$createElement(c.a,{props:{large:!0}},e)])];return this.$createElement("div",{staticClass:"v-window__".concat(t)},w)},genControlIcons:function(){var t=[],e=this.$vuetify.rtl?this.nextIcon:this.prevIcon;if(this.hasPrev&&e&&"string"==typeof e){var r=this.genIcon("prev",e,this.prev);r&&t.push(r)}var n=this.$vuetify.rtl?this.prevIcon:this.nextIcon;if(this.hasNext&&n&&"string"==typeof n){var o=this.genIcon("next",n,this.next);o&&t.push(o)}return t},getNextIndex:function(t){var e=(t+1)%this.items.length;return this.items[e].disabled?this.getNextIndex(e):e},getPrevIndex:function(t){var e=(t+this.items.length-1)%this.items.length;return this.items[e].disabled?this.getPrevIndex(e):e},next:function(){if(this.hasActiveItems&&this.hasNext){var t=this.getNextIndex(this.internalIndex),e=this.items[t];this.internalValue=this.getValue(e,t)}},prev:function(){if(this.hasActiveItems&&this.hasPrev){var t=this.getPrevIndex(this.internalIndex),e=this.items[t];this.internalValue=this.getValue(e,t)}},updateReverse:function(t,e){var r=this.items.length,n=r-1;return r<=2?t<e:t===n&&0===e||(0!==t||e!==n)&&t<e}},render:function(t){var e=this,data={staticClass:"v-window",class:this.classes,directives:[]};if(!this.touchless){var r=this.touch||{left:function(){e.$vuetify.rtl?e.prev():e.next()},right:function(){e.$vuetify.rtl?e.next():e.prev()},end:function(t){t.stopPropagation()},start:function(t){t.stopPropagation()}};data.directives.push({name:"touch",value:r})}return t("div",data,[this.genContainer()])}})},849:function(t,e,r){"use strict";var n=r(113),o=r(111),l=r(286),c=r(2),d=r(6),v=Object(d.a)(n.a,Object(o.a)("windowGroup","v-window-item","v-window"));e.a=v.extend().extend().extend({name:"v-window-item",directives:{Touch:l.a},props:{disabled:Boolean,reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},value:{required:!1}},data:function(){return{isActive:!1,inTransition:!1}},computed:{classes:function(){return this.groupClasses},computedTransition:function(){return this.windowGroup.internalReverse?void 0!==this.reverseTransition?this.reverseTransition||"":this.windowGroup.computedTransition:void 0!==this.transition?this.transition||"":this.windowGroup.computedTransition}},methods:{genDefaultSlot:function(){return this.$slots.default},genWindowItem:function(){return this.$createElement("div",{staticClass:"v-window-item",class:this.classes,directives:[{name:"show",value:this.isActive}],on:this.$listeners},this.genDefaultSlot())},onAfterTransition:function(){this.inTransition&&(this.inTransition=!1,this.windowGroup.transitionCount>0&&(this.windowGroup.transitionCount--,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=void 0)))},onBeforeTransition:function(){this.inTransition||(this.inTransition=!0,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=Object(c.h)(this.windowGroup.$el.clientHeight)),this.windowGroup.transitionCount++)},onTransitionCancelled:function(){this.onAfterTransition()},onEnter:function(t){var e=this;this.inTransition&&this.$nextTick((function(){e.computedTransition&&e.inTransition&&(e.windowGroup.transitionHeight=Object(c.h)(t.clientHeight))}))}},render:function(t){var e=this;return t("transition",{props:{name:this.computedTransition},on:{beforeEnter:this.onBeforeTransition,afterEnter:this.onAfterTransition,enterCancelled:this.onTransitionCancelled,beforeLeave:this.onBeforeTransition,afterLeave:this.onAfterTransition,leaveCancelled:this.onTransitionCancelled,enter:this.onEnter}},this.showLazyContent((function(){return[e.genWindowItem()]})))}})},865:function(t,e,r){t.exports=r.p+"img/logo.61acd7c.svg"},954:function(t,e,r){var content=r(1093);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(19).default)("e950f8e4",content,!0,{sourceMap:!1})}}]);