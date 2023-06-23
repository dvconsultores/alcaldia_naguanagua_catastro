<template>
  <div class="header-container no-padding">
    <section class="section-header">
      <div class="divrow astart" style="margin-left: 20px;">
        <v-icon @click="goBack()">mdi-chevron-left</v-icon>

        <div v-if="$route.path == '/dashboard'" class="divcol">
          <span class="index-text">
            Dashboard
          </span>
        </div>

        <div v-else-if="$route.path == '/estado-cuenta-catastro'" class="divcol">
          <span class="index-text">
            Estado de Cuenta Catastro
          </span>
        </div>

        <div v-else-if="$route.path == '/estado-cuenta-taquilla'" class="divcol">
          <span class="index-text">
            Estado de Cuenta Taquilla
          </span>
        </div>

        <div v-else-if="$route.path == '/inscripcion-inmueble'" class="divcol">
          <span class="index-text">
            Inscripción de inmueble
          </span>
        </div>

        <div v-else-if="$route.path == '/solicitud-inmueble-existente/' + inmuebleId" class="divcol">
          <span class="index-text">
            Inscripción de inmueble
          </span>
        </div>

        <div v-else-if="$route.path == '/consultar-propietario'" class="divcol">
          <span class="index-text">
            Consultar por propietario
          </span>
        </div>

        <div v-else-if="$route.path == '/desincorporacion-inmueble'" class="divcol">
          <span class="index-text">
            Desincorporación de inmueble
          </span>
        </div>

        <div v-else-if="$route.path == '/planilla-desincorporacion'" class="divcol">
          <span class="index-text">
            Desincorporación de inmueble
          </span>
        </div>

        <div v-else-if="$route.path == '/recaudacion'" class="divcol">
          <span class="index-text">
            Recaudación
          </span>
        </div>

        <div v-else-if="$route.path == '/modificar-datos'" class="divcol">
          <span class="index-text">
            Modificar contribuyente
          </span>
        </div>

        <div v-else-if="$route.path == '/impuestos-pago'" class="divcol">
          <span class="index-text">
            Impuestos de tasa (Pago)
          </span>
        </div>

        <div v-else-if="$route.path == '/crear-contribuyente'" class="divcol">
          <span class="index-text">
            Contribuyentes o Propietarios
          </span>
        </div>

        <div v-else-if="$route.path == '/cedula-catastral'" class="divcol">
          <span class="index-text">
            Cédula Catastral
          </span>
        </div>

        <div v-else-if="$route.path == '/reporte-taquilla'" class="divcol">
          <span class="index-text">
            Reportes Taquilla
          </span>
        </div>

        <div v-else-if="$route.path == '/actualizacion-inmueble'" class="divcol">
          <span class="index-text">
            Actualización del Inmueble
          </span>
        </div>

        <div v-else-if="$route.path == '/sector'" class="divcol">
          <span class="index-text">
            Sector
          </span>
        </div>

        <div v-else-if="$route.path == '/manzana'" class="divcol">
          <span class="index-text">
            Manzana
          </span>
        </div>

        <div v-else-if="$route.path == '/parcela'" class="divcol">
          <span class="index-text">
            Parcelas
          </span>
        </div>

        <div v-else-if="$route.path == '/sub-parcela'" class="divcol">
          <span class="index-text">
            Sub - Parcelas
          </span>
        </div>

        <div v-else-if="$route.path == '/urbanizacion-barrio'" class="divcol">
          <span class="index-text">
            Urbanización o Barrio
          </span>
        </div>

        <div v-else-if="$route.path == '/edificios'" class="divcol">
          <span class="index-text">
            Edificios o Centros Comerciales
          </span>
        </div>

        <div v-else-if="$route.path == '/conjuntos-residenciales'" class="divcol">
          <span class="index-text">
            Conjuntos Residenciales
          </span>
        </div>

        <div v-else-if="$route.path == '/torres'" class="divcol">
          <span class="index-text">
            Torres
          </span>
        </div>

        <div v-else-if="$route.path == '/ambito'" class="divcol">
          <span class="index-text">
            Ambito
          </span>
        </div>

        <div v-else-if="$route.path == '/tipo-inmueble'" class="divcol">
          <span class="index-text">
            Tipo de Inmueble
          </span>
        </div>

        <div v-else-if="$route.path == '/estatus-inmueble'" class="divcol">
          <span class="index-text">
            Tipo de Estatus
          </span>
        </div>

        <div v-else-if="$route.path == '/nivel-inmueble'" class="divcol">
          <span class="index-text">
            Nivel de Inmueble
          </span>
        </div>

        <div v-else-if="$route.path == '/unidad-inmueble'" class="divcol">
          <span class="index-text">
            Unidad de Inmueble
          </span>
        </div>

        <div v-else-if="$route.path == '/tipo-documento'" class="divcol">
          <span class="index-text">
            Tipo de Documento
          </span>
        </div>

        <div v-else-if="$route.path == '/tipo-especial'" class="divcol">
          <span class="index-text">
            Tipo Especial
          </span>
        </div>

        <div v-else-if="$route.path == '/tipo-tenencia'" class="divcol">
          <span class="index-text">
            Tipo de Tenencia
          </span>
        </div>

        <div v-else-if="$route.path == '/topografia'" class="divcol">
          <span class="index-text">
            Topografía
          </span>
        </div>

        <div v-else-if="$route.path == '/acceso'" class="divcol">
          <span class="index-text">
            Acceso
          </span>
        </div>

        <div v-else-if="$route.path == '/forma'" class="divcol">
          <span class="index-text">
            Forma
          </span>
        </div>

        <div v-else-if="$route.path == '/ubicacion'" class="divcol">
          <span class="index-text">
            Ubicación
          </span>
        </div>

        <div v-else-if="$route.path == '/uso'" class="divcol">
          <span class="index-text">
            Uso
          </span>
        </div>

        <div v-else-if="$route.path == '/regimen'" class="divcol">
          <span class="index-text">
            Regimen
          </span>
        </div>

        <div v-else-if="$route.path == '/servicios'" class="divcol">
          <span class="index-text">
            Servicios
          </span>
        </div>

        <div v-else-if="$route.path == '/tipologia'" class="divcol">
          <span class="index-text">
            Tipología
          </span>
        </div>

        <div v-else-if="$route.path == '/fines-fiscales'" class="divcol">
          <span class="index-text">
            Fines Fiscales
          </span>
        </div>

        <div v-else-if="$route.path == '/tipo-desincorporacion'" class="divcol">
          <span class="index-text">
            Tipo de Desincorporación
          </span>
        </div>

        <div v-else-if="$route.path == '/tipo-transaccion'" class="divcol">
          <span class="index-text">
            Tipo de Transacción
          </span>
        </div>

        <div v-else-if="$route.path == '/calle'" class="divcol">
          <span class="index-text">
            Calles
          </span>
        </div>

        <div v-else-if="$route.path == '/avenida'" class="divcol">
          <span class="index-text">
            Avenidas
          </span>
        </div>

        <div v-else-if="$route.path == '/zona'" class="divcol">
          <span class="index-text">
            Zonas
          </span>
        </div>

        <div v-else-if="$route.path == '/bcv'" class="divcol">
          <span class="index-text">
            Tasa BCV
          </span>
        </div>

        <div v-else-if="$route.path == '/unidad-tributaria'" class="divcol">
          <span class="index-text">
            Unidades Tributarias
          </span>
        </div>

        <div v-else-if="$route.path == '/moneda'" class="divcol">
          <span class="index-text">
            Monedas
          </span>
        </div>

        <div v-else-if="$route.path == '/tasa-multa'" class="divcol">
          <span class="index-text">
            Tasas / Multas
          </span>
        </div>

        <div v-else-if="$route.path == '/tipo-pago'" class="divcol">
          <span class="index-text">
            Tipo de pago
          </span>
        </div>

        <div v-else-if="$route.path == '/consulta-inmueble'" class="divcol">
          <span class="index-text">
            Busqueda de inmueble
          </span>
        </div>

        <div v-else-if="$route.path == '/liquidacion'" class="divcol">
          <span class="index-text">
            Liquidación
          </span>
        </div>

        <div v-else-if="$route.path == '/actualizacion-propietarios'" class="divcol">
          <span class="index-text">
            Actualización de propietarios
          </span>
        </div>

        <div v-else-if="$route.path == '/actualizar-documentos-pendientes'" class="divcol">
          <span class="index-text">
            Actualización de Documentos Pendientes
          </span>
        </div>

        <div v-else-if="$route.path == '/actualizar-construccion'" class="divcol">
          <span class="index-text">
            Actualizar Construcción
          </span>
        </div>

        <div v-else-if="$route.path == '/actualizar-terreno'" class="divcol">
          <span class="index-text">
            Actualizar Terreno
          </span>
        </div>

        <div v-else-if="$route.path == '/actualizar-documento-propiedad'" class="divcol">
          <span class="index-text">
            Actualizar Documento de Propieda
          </span>
        </div>

        <div v-else class="divcol">
          <span class="index-text">
            Estado de cuenta de inmueble existente
          </span>
        </div>
      </div>

      <div class="divrow" style="gap:20px;">

        <!-- <v-icon @click="$router.push('/configuracion')">
          mdi-cog-outline
        </v-icon>

        <v-icon>
          mdi-bell-outline
        </v-icon> -->

        <div class="divcol center">
          <span class="span-saludo">
            Inmueble
          </span>
          <span class="span-saludo tcenter" v-if="JSON.parse(JSON.stringify(this.$store.getters.getExpediente))!='Sin Seleccionar'">
           Expediente Nro.: {{JSON.parse(JSON.stringify(this.$store.getters.getExpediente.numero_expediente))}}
          </span>
          <span class="span-saludo tcenter" v-if="JSON.parse(JSON.stringify(this.$store.getters.getExpediente))!='Sin Seleccionar'">
           Urbanizacion: {{JSON.parse(JSON.stringify(this.$store.getters.getExpediente.nombre_urbanizacion))}}
          </span>
          <span class="span-saludo tcenter" v-if="JSON.parse(JSON.stringify(this.$store.getters.getExpediente))!='Sin Seleccionar'">
           Conjunto Residencial: {{JSON.parse(JSON.stringify(this.$store.getters.getExpediente.nombre_conjunto_residencial))}}
          </span>
        </div>

        <div class="divcol center">
          <span class="span-saludo">
           Contribuyente
          </span>
          <span class="span-saludo tcenter" v-if="JSON.parse(JSON.stringify(this.$store.getters.getContribuyente))!='Sin Seleccionar'">
            Tipo de Documento: {{JSON.parse(JSON.stringify(this.$store.getters.getContribuyente.tipo_documento))}}
          </span>
          <span class="span-saludo tcenter" v-if="JSON.parse(JSON.stringify(this.$store.getters.getContribuyente))!='Sin Seleccionar'">
            Número Documento: {{JSON.parse(JSON.stringify(this.$store.getters.getContribuyente.nacionalidad))}} {{JSON.parse(JSON.stringify(this.$store.getters.getContribuyente.numero_documento))}}
          </span>
          <span class="span-saludo tcenter" v-if="JSON.parse(JSON.stringify(this.$store.getters.getContribuyente))!='Sin Seleccionar'">
            Nombre: {{JSON.parse(JSON.stringify(this.$store.getters.getContribuyente.nombre))}}
          </span>
        </div>

        <div class="divcol center">
          <span class="span-saludo tcenter">
            ¡Hola Usuario 234!
          </span>
          <span class="span-saludo tcenter">
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
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<style src="~/assets/styles/components/navbar.scss" lang="scss" />
