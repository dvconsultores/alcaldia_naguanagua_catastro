import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _397c9650 = () => interopDefault(import('../pages/acceso.vue' /* webpackChunkName: "pages/acceso" */))
const _36c8b099 = () => interopDefault(import('../pages/actualizacion-inmueble.vue' /* webpackChunkName: "pages/actualizacion-inmueble" */))
const _0660347d = () => interopDefault(import('../pages/actualizacion-propietarios.vue' /* webpackChunkName: "pages/actualizacion-propietarios" */))
const _03265804 = () => interopDefault(import('../pages/actualizacion-ubicacion-parcela.vue' /* webpackChunkName: "pages/actualizacion-ubicacion-parcela" */))
const _7c39ad3f = () => interopDefault(import('../pages/actualizar-construccion.vue' /* webpackChunkName: "pages/actualizar-construccion" */))
const _4107f1e2 = () => interopDefault(import('../pages/actualizar-documento-propiedad.vue' /* webpackChunkName: "pages/actualizar-documento-propiedad" */))
const _d93c89c8 = () => interopDefault(import('../pages/actualizar-documentos-pendientes.vue' /* webpackChunkName: "pages/actualizar-documentos-pendientes" */))
const _c3d76ab0 = () => interopDefault(import('../pages/actualizar-terreno.vue' /* webpackChunkName: "pages/actualizar-terreno" */))
const _393898c4 = () => interopDefault(import('../pages/actualizar-valoracion-economica.vue' /* webpackChunkName: "pages/actualizar-valoracion-economica" */))
const _7195851e = () => interopDefault(import('../pages/ambito.vue' /* webpackChunkName: "pages/ambito" */))
const _743134f0 = () => interopDefault(import('../pages/avenida.vue' /* webpackChunkName: "pages/avenida" */))
const _6c6705d6 = () => interopDefault(import('../pages/bcv.vue' /* webpackChunkName: "pages/bcv" */))
const _b63b80f2 = () => interopDefault(import('../pages/calle.vue' /* webpackChunkName: "pages/calle" */))
const _3c19b03c = () => interopDefault(import('../pages/cedula-catastral.vue' /* webpackChunkName: "pages/cedula-catastral" */))
const _6a0240e6 = () => interopDefault(import('../pages/conjuntos-residenciales.vue' /* webpackChunkName: "pages/conjuntos-residenciales" */))
const _1695ba7b = () => interopDefault(import('../pages/consulta-inmueble.vue' /* webpackChunkName: "pages/consulta-inmueble" */))
const _be5f4c88 = () => interopDefault(import('../pages/consultar-propietario.vue' /* webpackChunkName: "pages/consultar-propietario" */))
const _0f70c95e = () => interopDefault(import('../pages/crear-contribuyente.vue' /* webpackChunkName: "pages/crear-contribuyente" */))
const _5a1d95d4 = () => interopDefault(import('../pages/dashboard.vue' /* webpackChunkName: "pages/dashboard" */))
const _5a4b633a = () => interopDefault(import('../pages/dashboard -flujo.vue' /* webpackChunkName: "pages/dashboard -flujo" */))
const _266f6624 = () => interopDefault(import('../pages/desincorporacion-inmueble.vue' /* webpackChunkName: "pages/desincorporacion-inmueble" */))
const _786b4df7 = () => interopDefault(import('../pages/edificios.vue' /* webpackChunkName: "pages/edificios" */))
const _9a57cddc = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _24378517 = () => interopDefault(import('../pages/estado-cuenta-catastro.vue' /* webpackChunkName: "pages/estado-cuenta-catastro" */))
const _c3003cd2 = () => interopDefault(import('../pages/estado-cuenta-taquilla.vue' /* webpackChunkName: "pages/estado-cuenta-taquilla" */))
const _55960e6e = () => interopDefault(import('../pages/estatus-inmueble.vue' /* webpackChunkName: "pages/estatus-inmueble" */))
const _6ed45da0 = () => interopDefault(import('../pages/fines-fiscales.vue' /* webpackChunkName: "pages/fines-fiscales" */))
const _395bfdc4 = () => interopDefault(import('../pages/flow.vue' /* webpackChunkName: "pages/flow" */))
const _310a7262 = () => interopDefault(import('../pages/flow-devueltos.vue' /* webpackChunkName: "pages/flow-devueltos" */))
const _109073f8 = () => interopDefault(import('../pages/flow-old.vue' /* webpackChunkName: "pages/flow-old" */))
const _787ad546 = () => interopDefault(import('../pages/flow-por-enviar.vue' /* webpackChunkName: "pages/flow-por-enviar" */))
const _1e66df24 = () => interopDefault(import('../pages/flow-por-procesar.vue' /* webpackChunkName: "pages/flow-por-procesar" */))
const _9008512e = () => interopDefault(import('../pages/flow-por-recibir.vue' /* webpackChunkName: "pages/flow-por-recibir" */))
const _4ee1dedd = () => interopDefault(import('../pages/forma.vue' /* webpackChunkName: "pages/forma" */))
const _0da249f5 = () => interopDefault(import('../pages/impuestos-pago.vue' /* webpackChunkName: "pages/impuestos-pago" */))
const _8e9ed5d2 = () => interopDefault(import('../pages/inscripcion-inmueble.vue' /* webpackChunkName: "pages/inscripcion-inmueble" */))
const _bccd79ac = () => interopDefault(import('../pages/liquidacion.vue' /* webpackChunkName: "pages/liquidacion" */))
const _7c7bbc29 = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _356e1cb4 = () => interopDefault(import('../pages/manzana.vue' /* webpackChunkName: "pages/manzana" */))
const _7bb13e58 = () => interopDefault(import('../pages/modificar-datos.vue' /* webpackChunkName: "pages/modificar-datos" */))
const _071be9f4 = () => interopDefault(import('../pages/moneda.vue' /* webpackChunkName: "pages/moneda" */))
const _18f9e93e = () => interopDefault(import('../pages/nivel-inmueble.vue' /* webpackChunkName: "pages/nivel-inmueble" */))
const _7fbbb690 = () => interopDefault(import('../pages/parcela.vue' /* webpackChunkName: "pages/parcela" */))
const _1c741aa4 = () => interopDefault(import('../pages/planilla-desincorporacion.vue' /* webpackChunkName: "pages/planilla-desincorporacion" */))
const _ea189674 = () => interopDefault(import('../pages/recaudacion.vue' /* webpackChunkName: "pages/recaudacion" */))
const _675eb621 = () => interopDefault(import('../pages/regimen.vue' /* webpackChunkName: "pages/regimen" */))
const _7f7363b5 = () => interopDefault(import('../pages/reporte-taquilla.vue' /* webpackChunkName: "pages/reporte-taquilla" */))
const _bbf87554 = () => interopDefault(import('../pages/sector.vue' /* webpackChunkName: "pages/sector" */))
const _0be8a91d = () => interopDefault(import('../pages/servicios.vue' /* webpackChunkName: "pages/servicios" */))
const _8447feaa = () => interopDefault(import('../pages/sub-parcela.vue' /* webpackChunkName: "pages/sub-parcela" */))
const _37a133cf = () => interopDefault(import('../pages/tasa-multa.vue' /* webpackChunkName: "pages/tasa-multa" */))
const _419ac44a = () => interopDefault(import('../pages/tipo-desincorporacion.vue' /* webpackChunkName: "pages/tipo-desincorporacion" */))
const _30caaa6a = () => interopDefault(import('../pages/tipo-documento.vue' /* webpackChunkName: "pages/tipo-documento" */))
const _c0c6bc26 = () => interopDefault(import('../pages/tipo-especial.vue' /* webpackChunkName: "pages/tipo-especial" */))
const _a5a088c8 = () => interopDefault(import('../pages/tipo-inmueble.vue' /* webpackChunkName: "pages/tipo-inmueble" */))
const _12bb0dd2 = () => interopDefault(import('../pages/tipo-pago.vue' /* webpackChunkName: "pages/tipo-pago" */))
const _4c43f62e = () => interopDefault(import('../pages/tipo-tenencia.vue' /* webpackChunkName: "pages/tipo-tenencia" */))
const _34502766 = () => interopDefault(import('../pages/tipo-transaccion.vue' /* webpackChunkName: "pages/tipo-transaccion" */))
const _67bafde8 = () => interopDefault(import('../pages/tipologia.vue' /* webpackChunkName: "pages/tipologia" */))
const _206ffd92 = () => interopDefault(import('../pages/topografia.vue' /* webpackChunkName: "pages/topografia" */))
const _07474f4e = () => interopDefault(import('../pages/torres.vue' /* webpackChunkName: "pages/torres" */))
const _5c1bab42 = () => interopDefault(import('../pages/ubicacion.vue' /* webpackChunkName: "pages/ubicacion" */))
const _e80875ce = () => interopDefault(import('../pages/unidad-inmueble.vue' /* webpackChunkName: "pages/unidad-inmueble" */))
const _0cc3c8b5 = () => interopDefault(import('../pages/unidad-tributaria.vue' /* webpackChunkName: "pages/unidad-tributaria" */))
const _75469122 = () => interopDefault(import('../pages/urbanizacion-barrio.vue' /* webpackChunkName: "pages/urbanizacion-barrio" */))
const _5c646f5e = () => interopDefault(import('../pages/uso.vue' /* webpackChunkName: "pages/uso" */))
const _c69d52d0 = () => interopDefault(import('../pages/zona.vue' /* webpackChunkName: "pages/zona" */))
const _7c6b116a = () => interopDefault(import('../pages/solicitud-inmueble-existente/_id.vue' /* webpackChunkName: "pages/solicitud-inmueble-existente/_id" */))
const _4cf18ef6 = () => interopDefault(import('../pages/verification-email/_verification.vue' /* webpackChunkName: "pages/verification-email/_verification" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/acceso",
    component: _397c9650,
    name: "acceso___en"
  }, {
    path: "/actualizacion-inmueble",
    component: _36c8b099,
    name: "actualizacion-inmueble___en"
  }, {
    path: "/actualizacion-propietarios",
    component: _0660347d,
    name: "actualizacion-propietarios___en"
  }, {
    path: "/actualizacion-ubicacion-parcela",
    component: _03265804,
    name: "actualizacion-ubicacion-parcela___en"
  }, {
    path: "/actualizar-construccion",
    component: _7c39ad3f,
    name: "actualizar-construccion___en"
  }, {
    path: "/actualizar-documento-propiedad",
    component: _4107f1e2,
    name: "actualizar-documento-propiedad___en"
  }, {
    path: "/actualizar-documentos-pendientes",
    component: _d93c89c8,
    name: "actualizar-documentos-pendientes___en"
  }, {
    path: "/actualizar-terreno",
    component: _c3d76ab0,
    name: "actualizar-terreno___en"
  }, {
    path: "/actualizar-valoracion-economica",
    component: _393898c4,
    name: "actualizar-valoracion-economica___en"
  }, {
    path: "/ambito",
    component: _7195851e,
    name: "ambito___en"
  }, {
    path: "/avenida",
    component: _743134f0,
    name: "avenida___en"
  }, {
    path: "/bcv",
    component: _6c6705d6,
    name: "bcv___en"
  }, {
    path: "/calle",
    component: _b63b80f2,
    name: "calle___en"
  }, {
    path: "/cedula-catastral",
    component: _3c19b03c,
    name: "cedula-catastral___en"
  }, {
    path: "/conjuntos-residenciales",
    component: _6a0240e6,
    name: "conjuntos-residenciales___en"
  }, {
    path: "/consulta-inmueble",
    component: _1695ba7b,
    name: "consulta-inmueble___en"
  }, {
    path: "/consultar-propietario",
    component: _be5f4c88,
    name: "consultar-propietario___en"
  }, {
    path: "/crear-contribuyente",
    component: _0f70c95e,
    name: "crear-contribuyente___en"
  }, {
    path: "/dashboard",
    component: _5a1d95d4,
    name: "dashboard___en"
  }, {
    path: "/dashboard%20-flujo",
    component: _5a4b633a,
    name: "dashboard -flujo___en"
  }, {
    path: "/desincorporacion-inmueble",
    component: _266f6624,
    name: "desincorporacion-inmueble___en"
  }, {
    path: "/edificios",
    component: _786b4df7,
    name: "edificios___en"
  }, {
    path: "/es",
    component: _9a57cddc,
    name: "index___es"
  }, {
    path: "/estado-cuenta-catastro",
    component: _24378517,
    name: "estado-cuenta-catastro___en"
  }, {
    path: "/estado-cuenta-taquilla",
    component: _c3003cd2,
    name: "estado-cuenta-taquilla___en"
  }, {
    path: "/estatus-inmueble",
    component: _55960e6e,
    name: "estatus-inmueble___en"
  }, {
    path: "/fines-fiscales",
    component: _6ed45da0,
    name: "fines-fiscales___en"
  }, {
    path: "/flow",
    component: _395bfdc4,
    name: "flow___en"
  }, {
    path: "/flow-devueltos",
    component: _310a7262,
    name: "flow-devueltos___en"
  }, {
    path: "/flow-old",
    component: _109073f8,
    name: "flow-old___en"
  }, {
    path: "/flow-por-enviar",
    component: _787ad546,
    name: "flow-por-enviar___en"
  }, {
    path: "/flow-por-procesar",
    component: _1e66df24,
    name: "flow-por-procesar___en"
  }, {
    path: "/flow-por-recibir",
    component: _9008512e,
    name: "flow-por-recibir___en"
  }, {
    path: "/forma",
    component: _4ee1dedd,
    name: "forma___en"
  }, {
    path: "/impuestos-pago",
    component: _0da249f5,
    name: "impuestos-pago___en"
  }, {
    path: "/inscripcion-inmueble",
    component: _8e9ed5d2,
    name: "inscripcion-inmueble___en"
  }, {
    path: "/liquidacion",
    component: _bccd79ac,
    name: "liquidacion___en"
  }, {
    path: "/login",
    component: _7c7bbc29,
    name: "login___en"
  }, {
    path: "/manzana",
    component: _356e1cb4,
    name: "manzana___en"
  }, {
    path: "/modificar-datos",
    component: _7bb13e58,
    name: "modificar-datos___en"
  }, {
    path: "/moneda",
    component: _071be9f4,
    name: "moneda___en"
  }, {
    path: "/nivel-inmueble",
    component: _18f9e93e,
    name: "nivel-inmueble___en"
  }, {
    path: "/parcela",
    component: _7fbbb690,
    name: "parcela___en"
  }, {
    path: "/planilla-desincorporacion",
    component: _1c741aa4,
    name: "planilla-desincorporacion___en"
  }, {
    path: "/recaudacion",
    component: _ea189674,
    name: "recaudacion___en"
  }, {
    path: "/regimen",
    component: _675eb621,
    name: "regimen___en"
  }, {
    path: "/reporte-taquilla",
    component: _7f7363b5,
    name: "reporte-taquilla___en"
  }, {
    path: "/sector",
    component: _bbf87554,
    name: "sector___en"
  }, {
    path: "/servicios",
    component: _0be8a91d,
    name: "servicios___en"
  }, {
    path: "/sub-parcela",
    component: _8447feaa,
    name: "sub-parcela___en"
  }, {
    path: "/tasa-multa",
    component: _37a133cf,
    name: "tasa-multa___en"
  }, {
    path: "/tipo-desincorporacion",
    component: _419ac44a,
    name: "tipo-desincorporacion___en"
  }, {
    path: "/tipo-documento",
    component: _30caaa6a,
    name: "tipo-documento___en"
  }, {
    path: "/tipo-especial",
    component: _c0c6bc26,
    name: "tipo-especial___en"
  }, {
    path: "/tipo-inmueble",
    component: _a5a088c8,
    name: "tipo-inmueble___en"
  }, {
    path: "/tipo-pago",
    component: _12bb0dd2,
    name: "tipo-pago___en"
  }, {
    path: "/tipo-tenencia",
    component: _4c43f62e,
    name: "tipo-tenencia___en"
  }, {
    path: "/tipo-transaccion",
    component: _34502766,
    name: "tipo-transaccion___en"
  }, {
    path: "/tipologia",
    component: _67bafde8,
    name: "tipologia___en"
  }, {
    path: "/topografia",
    component: _206ffd92,
    name: "topografia___en"
  }, {
    path: "/torres",
    component: _07474f4e,
    name: "torres___en"
  }, {
    path: "/ubicacion",
    component: _5c1bab42,
    name: "ubicacion___en"
  }, {
    path: "/unidad-inmueble",
    component: _e80875ce,
    name: "unidad-inmueble___en"
  }, {
    path: "/unidad-tributaria",
    component: _0cc3c8b5,
    name: "unidad-tributaria___en"
  }, {
    path: "/urbanizacion-barrio",
    component: _75469122,
    name: "urbanizacion-barrio___en"
  }, {
    path: "/uso",
    component: _5c646f5e,
    name: "uso___en"
  }, {
    path: "/zona",
    component: _c69d52d0,
    name: "zona___en"
  }, {
    path: "/es/acceso",
    component: _397c9650,
    name: "acceso___es"
  }, {
    path: "/es/actualizacion-inmueble",
    component: _36c8b099,
    name: "actualizacion-inmueble___es"
  }, {
    path: "/es/actualizacion-propietarios",
    component: _0660347d,
    name: "actualizacion-propietarios___es"
  }, {
    path: "/es/actualizacion-ubicacion-parcela",
    component: _03265804,
    name: "actualizacion-ubicacion-parcela___es"
  }, {
    path: "/es/actualizar-construccion",
    component: _7c39ad3f,
    name: "actualizar-construccion___es"
  }, {
    path: "/es/actualizar-documento-propiedad",
    component: _4107f1e2,
    name: "actualizar-documento-propiedad___es"
  }, {
    path: "/es/actualizar-documentos-pendientes",
    component: _d93c89c8,
    name: "actualizar-documentos-pendientes___es"
  }, {
    path: "/es/actualizar-terreno",
    component: _c3d76ab0,
    name: "actualizar-terreno___es"
  }, {
    path: "/es/actualizar-valoracion-economica",
    component: _393898c4,
    name: "actualizar-valoracion-economica___es"
  }, {
    path: "/es/ambito",
    component: _7195851e,
    name: "ambito___es"
  }, {
    path: "/es/avenida",
    component: _743134f0,
    name: "avenida___es"
  }, {
    path: "/es/bcv",
    component: _6c6705d6,
    name: "bcv___es"
  }, {
    path: "/es/calle",
    component: _b63b80f2,
    name: "calle___es"
  }, {
    path: "/es/cedula-catastral",
    component: _3c19b03c,
    name: "cedula-catastral___es"
  }, {
    path: "/es/conjuntos-residenciales",
    component: _6a0240e6,
    name: "conjuntos-residenciales___es"
  }, {
    path: "/es/consulta-inmueble",
    component: _1695ba7b,
    name: "consulta-inmueble___es"
  }, {
    path: "/es/consultar-propietario",
    component: _be5f4c88,
    name: "consultar-propietario___es"
  }, {
    path: "/es/crear-contribuyente",
    component: _0f70c95e,
    name: "crear-contribuyente___es"
  }, {
    path: "/es/dashboard",
    component: _5a1d95d4,
    name: "dashboard___es"
  }, {
    path: "/es/dashboard%20-flujo",
    component: _5a4b633a,
    name: "dashboard -flujo___es"
  }, {
    path: "/es/desincorporacion-inmueble",
    component: _266f6624,
    name: "desincorporacion-inmueble___es"
  }, {
    path: "/es/edificios",
    component: _786b4df7,
    name: "edificios___es"
  }, {
    path: "/es/estado-cuenta-catastro",
    component: _24378517,
    name: "estado-cuenta-catastro___es"
  }, {
    path: "/es/estado-cuenta-taquilla",
    component: _c3003cd2,
    name: "estado-cuenta-taquilla___es"
  }, {
    path: "/es/estatus-inmueble",
    component: _55960e6e,
    name: "estatus-inmueble___es"
  }, {
    path: "/es/fines-fiscales",
    component: _6ed45da0,
    name: "fines-fiscales___es"
  }, {
    path: "/es/flow",
    component: _395bfdc4,
    name: "flow___es"
  }, {
    path: "/es/flow-devueltos",
    component: _310a7262,
    name: "flow-devueltos___es"
  }, {
    path: "/es/flow-old",
    component: _109073f8,
    name: "flow-old___es"
  }, {
    path: "/es/flow-por-enviar",
    component: _787ad546,
    name: "flow-por-enviar___es"
  }, {
    path: "/es/flow-por-procesar",
    component: _1e66df24,
    name: "flow-por-procesar___es"
  }, {
    path: "/es/flow-por-recibir",
    component: _9008512e,
    name: "flow-por-recibir___es"
  }, {
    path: "/es/forma",
    component: _4ee1dedd,
    name: "forma___es"
  }, {
    path: "/es/impuestos-pago",
    component: _0da249f5,
    name: "impuestos-pago___es"
  }, {
    path: "/es/inscripcion-inmueble",
    component: _8e9ed5d2,
    name: "inscripcion-inmueble___es"
  }, {
    path: "/es/liquidacion",
    component: _bccd79ac,
    name: "liquidacion___es"
  }, {
    path: "/es/login",
    component: _7c7bbc29,
    name: "login___es"
  }, {
    path: "/es/manzana",
    component: _356e1cb4,
    name: "manzana___es"
  }, {
    path: "/es/modificar-datos",
    component: _7bb13e58,
    name: "modificar-datos___es"
  }, {
    path: "/es/moneda",
    component: _071be9f4,
    name: "moneda___es"
  }, {
    path: "/es/nivel-inmueble",
    component: _18f9e93e,
    name: "nivel-inmueble___es"
  }, {
    path: "/es/parcela",
    component: _7fbbb690,
    name: "parcela___es"
  }, {
    path: "/es/planilla-desincorporacion",
    component: _1c741aa4,
    name: "planilla-desincorporacion___es"
  }, {
    path: "/es/recaudacion",
    component: _ea189674,
    name: "recaudacion___es"
  }, {
    path: "/es/regimen",
    component: _675eb621,
    name: "regimen___es"
  }, {
    path: "/es/reporte-taquilla",
    component: _7f7363b5,
    name: "reporte-taquilla___es"
  }, {
    path: "/es/sector",
    component: _bbf87554,
    name: "sector___es"
  }, {
    path: "/es/servicios",
    component: _0be8a91d,
    name: "servicios___es"
  }, {
    path: "/es/sub-parcela",
    component: _8447feaa,
    name: "sub-parcela___es"
  }, {
    path: "/es/tasa-multa",
    component: _37a133cf,
    name: "tasa-multa___es"
  }, {
    path: "/es/tipo-desincorporacion",
    component: _419ac44a,
    name: "tipo-desincorporacion___es"
  }, {
    path: "/es/tipo-documento",
    component: _30caaa6a,
    name: "tipo-documento___es"
  }, {
    path: "/es/tipo-especial",
    component: _c0c6bc26,
    name: "tipo-especial___es"
  }, {
    path: "/es/tipo-inmueble",
    component: _a5a088c8,
    name: "tipo-inmueble___es"
  }, {
    path: "/es/tipo-pago",
    component: _12bb0dd2,
    name: "tipo-pago___es"
  }, {
    path: "/es/tipo-tenencia",
    component: _4c43f62e,
    name: "tipo-tenencia___es"
  }, {
    path: "/es/tipo-transaccion",
    component: _34502766,
    name: "tipo-transaccion___es"
  }, {
    path: "/es/tipologia",
    component: _67bafde8,
    name: "tipologia___es"
  }, {
    path: "/es/topografia",
    component: _206ffd92,
    name: "topografia___es"
  }, {
    path: "/es/torres",
    component: _07474f4e,
    name: "torres___es"
  }, {
    path: "/es/ubicacion",
    component: _5c1bab42,
    name: "ubicacion___es"
  }, {
    path: "/es/unidad-inmueble",
    component: _e80875ce,
    name: "unidad-inmueble___es"
  }, {
    path: "/es/unidad-tributaria",
    component: _0cc3c8b5,
    name: "unidad-tributaria___es"
  }, {
    path: "/es/urbanizacion-barrio",
    component: _75469122,
    name: "urbanizacion-barrio___es"
  }, {
    path: "/es/uso",
    component: _5c646f5e,
    name: "uso___es"
  }, {
    path: "/es/zona",
    component: _c69d52d0,
    name: "zona___es"
  }, {
    path: "/es/solicitud-inmueble-existente/:id?",
    component: _7c6b116a,
    name: "solicitud-inmueble-existente-id___es"
  }, {
    path: "/es/verification-email/:verification?",
    component: _4cf18ef6,
    name: "verification-email-verification___es"
  }, {
    path: "/solicitud-inmueble-existente/:id?",
    component: _7c6b116a,
    name: "solicitud-inmueble-existente-id___en"
  }, {
    path: "/verification-email/:verification?",
    component: _4cf18ef6,
    name: "verification-email-verification___en"
  }, {
    path: "/",
    component: _9a57cddc,
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
