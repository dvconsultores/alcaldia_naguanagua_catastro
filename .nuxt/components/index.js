export { default as Alerts } from '../../components/alerts.vue'
export { default as CustomeDrawer } from '../../components/custome-drawer.vue'
export { default as Drawer } from '../../components/drawer.vue'
export { default as Filters } from '../../components/filters.vue'
export { default as Footer } from '../../components/footer.vue'
export { default as MenuNavbar } from '../../components/menu-navbar.vue'
export { default as Navbar } from '../../components/navbar.vue'
export { default as Pagination } from '../../components/pagination.vue'
export { default as ModalsConfirmMsg } from '../../components/modals/confirmMsg.vue'
export { default as ModalsConnect } from '../../components/modals/connect.vue'

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
