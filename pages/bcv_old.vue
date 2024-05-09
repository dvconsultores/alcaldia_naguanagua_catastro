<template>
  <div class="center no-padding divcol" style="margin-bottom:20px; padding-left: 256px;">
    <section class="section1-bcv">
      <div class="datos-bcv-container">
        <div class="title-morado">
          <p class="datos-bcv-title">
            Tasa BCV
          </p>

          <v-dialog v-model="dialog" max-width="1600px">
            <template v-slot:activator="{ on, attrs }">
              <v-btn class="btn-add-tabla" v-bind="attrs" v-on="on">
                +
              </v-btn>
            </template>
            <v-card id="dialog-editar-crear">
              <v-card-title>
                <span class="title">Crear Tasa BCV</span>
              </v-card-title>

              <hr>

              <v-card-text>
                <v-container>
                  <v-row class="center">
                    <v-col cols="12" sm="6" md="4">
                      <v-menu v-model="menu" :close-on-content-click="false" :nudge-right="5"
                        transition="scale-transition" offset-y min-width="auto">
                        <template #activator="{ on, attrs }">
                          <v-text-field v-model="nuevoRegistro.fecha" class="input-dialog" label="Fecha"
                            append-icon="mdi-calendar" readonly v-bind="attrs" v-on="on"></v-text-field>
                        </template>
                        <v-date-picker v-model="nuevoRegistro.fecha" label="Fecha" @input="formatoFecha()" color="blue"
                          header-color="#810880" class="custom-date-picker"></v-date-picker>
                      </v-menu>
                    </v-col>

                    <v-col cols="12" sm="6" md="4">
                      <v-menu v-model="menu2" :close-on-content-click="false" :nudge-right="5"
                        transition="scale-transition" offset-y min-width="auto">
                        <template #activator="{ on, attrs }">
                          <v-text-field v-model="nuevoRegistro.fecha_vigente" class="input-dialog" label="Fecha Vigente"
                            append-icon="mdi-calendar" readonly v-bind="attrs" v-on="on"></v-text-field>
                        </template>
                        <v-date-picker v-model="nuevoRegistro.fecha_vigente" label="Fecha"
                          @input="formatoFechaVigente()" color="blue" header-color="#810880"
                          class="custom-date-picker"></v-date-picker>
                      </v-menu>
                    </v-col>

                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="nuevoRegistro.monto" label="Monto" class="input-dialog"></v-text-field>
                    </v-col>

                    <v-col cols="12" sm="6" md="4">
                      <v-checkbox v-model="nuevoRegistro.habilitado"
                        label="Marque esta casilla para habilitar este registro"
                        class="input-dialog-checkbox"></v-checkbox>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn class="btn dialog-btn" @click="dialog = false">
                  Cancelar
                </v-btn>
                <v-btn class="btn dialog-btn" @click="createTasa()" style="background-color:#ED057E!important;">
                  Guardar
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>

          <v-dialog v-model="dialog_editar" max-width="1600px">
            <v-card id="dialog-editar-crear">
              <v-card-title>
                <span class="title">Editar Tasa BCV</span>
              </v-card-title>

              <hr>

              <v-card-text>
                <v-container>
                  <v-row class="center">
                    <v-col cols="12" sm="6" md="4">
                      <v-menu v-model="menu3" :close-on-content-click="false" :nudge-right="5"
                        transition="scale-transition" offset-y min-width="auto">
                        <template #activator="{ on, attrs }">
                          <v-text-field v-model="defaultItem.fecha" class="input-dialog" label="Fecha"
                            append-icon="mdi-calendar" readonly v-bind="attrs" v-on="on"></v-text-field>
                        </template>
                        <v-date-picker v-model="defaultItem.fecha" label="Fecha" @input="formatoFecha()" color="blue"
                          header-color="#810880" class="custom-date-picker"></v-date-picker>
                      </v-menu>
                    </v-col>

                    <v-col cols="12" sm="6" md="4">
                      <v-menu v-model="menu4" :close-on-content-click="false" :nudge-right="5"
                        transition="scale-transition" offset-y min-width="auto">
                        <template #activator="{ on, attrs }">
                          <v-text-field v-model="defaultItem.fecha_vigente" class="input-dialog" label="Fecha"
                            append-icon="mdi-calendar" readonly v-bind="attrs" v-on="on"></v-text-field>
                        </template>
                        <v-date-picker v-model="defaultItem.fecha_vigente" label="Fecha" @input="formatoFechaVigente()"
                          color="blue" header-color="#810880" class="custom-date-picker"></v-date-picker>
                      </v-menu>
                    </v-col>

                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="defaultItem.monto" label="Tipo" class="input-dialog"></v-text-field>
                    </v-col>

                    <v-col cols="12" sm="6" md="4">
                      <v-checkbox v-model="defaultItem.habilitado"
                        label="Marque esta casilla para habilitar este registro"
                        class="input-dialog-checkbox"></v-checkbox>
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

          <v-data-table :headers="headers" :items="bcvData" :items-per-page="10" :search="search" :footer-props="{
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
import moment from 'moment'

