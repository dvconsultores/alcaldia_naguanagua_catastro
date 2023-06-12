<template>
  <div class="center no-padding divcol" style="margin-bottom:20px; padding-left: 256px;">
    <section class="section1-liquidacion">
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
              {{JSON.parse(JSON.stringify(this.$store.getters.getContribuyente.nombre))}}
            </p>
          </div>

          <div class="title-description-div">
            <p class="nombre-razon">
              CI / RIF / Pasaporte
            </p>

            <p class="nombre-desc">
              {{JSON.parse(JSON.stringify(this.$store.getters.getContribuyente.nacionalidad))}} - {{JSON.parse(JSON.stringify(this.$store.getters.getContribuyente.numero_documento))}}
            </p>
          </div>

          <!-- <v-card class="cards-liquidacion">
            <v-icon class="icon-card">
              mdi-transfer-down
            </v-icon>
            <span class="title-card">
              Liquidación de Inmueble
            </span>
          </v-card> -->

          <!-- <v-card class="cards-liquidacion">
            <v-icon class="icon-card">
              mdi-gavel
            </v-icon>
            <span class="title-card">
              Liquidación directa
            </span>
          </v-card> -->
        </div>
      </div>

      <div class="inmuebles-asociados-container">
        <div class="jspace center">
          <p class="title-inmuebles-asociados">
            Estados de cuentas asociados al contribuyente
          </p>

          <p style="margin-bottom:0px;">
            Cant. total: {{ estadoCuentasData.length }}
          </p>
        </div>

        <hr>

        <div v-for="(item,index) in estadoCuentasData" :key="index" class="dataInmuebles-container divrow">
          <div class="inputs-container">
            <v-text-field 
            v-model="item.numero"
            class="medio-input mobile-input" 
            label="Numero de estado" 
            disabled
            ></v-text-field>

            <v-text-field v-if=(item.tipoflujo)
            v-model="item.tipoflujo.descripcion"
            class="medio-input mobile-input" 
            label="Tipo de estado" 
            disabled
            ></v-text-field>
            <v-text-field v-else
              class="medio-input mobile-input" 
              label="Tipo de estado"  
              v-model="sindatos"
              disabled
            ></v-text-field>
            <v-text-field 
            v-model="fechaFormateada"
            class="medio-input mobile-input" 
            label="Fecha" 
            disabled
            ></v-text-field>

            <v-text-field 
            v-model="item.monto_total"
            class="medio-input mobile-input" 
            label="Monto Total" 
            disabled
            ></v-text-field>
          </div>

          <v-btn class="btn-swap" @click="redireccionarLiquidacionInmuebleExistente(item.id)">
            <v-icon>mdi-file-check</v-icon>
          </v-btn>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import computeds from '~/mixins/computeds'
import moment from 'moment'

export default {
  name: "EstadoCuentaPage",
  mixins: [computeds],
  data() {
    return{
      estadoCuentasData: [],
      sindatos:'Sin datos',
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
  },

  computed:{
    fechaFormateada() {
      if (moment(this.estadoCuentasData.fecha).isValid()) {
        return moment(this.estadoCuentasData.fecha).format('YYYY-MM-DD')
      }
      return 'Fecha inválida'
    }
  },

  methods: {
    redireccionarLiquidacionInmuebleExistente(estadoId) {
      this.$router.push(`/liquidacion-inmueble-existente/${estadoId}`)
    },

    getInmueblePropietarios(){
      this.$axios.$get('estadocuenta/?propietario=' + this.$store.getters.getContribuyente.id).then(response => {
        this.estadoCuentasData = response
        console.log(this.estadoCuentasData, 'dataa')
      
      }).catch(err => {
        console.log(err)
      })
    },
  }

}
</script>

<style src="~/assets/styles/pages/liquidacion.scss" lang="scss" />