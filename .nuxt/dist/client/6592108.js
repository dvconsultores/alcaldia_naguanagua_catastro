(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{665:function(t,e,n){var content=n(666);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(18).default)("50788f08",content,!0,{sourceMap:!1})},666:function(t,e,n){var o=n(17)(!1);o.push([t.i,':root{--primary:#810880;--secondary:#000;--accent:#b07200;--active:var(--primary);--error:#ff4081;--warning:#ffc260;--success:#3cd4a0;--clr-gradient:linear-gradient(to right top,#356d74,#2a505c,#21394a,#1a293d,#172035,#161d33,#161e34,#192539,#1e3143,#244251,#2d5862,#387378,#449492,#53b9b1,#63e2d2);--c:var(--clr);--font1:"Inter",sans-serif;--font2:"Inter",sans-serif;--fw:initial;--resizer:clamp(12px,1vw,16px);--resizer-mobile:clamp(10px,1.5vw,12px);--margin-global:9em;--parent:1600px;--subparent:1900px;--h-navbar:100px;--w-scroll:8px;--sombra-filter:drop-shadow(0px 4px 1px rgba(0,0,0,0.3));--sombra-card:0px 4px 4px rgba(0,0,0,0.25);--sombra-btn:0px 4px 4px rgba(0,0,0,0.25)}:root.light{--bg-ap:#f5f5f5;--clr:#000;--clr-hover:#270330;--clr-scroll:var(--primary);--clr-bg-scroll:var(--secondary);--clr-card:#fff;--clr-btn:var(--primary);--clr-text-btn:#000;--clr-badge:var(--primary);--clr-text-badge:#000;--clr-line:rgba(235,231,36,0.5)}:root.dark{--bg-ap:#000;--clr:#fff;--clr-hover:#f3cffc;--clr-scroll:var(--primary);--clr-bg-scroll:var(--secondary);--clr-card:#191919;--clr-btn:var(--primary);--clr-text-btn:#fff;--clr-badge:var(--primary);--clr-text-badge:#000;--clr-line:rgba(235,231,36,0.5)}@media(max-width:880px)and (fixed-width:){:root{--margin-global:clamp(1em,5vw,4em)}}@media(max-width:880px){:root{--margin-global:clamp(1em,5vw,4em)}}@media(max-width:880px)and (fixed-width:){:root{--h-navbar:80px}}@media(max-width:880px){:root{--h-navbar:80px}}.clr_primary{background-color:#810880!important;background-color:var(--primary)!important}.clr_secondary{background-color:#000!important;background-color:var(--secondary)!important}.clr_accent{background-color:#b07200!important;background-color:var(--accent)!important}.clr{color:var(--clr)!important}.clr_btn{background-color:var(--clr-btn)!important}.clr_btn_pressed{background-color:var(--clr-btn-pressed)!important}.clr_btn_inactive{background-color:var(--clr-btn-inactive)!important}.clr_text_btn{color:var(--clr-text-btn)!important}.clr_card{background-color:var(--clr-card)!important}.clr_svg{fill:var(--clr)!important}.flr{filter:invert(100%)!important}.flr_inv{filter:invert(0)!important}.clr-gradient{background:linear-gradient(to right top,#356d74,#2a505c,#21394a,#1a293d,#172035,#161d33,#161e34,#192539,#1e3143,#244251,#2d5862,#387378,#449492,#53b9b1,#63e2d2)!important;background:var(--clr-gradient)!important}.clr_card_2{background-color:var(--clr-card-2)!important}.v-autocomplete.v-input>.v-input__control>.v-input__slot{cursor:text}.v-autocomplete input{align-self:center}.v-autocomplete.v-select.v-input--is-focused input{min-width:64px}.v-autocomplete:not(.v-input--is-focused).v-select--chips input{max-height:0;padding:0}.v-autocomplete--is-selecting-index input{opacity:0}.v-autocomplete.v-text-field--enclosed:not(.v-text-field--solo):not(.v-text-field--single-line):not(.v-text-field--outlined) .v-select__slot>input{margin-top:24px}.v-autocomplete.v-text-field--enclosed:not(.v-text-field--solo):not(.v-text-field--single-line):not(.v-text-field--outlined).v-input--dense .v-select__slot>input{margin-top:20px}.v-autocomplete__content.v-menu__content,.v-autocomplete__content.v-menu__content .v-card{border-radius:0}',""]),t.exports=o},671:function(t,e,n){"use strict";n(7),n(8),n(19),n(10),n(20);var o=n(2),r=(n(62),n(4),n(12),n(76),n(67),n(273),n(32),n(46),n(665),n(670)),c=n(668),l=n(72),d=n(0);function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var h=f(f({},r.b),{},{offsetY:!0,offsetOverflow:!0,transition:!1});e.a=r.a.extend({name:"v-autocomplete",props:{allowOverflow:{type:Boolean,default:!0},autoSelectFirst:{type:Boolean,default:!1},filter:{type:Function,default:function(t,e,n){return n.toLocaleLowerCase().indexOf(e.toLocaleLowerCase())>-1}},hideNoData:Boolean,menuProps:{type:r.a.options.props.menuProps.type,default:function(){return h}},noFilter:Boolean,searchInput:{type:String}},data:function(){return{lazySearch:this.searchInput}},computed:{classes:function(){return f(f({},r.a.options.computed.classes.call(this)),{},{"v-autocomplete":!0,"v-autocomplete--is-selecting-index":this.selectedIndex>-1})},computedItems:function(){return this.filteredItems},selectedValues:function(){var t=this;return this.selectedItems.map((function(e){return t.getValue(e)}))},hasDisplayedItems:function(){var t=this;return this.hideSelected?this.filteredItems.some((function(e){return!t.hasItem(e)})):this.filteredItems.length>0},currentRange:function(){return null==this.selectedItem?0:String(this.getText(this.selectedItem)).length},filteredItems:function(){var t=this;return!this.isSearching||this.noFilter||null==this.internalSearch?this.allItems:this.allItems.filter((function(e){var n=Object(d.o)(e,t.itemText),text=null!=n?String(n):"";return t.filter(e,String(t.internalSearch),text)}))},internalSearch:{get:function(){return this.lazySearch},set:function(t){this.lazySearch!==t&&(this.lazySearch=t,this.$emit("update:search-input",t))}},isAnyValueAllowed:function(){return!1},isDirty:function(){return this.searchIsDirty||this.selectedItems.length>0},isSearching:function(){return this.multiple&&this.searchIsDirty||this.searchIsDirty&&this.internalSearch!==this.getText(this.selectedItem)},menuCanShow:function(){return!!this.isFocused&&(this.hasDisplayedItems||!this.hideNoData)},$_menuProps:function(){var t=r.a.options.computed.$_menuProps.call(this);return t.contentClass="v-autocomplete__content ".concat(t.contentClass||"").trim(),f(f({},h),t)},searchIsDirty:function(){return null!=this.internalSearch&&""!==this.internalSearch},selectedItem:function(){var t=this;return this.multiple?null:this.selectedItems.find((function(i){return t.valueComparator(t.getValue(i),t.getValue(t.internalValue))}))},listData:function(){var data=r.a.options.computed.listData.call(this);return data.props=f(f({},data.props),{},{items:this.virtualizedItems,noFilter:this.noFilter||!this.isSearching||!this.filteredItems.length,searchInput:this.internalSearch}),data}},watch:{filteredItems:"onFilteredItemsChanged",internalValue:"setSearch",isFocused:function(t){t?(document.addEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.select()):(document.removeEventListener("copy",this.onCopy),this.blur(),this.updateSelf())},isMenuActive:function(t){!t&&this.hasSlot&&(this.lazySearch=null)},items:function(t,e){e&&e.length||!this.hideNoData||!this.isFocused||this.isMenuActive||!t.length||this.activateMenu()},searchInput:function(t){this.lazySearch=t},internalSearch:"onInternalSearchChanged",itemText:"updateSelf"},created:function(){this.setSearch()},destroyed:function(){document.removeEventListener("copy",this.onCopy)},methods:{onFilteredItemsChanged:function(t,e){var n=this;if(t!==e){if(!this.autoSelectFirst){var o=e[this.$refs.menu.listIndex];o?this.setMenuIndex(t.findIndex((function(i){return i===o}))):this.setMenuIndex(-1),this.$emit("update:list-index",this.$refs.menu.listIndex)}this.$nextTick((function(){n.internalSearch&&(1===t.length||n.autoSelectFirst)&&(n.$refs.menu.getTiles(),n.autoSelectFirst&&t.length&&(n.setMenuIndex(0),n.$emit("update:list-index",n.$refs.menu.listIndex)))}))}},onInternalSearchChanged:function(){this.updateMenuDimensions()},updateMenuDimensions:function(){this.isMenuActive&&this.$refs.menu&&this.$refs.menu.updateDimensions()},changeSelectedIndex:function(t){this.searchIsDirty||(this.multiple&&t===d.u.left?-1===this.selectedIndex?this.selectedIndex=this.selectedItems.length-1:this.selectedIndex--:this.multiple&&t===d.u.right?this.selectedIndex>=this.selectedItems.length-1?this.selectedIndex=-1:this.selectedIndex++:t!==d.u.backspace&&t!==d.u.delete||this.deleteCurrentItem())},deleteCurrentItem:function(){var t=this.selectedIndex,e=this.selectedItems[t];if(this.isInteractive&&!this.getDisabled(e)){var n=this.selectedItems.length-1;if(-1!==this.selectedIndex||0===n){var o=t!==this.selectedItems.length-1?t:t-1;this.selectedItems[o]?this.selectItem(e):this.setValue(this.multiple?[]:null),this.selectedIndex=o}else this.selectedIndex=n}},clearableCallback:function(){this.internalSearch=null,r.a.options.methods.clearableCallback.call(this)},genInput:function(){var input=c.a.options.methods.genInput.call(this);return input.data=Object(l.a)(input.data,{attrs:{"aria-activedescendant":Object(d.n)(this.$refs.menu,"activeTile.id"),autocomplete:Object(d.n)(input.data,"attrs.autocomplete","off")},domProps:{value:this.internalSearch}}),input},genInputSlot:function(){var slot=r.a.options.methods.genInputSlot.call(this);return slot.data.attrs.role="combobox",slot},genSelections:function(){return this.hasSlot||this.multiple?r.a.options.methods.genSelections.call(this):[]},onClick:function(t){this.isInteractive&&(this.selectedIndex>-1?this.selectedIndex=-1:this.onFocus(),this.isAppendInner(t.target)||this.activateMenu())},onInput:function(t){if(!(this.selectedIndex>-1)&&t.target){var e=t.target,n=e.value;e.value&&this.activateMenu(),this.multiple||""!==n||this.deleteCurrentItem(),this.internalSearch=n,this.badInput=e.validity&&e.validity.badInput}},onKeyDown:function(t){var e=t.keyCode;!t.ctrlKey&&[d.u.home,d.u.end].includes(e)||r.a.options.methods.onKeyDown.call(this,t),this.changeSelectedIndex(e)},onSpaceDown:function(t){},onTabDown:function(t){r.a.options.methods.onTabDown.call(this,t),this.updateSelf()},onUpDown:function(t){t.preventDefault(),this.activateMenu()},selectItem:function(t){r.a.options.methods.selectItem.call(this,t),this.setSearch()},setSelectedItems:function(){r.a.options.methods.setSelectedItems.call(this),this.isFocused||this.setSearch()},setSearch:function(){var t=this;this.$nextTick((function(){t.multiple&&t.internalSearch&&t.isMenuActive||(t.internalSearch=!t.selectedItems.length||t.multiple||t.hasSlot?null:t.getText(t.selectedItem))}))},updateSelf:function(){(this.searchIsDirty||this.internalValue)&&(this.multiple||this.valueComparator(this.internalSearch,this.getValue(this.internalValue))||this.setSearch())},hasItem:function(t){return this.selectedValues.indexOf(this.getValue(t))>-1},onCopy:function(t){var e,n;if(-1!==this.selectedIndex){var o=this.selectedItems[this.selectedIndex],r=this.getText(o);null===(e=t.clipboardData)||void 0===e||e.setData("text/plain",r),null===(n=t.clipboardData)||void 0===n||n.setData("text/vnd.vuetify.autocomplete.item+plain",r),t.preventDefault()}}}})},709:function(t,e,n){var content=n(775);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(18).default)("4ea06c1c",content,!0,{sourceMap:!1})},774:function(t,e,n){"use strict";n(709)},775:function(t,e,n){var o=n(17)(!1);o.push([t.i,':root{--primary:#810880;--secondary:#000;--accent:#b07200;--active:var(--primary);--error:#ff4081;--warning:#ffc260;--success:#3cd4a0;--clr-gradient:linear-gradient(to right top,#356d74,#2a505c,#21394a,#1a293d,#172035,#161d33,#161e34,#192539,#1e3143,#244251,#2d5862,#387378,#449492,#53b9b1,#63e2d2);--c:var(--clr);--font1:"Inter",sans-serif;--font2:"Inter",sans-serif;--fw:initial;--resizer:clamp(12px,1vw,16px);--resizer-mobile:clamp(10px,1.5vw,12px);--margin-global:9em;--parent:1600px;--subparent:1900px;--h-navbar:100px;--w-scroll:8px;--sombra-filter:drop-shadow(0px 4px 1px rgba(0,0,0,0.3));--sombra-card:0px 4px 4px rgba(0,0,0,0.25);--sombra-btn:0px 4px 4px rgba(0,0,0,0.25)}:root.light{--bg-ap:#f5f5f5;--clr:#000;--clr-hover:#270330;--clr-scroll:var(--primary);--clr-bg-scroll:var(--secondary);--clr-card:#fff;--clr-btn:var(--primary);--clr-text-btn:#000;--clr-badge:var(--primary);--clr-text-badge:#000;--clr-line:rgba(235,231,36,0.5)}:root.dark{--bg-ap:#000;--clr:#fff;--clr-hover:#f3cffc;--clr-scroll:var(--primary);--clr-bg-scroll:var(--secondary);--clr-card:#191919;--clr-btn:var(--primary);--clr-text-btn:#fff;--clr-badge:var(--primary);--clr-text-badge:#000;--clr-line:rgba(235,231,36,0.5)}@media(max-width:880px)and (fixed-width:){:root{--margin-global:clamp(1em,5vw,4em)}}@media(max-width:880px){:root{--margin-global:clamp(1em,5vw,4em)}}@media(max-width:880px)and (fixed-width:){:root{--h-navbar:80px}}@media(max-width:880px){:root{--h-navbar:80px}}.clr_primary{background-color:#810880!important;background-color:var(--primary)!important}.clr_secondary{background-color:#000!important;background-color:var(--secondary)!important}.clr_accent{background-color:#b07200!important;background-color:var(--accent)!important}.clr{color:var(--clr)!important}.clr_btn{background-color:var(--clr-btn)!important}.clr_btn_pressed{background-color:var(--clr-btn-pressed)!important}.clr_btn_inactive{background-color:var(--clr-btn-inactive)!important}.clr_text_btn{color:var(--clr-text-btn)!important}.clr_card{background-color:var(--clr-card)!important}.clr_svg{fill:var(--clr)!important}.flr{filter:invert(100%)!important}.flr_inv{filter:invert(0)!important}.clr-gradient{background:linear-gradient(to right top,#356d74,#2a505c,#21394a,#1a293d,#172035,#161d33,#161e34,#192539,#1e3143,#244251,#2d5862,#387378,#449492,#53b9b1,#63e2d2)!important;background:var(--clr-gradient)!important}.clr_card_2{background-color:var(--clr-card-2)!important}.section1-edificio{max-width:1440px;margin-right:0!important;margin-left:0;grid-gap:10px;gap:10px;padding-bottom:10px;padding-left:10px;padding-right:10px}.section1-edificio,.section1-edificio .edificio-container{display:flex;flex-direction:column;width:100%;overflow-x:hidden}.section1-edificio .edificio-container{background-color:#fff;justify-content:center;align-items:center;padding:20px;border-radius:10px;grid-gap:20px;gap:20px;box-shadow:3px 3px 3px 3px rgba(0,0,0,.1)!important;margin-bottom:30px}.section1-edificio .edificio-container .title-edificio{--c:var(--primary);--fw:500;font-size:22px}.section1-edificio .edificio-container hr{border:1px solid rgba(0,0,0,.1);width:130%;margin-left:-20px}.section1-edificio .edificio-container .textfield-search-container{max-width:100%;display:flex;flex-direction:row;justify-content:center;align-items:center;grid-gap:20px;gap:20px;flex-wrap:wrap}.section1-edificio .edificio-container .textfield-search-container .inputs-consulta{border-radius:10px;padding-left:10px;padding-right:10px;max-height:66px;box-shadow:3px 3px 3px 3px rgba(0,0,0,.1)!important;max-width:300px}@media(max-width:669px)and (fixed-width:){.section1-edificio .edificio-container .textfield-search-container .inputs-consulta{min-width:250px;max-width:250px}}@media(max-width:669px){.section1-edificio .edificio-container .textfield-search-container .inputs-consulta{min-width:250px;max-width:250px}}.section1-edificio .edificio-container .textfield-search-container .inputs-small{border-radius:10px;padding-left:10px;padding-right:10px;max-height:66px;box-shadow:3px 3px 3px 3px rgba(0,0,0,.1)!important;max-width:150px}@media(max-width:669px)and (fixed-width:){.section1-edificio .edificio-container .textfield-search-container .inputs-small{min-width:250px;max-width:250px}}@media(max-width:669px){.section1-edificio .edificio-container .textfield-search-container .inputs-small{min-width:250px;max-width:250px}}.section1-edificio .edificio-container .textfield-search-container .autocomplete-medium:active,.section1-edificio .edificio-container .textfield-search-container .autocomplete-medium[focus-within],.section1-edificio .edificio-container .textfield-search-container .autocomplete-small:active,.section1-edificio .edificio-container .textfield-search-container .autocomplete-small[focus-within],.section1-edificio .edificio-container .textfield-search-container .inputs-consulta:active,.section1-edificio .edificio-container .textfield-search-container .inputs-consulta[focus-within],.section1-edificio .edificio-container .textfield-search-container .inputs-small:active,.section1-edificio .edificio-container .textfield-search-container .inputs-small[focus-within]{border:1px solid #810880!important;border:1px solid var(--primary)!important}.section1-edificio .edificio-container .textfield-search-container .autocomplete-medium:active,.section1-edificio .edificio-container .textfield-search-container .autocomplete-medium:focus-within,.section1-edificio .edificio-container .textfield-search-container .autocomplete-small:active,.section1-edificio .edificio-container .textfield-search-container .autocomplete-small:focus-within,.section1-edificio .edificio-container .textfield-search-container .inputs-consulta:active,.section1-edificio .edificio-container .textfield-search-container .inputs-consulta:focus-within,.section1-edificio .edificio-container .textfield-search-container .inputs-small:active,.section1-edificio .edificio-container .textfield-search-container .inputs-small:focus-within{border:1px solid #810880!important;border:1px solid var(--primary)!important}.section1-edificio .edificio-container .textfield-search-container .autocomplete-medium{border-radius:10px;padding-left:10px;padding-right:10px;max-height:66px;box-shadow:3px 3px 3px 3px rgba(0,0,0,.1)!important;max-width:250px}@media(max-width:669px)and (fixed-width:){.section1-edificio .edificio-container .textfield-search-container .autocomplete-medium{min-width:250px;max-width:250px}}@media(max-width:669px){.section1-edificio .edificio-container .textfield-search-container .autocomplete-medium{min-width:250px;max-width:250px}}.section1-edificio .edificio-container .textfield-search-container .autocomplete-small{border-radius:10px;padding-left:10px;padding-right:10px;max-height:66px;box-shadow:3px 3px 3px 3px rgba(0,0,0,.1)!important;max-width:150px}@media(max-width:669px)and (fixed-width:){.section1-edificio .edificio-container .textfield-search-container .autocomplete-small{min-width:250px;max-width:250px}}@media(max-width:669px){.section1-edificio .edificio-container .textfield-search-container .autocomplete-small{min-width:250px;max-width:250px}}.section1-edificio .edificio-container .textfield-search-container .btn-buscar{background-color:#810880;background-color:var(--primary);min-height:55px;height:55px;border-radius:.5em;box-shadow:3px 3px 3px rgba(0,0,0,.3)!important;width:250px;border-radius:50px}@media(max-width:669px)and (fixed-width:){.section1-edificio .edificio-container .textfield-search-container .btn-buscar{min-width:250px}}@media(max-width:669px){.section1-edificio .edificio-container .textfield-search-container .btn-buscar{min-width:250px}}.section1-edificio .edificio-container .textfield-search-container .btn-buscar span{--c:#fff;font-weight:700!important}.section2-edificio{display:flex;flex-direction:column;max-width:1440px;width:100%;overflow-x:hidden;margin-right:0!important;margin-left:0;grid-gap:10px;gap:10px;padding-bottom:10px;padding-left:10px;padding-right:10px}.section2-edificio .datos-edificio-container{position:relative;width:100%;border-radius:10px;padding:120px 20px 20px 0;background-color:#fff;box-shadow:3px 3px 3px 3px rgba(0,0,0,.1)!important;display:grid;justify-items:center;overflow-x:hidden;margin-bottom:30px}.section2-edificio .datos-edificio-container .title-morado{background-color:#810880;background-color:var(--primary);position:absolute;top:0;width:100%;display:flex;justify-content:space-between;align-items:center;height:100px;border-top-left-radius:10px;border-top-right-radius:10px;padding-left:20px;padding-right:20px}.section2-edificio .datos-edificio-container .title-morado .datos-edificio-title{--c:#fff;--fw:700;margin-bottom:0;font-size:22px}.section2-edificio .datos-edificio-container .edificio-inputs-container{width:100%;display:flex;align-items:center;grid-gap:20px;gap:20px;padding-left:10px;padding-right:10px;margin-bottom:20px;flex-wrap:wrap;justify-content:center;padding-bottom:20px;border-bottom:1px solid #810880;border-bottom:1px solid var(--primary)}@media(max-width:650px)and (fixed-width:){.section2-edificio .datos-edificio-container .edificio-inputs-container{justify-content:center}}@media(max-width:650px){.section2-edificio .datos-edificio-container .edificio-inputs-container{justify-content:center}}.section2-edificio .datos-edificio-container .edificio-inputs-container .small-input{max-width:150px;min-width:130px}.section2-edificio .datos-edificio-container .edificio-inputs-container .big-input,.section2-edificio .datos-edificio-container .edificio-inputs-container .small-input{box-shadow:3px 3px 3px 3px rgba(0,0,0,.1)!important;border-radius:10px;border:1px solid #810880;border:1px solid var(--primary);padding-left:10px;padding-right:10px;height:65px}.section2-edificio .datos-edificio-container .edificio-inputs-container .big-input{max-width:275px;min-width:150px}.section2-edificio .datos-edificio-container .edificio-inputs-container .btns-add-remove{background-color:#fff;box-shadow:3px 3px 3px 3px rgba(0,0,0,.1)!important;min-height:65px;height:65px;border-radius:10px;--c:var(--primary)!important;font-size:40px!important}.v-input__slot:before{border-color:#fff!important}.v-text-field>.v-input__control>.v-input__slot:after,.v-text-field>.v-input__control>.v-input__slot:before{width:0}',""]),t.exports=o},863:function(t,e,n){"use strict";n.r(e);var o=n(671),r=n(646),c=n(259),l=n(668),d=(n(106),{name:"EdificioPage",mixins:[n(272).a],data:function(){return{newItem:{ambito:null,sector:null,urb_barrio:null,conj_residencial:null,edificio:""},editingIndex:null,datosEdificios:[{ambito:"U448",sector:"158",urb_barrio:"Otro 1",conj_residencial:"Conjunto Residencial Valle Claro",edificio:"A"},{ambito:"U448",sector:"158",urb_barrio:"Otro 1",conj_residencial:"Conjunto Residencial Valle Claro",edificio:"A"},{ambito:"U448",sector:"158",urb_barrio:"Otro 1",conj_residencial:"Conjunto Residencial Valle Claro",edificio:"A"},{ambito:"U448",sector:"158",urb_barrio:"Otro 1",conj_residencial:"Conjunto Residencial Valle Claro",edificio:"A"},{ambito:"U448",sector:"158",urb_barrio:"Otro 1",conj_residencial:"Conjunto Residencial Valle Claro",edificio:"A"}]}},head:function(){return{title:"Edificio"}},methods:{removeDiv:function(t){this.datosEdificios.splice(t,1)},saveChanges:function(){this.editingIndex=null},addItem:function(){var t={ambito:this.newItem.ambito,sector:this.newItem.sector,urb_barrio:this.newItem.urb_barrio,conj_residencial:this.newItem.conj_residencial,edificio:this.newItem.edificio};this.datosEdificios.push(t),this.newItem.ambito=null,this.newItem.sector=null,this.newItem.urb_barrio=null,this.newItem.conj_residencial=null,this.newItem.edificio=""}}}),m=(n(774),n(25)),component=Object(m.a)(d,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"center no-padding divcol",staticStyle:{"margin-bottom":"20px","padding-left":"256px"}},[e("section",{staticClass:"section1-edificio"},[e("div",{staticClass:"edificio-container"},[e("p",{staticClass:"title-edificio"},[t._v("\n        Agregar nuevo Edificio o Centro Comercial\n      ")]),t._v(" "),e("hr"),t._v(" "),e("div",{staticClass:"textfield-search-container"},[e(o.a,{staticClass:"autocomplete-small",attrs:{label:"Ambito*",items:t.items_ambito},model:{value:t.newItem.ambito,callback:function(e){t.$set(t.newItem,"ambito",e)},expression:"newItem.ambito"}}),t._v(" "),e(o.a,{staticClass:"autocomplete-small",attrs:{label:"Sector*"},model:{value:t.newItem.sector,callback:function(e){t.$set(t.newItem,"sector",e)},expression:"newItem.sector"}}),t._v(" "),e(o.a,{staticClass:"autocomplete-medium",attrs:{label:"Urbanización/Barrio*"},model:{value:t.newItem.urb_barrio,callback:function(e){t.$set(t.newItem,"urb_barrio",e)},expression:"newItem.urb_barrio"}}),t._v(" "),e(o.a,{staticClass:"autocomplete-medium",attrs:{label:"Conjunto Residencial*"},model:{value:t.newItem.conj_residencial,callback:function(e){t.$set(t.newItem,"conj_residencial",e)},expression:"newItem.conj_residencial"}}),t._v(" "),e(l.a,{staticClass:"inputs-small",attrs:{label:"Edificio*"},model:{value:t.newItem.edificio,callback:function(e){t.$set(t.newItem,"edificio",e)},expression:"newItem.edificio"}}),t._v(" "),e(r.a,{staticClass:"btn-buscar",on:{click:t.addItem}},[t._v("\n          Agregar\n        ")])],1)])]),t._v(" "),e("section",{staticClass:"section2-edificio"},[e("div",{staticClass:"datos-edificio-container"},[t._m(0),t._v(" "),t._l(t.datosEdificios,(function(n,o){return e("div",{key:o,staticClass:"edificio-inputs-container"},[e(l.a,{staticClass:"small-input mobile-inputs",attrs:{label:"Ambito",disabled:t.editingIndex!==o},model:{value:n.ambito,callback:function(e){t.$set(n,"ambito",e)},expression:"item.ambito"}}),t._v(" "),e(l.a,{staticClass:"small-input mobile-inputs",attrs:{label:"Sector",disabled:t.editingIndex!==o},model:{value:n.sector,callback:function(e){t.$set(n,"sector",e)},expression:"item.sector"}}),t._v(" "),e(l.a,{staticClass:"big-input mobile-inputs",attrs:{label:"Urbanización/Barrio",disabled:t.editingIndex!==o},model:{value:n.urb_barrio,callback:function(e){t.$set(n,"urb_barrio",e)},expression:"item.urb_barrio"}}),t._v(" "),e(l.a,{staticClass:"big-input mobile-inputs",attrs:{label:"Conjunto Residencial",disabled:t.editingIndex!==o},model:{value:n.conj_residencial,callback:function(e){t.$set(n,"conj_residencial",e)},expression:"item.conj_residencial"}}),t._v(" "),e(l.a,{staticClass:"big-input mobile-inputs",attrs:{label:"Edficio",disabled:t.editingIndex!==o},model:{value:n.edificio,callback:function(e){t.$set(n,"edificio",e)},expression:"item.edificio"}}),t._v(" "),e(r.a,{staticClass:"btns-add-remove",on:{click:function(e){return t.removeDiv(o)}}},[e(c.a,[t._v("mdi-delete")])],1),t._v(" "),t.editingIndex!==o?e(r.a,{staticClass:"btns-add-remove",on:{click:function(e){t.editingIndex=o}}},[e(c.a,[t._v("mdi-pencil")])],1):t._e(),t._v(" "),t.editingIndex===o?e(r.a,{staticClass:"btns-add-remove",on:{click:t.saveChanges}},[e(c.a,[t._v("mdi-content-save")])],1):t._e()],1)}))],2)])])}),[function(){var t=this._self._c;return t("div",{staticClass:"title-morado"},[t("p",{staticClass:"datos-edificio-title"},[this._v("\n          Edificio o Centros Comerciales\n        ")])])}],!1,null,null,null);e.default=component.exports}}]);