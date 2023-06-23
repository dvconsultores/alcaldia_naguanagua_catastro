<template>
  <div class="center no-padding divcol" style="margin-bottom:20px; padding-left: 256px;">
    <section class="section1-actualizar-terreno">
      <div class="actualizar-terreno-container">
        <div class="title-morado">
          <p class="actualizar-terreno-title">
            Datos del Terreno (1)
          </p>
        </div>

        <div class="div-autocomplete">
          <div v-for="(item, index) in dataTopografia" :key="index" class="divrow center" style="gap: 10px; width: 100%;">
            <v-text-field
            class="input-select"
            label="Topografia"
            :value="item.topografia"
            readonly
            ></v-text-field>
            <v-btn @click="deleteItem(index)" class="btn-delete">
              <v-icon>
                mdi-delete
              </v-icon>
            </v-btn>
          </div>
          <div class="divrow center" style="gap: 10px; width: 100%;">
            <v-autocomplete
            v-model="topografiaAuto"
            class="input-select"
            label="Topografia"
            :items="topografiaItems"
            ></v-autocomplete>
            <v-btn @click="addDiv" class="btn-delete">
              <v-icon>
                mdi-plus
              </v-icon>
            </v-btn>
          </div>
        </div>
        <v-divider vertical class="purple delete-1200"></v-divider>
        <div class="div-autocomplete">
          <div v-for="(item, index) in dataAcceso" :key="index" class="divrow center" style="gap: 10px; width: 100%;">
            <v-text-field
            class="input-select"
            label="Acceso"
            :value="item.acceso"
            readonly
            ></v-text-field>
            <v-btn @click="deleteItemAcceso(index)" class="btn-delete">
              <v-icon>
                mdi-delete
              </v-icon>
            </v-btn>
          </div>
          <div class="divrow center" style="gap: 10px; width: 100%;">
            <v-autocomplete
            v-model="accesoAuto"
            class="input-select"
            label="Acceso"
            :items="accesoItems"
            ></v-autocomplete>
            <v-btn @click="addDivTecho" class="btn-delete">
              <v-icon>
                mdi-plus
              </v-icon>
            </v-btn>
          </div>
        </div>
        <v-divider vertical class="purple delete-1200"></v-divider>
        <div class="div-autocomplete">
          <v-autocomplete
          class="input-select"
          label="Forma"
          ></v-autocomplete>
        </div>
        <v-divider vertical class="purple delete-1200"></v-divider>
        <div class="div-autocomplete">
          <v-autocomplete
          class="input-select input-select-no-border"
          label="Ubicación"
          ></v-autocomplete>
        </div>
      </div>

      <div class="actualizar-terreno-container">
        <div class="title-morado">
          <p class="actualizar-terreno-title">
            Datos del Terreno (2)
          </p>
        </div>

        <div class="div-autocomplete">
          <v-autocomplete
          class="input-select"
          label="Tenencia"
          ></v-autocomplete>
        </div>

        <v-divider vertical class="purple delete-1200"></v-divider>

        <div class="div-autocomplete">
          <div v-for="(item, index) in dataUsoActual" :key="index" class="divrow center" style="gap: 10px; width: 100%;">
            <v-text-field
            class="input-select"
            label="Uso Actual"
            :value="item.uso_actual"
            readonly
            ></v-text-field>
            <v-btn @click="deleteItemCubiertaUsoActual(index)" class="btn-delete">
              <v-icon>
                mdi-delete
              </v-icon>
            </v-btn>
          </div>
          <div class="divrow center" style="gap: 10px; width: 100%;">
            <v-autocomplete
            v-model="usoActualAuto"
            class="input-select"
            label="Uso Actual"
            :items="usoActualItems"
            ></v-autocomplete>
            <v-btn @click="addDivUsoActual" class="btn-delete">
              <v-icon>
                mdi-plus
              </v-icon>
            </v-btn>
          </div>
        </div>

        <v-divider vertical class="purple delete-1200"></v-divider>

        <div class="div-autocomplete">
          <v-autocomplete
          class="input-select"
          label="Regimen de Propiedad"
          ></v-autocomplete>
        </div>

        <v-divider vertical class="purple delete-1200"></v-divider>

        <div class="div-autocomplete">
          <div v-for="(item, index) in dataServicios" :key="index" class="divrow center" style="gap: 10px; width: 100%;">
            <v-text-field
            class="input-select"
            label="Servicios Publicos"
            :value="item.servicios"
            readonly
            ></v-text-field>
            <v-btn @click="deleteItemServicios(index)" class="btn-delete">
              <v-icon>
                mdi-delete
              </v-icon>
            </v-btn>
          </div>
          <div class="divrow center" style="gap: 10px; width: 100%;">
            <v-autocomplete
            v-model="serviciosAuto"
            class="input-select"
            label="Servicios Publicos"
            :items="serviciosItems"
            ></v-autocomplete>
            <v-btn @click="addDivServicios" class="btn-delete">
              <v-icon>
                mdi-plus
              </v-icon>
            </v-btn>
          </div>
        </div>
      </div>

      <div class="actualizar-terreno-container">
        <div class="title-morado">
          <p class="actualizar-terreno-title">
            Datos del Terreno (3)
          </p>
        </div>

        <div class="div-autocomplete" style="width: 100%;">
          <v-textarea
          class="textarea"
          label="Observaciones"
          ></v-textarea>
        </div>
      </div>

      <div>
        <v-btn class="btn btn-mobile" @click="dialog_confirmar = true">
          Guardar
        </v-btn>
      </div>
    </section>

    <!-- DIALOG -->

    <v-dialog content-class="dialog-guardar" max-width="500px" v-model="dialog_confirmar" persistent>
      <v-card class="guardar-card">
        <v-card-title class="center title">¿Desea guardar este registro?</v-card-title>
        <span class="alerta-text">Esta acción no se puede revertir</span>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn class="btn dialog-btn" text @click="dialog_confirmar = false">Si</v-btn>
          <v-btn class="btn dialog-btn" text @click="dialog_confirmar = false" style="background-color:#ED057E!important;">No</v-btn>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import computeds from '~/mixins/computeds'

