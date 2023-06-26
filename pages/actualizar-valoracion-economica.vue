<template>
  <div class="center no-padding divcol" style="margin-bottom:20px; padding-left: 256px;">
    <section class="section1-actualizar-valoracion-economica">
      <div class="actualizar-valoracion-economica-container">
        <div class="title-morado">
          <p class="actualizar-valoracion-economica-title">
            Datos del Terreno
          </p>
        </div>
        <div class="div-card pt-8 wrap" style="flex-direction: column;">
          <v-row>
            <v-col lg="3" md="12" class="pl-0 pr-0 divrow aend divcolmobile">
              <v-text-field
              class="input-small outlined"
              label="Área (m2)"
              ></v-text-field> 

              <v-autocomplete
              class="input-small outlined"
              label="Tipología"
              ></v-autocomplete>  
            </v-col>

            <v-col lg="3" md="12" class="pl-0 pr-0 divrow aend divcolmobile">
              <v-autocomplete
              class="input-small"
              label="Fines Fiscales"
              ></v-autocomplete>  

              <v-text-field
              class="input-small outlined"
              label="Valor Unitario Bs/m2"
              ></v-text-field> 
            </v-col>

            <v-col lg="3" md="12" class="pl-0 pr-0">
              <v-card class="border-card-title-top">
                <span class="span-float">
                  Factor de Ajuste
                </span>

                <v-text-field
                class="input-date"
                label="Área (m2)"
                ></v-text-field>

                <v-autocomplete
                class="input-date"
                label="Forma"
                ></v-autocomplete>
              </v-card>
            </v-col>

            <v-col lg="3" md="12" class="pl-0 pr-0 divrow aend divcolmobile">
              <v-text-field
              class="input-small"
              label="Valor Ajustado Bs/m2"
              ></v-text-field> 

              <v-text-field
              class="input-small outlined"
              label="Valor Total"
              ></v-text-field> 
            </v-col>
          </v-row>
        </div>
      </div>

      <div class="actualizar-valoracion-economica-container">
        <div class="title-morado">
          <p class="actualizar-valoracion-economica-title">
            Datos de la Construcción
          </p>
        </div>
        <div class="div-card pt-8 wrap" style="flex-direction: column;">
          <v-row>
            <v-col lg="7" class="divrow pr-0">
              <v-text-field
              class="input-small outlined"
              label="Tipología"
              readonly
              ></v-text-field>

              <v-text-field
              class="input-small outlined"
              label="Fecha Compra"
              readonly
              ></v-text-field>

              <v-text-field
              class="input-small outlined"
              label="Trimestre"
              readonly
              ></v-text-field>

              <v-text-field
              class="input-small outlined"
              label="Año"
              readonly
              ></v-text-field>

              <v-text-field
              class="input-small outlined"
              label="Área (m2)"
              readonly
              ></v-text-field> 
            </v-col>

            <v-col lg="5" class="divrow pl-0">
              <v-text-field
              class="input-small"
              label="Valor Bs/m2"
              readonly
              ></v-text-field> 

              <v-text-field
              class="input-small"
              label="Depreciación %"
              readonly
              ></v-text-field> 

              <v-text-field
              class="input-small"
              label="Valor Actual Bs"
              readonly
              ></v-text-field> 

              <v-btn class="btn-delete">
                <v-icon>
                  mdi-delete
                </v-icon>
              </v-btn>
            </v-col>
          </v-row>

          <v-row>
            <v-col md="2">
              <v-text-field
              class="input-small outlined"
              label="Área Total"
              ></v-text-field>
            </v-col>

            <v-col md="5">
              <v-text-field
              class="input-small outlined"
              label="Valor Total Bs - Construcción"
              ></v-text-field>
            </v-col>

            <v-col md="5">
              <v-text-field
              class="input-small outlined"
              label="Valor Total Bs - Inmueble"
              ></v-text-field>
            </v-col>
          </v-row>
          
          <hr>

          <v-row class="mt-3">
            <v-col lg="5" class="divrow aend pr-0">
              <v-autocomplete
              class="input-small outlined"
              label="Tipología"
              ></v-autocomplete> 

              <v-text-field
              class="input-small outlined"
              label="Área (m2)"
              ></v-text-field>  

              <v-text-field
              class="input-small"
              label="Valor Bs/m2"
              ></v-text-field>  

              <v-autocomplete
              class="input-small"
              label="Tipología"
              ></v-autocomplete> 
            </v-col>

            <v-col lg="3" class="pl-1 pr-1">
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

            <v-col lg="4" class="divrow aend pl-1">
              <v-text-field
              class="input-small"
              label="Trimestre"
              ></v-text-field>

              <v-text-field
              class="input-small"
              label="Año"
              ></v-text-field>

              <v-btn class="btn-delete">
                <v-icon>
                  mdi-plus
                </v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </div>
      </div>

      <div class="observaciones-container">
        <div class="jspace center" style="width: 100%; margin-bottom: 0px;">
          <p class="title-observaciones">
            Observaciones
          </p>

          <v-btn class="btn-mas" v-if="show_observaciones != true" @click="show_observaciones = true">
            +
          </v-btn>

          <v-btn class="btn-mas" v-if="show_observaciones === true " @click="show_observaciones = false">
            -
          </v-btn>
        </div>

        <hr>

        <div v-if="show_observaciones === true" class="center" style="width: 100%; margin-bottom: 30px;">
          <v-textarea
          class="textarea"
          v-model="observaciones"
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
  name: "actualizar-valoracion-economicaPage",
  mixins: [computeds],
  data() {
    return {  
      dialog_confirmar: false,
      show_observaciones: false,
    }
  },
  head() {
    const title = 'Actualizar Valoracion Economica';
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

<style src="~/assets/styles/pages/actualizar-valoracion-economica.scss" lang="scss" />