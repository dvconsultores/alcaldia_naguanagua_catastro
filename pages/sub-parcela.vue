<template>
  <div class="center no-padding divcol" style="margin-bottom:20px; padding-left: 256px;">
    <section class="section1-sub-parcela">
      <div class="sub-parcela-container">
        <p class="title-sub-parcela">
          Agregar nueva Sub - Parcela
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

          <v-autocomplete
          v-model="newItem.codigo_parcela"
          class="autocomplete-small"
          label="Codigo Parcela*"
          ></v-autocomplete>

          <v-autocomplete
          v-model="newItem.codigo_sub"
          class="autocomplete-small"
          label="Codigo Sub - Parcela*"
          ></v-autocomplete>

          <v-text-field
          v-model="newItem.area"
          class="inputs-small"
          label="Area*"
          ></v-text-field>

          <v-text-field
          v-model="newItem.perimetro"
          class="inputs-small"
          label="Perímetro*"
          ></v-text-field>

          <v-btn class="btn-buscar" @click="addItem">
            Agregar
          </v-btn>           
        </div>
      </div>
    </section>

    <section class="section2-sub-parcela">
      <div class="datos-sub-parcela-container">
        <div class="title-morado">
          <p class="datos-sub-parcela-title">
            Sub - Parcelas
          </p>
        </div>

        <div v-for="(item,index) in subParcelas" :key="index" class="sub-parcela-inputs-container">
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
          v-model="item.codigo_parcela"
          class="small-input mobile-inputs"
          label="Codigo Parcela"
          :disabled="editingIndex !== index"
          ></v-text-field>

          <v-text-field
          v-model="item.codigo_sub"
          class="small-input mobile-inputs"
          label="Codigo Sub - Parcela"
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
  name: "SubParcelaPage",
  mixins: [computeds],
  data() {
    return {  
      newItem: {
        ambito: null,
        sector: null,
        codigo_manzana: null,
        codigo_parcela: null,
        codigo_sub: null,
        area: '',
        perimetro:'',
      },
      editingIndex: null,
      subParcelas:[
        {
          ambito:"U448",
          sector:"158",
          codigo_manzana:"Naranjal 1",
          codigo_parcela:"8",
          codigo_sub: "999",
          area:"000",
          perimetro:"1234"
        },
        {
          ambito:"U448",
          sector:"158",
          codigo_manzana:"Naranjal 1",
          codigo_parcela:"8",
          codigo_sub: "999",
          area:"000",
          perimetro:"1234"
        },
        {
          ambito:"U448",
          sector:"158",
          codigo_manzana:"Naranjal 1",
          codigo_parcela:"8",
          codigo_sub: "999",
          area:"000",
          perimetro:"1234"
        },
        {
          ambito:"U448",
          sector:"158",
          codigo_manzana:"Naranjal 1",
          codigo_parcela:"8",
          codigo_sub: "999",
          area:"000",
          perimetro:"1234"
        },
        {
          ambito:"U448",
          sector:"158",
          codigo_manzana:"Naranjal 1",
          codigo_parcela:"8",
          codigo_sub: "999",
          area:"000",
          perimetro:"1234"
        },
      ]
    }
  },
  head() {
    const title = 'Sub Parcela';
    return {
      title,
    }
  },

  methods: {
    removeDiv(index) {
      this.subParcelas.splice(index, 1);
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
        codigo_parcela: this.newItem.codigo_parcela,
        codigo_sub: this.newItem.codigo_sub,
        area: this.newItem.area,
        perimetro: this.newItem.perimetro,
      };
      this.subParcelas.push(newItem);
      this.newItem.ambito = null;
      this.newItem.sector = null;
      this.newItem.codigo_manzana = null;
      this.newItem.codigo_parcela = null;
      this.newItem.codigo_sub = null;
      this.newItem.area = '';
      this.newItem.perimetro = '';
    },
  }
};
</script>

<style src="~/assets/styles/pages/sub-parcela.scss" lang="scss" />