export default {
  name: "actualizar-terrenoPage",
  mixins: [computeds],
  data() {
    return {  
      dialog_confirmar: false,

      topografiaAuto: null,
      topografiaItems: ["Sobre Nivel", "Nivel"],
      dataTopografia:[{topografia: "Sobre Nivel",}],

      accesoAuto: null,
      accesoItems: ["Calle Engrazonada", "Calle Cerrada"],
      dataAcceso:[{acceso: "Calle Engrazonada",}],

      usoActualAuto: null,
      usoActualItems: ["Recreativo - Deportivo", "Estacionamiento"],
      dataUsoActual:[{uso_actual: "Recreativo - Deportivo",}],

      serviciosAuto: null,
      serviciosItems: ["Electricidad Residencial", "Internet"],
      dataServicios:[{servicios: "Electricidad Residencial",}],
    }
  },
  head() {
    const title = 'Actualizar Terreno';
    return {
      title,
    }
  },

  mounted(){

  },

  methods: {
    //// Topografia ////

    addDiv(){
      this.dataTopografia.push({topografia: this.topografiaAuto});
    },  

    deleteItem(index) {
      this.dataTopografia.splice(index, 1);
    },

    ///// Techo ////

    addDivTecho(){
      this.dataAcceso.push({acceso: this.accesoAuto});
    },  

    deleteItemAcceso(index) {
      this.dataAcceso.splice(index, 1);
    },

    ///Uso Actual///

    addDivUsoActual(){
      this.dataUsoActual.push({uso_actual: this.usoActualAuto});
    },  

    deleteItemCubiertaUsoActual(index) {
      this.dataUsoActual.splice(index, 1);
    },

    ///Serviciso Publicos///

    addDivServicios(){
      this.dataServicios.push({servicios: this.serviciosAuto});
    },  

    deleteItemServicios(index) {
      this.dataServicios.splice(index, 1);
    },
  }
};
</script>

<style src="~/assets/styles/pages/actualizar-terreno.scss" lang="scss" />