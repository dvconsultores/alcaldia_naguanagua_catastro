<template>
  <div class="center no-padding divcol" style="margin-bottom:20px; padding-left: 256px;">
    <!-- <section class="section1-consultar-propietario">
      <div class="consulta-propietario-container">
        <p class="title-propietario">
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

          <v-text-field
          class="inputs-consulta"
          label="Nombre o Apellido"
          ></v-text-field>

          <v-btn class="btn-buscar">
            Buscar
          </v-btn>
        </div>
      </div>
    </section> -->

    <section class="section2-consultar-propietario">
      <div class="datos-propietario-container">
        <div class="container-morado">
          <span>
            Datos del Propietario
          </span>

          <v-icon class="icon-chevron" @click="selectItem(item)">mdi-chevron-down</v-icon>
        </div>

        <div class="container-datos-propietario">
          <div class="title-description-div">
            <p class="nombre-razon">
              Propietario
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

          <div class="title-description-div">
            <p class="nombre-razon">
              Total de Inmuebles
            </p>

            <p class="nombre-desc">
              2
            </p>
          </div>

          <div class="title-description-div">
            <p class="nombre-razon">
              Pendiente por Habilitación
            </p>

            <p class="nombre-desc">
              2
            </p>
          </div>
        </div>

        <div v-if="selectedItem === item">
          <div 
          v-for="(item2,index2) in detallesInmuebles" 
          :key="index2" 
          class="container-detalles-inmueble"
          >
            <div class="titles-grid">
              <p class="big-title">
                Inmuebles asociados al propietario
              </p>

              <p class="ubicacion">
                Ubicación
              </p>

              <p class="condicion">
                Condición
              </p>

              <p class="status">
                Status
              </p>
            </div>

            <div class="detalles-grid">
              <div class="inputs-container">
                <v-text-field
                label="Nro. Expediente"
                :value="item2.nro_expediente"
                class="small-input"
                disabled
                ></v-text-field>

                <v-text-field
                label="Sector"
                :value="item2.sector"
                class="small-input"
                disabled
                ></v-text-field>

                <v-text-field
                label="Manzana"
                :value="item2.manzana"
                class="small-input"
                disabled
                ></v-text-field>

                <v-text-field
                label="Sub-Parcela"
                :value="item2.sub_parcela"
                class="small-input"
                disabled
                ></v-text-field>

                <v-text-field
                label="Av/Calle"
                :value="item2.av_calle"
                class="big-input"
                disabled
                ></v-text-field>

                <v-text-field
                label="Conj. Residencial"
                :value="item2.conj_residencial"
                class="small-input"
                disabled
                ></v-text-field>

                <v-text-field
                label="Edificio"
                :value="item2.edificio"
                class="small-input"
                disabled
                ></v-text-field>

                <v-text-field
                label="Nro.Casa/Apto"
                :value="item2.casa_apto"
                class="small-input"
                disabled
                ></v-text-field>

                <v-text-field
                label="Sub-Parcela"
                :value="item2.sub_parcela"
                class="small-input"
                disabled
                ></v-text-field>

                <v-text-field
                label="Piso"
                :value="item2.piso"
                class="small-input"
                disabled
                ></v-text-field>

                <v-text-field
                label="Nro. Civico"
                :value="item2.nro_civico"
                class="small-input"
                disabled
                ></v-text-field>
              </div>

              <p class="ubicacion-desc">
                Dirección de Catastro
              </p>

              <p class="condicion-desc">
                Pendiente por Habilitación
              </p>

              <p class="status-desc">
                Estado
              </p>

              <div class="btns-container-detalles">
                <v-btn>
                  <v-icon>mdi-swap-horizontal</v-icon>
                </v-btn>

                <v-btn>
                  <v-icon>mdi-cached</v-icon>
                </v-btn>

                <v-btn>
                  <v-icon>mdi-swap-horizontal</v-icon>
                </v-btn>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import computeds from '~/mixins/computeds'

export default{
  name:"Consultar-PropietarioPage",
  mixins:[computeds],
  data(){
    return{
      counter_chevron: null,
      selectedItem: null,
      show_detalles: false,
      items: ['V', 'J', 'G', 'E'],
      propietarioDatos:[
        {
          nombre:"María Pera C.",
          id_type:"V",
          id_number:"12.345.678",
          total_inmuebles:"2",
          pendiente_habilitacion:"2",
        },
        {
          nombre:"Martha Castillo P.",
          id_type:"V",
          id_number:"12.345.678",
          total_inmuebles:"3",
          pendiente_habilitacion:"0",
        },
      ],
      detallesInmuebles:[
        {
          nro_expediente:"49552",
          sector:"003",
          manzana:"23",
          sub_parcela:"001",
          urbanizacion:"Las Quintas III Etapa",
          av_calle:"Calle prueba",
          conj_residencial:"Nombre prueba",
          edificio:"Prueba",
          casa_apto:"112",
          piso:"2",
          nro_civico:"173-370",
        }
      ],
    }
  },

  head() {
    const title = 'Consultar Propietario';
    return {
      title,
    }
  },

  methods: {
    selectItem(item) {
      this.selectedItem = item;
    },
  }
}
</script>

<style src="~/assets/styles/pages/consultar-propietario.scss" lang="scss" />