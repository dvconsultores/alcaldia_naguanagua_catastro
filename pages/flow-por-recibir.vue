<template>
  <div class="center no-padding divcol" style="margin-bottom:20px; padding-left: 256px;">
    <section class="section1-modificar-datos">
      <div class="modificar-datos-container">
        <div class="title-morado">
          <p class="modificar-datos-title">
            Documentos por Recibir
          </p>


        </div>

        <div class="data-table-container">
          <v-text-field v-model="search" append-icon="mdi-magnify" label="Buscar" hide-details
            class="input-data-table"></v-text-field>

          <v-data-table :headers="headers" :items="flujoData" :items-per-page="10" :search="search" :footer-props="{
            itemsPerPageText: 'Items por página',
          }" sort-by="codigo" class="mytabla" mobile-breakpoint="840">
            <template v-slot:top>
              <v-toolbar flat class="toolbar-tabla">
                <v-dialog v-model="dialogDevuelve" max-width="500px">
                  <v-card id="dialog-eliminar-card">
                    <v-card-title class="center title">¿Devolver Documento?</v-card-title>
                      <span class="alerta-text" style="text-align:center;">El documento retornará a quien lo envio.</span>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn class="btn dialog-btn" text @click="saveDevuelve()">Si</v-btn>
                      <v-btn class="btn dialog-btn" text @click="dialogDevuelve = false"
                        style="background-color:#ED057E!important;">No</v-btn>
                      <v-spacer></v-spacer>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
                <v-dialog v-model="dialogRecibe" max-width="500px">
                  <v-card id="dialog-eliminar-card">
                    <v-card-title class="center title">¿Recibir Documento?</v-card-title>
                      <span class="alerta-text" style="text-align:center;">El documento se marcará como recibido y aparecerá en el buzon DOCUMENTOS POR PROCESAR.</span>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn class="btn dialog-btn" text @click="saveRecibe()">Si</v-btn>
                      <v-btn class="btn dialog-btn" text @click="dialogRecibe = false"
                        style="background-color:#ED057E!important;">No</v-btn>
                      <v-spacer></v-spacer>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </v-toolbar>
            </template>
            <template #[`item.actions1`]="{ item }">
              <v-btn class="btn-tabla" @click="openDevuelve(item)">
                Devolver
              </v-btn>
            </template>
            <template #[`item.actions2`]="{ item }">
              <v-btn class="btn-tabla" @click="openRecibe(item)">
                Recibir
              </v-btn>
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
  name: "flow-por-recibirPage",
  mixins: [computeds],
  data() {
    return {
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


    }
  },
  head() {
    const title = 'Documentos Por Recibir';
    return {
      title,
    }
  },

  mounted() {
    this.getFlujo()
  },

  methods: {

    getFlujo() {
      console.log('depto',this.permido.departamento)
      this.$axios.$get('flujodetalle/?tarea=1&departamento_recibe='+this.permido.departamento).then(response => {
        this.flujoData = response
      }).catch(err => {
        console.log(err)
      })
    },
    openDevuelve(item) {
      this.defaultItem = item
      this.dialogDevuelve = true
    },
    openRecibe(item) {
      this.defaultItem = item
      this.dialogRecibe = true
    },
    saveDevuelve() {
      const formData = new FormData()
      formData.append('departamento_recibe', this.defaultItem.departamento_envia)
      formData.append('tarea', 7)
      formData.append('estado', 0)
      this.$axios.$patch('flujodetalle/' + this.defaultItem.id + '/', formData).then((res) => {
        console.log(res.data)
        this.$alert("success", { desc: "Se ha devuelto el documento con éxito", hash: 'knsddcssdc', title: 'Devolución de Documento' })
        
        this.getFlujo()
        this.dialogDevuelve = false
      }).catch((err) => {
        console.log(err)
      });
    },
    saveRecibe() {
      const formData = new FormData()
      formData.append('estado', 2)
      formData.append('tarea', 3)
      formData.append('recibe_usuario',this.permido.user_id)
      this.$axios.$patch('flujodetalle/' + this.defaultItem.id + '/', formData).then((res) => {
        console.log(res.data)
        this.$alert("success", { desc: "Se ha recibido el documento con éxito", hash: 'knsddcssdc', title: 'Recepción de Documento' })
        this.getFlujo()
        this.dialogRecibe = false
      }).catch((err) => {
        console.log(err)
      });
    },
  }
};
</script>


<style src="~/assets/styles/pages/flow-por-recibir.scss" lang="scss" />