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
          v-model="dataDocumentoPropiedad.tipo_documento"
          class="input-50"
          label="Tipo de Documento"
          :items="dataTipoDocumento"
          item-text="descripcion"
          item-value="id"
          ></v-autocomplete>

          <v-autocomplete
          v-model="dataDocumentoPropiedad.tipo_especial"
          class="input-50"
          label="Tipo Especial"
          :items="dataTipoEspecial"
          item-text="descripcion"
          item-value="id"
          ></v-autocomplete>
        </div>

        <div class="div-card">
          <v-card class="border-card-title-top">
            <span class="span-float">
              Fecha Habitabilidad  <sup class="bold">*</sup>
            </span>

            <v-menu
            v-model="menu1"
            :close-on-content-click="false"
            :nudge-right="5"
            transition="scale-transition"
            offset-y
            min-width="auto"
            >
              <template #activator="{ on, attrs }">
                <v-text-field
                v-model="dataDocumentoPropiedad.fecha_habitabilidad"
                class="input-300"
                label="Fecha"
                append-icon="mdi-calendar"
                readonly
                v-bind="attrs"
                v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="dataDocumentoPropiedad.fecha_habitabilidad"
                label="Fecha"
                color="blue"
                header-color="#810880"
                class="custom-date-picker"
                @input="formatoFechaHabitabilidad()"
              ></v-date-picker>
            </v-menu>
          </v-card>

          <v-row class="center pt-3 pl-3 pr-3">
            <v-autocomplete
            v-model="dataDocumentoPropiedad.tipo_tenencia"
            class="input-middle"
            label="Tipo Tenencia"
            :items="dataTipoTenencia"
            item-text="descripcion"
            item-value="id"
            ></v-autocomplete>
          </v-row>

          <v-card class="border-card-title-top">
            <span class="span-float">
              Vigecia Hasta  <sup class="bold">*</sup>
            </span>

            <v-menu
            v-model="menu2"
            :close-on-content-click="false"
            :nudge-right="5"
            transition="scale-transition"
            offset-y
            min-width="auto"
            >
              <template #activator="{ on, attrs }">
                <v-text-field
                v-model="dataDocumentoPropiedad.fecha_vigencia"
                class="input-300"
                label="Fecha"
                append-icon="mdi-calendar"
                readonly
                v-bind="attrs"
                v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="dataDocumentoPropiedad.fecha_vigencia"
                label="Fecha"
                color="blue"
                header-color="#810880"
                class="custom-date-picker"
                @input="formatoFechaVigencia()"
              ></v-date-picker>
            </v-menu>
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
              Fecha <sup class="bold">*</sup>
            </span>

            <v-menu
            v-model="menu3"
            :close-on-content-click="false"
            :nudge-right="5"
            transition="scale-transition"
            offset-y
            min-width="auto"
            >
              <template #activator="{ on, attrs }">
                <v-text-field
                v-model="dataDocumentoPropiedad.fecha_documento"
                class="input-300"
                label="Fecha"
                append-icon="mdi-calendar"
                readonly
                v-bind="attrs"
                v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="dataDocumentoPropiedad.fecha_documento"
                label="Fecha"
                color="blue"
                header-color="#810880"
                class="custom-date-picker"
                @input="formatoFechaDocumento()"
              ></v-date-picker>
            </v-menu>
          </v-card>

          <v-row class="center pt-3 pl-3 pr-3">
            <v-text-field
            v-model="dataDocumentoPropiedad.numero_documento"
            class="input-300"
            label="Nro. de Documento"
            ></v-text-field>
          </v-row>

          <v-row class="center mt-0 pt-0 pl-3 pr-3">
            <v-text-field
            v-model="dataDocumentoPropiedad.matricula_documento"
            class="input-300"
            label="Matricula"
            ></v-text-field>
          </v-row>

          <v-row class="center mt-0 pt-0 pl-3 pr-3">
            <v-text-field
            v-model="dataDocumentoPropiedad.anio_folio_documento"
            class="input-300"
            label="Año del Folio Real"
            type="number"
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
                  Fecha <sup class="bold">*</sup>
                </span>

                <v-menu
                v-model="menu4"
                :close-on-content-click="false"
                :nudge-right="5"
                transition="scale-transition"
                offset-y
                min-width="auto"
                >
                  <template #activator="{ on, attrs }">
                    <v-text-field
                    v-model="dataDocumentoPropiedad.fecha_terreno"
                    class="input-300"
                    label="Fecha"
                    append-icon="mdi-calendar"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    v-model="dataDocumentoPropiedad.fecha_terreno"
                    label="Fecha"
                    color="blue"
                    header-color="#810880"
                    class="custom-date-picker"
                    @input="formatoFechaTerreno()"
                  ></v-date-picker>
                </v-menu>
              </v-card>
            </v-col>

            <v-col cols="3">
              <v-text-field
              v-model="dataDocumentoPropiedad.numero_terreno"
              class="input-300"
              label="Nro. de Documento"
              type="number"
              ></v-text-field>  
            </v-col>

            <v-col cols="3">
              <v-text-field
              v-model="dataDocumentoPropiedad.folio_terreno"
              class="input-300"
              label="Folios"
              type="number"
              ></v-text-field>
            </v-col>

            <v-col cols="3">
              <v-text-field
              v-model="dataDocumentoPropiedad.protocolo_terreno"
              class="input-300"
              label="Protocolo"
              ></v-text-field>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="6">
              <v-text-field
              v-model="dataDocumentoPropiedad.tomo_terreno" 
              class="input-middle" label="Tomo"
              ></v-text-field>
            </v-col>

            <v-col cols="3">
              <v-text-field 
              v-model="dataDocumentoPropiedad.area_terreno"
              class="input-300" label="Area" type="number"></v-text-field>
            </v-col>

            <v-col cols="3">
              <v-text-field 
              v-model="dataDocumentoPropiedad.valor_terreno"
              class="input-300" label="Valor" type="number"></v-text-field>
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
                  Fecha <sup class="bold">*</sup>
                </span>

                <v-menu
                v-model="menu5"
                :close-on-content-click="false"
                :nudge-right="5"
                transition="scale-transition"
                offset-y
                min-width="auto"
                >
                  <template #activator="{ on, attrs }">
                    <v-text-field
                    v-model="dataDocumentoPropiedad.fecha_construccion"
                    class="input-300"
                    label="Fecha"
                    append-icon="mdi-calendar"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    v-model="dataDocumentoPropiedad.fecha_construccion"
                    label="Fecha"
                    color="blue"
                    header-color="#810880"
                    class="custom-date-picker"
                    @input="formatoFechaConstruccion()"
                  ></v-date-picker>
                </v-menu>
              </v-card>
            </v-col>

            <v-col cols="3">
              <v-text-field
              v-model="dataDocumentoPropiedad.numero_construccion"
              class="input-300"
              label="Nro. de Documento"
              ></v-text-field>  
            </v-col>

            <v-col cols="3">
              <v-text-field
              v-model="dataDocumentoPropiedad.folio_construccion"
              class="input-300"
              label="Folios"
              ></v-text-field>
            </v-col>

            <v-col cols="3">
              <v-text-field
              v-model="dataDocumentoPropiedad.protocolo_construccion"
              class="input-300"
              label="Protocolo"
              ></v-text-field>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="6">
              <v-text-field 
              v-model="dataDocumentoPropiedad.tomo_construccion"
              class="input-middle" label="Tomo"></v-text-field>
            </v-col>

            <v-col cols="3">
              <v-text-field 
              v-model="dataDocumentoPropiedad.area_construccion"
              class="input-300" label="Area"></v-text-field>
            </v-col>

            <v-col cols="3">
              <v-text-field 
              class="input-300" label="Valor"></v-text-field>
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
            <v-col lg="6" xs="12">
              <v-text-field
              v-model="dataDocumentoPropiedad.lindero_norte"
              class="input-middle"
              label="Norte"
              ></v-text-field> 
            </v-col>

            <v-col lg="6" xs="12">
              <v-text-field
              v-model="dataDocumentoPropiedad.lindero_sur"
              class="input-middle"
              label="Sur"
              ></v-text-field>  
            </v-col>
          </v-row>
          <v-row>
            <v-col lg="6" xs="12">
              <v-text-field
              v-model="dataDocumentoPropiedad.lindero_este"
              class="input-middle"
              label="Este"
              ></v-text-field> 
            </v-col>

            <v-col lg="6" xs="12">
              <v-text-field
              v-model="dataDocumentoPropiedad.lindero_oeste"
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
import moment from 'moment'

