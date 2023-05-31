<template>
  <div class="center no-padding divcol" style="margin-bottom:20px; padding-left: 256px;">
    <!-- <section class="section1-liquidacion">
      <div class="consulta-liquidacion-container">
        <p class="title-liquidacion">
          Consultar Propietario
        </p>

        <hr>

        <div class="textfield-search-container">
          <v-autocomplete
          :items="items"
          class="autocomplete-field"
          ></v-autocomplete>

          <v-text-field
          class="inputs-consulta"
          label="Cédula"
          ></v-text-field>

          <v-btn class="btn-buscar">
            Buscar
          </v-btn>
        </div>
      </div>
    </section> -->

    <section class="section2-liquidacion">
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

          <v-card class="cards-liquidacion" @click="$router.push('inscripcion-inmueble')">
            <v-icon class="icon-card">
              mdi-transfer-down
            </v-icon>
            <span class="title-card">
              Inscripción de Inmueble
            </span>
          </v-card>

          <v-card class="cards-liquidacion">
            <v-icon class="icon-card">
              mdi-gavel
            </v-icon>
            <span class="title-card">
              Estado de la Liquidación
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
            Cant. total: {{ cant_total }}
          </p>
        </div>

        <hr>

        <div v-for="(item,index) in dataInmuebles" :key="index" class="dataInmuebles-container divrow">
          <div class="inputs-container">
            <v-text-field 
            class="small-input mobile-input" 
            label="Nro. Expediente" 
            :value="item.nro_expediente" 
            disabled
            ></v-text-field>

            <v-text-field 
            class="small-input mobile-input" 
            label="Sector" 
            :value="item.sector" 
            disabled
            ></v-text-field>

            <v-text-field 
            class="small-input mobile-input" 
            label="Manzana" 
            :value="item.manzana" 
            disabled
            ></v-text-field>

            <v-text-field 
            class="small-input mobile-input" 
            label="Parcela" 
            :value="item.parcela" 
            disabled
            ></v-text-field>

            <v-text-field 
            class="small-input mobile-input" 
            label="Sub-Parcela" 
            :value="item.sub_parcela" 
            disabled
            ></v-text-field>

            <v-text-field 
            class="big-input mobile-input" 
            label="Urbanización" 
            :value="item.urbanizacion" 
            disabled
            ></v-text-field>

            <v-text-field 
            class="medio-input mobile-input" 
            label="Av/Calle" 
            :value="item.av_calle" 
            disabled
            ></v-text-field>

            <v-text-field 
            class="medio-input mobile-input" 
            label="Conj. Residencial" 
            :value="item.conj_residencial" 
            disabled
            ></v-text-field>

            <v-text-field 
            class="medio-input mobile-input" 
            label="Edificio" 
            :value="item.edificio" 
            disabled
            ></v-text-field>

            <v-text-field 
            class="small-input mobile-input" 
            label="Torre" 
            :value="item.torre" 
            disabled
            ></v-text-field>

            <v-text-field 
            class="small-input mobile-input" 
            label="Piso" 
            :value="item.piso" 
            disabled
            ></v-text-field>

            <v-text-field 
            class="small-input mobile-input" 
            label="Nro. Cívico" 
            :value="item.nro_civico" 
            disabled
            ></v-text-field>
          </div>

          <v-btn class="btn-swap" @click="$router.push('solicitud-inmueble-existente')">
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
  name: "LiquidacionPage",
  mixins: [computeds],
  data() {
    return{
      nombrePropietario: '',
      cedulaPropietario: '',
      nacionalidadPropietario: '',
      propietarioData:[],
      items: ['V', 'J', 'G', 'E'],
      cant_total:"4",

      dataInmuebles:[
        {
          nro_expediente:"49552",
          sector:"49522",
          manzana:"23",
          parcela:"12.345.6789",
          sub_parcela:"999",
          urbanizacion:"",
          av_calle:"Calle prueba",
          conj_residencial:"Calle prueba",
          edificio:"Calle prueba",
          torre:"Calle prueba",
          piso:"Calle prueba",
          nro_civico:"123",
        },
        // {
        //   nro_expediente:"49552",
        //   sector:"49522",
        //   manzana:"23",
        //   parcela:"12.345.6789",
        //   sub_parcela:"999",
        //   urbanizacion:"",
        //   av_calle:"Calle prueba",
        //   conj_residencial:"Calle prueba",
        //   edificio:"Calle prueba",
        //   torre:"Calle prueba",
        //   piso:"Calle prueba",
        //   nro_civico:"123",
        // },
        // {
        //   nro_expediente:"49552",
        //   sector:"49522",
        //   manzana:"23",
        //   parcela:"12.345.6789",
        //   sub_parcela:"999",
        //   urbanizacion:"",
        //   av_calle:"Calle prueba",
        //   conj_residencial:"Calle prueba",
        //   edificio:"Calle prueba",
        //   torre:"Calle prueba",
        //   piso:"Calle prueba",
        //   nro_civico:"123",
        // },
      ],
    }
  },

  head() {
    const title = 'Liquidacion';
    return {
      title,
    }
  },

  mounted(){
    this.getDataPropietarios()
  },

  methods: {
    getDataPropietarios(){
      this.$axios.$get('propietario').then(response => {
        this.propietarioData = response
      
      }).catch(err => {
        console.log(err)
      })
    }
  }

}
</script>

<style src="~/assets/styles/pages/liquidacion.scss" lang="scss" />