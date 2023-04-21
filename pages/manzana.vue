<template>
  <div class="center no-padding divcol" style="margin-bottom:20px; padding-left: 256px;">
    <section class="section1-manzana">
      <div class="manzana-container">
        <p class="title-manzana">
          Agregar nueva Manzana
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
          v-model="newItem.codigo_manzana"
          class="autocomplete-small"
          label="Codigo Manzana*"
          ></v-autocomplete>

          <v-text-field
          v-model="newItem.area"
          class="inputs-consulta"
          label="Area*"
          ></v-text-field>

          <v-text-field
          v-model="newItem.perimetro"
          class="inputs-consulta"
          label="Perimetro*"
          ></v-text-field>

          <v-autocomplete
          v-model="newItem.via_norte"
          class="autocomplete-small"
          label="Via Norte*"
          ></v-autocomplete>

          <v-autocomplete
          v-model="newItem.via_sur"
          class="inputs-consulta"
          label="Via Sur*"
          ></v-autocomplete>

          <v-autocomplete
          v-model="newItem.via_este"
          class="inputs-consulta"
          label="Via Este*"
          ></v-autocomplete>

          <v-autocomplete
          v-model="newItem.via_oeste"
          class="inputs-consulta"
          label="Via Oeste*"
          ></v-autocomplete>

          <v-btn class="btn-buscar" @click="addItem">
            Agregar
          </v-btn>           
        </div>
      </div>
    </section>

    <section class="section2-manzana">
      <div class="datos-manzana-container">
        <div class="title-morado">
          <p class="datos-manzana-title">
            Manzanas
          </p>
        </div>

        <div v-for="(item,index) in datosManzanas" :key="index" class="manzana-inputs-container">
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
          v-model="item.codigo_manzana"
          class="small-input mobile-inputs"
          label="Codigo Manzana"
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
          label="Peimetro"
          :disabled="editingIndex !== index"
          ></v-text-field>

          <v-text-field
          v-model="item.via_norte"
          class="small-input mobile-inputs"
          label="Via Norte"
          :disabled="editingIndex !== index"
          ></v-text-field>

          <v-text-field
          v-model="item.via_sur"
          class="small-input mobile-inputs"
          label="Via Sur"
          :disabled="editingIndex !== index"
          ></v-text-field>

          <v-text-field
          v-model="item.via_este"
          class="small-input mobile-inputs"
          label="Via Este"
          :disabled="editingIndex !== index"
          ></v-text-field>

          <v-text-field
          v-model="item.via_oeste"
          class="small-input mobile-inputs"
          label="Via Oeste"
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
  name: "ManzanaPage",
  mixins: [computeds],
  data() {
    return {  
      newItem: {
        ambito: null,
        sector: null,
        codigo_manzana: null,
        area:'',
        perimetro:'',
        via_norte: null,
        via_sur: null,
        via_este: null,
        via_oeste: null,
      },
      editingIndex: null,
      datosManzanas:[
        {
          ambito:"U448",
          sector:"158",
          codigo_manzana:"Naranjal 1",
          area:"8",
          perimetro:"000",
          via_norte:"1234",
          via_sur:"",
          via_este:"",
          via_oeste:"",
        },
        {
          ambito:"U448",
          sector:"158",
          codigo_manzana:"Naranjal 1",
          area:"8",
          perimetro:"000",
          via_norte:"1234",
          via_sur:"",
          via_este:"",
          via_oeste:"",
        },
        {
          ambito:"U448",
          sector:"158",
          codigo_manzana:"Naranjal 1",
          area:"8",
          perimetro:"000",
          via_norte:"1234",
          via_sur:"",
          via_este:"",
          via_oeste:"",
        },
        {
          ambito:"U448",
          sector:"158",
          codigo_manzana:"Naranjal 1",
          area:"8",
          perimetro:"000",
          via_norte:"1234",
          via_sur:"",
          via_este:"",
          via_oeste:"",
        },
        {
          ambito:"U448",
          sector:"158",
          codigo_manzana:"Naranjal 1",
          area:"8",
          perimetro:"000",
          via_norte:"1234",
          via_sur:"",
          via_este:"",
          via_oeste:"",
        },
      ]
    }
  },
  head() {
    const title = 'Manzana';
    return {
      title,
    }
  },

  methods: {
    removeDiv(index) {
      this.datosManzanas.splice(index, 1);
    },

    saveChanges() {
      // Realizar cualquier acción necesaria para guardar los cambios aquí
      this.editingIndex = null;
    },

    addItem() {
      const newItem = {
        ambito: this.newItem.ambito,
        sector: this.newItem.sector,
        codigo_manzana: this.newItem.codigo_manzana,
        area: this.newItem.area,
        perimetro: this.newItem.perimetro,
        via_norte: this.newItem.via_norte,
        via_sur: this.newItem.via_sur,
        via_este: this.newItem.via_este,
        via_oeste: this.newItem.via_oeste,

      };
      this.datosManzanas.push(newItem);
      this.newItem.ambito = null;
      this.newItem.sector = null;
      this.newItem.codigo_manzana = null;
      this.newItem.area = '';
      this.newItem.perimetro = '';
      this.newItem.via_norte = null;
      this.newItem.via_sur = null;
      this.newItem.via_este = null;
      this.newItem.via_oeste = null;

    },
  }
};
</script>

<style src="~/assets/styles/pages/manzana.scss" lang="scss" />