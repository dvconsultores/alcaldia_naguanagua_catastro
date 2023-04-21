<template>
  <div class="center no-padding divcol" style="margin-bottom:20px; padding-left: 256px;">
    <section class="section1-conjuntos">
      <div class="conjuntos-container">
        <p class="title-conjuntos">
          Agregar nuevo Conjunto Residencial
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
          class="autocomplete-big"
          label="Urbanización/Barrio*"
          ></v-autocomplete>

          <v-autocomplete
          v-model="newItem.nombre"
          class="autocomplete-big"
          label="Nombre del Conjunto*"
          ></v-autocomplete>

          <v-btn class="btn-buscar" @click="addItem">
            Agregar
          </v-btn>           
        </div>
      </div>
    </section>

    <section class="section2-conjuntos">
      <div class="datos-conjuntos-container">
        <div class="title-morado">
          <p class="datos-conjuntos-title">
            Conjuntos Residenciales
          </p>
        </div>

        <div v-for="(item,index) in datosConjuntos" :key="index" class="conjuntos-inputs-container">
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
          v-model="item.nombre"
          class="big-input mobile-inputs"
          label="Nombre del Conjunto"
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
  name: "BarrioPage",
  mixins: [computeds],
  data() {
    return {  
      newItem: {
        ambito: null,
        sector: null,
        urb_barrio: null,
        nombre: null,
      },
      editingIndex: null,
      datosConjuntos:[
        {
          ambito:"U448",
          sector:"158",
          urb_barrio:"Naranjal 1",
          nombre:"C.R. Villas de Rocio, Sector III Modulo K",
        },
        {
          ambito:"U448",
          sector:"158",
          urb_barrio:"Naranjal 1",
          nombre:"C.R. Villas de Rocio, Sector III Modulo K",
        },
        {
          ambito:"U448",
          sector:"158",
          urb_barrio:"Naranjal 1",
          nombre:"C.R. Villas de Rocio, Sector III Modulo K",
        },
        {
          ambito:"U448",
          sector:"158",
          urb_barrio:"Naranjal 1",
          nombre:"C.R. Villas de Rocio, Sector III Modulo K",
        },
        {
          ambito:"U448",
          sector:"158",
          urb_barrio:"Naranjal 1",
          nombre:"C.R. Villas de Rocio, Sector III Modulo K",
        },
      ]
    }
  },
  head() {
    const title = 'Urbanizacion o Barrio';
    return {
      title,
    }
  },

  methods: {
    removeDiv(index) {
      this.datosConjuntos.splice(index, 1);
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
        nombre: this.newItem.nombre,
      };
      this.datosConjuntos.push(newItem);
      this.newItem.ambito = null;
      this.newItem.sector = null;
      this.newItem.urb_barrio = null;
      this.newItem.nombre = null;
    },
  }
};
</script>

<style src="~/assets/styles/pages/conjuntos-residenciales.scss" lang="scss" />