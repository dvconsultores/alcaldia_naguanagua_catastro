<template>
  <div class="center no-padding divcol" style="margin-bottom:20px; padding-left: 256px;">
    <section class="section1-moneda">
      <div class="datos-moneda-container">
        <div class="title-morado">
          <p class="datos-moneda-title">
            Moneda
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
                <span class="title">Crear moneda</span>
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
                      <v-checkbox
                        v-model="nuevoRegistro.habilitado"
                        label="Marque esta casilla para habilitar este registro"
                        class="input-dialog-checkbox"
                        style="margin-top: 4px;"
                      ></v-checkbox>
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
                  @click="createMoneda()"
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
                <span class="title">Editar moneda</span>
              </v-card-title>

              <hr>

              <v-card-text>
                <v-container>
                  <v-row class="center">
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="defaultItem.descripcion"
                        label="Descripción"
                        class="input-dialog"
                        disabled
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12" sm="6" md="4">
                      <v-checkbox
                        v-model="defaultItem.habilitado"
                        label="Desmarque esta casilla para deshabilitar este registro"
                        class="input-dialog-checkbox"
                        style="margin-top: 4px;"
                      ></v-checkbox>
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
            :items="monedaData"
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
  name: "monedaPage",
  mixins: [computeds],
  data() {
    return {  
      search: '',
      dialog: false,
      dialog_editar: false,
      dialogDelete: false,
      nuevoRegistro:{},
      headers: [
        { text: 'Descripción', align: 'center', value: 'descripcion',},
        { text: 'Estatus', value: 'habilitado', align:'center' },
        { text: '', value: 'actions', sortable: false, align:'center' },
      ],
      monedaData: [],

      defaultItem: {
        descripcion: '',
        habilitado:'',
      },
    }
  },
  head() {
    const title = 'Moneda';
    return {
      title,
    }
  },

  mounted(){
    this.getMoneda()
  },

  methods: {
    getMoneda() {
      this.$axios.$get('moneda').then(response => {
          this.monedaData = response
        }).catch(err => {
          console.log(err)
        })
    },

    createMoneda(){
      this.$axios.$post('moneda/', this.nuevoRegistro).then(res => {
          console.log(res.data)
          this.nuevoRegistro = {}
          this.monedaData.push(res)
          this.$alert("success", {desc: "Se ha creado una nueva moneda con éxito", hash: 'knsddcssdc', title:'Creación de moneda'})        
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
      this.defaultItem.habilitado = item.habilitado
    },

    saveData(){
      const formData = new FormData()
      formData.append('descripcion', this.defaultItem.descripcion)
      formData.append('habilitado', this.defaultItem.habilitado)


      this.$axios.$patch('moneda/'+ this.defaultItem.id + '/', formData).then((res) => {
        console.log(res.data)
        this.$alert("success", {desc: "Se ha editado una moneda con éxito", hash: 'knsddcssdc', title:'Edición de moneda'}) 
        const index = this.monedaData.findIndex((item) => item.id === this.defaultItem.id);
        if (index !== -1) {
          this.$set(this.monedaData, index, { ...this.defaultItem });
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
      this.$axios.$delete('moneda/'+ this.defaultItem.id + '/').then((res) => {
        console.log(res.data)
        this.dialogDelete = false
        this.$alert("success", {desc: "Se ha eliminado una moneda con éxito", hash: 'knsddcssdc', title:'Eliminación de moneda'})
        const index = this.monedaData.findIndex((item) => item.id === this.defaultItem.id);
        if (index !== -1) {
          this.monedaData.splice(index, 1);
        }         
      }).catch((err) => {
        console.log(err)
      });
    },
  }
};
</script>

<style src="~/assets/styles/pages/moneda.scss" lang="scss" />