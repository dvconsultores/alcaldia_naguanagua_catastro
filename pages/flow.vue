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


          <v-timeline align="start">
            <v-timeline-item
              v-for="(item, i) in flujoData"
              :key="i"
              :dot-color="blue"
              :icon="mdi-star"
              fill-dot
            >
              <v-card>
                <v-card-title >
                  Lorem Ipsum Dolor
                </v-card-title>
                <v-card-text>
                  <p>Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.</p>
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


<style src="~/assets/styles/pages/modificar-datos.scss" lang="scss" />