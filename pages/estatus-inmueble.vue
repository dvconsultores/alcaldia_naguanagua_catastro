<template>
  <div class="center no-padding divcol" style="margin-bottom:20px; padding-left: 256px;">
    <section class="section1-ambito">
      <div class="datos-ambito-container">
        <div class="title-morado">
          <p class="datos-ambito-title">
            Estatus de Inmueble
          </p>

          <v-dialog v-model="dialog" max-width="1600px">
            <template v-slot:activator="{ on, attrs }">
              <v-btn class="btn-add-tabla" v-bind="attrs" v-on="on">
                +
              </v-btn>
            </template>
            <v-card id="dialog-editar-crear">
              <v-card-title>
                <span class="title">Crear Nuevo Estatus de Inmueble</span>
              </v-card-title>

              <hr>

              <v-card-text>
                <v-container>
                  <v-row class="center">
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="nuevoRegistro.codigo" label="Código" class="input-dialog"></v-text-field>
                    </v-col>

                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="nuevoRegistro.descripcion" label="Descripción"
                        class="input-dialog"></v-text-field>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn class="btn dialog-btn" @click="dialog = false">
                  Cancelar
                </v-btn>
                <v-btn class="btn dialog-btn" @click="createData()" style="background-color:#ED057E!important;">
                  Guardar
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>

          <v-dialog v-model="dialog_editar" max-width="1600px">
            <v-card id="dialog-editar-crear">
              <v-card-title>
                <span class="title">Editar Estatus de Inmueble</span>
              </v-card-title>

              <hr>

              <v-card-text>
                <v-container>
                  <v-row class="center">
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="defaultItem.codigo" label="Código" class="input-dialog"></v-text-field>
                    </v-col>

                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="defaultItem.descripcion" label="Descripción"
                        class="input-dialog"></v-text-field>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn class="btn dialog-btn" @click="dialog_editar = false">
                  Cancelar
                </v-btn>

                <v-btn class="btn dialog-btn" @click="saveData()" style="background-color:#ED057E!important;">
                  Guardar
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </div>

        <div class="data-table-container">
          <v-text-field v-model="search" append-icon="mdi-magnify" label="Buscar" hide-details
            class="input-data-table"></v-text-field>

          <v-data-table :headers="headers" :items="estatusInmuebleData" :items-per-page="10" :search="search"
            :footer-props="{
            itemsPerPageText: 'Items por página',
          }" sort-by="codigo" class="mytabla" mobile-breakpoint="840">
            <template v-slot:top>
              <v-toolbar flat class="toolbar-tabla">
                <v-dialog v-model="dialogDelete" max-width="500px">
                  <v-card id="dialog-eliminar-card">
                    <v-card-title class="center title">¿Desea eliminarlo?</v-card-title>
                    <span class="alerta-text">Esta acción no se puede revertir</span>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn class="btn dialog-btn" text @click="deleteItem()">Si</v-btn>
                      <v-btn class="btn dialog-btn" text @click="dialogDelete = false"
                        style="background-color:#ED057E!important;">No</v-btn>
                      <v-spacer></v-spacer>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </v-toolbar>
            </template>
            <template #[`item.actions`]="{ item }">
              <v-icon color="#810880" big @click="editItem(item)">
                mdi-pencil
              </v-icon>
              <v-icon color="#810880" big @click="openDelete(item)">
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
  name: "EstatusInmueblePage",
  mixins: [computeds],
  data() {
    return {
      search: '',
      dialog: false,
      dialog_editar: false,
      dialogDelete: false,
      nuevoRegistro: {},
      headers: [
        { text: 'Codigo', align: 'center', value: 'codigo', },
        { text: 'Descripción', align: 'center', value: 'descripcion', },
        { text: '', value: 'actions', sortable: false, align: 'center' },
      ],
      estatusInmuebleData: [],

      defaultItem: {
        codigo: '',
        descripcion: '',
        id: '',
      },
    }
  },
  head() {
    const title = 'Estatus Inmueble';
    return {
      title,
    }
  },

  mounted() {
    this.getData()
  },

  methods: {
    getData() {
      this.$axios.$get('estatusinmueble').then(response => {
        this.estatusInmuebleData = response
      }).catch(err => {
        console.log(err)
      })
    },

    createData() {
      this.$axios.$post('estatusinmueble/', this.nuevoRegistro).then(res => {
        console.log(res.data)
        this.nuevoRegistro = {}
        this.estatusInmuebleData.push(res)
        this.$alert("success", { desc: "Se ha creado un nuevo estatus de inmueble con éxito", hash: 'knsddcssdc', title: 'Creado' })
      }).catch(err => {
        console.log(err)
      })

      this.dialog = false
    },

    editItem(item) {
      console.log(item)
      this.dialog_editar = true
      this.defaultItem.id = item.id
      this.defaultItem.codigo = item.codigo
      this.defaultItem.descripcion = item.descripcion
    },

    saveData() {
      const formData = new FormData()
      formData.append('codigo', this.defaultItem.codigo)
      formData.append('descripcion', this.defaultItem.descripcion)

      this.$axios.$patch('estatusinmueble/' + this.defaultItem.id + '/', formData).then((res) => {
        console.log(res.data)
        this.$alert("success", { desc: "Se ha editado un estatus de inmueble con éxito", hash: 'knsddcssdc', title: 'Editado' })
        const index = this.estatusInmuebleData.findIndex((item) => item.id === this.defaultItem.id);
        if (index !== -1) {
          this.$set(this.estatusInmuebleData, index, { ...this.defaultItem });
        }
      }).catch((err) => {
        console.log(err)
      });

      this.dialog_editar = false
    },

    openDelete(item) {
      this.defaultItem = item
      this.dialogDelete = true
    },

    deleteItem() {
      this.$axios.$delete('estatusinmueble/' + this.defaultItem.id + '/').then((res) => {
        console.log(res.data)
        this.dialogDelete = false
        this.$alert("success", { desc: "Se ha eliminado un estatus de inmueble con éxito", hash: 'knsddcssdc', title: 'Eliminado' })
        const index = this.estatusInmuebleData.findIndex((item) => item.id === this.defaultItem.id);
        if (index !== -1) {
          this.estatusInmuebleData.splice(index, 1);
        }
      }).catch((err) => {
        console.log(err)
      });
    },
  }
};
</script>

<style src="~/assets/styles/pages/ambito.scss" lang="scss" />