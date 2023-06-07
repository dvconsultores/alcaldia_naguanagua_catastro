<template>

  <div>
    <v-navigation-drawer
    v-if="!mobile && !mobile2"
    permanent
    fixed
    >

      <img src="~/assets/sources/logos/logo.png" alt="Logo" style="width:100px; margin: 30px auto 20px auto;">

      <v-list dense>
        <v-list-item @click="$router.push('dashboard')">
          <v-list-item-icon>
            <v-icon color="#707070">mdi-home</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class="vistas-drawer">Inicio</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-expansion-panels accordion>
        <v-expansion-panel style="background-color:var(--bg-ap);" 
          v-for="item_menu in menu" :key="item_menu.modulo">
          <v-expansion-panel-header>
            <v-icon>{{ item_menu.icono_modulo }}</v-icon>{{ item_menu.titulo_modulo }}
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-list class="lista">
              <v-list-item
                v-for="item in getMenuOptions(item_menu.modulo)" :key="item.menu_modulo"
                class="vertical-nav-menu-link"
                v-bind="$attrs"
                active-class="active"
                v-show="item.leer"
                :to="item.modulo"
              > <v-icon>{{ item.icono_modulo }} </v-icon>    {{ item.titulo_modulo }}
              </v-list-item>
          </v-list>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>

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
    <img src="~/assets/sources/logos/logo.png" alt="Logo" style="width:100px; margin: 30px auto 20px auto;">

    <v-list dense>
        <v-list-item link @click="$router.push('dashboard')">
          <v-list-item-icon>
            <v-icon color="#707070">mdi-home</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class="vistas-drawer">Inicio</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-expansion-panels accordion>
        <v-expansion-panel style="background-color:var(--bg-ap);">
          <v-expansion-panel-header>
            <v-icon>mdi-store</v-icon>Taquilla
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-list class="lista">
              <v-list-item @click="$router.push('liquidacion')">Liquidación</v-list-item>
              <v-list-item @click="$router.push('desincorporacion-inmueble')">Desincorporación del Inmueble</v-list-item>
              <v-list-item @click="$router.push('consultar-propietario')">Consulta por propietario</v-list-item>
              <v-list-item>Consulta por parámetros</v-list-item>
              <v-list-item @click="$router.push('reporte-taquilla')">Reportes taquilla</v-list-item>
          </v-list>
          </v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel style="background-color:var(--bg-ap);">
          <v-expansion-panel-header>
            <v-icon>mdi-bank</v-icon>Hacienda
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-list class="lista">
              <v-list-item @click="$router.push('recaudacion')">Recaudación</v-list-item>
              <v-list-item @click="$router.push('consultar-propietario')">Consulta por propietario</v-list-item>
          </v-list>
          </v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel style="background-color:var(--bg-ap);">
          <v-expansion-panel-header>
            <v-icon>mdi-file-document</v-icon>Reporte
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-list class="lista">
              <v-list-item @click="$router.push('cedula-catastral')">Cédula Catastral</v-list-item>
          </v-list>
          </v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel style="background-color:var(--bg-ap);">
          <v-expansion-panel-header>
            <v-icon>mdi-city</v-icon>Inmuebles
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-list class="lista">
              <v-list-item @click="$router.push('inscripcion-inmueble')">Incorporación del inmueble</v-list-item>
              <v-list-item @click="$router.push('desincorporacion-inmueble')">Desincorporación del Inmueble</v-list-item>
              <v-list-item @click="$router.push('actualizacion-inmueble')">Actualización de los datos</v-list-item>
              <v-list-item>Consulta por parámetros</v-list-item>
              <v-list-item @click="$router.push('consultar-propietario')">Consultas por propietarios</v-list-item>          </v-list>
          </v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel style="background-color:var(--bg-ap);">
          <v-expansion-panel-header>
            <v-icon>mdi-account-multiple</v-icon>Contribuyente
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-list class="lista">
              <v-list-item @click="$router.push('crear-contribuyente')">Nuevo Contribuyente</v-list-item>
              <v-list-item @click="$router.push('modificar-datos')">Modificar Datos del Contribuyente</v-list-item>            </v-list>
          </v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel style="background-color:var(--bg-ap);">
          <v-expansion-panel-header>
            <v-icon>mdi-dns</v-icon>Archivo
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-list class="lista">
              <v-list-item @click="$router.push('ambito')">Ambito</v-list-item>
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
          </v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel style="background-color:var(--bg-ap);">
          <v-expansion-panel-header>
            <v-icon>mdi-cog</v-icon>Configuración
          </v-expansion-panel-header>
        </v-expansion-panel>
      </v-expansion-panels>

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
      permido: JSON.parse(JSON.stringify(this.$store.getters.getUser.permisos)),
      menu:[],
      menu_opciones:[],
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
  mounted(){
    this.permisos_menu()
  },
  methods: {
    permisos_menu(){
      //console.log('alalla',JSON.parse(JSON.stringify(this.$store.getters.getUser)))

      this.menu=(this.permido.filter(permido => permido.es_menu_modulo && permido.leer));
      this.menu.sort((a, b) => { // ordenar la lista de menues
        // Comparar por el campo 'orden_modulo' de forma ascendente    return a.orden_modulo - b.orden_modulo;
        // Comparar por el campo 'orden_modulo' de forma descendente   return b.orden_modulo - a.orden_modulo;
        return a.orden_modulo - b.orden_modulo;
      });

      
      this.menu_opciones=(this.permido.filter(permido => !permido.es_menu_modulo && permido.leer));
      this.menu_opciones.sort((a, b) => { // ordenar la lista de menues
        // Comparar por el campo 'orden_modulo' de forma ascendente    return a.orden_modulo - b.orden_modulo;
        // Comparar por el campo 'orden_modulo' de forma descendente   return b.orden_modulo - a.orden_modulo;
        return a.orden_modulo - b.orden_modulo;
      });

      //console.log('menu:');
      //this.menu.forEach((modulo) => {
      //  console.log('menu:',modulo.modulo);
      //});
      //console.log('opcions:');
      //this.menu_opciones.forEach((modulo) => {
      //  console.log('opcions:',modulo.modulo);
      //});
      //console.log('menu:',this.menu);
      //console.log('opcions:',this.menu_opciones);

    },
    getMenuOptions(menuName) {  // filtra las opciones segun el menu que los agrupa
      return this.menu_opciones.filter(menu_opciones => menu_opciones.menu_modulo === menuName);
    },
  },

}
</script>

<style src="~/assets/styles/components/drawer.scss" lang="scss" />