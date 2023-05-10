<template>
  <div class="center no-padding divcol" style="margin-bottom:20px; padding-left: 256px;">
    <!-- <section class="section1-parcela">
      <div class="parcela-container">
        <p class="title-parcela">
          Agregar nueva Parcela
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
          class="autocomplete-medium"
          label="Codigo Manzana*"
          ></v-autocomplete>

          <v-autocomplete
          v-model="newItem.codigo_parcela"
          class="autocomplete-small"
          label="Codigo Parcela*"
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
    </section> -->

    <section class="section2-parcela">
      <div class="datos-parcela-container">
        <div class="title-morado">
          <p class="datos-parcela-title">
            Parcelas
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
                        v-model="editedItem.codigo_parcela"
                        label="Código Parcela"
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
            :items="sectoresParcela"
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

        
        <!-- <div v-for="(item,index) in datosParcelas" :key="index" class="parcela-inputs-container">
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
          class="big-input mobile-inputs"
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
        </div> -->
      </div>
    </section>
  </div>
</template>

<script>
import computeds from '~/mixins/computeds'

export default {
  name: "ParcelaPage",
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
        { text: 'Código Parcela', value: 'codigo_parcela', align:'center' },
        { text: 'Área', value: 'area', align:'center' },
        { text: 'Perímetro', value: 'perimetro', align:'center' },
        { text: '', value: 'actions', sortable: false, align:'center' },
      ],
      sectoresParcela: [],
      editedIndex: -1,
      editedItem: {
        ambito: '',
        sector: '',
        codigo_manzana: '',
        codigo_parcela: '',
        area: '',
        perimetro: '',
      },
      defaultItem: {
        ambito: '',
        sector: '',
        codigo_manzana: '',
        codigo_parcela: '',
        area: '',
        perimetro: '',
      },

      // newItem: {
      //   ambito: null,
      //   sector: null,
      //   codigo_manzana: null,
      //   codigo_parcela: null,
      //   area: '',
      //   perimetro:'',
      // },
      // editingIndex: null,
      // datosParcelas:[
      //   {
      //     ambito:"U448",
      //     sector:"158",
      //     codigo_manzana:"Naranjal 1",
      //     codigo_parcela:"8",
      //     area:"000",
      //     perimetro:"1234"
      //   },
      //   {
      //     ambito:"U448",
      //     sector:"158",
      //     codigo_manzana:"Naranjal 1",
      //     codigo_parcela:"8",
      //     area:"000",
      //     perimetro:"1234"
      //   },{
      //     ambito:"U448",
      //     sector:"158",
      //     codigo_manzana:"Naranjal 1",
      //     codigo_parcela:"8",
      //     area:"000",
      //     perimetro:"1234"
      //   },{
      //     ambito:"U448",
      //     sector:"158",
      //     codigo_manzana:"Naranjal 1",
      //     codigo_parcela:"8",
      //     area:"000",
      //     perimetro:"1234"
      //   },{
      //     ambito:"U448",
      //     sector:"158",
      //     codigo_manzana:"Naranjal 1",
      //     codigo_parcela:"8",
      //     area:"000",
      //     perimetro:"1234"
      //   },{
      //     ambito:"U448",
      //     sector:"158",
      //     codigo_manzana:"Naranjal 1",
      //     codigo_parcela:"8",
      //     area:"000",
      //     perimetro:"1234"
      //   },
      // ]
    }
  },
  head() {
    const title = 'Parcela';
    return {
      title,
    }
  },

  computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'Agregar nueva Parcela' : 'Editar Parcela'
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
        this.sectoresParcela = [
          {
            ambito:"U448",
            sector:"158",
            codigo_manzana:"Naranjal 1",
            codigo_parcela:"8",
            area:"000",
            perimetro:"1234"
          },
          {
            ambito:"U448",
            sector:"158",
            codigo_manzana:"Naranjal 1",
            codigo_parcela:"8",
            area:"000",
            perimetro:"1234"
          },
          {
            ambito:"U448",
            sector:"158",
            codigo_manzana:"Naranjal 1",
            codigo_parcela:"8",
            area:"000",
            perimetro:"1234"
          },
          {
            ambito:"U448",
            sector:"158",
            codigo_manzana:"Naranjal 1",
            codigo_parcela:"8",
            area:"000",
            perimetro:"1234"
          },
          {
            ambito:"U448",
            sector:"158",
            codigo_manzana:"Naranjal 1",
            codigo_parcela:"8",
            area:"000",
            perimetro:"1234"
          },
          {
            ambito:"U448",
            sector:"158",
            codigo_manzana:"Naranjal 1",
            codigo_parcela:"8",
            area:"000",
            perimetro:"1234"
          },
        ]
      },

      editItem (item) {
        this.editedIndex = this.sectoresParcela.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        this.editedIndex = this.sectoresParcela.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true
      },

      deleteItemConfirm () {
        this.sectoresParcela.splice(this.editedIndex, 1)
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
          Object.assign(this.sectoresParcela[this.editedIndex], this.editedItem)
        } else {
          this.sectoresParcela.push(this.editedItem)
        }
        this.close()
      },


    // removeDiv(index) {
    //   this.datosParcelas.splice(index, 1);
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
    //     codigo_parcela: this.newItem.codigo_parcela,
    //     area: this.newItem.area,
    //     perimetro: this.newItem.perimetro,
    //   };
    //   this.datosParcelas.push(newItem);
    //   this.newItem.ambito = null;
    //   this.newItem.sector = null;
    //   this.newItem.codigo_manzana = null;
    //   this.newItem.codigo_parcela = null;
    //   this.newItem.area = '';
    //   this.newItem.perimetro = '';
    // },
  }
};
</script>

<style src="~/assets/styles/pages/parcela.scss" lang="scss" />