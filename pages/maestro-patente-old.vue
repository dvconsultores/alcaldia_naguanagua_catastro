<template>
  <div class="center no-padding divcol" style="margin-bottom:20px; padding-left: 256px;">
    <section class="section2-sector">
      <div class="datos-sectores-container">
        <div class="title-morado">
          <p class="datos-sectores-title">
            Patentes
          </p>
          <v-dialog v-model="dialog" max-width="1600px">
            <template v-slot:activator="{ on, attrs }">
              <v-btn class="btn-add-tabla" v-bind="attrs" v-on="on">
                +
              </v-btn>
            </template>
            <v-card id="dialog-editar-crear">
              <v-card-title>
                <span class="title">Crear Patente</span>
              </v-card-title>
              <hr>
              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="6" md="4">
                      <v-autocomplete v-model="nuevoRegistro.tipo_patente" label="Tipo Patente" class="input-dialog"
                        :items="tipo_patenteData" item-text="text" item-value="value"></v-autocomplete>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-autocomplete v-model="nuevoRegistro.inmueble" label="Inmueble" item-text="numero_expediente"
                        class="input-dialog" :items="inmuebleData" item-value="id" :filter="customFilterI">
                        <template #item="{ item }">
                          {{ item.numero_expediente }} - {{ item.direccion }}
                        </template>
                      </v-autocomplete>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-autocomplete v-model="nuevoRegistro.propietario" label="RIF Patente" item-text="numero_documento"
                        class="input-dialog" :items="propietarioData" item-value="id" :filter="customFilterP">
                        <template #item="{ item }">
                          {{ item.numero_documento }} - {{ item.nombre }}
                        </template>
                      </v-autocomplete>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="nuevoRegistro.numero_documento_representante" label="RIF Representante"
                        class="input-dialog"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="nuevoRegistro.nombre_representante" label="Nombre Representante"
                        class="input-dialog"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="nuevoRegistro.cargo_representante" label="Cargo Representante"
                        class="input-dialog"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="nuevoRegistro.telefono" label="Teléfono Representante"
                        class="input-dialog"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-autocomplete v-model="nuevoRegistro.periodo" label="Periodo Inscripción" class="input-dialog"
                        :items="periodoData" item-text="periodo" item-value="id"></v-autocomplete>
                    </v-col>

                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="nuevoRegistro.anio" label="Año Inscripción"
                        class="input-dialog"></v-text-field>
                    </v-col>

                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="nuevoRegistro.horario_desde" label="Horario Desde"
                        class="input-dialog"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="nuevoRegistro.horario_hasta" label="Horario Hasta"
                        class="input-dialog"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="nuevoRegistro.nro_inmuebles" label="Nro. Inmuebles"
                        class="input-dialog"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="nuevoRegistro.nro_solicitud" label="Nro. Solicitud"
                        class="input-dialog"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="nuevoRegistro.nro_tomo" label="Nro. Tomo"
                        class="input-dialog"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-autocomplete v-model="nuevoRegistro.habilitado" label="Estatus Patente" class="input-dialog"
                        :items="habiltadoData" item-text="text" item-value="value"></v-autocomplete>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn class="btn dialog-btn" @click="dialog = false">
                  Cancelar
                </v-btn>
                <v-btn class="btn dialog-btn" @click="createPatente()" style="background-color:#ED057E!important;">
                  Guardar
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>

          <v-dialog v-model="dialog_editar" max-width="1600px">
            <v-card id="dialog-editar-crear">
              <v-card-title>
                <span class="title">Editar patente</span>
              </v-card-title>

              <hr>

              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="6" md="4">
                      <v-autocomplete v-model="defaultItem.propietario" label="Propietario" class="input-dialog"
                        :items="propietarioData" item-text="nombre" item-value="id"></v-autocomplete>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="defaultItem.codigo" label="Código" class="input-dialog"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="defaultItem.descripcion" label="Descripción"
                        class="input-dialog"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-autocomplete v-model="defaultItem.clasificacion" label="Clasificación" class="input-dialog"
                        :items="defaultItem.clasificacion" item-text="clasificacion"></v-autocomplete>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="defaultItem.area" label="Área" class="input-dialog"></v-text-field>
                    </v-col>

                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="defaultItem.perimetro" label="Perímetro" class="input-dialog"></v-text-field>
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

          <v-data-table :headers="headers" :items="ae_patenteData" :items-per-page="10" :search="search" :footer-props="{
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
    <v-dialog v-model="dialogWait" hide-overlay persistent width="300">
      <v-card color="primary" dark>
        <v-card-text>
          Por favor espere!!!
          <v-progress-linear indeterminate color="white" class="mb-0"></v-progress-linear>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import computeds from '~/mixins/computeds'

