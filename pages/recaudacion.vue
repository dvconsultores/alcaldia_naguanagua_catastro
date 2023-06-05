<template>
  <div class="center no-padding divcol" style="margin-bottom:20px; padding-left: 256px;">
    <section class="section1-recaudacion">
      <!--div class="recaudacion-container">
        <p class="title-recaudacion">
          Recaudación
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
      </div!-->

      <div class="impuestos-container">
        <p class="title-modificar">
          Impuestos Pendientes por Recaudar
        </p>
      </div>

      <div class="datos-contribuyente-container">
        <div class="container-morado">
          <span>
            Datos del Contribuyente
          </span>
        </div>

        <div
        class="absolute-line"
        ></div>

        <div class="container-datos-contribuyente">
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
        </div>
      </div>
    </section>

    <section class="section2-recaudacion">
      <div class="impuestos-tasa-container">
        <div class="jspace center">
          <p class="title-impuestos-tasa">
            Impuestos por tasas
          </p>

          <p style="margin-bottom:0px;">
            Total por Facturar: {{ cant_total }}
          </p>
        </div>

        <hr>

        <div v-for="(item, index) in impuestosTasa" :key="index" class="impuestos-data-container">
          <v-text-field
          label="Nro. Recibo"
          :value="item.nro_recibo"
          class="input-small"
          ></v-text-field>

          <v-text-field
          label="Nro. Recibo"
          :value="item.impuestos"
          class="input-big"
          ></v-text-field>

          <v-text-field
          label="Nro. Recibo"
          :value="item.total"
          class="input-big"
          ></v-text-field>

          <v-btn class="btn-dollar" @click="$router.push('impuestos-pago')">
            <v-icon>mdi-cash-multiple</v-icon>
          </v-btn>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import computeds from '~/mixins/computeds'

export default{
  name: "RecaudacionPage",
  mixins:[computeds],
  data(){
    return{
      cant_total: 288,
      items: ['V', 'J', 'G', 'E'],
      impuestosTasa:[
        {
          nro_recibo:"456324",
          impuestos:"Impuestos por tasas - inscripción catastral",
          total:"72",
        },
        {
          nro_recibo:"456324",
          impuestos:"Impuestos por tasas - inscripción catastral",
          total:"72",
        },
        {
          nro_recibo:"456324",
          impuestos:"Impuestos por tasas - inscripción catastral",
          total:"72",
        },
        {
          nro_recibo:"456324",
          impuestos:"Impuestos por tasas - inscripción catastral",
          total:"72",
        },
      ],
    }
  },

  head() {
    const title = 'Recaudacion';
    return {
      title,
    }
  },

  methods: {

  }
}

</script>


<style src="~/assets/styles/pages/recaudacion.scss" lang="scss" />