<template>
  <div class="center no-padding divcol" style="margin-bottom:20px; padding-left: 256px;">
    <section class="section1-urbanizacion-barrio">
      <div class="urbanizacion-barrio-container">
        <p class="title-urbanizacion-barrio">
          Agregar nueva Urbanización o Barrio
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

          <v-text-field
          v-model="newItem.nombre"
          class="inputs-consulta"
          label="Nombre*"
          ></v-text-field>

          <v-autocomplete
          v-model="newItem.tipo"
          class="autocomplete-big"
          label="Tipo*"
          ></v-autocomplete>

          <v-btn class="btn-buscar" @click="addItem">
            Agregar
          </v-btn>           
        </div>
      </div>
    </section>

    <section class="section2-urbanizacion-barrio">
      <div class="datos-urbanizacion-barrio-container">
        <div class="title-morado">
          <p class="datos-urbanizacion-barrio-title">
            Urbanización o Barrio
          </p>
        </div>

        <div v-for="(item,index) in datosUrbanizacion" :key="index" class="urbanizacion-barrio-inputs-container">
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
          v-model="item.nombre"
          class="big-input mobile-inputs"
          label="Nombre"
          :disabled="editingIndex !== index"
          ></v-text-field>

          <v-text-field
          v-model="item.tipo"
          class="big-input mobile-inputs"
          label="Tipo"
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
        nombre:'',
        tipo: null,
      },
      editingIndex: null,
      datosUrbanizacion:[
        {
          ambito:"U448",
          sector:"158",
          nombre:"Naranjal 1",
          tipo:"8",
        },
        {
          ambito:"U448",
          sector:"158",
          nombre:"Naranjal 1",
          tipo:"8",
        },
        {
          ambito:"U448",
          sector:"158",
          nombre:"Naranjal 1",
          tipo:"8",
        },
        {
          ambito:"U448",
          sector:"158",
          nombre:"Naranjal 1",
          tipo:"8",
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
      this.datosUrbanizacion.splice(index, 1);
    },

    saveChanges() {
      // Realizar cualquier acción necesaria para guardar los cambios aquí
      this.editingIndex = null;
    },

    addItem() {
      const newItem = {
        ambito: this.newItem.ambito,
        sector: this.newItem.sector,
        nombre: this.newItem.nombre,
        tipo: this.newItem.tipo,
      };
      this.datosUrbanizacion.push(newItem);
      this.newItem.ambito = null;
      this.newItem.sector = null;
      this.newItem.nombre = '';
      this.newItem.tipo = null;
    },
  }
};
</script>

<style src="~/assets/styles/pages/urbanizacion-barrio.scss" lang="scss" />