<template>
  <div class="center no-padding divcol" style="margin-bottom:20px; padding-left: 256px;">
    <section class="section1-actualizar-ubicacion-parcela">
      <div class="actualizar-ubicacion-parcela-container">
        <div class="title-morado">
          <p class="actualizar-ubicacion-parcela-title">
            Linderos
          </p>
        </div>
        <div class="div-card pt-8 wrap" style="flex-direction: column;">
          <v-row>
            <v-col md="6" sm="12">
              <v-text-field
              class="input-middle"
              label="Norte"
              ></v-text-field> 
            </v-col>

            <v-col md="6" sm="12">
              <v-text-field
              class="input-middle"
              label="Sur"
              ></v-text-field>  
            </v-col>
          </v-row>
          <v-row>
            <v-col md="6" sm="12">
              <v-text-field
              class="input-middle"
              label="Este"
              ></v-text-field> 
            </v-col>

            <v-col md="6" sm="12">
              <v-text-field
              class="input-middle"
              label="Oeste"
              ></v-text-field>  
            </v-col>
          </v-row>
        </div>
      </div>

      <div class="actualizar-ubicacion-parcela-container">
        <div class="title-morado">
          <p class="actualizar-ubicacion-parcela-title">
            Imagen del Inmueble
          </p>
        </div>
        <div class="div-card mt-8">
          <v-row>
            <v-col md="6" sm="12">
              <div style="width: 100%;">
                <v-card class="card-image-upload">
                  <span class="span-float">
                    Imagen - Inmueble 1
                  </span>
                  <span class="span-float-2">
                    Arrastre y suelte el archivo aquí
                  </span>
                  <v-file-input
                  class="input-file"
                  prepend-icon="none"
                  ></v-file-input>
                </v-card>

                <div class="file-btn">
                  <v-file-input placeholder="Seleccione el archivo" class="file-input"></v-file-input>
                  <v-btn>
                    <span>Subir</span>
                  </v-btn>
                </div>
              </div>
            </v-col>

            <v-col md="6" sm="12">
              <div style="width: 100%;">
                <v-card class="card-image-upload">
                  <span class="span-float">
                    Imagen - Inmueble 2
                  </span>
                  <span class="span-float-2">
                    Arrastre y suelte el archivo aquí
                  </span>
                  <v-file-input
                  class="input-file"
                  prepend-icon="none"
                  ></v-file-input>
                </v-card>

                <div class="file-btn">
                  <v-file-input placeholder="Seleccione el archivo" class="file-input"></v-file-input>
                  <v-btn>
                    <span>Subir</span>
                  </v-btn>
                </div>
              </div>
            </v-col>
          </v-row>
        </div>
      </div>

      <div class="actualizar-ubicacion-parcela-container">
        <div class="title-morado">
          <p class="actualizar-ubicacion-parcela-title">
            Imagen del Plano de Mesura
          </p>
        </div>
        <div class="div-card mt-8">
          <v-row>
            <v-col md="6" sm="12">
              <div style="width: 100%;">
                <v-card class="card-image-upload">
                  <span class="span-float">
                    Imagen - Plano de Mesura 1
                  </span>
                  <span class="span-float-2">
                    Arrastre y suelte el archivo aquí
                  </span>
                  <v-file-input
                  class="input-file"
                  prepend-icon="none"
                  ></v-file-input>
                </v-card>

                <div class="file-btn">
                  <v-file-input placeholder="Seleccione el archivo" class="file-input"></v-file-input>
                  <v-btn>
                    <span>Subir</span>
                  </v-btn>
                </div>
              </div>
            </v-col>

            <v-col md="6" sm="12">
              <div style="width: 100%;">
                <v-card class="card-image-upload">
                  <span class="span-float">
                    Imagen - Plano de Mesura 2
                  </span>
                  <span class="span-float-2">
                    Arrastre y suelte el archivo aquí
                  </span>
                  <v-file-input
                  class="input-file"
                  prepend-icon="none"
                  ></v-file-input>
                </v-card>

                <div class="file-btn">
                  <v-file-input placeholder="Seleccione el archivo" class="file-input"></v-file-input>
                  <v-btn>
                    <span>Subir</span>
                  </v-btn>
                </div>
              </div>
            </v-col>
          </v-row>
        </div>
      </div>

      <div class="actualizar-ubicacion-parcela-container">
        <div class="title-morado">
          <p class="actualizar-ubicacion-parcela-title">
            Datos de las Coordenadas
          </p>
        </div>
        <div class="div-card pt-8 wrap" style="flex-direction: column;">
          <v-row class="mt-3 mb-3" v-for="(item,index) in dataCoordenadas" :key="index">
            <v-col md="6" sm="12" style="position: relative;">
              <span class="span-float">
                {{ item.number }} Grupo
              </span>
              <v-text-field
              class="input-middle outlined"
              label="Norte (m)"
              ></v-text-field> 
            </v-col>

            <v-col md="6" sm="12">
              <v-text-field
              class="input-middle"
              label="Este (m)"
              ></v-text-field>  
            </v-col>
          </v-row>
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
  name: "actualizar-terrenoPage",
  mixins: [computeds],
  data() {
    return {  
      dialog_confirmar: false,

      dataCoordenadas:[
        { number:"1er"},
        { number:"2do"},
        { number:"3er"},
        { number:"4to"},
        { number:"5to"},
        { number:"6to"},
        { number:"7mo"},
        { number:"8vo"},
        { number:"9no"},
        { number:"10mo"},
      ]
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

<style src="~/assets/styles/pages/actualizacion-ubicacion-parcela.scss" lang="scss" />