<template>
  <div class="center no-padding divcol" style="margin-bottom:20px; padding-left: 256px;">
    <section class="section1-flow-recibir">
      <div class="modificar-datos-container">
        <div class="title-morado">
          <p class="modificar-datos-title">
            Documentos por Recibir
          </p>
        </div>
        <div class="data-table-container">
          <v-text-field v-model="search" append-icon="mdi-magnify" label="Buscar" hide-details
            class="input-data-table"></v-text-field>
          <v-data-table v-model="selectedLiq" :loading="dialogWait" :headers="headers" :items="flujoData"
            :items-per-page="10" :search="search" :footer-props="{
            itemsPerPageText: 'Items por página',
          }" sort-by="id" sort-desc class="mytabla" mobile-breakpoint="840" show-select>
            <template v-slot:top>
              <v-toolbar flat class="toolbar-tabla">
                <v-dialog v-model="dialogDevuelve" max-width="500px">
                  <v-card id="dialog-eliminar-card">
                    <v-card-title class="center title">¿Devolver Documento?</v-card-title>
                    <span class="alerta-text" style="text-align:center;">El documento retornará a quien lo envio.</span>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn :disabled="disableBoton" class="btn dialog-btn" text @click="saveDevuelve()">Si</v-btn>
                      <v-btn :disabled="disableBoton" class="btn dialog-btn" text @click="dialogDevuelve = false"
                        style="background-color:#ED057E!important;">No</v-btn>
                      <v-spacer></v-spacer>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
                <v-dialog v-model="dialogRecibe" max-width="500px">
                  <v-card id="dialog-eliminar-card">
                    <v-card-title class="center title">¿Recibir Documento?</v-card-title>
                    <span class="alerta-text" style="text-align:center;">El documento se marcará como recibido y
                      aparecerá en el buzon DOCUMENTOS POR PROCESAR.</span>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn :disabled="disableBoton" class="btn dialog-btn" text @click="saveRecibe()">Si</v-btn>
                      <v-btn :disabled="disableBoton" class="btn dialog-btn" text @click="dialogRecibe = false"
                        style="background-color:#ED057E!important;">No</v-btn>
                      <v-spacer></v-spacer>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </v-toolbar>
            </template>
            <template #[`item.actions1`]="{ item }">
              <v-btn :disabled="selectedLiq.indexOf(item) === -1" class="btn-tabla" @click="openDevuelve(item)">
                Devolver
              </v-btn>
            </template>
            <template #[`item.actions2`]="{ item }">
              <v-btn :disabled="selectedLiq.indexOf(item) === -1" class="btn-tabla" @click="openRecibe(item)">
                Recibir
              </v-btn>
            </template>
          </v-data-table>
        </div>
      </div>
    </section>
    <!--v-dialog v-model="dialogWait" hide-overlay persistent width="300">
      <v-card color="primary" dark>
        <v-card-text>
          Por favor espere!!!
          <v-progress-linear indeterminate color="white" class="mb-0"></v-progress-linear>
        </v-card-text>
      </v-card>
    </v-dialog-->
  </div>
</template>

<script>
import computeds from '~/mixins/computeds'

export default {
  name: "flow-por-recibirPage",
  mixins: [computeds],
  data() {
    return {
      disableBoton: false,
      dialogWait: true,
      permido: JSON.parse(JSON.stringify(this.$store.getters.getUser)),
      search: '',
      dialogRecibe: false,
      dialogDevuelve: false,
      headers: [
        { text: 'Solicitud', align: 'center', value: 'flujo', },
        { text: 'Expediente', value: 'expediente', align: 'center' },
        { text: 'Operación', value: 'tipoflujo_descripcion', align: 'center' },
        { text: 'Propietario', value: 'propietario_nombre', align: 'center' },
        { text: 'Fecha Solicitud', value: 'flujo_fecha', align: 'center' },
        { text: 'Estado', value: 'estado_display', align: 'center' },
        { text: '', value: 'actions1', sortable: false, align: 'center' },
        { text: '', value: 'actions2', sortable: false, align: 'center' },
      ],
      flujoData: [],
      defaultItem: [],
      selectedLiq: [],
    }
  },
  head() {
    const title = 'Documentos Por Recibir';
    return {
      title,
    }
  },

  async mounted() {
    await this.CargaDatos();
  },

  methods: {
    async CargaDatos() {
      await this.getFlujo()
    },

    async getFlujo() {
      this.dialogWait = true;
      console.log('depto', this.permido.departamento)
      try {
        const response = await this.$axios.$get('flujodetalle/?tarea=1&departamento_recibe=' + this.permido.departamento);
        this.flujoData = response
        console.log('this.flujoData)', this.flujoData)
      } catch (err) {
        console.log(err);
      }
      this.dialogWait = false;
    },
    openDevuelve(item) {
      this.defaultItem = item
      this.dialogDevuelve = true
    },
    openRecibe(item) {
      console.log('this.selectedLiq', this.selectedLiq)
      this.defaultItem = item
      this.dialogRecibe = true
    },
    async saveDevuelve() {
      this.disableBoton = true
      for (const divLiq of this.selectedLiq) {
        const formData = new FormData()
        formData.append('departamento_recibe', divLiq.departamento_envia)
        formData.append('tarea', 7)
        formData.append('estado', 0)
        try {
          const response = await this.$axios.$patch('flujodetalle/' + divLiq.id + '/', formData);
          console.log('flujodetalle)', response)
        } catch (err) {
          console.log(err);
        }
      }
      this.$alert("success", { desc: "Se ha devuelto el(los) documento(s) con éxito", hash: 'knsddcssdc', title: 'Devolución de Documento' })
      this.selectedLiq = []
      this.CargaDatos()
      this.dialogDevuelve = false
      this.disableBoton = false
    },
    async saveRecibe() {
      this.disableBoton = true
      for (const divLiq of this.selectedLiq) {
        const formData = new FormData()
        formData.append('estado', 2)
        formData.append('tarea', 3)
        formData.append('recibe_usuario', this.permido.user_id)
        try {
          const response = await this.$axios.$patch('flujodetalle/' + divLiq.id + '/', formData);
          console.log('flujodetalle)', response)
        } catch (err) {
          console.log(err);
        }
      }
      this.$alert("success", { desc: "Se ha recibido el(los) documento(s) con éxito", hash: 'knsddcssdc', title: 'Recepción de Documento' })
      this.selectedLiq = []
      this.CargaDatos()
      this.dialogRecibe = false
      this.disableBoton = false
    },
  }
};
</script>


<style src="~/assets/styles/pages/flow-por-recibir.scss" lang="scss" />