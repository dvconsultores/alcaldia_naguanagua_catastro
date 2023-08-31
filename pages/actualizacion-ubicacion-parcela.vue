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
              v-model="dataUbicacionInmueble.lindero_norte"
              class="input-middle"
              label="Norte"
              ></v-text-field> 
            </v-col>

            <v-col md="6" sm="12">
              <v-text-field
              v-model="dataUbicacionInmueble.lindero_sur"
              class="input-middle"
              label="Sur"
              ></v-text-field>  
            </v-col>
          </v-row>
          <v-row>
            <v-col md="6" sm="12">
              <v-text-field
              v-model="dataUbicacionInmueble.lindero_este"
              class="input-middle"
              label="Este"
              ></v-text-field> 
            </v-col>

            <v-col md="6" sm="12">
              <v-text-field
              v-model="dataUbicacionInmueble.lindero_oeste"
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
            <v-col cols="12">
              <div style="width: 100%;">
                <v-card class="card-image-upload">
                  <span class="span-float">
                    Imagen - Inmueble 1
                  </span>
                  <v-div
                  class="input-div"
                  prepend-icon="none"
                  >
                  <img v-if="dataUbicacionInmueble.imagen_inmueble" :src="dataUbicacionInmueble.imagen_inmueble" class="preview-image"/>
                  </v-div>
                </v-card>

                <div class="file-btn">
                  <v-file-input 
                  v-model="dataUbicacionInmueble.imagen_inmueble"
                  show-size
                  placeholder="Seleccione el archivo" class="file-input"
                  ></v-file-input>
                  <v-btn :loading="btnImagenInmueble" @click="uploadImageInmueble()">
                    <span>Subir</span>
                  </v-btn>
                </div>
              </div>
            </v-col>

            <!-- <v-col md="6" sm="12">
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
            </v-col> -->
          </v-row>
        </div>
      </div>

      <div class="actualizar-ubicacion-parcela-container">
        <div class="title-morado">
          <p class="actualizar-ubicacion-parcela-title">
            Imagen del Plano
          </p>
        </div>
        <div class="div-card mt-8">
          <v-row>
            <v-col cols="12">
              <div style="width: 100%;">
                <v-card class="card-image-upload">
                  <span class="span-float">
                    Imagen - Plano 1
                  </span>
                  <v-div
                  class="input-div"
                  prepend-icon="none"
                  >
                  <img v-if="dataUbicacionInmueble.imagen_plano" :src="dataUbicacionInmueble.imagen_plano" class="preview-image" alt="image"/>
                  </v-div>
                </v-card>

                <div class="file-btn">
                  <v-file-input 
                  v-model="dataUbicacionInmueble.imagen_plano"
                  show-size
                  placeholder="Seleccione el archivo" class="file-input"
                  accept="image/*"
                  ></v-file-input>
                  <v-btn :loading="btnImagenPlano" @click="uploadImagePlano()">
                    <span>Subir</span>
                  </v-btn>
                </div>
              </div>
            </v-col>

            <!-- <v-col md="6" sm="12">
              <div style="width: 100%;">
                <v-card class="card-image-upload">
                  <span class="span-float">
                    Imagen - Plano 2
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
            </v-col> -->
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
            <v-col cols="12">
              <div style="width: 100%;">
                <v-card class="card-image-upload">
                  <span class="span-float">
                    Imagen - Plano de Mesura 1
                  </span>
                  <v-div
                  class="input-div"
                  prepend-icon="none"
                  >
                  <img v-if="dataUbicacionInmueble.imagan_plano_mesura" :src="dataUbicacionInmueble.imagan_plano_mesura" class="preview-image">
                  </v-div>
                </v-card>

                <div class="file-btn">
                  <v-file-input 
                  v-model="dataUbicacionInmueble.imagan_plano_mesura"
                  show-size
                  placeholder="Seleccione el archivo" class="file-input"
                  accept="image/*"
                  ></v-file-input>
                  <v-btn :loading="btnImagenPlanoMesura" @click="uploadImagePlanoMesura()">
                    <span>Subir</span>
                  </v-btn>
                </div>
              </div>
            </v-col>

            <!-- <v-col md="6" sm="12">
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
            </v-col> -->
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
          <v-row class="mt-3 mb-3">
            <v-col md="6" sm="12" style="position: relative;">
              <span class="span-float">
                1er Grupo
              </span>
              <v-text-field
              v-model="dataUbicacionInmueble.g1_norte"
              class="input-middle outlined"
              label="Norte (m)"
              ></v-text-field> 
            </v-col>

            <v-col md="6" sm="12">
              <v-text-field
              v-model="dataUbicacionInmueble.g1_este"
              class="input-middle"
              label="Este (m)"
              ></v-text-field>  
            </v-col>
          </v-row>

          <v-row class="mt-3 mb-3">
            <v-col md="6" sm="12" style="position: relative;">
              <span class="span-float">
                2do Grupo
              </span>
              <v-text-field
              v-model="dataUbicacionInmueble.g2_norte"
              class="input-middle outlined"
              label="Norte (m)"
              ></v-text-field> 
            </v-col>

            <v-col md="6" sm="12">
              <v-text-field
              v-model="dataUbicacionInmueble.g2_este"
              class="input-middle"
              label="Este (m)"
              ></v-text-field>  
            </v-col>
          </v-row>

          <v-row class="mt-3 mb-3">
            <v-col md="6" sm="12" style="position: relative;">
              <span class="span-float">
                3er Grupo
              </span>
              <v-text-field
              v-model="dataUbicacionInmueble.g3_norte"
              class="input-middle outlined"
              label="Norte (m)"
              ></v-text-field> 
            </v-col>

            <v-col md="6" sm="12">
              <v-text-field
              v-model="dataUbicacionInmueble.g3_este"
              class="input-middle"
              label="Este (m)"
              ></v-text-field>  
            </v-col>
          </v-row>

          <v-row class="mt-3 mb-3">
            <v-col md="6" sm="12" style="position: relative;">
              <span class="span-float">
                4to Grupo
              </span>
              <v-text-field
              v-model="dataUbicacionInmueble.g4_norte"
              class="input-middle outlined"
              label="Norte (m)"
              ></v-text-field> 
            </v-col>

            <v-col md="6" sm="12">
              <v-text-field
              v-model="dataUbicacionInmueble.g4_este"
              class="input-middle"
              label="Este (m)"
              ></v-text-field>  
            </v-col>
          </v-row>

          <v-row class="mt-3 mb-3">
            <v-col md="6" sm="12" style="position: relative;">
              <span class="span-float">
                5to Grupo
              </span>
              <v-text-field
              v-model="dataUbicacionInmueble.g5_norte"
              class="input-middle outlined"
              label="Norte (m)"
              ></v-text-field> 
            </v-col>

            <v-col md="6" sm="12">
              <v-text-field
              v-model="dataUbicacionInmueble.g5_este"
              class="input-middle"
              label="Este (m)"
              ></v-text-field>  
            </v-col>
          </v-row>

          <v-row class="mt-3 mb-3">
            <v-col md="6" sm="12" style="position: relative;">
              <span class="span-float">
                6to Grupo
              </span>
              <v-text-field
              v-model="dataUbicacionInmueble.g6_norte"
              class="input-middle outlined"
              label="Norte (m)"
              ></v-text-field> 
            </v-col>

            <v-col md="6" sm="12">
              <v-text-field
              v-model="dataUbicacionInmueble.g6_este"
              class="input-middle"
              label="Este (m)"
              ></v-text-field>  
            </v-col>
          </v-row>

          <v-row class="mt-3 mb-3">
            <v-col md="6" sm="12" style="position: relative;">
              <span class="span-float">
                7mo Grupo
              </span>
              <v-text-field
              v-model="dataUbicacionInmueble.g7_norte"
              class="input-middle outlined"
              label="Norte (m)"
              ></v-text-field> 
            </v-col>

            <v-col md="6" sm="12">
              <v-text-field
              v-model="dataUbicacionInmueble.g7_este"
              class="input-middle"
              label="Este (m)"
              ></v-text-field>  
            </v-col>
          </v-row>

          <v-row class="mt-3 mb-3">
            <v-col md="6" sm="12" style="position: relative;">
              <span class="span-float">
                8vo Grupo
              </span>
              <v-text-field
              v-model="dataUbicacionInmueble.g8_norte"
              class="input-middle outlined"
              label="Norte (m)"
              ></v-text-field> 
            </v-col>

            <v-col md="6" sm="12">
              <v-text-field
              v-model="dataUbicacionInmueble.g8_este"
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
          <v-btn class="btn dialog-btn" text @click="saveData()" :loading="btnGuardarInmuble">Si</v-btn>
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
      dataUbicacionInmueble:[],

      norte:[],
      este:[],

      btnGuardarInmuble: false,
      btnImagenPlano: false,
      btnImagenPlanoMesura: false,
      btnImagenInmueble: false
    }
  },
  head() {
    const title = 'Actualizar Terreno';
    return {
      title,
    }
  },

  created(){
    this.redireccionIdVacio()
    this.getInmuebleUbicacion()
  },

  computed: {
    imageUrlPlanoMesura() {
      if (this.dataUbicacionInmueble.imagen_plano_mesura instanceof File || this.dataUbicacionInmueble.imagen_plano_mesura instanceof Blob) {
        return URL.createObjectURL(this.dataUbicacionInmueble.imagen_plano_mesura);
      }
      return null;
    },
    imageUrlPlano() {
      if (this.dataUbicacionInmueble.imagan_plano instanceof File || this.dataUbicacionInmueble.imagan_plano instanceof Blob) {
        return URL.createObjectURL(this.dataUbicacionInmueble.imagan_plano);
      }
      return null;
    },
    imageUrlInmueble() {
      if (this.dataUbicacionInmueble.imagen_inmueble instanceof File || this.dataUbicacionInmueble.imagen_inmueble instanceof Blob) {
        return URL.createObjectURL(this.dataUbicacionInmueble.imagen_inmueble);
      }
      return null;
    },
  },

  methods: {
    redireccionIdVacio(){
      if(this.$store.getters.getExpediente =='Sin Seleccionar'){
        this.$router.push('modificar-datos')
        this.$alert("cancel", {desc: "Debe seleccionar un inmueble para ingresar a este módulo", hash: 'knsddcssdc', title:'Error'})
      }else{
        ''
      }
    },

    getInmuebleUbicacion(){
      this.$axios.$get('inmueble_ubicacion/?inmueble=' + this.$store.getters.getExpediente.id).then(response => {
        this.dataUbicacionInmueble = response[0]
        console.log('dataUbicacionInmueble',this.dataUbicacionInmueble)
        this.documentoPropiedadId = this.dataUbicacionInmueble[0].id

        // this.norte = [
        //   this.dataUbicacionInmueble.g1_norte,
        //   this.dataUbicacionInmueble.g2_norte,
        //   this.dataUbicacionInmueble.g3_norte,
        //   this.dataUbicacionInmueble.g4_norte,
        //   this.dataUbicacionInmueble.g5_norte,
        //   this.dataUbicacionInmueble.g6_norte,
        //   this.dataUbicacionInmueble.g7_norte,
        //   this.dataUbicacionInmueble.g8_norte,
        //   this.dataUbicacionInmueble.g9_norte,
        // ];
        // this.este = [
        //   this.dataUbicacionInmueble.g1_este,
        //   this.dataUbicacionInmueble.g2_este,
        //   this.dataUbicacionInmueble.g3_este,
        //   this.dataUbicacionInmueble.g4_este,
        //   this.dataUbicacionInmueble.g5_este,
        //   this.dataUbicacionInmueble.g6_este,
        //   this.dataUbicacionInmueble.g7_este,
        //   this.dataUbicacionInmueble.g8_este,
        //   this.dataUbicacionInmueble.g9_este,
        // ];
      }).catch(err => {
        console.log(err) 
      })
    },

    uploadImagePlanoMesura() {
    this.btnImagenPlanoMesura = true
    const formData = new FormData();
    formData.append('imagan_plano_mesura', this.dataUbicacionInmueble.imagan_plano_mesura)

      this.$axios.$patch(`inmueble_ubicacion/${this.dataUbicacionInmueble.id}/`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      })
      .then(response => {
        console.log(response)
        this.btnImagenPlanoMesura = false
        this.$alert("success", { desc: "Imagen cargada con éxito", hash: 'knsddcssdc', title: 'Edición de inmueble' });
      })
      .catch(err => {
        console.log(err)
        this.btnImagenPlanoMesura = false
      });
    },

    uploadImagePlano() {
    this.btnImagenInmueble = true

    const formData = new FormData();
    formData.append('imagen_plano', this.dataUbicacionInmueble.imagen_plano)

      this.$axios.$patch(`inmueble_ubicacion/${this.dataUbicacionInmueble.id}/`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      })
      .then(response => {
        console.log(response)
        this.btnImagenInmueble = false
        this.$alert("success", { desc: "Imagen cargada con éxito", hash: 'knsddcssdc', title: 'Edición de inmueble' });
      })
      .catch(err => {
        console.log(err)
        this.btnImagenInmueble = false
      });
    },

    uploadImageInmueble() {
    this.btnImagenInmueble = true

    const formData = new FormData();
    formData.append('imagen_inmueble', this.dataUbicacionInmueble.imagen_inmueble)

      this.$axios.$patch(`inmueble_ubicacion/${this.dataUbicacionInmueble.id}/`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      })
      .then(response => {
        console.log(response)
        this.btnImagenInmueble = false
        this.$alert("success", { desc: "Imagen cargada con éxito", hash: 'knsddcssdc', title: 'Edición de inmueble' });
      })
      .catch(err => {
        console.log(err)
        this.btnImagenInmueble = false
      });
    },

    saveData() {
      this.btnGuardarInmuble = true

      const formData = new FormData();
      formData.append('lindero_norte', this.dataUbicacionInmueble.lindero_norte);
      formData.append('lindero_este', this.dataUbicacionInmueble.lindero_este);
      formData.append('lindero_sur', this.dataUbicacionInmueble.lindero_sur);
      formData.append('lindero_oeste', this.dataUbicacionInmueble.lindero_oeste);
      formData.append('g1_norte', this.dataUbicacionInmueble.g1_norte);
      formData.append('g2_norte', this.dataUbicacionInmueble.g2_norte);
      formData.append('g3_norte', this.dataUbicacionInmueble.g3_norte);
      formData.append('g4_norte', this.dataUbicacionInmueble.g4_norte);
      formData.append('g5_norte', this.dataUbicacionInmueble.g5_norte);
      formData.append('g6_norte', this.dataUbicacionInmueble.g6_norte);
      formData.append('g7_norte', this.dataUbicacionInmueble.g7_norte);
      formData.append('g8_norte', this.dataUbicacionInmueble.g8_norte);
      formData.append('g1_este', this.dataUbicacionInmueble.g1_este);
      formData.append('g2_este', this.dataUbicacionInmueble.g2_este);
      formData.append('g3_este', this.dataUbicacionInmueble.g3_este);
      formData.append('g4_este', this.dataUbicacionInmueble.g4_este);
      formData.append('g5_este', this.dataUbicacionInmueble.g5_este);
      formData.append('g6_este', this.dataUbicacionInmueble.g6_este);
      formData.append('g7_este', this.dataUbicacionInmueble.g7_este);
      formData.append('g8_este', this.dataUbicacionInmueble.g8_este);
    
      this.$axios.$patch(`inmueble_ubicacion/${this.dataUbicacionInmueble.id}/`, formData)
      .then(res => {
        console.log(res.data)
        this.btnGuardarInmuble = false
        this.dialog_confirmar = false
        this.$alert("success", { desc: "Se ha guardado un inmueble con éxito", hash: 'knsddcssdc', title: 'Edición de inmueble' });
      })
      .catch(err => {
        console.error(err)
        this.btnGuardarInmuble = false
        this.dialog_confirmar = false
      });
    }, 
  }
};
</script>

<style src="~/assets/styles/pages/actualizacion-ubicacion-parcela.scss" lang="scss" />