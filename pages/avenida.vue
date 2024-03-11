<template>
  <div class="center no-padding divcol" style="margin-bottom:20px; padding-left: 256px;">
    <section class="section1-avenida">
      <div class="datos-avenida-container">
        <div class="title-morado">
          <p class="datos-avenida-title">
            avenida
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
                <span class="title">Crear avenida</span>
              </v-card-title>

              <hr>

              <v-card-text>
                <v-container>
                  <v-row class="center">
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
                  @click="dialog = false"
                >
                  Cancelar
                </v-btn>
                <v-btn
                  class="btn dialog-btn"
                  @click="createAvenida()"
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
                <span class="title">Editar avenida</span>
              </v-card-title>

              <hr>

              <v-card-text>
                <v-container>
                  <v-row class="center">
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
            :items="avenidaData"
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
  name: "avenidaPage",
  mixins: [computeds],
  data() {
    return {  
      search: '',
      dialog: false,
      dialog_editar: false,
      dialogDelete: false,
      nuevoRegistro:{},
      headers: [
        { text: 'Descripción', value: 'nombre', align:'center' },
        { text: 'Tipo', value: 'tipo', align:'center' },
        { text: '', value: 'actions', sortable: false, align:'center' },
      ],
      avenidaData: [],
      itemsTipo: [
        { text: 'Una Via', value: '1' },
        { text: 'Doble Via', value: '2' },
        { text: 'Colateral', value: '3' },
        { text: 'Arterial', value: '4' },
      ],
      defaultItem: {
        nombre: '',
        tipo:'',
        id:'',
      },
    }
  },
  head() {
    const title = 'Avenida';
    return {
      title,
    }
  },

  mounted(){
    this.getAvenida()
  },

  methods: {
    getAvenida() {
      this.$axios.$get('avenida').then(response => {
          this.avenidaData = response
        }).catch(err => {
          console.log(err)
        })
    },

    createAvenida(){
      this.$axios.$post('avenida/', this.nuevoRegistro).then(res => {
          console.log(res.data)
          this.nuevoRegistro = {}
          this.avenidaData.push(res)
          this.$alert("success", {desc: "Se ha creado una nueva avenida con éxito", hash: 'knsddcssdc', title:'Creación de avenida'})        
        }).catch(err => {
          console.log(err)
        })

        this.dialog = false
    },  

    editItem(item){
      console.log(item)
      this.dialog_editar = true
      this.defaultItem.id = item.id
      this.defaultItem.nombre = item.nombre
      this.defaultItem.tipo = item.tipo
    },

    saveData(){
      const formData = new FormData()
      formData.append('nombre', this.defaultItem.nombre)
      formData.append('tipo', this.defaultItem.tipo)

      this.$axios.$patch('avenida/'+ this.defaultItem.id + '/', formData).then((res) => {
        console.log(res.data)
        this.$alert("success", {desc: "Se ha editado una avenida con éxito", hash: 'knsddcssdc', title:'Edición de avenida'}) 
        this.getAvenida()        
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
      this.$axios.$delete('avenida/'+ this.defaultItem.id + '/').then((res) => {
        console.log(res.data)
        this.dialogDelete = false
        this.$alert("success", {desc: "Se ha eliminado una avenida con éxito", hash: 'knsddcssdc', title:'Eliminación de avenida'})
        this.getAvenida()          
      }).catch((err) => {
        console.log(err)
      });
    },
  }
};
</script>

<style src="~/assets/styles/pages/avenida.scss" lang="scss" />