export default {
  name: "bcvPage",
  mixins: [computeds],
  data() {
    return {
      menu: false,
      menu2: false,
      menu3: false,
      menu4: false,
      search: '',
      dialog: false,
      dialog_editar: false,
      dialogDelete: false,
      nuevoRegistro: {},
      headers: [
        { text: 'Fecha', align: 'center', value: 'fecha', },
        { text: 'Fecha Vigente', value: 'fecha_vigente', align: 'center' },
        { text: 'Monto', value: 'monto', align: 'center' },
        { text: 'Estatus', value: 'habilitado', align: 'center' },
        { text: '', value: 'actions', sortable: false, align: 'center' },
      ],
      bcvData: [],

      defaultItem: {
        fecha: '',
        fecha_vigente: '',
        monto: '',
        habilitado: '',
      },
    }
  },
  head() {
    const title = 'BCV';
    return {
      title,
    }
  },

  mounted() {
    this.getBCV()
  },

  methods: {
    formatoFecha() {
      if (this.fecha) {
        this.fechaFormateada = moment(this.nuevaFecha).format('YYYY-MM-DD HH:mm:ss')
        this.fecha = this.fechaFormateada
      }
    },

    formatoFechaVigente() {
      if (this.fecha_vigente) {
        // Formatear la fecha utilizando moment.js
        this.fechaFormateadaVigente = moment(this.nuevaFechaVigente).format('YYYY-MM-DD HH:mm:ss')
        // Asignar la fecha formateada al campo "fecha"
        this.fecha_vigente = this.fechaFormateadaVigente
      }
    },

    getBCV() {
      this.$axios.$get('tasabcv').then(response => {
        this.bcvData = response
      }).catch(err => {
        console.log(err)
      })
    },

    createTasa() {
      this.$axios.$post('tasabcv/', this.nuevoRegistro).then(res => {
        console.log(res.data)
        this.nuevoRegistro = {}
        this.bcvData.push(res)
        this.$alert("success", { desc: "Se ha creado una nueva tasa con éxito", hash: 'knsddcssdc', title: 'Creación de tasa' })
      }).catch(err => {
        console.log(err)
      })

      this.dialog = false
    },

    editItem(item) {
      console.log(item)
      this.dialog_editar = true
      this.defaultItem.id = item.id
      this.defaultItem.fecha = item.fecha
      this.defaultItem.fecha_vigente = item.fecha_vigente
      this.defaultItem.monto = item.monto
      this.defaultItem.habilitado = item.habilitado
    },

    saveData() {
      const formData = new FormData()
      formData.append('fecha', this.defaultItem.fecha)
      formData.append('vigente', this.defaultItem.fecha_vigente)
      formData.append('monto', this.defaultItem.monto)
      formData.append('habilitado', this.defaultItem.habilitado)


      this.$axios.$patch('tasabcv/' + this.defaultItem.id + '/', formData).then((res) => {
        console.log(res.data)
        this.$alert("success", { desc: "Se ha editado una tasa con éxito", hash: 'knsddcssdc', title: 'Edición de tasa' })
        const index = this.bcvData.findIndex((item) => item.id === this.defaultItem.id);
        if (index !== -1) {
          this.$set(this.bcvData, index, { ...this.defaultItem });
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
      this.$axios.$delete('tasabcv/' + this.defaultItem.id + '/').then((res) => {
        console.log(res.data)
        this.dialogDelete = false
        this.$alert("success", { desc: "Se ha eliminado una tasa con éxito", hash: 'knsddcssdc', title: 'Eliminación de tasa' })
        const index = this.bcvData.findIndex((item) => item.id === this.defaultItem.id)
        if (index !== -1) {
          this.bcvData.splice(index, 1);
        }
      }).catch((err) => {
        console.log(err)
      });
    },
  }
};
</script>

<style src="~/assets/styles/pages/bcv.scss" lang="scss" />