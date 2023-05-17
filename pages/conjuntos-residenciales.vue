<template>
  <div class="center no-padding divcol" style="margin-bottom:20px; padding-left: 256px;">
    <section class="section2-conjuntos">
      <div class="datos-conjuntos-container">
        <div class="title-morado">
          <p class="datos-conjuntos-title">
            Conjuntos Residenciales
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
                <span class="title">Crea Conjunto Residencial</span>
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
                      <v-autocomplete
                        v-model="nuevoRegistro.urbanizacion"
                        label="Urbanización/Barrio"
                        class="input-dialog"
                        :items="urbanizacionData"
                        item-text="nombre"
                        item-value="id"
                      ></v-autocomplete>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="nuevoRegistro.nombre"
                        label="Nombre del Conjunto"
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
                  @click="dialog = false"
                >
                  Cancelar
                </v-btn>
                <v-btn
                  class="btn dialog-btn"
                  @click="createConjunto()"
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
                <span class="title">Editar Conjunto Residencial</span>
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
                      <v-autocomplete
                        v-model="defaultItem.urbanizacion"
                        label="Urbanización/Barrio"
                        class="input-dialog"
                        :items="urbanizacionData"
                        item-text="nombre"
                        item-value="id"
                      ></v-autocomplete>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="defaultItem.nombre"
                        label="Nombre del Conjunto"
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
            :items="conjuntoData"
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
      search: '',
      dialog: false,
      dialog_editar: false,
      dialogDelete: false,
      nuevoRegistro:{},
      headers: [
        { text: 'Ambito', align: 'start', value: 'ambito',},
        { text: 'Sector', value: 'sector', align:'center' },
        { text: 'Urbanización/Barrio', value: 'urbanizacion', align:'center' },
        { text: 'Nombre del Conjunto', value: 'nombre', align:'center' },
        { text: '', value: 'actions', sortable: false, align:'center' },
      ],

      conjuntoData: [],
      sectoresData: [],
      ambitoData:[],
      urbanizacionData: [],

      defaultItem: {
        ambito: '',
        sector: '',
        urbanizacion: '',
        nombre: '',
      },
    }
  },
  head() {
    const title = 'Urbanizacion o Barrio';
    return {
      title,
    }
  },
  
  mounted(){
    this.getDataSector(),
    this.getDataAmbito(),
    this.getDataUrbanizacion(),
    this.getDataConjunto()
  },

  methods: {
    getDataConjunto(){
      this.$axios.$get('conjuntoresidencial').then(response => {
          this.conjuntoData = response
        }).catch(err => {
          console.log(err)
        })
    },

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

    createConjunto(){

      this.$axios.$post('conjuntoresidencial/', this.nuevoRegistro).then(res => {
          console.log(res.data)
          this.nuevoRegistro = {}
          this.$alert("success", {desc: "Se ha creado un nuevo conjunto residencial con éxito", hash: 'knsddcssdc', title:'Creación de conjunto'})        
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

      this.$axios.$patch('conjuntoresidencial/'+ this.defaultItem.id + '/', formData).then((res) => {
        console.log(res.data)
        this.$alert("success", {desc: "Se ha editado un conjunto residencial con éxito", hash: 'knsddcssdc', title:'Edición de conjunto'})        
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
      this.$axios.$delete('conjuntoresidencial/'+ this.defaultItem.id + '/').then((res) => {
        console.log(res.data)
        this.dialogDelete = false
        this.$alert("success", {desc: "Se ha eliminado un conjunto residencial con éxito", hash: 'knsddcssdc', title:'Eliminación de Conjunto'})        
      }).catch((err) => {
        console.log(err)
      });
    },
  }
};
</script>

<style src="~/assets/styles/pages/conjuntos-residenciales.scss" lang="scss" />