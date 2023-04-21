<template>
  <div class="center no-padding divcol" style="margin-bottom:20px; padding-left: 256px;">
    <section class="section1-cedula">
      <div class="cedula-container">
        <p class="title-cedula">
          Consultar Expediente
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
                Buscar
              </v-btn>
            </template>
            <v-card class="card-dialog-exito">
              <v-icon @click="dialog_exito = false">mdi-close</v-icon>
              <p class="p-dialog">Archivo generado con éxito!</p>
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
  name: "CedulaCatastralPage",
  mixins:[computeds],
  data(){
    return{
      dialog_exito: false,
    }
  },

  head() {
    const title = 'Cedula Catastral';
    return {
      title,
    }
  },

  methods: {

  }
}

</script>


<style src="~/assets/styles/pages/cedula-catastral.scss" lang="scss" />