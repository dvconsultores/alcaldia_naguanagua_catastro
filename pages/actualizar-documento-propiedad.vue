<template>
  <div class="center no-padding divcol" style="margin-bottom:20px; padding-left: 256px;">
    <section class="section1-actualizar-documento">
      <div class="actualizar-documento-container">
        <div class="title-morado">
          <p class="actualizar-documento-title">
            Datos del Documento de Propiedad
          </p>
        </div>

        <div class="divrow center div50">
          <v-autocomplete
          class="input-50"
          label="Tipo de Documento"
          ></v-autocomplete>

          <v-autocomplete
          class="input-50"
          label="Tipo Especial"
          ></v-autocomplete>
        </div>

        <div class="div-card">
          <v-card class="border-card-title-top">
            <span class="span-float">
              Fecha Habitabilidad  <sup class="bold">*</sup>
            </span>

            <v-autocomplete
            class="input-date"
            label="Dia"
            ></v-autocomplete>

            <v-autocomplete
            class="input-date"
            label="Mes"
            ></v-autocomplete>

            <v-autocomplete
            class="input-date"
            label="Año"
            ></v-autocomplete>
          </v-card>

          <v-row class="center pt-3 pl-3 pr-3">
            <v-autocomplete
            class="input-middle"
            label="Tipo Tenencia"
            ></v-autocomplete>
          </v-row>

          <v-card class="border-card-title-top">
            <span class="span-float">
              Vigecia Hasta  <sup class="bold">*</sup>
            </span>

            <v-autocomplete
            class="input-date"
            label="Dia"
            ></v-autocomplete>

            <v-autocomplete
            class="input-date"
            label="Mes"
            ></v-autocomplete>

            <v-autocomplete
            class="input-date"
            label="Año"
            ></v-autocomplete>
          </v-card>
        </div>
      </div>

      <div class="actualizar-documento-container">
        <div class="title-morado">
          <p class="actualizar-documento-title">
            Datos del Documento
          </p>
        </div>
        <div class="div-card pt-8">
          <v-card class="border-card-title-top">
            <span class="span-float">
              Fecha Habitabilidad  <sup class="bold">*</sup>
            </span>

            <v-autocomplete
            class="input-date"
            label="Dia"
            ></v-autocomplete>

            <v-autocomplete
            class="input-date"
            label="Mes"
            ></v-autocomplete>

            <v-autocomplete
            class="input-date"
            label="Año"
            ></v-autocomplete>
          </v-card>

          <v-row class="center pt-3 pl-3 pr-3">
            <v-text-field
            class="input-300"
            label="Nro. de Documento"
            ></v-text-field>
          </v-row>

          <v-row class="center mt-0 pt-0 pl-3 pr-3">
            <v-text-field
            class="input-300"
            label="Matricula"
            ></v-text-field>
          </v-row>

          <v-row class="center mt-0 pt-0 pl-3 pr-3">
            <v-text-field
            class="input-300"
            label="Año del Folio Real"
            ></v-text-field>
          </v-row>
        </div>
      </div>

      <div class="actualizar-documento-container">
        <div class="title-morado">
          <p class="actualizar-documento-title">
            Datos del Terreno
          </p>
        </div>
        <div class="div-card pt-8 wrap">
          <v-row>
            <v-col cols="3" style="min-width: 280px;">
              <v-card class="border-card-title-top">
                <span class="span-float">
                  Fecha Habitabilidad  <sup class="bold">*</sup>
                </span>

                <v-autocomplete
                class="input-date"
                label="Dia"
                ></v-autocomplete>

                <v-autocomplete
                class="input-date"
                label="Mes"
                ></v-autocomplete>

                <v-autocomplete
                class="input-date"
                label="Año"
                ></v-autocomplete>
              </v-card>
            </v-col>

            <v-col cols="3">
              <v-text-field
              class="input-300"
              label="Nro. de Documento"
              ></v-text-field>  
            </v-col>

            <v-col cols="3">
              <v-text-field
              class="input-300"
              label="Folios"
              ></v-text-field>
            </v-col>

            <v-col cols="3">
              <v-text-field
              class="input-300"
              label="Protocolo"
              ></v-text-field>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="6">
              <v-text-field class="input-middle" label="Tomo"></v-text-field>
            </v-col>

            <v-col cols="3">
              <v-text-field class="input-300" label="Tomo"></v-text-field>
            </v-col>

            <v-col cols="3">
              <v-text-field class="input-300" label="Tomo"></v-text-field>
            </v-col>
          </v-row>
        </div>
      </div>

      <div class="actualizar-documento-container">
        <div class="title-morado">
          <p class="actualizar-documento-title">
            Datos del Construccion
          </p>
        </div>
        <div class="div-card pt-8 wrap">
          <v-row>
            <v-col cols="3" style="min-width: 280px;">
              <v-card class="border-card-title-top">
                <span class="span-float">
                  Fecha Habitabilidad  <sup class="bold">*</sup>
                </span>

                <v-autocomplete
                class="input-date"
                label="Dia"
                ></v-autocomplete>

                <v-autocomplete
                class="input-date"
                label="Mes"
                ></v-autocomplete>

                <v-autocomplete
                class="input-date"
                label="Año"
                ></v-autocomplete>
              </v-card>
            </v-col>

            <v-col cols="3">
              <v-text-field
              class="input-300"
              label="Nro. de Documento"
              ></v-text-field>  
            </v-col>

            <v-col cols="3">
              <v-text-field
              class="input-300"
              label="Folios"
              ></v-text-field>
            </v-col>

            <v-col cols="3">
              <v-text-field
              class="input-300"
              label="Protocolo"
              ></v-text-field>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="6">
              <v-text-field class="input-middle" label="Tomo"></v-text-field>
            </v-col>

            <v-col cols="3">
              <v-text-field class="input-300" label="Tomo"></v-text-field>
            </v-col>

            <v-col cols="3">
              <v-text-field class="input-300" label="Tomo"></v-text-field>
            </v-col>
          </v-row>
        </div>
      </div>

      <div class="actualizar-documento-container">
        <div class="title-morado">
          <p class="actualizar-documento-title">
            Linderos
          </p>
        </div>
        <div class="div-card pt-8 wrap" style="flex-direction: column;">
          <v-row>
            <v-col cols="6">
              <v-text-field
              class="input-middle"
              label="Norte"
              ></v-text-field> 
            </v-col>

            <v-col cols="6">
              <v-text-field
              class="input-middle"
              label="Sur"
              ></v-text-field>  
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="6">
              <v-text-field
              class="input-middle"
              label="Este"
              ></v-text-field> 
            </v-col>

            <v-col cols="6">
              <v-text-field
              class="input-middle"
              label="Oeste"
              ></v-text-field>  
            </v-col>
          </v-row>
        </div>
      </div>

      <div class="center" @click="dialog_confirmar = true">
        <v-btn class="btn btn-mobile">
          Guardar
        </v-btn>
      </div>
    </section>

    <!-- DIALOG -->

    <v-dialog content-class="dialog-guardar" max-width="500px" v-model="dialog_confirmar" persistent>
      <v-card class="guardar-card">
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
  name: "actualizar-terrenoPage",
  mixins: [computeds],
  data() {
    return {  
      dialog_confirmar: false,

    }
  },
  head() {
    const title = 'Actualizar Terreno';
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

<style src="~/assets/styles/pages/actualizar-documento-propiedad.scss" lang="scss" />