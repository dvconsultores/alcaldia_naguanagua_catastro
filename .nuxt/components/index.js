export const Alerts = () => import('../../components/alerts.vue' /* webpackChunkName: "components/alerts" */).then(c => wrapFunctional(c.default || c))
export const CustomeDrawer = () => import('../../components/custome-drawer.vue' /* webpackChunkName: "components/custome-drawer" */).then(c => wrapFunctional(c.default || c))
export const Drawer = () => import('../../components/drawer.vue' /* webpackChunkName: "components/drawer" */).then(c => wrapFunctional(c.default || c))
export const Filters = () => import('../../components/filters.vue' /* webpackChunkName: "components/filters" */).then(c => wrapFunctional(c.default || c))
export const Footer = () => import('../../components/footer.vue' /* webpackChunkName: "components/footer" */).then(c => wrapFunctional(c.default || c))
export const MenuNavbar = () => import('../../components/menu-navbar.vue' /* webpackChunkName: "components/menu-navbar" */).then(c => wrapFunctional(c.default || c))
export const Navbar = () => import('../../components/navbar.vue' /* webpackChunkName: "components/navbar" */).then(c => wrapFunctional(c.default || c))
export const Pagination = () => import('../../components/pagination.vue' /* webpackChunkName: "components/pagination" */).then(c => wrapFunctional(c.default || c))
export const ModalsConfirmMsg = () => import('../../components/modals/confirmMsg.vue' /* webpackChunkName: "components/modals-confirm-msg" */).then(c => wrapFunctional(c.default || c))
export const ModalsConnect = () => import('../../components/modals/connect.vue' /* webpackChunkName: "components/modals-connect" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
