import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _189dde1e = () => interopDefault(import('../pages/acceso.vue' /* webpackChunkName: "pages/acceso" */))
const _8da6c732 = () => interopDefault(import('../pages/actualizacion-inmueble.vue' /* webpackChunkName: "pages/actualizacion-inmueble" */))
const _1a769f23 = () => interopDefault(import('../pages/actualizacion-inmueble-sindico.vue' /* webpackChunkName: "pages/actualizacion-inmueble-sindico" */))
const _10c35f3e = () => interopDefault(import('../pages/actualizacion-inmueble copy.vue' /* webpackChunkName: "pages/actualizacion-inmueble copy" */))
const _cba4ed6a = () => interopDefault(import('../pages/actualizacion-propietarios.vue' /* webpackChunkName: "pages/actualizacion-propietarios" */))
const _7e13d3f6 = () => interopDefault(import('../pages/actualizacion-ubicacion-parcela.vue' /* webpackChunkName: "pages/actualizacion-ubicacion-parcela" */))
const _46533b31 = () => interopDefault(import('../pages/actualizar-construccion.vue' /* webpackChunkName: "pages/actualizar-construccion" */))
const _5d3ba0a0 = () => interopDefault(import('../pages/actualizar-documento-propiedad.vue' /* webpackChunkName: "pages/actualizar-documento-propiedad" */))
const _7623bd6a = () => interopDefault(import('../pages/actualizar-documentos-pendientes.vue' /* webpackChunkName: "pages/actualizar-documentos-pendientes" */))
const _17f24d76 = () => interopDefault(import('../pages/actualizar-terreno.vue' /* webpackChunkName: "pages/actualizar-terreno" */))
const _5e512f90 = () => interopDefault(import('../pages/actualizar-valoracion-economica.vue' /* webpackChunkName: "pages/actualizar-valoracion-economica" */))
const _539808cd = () => interopDefault(import('../pages/actualizar-valoracion-economica-2024.vue' /* webpackChunkName: "pages/actualizar-valoracion-economica-2024" */))
const _50b6ccec = () => interopDefault(import('../pages/ambito.vue' /* webpackChunkName: "pages/ambito" */))
const _6a21d10c = () => interopDefault(import('../pages/avenida.vue' /* webpackChunkName: "pages/avenida" */))
const _c9620ff2 = () => interopDefault(import('../pages/bcv.vue' /* webpackChunkName: "pages/bcv" */))
const _1fb1c5f9 = () => interopDefault(import('../pages/calle.vue' /* webpackChunkName: "pages/calle" */))
const _b8d3e2ec = () => interopDefault(import('../pages/cedula-catastral.vue' /* webpackChunkName: "pages/cedula-catastral" */))
const _d5cf2502 = () => interopDefault(import('../pages/conjuntos-residenciales.vue' /* webpackChunkName: "pages/conjuntos-residenciales" */))
const _29fd5286 = () => interopDefault(import('../pages/consulta-contribuyente.vue' /* webpackChunkName: "pages/consulta-contribuyente" */))
const _c2b5b426 = () => interopDefault(import('../pages/consulta-inmueble.vue' /* webpackChunkName: "pages/consulta-inmueble" */))
const _8bac1b7a = () => interopDefault(import('../pages/crear-contribuyente.vue' /* webpackChunkName: "pages/crear-contribuyente" */))
const _3c009346 = () => interopDefault(import('../pages/dashboard.vue' /* webpackChunkName: "pages/dashboard" */))
const _3a56acb1 = () => interopDefault(import('../pages/dashboard -flujo.vue' /* webpackChunkName: "pages/dashboard -flujo" */))
const _d293b340 = () => interopDefault(import('../pages/desincorporacion-inmueble.vue' /* webpackChunkName: "pages/desincorporacion-inmueble" */))
const _237f6ec4 = () => interopDefault(import('../pages/desincorporacion-propietarios.vue' /* webpackChunkName: "pages/desincorporacion-propietarios" */))
const _5a4e4b69 = () => interopDefault(import('../pages/edificios.vue' /* webpackChunkName: "pages/edificios" */))
const _2da39f84 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _ff90be7e = () => interopDefault(import('../pages/estado-cuenta.vue' /* webpackChunkName: "pages/estado-cuenta" */))
const _b2c91e36 = () => interopDefault(import('../pages/estado-cuenta-catastro.vue' /* webpackChunkName: "pages/estado-cuenta-catastro" */))
const _3d38e36b = () => interopDefault(import('../pages/estado-cuenta-detalle.vue' /* webpackChunkName: "pages/estado-cuenta-detalle" */))
const _22a98d7b = () => interopDefault(import('../pages/estado-cuenta-detalle-catastro.vue' /* webpackChunkName: "pages/estado-cuenta-detalle-catastro" */))
const _a3f47852 = () => interopDefault(import('../pages/estado-cuenta-detalle-hacienda.vue' /* webpackChunkName: "pages/estado-cuenta-detalle-hacienda" */))
const _31f7a741 = () => interopDefault(import('../pages/estado-cuenta-hacienda.vue' /* webpackChunkName: "pages/estado-cuenta-hacienda" */))
const _3cb15717 = () => interopDefault(import('../pages/estatus-inmueble.vue' /* webpackChunkName: "pages/estatus-inmueble" */))
const _40916afe = () => interopDefault(import('../pages/fines-fiscales.vue' /* webpackChunkName: "pages/fines-fiscales" */))
const _421ee46c = () => interopDefault(import('../pages/flow.vue' /* webpackChunkName: "pages/flow" */))
const _adf3e7a0 = () => interopDefault(import('../pages/flow-devueltos.vue' /* webpackChunkName: "pages/flow-devueltos" */))
const _001b1590 = () => interopDefault(import('../pages/flow-por-enviar.vue' /* webpackChunkName: "pages/flow-por-enviar" */))
const _78dbfbe0 = () => interopDefault(import('../pages/flow-por-procesar.vue' /* webpackChunkName: "pages/flow-por-procesar" */))
const _1f7835b7 = () => interopDefault(import('../pages/flow-por-recibir.vue' /* webpackChunkName: "pages/flow-por-recibir" */))
const _6c9d3562 = () => interopDefault(import('../pages/forma.vue' /* webpackChunkName: "pages/forma" */))
const _d85cfb4c = () => interopDefault(import('../pages/IC-estado-cuenta.vue' /* webpackChunkName: "pages/IC-estado-cuenta" */))
const _f4c4387a = () => interopDefault(import('../pages/impuestos-pago.vue' /* webpackChunkName: "pages/impuestos-pago" */))
const _33191c65 = () => interopDefault(import('../pages/inscripcion-inmueble.vue' /* webpackChunkName: "pages/inscripcion-inmueble" */))
const _d29aa7c8 = () => interopDefault(import('../pages/liquidacion.vue' /* webpackChunkName: "pages/liquidacion" */))
const _08e07051 = () => interopDefault(import('../pages/liquidacion-multiple.vue' /* webpackChunkName: "pages/liquidacion-multiple" */))
const _11697aca = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _009f25de = () => interopDefault(import('../pages/maestro-patente.vue' /* webpackChunkName: "pages/maestro-patente" */))
const _3a75cea6 = () => interopDefault(import('../pages/manzana.vue' /* webpackChunkName: "pages/manzana" */))
const _0328de4a = () => interopDefault(import('../pages/modificar-datos.vue' /* webpackChunkName: "pages/modificar-datos" */))
const _48d95a58 = () => interopDefault(import('../pages/moneda.vue' /* webpackChunkName: "pages/moneda" */))
const _de14f9e8 = () => interopDefault(import('../pages/nivel-inmueble.vue' /* webpackChunkName: "pages/nivel-inmueble" */))
const _75ac52ac = () => interopDefault(import('../pages/parcela.vue' /* webpackChunkName: "pages/parcela" */))
const _b12772a2 = () => interopDefault(import('../pages/patente.vue' /* webpackChunkName: "pages/patente" */))
const _c89867c0 = () => interopDefault(import('../pages/planilla-desincorporacion.vue' /* webpackChunkName: "pages/planilla-desincorporacion" */))
const _ffe5c490 = () => interopDefault(import('../pages/recaudacion.vue' /* webpackChunkName: "pages/recaudacion" */))
const _4c760e35 = () => interopDefault(import('../pages/recaudacion-multiple.vue' /* webpackChunkName: "pages/recaudacion-multiple" */))
const _6c666813 = () => interopDefault(import('../pages/regimen.vue' /* webpackChunkName: "pages/regimen" */))
const _26d9605a = () => interopDefault(import('../pages/reporte-corridasbancarias.vue' /* webpackChunkName: "pages/reporte-corridasbancarias" */))
const _3a9b8648 = () => interopDefault(import('../pages/reporte-ejemplo.vue' /* webpackChunkName: "pages/reporte-ejemplo" */))
const _739ef085 = () => interopDefault(import('../pages/reporte-ejemplo1.vue' /* webpackChunkName: "pages/reporte-ejemplo1" */))
const _773ad7de = () => interopDefault(import('../pages/reporte-recaudos.vue' /* webpackChunkName: "pages/reporte-recaudos" */))
const _32207bfa = () => interopDefault(import('../pages/reporte-taquilla.vue' /* webpackChunkName: "pages/reporte-taquilla" */))
const _fdb5e5b8 = () => interopDefault(import('../pages/sector.vue' /* webpackChunkName: "pages/sector" */))
const _2468b2e2 = () => interopDefault(import('../pages/servicios.vue' /* webpackChunkName: "pages/servicios" */))
const _9a152cc6 = () => interopDefault(import('../pages/sub-parcela.vue' /* webpackChunkName: "pages/sub-parcela" */))
const _dbc436c6 = () => interopDefault(import('../pages/tasa-multa.vue' /* webpackChunkName: "pages/tasa-multa" */))
const _9c49ff66 = () => interopDefault(import('../pages/tipo-desincorporacion.vue' /* webpackChunkName: "pages/tipo-desincorporacion" */))
const _5f964499 = () => interopDefault(import('../pages/tipo-documento.vue' /* webpackChunkName: "pages/tipo-documento" */))
const _9800d342 = () => interopDefault(import('../pages/tipo-especial.vue' /* webpackChunkName: "pages/tipo-especial" */))
const _7cda9fe4 = () => interopDefault(import('../pages/tipo-inmueble.vue' /* webpackChunkName: "pages/tipo-inmueble" */))
const _16c3e978 = () => interopDefault(import('../pages/tipo-pago.vue' /* webpackChunkName: "pages/tipo-pago" */))
const _60a6eaa0 = () => interopDefault(import('../pages/tipo-tenencia.vue' /* webpackChunkName: "pages/tipo-tenencia" */))
const _c866f498 = () => interopDefault(import('../pages/tipo-transaccion.vue' /* webpackChunkName: "pages/tipo-transaccion" */))
const _499dfb5a = () => interopDefault(import('../pages/tipologia.vue' /* webpackChunkName: "pages/tipologia" */))
const _7aecae60 = () => interopDefault(import('../pages/topografia.vue' /* webpackChunkName: "pages/topografia" */))
const _4904bfb2 = () => interopDefault(import('../pages/torres.vue' /* webpackChunkName: "pages/torres" */))
const _9855b05e = () => interopDefault(import('../pages/ubicacion.vue' /* webpackChunkName: "pages/ubicacion" */))
const _1373650b = () => interopDefault(import('../pages/unidad-inmueble.vue' /* webpackChunkName: "pages/unidad-inmueble" */))
const _d65997b2 = () => interopDefault(import('../pages/unidad-tributaria.vue' /* webpackChunkName: "pages/unidad-tributaria" */))
const _190213be = () => interopDefault(import('../pages/upload-archivo.vue' /* webpackChunkName: "pages/upload-archivo" */))
const _0540e36c = () => interopDefault(import('../pages/upload-corrida.vue' /* webpackChunkName: "pages/upload-corrida" */))
const _f181e33e = () => interopDefault(import('../pages/urbanizacion-barrio.vue' /* webpackChunkName: "pages/urbanizacion-barrio" */))
const _b95f797a = () => interopDefault(import('../pages/uso.vue' /* webpackChunkName: "pages/uso" */))
const _09038c34 = () => interopDefault(import('../pages/zona.vue' /* webpackChunkName: "pages/zona" */))
const _b6e70cce = () => interopDefault(import('../pages/solicitud-inmueble-existente/_id.vue' /* webpackChunkName: "pages/solicitud-inmueble-existente/_id" */))
const _876d8a5a = () => interopDefault(import('../pages/verification-email/_verification.vue' /* webpackChunkName: "pages/verification-email/_verification" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/alcaldia_catastro/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/acceso",
    component: _189dde1e,
    name: "acceso___en"
  }, {
    path: "/actualizacion-inmueble",
    component: _8da6c732,
    name: "actualizacion-inmueble___en"
  }, {
    path: "/actualizacion-inmueble-sindico",
    component: _1a769f23,
    name: "actualizacion-inmueble-sindico___en"
  }, {
    path: "/actualizacion-inmueble%20copy",
    component: _10c35f3e,
    name: "actualizacion-inmueble copy___en"
  }, {
    path: "/actualizacion-propietarios",
    component: _cba4ed6a,
    name: "actualizacion-propietarios___en"
  }, {
    path: "/actualizacion-ubicacion-parcela",
    component: _7e13d3f6,
    name: "actualizacion-ubicacion-parcela___en"
  }, {
    path: "/actualizar-construccion",
    component: _46533b31,
    name: "actualizar-construccion___en"
  }, {
    path: "/actualizar-documento-propiedad",
    component: _5d3ba0a0,
    name: "actualizar-documento-propiedad___en"
  }, {
    path: "/actualizar-documentos-pendientes",
    component: _7623bd6a,
    name: "actualizar-documentos-pendientes___en"
  }, {
    path: "/actualizar-terreno",
    component: _17f24d76,
    name: "actualizar-terreno___en"
  }, {
    path: "/actualizar-valoracion-economica",
    component: _5e512f90,
    name: "actualizar-valoracion-economica___en"
  }, {
    path: "/actualizar-valoracion-economica-2024",
    component: _539808cd,
    name: "actualizar-valoracion-economica-2024___en"
  }, {
    path: "/ambito",
    component: _50b6ccec,
    name: "ambito___en"
  }, {
    path: "/avenida",
    component: _6a21d10c,
    name: "avenida___en"
  }, {
    path: "/bcv",
    component: _c9620ff2,
    name: "bcv___en"
  }, {
    path: "/calle",
    component: _1fb1c5f9,
    name: "calle___en"
  }, {
    path: "/cedula-catastral",
    component: _b8d3e2ec,
    name: "cedula-catastral___en"
  }, {
    path: "/conjuntos-residenciales",
    component: _d5cf2502,
    name: "conjuntos-residenciales___en"
  }, {
    path: "/consulta-contribuyente",
    component: _29fd5286,
    name: "consulta-contribuyente___en"
  }, {
    path: "/consulta-inmueble",
    component: _c2b5b426,
    name: "consulta-inmueble___en"
  }, {
    path: "/crear-contribuyente",
    component: _8bac1b7a,
    name: "crear-contribuyente___en"
  }, {
    path: "/dashboard",
    component: _3c009346,
    name: "dashboard___en"
  }, {
    path: "/dashboard%20-flujo",
    component: _3a56acb1,
    name: "dashboard -flujo___en"
  }, {
    path: "/desincorporacion-inmueble",
    component: _d293b340,
    name: "desincorporacion-inmueble___en"
  }, {
    path: "/desincorporacion-propietarios",
    component: _237f6ec4,
    name: "desincorporacion-propietarios___en"
  }, {
    path: "/edificios",
    component: _5a4e4b69,
    name: "edificios___en"
  }, {
    path: "/es",
    component: _2da39f84,
    name: "index___es"
  }, {
    path: "/estado-cuenta",
    component: _ff90be7e,
    name: "estado-cuenta___en"
  }, {
    path: "/estado-cuenta-catastro",
    component: _b2c91e36,
    name: "estado-cuenta-catastro___en"
  }, {
    path: "/estado-cuenta-detalle",
    component: _3d38e36b,
    name: "estado-cuenta-detalle___en"
  }, {
    path: "/estado-cuenta-detalle-catastro",
    component: _22a98d7b,
    name: "estado-cuenta-detalle-catastro___en"
  }, {
    path: "/estado-cuenta-detalle-hacienda",
    component: _a3f47852,
    name: "estado-cuenta-detalle-hacienda___en"
  }, {
    path: "/estado-cuenta-hacienda",
    component: _31f7a741,
    name: "estado-cuenta-hacienda___en"
  }, {
    path: "/estatus-inmueble",
    component: _3cb15717,
    name: "estatus-inmueble___en"
  }, {
    path: "/fines-fiscales",
    component: _40916afe,
    name: "fines-fiscales___en"
  }, {
    path: "/flow",
    component: _421ee46c,
    name: "flow___en"
  }, {
    path: "/flow-devueltos",
    component: _adf3e7a0,
    name: "flow-devueltos___en"
  }, {
    path: "/flow-por-enviar",
    component: _001b1590,
    name: "flow-por-enviar___en"
  }, {
    path: "/flow-por-procesar",
    component: _78dbfbe0,
    name: "flow-por-procesar___en"
  }, {
    path: "/flow-por-recibir",
    component: _1f7835b7,
    name: "flow-por-recibir___en"
  }, {
    path: "/forma",
    component: _6c9d3562,
    name: "forma___en"
  }, {
    path: "/IC-estado-cuenta",
    component: _d85cfb4c,
    name: "IC-estado-cuenta___en"
  }, {
    path: "/impuestos-pago",
    component: _f4c4387a,
    name: "impuestos-pago___en"
  }, {
    path: "/inscripcion-inmueble",
    component: _33191c65,
    name: "inscripcion-inmueble___en"
  }, {
    path: "/liquidacion",
    component: _d29aa7c8,
    name: "liquidacion___en"
  }, {
    path: "/liquidacion-multiple",
    component: _08e07051,
    name: "liquidacion-multiple___en"
  }, {
    path: "/login",
    component: _11697aca,
    name: "login___en"
  }, {
    path: "/maestro-patente",
    component: _009f25de,
    name: "maestro-patente___en"
  }, {
    path: "/manzana",
    component: _3a75cea6,
    name: "manzana___en"
  }, {
    path: "/modificar-datos",
    component: _0328de4a,
    name: "modificar-datos___en"
  }, {
    path: "/moneda",
    component: _48d95a58,
    name: "moneda___en"
  }, {
    path: "/nivel-inmueble",
    component: _de14f9e8,
    name: "nivel-inmueble___en"
  }, {
    path: "/parcela",
    component: _75ac52ac,
    name: "parcela___en"
  }, {
    path: "/patente",
    component: _b12772a2,
    name: "patente___en"
  }, {
    path: "/planilla-desincorporacion",
    component: _c89867c0,
    name: "planilla-desincorporacion___en"
  }, {
    path: "/recaudacion",
    component: _ffe5c490,
    name: "recaudacion___en"
  }, {
    path: "/recaudacion-multiple",
    component: _4c760e35,
    name: "recaudacion-multiple___en"
  }, {
    path: "/regimen",
    component: _6c666813,
    name: "regimen___en"
  }, {
    path: "/reporte-corridasbancarias",
    component: _26d9605a,
    name: "reporte-corridasbancarias___en"
  }, {
    path: "/reporte-ejemplo",
    component: _3a9b8648,
    name: "reporte-ejemplo___en"
  }, {
    path: "/reporte-ejemplo1",
    component: _739ef085,
    name: "reporte-ejemplo1___en"
  }, {
    path: "/reporte-recaudos",
    component: _773ad7de,
    name: "reporte-recaudos___en"
  }, {
    path: "/reporte-taquilla",
    component: _32207bfa,
    name: "reporte-taquilla___en"
  }, {
    path: "/sector",
    component: _fdb5e5b8,
    name: "sector___en"
  }, {
    path: "/servicios",
    component: _2468b2e2,
    name: "servicios___en"
  }, {
    path: "/sub-parcela",
    component: _9a152cc6,
    name: "sub-parcela___en"
  }, {
    path: "/tasa-multa",
    component: _dbc436c6,
    name: "tasa-multa___en"
  }, {
    path: "/tipo-desincorporacion",
    component: _9c49ff66,
    name: "tipo-desincorporacion___en"
  }, {
    path: "/tipo-documento",
    component: _5f964499,
    name: "tipo-documento___en"
  }, {
    path: "/tipo-especial",
    component: _9800d342,
    name: "tipo-especial___en"
  }, {
    path: "/tipo-inmueble",
    component: _7cda9fe4,
    name: "tipo-inmueble___en"
  }, {
    path: "/tipo-pago",
    component: _16c3e978,
    name: "tipo-pago___en"
  }, {
    path: "/tipo-tenencia",
    component: _60a6eaa0,
    name: "tipo-tenencia___en"
  }, {
    path: "/tipo-transaccion",
    component: _c866f498,
    name: "tipo-transaccion___en"
  }, {
    path: "/tipologia",
    component: _499dfb5a,
    name: "tipologia___en"
  }, {
    path: "/topografia",
    component: _7aecae60,
    name: "topografia___en"
  }, {
    path: "/torres",
    component: _4904bfb2,
    name: "torres___en"
  }, {
    path: "/ubicacion",
    component: _9855b05e,
    name: "ubicacion___en"
  }, {
    path: "/unidad-inmueble",
    component: _1373650b,
    name: "unidad-inmueble___en"
  }, {
    path: "/unidad-tributaria",
    component: _d65997b2,
    name: "unidad-tributaria___en"
  }, {
    path: "/upload-archivo",
    component: _190213be,
    name: "upload-archivo___en"
  }, {
    path: "/upload-corrida",
    component: _0540e36c,
    name: "upload-corrida___en"
  }, {
    path: "/urbanizacion-barrio",
    component: _f181e33e,
    name: "urbanizacion-barrio___en"
  }, {
    path: "/uso",
    component: _b95f797a,
    name: "uso___en"
  }, {
    path: "/zona",
    component: _09038c34,
    name: "zona___en"
  }, {
    path: "/es/acceso",
    component: _189dde1e,
    name: "acceso___es"
  }, {
    path: "/es/actualizacion-inmueble",
    component: _8da6c732,
    name: "actualizacion-inmueble___es"
  }, {
    path: "/es/actualizacion-inmueble-sindico",
    component: _1a769f23,
    name: "actualizacion-inmueble-sindico___es"
  }, {
    path: "/es/actualizacion-inmueble%20copy",
    component: _10c35f3e,
    name: "actualizacion-inmueble copy___es"
  }, {
    path: "/es/actualizacion-propietarios",
    component: _cba4ed6a,
    name: "actualizacion-propietarios___es"
  }, {
    path: "/es/actualizacion-ubicacion-parcela",
    component: _7e13d3f6,
    name: "actualizacion-ubicacion-parcela___es"
  }, {
    path: "/es/actualizar-construccion",
    component: _46533b31,
    name: "actualizar-construccion___es"
  }, {
    path: "/es/actualizar-documento-propiedad",
    component: _5d3ba0a0,
    name: "actualizar-documento-propiedad___es"
  }, {
    path: "/es/actualizar-documentos-pendientes",
    component: _7623bd6a,
    name: "actualizar-documentos-pendientes___es"
  }, {
    path: "/es/actualizar-terreno",
    component: _17f24d76,
    name: "actualizar-terreno___es"
  }, {
    path: "/es/actualizar-valoracion-economica",
    component: _5e512f90,
    name: "actualizar-valoracion-economica___es"
  }, {
    path: "/es/actualizar-valoracion-economica-2024",
    component: _539808cd,
    name: "actualizar-valoracion-economica-2024___es"
  }, {
    path: "/es/ambito",
    component: _50b6ccec,
    name: "ambito___es"
  }, {
    path: "/es/avenida",
    component: _6a21d10c,
    name: "avenida___es"
  }, {
    path: "/es/bcv",
    component: _c9620ff2,
    name: "bcv___es"
  }, {
    path: "/es/calle",
    component: _1fb1c5f9,
    name: "calle___es"
  }, {
    path: "/es/cedula-catastral",
    component: _b8d3e2ec,
    name: "cedula-catastral___es"
  }, {
    path: "/es/conjuntos-residenciales",
    component: _d5cf2502,
    name: "conjuntos-residenciales___es"
  }, {
    path: "/es/consulta-contribuyente",
    component: _29fd5286,
    name: "consulta-contribuyente___es"
  }, {
    path: "/es/consulta-inmueble",
    component: _c2b5b426,
    name: "consulta-inmueble___es"
  }, {
    path: "/es/crear-contribuyente",
    component: _8bac1b7a,
    name: "crear-contribuyente___es"
  }, {
    path: "/es/dashboard",
    component: _3c009346,
    name: "dashboard___es"
  }, {
    path: "/es/dashboard%20-flujo",
    component: _3a56acb1,
    name: "dashboard -flujo___es"
  }, {
    path: "/es/desincorporacion-inmueble",
    component: _d293b340,
    name: "desincorporacion-inmueble___es"
  }, {
    path: "/es/desincorporacion-propietarios",
    component: _237f6ec4,
    name: "desincorporacion-propietarios___es"
  }, {
    path: "/es/edificios",
    component: _5a4e4b69,
    name: "edificios___es"
  }, {
    path: "/es/estado-cuenta",
    component: _ff90be7e,
    name: "estado-cuenta___es"
  }, {
    path: "/es/estado-cuenta-catastro",
    component: _b2c91e36,
    name: "estado-cuenta-catastro___es"
  }, {
    path: "/es/estado-cuenta-detalle",
    component: _3d38e36b,
    name: "estado-cuenta-detalle___es"
  }, {
    path: "/es/estado-cuenta-detalle-catastro",
    component: _22a98d7b,
    name: "estado-cuenta-detalle-catastro___es"
  }, {
    path: "/es/estado-cuenta-detalle-hacienda",
    component: _a3f47852,
    name: "estado-cuenta-detalle-hacienda___es"
  }, {
    path: "/es/estado-cuenta-hacienda",
    component: _31f7a741,
    name: "estado-cuenta-hacienda___es"
  }, {
    path: "/es/estatus-inmueble",
    component: _3cb15717,
    name: "estatus-inmueble___es"
  }, {
    path: "/es/fines-fiscales",
    component: _40916afe,
    name: "fines-fiscales___es"
  }, {
    path: "/es/flow",
    component: _421ee46c,
    name: "flow___es"
  }, {
    path: "/es/flow-devueltos",
    component: _adf3e7a0,
    name: "flow-devueltos___es"
  }, {
    path: "/es/flow-por-enviar",
    component: _001b1590,
    name: "flow-por-enviar___es"
  }, {
    path: "/es/flow-por-procesar",
    component: _78dbfbe0,
    name: "flow-por-procesar___es"
  }, {
    path: "/es/flow-por-recibir",
    component: _1f7835b7,
    name: "flow-por-recibir___es"
  }, {
    path: "/es/forma",
    component: _6c9d3562,
    name: "forma___es"
  }, {
    path: "/es/IC-estado-cuenta",
    component: _d85cfb4c,
    name: "IC-estado-cuenta___es"
  }, {
    path: "/es/impuestos-pago",
    component: _f4c4387a,
    name: "impuestos-pago___es"
  }, {
    path: "/es/inscripcion-inmueble",
    component: _33191c65,
    name: "inscripcion-inmueble___es"
  }, {
    path: "/es/liquidacion",
    component: _d29aa7c8,
    name: "liquidacion___es"
  }, {
    path: "/es/liquidacion-multiple",
    component: _08e07051,
    name: "liquidacion-multiple___es"
  }, {
    path: "/es/login",
    component: _11697aca,
    name: "login___es"
  }, {
    path: "/es/maestro-patente",
    component: _009f25de,
    name: "maestro-patente___es"
  }, {
    path: "/es/manzana",
    component: _3a75cea6,
    name: "manzana___es"
  }, {
    path: "/es/modificar-datos",
    component: _0328de4a,
    name: "modificar-datos___es"
  }, {
    path: "/es/moneda",
    component: _48d95a58,
    name: "moneda___es"
  }, {
    path: "/es/nivel-inmueble",
    component: _de14f9e8,
    name: "nivel-inmueble___es"
  }, {
    path: "/es/parcela",
    component: _75ac52ac,
    name: "parcela___es"
  }, {
    path: "/es/patente",
    component: _b12772a2,
    name: "patente___es"
  }, {
    path: "/es/planilla-desincorporacion",
    component: _c89867c0,
    name: "planilla-desincorporacion___es"
  }, {
    path: "/es/recaudacion",
    component: _ffe5c490,
    name: "recaudacion___es"
  }, {
    path: "/es/recaudacion-multiple",
    component: _4c760e35,
    name: "recaudacion-multiple___es"
  }, {
    path: "/es/regimen",
    component: _6c666813,
    name: "regimen___es"
  }, {
    path: "/es/reporte-corridasbancarias",
    component: _26d9605a,
    name: "reporte-corridasbancarias___es"
  }, {
    path: "/es/reporte-ejemplo",
    component: _3a9b8648,
    name: "reporte-ejemplo___es"
  }, {
    path: "/es/reporte-ejemplo1",
    component: _739ef085,
    name: "reporte-ejemplo1___es"
  }, {
    path: "/es/reporte-recaudos",
    component: _773ad7de,
    name: "reporte-recaudos___es"
  }, {
    path: "/es/reporte-taquilla",
    component: _32207bfa,
    name: "reporte-taquilla___es"
  }, {
    path: "/es/sector",
    component: _fdb5e5b8,
    name: "sector___es"
  }, {
    path: "/es/servicios",
    component: _2468b2e2,
    name: "servicios___es"
  }, {
    path: "/es/sub-parcela",
    component: _9a152cc6,
    name: "sub-parcela___es"
  }, {
    path: "/es/tasa-multa",
    component: _dbc436c6,
    name: "tasa-multa___es"
  }, {
    path: "/es/tipo-desincorporacion",
    component: _9c49ff66,
    name: "tipo-desincorporacion___es"
  }, {
    path: "/es/tipo-documento",
    component: _5f964499,
    name: "tipo-documento___es"
  }, {
    path: "/es/tipo-especial",
    component: _9800d342,
    name: "tipo-especial___es"
  }, {
    path: "/es/tipo-inmueble",
    component: _7cda9fe4,
    name: "tipo-inmueble___es"
  }, {
    path: "/es/tipo-pago",
    component: _16c3e978,
    name: "tipo-pago___es"
  }, {
    path: "/es/tipo-tenencia",
    component: _60a6eaa0,
    name: "tipo-tenencia___es"
  }, {
    path: "/es/tipo-transaccion",
    component: _c866f498,
    name: "tipo-transaccion___es"
  }, {
    path: "/es/tipologia",
    component: _499dfb5a,
    name: "tipologia___es"
  }, {
    path: "/es/topografia",
    component: _7aecae60,
    name: "topografia___es"
  }, {
    path: "/es/torres",
    component: _4904bfb2,
    name: "torres___es"
  }, {
    path: "/es/ubicacion",
    component: _9855b05e,
    name: "ubicacion___es"
  }, {
    path: "/es/unidad-inmueble",
    component: _1373650b,
    name: "unidad-inmueble___es"
  }, {
    path: "/es/unidad-tributaria",
    component: _d65997b2,
    name: "unidad-tributaria___es"
  }, {
    path: "/es/upload-archivo",
    component: _190213be,
    name: "upload-archivo___es"
  }, {
    path: "/es/upload-corrida",
    component: _0540e36c,
    name: "upload-corrida___es"
  }, {
    path: "/es/urbanizacion-barrio",
    component: _f181e33e,
    name: "urbanizacion-barrio___es"
  }, {
    path: "/es/uso",
    component: _b95f797a,
    name: "uso___es"
  }, {
    path: "/es/zona",
    component: _09038c34,
    name: "zona___es"
  }, {
    path: "/",
    component: _2da39f84,
    name: "index___en"
  }, {
    path: "/es/solicitud-inmueble-existente/:id?",
    component: _b6e70cce,
    name: "solicitud-inmueble-existente-id___es"
  }, {
    path: "/es/verification-email/:verification?",
    component: _876d8a5a,
    name: "verification-email-verification___es"
  }, {
    path: "/solicitud-inmueble-existente/:id?",
    component: _b6e70cce,
    name: "solicitud-inmueble-existente-id___en"
  }, {
    path: "/verification-email/:verification?",
    component: _876d8a5a,
    name: "verification-email-verification___en"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
