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
   </section>

   <section class="section2-actualizacion" v-if="inmuebleEncontrado">
    <div class="datos-generales-container">
      <div class="title-morado">
        <p class="datos-generales-title">
          Datos Generales del Inmueble
        </p>
      </div>

      <div v-for="(item,index) in datosGenerales" :key="index" class="solicitud-inputs-container">
        <v-text-field
        v-model="inmueble.numero_expediente"
        class="small-input mobile-inputs"
        label="Nro. Expediente"
        disabled
        ></v-text-field>

        <v-text-field
        v-model="inmueble.fecha"
        class="small-input mobile-inputs"
        label="Fecha de inscripción"
        disabled
        ></v-text-field>

        <v-autocomplete
        v-model="inmueble.tipo"
        class="big-autocomplete mobile-inputs"
        label="Tipo de Inmueble"
        :items="tipoInmuebleData"
        item-text="descripcion"
        item-value="id"
        ></v-autocomplete>

        <v-autocomplete
        v-model="inmueble.status"
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

        <div v-for="(item,index) in datosDireccion" :key="index" class="direccion-inputs-container">
          <v-autocomplete
          v-model="inmueble.ambito"
          class="big-autocomplete mobile-inputs"
          label="Ambito*"
          :items="ambitoData"
          item-text="descripcion"
          item-value="id"
          ></v-autocomplete>

          <v-autocomplete
          v-model="inmueble.sector"
          class="big-autocomplete mobile-inputs"
          label="Sector*"
          :items="sectorData"
          item-text="descripcion"
          item-value="id"
          ></v-autocomplete>

          <v-autocomplete
          v-model="inmueble.manzana"
          class="big-autocomplete mobile-inputs"
          label="Manzana*"
          :items="manzanaData"
          item-text="codigo"
          item-value="id"
          ></v-autocomplete>

          <v-autocomplete
          v-model="inmueble.parcela"
          class="big-autocomplete mobile-inputs"
          label="Parcela*"
          :items="parcelaData"
          item-text="codigo"
          item-value="id"
          ></v-autocomplete>

          <v-autocomplete
          v-model="inmueble.subparcela"
          class="big-autocomplete mobile-inputs"
          label="Sub-Parcela*"
          :items="subParcelaData"
          item-text="codigo"
          item-value="id"
          ></v-autocomplete>

          <v-autocomplete
          v-model="inmueble.nivel"
          class="big-autocomplete mobile-inputs"
          label="Nivel"
          :items="nivelInmuebleData"
          item-text="descripcion"
          item-value="id"
          ></v-autocomplete>

          <v-autocomplete
          v-model="inmueble.unidad"
          class="big-autocomplete mobile-inputs"
          label="Unidad"
          :items="unidadInmuebleData"
          item-text="descripcion"
          item-value="id"
          ></v-autocomplete>

          <v-autocomplete
          v-model="inmueble.urbanizacion"
          class="big-autocomplete mobile-inputs"
          label="Urbanización / Barrio*"
          :items="urbanizacionData"
          item-text="nombre"
          item-value="id"
          ></v-autocomplete>

          <v-autocomplete
          v-model="inmueble.calle"
          class="big-autocomplete mobile-inputs"
          label="Calle"
          :items="calleData"
          item-text="nombre"
          item-value="id"
          ></v-autocomplete>

          <v-autocomplete
          v-model="inmueble.conjunto_residencial"
          class="big-autocomplete mobile-inputs"
          label="Conj. Residencial / Centro Comercial"
          :items="conjuntoResidencialData"
          item-text="nombre"
          item-value="id"
          ></v-autocomplete>

          <v-autocomplete
          v-model="inmueble.edificio"
          class="big-autocomplete mobile-inputs"
          label="Edificio"
          :items="edificioData"
          item-text="nombre"
          item-value="id"
          ></v-autocomplete>

          <v-autocomplete
          v-model="inmueble.avenida"
          class="big-autocomplete mobile-inputs"
          label="Avenida"
          :items="avenidaData"
          item-text="nombre"
          item-value="id"
          ></v-autocomplete>

          <v-autocomplete
          v-model="inmueble.torre"
          class="big-autocomplete mobile-inputs"
          label="Torre"
          :items="torreData"
          item-text="nombre"
          item-value="id"
          ></v-autocomplete>

          <v-text-field
          v-model="inmueble.numero_civico"
          class="small-input mobile-inputs"
          label="Nro. Civico"
          ></v-text-field>

          <v-text-field
          v-model="inmueble.numero_casa"
          class="small-input mobile-inputs"
          label="Nro. Casa"
          ></v-text-field>

          <v-text-field
          v-model="inmueble.numero_piso"
          class="small-input mobile-inputs"
          label="Piso"
          ></v-text-field>

          <v-text-field
          v-model="inmueble.telefono"
          class="small-input mobile-inputs"
          label="Telefono"
          ></v-text-field>

          <v-autocomplete
          v-model="inmueble.zona"
          class="big-autocomplete mobile-inputs"
          label="Zona(1996 / 2001)"
          :items="dataZona"
          item-text="descripcion"
          item-value="id"
          ></v-autocomplete>

          <v-autocomplete
          v-model="inmueble.zona"
          class="big-autocomplete mobile-inputs"
          label="Zona(2001 / 2003)"
          :items="dataZona"
          item-text="descripcion"
          item-value="id"
          ></v-autocomplete>

          <v-autocomplete
          v-model="inmueble.zona"
          class="big-autocomplete mobile-inputs"
          label="Zona(2004)"
          :items="dataZona"
          item-text="descripcion"
          item-value="id"
          ></v-autocomplete>

          <v-textarea
          v-model="inmueble.direccion"
          class="text-area-input mobile-inputs"
          label="Dirección Completa"
          ></v-textarea>

          <v-textarea
          v-model="inmueble.referencia"
          class="text-area-input-small mobile-inputs"
          label="Referencia"
          ></v-textarea>

          <v-textarea
          v-model="inmueble.observaciones"
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
      <v-btn class="btn btn-mobile" @click="saveData()">
        Guardar
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
      inmuebleData:[], 
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
      ],

      nroExpediente: '',
      inmuebleEncontrado: null,
      inmueble: {
        numero_expediente: '',
        fecha_inscripcion: '',
        tipo: '',
        status: '',
        ambito: '',
        sector: '',
        manzana:'',
        parcela: '',
        subparcela: '',
        nivel: '',
        unidad: '',
        urbanizacion: '',
        calle: '',
        conjunto_residencial: '',
        edificio: '',
        avenida: '',
        torre: '',
        numero_civico: '',
        numero_casa: '',
        numero_piso: '',
        telefono: '',
        zona: '',
        direccion: '',
        referencia: '',
        observaciones: '',
      },
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
    this.getDataInmueble(),
    this.buscarPropietario()
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
      this.$axios.$get('inmueble').then(response =>{
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

    buscarPropietario() {
      // Filtrar la lista de inmuebleData basándose en el tipo de documento introducido
      this.inmuebleEncontrado = this.inmuebleData.find(prop => prop.numero_expediente === this.nroExpediente);
      
      if (this.inmuebleEncontrado) {
        // Se encontró un propietario con el tipo de documento especificado
        // Aquí podrías realizar cualquier lógica adicional o cargar más datos del propietario
        this.inmueble.numero_expediente = this.inmuebleEncontrado.numero_expediente;
        this.inmueble.fecha_inscripcion = this.inmuebleEncontrado.fecha_inscripcion;
        this.inmueble.tipo = this.inmuebleEncontrado.tipo;
        this.inmueble.status = this.inmuebleEncontrado.status;
        this.inmueble.ambito = this.inmuebleEncontrado.ambito;
        this.inmueble.sector = this.inmuebleEncontrado.sector;
        this.inmueble.manzana = this.inmuebleEncontrado.manzana;
        this.inmueble.parcela = this.inmuebleEncontrado.parcela;
        this.inmueble.subparcela = this.inmuebleEncontrado.subparcela;
        this.inmueble.nivel = this.inmuebleEncontrado.nivel;
        this.inmueble.unidad = this.inmuebleEncontrado.unidad;
        this.inmueble.urbanizacion = this.inmuebleEncontrado.urbanizacion;
        this.inmueble.calle = this.inmuebleEncontrado.calle;
        this.inmueble.conjunto_residencial = this.inmuebleEncontrado.conjunto_residencial;
        this.inmueble.edificio = this.inmuebleEncontrado.edificio;
        this.inmueble.avenida = this.inmuebleEncontrado.avenida;
        this.inmueble.torre = this.inmuebleEncontrado.torre;
        this.inmueble.numero_civico = this.inmuebleEncontrado.numero_civico;
        this.inmueble.numero_casa = this.inmuebleEncontrado.numero_casa;
        this.inmueble.numero_piso = this.inmuebleEncontrado.numero_piso;
        this.inmueble.telefono = this.inmuebleEncontrado.telefono;
        this.inmueble.zona = this.inmuebleEncontrado.zona;
        this.inmueble.direccion = this.inmuebleEncontrado.direccion;
        this.inmueble.referencia = this.inmuebleEncontrado.referencia;
        this.inmueble.observaciones = this.inmuebleEncontrado.observaciones;
      } else {
        // No se encontró un propietario con el tipo de documento especificado
        // Puedes reiniciar los campos o mostrar un mensaje de error, etc.
        this.inmueble.numero_expediente = '';
        this.inmueble.fecha_inscripcion = '';
        this.inmueble.numero_documento = '';
        this.inmueble.status = '';
        this.inmueble.ambito = '';
        this.inmueble.sector = '';
        this.inmueble.manzana = '';
        this.inmueble.parcela = '';
        this.inmueble.subparcela = '';
        this.inmueble.nivel = '';
        this.inmueble.unidad = '';
        this.inmueble.urbanizacion = '';
        this.inmueble.calle = '';
        this.inmueble.conjunto_residencial = '';
        this.inmueble.edificio = '';
        this.inmueble.avenida = '';
        this.inmueble.torre = '';
        this.inmueble.numero_civico = '';
        this.inmueble.numero_casa = '';
        this.inmueble.numero_piso = '';
        this.inmueble.telefono = '';
        this.inmueble.zona = '';
        this.inmueble.direccion = '';
        this.inmueble.referencia = '';
        this.inmueble.observaciones = '';
        
        // Otros campos del propietario
      }
    },

    saveData() {
      const formData = new FormData();
      formData.append('numero_expediente', this.inmueble.numero_expediente);
      formData.append('fecha_inscripcion', this.inmueble.fecha_inscripcion);
      formData.append('numero_documento', this.inmueble.numero_documento);
      formData.append('status', this.inmueble.status);
      formData.append('ambito', this.inmueble.ambito);
      formData.append('sector', this.inmueble.sector);
      formData.append('manzana', this.inmueble.manzana);
      formData.append('parcela', this.inmueble.parcela);
      formData.append('subparcela', this.inmueble.subparcela);
      formData.append('nivel', this.inmueble.nivel);
      formData.append('unidad', this.inmueble.unidad);
      formData.append('urbanizacion', this.inmueble.urbanizacion);
      formData.append('calle', this.inmueble.calle);
      formData.append('conjunto_residencial', this.inmueble.conjunto_residencial);
      formData.append('edificio', this.inmueble.edificio);
      formData.append('avenida', this.inmueble.avenida);
      formData.append('torre', this.inmueble.torre);
      formData.append('numero_civico', this.inmueble.numero_civico);
      formData.append('numero_casa', this.inmueble.numero_casa);
      formData.append('numero_piso', this.inmueble.numero_piso);
      formData.append('telefono', this.inmueble.telefono);
      formData.append('zona', this.inmueble.zona);
      formData.append('direccion', this.inmueble.direccion);
      formData.append('referencia', this.inmueble.referencia);
      formData.append('observaciones', this.inmueble.observaciones);

      this.$axios.$patch(`inmueble/${this.inmuebleEncontrado.id}/`, formData)
      .then(res => {
        console.log(res.data);
        this.$alert("success", { desc: "Se ha editado un inmueble con éxito", hash: 'knsddcssdc', title: 'Edición de inmueble' });
      })
      .catch(err => {
        console.error(err);
      });
    }, 
  }
};
</script>

<style src="~/assets/styles/pages/actualizacion-inmueble.scss" lang="scss" />