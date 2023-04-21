<template>
  <div class="center no-padding divcol" style="margin-bottom:20px; padding-left: 256px;">
    <section class="section1-sector">
      <div class="sector-container">
        <p class="title-sector">
          Agregar nuevo Sector
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
          v-model="newItem.codigo"
          class="autocomplete-small"
          label="Código*"
          ></v-autocomplete>

          <v-text-field
          v-model="newItem.nombre"
          class="inputs-consulta"
          label="Nombre*"
          ></v-text-field>

          <v-autocomplete
          v-model="newItem.clasificacion"
          class="autocomplete-small"
          label="Clasificación*"
          ></v-autocomplete>

          <v-text-field
          v-model="newItem.area"
          class="inputs-consulta"
          label="Area*"
          ></v-text-field>

          <v-text-field
          v-model="newItem.perimetro"
          class="inputs-consulta"
          label="Perímetro*"
          ></v-text-field>

          <v-btn class="btn-buscar" @click="addItem">
            Agregar
          </v-btn>           
        </div>
      </div>
    </section>

    <section class="section2-sector">
      <div class="datos-sectores-container">
        <div class="title-morado">
          <p class="datos-sectores-title">
            Sectores
          </p>
        </div>

        <div v-for="(item,index) in datosSectores" :key="index" class="sectores-inputs-container">
          <v-text-field
          v-model="item.ambito"
          class="small-input mobile-inputs"
          label="Ambito"
          :disabled="editingIndex !== index"
          ></v-text-field>

          <v-text-field
          v-model="item.codigo"
          class="small-input mobile-inputs"
          label="Código"
          :disabled="editingIndex !== index"
          ></v-text-field>

          <v-text-field
          v-model="item.nombre"
          class="big-input mobile-inputs"
          label="Nombre"
          :disabled="editingIndex !== index"
          ></v-text-field>

          <v-text-field
          v-model="item.clasificacion"
          class="small-input mobile-inputs"
          label="Clasificación"
          :disabled="editingIndex !== index"
          ></v-text-field>

          <v-text-field
          v-model="item.area"
          class="small-input mobile-inputs"
          label="Area"
          :disabled="editingIndex !== index"
          ></v-text-field>

          <v-text-field
          v-model="item.perimetro"
          class="small-input mobile-inputs"
          label="Perímetro"
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
  name: "SectorPage",
  mixins: [computeds],
  data() {
    return {  
      newItem: {
        ambito: null,
        codigo: null,
        nombre:'',
        clasificacion: null,
        area: '',
        perimetro:'',
      },
      editingIndex: null,
      datosSectores:[
        {
          ambito:"U448",
          codigo:"158",
          nombre:"Naranjal 1",
          clasificacion:"8",
          area:"000",
          perimetro:"1234"
        },
        {
          ambito:"U448",
          codigo:"158",
          nombre:"Naranjal 1",
          clasificacion:"8",
          area:"000",
          perimetro:"1234"
        },
        {
          ambito:"U448",
          codigo:"158",
          nombre:"Naranjal 1",
          clasificacion:"8",
          area:"000",
          perimetro:"1234"
        },
        {
          ambito:"U448",
          codigo:"158",
          nombre:"Naranjal 1",
          clasificacion:"8",
          area:"000",
          perimetro:"1234"
        },
        {
          ambito:"U448",
          codigo:"158",
          nombre:"Naranjal 1",
          clasificacion:"8",
          area:"000",
          perimetro:"1234"
        },
      ]
    }
  },
  head() {
    const title = 'Sector';
    return {
      title,
    }
  },

  methods: {
    removeDiv(index) {
      this.datosSectores.splice(index, 1);
    },

    saveChanges() {
      // Realizar cualquier acción necesaria para guardar los cambios aquí
      this.editingIndex = null;
    },

    addItem() {
      const newItem = {
        ambito: this.newItem.ambito,
        codigo: this.newItem.codigo,
        nombre: this.newItem.nombre,
        clasificacion: this.newItem.clasificacion,
        area: this.newItem.area,
        perimetro: this.newItem.perimetro,
      };
      this.datosSectores.push(newItem);
      this.newItem.ambito = null;
      this.newItem.codigo = null;
      this.newItem.nombre = '';
      this.newItem.clasificacion = null;
      this.newItem.area = '';
      this.newItem.perimetro = '';
    },
  }
};
</script>

<style src="~/assets/styles/pages/sector.scss" lang="scss" />