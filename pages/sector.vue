<template>
  <div class="center no-padding divcol" style="margin-bottom:20px; padding-left: 256px;">
    <!-- <section class="section1-sector">
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
    </section> -->

    <section class="section2-sector">
      <div class="datos-sectores-container">
        <div class="title-morado">
          <p class="datos-sectores-title">
            Sectores
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
                        v-model="editedItem.codigo"
                        label="Código"
                        class="input-dialog"
                      ></v-text-field>
                    </v-col>
                    <v-col
                      cols="12"
                      sm="6"
                      md="4"
                    >
                      <v-text-field
                        v-model="editedItem.nombre"
                        label="Nombre"
                        class="input-dialog"
                      ></v-text-field>
                    </v-col>
                    <v-col
                      cols="12"
                      sm="6"
                      md="4"
                    >
                      <v-text-field
                        v-model="editedItem.clasificacion"
                        label="Clasificación"
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
            :items="sectoresData"
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

        <!-- <div v-for="(item,index) in datosSectores" :key="index" class="sectores-inputs-container">
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
        </div> -->
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
      search: '',
      dialog: false,
      dialogDelete: false,
      headers: [
        { text: 'Ambito', align: 'start', value: 'ambito',},
        { text: 'Código', value: 'codigo', align:'center' },
        { text: 'Nombre', value: 'nombre', align:'center' },
        { text: 'Clasificación', value: 'clasificacion', align:'center' },
        { text: 'Área', value: 'area', align:'center' },
        { text: 'Perímetro', value: 'perimetro', align:'center' },
        { text: '', value: 'actions', sortable: false, align:'center' },
      ],
      sectoresData: [],
      editedIndex: -1,
      editedItem: {
        ambito: '',
        codigo: '',
        nombre: '',
        clasificacion: '',
        area: '',
        perimetro: '',
      },
      defaultItem: {
        ambito: '',
        codigo: '',
        nombre: '',
        clasificacion: '',
        area: '',
        perimetro: '',
      },




      // newItem: {
      //   ambito: null,
      //   codigo: null,
      //   nombre:'',
      //   clasificacion: null,
      //   area: '',
      //   perimetro:'',
      // },
      // editingIndex: null,
      // datosSectores:[
      //   {
      //     ambito:"U448",
      //     codigo:"158",
      //     nombre:"Naranjal 1",
      //     clasificacion:"8",
      //     area:"000",
      //     perimetro:"1234"
      //   },
      //   {
      //     ambito:"U448",
      //     codigo:"158",
      //     nombre:"Naranjal 1",
      //     clasificacion:"8",
      //     area:"000",
      //     perimetro:"1234"
      //   },
      //   {
      //     ambito:"U448",
      //     codigo:"158",
      //     nombre:"Naranjal 1",
      //     clasificacion:"8",
      //     area:"000",
      //     perimetro:"1234"
      //   },
      //   {
      //     ambito:"U448",
      //     codigo:"158",
      //     nombre:"Naranjal 1",
      //     clasificacion:"8",
      //     area:"000",
      //     perimetro:"1234"
      //   },
      //   {
      //     ambito:"U448",
      //     codigo:"158",
      //     nombre:"Naranjal 1",
      //     clasificacion:"8",
      //     area:"000",
      //     perimetro:"1234"
      //   },
      // ]
    }
  },
  head() {
    const title = 'Sector';
    return {
      title,
    }
  },

  computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'Agregar nuevo Sector' : 'Editar Sector'
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
        this.sectoresData = [
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
          {
            ambito:"U448",
            codigo:"158",
            nombre:"Naranjal 1",
            clasificacion:"8",
            area:"000",
            perimetro:"1234"
          },
        ]
      },

      editItem (item) {
        this.editedIndex = this.sectoresData.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        this.editedIndex = this.sectoresData.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true
      },

      deleteItemConfirm () {
        this.sectoresData.splice(this.editedIndex, 1)
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
          Object.assign(this.sectoresData[this.editedIndex], this.editedItem)
        } else {
          this.sectoresData.push(this.editedItem)
        }
        this.close()
      },

    // removeDiv(index) {
    //   this.datosSectores.splice(index, 1);
    // },

    // saveChanges() {
    //   // Realizar cualquier acción necesaria para guardar los cambios aquí
    //   this.editingIndex = null;
    // },

    // addItem() {
    //   const newItem = {
    //     ambito: this.newItem.ambito,
    //     codigo: this.newItem.codigo,
    //     nombre: this.newItem.nombre,
    //     clasificacion: this.newItem.clasificacion,
    //     area: this.newItem.area,
    //     perimetro: this.newItem.perimetro,
    //   };
    //   this.datosSectores.push(newItem);
    //   this.newItem.ambito = null;
    //   this.newItem.codigo = null;
    //   this.newItem.nombre = '';
    //   this.newItem.clasificacion = null;
    //   this.newItem.area = '';
    //   this.newItem.perimetro = '';
    // },
  }
};
</script>

<style src="~/assets/styles/pages/sector.scss" lang="scss" />