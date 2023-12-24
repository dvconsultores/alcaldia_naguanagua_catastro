<template>
  <div class="center no-padding divcol" style="margin-bottom:20px; padding-left: 256px;">
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
                <span class="title">Crear Manzana</span>
              </v-card-title>

              <hr>

              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="6" md="4">
                      <v-autocomplete
                        v-model="nuevoRegistro.ambito"
                        label="Ambito"
                        class="input-dialog"
                        :items="ambitoData"
                        item-text="descripcion"
                        item-value="id"
                      ></v-autocomplete>
                    </v-col>

                    <v-col cols="12" sm="6" md="4">
                      <v-autocomplete
                        v-model="nuevoRegistro.sector"
                        label="Sector"
                        class="input-dialog"
                        :items="sectoresData"
                        item-text="descripcion"
                        item-value="id"
                      ></v-autocomplete>
                    </v-col>

                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="nuevoRegistro.codigo"
                        label="Código Manzana"
                        class="input-dialog"
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="nuevoRegistro.area"
                        label="Área"
                        class="input-dialog"
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="nuevoRegistro.perimetro"
                        label="Perímetro"
                        class="input-dialog"
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12" sm="6" md="4">
                      <v-autocomplete
                        v-model="nuevoRegistro.via_norte"
                        label="Vía Norte"
                        class="input-dialog"
                        :items="dataCalle"
                        item-text="nombre"
                        item-value="id"
                      ></v-autocomplete>
                    </v-col>

                    <v-col cols="12" sm="6" md="4">
                      <v-autocomplete
                        v-model="nuevoRegistro.via_sur"
                        label="Vía Sur"
                        class="input-dialog"
                        :items="dataCalle"
                        item-text="nombre"
                        item-value="id"
                      ></v-autocomplete>
                    </v-col>

                    <v-col cols="12" sm="6" md="4">
                      <v-autocomplete
                        v-model="nuevoRegistro.via_este"
                        label="Vía Este"
                        class="input-dialog"
                        :items="dataCalle"
                        item-text="nombre"
                        item-value="id"
                      ></v-autocomplete>
                    </v-col>

                    <v-col cols="12" sm="6" md="4">
                      <v-autocomplete
                        v-model="nuevoRegistro.via_oeste"
                        label="Vía Oeste"
                        class="input-dialog"
                        :items="dataCalle"
                        item-text="nombre"
                        item-value="id"
                      ></v-autocomplete>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  class="btn dialog-btn"
                  @click="dialog = false"
                >
                  Cancelar
                </v-btn>
                <v-btn
                  class="btn dialog-btn"
                  @click="createManzana()"
                  style="background-color:#ED057E!important;"
                >
                  Guardar
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>

          <v-dialog
            v-model="dialog_editar"
            max-width="1600px"
          >
            <v-card id="dialog-editar-crear">
              <v-card-title>
                <span class="title">Editar Manzana</span>
              </v-card-title>

              <hr>

              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="6" md="4">
                      <v-autocomplete
                        v-model="defaultItem.ambito"
                        label="Ambito"
                        class="input-dialog"
                        :items="ambitoData"
                        item-text="descripcion"
                        item-value="id"
                      ></v-autocomplete>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-autocomplete
                        v-model="defaultItem.sector"
                        label="Sector"
                        class="input-dialog"
                        :items="sectoresData"
                        item-text="descripcion"
                        item-value="id"
                      ></v-autocomplete>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="defaultItem.codigo"
                        label="Descripción"
                        class="input-dialog"
                      ></v-text-field>
                    </v-col>
                   
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="defaultItem.area"
                        label="Área"
                        class="input-dialog"
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="defaultItem.perimetro"
                        label="Perímetro"
                        class="input-dialog"
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12" sm="6" md="4">
                      <v-autocomplete
                        v-model="defaultItem.via_norte"
                        label="Vía Norte"
                        class="input-dialog"
                        :items="dataCalle"
                        item-text="nombre"
                        item-value="id"
                      ></v-autocomplete>
                    </v-col>

                    <v-col cols="12" sm="6" md="4">
                      <v-autocomplete
                        v-model="defaultItem.via_sur"
                        label="Vía Sur"
                        class="input-dialog"
                        :items="dataCalle"
                        item-text="nombre"
                        item-value="id"
                      ></v-autocomplete>
                    </v-col>

                    <v-col cols="12" sm="6" md="4">
                      <v-autocomplete
                        v-model="defaultItem.via_este"
                        label="Vía Este"
                        class="input-dialog"
                        :items="dataCalle"
                        item-text="nombre"
                        item-value="id"
                      ></v-autocomplete>
                    </v-col>

                    <v-col cols="12" sm="6" md="4">
                      <v-autocomplete
                        v-model="defaultItem.via_oeste"
                        label="Vía Oeste"
                        class="input-dialog"
                        :items="dataCalle"
                        item-text="nombre"
                        item-value="id"
                      ></v-autocomplete>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  class="btn dialog-btn"
                  @click="dialog_editar = false"
                >
                  Cancelar
                </v-btn>
                <v-btn
                  class="btn dialog-btn"
                  @click="saveData()"
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
                <v-dialog v-model="dialogDelete" max-width="500px">
                  <v-card id="dialog-eliminar-card">
                    <v-card-title class="center title">¿Desea eliminarlo?</v-card-title>
                    <span class="alerta-text">Esta acción no se puede revertir</span>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn class="btn dialog-btn" text @click="deleteItem()">Si</v-btn>
                      <v-btn class="btn dialog-btn" text @click="dialogDelete = false" style="background-color:#ED057E!important;">No</v-btn>
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
                @click="openDelete(item)"
              >
                mdi-delete
              </v-icon>
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
      dialog_editar: false,
      dialogDelete: false,
      nuevoRegistro:{},
      headers: [
        { text: 'Ambito', align: 'start', value: 'descripcion_ambito',},
        { text: 'Sector', value: 'descripcion_sector', align:'center' },
        { text: 'Código Manzana', value: 'codigo', align:'center' },
        { text: 'Área', value: 'area', align:'center' },
        { text: 'Perímetro', value: 'perimetro', align:'center' },
        { text: 'Vía Norte', value: 'descripcion_via_norte', align:'center' },
        { text: 'Vía Sur', value: 'descripcion_via_sur', align:'center' },
        { text: 'Vía Este', value: 'descripcion_via_este', align:'center' },
        { text: 'Vía Oeste', value: 'descripcion_via_oeste', align:'center' },
        { text: '', value: 'actions', sortable: false, align:'center' },
      ],

      sectoresManzana: [],
      ambitoData:[],
      sectoresData:[],
      dataCalle: [],

      defaultItem: {
        ambito: '',
        sector: '',
        codigo: '',
        area: '',
        perimetro: '',
        via_norte: '',
        via_sur: '',
        via_este: '',
        via_oeste: '',
        descripcion_ambito: '',
        descripcion_sector: '',
        descripcion_via_norte: '',
        descripcion_via_sur: '',
        descripcion_via_este: '',
        descripcion_via_oeste: '',

      },
    }
  },
  head() {
    const title = 'Manzana';
    return {
      title,
    }
  },

  mounted(){
    this.getDataSector(),
    this.getDataAmbito(),
    this.getDataManzana()
    this.getCalle()
  },

  methods: {
    getCalle() {
      this.$axios.$get('calle').then(response => {
          this.dataCalle = response
        }).catch(err => {
          console.log(err)
        })
    },

    getDataAmbito() {
      this.$axios.$get('ambito').then(response => {
          this.ambitoData = response
        }).catch(err => {
          console.log(err)
        })
    },

    getDataSector() {
      this.$axios.$get('sector').then(response => {
          this.sectoresData = response
        }).catch(err => {
          console.log(err)
        })
    },

    getDataManzana() {
      this.$axios.$get('manzana').then(response => {
          this.sectoresManzana = response
        }).catch(err => {
          console.log(err)
        })
    },

    createManzana(){
      this.$axios.$post('manzana/', this.nuevoRegistro).then(res => {
        console.log(res.data)
        this.nuevoRegistro = {}
        this.sectoresManzana.push(res)
        this.$alert("success", {desc: "Se ha creado una nueva mazana con éxito", hash: 'knsddcssdc', title:'Creación de Manzana'})
        this.getDataManzana()        
      }).catch(err => {
        console.log(err)
      })

      this.dialog = false
    },  

    editItem(item){
      console.log(item)
      this.dialog_editar = true
      this.defaultItem.id = item.id
      this.defaultItem.codigo = item.codigo
      this.defaultItem.ambito = item.ambito
      this.defaultItem.area = item.area
      this.defaultItem.perimetro = item.perimetro
      this.defaultItem.sector = item.sector
      this.defaultItem.via_norte = item.via_norte
      this.defaultItem.via_este = item.via_este
      this.defaultItem.via_sur = item.via_sur
      this.defaultItem.via_oeste = item.via_oeste
      this.defaultItem.descripcion_ambito = item.descripcion_ambito
      this.defaultItem.descripcion_sector = item.descripcion_sector
      this.defaultItem.descripcion_via_norte = item.descripcion_via_norte
      this.defaultItem.descripcion_via_sur = item.descripcion_via_sur
      this.defaultItem.descripcion_via_este = item.descripcion_via_este
      this.defaultItem.descripcion_via_oeste = item.descripcion_via_oeste


    },

    saveData(){
      const formData = new FormData()
      formData.append('codigo', this.defaultItem.codigo)
      formData.append('ambito', this.defaultItem.ambito)
      formData.append('area', this.defaultItem.area)
      formData.append('perimetro', this.defaultItem.perimetro)
      formData.append('sector', this.defaultItem.sector)
      formData.append('via_norte', this.defaultItem.via_norte)
      formData.append('via_este', this.defaultItem.via_este)
      formData.append('via_sur', this.defaultItem.via_sur)
      formData.append('via_oeste', this.defaultItem.via_oeste)

      this.$axios.$patch('manzana/'+ this.defaultItem.id + '/', formData).then((res) => {
        console.log(res.data)
        this.$alert("success", {desc: "Se ha editado una manzana con éxito", hash: 'knsddcssdc', title:'Edición de manzana'})
        this.getDataManzana()          
      }).catch((err) => {
        console.log(err)
      });

      this.dialog_editar = false
    },  

    openDelete(item){
      this.defaultItem = item
      this.dialogDelete = true
    },

    deleteItem(){
      this.$axios.$delete('manzana/'+ this.defaultItem.id + '/').then((res) => {
        console.log(res.data)
        this.dialogDelete = false
        this.$alert("success", {desc: "Se ha eliminado una manzana con éxito", hash: 'knsddcssdc', title:'Eliminación de Manzana'}) 
        this.getDataManzana()        
      }).catch((err) => {
        console.log(err)
      });
    },
  }
};
</script>

<style src="~/assets/styles/pages/manzana.scss" lang="scss" />