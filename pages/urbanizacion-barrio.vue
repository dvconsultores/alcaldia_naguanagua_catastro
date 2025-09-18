<template>
  <div class="center no-padding divcol" style="margin-bottom:20px; padding-left: 256px;">
    <section class="section2-urbanizacion-barrio">
      <div class="datos-urbanizacion-barrio-container">
        <div class="title-morado">
          <p class="datos-urbanizacion-barrio-title">
            Urbanización o Barrio
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
                <span class="title">Crear Urbanización</span>
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
                        v-model="nuevoRegistro.nombre"
                        label="Nombre"
                        class="input-dialog"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-autocomplete
                        v-model="nuevoRegistro.tipo"
                        label="Tipo"
                        class="input-dialog"
                        :items="itemsTipo"
                        item-text="text"
                        item-value="value"
                      ></v-autocomplete>
                    </v-col>

                  </v-row>
                </v-container>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  class="btn dialog-btn"
                  @click="dialog = false" style="background-color:var(--error)!important;"
                >
                  Cancelar
                </v-btn>
                <v-btn
                  class="btn dialog-btn"
                  @click="createUrbanizacion()"
                  style="background-color:var(--primary)!important;"
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
                <span class="title">Editar Urbanización</span>
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
                        v-model="defaultItem.nombre"
                        label="Nombre"
                        class="input-dialog"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">                    
                      <v-autocomplete
                        v-model="defaultItem.tipo"
                        label="Tipo"
                        class="input-dialog"
                        :items="itemsTipo"
                        item-text="text"
                        item-value="value"
                      ></v-autocomplete>
                    </v-col>

                  </v-row>
                </v-container>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  class="btn dialog-btn"
                  @click="dialog_editar = false" style="background-color:var(--error)!important;"
                >
                  Cancelar
                </v-btn>
                <v-btn
                  class="btn dialog-btn"
                  @click="saveData()"
                  style="background-color:var(--primary)!important;"
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
            :items="urbanizacionData"
            :items-per-page="10"
            :search="search"
            :footer-props="{
              itemsPerPageText: 'Items por página',
            }"
            sort-by="nombre"
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
                      <v-btn class="btn dialog-btn" text @click="dialogDelete = false" style="background-color:var(--error)!important;">No</v-btn>
                      <v-spacer></v-spacer>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </v-toolbar>
            </template>
            <template #[`item.actions`]="{ item }">
              <v-icon
                color="var(--success)"
                big
                @click="editItem(item)"
              >
                mdi-pencil
              </v-icon>
              <v-icon
                color="var(--error)"
                big
                @click="openDelete(item)"
              >
                mdi-delete
              </v-icon>
            </template>
          </v-data-table>
        </div>
        <!-- <div v-for="(item,index) in datosUrbanizacion" :key="index" class="urbanizacion-barrio-inputs-container">
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
        </div> -->
      </div>
    </section>
  </div>
</template>

<script>
import computeds from '~/mixins/computeds'

export default {
  name: "Urbanizacion-BarrioPage",
  mixins: [computeds],
  data() {
    return {  
      search: '',
      dialog: false,
      dialog_editar: false,
      dialogDelete: false,
      nuevoRegistro:{},
      headers: [
        { text: 'Ambito', align: 'center', value: 'descripcion_ambito',},
        { text: 'Sector', value: 'descripcion_sector', align:'center' },
        { text: 'Nombre', value: 'nombre', align:'center' },
        { text: 'Tipo', value: 'tipo', align:'center' },
        { text: '', value: 'actions', sortable: false, align:'center' },
      ],

      sectoresData: [],
      ambitoData:[],
      urbanizacionData: [],
      itemsTipo: [
        { text: 'Pública', value: 'P' },
        { text: 'Privada', value: 'R' },
      ],    
      defaultItem: {
        ambito: '',
        sector: '',
        nombre: '',
        tipo: '',
      },
    }
  },
  head() {
    const title = 'Urbanización o Barrio';
    return {
      title,
    }
  },

  mounted(){
    this.getDataSector(),
    this.getDataAmbito(),
    this.getDataUrbanizacion()
  },

  methods: {
    getDataUrbanizacion(){
      this.$axios.$get('urbanizacion').then(response => {
          this.urbanizacionData = response
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

    createUrbanizacion(){

      this.$axios.$post('urbanizacion/', this.nuevoRegistro).then(res => {
          console.log(res.data)
          this.nuevoRegistro = {}
          this.$alert("success", {desc: "Se ha creado una nueva urbanización con éxito", hash: 'knsddcssdc', title:'Creación de urbanización'})  
          this.getDataUrbanizacion()       
        }).catch(err => {
          console.log(err)
        })

        this.dialog = false
    },  

    editItem(item){
      console.log(item)
      this.dialog_editar = true
      this.defaultItem.id = item.id
      this.defaultItem.ambito = item.ambito
      this.defaultItem.sector = item.sector
      this.defaultItem.nombre = item.nombre
      this.defaultItem.tipo = item.tipo
    },

    saveData(){
      const formData = new FormData()
      formData.append('ambito', this.defaultItem.ambito)
      formData.append('sector', this.defaultItem.sector)
      formData.append('nombre', this.defaultItem.nombre)

      formData.append('tipo', this.defaultItem.tipo)
      this.$axios.$patch('urbanizacion/'+ this.defaultItem.id + '/', formData).then((res) => {
        console.log(res.data)
        this.$alert("success", {desc: "Se ha editado una urbanización con éxito", hash: 'knsddcssdc', title:'Edición de urbanización'}) 
        this.getDataUrbanizacion()       
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
      this.$axios.$delete('urbanizacion/'+ this.defaultItem.id + '/').then((res) => {
        console.log(res.data)
        this.dialogDelete = false
        this.$alert("success", {desc: "Se ha eliminado una urbanización con éxito", hash: 'knsddcssdc', title:'Eliminación de urbanización'})  
        this.getDataUrbanizacion()         
      }).catch((err) => {
        console.log(err)
      });
    },
  }
};
</script>

<style src="~/assets/styles/pages/urbanizacion-barrio.scss" lang="scss" />