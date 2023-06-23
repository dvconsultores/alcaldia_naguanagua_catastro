<template>
  <div class="center no-padding divcol" style="margin-bottom:20px; padding-left: 256px;">
    <section class="section1-actualizar-construccion">
      <div class="actualizar-construccion-container">
        <div class="title-morado">
          <p class="actualizar-construccion-title">
            Datos Generales
          </p>
        </div>

        <div class="div-autocomplete">
          <v-autocomplete
          class="input-select"
          label="Tipo"
          ></v-autocomplete>
        </div>
        <v-divider vertical class="purple delete-1200"></v-divider>
        <div class="div-autocomplete">
          <v-autocomplete
          class="input-select input-select-no-border"
          label="Descripción de Uso"
          ></v-autocomplete>
        </div>
        <v-divider vertical class="purple delete-1200"></v-divider>
        <div class="div-autocomplete">
          <v-autocomplete
          class="input-select"
          label="Tenencia"
          ></v-autocomplete>
        </div>
        <v-divider vertical class="purple delete-1200"></v-divider>
        <div class="div-autocomplete">
          <v-autocomplete
          class="input-select input-select-no-border"
          label="Régimen de Propiedad"
          ></v-autocomplete>
        </div>
      </div>

      <div class="actualizar-construccion-container">
        <div class="title-morado">
          <p class="actualizar-construccion-title">
            Datos Estructurales
          </p>
        </div>

        <div class="div-autocomplete">
          <div v-for="(item, index) in dataTipoPared" :key="index" class="divrow center" style="gap: 10px; width: 100%;">
            <v-text-field
            class="input-select"
            label="Tipo de Pared"
            :value="item.tipo_pared"
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
            v-model="tipoParedAuto"
            class="input-select"
            label="Tipo de Pared"
            :items="tipoParedItems"
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
          <div v-for="(item, index) in dataTecho" :key="index" class="divrow center" style="gap: 10px; width: 100%;">
            <v-text-field
            class="input-select"
            label="Techo"
            :value="item.techo"
            readonly
            ></v-text-field>
            <v-btn @click="deleteItemTecho(index)" class="btn-delete">
              <v-icon>
                mdi-delete
              </v-icon>
            </v-btn>
          </div>
          <div class="divrow center" style="gap: 10px; width: 100%;">
            <v-autocomplete
            v-model="techoAuto"
            class="input-select"
            label="Techo"
            :items="techoItems"
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
          <div v-for="(item, index) in dataCubierta" :key="index" class="divrow center" style="gap: 10px; width: 100%;">
            <v-text-field
            class="input-select"
            label="Cubierta"
            :value="item.cubierta"
            readonly
            ></v-text-field>
            <v-btn @click="deleteItemCubierta(index)" class="btn-delete">
              <v-icon>
                mdi-delete
              </v-icon>
            </v-btn>
          </div>
          <div class="divrow center" style="gap: 10px; width: 100%;">
            <v-autocomplete
            v-model="cubiertaAuto"
            class="input-select"
            label="Cubierta"
            :items="cubiertaItems"
            ></v-autocomplete>
            <v-btn @click="addDivCubierta" class="btn-delete">
              <v-icon>
                mdi-plus
              </v-icon>
            </v-btn>
          </div>
        </div>
      </div>

      <div class="actualizar-construccion-container">
        <div class="title-morado">
          <p class="actualizar-construccion-title">
            Datos Complementarios
          </p>
        </div>

        <div class="div-autocomplete">
          <v-autocomplete
          class="input-select"
          label="Tipo de Pared"
          ></v-autocomplete>
        </div>
        <v-divider vertical class="purple delete-1200"></v-divider>
        <div class="div-autocomplete">
          <v-autocomplete
          class="input-select input-select-no-border"
          label="Estado de la Pared"
          ></v-autocomplete>
        </div>
        <v-divider vertical class="purple delete-1200"></v-divider>
        <div class="div-autocomplete">
          <v-autocomplete
          class="input-select"
          label="Estado de Conservación"
          ></v-autocomplete>
        </div>
      </div>

      <div class="otros-datos-container">
        <div class="title-morado">
          <p class="otros-datos-title">
            Otros Datos
          </p>
        </div>

        <div class="div-otros-datos-autocomplete">
          <v-autocomplete
          class="input-otros-datos"
          label="Año de Construcción"
          ></v-autocomplete>

          <v-autocomplete
          class="input-otros-datos input-select-no-border"
          label="Año de Refacción"
          ></v-autocomplete>

          <v-autocomplete
          class="input-otros-datos"
          label="% Refacción"
          ></v-autocomplete>

          <v-autocomplete
          class="input-otros-datos input-select-no-border"
          label="Edad Efectiva"
          ></v-autocomplete>

          <v-autocomplete
          class="input-otros-datos"
          label="Nro. de Niveles"
          ></v-autocomplete>

          <v-autocomplete
          class="input-otros-datos input-select-no-border"
          label="Nro. de Edificaciones"
          ></v-autocomplete>
        </div>

        <div class="div-observaciones">
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
  name: "actualizar-construccionPage",
  mixins: [computeds],
  data() {
    return {  
      dialog_confirmar: false,

      tipoParedAuto: null,
      tipoParedItems: ["Madera", "concreto"],
      dataTipoPared:[{tipo_pared: "Concreto Armado",}],

      techoAuto: null,
      techoItems: ["Madera", "Zinc"],
      dataTecho:[{techo: "Madera",}],

      cubiertaAuto: null,
      cubiertaItems: ["Hormigon", "concreto"],
      dataCubierta:[{tipo_pared: "Hormigon",}],
    }
  },
  head() {
    const title = 'Actualizar Construccion';
    return {
      title,
    }
  },

  mounted(){

  },

  methods: {
    addDiv(){
      this.dataTipoPared.push({tipo_pared: this.tipoParedAuto});
    },  

    deleteItem(index) {
      this.dataTipoPared.splice(index, 1);
    },

    addDivTecho(){
      this.dataTecho.push({techo: this.techoAuto});
    },  

    deleteItemTecho(index) {
      this.dataTecho.splice(index, 1);
    },

    addDivCubierta(){
      this.dataCubierta.push({cubierta: this.cubiertaAuto});
    },  

    deleteItemCubierta(index) {
      this.dataCubierta.splice(index, 1);
    },
  }
};
</script>

<style src="~/assets/styles/pages/actualizar-construccion.scss" lang="scss" />