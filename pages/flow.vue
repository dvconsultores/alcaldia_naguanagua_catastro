<template>
  <div class="center no-padding divcol" style="margin-bottom:20px; padding-left: 256px;">
    <section class="section1-flow">
      <div class="modificar-datos-container">
        <div class="title-morado">
          <p class="modificar-datos-title">
            Flujos
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

          <div>
            <v-text-field v-model="search" append-icon="mdi-magnify" label="Buscar FLUJO por número de expediente"
              hide-details class="input-data-table" @keyup.enter="getFlow"></v-text-field>
            <!--v-btn @click="getInmueble" color="primary">Buscar INMUEBLE</v-btn-->
          </div>

          <v-data-table :loading="dialogWait" :headers="headers" :items="CabeceraFlujoData" :items-per-page="10" :search="search" :footer-props="{
            itemsPerPageText: 'Items por página',
          }" sort-by="id" sort-desc class="mytabla" mobile-breakpoint="840">
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
  name: "flowPage",
  mixins: [computeds],
  data() {
    return {
      dialogWait : false,
      search: '',
      dialog_editar: false,
      headers: [
        { text: 'Solicitud', align: 'center', value: 'id', },
        { text: 'Tipo', value: 'descripcion_flujo', align: 'center' },
        { text: 'Expediente', value: 'expediente', align: 'center' },
        { text: 'Propietario', value: 'nombre_propietario', align: 'center' },
        { text: 'Estado', value: 'estado_display', align: 'center' },
        { text: 'Fecha', value: 'fecha', align: 'center' },
        { text: '', value: 'actions', sortable: false, align: 'center' },
      ],
      flujoData: [],
      CabeceraFlujoData: [],
      flujoId: null,
    }
  },
  head() {
    const title = 'Flujos';
    return {
      title,
    }
  },

  async mounted() {
    //await this.getFlow();
  },

  methods: {
    async getFlow() {
      this.inmuebleData = []
      this.numeroDocumento = this.search
      if (this.search.trim() == '') {
        this.$alert("cancel", { desc: "Debe colocar un número de expediente válido.", hash: 'knsddcssdc', title: 'Advertencia' })

      }else{
        try {
          this.dialogWait = true
          const response = await this.$axios.$get(`filtrar_flujos/?numero_expediente=${this.numeroDocumento}`)
          if (response.length>0){
            this.CabeceraFlujoData = response
            this.dialogWait = false
          }else{
            this.dialogWait = false
            this.$alert("cancel", { desc: "No se encontraron expedientes.", hash: 'knsddcssdc', title: 'Advertencia' })
          }
        } catch (err) {
          console.log(err);
        }
      }
    },

    async getFlujo(item) { 
      this.dialogWait = true;
      try {
        const response = await this.$axios.$get('flujodetalle?flujo=' + item);
        this.flujoData = response
        this.flujoData.sort((a, b) => a.id - b.id);
        console.log('this.flujoData)',this.flujoData)
      } catch (err) {
        console.log(err); 
      }
      this.dialogWait = false;
    },
    async editItem(item) {
      this.flujoId=item.id
      this.dialog_editar = true
      await this.getFlujo(item.id)
    },

  }
};
</script>


<style src="~/assets/styles/pages/flow.scss" lang="scss" />