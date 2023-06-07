import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _7d0e5d0a = () => interopDefault(import('../pages/acceso.vue' /* webpackChunkName: "pages/acceso" */))
const _0d119478 = () => interopDefault(import('../pages/actualizacion-inmueble.vue' /* webpackChunkName: "pages/actualizacion-inmueble" */))
const _0cdc7f6e = () => interopDefault(import('../pages/ambito.vue' /* webpackChunkName: "pages/ambito" */))
const _3d728fbd = () => interopDefault(import('../pages/avenida.vue' /* webpackChunkName: "pages/avenida" */))
const _20f1ec6c = () => interopDefault(import('../pages/bcv.vue' /* webpackChunkName: "pages/bcv" */))
const _462c72fc = () => interopDefault(import('../pages/calle.vue' /* webpackChunkName: "pages/calle" */))
const _9e9b9cb2 = () => interopDefault(import('../pages/cedula-catastral.vue' /* webpackChunkName: "pages/cedula-catastral" */))
const _5e20ffc2 = () => interopDefault(import('../pages/conjuntos-residenciales.vue' /* webpackChunkName: "pages/conjuntos-residenciales" */))
const _350d6670 = () => interopDefault(import('../pages/consulta-inmueble.vue' /* webpackChunkName: "pages/consulta-inmueble" */))
const _22f70331 = () => interopDefault(import('../pages/consultar-propietario.vue' /* webpackChunkName: "pages/consultar-propietario" */))
const _57841e06 = () => interopDefault(import('../pages/crear-contribuyente.vue' /* webpackChunkName: "pages/crear-contribuyente" */))
const _1b8706c9 = () => interopDefault(import('../pages/dashboard.vue' /* webpackChunkName: "pages/dashboard" */))
const _3fe333e3 = () => interopDefault(import('../pages/desincorporacion-inmueble.vue' /* webpackChunkName: "pages/desincorporacion-inmueble" */))
const _39d4beec = () => interopDefault(import('../pages/edificios.vue' /* webpackChunkName: "pages/edificios" */))
const _541e4c87 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _49cd7a34 = () => interopDefault(import('../pages/estatus-inmueble.vue' /* webpackChunkName: "pages/estatus-inmueble" */))
const _41a5b15b = () => interopDefault(import('../pages/fines-fiscales.vue' /* webpackChunkName: "pages/fines-fiscales" */))
const _74e90b09 = () => interopDefault(import('../pages/flow.vue' /* webpackChunkName: "pages/flow" */))
const _1fa7db5c = () => interopDefault(import('../pages/forma.vue' /* webpackChunkName: "pages/forma" */))
const _f29babc0 = () => interopDefault(import('../pages/impuestos-pago.vue' /* webpackChunkName: "pages/impuestos-pago" */))
const _41046902 = () => interopDefault(import('../pages/inscripcion-inmueble.vue' /* webpackChunkName: "pages/inscripcion-inmueble" */))
const _a32b6a42 = () => interopDefault(import('../pages/liquidacion.vue' /* webpackChunkName: "pages/liquidacion" */))
const _1dc5ef9e = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _a60d722e = () => interopDefault(import('../pages/manzana.vue' /* webpackChunkName: "pages/manzana" */))
const _249d638d = () => interopDefault(import('../pages/modificar-datos.vue' /* webpackChunkName: "pages/modificar-datos" */))
const _f723739e = () => interopDefault(import('../pages/moneda.vue' /* webpackChunkName: "pages/moneda" */))
const _dbec6d2e = () => interopDefault(import('../pages/nivel-inmueble.vue' /* webpackChunkName: "pages/nivel-inmueble" */))
const _37ad4eed = () => interopDefault(import('../pages/parcela.vue' /* webpackChunkName: "pages/parcela" */))
const _44e0d9a3 = () => interopDefault(import('../pages/planilla-desincorporacion.vue' /* webpackChunkName: "pages/planilla-desincorporacion" */))
const _1bc662ca = () => interopDefault(import('../pages/por_recibir.vue' /* webpackChunkName: "pages/por_recibir" */))
const _d076870a = () => interopDefault(import('../pages/recaudacion.vue' /* webpackChunkName: "pages/recaudacion" */))
const _422c3f54 = () => interopDefault(import('../pages/regimen.vue' /* webpackChunkName: "pages/regimen" */))
const _17e835c0 = () => interopDefault(import('../pages/reporte-taquilla.vue' /* webpackChunkName: "pages/reporte-taquilla" */))
const _2a000081 = () => interopDefault(import('../pages/sector.vue' /* webpackChunkName: "pages/sector" */))
const _655bcbdc = () => interopDefault(import('../pages/servicios.vue' /* webpackChunkName: "pages/servicios" */))
const _0082b28b = () => interopDefault(import('../pages/solicitud-inmueble-existente.vue' /* webpackChunkName: "pages/solicitud-inmueble-existente" */))
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
const _24993a24 = () => interopDefault(import('../pages/urbanizacion-barrio.vue' /* webpackChunkName: "pages/urbanizacion-barrio" */))
const _10ef55f4 = () => interopDefault(import('../pages/uso.vue' /* webpackChunkName: "pages/uso" */))
const _2e486083 = () => interopDefault(import('../pages/zona.vue' /* webpackChunkName: "pages/zona" */))
const _6dfd83f0 = () => interopDefault(import('../pages/verification-email/_verification.vue' /* webpackChunkName: "pages/verification-email/_verification" */))

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
    component: _7d0e5d0a,
    name: "acceso___en"
  }, {
    path: "/actualizacion-inmueble",
    component: _0d119478,
    name: "actualizacion-inmueble___en"
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
    path: "/consulta-inmueble",
    component: _350d6670,
    name: "consulta-inmueble___en"
  }, {
    path: "/consultar-propietario",
    component: _22f70331,
    name: "consultar-propietario___en"
  }, {
    path: "/crear-contribuyente",
    component: _57841e06,
    name: "crear-contribuyente___en"
  }, {
    path: "/dashboard",
    component: _1b8706c9,
    name: "dashboard___en"
  }, {
    path: "/desincorporacion-inmueble",
    component: _3fe333e3,
    name: "desincorporacion-inmueble___en"
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
    component: _6bd4ac4f,
    name: "estado-cuenta___en"
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
    path: "/forma",
    component: _1fa7db5c,
    name: "forma___en"
  }, {
    path: "/impuestos-pago",
    component: _f29babc0,
    name: "impuestos-pago___en"
  }, {
    path: "/inscripcion-inmueble",
    component: _41046902,
    name: "inscripcion-inmueble___en"
  }, {
    path: "/login",
    component: _1dc5ef9e,
    name: "login___en"
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
    path: "/planilla-desincorporacion",
    component: _44e0d9a3,
    name: "planilla-desincorporacion___en"
  }, {
    path: "/por_recibir",
    component: _1bc662ca,
    name: "por_recibir___en"
  }, {
    path: "/recaudacion",
    component: _d076870a,
    name: "recaudacion___en"
  }, {
    path: "/regimen",
    component: _422c3f54,
    name: "regimen___en"
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
    path: "/solicitud-inmueble-existente",
    component: _0082b28b,
    name: "solicitud-inmueble-existente___en"
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
    path: "/es/consulta-inmueble",
    component: _350d6670,
    name: "consulta-inmueble___es"
  }, {
    path: "/es/consultar-propietario",
    component: _22f70331,
    name: "consultar-propietario___es"
  }, {
    path: "/es/crear-contribuyente",
    component: _57841e06,
    name: "crear-contribuyente___es"
  }, {
    path: "/es/dashboard",
    component: _1b8706c9,
    name: "dashboard___es"
  }, {
    path: "/es/desincorporacion-inmueble",
    component: _3fe333e3,
    name: "desincorporacion-inmueble___es"
  }, {
    path: "/es/edificios",
    component: _39d4beec,
    name: "edificios___es"
  }, {
    path: "/es/estado-cuenta",
    component: _6bd4ac4f,
    name: "estado-cuenta___es"
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
    path: "/es/forma",
    component: _1fa7db5c,
    name: "forma___es"
  }, {
    path: "/es/impuestos-pago",
    component: _f29babc0,
    name: "impuestos-pago___es"
  }, {
    path: "/es/inscripcion-inmueble",
    component: _41046902,
    name: "inscripcion-inmueble___es"
  }, {
    path: "/es/login",
    component: _1dc5ef9e,
    name: "login___es"
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
    path: "/es/planilla-desincorporacion",
    component: _44e0d9a3,
    name: "planilla-desincorporacion___es"
  }, {
    path: "/es/por_recibir",
    component: _1bc662ca,
    name: "por_recibir___es"
  }, {
    path: "/es/recaudacion",
    component: _d076870a,
    name: "recaudacion___es"
  }, {
    path: "/es/regimen",
    component: _422c3f54,
    name: "regimen___es"
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
    path: "/es/solicitud-inmueble-existente",
    component: _0082b28b,
    name: "solicitud-inmueble-existente___es"
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
    path: "/es/verification-email/:verification?",
    component: _6dfd83f0,
    name: "verification-email-verification___es"
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
