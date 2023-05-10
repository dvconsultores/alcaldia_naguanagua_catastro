<template>
  <div class="center no-padding divcol" style="margin-bottom:20px; padding-left: 256px;">
    <!-- <section class="section1-manzana">
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
    </section> -->

    <section class="section2-manzana">
      <div class="datos-manzana-container">
        <div class="title-morado">
          <p class="datos-manzana-title">
            Manzanas
          </p>

          <v-dialog
            v-model="dialog"
            max-width="1600px"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                class="btn-add-tabla"
                v-bind="attrs"
                v-on="on"
              >
                +
              </v-btn>
            </template>
            <v-card id="dialog-editar-crear">
              <v-card-title>
                <span class="title">{{ formTitle }}</span>
              </v-card-title>

              <hr>

              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col
                      cols="12"
                      sm="6"
                      md="4"
                    >
                      <v-text-field
                        v-model="editedItem.ambito"
                        label="Ambito"
                        class="input-dialog"
                      ></v-text-field>
                    </v-col>
                    <v-col
                      cols="12"
                      sm="6"
                      md="4"
                    >
                      <v-text-field
                        v-model="editedItem.sector"
                        label="Sector"
                        class="input-dialog"
                      ></v-text-field>
                    </v-col>
                    <v-col
                      cols="12"
                      sm="6"
                      md="4"
                    >
                      <v-text-field
                        v-model="editedItem.codigo_manzana"
                        label="Código Manzana"
                        class="input-dialog"
                      ></v-text-field>
                    </v-col>
                    <v-col
                      cols="12"
                      sm="6"
                      md="4"
                    >
                      <v-text-field
                        v-model="editedItem.area"
                        label="Área"
                        class="input-dialog"
                      ></v-text-field>
                    </v-col>
                    <v-col
                      cols="12"
                      sm="6"
                      md="4"
                    >
                      <v-text-field
                        v-model="editedItem.perimetro"
                        label="Perímetro"
                        class="input-dialog"
                      ></v-text-field>
                    </v-col>

                    <v-col
                      cols="12"
                      sm="6"
                      md="4"
                    >
                      <v-text-field
                        v-model="editedItem.via_norte"
                        label="Vía Norte"
                        class="input-dialog"
                      ></v-text-field>
                    </v-col>

                    <v-col
                      cols="12"
                      sm="6"
                      md="4"
                    >
                      <v-text-field
                        v-model="editedItem.via_sur"
                        label="Vía Sur"
                        class="input-dialog"
                      ></v-text-field>
                    </v-col>

                    <v-col
                      cols="12"
                      sm="6"
                      md="4"
                    >
                      <v-text-field
                        v-model="editedItem.via_este"
                        label="Vía Este"
                        class="input-dialog"
                      ></v-text-field>
                    </v-col>

                    <v-col
                      cols="12"
                      sm="6"
                      md="4"
                    >
                      <v-text-field
                        v-model="editedItem.via_oeste"
                        label="Vía Oeste"
                        class="input-dialog"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  class="btn dialog-btn"
                  @click="close"
                >
                  Cancelar
                </v-btn>
                <v-btn
                  class="btn dialog-btn"
                  @click="save"
                  style="background-color:#ED057E!important;"
                >
                  Guardar
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </div>

        <div class="data-table-container">
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Buscar"
            hide-details
            class="input-data-table"
          ></v-text-field>

          <v-data-table
            :headers="headers"
            :items="sectoresManzana"
            :items-per-page="10"
            :search="search"
            :footer-props="{
              itemsPerPageText: 'Items por página',
            }"
            sort-by="codigo"
            class="mytabla"
            mobile-breakpoint="840"
          >
            <template v-slot:top>
              <v-toolbar
                flat
                class="toolbar-tabla"
              >
                <!-- <v-toolbar-title>My CRUD</v-toolbar-title>
                <v-divider
                  class="mx-4"
                  inset
                  vertical
                ></v-divider>
                <v-spacer></v-spacer> -->
                
                <v-dialog v-model="dialogDelete" max-width="500px">
                  <v-card id="dialog-eliminar-card">
                    <v-card-title class="center title">¿Desea eliminarlo?</v-card-title>
                    <span class="alerta-text">Esta acción no se puede revertir</span>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn class="btn dialog-btn" text @click="deleteItemConfirm">Si</v-btn>
                      <v-btn class="btn dialog-btn" text @click="closeDelete" style="background-color:#ED057E!important;">No</v-btn>
                      <v-spacer></v-spacer>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </v-toolbar>
            </template>
            <template #[`item.actions`]="{ item }">
              <v-icon
                color="#810880"
                big
                @click="editItem(item)"
              >
                mdi-pencil
              </v-icon>
              <v-icon
                color="#810880"
                big
                @click="deleteItem(item)"
              >
                mdi-delete
              </v-icon>
            </template>
            <template v-slot:no-data>
              <v-btn
                color="primary"
                @click="initialize"
              >
                Reset
              </v-btn>
            </template>
          </v-data-table>
        </div>



        <!-- <div v-for="(item,index) in datosManzanas" :key="index" class="manzana-inputs-container">
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
        </div> -->
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
      search: '',
      dialog: false,
      dialogDelete: false,
      headers: [
        { text: 'Ambito', align: 'start', value: 'ambito',},
        { text: 'Sector', value: 'sector', align:'center' },
        { text: 'Código Manzana', value: 'codigo_manzana', align:'center' },
        { text: 'Área', value: 'area', align:'center' },
        { text: 'Perímetro', value: 'perimetro', align:'center' },
        { text: 'Vía Norte', value: 'via_norte', align:'center' },
        { text: 'Vía Sur', value: 'via_sur', align:'center' },
        { text: 'Vía Este', value: 'via_este', align:'center' },
        { text: 'Vía Oeste', value: 'via_oeste', align:'center' },
        { text: '', value: 'actions', sortable: false, align:'center' },
      ],
      sectoresManzana: [],
      editedIndex: -1,
      editedItem: {
        ambito: '',
        sector: '',
        codigo_manzana: '',
        area: '',
        perimetro: '',
        via_norte: '',
        via_sur: '',
        via_este: '',
        via_oeste: '',
      },
      defaultItem: {
        ambito: '',
        sector: '',
        codigo_manzana: '',
        area: '',
        perimetro: '',
        via_norte: '',
        via_sur: '',
        via_este: '',
        via_oeste: '',
      },
      // newItem: {
      //   ambito: null,
      //   sector: null,
      //   codigo_manzana: null,
      //   area:'',
      //   perimetro:'',
      //   via_norte: null,
      //   via_sur: null,
      //   via_este: null,
      //   via_oeste: null,
      // },
      // editingIndex: null,
      // datosManzanas:[
      //   {
      //     ambito:"U448",
      //     sector:"158",
      //     codigo_manzana:"Naranjal 1",
      //     area:"8",
      //     perimetro:"000",
      //     via_norte:"1234",
      //     via_sur:"",
      //     via_este:"",
      //     via_oeste:"",
      //   },
      //   {
      //     ambito:"U448",
      //     sector:"158",
      //     codigo_manzana:"Naranjal 1",
      //     area:"8",
      //     perimetro:"000",
      //     via_norte:"1234",
      //     via_sur:"",
      //     via_este:"",
      //     via_oeste:"",
      //   },
      //   {
      //     ambito:"U448",
      //     sector:"158",
      //     codigo_manzana:"Naranjal 1",
      //     area:"8",
      //     perimetro:"000",
      //     via_norte:"1234",
      //     via_sur:"",
      //     via_este:"",
      //     via_oeste:"",
      //   },
      //   {
      //     ambito:"U448",
      //     sector:"158",
      //     codigo_manzana:"Naranjal 1",
      //     area:"8",
      //     perimetro:"000",
      //     via_norte:"1234",
      //     via_sur:"",
      //     via_este:"",
      //     via_oeste:"",
      //   },
      //   {
      //     ambito:"U448",
      //     sector:"158",
      //     codigo_manzana:"Naranjal 1",
      //     area:"8",
      //     perimetro:"000",
      //     via_norte:"1234",
      //     via_sur:"",
      //     via_este:"",
      //     via_oeste:"",
      //   },
      // ]
    }
  },
  head() {
    const title = 'Manzana';
    return {
      title,
    }
  },

  computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'Agregar nueva Manzana' : 'Editar Manzana'
      },
    },

  watch: {
    dialog (val) {
      val || this.close()
    },
    dialogDelete (val) {
      val || this.closeDelete()
    },
  },

  created () {
    this.initialize()
  },

  methods: {
    initialize () {
        this.sectoresManzana = [
          {
            ambito:"U448",
            sector:"158",
            codigo_manzana:"Naranjal 1",
            area:"8",
            perimetro:"000",
            via_norte:"1234",
            via_sur:"999",
            via_este:"999",
            via_oeste:"999",
          },
          {
            ambito:"U448",
            sector:"158",
            codigo_manzana:"Naranjal 1",
            area:"8",
            perimetro:"000",
            via_norte:"1234",
            via_sur:"990",
            via_este:"999",
            via_oeste:"999",
          },
          {
            ambito:"U448",
            sector:"158",
            codigo_manzana:"Naranjal 1",
            area:"8",
            perimetro:"000",
            via_norte:"1234",
            via_sur:"999",
            via_este:"999",
            via_oeste:"999",
          },
          {
            ambito:"U448",
            sector:"158",
            codigo_manzana:"Naranjal 1",
            area:"8",
            perimetro:"000",
            via_norte:"1234",
            via_sur:"999",
            via_este:"999",
            via_oeste:"999",
          },
          {
            ambito:"U448",
            sector:"158",
            codigo_manzana:"Naranjal 1",
            area:"8",
            perimetro:"000",
            via_norte:"1234",
            via_sur:"999",
            via_este:"999",
            via_oeste:"999",
          },
        ]
      },

      editItem (item) {
        this.editedIndex = this.sectoresManzana.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        this.editedIndex = this.sectoresManzana.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true
      },

      deleteItemConfirm () {
        this.sectoresManzana.splice(this.editedIndex, 1)
        this.closeDelete()
      },

      close () {
        this.dialog = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      closeDelete () {
        this.dialogDelete = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.sectoresManzana[this.editedIndex], this.editedItem)
        } else {
          this.sectoresManzana.push(this.editedItem)
        }
        this.close()
      },

    // removeDiv(index) {
    //   this.datosManzanas.splice(index, 1);
    // },

    // saveChanges() {
    //   // Realizar cualquier acción necesaria para guardar los cambios aquí
    //   this.editingIndex = null;
    // },

    // addItem() {
    //   const newItem = {
    //     ambito: this.newItem.ambito,
    //     sector: this.newItem.sector,
    //     codigo_manzana: this.newItem.codigo_manzana,
    //     area: this.newItem.area,
    //     perimetro: this.newItem.perimetro,
    //     via_norte: this.newItem.via_norte,
    //     via_sur: this.newItem.via_sur,
    //     via_este: this.newItem.via_este,
    //     via_oeste: this.newItem.via_oeste,

    //   };
    //   this.datosManzanas.push(newItem);
    //   this.newItem.ambito = null;
    //   this.newItem.sector = null;
    //   this.newItem.codigo_manzana = null;
    //   this.newItem.area = '';
    //   this.newItem.perimetro = '';
    //   this.newItem.via_norte = null;
    //   this.newItem.via_sur = null;
    //   this.newItem.via_este = null;
    //   this.newItem.via_oeste = null;

    // },
  }
};
</script>

<style src="~/assets/styles/pages/manzana.scss" lang="scss" />