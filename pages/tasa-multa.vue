<template>
  <div class="center no-padding divcol" style="margin-bottom:20px; padding-left: 256px;">
    <section class="section1-tasa">
      <div class="datos-tasa-container">
        <div class="title-morado">
          <p class="datos-tasa-title">
            Tasa / Multa
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
                <span class="title">Crear Tasa/Multa</span>
              </v-card-title>

              <hr>

              <v-card-text>
                <v-container>
                  <v-row class="center">
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="nuevoRegistro.descripcion"
                        label="Descripción"
                        class="input-dialog"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="nuevoRegistro.unidad_tributaria"
                        label="Unidad tributaria"
                        class="input-dialog"
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12" sm="6" md="4">
                      <v-autocomplete
                        v-model="nuevoRegistro.tipo"
                        label="Tipo"
                        class="input-dialog"
                        :items="tasaData"
                        item-text="tipo"
                        item-value="id"
                      ></v-autocomplete>
                    </v-col>

                    <v-col cols="12" sm="6" md="4">
                      <v-autocomplete
                        v-model="nuevoRegistro.aplica"
                        label="Aplica"
                        class="input-dialog"
                        :items="tasaData"
                        item-text="aplica"
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
                  @click="createTasa()"
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
                <span class="title">Editar Tasa/Multa</span>
              </v-card-title>

              <hr>

              <v-card-text>
                <v-container>
                  <v-row class="center">
                    <v-col
                      cols="12"
                      sm="6"
                      md="4"
                    >
                      <v-text-field
                        v-model="defaultItem.descripcion"
                        label="Descripción"
                        class="input-dialog"
                        disabled
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="defaultItem.unidad_tributaria"
                        label="Unidad Tributaria"
                        class="input-dialog"
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12" sm="6" md="4">
                      <v-autocomplete
                        v-model="defaultItem.tipo"
                        label="Tipo"
                        class="input-dialog"
                        :items="tasaData"
                        item-text="tipo"
                        item-value="id"
                      ></v-autocomplete>
                    </v-col>

                    <v-col cols="12" sm="6" md="4">
                      <v-autocomplete
                        v-model="defaultItem.aplica"
                        label="Aplica"
                        class="input-dialog"
                        :items="tasaData"
                        item-text="aplica"
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
            :items="tasaData"
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
  name: "tasaPage",
  mixins: [computeds],
  data() {
    return {  
      search: '',
      dialog: false,
      dialog_editar: false,
      dialogDelete: false,
      nuevoRegistro:{},
      headers: [
        { text: 'Código', align: 'center', value: 'descripcion',},
        { text: 'Descripción', value: 'unidad_tributaria', align:'center' },
        { text: 'Tipo', value: 'tipo', align:'center' },
        { text: 'Aplica', value: 'aplica', align:'center' },
        { text: '', value: 'actions', sortable: false, align:'center' },
      ],
      tasaData: [],

      defaultItem: {
        descripcion: '',
        unidad_tributaria: '',
        tipo:'',
        aplica:'',
      },
    }
  },
  head() {
    const title = 'Tasa / Multa';
    return {
      title,
    }
  },

  mounted(){
    this.getTasa()
  },

  methods: {
    getTasa() {
      this.$axios.$get('tasamulta').then(response => {
          this.tasaData = response
        }).catch(err => {
          console.log(err)
        })
    },

    createTasa(){
      this.$axios.$post('tasamulta/', this.nuevoRegistro).then(res => {
          console.log(res.data)
          this.nuevoRegistro = {}
          this.tasaData.push(res)
          this.$alert("success", {desc: "Se ha creado una nueva tasa/multa con éxito", hash: 'knsddcssdc', title:'Creación de tasa/multa'})        
        }).catch(err => {
          console.log(err)
        })

        this.dialog = false
    },  

    editItem(item){
      console.log(item)
      this.dialog_editar = true
      this.defaultItem.id = item.id
      this.defaultItem.descripcion = item.descripcion
      this.defaultItem.unidad_tributaria = item.unidad_tributaria
      this.defaultItem.tipo = item.tipo
      this.defaultItem.aplica = item.aplica
    },

    saveData(){
      const formData = new FormData()
      formData.append('descripcion', this.defaultItem.descripcion)
      formData.append('unidad_tributaria', this.defaultItem.unidad_tributaria)
      formData.append('tipo', this.defaultItem.tipo)
      formData.append('aplica', this.defaultItem.aplica)

      this.$axios.$patch('tasamulta/'+ this.defaultItem.id + '/', formData).then((res) => {
        console.log(res.data)
        this.$alert("success", {desc: "Se ha editado una tasa/multa con éxito", hash: 'knsddcssdc', title:'Edición de tasa/multa'})        
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
      this.$axios.$delete('tasamulta/'+ this.defaultItem.id + '/').then((res) => {
        console.log(res.data)
        this.dialogDelete = false
        this.$alert("success", {desc: "Se ha eliminado una tasa/multa con éxito", hash: 'knsddcssdc', title:'Eliminación de tasa/multa'})        
      }).catch((err) => {
        console.log(err)
      });
    },
  }
};
</script>

<style src="~/assets/styles/pages/tasa-multa.scss" lang="scss" />