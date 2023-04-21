import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _36c8b099 = () => interopDefault(import('../pages/actualizacion-inmueble.vue' /* webpackChunkName: "pages/actualizacion-inmueble" */))
const _3c19b03c = () => interopDefault(import('../pages/cedula-catastral.vue' /* webpackChunkName: "pages/cedula-catastral" */))
const _6a0240e6 = () => interopDefault(import('../pages/conjuntos-residenciales.vue' /* webpackChunkName: "pages/conjuntos-residenciales" */))
const _be5f4c88 = () => interopDefault(import('../pages/consultar-propietario.vue' /* webpackChunkName: "pages/consultar-propietario" */))
const _0f70c95e = () => interopDefault(import('../pages/crear-contribuyente.vue' /* webpackChunkName: "pages/crear-contribuyente" */))
const _5a1d95d4 = () => interopDefault(import('../pages/dashboard.vue' /* webpackChunkName: "pages/dashboard" */))
const _266f6624 = () => interopDefault(import('../pages/desincorporacion-inmueble.vue' /* webpackChunkName: "pages/desincorporacion-inmueble" */))
const _786b4df7 = () => interopDefault(import('../pages/edificios.vue' /* webpackChunkName: "pages/edificios" */))
const _9a57cddc = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _0da249f5 = () => interopDefault(import('../pages/impuestos-pago.vue' /* webpackChunkName: "pages/impuestos-pago" */))
const _8e9ed5d2 = () => interopDefault(import('../pages/inscripcion-inmueble.vue' /* webpackChunkName: "pages/inscripcion-inmueble" */))
const _bccd79ac = () => interopDefault(import('../pages/liquidacion.vue' /* webpackChunkName: "pages/liquidacion" */))
const _7c7bbc29 = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _356e1cb4 = () => interopDefault(import('../pages/manzana.vue' /* webpackChunkName: "pages/manzana" */))
const _7bb13e58 = () => interopDefault(import('../pages/modificar-datos.vue' /* webpackChunkName: "pages/modificar-datos" */))
const _7fbbb690 = () => interopDefault(import('../pages/parcela.vue' /* webpackChunkName: "pages/parcela" */))
const _1c741aa4 = () => interopDefault(import('../pages/planilla-desincorporacion.vue' /* webpackChunkName: "pages/planilla-desincorporacion" */))
const _ea189674 = () => interopDefault(import('../pages/recaudacion.vue' /* webpackChunkName: "pages/recaudacion" */))
const _7f7363b5 = () => interopDefault(import('../pages/reporte-taquilla.vue' /* webpackChunkName: "pages/reporte-taquilla" */))
const _bbf87554 = () => interopDefault(import('../pages/sector.vue' /* webpackChunkName: "pages/sector" */))
const _0e400cc0 = () => interopDefault(import('../pages/solicitud-inmueble-existente.vue' /* webpackChunkName: "pages/solicitud-inmueble-existente" */))
const _8447feaa = () => interopDefault(import('../pages/sub-parcela.vue' /* webpackChunkName: "pages/sub-parcela" */))
const _07474f4e = () => interopDefault(import('../pages/torres.vue' /* webpackChunkName: "pages/torres" */))
const _75469122 = () => interopDefault(import('../pages/urbanizacion-barrio.vue' /* webpackChunkName: "pages/urbanizacion-barrio" */))
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
    path: "/actualizacion-inmueble",
    component: _36c8b099,
    name: "actualizacion-inmueble___en"
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
    path: "/reporte-taquilla",
    component: _7f7363b5,
    name: "reporte-taquilla___en"
  }, {
    path: "/sector",
    component: _bbf87554,
    name: "sector___en"
  }, {
    path: "/solicitud-inmueble-existente",
    component: _0e400cc0,
    name: "solicitud-inmueble-existente___en"
  }, {
    path: "/sub-parcela",
    component: _8447feaa,
    name: "sub-parcela___en"
  }, {
    path: "/torres",
    component: _07474f4e,
    name: "torres___en"
  }, {
    path: "/urbanizacion-barrio",
    component: _75469122,
    name: "urbanizacion-barrio___en"
  }, {
    path: "/es/actualizacion-inmueble",
    component: _36c8b099,
    name: "actualizacion-inmueble___es"
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
    path: "/es/reporte-taquilla",
    component: _7f7363b5,
    name: "reporte-taquilla___es"
  }, {
    path: "/es/sector",
    component: _bbf87554,
    name: "sector___es"
  }, {
    path: "/es/solicitud-inmueble-existente",
    component: _0e400cc0,
    name: "solicitud-inmueble-existente___es"
  }, {
    path: "/es/sub-parcela",
    component: _8447feaa,
    name: "sub-parcela___es"
  }, {
    path: "/es/torres",
    component: _07474f4e,
    name: "torres___es"
  }, {
    path: "/es/urbanizacion-barrio",
    component: _75469122,
    name: "urbanizacion-barrio___es"
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
