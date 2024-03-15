import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _7d0e5d0a = () => interopDefault(import('../pages/acceso.vue' /* webpackChunkName: "pages/acceso" */))
const _0d119478 = () => interopDefault(import('../pages/actualizacion-inmueble.vue' /* webpackChunkName: "pages/actualizacion-inmueble" */))
const _33f48b80 = () => interopDefault(import('../pages/actualizacion-inmueble-sindico.vue' /* webpackChunkName: "pages/actualizacion-inmueble-sindico" */))
const _22e31801 = () => interopDefault(import('../pages/actualizacion-inmueble copy.vue' /* webpackChunkName: "pages/actualizacion-inmueble copy" */))
const _16a22c28 = () => interopDefault(import('../pages/actualizacion-propietarios.vue' /* webpackChunkName: "pages/actualizacion-propietarios" */))
const _d759198e = () => interopDefault(import('../pages/actualizacion-ubicacion-parcela.vue' /* webpackChunkName: "pages/actualizacion-ubicacion-parcela" */))
const _0f5bcd74 = () => interopDefault(import('../pages/actualizar-construccion.vue' /* webpackChunkName: "pages/actualizar-construccion" */))
const _2a3fc7e6 = () => interopDefault(import('../pages/actualizar-documento-propiedad.vue' /* webpackChunkName: "pages/actualizar-documento-propiedad" */))
const _27d80687 = () => interopDefault(import('../pages/actualizar-documentos-pendientes.vue' /* webpackChunkName: "pages/actualizar-documentos-pendientes" */))
const _4e921d53 = () => interopDefault(import('../pages/actualizar-terreno.vue' /* webpackChunkName: "pages/actualizar-terreno" */))
const _7490ced3 = () => interopDefault(import('../pages/actualizar-valoracion-economica.vue' /* webpackChunkName: "pages/actualizar-valoracion-economica" */))
const _11987b6a = () => interopDefault(import('../pages/actualizar-valoracion-economica-2024.vue' /* webpackChunkName: "pages/actualizar-valoracion-economica-2024" */))
const _0cdc7f6e = () => interopDefault(import('../pages/ambito.vue' /* webpackChunkName: "pages/ambito" */))
const _3d728fbd = () => interopDefault(import('../pages/avenida.vue' /* webpackChunkName: "pages/avenida" */))
const _20f1ec6c = () => interopDefault(import('../pages/bcv.vue' /* webpackChunkName: "pages/bcv" */))
const _462c72fc = () => interopDefault(import('../pages/calle.vue' /* webpackChunkName: "pages/calle" */))
const _9e9b9cb2 = () => interopDefault(import('../pages/cedula-catastral.vue' /* webpackChunkName: "pages/cedula-catastral" */))
const _5e20ffc2 = () => interopDefault(import('../pages/conjuntos-residenciales.vue' /* webpackChunkName: "pages/conjuntos-residenciales" */))
const _2b4bf01a = () => interopDefault(import('../pages/consulta-contribuyente.vue' /* webpackChunkName: "pages/consulta-contribuyente" */))
const _350d6670 = () => interopDefault(import('../pages/consulta-inmueble.vue' /* webpackChunkName: "pages/consulta-inmueble" */))
const _79a71a56 = () => interopDefault(import('../pages/consulta-inmueble copy.vue' /* webpackChunkName: "pages/consulta-inmueble copy" */))
const _57841e06 = () => interopDefault(import('../pages/crear-contribuyente.vue' /* webpackChunkName: "pages/crear-contribuyente" */))
const _1b8706c9 = () => interopDefault(import('../pages/dashboard.vue' /* webpackChunkName: "pages/dashboard" */))
const _4772cfce = () => interopDefault(import('../pages/dashboard -flujo.vue' /* webpackChunkName: "pages/dashboard -flujo" */))
const _3fe333e3 = () => interopDefault(import('../pages/desincorporacion-inmueble.vue' /* webpackChunkName: "pages/desincorporacion-inmueble" */))
const _2c9402c7 = () => interopDefault(import('../pages/desincorporacion-propietarios.vue' /* webpackChunkName: "pages/desincorporacion-propietarios" */))
const _39d4beec = () => interopDefault(import('../pages/edificios.vue' /* webpackChunkName: "pages/edificios" */))
const _541e4c87 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _eefaca78 = () => interopDefault(import('../pages/estado-cuenta.vue' /* webpackChunkName: "pages/estado-cuenta" */))
const _3233eb7c = () => interopDefault(import('../pages/estado-cuenta-catastro.vue' /* webpackChunkName: "pages/estado-cuenta-catastro" */))
const _2691ab24 = () => interopDefault(import('../pages/estado-cuenta-detalle.vue' /* webpackChunkName: "pages/estado-cuenta-detalle" */))
const _3c2779d8 = () => interopDefault(import('../pages/estado-cuenta-detalle-catastro.vue' /* webpackChunkName: "pages/estado-cuenta-detalle-catastro" */))
const _70f89f98 = () => interopDefault(import('../pages/estado-cuenta-detalle-hacienda.vue' /* webpackChunkName: "pages/estado-cuenta-detalle-hacienda" */))
const _7242409e = () => interopDefault(import('../pages/estado-cuenta-hacienda.vue' /* webpackChunkName: "pages/estado-cuenta-hacienda" */))
const _49cd7a34 = () => interopDefault(import('../pages/estatus-inmueble.vue' /* webpackChunkName: "pages/estatus-inmueble" */))
const _41a5b15b = () => interopDefault(import('../pages/fines-fiscales.vue' /* webpackChunkName: "pages/fines-fiscales" */))
const _74e90b09 = () => interopDefault(import('../pages/flow.vue' /* webpackChunkName: "pages/flow" */))
const _abcb5ae6 = () => interopDefault(import('../pages/flow-devueltos.vue' /* webpackChunkName: "pages/flow-devueltos" */))
const _2166fa7b = () => interopDefault(import('../pages/flow-por-enviar.vue' /* webpackChunkName: "pages/flow-por-enviar" */))
const _0f443c63 = () => interopDefault(import('../pages/flow-por-procesar.vue' /* webpackChunkName: "pages/flow-por-procesar" */))
const _2c9458d4 = () => interopDefault(import('../pages/flow-por-recibir.vue' /* webpackChunkName: "pages/flow-por-recibir" */))
const _1fa7db5c = () => interopDefault(import('../pages/forma.vue' /* webpackChunkName: "pages/forma" */))
const _be24b512 = () => interopDefault(import('../pages/IC-estado-cuenta.vue' /* webpackChunkName: "pages/IC-estado-cuenta" */))
const _f29babc0 = () => interopDefault(import('../pages/impuestos-pago.vue' /* webpackChunkName: "pages/impuestos-pago" */))
const _41046902 = () => interopDefault(import('../pages/inscripcion-inmueble.vue' /* webpackChunkName: "pages/inscripcion-inmueble" */))
const _a32b6a42 = () => interopDefault(import('../pages/liquidacion.vue' /* webpackChunkName: "pages/liquidacion" */))
const _16cbbcee = () => interopDefault(import('../pages/liquidacion-multiple.vue' /* webpackChunkName: "pages/liquidacion-multiple" */))
const _1dc5ef9e = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _2124f254 = () => interopDefault(import('../pages/maestro-patente.vue' /* webpackChunkName: "pages/maestro-patente" */))
const _a60d722e = () => interopDefault(import('../pages/manzana.vue' /* webpackChunkName: "pages/manzana" */))
const _249d638d = () => interopDefault(import('../pages/modificar-datos.vue' /* webpackChunkName: "pages/modificar-datos" */))
const _f723739e = () => interopDefault(import('../pages/moneda.vue' /* webpackChunkName: "pages/moneda" */))
const _dbec6d2e = () => interopDefault(import('../pages/nivel-inmueble.vue' /* webpackChunkName: "pages/nivel-inmueble" */))
const _37ad4eed = () => interopDefault(import('../pages/parcela.vue' /* webpackChunkName: "pages/parcela" */))
const _19efbef2 = () => interopDefault(import('../pages/patente.vue' /* webpackChunkName: "pages/patente" */))
const _44e0d9a3 = () => interopDefault(import('../pages/planilla-desincorporacion.vue' /* webpackChunkName: "pages/planilla-desincorporacion" */))
const _d076870a = () => interopDefault(import('../pages/recaudacion.vue' /* webpackChunkName: "pages/recaudacion" */))
const _5a615ad2 = () => interopDefault(import('../pages/recaudacion-multiple.vue' /* webpackChunkName: "pages/recaudacion-multiple" */))
const _422c3f54 = () => interopDefault(import('../pages/regimen.vue' /* webpackChunkName: "pages/regimen" */))
const _d47f4554 = () => interopDefault(import('../pages/reporte-corridasbancarias.vue' /* webpackChunkName: "pages/reporte-corridasbancarias" */))
const _0426c21f = () => interopDefault(import('../pages/reporte-ejemplo.vue' /* webpackChunkName: "pages/reporte-ejemplo" */))
const _fe89d8bc = () => interopDefault(import('../pages/reporte-ejemplo1.vue' /* webpackChunkName: "pages/reporte-ejemplo1" */))
const _f7520a0a = () => interopDefault(import('../pages/reporte-recaudos.vue' /* webpackChunkName: "pages/reporte-recaudos" */))
const _17e835c0 = () => interopDefault(import('../pages/reporte-taquilla.vue' /* webpackChunkName: "pages/reporte-taquilla" */))
const _2a000081 = () => interopDefault(import('../pages/sector.vue' /* webpackChunkName: "pages/sector" */))
const _655bcbdc = () => interopDefault(import('../pages/servicios.vue' /* webpackChunkName: "pages/servicios" */))
const _6aa5ef40 = () => interopDefault(import('../pages/sub-parcela.vue' /* webpackChunkName: "pages/sub-parcela" */))
const _b9343d0c = () => interopDefault(import('../pages/tasa-multa.vue' /* webpackChunkName: "pages/tasa-multa" */))
const _61594750 = () => interopDefault(import('../pages/tipo-desincorporacion.vue' /* webpackChunkName: "pages/tipo-desincorporacion" */))
const _60aa8af6 = () => interopDefault(import('../pages/tipo-documento.vue' /* webpackChunkName: "pages/tipo-documento" */))
const _876adf3c = () => interopDefault(import('../pages/tipo-especial.vue' /* webpackChunkName: "pages/tipo-especial" */))
const _6c44abde = () => interopDefault(import('../pages/tipo-inmueble.vue' /* webpackChunkName: "pages/tipo-inmueble" */))
const _57b70272 = () => interopDefault(import('../pages/tipo-pago.vue' /* webpackChunkName: "pages/tipo-pago" */))
const _68f1e4a3 = () => interopDefault(import('../pages/tipo-tenencia.vue' /* webpackChunkName: "pages/tipo-tenencia" */))
const _ae2eae5e = () => interopDefault(import('../pages/tipo-transaccion.vue' /* webpackChunkName: "pages/tipo-transaccion" */))
const _29246edd = () => interopDefault(import('../pages/tipologia.vue' /* webpackChunkName: "pages/tipologia" */))
const _e796a986 = () => interopDefault(import('../pages/topografia.vue' /* webpackChunkName: "pages/topografia" */))
const _f74ed8f8 = () => interopDefault(import('../pages/torres.vue' /* webpackChunkName: "pages/torres" */))
const _d948c958 = () => interopDefault(import('../pages/ubicacion.vue' /* webpackChunkName: "pages/ubicacion" */))
const _34e7ea4e = () => interopDefault(import('../pages/unidad-inmueble.vue' /* webpackChunkName: "pages/unidad-inmueble" */))
const _2b3b74aa = () => interopDefault(import('../pages/unidad-tributaria.vue' /* webpackChunkName: "pages/unidad-tributaria" */))
const _1a165a1b = () => interopDefault(import('../pages/upload-archivo.vue' /* webpackChunkName: "pages/upload-archivo" */))
const _065529c9 = () => interopDefault(import('../pages/upload-corrida.vue' /* webpackChunkName: "pages/upload-corrida" */))
const _24993a24 = () => interopDefault(import('../pages/urbanizacion-barrio.vue' /* webpackChunkName: "pages/urbanizacion-barrio" */))
const _10ef55f4 = () => interopDefault(import('../pages/uso.vue' /* webpackChunkName: "pages/uso" */))
const _2e486083 = () => interopDefault(import('../pages/zona.vue' /* webpackChunkName: "pages/zona" */))
const _5640c2b6 = () => interopDefault(import('../pages/solicitud-inmueble-existente/_id.vue' /* webpackChunkName: "pages/solicitud-inmueble-existente/_id" */))
const _6dfd83f0 = () => interopDefault(import('../pages/verification-email/_verification.vue' /* webpackChunkName: "pages/verification-email/_verification" */))

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
    component: _7d0e5d0a,
    name: "acceso___en"
  }, {
    path: "/actualizacion-inmueble",
    component: _0d119478,
    name: "actualizacion-inmueble___en"
  }, {
    path: "/actualizacion-inmueble-sindico",
    component: _33f48b80,
    name: "actualizacion-inmueble-sindico___en"
  }, {
    path: "/actualizacion-inmueble%20copy",
    component: _22e31801,
    name: "actualizacion-inmueble copy___en"
  }, {
    path: "/actualizacion-propietarios",
    component: _16a22c28,
    name: "actualizacion-propietarios___en"
  }, {
    path: "/actualizacion-ubicacion-parcela",
    component: _d759198e,
    name: "actualizacion-ubicacion-parcela___en"
  }, {
    path: "/actualizar-construccion",
    component: _0f5bcd74,
    name: "actualizar-construccion___en"
  }, {
    path: "/actualizar-documento-propiedad",
    component: _2a3fc7e6,
    name: "actualizar-documento-propiedad___en"
  }, {
    path: "/actualizar-documentos-pendientes",
    component: _27d80687,
    name: "actualizar-documentos-pendientes___en"
  }, {
    path: "/actualizar-terreno",
    component: _4e921d53,
    name: "actualizar-terreno___en"
  }, {
    path: "/actualizar-valoracion-economica",
    component: _7490ced3,
    name: "actualizar-valoracion-economica___en"
  }, {
    path: "/actualizar-valoracion-economica-2024",
    component: _11987b6a,
    name: "actualizar-valoracion-economica-2024___en"
  }, {
    path: "/ambito",
    component: _0cdc7f6e,
    name: "ambito___en"
  }, {
    path: "/avenida",
    component: _3d728fbd,
    name: "avenida___en"
  }, {
    path: "/bcv",
    component: _20f1ec6c,
    name: "bcv___en"
  }, {
    path: "/calle",
    component: _462c72fc,
    name: "calle___en"
  }, {
    path: "/cedula-catastral",
    component: _9e9b9cb2,
    name: "cedula-catastral___en"
  }, {
    path: "/conjuntos-residenciales",
    component: _5e20ffc2,
    name: "conjuntos-residenciales___en"
  }, {
    path: "/consulta-contribuyente",
    component: _2b4bf01a,
    name: "consulta-contribuyente___en"
  }, {
    path: "/consulta-inmueble",
    component: _350d6670,
    name: "consulta-inmueble___en"
  }, {
    path: "/consulta-inmueble%20copy",
    component: _79a71a56,
    name: "consulta-inmueble copy___en"
  }, {
    path: "/crear-contribuyente",
    component: _57841e06,
    name: "crear-contribuyente___en"
  }, {
    path: "/dashboard",
    component: _1b8706c9,
    name: "dashboard___en"
  }, {
    path: "/dashboard%20-flujo",
    component: _4772cfce,
    name: "dashboard -flujo___en"
  }, {
    path: "/desincorporacion-inmueble",
    component: _3fe333e3,
    name: "desincorporacion-inmueble___en"
  }, {
    path: "/desincorporacion-propietarios",
    component: _2c9402c7,
    name: "desincorporacion-propietarios___en"
  }, {
    path: "/edificios",
    component: _39d4beec,
    name: "edificios___en"
  }, {
    path: "/es",
    component: _541e4c87,
    name: "index___es"
  }, {
    path: "/estado-cuenta",
    component: _eefaca78,
    name: "estado-cuenta___en"
  }, {
    path: "/estado-cuenta-catastro",
    component: _3233eb7c,
    name: "estado-cuenta-catastro___en"
  }, {
    path: "/estado-cuenta-detalle",
    component: _2691ab24,
    name: "estado-cuenta-detalle___en"
  }, {
    path: "/estado-cuenta-detalle-catastro",
    component: _3c2779d8,
    name: "estado-cuenta-detalle-catastro___en"
  }, {
    path: "/estado-cuenta-detalle-hacienda",
    component: _70f89f98,
    name: "estado-cuenta-detalle-hacienda___en"
  }, {
    path: "/estado-cuenta-hacienda",
    component: _7242409e,
    name: "estado-cuenta-hacienda___en"
  }, {
    path: "/estatus-inmueble",
    component: _49cd7a34,
    name: "estatus-inmueble___en"
  }, {
    path: "/fines-fiscales",
    component: _41a5b15b,
    name: "fines-fiscales___en"
  }, {
    path: "/flow",
    component: _74e90b09,
    name: "flow___en"
  }, {
    path: "/flow-devueltos",
    component: _abcb5ae6,
    name: "flow-devueltos___en"
  }, {
    path: "/flow-por-enviar",
    component: _2166fa7b,
    name: "flow-por-enviar___en"
  }, {
    path: "/flow-por-procesar",
    component: _0f443c63,
    name: "flow-por-procesar___en"
  }, {
    path: "/flow-por-recibir",
    component: _2c9458d4,
    name: "flow-por-recibir___en"
  }, {
    path: "/forma",
    component: _1fa7db5c,
    name: "forma___en"
  }, {
    path: "/IC-estado-cuenta",
    component: _be24b512,
    name: "IC-estado-cuenta___en"
  }, {
    path: "/impuestos-pago",
    component: _f29babc0,
    name: "impuestos-pago___en"
  }, {
    path: "/inscripcion-inmueble",
    component: _41046902,
    name: "inscripcion-inmueble___en"
  }, {
    path: "/liquidacion",
    component: _a32b6a42,
    name: "liquidacion___en"
  }, {
    path: "/liquidacion-multiple",
    component: _16cbbcee,
    name: "liquidacion-multiple___en"
  }, {
    path: "/login",
    component: _1dc5ef9e,
    name: "login___en"
  }, {
    path: "/maestro-patente",
    component: _2124f254,
    name: "maestro-patente___en"
  }, {
    path: "/manzana",
    component: _a60d722e,
    name: "manzana___en"
  }, {
    path: "/modificar-datos",
    component: _249d638d,
    name: "modificar-datos___en"
  }, {
    path: "/moneda",
    component: _f723739e,
    name: "moneda___en"
  }, {
    path: "/nivel-inmueble",
    component: _dbec6d2e,
    name: "nivel-inmueble___en"
  }, {
    path: "/parcela",
    component: _37ad4eed,
    name: "parcela___en"
  }, {
    path: "/patente",
    component: _19efbef2,
    name: "patente___en"
  }, {
    path: "/planilla-desincorporacion",
    component: _44e0d9a3,
    name: "planilla-desincorporacion___en"
  }, {
    path: "/recaudacion",
    component: _d076870a,
    name: "recaudacion___en"
  }, {
    path: "/recaudacion-multiple",
    component: _5a615ad2,
    name: "recaudacion-multiple___en"
  }, {
    path: "/regimen",
    component: _422c3f54,
    name: "regimen___en"
  }, {
    path: "/reporte-corridasbancarias",
    component: _d47f4554,
    name: "reporte-corridasbancarias___en"
  }, {
    path: "/reporte-ejemplo",
    component: _0426c21f,
    name: "reporte-ejemplo___en"
  }, {
    path: "/reporte-ejemplo1",
    component: _fe89d8bc,
    name: "reporte-ejemplo1___en"
  }, {
    path: "/reporte-recaudos",
    component: _f7520a0a,
    name: "reporte-recaudos___en"
  }, {
    path: "/reporte-taquilla",
    component: _17e835c0,
    name: "reporte-taquilla___en"
  }, {
    path: "/sector",
    component: _2a000081,
    name: "sector___en"
  }, {
    path: "/servicios",
    component: _655bcbdc,
    name: "servicios___en"
  }, {
    path: "/sub-parcela",
    component: _6aa5ef40,
    name: "sub-parcela___en"
  }, {
    path: "/tasa-multa",
    component: _b9343d0c,
    name: "tasa-multa___en"
  }, {
    path: "/tipo-desincorporacion",
    component: _61594750,
    name: "tipo-desincorporacion___en"
  }, {
    path: "/tipo-documento",
    component: _60aa8af6,
    name: "tipo-documento___en"
  }, {
    path: "/tipo-especial",
    component: _876adf3c,
    name: "tipo-especial___en"
  }, {
    path: "/tipo-inmueble",
    component: _6c44abde,
    name: "tipo-inmueble___en"
  }, {
    path: "/tipo-pago",
    component: _57b70272,
    name: "tipo-pago___en"
  }, {
    path: "/tipo-tenencia",
    component: _68f1e4a3,
    name: "tipo-tenencia___en"
  }, {
    path: "/tipo-transaccion",
    component: _ae2eae5e,
    name: "tipo-transaccion___en"
  }, {
    path: "/tipologia",
    component: _29246edd,
    name: "tipologia___en"
  }, {
    path: "/topografia",
    component: _e796a986,
    name: "topografia___en"
  }, {
    path: "/torres",
    component: _f74ed8f8,
    name: "torres___en"
  }, {
    path: "/ubicacion",
    component: _d948c958,
    name: "ubicacion___en"
  }, {
    path: "/unidad-inmueble",
    component: _34e7ea4e,
    name: "unidad-inmueble___en"
  }, {
    path: "/unidad-tributaria",
    component: _2b3b74aa,
    name: "unidad-tributaria___en"
  }, {
    path: "/upload-archivo",
    component: _1a165a1b,
    name: "upload-archivo___en"
  }, {
    path: "/upload-corrida",
    component: _065529c9,
    name: "upload-corrida___en"
  }, {
    path: "/urbanizacion-barrio",
    component: _24993a24,
    name: "urbanizacion-barrio___en"
  }, {
    path: "/uso",
    component: _10ef55f4,
    name: "uso___en"
  }, {
    path: "/zona",
    component: _2e486083,
    name: "zona___en"
  }, {
    path: "/es/acceso",
    component: _7d0e5d0a,
    name: "acceso___es"
  }, {
    path: "/es/actualizacion-inmueble",
    component: _0d119478,
    name: "actualizacion-inmueble___es"
  }, {
    path: "/es/actualizacion-inmueble-sindico",
    component: _33f48b80,
    name: "actualizacion-inmueble-sindico___es"
  }, {
    path: "/es/actualizacion-inmueble%20copy",
    component: _22e31801,
    name: "actualizacion-inmueble copy___es"
  }, {
    path: "/es/actualizacion-propietarios",
    component: _16a22c28,
    name: "actualizacion-propietarios___es"
  }, {
    path: "/es/actualizacion-ubicacion-parcela",
    component: _d759198e,
    name: "actualizacion-ubicacion-parcela___es"
  }, {
    path: "/es/actualizar-construccion",
    component: _0f5bcd74,
    name: "actualizar-construccion___es"
  }, {
    path: "/es/actualizar-documento-propiedad",
    component: _2a3fc7e6,
    name: "actualizar-documento-propiedad___es"
  }, {
    path: "/es/actualizar-documentos-pendientes",
    component: _27d80687,
    name: "actualizar-documentos-pendientes___es"
  }, {
    path: "/es/actualizar-terreno",
    component: _4e921d53,
    name: "actualizar-terreno___es"
  }, {
    path: "/es/actualizar-valoracion-economica",
    component: _7490ced3,
    name: "actualizar-valoracion-economica___es"
  }, {
    path: "/es/actualizar-valoracion-economica-2024",
    component: _11987b6a,
    name: "actualizar-valoracion-economica-2024___es"
  }, {
    path: "/es/ambito",
    component: _0cdc7f6e,
    name: "ambito___es"
  }, {
    path: "/es/avenida",
    component: _3d728fbd,
    name: "avenida___es"
  }, {
    path: "/es/bcv",
    component: _20f1ec6c,
    name: "bcv___es"
  }, {
    path: "/es/calle",
    component: _462c72fc,
    name: "calle___es"
  }, {
    path: "/es/cedula-catastral",
    component: _9e9b9cb2,
    name: "cedula-catastral___es"
  }, {
    path: "/es/conjuntos-residenciales",
    component: _5e20ffc2,
    name: "conjuntos-residenciales___es"
  }, {
    path: "/es/consulta-contribuyente",
    component: _2b4bf01a,
    name: "consulta-contribuyente___es"
  }, {
    path: "/es/consulta-inmueble",
    component: _350d6670,
    name: "consulta-inmueble___es"
  }, {
    path: "/es/consulta-inmueble%20copy",
    component: _79a71a56,
    name: "consulta-inmueble copy___es"
  }, {
    path: "/es/crear-contribuyente",
    component: _57841e06,
    name: "crear-contribuyente___es"
  }, {
    path: "/es/dashboard",
    component: _1b8706c9,
    name: "dashboard___es"
  }, {
    path: "/es/dashboard%20-flujo",
    component: _4772cfce,
    name: "dashboard -flujo___es"
  }, {
    path: "/es/desincorporacion-inmueble",
    component: _3fe333e3,
    name: "desincorporacion-inmueble___es"
  }, {
    path: "/es/desincorporacion-propietarios",
    component: _2c9402c7,
    name: "desincorporacion-propietarios___es"
  }, {
    path: "/es/edificios",
    component: _39d4beec,
    name: "edificios___es"
  }, {
    path: "/es/estado-cuenta",
    component: _eefaca78,
    name: "estado-cuenta___es"
  }, {
    path: "/es/estado-cuenta-catastro",
    component: _3233eb7c,
    name: "estado-cuenta-catastro___es"
  }, {
    path: "/es/estado-cuenta-detalle",
    component: _2691ab24,
    name: "estado-cuenta-detalle___es"
  }, {
    path: "/es/estado-cuenta-detalle-catastro",
    component: _3c2779d8,
    name: "estado-cuenta-detalle-catastro___es"
  }, {
    path: "/es/estado-cuenta-detalle-hacienda",
    component: _70f89f98,
    name: "estado-cuenta-detalle-hacienda___es"
  }, {
    path: "/es/estado-cuenta-hacienda",
    component: _7242409e,
    name: "estado-cuenta-hacienda___es"
  }, {
    path: "/es/estatus-inmueble",
    component: _49cd7a34,
    name: "estatus-inmueble___es"
  }, {
    path: "/es/fines-fiscales",
    component: _41a5b15b,
    name: "fines-fiscales___es"
  }, {
    path: "/es/flow",
    component: _74e90b09,
    name: "flow___es"
  }, {
    path: "/es/flow-devueltos",
    component: _abcb5ae6,
    name: "flow-devueltos___es"
  }, {
    path: "/es/flow-por-enviar",
    component: _2166fa7b,
    name: "flow-por-enviar___es"
  }, {
    path: "/es/flow-por-procesar",
    component: _0f443c63,
    name: "flow-por-procesar___es"
  }, {
    path: "/es/flow-por-recibir",
    component: _2c9458d4,
    name: "flow-por-recibir___es"
  }, {
    path: "/es/forma",
    component: _1fa7db5c,
    name: "forma___es"
  }, {
    path: "/es/IC-estado-cuenta",
    component: _be24b512,
    name: "IC-estado-cuenta___es"
  }, {
    path: "/es/impuestos-pago",
    component: _f29babc0,
    name: "impuestos-pago___es"
  }, {
    path: "/es/inscripcion-inmueble",
    component: _41046902,
    name: "inscripcion-inmueble___es"
  }, {
    path: "/es/liquidacion",
    component: _a32b6a42,
    name: "liquidacion___es"
  }, {
    path: "/es/liquidacion-multiple",
    component: _16cbbcee,
    name: "liquidacion-multiple___es"
  }, {
    path: "/es/login",
    component: _1dc5ef9e,
    name: "login___es"
  }, {
    path: "/es/maestro-patente",
    component: _2124f254,
    name: "maestro-patente___es"
  }, {
    path: "/es/manzana",
    component: _a60d722e,
    name: "manzana___es"
  }, {
    path: "/es/modificar-datos",
    component: _249d638d,
    name: "modificar-datos___es"
  }, {
    path: "/es/moneda",
    component: _f723739e,
    name: "moneda___es"
  }, {
    path: "/es/nivel-inmueble",
    component: _dbec6d2e,
    name: "nivel-inmueble___es"
  }, {
    path: "/es/parcela",
    component: _37ad4eed,
    name: "parcela___es"
  }, {
    path: "/es/patente",
    component: _19efbef2,
    name: "patente___es"
  }, {
    path: "/es/planilla-desincorporacion",
    component: _44e0d9a3,
    name: "planilla-desincorporacion___es"
  }, {
    path: "/es/recaudacion",
    component: _d076870a,
    name: "recaudacion___es"
  }, {
    path: "/es/recaudacion-multiple",
    component: _5a615ad2,
    name: "recaudacion-multiple___es"
  }, {
    path: "/es/regimen",
    component: _422c3f54,
    name: "regimen___es"
  }, {
    path: "/es/reporte-corridasbancarias",
    component: _d47f4554,
    name: "reporte-corridasbancarias___es"
  }, {
    path: "/es/reporte-ejemplo",
    component: _0426c21f,
    name: "reporte-ejemplo___es"
  }, {
    path: "/es/reporte-ejemplo1",
    component: _fe89d8bc,
    name: "reporte-ejemplo1___es"
  }, {
    path: "/es/reporte-recaudos",
    component: _f7520a0a,
    name: "reporte-recaudos___es"
  }, {
    path: "/es/reporte-taquilla",
    component: _17e835c0,
    name: "reporte-taquilla___es"
  }, {
    path: "/es/sector",
    component: _2a000081,
    name: "sector___es"
  }, {
    path: "/es/servicios",
    component: _655bcbdc,
    name: "servicios___es"
  }, {
    path: "/es/sub-parcela",
    component: _6aa5ef40,
    name: "sub-parcela___es"
  }, {
    path: "/es/tasa-multa",
    component: _b9343d0c,
    name: "tasa-multa___es"
  }, {
    path: "/es/tipo-desincorporacion",
    component: _61594750,
    name: "tipo-desincorporacion___es"
  }, {
    path: "/es/tipo-documento",
    component: _60aa8af6,
    name: "tipo-documento___es"
  }, {
    path: "/es/tipo-especial",
    component: _876adf3c,
    name: "tipo-especial___es"
  }, {
    path: "/es/tipo-inmueble",
    component: _6c44abde,
    name: "tipo-inmueble___es"
  }, {
    path: "/es/tipo-pago",
    component: _57b70272,
    name: "tipo-pago___es"
  }, {
    path: "/es/tipo-tenencia",
    component: _68f1e4a3,
    name: "tipo-tenencia___es"
  }, {
    path: "/es/tipo-transaccion",
    component: _ae2eae5e,
    name: "tipo-transaccion___es"
  }, {
    path: "/es/tipologia",
    component: _29246edd,
    name: "tipologia___es"
  }, {
    path: "/es/topografia",
    component: _e796a986,
    name: "topografia___es"
  }, {
    path: "/es/torres",
    component: _f74ed8f8,
    name: "torres___es"
  }, {
    path: "/es/ubicacion",
    component: _d948c958,
    name: "ubicacion___es"
  }, {
    path: "/es/unidad-inmueble",
    component: _34e7ea4e,
    name: "unidad-inmueble___es"
  }, {
    path: "/es/unidad-tributaria",
    component: _2b3b74aa,
    name: "unidad-tributaria___es"
  }, {
    path: "/es/upload-archivo",
    component: _1a165a1b,
    name: "upload-archivo___es"
  }, {
    path: "/es/upload-corrida",
    component: _065529c9,
    name: "upload-corrida___es"
  }, {
    path: "/es/urbanizacion-barrio",
    component: _24993a24,
    name: "urbanizacion-barrio___es"
  }, {
    path: "/es/uso",
    component: _10ef55f4,
    name: "uso___es"
  }, {
    path: "/es/zona",
    component: _2e486083,
    name: "zona___es"
  }, {
    path: "/es/solicitud-inmueble-existente/:id?",
    component: _5640c2b6,
    name: "solicitud-inmueble-existente-id___es"
  }, {
    path: "/es/verification-email/:verification?",
    component: _6dfd83f0,
    name: "verification-email-verification___es"
  }, {
    path: "/solicitud-inmueble-existente/:id?",
    component: _5640c2b6,
    name: "solicitud-inmueble-existente-id___en"
  }, {
    path: "/verification-email/:verification?",
    component: _6dfd83f0,
    name: "verification-email-verification___en"
  }, {
    path: "/",
    component: _541e4c87,
    name: "index___en"
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
