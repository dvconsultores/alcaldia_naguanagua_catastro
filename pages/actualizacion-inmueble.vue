<template>
  <div class="center no-padding divcol" style="margin-bottom:20px; padding-left: 256px;">
   <!-- <section class="section1-actualizacion">
    <div class="actualizacion-container">
        <p class="title-actualizacion">
          Actualización de Datos
        </p>

        <hr>

        <div class="textfield-search-container">
          <v-text-field
          v-model="nroExpediente"
          class="inputs-consulta"
          label="Nro. de Expediente"
          @input="buscarPropietario()"
          ></v-text-field>

          <v-btn class="btn-buscar" @click="buscarPropietario()">
            Buscar
          </v-btn>
        </div>
      </div>
   </section> -->

   <section class="section2-actualizacion">
    <div class="datos-generales-container">
      <div class="title-morado">
        <p class="datos-generales-title">
          Datos Generales del Inmueble
        </p>
      </div>

      <div class="solicitud-inputs-container">
        <v-text-field
        v-model="inmuebleData.numero_expediente"
        class="small-input mobile-inputs"
        label="Nro. Expediente"
        disabled
        ></v-text-field>

        <v-menu
        v-model="menu"
        :close-on-content-click="false"
        :nudge-right="5"
        transition="scale-transition"
        offset-y
        min-width="auto"
        >
          <template #activator="{ on, attrs }">
            <v-text-field
            v-model="inmuebleData.fecha_inscripcion"
            class="small-input mobile-inputs"
            label="Fecha de inscripción"
            append-icon="mdi-calendar"
            readonly
            v-bind="attrs"
            v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker
            v-model="nuevaFecha"
            label="Fecha"
            color="blue"
            header-color="#810880"
            class="custom-date-picker"
            @input="formatoFecha()"
          ></v-date-picker>
        </v-menu>

        <v-autocomplete
        v-model="inmuebleData.tipo"
        class="big-autocomplete mobile-inputs"
        label="Tipo de Inmueble"
        :items="tipoInmuebleData"
        item-text="descripcion"
        item-value="id"
        ></v-autocomplete>

        <v-autocomplete
        v-model="inmuebleData.status"
        class="big-autocomplete mobile-inputs"
        label="Estatus Actual"
        :items="estatusInmuebleData"
        item-text="descripcion"
        item-value="id"
        ></v-autocomplete>
      </div>
    </div>

    <div class="direccion-container">
        <div class="title-morado">
          <p class="direccion-title">
            Dirección del Inmueble
          </p>
        </div>

        <div class="direccion-inputs-container">
          <v-autocomplete
          v-model="inmuebleData.ambito"
          class="big-autocomplete mobile-inputs"
          label="Ambito*"
          :items="ambitoData"
          item-text="descripcion"
          item-value="id"
          ></v-autocomplete>

          <v-autocomplete
          v-model="inmuebleData.sector"
          class="big-autocomplete mobile-inputs"
          label="Sector*"
          :items="sectorData"
          item-text="descripcion"
          item-value="id"
          ></v-autocomplete>

          <v-autocomplete
          v-model="inmuebleData.manzana"
          class="big-autocomplete mobile-inputs"
          label="Manzana*"
          :items="manzanaData"
          item-text="codigo"
          item-value="id"
          ></v-autocomplete>

          <v-autocomplete
          v-model="inmuebleData.parcela"
          class="big-autocomplete mobile-inputs"
          label="Parcela*"
          :items="parcelaData"
          item-text="codigo"
          item-value="id"
          ></v-autocomplete>

          <v-autocomplete
          v-model="inmuebleData.subparcela"
          class="big-autocomplete mobile-inputs"
          label="Sub-Parcela*"
          :items="subParcelaData"
          item-text="codigo"
          item-value="id"
          ></v-autocomplete>

          <v-autocomplete
          v-model="inmuebleData.nivel"
          class="big-autocomplete mobile-inputs"
          label="Nivel"
          :items="nivelInmuebleData"
          item-text="descripcion"
          item-value="id"
          ></v-autocomplete>

          <v-autocomplete
          v-model="inmuebleData.unidad"
          class="big-autocomplete mobile-inputs"
          label="Unidad"
          :items="unidadInmuebleData"
          item-text="descripcion"
          item-value="id"
          ></v-autocomplete>

          <v-autocomplete
          v-model="inmuebleData.urbanizacion"
          class="big-autocomplete mobile-inputs"
          label="Urbanización / Barrio*"
          :items="urbanizacionData"
          item-text="nombre"
          item-value="id"
          ></v-autocomplete>

          <v-autocomplete
          v-model="inmuebleData.calle"
          class="big-autocomplete mobile-inputs"
          label="Calle"
          :items="calleData"
          item-text="nombre"
          item-value="id"
          ></v-autocomplete>

          <v-autocomplete
          v-model="inmuebleData.conjunto_residencial"
          class="big-autocomplete mobile-inputs"
          label="Conj. Residencial / Centro Comercial"
          :items="conjuntoResidencialData"
          item-text="nombre"
          item-value="id"
          ></v-autocomplete>

          <v-autocomplete
          v-model="inmuebleData.edificio"
          class="big-autocomplete mobile-inputs"
          label="Edificio"
          :items="edificioData"
          item-text="nombre"
          item-value="id"
          ></v-autocomplete>

          <v-autocomplete
          v-model="inmuebleData.avenida"
          class="big-autocomplete mobile-inputs"
          label="Avenida"
          :items="avenidaData"
          item-text="nombre"
          item-value="id"
          ></v-autocomplete>

          <v-autocomplete
          v-model="inmuebleData.torre"
          class="big-autocomplete mobile-inputs"
          label="Torre"
          :items="torreData"
          item-text="nombre"
          item-value="id"
          ></v-autocomplete>

          <v-text-field
          v-model="inmuebleData.numero_civico"
          class="small-input mobile-inputs"
          label="Nro. Civico"
          ></v-text-field>

          <v-text-field
          v-model="inmuebleData.numero_casa"
          class="small-input mobile-inputs"
          label="Nro. Casa"
          ></v-text-field>

          <v-text-field
          v-model="inmuebleData.numero_piso"
          class="small-input mobile-inputs"
          label="Piso"
          ></v-text-field>

          <v-text-field
          v-model="inmuebleData.telefono"
          class="small-input mobile-inputs"
          label="Telefono"
          ></v-text-field>

          <v-autocomplete
          v-model="inmuebleData.id_zona"
          class="big-autocomplete mobile-inputs"
          label="Zona"
          :items="dataZona"
          item-text="descripcion"
          item-value="id"
          disabled="True"
          ></v-autocomplete>

          <v-textarea
          v-model="inmuebleData.direccion"
          class="text-area-input mobile-inputs"
          label="Dirección Completa"
          ></v-textarea>

          <v-textarea
          v-model="inmuebleData.referencia"
          class="text-area-input-small mobile-inputs"
          label="Referencia"
          ></v-textarea>

          <v-textarea
          v-model="inmuebleData.observaciones"
          class="text-area-input-small mobile-inputs"
          label="Observaciones"
          ></v-textarea>
        </div>
    </div>

    <div class="divrow center mobile-col" style="gap:20px;">
      <v-btn class="btn btn-mobile" @click="dialog_confirmar = true">
        Guardar
      </v-btn>
    </div>
   </section>

   <!-- dialog -->

   <v-dialog content-class="dialog-guardar" max-width="500px" v-model="dialog_confirmar" persistent>
      <v-card class="guardar-card">
        <v-card-title class="center title">¿Desea guardar estos cambios?</v-card-title>
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
  name: "ActualizacionInmueblePage",
  mixins: [computeds],
  data() {
    return {      
      inmuebleData:{}, 
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
      dataZona:[],
      IdZona:null,

      dialog_confirmar: false,

      btnGuardarInmuble: false,

      menu: false,
      nuevaFecha: null,
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
    this.getDataTorre(),
    this.getDataZona(),
    this.getDataInmueble()
    console.log(this.inmuebleData.ambito, 'ambito')
  },

  methods: {
    getDataZona(){
      this.$axios.$get('zona').then(response =>{
        this.dataZona = response
      }).catch(err => {
        console.log(err)
      })
    },

    getDataInmueble(){
      this.$axios.$get('inmueble/' + this.$store.getters.getExpediente.id).then(response =>{
        this.inmuebleData = response
      }).catch(err => {
        console.log(err)
      })
    },

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

    formatoFecha() {
      if (this.nuevaFecha) {
        this.inmuebleData.fecha_inscripcion = moment(this.nuevaFecha).format('YYYY-MM-DD HH:mm:ss');
      }
    },

    saveData() {
      this.btnGuardarInmuble = true

      const formData = new FormData();
      formData.append('numero_expediente', this.inmuebleData.numero_expediente);
      // formData.append('fecha_inscripcion', this.inmuebleData.fecha_inscripcion);
      this.inmuebleData.fecha_inscripcion ? formData.append('status', this.inmuebleData.fecha_inscripcion):'';
      // formData.append('numero_documento', this.inmuebleData.numero_documento);
      this.inmuebleData.numero_documento ? formData.append('status', this.inmuebleData.numero_documento):'';
      // formData.append('status', this.inmuebleData.status);
      this.inmuebleData.status ? formData.append('status', this.inmuebleData.status):'';
      // formData.append('ambito', this.inmuebleData.ambito);
      this.inmuebleData.ambito ? formData.append('ambito', this.inmuebleData.ambito):'';
      // formData.append('sector', this.inmuebleData.sector);
      this.inmuebleData.sector ? formData.append('status', this.inmuebleData.sector):'';
      // formData.append('manzana', this.inmuebleData.manzana);
      this.inmuebleData.manzana ? formData.append('status', this.inmuebleData.manzana):'';
      // formData.append('parcela', this.inmuebleData.parcela);
      this.inmuebleData.parcela ? formData.append('status', this.inmuebleData.parcela):'';
      // formData.append('subparcela', this.inmuebleData.subparcela);
      this.inmuebleData.subparcela ? formData.append('status', this.inmuebleData.subparcela):'';
      // formData.append('nivel', this.inmuebleData.nivel);
      this.inmuebleData.nivel ? formData.append('status', this.inmuebleData.nivel):'';
      // formData.append('unidad', this.inmuebleData.unidad);
      this.inmuebleData.unidad ? formData.append('status', this.inmuebleData.unidad):'';
      // formData.append('urbanizacion', this.inmuebleData.urbanizacion);
      this.inmuebleData.urbanizacion ? formData.append('status', this.inmuebleData.urbanizacion):'';
      // formData.append('calle', this.inmuebleData.calle);
      this.inmuebleData.calle ? formData.append('status', this.inmuebleData.calle):'';
      // formData.append('conjunto_residencial', this.inmuebleData.conjunto_residencial);
      this.inmuebleData.conjunto_residencial ? formData.append('status', this.inmuebleData.conjunto_residencial):'';
      // formData.append('edificio', this.inmuebleData.edificio);
      this.inmuebleData.edificio ? formData.append('status', this.inmuebleData.edificio):'';
      // formData.append('avenida', this.inmuebleData.avenida);
      this.inmuebleData.avenida ? formData.append('status', this.inmuebleData.avenida):'';
      // formData.append('torre', this.inmuebleData.torre);
      this.inmuebleData.torre ? formData.append('status', this.inmuebleData.torre):'';
      // formData.append('numero_civico', this.inmuebleData.numero_civico);
      this.inmuebleData.numero_civico ? formData.append('status', this.inmuebleData.numero_civico):'';
      // formData.append('numero_casa', this.inmuebleData.numero_casa);
      this.inmuebleData.numero_casa ? formData.append('status', this.inmuebleData.numero_casa):'';
      // formData.append('numero_piso', this.inmuebleData.numero_piso);
      this.inmuebleData.numero_piso ? formData.append('status', this.inmuebleData.numero_piso):'';
      // formData.append('telefono', this.inmuebleData.telefono);
      this.inmuebleData.telefono ? formData.append('status', this.inmuebleData.telefono):'';
      // formData.append('zona', this.inmuebleData.zona);
      this.inmuebleData.zona ? formData.append('status', this.inmuebleData.zona):'';
      // formData.append('direccion', this.inmuebleData.direccion);
      this.inmuebleData.direccion ? formData.append('status', this.inmuebleData.direccion):'';
      // formData.append('referencia', this.inmuebleData.referencia);
      this.inmuebleData.referencia ? formData.append('status', this.inmuebleData.referencia):'';
      // formData.append('observaciones', this.inmuebleData.observaciones);
      this.inmuebleData.observaciones ? formData.append('status', this.inmuebleData.observaciones):'';

      this.$axios.$patch(`inmueble/${this.$store.getters.getExpediente.id}/`, this.inmuebleData)
      .then(res => {
        console.log(res.data)
        this.btnGuardarInmuble = false
        this.dialog_confirmar = false
        this.$alert("success", { desc: "Se ha editado un inmueble con éxito", hash: 'knsddcssdc', title: 'Edición de inmueble' });
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

<style src="~/assets/styles/pages/actualizacion-inmueble.scss" lang="scss" />