(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{1225:function(t,o,e){"use strict";e.r(o);var r=e(635),n=e(634),l=e(633),c=e(645),d=e(655),m=e(1186),v=e(648),x=e(264),h=e(644),f=e(664),_=e(662),w=e(668),y=(e(21),e(206),e(7),e(8),e(10),e(4),e(16),e(11),e(17),e(3));e(283),e(140);function k(object,t){var o=Object.keys(object);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(object);t&&(e=e.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),o.push.apply(o,e)}return o}var j={name:"EstatusInmueblePage",mixins:[e(282).a],data:function(){return{search:"",dialog:!1,dialog_editar:!1,dialogDelete:!1,nuevoRegistro:{},headers:[{text:"Codigo",align:"center",value:"codigo"},{text:"Descripción",align:"center",value:"descripcion"},{text:"",value:"actions",sortable:!1,align:"center"}],estatusInmuebleData:[],defaultItem:{codigo:"",descripcion:"",id:""}}},head:function(){return{title:"Estatus Inmueble"}},mounted:function(){this.getData()},methods:{getData:function(){var t=this;this.$axios.$get("estatusinmueble").then((function(o){t.estatusInmuebleData=o})).catch((function(t){console.log(t)}))},createData:function(){var t=this;this.$axios.$post("estatusinmueble/",this.nuevoRegistro).then((function(o){console.log(o.data),t.nuevoRegistro={},t.estatusInmuebleData.push(o),t.$alert("success",{desc:"Se ha creado un nuevo estatus de inmueble con éxito",hash:"knsddcssdc",title:"Creado"})})).catch((function(t){console.log(t)})),this.dialog=!1},editItem:function(t){console.log(t),this.dialog_editar=!0,this.defaultItem.id=t.id,this.defaultItem.codigo=t.codigo,this.defaultItem.descripcion=t.descripcion},saveData:function(){var t=this,o=new FormData;o.append("codigo",this.defaultItem.codigo),o.append("descripcion",this.defaultItem.descripcion),this.$axios.$patch("estatusinmueble/"+this.defaultItem.id+"/",o).then((function(o){console.log(o.data),t.$alert("success",{desc:"Se ha editado un estatus de inmueble con éxito",hash:"knsddcssdc",title:"Editado"});var e=t.estatusInmuebleData.findIndex((function(o){return o.id===t.defaultItem.id}));-1!==e&&t.$set(t.estatusInmuebleData,e,function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?k(Object(source),!0).forEach((function(o){Object(y.a)(t,o,source[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):k(Object(source)).forEach((function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(source,o))}))}return t}({},t.defaultItem))})).catch((function(t){console.log(t)})),this.dialog_editar=!1},openDelete:function(t){this.defaultItem=t,this.dialogDelete=!0},deleteItem:function(){var t=this;this.$axios.$delete("estatusinmueble/"+this.defaultItem.id+"/").then((function(o){console.log(o.data),t.dialogDelete=!1,t.$alert("success",{desc:"Se ha eliminado un estatus de inmueble con éxito",hash:"knsddcssdc",title:"Eliminado"});var e=t.estatusInmuebleData.findIndex((function(o){return o.id===t.defaultItem.id}));-1!==e&&t.estatusInmuebleData.splice(e,1)})).catch((function(t){console.log(t)}))}}},O=j,C=(e(673),e(24)),component=Object(C.a)(O,(function(){var t=this,o=t._self._c;return o("div",{staticClass:"center no-padding divcol",staticStyle:{"margin-bottom":"20px","padding-left":"256px"}},[o("section",{staticClass:"section1-ambito"},[o("div",{staticClass:"datos-ambito-container"},[o("div",{staticClass:"title-morado"},[o("p",{staticClass:"datos-ambito-title"},[t._v("\n          Estatus de Inmueble\n        ")]),t._v(" "),o(v.a,{attrs:{"max-width":"1600px"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,l=e.attrs;return[o(r.a,t._g(t._b({staticClass:"btn-add-tabla"},"v-btn",l,!1),n),[t._v("\n              +\n            ")])]}}]),model:{value:t.dialog,callback:function(o){t.dialog=o},expression:"dialog"}},[t._v(" "),o(n.a,{attrs:{id:"dialog-editar-crear"}},[o(l.c,[o("span",{staticClass:"title"},[t._v("Crear Nuevo Estatus de Inmueble")])]),t._v(" "),o("hr"),t._v(" "),o(l.b,[o(d.a,[o(h.a,{staticClass:"center"},[o(c.a,{attrs:{cols:"12",sm:"6",md:"4"}},[o(_.a,{staticClass:"input-dialog",attrs:{label:"Código"},model:{value:t.nuevoRegistro.codigo,callback:function(o){t.$set(t.nuevoRegistro,"codigo",o)},expression:"nuevoRegistro.codigo"}})],1),t._v(" "),o(c.a,{attrs:{cols:"12",sm:"6",md:"4"}},[o(_.a,{staticClass:"input-dialog",attrs:{label:"Descripción"},model:{value:t.nuevoRegistro.descripcion,callback:function(o){t.$set(t.nuevoRegistro,"descripcion",o)},expression:"nuevoRegistro.descripcion"}})],1)],1)],1)],1),t._v(" "),o(l.a,[o(f.a),t._v(" "),o(r.a,{staticClass:"btn dialog-btn",on:{click:function(o){t.dialog=!1}}},[t._v("\n                Cancelar\n              ")]),t._v(" "),o(r.a,{staticClass:"btn dialog-btn",staticStyle:{"background-color":"#ED057E!important"},on:{click:function(o){return t.createData()}}},[t._v("\n                Guardar\n              ")])],1)],1)],1),t._v(" "),o(v.a,{attrs:{"max-width":"1600px"},model:{value:t.dialog_editar,callback:function(o){t.dialog_editar=o},expression:"dialog_editar"}},[o(n.a,{attrs:{id:"dialog-editar-crear"}},[o(l.c,[o("span",{staticClass:"title"},[t._v("Editar Estatus de Inmueble")])]),t._v(" "),o("hr"),t._v(" "),o(l.b,[o(d.a,[o(h.a,{staticClass:"center"},[o(c.a,{attrs:{cols:"12",sm:"6",md:"4"}},[o(_.a,{staticClass:"input-dialog",attrs:{label:"Código"},model:{value:t.defaultItem.codigo,callback:function(o){t.$set(t.defaultItem,"codigo",o)},expression:"defaultItem.codigo"}})],1),t._v(" "),o(c.a,{attrs:{cols:"12",sm:"6",md:"4"}},[o(_.a,{staticClass:"input-dialog",attrs:{label:"Descripción"},model:{value:t.defaultItem.descripcion,callback:function(o){t.$set(t.defaultItem,"descripcion",o)},expression:"defaultItem.descripcion"}})],1)],1)],1)],1),t._v(" "),o(l.a,[o(f.a),t._v(" "),o(r.a,{staticClass:"btn dialog-btn",on:{click:function(o){t.dialog_editar=!1}}},[t._v("\n                Cancelar\n              ")]),t._v(" "),o(r.a,{staticClass:"btn dialog-btn",staticStyle:{"background-color":"#ED057E!important"},on:{click:function(o){return t.saveData()}}},[t._v("\n                Guardar\n              ")])],1)],1)],1)],1),t._v(" "),o("div",{staticClass:"data-table-container"},[o(_.a,{staticClass:"input-data-table",attrs:{"append-icon":"mdi-magnify",label:"Buscar","hide-details":""},model:{value:t.search,callback:function(o){t.search=o},expression:"search"}}),t._v(" "),o(m.a,{staticClass:"mytabla",attrs:{headers:t.headers,items:t.estatusInmuebleData,"items-per-page":10,search:t.search,"footer-props":{itemsPerPageText:"Items por página"},"sort-by":"codigo","mobile-breakpoint":"840"},scopedSlots:t._u([{key:"top",fn:function(){return[o(w.a,{staticClass:"toolbar-tabla",attrs:{flat:""}},[o(v.a,{attrs:{"max-width":"500px"},model:{value:t.dialogDelete,callback:function(o){t.dialogDelete=o},expression:"dialogDelete"}},[o(n.a,{attrs:{id:"dialog-eliminar-card"}},[o(l.c,{staticClass:"center title"},[t._v("¿Desea eliminarlo?")]),t._v(" "),o("span",{staticClass:"alerta-text"},[t._v("Esta acción no se puede revertir")]),t._v(" "),o(l.a,[o(f.a),t._v(" "),o(r.a,{staticClass:"btn dialog-btn",attrs:{text:""},on:{click:function(o){return t.deleteItem()}}},[t._v("Si")]),t._v(" "),o(r.a,{staticClass:"btn dialog-btn",staticStyle:{"background-color":"#ED057E!important"},attrs:{text:""},on:{click:function(o){t.dialogDelete=!1}}},[t._v("No")]),t._v(" "),o(f.a)],1)],1)],1)],1)]},proxy:!0},{key:"item.actions",fn:function(e){var r=e.item;return[o(x.a,{attrs:{color:"#810880",big:""},on:{click:function(o){return t.editItem(r)}}},[t._v("\n              mdi-pencil\n            ")]),t._v(" "),o(x.a,{attrs:{color:"#810880",big:""},on:{click:function(o){return t.openDelete(r)}}},[t._v("\n              mdi-delete\n            ")])]}}],null,!0)})],1)])])])}),[],!1,null,null,null);o.default=component.exports},633:function(t,o,e){"use strict";e.d(o,"a",(function(){return l})),e.d(o,"b",(function(){return d})),e.d(o,"c",(function(){return m}));var r=e(634),n=e(2),l=Object(n.j)("v-card__actions"),c=Object(n.j)("v-card__subtitle"),d=Object(n.j)("v-card__text"),m=Object(n.j)("v-card__title");r.a},657:function(t,o,e){var content=e(658);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(19).default)("402355ff",content,!0,{sourceMap:!1})},658:function(t,o,e){var r=e(18)(!1);r.push([t.i,':root{--primary:#810880;--secondary:#810880;--accent:#810880;--active:var(--primary);--error:#ff4081;--warning:#ffc260;--success:#3cd4a0;--clr-gradient:linear-gradient(to right top,#356d74,#2a505c,#21394a,#1a293d,#172035,#161d33,#161e34,#192539,#1e3143,#244251,#2d5862,#387378,#449492,#53b9b1,#63e2d2);--c:var(--clr);--font1:"Inter",sans-serif;--font2:"Inter",sans-serif;--fw:initial;--resizer:clamp(12px,1vw,16px);--resizer-mobile:clamp(10px,1.5vw,12px);--margin-global:9em;--parent:1600px;--subparent:1900px;--h-navbar:100px;--w-scroll:8px;--sombra-filter:drop-shadow(0px 4px 1px rgba(0,0,0,0.3));--sombra-card:0px 4px 4px rgba(0,0,0,0.25);--sombra-btn:0px 4px 4px rgba(0,0,0,0.25)}:root.light{--bg-ap:#f5f5f5;--clr:#000;--clr-hover:#270330;--clr-scroll:var(--primary);--clr-bg-scroll:var(--secondary);--clr-card:#fff;--clr-btn:var(--primary);--clr-text-btn:#000;--clr-badge:var(--primary);--clr-text-badge:#000;--clr-line:rgba(235,231,36,0.5)}:root.dark{--bg-ap:#000;--clr:#fff;--clr-hover:#f3cffc;--clr-scroll:var(--primary);--clr-bg-scroll:var(--secondary);--clr-card:#191919;--clr-btn:var(--primary);--clr-text-btn:#fff;--clr-badge:var(--primary);--clr-text-badge:#000;--clr-line:rgba(235,231,36,0.5)}@media(max-width:880px)and (fixed-width:){:root{--margin-global:clamp(1em,5vw,4em)}}@media(max-width:880px){:root{--margin-global:clamp(1em,5vw,4em)}}@media(max-width:880px)and (fixed-width:){:root{--h-navbar:80px}}@media(max-width:880px){:root{--h-navbar:80px}}.clr_primary{background-color:#810880!important;background-color:var(--primary)!important}.clr_secondary{background-color:#810880!important;background-color:var(--secondary)!important}.clr_accent{background-color:#810880!important;background-color:var(--accent)!important}.clr{color:var(--clr)!important}.clr_btn{background-color:var(--clr-btn)!important}.clr_btn_pressed{background-color:var(--clr-btn-pressed)!important}.clr_btn_inactive{background-color:var(--clr-btn-inactive)!important}.clr_text_btn{color:var(--clr-text-btn)!important}.clr_card{background-color:var(--clr-card)!important}.clr_svg{fill:var(--clr)!important}.flr{filter:invert(100%)!important}.flr_inv{filter:invert(0)!important}.clr-gradient{background:linear-gradient(to right top,#356d74,#2a505c,#21394a,#1a293d,#172035,#161d33,#161e34,#192539,#1e3143,#244251,#2d5862,#387378,#449492,#53b9b1,#63e2d2)!important;background:var(--clr-gradient)!important}.clr_card_2{background-color:var(--clr-card-2)!important}.theme--light.v-toolbar.v-sheet{background-color:#fff}.theme--dark.v-toolbar.v-sheet{background-color:#272727}.v-sheet.v-toolbar{border-radius:0}.v-sheet.v-toolbar:not(.v-sheet--outlined){box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)}.v-sheet.v-toolbar.v-sheet--shaped{border-radius:24px 0}.v-toolbar{contain:layout;display:block;flex:1 1 auto;max-width:100%;transition:transform .2s cubic-bezier(.4,0,.2,1),background-color .2s cubic-bezier(.4,0,.2,1),left .2s cubic-bezier(.4,0,.2,1),right .2s cubic-bezier(.4,0,.2,1),box-shadow .28s cubic-bezier(.4,0,.2,1),max-width .25s cubic-bezier(.4,0,.2,1),width .25s cubic-bezier(.4,0,.2,1);position:relative;box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)}.v-toolbar .v-input{padding-top:0;margin-top:0}.v-toolbar__content,.v-toolbar__extension{padding:4px 16px}.v-toolbar__content .v-btn.v-btn--icon.v-size--default,.v-toolbar__extension .v-btn.v-btn--icon.v-size--default{height:48px;width:48px}.v-application--is-ltr .v-toolbar__content>.v-btn.v-btn--icon:first-child,.v-application--is-ltr .v-toolbar__extension>.v-btn.v-btn--icon:first-child{margin-left:-12px}.v-application--is-rtl .v-toolbar__content>.v-btn.v-btn--icon:first-child,.v-application--is-rtl .v-toolbar__extension>.v-btn.v-btn--icon:first-child{margin-right:-12px}.v-application--is-ltr .v-toolbar__content>.v-btn.v-btn--icon:first-child+.v-toolbar__title,.v-application--is-ltr .v-toolbar__extension>.v-btn.v-btn--icon:first-child+.v-toolbar__title{padding-left:20px}.v-application--is-rtl .v-toolbar__content>.v-btn.v-btn--icon:first-child+.v-toolbar__title,.v-application--is-rtl .v-toolbar__extension>.v-btn.v-btn--icon:first-child+.v-toolbar__title{padding-right:20px}.v-application--is-ltr .v-toolbar__content>.v-btn.v-btn--icon:last-child,.v-application--is-ltr .v-toolbar__extension>.v-btn.v-btn--icon:last-child{margin-right:-12px}.v-application--is-rtl .v-toolbar__content>.v-btn.v-btn--icon:last-child,.v-application--is-rtl .v-toolbar__extension>.v-btn.v-btn--icon:last-child{margin-left:-12px}.v-toolbar__content>.v-tabs,.v-toolbar__extension>.v-tabs{height:inherit;margin-top:-4px;margin-bottom:-4px}.v-toolbar__content>.v-tabs>.v-slide-group.v-tabs-bar,.v-toolbar__extension>.v-tabs>.v-slide-group.v-tabs-bar{background-color:inherit;height:inherit}.v-toolbar__content>.v-tabs:first-child,.v-toolbar__extension>.v-tabs:first-child{margin-left:-16px}.v-toolbar__content>.v-tabs:last-child,.v-toolbar__extension>.v-tabs:last-child{margin-right:-16px}.v-toolbar__content,.v-toolbar__extension{align-items:center;display:flex;position:relative;z-index:0}.v-toolbar__image{position:absolute;top:0;bottom:0;width:100%;z-index:0;contain:strict}.v-toolbar__image,.v-toolbar__image .v-image{border-radius:inherit}.v-toolbar__items{display:flex;height:inherit}.v-toolbar__items>.v-btn{border-radius:0;height:100%!important;max-height:none}.v-toolbar__title{font-size:1.25rem;line-height:1.5;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.v-toolbar.v-toolbar--absolute{position:absolute;top:0;z-index:1}.v-toolbar.v-toolbar--bottom{top:auto;bottom:0}.v-toolbar.v-toolbar--collapse .v-toolbar__title{white-space:nowrap}.v-toolbar.v-toolbar--collapsed{max-width:112px;overflow:hidden}.v-application--is-ltr .v-toolbar.v-toolbar--collapsed{border-bottom-right-radius:24px}.v-application--is-rtl .v-toolbar.v-toolbar--collapsed{border-bottom-left-radius:24px}.v-toolbar.v-toolbar--collapsed .v-toolbar__extension,.v-toolbar.v-toolbar--collapsed .v-toolbar__title{display:none}.v-toolbar--dense .v-toolbar__content,.v-toolbar--dense .v-toolbar__extension{padding-top:0;padding-bottom:0}.v-toolbar--flat{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)!important}.v-toolbar--floating{display:inline-flex}.v-toolbar--prominent .v-toolbar__content{align-items:flex-start}.v-toolbar--prominent .v-toolbar__title{font-size:1.5rem;padding-top:6px}.v-toolbar--prominent:not(.v-toolbar--bottom) .v-toolbar__title{align-self:flex-end;padding-bottom:6px;padding-top:0}',""]),t.exports=r},664:function(t,o,e){"use strict";e(391);var r=e(2);o.a=Object(r.j)("spacer","div","v-spacer")},665:function(t,o,e){var content=e(674);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(19).default)("614368c0",content,!0,{sourceMap:!1})},668:function(t,o,e){"use strict";e(7),e(8),e(10),e(16),e(11),e(17);var r=e(9),n=e(3),l=(e(30),e(204),e(205),e(4),e(657),e(73)),c=e(285),d=e(2),m=e(15);function v(object,t){var o=Object.keys(object);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(object);t&&(e=e.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),o.push.apply(o,e)}return o}function x(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(o){Object(n.a)(t,o,source[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(source,o))}))}return t}o.a=l.a.extend({name:"v-toolbar",props:{absolute:Boolean,bottom:Boolean,collapse:Boolean,dense:Boolean,extended:Boolean,extensionHeight:{default:48,type:[Number,String]},flat:Boolean,floating:Boolean,prominent:Boolean,short:Boolean,src:{type:[String,Object],default:""},tag:{type:String,default:"header"}},data:function(){return{isExtended:!1}},computed:{computedHeight:function(){var t=this.computedContentHeight;if(!this.isExtended)return t;var o=parseInt(this.extensionHeight);return this.isCollapsed?t:t+(isNaN(o)?0:o)},computedContentHeight:function(){return this.height?parseInt(this.height):this.isProminent&&this.dense?96:this.isProminent&&this.short?112:this.isProminent?128:this.dense?48:this.short||this.$vuetify.breakpoint.smAndDown?56:64},classes:function(){return x(x({},l.a.options.computed.classes.call(this)),{},{"v-toolbar":!0,"v-toolbar--absolute":this.absolute,"v-toolbar--bottom":this.bottom,"v-toolbar--collapse":this.collapse,"v-toolbar--collapsed":this.isCollapsed,"v-toolbar--dense":this.dense,"v-toolbar--extended":this.isExtended,"v-toolbar--flat":this.flat,"v-toolbar--floating":this.floating,"v-toolbar--prominent":this.isProminent})},isCollapsed:function(){return this.collapse},isProminent:function(){return this.prominent},styles:function(){return x(x({},this.measurableStyles),{},{height:Object(d.h)(this.computedHeight)})}},created:function(){var t=this;[["app","<v-app-bar app>"],["manual-scroll",'<v-app-bar :value="false">'],["clipped-left","<v-app-bar clipped-left>"],["clipped-right","<v-app-bar clipped-right>"],["inverted-scroll","<v-app-bar inverted-scroll>"],["scroll-off-screen","<v-app-bar scroll-off-screen>"],["scroll-target","<v-app-bar scroll-target>"],["scroll-threshold","<v-app-bar scroll-threshold>"],["card","<v-app-bar flat>"]].forEach((function(o){var e=Object(r.a)(o,2),n=e[0],l=e[1];t.$attrs.hasOwnProperty(n)&&Object(m.a)(n,l,t)}))},methods:{genBackground:function(){var t={height:Object(d.h)(this.computedHeight),src:this.src},image=this.$scopedSlots.img?this.$scopedSlots.img({props:t}):this.$createElement(c.a,{props:t});return this.$createElement("div",{staticClass:"v-toolbar__image"},[image])},genContent:function(){return this.$createElement("div",{staticClass:"v-toolbar__content",style:{height:Object(d.h)(this.computedContentHeight)}},Object(d.t)(this))},genExtension:function(){return this.$createElement("div",{staticClass:"v-toolbar__extension",style:{height:Object(d.h)(this.extensionHeight)}},Object(d.t)(this,"extension"))}},render:function(t){this.isExtended=this.extended||!!this.$scopedSlots.extension;var o=[this.genContent()],data=this.setBackgroundColor(this.color,{class:this.classes,style:this.styles,on:this.$listeners});return this.isExtended&&o.push(this.genExtension()),(this.src||this.$scopedSlots.img)&&o.unshift(this.genBackground()),t(this.tag,data,o)}})},673:function(t,o,e){"use strict";e(665)},674:function(t,o,e){var r=e(18)(!1);r.push([t.i,':root{--primary:#810880;--secondary:#810880;--accent:#810880;--active:var(--primary);--error:#ff4081;--warning:#ffc260;--success:#3cd4a0;--clr-gradient:linear-gradient(to right top,#356d74,#2a505c,#21394a,#1a293d,#172035,#161d33,#161e34,#192539,#1e3143,#244251,#2d5862,#387378,#449492,#53b9b1,#63e2d2);--c:var(--clr);--font1:"Inter",sans-serif;--font2:"Inter",sans-serif;--fw:initial;--resizer:clamp(12px,1vw,16px);--resizer-mobile:clamp(10px,1.5vw,12px);--margin-global:9em;--parent:1600px;--subparent:1900px;--h-navbar:100px;--w-scroll:8px;--sombra-filter:drop-shadow(0px 4px 1px rgba(0,0,0,0.3));--sombra-card:0px 4px 4px rgba(0,0,0,0.25);--sombra-btn:0px 4px 4px rgba(0,0,0,0.25)}:root.light{--bg-ap:#f5f5f5;--clr:#000;--clr-hover:#270330;--clr-scroll:var(--primary);--clr-bg-scroll:var(--secondary);--clr-card:#fff;--clr-btn:var(--primary);--clr-text-btn:#000;--clr-badge:var(--primary);--clr-text-badge:#000;--clr-line:rgba(235,231,36,0.5)}:root.dark{--bg-ap:#000;--clr:#fff;--clr-hover:#f3cffc;--clr-scroll:var(--primary);--clr-bg-scroll:var(--secondary);--clr-card:#191919;--clr-btn:var(--primary);--clr-text-btn:#fff;--clr-badge:var(--primary);--clr-text-badge:#000;--clr-line:rgba(235,231,36,0.5)}@media(max-width:880px)and (fixed-width:){:root{--margin-global:clamp(1em,5vw,4em)}}@media(max-width:880px){:root{--margin-global:clamp(1em,5vw,4em)}}@media(max-width:880px)and (fixed-width:){:root{--h-navbar:80px}}@media(max-width:880px){:root{--h-navbar:80px}}.clr_primary{background-color:#810880!important;background-color:var(--primary)!important}.clr_secondary{background-color:#810880!important;background-color:var(--secondary)!important}.clr_accent{background-color:#810880!important;background-color:var(--accent)!important}.clr{color:var(--clr)!important}.clr_btn{background-color:var(--clr-btn)!important}.clr_btn_pressed{background-color:var(--clr-btn-pressed)!important}.clr_btn_inactive{background-color:var(--clr-btn-inactive)!important}.clr_text_btn{color:var(--clr-text-btn)!important}.clr_card{background-color:var(--clr-card)!important}.clr_svg{fill:var(--clr)!important}.flr{filter:invert(100%)!important}.flr_inv{filter:invert(0)!important}.clr-gradient{background:linear-gradient(to right top,#356d74,#2a505c,#21394a,#1a293d,#172035,#161d33,#161e34,#192539,#1e3143,#244251,#2d5862,#387378,#449492,#53b9b1,#63e2d2)!important;background:var(--clr-gradient)!important}.clr_card_2{background-color:var(--clr-card-2)!important}.section1-ambito{display:flex;flex-direction:column;max-width:1440px;width:90%;overflow-x:hidden;margin-right:0!important;margin-left:0;grid-gap:10px;gap:10px;padding-bottom:10px;padding-left:10px;padding-right:10px}.section1-ambito .datos-ambito-container{position:relative;width:100%;border-radius:10px;padding:80px 10px 20px;background-color:#fff;box-shadow:3px 3px 3px 3px rgba(0,0,0,.1)!important;display:grid;justify-items:center;overflow-x:hidden;margin-bottom:30px}.section1-ambito .datos-ambito-container .btn-add-tabla{background-color:#810880!important;background-color:var(--primary)!important;box-shadow:none!important;min-height:30px;min-width:30px;width:30px;height:30px;--c:#fff!important;font-size:30px!important;font-weight:500!important}.section1-ambito .datos-ambito-container .data-table-container{width:99%}@media(max-width:1080px)and (fixed-width:){.section1-ambito .datos-ambito-container .data-table-container{max-width:80%}}@media(max-width:1080px){.section1-ambito .datos-ambito-container .data-table-container{max-width:80%}}@media(max-width:960px)and (fixed-width:){.section1-ambito .datos-ambito-container .data-table-container{max-width:99%}}@media(max-width:960px){.section1-ambito .datos-ambito-container .data-table-container{max-width:99%}}@media(max-width:840px)and (fixed-width:){.section1-ambito .datos-ambito-container .data-table-container .sortable{background-color:#fff}.section1-ambito .datos-ambito-container .data-table-container .sortable .v-chip__content{font-size:20px!important}.section1-ambito .datos-ambito-container .data-table-container .sortable .v-chip .v-chip--clickable .v-chip--no-color .theme--dark .v-size--default{color:red!important}}@media(max-width:840px){.section1-ambito .datos-ambito-container .data-table-container .sortable{background-color:#fff}.section1-ambito .datos-ambito-container .data-table-container .sortable .v-chip__content{font-size:20px!important}.section1-ambito .datos-ambito-container .data-table-container .sortable .v-chip .v-chip--clickable .v-chip--no-color .theme--dark .v-size--default{color:red!important}}.section1-ambito .datos-ambito-container .data-table-container .input-data-table{box-shadow:-1px 1px 3px 4px rgba(0,0,0,.1)!important;border-radius:10px;padding:10px;margin-bottom:15px;height:45px;display:flex;align-items:center}.section1-ambito .datos-ambito-container .data-table-container .input-data-table input[type=text]{flex:1}.section1-ambito .datos-ambito-container .data-table-container .v-icon{color:#810880;color:var(--primary);margin-right:10px}.section1-ambito .datos-ambito-container .data-table-container .input-data-table:active,.section1-ambito .datos-ambito-container .data-table-container .input-data-table[focus-within]{border:1px solid #810880;border:1px solid var(--primary)}.section1-ambito .datos-ambito-container .data-table-container .input-data-table:active,.section1-ambito .datos-ambito-container .data-table-container .input-data-table:focus-within{border:1px solid #810880;border:1px solid var(--primary)}.section1-ambito .datos-ambito-container .data-table-container .v-data-table th{background-color:#fff;border-radius:0}.section1-ambito .datos-ambito-container .data-table-container .v-data-table th span{color:#810880!important;color:var(--primary)!important;font-weight:500!important;font-size:1.2em!important}.section1-ambito .datos-ambito-container .data-table-container .v-data-table tbody tr td:first-of-type,.section1-ambito .datos-ambito-container .data-table-container .v-data-table tbody tr td:last-of-type{border-radius:0!important}.section1-ambito .datos-ambito-container .data-table-container .v-data-table td{background-color:#fff;border-radius:0!important;--c:#000;--fw:500;font-family:"Inter",sans-serif;font-family:var(--font2);font-size:14px!important;border-bottom:2px solid #810880!important;border-bottom:2px solid var(--primary)!important;height:80px}.section1-ambito .datos-ambito-container .data-table-container .toolbar-tabla{background-color:transparent!important;display:flex;justify-content:flex-end;align-items:flex-end;padding-left:10px;padding-right:10px;position:absolute;z-index:99;right:0}.section1-ambito .datos-ambito-container .title-morado{background-color:#810880;background-color:var(--primary);position:absolute;top:0;width:100%;display:flex;justify-content:space-between;align-items:center;height:50px;border-top-left-radius:10px;border-top-right-radius:10px;padding-left:20px;padding-right:20px}.section1-ambito .datos-ambito-container .title-morado .datos-ambito-title{--c:#fff;--fw:700;margin-bottom:0;font-size:18px}.section1-ambito .datos-ambito-container .torres-inputs-container{width:100%;display:flex;align-items:center;grid-gap:20px;gap:20px;padding-left:10px;padding-right:10px;margin-bottom:20px;flex-wrap:wrap;justify-content:center;padding-bottom:20px;border-bottom:1px solid #810880;border-bottom:1px solid var(--primary)}@media(max-width:650px)and (fixed-width:){.section1-ambito .datos-ambito-container .torres-inputs-container{justify-content:center}}@media(max-width:650px){.section1-ambito .datos-ambito-container .torres-inputs-container{justify-content:center}}.section1-ambito .datos-ambito-container .torres-inputs-container .small-input{max-width:150px;min-width:130px}.section1-ambito .datos-ambito-container .torres-inputs-container .big-input,.section1-ambito .datos-ambito-container .torres-inputs-container .small-input{box-shadow:3px 3px 3px 3px rgba(0,0,0,.1)!important;border-radius:10px;border:1px solid #810880;border:1px solid var(--primary);padding-left:10px;padding-right:10px;height:65px}.section1-ambito .datos-ambito-container .torres-inputs-container .big-input{max-width:275px;min-width:150px}.section1-ambito .datos-ambito-container .torres-inputs-container .btns-add-remove{background-color:#fff;box-shadow:3px 3px 3px 3px rgba(0,0,0,.1)!important;min-height:65px;height:65px;border-radius:10px;--c:var(--primary)!important;font-size:40px!important}#dialog-eliminar-card{background-color:#fff;height:220px;border-radius:10px;display:flex;justify-content:center;align-items:center;flex-direction:column;grid-gap:20px;gap:20px}#dialog-eliminar-card .title{color:#810880;color:var(--primary);font-weight:700!important;font-size:1.5em!important}#dialog-eliminar-card .alerta-text{color:#707070;font-size:1.1em;font-weight:700!important}#dialog-eliminar-card .dialog-btn{max-width:150px!important}#dialog-editar-crear{background-color:#fff;border-radius:8px;display:flex;justify-content:center;align-items:center;flex-direction:column;padding-bottom:16px;max-width:800px;margin:0 auto}#dialog-editar-crear hr{border:.8px solid rgba(0,0,0,.1);width:90%;margin-top:16px;margin-bottom:16px}#dialog-editar-crear .title{color:#810880;color:var(--primary);font-weight:700!important;font-size:1.2em!important}#dialog-editar-crear .dialog-btn{max-width:120px!important}#dialog-editar-crear .input-dialog{box-shadow:1.6px 1.6px 1.6px 1.6px rgba(0,0,0,.1)!important;padding-left:6.4px;padding-right:6.4px;border-radius:6.4px;height:55px}#dialog-editar-crear .big-autocomplete{max-width:500px;box-shadow:1.6px 1.6px 1.6px 1.6px rgba(0,0,0,.1)!important;border-radius:10px;border:1px solid #810880;border:1px solid var(--primary);padding-left:10px;padding-right:10px;height:150px}#dialog-editar-crear .input-dialog:active,#dialog-editar-crear .input-dialog[focus-within]{border:.8px solid #810880;border:.8px solid var(--primary)}#dialog-editar-crear .input-dialog:active,#dialog-editar-crear .input-dialog:focus-within{border:.8px solid #810880;border:.8px solid var(--primary)}.v-input__slot:before{border-color:#fff!important}.v-text-field>.v-input__control>.v-input__slot:after,.v-text-field>.v-input__control>.v-input__slot:before{width:0}',""]),t.exports=r}}]);