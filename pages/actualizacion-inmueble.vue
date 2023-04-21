<template>
  <div class="center no-padding divcol" style="margin-bottom:20px; padding-left: 256px;">
   <section class="section1-actualizacion">
    <div class="actualizacion-container">
        <p class="title-actualizacion">
          Actualización de Datos
        </p>

        <hr>

        <div class="textfield-search-container">
          <v-text-field
          class="inputs-consulta"
          label="Nro. de Expediente"
          ></v-text-field>

          <v-btn class="btn-buscar" v-bind="attrs" v-on="on">
            Buscar
          </v-btn>
        </div>
      </div>

      <div class="datos-generales-container">
        <div class="title-morado">
          <p class="datos-generales-title">
            Datos Generales del Inmueble
          </p>
        </div>

        <div v-for="(item,index) in datosGenerales" :key="index" class="solicitud-inputs-container">
          <v-text-field
          class="small-input mobile-inputs"
          label="Nro. Expediente"
          :value="item.nro_expediente"
          ></v-text-field>

          <v-text-field
          class="small-input mobile-inputs"
          label="Fecha de inscripción"
          :value="item.fecha"
          ></v-text-field>

          <v-autocomplete
          class="big-autocomplete mobile-inputs"
          label="Tipo de Inmueble"
          :items="tipo_inmueble"
          ></v-autocomplete>

          <v-autocomplete
          class="big-autocomplete mobile-inputs"
          label="Estatus Actual"
          :items="estatus_actual"
          ></v-autocomplete>
        </div>
      </div>
   </section>

   <section class="section2-actualizacion">
    <div class="direccion-container">
        <div class="title-morado">
          <p class="direccion-title">
            Dirección del Inmueble
          </p>
        </div>

        <div v-for="(item,index) in datosDireccion" :key="index" class="direccion-inputs-container">
          <v-autocomplete
          class="big-autocomplete mobile-inputs"
          label="Ambito*"
          :items="ambito"
          ></v-autocomplete>

          <v-autocomplete
          class="big-autocomplete mobile-inputs"
          label="Sector*"
          :items="sector"
          ></v-autocomplete>

          <v-autocomplete
          class="big-autocomplete mobile-inputs"
          label="Manzana*"
          :items="manzana"
          ></v-autocomplete>

          <v-autocomplete
          class="big-autocomplete mobile-inputs"
          label="Parcela*"
          :items="parcela"
          ></v-autocomplete>

          <v-autocomplete
          class="big-autocomplete mobile-inputs"
          label="Sub-Parcela*"
          :items="sub_parcela"
          ></v-autocomplete>

          <v-autocomplete
          class="big-autocomplete mobile-inputs"
          label="Nivel"
          :items="nivel"
          ></v-autocomplete>

          <v-autocomplete
          class="big-autocomplete mobile-inputs"
          label="Unidad"
          :items="unidad"
          ></v-autocomplete>

          <v-autocomplete
          class="big-autocomplete mobile-inputs"
          label="Urbanización / Barrio*"
          :items="urbanizacion"
          ></v-autocomplete>

          <v-autocomplete
          class="big-autocomplete mobile-inputs"
          label="Calle"
          :items="calle"
          ></v-autocomplete>

          <v-autocomplete
          class="big-autocomplete mobile-inputs"
          label="Conj. Residencial / Centro Comercial"
          :items="conj_residencial"
          ></v-autocomplete>

          <v-autocomplete
          class="big-autocomplete mobile-inputs"
          label="Edificio"
          :items="edificio"
          ></v-autocomplete>

          <v-autocomplete
          class="big-autocomplete mobile-inputs"
          label="Avenida"
          :items="avenida"
          ></v-autocomplete>

          <v-autocomplete
          class="big-autocomplete mobile-inputs"
          label="Torre"
          :items="torre"
          ></v-autocomplete>

          <v-text-field
          class="small-input mobile-inputs"
          label="Nro. Civico"
          :value="item.nro_civico"
          ></v-text-field>

          <v-text-field
          class="small-input mobile-inputs"
          label="Nro. Casa"
          :value="item.nro_casa"
          ></v-text-field>

          <v-text-field
          class="small-input mobile-inputs"
          label="Piso"
          :value="item.piso"
          ></v-text-field>

          <v-text-field
          class="small-input mobile-inputs"
          label="Telefono"
          :value="item.telefono"
          ></v-text-field>

          <v-autocomplete
          class="big-autocomplete mobile-inputs"
          label="Zona(1996 / 2001)"
          :items="torre"
          ></v-autocomplete>

          <v-autocomplete
          class="big-autocomplete mobile-inputs"
          label="Zona(2001 / 2003)"
          :items="torre"
          ></v-autocomplete>

          <v-autocomplete
          class="big-autocomplete mobile-inputs"
          label="Zona(2004)"
          :items="torre"
          ></v-autocomplete>

          <v-textarea
          class="text-area-input mobile-inputs"
          label="Dirección Completa"
          ></v-textarea>

          <v-textarea
          class="text-area-input-small mobile-inputs"
          label="Referencia"
          ></v-textarea>

          <v-textarea
          class="text-area-input-small mobile-inputs"
          label="Observaciones"
          ></v-textarea>
        </div>
    </div>

    <div class="planos-container">
      <div class="title-morado">
        <p class="planos-title">
          Planos
        </p>
      </div>

      <div class="container-fields">
        <div>
            <div class="title-information">
              <span>
                Plano
              </span>
            </div>

            <div class="file-btn">
              <v-file-input placeholder="Arrastre y suelte el archivo aqui">

              </v-file-input>
              <v-btn>
                <span>Subir</span>
              </v-btn>
            </div>
        </div>

        <div>
            <div class="title-information">
              <span>
                Plano
              </span>
            </div>

            <div class="file-btn">
              <v-file-input placeholder="Arrastre y suelte el archivo aqui">

              </v-file-input>
              <v-btn>
                <span>Subir</span>
              </v-btn>
            </div>
        </div>
      </div>
    </div>

    <div class="divrow center mobile-col" style="gap:20px;">
      <v-dialog v-model="dialog_exito" persistent class="dialog-exito">
        <template #activator="{attrs, on}">
          <v-btn class="btn btn-mobile" v-bind="attrs" v-on="on">
            Guardar
          </v-btn>
        </template>
        <v-card class="card-dialog-exito">
          <v-icon @click="dialog_exito = false">mdi-close</v-icon>
          <p class="p-dialog">¡Se ha actualizado el inmueble con éxito!</p>
        </v-card>
      </v-dialog>

      <v-btn class="btn btn-mobile" style="background-color:#ED057E!important;">
        Cancelar
      </v-btn>
    </div>
   </section>
  </div>
</template>

<script>
import computeds from '~/mixins/computeds'

export default {
  name: "ActualizacionInmueblePage",
  mixins: [computeds],
  data() {
    return { 
      dialog_exito: false,
      datosGenerales:[
        {
          nro_expediente:"",
          fecha:"",
        }
      ],

      datosDireccion:[
        {
          nro_civico:"",
          nro_casa:"",
          piso:"",
          telefono:"",
        }
      ]
    }
  },
  head() {
    const title = 'Actualizacion Inmueble';
    return {
      title,
    }
  },

  methods: {
   
  }
};
</script>

<style src="~/assets/styles/pages/actualizacion-inmueble.scss" lang="scss" />