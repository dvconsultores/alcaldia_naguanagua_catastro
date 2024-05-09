<template>
  <div class="center no-padding divcol" style="margin-bottom:20px; padding-left: 256px;">
    <section class="section1-ambito">
      <div class="datos-ambito-container">
        <div class="title-morado">
          <p class="datos-ambito-title">
            Edificio o Centros Comerciales
          </p>

          <v-dialog v-model="dialog" max-width="1600px">
            <template v-slot:activator="{ on, attrs }">
              <v-btn v-if="accesos.escribir" class="btn-add-tabla" v-bind="attrs" v-on="on">
                +
              </v-btn>
            </template>
            <v-card id="dialog-editar-crear">
              <v-card-title>
                <span class="title">Crear Edificio</span>
              </v-card-title>
              <hr>
              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="6" md="4">
                      <v-autocomplete v-model="nuevoRegistro.ambito" label="Ambito" class="input-dialog"
                        :items="ambitoData" item-text="descripcion" item-value="id"></v-autocomplete>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-autocomplete v-model="nuevoRegistro.sector" label="Sector" class="input-dialog"
                        :items="sectoresData" item-text="descripcion" item-value="id"></v-autocomplete>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-autocomplete v-model="nuevoRegistro.urbanizacion" label="Urbanización/Barrio"
                        class="input-dialog" :items="urbanizacionData" item-text="nombre"
                        item-value="id"></v-autocomplete>
                    </v-col>


                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="nuevoRegistro.nombre" label="Edificio" class="input-dialog"></v-text-field>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn class="btn dialog-btn" @click="dialog = false">
                  Cancelar
                </v-btn>
                <v-btn class="btn dialog-btn" @click="createEdificio()" style="background-color:#ED057E!important;">
                  Guardar
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>

          <v-dialog v-model="dialog_editar" max-width="1600px">
            <v-card id="dialog-editar-crear">
              <v-card-title>
                <span class="title">Editar Edificio</span>
              </v-card-title>

              <hr>

              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="6" md="4">
                      <v-autocomplete v-model="defaultItem.ambito" label="Ambito" class="input-dialog"
                        :items="ambitoData" item-text="descripcion" item-value="id"></v-autocomplete>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-autocomplete v-model="defaultItem.sector" label="Sector" class="input-dialog"
                        :items="sectoresData" item-text="descripcion" item-value="id"></v-autocomplete>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-autocomplete v-model="defaultItem.urbanizacion" label="Urbanización/Barrio"
                        class="input-dialog" :items="urbanizacionData" item-text="nombre"
                        item-value="id"></v-autocomplete>
                    </v-col>


                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="defaultItem.nombre" label="Edificio" class="input-dialog"></v-text-field>
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

          <v-data-table :headers="headers" :items="edificiosData" :items-per-page="10" :search="search" :footer-props="{
            itemsPerPageText: 'Items por página',
          }" sort-by="nombre" class="mytabla" mobile-breakpoint="840">
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
              <v-icon v-if="accesos.actualizar" color="#810880" big @click="editItem(item)">
                mdi-pencil
              </v-icon>
              <v-icon v-if="accesos.borrar" color="#810880" big @click="openDelete(item)">
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
  name: "EdificioPage",
  mixins: [computeds],
  data() {
    return {
      search: '',
      dialog: false,
      dialog_editar: false,
      dialogDelete: false,
      nuevoRegistro: {},
      headers: [
        { text: 'Ambito', align: 'center', value: 'descripcion_ambito', },
        { text: 'Sector', value: 'descripcion_sector', align: 'center' },
        { text: 'Urbanización/Barrio', value: 'nombre_urbanizacion', align: 'center' },
        { text: 'Edificio', value: 'nombre', align: 'center' },
        { text: '', value: 'actions', sortable: false, align: 'center' },
      ],

      edificiosData: [],
      sectoresData: [],
      ambitoData: [],
      urbanizacionData: [],

      defaultItem: {
        ambito: '',
        sector: '',
        urbanizacion: '',
        nombre: '',
      },
      permido: JSON.parse(JSON.stringify(this.$store.getters.getUser.permisos)),
      accesos: {},
    }
  },
  head() {
    const title = 'Edificio';
    return {
      title,
    }
  },

  mounted() {
    this.permisos()
    this.getDataSector()
    this.getDataAmbito()
    this.getDataUrbanizacion()
    this.getDataEdificio()

  },

  methods: {
    permisos() {
      /********************************************************************************************************
        Validar si este modulo esta dentro de modulos con accceso desde la variable this.$store.getters.getUser
      ******************************************************************************************************* */
      const longitud = this.$options.name.length;
      this.modulo = this.$options.name.substring(0, longitud - 4).toLowerCase();
      // esto valida si este modulo esta dentro de la lista de permitidos segun el modelo de permisos
      console.log('permiso: 1 si , 0 no:', this.permido.filter(permido => permido.modulo.toLowerCase().includes(this.modulo)).length);
      if (this.permido.filter(permido => permido.modulo.toLowerCase().includes(this.modulo)).length) {
        console.log('leer:', (this.permido.filter(permido => permido.modulo.toLowerCase().includes(this.modulo)))[0].leer);
        this.accesos = (this.permido.filter(permido => permido.modulo.toLowerCase().includes(this.modulo)))[0]
      } else {
        this.$router.push('index')
        this.$alert("cancel", { desc: "No está autorizado para accesar a este módulo!!!", hash: 'knsddcssdc', title: 'Error' })
      }
    },
    getDataEdificio() {
      this.$axios.$get('edificio').then(response => {
        this.edificiosData = response
      }).catch(err => {
        console.log(err)
      })
    },


    getDataUrbanizacion() {
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

    createEdificio() {
      this.$axios.$post('edificio/', this.nuevoRegistro).then(res => {
        console.log(res.data)
        this.nuevoRegistro = {}
        this.edificiosData.push(res)
        this.$alert("success", { desc: "Se ha creado un nuevo edificio con éxito", hash: 'knsddcssdc', title: 'Creación de edificio' })
      }).catch(err => {
        console.log(err)
      })

      this.dialog = false
    },

    editItem(item) {
      console.log(item)
      this.dialog_editar = true
      this.defaultItem.id = item.id
      this.defaultItem.ambito = item.ambito
      this.defaultItem.sector = item.sector
      this.defaultItem.urbanizacion = item.urbanizacion
      this.defaultItem.nombre = item.nombre
    },

    saveData() {
      const formData = new FormData()
      formData.append('ambito', this.defaultItem.ambito)
      formData.append('sector', this.defaultItem.sector)
      formData.append('urbanizacion', this.defaultItem.urbanizacion)
      formData.append('nombre', this.defaultItem.nombre)

      this.$axios.$patch('edificio/' + this.defaultItem.id + '/', formData).then((res) => {
        console.log(res.data)
        this.$alert("success", { desc: "Se ha editado un edificio con éxito", hash: 'knsddcssdc', title: 'Edición de edificio' })
        this.getDataEdificio()
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
      this.$axios.$delete('edificio/' + this.defaultItem.id + '/').then((res) => {
        console.log(res.data)
        this.dialogDelete = false
        this.$alert("success", { desc: "Se ha eliminado un edificio con éxito", hash: 'knsddcssdc', title: 'Eliminación de edificio' })
        this.getDataEdificio()
      }).catch((err) => {
        console.log(err)
      });
    },
  }
};
</script>

<style src="~/assets/styles/pages/ambito.scss" lang="scss" />