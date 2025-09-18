<template>
  <div class="center no-padding divcol" style="margin-bottom:20px; padding-left: 256px;">
    <section class="section1-actualizar-documento">


      <div class="actualizar-documento-container">
        <div class="title-morado">
          <p class="actualizar-documento-title">
            FINES FISCALES
          </p>
        </div>
        <div class="div-card pt-8 wrap" style="flex-direction: column;">
          <v-row>
            <v-col lg="6" xs="12">
              <v-text-field
              v-model="dataDocumentoPropiedad.cedula"
              class="input-middle"
              label="Superficie de construcción M2 "
              type="number"
              ></v-text-field> 
            </v-col>

            <v-col lg="6" xs="12">
              <v-text-field
              v-model="dataDocumentoPropiedad.documentopropiedad"
              class="input-middle"
              label="Superficie de terreno M2"
              type="number"
              ></v-text-field>  
            </v-col>
            <v-col lg="12" xs="12">
              <v-text-field
              v-model="dataDocumentoPropiedad.observaciones"
              class="input-middle"
              label="Observación (es)"

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
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn class="btn dialog-btn" text @click="saveData()" :loading="btnGuardarInmuble"  style="background-color:var(--primary)!important;">Si</v-btn>
          <v-btn class="btn dialog-btn" text @click="dialog_confirmar = false" style="background-color:var(--error)!important;">No</v-btn>
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
      btnGuardarInmuble: false,

      dialog_confirmar: false,

      dataDocumentoPropiedad: [],
    }
  },
  head() {
    const title = 'Fines Fiscales';
    return {
      title,
    }
  },

  created(){
    this.redireccionIdVacio()
  },

  methods: {
    redireccionIdVacio(){
      if(this.$store.getters.getExpediente =='Sin Seleccionar'){
        this.$router.push('consulta-inmueble')
        this.$alert("cancel", {desc: "Debe seleccionar un inmueble para ingresar a este módulo", hash: 'knsddcssdc', title:'Error'})
      }else{
        this.getDocumentoPropiedad()
      }
    },

    getDocumentoPropiedad(){
      this.$axios.$get('inmueble_faltante/?inmueble=' + this.$store.getters.getExpediente.id).then(response => {
        this.dataDocumentoPropiedad = response[0]
        this.documentoPropiedadId = this.dataDocumentoPropiedad[0].id
      }).catch(err => {
        console.log(err) 
      })
    },

    saveData() {
      this.btnGuardarInmuble = true

      const formData = new FormData();

      this.dataDocumentoPropiedad.cedula ? formData.append('cedula', this.dataDocumentoPropiedad.cedula) : ' ';
      this.dataDocumentoPropiedad.documentopropiedad ? formData.append('documentopropiedad', this.dataDocumentoPropiedad.documentopropiedad) : ' ';
      this.dataDocumentoPropiedad.observaciones ? formData.append('observaciones', this.dataDocumentoPropiedad.observaciones) : ' ';

      this.$axios.$patch(`inmueble_faltante/${this.dataDocumentoPropiedad.id}/`, formData)
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

<style src="~/assets/styles/pages/actualizar-documento-propiedad.scss" lang="scss" />