<template>
  <div class="center no-padding divcol" style="margin-bottom:20px; padding-left: 256px;">
    <section class="section1-documentos-pendientes">
      <div class="documentos-faltante-container">
        <div class="title-morado">
          <p class="documentos-faltante-title">
            Documentos Faltantes
          </p>
        </div>

        <v-card class="card-checkbox">
          <span class="span-float">Documentos</span>
          <v-checkbox class="custom-checkbox" v-model="cedula_checkbox" label="Cédula de Indentidad"></v-checkbox>
          <v-checkbox class="custom-checkbox"  v-model="documento_checkbox" label="Documentos de Propiedad"></v-checkbox>
        </v-card>

        <div class="textarea-div">
          <span class="span-float">
            Observaciones
          </span>
          <v-textarea
          class="textarea"
          ></v-textarea>
        </div>
      </div>

      <div>
        <v-btn class="btn btn-mobile" @click="dialog_confirmar = true">
          Guardar
        </v-btn>
      </div>
    </section>

    <!-- DIALOG -->

    <v-dialog content-class="dialog-confirmar" max-width="500px" v-model="dialog_confirmar" persistent>
      <v-card id="dialog-eliminar-card">
        <v-card-title class="center title">¿Desea guardar este registro?</v-card-title>
        <span class="alerta-text">Esta acción no se puede revertir</span>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn class="btn dialog-btn" text @click="dialog_confirmar = false">Si</v-btn>
          <v-btn class="btn dialog-btn" text @click="dialog_confirmar = false" style="background-color:#ED057E!important;">No</v-btn>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import computeds from '~/mixins/computeds'

export default {
  name: "actualizar-documentos-pendientesPage",
  mixins: [computeds],
  data() {
    return {  
      cedula_checkbox: false,
      documento_checkbox: false,  
      dialog_confirmar: false,
    }
  },
  head() {
    const title = 'Actualizar Documentos Pendientes';
    return {
      title,
    }
  },

  mounted(){

  },

  methods: {

  }
};
</script>

<style src="~/assets/styles/pages/actualizar-documentos-pendientes.scss" lang="scss" />