<template>
  <div class="center no-padding divcol" style="margin-bottom:20px; padding-left: 256px;">
    <section class="section1-ambito">
      <div class="datos-ambito-container">
        <div class="title-morado">
          <p class="datos-ambito-title">
            Ambito
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
                <span class="title">Crear Ambito</span>
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
                        v-model="codigo"
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
                        v-model="descripcion"
                        label="Descripción"
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
                  @click="createAmbito()"
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
                <span class="title">Editar Ambito</span>
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
                        v-model="defaultItem.codigo"
                        label="Ambito"
                        class="input-dialog"
                        disabled
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
            :items="ambitoData"
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
  name: "AmbitoPage",
  mixins: [computeds],
  data() {
    return {  
      search: '',
      dialog: false,
      dialog_editar: false,
      dialogDelete: false,
      headers: [
        { text: 'Código', align: 'center', value: 'codigo',},
        { text: 'Descripción', value: 'descripcion', align:'center' },
        { text: '', value: 'actions', sortable: false, align:'center' },
      ],
      ambitoData: [],

      defaultItem: {
        codigo: '',
        descripcion: '',
        id:'',
      },
    }
  },
  head() {
    const title = 'Ambito';
    return {
      title,
    }
  },

  mounted(){
    this.getAmbito()
  },

  methods: {
    getAmbito() {
      this.$axios.$get('ambito').then(response => {
          this.ambitoData = response
        }).catch(err => {
          console.log(err)
        })
    },

    createAmbito(){
      const data = {
        codigo: this.codigo,
        descripcion: this.descripcion,
      }
      this.$axios.$post('ambito/', data).then(res => {
          console.log(res.data)
          this.codigo =''
          this.descripcion =''
          this.ambitoData.push(res)
          this.$alert("success", {desc: "Se ha creado un nuevo ambito con éxito", hash: 'knsddcssdc', title:'Creación de Ambito'})        
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
    },

    saveData(){
      const formData = new FormData()
      formData.append('codigo', this.defaultItem.codigo)
      formData.append('descripcion', this.defaultItem.descripcion)

      this.$axios.$patch('ambito/'+ this.defaultItem.id + '/', formData).then((res) => {
        console.log(res.data)
        this.$alert("success", {desc: "Se ha editado un ambito con éxito", hash: 'knsddcssdc', title:'Edición de Ambito'}) 
        const index = this.ambitoData.findIndex((item) => item.id === this.defaultItem.id);
        if (index !== -1) {
          this.$set(this.ambitoData, index, { ...this.defaultItem });
        }          
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
      this.$axios.$delete('ambito/'+ this.defaultItem.id + '/').then((res) => {
        console.log(res.data)
        this.dialogDelete = false
        this.$alert("success", {desc: "Se ha eliminado un ambito con éxito", hash: 'knsddcssdc', title:'Eliminación de Ambito'})  
        const index = this.ambitoData.findIndex((item) => item.id === this.defaultItem.id);
        if (index !== -1) {
          this.ambitoData.splice(index, 1);
        }          
      }).catch((err) => {
        console.log(err)
      });
    },
  }
};
</script>

<style src="~/assets/styles/pages/ambito.scss" lang="scss" />