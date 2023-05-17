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
          :items="tipoInmuebleData"
          item-text="descripcion"
          ></v-autocomplete>

          <v-autocomplete
          class="big-autocomplete mobile-inputs"
          label="Estatus Actual"
          :items="estatusInmuebleData"
          item-text="descripcion"
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
          :items="ambitoData"
          item-text="descripcion"
          item-value="id"
          ></v-autocomplete>

          <v-autocomplete
          class="big-autocomplete mobile-inputs"
          label="Sector*"
          :items="sectorData"
          item-text="descripcion"
          item-value="id"
          ></v-autocomplete>

          <v-autocomplete
          class="big-autocomplete mobile-inputs"
          label="Manzana*"
          :items="manzanaData"
          item-text="codigo"
          item-value="id"
          ></v-autocomplete>

          <v-autocomplete
          class="big-autocomplete mobile-inputs"
          label="Parcela*"
          :items="parcelaData"
          item-text="codigo"
          item-value="id"
          ></v-autocomplete>

          <v-autocomplete
          class="big-autocomplete mobile-inputs"
          label="Sub-Parcela*"
          :items="subParcelaData"
          item-text="codigo"
          item-value="id"
          ></v-autocomplete>

          <v-autocomplete
          class="big-autocomplete mobile-inputs"
          label="Nivel"
          :items="nivelInmuebleData"
          item-text="descripcion"
          item-value="id"
          ></v-autocomplete>

          <v-autocomplete
          class="big-autocomplete mobile-inputs"
          label="Unidad"
          :items="unidadInmuebleData"
          item-text="descripcion"
          item-value="id"
          ></v-autocomplete>

          <v-autocomplete
          class="big-autocomplete mobile-inputs"
          label="Urbanización / Barrio*"
          :items="urbanizacionData"
          item-text="nombre"
          item-value="id"
          ></v-autocomplete>

          <v-autocomplete
          class="big-autocomplete mobile-inputs"
          label="Calle"
          :items="calleData"
          item-text="nombre"
          item-value="id"
          ></v-autocomplete>

          <v-autocomplete
          class="big-autocomplete mobile-inputs"
          label="Conj. Residencial / Centro Comercial"
          :items="conjuntoResidencialData"
          item-text="nombre"
          item-value="id"
          ></v-autocomplete>

          <v-autocomplete
          class="big-autocomplete mobile-inputs"
          label="Edificio"
          :items="edificioData"
          item-text="nombre"
          item-value="id"
          ></v-autocomplete>

          <v-autocomplete
          class="big-autocomplete mobile-inputs"
          label="Avenida"
          :items="avenidaData"
          item-text="nombre"
          item-value="id"
          ></v-autocomplete>

          <v-autocomplete
          class="big-autocomplete mobile-inputs"
          label="Torre"
          :items="torreData"
          item-text="nombre"
          item-value="id"
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
          :items="zona"
          ></v-autocomplete>

          <v-autocomplete
          class="big-autocomplete mobile-inputs"
          label="Zona(2001 / 2003)"
          :items="zona"
          ></v-autocomplete>

          <v-autocomplete
          class="big-autocomplete mobile-inputs"
          label="Zona(2004)"
          :items="zona"
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
      tipoInmuebleData:[],  
      estatusInmuebleData:[],
      ambitoData:[],
      sectorData:[],
      manzanaData:[],
      parcelaData:[],
      subParcelaData:[],
      nivelInmuebleData:[],
      unidadInmuebleData:[],
      urbanizacionData:[],
      calleData:[],
      conjuntoResidencialData:[],
      edificioData:[],
      avenidaData:[],
      torreData:[],
      zona:["1","2","3"],
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

  mounted(){
    this.getDataTipo(),
    this.getDataEstatus(),
    this.getDataAmbito(),
    this.getDataSector(),
    this.getDataManzana(),
    this.getDataParcela(),
    this.getDataSubParcela(),
    this.getDataNivel(),
    this.getDataUnidad(),
    this.getDataUrbanizacion(),
    this.getDataCalle(),
    this.getDataConjunto(),
    this.getDataEdificio(),
    this.getDataAvenida(),
    this.getDataTorre()
  },

  methods: {
    getDataSector(){
      this.$axios.$get('sector').then(response => {
          this.sectorData = response
        }).catch(err => {
          console.log(err)
        })
    },

    getDataManzana(){
      this.$axios.$get('manzana').then(response => {
          this.manzanaData = response
        }).catch(err => {
          console.log(err)
        })
    },

    getDataParcela(){
      this.$axios.$get('parcela').then(response => {
          this.parcelaData = response
        }).catch(err => {
          console.log(err)
        })
    },

    getDataSubParcela(){
      this.$axios.$get('subparcela').then(response => {
          this.subParcelaData = response
        }).catch(err => {
          console.log(err)
        })
    },

    getDataUrbanizacion(){
      this.$axios.$get('urbanizacion').then(response => {
          this.urbanizacionData = response
        }).catch(err => {
          console.log(err)
        })
    },

    getDataCalle(){
      this.$axios.$get('calle').then(response => {
          this.calleData = response
        }).catch(err => {
          console.log(err)
        })
    },

    getDataConjunto(){
      this.$axios.$get('conjuntoresidencial').then(response => {
          this.conjuntoResidencialData = response
        }).catch(err => {
          console.log(err)
        })
    },

    getDataEdificio(){
      this.$axios.$get('edificio').then(response => {
          this.edificioData = response
        }).catch(err => {
          console.log(err)
        })
    },

    getDataAvenida(){
      this.$axios.$get('avenida').then(response => {
          this.avenidaData = response
        }).catch(err => {
          console.log(err)
        })
    },

    getDataTorre(){
      this.$axios.$get('torre').then(response => {
          this.torreData = response
        }).catch(err => {
          console.log(err)
        })
    },
    
    getDataTipo(){
      this.$axios.$get('tipoinmueble').then(response => {
          this.tipoInmuebleData = response
        }).catch(err => {
          console.log(err)
        })
    },

    getDataEstatus() {
      this.$axios.$get('estatusinmueble').then(response => {
          this.estatusInmuebleData = response
        }).catch(err => {
          console.log(err)
        })
    },

    getDataAmbito() {
      this.$axios.$get('ambito').then(response => {
          this.ambitoData = response
        }).catch(err => {
          console.log(err)
        })
    },

    getDataNivel() {
      this.$axios.$get('nivelinmueble').then(response => {
          this.nivelInmuebleData = response
        }).catch(err => {
          console.log(err)
        })
    },

    getDataUnidad() {
      this.$axios.$get('unidadinmueble').then(response => {
          this.unidadInmuebleData = response
        }).catch(err => {
          console.log(err)
        })
    },
  }
};
</script>

<style src="~/assets/styles/pages/actualizacion-inmueble.scss" lang="scss" />