import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _8da6c732 = () => interopDefault(import('../pages/actualizacion-inmueble.vue' /* webpackChunkName: "pages/actualizacion-inmueble" */))
const _b8d3e2ec = () => interopDefault(import('../pages/cedula-catastral.vue' /* webpackChunkName: "pages/cedula-catastral" */))
const _d5cf2502 = () => interopDefault(import('../pages/conjuntos-residenciales.vue' /* webpackChunkName: "pages/conjuntos-residenciales" */))
const _7378bc2e = () => interopDefault(import('../pages/consultar-propietario.vue' /* webpackChunkName: "pages/consultar-propietario" */))
const _8bac1b7a = () => interopDefault(import('../pages/crear-contribuyente.vue' /* webpackChunkName: "pages/crear-contribuyente" */))
const _3c009346 = () => interopDefault(import('../pages/dashboard.vue' /* webpackChunkName: "pages/dashboard" */))
const _d293b340 = () => interopDefault(import('../pages/desincorporacion-inmueble.vue' /* webpackChunkName: "pages/desincorporacion-inmueble" */))
const _5a4e4b69 = () => interopDefault(import('../pages/edificios.vue' /* webpackChunkName: "pages/edificios" */))
const _2da39f84 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _f4c4387a = () => interopDefault(import('../pages/impuestos-pago.vue' /* webpackChunkName: "pages/impuestos-pago" */))
const _33191c65 = () => interopDefault(import('../pages/inscripcion-inmueble.vue' /* webpackChunkName: "pages/inscripcion-inmueble" */))
const _d29aa7c8 = () => interopDefault(import('../pages/liquidacion.vue' /* webpackChunkName: "pages/liquidacion" */))
const _11697aca = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _3a75cea6 = () => interopDefault(import('../pages/manzana.vue' /* webpackChunkName: "pages/manzana" */))
const _0328de4a = () => interopDefault(import('../pages/modificar-datos.vue' /* webpackChunkName: "pages/modificar-datos" */))
const _75ac52ac = () => interopDefault(import('../pages/parcela.vue' /* webpackChunkName: "pages/parcela" */))
const _c89867c0 = () => interopDefault(import('../pages/planilla-desincorporacion.vue' /* webpackChunkName: "pages/planilla-desincorporacion" */))
const _ffe5c490 = () => interopDefault(import('../pages/recaudacion.vue' /* webpackChunkName: "pages/recaudacion" */))
const _32207bfa = () => interopDefault(import('../pages/reporte-taquilla.vue' /* webpackChunkName: "pages/reporte-taquilla" */))
const _fdb5e5b8 = () => interopDefault(import('../pages/sector.vue' /* webpackChunkName: "pages/sector" */))
const _62a95a24 = () => interopDefault(import('../pages/solicitud-inmueble-existente.vue' /* webpackChunkName: "pages/solicitud-inmueble-existente" */))
const _9a152cc6 = () => interopDefault(import('../pages/sub-parcela.vue' /* webpackChunkName: "pages/sub-parcela" */))
const _4904bfb2 = () => interopDefault(import('../pages/torres.vue' /* webpackChunkName: "pages/torres" */))
const _f181e33e = () => interopDefault(import('../pages/urbanizacion-barrio.vue' /* webpackChunkName: "pages/urbanizacion-barrio" */))
const _876d8a5a = () => interopDefault(import('../pages/verification-email/_verification.vue' /* webpackChunkName: "pages/verification-email/_verification" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/actualizacion-inmueble",
    component: _8da6c732,
    name: "actualizacion-inmueble___en"
  }, {
    path: "/cedula-catastral",
    component: _b8d3e2ec,
    name: "cedula-catastral___en"
  }, {
    path: "/conjuntos-residenciales",
    component: _d5cf2502,
    name: "conjuntos-residenciales___en"
  }, {
    path: "/consultar-propietario",
    component: _7378bc2e,
    name: "consultar-propietario___en"
  }, {
    path: "/crear-contribuyente",
    component: _8bac1b7a,
    name: "crear-contribuyente___en"
  }, {
    path: "/dashboard",
    component: _3c009346,
    name: "dashboard___en"
  }, {
    path: "/desincorporacion-inmueble",
    component: _d293b340,
    name: "desincorporacion-inmueble___en"
  }, {
    path: "/edificios",
    component: _5a4e4b69,
    name: "edificios___en"
  }, {
    path: "/es",
    component: _2da39f84,
    name: "index___es"
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
    path: "/login",
    component: _11697aca,
    name: "login___en"
  }, {
    path: "/manzana",
    component: _3a75cea6,
    name: "manzana___en"
  }, {
    path: "/modificar-datos",
    component: _0328de4a,
    name: "modificar-datos___en"
  }, {
    path: "/parcela",
    component: _75ac52ac,
    name: "parcela___en"
  }, {
    path: "/planilla-desincorporacion",
    component: _c89867c0,
    name: "planilla-desincorporacion___en"
  }, {
    path: "/recaudacion",
    component: _ffe5c490,
    name: "recaudacion___en"
  }, {
    path: "/reporte-taquilla",
    component: _32207bfa,
    name: "reporte-taquilla___en"
  }, {
    path: "/sector",
    component: _fdb5e5b8,
    name: "sector___en"
  }, {
    path: "/solicitud-inmueble-existente",
    component: _62a95a24,
    name: "solicitud-inmueble-existente___en"
  }, {
    path: "/sub-parcela",
    component: _9a152cc6,
    name: "sub-parcela___en"
  }, {
    path: "/torres",
    component: _4904bfb2,
    name: "torres___en"
  }, {
    path: "/urbanizacion-barrio",
    component: _f181e33e,
    name: "urbanizacion-barrio___en"
  }, {
    path: "/es/actualizacion-inmueble",
    component: _8da6c732,
    name: "actualizacion-inmueble___es"
  }, {
    path: "/es/cedula-catastral",
    component: _b8d3e2ec,
    name: "cedula-catastral___es"
  }, {
    path: "/es/conjuntos-residenciales",
    component: _d5cf2502,
    name: "conjuntos-residenciales___es"
  }, {
    path: "/es/consultar-propietario",
    component: _7378bc2e,
    name: "consultar-propietario___es"
  }, {
    path: "/es/crear-contribuyente",
    component: _8bac1b7a,
    name: "crear-contribuyente___es"
  }, {
    path: "/es/dashboard",
    component: _3c009346,
    name: "dashboard___es"
  }, {
    path: "/es/desincorporacion-inmueble",
    component: _d293b340,
    name: "desincorporacion-inmueble___es"
  }, {
    path: "/es/edificios",
    component: _5a4e4b69,
    name: "edificios___es"
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
    path: "/es/login",
    component: _11697aca,
    name: "login___es"
  }, {
    path: "/es/manzana",
    component: _3a75cea6,
    name: "manzana___es"
  }, {
    path: "/es/modificar-datos",
    component: _0328de4a,
    name: "modificar-datos___es"
  }, {
    path: "/es/parcela",
    component: _75ac52ac,
    name: "parcela___es"
  }, {
    path: "/es/planilla-desincorporacion",
    component: _c89867c0,
    name: "planilla-desincorporacion___es"
  }, {
    path: "/es/recaudacion",
    component: _ffe5c490,
    name: "recaudacion___es"
  }, {
    path: "/es/reporte-taquilla",
    component: _32207bfa,
    name: "reporte-taquilla___es"
  }, {
    path: "/es/sector",
    component: _fdb5e5b8,
    name: "sector___es"
  }, {
    path: "/es/solicitud-inmueble-existente",
    component: _62a95a24,
    name: "solicitud-inmueble-existente___es"
  }, {
    path: "/es/sub-parcela",
    component: _9a152cc6,
    name: "sub-parcela___es"
  }, {
    path: "/es/torres",
    component: _4904bfb2,
    name: "torres___es"
  }, {
    path: "/es/urbanizacion-barrio",
    component: _f181e33e,
    name: "urbanizacion-barrio___es"
  }, {
    path: "/es/verification-email/:verification?",
    component: _876d8a5a,
    name: "verification-email-verification___es"
  }, {
    path: "/verification-email/:verification?",
    component: _876d8a5a,
    name: "verification-email-verification___en"
  }, {
    path: "/",
    component: _2da39f84,
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
