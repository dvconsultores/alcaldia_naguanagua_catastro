(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{1113:function(t,e,o){"use strict";o(964)},1114:function(t,e,o){var r=o(18)(!1);r.push([t.i,".section1-reporte-recaudos[data-v-591df461]{display:flex;flex-direction:column;max-width:1440px;width:100%;overflow-x:hidden;margin-right:0!important;margin-left:0;grid-gap:10px;gap:10px;padding-bottom:10px;padding-left:10px;padding-right:10px;.reporte-recaudos-container[data-v-591df461]{position:relative;width:100%;border-radius:10px;padding:120px 10px 20px;background-color:#fff;box-shadow:3px 3px 3px 3px rgba(#000000,.1)!important;display:grid;justify-items:center;overflow-x:hidden;margin-bottom:30px;.reporte[data-v-591df461]{font-family:Arial,sans-serif;padding:0;min-height:297mm;width:210mm;margin:80px auto 100px;border:1px solid #ccc}.header[data-v-591df461]{display:flex;justify-content:space-between;align-items:center;padding:20px;background-color:#007bff;color:#fff}.logo[data-v-591df461]{width:100px;height:auto}.title[data-v-591df461]{text-align:center;flex-grow:1}.content[data-v-591df461]{padding:20px}.table[data-v-591df461]{width:100%;border-collapse:collapse;margin-bottom:20px}.table td[data-v-591df461],.table th[data-v-591df461]{border:1px solid #ddd;padding:8px;text-align:left}.footer[data-v-591df461]{text-align:center;padding:10px;background-color:#f2f2f2}.boton-container[data-v-591df461]{display:flex;justify-content:flex-end;margin-top:20px}.generar-boton[data-v-591df461]{background-color:#007bff!important;color:#fff;padding:10px 20px;border:none;border-radius:5px;cursor:pointer}.generar-boton[data-v-591df461]:hover{background-color:#0056b3}}}",""]),t.exports=r},1287:function(t,e,o){"use strict";o.r(e);var r=o(20),n=(o(66),o(4),o(32),o(37),o(1110),o(296),o(962)),d=o.n(n),l={data:function(){return{fecha:(new Date).toLocaleDateString()}},methods:{generarPDF:function(){return Object(r.a)(regeneratorRuntime.mark((function t(){var e,o,r,n,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e="\n          <h1>Ejemplo de Contenido</h1>\n          <p>Este es un ejemplo de contenido que se convertirá en PDF.</p>\n        ",console.log("reporteElement",e),o={margin:10,filename:"reporte.pdf",image:{type:"jpeg",quality:.98},html2canvas:{scale:2},jsPDF:{unit:"mm",format:"letter",orientation:"portrait"}},console.log("options",o),t.next=7,d()().from(e).set(o).outputPdf();case 7:r=t.sent,console.log("pdf",r),n=new Blob([r],{type:"application/pdf"}),l=URL.createObjectURL(n),window.open(l,"_blank"),t.next=17;break;case 14:t.prev=14,t.t0=t.catch(0),console.error("Error al generar el PDF:",t.t0);case 17:case"end":return t.stop()}}),t,null,[[0,14]])})))()}}},c=(o(1113),o(24)),component=Object(c.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"center no-padding divcol",staticStyle:{"margin-bottom":"20px","padding-left":"256px"}},[e("section",{staticClass:"section1-reporte-recaudos"},[e("div",{staticClass:"reporte-recaudos-container"},[e("div",{ref:"htmlContent",staticClass:"reporte"},[t._m(0),t._v(" "),t._m(1),t._v(" "),e("div",{staticClass:"footer"},[e("p",[t._v("Pie de Página - Reporte Generado el "+t._s(t.fecha))])])]),t._v(" "),e("div",{staticClass:"boton-container"},[e("button",{staticClass:"generar-boton",on:{click:t.generarPDF}},[t._v("Generar Reporte en PDF")])])])])])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"header"},[e("img",{staticClass:"logo",attrs:{src:"/alcaldia_catastro/alcaldia_catastro/assets/sources/logos/Escudo_Naguanagua_Carabobo.png",alt:"Logo Izquierda"}}),t._v(" "),e("h1",{staticClass:"title"},[t._v("Reporte en Tamaño Carta")]),t._v(" "),e("img",{staticClass:"logo",attrs:{src:"/alcaldia_catastro/alcaldia_catastro/assets/sources/logos/logo.png",alt:"Logo Derecha"}})])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"content"},[e("h2",[t._v("Depósitos")]),t._v(" "),e("table",{staticClass:"table"},[e("thead",[e("tr",[e("th",[t._v("Col 1")]),t._v(" "),e("th",[t._v("Col 2")]),t._v(" "),e("th",[t._v("Col 9")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("Dato 1")]),t._v(" "),e("td",[t._v("Dato 2")]),t._v(" "),e("td",[t._v("Dato 9")])])])]),t._v(" "),e("h2",[t._v("Tarjetas de Débito")]),t._v(" "),e("table",{staticClass:"table"},[e("thead",[e("tr",[e("th",[t._v("Col 1")]),t._v(" "),e("th",[t._v("Col 2")]),t._v(" "),e("th",[t._v("Col 11")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("Dato 1")]),t._v(" "),e("td",[t._v("Dato 2")]),t._v(" "),e("td",[t._v("Dato 11")])])])]),t._v(" "),e("h2",[t._v("Transferencias")]),t._v(" "),e("table",{staticClass:"table"},[e("thead",[e("tr",[e("th",[t._v("Col 1")]),t._v(" "),e("th",[t._v("Col 2")]),t._v(" "),e("th",[t._v("Col 11")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("Dato 1")]),t._v(" "),e("td",[t._v("Dato 2")]),t._v(" "),e("td",[t._v("Dato 11")])])])])])}],!1,null,"591df461",null);e.default=component.exports},964:function(t,e,o){var content=o(1114);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(19).default)("9480db30",content,!0,{sourceMap:!1})}}]);