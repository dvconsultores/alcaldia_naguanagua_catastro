<template>
  <div class="center no-padding divcol" style="margin-bottom:20px; padding-left: 256px;">
    <section class="section1-ambito">
      <div class="datos-ambito-container">
        <div class="title-morado">
          <p class="datos-ambito-title">
            Sub-Parcelas
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
                <span class="title">Crear  Sub-Parcela</span>
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
                        v-model="nuevoRegistro.parcela"
                        label="Código Parcela"
                        class="input-dialog"
                        :items="dataParcela"
                        item-text="codigo"
                        item-value="id"
                      ></v-autocomplete>
                    </v-col>

                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="nuevoRegistro.codigo"
                        label="Código Sub-Parcela"
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
                  @click="createSubParcela()"
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
                <span class="title">Editar Parcela</span>
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
                        v-model="defaultItem.parcela"
                        label="Código Parcela"
                        class="input-dialog"
                        :items="dataParcela"
                        item-text="codigo"
                        item-value="id"
                      ></v-autocomplete>
                    </v-col>

                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="defaultItem.codigo"
                        label="Código Sub-Parcela"
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
            :items="dataSubParcela"
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
  name: "SubParcelaPage",
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
        { text: 'Código Parcela', value: 'codigo_parcela', align:'center' },
        { text: 'Código Sub-Parcela', value: 'codigo', align:'center' },
        { text: '', value: 'actions', sortable: false, align:'center' },
      ],
      
      dataParcela: [],
      ambitoData:[],
      sectoresData:[],
      dataSubParcela:[],
      
      defaultItem: {
        ambito: '',
        sector: '',
        parcela: '',
        codigo: '',
      },
    }
  },

  head() {
    const title = 'Sub Parcela';
    return {
      title,
    }
  },

  mounted(){
    this.getDataSector(),
    this.getDataAmbito(),
    this.getDataParcela()
    this.getDataSubParcela()

  },


  methods: {
    getDataSubParcela(){
      this.$axios.$get('subparcela').then(response => {
          this.dataSubParcela = response
        }).catch(err => {
          console.log(err)
        })
    },

    getDataParcela(){
      this.$axios.$get('parcela').then(response => {
          this.dataParcela = response
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


    createSubParcela(){
      this.$axios.$post('subparcela/', this.nuevoRegistro).then(res => {
        console.log(res.data)
        this.nuevoRegistro = {}
        this.dataSubParcela.push(res)
        this.$alert("success", {desc: "Se ha creado una nueva sub-parcela con éxito", hash: 'knsddcssdc', title:'Creación de Sub-Parcela'})        
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
      this.defaultItem.parcela = item.parcela
      this.defaultItem.codigo = item.codigo
    },

    saveData(){
      const formData = new FormData()
      formData.append('ambito', this.defaultItem.ambito)
      formData.append('sector', this.defaultItem.sector)
      formData.append('parcela', this.defaultItem.parcela)
      formData.append('codigo', this.defaultItem.codigo)

      this.$axios.$patch('subparcela/'+ this.defaultItem.id + '/', formData).then((res) => {
        console.log(res.data)
        this.$alert("success", {desc: "Se ha editado una sub-parcela con éxito", hash: 'knsddcssdc', title:'Edición de sub-parcela'})
        this.getDataSubParcela()          
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
      this.$axios.$delete('subparcela/'+ this.defaultItem.id + '/').then((res) => {
        console.log(res.data)
        this.dialogDelete = false
        this.$alert("success", {desc: "Se ha eliminado una sub-parcela con éxito", hash: 'knsddcssdc', title:'Eliminación de Sub-Parcela'})  
        this.getDataSubParcela()       
      }).catch((err) => {
        console.log(err)
      });
    },
  }
};
</script>

<style src="~/assets/styles/pages/ambito.scss" lang="scss" />