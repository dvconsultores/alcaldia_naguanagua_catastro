(window.webpackJsonp=window.webpackJsonp||[]).push([[110],{1159:function(e,r,o){"use strict";o(991)},1160:function(e,r,o){var t=o(18)(!1);t.push([e.i,".section1-reporte-recaudos{display:grid;grid-template-columns:repeat(auto-fit,minmax(30%,1fr));max-width:1440px;width:100%;overflow-x:hidden;margin-right:0!important;margin-left:0;grid-gap:10px;gap:10px;padding-bottom:10px;padding-left:10px;padding-right:10px}.reporte-recaudos-container{position:relative;border-radius:10px;padding:20px 10px;background-color:#fff;box-shadow:3px 3px 3px 3px rgba(#000000,.1)!important;overflow-x:hidden;margin-bottom:30px}.boton-container{display:flex;justify-content:flex-end;margin-top:20px}.generar-boton{background-color:#007bff!important;color:#fff;padding:10px 20px;border:none;border-radius:5px;cursor:pointer}.generar-boton:hover{background-color:#0056b3}.generar-boton:disabled{background-color:#ccc!important;color:#666;cursor:not-allowed}.input-file{padding:10px;border:2px solid #ccc;border-radius:5px;background-color:#f9f9f9;color:#333;font-size:16px}.input-file:focus{outline:none;border-color:#66afe9}",""]),e.exports=t},1320:function(e,r,o){"use strict";o.r(r);var t=o(634),n=o(633),c=o(648),l=o(263),d=o(20),v=(o(66),{data:function(){return{dialogWait:!1,ruta:null,archivoExcel:null,opcionSeleccionada:null,botonDeshabilitado:!1,botonDeshabilitadoMigrar:!1,opciones:[{value:"bnc",label:"1. BNC Banco Nacional de Crédito"},{value:"bfc",label:"2. BFC Banco Fondo Común"},{value:"bancaribe",label:"3. BANCARIBE"},{value:"cien",label:"4. 100% Banco"},{value:"banesco",label:"5. BANESCO"},{value:"venezuela",label:"6. Banco de Venezuela"}]}},methods:{cargarArchivo:function(e){this.archivoExcel=e.target.files[0]},uploadFile:function(){var e=this;if(this.archivoExcel){this.botonDeshabilitado=!0,this.botonDeshabilitadoMigrar=!0;var r=new FormData;r.append("title","CorridaBancaria"),r.append("excel_file",this.archivoExcel),this.$axios.post("upload_excel/",r,{headers:{"Content-Type":"multipart/form-data"}}).then((function(r){console.log(r.data.message),alert("Archivo Excel subido con éxito."),e.botonDeshabilitado=!1,e.botonDeshabilitadoMigrar=!1})).catch((function(e){console.error("Error al cargar el archivo Excel:",e)}))}else alert("Por favor, selecciona un archivo Excel válido.")},migrarArchivo:function(){var e=this;if(this.opcionSeleccionada){this.botonDeshabilitadoMigrar=!0,this.botonDeshabilitado=!0;var r=new FormData;r.append("archivoExcel","CorridaBancaria"),r.append("opcion",this.opcionSeleccionada),this.$axios.post("importardatosdesdeexcel",r).then((function(r){alert("Archivo Excel subido con éxito."),e.botonDeshabilitadoMigrar=!1,e.botonDeshabilitado=!1,console.log("respuesta",r)})).catch((function(e){console.error("Error al subir el archivo Excel:",e)}))}else alert("Por favor, selecciona una opción válida.")},busca_ruta:function(e){var r=this;return Object(d.a)(regeneratorRuntime.mark((function o(){var t;return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,r.$axios.$get("ExcelDocument/".concat(e,"/"));case 2:t=o.sent,r.ruta=t.excel_file,console.log("response1",t.excel_file);case 5:case"end":return o.stop()}}),o)})))()},uploadFileBNC:function(){var e=this;return Object(d.a)(regeneratorRuntime.mark((function r(){var o,t,n;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(e.archivoExcel){r.next=3;break}return alert("Por favor, selecciona un archivo Excel válido."),r.abrupt("return");case 3:return e.dialogWait=!0,e.botonDeshabilitado=!0,e.botonDeshabilitadoMigrar=!0,(o=new FormData).append("title","CorridaBancariaBNC"),o.append("excel_file",e.archivoExcel),r.prev=9,r.next=12,e.$axios.post("upload_excel/",o,{headers:{"Content-Type":"multipart/form-data"}});case 12:return t=r.sent,r.prev=13,r.next=16,e.busca_ruta(t.data.id);case 16:r.next=21;break;case 18:r.prev=18,r.t0=r.catch(13),console.log(r.t0);case 21:(n=new FormData).append("archivoExcel","CorridaBancariaBNC"),n.append("opcion","BNC"),n.append("ruta",e.ruta),e.$axios.post("importarcorridabancaria",n).then((function(r){e.dialogWait=!1,alert("Archivo Excel subido con éxito."),e.botonDeshabilitadoMigrar=!1,e.botonDeshabilitado=!1,console.log("respuesta",r)})).catch((function(e){console.error("Error al subir el archivo Excel:",e)})),r.next=31;break;case 28:r.prev=28,r.t1=r.catch(9),console.error("Error al cargar el archivo Excel:",r.t1);case 31:case"end":return r.stop()}}),r,null,[[9,28],[13,18]])})))()},uploadFileBanCaribe:function(){var e=this;return Object(d.a)(regeneratorRuntime.mark((function r(){var o,t,n;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(e.archivoExcel){r.next=3;break}return alert("Por favor, selecciona un archivo Excel válido."),r.abrupt("return");case 3:return e.dialogWait=!0,e.botonDeshabilitado=!0,e.botonDeshabilitadoMigrar=!0,(o=new FormData).append("title","CorridaBancariaBanCaribe"),o.append("excel_file",e.archivoExcel),r.prev=9,r.next=12,e.$axios.post("upload_excel/",o,{headers:{"Content-Type":"multipart/form-data"}});case 12:return t=r.sent,r.prev=13,r.next=16,e.busca_ruta(t.data.id);case 16:r.next=21;break;case 18:r.prev=18,r.t0=r.catch(13),console.log(r.t0);case 21:(n=new FormData).append("archivoExcel","CorridaBancariaBanCaribe"),n.append("opcion","BanCaribe"),n.append("ruta",e.ruta),e.$axios.post("importarcorridabancaria",n).then((function(r){e.dialogWait=!1,alert("Archivo Excel subido con éxito."),e.botonDeshabilitadoMigrar=!1,e.botonDeshabilitado=!1,console.log("respuesta",r)})).catch((function(e){console.error("Error al subir el archivo Excel:",e)})),r.next=31;break;case 28:r.prev=28,r.t1=r.catch(9),console.error("Error al cargar el archivo Excel:",r.t1);case 31:case"end":return r.stop()}}),r,null,[[9,28],[13,18]])})))()},uploadFile100Banco:function(){var e=this;return Object(d.a)(regeneratorRuntime.mark((function r(){var o,t,n;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(e.archivoExcel){r.next=3;break}return alert("Por favor, selecciona un archivo Excel válido."),r.abrupt("return");case 3:return e.dialogWait=!0,e.botonDeshabilitado=!0,e.botonDeshabilitadoMigrar=!0,(o=new FormData).append("title","CorridaBancaria100Banco"),o.append("excel_file",e.archivoExcel),r.prev=9,r.next=12,e.$axios.post("upload_excel/",o,{headers:{"Content-Type":"multipart/form-data"}});case 12:return t=r.sent,r.prev=13,r.next=16,e.busca_ruta(t.data.id);case 16:r.next=21;break;case 18:r.prev=18,r.t0=r.catch(13),console.log(r.t0);case 21:(n=new FormData).append("archivoExcel","CorridaBancaria100Banco"),n.append("opcion","100Banco"),n.append("ruta",e.ruta),e.$axios.post("importarcorridabancaria",n).then((function(r){e.dialogWait=!1,alert("Archivo Excel subido con éxito."),e.botonDeshabilitadoMigrar=!1,e.botonDeshabilitado=!1,console.log("respuesta",r)})).catch((function(e){console.error("Error al subir el archivo Excel:",e)})),r.next=31;break;case 28:r.prev=28,r.t1=r.catch(9),console.error("Error al cargar el archivo Excel:",r.t1);case 31:case"end":return r.stop()}}),r,null,[[9,28],[13,18]])})))()},uploadFileBANESCO:function(){var e=this;return Object(d.a)(regeneratorRuntime.mark((function r(){var o,t,n;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(e.archivoExcel){r.next=3;break}return alert("Por favor, selecciona un archivo Excel válido."),r.abrupt("return");case 3:return e.dialogWait=!0,e.botonDeshabilitado=!0,e.botonDeshabilitadoMigrar=!0,(o=new FormData).append("title","CorridaBancariaBANESCO"),o.append("excel_file",e.archivoExcel),r.prev=9,r.next=12,e.$axios.post("upload_excel/",o,{headers:{"Content-Type":"multipart/form-data"}});case 12:return t=r.sent,r.prev=13,r.next=16,e.busca_ruta(t.data.id);case 16:r.next=21;break;case 18:r.prev=18,r.t0=r.catch(13),console.log(r.t0);case 21:(n=new FormData).append("archivoExcel","CorridaBancariaBANESCO"),n.append("opcion","BANESCO"),n.append("ruta",e.ruta),e.$axios.post("importarcorridabancaria",n).then((function(r){e.dialogWait=!1,alert("Archivo Excel subido con éxito."),e.botonDeshabilitadoMigrar=!1,e.botonDeshabilitado=!1,console.log("respuesta",r)})).catch((function(e){console.error("Error al subir el archivo Excel:",e)})),r.next=31;break;case 28:r.prev=28,r.t1=r.catch(9),console.error("Error al cargar el archivo Excel:",r.t1);case 31:case"end":return r.stop()}}),r,null,[[9,28],[13,18]])})))()},uploadFileBFC:function(){var e=this;return Object(d.a)(regeneratorRuntime.mark((function r(){var o,t,n;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(e.archivoExcel){r.next=3;break}return alert("Por favor, selecciona un archivo Excel válido."),r.abrupt("return");case 3:return e.dialogWait=!0,e.botonDeshabilitado=!0,e.botonDeshabilitadoMigrar=!0,(o=new FormData).append("title","CorridaBancariaBFC"),o.append("excel_file",e.archivoExcel),r.prev=9,r.next=12,e.$axios.post("upload_excel/",o,{headers:{"Content-Type":"multipart/form-data"}});case 12:return t=r.sent,r.prev=13,r.next=16,e.busca_ruta(t.data.id);case 16:r.next=21;break;case 18:r.prev=18,r.t0=r.catch(13),console.log(r.t0);case 21:(n=new FormData).append("archivoExcel","CorridaBancariaBFC"),n.append("opcion","BFC"),n.append("ruta",e.ruta),e.$axios.post("importarcorridabancaria",n).then((function(r){e.dialogWait=!1,alert("Archivo Excel subido con éxito."),e.botonDeshabilitadoMigrar=!1,e.botonDeshabilitado=!1,console.log("respuesta",r)})).catch((function(e){console.error("Error al subir el archivo Excel:",e)})),r.next=31;break;case 28:r.prev=28,r.t1=r.catch(9),console.error("Error al cargar el archivo Excel:",r.t1);case 31:case"end":return r.stop()}}),r,null,[[9,28],[13,18]])})))()},uploadFileBDV:function(){var e=this;return Object(d.a)(regeneratorRuntime.mark((function r(){var o,t,n;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(e.archivoExcel){r.next=3;break}return alert("Por favor, selecciona un archivo Excel válido."),r.abrupt("return");case 3:return e.dialogWait=!0,e.botonDeshabilitado=!0,e.botonDeshabilitadoMigrar=!0,(o=new FormData).append("title","CorridaBancariaBDV"),o.append("excel_file",e.archivoExcel),r.prev=9,r.next=12,e.$axios.post("upload_excel/",o,{headers:{"Content-Type":"multipart/form-data"}});case 12:return t=r.sent,r.prev=13,r.next=16,e.busca_ruta(t.data.id);case 16:r.next=21;break;case 18:r.prev=18,r.t0=r.catch(13),console.log(r.t0);case 21:(n=new FormData).append("archivoExcel","CorridaBancariaBDV"),n.append("opcion","BDV"),n.append("ruta",e.ruta),e.$axios.post("importarcorridabancaria",n).then((function(r){e.dialogWait=!1,alert("Archivo Excel subido con éxito."),e.botonDeshabilitadoMigrar=!1,e.botonDeshabilitado=!1,console.log("respuesta",r)})).catch((function(e){console.error("Error al subir el archivo Excel:",e)})),r.next=31;break;case 28:r.prev=28,r.t1=r.catch(9),console.error("Error al cargar el archivo Excel:",r.t1);case 31:case"end":return r.stop()}}),r,null,[[9,28],[13,18]])})))()}}}),x=(o(1159),o(24)),component=Object(x.a)(v,(function(){var e=this,r=e._self._c;return r("div",{staticClass:"center no-padding divcol",staticStyle:{"margin-bottom":"20px","padding-left":"256px"}},[r("section",{staticClass:"section1-reporte-recaudos"},[r("div",{staticClass:"reporte-recaudos-container"},[r("p",[e._v(" BNC ")]),e._v(" "),r("input",{staticClass:"input-file",attrs:{type:"file",id:"excelFile",accept:".xls, .xlsx",required:""},on:{change:e.cargarArchivo}}),e._v(" "),r("div",{staticClass:"boton-container"},[r("button",{staticClass:"generar-boton",attrs:{disabled:e.botonDeshabilitado},on:{click:e.uploadFileBNC}},[e._v("Subir Archivo de\n          BNC")])])]),e._v(" "),r("div",{staticClass:"reporte-recaudos-container"},[r("p",[e._v(" BanCaribe ")]),e._v(" "),r("input",{staticClass:"input-file",attrs:{type:"file",id:"excelFile",accept:".xls, .xlsx",required:""},on:{change:e.cargarArchivo}}),e._v(" "),r("div",{staticClass:"boton-container"},[r("button",{staticClass:"generar-boton",attrs:{disabled:e.botonDeshabilitado},on:{click:e.uploadFileBanCaribe}},[e._v("Subir Archivo de\n          BanCaribe")])])]),e._v(" "),r("div",{staticClass:"reporte-recaudos-container"},[r("p",[e._v(" 100%Banco ")]),e._v(" "),r("input",{staticClass:"input-file",attrs:{type:"file",id:"excelFile",accept:".xls, .xlsx",required:""},on:{change:e.cargarArchivo}}),e._v(" "),r("div",{staticClass:"boton-container"},[r("button",{staticClass:"generar-boton",attrs:{disabled:e.botonDeshabilitado},on:{click:e.uploadFile100Banco}},[e._v("Subir Archivo de\n          100%Banco")])])]),e._v(" "),r("div",{staticClass:"reporte-recaudos-container"},[r("p",[e._v(" BANESCO ")]),e._v(" "),r("input",{staticClass:"input-file",attrs:{type:"file",id:"excelFile",accept:".xls, .xlsx",required:""},on:{change:e.cargarArchivo}}),e._v(" "),r("div",{staticClass:"boton-container"},[r("button",{staticClass:"generar-boton",attrs:{disabled:e.botonDeshabilitado},on:{click:e.uploadFileBANESCO}},[e._v("Subir Archivo de\n          BANESCO")])])]),e._v(" "),r("div",{staticClass:"reporte-recaudos-container"},[r("p",[e._v(" BANCO FONDO COMÚN ")]),e._v(" "),r("input",{staticClass:"input-file",attrs:{type:"file",id:"excelFile",accept:".xls, .xlsx",required:""},on:{change:e.cargarArchivo}}),e._v(" "),r("div",{staticClass:"boton-container"},[r("button",{staticClass:"generar-boton",attrs:{disabled:e.botonDeshabilitado},on:{click:e.uploadFileBFC}},[e._v("Subir Archivo de\n          BANCO FONDO COMÚN")])])]),e._v(" "),r("div",{staticClass:"reporte-recaudos-container"},[r("p",[e._v(" BANCO DE VENEZUELA ")]),e._v(" "),r("input",{staticClass:"input-file",attrs:{type:"file",id:"excelFile",accept:".xls, .xlsx",required:""},on:{change:e.cargarArchivo}}),e._v(" "),r("div",{staticClass:"boton-container"},[r("button",{staticClass:"generar-boton",attrs:{disabled:e.botonDeshabilitado},on:{click:e.uploadFileBDV}},[e._v("Subir Archivo de\n          BANCO DE VENEZUELA")])])])]),e._v(" "),r(c.a,{attrs:{"hide-overlay":"",persistent:"",width:"300"},model:{value:e.dialogWait,callback:function(r){e.dialogWait=r},expression:"dialogWait"}},[r(t.a,{attrs:{color:"primary",dark:""}},[r(n.b,[e._v("\n        Por favor espere!!!\n        "),r(l.a,{staticClass:"mb-0",attrs:{indeterminate:"",color:"white"}})],1)],1)],1)],1)}),[],!1,null,null,null);r.default=component.exports},633:function(e,r,o){"use strict";o.d(r,"a",(function(){return c})),o.d(r,"b",(function(){return d})),o.d(r,"c",(function(){return v}));var t=o(634),n=o(2),c=Object(n.j)("v-card__actions"),l=Object(n.j)("v-card__subtitle"),d=Object(n.j)("v-card__text"),v=Object(n.j)("v-card__title");t.a},991:function(e,r,o){var content=o(1160);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(19).default)("6b87460a",content,!0,{sourceMap:!1})}}]);