export default {
  name: "Maestro-PatentePage",
  mixins: [computeds],
  data() {
    return {
      dialogWait : false,
      search: '',
      dialog: false,
      dialog_editar: false,
      dialogDelete: false,
      nuevoRegistro: {},
      headers: [
        { text: 'tipo', align: 'start', value: 'tipo_patente' },
        { text: 'numero', align: 'start', value: 'numero' },
        { text: 'Razon economica', align: 'start', value: 'propietario_nombre' },
        { text: 'RIF', align: 'start', value: 'propietario_numero' },
        { text: 'Documento representante', align: 'start', value: 'numero_documento_representante' },
        { text: 'nombre representante', align: 'start', value: 'nombre_representante' },
        { text: '', value: 'actions', sortable: false, align: 'center' },

      ],
      tipo_patenteData: [
        { text: 'Temporal', value: 'T' },
        { text: 'Definitiva', value: 'D' },
        { text: 'Genérica', value: 'G' },
      ],
      habiltadoData: [
        { text: 'Patente Activa', value: true },
        { text: 'Patente Suspendida', value: false },

      ],
      ae_patenteData: [],
      propietarioData: [],
      inmuebleData: [],

      defaultItem: {
        numero: '',
        propietario: '',
        tipo_patente: '',
        numero_documento_representante: '',
        nombre_representante: '',
        cargo_representante: '',
        telefono: '',
        periodo: '',
        anio: '',
        horario_desde: '',
        horario_hasta: '',
        nro_inmuebles: '',
        nro_solicitud: '',
        nro_tomo: '',
        inmueble: '',
      },
    }
  },
  head() {
    const title = 'Patente';
    return {
      title,
    }
  },

  async mounted() {
    this.dialogWait = true
    await this.getDataPatente()
    await this.getDataPropietario()
    //await this.getDataInmueble()
    await this.getDataPeriodo()
    this.dialogWait = false
  },

  methods: {
    customFilterP(item,queryText) {
    const searchText = `${item.nombre} - ${item.numero_documento}`.toLowerCase();
    return searchText.includes(queryText.toLowerCase());
    },
    customFilterI(item,queryText) {
    const searchText = `${item.numero_expediente} - ${item.direccion}`.toLowerCase();
    return searchText.includes(queryText.toLowerCase());
    },
    async getDataPeriodo() {
      try {
        const response = await this.$axios.$get('ic_periodo/?aplica=A');
        this.periodoData = response
      } catch (err) {
        console.log(err);
      }
    },

    async getDataPropietario() {
      try {
        const response = await this.$axios.$get('propietario')
        this.propietarioData = response
      } catch (err) {
        console.log(err);
      }
    },
    async getDataInmueble() {
      try {
        const response = await this.$axios.$get('inmueble')
        this.inmuebleData = response
      } catch (err) {
        console.log(err);
      }
    },
    async getDataPatente() {
      try {
        const response = await this.$axios.$get('ae_patente')
        this.ae_patenteData = response
      } catch (err) {
        console.log(err);
      }
    },
    async createPatente() {
      try {
        const res = await this.$axios.$post('ae_patente/', this.nuevoRegistro)
        console.log(res.data)
        this.nuevoRegistro = {}
        this.ae_patenteData.push(res)
        this.$alert("success", { desc: "Se ha creado una nueva patente con éxito", hash: 'knsddcssdc', title: 'Creación de Patente' })
      } catch (err) {
        console.log(err);
      }

      this.dialog = false
    },

    editItem(item) {
      console.log(item)
      this.defaultItem = item
    },

    async saveData() {
      const formData = new FormData()
      formData.append('codigo', this.defaultItem.codigo)
      formData.append('descripcion', this.defaultItem.descripcion)
      formData.append('ambito', this.defaultItem.ambito)
      formData.append('clasificacion', this.defaultItem.clasificacion)
      formData.append('area', this.defaultItem.area)
      formData.append('perimetro', this.defaultItem.perimetro)
      try {
        const res = await this.$axios.$patch('ae_patente/' + this.defaultItem.id + '/', formData)
        console.log(res.data)
        this.$alert("success", { desc: "Se ha editado una Patente con éxito", hash: 'knsddcssdc', title: 'Edición de patente' })
        const index = this.ae_patenteData.findIndex((item) => item.id === this.defaultItem.id);
        if (index !== -1) {
          this.$set(this.ae_patenteData, index, { ...this.defaultItem });
        }
      } catch (err) {
        console.log(err);
      }

      this.dialog_editar = false
    },

    openDelete(item) {
      this.defaultItem = item
      this.dialogDelete = true
    },

    deleteItem() {
      this.$axios.$delete('ae_patente/' + this.defaultItem.id + '/').then((res) => {
        console.log(res.data)
        this.dialogDelete = false
        this.$alert("success", { desc: "Se ha eliminado una Patente con éxito", hash: 'knsddcssdc', title: 'Eliminación de patente' })
        const index = this.ae_patenteData.findIndex((item) => item.id === this.defaultItem.id);
        if (index !== -1) {
          this.ae_patenteData.splice(index, 1);
        }
      }).catch((err) => {
        console.log(err)
      });
    },
  }
};
</script>

<style src="~/assets/styles/pages/maestro-patente.scss" lang="scss" />