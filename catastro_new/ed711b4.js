(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{1213:function(t,r,n){"use strict";n.r(r);var o=n(634),e=n(264),c=n(195),d=n.n(c),l=n(282),x={name:"AdminPage",components:{apexchart:d.a},mixins:[l.a],data:function(){return{seriesPie:[44,55,13,43,22],chartOptionsPie:{chart:{width:380,type:"pie"},labels:["Team A","Team B","Team C","Team D","Team E"],colors:["#008FFB","#00E396","#FEB019","#FF4560","#775DD0"],responsive:[{breakpoint:480,options:{chart:{width:200},legend:{position:"bottom"}}}],plotOptions:{pie:{customScale:1.1}}},chartOptions:{chart:{zoom:{enabled:!1},toolbar:{show:!1}},dataLabels:{enabled:!1},stroke:{curve:"smooth"},colors:["#810880"],xaxis:{labels:{categories:["01 Jan","02 Jan","03 Jan","04 Jan","05 Jan","06 Jan","07 Jan","08 Jan","09 Jan","10 Jan","11 Jan","12 Jan"]}},yaxis:{labels:{show:!1}},grid:{show:!1}},chartSeries:[{name:"Series 1",data:[30,40,45,50,20,49,87,67,100]}],chartOptions2:{chart:{zoom:{enabled:!1},toolbar:{show:!1}},dataLabels:{enabled:!1},stroke:{curve:"smooth"},colors:["#fff"],xaxis:{labels:{show:!1}},yaxis:{labels:{show:!1}},grid:{show:!1}},chartSeries2:[{name:"Series 1",data:[30,40,45,50,20,49,87,67,100]}],chartOptions3:{chart:{zoom:{enabled:!1},toolbar:{show:!1}},dataLabels:{enabled:!1},stroke:{curve:"smooth"},colors:["#fff"],xaxis:{labels:{show:!1}},yaxis:{labels:{show:!1}},grid:{show:!1}},chartSeries3:[{name:"Series 1",data:[30,40,45,50,20,49,87,67,100]}],items:["V","J","G","E"],dashboardCard:[{title:"Contribuyentes nuevos del mes",number:"198",percent:"1.98%",chartSeries:[{name:"Series 1",data:[310,401,145,501,210,419,817,167,1010]}]},{title:"Desincorporaciones del mes",number:"169",percent:"-1.8%",chartSeries:[{name:"Series 1",data:[30,40,45,50,20,49,87,67,100]}]},{title:"Inmubeles Actualizados",number:"322",percent:"-1.8%%",chartSeries:[{name:"Series 1",data:[30,40,45,50,20,49,87,67,100]}]},{title:"Nro. Total de Recaudaciones",number:"5.654",percent:"1.8%",chartSeries:[{name:"Series 1",data:[30,40,45,50,20,49,87,67,100]}]}],totalInmuebles:[{title:"Nro. Total de Inmuebles del municipio",number:"123.456.89",percent:"1.8%"}],solicitudesProcesadas:[{title:"Nro. Total de Solicitudes Procesadas",number:"1233",percent:"3.2%"}]}},head:function(){return{title:"Admin"}},methods:{}},m=(n(941),n(24)),component=Object(m.a)(x,(function(){var t=this,r=t._self._c;return r("div",{staticClass:"center no-padding",staticStyle:{"margin-bottom":"20px","padding-left":"256px"}},[r("section",{staticClass:"section1-dashboard"},[r("div",{staticClass:"cards-container"},[t._l(t.dashboardCard,(function(n,c){return r(o.a,{key:c,staticClass:"dashboard-cards-small"},[r("span",{staticClass:"title"},[t._v("\n          "+t._s(n.title)+"\n        ")]),t._v(" "),r("span",{staticClass:"number"},[t._v("\n          "+t._s(n.number)+"\n        ")]),t._v(" "),r("p",[r("span",{staticClass:"green-number"},[t._v(t._s(n.percent))]),t._v(" "),r(e.a,{attrs:{color:"#25ac60"}},[t._v("mdi-arrow-up")]),t._v(" mes\n          1 pasado\n        ")],1),t._v(" "),r("div",{staticClass:"center"},[r("apexchart",{attrs:{type:"area",options:t.chartOptions,series:n.chartSeries,height:"130",width:"280"}})],1)])})),t._v(" "),t._l(t.totalInmuebles,(function(n,c){return r(o.a,{key:c,staticClass:"total-inmuebles-card"},[r("span",{staticClass:"title"},[t._v("\n          "+t._s(n.title)+"\n        ")]),t._v(" "),r("span",{staticClass:"number"},[t._v("\n          "+t._s(n.number)+"\n        ")]),t._v(" "),r("p",[r("span",{staticClass:"green-number"},[t._v(t._s(n.percent))]),t._v(" "),r(e.a,{attrs:{color:"#25ac60"}},[t._v("mdi-arrow-up")]),t._v(" mes\n          2 pasado\n        ")],1),t._v(" "),r("div",{staticClass:"center"},[r("apexchart",{attrs:{type:"area",options:t.chartOptions2,series:t.chartSeries2,height:"160",width:"380"}})],1)])}))],2),t._v(" "),r("div",{staticClass:"cards-container"},[t._l(t.dashboardCard,(function(n,c){return r(o.a,{key:c,staticClass:"dashboard-cards-small"},[r("span",{staticClass:"title"},[t._v("\n          "+t._s(n.title)+"\n        ")]),t._v(" "),r("span",{staticClass:"number"},[t._v("\n          "+t._s(n.number)+"\n        ")]),t._v(" "),r("p",[r("span",{staticClass:"green-number"},[t._v(t._s(n.percent))]),t._v(" "),r(e.a,{attrs:{color:"#25ac60"}},[t._v("mdi-arrow-up")]),t._v(" mes\n          1 pasado\n        ")],1),t._v(" "),r("div",{staticClass:"center"},[r("apexchart",{attrs:{type:"area",options:t.chartOptions,series:t.chartSeries,height:"130",width:"280"}})],1)])})),t._v(" "),t._l(t.solicitudesProcesadas,(function(n,c){return r(o.a,{key:c,staticClass:"total-inmuebles-card"},[r("span",{staticClass:"title"},[t._v("\n          "+t._s(n.title)+"\n        ")]),t._v(" "),r("span",{staticClass:"number"},[t._v("\n          "+t._s(n.number)+"\n        ")]),t._v(" "),r("p",[r("span",{staticClass:"green-number"},[t._v(t._s(n.percent))]),t._v(" "),r(e.a,{attrs:{color:"#25ac60"}},[t._v("mdi-arrow-up")]),t._v(" mes\n          2 pasado\n        ")],1),t._v(" "),r("div",{staticClass:"center"},[r("apexchart",{attrs:{type:"area",options:t.chartOptions3,series:t.chartSeries3,height:"160",width:"380"}})],1)])}))],2),t._v(" "),r("div",{staticClass:"accesos-rapidos-container"},[r("div",{attrs:{id:"chart"}},[r("apexchart",{attrs:{type:"pie",width:"380",options:t.chartOptionsPie,series:t.seriesPie}})],1)])])])}),[],!1,null,null,null);r.default=component.exports},912:function(t,r,n){var content=n(942);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(19).default)("8d289910",content,!0,{sourceMap:!1})},941:function(t,r,n){"use strict";n(912)},942:function(t,r,n){var o=n(18)(!1);o.push([t.i,':root{--primary:#810880;--secondary:#810880;--accent:#810880;--active:var(--primary);--error:#ff4081;--warning:#ffc260;--success:#3cd4a0;--clr-gradient:linear-gradient(to right top,#356d74,#2a505c,#21394a,#1a293d,#172035,#161d33,#161e34,#192539,#1e3143,#244251,#2d5862,#387378,#449492,#53b9b1,#63e2d2);--c:var(--clr);--font1:"Inter",sans-serif;--font2:"Inter",sans-serif;--fw:initial;--resizer:clamp(12px,1vw,16px);--resizer-mobile:clamp(10px,1.5vw,12px);--margin-global:9em;--parent:1600px;--subparent:1900px;--h-navbar:100px;--w-scroll:8px;--sombra-filter:drop-shadow(0px 4px 1px rgba(0,0,0,0.3));--sombra-card:0px 4px 4px rgba(0,0,0,0.25);--sombra-btn:0px 4px 4px rgba(0,0,0,0.25)}:root.light{--bg-ap:#f5f5f5;--clr:#000;--clr-hover:#270330;--clr-scroll:var(--primary);--clr-bg-scroll:var(--secondary);--clr-card:#fff;--clr-btn:var(--primary);--clr-text-btn:#000;--clr-badge:var(--primary);--clr-text-badge:#000;--clr-line:rgba(235,231,36,0.5)}:root.dark{--bg-ap:#000;--clr:#fff;--clr-hover:#f3cffc;--clr-scroll:var(--primary);--clr-bg-scroll:var(--secondary);--clr-card:#191919;--clr-btn:var(--primary);--clr-text-btn:#fff;--clr-badge:var(--primary);--clr-text-badge:#000;--clr-line:rgba(235,231,36,0.5)}@media(max-width:880px)and (fixed-width:){:root{--margin-global:clamp(1em,5vw,4em)}}@media(max-width:880px){:root{--margin-global:clamp(1em,5vw,4em)}}@media(max-width:880px)and (fixed-width:){:root{--h-navbar:80px}}@media(max-width:880px){:root{--h-navbar:80px}}.clr_primary{background-color:#810880!important;background-color:var(--primary)!important}.clr_secondary{background-color:#810880!important;background-color:var(--secondary)!important}.clr_accent{background-color:#810880!important;background-color:var(--accent)!important}.clr{color:var(--clr)!important}.clr_btn{background-color:var(--clr-btn)!important}.clr_btn_pressed{background-color:var(--clr-btn-pressed)!important}.clr_btn_inactive{background-color:var(--clr-btn-inactive)!important}.clr_text_btn{color:var(--clr-text-btn)!important}.clr_card{background-color:var(--clr-card)!important}.clr_svg{fill:var(--clr)!important}.flr{filter:invert(100%)!important}.flr_inv{filter:invert(0)!important}.clr-gradient{background:linear-gradient(to right top,#356d74,#2a505c,#21394a,#1a293d,#172035,#161d33,#161e34,#192539,#1e3143,#244251,#2d5862,#387378,#449492,#53b9b1,#63e2d2)!important;background:var(--clr-gradient)!important}.clr_card_2{background-color:var(--clr-card-2)!important}.section1-dashboard{display:flex;flex-direction:column;justify-content:space-between;max-width:1640px;width:100%;margin-bottom:50px;overflow-x:hidden;margin-right:0!important;margin-left:0;grid-gap:10px;gap:10px;padding-bottom:10px;padding-left:10px;padding-right:10px}.section1-dashboard .cards-container{display:flex;flex-direction:row;flex-wrap:wrap;grid-gap:20px;gap:20px;justify-content:center;margin:0 0 40px}.section1-dashboard .cards-container .dashboard-cards-small{background-color:#fff;width:285px;height:300px;padding:20px;border-radius:10px;box-shadow:3px 3px 3px 3px rgba(0,0,0,.1)!important;display:flex;flex-direction:column;justify-content:flex-start;grid-gap:10px;gap:10px}.section1-dashboard .cards-container .dashboard-cards-small .title{--c:#000;--fw:400;font-family:"Inter",sans-serif;font-family:var(--font1);font-size:16px!important;line-height:18px}.section1-dashboard .cards-container .dashboard-cards-small .number{--c:#000;--fw:500;font-size:28px}.section1-dashboard .cards-container .dashboard-cards-small p{margin-bottom:0;--c:rgba(0,0,0,0.5)}.section1-dashboard .cards-container .dashboard-cards-small p .green-number{--c:#25ac60;--fw:500}.section1-dashboard .cards-container .total-inmuebles-card{background-color:#810880;background-color:var(--primary);width:380px;height:300px;padding:20px;border-radius:10px;box-shadow:3px 3px 3px 3px rgba(0,0,0,.1)!important;display:flex;flex-direction:column;justify-content:flex-start;grid-gap:10px;gap:10px}.section1-dashboard .cards-container .total-inmuebles-card .title{--c:#fff;--fw:400;font-family:"Inter",sans-serif;font-family:var(--font1);font-size:16px!important;line-height:18px}.section1-dashboard .cards-container .total-inmuebles-card .number{--c:#fff;--fw:500;font-size:28px}.section1-dashboard .cards-container .total-inmuebles-card p{margin-bottom:0;--c:hsla(0,0%,100%,0.5)}.section1-dashboard .cards-container .total-inmuebles-card p .green-number{--c:#25ac60;--fw:500}.section1-dashboard .consultar-card-container{width:100%;display:flex;flex-direction:row;grid-gap:20px;gap:20px;justify-content:center;margin-bottom:30px}@media(max-width:1200px)and (fixed-width:){.section1-dashboard .consultar-card-container{flex-wrap:wrap}}@media(max-width:1200px){.section1-dashboard .consultar-card-container{flex-wrap:wrap}}.section1-dashboard .consultar-card-container .consulta-inputs-container{background-color:#fff;max-width:1200px;width:100%;display:flex;flex-direction:column;padding:20px;border-radius:10px;grid-gap:20px;gap:20px;overflow-x:hidden;box-shadow:3px 3px 3px 3px rgba(0,0,0,.1)!important}.section1-dashboard .consultar-card-container .consulta-inputs-container .title-consultar{--c:var(--primary);--fw:500;font-size:22px}.section1-dashboard .consultar-card-container .consulta-inputs-container hr{border:1px solid rgba(0,0,0,.1);width:130%;margin-left:-20px}.section1-dashboard .consultar-card-container .consulta-inputs-container .inputs-btn-container{justify-content:center;align-items:center;grid-gap:20px;gap:20px}@media(max-width:650px)and (fixed-width:){.section1-dashboard .consultar-card-container .consulta-inputs-container .inputs-btn-container{flex-direction:column}}@media(max-width:650px){.section1-dashboard .consultar-card-container .consulta-inputs-container .inputs-btn-container{flex-direction:column}}.section1-dashboard .consultar-card-container .consulta-inputs-container .inputs-btn-container .autocomplete-field{padding-left:10px;max-width:100px;max-height:66px;border-radius:10px;box-shadow:3px 3px 3px 3px rgba(0,0,0,.1)!important}@media(max-width:650px)and (fixed-width:){.section1-dashboard .consultar-card-container .consulta-inputs-container .inputs-btn-container .autocomplete-field{width:100%;max-width:274px}}@media(max-width:650px){.section1-dashboard .consultar-card-container .consulta-inputs-container .inputs-btn-container .autocomplete-field{width:100%;max-width:274px}}.section1-dashboard .consultar-card-container .consulta-inputs-container .inputs-btn-container .inputs-consulta{border-radius:10px;padding-left:10px;padding-right:10px;max-height:66px;box-shadow:3px 3px 3px 3px rgba(0,0,0,.1)!important}.section1-dashboard .consultar-card-container .consulta-inputs-container .inputs-btn-container .inputs-consulta:active,.section1-dashboard .consultar-card-container .consulta-inputs-container .inputs-btn-container .inputs-consulta[focus-within]{border:1px solid #810880!important;border:1px solid var(--primary)!important}.section1-dashboard .consultar-card-container .consulta-inputs-container .inputs-btn-container .inputs-consulta:active,.section1-dashboard .consultar-card-container .consulta-inputs-container .inputs-btn-container .inputs-consulta:focus-within{border:1px solid #810880!important;border:1px solid var(--primary)!important}.section1-dashboard .consultar-card-container .consulta-inputs-container .inputs-btn-container .search-btn{height:66px;max-height:66px;border-radius:10px;background-color:#fff}@media(max-width:650px)and (fixed-width:){.section1-dashboard .consultar-card-container .consulta-inputs-container .inputs-btn-container .search-btn{width:100%;max-width:274px}}@media(max-width:650px){.section1-dashboard .consultar-card-container .consulta-inputs-container .inputs-btn-container .search-btn{width:100%;max-width:274px}}.section1-dashboard .consultar-card-container .solicitudes-procesadas-card{background-color:#810880;background-color:var(--primary);width:380px;height:300px;padding:20px;border-radius:10px;box-shadow:3px 3px 3px 3px rgba(0,0,0,.1)!important;display:flex;flex-direction:column;justify-content:flex-start;grid-gap:10px;gap:10px}.section1-dashboard .consultar-card-container .solicitudes-procesadas-card .title{--c:#fff;--fw:400;font-family:"Inter",sans-serif;font-family:var(--font1);font-size:16px!important;line-height:18px}.section1-dashboard .consultar-card-container .solicitudes-procesadas-card .number{--c:#fff;--fw:500;font-size:28px}.section1-dashboard .consultar-card-container .solicitudes-procesadas-card p{margin-bottom:0;--c:hsla(0,0%,100%,0.5)}.section1-dashboard .consultar-card-container .solicitudes-procesadas-card p .green-number{--c:#25ac60;--fw:500}.section1-dashboard .accesos-rapidos-container{background-color:#fff;width:98%;display:flex;flex-direction:column;padding:20px;border-radius:10px;grid-gap:20px;gap:20px;overflow-x:hidden;margin-left:10px;box-shadow:3px 3px 3px 3px rgba(0,0,0,.1)!important}.section1-dashboard .accesos-rapidos-container .title-acceso{--c:var(--primary);--fw:500;font-size:22px}.section1-dashboard .accesos-rapidos-container hr{border:1px solid rgba(0,0,0,.1);width:130%;margin-left:-20px}.section1-dashboard .accesos-rapidos-container .btn-add{box-shadow:none;--c:var(--primary)!important;font-size:40px!important;background-color:#fff}.section1-dashboard .accesos-rapidos-container .cards-add-menu-container{width:100%;flex-wrap:wrap;grid-gap:20px;gap:20px;flex-direction:row;display:flex;justify-content:center}.section1-dashboard .accesos-rapidos-container .cards-add-menu-container .cards-acceso-rapido{background-color:#fff;box-shadow:3px 3px 3px 3px rgba(0,0,0,.1)!important;width:205px;height:100px;display:flex;flex-direction:column;justify-content:center;align-content:center}.section1-dashboard .accesos-rapidos-container .cards-add-menu-container .cards-acceso-rapido .title-card{text-align:center;--fw:400}.section1-dashboard .accesos-rapidos-container .cards-add-menu-container .cards-acceso-rapido .icon-card{color:#810880;color:var(--primary)}.v-input__slot:before{border-color:#fff!important}.v-text-field>.v-input__control>.v-input__slot:after,.v-text-field>.v-input__control>.v-input__slot:before{width:0}',""]),t.exports=o}}]);