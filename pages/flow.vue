<template>
  <div class="center no-padding divcol" style="margin-bottom:20px; padding-left: 256px;">
    <section class="section1-modificar-datos">
      <div class="modificar-datos-container">
        <div class="title-morado">
          <p class="modificar-datos-title">
            Fujos
          </p>

          <v-dialog v-model="dialog_editar" content-class="dialog-flow" fullscreen scrollable>
            <div class="div-dialog">
              <v-card class="dialog-flow-container">
              <v-card-title>
                <span class="title">Flujo Solicitud #{{ this.flujoId }}</span>
              </v-card-title>
              <v-timeline align-top :dense="$vuetify.breakpoint.smAndDown">
                <v-timeline-item v-for="(item, i) in flujoData" :key="i" color="var(--primary)" fill-dot>
                  <v-card class="card-flow">
                    <v-card-title class="title-flow">
                      Paso {{ i+1 }} - {{ item.departamento_recibe }}
                    </v-card-title>
                    <v-card-text>
                      <v-row>
                        <v-col>
                          <v-card class="pa-2 card-descripcion-timeline" outlined tile>
                            <span class="span-radius-background">Estado</span>
                            <span class="span-desc-flow">{{ item.estado_display }}</span>
                          </v-card>
                        </v-col>
                        <v-col>
                          <v-card class="pa-2 card-descripcion-timeline" outlined tile>
                            <span class="span-radius-background">Tarea</span>
                            <span class="span-desc-flow">{{ item.tarea_display }}</span>
                          </v-card>
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col>
                          <v-card class="pa-4 card-descripcion-timeline" outlined tile>
                            <span class="span-radius-background">Envía</span>
                            <span class="span-desc-flow">{{ item.departamento_envia }}</span>
                          </v-card>
                        </v-col>
                        <v-col>
                          <v-card class="pa-2 card-descripcion-timeline" outlined tile>
                            <span class="span-radius-background">Recibe</span>
                            <span class="span-desc-flow">{{ item.departamento_recibe }}</span>
                          </v-card>
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col>
                          <v-card class="pa-2 card-descripcion-timeline" outlined tile>
                            <span class="span-desc-flow">Estado El usuario {{ item.envia_usuario_nombre }} envió la solicitud el dia {{ item.envia_fecha }}</span>
                          </v-card>
                        </v-col>
                        <v-col>
                          <v-card class="pa-2 card-descripcion-timeline" outlined tile>
                            <span class="span-desc-flow">Estado El usuario {{ item.recibe_usuario_nombre }} recibió la solicitud el dia {{ item.recibe_fecha }}</span>
                          </v-card>
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col>
                          <v-card class="pa-2 card-descripcion-timeline" outlined tile>
                            <span class="span-desc-flow">Estado Observación: {{ item.observaciones }}</span>
                          </v-card>
                        </v-col>
                      </v-row>
                      <!--v-btn color="blue" variant="outlined">
                        Button
                      </v-btn-->
                    </v-card-text>
                  </v-card>
                </v-timeline-item>
              </v-timeline>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn class="btn dialog-btn" @click="dialog_editar = false">
                  Salir
                </v-btn>
              </v-card-actions>
              </v-card>
            </div>
          </v-dialog>
        </div>

        <div class="data-table-container">
          <v-text-field v-model="search" append-icon="mdi-magnify" label="Buscar" hide-details
            class="input-data-table"></v-text-field>

          <v-data-table :headers="headers" :items="propietarioData" :items-per-page="10" :search="search" :footer-props="{
            itemsPerPageText: 'Items por página',
          }" sort-by="codigo" class="mytabla" mobile-breakpoint="840">
            <template v-slot:top>
              <v-toolbar flat class="toolbar-tabla">

              </v-toolbar>
            </template>
            <template #[`item.actions`]="{ item }">
              <v-btn class="btn-tabla" @click="editItem(item)">
                Ver Flujo
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
  name: "flowPage",
  mixins: [computeds],
  data() {
    return {
      search: '',
      dialog_editar: false,
      headers: [
        { text: 'Solicitud', align: 'center', value: 'id', },
        { text: 'Tipo', value: 'pagoestadocuenta.liquidacion.tipoflujo.descripcion', align: 'center' },
        { text: 'Expediente', value: 'expediente', align: 'center' },
        { text: 'Propietario', value: 'pagoestadocuenta.liquidacion.propietario.nombre', align: 'center' },
        { text: 'Estado', value: 'estado_display', align: 'center' },
        { text: 'Fecha', value: 'fecha', align: 'center' },
        { text: '', value: 'actions', sortable: false, align: 'center' },
      ],
      flujoData: [],
      propietarioData: [],
      flujoId: null,
    }
  },
  head() {
    const title = 'Flujos';
    return {
      title,
    }
  },

  mounted() {
    this.getContribuyente()
  },

  methods: {

    getContribuyente() {
      this.$axios.$get('flujo/').then(response => {
        this.propietarioData = response
      }).catch(err => {
        console.log(err)
      })
    },
    getFlujo(item) {
      this.$axios.$get('flujodetalle?flujo=' + item).then(response => {
        this.flujoData = response
      }).catch(err => {
        console.log(err)
      })
    },

    editItem(item) {
      this.flujoId=item.id
      this.dialog_editar = true
      this.getFlujo(item.id)
    },

  }
};
</script>


<style src="~/assets/styles/pages/flow.scss" lang="scss" />