<template>
  <div class="center no-padding divcol" style="margin-bottom:20px; padding-left: 256px;">
    <section class="section1-ambito">
      <div class="datos-ambito-container">
        <div class="title-morado">
          <p class="datos-ambito-title">
            Exoneraciones
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
                <span class="title">Crear Exoneraciones</span>
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
                      <v-autocomplete
                        v-model="nuevoRegistro.tipologia"
                        label="tipologia"
                        class="input-dialog"
                        :items="TipologiaData"
                        item-text="descripcion"
                        item-value="id"
                      ></v-autocomplete>
                    </v-col>
                    <v-col
                      cols="12"
                      sm="6"
                      md="4"
                    >
                      <v-autocomplete
                        v-model="nuevoRegistro.ambito"
                        label="tipologia_categorizacion"
                        class="input-dialog"
                        :items="ambitoData"
                        item-text="descripcion"
                        item-value="id"
                      ></v-autocomplete>
                    </v-col>
                    <v-col
                      cols="12"
                      sm="6"
                      md="4"
                    >
                      <v-text-field
                        v-model="nuevoRegistro.codigo"
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
                        v-model="nuevoRegistro.descripcion"
                        label="Descripción"
                        class="input-dialog"
                      ></v-text-field>
                    </v-col>
                    <v-col
                      cols="12"
                      sm="6"
                      md="4"
                    >
                      <v-autocomplete
                        v-model="nuevoRegistro.clasificacion"
                        label="Clasificación"
                        class="input-dialog"
                        :items="sectoresData"
                        item-text="clasificacion"
                      ></v-autocomplete>
                    </v-col>
                    <v-col
                      cols="12"
                      sm="6"
                      md="4"
                    >
                      <v-text-field
                        v-model="nuevoRegistro.area"
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
                        v-model="nuevoRegistro.perimetro"
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
                  @click="dialog = false"
                >
                  Cancelar
                </v-btn>
                <v-btn
                  class="btn dialog-btn"
                  @click="createSector()"
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
                <span class="title">Editar Exoneraciones</span>
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
                      <v-autocomplete
                        v-model="defaultItem.ambito"
                        label="Ambito"
                        class="input-dialog"
                        :items="ambitoData"
                        item-text="descripcion"
                        item-value="id"
                      ></v-autocomplete>
                    </v-col>
                    <v-col
                      cols="12"
                      sm="6"
                      md="4"
                    >
                      <v-text-field
                        v-model="defaultItem.codigo"
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
                        v-model="defaultItem.descripcion"
                        label="Descripción"
                        class="input-dialog"
                      ></v-text-field>
                    </v-col>
                    <v-col
                      cols="12"
                      sm="6"
                      md="4"
                    >
                      <v-autocomplete
                        v-model="defaultItem.clasificacion"
                        label="Clasificación"
                        class="input-dialog"
                        :items="sectoresData"
                        item-text="clasificacion"
                      ></v-autocomplete>
                    </v-col>
                    <v-col
                      cols="12"
                      sm="6"
                      md="4"
                    >
                      <v-text-field
                        v-model="defaultItem.area"
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
                        v-model="defaultItem.perimetro"
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
             dense
            :headers="headers"
            :items="sectoresData"
            :items-per-page="10"
            :search="search"
            :loading="loading" 
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
                    <v-card-title class="center title">¿Desea eliminar Exoneraciones?</v-card-title>
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
  name: "ExoneracionPage",
  mixins: [computeds],
  data() {
    return {  
      loading: true,
      search: '',
      dialog: false,
      dialog_editar: false,
      dialogDelete: false,
      nuevoRegistro:{},
      headers: [
        { text: 'Descripción', align: 'start', value: 'descripcion',},
        { text: 'Zona', value: 'zona_codigo', align:'center' },
        { text: 'Descripción', value: 'uso_zona_descripcion', align:'center' },
        { text: 'Categorización', value: 'categorizacion_codigo', align:'center' },
        { text: 'Descripción', value: 'uso_categorizacion_descripcion', align:'center' },
        { text: 'm2desde', value: 'm2desde', align:'center' },
        { text: 'm2hasta', value: 'm2hasta', align:'center' },
        { text: 'Fecha Desde', value: 'fechadesde', align:'center' },
        { text: 'Fecha Hasta', value: 'fechahasta', align:'center' },
        { text: '', value: 'actions', sortable: false, align:'center' },
      ],
      sectoresData: [],
      ambitoData:[],
      defaultItem: {
        ambito: '',
        descripcion_ambito:'',
        codigo: '',
        descripcion: '',
        clasificacion: '',
        area: '',
        perimetro: '',
      },
    }
  },
  head() {
    const title = 'Exoneración';
    return {
      title,
    }
  },

  mounted(){
    this.getDataSector()
    this.getDataAmbito()
  },

  methods: {
    getDataAmbito() {
      this.$axios.$get('tipologia_categorizacion').then(response => {
          this.ambitoData = response
          this.loading = false
        }).catch(err => {
          console.log(err)
        })
    },
    getDataAmbito1() {
      this.$axios.$get('tipologia').then(response => {
          this.ambitoData = response
          this.loading = false
        }).catch(err => {
          console.log(err)
        })
    },

    getDataSector() {
      this.$axios.$get('ic_impuestoexoneracion').then(response => {
          this.sectoresData = response
        }).catch(err => {
          console.log(err)
        })
    },

    createSector(){
      this.$axios.$post('sector/', this.nuevoRegistro).then(res => {
          console.log(res.data)
          this.nuevoRegistro = {}
          this.sectoresData.push(res)
          this.$alert("success", {desc: "Se ha creado un nuevo sector con éxito", hash: 'knsddcssdc', title:'Creación de Sector'})        
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
      this.defaultItem.descripcion = item.descripcion
      this.defaultItem.ambito = item.ambito
      this.defaultItem.descripcion_ambito = item.descripcion_ambito
      this.defaultItem.clasificacion = item.clasificacion
      this.defaultItem.area = item.area
      this.defaultItem.perimetro = item.perimetro
    },

    saveData(){
      const formData = new FormData()
      formData.append('codigo', this.defaultItem.codigo)
      formData.append('descripcion', this.defaultItem.descripcion)
      formData.append('ambito', this.defaultItem.ambito)
      formData.append('clasificacion', this.defaultItem.clasificacion)
      formData.append('area', this.defaultItem.area)
      formData.append('perimetro', this.defaultItem.perimetro)


      this.$axios.$patch('sector/'+ this.defaultItem.id + '/', formData).then((res) => {
        console.log(res.data)
        this.$alert("success", {desc: "Se ha editado un sector con éxito", hash: 'knsddcssdc', title:'Edición de sector'})
        this.getDataSector()        
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
      this.$axios.$delete('sector/'+ this.defaultItem.id + '/').then((res) => {
        console.log(res.data)
        this.dialogDelete = false
        this.$alert("success", {desc: "Se ha eliminado un sector con éxito", hash: 'knsddcssdc', title:'Eliminación de Sector'}) 
        this.getDataSector()         
      }).catch((err) => {
        console.log(err)
      });
    },
  }
};
</script>

<style src="~/assets/styles/pages/ambito.scss" lang="scss" />