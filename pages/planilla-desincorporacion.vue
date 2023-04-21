<template>
  <div class="center no-padding divcol" style="margin-bottom:20px; padding-left: 256px;">
    <section class="section1-planilla">
      <div class="planilla-container">
        <p class="title-planilla">
          Desincorporación de inmueble (Planilla)
        </p>

        <hr>

        <div class="textfield-search-container">
          <v-text-field
          class="inputs-consulta"
          label="Nro. Expediente"
          ></v-text-field>

          <v-dialog v-model="dialog_exito" persistent class="dialog-exito">
            <template #activator="{attrs, on}">
              <v-btn class="btn-buscar" v-bind="attrs" v-on="on">
                Generar planilla
              </v-btn>
            </template>
            <v-card class="card-dialog-exito">
              <v-icon @click="dialog_exito = false">mdi-close</v-icon>
              <p class="p-dialog">¡Planilla generada con éxito!</p>
            </v-card>
          </v-dialog>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import computeds from '~/mixins/computeds'

export default{
  name: "DesincorporacionInmueblePlanillaPage",
  mixins:[computeds],
  data(){
    return{
      dialog_exito:false,
    }
  },

  head() {
    const title = 'Desincorporacion Inmueble planilla';
    return {
      title,
    }
  },

  methods: {
   
  }
}

</script>


<style src="~/assets/styles/pages/planilla-desincorporacion.scss" lang="scss" />