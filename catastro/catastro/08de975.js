(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{1292:function(r,n,o){"use strict";o.r(n);var t=o(633),c=o(649),e=o(651),l=o(650),v=o(648),_=o(263),d=o(264),f=o(157),m=o(85),k=o(137),h=o(647),$={name:"DrawerComponent",data:function(){return{drawer_mobile:null}},computed:{mobile:function(){return this.$vuetify.breakpoint.sm},mobile2:function(){return this.$vuetify.breakpoint.xs}},methods:{}},C=(o(404),o(24)),component=Object(C.a)($,(function(){var r=this,n=r._self._c;return n("div",[r.mobile||r.mobile2?n(h.a,{attrs:{temporary:"",height:"100%"},model:{value:r.drawer_mobile,callback:function(n){r.drawer_mobile=n},expression:"drawer_mobile"}},[n("img",{staticStyle:{width:"100px",margin:"30px auto 20px auto"},attrs:{src:o(292),alt:"Logo"}}),r._v(" "),n(d.a,{attrs:{dense:""}},[n(f.a,{attrs:{link:""},on:{click:function(n){return r.$router.push("dashboard")}}},[n(k.a,[n(_.a,{attrs:{color:"#707070"}},[r._v("mdi-home")])],1),r._v(" "),n(m.a,[n(m.b,{staticClass:"vistas-drawer"},[r._v("Inicio")])],1)],1)],1),r._v(" "),n(v.a,{attrs:{accordion:""}},[n(c.a,{staticStyle:{"background-color":"var(--bg-ap)"}},[n(l.a,[n(_.a,[r._v("mdi-store")]),r._v("Taquilla\n        ")],1),r._v(" "),n(e.a,[n(d.a,{staticClass:"lista"},[n(f.a,{on:{click:function(n){return r.$router.push("liquidacion")}}},[r._v("Liquidación")]),r._v(" "),n(f.a,{on:{click:function(n){return r.$router.push("desincorporacion-inmueble")}}},[r._v("Desincorporación del Inmueble")]),r._v(" "),n(f.a,{on:{click:function(n){return r.$router.push("consultar-propietario")}}},[r._v("Consulta por propietario")]),r._v(" "),n(f.a,[r._v("Consulta por parámetros")]),r._v(" "),n(f.a,{on:{click:function(n){return r.$router.push("reporte-taquilla")}}},[r._v("Reportes taquilla")])],1)],1)],1),r._v(" "),n(c.a,{staticStyle:{"background-color":"var(--bg-ap)"}},[n(l.a,[n(_.a,[r._v("mdi-bank")]),r._v("Hacienda\n        ")],1),r._v(" "),n(e.a,[n(d.a,{staticClass:"lista"},[n(f.a,{on:{click:function(n){return r.$router.push("recaudacion")}}},[r._v("Recaudación")]),r._v(" "),n(f.a,{on:{click:function(n){return r.$router.push("consultar-propietario")}}},[r._v("Consulta por propietario")])],1)],1)],1),r._v(" "),n(c.a,{staticStyle:{"background-color":"var(--bg-ap)"}},[n(l.a,[n(_.a,[r._v("mdi-file-document")]),r._v("Reporte\n        ")],1),r._v(" "),n(e.a,[n(d.a,{staticClass:"lista"},[n(f.a,{on:{click:function(n){return r.$router.push("cedula-catastral")}}},[r._v("Cédula Catastral")])],1)],1)],1),r._v(" "),n(c.a,{staticStyle:{"background-color":"var(--bg-ap)"}},[n(l.a,[n(_.a,[r._v("mdi-city")]),r._v("Inmuebles\n        ")],1),r._v(" "),n(e.a,[n(d.a,{staticClass:"lista"},[n(f.a,{on:{click:function(n){return r.$router.push("inscripcion-inmueble")}}},[r._v("Incorporación del inmueble")]),r._v(" "),n(f.a,{on:{click:function(n){return r.$router.push("desincorporacion-inmueble")}}},[r._v("Desincorporación del Inmueble")]),r._v(" "),n(f.a,{on:{click:function(n){return r.$router.push("actualizacion-inmueble")}}},[r._v("Actualización de los datos")]),r._v(" "),n(f.a,[r._v("Consulta por parámetros")]),r._v(" "),n(f.a,{on:{click:function(n){return r.$router.push("consultar-propietario")}}},[r._v("Consultas por propietarios")])],1)],1)],1),r._v(" "),n(c.a,{staticStyle:{"background-color":"var(--bg-ap)"}},[n(l.a,[n(_.a,[r._v("mdi-account-multiple")]),r._v("Contribuyente\n        ")],1),r._v(" "),n(e.a,[n(d.a,{staticClass:"lista"},[n(f.a,{on:{click:function(n){return r.$router.push("crear-contribuyente")}}},[r._v("Nuevo Contribuyente")]),r._v(" "),n(f.a,{on:{click:function(n){return r.$router.push("modificar-datos")}}},[r._v("Modificar Datos del Contribuyente")])],1)],1)],1),r._v(" "),n(c.a,{staticStyle:{"background-color":"var(--bg-ap)"}},[n(l.a,[n(_.a,[r._v("mdi-dns")]),r._v("Archivo\n        ")],1),r._v(" "),n(e.a,[n(d.a,{staticClass:"lista"},[n(f.a,{on:{click:function(n){return r.$router.push("ambito")}}},[r._v("Ambito")]),r._v(" "),n(f.a,{on:{click:function(n){return r.$router.push("sector")}}},[r._v("Sector")]),r._v(" "),n(f.a,{on:{click:function(n){return r.$router.push("manzana")}}},[r._v("Manzana")]),r._v(" "),n(f.a,{on:{click:function(n){return r.$router.push("parcela")}}},[r._v("Parcela")]),r._v(" "),n(f.a,{on:{click:function(n){return r.$router.push("sub-parcela")}}},[r._v("Sub - Parcela")]),r._v(" "),n(f.a,{on:{click:function(n){return r.$router.push("urbanizacion-barrio")}}},[r._v("Urbaniza/ción  Barrio")]),r._v(" "),n(f.a,[r._v("Calle")]),r._v(" "),n(f.a,[r._v("Avenida")]),r._v(" "),n(f.a,{on:{click:function(n){return r.$router.push("conjuntos-residenciales")}}},[r._v("Conjunto Residencial")]),r._v(" "),n(f.a,{on:{click:function(n){return r.$router.push("edificios")}}},[r._v("Edificio / Centro Comercial")]),r._v(" "),n(f.a,{on:{click:function(n){return r.$router.push("torres")}}},[r._v("Torre")]),r._v(" "),n(f.a,[r._v("Lorem ipsum")])],1)],1)],1),r._v(" "),n(c.a,{staticStyle:{"background-color":"var(--bg-ap)"}},[n(l.a,[n(_.a,[r._v("mdi-cog")]),r._v("Configuración\n        ")],1)],1)],1),r._v(" "),n("hr"),r._v(" "),n(t.a,{staticClass:"btn-drawer",on:{click:function(n){return r.$router.push("/")}}},[n("span",[r._v("\n        Cerrar sesión\n      ")])])],1):n(h.a,{attrs:{permanent:"",fixed:""}},[n("img",{staticStyle:{width:"100px",margin:"30px auto 20px auto"},attrs:{src:o(292),alt:"Logo"}}),r._v(" "),n(d.a,{attrs:{dense:""}},[n(f.a,{on:{click:function(n){return r.$router.push("dashboard")}}},[n(k.a,[n(_.a,{attrs:{color:"#707070"}},[r._v("mdi-home")])],1),r._v(" "),n(m.a,[n(m.b,{staticClass:"vistas-drawer"},[r._v("Inicio")])],1)],1)],1),r._v(" "),n(v.a,{attrs:{accordion:""}},[n(c.a,{staticStyle:{"background-color":"var(--bg-ap)"}},[n(l.a,[n(_.a,[r._v("mdi-store")]),r._v("Taquilla\n        ")],1),r._v(" "),n(e.a,[n(d.a,{staticClass:"lista"},[n(f.a,{attrs:{to:"/liquidacion","active-class":"active"}},[r._v("Liquidación")])],1)],1)],1),r._v(" "),n(c.a,{staticStyle:{"background-color":"var(--bg-ap)"}},[n(l.a,[n(_.a,[r._v("mdi-bank")]),r._v("Hacienda\n        ")],1),r._v(" "),n(e.a,[n(d.a,{staticClass:"lista"},[n(f.a,{on:{click:function(n){return r.$router.push("recaudacion")}}},[r._v("Recaudación")]),r._v(" "),n(f.a,{on:{click:function(n){return r.$router.push("consultar-propietario")}}},[r._v("Consulta por propietario")])],1)],1)],1),r._v(" "),n(c.a,{staticStyle:{"background-color":"var(--bg-ap)"}},[n(l.a,[n(_.a,[r._v("mdi-city")]),r._v("Inmuebles\n        ")],1),r._v(" "),n(e.a,[n(d.a,{staticClass:"lista"},[n(f.a,{on:{click:function(n){return r.$router.push("consulta-inmueble")}}},[r._v("Consultar inmueble")])],1)],1)],1),r._v(" "),n(c.a,{staticStyle:{"background-color":"var(--bg-ap)"}},[n(l.a,[n(_.a,[r._v("mdi-account-multiple")]),r._v("Contribuyente\n        ")],1),r._v(" "),n(e.a,[n(d.a,{staticClass:"lista"},[n(f.a,{on:{click:function(n){return r.$router.push("modificar-datos")}}},[r._v("Administrar Datos del Contribuyente")])],1)],1)],1),r._v(" "),n(c.a,{staticStyle:{"background-color":"var(--bg-ap)"}},[n(l.a,[n(_.a,[r._v("mdi-dns")]),r._v("Archivo\n        ")],1),r._v(" "),n(e.a,[n(d.a,{staticClass:"lista"},[n(f.a,{on:{click:function(n){return r.$router.push("ambito")}}},[r._v("Ambito")]),r._v(" "),n(f.a,{on:{click:function(n){return r.$router.push("sector")}}},[r._v("Sector")]),r._v(" "),n(f.a,{on:{click:function(n){return r.$router.push("manzana")}}},[r._v("Manzana")]),r._v(" "),n(f.a,{on:{click:function(n){return r.$router.push("parcela")}}},[r._v("Parcela")]),r._v(" "),n(f.a,{on:{click:function(n){return r.$router.push("sub-parcela")}}},[r._v("Sub - Parcela")]),r._v(" "),n(f.a,{on:{click:function(n){return r.$router.push("urbanizacion-barrio")}}},[r._v("Urbanización / Barrio")]),r._v(" "),n(f.a,{on:{click:function(n){return r.$router.push("calle")}}},[r._v("Calle")]),r._v(" "),n(f.a,{on:{click:function(n){return r.$router.push("avenida")}}},[r._v("Avenida")]),r._v(" "),n(f.a,{on:{click:function(n){return r.$router.push("conjuntos-residenciales")}}},[r._v("Conjunto Residencial")]),r._v(" "),n(f.a,{on:{click:function(n){return r.$router.push("edificios")}}},[r._v("Edificio / Centro Comercial")]),r._v(" "),n(f.a,{on:{click:function(n){return r.$router.push("torres")}}},[r._v("Torre")]),r._v(" "),n(f.a,{on:{click:function(n){return r.$router.push("tipo-inmueble")}}},[r._v("Tipo de Inmueble")]),r._v(" "),n(f.a,{on:{click:function(n){return r.$router.push("estatus-inmueble")}}},[r._v("Estatus de Inmueble")]),r._v(" "),n(f.a,{on:{click:function(n){return r.$router.push("nivel-inmueble")}}},[r._v("Nivel de Inmueble")]),r._v(" "),n(f.a,{on:{click:function(n){return r.$router.push("unidad-inmueble")}}},[r._v("Unidad del Inmueble")]),r._v(" "),n(f.a,{on:{click:function(n){return r.$router.push("tipo-documento")}}},[r._v("Tipo de Documento")]),r._v(" "),n(f.a,{on:{click:function(n){return r.$router.push("tipo-especial")}}},[r._v("Tipo Especial")]),r._v(" "),n(f.a,{on:{click:function(n){return r.$router.push("tipo-tenencia")}}},[r._v("Tipo Tenencia")]),r._v(" "),n(f.a,{on:{click:function(n){return r.$router.push("topografia")}}},[r._v("Topografía")]),r._v(" "),n(f.a,{on:{click:function(n){return r.$router.push("acceso")}}},[r._v("Acceso")]),r._v(" "),n(f.a,{on:{click:function(n){return r.$router.push("forma")}}},[r._v("Forma")]),r._v(" "),n(f.a,{on:{click:function(n){return r.$router.push("ubicacion")}}},[r._v("Ubicación")]),r._v(" "),n(f.a,{on:{click:function(n){return r.$router.push("uso")}}},[r._v("Uso")]),r._v(" "),n(f.a,{on:{click:function(n){return r.$router.push("regimen")}}},[r._v("Régimen")]),r._v(" "),n(f.a,{on:{click:function(n){return r.$router.push("servicios")}}},[r._v("Servicios")]),r._v(" "),n(f.a,{on:{click:function(n){return r.$router.push("tipologia")}}},[r._v("Tipología")]),r._v(" "),n(f.a,{on:{click:function(n){return r.$router.push("fines-fiscales")}}},[r._v("Fines Fiscales")]),r._v(" "),n(f.a,{on:{click:function(n){return r.$router.push("tipo-desincorporacion")}}},[r._v("Tipo de Desincorporación")]),r._v(" "),n(f.a,{on:{click:function(n){return r.$router.push("tipo-transaccion")}}},[r._v("Tipo de Transacción")]),r._v(" "),n(f.a,{on:{click:function(n){return r.$router.push("zona")}}},[r._v("Zona")]),r._v(" "),n(f.a,{on:{click:function(n){return r.$router.push("bcv")}}},[r._v("Tasa BCV")]),r._v(" "),n(f.a,{on:{click:function(n){return r.$router.push("unidad-tributaria")}}},[r._v("Unidad Tributaria")]),r._v(" "),n(f.a,{on:{click:function(n){return r.$router.push("moneda")}}},[r._v("Monedas")]),r._v(" "),n(f.a,{on:{click:function(n){return r.$router.push("tasa-multa")}}},[r._v("Tasa / Multa")]),r._v(" "),n(f.a,{on:{click:function(n){return r.$router.push("tipo-pago")}}},[r._v("Tipo de pago")]),r._v(" "),n(f.a,[r._v("Lorem ipsum")])],1)],1)],1),r._v(" "),n(c.a,{staticStyle:{"background-color":"var(--bg-ap)"}},[n(l.a,[n(_.a,[r._v("mdi-cog")]),r._v("Configuración\n        ")],1)],1)],1),r._v(" "),n("hr"),r._v(" "),n(t.a,{staticClass:"btn-drawer",on:{click:function(n){return r.$router.push("/")}}},[n("span",[r._v("\n        Cerrar sesión\n      ")])])],1),r._v(" "),r.mobile||r.mobile2?n(t.a,{attrs:{id:"btn-mobile-drawer"},on:{click:function(n){n.stopPropagation(),r.drawer_mobile=!r.drawer_mobile}}},[n(_.a,[r._v("mdi-menu")])],1):r._e()],1)}),[],!1,null,null,null);n.default=component.exports}}]);