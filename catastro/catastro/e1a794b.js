(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{1278:function(t,o,r){"use strict";r.r(o);var e=r(635),n=r(634),c=r(633),d=r(645),l=r(655),m=r(1225),x=r(648),f=r(264),h=r(644),v=r(663),w=r(662),_=(r(21),r(206),r(20)),y=(r(66),r(29),r(10),r(4),r(34),r(44),r(60),{name:"lista-PagoPage",mixins:[r(282).a],data:function(){return{search:"",dialog:!1,dialog_editar:!1,dialogDelete:!1,loading:!0,headers:[{text:"Habilitado",align:"center",value:"habilitado"},{text:"Estado Cuenta #",align:"center",value:"liquidacion.estadocuenta.numero"},{text:"Pre-factura #",align:"center",value:"liquidacion.numero"},{text:"Recibo #",align:"center",value:"numero"},{text:"Fecha",value:"fecha",align:"center"},{text:"Inmueble",value:"liquidacion.inmueble.numero_expediente",align:"center"},{text:"Propietario",value:"liquidacion.propietario.nombre",align:"center"},{text:"Trámite",value:"liquidacion.tipoflujo.descripcion",align:"center"},{text:"",value:"actions",sortable:!1,align:"center"}],PagoData:[],permido:JSON.parse(JSON.stringify(this.$store.getters.getUser.permisos)),menu:[],menu_opciones:[],defaultItem:{observaciones:"",id:""},accesos:{}}},head:function(){return{title:"Pago"}},mounted:function(){this.permisos(),this.getPago()},methods:{permisos:function(){var t=this,o=this.$options.name.length;this.modulo=this.$options.name.substring(0,o-4).toLowerCase(),console.log("permiso: 1 si , 0 no:",this.permido.filter((function(o){return o.modulo.toLowerCase().includes(t.modulo)})).length),this.permido.filter((function(o){return o.modulo.toLowerCase().includes(t.modulo)})).length?(console.log("leer:",this.permido.filter((function(o){return o.modulo.toLowerCase().includes(t.modulo)}))[0].leer),this.accesos=this.permido.filter((function(o){return o.modulo.toLowerCase().includes(t.modulo)}))[0]):(this.$router.push("index"),this.$alert("cancel",{desc:"No está autorizado para accesar a este módulo!!!",hash:"knsddcssdc",title:"Error"}))},getPago:function(){var t=this;this.$axios.$get("pagoestadocuenta").then((function(o){t.PagoData=o,t.loading=!1,console.log("this.PagoData",t.PagoData)})).catch((function(t){console.log(t)}))},editItem:function(t){console.log(t),this.dialog_editar=!0,this.defaultItem.id=t.id,this.defaultItem.observaciones=t.observaciones},saveData:function(){var t=this,o=new FormData;o.append("observaciones",this.defaultItem.observaciones),o.append("habilitado",!1),this.$axios.$patch("pagoestadocuenta/"+this.defaultItem.id+"/",o).then((function(o){console.log(o.data),t.$alert("success",{desc:"Se ha editado un Pago con éxito",hash:"knsddcssdc",title:"Edición de Pago"}),t.getPago()})).catch((function(t){console.log(t)})),this.dialog_editar=!1},getPDF:function(t){var o=this;return Object(_.a)(regeneratorRuntime.mark((function r(){var e,n;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:try{(e=t.ReportePdf)?(console.log("response getPDF",e),(n=e).includes("catastro_back")&&(n=n.replace("catastro_back","catastro_back/catastro_back")),window.open(n,"_blank").focus()):o.$alert("cancel",{desc:"No se puede ubicar el reporte.",hash:"knsddcssdc",title:"Error"})}catch(t){console.log(t)}case 1:case"end":return r.stop()}}),r)})))()}}}),k=(r(835),r(24)),component=Object(k.a)(y,(function(){var t=this,o=t._self._c;return o("div",{staticClass:"center no-padding divcol",staticStyle:{"margin-bottom":"20px","padding-left":"256px"}},[o("section",{staticClass:"section1-ambito"},[o("div",{staticClass:"datos-ambito-container"},[o("div",{staticClass:"title-morado"},[o("p",{staticClass:"datos-ambito-title"},[t._v("\n          Recibos de Cobro\n        ")]),t._v(" "),o(x.a,{attrs:{"max-width":"1600px"},model:{value:t.dialog_editar,callback:function(o){t.dialog_editar=o},expression:"dialog_editar"}},[o(n.a,{attrs:{id:"dialog-editar-crear"}},[o(c.c,[o("span",{staticClass:"title"},[t._v("Deshabilitar Recibo de cobro")])]),t._v(" "),o("hr"),t._v(" "),o(c.b,[o(l.a,[o(h.a,{staticClass:"center"},[o(d.a,{attrs:{cols:"12",sm:"6",md:"4"}},[o(w.a,{staticClass:"big-autocomplete",attrs:{label:"Observaciones"},model:{value:t.defaultItem.observaciones,callback:function(o){t.$set(t.defaultItem,"observaciones",o)},expression:"defaultItem.observaciones"}})],1)],1)],1)],1),t._v(" "),o(c.a,[o(v.a),t._v(" "),o(e.a,{staticClass:"btn dialog-btn",on:{click:function(o){t.dialog_editar=!1}}},[t._v("\n                Cancelar\n              ")]),t._v(" "),o(e.a,{staticClass:"btn dialog-btn",staticStyle:{"background-color":"#ED057E!important"},on:{click:function(o){return t.saveData()}}},[t._v("\n                Borrar Registro\n              ")])],1)],1)],1)],1),t._v(" "),o("div",{staticClass:"data-table-container"},[o(w.a,{staticClass:"input-data-table",attrs:{"append-icon":"mdi-magnify",label:"Buscar","hide-details":""},model:{value:t.search,callback:function(o){t.search=o},expression:"search"}}),t._v(" "),o(m.a,{staticClass:"mytabla",attrs:{headers:t.headers,dense:"",items:t.PagoData,loading:t.loading,"items-per-page":10,search:t.search,"footer-props":{itemsPerPageText:"Items por página"},"sort-by":"numero","sort-desc":"","mobile-breakpoint":"840"},scopedSlots:t._u([{key:"item.actions",fn:function(r){var e=r.item;return[t.accesos.actualizar?o(f.a,{attrs:{color:"#810880",big:""},on:{click:function(o){return t.editItem(e)}}},[t._v("\n              mdi-delete\n            ")]):t._e(),t._v(" "),t.accesos.escribir?o(f.a,{attrs:{color:"#810880",big:""},on:{click:function(o){return t.getPDF(e)}}},[t._v("\n              mdi-printer\n            ")]):t._e()]}}],null,!0)})],1)])])])}),[],!1,null,null,null);o.default=component.exports},633:function(t,o,r){"use strict";r.d(o,"a",(function(){return c})),r.d(o,"b",(function(){return l})),r.d(o,"c",(function(){return m}));var e=r(634),n=r(2),c=Object(n.j)("v-card__actions"),d=Object(n.j)("v-card__subtitle"),l=Object(n.j)("v-card__text"),m=Object(n.j)("v-card__title");e.a},663:function(t,o,r){"use strict";r(391);var e=r(2);o.a=Object(e.j)("spacer","div","v-spacer")},818:function(t,o,r){var content=r(836);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(19).default)("614368c0",content,!0,{sourceMap:!1})},835:function(t,o,r){"use strict";r(818)},836:function(t,o,r){var e=r(18)(!1);e.push([t.i,':root{--primary:#810880;--secondary:#810880;--accent:#810880;--active:var(--primary);--error:#ff4081;--warning:#ffc260;--success:#3cd4a0;--clr-gradient:linear-gradient(to right top,#356d74,#2a505c,#21394a,#1a293d,#172035,#161d33,#161e34,#192539,#1e3143,#244251,#2d5862,#387378,#449492,#53b9b1,#63e2d2);--c:var(--clr);--font1:"Inter",sans-serif;--font2:"Inter",sans-serif;--fw:initial;--resizer:clamp(12px,1vw,16px);--resizer-mobile:clamp(10px,1.5vw,12px);--margin-global:9em;--parent:1600px;--subparent:1900px;--h-navbar:100px;--w-scroll:8px;--sombra-filter:drop-shadow(0px 4px 1px rgba(0,0,0,0.3));--sombra-card:0px 4px 4px rgba(0,0,0,0.25);--sombra-btn:0px 4px 4px rgba(0,0,0,0.25)}:root.light{--bg-ap:#f5f5f5;--clr:#000;--clr-hover:#270330;--clr-scroll:var(--primary);--clr-bg-scroll:var(--secondary);--clr-card:#fff;--clr-btn:var(--primary);--clr-text-btn:#000;--clr-badge:var(--primary);--clr-text-badge:#000;--clr-line:rgba(235,231,36,0.5)}:root.dark{--bg-ap:#000;--clr:#fff;--clr-hover:#f3cffc;--clr-scroll:var(--primary);--clr-bg-scroll:var(--secondary);--clr-card:#191919;--clr-btn:var(--primary);--clr-text-btn:#fff;--clr-badge:var(--primary);--clr-text-badge:#000;--clr-line:rgba(235,231,36,0.5)}@media(max-width:880px)and (fixed-width:){:root{--margin-global:clamp(1em,5vw,4em)}}@media(max-width:880px){:root{--margin-global:clamp(1em,5vw,4em)}}@media(max-width:880px)and (fixed-width:){:root{--h-navbar:80px}}@media(max-width:880px){:root{--h-navbar:80px}}.clr_primary{background-color:#810880!important;background-color:var(--primary)!important}.clr_secondary{background-color:#810880!important;background-color:var(--secondary)!important}.clr_accent{background-color:#810880!important;background-color:var(--accent)!important}.clr{color:var(--clr)!important}.clr_btn{background-color:var(--clr-btn)!important}.clr_btn_pressed{background-color:var(--clr-btn-pressed)!important}.clr_btn_inactive{background-color:var(--clr-btn-inactive)!important}.clr_text_btn{color:var(--clr-text-btn)!important}.clr_card{background-color:var(--clr-card)!important}.clr_svg{fill:var(--clr)!important}.flr{filter:invert(100%)!important}.flr_inv{filter:invert(0)!important}.clr-gradient{background:linear-gradient(to right top,#356d74,#2a505c,#21394a,#1a293d,#172035,#161d33,#161e34,#192539,#1e3143,#244251,#2d5862,#387378,#449492,#53b9b1,#63e2d2)!important;background:var(--clr-gradient)!important}.clr_card_2{background-color:var(--clr-card-2)!important}.section1-ambito{display:flex;flex-direction:column;max-width:1440px;width:90%;overflow-x:hidden;margin-right:0!important;margin-left:0;grid-gap:10px;gap:10px;padding-bottom:10px;padding-left:10px;padding-right:10px}.section1-ambito .datos-ambito-container{position:relative;width:100%;border-radius:10px;padding:80px 10px 20px;background-color:#fff;box-shadow:3px 3px 3px 3px rgba(0,0,0,.1)!important;display:grid;justify-items:center;overflow-x:hidden;margin-bottom:30px}.section1-ambito .datos-ambito-container .btn-add-tabla{background-color:#810880!important;background-color:var(--primary)!important;box-shadow:none!important;min-height:30px;min-width:30px;width:30px;height:30px;--c:#fff!important;font-size:30px!important;font-weight:500!important}.section1-ambito .datos-ambito-container .data-table-container{width:99%}@media(max-width:1080px)and (fixed-width:){.section1-ambito .datos-ambito-container .data-table-container{max-width:80%}}@media(max-width:1080px){.section1-ambito .datos-ambito-container .data-table-container{max-width:80%}}@media(max-width:960px)and (fixed-width:){.section1-ambito .datos-ambito-container .data-table-container{max-width:99%}}@media(max-width:960px){.section1-ambito .datos-ambito-container .data-table-container{max-width:99%}}@media(max-width:840px)and (fixed-width:){.section1-ambito .datos-ambito-container .data-table-container .sortable{background-color:#fff}.section1-ambito .datos-ambito-container .data-table-container .sortable .v-chip__content{font-size:20px!important}.section1-ambito .datos-ambito-container .data-table-container .sortable .v-chip .v-chip--clickable .v-chip--no-color .theme--dark .v-size--default{color:red!important}}@media(max-width:840px){.section1-ambito .datos-ambito-container .data-table-container .sortable{background-color:#fff}.section1-ambito .datos-ambito-container .data-table-container .sortable .v-chip__content{font-size:20px!important}.section1-ambito .datos-ambito-container .data-table-container .sortable .v-chip .v-chip--clickable .v-chip--no-color .theme--dark .v-size--default{color:red!important}}.section1-ambito .datos-ambito-container .data-table-container .input-data-table{box-shadow:-1px 1px 3px 4px rgba(0,0,0,.1)!important;border-radius:10px;padding:10px;margin-bottom:15px;height:45px;display:flex;align-items:center}.section1-ambito .datos-ambito-container .data-table-container .input-data-table input[type=text]{flex:1}.section1-ambito .datos-ambito-container .data-table-container .v-icon{color:#810880;color:var(--primary);margin-right:10px}.section1-ambito .datos-ambito-container .data-table-container .input-data-table:active,.section1-ambito .datos-ambito-container .data-table-container .input-data-table[focus-within]{border:1px solid #810880;border:1px solid var(--primary)}.section1-ambito .datos-ambito-container .data-table-container .input-data-table:active,.section1-ambito .datos-ambito-container .data-table-container .input-data-table:focus-within{border:1px solid #810880;border:1px solid var(--primary)}.section1-ambito .datos-ambito-container .data-table-container .v-data-table th{background-color:#fff;border-radius:0}.section1-ambito .datos-ambito-container .data-table-container .v-data-table th span{color:#810880!important;color:var(--primary)!important;font-weight:500!important;font-size:1.2em!important}.section1-ambito .datos-ambito-container .data-table-container .v-data-table tbody tr td:first-of-type,.section1-ambito .datos-ambito-container .data-table-container .v-data-table tbody tr td:last-of-type{border-radius:0!important}.section1-ambito .datos-ambito-container .data-table-container .v-data-table td{background-color:#fff;border-radius:0!important;--c:#000;--fw:500;font-family:"Inter",sans-serif;font-family:var(--font2);font-size:14px!important;border-bottom:2px solid #810880!important;border-bottom:2px solid var(--primary)!important;height:80px}.section1-ambito .datos-ambito-container .data-table-container .toolbar-tabla{background-color:transparent!important;display:flex;justify-content:flex-end;align-items:flex-end;padding-left:10px;padding-right:10px;position:absolute;z-index:99;right:0}.section1-ambito .datos-ambito-container .title-morado{background-color:#810880;background-color:var(--primary);position:absolute;top:0;width:100%;display:flex;justify-content:space-between;align-items:center;height:50px;border-top-left-radius:10px;border-top-right-radius:10px;padding-left:20px;padding-right:20px}.section1-ambito .datos-ambito-container .title-morado .datos-ambito-title{--c:#fff;--fw:700;margin-bottom:0;font-size:18px}.section1-ambito .datos-ambito-container .torres-inputs-container{width:100%;display:flex;align-items:center;grid-gap:20px;gap:20px;padding-left:10px;padding-right:10px;margin-bottom:20px;flex-wrap:wrap;justify-content:center;padding-bottom:20px;border-bottom:1px solid #810880;border-bottom:1px solid var(--primary)}@media(max-width:650px)and (fixed-width:){.section1-ambito .datos-ambito-container .torres-inputs-container{justify-content:center}}@media(max-width:650px){.section1-ambito .datos-ambito-container .torres-inputs-container{justify-content:center}}.section1-ambito .datos-ambito-container .torres-inputs-container .small-input{max-width:150px;min-width:130px}.section1-ambito .datos-ambito-container .torres-inputs-container .big-input,.section1-ambito .datos-ambito-container .torres-inputs-container .small-input{box-shadow:3px 3px 3px 3px rgba(0,0,0,.1)!important;border-radius:10px;border:1px solid #810880;border:1px solid var(--primary);padding-left:10px;padding-right:10px;height:65px}.section1-ambito .datos-ambito-container .torres-inputs-container .big-input{max-width:275px;min-width:150px}.section1-ambito .datos-ambito-container .torres-inputs-container .btns-add-remove{background-color:#fff;box-shadow:3px 3px 3px 3px rgba(0,0,0,.1)!important;min-height:65px;height:65px;border-radius:10px;--c:var(--primary)!important;font-size:40px!important}#dialog-eliminar-card{background-color:#fff;height:220px;border-radius:10px;display:flex;justify-content:center;align-items:center;flex-direction:column;grid-gap:20px;gap:20px}#dialog-eliminar-card .title{color:#810880;color:var(--primary);font-weight:700!important;font-size:1.5em!important}#dialog-eliminar-card .alerta-text{color:#707070;font-size:1.1em;font-weight:700!important}#dialog-eliminar-card .dialog-btn{max-width:150px!important}#dialog-editar-crear{background-color:#fff;border-radius:8px;display:flex;justify-content:center;align-items:center;flex-direction:column;padding-bottom:16px;max-width:800px;margin:0 auto}#dialog-editar-crear hr{border:.8px solid rgba(0,0,0,.1);width:90%;margin-top:16px;margin-bottom:16px}#dialog-editar-crear .title{color:#810880;color:var(--primary);font-weight:700!important;font-size:1.2em!important}#dialog-editar-crear .dialog-btn{max-width:120px!important}#dialog-editar-crear .input-dialog{box-shadow:1.6px 1.6px 1.6px 1.6px rgba(0,0,0,.1)!important;padding-left:6.4px;padding-right:6.4px;border-radius:6.4px;height:55px}#dialog-editar-crear .big-autocomplete{max-width:500px;box-shadow:1.6px 1.6px 1.6px 1.6px rgba(0,0,0,.1)!important;border-radius:10px;border:1px solid #810880;border:1px solid var(--primary);padding-left:10px;padding-right:10px;height:150px}#dialog-editar-crear .input-dialog:active,#dialog-editar-crear .input-dialog[focus-within]{border:.8px solid #810880;border:.8px solid var(--primary)}#dialog-editar-crear .input-dialog:active,#dialog-editar-crear .input-dialog:focus-within{border:.8px solid #810880;border:.8px solid var(--primary)}.v-input__slot:before{border-color:#fff!important}.v-text-field>.v-input__control>.v-input__slot:after,.v-text-field>.v-input__control>.v-input__slot:before{width:0}',""]),t.exports=e}}]);