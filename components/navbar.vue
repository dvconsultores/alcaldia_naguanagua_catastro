<template>
  <div class="header-container no-padding">
    <section class="section-header">
      <div class="divrow astart" style="margin-left: 20px;">
        <v-icon @click="$router.push('/dashboard')">mdi-chevron-left</v-icon>

        <div v-if="$route.path == '/dashboard'" class="divcol">
          <span class="index-text">
            Dashboard
          </span>
        </div>

        <div v-if="$route.path == '/liquidacion'" class="divcol">
          <span class="index-text">
            Liquidación
          </span>
        </div>

        <div v-if="$route.path == '/inscripcion-inmueble'" class="divcol">
          <span class="index-text">
            Inscripción de inmueble
          </span>
        </div>

        <div v-if="$route.path == '/solicitud-inmueble-existente'" class="divcol">
          <span class="index-text">
            Inscripción de inmueble
          </span>
        </div>

        <div v-if="$route.path == '/consultar-propietario'" class="divcol">
          <span class="index-text">
            Consultar por propietario
          </span>
        </div>

        <div v-if="$route.path == '/desincorporacion-inmueble'" class="divcol">
          <span class="index-text">
            Desincorporación de inmueble
          </span>
        </div>

        <div v-if="$route.path == '/planilla-desincorporacion'" class="divcol">
          <span class="index-text">
            Desincorporación de inmueble
          </span>
        </div>

        <div v-if="$route.path == '/recaudacion'" class="divcol">
          <span class="index-text">
            Recaudación
          </span>
        </div>

        <div v-if="$route.path == '/modificar-datos'" class="divcol">
          <span class="index-text">
            Modificar contribuyente
          </span>
        </div>

        <div v-if="$route.path == '/impuestos-pago'" class="divcol">
          <span class="index-text">
            Impuestos de tasa (Pago)
          </span>
        </div>

        <div v-if="$route.path == '/crear-contribuyente'" class="divcol">
          <span class="index-text">
            Nuevo contribuyente
          </span>
        </div>

        <div v-if="$route.path == '/cedula-catastral'" class="divcol">
          <span class="index-text">
            Cédula Catastral
          </span>
        </div>

        <div v-if="$route.path == '/reporte-taquilla'" class="divcol">
          <span class="index-text">
            Reportes Taquilla
          </span>
        </div>

        <div v-if="$route.path == '/actualizacion-inmueble'" class="divcol">
          <span class="index-text">
            Actualización del Inmueble
          </span>
        </div>

        <div v-if="$route.path == '/sector'" class="divcol">
          <span class="index-text">
            Sector
          </span>
        </div>

        <div v-if="$route.path == '/manzana'" class="divcol">
          <span class="index-text">
            Manzana
          </span>
        </div>

        <div v-if="$route.path == '/parcela'" class="divcol">
          <span class="index-text">
            Parcelas
          </span>
        </div>

        <div v-if="$route.path == '/sub-parcela'" class="divcol">
          <span class="index-text">
            Sub - Parcelas
          </span>
        </div>

        <div v-if="$route.path == '/urbanizacion-barrio'" class="divcol">
          <span class="index-text">
            Urbanización o Barrio
          </span>
        </div>

        <div v-if="$route.path == '/edificios'" class="divcol">
          <span class="index-text">
            Edificios o Centros Comerciales
          </span>
        </div>

        <div v-if="$route.path == '/conjuntos-residenciales'" class="divcol">
          <span class="index-text">
            Conjuntos Residenciales
          </span>
        </div>

        <div v-if="$route.path == '/torres'" class="divcol">
          <span class="index-text">
            Torres
          </span>
        </div>

        <div v-if="$route.path == '/ambito'" class="divcol">
          <span class="index-text">
            Ambito
          </span>
        </div>
      </div>

      <div class="divrow" style="gap:20px;">

        <v-icon @click="$router.push('/configuracion')">
          mdi-cog-outline
        </v-icon>

        <v-icon>
          mdi-bell-outline
        </v-icon>

        <div class="divcol aend">
          <span class="span-saludo">
            ¡Hola Usuario 234!
          </span>
          <span class="span-admin">
            Administrador
          </span>
        </div>
      </div>

      
    </section>
  </div>
</template>

<script>
import computeds from '~/mixins/computeds'

export default {
  name: "NavbarComponent",
  mixins: [computeds],
  data() {
    return {

    };
  },

  methods: {
    
  },
};
</script>

<style src="~/assets/styles/components/navbar.scss" lang="scss" />
