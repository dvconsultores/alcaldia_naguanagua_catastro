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

          <v-card class="cards-estado-cuenta" @click="$router.push('inscripcion-inmueble')">
            <v-icon class="icon-card">
              mdi-transfer-down
            </v-icon>
            <span class="title-card">
              Inscripción de Inmueble
            </span>
          </v-card>

          <v-card class="cards-estado-cuenta" @click="$router.push('estado-cuenta-taquilla')">
            <v-icon class="icon-card">
              mdi-gavel
            </v-icon>
            <span class="title-card">
              Estado de cuenta taquilla
            </span>
          </v-card>
        </div>
      </div>

      <div class="inmuebles-asociados-container">
        <div class="jspace center">
          <p class="title-inmuebles-asociados">
            Inmuebles asociados al contribuyente
          </p>

          <p style="margin-bottom:0px;">
            Cant. total: {{ inmueblePropietariosData.length }}
          </p>
        </div>

        <hr>

        <div v-for="(item,index) in inmueblePropietariosData" :key="index" class="dataInmuebles-container divrow">
          <div class="inputs-container">
            <v-text-field 
            v-model="item.inmueble.numero_expediente"
            class="small-input mobile-input" 
            label="Nro. Expediente" 
            disabled
            ></v-text-field>

            <v-text-field 
            v-model="item.inmueble.descripcion_sector"
            class="small-input mobile-input" 
            label="Sector" 
            disabled
            ></v-text-field>

            <v-text-field 
            v-model="item.inmueble.descripcion_manzana"
            class="small-input mobile-input" 
            label="Manzana" 
            disabled
            ></v-text-field>

            <v-text-field 
            v-model="item.inmueble.codigo_parcela"
            class="small-input mobile-input" 
            label="Parcela" 
            disabled
            ></v-text-field>

            <v-text-field 
            v-model="item.inmueble.codigo_subparcela"
            class="small-input mobile-input" 
            label="Sub-Parcela" 
            disabled
            ></v-text-field>

            <v-text-field 
            v-model="item.inmueble.nombre_urbanizacion"
            class="big-input mobile-input" 
            label="Urbanización" 
            disabled
            ></v-text-field>

            <v-text-field 
            v-model="item.inmueble.nombre_calle"
            class="medio-input mobile-input" 
            label="Av/Calle" 
            disabled
            ></v-text-field>

            <v-text-field 
            v-model="item.inmueble.nombre_conjunto_residencial"
            class="medio-input mobile-input" 
            label="Conj. Residencial" 
            disabled
            ></v-text-field>

            <v-text-field 
            v-model="item.inmueble.nombre_edificio"
            class="medio-input mobile-input" 
            label="Edificio" 
            disabled
            ></v-text-field>

            <v-text-field 
            v-model="item.inmueble.nombre_torre"
            class="small-input mobile-input" 
            label="Torre" 
            disabled
            ></v-text-field>

            <v-text-field 
            v-model="item.inmueble.numero_piso"
            class="small-input mobile-input" 
            label="Piso" 
            disabled
            ></v-text-field>

            <v-text-field 
            v-model="item.inmueble.numero_civico"
            class="small-input mobile-input" 
            label="Nro. Cívico" 
            disabled
            ></v-text-field>
          </div>

          <v-btn class="btn-swap" @click="redireccionarSolicitudInmuebleExistente(item.inmueble.id)">
            <v-icon>mdi-swap-horizontal</v-icon>
          </v-btn>
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
  }

}
</script>

<style src="~/assets/styles/pages/estado-cuenta-catastro.scss" lang="scss" />