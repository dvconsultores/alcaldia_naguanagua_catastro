<template>
  <div class="center no-padding divcol" style="margin-bottom:20px; padding-left: 256px;">
    <section class="section1-modificar-datos">
      <div class="modificar-datos-container">
        <div class="title-morado">
          <p class="modificar-datos-title">
             Flujo del Proceso
          </p>


        </div>

        <div class="data-table-container">
          <v-text-field v-model="search" append-icon="mdi-magnify" label="Buscar" hide-details
            class="input-data-table"></v-text-field>


          <v-timeline align="start"
              align-top
              :dense="$vuetify.breakpoint.smAndDown">
            <v-timeline-item
              v-for="(item, i) in flujoData"
              :key="i"
              :dot-color="blue"
              :icon="mdi-star"
              fill-dot
            >
              <v-card>
                
                <v-card-title >
                  {{item.id}} {{item.departamento_envia}}
                </v-card-title>
                <v-card-text>
                  <v-row>
                    <v-col>
                      <v-card
                        class="pa-2"
                        outlined
                        tile
                      >
                      Estado; {{item.estado_display}}
                      </v-card>
                    </v-col>
                    <v-col>
                      <v-card
                        class="pa-2"
                        outlined
                        tile
                      >
                      Tarea: {{item.tarea_display}}
                      </v-card>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col>
                      <v-card
                        class="pa-2"
                        outlined
                        tile
                      >
                      Envia; {{item.departamento_envia}}
                      </v-card>
                    </v-col>
                    <v-col>
                      <v-card
                        class="pa-2"
                        outlined
                        tile
                      >
                      Recibe: {{item.departamento_recibe}}
                      </v-card>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col>
                      <v-card
                        class="pa-2"
                        outlined
                        tile
                      >
                      El usuario {{item.envia_usuario_nombre}} envio la solicitud el dia {{item.envia_fecha}} 
                      </v-card>
                    </v-col>
                    <v-col>
                      <v-card
                        class="pa-2"
                        outlined
                        tile
                      >
                      El usuario {{item.recibe_usuario_nombre}} recibio la solicitud el dia {{item.recibe_fecha}} 
                      </v-card>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col>
                      <v-card
                        class="pa-2"
                        outlined
                        tile
                      >
                      Observacion: {{item.observaciones}} 
                      </v-card>
                    </v-col>
                  </v-row>
                  <v-btn
                    color="blue"
                    variant="outlined"
                  >
                    Button
                  </v-btn>
                </v-card-text>
              </v-card>
            </v-timeline-item>
          </v-timeline>




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
      this.$axios.$get('flujodetalle').then(response => {
        this.flujoData = response
      }).catch(err => {
        console.log(err)
      })
    },
  }
};
</script>


<style src="~/assets/styles/pages/flow.scss" lang="scss" />