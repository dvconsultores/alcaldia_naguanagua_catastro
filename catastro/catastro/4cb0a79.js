(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{1233:function(t,e,n){"use strict";n.r(e);var r=n(669),o=n(632),c=n(263),l=(n(10),n(4),{name:"EstadoCuentaPage",mixins:[n(282).a],data:function(){return{inmueblePropietariosData:[],flujoData:[],nombrecontribuyente:"Sin Seleccionar"==this.$store.getters.getContribuyente?"":JSON.parse(JSON.stringify(this.$store.getters.getContribuyente.nombre)),nacionalidadcontribuyente:"Sin Seleccionar"==this.$store.getters.getContribuyente?"":JSON.parse(JSON.stringify(this.$store.getters.getContribuyente.nacionalidad)),numero_documento:"Sin Seleccionar"==this.$store.getters.getContribuyente?"":JSON.parse(JSON.stringify(this.$store.getters.getContribuyente.numero_documento))}},head:function(){return{title:"Estado de Cuenta"}},mounted:function(){this.getFlujo(),this.getInmueblePropietarios(),this.redireccionIdVacio()},methods:{redireccionIdVacio:function(){"Sin Seleccionar"==this.$store.getters.getContribuyente&&(this.$router.push("modificar-datos"),this.$alert("cancel",{desc:"Debe seleccionar un contribuyente para ingresar a este módulo",hash:"knsddcssdc",title:"Error"}))},redireccionarDetalle:function(){console.log("lalal",this.flujo),this.$store.dispatch("storeFlujo",this.flujo),this.$router.push("estado-cuenta-detalle")},redireccionarSolicitudInmuebleExistente:function(t){this.$router.push("/solicitud-inmueble-existente/".concat(t))},getInmueblePropietarios:function(){var t=this;this.$axios.$get("inmueble_propietarios/?propietario="+this.$store.getters.getContribuyente.id).then((function(e){t.inmueblePropietariosData=e,console.log(t.inmueblePropietariosData,"dataa")})).catch((function(t){console.log(t)}))},getFlujo:function(){var t=this;this.$axios.$get("tipoflujo").then((function(e){t.flujoData=e.filter((function(t){return"C"===t.aplica})),console.log("this.flujoData",t.flujoData)})).catch((function(t){console.log(t)}))}}}),d=(n(836),n(24)),component=Object(d.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"center no-padding divcol",staticStyle:{"margin-bottom":"20px","padding-left":"256px"}},[e("section",{staticClass:"section1-estado-cuenta"},[e("div",{staticClass:"datos-contribuyente-container"},[t._m(0),t._v(" "),e("div",{staticClass:"datos-btns-contribuyente"},[e("div",{staticClass:"title-description-div"},[e("p",{staticClass:"nombre-razon"},[t._v("\n            Nombre / Razón Social\n          ")]),t._v(" "),e("p",{staticClass:"nombre-desc"},[t._v("\n            "+t._s(t.nombrecontribuyente)+"\n          ")])]),t._v(" "),e("div",{staticClass:"title-description-div"},[e("p",{staticClass:"nombre-razon"},[t._v("\n            RIF\n          ")]),t._v(" "),e("p",{staticClass:"nombre-desc"},[t._v("\n            "+t._s(t.numero_documento)+"\n          ")])]),t._v(" "),e(o.a,{staticClass:"cards-estado-cuenta",on:{click:function(e){return t.redireccionarDetalle()}}},[e(c.a,{staticClass:"icon-card"},[t._v("\n            mdi-transfer-down\n          ")]),t._v(" "),e("span",{staticClass:"title-card"},[t._v("\n            Trámites / Servicios\n          ")])],1)],1)]),t._v(" "),e("div",{staticClass:"flujo-container"},[e("p",{staticClass:"title-inscripcion-inmueble"},[t._v("\n        Seleccione tipo de trámite o servicio\n      ")]),t._v(" "),e("hr"),t._v(" "),e("div",{staticClass:"center",staticStyle:{width:"100%"}},[e(r.a,{staticClass:"autocomplete-flujo",attrs:{label:"Tipo de trámite/servicio",items:t.flujoData,"item-text":"descripcion","item-value":"codigo"},model:{value:t.flujo,callback:function(e){t.flujo=e},expression:"flujo"}})],1)])])])}),[function(){var t=this._self._c;return t("div",{staticClass:"title-morado"},[t("p",{staticClass:"contribuyente-datos"},[this._v("\n          Datos del Contribuyente\n        ")])])}],!1,null,null,null);e.default=component.exports},657:function(t,e,n){var content=n(658);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(19).default)("50788f08",content,!0,{sourceMap:!1})},658:function(t,e,n){var r=n(18)(!1);r.push([t.i,':root{--primary:#810880;--secondary:#810880;--accent:#810880;--active:var(--primary);--error:#ff4081;--warning:#ffc260;--success:#3cd4a0;--clr-gradient:linear-gradient(to right top,#356d74,#2a505c,#21394a,#1a293d,#172035,#161d33,#161e34,#192539,#1e3143,#244251,#2d5862,#387378,#449492,#53b9b1,#63e2d2);--c:var(--clr);--font1:"Inter",sans-serif;--font2:"Inter",sans-serif;--fw:initial;--resizer:clamp(12px,1vw,16px);--resizer-mobile:clamp(10px,1.5vw,12px);--margin-global:9em;--parent:1600px;--subparent:1900px;--h-navbar:100px;--w-scroll:8px;--sombra-filter:drop-shadow(0px 4px 1px rgba(0,0,0,0.3));--sombra-card:0px 4px 4px rgba(0,0,0,0.25);--sombra-btn:0px 4px 4px rgba(0,0,0,0.25)}:root.light{--bg-ap:#f5f5f5;--clr:#000;--clr-hover:#270330;--clr-scroll:var(--primary);--clr-bg-scroll:var(--secondary);--clr-card:#fff;--clr-btn:var(--primary);--clr-text-btn:#000;--clr-badge:var(--primary);--clr-text-badge:#000;--clr-line:rgba(235,231,36,0.5)}:root.dark{--bg-ap:#000;--clr:#fff;--clr-hover:#f3cffc;--clr-scroll:var(--primary);--clr-bg-scroll:var(--secondary);--clr-card:#191919;--clr-btn:var(--primary);--clr-text-btn:#fff;--clr-badge:var(--primary);--clr-text-badge:#000;--clr-line:rgba(235,231,36,0.5)}@media(max-width:880px)and (fixed-width:){:root{--margin-global:clamp(1em,5vw,4em)}}@media(max-width:880px){:root{--margin-global:clamp(1em,5vw,4em)}}@media(max-width:880px)and (fixed-width:){:root{--h-navbar:80px}}@media(max-width:880px){:root{--h-navbar:80px}}.clr_primary{background-color:#810880!important;background-color:var(--primary)!important}.clr_secondary{background-color:#810880!important;background-color:var(--secondary)!important}.clr_accent{background-color:#810880!important;background-color:var(--accent)!important}.clr{color:var(--clr)!important}.clr_btn{background-color:var(--clr-btn)!important}.clr_btn_pressed{background-color:var(--clr-btn-pressed)!important}.clr_btn_inactive{background-color:var(--clr-btn-inactive)!important}.clr_text_btn{color:var(--clr-text-btn)!important}.clr_card{background-color:var(--clr-card)!important}.clr_svg{fill:var(--clr)!important}.flr{filter:invert(100%)!important}.flr_inv{filter:invert(0)!important}.clr-gradient{background:linear-gradient(to right top,#356d74,#2a505c,#21394a,#1a293d,#172035,#161d33,#161e34,#192539,#1e3143,#244251,#2d5862,#387378,#449492,#53b9b1,#63e2d2)!important;background:var(--clr-gradient)!important}.clr_card_2{background-color:var(--clr-card-2)!important}.v-autocomplete.v-input>.v-input__control>.v-input__slot{cursor:text}.v-autocomplete input{align-self:center}.v-autocomplete.v-select.v-input--is-focused input{min-width:64px}.v-autocomplete:not(.v-input--is-focused).v-select--chips input{max-height:0;padding:0}.v-autocomplete--is-selecting-index input{opacity:0}.v-autocomplete.v-text-field--enclosed:not(.v-text-field--solo):not(.v-text-field--single-line):not(.v-text-field--outlined) .v-select__slot>input{margin-top:24px}.v-autocomplete.v-text-field--enclosed:not(.v-text-field--solo):not(.v-text-field--single-line):not(.v-text-field--outlined).v-input--dense .v-select__slot>input{margin-top:20px}.v-autocomplete__content.v-menu__content,.v-autocomplete__content.v-menu__content .v-card{border-radius:0}',""]),t.exports=r},669:function(t,e,n){"use strict";n(8),n(7),n(16),n(11),n(17);var r=n(3),o=(n(59),n(4),n(10),n(83),n(69),n(281),n(34),n(44),n(657),n(667)),c=n(660),l=n(70),d=n(2);function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var x=h(h({},o.b),{},{offsetY:!0,offsetOverflow:!0,transition:!1});e.a=o.a.extend({name:"v-autocomplete",props:{allowOverflow:{type:Boolean,default:!0},autoSelectFirst:{type:Boolean,default:!1},filter:{type:Function,default:function(t,e,n){return n.toLocaleLowerCase().indexOf(e.toLocaleLowerCase())>-1}},hideNoData:Boolean,menuProps:{type:o.a.options.props.menuProps.type,default:function(){return x}},noFilter:Boolean,searchInput:{type:String}},data:function(){return{lazySearch:this.searchInput}},computed:{classes:function(){return h(h({},o.a.options.computed.classes.call(this)),{},{"v-autocomplete":!0,"v-autocomplete--is-selecting-index":this.selectedIndex>-1})},computedItems:function(){return this.filteredItems},selectedValues:function(){var t=this;return this.selectedItems.map((function(e){return t.getValue(e)}))},hasDisplayedItems:function(){var t=this;return this.hideSelected?this.filteredItems.some((function(e){return!t.hasItem(e)})):this.filteredItems.length>0},currentRange:function(){return null==this.selectedItem?0:String(this.getText(this.selectedItem)).length},filteredItems:function(){var t=this;return!this.isSearching||this.noFilter||null==this.internalSearch?this.allItems:this.allItems.filter((function(e){var n=Object(d.s)(e,t.itemText),text=null!=n?String(n):"";return t.filter(e,String(t.internalSearch),text)}))},internalSearch:{get:function(){return this.lazySearch},set:function(t){this.lazySearch!==t&&(this.lazySearch=t,this.$emit("update:search-input",t))}},isAnyValueAllowed:function(){return!1},isDirty:function(){return this.searchIsDirty||this.selectedItems.length>0},isSearching:function(){return this.multiple&&this.searchIsDirty||this.searchIsDirty&&this.internalSearch!==this.getText(this.selectedItem)},menuCanShow:function(){return!!this.isFocused&&(this.hasDisplayedItems||!this.hideNoData)},$_menuProps:function(){var t=o.a.options.computed.$_menuProps.call(this);return t.contentClass="v-autocomplete__content ".concat(t.contentClass||"").trim(),h(h({},x),t)},searchIsDirty:function(){return null!=this.internalSearch&&""!==this.internalSearch},selectedItem:function(){var t=this;return this.multiple?null:this.selectedItems.find((function(i){return t.valueComparator(t.getValue(i),t.getValue(t.internalValue))}))},listData:function(){var data=o.a.options.computed.listData.call(this);return data.props=h(h({},data.props),{},{items:this.virtualizedItems,noFilter:this.noFilter||!this.isSearching||!this.filteredItems.length,searchInput:this.internalSearch}),data}},watch:{filteredItems:"onFilteredItemsChanged",internalValue:"setSearch",isFocused:function(t){t?(document.addEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.select()):(document.removeEventListener("copy",this.onCopy),this.blur(),this.updateSelf())},isMenuActive:function(t){!t&&this.hasSlot&&(this.lazySearch=null)},items:function(t,e){e&&e.length||!this.hideNoData||!this.isFocused||this.isMenuActive||!t.length||this.activateMenu()},searchInput:function(t){this.lazySearch=t},internalSearch:"onInternalSearchChanged",itemText:"updateSelf"},created:function(){this.setSearch()},destroyed:function(){document.removeEventListener("copy",this.onCopy)},methods:{onFilteredItemsChanged:function(t,e){var n=this;if(t!==e){if(!this.autoSelectFirst){var r=e[this.$refs.menu.listIndex];r?this.setMenuIndex(t.findIndex((function(i){return i===r}))):this.setMenuIndex(-1),this.$emit("update:list-index",this.$refs.menu.listIndex)}this.$nextTick((function(){n.internalSearch&&(1===t.length||n.autoSelectFirst)&&(n.$refs.menu.getTiles(),n.autoSelectFirst&&t.length&&(n.setMenuIndex(0),n.$emit("update:list-index",n.$refs.menu.listIndex)))}))}},onInternalSearchChanged:function(){this.updateMenuDimensions()},updateMenuDimensions:function(){this.isMenuActive&&this.$refs.menu&&this.$refs.menu.updateDimensions()},changeSelectedIndex:function(t){this.searchIsDirty||(this.multiple&&t===d.z.left?-1===this.selectedIndex?this.selectedIndex=this.selectedItems.length-1:this.selectedIndex--:this.multiple&&t===d.z.right?this.selectedIndex>=this.selectedItems.length-1?this.selectedIndex=-1:this.selectedIndex++:t!==d.z.backspace&&t!==d.z.delete||this.deleteCurrentItem())},deleteCurrentItem:function(){var t=this.selectedIndex,e=this.selectedItems[t];if(this.isInteractive&&!this.getDisabled(e)){var n=this.selectedItems.length-1;if(-1!==this.selectedIndex||0===n){var r=t!==this.selectedItems.length-1?t:t-1;this.selectedItems[r]?this.selectItem(e):this.setValue(this.multiple?[]:null),this.selectedIndex=r}else this.selectedIndex=n}},clearableCallback:function(){this.internalSearch=null,o.a.options.methods.clearableCallback.call(this)},genInput:function(){var input=c.a.options.methods.genInput.call(this);return input.data=Object(l.a)(input.data,{attrs:{"aria-activedescendant":Object(d.q)(this.$refs.menu,"activeTile.id"),autocomplete:Object(d.q)(input.data,"attrs.autocomplete","off")},domProps:{value:this.internalSearch}}),input},genInputSlot:function(){var slot=o.a.options.methods.genInputSlot.call(this);return slot.data.attrs.role="combobox",slot},genSelections:function(){return this.hasSlot||this.multiple?o.a.options.methods.genSelections.call(this):[]},onClick:function(t){this.isInteractive&&(this.selectedIndex>-1?this.selectedIndex=-1:this.onFocus(),this.isAppendInner(t.target)||this.activateMenu())},onInput:function(t){if(!(this.selectedIndex>-1)&&t.target){var e=t.target,n=e.value;e.value&&this.activateMenu(),this.multiple||""!==n||this.deleteCurrentItem(),this.internalSearch=n,this.badInput=e.validity&&e.validity.badInput}},onKeyDown:function(t){var e=t.keyCode;!t.ctrlKey&&[d.z.home,d.z.end].includes(e)||o.a.options.methods.onKeyDown.call(this,t),this.changeSelectedIndex(e)},onSpaceDown:function(t){},onTabDown:function(t){o.a.options.methods.onTabDown.call(this,t),this.updateSelf()},onUpDown:function(t){t.preventDefault(),this.activateMenu()},selectItem:function(t){o.a.options.methods.selectItem.call(this,t),this.setSearch()},setSelectedItems:function(){o.a.options.methods.setSelectedItems.call(this),this.isFocused||this.setSearch()},setSearch:function(){var t=this;this.$nextTick((function(){t.multiple&&t.internalSearch&&t.isMenuActive||(t.internalSearch=!t.selectedItems.length||t.multiple||t.hasSlot?null:t.getText(t.selectedItem))}))},updateSelf:function(){(this.searchIsDirty||this.internalValue)&&(this.multiple||this.valueComparator(this.internalSearch,this.getValue(this.internalValue))||this.setSearch())},hasItem:function(t){return this.selectedValues.indexOf(this.getValue(t))>-1},onCopy:function(t){var e,n;if(-1!==this.selectedIndex){var r=this.selectedItems[this.selectedIndex],o=this.getText(r);null===(e=t.clipboardData)||void 0===e||e.setData("text/plain",o),null===(n=t.clipboardData)||void 0===n||n.setData("text/vnd.vuetify.autocomplete.item+plain",o),t.preventDefault()}}}})},821:function(t,e,n){var content=n(837);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(19).default)("6df03bc0",content,!0,{sourceMap:!1})},836:function(t,e,n){"use strict";n(821)},837:function(t,e,n){var r=n(18)(!1);r.push([t.i,':root{--primary:#810880;--secondary:#810880;--accent:#810880;--active:var(--primary);--error:#ff4081;--warning:#ffc260;--success:#3cd4a0;--clr-gradient:linear-gradient(to right top,#356d74,#2a505c,#21394a,#1a293d,#172035,#161d33,#161e34,#192539,#1e3143,#244251,#2d5862,#387378,#449492,#53b9b1,#63e2d2);--c:var(--clr);--font1:"Inter",sans-serif;--font2:"Inter",sans-serif;--fw:initial;--resizer:clamp(12px,1vw,16px);--resizer-mobile:clamp(10px,1.5vw,12px);--margin-global:9em;--parent:1600px;--subparent:1900px;--h-navbar:100px;--w-scroll:8px;--sombra-filter:drop-shadow(0px 4px 1px rgba(0,0,0,0.3));--sombra-card:0px 4px 4px rgba(0,0,0,0.25);--sombra-btn:0px 4px 4px rgba(0,0,0,0.25)}:root.light{--bg-ap:#f5f5f5;--clr:#000;--clr-hover:#270330;--clr-scroll:var(--primary);--clr-bg-scroll:var(--secondary);--clr-card:#fff;--clr-btn:var(--primary);--clr-text-btn:#000;--clr-badge:var(--primary);--clr-text-badge:#000;--clr-line:rgba(235,231,36,0.5)}:root.dark{--bg-ap:#000;--clr:#fff;--clr-hover:#f3cffc;--clr-scroll:var(--primary);--clr-bg-scroll:var(--secondary);--clr-card:#191919;--clr-btn:var(--primary);--clr-text-btn:#fff;--clr-badge:var(--primary);--clr-text-badge:#000;--clr-line:rgba(235,231,36,0.5)}@media(max-width:880px)and (fixed-width:){:root{--margin-global:clamp(1em,5vw,4em)}}@media(max-width:880px){:root{--margin-global:clamp(1em,5vw,4em)}}@media(max-width:880px)and (fixed-width:){:root{--h-navbar:80px}}@media(max-width:880px){:root{--h-navbar:80px}}.clr_primary{background-color:#810880!important;background-color:var(--primary)!important}.clr_secondary{background-color:#810880!important;background-color:var(--secondary)!important}.clr_accent{background-color:#810880!important;background-color:var(--accent)!important}.clr{color:var(--clr)!important}.clr_btn{background-color:var(--clr-btn)!important}.clr_btn_pressed{background-color:var(--clr-btn-pressed)!important}.clr_btn_inactive{background-color:var(--clr-btn-inactive)!important}.clr_text_btn{color:var(--clr-text-btn)!important}.clr_card{background-color:var(--clr-card)!important}.clr_svg{fill:var(--clr)!important}.flr{filter:invert(100%)!important}.flr_inv{filter:invert(0)!important}.clr-gradient{background:linear-gradient(to right top,#356d74,#2a505c,#21394a,#1a293d,#172035,#161d33,#161e34,#192539,#1e3143,#244251,#2d5862,#387378,#449492,#53b9b1,#63e2d2)!important;background:var(--clr-gradient)!important}.clr_card_2{background-color:var(--clr-card-2)!important}.section1-estado-cuenta{display:flex;flex-direction:column;max-width:1440px;width:100%;margin-bottom:50px;overflow-x:hidden;margin-right:0!important;margin-left:0;grid-gap:10px;gap:10px;padding-bottom:10px;padding-left:10px;padding-right:10px}.section1-estado-cuenta .datos-contribuyente-container{position:relative;width:100%;border-radius:10px;padding:120px 20px 20px 0;background-color:#fff;box-shadow:3px 3px 3px 3px rgba(0,0,0,.1)!important}.section1-estado-cuenta .datos-contribuyente-container .title-morado{background-color:#810880;background-color:var(--primary);position:absolute;top:0;width:100%;display:flex;justify-content:flex-start;align-items:center;height:50px;border-top-left-radius:10px;border-top-right-radius:10px;padding-left:20px}.section1-estado-cuenta .datos-contribuyente-container .title-morado .contribuyente-datos{--c:#fff;--fw:700;margin-bottom:0;font-size:22px}.section1-estado-cuenta .datos-contribuyente-container .datos-btns-contribuyente{display:flex;justify-content:space-evenly;align-items:center;flex-wrap:wrap;grid-gap:40px;gap:40px}@media(max-width:780px)and (fixed-width:){.section1-estado-cuenta .datos-contribuyente-container .datos-btns-contribuyente{justify-content:center}}@media(max-width:780px){.section1-estado-cuenta .datos-contribuyente-container .datos-btns-contribuyente{justify-content:center}}.section1-estado-cuenta .datos-contribuyente-container .datos-btns-contribuyente .title-description-div{display:flex;flex-direction:column;justify-content:center;align-content:center;grid-gap:20px;gap:20px;height:120px;min-width:300px;border-right:1px solid #810880;border-right:1px solid var(--primary)}@media(max-width:960px)and (fixed-width:){.section1-estado-cuenta .datos-contribuyente-container .datos-btns-contribuyente .title-description-div{min-width:200px}}@media(max-width:960px){.section1-estado-cuenta .datos-contribuyente-container .datos-btns-contribuyente .title-description-div{min-width:200px}}@media(max-width:780px)and (fixed-width:){.section1-estado-cuenta .datos-contribuyente-container .datos-btns-contribuyente .title-description-div{width:250px}}@media(max-width:780px){.section1-estado-cuenta .datos-contribuyente-container .datos-btns-contribuyente .title-description-div{width:250px}}.section1-estado-cuenta .datos-contribuyente-container .datos-btns-contribuyente .title-description-div .nombre-razon{--c:#707070;text-align:center;margin-bottom:0}.section1-estado-cuenta .datos-contribuyente-container .datos-btns-contribuyente .title-description-div .nombre-desc{--c:var(--primary);--fw:700;font-size:22px;text-align:center}.section1-estado-cuenta .datos-contribuyente-container .datos-btns-contribuyente .cards-estado-cuenta{background-color:#fff;box-shadow:3px 3px 3px 3px rgba(0,0,0,.1)!important;max-width:300px;width:100%;height:100px;min-width:300px;display:flex;flex-direction:column;justify-content:center;align-content:center}@media(max-width:780px)and (fixed-width:){.section1-estado-cuenta .datos-contribuyente-container .datos-btns-contribuyente .cards-estado-cuenta{width:250px}}@media(max-width:780px){.section1-estado-cuenta .datos-contribuyente-container .datos-btns-contribuyente .cards-estado-cuenta{width:250px}}.section1-estado-cuenta .datos-contribuyente-container .datos-btns-contribuyente .cards-estado-cuenta .title-card{text-align:center;--fw:400;margin-top:10px}.section1-estado-cuenta .datos-contribuyente-container .datos-btns-contribuyente .cards-estado-cuenta .icon-card{color:#810880;color:var(--primary)}.section1-estado-cuenta .flujo-container{width:100%;border-radius:10px;display:flex;flex-direction:column;justify-content:center;align-items:center;grid-gap:8px;gap:8px;padding:10px 10px 30px;background-color:#fff;box-shadow:3px 3px 3px 3px rgba(0,0,0,.1)!important;margin-bottom:20px;overflow-x:hidden}.section1-estado-cuenta .flujo-container .title-inscripcion-inmueble{--c:var(--primary);--fw:700;font-size:22px;margin-bottom:4px;align-self:flex-start}.section1-estado-cuenta .flujo-container hr{border:1px solid rgba(0,0,0,.1);width:130%;margin-left:-20px}.section1-estado-cuenta .flujo-container .autocomplete-flujo{width:100%;box-shadow:3px 3px 3px 3px rgba(0,0,0,.1)!important;border-radius:10px;border:1px solid #810880;border:1px solid var(--primary);padding-left:10px;padding-right:10px;height:65px}.section1-estado-cuenta .inmuebles-asociados-container{display:flex;flex-direction:column;padding:20px;border-radius:10px;box-shadow:3px 3px 3px 3px rgba(0,0,0,.1)!important;width:100%;overflow-x:hidden;margin-top:30px;background-color:#fff}.section1-estado-cuenta .inmuebles-asociados-container .title-inmuebles-asociados{--c:var(--primary);--fw:500;font-size:22px}.section1-estado-cuenta .inmuebles-asociados-container hr{border:1px solid rgba(129,8,128,.5);width:130%;margin-left:-20px;margin-top:20px;margin-bottom:20px}.section1-estado-cuenta .inmuebles-asociados-container .dataInmuebles-container{width:100%;align-items:center;justify-content:center;grid-gap:20px;gap:20px;border-bottom:1px solid hsla(0,0%,43.9%,.4);padding-bottom:20px;padding-top:20px}@media(max-width:630px)and (fixed-width:){.section1-estado-cuenta .inmuebles-asociados-container .dataInmuebles-container{flex-direction:column;justify-content:center}}@media(max-width:630px){.section1-estado-cuenta .inmuebles-asociados-container .dataInmuebles-container{flex-direction:column;justify-content:center}}@media(max-width:700px)and (fixed-width:){.section1-estado-cuenta .inmuebles-asociados-container .dataInmuebles-container .mobile-input{width:250px;max-width:250px}}@media(max-width:700px){.section1-estado-cuenta .inmuebles-asociados-container .dataInmuebles-container .mobile-input{width:250px;max-width:250px}}.section1-estado-cuenta .inmuebles-asociados-container .dataInmuebles-container .inputs-container{width:90%;display:flex;flex-wrap:wrap;grid-gap:10px;gap:10px}@media(max-width:630px)and (fixed-width:){.section1-estado-cuenta .inmuebles-asociados-container .dataInmuebles-container .inputs-container{justify-content:center}}@media(max-width:630px){.section1-estado-cuenta .inmuebles-asociados-container .dataInmuebles-container .inputs-container{justify-content:center}}.section1-estado-cuenta .inmuebles-asociados-container .dataInmuebles-container .inputs-container .small-input{border-radius:10px;box-shadow:3px 3px 3px 3px rgba(0,0,0,.1)!important;width:150px;padding-left:10px;padding-right:10px;padding-top:20px;border:1px solid #810880;border:1px solid var(--primary)}.section1-estado-cuenta .inmuebles-asociados-container .dataInmuebles-container .inputs-container .medio-input{border-radius:10px;box-shadow:3px 3px 3px 3px rgba(0,0,0,.1)!important;width:220px;padding-left:10px;padding-right:10px;padding-top:20px;border:1px solid #810880;border:1px solid var(--primary)}.section1-estado-cuenta .inmuebles-asociados-container .dataInmuebles-container .inputs-container .big-input{border-radius:10px;box-shadow:3px 3px 3px 3px rgba(0,0,0,.1)!important;width:300px;padding-left:10px;padding-right:10px;padding-top:20px;border:1px solid #810880;border:1px solid var(--primary)}.section1-estado-cuenta .inmuebles-asociados-container .dataInmuebles-container .btn-swap{background-color:#810880;background-color:var(--primary);border-radius:10px;max-width:70px;width:70px;height:60px;min-height:60px}.section1-estado-cuenta .inmuebles-asociados-container .dataInmuebles-container .btn-swap .v-icon{--c:#fff;font-size:36px}.v-input__slot:before{border-color:#fff!important}.v-text-field>.v-input__control>.v-input__slot:after,.v-text-field>.v-input__control>.v-input__slot:before{width:0}',""]),t.exports=r}}]);