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
        <v-expansion-panel style="background-color:var(--bg-ap);">
          <v-expansion-panel-header>
            <v-icon>mdi-store</v-icon>Taquilla
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-list class="lista">
              <v-list-item to="/liquidacion" active-class="active">Liquidación</v-list-item>
              <!--v-list-item @click="$router.push('desincorporacion-inmueble')">Desincorporación del Inmueble</v-list-item>
              <v-list-item @click="$router.push('consultar-propietario')">Consulta por propietario</v-list-item>
              <v-list-item>Consulta por parámetros</v-list-item>
              <v-list-item @click="$router.push('reporte-taquilla')">Reportes taquilla</v-list-item !-->
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

        <!--v-expansion-panel style="background-color:var(--bg-ap);">
          <v-expansion-panel-header>
            <v-icon>mdi-file-document</v-icon>Reporte
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-list class="lista">
              <v-list-item @click="$router.push('cedula-catastral')">Cédula Catastral</v-list-item>
          </v-list>
          </v-expansion-panel-content>
        </v-expansion-panel!-->

        <v-expansion-panel style="background-color:var(--bg-ap);">
          <v-expansion-panel-header>
            <v-icon>mdi-city</v-icon>Inmuebles
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-list class="lista">
              <!--v-list-item @click="$router.push('inscripcion-inmueble')">Incorporación del inmueble</v-list-item>
              <v-list-item @click="$router.push('desincorporacion-inmueble')">Desincorporación del Inmueble</v-list-item>
              <v-list-item @click="$router.push('actualizacion-inmueble')">Actualización de los datos</v-list-item>
              <v-list-item>Consulta por parámetros</v-list-item>
              <v-list-item @click="$router.push('consultar-propietario')">Consultas por propietarios</v-list-item!-->  
              <v-list-item @click="$router.push('consulta-inmueble')">Consultar inmueble</v-list-item>        
            </v-list>
          </v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel style="background-color:var(--bg-ap);">
          <v-expansion-panel-header>
            <v-icon>mdi-account-multiple</v-icon>Contribuyente
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-list class="lista">
              <!-- <v-list-item @click="$router.push('crear-contribuyente')">Contribuyentes</v-list-item> -->
              <v-list-item @click="$router.push('modificar-datos')">Administrar Datos del Contribuyente</v-list-item>            </v-list>
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
              <v-list-item @click="$router.push('urbanizacion-barrio')">Urbanización / Barrio</v-list-item>
              <v-list-item @click="$router.push('calle')">Calle</v-list-item>
              <v-list-item @click="$router.push('avenida')">Avenida</v-list-item>
              <v-list-item @click="$router.push('conjuntos-residenciales')">Conjunto Residencial</v-list-item>
              <v-list-item @click="$router.push('edificios')">Edificio / Centro Comercial</v-list-item>
              <v-list-item @click="$router.push('torres')">Torre</v-list-item>
              <v-list-item @click="$router.push('tipo-inmueble')">Tipo de Inmueble</v-list-item>
              <v-list-item @click="$router.push('estatus-inmueble')">Estatus de Inmueble</v-list-item>
              <v-list-item @click="$router.push('nivel-inmueble')">Nivel de Inmueble</v-list-item>
              <v-list-item @click="$router.push('unidad-inmueble')">Unidad del Inmueble</v-list-item>
              <v-list-item @click="$router.push('tipo-documento')">Tipo de Documento</v-list-item>
              <v-list-item @click="$router.push('tipo-especial')">Tipo Especial</v-list-item>
              <v-list-item @click="$router.push('tipo-tenencia')">Tipo Tenencia</v-list-item>
              <v-list-item @click="$router.push('topografia')">Topografía</v-list-item>
              <v-list-item @click="$router.push('acceso')">Acceso</v-list-item>
              <v-list-item @click="$router.push('forma')">Forma</v-list-item>
              <v-list-item @click="$router.push('ubicacion')">Ubicación</v-list-item>
              <v-list-item @click="$router.push('uso')">Uso</v-list-item>
              <v-list-item @click="$router.push('regimen')">Régimen</v-list-item>
              <v-list-item @click="$router.push('servicios')">Servicios</v-list-item>
              <v-list-item @click="$router.push('tipologia')">Tipología</v-list-item>
              <v-list-item @click="$router.push('fines-fiscales')">Fines Fiscales</v-list-item>
              <v-list-item @click="$router.push('tipo-desincorporacion')">Tipo de Desincorporación</v-list-item>
              <v-list-item @click="$router.push('tipo-transaccion')">Tipo de Transacción</v-list-item>
              <v-list-item @click="$router.push('zona')">Zona</v-list-item>
              <v-list-item @click="$router.push('bcv')">Tasa BCV</v-list-item>
              <v-list-item @click="$router.push('unidad-tributaria')">Unidad Tributaria</v-list-item>
              <v-list-item @click="$router.push('moneda')">Monedas</v-list-item>
              <v-list-item @click="$router.push('tasa-multa')">Tasa / Multa</v-list-item>
              <v-list-item @click="$router.push('tipo-pago')">Tipo de pago</v-list-item>
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
          Cerrar sesión
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
              <v-list-item @click="$router.push('urbanizacion-barrio')">Urbaniza/ción  Barrio</v-list-item>
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
          Cerrar sesión
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