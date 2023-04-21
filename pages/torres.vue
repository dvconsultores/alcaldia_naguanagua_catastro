<template>
  <div class="center no-padding divcol" style="margin-bottom:20px; padding-left: 256px;">
    <section class="section1-torres">
      <div class="torres-container">
        <p class="title-torres">
          Agregar nueva Torre
        </p>

        <hr>

        <div class="textfield-search-container">
          <v-autocomplete
          v-model="newItem.ambito"
          class="autocomplete-small"
          label="Ambito*"
          :items="items_ambito"
          ></v-autocomplete>

          <v-autocomplete
          v-model="newItem.sector"
          class="autocomplete-small"
          label="Sector*"
          ></v-autocomplete>

          <v-autocomplete
          v-model="newItem.urb_barrio"
          class="autocomplete-medium"
          label="Urbanización/Barrio*"
          ></v-autocomplete>

          <v-autocomplete
          v-model="newItem.conj_residencial"
          class="autocomplete-medium"
          label="Conjunto Residencial*"
          ></v-autocomplete>

          <v-text-field
          v-model="newItem.edificio"
          class="inputs-small"
          label="Edificio*"
          ></v-text-field>

          <v-btn class="btn-buscar" @click="addItem">
            Agregar
          </v-btn>           
        </div>
      </div>
    </section>

    <section class="section2-torres">
      <div class="datos-torres-container">
        <div class="title-morado">
          <p class="datos-torres-title">
            Torres
          </p>
        </div>

        <div v-for="(item,index) in datosTorres" :key="index" class="torres-inputs-container">
          <v-text-field
          v-model="item.ambito"
          class="small-input mobile-inputs"
          label="Ambito"
          :disabled="editingIndex !== index"
          ></v-text-field>

          <v-text-field
          v-model="item.sector"
          class="small-input mobile-inputs"
          label="Sector"
          :disabled="editingIndex !== index"
          ></v-text-field>

          <v-text-field
          v-model="item.urb_barrio"
          class="big-input mobile-inputs"
          label="Urbanización/Barrio"
          :disabled="editingIndex !== index"
          ></v-text-field>

          <v-text-field
          v-model="item.conj_residencial"
          class="big-input mobile-inputs"
          label="Conjunto Residencial"
          :disabled="editingIndex !== index"
          ></v-text-field>

          <v-text-field
          v-model="item.edificio"
          class="big-input mobile-inputs"
          label="Nombre de la Torre (Edificio)"
          :disabled="editingIndex !== index"
          ></v-text-field>

          <v-btn class="btns-add-remove"  @click="removeDiv(index)">
            <v-icon>mdi-delete</v-icon>
          </v-btn>

          <v-btn v-if="editingIndex !== index" class="btns-add-remove" @click="editingIndex = index">
            <v-icon>mdi-pencil</v-icon>
          </v-btn>

          <v-btn v-if="editingIndex === index" class="btns-add-remove" @click="saveChanges">
            <v-icon>mdi-content-save</v-icon>
          </v-btn>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import computeds from '~/mixins/computeds'

export default {
  name: "TorresPage",
  mixins: [computeds],
  data() {
    return {  
      newItem: {
        ambito: null,
        sector: null,
        urb_barrio: null,
        conj_residencial: null,
        edificio: '',
      },
      editingIndex: null,
      datosTorres:[
        {
          ambito:"U448",
          sector:"158",
          urb_barrio:"Otro 1",
          conj_residencial:"Conjunto Residencial Valle Claro",
          edificio:"A",
        },
        {
          ambito:"U448",
          sector:"158",
          urb_barrio:"Otro 1",
          conj_residencial:"Conjunto Residencial Valle Claro",
          edificio:"A",
        },
        {
          ambito:"U448",
          sector:"158",
          urb_barrio:"Otro 1",
          conj_residencial:"Conjunto Residencial Valle Claro",
          edificio:"A",
        },
        {
          ambito:"U448",
          sector:"158",
          urb_barrio:"Otro 1",
          conj_residencial:"Conjunto Residencial Valle Claro",
          edificio:"A",
        },
        {
          ambito:"U448",
          sector:"158",
          urb_barrio:"Otro 1",
          conj_residencial:"Conjunto Residencial Valle Claro",
          edificio:"A",
        },
      ]
    }
  },
  head() {
    const title = 'Torres';
    return {
      title,
    }
  },

  methods: {
    removeDiv(index) {
      this.datosTorres.splice(index, 1);
    },

    saveChanges() {
      // Realizar cualquier acción necesaria para guardar los cambios aquí
      this.editingIndex = null;
    },

    addItem() {
      const newItem = {
        ambito: this.newItem.ambito,
        sector: this.newItem.sector,
        urb_barrio: this.newItem.urb_barrio,
        conj_residencial: this.newItem.conj_residencial,
        edificio: this.newItem.edificio,
      };
      this.datosTorres.push(newItem);
      this.newItem.ambito = null;
      this.newItem.sector = null;
      this.newItem.urb_barrio = null;
      this.newItem.conj_residencial = null;
      this.newItem.edificio = '';
    },
  }
};
</script>

<style src="~/assets/styles/pages/torres.scss" lang="scss" />