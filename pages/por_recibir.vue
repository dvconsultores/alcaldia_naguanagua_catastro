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
                      <v-btn class="btn dialog-btn" text @click="StoreContribuyenteId()">Si</v-btn>
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
                      <v-btn class="btn dialog-btn" text @click="StoreContribuyenteId()">Si</v-btn>
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
  name: "por_recibirPage",
  mixins: [computeds],
  data() {
    return {
      permido: JSON.parse(JSON.stringify(this.$store.getters.getUser)),
      search: '',
      dialogRecibe: false,
      dialogDevuelve: false,
      headers: [
        { text: '# Solicitud', align: 'center', value: 'flujo', },
        { text: '# Expediente', value: 'expediente', align: 'center' },
        { text: 'Propietario', value: 'propietario_nombre', align: 'center' },
        { text: 'Fecha Solicitud', value: 'flujo_fecha', align: 'center' },
        { text: '', value: 'actions1', sortable: false, align: 'center' },
        { text: '', value: 'actions2', sortable: false, align: 'center' },
      ],
      flujoData: [],

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
      this.$axios.$get('flujodetalle/?estado=1&recibe_usuario='+this.permido.user_id).then(response => {
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

    StoreContribuyenteId() {
      //console.log(this.defaultItem)
      this.$store.getters.getContribuyente== undefined ? console.log('vacio') : console.log(this.$store.getters.getContribuyente)
      this.$store.dispatch('storeContribuyente', this.defaultItem)
      this.dialogSelecciona = false
    },
  }
};
</script>


<style src="~/assets/styles/pages/modificar-datos.scss" lang="scss" />