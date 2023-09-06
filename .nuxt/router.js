import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _96168520 = () => interopDefault(import('..\\pages\\acceso.vue' /* webpackChunkName: "pages/acceso" */))
const _8f62d08e = () => interopDefault(import('..\\pages\\actualizacion-inmueble.vue' /* webpackChunkName: "pages/actualizacion-inmueble" */))
const _1344e8c6 = () => interopDefault(import('..\\pages\\actualizacion-propietarios.vue' /* webpackChunkName: "pages/actualizacion-propietarios" */))
const _358274e4 = () => interopDefault(import('..\\pages\\actualizacion-ubicacion-parcela.vue' /* webpackChunkName: "pages/actualizacion-ubicacion-parcela" */))
const _7cce415b = () => interopDefault(import('..\\pages\\actualizacion-ubicacion-parcela(sebas).vue' /* webpackChunkName: "pages/actualizacion-ubicacion-parcela(sebas)" */))
const _2b70aa1f = () => interopDefault(import('..\\pages\\actualizar-construccion.vue' /* webpackChunkName: "pages/actualizar-construccion" */))
const _93768dfc = () => interopDefault(import('..\\pages\\actualizar-documento-propiedad.vue' /* webpackChunkName: "pages/actualizar-documento-propiedad" */))
const _a6ed8b88 = () => interopDefault(import('..\\pages\\actualizar-documentos-pendientes.vue' /* webpackChunkName: "pages/actualizar-documentos-pendientes" */))
const _6beac1c8 = () => interopDefault(import('..\\pages\\actualizar-terreno.vue' /* webpackChunkName: "pages/actualizar-terreno" */))
const _15bfd07e = () => interopDefault(import('..\\pages\\actualizar-valoracion-economica.vue' /* webpackChunkName: "pages/actualizar-valoracion-economica" */))
const _7b502187 = () => interopDefault(import('..\\pages\\actualizar-valoracion-economica copy.vue' /* webpackChunkName: "pages/actualizar-valoracion-economica copy" */))
const _67e8664e = () => interopDefault(import('..\\pages\\actualizar-valoracion-economica copy 2.vue' /* webpackChunkName: "pages/actualizar-valoracion-economica copy 2" */))
const _25e4a784 = () => interopDefault(import('..\\pages\\ambito.vue' /* webpackChunkName: "pages/ambito" */))
const _8d17bb30 = () => interopDefault(import('..\\pages\\avenida.vue' /* webpackChunkName: "pages/avenida" */))
const _0bfaa9f5 = () => interopDefault(import('..\\pages\\bcv.vue' /* webpackChunkName: "pages/bcv" */))
const _1438b467 = () => interopDefault(import('..\\pages\\calle.vue' /* webpackChunkName: "pages/calle" */))
const _35636f5c = () => interopDefault(import('..\\pages\\cedula-catastral.vue' /* webpackChunkName: "pages/cedula-catastral" */))
const _7a35dc6d = () => interopDefault(import('..\\pages\\conjuntos-residenciales.vue' /* webpackChunkName: "pages/conjuntos-residenciales" */))
const _4683df5b = () => interopDefault(import('..\\pages\\consulta-inmueble.vue' /* webpackChunkName: "pages/consulta-inmueble" */))
const _31610e9c = () => interopDefault(import('..\\pages\\consultar-propietario.vue' /* webpackChunkName: "pages/consultar-propietario" */))
const _357fef9e = () => interopDefault(import('..\\pages\\crear-contribuyente.vue' /* webpackChunkName: "pages/crear-contribuyente" */))
const _c522ca98 = () => interopDefault(import('..\\pages\\dashboard.vue' /* webpackChunkName: "pages/dashboard" */))
const _67b7e4fa = () => interopDefault(import('..\\pages\\dashboard -flujo.vue' /* webpackChunkName: "pages/dashboard -flujo" */))
const _ab98dc64 = () => interopDefault(import('..\\pages\\desincorporacion-inmueble.vue' /* webpackChunkName: "pages/desincorporacion-inmueble" */))
const _88875a52 = () => interopDefault(import('..\\pages\\edificios.vue' /* webpackChunkName: "pages/edificios" */))
const _222a8df2 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _394f7da2 = () => interopDefault(import('..\\pages\\estado-cuenta.vue' /* webpackChunkName: "pages/estado-cuenta" */))
const _b4852792 = () => interopDefault(import('..\\pages\\estado-cuenta-catastro.vue' /* webpackChunkName: "pages/estado-cuenta-catastro" */))
const _09bd944e = () => interopDefault(import('..\\pages\\estado-cuenta-detalle.vue' /* webpackChunkName: "pages/estado-cuenta-detalle" */))
const _2005c8b7 = () => interopDefault(import('..\\pages\\estado-cuenta-taquilla.vue' /* webpackChunkName: "pages/estado-cuenta-taquilla" */))
const _6302902e = () => interopDefault(import('..\\pages\\estatus-inmueble.vue' /* webpackChunkName: "pages/estatus-inmueble" */))
const _4184d850 = () => interopDefault(import('..\\pages\\fines-fiscales.vue' /* webpackChunkName: "pages/fines-fiscales" */))
const _322d1f84 = () => interopDefault(import('..\\pages\\flow.vue' /* webpackChunkName: "pages/flow" */))
const _ac0d0cfc = () => interopDefault(import('..\\pages\\flow-devueltos.vue' /* webpackChunkName: "pages/flow-devueltos" */))
const _e2c959d0 = () => interopDefault(import('..\\pages\\flow-old.vue' /* webpackChunkName: "pages/flow-old" */))
const _1d6cb226 = () => interopDefault(import('..\\pages\\flow-por-enviar.vue' /* webpackChunkName: "pages/flow-por-enviar" */))
const _20bab54e = () => interopDefault(import('..\\pages\\flow-por-procesar.vue' /* webpackChunkName: "pages/flow-por-procesar" */))
const _9d74d2ee = () => interopDefault(import('..\\pages\\flow-por-recibir.vue' /* webpackChunkName: "pages/flow-por-recibir" */))
const _838f5886 = () => interopDefault(import('..\\pages\\forma.vue' /* webpackChunkName: "pages/forma" */))
const _259ee32c = () => interopDefault(import('..\\pages\\IC-estado-cuenta.vue' /* webpackChunkName: "pages/IC-estado-cuenta" */))
const _f2dd5dd6 = () => interopDefault(import('..\\pages\\impuestos-pago.vue' /* webpackChunkName: "pages/impuestos-pago" */))
const _6ac5c437 = () => interopDefault(import('..\\pages\\inscripcion-inmueble.vue' /* webpackChunkName: "pages/inscripcion-inmueble" */))
const _54bc900a = () => interopDefault(import('..\\pages\\liquidacion.vue' /* webpackChunkName: "pages/liquidacion" */))
const _285b9dee = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _1d2aa9ff = () => interopDefault(import('..\\pages\\maestro-patente.vue' /* webpackChunkName: "pages/maestro-patente" */))
const _28fad994 = () => interopDefault(import('..\\pages\\manzana.vue' /* webpackChunkName: "pages/manzana" */))
const _20a31b38 = () => interopDefault(import('..\\pages\\modificar-datos.vue' /* webpackChunkName: "pages/modificar-datos" */))
const _77ea3226 = () => interopDefault(import('..\\pages\\moneda.vue' /* webpackChunkName: "pages/moneda" */))
const _dc2e1f44 = () => interopDefault(import('..\\pages\\nivel-inmueble.vue' /* webpackChunkName: "pages/nivel-inmueble" */))
const _98a23cd0 = () => interopDefault(import('..\\pages\\parcela.vue' /* webpackChunkName: "pages/parcela" */))
const _a19d90e4 = () => interopDefault(import('..\\pages\\planilla-desincorporacion.vue' /* webpackChunkName: "pages/planilla-desincorporacion" */))
const _3e1701a6 = () => interopDefault(import('..\\pages\\recaudacion.vue' /* webpackChunkName: "pages/recaudacion" */))
const _5aeb7301 = () => interopDefault(import('..\\pages\\regimen.vue' /* webpackChunkName: "pages/regimen" */))
const _002c79ca = () => interopDefault(import('..\\pages\\reporte-ejemplo.vue' /* webpackChunkName: "pages/reporte-ejemplo" */))
const _07f48a85 = () => interopDefault(import('..\\pages\\reporte-ejemplo_.vue' /* webpackChunkName: "pages/reporte-ejemplo_" */))
const _056c5157 = () => interopDefault(import('..\\pages\\reporte-ejemplo1.vue' /* webpackChunkName: "pages/reporte-ejemplo1" */))
const _090838b0 = () => interopDefault(import('..\\pages\\reporte-recaudos.vue' /* webpackChunkName: "pages/reporte-recaudos" */))
const _78bd22d5 = () => interopDefault(import('..\\pages\\reporte-taquilla.vue' /* webpackChunkName: "pages/reporte-taquilla" */))
const _1d7bec76 = () => interopDefault(import('..\\pages\\sector.vue' /* webpackChunkName: "pages/sector" */))
const _4f39adfd = () => interopDefault(import('..\\pages\\servicios.vue' /* webpackChunkName: "pages/servicios" */))
const _70ff4d8b = () => interopDefault(import('..\\pages\\sub-parcela.vue' /* webpackChunkName: "pages/sub-parcela" */))
const _5e70caef = () => interopDefault(import('..\\pages\\tasa-multa.vue' /* webpackChunkName: "pages/tasa-multa" */))
const _6fc352bb = () => interopDefault(import('..\\pages\\tipo-desincorporacion.vue' /* webpackChunkName: "pages/tipo-desincorporacion" */))
const _6089b1eb = () => interopDefault(import('..\\pages\\tipo-documento.vue' /* webpackChunkName: "pages/tipo-documento" */))
const _172036cd = () => interopDefault(import('..\\pages\\tipo-especial.vue' /* webpackChunkName: "pages/tipo-especial" */))
const _24b3507c = () => interopDefault(import('..\\pages\\tipo-inmueble.vue' /* webpackChunkName: "pages/tipo-inmueble" */))
const _560c12b2 = () => interopDefault(import('..\\pages\\tipo-pago.vue' /* webpackChunkName: "pages/tipo-pago" */))
const _7870e9e4 = () => interopDefault(import('..\\pages\\tipo-tenencia.vue' /* webpackChunkName: "pages/tipo-tenencia" */))
const _2d99e686 = () => interopDefault(import('..\\pages\\tipo-transaccion.vue' /* webpackChunkName: "pages/tipo-transaccion" */))
const _a9e7fa70 = () => interopDefault(import('..\\pages\\tipologia.vue' /* webpackChunkName: "pages/tipologia" */))
const _473f94b2 = () => interopDefault(import('..\\pages\\topografia.vue' /* webpackChunkName: "pages/topografia" */))
const _77d47f79 = () => interopDefault(import('..\\pages\\torres.vue' /* webpackChunkName: "pages/torres" */))
const _15432f3f = () => interopDefault(import('..\\pages\\ubicacion.vue' /* webpackChunkName: "pages/ubicacion" */))
const _30eda1f9 = () => interopDefault(import('..\\pages\\unidad-inmueble.vue' /* webpackChunkName: "pages/unidad-inmueble" */))
const _3cb1ed95 = () => interopDefault(import('..\\pages\\unidad-tributaria.vue' /* webpackChunkName: "pages/unidad-tributaria" */))
const _9b55b762 = () => interopDefault(import('..\\pages\\urbanizacion-barrio.vue' /* webpackChunkName: "pages/urbanizacion-barrio" */))
const _13fbf531 = () => interopDefault(import('..\\pages\\uso.vue' /* webpackChunkName: "pages/uso" */))
const _bf6e7490 = () => interopDefault(import('..\\pages\\zona.vue' /* webpackChunkName: "pages/zona" */))
const _5612feaa = () => interopDefault(import('..\\pages\\solicitud-inmueble-existente\\_id.vue' /* webpackChunkName: "pages/solicitud-inmueble-existente/_id" */))
const _9faa7020 = () => interopDefault(import('..\\pages\\verification-email\\_verification.vue' /* webpackChunkName: "pages/verification-email/_verification" */))

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
    component: _96168520,
    name: "acceso___en"
  }, {
    path: "/actualizacion-inmueble",
    component: _8f62d08e,
    name: "actualizacion-inmueble___en"
  }, {
    path: "/actualizacion-propietarios",
    component: _1344e8c6,
    name: "actualizacion-propietarios___en"
  }, {
    path: "/actualizacion-ubicacion-parcela",
    component: _358274e4,
    name: "actualizacion-ubicacion-parcela___en"
  }, {
    path: "/actualizacion-ubicacion-parcela(sebas)",
    component: _7cce415b,
    name: "actualizacion-ubicacion-parcela(sebas)___en"
  }, {
    path: "/actualizar-construccion",
    component: _2b70aa1f,
    name: "actualizar-construccion___en"
  }, {
    path: "/actualizar-documento-propiedad",
    component: _93768dfc,
    name: "actualizar-documento-propiedad___en"
  }, {
    path: "/actualizar-documentos-pendientes",
    component: _a6ed8b88,
    name: "actualizar-documentos-pendientes___en"
  }, {
    path: "/actualizar-terreno",
    component: _6beac1c8,
    name: "actualizar-terreno___en"
  }, {
    path: "/actualizar-valoracion-economica",
    component: _15bfd07e,
    name: "actualizar-valoracion-economica___en"
  }, {
    path: "/actualizar-valoracion-economica%20copy",
    component: _7b502187,
    name: "actualizar-valoracion-economica copy___en"
  }, {
    path: "/actualizar-valoracion-economica%20copy%202",
    component: _67e8664e,
    name: "actualizar-valoracion-economica copy 2___en"
  }, {
    path: "/ambito",
    component: _25e4a784,
    name: "ambito___en"
  }, {
    path: "/avenida",
    component: _8d17bb30,
    name: "avenida___en"
  }, {
    path: "/bcv",
    component: _0bfaa9f5,
    name: "bcv___en"
  }, {
    path: "/calle",
    component: _1438b467,
    name: "calle___en"
  }, {
    path: "/cedula-catastral",
    component: _35636f5c,
    name: "cedula-catastral___en"
  }, {
    path: "/conjuntos-residenciales",
    component: _7a35dc6d,
    name: "conjuntos-residenciales___en"
  }, {
    path: "/consulta-inmueble",
    component: _4683df5b,
    name: "consulta-inmueble___en"
  }, {
    path: "/consultar-propietario",
    component: _31610e9c,
    name: "consultar-propietario___en"
  }, {
    path: "/crear-contribuyente",
    component: _357fef9e,
    name: "crear-contribuyente___en"
  }, {
    path: "/dashboard",
    component: _c522ca98,
    name: "dashboard___en"
  }, {
    path: "/dashboard%20-flujo",
    component: _67b7e4fa,
    name: "dashboard -flujo___en"
  }, {
    path: "/desincorporacion-inmueble",
    component: _ab98dc64,
    name: "desincorporacion-inmueble___en"
  }, {
    path: "/edificios",
    component: _88875a52,
    name: "edificios___en"
  }, {
    path: "/es",
    component: _222a8df2,
    name: "index___es"
  }, {
    path: "/estado-cuenta",
    component: _394f7da2,
    name: "estado-cuenta___en"
  }, {
    path: "/estado-cuenta-catastro",
    component: _b4852792,
    name: "estado-cuenta-catastro___en"
  }, {
    path: "/estado-cuenta-detalle",
    component: _09bd944e,
    name: "estado-cuenta-detalle___en"
  }, {
    path: "/estado-cuenta-taquilla",
    component: _2005c8b7,
    name: "estado-cuenta-taquilla___en"
  }, {
    path: "/estatus-inmueble",
    component: _6302902e,
    name: "estatus-inmueble___en"
  }, {
    path: "/fines-fiscales",
    component: _4184d850,
    name: "fines-fiscales___en"
  }, {
    path: "/flow",
    component: _322d1f84,
    name: "flow___en"
  }, {
    path: "/flow-devueltos",
    component: _ac0d0cfc,
    name: "flow-devueltos___en"
  }, {
    path: "/flow-old",
    component: _e2c959d0,
    name: "flow-old___en"
  }, {
    path: "/flow-por-enviar",
    component: _1d6cb226,
    name: "flow-por-enviar___en"
  }, {
    path: "/flow-por-procesar",
    component: _20bab54e,
    name: "flow-por-procesar___en"
  }, {
    path: "/flow-por-recibir",
    component: _9d74d2ee,
    name: "flow-por-recibir___en"
  }, {
    path: "/forma",
    component: _838f5886,
    name: "forma___en"
  }, {
    path: "/IC-estado-cuenta",
    component: _259ee32c,
    name: "IC-estado-cuenta___en"
  }, {
    path: "/impuestos-pago",
    component: _f2dd5dd6,
    name: "impuestos-pago___en"
  }, {
    path: "/inscripcion-inmueble",
    component: _6ac5c437,
    name: "inscripcion-inmueble___en"
  }, {
    path: "/liquidacion",
    component: _54bc900a,
    name: "liquidacion___en"
  }, {
    path: "/login",
    component: _285b9dee,
    name: "login___en"
  }, {
    path: "/maestro-patente",
    component: _1d2aa9ff,
    name: "maestro-patente___en"
  }, {
    path: "/manzana",
    component: _28fad994,
    name: "manzana___en"
  }, {
    path: "/modificar-datos",
    component: _20a31b38,
    name: "modificar-datos___en"
  }, {
    path: "/moneda",
    component: _77ea3226,
    name: "moneda___en"
  }, {
    path: "/nivel-inmueble",
    component: _dc2e1f44,
    name: "nivel-inmueble___en"
  }, {
    path: "/parcela",
    component: _98a23cd0,
    name: "parcela___en"
  }, {
    path: "/planilla-desincorporacion",
    component: _a19d90e4,
    name: "planilla-desincorporacion___en"
  }, {
    path: "/recaudacion",
    component: _3e1701a6,
    name: "recaudacion___en"
  }, {
    path: "/regimen",
    component: _5aeb7301,
    name: "regimen___en"
  }, {
    path: "/reporte-ejemplo",
    component: _002c79ca,
    name: "reporte-ejemplo___en"
  }, {
    path: "/reporte-ejemplo_",
    component: _07f48a85,
    name: "reporte-ejemplo____en"
  }, {
    path: "/reporte-ejemplo1",
    component: _056c5157,
    name: "reporte-ejemplo1___en"
  }, {
    path: "/reporte-recaudos",
    component: _090838b0,
    name: "reporte-recaudos___en"
  }, {
    path: "/reporte-taquilla",
    component: _78bd22d5,
    name: "reporte-taquilla___en"
  }, {
    path: "/sector",
    component: _1d7bec76,
    name: "sector___en"
  }, {
    path: "/servicios",
    component: _4f39adfd,
    name: "servicios___en"
  }, {
    path: "/sub-parcela",
    component: _70ff4d8b,
    name: "sub-parcela___en"
  }, {
    path: "/tasa-multa",
    component: _5e70caef,
    name: "tasa-multa___en"
  }, {
    path: "/tipo-desincorporacion",
    component: _6fc352bb,
    name: "tipo-desincorporacion___en"
  }, {
    path: "/tipo-documento",
    component: _6089b1eb,
    name: "tipo-documento___en"
  }, {
    path: "/tipo-especial",
    component: _172036cd,
    name: "tipo-especial___en"
  }, {
    path: "/tipo-inmueble",
    component: _24b3507c,
    name: "tipo-inmueble___en"
  }, {
    path: "/tipo-pago",
    component: _560c12b2,
    name: "tipo-pago___en"
  }, {
    path: "/tipo-tenencia",
    component: _7870e9e4,
    name: "tipo-tenencia___en"
  }, {
    path: "/tipo-transaccion",
    component: _2d99e686,
    name: "tipo-transaccion___en"
  }, {
    path: "/tipologia",
    component: _a9e7fa70,
    name: "tipologia___en"
  }, {
    path: "/topografia",
    component: _473f94b2,
    name: "topografia___en"
  }, {
    path: "/torres",
    component: _77d47f79,
    name: "torres___en"
  }, {
    path: "/ubicacion",
    component: _15432f3f,
    name: "ubicacion___en"
  }, {
    path: "/unidad-inmueble",
    component: _30eda1f9,
    name: "unidad-inmueble___en"
  }, {
    path: "/unidad-tributaria",
    component: _3cb1ed95,
    name: "unidad-tributaria___en"
  }, {
    path: "/urbanizacion-barrio",
    component: _9b55b762,
    name: "urbanizacion-barrio___en"
  }, {
    path: "/uso",
    component: _13fbf531,
    name: "uso___en"
  }, {
    path: "/zona",
    component: _bf6e7490,
    name: "zona___en"
  }, {
    path: "/es/acceso",
    component: _96168520,
    name: "acceso___es"
  }, {
    path: "/es/actualizacion-inmueble",
    component: _8f62d08e,
    name: "actualizacion-inmueble___es"
  }, {
    path: "/es/actualizacion-propietarios",
    component: _1344e8c6,
    name: "actualizacion-propietarios___es"
  }, {
    path: "/es/actualizacion-ubicacion-parcela",
    component: _358274e4,
    name: "actualizacion-ubicacion-parcela___es"
  }, {
    path: "/es/actualizacion-ubicacion-parcela(sebas)",
    component: _7cce415b,
    name: "actualizacion-ubicacion-parcela(sebas)___es"
  }, {
    path: "/es/actualizar-construccion",
    component: _2b70aa1f,
    name: "actualizar-construccion___es"
  }, {
    path: "/es/actualizar-documento-propiedad",
    component: _93768dfc,
    name: "actualizar-documento-propiedad___es"
  }, {
    path: "/es/actualizar-documentos-pendientes",
    component: _a6ed8b88,
    name: "actualizar-documentos-pendientes___es"
  }, {
    path: "/es/actualizar-terreno",
    component: _6beac1c8,
    name: "actualizar-terreno___es"
  }, {
    path: "/es/actualizar-valoracion-economica",
    component: _15bfd07e,
    name: "actualizar-valoracion-economica___es"
  }, {
    path: "/es/actualizar-valoracion-economica%20copy",
    component: _7b502187,
    name: "actualizar-valoracion-economica copy___es"
  }, {
    path: "/es/actualizar-valoracion-economica%20copy%202",
    component: _67e8664e,
    name: "actualizar-valoracion-economica copy 2___es"
  }, {
    path: "/es/ambito",
    component: _25e4a784,
    name: "ambito___es"
  }, {
    path: "/es/avenida",
    component: _8d17bb30,
    name: "avenida___es"
  }, {
    path: "/es/bcv",
    component: _0bfaa9f5,
    name: "bcv___es"
  }, {
    path: "/es/calle",
    component: _1438b467,
    name: "calle___es"
  }, {
    path: "/es/cedula-catastral",
    component: _35636f5c,
    name: "cedula-catastral___es"
  }, {
    path: "/es/conjuntos-residenciales",
    component: _7a35dc6d,
    name: "conjuntos-residenciales___es"
  }, {
    path: "/es/consulta-inmueble",
    component: _4683df5b,
    name: "consulta-inmueble___es"
  }, {
    path: "/es/consultar-propietario",
    component: _31610e9c,
    name: "consultar-propietario___es"
  }, {
    path: "/es/crear-contribuyente",
    component: _357fef9e,
    name: "crear-contribuyente___es"
  }, {
    path: "/es/dashboard",
    component: _c522ca98,
    name: "dashboard___es"
  }, {
    path: "/es/dashboard%20-flujo",
    component: _67b7e4fa,
    name: "dashboard -flujo___es"
  }, {
    path: "/es/desincorporacion-inmueble",
    component: _ab98dc64,
    name: "desincorporacion-inmueble___es"
  }, {
    path: "/es/edificios",
    component: _88875a52,
    name: "edificios___es"
  }, {
    path: "/es/estado-cuenta",
    component: _394f7da2,
    name: "estado-cuenta___es"
  }, {
    path: "/es/estado-cuenta-catastro",
    component: _b4852792,
    name: "estado-cuenta-catastro___es"
  }, {
    path: "/es/estado-cuenta-detalle",
    component: _09bd944e,
    name: "estado-cuenta-detalle___es"
  }, {
    path: "/es/estado-cuenta-taquilla",
    component: _2005c8b7,
    name: "estado-cuenta-taquilla___es"
  }, {
    path: "/es/estatus-inmueble",
    component: _6302902e,
    name: "estatus-inmueble___es"
  }, {
    path: "/es/fines-fiscales",
    component: _4184d850,
    name: "fines-fiscales___es"
  }, {
    path: "/es/flow",
    component: _322d1f84,
    name: "flow___es"
  }, {
    path: "/es/flow-devueltos",
    component: _ac0d0cfc,
    name: "flow-devueltos___es"
  }, {
    path: "/es/flow-old",
    component: _e2c959d0,
    name: "flow-old___es"
  }, {
    path: "/es/flow-por-enviar",
    component: _1d6cb226,
    name: "flow-por-enviar___es"
  }, {
    path: "/es/flow-por-procesar",
    component: _20bab54e,
    name: "flow-por-procesar___es"
  }, {
    path: "/es/flow-por-recibir",
    component: _9d74d2ee,
    name: "flow-por-recibir___es"
  }, {
    path: "/es/forma",
    component: _838f5886,
    name: "forma___es"
  }, {
    path: "/es/IC-estado-cuenta",
    component: _259ee32c,
    name: "IC-estado-cuenta___es"
  }, {
    path: "/es/impuestos-pago",
    component: _f2dd5dd6,
    name: "impuestos-pago___es"
  }, {
    path: "/es/inscripcion-inmueble",
    component: _6ac5c437,
    name: "inscripcion-inmueble___es"
  }, {
    path: "/es/liquidacion",
    component: _54bc900a,
    name: "liquidacion___es"
  }, {
    path: "/es/login",
    component: _285b9dee,
    name: "login___es"
  }, {
    path: "/es/maestro-patente",
    component: _1d2aa9ff,
    name: "maestro-patente___es"
  }, {
    path: "/es/manzana",
    component: _28fad994,
    name: "manzana___es"
  }, {
    path: "/es/modificar-datos",
    component: _20a31b38,
    name: "modificar-datos___es"
  }, {
    path: "/es/moneda",
    component: _77ea3226,
    name: "moneda___es"
  }, {
    path: "/es/nivel-inmueble",
    component: _dc2e1f44,
    name: "nivel-inmueble___es"
  }, {
    path: "/es/parcela",
    component: _98a23cd0,
    name: "parcela___es"
  }, {
    path: "/es/planilla-desincorporacion",
    component: _a19d90e4,
    name: "planilla-desincorporacion___es"
  }, {
    path: "/es/recaudacion",
    component: _3e1701a6,
    name: "recaudacion___es"
  }, {
    path: "/es/regimen",
    component: _5aeb7301,
    name: "regimen___es"
  }, {
    path: "/es/reporte-ejemplo",
    component: _002c79ca,
    name: "reporte-ejemplo___es"
  }, {
    path: "/es/reporte-ejemplo_",
    component: _07f48a85,
    name: "reporte-ejemplo____es"
  }, {
    path: "/es/reporte-ejemplo1",
    component: _056c5157,
    name: "reporte-ejemplo1___es"
  }, {
    path: "/es/reporte-recaudos",
    component: _090838b0,
    name: "reporte-recaudos___es"
  }, {
    path: "/es/reporte-taquilla",
    component: _78bd22d5,
    name: "reporte-taquilla___es"
  }, {
    path: "/es/sector",
    component: _1d7bec76,
    name: "sector___es"
  }, {
    path: "/es/servicios",
    component: _4f39adfd,
    name: "servicios___es"
  }, {
    path: "/es/sub-parcela",
    component: _70ff4d8b,
    name: "sub-parcela___es"
  }, {
    path: "/es/tasa-multa",
    component: _5e70caef,
    name: "tasa-multa___es"
  }, {
    path: "/es/tipo-desincorporacion",
    component: _6fc352bb,
    name: "tipo-desincorporacion___es"
  }, {
    path: "/es/tipo-documento",
    component: _6089b1eb,
    name: "tipo-documento___es"
  }, {
    path: "/es/tipo-especial",
    component: _172036cd,
    name: "tipo-especial___es"
  }, {
    path: "/es/tipo-inmueble",
    component: _24b3507c,
    name: "tipo-inmueble___es"
  }, {
    path: "/es/tipo-pago",
    component: _560c12b2,
    name: "tipo-pago___es"
  }, {
    path: "/es/tipo-tenencia",
    component: _7870e9e4,
    name: "tipo-tenencia___es"
  }, {
    path: "/es/tipo-transaccion",
    component: _2d99e686,
    name: "tipo-transaccion___es"
  }, {
    path: "/es/tipologia",
    component: _a9e7fa70,
    name: "tipologia___es"
  }, {
    path: "/es/topografia",
    component: _473f94b2,
    name: "topografia___es"
  }, {
    path: "/es/torres",
    component: _77d47f79,
    name: "torres___es"
  }, {
    path: "/es/ubicacion",
    component: _15432f3f,
    name: "ubicacion___es"
  }, {
    path: "/es/unidad-inmueble",
    component: _30eda1f9,
    name: "unidad-inmueble___es"
  }, {
    path: "/es/unidad-tributaria",
    component: _3cb1ed95,
    name: "unidad-tributaria___es"
  }, {
    path: "/es/urbanizacion-barrio",
    component: _9b55b762,
    name: "urbanizacion-barrio___es"
  }, {
    path: "/es/uso",
    component: _13fbf531,
    name: "uso___es"
  }, {
    path: "/es/zona",
    component: _bf6e7490,
    name: "zona___es"
  }, {
    path: "/es/solicitud-inmueble-existente/:id?",
    component: _5612feaa,
    name: "solicitud-inmueble-existente-id___es"
  }, {
    path: "/es/verification-email/:verification?",
    component: _9faa7020,
    name: "verification-email-verification___es"
  }, {
    path: "/solicitud-inmueble-existente/:id?",
    component: _5612feaa,
    name: "solicitud-inmueble-existente-id___en"
  }, {
    path: "/verification-email/:verification?",
    component: _9faa7020,
    name: "verification-email-verification___en"
  }, {
    path: "/",
    component: _222a8df2,
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
