<template>
  <div class="center no-padding divcol" style="margin-bottom:20px; padding-left: 256px;">
    <section class="section1-estado-cuenta">
      <div class="datos-contribuyente-container">
        <div class="title-morado">
          <p class="contribuyente-datos">
            Datos del Contribuyente
          </p>
        </div>

        <div class="datos-btns-contribuyente">
          <div class="title-description-div">
            <p class="nombre-razon">
              Nombre / Razón Social
            </p>

            <p class="nombre-desc">
              {{ nombrecontribuyente }}
            </p>
          </div>

          <div class="title-description-div">
            <p class="nombre-razon">
              CI / RIF / Pasaporte
            </p>

            <p class="nombre-desc">
              {{nacionalidadcontribuyente}} - {{numero_documento}}
            </p>
          </div>

          <v-card class="cards-estado-cuenta" @click="redireccionarDetalle()">
            <v-icon class="icon-card">
              mdi-transfer-down
            </v-icon>
            <span class="title-card">
              Trámites / Servicios
            </span>
          </v-card>

          <!-- <v-card class="cards-estado-cuenta" @click="$router.push('estado-cuenta-taquilla')">
            <v-icon class="icon-card">
              mdi-gavel
            </v-icon>
            <span class="title-card">
              Estado de cuenta taquilla
            </span>
          </v-card> -->
        </div>
      </div>

      <div class="flujo-container">
        <p class="title-inscripcion-inmueble">
          Seleccione tipo de trámite o servicio
        </p>

        <hr>

        <div class="center" style="width: 100%;">
          <v-autocomplete
          v-model="flujo"
          class="autocomplete-flujo"
          label="Tipo de trámite/servicio"
          :items="flujoData"
          item-text="descripcion"
          item-value="id"
          ></v-autocomplete>
        </div>
      </div>

    </section>
  </div>
</template>

<script>
import computeds from '~/mixins/computeds'

export default {
  name: "EstadoCuentaPage",
  mixins: [computeds],
  data() {
    return{
      inmueblePropietariosData: [],
      flujoData:[],
      nombrecontribuyente:this.$store.getters.getContribuyente=='Sin Seleccionar' ?'':JSON.parse(JSON.stringify(this.$store.getters.getContribuyente.nombre)),
      nacionalidadcontribuyente:this.$store.getters.getContribuyente=='Sin Seleccionar' ?'':JSON.parse(JSON.stringify(this.$store.getters.getContribuyente.nacionalidad)),
      numero_documento: this.$store.getters.getContribuyente=='Sin Seleccionar'?'':JSON.parse(JSON.stringify(this.$store.getters.getContribuyente.numero_documento)),
    }
  },

  head() {
    const title = 'Estado de Cuenta';
    return {
      title,
    }
  },

  mounted(){
    this.getFlujo()
    this.getInmueblePropietarios()
    this.redireccionIdVacio()
  },


  methods: {
    redireccionIdVacio(){
      if(this.$store.getters.getContribuyente=='Sin Seleccionar'){
        this.$router.push('modificar-datos')
        this.$alert("cancel", {desc: "Debe seleccionar un contribuyente para ingresar a este modulo", hash: 'knsddcssdc', title:'Error'})
      }else{
        ''
      }
    },

    redireccionarDetalle() {
      console.log('lalal',this.flujo)
      this.$store.dispatch('storeFlujo', this.flujo)
      this.$router.push(`estado-cuenta-detalle`)
    },

    redireccionarSolicitudInmuebleExistente(inmuebleId) {
      this.$router.push(`/solicitud-inmueble-existente/${inmuebleId}`)
    },

    getInmueblePropietarios(){
      this.$axios.$get('inmueble_propietarios/?propietario=' + this.$store.getters.getContribuyente.id).then(response => {
        this.inmueblePropietariosData = response
        console.log(this.inmueblePropietariosData, 'dataa')
      
      }).catch(err => {
        console.log(err)
      })
    },
    getFlujo(){
      this.$axios.$get('tipoflujo').then(response => {
        this.flujoData = response
      }).catch(err => {
        console.log(err)
      })
    },
  }

}
</script>

<style src="~/assets/styles/pages/estado-cuenta-catastro.scss" lang="scss" />