export default {
  name: "actualizar-terrenoPage",
  mixins: [computeds],
  data() {
    return {  
      btnGuardarInmuble: false,

      dialog_confirmar: false,

      menu1: false,
      menu2: false,
      menu3: false,
      menu4: false,
      menu5: false,

      dataDocumentoPropiedad: [],
      dataTipoDocumento: [],
      dataTipoEspecial: [],
      dataTipoTenencia: []
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
    this.getDocumentoPropiedad()
    this.getTipoDocumento()
    this.getTipoEspecial()
    this.getTipoTenencia()

  },

  methods: {
    redireccionIdVacio(){
      if(this.$store.getters.getExpediente =='Sin Seleccionar'){
        this.$router.push('modificar-datos')
        this.$alert("cancel", {desc: "Debe seleccionar un inmueble para ingresar a este modulo", hash: 'knsddcssdc', title:'Error'})
      }else{
        ''
      }
    },

    getDocumentoPropiedad(){
      this.$axios.$get('inmueble_propiedad/?inmueble=' + this.$store.getters.getExpediente.id).then(response => {
        this.dataDocumentoPropiedad = response
        this.documentoPropiedadId = this.dataDocumentoPropiedad[0].id
      }).catch(err => {
        console.log(err) 
      })
    },

    getTipoDocumento(){
      this.$axios.$get('tipodocumento').then(response => {
        this.dataTipoDocumento = response
      }).catch(err => {
        console.log(err) 
      })
    },

    getTipoTenencia(){
      this.$axios.$get('tipotenencia').then(response => {
        this.dataTipoTenencia = response
      }).catch(err => {
        console.log(err) 
      })
    },

    getTipoEspecial(){
      this.$axios.$get('tipoespecial').then(response => {
        this.dataTipoEspecial = response
      }).catch(err => {
        console.log(err) 
      })
    },

    formatoFechaHabitabilidad() {
      if (this.dataDocumentoPropiedad.fecha_habitabilidad) {
        this.fechaFormateada = moment(this.nuevaFecha).format('YYYY-MM-DD HH:mm:ss')
        this.dataDocumentoPropiedad.fecha_habitabilidad = this.fechaFormateada
      }
    },

    formatoFechaConstruccion() {
      if (this.dataDocumentoPropiedad.fecha_construccion) {
        this.fechaFormateada = moment(this.nuevaFecha).format('YYYY-MM-DD HH:mm:ss')
        this.dataDocumentoPropiedad.fecha_construccion = this.fechaFormateada
      }
    },

    formatoFechaDocumento() {
      if (this.dataDocumentoPropiedad.fecha_documento) {
        this.fechaFormateada = moment(this.nuevaFecha).format('YYYY-MM-DD HH:mm:ss')
        this.dataDocumentoPropiedad.fecha_documento = this.fechaFormateada
      }
    },

    formatoFechaTerreno() {
      if (this.dataDocumentoPropiedad.fecha_terreno) {
        this.fechaFormateada = moment(this.nuevaFecha).format('YYYY-MM-DD HH:mm:ss')
        this.dataDocumentoPropiedad.fecha_terreno = this.fechaFormateada
      }
    },

    formatoFechaVigencia() {
      if (this.dataDocumentoPropiedad.fecha_vigencia) {
        this.fechaFormateada = moment(this.nuevaFecha).format('YYYY-MM-DD HH:mm:ss')
        this.dataDocumentoPropiedad.fecha_vigencia = this.fechaFormateada
      }
    },

    saveData() {
      this.btnGuardarInmuble = true

      const formData = new FormData();
      formData.append('tipo', this.dataDocumentoPropiedad.tipo_documento);
      formData.append('uso_construccion', this.dataDocumentoPropiedad.tipo_especial);
      formData.append('tenencia', this.dataDocumentoPropiedad.fecha_habitabilidad);
      formData.append('regimen', this.dataDocumentoPropiedad.tipo_tenencia);
      formData.append('tipo_pared', this.dataDocumentoPropiedad.fecha_vigencia);
      formData.append('acabado_pared', this.dataDocumentoPropiedad.fecha_documento);
      formData.append('conservacion', this.dataDocumentoPropiedad.numero_documento);
      formData.append('anio_construccion', this.dataDocumentoPropiedad.matricula_documento);
      formData.append('anio_refaccion', this.dataDocumentoPropiedad.anio_folio_documento);
      formData.append('porcentaje_refaccion', this.dataDocumentoPropiedad.fecha_terreno);
      formData.append('edad_efectiva', this.dataDocumentoPropiedad.numero_terreno);
      formData.append('numero_niveles', this.dataDocumentoPropiedad.folio_terreno);
      formData.append('numero_edificaciones', this.dataDocumentoPropiedad.protocolo_terreno);
      formData.append('observaciones', this.dataDocumentoPropiedad.tomo_terreno);
      formData.append('uso_construccion', this.dataDocumentoPropiedad.area_terreno);
      formData.append('tenencia', this.dataDocumentoPropiedad.valor_terreno);
      formData.append('regimen', this.dataDocumentoPropiedad.fecha_construccion);
      formData.append('tipo_pared', this.dataDocumentoPropiedad.numero_construccion);
      formData.append('acabado_pared', this.dataDocumentoPropiedad.folio_construccion);
      formData.append('conservacion', this.dataDocumentoPropiedad.protocolo_construccion);
      formData.append('anio_construccion', this.dataDocumentoPropiedad.tomo_construccion);
      formData.append('anio_refaccion', this.dataDocumentoPropiedad.area_construccion);
      formData.append('porcentaje_refaccion', this.dataDocumentoPropiedad.lindero_norte);
      formData.append('edad_efectiva', this.dataDocumentoPropiedad.lindero_sur);
      formData.append('numero_niveles', this.dataDocumentoPropiedad.lindero_este);
      formData.append('numero_edificaciones', this.dataDocumentoPropiedad.lindero_oeste);

      this.$axios.$patch(`inmueble_propiedad/?inmueble=${this.$store.getters.getExpediente.id}/`, formData)
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