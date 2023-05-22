import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _397c9650 = () => interopDefault(import('../pages/acceso.vue' /* webpackChunkName: "pages/acceso" */))
const _36c8b099 = () => interopDefault(import('../pages/actualizacion-inmueble.vue' /* webpackChunkName: "pages/actualizacion-inmueble" */))
const _7195851e = () => interopDefault(import('../pages/ambito.vue' /* webpackChunkName: "pages/ambito" */))
const _743134f0 = () => interopDefault(import('../pages/avenida.vue' /* webpackChunkName: "pages/avenida" */))
const _b63b80f2 = () => interopDefault(import('../pages/calle.vue' /* webpackChunkName: "pages/calle" */))
const _3c19b03c = () => interopDefault(import('../pages/cedula-catastral.vue' /* webpackChunkName: "pages/cedula-catastral" */))
const _6a0240e6 = () => interopDefault(import('../pages/conjuntos-residenciales.vue' /* webpackChunkName: "pages/conjuntos-residenciales" */))
const _be5f4c88 = () => interopDefault(import('../pages/consultar-propietario.vue' /* webpackChunkName: "pages/consultar-propietario" */))
const _0f70c95e = () => interopDefault(import('../pages/crear-contribuyente.vue' /* webpackChunkName: "pages/crear-contribuyente" */))
const _5a1d95d4 = () => interopDefault(import('../pages/dashboard.vue' /* webpackChunkName: "pages/dashboard" */))
const _266f6624 = () => interopDefault(import('../pages/desincorporacion-inmueble.vue' /* webpackChunkName: "pages/desincorporacion-inmueble" */))
const _786b4df7 = () => interopDefault(import('../pages/edificios.vue' /* webpackChunkName: "pages/edificios" */))
const _9a57cddc = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _55960e6e = () => interopDefault(import('../pages/estatus-inmueble.vue' /* webpackChunkName: "pages/estatus-inmueble" */))
const _6ed45da0 = () => interopDefault(import('../pages/fines-fiscales.vue' /* webpackChunkName: "pages/fines-fiscales" */))
const _4ee1dedd = () => interopDefault(import('../pages/forma.vue' /* webpackChunkName: "pages/forma" */))
const _0da249f5 = () => interopDefault(import('../pages/impuestos-pago.vue' /* webpackChunkName: "pages/impuestos-pago" */))
const _8e9ed5d2 = () => interopDefault(import('../pages/inscripcion-inmueble.vue' /* webpackChunkName: "pages/inscripcion-inmueble" */))
const _bccd79ac = () => interopDefault(import('../pages/liquidacion.vue' /* webpackChunkName: "pages/liquidacion" */))
const _7c7bbc29 = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _356e1cb4 = () => interopDefault(import('../pages/manzana.vue' /* webpackChunkName: "pages/manzana" */))
const _7bb13e58 = () => interopDefault(import('../pages/modificar-datos.vue' /* webpackChunkName: "pages/modificar-datos" */))
const _18f9e93e = () => interopDefault(import('../pages/nivel-inmueble.vue' /* webpackChunkName: "pages/nivel-inmueble" */))
const _7fbbb690 = () => interopDefault(import('../pages/parcela.vue' /* webpackChunkName: "pages/parcela" */))
const _1c741aa4 = () => interopDefault(import('../pages/planilla-desincorporacion.vue' /* webpackChunkName: "pages/planilla-desincorporacion" */))
const _ea189674 = () => interopDefault(import('../pages/recaudacion.vue' /* webpackChunkName: "pages/recaudacion" */))
const _675eb621 = () => interopDefault(import('../pages/regimen.vue' /* webpackChunkName: "pages/regimen" */))
const _7f7363b5 = () => interopDefault(import('../pages/reporte-taquilla.vue' /* webpackChunkName: "pages/reporte-taquilla" */))
const _bbf87554 = () => interopDefault(import('../pages/sector.vue' /* webpackChunkName: "pages/sector" */))
const _0be8a91d = () => interopDefault(import('../pages/servicios.vue' /* webpackChunkName: "pages/servicios" */))
const _0e400cc0 = () => interopDefault(import('../pages/solicitud-inmueble-existente.vue' /* webpackChunkName: "pages/solicitud-inmueble-existente" */))
const _8447feaa = () => interopDefault(import('../pages/sub-parcela.vue' /* webpackChunkName: "pages/sub-parcela" */))
const _419ac44a = () => interopDefault(import('../pages/tipo-desincorporacion.vue' /* webpackChunkName: "pages/tipo-desincorporacion" */))
const _30caaa6a = () => interopDefault(import('../pages/tipo-documento.vue' /* webpackChunkName: "pages/tipo-documento" */))
const _c0c6bc26 = () => interopDefault(import('../pages/tipo-especial.vue' /* webpackChunkName: "pages/tipo-especial" */))
const _a5a088c8 = () => interopDefault(import('../pages/tipo-inmueble.vue' /* webpackChunkName: "pages/tipo-inmueble" */))
const _4c43f62e = () => interopDefault(import('../pages/tipo-tenencia.vue' /* webpackChunkName: "pages/tipo-tenencia" */))
const _34502766 = () => interopDefault(import('../pages/tipo-transaccion.vue' /* webpackChunkName: "pages/tipo-transaccion" */))
const _67bafde8 = () => interopDefault(import('../pages/tipologia.vue' /* webpackChunkName: "pages/tipologia" */))
const _206ffd92 = () => interopDefault(import('../pages/topografia.vue' /* webpackChunkName: "pages/topografia" */))
const _07474f4e = () => interopDefault(import('../pages/torres.vue' /* webpackChunkName: "pages/torres" */))
const _5c1bab42 = () => interopDefault(import('../pages/ubicacion.vue' /* webpackChunkName: "pages/ubicacion" */))
const _e80875ce = () => interopDefault(import('../pages/unidad-inmueble.vue' /* webpackChunkName: "pages/unidad-inmueble" */))
const _75469122 = () => interopDefault(import('../pages/urbanizacion-barrio.vue' /* webpackChunkName: "pages/urbanizacion-barrio" */))
const _5c646f5e = () => interopDefault(import('../pages/uso.vue' /* webpackChunkName: "pages/uso" */))
const _c69d52d0 = () => interopDefault(import('../pages/zona.vue' /* webpackChunkName: "pages/zona" */))
const _4cf18ef6 = () => interopDefault(import('../pages/verification-email/_verification.vue' /* webpackChunkName: "pages/verification-email/_verification" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/alcaldia/',
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
    path: "/ambito",
    component: _7195851e,
    name: "ambito___en"
  }, {
    path: "/avenida",
    component: _743134f0,
    name: "avenida___en"
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
    path: "/estatus-inmueble",
    component: _55960e6e,
    name: "estatus-inmueble___en"
  }, {
    path: "/fines-fiscales",
    component: _6ed45da0,
    name: "fines-fiscales___en"
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
    path: "/solicitud-inmueble-existente",
    component: _0e400cc0,
    name: "solicitud-inmueble-existente___en"
  }, {
    path: "/sub-parcela",
    component: _8447feaa,
    name: "sub-parcela___en"
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
    path: "/es/ambito",
    component: _7195851e,
    name: "ambito___es"
  }, {
    path: "/es/avenida",
    component: _743134f0,
    name: "avenida___es"
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
    path: "/es/desincorporacion-inmueble",
    component: _266f6624,
    name: "desincorporacion-inmueble___es"
  }, {
    path: "/es/edificios",
    component: _786b4df7,
    name: "edificios___es"
  }, {
    path: "/es/estatus-inmueble",
    component: _55960e6e,
    name: "estatus-inmueble___es"
  }, {
    path: "/es/fines-fiscales",
    component: _6ed45da0,
    name: "fines-fiscales___es"
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
    path: "/es/solicitud-inmueble-existente",
    component: _0e400cc0,
    name: "solicitud-inmueble-existente___es"
  }, {
    path: "/es/sub-parcela",
    component: _8447feaa,
    name: "sub-parcela___es"
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
    path: "/es/verification-email/:verification?",
    component: _4cf18ef6,
    name: "verification-email-verification___es"
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
