(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{1088:function(t,o,e){"use strict";e(938)},1089:function(t,o,e){var r=e(18)(!1);r.push([t.i,".cv-outter{min-height:297mm;width:210mm;margin:80px auto 100px;border:1px solid #ccc}.section1-reporte-recaudos{display:flex;flex-direction:column;max-width:1440px;width:100%;overflow-x:hidden;margin-right:0!important;margin-left:0;grid-gap:10px;gap:10px;padding-bottom:10px;padding-left:10px;padding-right:10px}.reporte-recaudos-container{position:relative;width:100%;border-radius:10px;padding:120px 10px 20px;background-color:#fff;box-shadow:3px 3px 3px 3px rgba(#000000,.1)!important;display:grid;justify-items:center;overflow-x:hidden;margin-bottom:30px}.reporte{font-family:Arial,sans-serif;padding:0;min-height:297mm;width:210mm;margin:80px auto 100px;border:1px solid #ccc}.header{display:flex;justify-content:space-between;align-items:center;padding:20px;--background-color:#007bff;color:#fff}.logo{width:100px;height:auto}.title{font-size:20px!important;text-align:center;flex-grow:1;font-size:3em!important;margin-bottom:16px!important}.content{padding:20px}.table{width:100%;border-collapse:collapse;margin-bottom:20px;font-size:10px}.table td,.table th{border:1px solid #ddd;padding:8px;text-align:left}.footer{text-align:center;padding:10px;background-color:#f2f2f2}.columnas{display:flex;justify-content:space-between}.columna-izquierda{width:48%}.columna-derecha{width:48%;text-align:right}.textop{font-size:10px;margin-bottom:16px}.boton-container{display:flex;justify-content:flex-end;margin-top:20px}.generar-boton{background-color:#007bff!important;color:#fff;padding:10px 20px;border:none;border-radius:5px;cursor:pointer}.generar-boton:hover{background-color:#0056b3}",""]),t.exports=r},1265:function(t,o,e){"use strict";e.r(o);var r=e(14),n=e(937),l=e.n(n),c=e(816),d=(e(822),{data:function(){return{numero:1234567.89}},computed:{formatoNumerico:function(){return console.log("typeof this.numero ",Object(r.a)(this.numero)),"number"!=typeof this.numero?this.numero:this.numero.toLocaleString("es-ES",{minimumFractionDigits:2,maximumFractionDigits:2})}},methods:{exportToPDF2:function(){l()(document.getElementById("cv-example"),{filename:"ReporteCaja.pdf",image:{type:"jpeg",quality:1},html2canvas:{dpi:192,scale:2,letterRendering:!1,useCORS:!0},pagebreak:{mode:["avoid-all","css","legacy"]},jsPDF:{unit:"mm",format:"letter",orientation:"portrait"}})},generarPDF:function(){var t=new c.default("p","in","letter"),o=new Image;o.src="/alcaldia_catastro/alcaldia_catastro/assets/sources/logos/Escudo_Naguanagua_Carabobo.png";var e=new Image;e.src="/alcaldia_catastro/alcaldia_catastro/assets/sources/logos/logo.png";t.addImage(o,"PNG",.5,.5,2,.5),t.addImage(e,"PNG",7,.5,2,.5),t.setFontSize(16),t.text(4.25,1.25,"Reporte PDF",null,null,"center");t.autoTable({head:[["Columna1","Columna2","Columna3","Columna4","Columna5","Columna6","Columna7","Columna8"]],startY:2});t.autoTable({head:[["Columna1","Columna2","Columna3","Columna4","Columna5","Columna6","Columna7","Columna8","Columna9"]],startY:t.autoTable.previous.finalY+.25}),t.save("reporte.pdf")}}}),_=(e(1088),e(24)),component=Object(_.a)(d,(function(){var t=this,o=t._self._c;return o("div",{staticClass:"cv-outter_eliminado para probar",staticStyle:{"margin-bottom":"20px","padding-left":"256px"}},[o("section",{staticClass:"section1-reporte-recaudos_eliminado para probar"},[o("div",{staticClass:"reporte-recaudos-container_eliminado para probar"},[o("div",{ref:"htmlContent",staticClass:"reporte",attrs:{id:"cv-example"}},[t._m(0),t._v(" "),o("div",{staticClass:"content"},[o("div",{staticClass:"columnas"},[t._m(1),t._v(" "),o("div",{staticClass:"columna-derecha"},[o("p",{staticClass:"textop"},[t._v("El número formateado es: "+t._s(t.formatoNumerico))]),t._v(" "),o("p",{staticClass:"textop"},[t._v("2")]),t._v(" "),o("p",{staticClass:"textop"},[t._v("3")]),t._v(" "),o("p",{staticClass:"textop"},[t._v("4")]),t._v(" "),o("p",{staticClass:"textop"},[t._v("4")])])]),t._v(" "),o("p",{staticStyle:{"font-size":"3em","margin-bottom":"16px"}},[t._v("Depósitos")]),t._v(" "),t._m(2),t._v(" "),o("p",{staticStyle:{"font-size":"3em","margin-bottom":"16px"}},[t._v("Tarjetas de Débito")]),t._v(" "),t._m(3),t._v(" "),o("p",{staticStyle:{"font-size":"3em","margin-bottom":"16px"}},[t._v("Transferencias")]),t._v(" "),t._m(4)]),t._v(" "),o("div",{staticClass:"footer"},[o("p",[t._v("Pie de Página - Reporte Generado el "+t._s(t.fecha))])])]),t._v(" "),o("div",{staticClass:"boton-container"},[o("button",{staticClass:"generar-boton",on:{click:t.exportToPDF2}},[t._v("Generar Reporte en PDF new")])]),t._v(" "),o("div",{staticClass:"boton-container"},[o("button",{staticClass:"generar-boton",on:{click:t.generarPDF}},[t._v("Generar Reporte en PDF DOS")])])])])])}),[function(){var t=this,o=t._self._c;return o("div",{staticClass:"header"},[o("img",{staticClass:"logo",attrs:{src:"/alcaldia_catastro/alcaldia_catastro/assets/sources/logos/Escudo_Naguanagua_Carabobo.png",alt:"Logo Izquierda"}}),t._v(" "),o("p",{staticClass:"title"},[t._v("CUADRE DETALLADO DE CAJA")]),t._v(" "),o("img",{staticClass:"logo",attrs:{src:"/alcaldia_catastro/alcaldia_catastro/assets/sources/logos/logo.png",alt:"Logo Derecha"}})])},function(){var t=this,o=t._self._c;return o("div",{staticClass:"columna-izquierda"},[o("p",{staticClass:"textop"},[t._v("EFECTIVO")]),t._v(" "),o("p",{staticClass:"textop"},[t._v("CHEQUE")]),t._v(" "),o("p",{staticClass:"textop"},[t._v("DEBITO")]),t._v(" "),o("p",{staticClass:"textop"},[t._v("RECAUDADO")]),t._v(" "),o("p",{staticClass:"textop"},[t._v("RECAUDADO SEGÚN REPORTE")])])},function(){var t=this,o=t._self._c;return o("table",{staticClass:"table"},[o("thead",[o("tr",[o("th",[t._v("FECHA")]),t._v(" "),o("th",[t._v("BANCO")]),t._v(" "),o("th",[t._v("CODIGO BANCO")]),t._v(" "),o("th",[t._v("Nro. DE CUENTA")]),t._v(" "),o("th",[t._v("TIPO DE OPERACION")]),t._v(" "),o("th",[t._v("REF")]),t._v(" "),o("th",[t._v("MONTO")]),t._v(" "),o("th",[t._v("CAJEROS")]),t._v(" "),o("th",[t._v("TIPO")])])]),t._v(" "),o("tbody",[o("tr",[o("td",[t._v("Dato 1")]),t._v(" "),o("td",[t._v("Dato 2")]),t._v(" "),o("td",[t._v("Dato 9")])])])])},function(){var t=this,o=t._self._c;return o("table",{staticClass:"table"},[o("thead",[o("tr",[o("th",[t._v("Col 1")]),t._v(" "),o("th",[t._v("Col 2")]),t._v(" "),o("th",[t._v("Col 11")])])]),t._v(" "),o("tbody",[o("tr",[o("td",[t._v("Dato 1")]),t._v(" "),o("td",[t._v("Dato 2")]),t._v(" "),o("td",[t._v("Dato 11")])])])])},function(){var t=this,o=t._self._c;return o("table",{staticClass:"table"},[o("thead",[o("tr",[o("th",[t._v("Col 1")]),t._v(" "),o("th",[t._v("Col 2")]),t._v(" "),o("th",[t._v("Col 11")])])]),t._v(" "),o("tbody",[o("tr",[o("td",[t._v("Dato 1")]),t._v(" "),o("td",[t._v("Dato 2")]),t._v(" "),o("td",[t._v("Dato 11")])])])])}],!1,null,null,null);o.default=component.exports},938:function(t,o,e){var content=e(1089);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(19).default)("aa0750ce",content,!0,{sourceMap:!1})}}]);