<template>
  <div>
    <v-navigation-drawer
    v-if="!mobile && !mobile2"
    permanent
    fixed
    >

      <img src="~/assets/sources/logos/logo.png" alt="Logo" style="width:100px; margin: 30px 0 20px 50px;">

      <v-list dense>
        <v-list-item link @click="$router.push('dashboard')">
          <v-list-item-icon>
            <v-icon color="#707070">mdi-home</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class="vistas-drawer">Inicio</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

          <v-menu open-on-hover tile right offset-x content-class="menu-drawer">
            <template #activator="{on}">
              <v-list-item class="hover" link v-on="on">
                <v-list-item-icon>
                  <v-icon color="#707070">mdi-store</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title class="vistas-drawer">Taquilla</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </template>
            <v-list class="lista">
              <v-list-item @click="$router.push('liquidacion')">Liquidación</v-list-item>
              <v-list-item @click="$router.push('desincorporacion-inmueble')">Desincorporación del Inmueble</v-list-item>
              <v-list-item @click="$router.push('consultar-propietario')">Consulta por propietario</v-list-item>
              <v-list-item>Consulta por parámetros</v-list-item>
              <v-list-item @click="$router.push('reporte-taquilla')">Reportes taquilla</v-list-item>
            </v-list>
          </v-menu>

          <v-menu open-on-hover tile right offset-x content-class="menu-drawer">
            <template #activator="{on}">
              <v-list-item class="hover" link v-on="on">
                <v-list-item-icon>
                  <v-icon color="#707070">mdi-bank</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title class="vistas-drawer">Hacienda</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </template>
            <v-list class="lista">
              <v-list-item @click="$router.push('recaudacion')">Recaudación</v-list-item>
              <v-list-item @click="$router.push('consultar-propietario')">Consulta por propietario</v-list-item>
            </v-list>
          </v-menu>
              

          <v-menu open-on-hover tile right offset-x content-class="menu-drawer">
            <template #activator="{on}">
              <v-list-item class="hover" link v-on="on">
                <v-list-item-icon>
                  <v-icon color="#707070">mdi-file-document</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title class="vistas-drawer">Reporte</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </template>
            <v-list class="lista">
              <v-list-item @click="$router.push('cedula-catastral')">Cédula Catastral</v-list-item>
            </v-list>
          </v-menu>

          <v-menu open-on-hover tile right offset-x content-class="menu-drawer">
            <template #activator="{on}">
              <v-list-item class="hover" link v-on="on">
                <v-list-item-icon>
                  <v-icon color="#707070">mdi-city</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title class="vistas-drawer">Inmuebles</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </template>
            <v-list class="lista">
              <v-list-item @click="$router.push('inscripcion-inmueble')">Incorporación del inmueble</v-list-item>
              <v-list-item @click="$router.push('desincorporacion-inmueble')">Desincorporación del Inmueble</v-list-item>
              <v-list-item @click="$router.push('actualizacion-inmueble')">Actualización de los datos</v-list-item>
              <v-list-item>Consulta por parámetros</v-list-item>
              <v-list-item @click="$router.push('consultar-propietario')">Consultas por propietarios</v-list-item>
            </v-list>
          </v-menu>

          <v-menu open-on-hover tile right offset-x content-class="menu-drawer">
            <template #activator="{on}">
              <v-list-item class="hover" link v-on="on">
                <v-list-item-icon>
                  <v-icon color="#707070">mdi-account-multiple</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title class="vistas-drawer">Contribuyente</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </template>
            <v-list class="lista">
              <v-list-item @click="$router.push('crear-contribuyente')">Nuevo Contribuyente</v-list-item>
              <v-list-item @click="$router.push('modificar-datos')">Modificar Datos del Contribuyente</v-list-item>
            </v-list>
          </v-menu>

          <v-menu open-on-hover tile right offset-x content-class="menu-drawer">
            <template #activator="{on}">
              <v-list-item class="hover" link v-on="on">
                <v-list-item-icon>
                  <v-icon color="#707070">mdi-dns</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title class="vistas-drawer">Archivo</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </template>
            <v-list class="lista">
              <v-list-item @click="$router.push('sector')">Sector</v-list-item>
              <v-list-item @click="$router.push('manzana')">Manzana</v-list-item>
              <v-list-item @click="$router.push('parcela')">Parcela</v-list-item>
              <v-list-item @click="$router.push('sub-parcela')">Sub - Parcela</v-list-item>
              <v-list-item @click="$router.push('urbanizacion-barrio')">Urbanizacion / Barrio</v-list-item>
              <v-list-item>Calle</v-list-item>
              <v-list-item>Avenida</v-list-item>
              <v-list-item @click="$router.push('conjuntos-residenciales')">Conjunto Residencial</v-list-item>
              <v-list-item @click="$router.push('edificios')">Edificio / Centro Comercial</v-list-item>
              <v-list-item @click="$router.push('torres')">Torre</v-list-item>
              <v-list-item>Lorem ipsum</v-list-item>
            </v-list>
          </v-menu>

        <v-list-item link>
          <v-list-item-icon>
            <v-icon color="#707070">mdi-cog</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class="vistas-drawer">Configuración</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <hr>

      <v-btn class="btn-drawer" @click="$router.push('/')">
        <span>
          Cerrar Sesión
        </span>
      </v-btn>
    </v-navigation-drawer>

    <v-navigation-drawer
    v-else
    v-model="drawer_mobile"
    temporary
    height="100%"
    >
    <img src="~/assets/sources/logos/logo.png" alt="Logo" style="width:100px; margin: 30px 0 20px 0px;">

    <v-list dense>
        <v-list-item link @click="$router.push('dashboard')">
          <v-list-item-icon>
            <v-icon color="#707070">mdi-home</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class="vistas-drawer">Inicio</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

          <v-menu open-on-hover tile right offset-x content-class="menu-drawer">
            <template #activator="{on}">
              <v-list-item class="hover" link v-on="on">
                <v-list-item-icon>
                  <v-icon color="#707070">mdi-store</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title class="vistas-drawer">Taquilla</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </template>
            <v-list class="lista">
              <v-list-item @click="$router.push('liquidacion')">Liquidación</v-list-item>
              <v-list-item @click="$router.push('desincorporacion-inmueble')">Desincorporación del Inmueble</v-list-item>
              <v-list-item @click="$router.push('consultar-propietario')">Consulta por propietario</v-list-item>
              <v-list-item>Consulta por parámetros</v-list-item>
              <v-list-item @click="$router.push('reporte-taquilla')">Reportes taquilla</v-list-item>
            </v-list>
          </v-menu>

          <v-menu open-on-hover tile right offset-x content-class="menu-drawer">
            <template #activator="{on}">
              <v-list-item class="hover" link v-on="on">
                <v-list-item-icon>
                  <v-icon color="#707070">mdi-bank</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title class="vistas-drawer">Hacienda</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </template>
            <v-list class="lista">
              <v-list-item @click="$router.push('recaudacion')">Recaudación</v-list-item>
              <v-list-item @click="$router.push('consultar-propietario')">Consulta por propietario</v-list-item>
            </v-list>
          </v-menu>
              

          <v-menu open-on-hover tile right offset-x content-class="menu-drawer">
            <template #activator="{on}">
              <v-list-item class="hover" link v-on="on">
                <v-list-item-icon>
                  <v-icon color="#707070">mdi-file-document</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title class="vistas-drawer">Reporte</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </template>
            <v-list class="lista">
              <v-list-item @click="$router.push('cedula-catastral')">Cédula Catastral</v-list-item>
            </v-list>
          </v-menu>

          <v-menu open-on-hover tile right offset-x content-class="menu-drawer">
            <template #activator="{on}">
              <v-list-item class="hover" link v-on="on">
                <v-list-item-icon>
                  <v-icon color="#707070">mdi-city</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title class="vistas-drawer">Inmuebles</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </template>
            <v-list class="lista">
              <v-list-item @click="$router.push('inscripcion-inmueble')">Incorporación del inmueble</v-list-item>
              <v-list-item @click="$router.push('desincorporacion-inmueble')">Desincorporación del Inmueble</v-list-item>
              <v-list-item @click="$router.push('actualizacion-inmueble')">Actualización de los datos</v-list-item>
              <v-list-item>Consulta por parámetros</v-list-item>
              <v-list-item @click="$router.push('consultar-propietario')">Consultas por propietarios</v-list-item>
            </v-list>
          </v-menu>

          <v-menu open-on-hover tile right offset-x content-class="menu-drawer">
            <template #activator="{on}">
              <v-list-item class="hover" link v-on="on">
                <v-list-item-icon>
                  <v-icon color="#707070">mdi-account-multiple</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title class="vistas-drawer">Contribuyente</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </template>
            <v-list class="lista">
              <v-list-item @click="$router.push('crear-contribuyente')">Nuevo Contribuyente</v-list-item>
              <v-list-item @click="$router.push('modificar-datos')">Modificar Datos del Contribuyente</v-list-item>
            </v-list>
          </v-menu>

          <v-menu open-on-hover tile right offset-x content-class="menu-drawer">
            <template #activator="{on}">
              <v-list-item class="hover" link v-on="on">
                <v-list-item-icon>
                  <v-icon color="#707070">mdi-dns</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title class="vistas-drawer">Archivo</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </template>
            <v-list class="lista">
              <v-list-item @click="$router.push('sector')">Sector</v-list-item>
              <v-list-item @click="$router.push('manzana')">Manzana</v-list-item>
              <v-list-item @click="$router.push('parcela')">Parcela</v-list-item>
              <v-list-item @click="$router.push('sub-parcela')">Sub - Parcela</v-list-item>
              <v-list-item @click="$router.push('urbanizacion-barrio')">Urbanizacion / Barrio</v-list-item>
              <v-list-item>Calle</v-list-item>
              <v-list-item>Avenida</v-list-item>
              <v-list-item @click="$router.push('conjuntos-residenciales')">Conjunto Residencial</v-list-item>
              <v-list-item @click="$router.push('edificios')">Edificio / Centro Comercial</v-list-item>
              <v-list-item @click="$router.push('torres')">Torre</v-list-item>
              <v-list-item>Lorem ipsum</v-list-item>
            </v-list>
          </v-menu>

        <v-list-item link>
          <v-list-item-icon>
            <v-icon color="#707070">mdi-cog</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class="vistas-drawer">Configuración</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <hr>

      <v-btn class="btn-drawer" @click="$router.push('/')">
        <span>
          Cerrar Sesión
        </span>
      </v-btn>

    </v-navigation-drawer>

    <v-btn
    v-if="mobile || mobile2"
    id="btn-mobile-drawer"
    @click.stop="drawer_mobile = !drawer_mobile"
    >
      <v-icon>mdi-menu</v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  name: "DrawerComponent",
  data() {
    return {
      drawer_mobile: null,
      // itemDrawer:[
      //   {
      //     icon:"mdi-home",
      //     title:"Inicio",
      //     link:"dashboard",
      //   },
      //   {
      //     icon:"mdi-store",
      //     title:"Taquilla",
      //   },
      //   {
      //     icon:"mdi-bank",
      //     title:"Hacienda",
      //   },
      //   {
      //     icon:"mdi-file-document",
      //     title:"Reporte",
      //     link:"perfil",
      //   },
      //   {
      //     icon:"mdi-city",
      //     title:"Inmuebles",
      //     link:"configuracion",
      //   },
      //   {
      //     icon:"mdi-account-multiple",
      //     title:"Contribuyente"
      //   },
      //   {
      //     icon:"mdi-dns",
      //     title:"Archivo"
      //   },
      //   {
      //     icon:"mdi-cog",
      //     title:"Configuración"
      //   }
      // ],

      // itemDrawer2:[
      //   {
      //     icon:"mdi-home",
      //     title:"Inicio",
      //     link:"dashboard",
      //   },
      //   {
      //     icon:"mdi-store",
      //     title:"Taquilla",
      //   },
      //   {
      //     icon:"mdi-bank",
      //     title:"Hacienda",
      //   },
      //   {
      //     icon:"mdi-file-document",
      //     title:"Reporte",
      //     link:"perfil",
      //   },
      //   {
      //     icon:"mdi-city",
      //     title:"Inmuebles",
      //     link:"configuracion",
      //   },
      //   {
      //     icon:"mdi-account-multiple",
      //     title:"Contribuyente"
      //   },
      //   {
      //     icon:"mdi-dns",
      //     title:"Archivo"
      //   },
      //   {
      //     icon:"mdi-cog",
      //     title:"Configuración"
      //   }
      // ],
    }
  },

  computed: {
    mobile() {
      return this.$vuetify.breakpoint.sm
    },

    mobile2(){
      return this.$vuetify.breakpoint.xs
    },
  },

  methods: {
    
  },

}
</script>

<style src="~/assets/styles/components/drawer.scss" lang="scss" />