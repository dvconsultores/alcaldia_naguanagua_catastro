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
              RIF
            </p>

            <p class="nombre-desc">
              {{numero_documento}}
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
        </div>
      </div>

      <div class="flujo-container">
        <p class="title-inscripcion-inmueble">
          Seleccione Ingreso Extraordinario
        </p>

        <hr>

        <div class="center" style="width: 100%;">
          <v-autocomplete
          v-model="flujo"
          class="autocomplete-flujo"
          label="Tipo de ingreso extraordinario"
          :items="flujoData"
          item-text="descripcion"
          item-value="codigo"
          ></v-autocomplete>
        </div>
      </div>

    </section>
  </div>
</template>

<script>
import computeds from '~/mixins/computeds'

export default {
  name: "Estado-Cuenta-CatastroPage",
  mixins: [computeds],
  data() {
    return{
      inmueblePropietariosData: [],
      flujoData:[],
      flujo:null,
      nombrecontribuyente:this.$store.getters.getContribuyente=='Sin Seleccionar' ?'':JSON.parse(JSON.stringify(this.$store.getters.getContribuyente.nombre)),
      nacionalidadcontribuyente:this.$store.getters.getContribuyente=='Sin Seleccionar' ?'':JSON.parse(JSON.stringify(this.$store.getters.getContribuyente.nacionalidad)),
      numero_documento: this.$store.getters.getContribuyente=='Sin Seleccionar'?'':JSON.parse(JSON.stringify(this.$store.getters.getContribuyente.numero_documento)),
    }
  },

  head() {
    const title = 'Estado de Cuenta Catastro';
    return {
      title,
    }
  },

  mounted(){
    this.getFlujo()
    this.redireccionIdVacio()
  },


  methods: {
    redireccionIdVacio(){
      if(this.$store.getters.getContribuyente=='Sin Seleccionar'){
        this.$router.push('modificar-datos')
        this.$alert("cancel", {desc: "Debe seleccionar un contribuyente para ingresar a este módulo", hash: 'knsddcssdc', title:'Error'})
      }else{
        ''
      }
    },

    redireccionarDetalle() {
      console.log('lalal',this.flujo)
      this.$store.dispatch('storeFlujo',this.flujoData.find(flujo => flujo.codigo ===this.flujo))
      this.$router.push(`estado-cuenta-detalle-caja`)
    },

    getFlujo(){
      this.$axios.$get('tipoflujo').then(response => {
        this.flujoData = response.filter(item => item.aplica === 'R');
        console.log('this.flujoData',this.flujoData)
      }).catch(err => { 
        console.log(err)
      })
    },
  }

}
</script>

<style src="~/assets/styles/pages/estado-cuenta-catastro.scss" lang="scss" />