(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{1228:function(t,e,n){"use strict";n.r(e);var o=n(679),r=n(637),c=n(636),l=n(651),d=n(265),f=n(264),v=n(18),h=(n(69),n(4),n(10),n(66),{name:"Estado-Cuenta-HaciendaPage",mixins:[n(283).a],data:function(){return{inmueblePropietariosData:[],flujoData:[],flujo:null,dialogWait:!1,nombrecontribuyente:"Sin Seleccionar"==this.$store.getters.getContribuyente?"":JSON.parse(JSON.stringify(this.$store.getters.getContribuyente.nombre)),nacionalidadcontribuyente:"Sin Seleccionar"==this.$store.getters.getContribuyente?"":JSON.parse(JSON.stringify(this.$store.getters.getContribuyente.nacionalidad)),numero_documento:"Sin Seleccionar"==this.$store.getters.getContribuyente?"":JSON.parse(JSON.stringify(this.$store.getters.getContribuyente.numero_documento))}},head:function(){return{title:"Estado de Cuenta Hacienda"}},mounted:function(){this.dialogWait=!0,this.getFlujo(),this.getInmueblePropietarios(),this.updateStoreExpediente(),this.dialogWait=!1,this.redireccionIdVacio()},methods:{updateStoreExpediente:function(){var t=this;return Object(v.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.$get("inmueble/"+t.$store.getters.getExpediente.id);case 3:n=e.sent,t.$store.dispatch("storeExpediente",n),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()},redireccionIdVacio:function(){"Sin Seleccionar"==this.$store.getters.getContribuyente&&(this.$router.push("modificar-datos"),this.$alert("cancel",{desc:"Debe seleccionar un contribuyente para ingresar a este módulo",hash:"knsddcssdc",title:"Error"}))},redireccionarDetalle:function(){var t=this;console.log("lalal",this.flujo),this.$store.dispatch("storeFlujo",this.flujoData.find((function(e){return e.codigo===t.flujo}))),this.$router.push("estado-cuenta-detalle-hacienda")},redireccionarSolicitudInmuebleExistente:function(t){this.$router.push("/solicitud-inmueble-existente/".concat(t))},getInmueblePropietarios:function(){var t=this;this.$axios.$get("inmueble_propietarios/?propietario="+this.$store.getters.getContribuyente.id).then((function(e){t.inmueblePropietariosData=e,console.log(t.inmueblePropietariosData,"dataa")})).catch((function(t){console.log(t)}))},getFlujo:function(){var t=this;this.$axios.$get("tipoflujo").then((function(e){t.flujoData=e.filter((function(t){return"I"===t.aplica})),console.log("this.flujoData",t.flujoData)})).catch((function(t){console.log(t)}))}}}),m=(n(916),n(24)),component=Object(m.a)(h,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"center no-padding divcol",staticStyle:{"margin-bottom":"20px","padding-left":"256px"}},[e("section",{staticClass:"section1-estado-cuenta"},[e("div",{staticClass:"datos-contribuyente-container"},[t._m(0),t._v(" "),e("div",{staticClass:"datos-btns-contribuyente"},[e("div",{staticClass:"title-description-div"},[e("p",{staticClass:"nombre-razon"},[t._v("\n            Nombre / Razón Social\n          ")]),t._v(" "),e("p",{staticClass:"nombre-desc"},[t._v(" \n            "+t._s(t.nombrecontribuyente)+"\n          ")])]),t._v(" "),e("div",{staticClass:"title-description-div"},[e("p",{staticClass:"nombre-razon"},[t._v("\n            RIF\n          ")]),t._v(" "),e("p",{staticClass:"nombre-desc"},[t._v("\n            "+t._s(t.numero_documento)+"\n          ")])]),t._v(" "),e(r.a,{staticClass:"cards-estado-cuenta",on:{click:function(e){return t.redireccionarDetalle()}}},[e(d.a,{staticClass:"icon-card"},[t._v("\n            mdi-transfer-down\n          ")]),t._v(" "),e("span",{staticClass:"title-card"},[t._v("\n            Trámites / Servicios\n          ")])],1)],1)]),t._v(" "),e("div",{staticClass:"flujo-container"},[e("p",{staticClass:"title-inscripcion-inmueble"},[t._v("\n        Seleccione tipo de trámite o servicio\n      ")]),t._v(" "),e("hr"),t._v(" "),e("div",{staticClass:"center",staticStyle:{width:"100%"}},[e(o.a,{staticClass:"autocomplete-flujo",attrs:{label:"Tipo de trámite/servicio",items:t.flujoData,"item-text":"descripcion","item-value":"codigo"},model:{value:t.flujo,callback:function(e){t.flujo=e},expression:"flujo"}})],1)])]),t._v(" "),e(l.a,{attrs:{"hide-overlay":"",persistent:"",width:"300"},model:{value:t.dialogWait,callback:function(e){t.dialogWait=e},expression:"dialogWait"}},[e(r.a,{attrs:{color:"primary",dark:""}},[e(c.b,[t._v("\n        Por favor espere!!!\n        "),e(f.a,{staticClass:"mb-0",attrs:{indeterminate:"",color:"white"}})],1)],1)],1)],1)}),[function(){var t=this._self._c;return t("div",{staticClass:"title-morado"},[t("p",{staticClass:"contribuyente-datos"},[this._v("\n          Datos del Contribuyente\n        ")])])}],!1,null,null,null);e.default=component.exports},636:function(t,e,n){"use strict";n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return d})),n.d(e,"c",(function(){return f}));var o=n(637),r=n(2),c=Object(r.j)("v-card__actions"),l=Object(r.j)("v-card__subtitle"),d=Object(r.j)("v-card__text"),f=Object(r.j)("v-card__title");o.a}}]);