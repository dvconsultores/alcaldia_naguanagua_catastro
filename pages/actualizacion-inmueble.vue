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
          <v-text-field v-model="inmuebleData.numero_expediente" class="small-input mobile-inputs" label="Nro. Expediente"
            disabled></v-text-field>

          <v-menu v-model="menu" :close-on-content-click="false" :nudge-right="5" transition="scale-transition" offset-y
            min-width="auto">
            <template #activator="{ on, attrs }">
              <v-text-field v-model="inmuebleData.fecha_inscripcion" class="small-input mobile-inputs"
                label="Fecha de última Compra" append-icon="mdi-calendar" v-bind="attrs" v-on="on"></v-text-field>
            </template>
            <v-date-picker v-model="nuevaFecha" label="Fecha" color="blue" header-color="#810880"
              class="custom-date-picker" @input="formatoFecha()"></v-date-picker>
          </v-menu>

          <v-autocomplete v-model="inmuebleData.tipo" class="big-autocomplete mobile-inputs" label="Tipo de Inmueble"
            :items="tipoInmuebleData" item-text="descripcion" item-value="id"></v-autocomplete>

          <v-autocomplete v-model="inmuebleData.status" class="big-autocomplete mobile-inputs" label="Estatus Actual"
            :items="estatusInmuebleData" item-text="descripcion" item-value="id"></v-autocomplete>
        </div>
      </div>

      <div class="direccion-container">
        <div class="title-morado">
          <p class="direccion-title">
            Dirección del Inmueble
          </p>
        </div>

        <div class="direccion-inputs-container">
          <v-autocomplete v-model="inmuebleData.ambito" class="big-autocomplete mobile-inputs" label="Ambito*"
            :items="ambitoData" item-text="descripcion" item-value="id"></v-autocomplete>

          <v-autocomplete v-model="inmuebleData.sector" class="big-autocomplete mobile-inputs" label="Sector*"
            :items="sectorData" item-text="descripcion" item-value="id"></v-autocomplete>

          <v-autocomplete v-model="inmuebleData.manzana" class="big-autocomplete mobile-inputs" label="Manzana*"
            :items="manzanaData" item-text="codigo" item-value="id"></v-autocomplete>

          <v-autocomplete v-model="inmuebleData.parcela" class="big-autocomplete mobile-inputs" label="Parcela*"
            :items="parcelaData" item-text="codigo" item-value="id"></v-autocomplete>

          <v-autocomplete v-model="inmuebleData.subparcela" class="big-autocomplete mobile-inputs" label="Sub-Parcela*"
            :items="subParcelaData" item-text="codigo" item-value="id"></v-autocomplete>

          <v-autocomplete v-model="inmuebleData.nivel" class="big-autocomplete mobile-inputs" label="Nivel"
            :items="nivelInmuebleData" item-text="descripcion" item-value="id"></v-autocomplete>

          <v-autocomplete v-model="inmuebleData.unidad" class="big-autocomplete mobile-inputs" label="Unidad"
            :items="unidadInmuebleData" item-text="descripcion" item-value="id"></v-autocomplete>

          <v-autocomplete v-model="inmuebleData.urbanizacion" class="big-autocomplete mobile-inputs"
            label="Urbanización / Barrio*" :items="urbanizacionData" item-text="nombre" item-value="id"></v-autocomplete>

          <v-autocomplete v-model="inmuebleData.calle" class="big-autocomplete mobile-inputs" label="Calle"
            :items="calleData" item-text="nombre" item-value="id"></v-autocomplete>

          <v-autocomplete v-model="inmuebleData.conjunto_residencial" class="big-autocomplete mobile-inputs"
            label="Conj. Residencial / Centro Comercial" :items="conjuntoResidencialData" item-text="nombre"
            item-value="id"></v-autocomplete>

          <v-autocomplete v-model="inmuebleData.edificio" class="big-autocomplete mobile-inputs" label="Edificio"
            :items="edificioData" item-text="nombre" item-value="id"></v-autocomplete>

          <v-autocomplete v-model="inmuebleData.avenida" class="big-autocomplete mobile-inputs" label="Avenida"
            :items="avenidaData" item-text="nombre" item-value="id"></v-autocomplete>

          <v-autocomplete v-model="inmuebleData.torre" class="big-autocomplete mobile-inputs" label="Torre"
            :items="torreData" item-text="nombre" item-value="id"></v-autocomplete>

          <v-text-field v-model="inmuebleData.numero_civico" class="small-input mobile-inputs"
            label="Nro. Cívico"></v-text-field>

          <v-text-field v-model="inmuebleData.numero_casa" class="small-input mobile-inputs"
            label="Nro. Casa"></v-text-field>

          <v-text-field v-model="inmuebleData.numero_piso" class="small-input mobile-inputs" label="Piso"></v-text-field>

          <v-text-field v-model="inmuebleData.telefono" class="small-input mobile-inputs" label="Teléfono"></v-text-field>

          <v-autocomplete v-model="inmuebleData.zona" class="small-input mobile-inputs" label="Zona"
            :items="dataZona" item-text="descripcion" item-value="id"></v-autocomplete>

          <v-autocomplete v-model="inmuebleData.categorizacion" class="small-input mobile-inputs" label="Categorización"
            :items="dataCategorizacion" item-text="descripcion" item-value="id"></v-autocomplete>

          <v-text-field v-if="accesos.borrar" v-model="inmuebleData.anio" class="small-input mobile-inputs" label="Año inicio deuda"
            :disabled="!accesos.borrar"></v-text-field>

          <v-autocomplete v-if="accesos.borrar" v-model="inmuebleData.periodo" class="big-autocomplete mobile-inputs"
            label="Período inicio deuda*" :items="periodoData" item-text="periodo" item-value="id"
            :disabled="!accesos.borrar"></v-autocomplete>

          <v-textarea v-model="inmuebleData.direccion" class="text-area-input mobile-inputs"
            label="Dirección Completa"></v-textarea>

          <v-textarea v-model="inmuebleData.referencia" class="text-area-input-small mobile-inputs"
            label="Referencia"></v-textarea>

          <v-textarea v-model="inmuebleData.observaciones" class="text-area-input-small mobile-inputs"
            label="Observaciones"></v-textarea>
        </div>
      </div>

      <div class="divrow center mobile-col" style="gap:20px;">
        <v-btn :disabled="disableBotonGuardar" class="btn btn-mobile" @click="dialog_confirmar = true">
          Guardar
        </v-btn>
        <v-btn :disabled="disableBotonImprimir" class="btn btn-mobile" @click="getPDF()">
          Imprimir cédula catastral
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
          <v-btn class="btn dialog-btn" text @click="dialog_confirmar = false"
            style="background-color:#ED057E!important;">No</v-btn>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog
            v-model="dialogWait"
            hide-overlay
            persistent
            width="300"
          >
            <v-card
              color="primary"
              dark
            >
              <v-card-text>
                Por favor espere!!!
                <v-progress-linear
                  indeterminate
                  color="white"
                  class="mb-0"
                ></v-progress-linear>
              </v-card-text>
            </v-card>
    </v-dialog>
  </div>
</template>

<script>
import computeds from '~/mixins/computeds'
import moment from 'moment'
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import QRCode from 'qrcode';

export default {
  name: "Actualizacion-InmueblePage",
  mixins: [computeds],
  data() {
    return {
      inmuebleData: {},
      tipoInmuebleData: [],
      estatusInmuebleData: [],
      ambitoData: [],
      sectorData: [],
      manzanaData: [],
      parcelaData: [],
      subParcelaData: [],
      nivelInmuebleData: [],
      unidadInmuebleData: [],
      urbanizacionData: [],
      calleData: [],
      periodoData: [],
      conjuntoResidencialData: [],
      edificioData: [],
      avenidaData: [],
      torreData: [],
      dataZona: [],
      dataCategorizacion: [],

      IdZona: null,
      dialog_confirmar: false,
      btnGuardarInmuble: false,
      menu: false,
      nuevaFecha: null,
      permido: JSON.parse(JSON.stringify(this.$store.getters.getUser.permisos)),
      accesos: {},
      CorrelativoData: [],
      inmueblePropietariosData: [],
      dataDocumentoPropiedad: [],
      dataFinesFiscales: [],
      dataUbicacionInmueble:[],

      dataValoracionTerreno: [],
      dialogWait: true,
      disableBotonGuardar: false,
      disableBotonImprimir: false,
    }
  },
  head() {
    const title = 'Actualización Inmueble';
    return {
      title,
    }
  },

  async mounted() {
    this.dialogWait = true;
    this.disableBotonGuardar = true;
    this.disableBotonImprimir = true;
    await this.redireccionIdVacio();

  },

  methods: {
    permisos() {
      /********************************************************************************************************
        Validar si este modulo esta dentro de modulos con accceso desde la variable this.$store.getters.getUser
      ******************************************************************************************************* */
      const longitud = this.$options.name.length;
      this.modulo = this.$options.name.substring(0, longitud - 4).toLowerCase();
      // esto valida si este modulo esta dentro de la lista de permitidos segun el modelo de permisos
      console.log('permiso: 1 si , 0 no:', this.permido.filter(permido => permido.modulo.toLowerCase().includes(this.modulo)).length);
      if (this.permido.filter(permido => permido.modulo.toLowerCase().includes(this.modulo)).length) {
        console.log('leer:', (this.permido.filter(permido => permido.modulo.toLowerCase().includes(this.modulo)))[0].leer);
        this.accesos = (this.permido.filter(permido => permido.modulo.toLowerCase().includes(this.modulo)))[0]
        console.log('this.accesos',this.accesos)
      } else {
        this.$router.push('index')
        this.$alert("cancel", { desc: "No está autorizado para accesar a este módulo!!!", hash: 'knsddcssdc', title: 'Error' })
      }
    },
    async redireccionIdVacio() {
      if (this.$store.getters.getExpediente == 'Sin Seleccionar') {
        this.$router.push('consulta-inmueble')
        this.$alert("cancel", { desc: "Debe seleccionar un inmueble para ingresar a este módulo", hash: 'knsddcssdc', title: 'Error' })
      } else {
        await this.permisos();
        await this.getDataTipo();
        await this.getCorrelativo();
        await this.getDataEstatus();
        await this.getDataAmbito();
        await this.getDataSector();
        await this.getDataManzana();
        await this.getDataParcela();
        await this.getDataSubParcela();
        await this.getDataNivel();
        await this.getDataUnidad();
        await this.getDataUrbanizacion();
        await this.getDataCalle();
        await this.getDataPeriodo();
        await this.getDataConjunto();
        await this.getDataEdificio();
        await this.getDataAvenida();
        await this.getDataTorre();
        await this.getDataZona();
        await this.getDataCategorizacion();
        await this.getDataInmueble();
        await this.getIdInmueblePropietarios();
        await this.getDocumentoPropiedad();
        await this.getFinesFiscales();
        await this.getUbicacionInmueble();
        await this.getInmuebleValoracionTerreno();
        this.dialogWait = false;
        this.disableBotonGuardar = false;
        this.disableBotonImprimir = false;
      }
    },

    async getIdInmueblePropietarios() {
      try {
        const response = await this.$axios.$get(`inmueble_propietarios/?inmueble=${this.$store.getters.getExpediente.id}`)
        this.inmueblePropietariosData = response;
        console.log('inmueblePropietariosData', this.inmueblePropietariosData)
      } catch (err) {
        console.log(err);
      }
    },   
    async getDocumentoPropiedad() {
      try {
        const response = await this.$axios.$get('inmueble_propiedad/?inmueble=' + this.$store.getters.getExpediente.id)
        this.dataDocumentoPropiedad = response[0];
        console.log('dataDocumentoPropiedad', this.dataDocumentoPropiedad)
      } catch (err) {
        console.log(err);
      }
    },
    async getInmuebleValoracionTerreno() {
      try {
        const response = await this.$axios.$get(`inmueble_valoracion_terreno/?inmueble=${this.$store.getters.getExpediente.id}`);
        this.dataValoracionTerreno = response[0];
        console.log('this.dataValoracionTerreno', this.dataValoracionTerreno)
      } catch (err) {
        console.log(err);
      }
    },
    async getFinesFiscales() {
      try {
        const response = await this.$axios.$get(`inmueble_faltante/?inmueble=${this.$store.getters.getExpediente.id}`);
        this.dataFinesFiscales = response[0];
        console.log('this.dataFinesFiscales', this.dataFinesFiscales)
      } catch (err) {
        console.log(err);
      }
    },
    async getUbicacionInmueble() {
      try {
        const response = await this.$axios.$get(`inmueble_ubicacion/?inmueble=${this.$store.getters.getExpediente.id}`);
        this.dataUbicacionInmueble = response[0];
        console.log('this.dataUbicacionInmueble', this.dataUbicacionInmueble)
      } catch (err) {
        console.log(err);
      }
    },
    async getCorrelativo() {
      try {
        const response = await this.$axios.$get('correlativo');
        this.CorrelativoData = response;
        console.log('CorrelativoData', this.CorrelativoData)
      } catch (err) {
        console.log(err);
      }
    },
    async getDataZona() {
      try {
        const response = await this.$axios.$get('zona');
        this.dataZona = response;
        console.log('dataZona', this.dataZona)
      } catch (err) {
        console.log(err);
      }
    },
    async getDataCategorizacion() {
      try {
        const response = await this.$axios.$get('categorizacion');
        this.dataCategorizacion = response;
        console.log('dataCategorizacion', this.dataCategorizacion)
      } catch (err) {
        console.log(err);
      }
    },
    async getDataInmueble() {
      try {
        const response = await this.$axios.$get('inmueble/' + this.$store.getters.getExpediente.id);
        this.inmuebleData = response;
        console.log('inmuebleData', this.inmuebleData)
      } catch (err) {
        console.log(err);
      }
    },
    async getDataSector() {
      try {
        const response = await this.$axios.$get('sector');
        this.sectorData = response;
        console.log('sectorData', this.sectorData)
      } catch (err) {
        console.log(err);
      }
    },
    async getDataManzana() {
      try {
        const response = await this.$axios.$get('manzana');
        this.manzanaData = response;
        console.log('manzanaData', this.manzanaData)
      } catch (err) {
        console.log(err);
      }
    },
    async getDataParcela() {
      try {
        const response = await this.$axios.$get('parcela');
        this.parcelaData = response;
        console.log('parcelaData', this.parcelaData)
      } catch (err) {
        console.log(err);
      }
    },
    async getDataSubParcela() {
      try {
        const response = await this.$axios.$get('subparcela');
        this.subParcelaData = response;
        console.log('subParcelaData', this.subParcelaData)
      } catch (err) {
        console.log(err);
      }
    },
    async getDataUrbanizacion() {
      try {
        const response = await this.$axios.$get('urbanizacion');
        this.urbanizacionData = response;
        console.log('urbanizacionData', this.urbanizacionData)
      } catch (err) {
        console.log(err);
      }
    },
    async getDataCalle() {
      try {
        const response = await this.$axios.$get('calle');
        this.calleData = response;
        console.log('calleData', this.calleData)
      } catch (err) {
        console.log(err);
      }
    },
    async getDataPeriodo() {
      try {
        const response = await this.$axios.$get('ic_periodo/?aplica=C');
        this.periodoData = response;
        console.log('periodoData', this.periodoData)
      } catch (err) {
        console.log(err);
      }
    },
    async getDataConjunto() {
      try {
        const response = await this.$axios.$get('conjuntoresidencial');
        this.conjuntoResidencialData = response;
        console.log('conjuntoResidencialData', this.conjuntoResidencialData)
      } catch (err) {
        console.log(err);
      }
    },
    async getDataEdificio() {
      try {
        const response = await this.$axios.$get('edificio');
        this.edificioData = response;
        console.log('edificioData', this.edificioData)
      } catch (err) {
        console.log(err);
      }
    },
    async getDataAvenida() {
      try {
        const response = await this.$axios.$get('avenida');
        this.avenidaData = response;
        console.log('avenidaData', this.avenidaData)
      } catch (err) {
        console.log(err);
      }
    },
    async getDataTorre() {
      try {
        const response = await this.$axios.$get('torre');
        this.torreData = response;
        console.log('torreData', this.torreData)
      } catch (err) {
        console.log(err);
      }
    },
    async getDataTipo() {
      try {
        const response = await this.$axios.$get('tipoinmueble');
        this.tipoInmuebleData = response;
        console.log('tipoInmuebleData', this.tipoInmuebleData)
      } catch (err) {
        console.log(err);
      }
    },
    async getDataEstatus() {
      try {
        const response = await this.$axios.$get('estatusinmueble');
        this.estatusInmuebleData = response;
        console.log('estatusInmuebleData', this.estatusInmuebleData)
      } catch (err) {
        console.log(err);
      }
    },
    async getDataAmbito() {
      try {
        const response = await this.$axios.$get('ambito');
        this.ambitoData = response;
        console.log('ambitoData', this.ambitoData)
      } catch (err) {
        console.log(err);
      }
    },
    async getDataNivel() {
      try {
        const response = await this.$axios.$get('nivelinmueble');
        this.nivelInmuebleData = response;
        console.log('nivelInmuebleData', this.nivelInmuebleData)
      } catch (err) {
        console.log(err);
      }
    },
    async getDataUnidad() {
      try {
        const response = await this.$axios.$get('unidadinmueble');
        this.unidadInmuebleData = response;
        console.log('unidadInmuebleData', this.unidadInmuebleData)
      } catch (err) {
        console.log(err);
      }
    },


    formatoFecha() {
      if (this.nuevaFecha) {
        this.inmuebleData.fecha_inscripcion = moment(this.nuevaFecha).format('YYYY-MM-DD');
      }
    },

    async saveData() 
      {await this.saveData_ok()}
      ,

    async saveData_ok() {
      this.btnGuardarInmuble = true
      this.dialogWait = true
      this.disableBotonGuardar = true;
      this.disableBotonImprimir = true;

      const formData = new FormData();
      this.inmuebleData.fecha_inscripcion ? formData.append('fecha_inscripcion', this.inmuebleData.fecha_inscripcion) : '';
      this.inmuebleData.tipo ? formData.append('tipo', this.inmuebleData.tipo) : '';
      this.inmuebleData.status ? formData.append('status', this.inmuebleData.status) : '';
      this.inmuebleData.ambito ? formData.append('ambito', this.inmuebleData.ambito) : '';
      this.inmuebleData.anio ? formData.append('anio', this.inmuebleData.anio) : '';
      this.inmuebleData.periodo ? formData.append('periodo', this.inmuebleData.periodo) : '';
      this.inmuebleData.sector ? formData.append('sector', this.inmuebleData.sector) : '';
      this.inmuebleData.manzana ? formData.append('manzana', this.inmuebleData.manzana) : '';
      this.inmuebleData.parcela ? formData.append('parcela', this.inmuebleData.parcela) : '';
      this.inmuebleData.subparcela ? formData.append('subparcela', this.inmuebleData.subparcela) : '';
      this.inmuebleData.nivel ? formData.append('nivel', this.inmuebleData.nivel) : '';
      this.inmuebleData.unidad ? formData.append('unidad', this.inmuebleData.unidad) : '';
      this.inmuebleData.urbanizacion ? formData.append('urbanizacion', this.inmuebleData.urbanizacion) : '';
      this.inmuebleData.calle ? formData.append('calle', this.inmuebleData.calle) : '';
      this.inmuebleData.conjunto_residencial ? formData.append('conjunto_residencial', this.inmuebleData.conjunto_residencial) : '';
      this.inmuebleData.edificio ? formData.append('edificio', this.inmuebleData.edificio) : '';
      this.inmuebleData.avenida ? formData.append('avenida', this.inmuebleData.avenida) : '';
      this.inmuebleData.torre ? formData.append('torre', this.inmuebleData.torre) : '';
      this.inmuebleData.numero_civico ? formData.append('numero_civico', this.inmuebleData.numero_civico) : '';
      this.inmuebleData.numero_casa ? formData.append('numero_casa', this.inmuebleData.numero_casa) : '';
      this.inmuebleData.numero_piso ? formData.append('numero_piso', this.inmuebleData.numero_piso) : '';
      this.inmuebleData.telefono ? formData.append('telefono', this.inmuebleData.telefono) : '';
      this.inmuebleData.zona ? formData.append('zona', this.inmuebleData.zona) : '';
      this.inmuebleData.categorizacion ? formData.append('categorizacion', this.inmuebleData.categorizacion) : '';

      this.inmuebleData.direccion ? formData.append('direccion', this.inmuebleData.direccion) : '';
      this.inmuebleData.referencia ? formData.append('referencia', this.inmuebleData.referencia) : '';
      this.inmuebleData.observaciones ? formData.append('observaciones', this.inmuebleData.observaciones) : '';


      try {
        const res = await this.$axios.$patch(`inmueble/${this.$store.getters.getExpediente.id}/`, formData);
          console.log('res.data', res)
          this.$store.dispatch('storeExpediente', res)
          this.btnGuardarInmuble = false;
          this.dialog_confirmar = false;
          this.$alert("success", { desc: "Se ha editado un inmueble con éxito", hash: 'knsddcssdc', title: 'Edición de inmueble' });
          await this.generarPDF()
          this.dialogWait = false
          this.disableBotonGuardar = false;
          this.disableBotonImprimir = false;
      } catch (err) {
        console.error(err)
          this.btnGuardarInmuble = false;
          this.dialog_confirmar = false;
          this.dialogWait = false;
          this.disableBotonGuardar = false;
          this.disableBotonImprimir = false;
      }
    },

    async  generarPDF() {
      const pdf = new jsPDF('p', 'mm', 'legal');
      const maxWidth = 180;
      let textLines =0;

      const fechaActual = new Date();
      const dia = fechaActual.getDate().toString().padStart(2, '0'); // Obtén el día y asegúrate de tener 2 dígitos.
      const mes = (fechaActual.getMonth() + 1).toString().padStart(2, '0'); // El mes comienza desde 0, por lo que sumamos 1.
      const anio = fechaActual.getFullYear();
      const fechaSinHora = `${dia}/${mes}/${anio}`;
      const datos = {
          ficha: this.$store.getters.getExpediente.numero_expediente
        };
      const dataString = JSON.stringify(datos);

      const encodedData = encodeURIComponent(dataString);

      const url = `${this.$axios.defaults.baseURL}CertificaFicha/?data=${encodedData}`;
      console.log('url',url)
      const qrCodeDataURL = await QRCode.toDataURL(url);

      // Agrega el código QR al PDF
      //pdf.addImage(qrCodeDataURL, 'PNG', qrX, qrY, qrWidth, qrHeight);


      const img1 = new Image();
      const img2 = new Image();
      const img3 = new Image();
      var ruta1 = this.CorrelativoData[0].Logo1;
      if (ruta1.includes("catastro_back")) {
        // Concatenar "/catastro_back"
        ruta1 = ruta1.replace("catastro_back", "catastro_back/catastro_back");
      }
      var ruta2 = this.CorrelativoData[0].Logo2;
      if (ruta2.includes("catastro_back")) {
        // Concatenar "/catastro_back"
        ruta2 = ruta2.replace("catastro_back", "catastro_back/catastro_back");
      }
      img1.src = ruta1;
      img2.src = ruta2;
      img1.onload = function () {
        pdf.addImage(img1, 'PNG', 10, 15, 30, 30); // Logotipo izquierdo
      };
      //----------------------------------------------------- MESURA
      var ruta3 = this.dataUbicacionInmueble.imagan_plano_mesura;

      if (ruta3 !=null&& ruta3 !='null') {
        if (ruta3.includes("catastro_back")) {
          // Concatenar "/catastro_back"
          ruta3 = ruta3.replace("catastro_back", "catastro_back/catastro_back");
        }
        img3.src = ruta3;
      }
      let widthImagen = 0
      let heightImagen = 0 
      //-------------------------------------------------fin mesura

      // Establecer el tamaño de fuente para el encabezado de la tabla
      const fontSizeTitle = 15; // Tamaño de fuente para el encabezado
      const fontSizeHead = 8; // Tamaño de fuente para el encabezado
      //const fontSizeBody = 8; // Tamaño de fuente para el cuerpo de la tabla
      //let pageHeight = pdf.internal.pageSize.height;
      pdf.addImage(img1, 'PNG', 10, 15, 30, 30); // Logotipo izquierdo

      pdf.addImage(qrCodeDataURL, 'PNG', 175, 12, 23, 23); // CODIGO QR
      pdf.setFontSize(fontSizeHead + 2);
      pdf.text(100, 20, 'REPÚBLICA BOLIVARIANA DE VENEZUELA', null, null, 'center');
      pdf.text(100, 25, 'ESTADO CARABOBO', null, null, 'center');
      pdf.text(100, 30, 'ALCALDÍA DEL MUNICIPIO NAGUANAGUA', null, null, 'center');
      pdf.text(100, 35, 'DIRECCIÓN DE CATASTRO', null, null, 'center');
      pdf.setFontSize(fontSizeTitle);
      //pdf.text(100, 45, 'CÉDULA CATASTRAL', null, null, 'center');
      pdf.text(100, 45, this.dataDocumentoPropiedad.descripcion_tipodocumento, null, null, 'center');

      pdf.setFontSize(fontSizeHead);
      pdf.setFont("helvetica", "normal");
      let startY = 35;



      // Opciones comunes para todas las tablas
      const commonOptions = {
        styles: { fontSize: 8, halign: 'center' },
        theme: 'grid',
        headStyles: { fillColor: (255, 192, 203), textColor: (255, 0, 0), lineColor: (255, 0, 0), cellPadding: 1 },
        bodyStyles: { textColor: (255, 0, 0), lineColor: (255, 0, 0), cellPadding: 1 },

      };

      let columns = ["FECHA"];
      let data = [[fechaSinHora]];

      // Dibujar la primera tabla
      pdf.autoTable({
        ...commonOptions,
        columns: columns,
        body: data,
        tableWidth: 30,
        startY: startY,
        margin: { left: 172 },
      });
      startY = startY + 13
      // Datos de las tablas
      columns = ["Efed", "Mun", "Parr", "Amb", "Sec", "Man", "Par", "SubP", "Niv", "Und"];
      data = [["08", "10", "01", this.inmuebleData.codigo_ambito, this.inmuebleData.codigo_sector, this.inmuebleData.codigo_manzana, this.inmuebleData.codigo_parcela, this.inmuebleData.codigo_subparcela, this.inmuebleData.codigo_nivel, this.inmuebleData.codigo_unidad]];

      // Dibujar la primera tabla
      pdf.autoTable({
        ...commonOptions,
        columns: columns,
        body: data,
        tableWidth: 90,
        startY: startY,
        //margin: {left: 200} ,
      });
      columns = ["No. EXPEDIENTE"];
      data = [[this.inmuebleData.numero_expediente]];

      // Dibujar la primera tabla
      pdf.autoTable({
        ...commonOptions,
        columns: columns,
        body: data,
        tableWidth: 30,
        startY: startY,
        margin: { left: 172 },
      });
      startY = startY + 13

      let concatenacionNombres = '';
      

      // Recorre la lista de registros y concatena "nombre" + "numero_documento"
      for (const registro of this.inmueblePropietariosData) {
        concatenacionNombres += registro.propietario.numero_documento + ' ' + registro.propietario.nombre + ', ';
      }
      let concatenacionNombresPropietarios = concatenacionNombres;
      columns = ["Propietario(s)."];
      data = [[concatenacionNombres]];
      // Dibujar la primera tabla
      pdf.autoTable({
        ...commonOptions,
        headStyles: { fillColor: (255, 192, 203), textColor: (255, 0, 0), cellPadding: 1, halign: 'left' },
        bodyStyles: { textColor: (255, 0, 0), cellPadding: 1, halign: 'left' },
        columns: columns,
        body: data,
        startY: startY,
      });

      textLines = pdf.splitTextToSize(concatenacionNombres, maxWidth);
      // Agregar cada línea al PDF
      textLines.forEach((line) => {
        console.log(line);
        startY += 2;
      });

      if (this.dataDocumentoPropiedad.numero_documento !== 'null' && this.dataDocumentoPropiedad.numero_documento !== '') {
        startY = startY + 15
        pdf.setFontSize(fontSizeHead);
        pdf.setFont("helvetica", "bold");
        pdf.text('1.- Datos del documento.', 15, startY);
        pdf.setFont("helvetica", "normal");
        startY = startY + 2
        columns = ["Fecha", "Nro. Doc.", "Nro.Matrícula", "Año libro real", "M2 Terreno", "Valor Terreno", "M2 Construcción", "Valor Construcción"];
        data = [[this.dataDocumentoPropiedad.fecha_documento !== "null" ? this.dataDocumentoPropiedad.fecha_documento : ' ',
        this.dataDocumentoPropiedad.numero_documento !== "null" ? this.dataDocumentoPropiedad.numero_documento : ' ',
        this.dataDocumentoPropiedad.matricula_documento !== "null" ? this.dataDocumentoPropiedad.matricula_documento : ' ',
        this.dataDocumentoPropiedad.anio_folio_documento !== "null" ? this.dataDocumentoPropiedad.anio_folio_documento : ' ',
        this.dataDocumentoPropiedad.area_terreno !== "null" ? parseFloat(this.dataDocumentoPropiedad.area_terreno.toString()).toFixed(2) : ' ',
        this.dataDocumentoPropiedad.valor_terreno !== "null" ? (isNaN(parseFloat(this.dataDocumentoPropiedad.valor_terreno)) ? this.dataDocumentoPropiedad.valor_terreno : parseFloat(this.dataDocumentoPropiedad.valor_terreno).toFixed(2)) : ' ',
        this.dataDocumentoPropiedad.area_construccion !== "null" ? parseFloat(this.dataDocumentoPropiedad.area_construccion.toString()).toFixed(2) : ' ',
        this.dataDocumentoPropiedad.valor_construccion !== "null" ? (isNaN(parseFloat(this.dataDocumentoPropiedad.valor_construccion)) ? this.dataDocumentoPropiedad.valor_construccion : parseFloat(this.dataDocumentoPropiedad.valor_construccion).toFixed(2)) : ' ']];
        pdf.autoTable({
          ...commonOptions,
          columns: columns,
          startY: startY,
          body: data,
        });
      }
      if (this.dataDocumentoPropiedad.numero_terreno !== 'null' && this.dataDocumentoPropiedad.numero_terreno !== '') {
        startY = startY + 15
        pdf.setFontSize(fontSizeHead);
        pdf.setFont("helvetica", "bold");
        pdf.text('1.1.- Datos de terreno según documento.', 15, startY);
        pdf.setFont("helvetica", "normal");
        startY = startY + 2
        columns = ["Fecha", "Nro. Doc.", "Folios", "Prot.", "Tomo", "Sup. M2", "Valor Bs. Total"];
        data = [
          [
            //this.dataDocumentoPropiedad.fecha_terreno !== "null"  ? this.dataDocumentoPropiedad.fecha_terreno.split('-').reverse().join('-') : ' ',
            this.dataDocumentoPropiedad.fecha_terreno !== "null"  ? this.dataDocumentoPropiedad.fecha_terreno : ' ',
            this.dataDocumentoPropiedad.numero_terreno !== "null" ? this.dataDocumentoPropiedad.numero_terreno : ' ',
            this.dataDocumentoPropiedad.folio_terreno !== "null" ? this.dataDocumentoPropiedad.folio_terreno : ' ',
            this.dataDocumentoPropiedad.protocolo_terreno !== "null" ? this.dataDocumentoPropiedad.protocolo_terreno : ' ',
            this.dataDocumentoPropiedad.tomo_terreno !== "null" ? this.dataDocumentoPropiedad.tomo_terreno : ' ',
            this.dataDocumentoPropiedad.area_terreno !== "null" ? parseFloat(this.dataDocumentoPropiedad.area_terreno.toString()).toFixed(2) : ' ',
            this.dataDocumentoPropiedad.valor_terreno !== "null" ? (isNaN(parseFloat(this.dataDocumentoPropiedad.valor_terreno)) ? this.dataDocumentoPropiedad.valor_terreno : parseFloat(this.dataDocumentoPropiedad.valor_terreno).toFixed(2)): ' '

          ]];


        pdf.autoTable({
          ...commonOptions,
          columns: columns,
          startY: startY,
          body: data,
        });
      }
      if (this.dataDocumentoPropiedad.numero_construccion !== 'null' && this.dataDocumentoPropiedad.numero_construccion !== '') {
        startY = startY + 15
        pdf.setFontSize(fontSizeHead);
        pdf.setFont("helvetica", "bold");
        pdf.text('1.2.- Datos de construcción según documento.', 15, startY);
        pdf.setFont("helvetica", "normal");
        startY = startY + 2
        columns = ["Fecha", "Nro. Doc.", "Folios", "Prot.", "Tomo", "Sup. M2", "Valor Bs. Total"];
        data = [[this.dataDocumentoPropiedad.fecha_construccion !== "null" ? this.dataDocumentoPropiedad.fecha_construccion : ' ',
        this.dataDocumentoPropiedad.numero_construccion !== "null" ? this.dataDocumentoPropiedad.numero_construccion : ' ',
        this.dataDocumentoPropiedad.folio_construccion !== "null" ? this.dataDocumentoPropiedad.folio_construccion : ' ',
        this.dataDocumentoPropiedad.protocolo_construccion !== "null" ? this.dataDocumentoPropiedad.protocolo_construccion : ' ',
        this.dataDocumentoPropiedad.tomo_construccion !== "null" ? this.dataDocumentoPropiedad.tomo_construccion : ' ',
        this.dataDocumentoPropiedad.area_construccion !== "null" ? parseFloat(this.dataDocumentoPropiedad.area_construccion.toString()).toFixed(2): ' ',
        this.dataDocumentoPropiedad.valor_construccion !== "null" ? (isNaN(parseFloat(this.dataDocumentoPropiedad.valor_construccion)) ? this.dataDocumentoPropiedad.valor_construccion : parseFloat(this.dataDocumentoPropiedad.valor_construccion).toFixed(2)) : ' ']];
        pdf.autoTable({
          ...commonOptions,
          columns: columns,
          startY: startY,
          body: data,
        });
      }

      startY = startY + 15
      pdf.setFontSize(fontSizeHead);
      pdf.setFont("helvetica", "bold");
      pdf.text('1.3.- Ubicación.', 15, startY);
      pdf.setFont("helvetica", "normal");
      startY = startY + 2

      columns = ["Urbanización/Barrio"]; 
      data = [[this.inmuebleData.nombre_urbanizacion]];
      pdf.autoTable({
        ...commonOptions,
        columns: columns,
        startY: startY,
        body: data,
      });

      startY = startY + 12
      columns = ["Calle", "Avenida"];
      data = [[this.inmuebleData.nombre_calle,
      this.inmuebleData.nombre_avenida]];
      pdf.autoTable({
        ...commonOptions,
        columns: columns,
        startY: startY,
        body: data,
      });
      startY = startY + 12
      columns = ["Conj. Residencial", "Edificio"];
      data = [[this.inmuebleData.nombre_conjunto_residencial,
      this.inmuebleData.nombre_edificio]];
      pdf.autoTable({
        ...commonOptions,
        columns: columns,
        startY: startY,
        body: data,
      });
      startY = startY + 12
      columns = ["Tipo de inmueble", "Número", "Torre", "Piso Nro.", "Nro. Cívico"];
      data = [[this.inmuebleData.descripcion_tipo,
      this.inmuebleData.numero_casa,
      this.inmuebleData.nombre_torre,
      this.inmuebleData.numero_piso !== 'nan' ? this.inmuebleData.numero_piso : ' ',
      this.inmuebleData.numero_civico !== 'nan' ? this.inmuebleData.numero_civico : ' ']];
      pdf.autoTable({
        ...commonOptions,
        columns: columns,
        startY: startY,
        body: data,
      });
      startY = startY + 12
      concatenacionNombres= (this.inmuebleData.referencia !== 'nan' && this.inmuebleData.referencia !== 'null' && this.inmuebleData.referencia !== null) ? this.inmuebleData.referencia : ' '
      columns = ["1.5.- Referencia"];
      data = [[concatenacionNombres]];
      pdf.autoTable({
        ...commonOptions,
        headStyles: { fillColor: (255, 192, 203), textColor: (255, 0, 0), cellPadding: 1, halign: 'left' },
        bodyStyles: { textColor: (255, 0, 0), cellPadding: 1, halign: 'left' },
        columns: columns,
        startY: startY,
        body: data,
      });
      textLines = pdf.splitTextToSize(concatenacionNombres, maxWidth);
      // Agregar cada línea al PDF
      textLines.forEach((line) => {
        console.log(line);
        startY += 2;
      });

      startY = startY + 15
      pdf.setFontSize(fontSizeHead);
      pdf.setFont("helvetica", "bold");
      pdf.text('1.6.- Linderos.', 15, startY);
      pdf.setFont("helvetica", "normal");
      startY = startY + 5
      pdf.text('Norte:', 15, startY);
      pdf.setFont("helvetica", "bold");
      pdf.text((this.dataDocumentoPropiedad.lindero_norte !== 'null' && this.dataDocumentoPropiedad.lindero_norte.replace(/\s/g, '') !== ' ') ? this.dataDocumentoPropiedad.lindero_norte : ' ', 30, startY);
      pdf.setFont("helvetica", "normal");
      startY = startY + 5
      pdf.text('Sur:', 15, startY);
      pdf.setFont("helvetica", "bold");
      pdf.text((this.dataDocumentoPropiedad.lindero_sur !== 'null' && this.dataDocumentoPropiedad.lindero_sur.replace(/\s/g, '') !== ' ') ? this.dataDocumentoPropiedad.lindero_sur : ' ', 30, startY);
      pdf.setFont("helvetica", "normal");
      startY = startY + 5
      pdf.text('Este:', 15, startY);
      pdf.setFont("helvetica", "bold");
      pdf.text((this.dataDocumentoPropiedad.lindero_este !== 'null' && this.dataDocumentoPropiedad.lindero_este.replace(/\s/g, '') !== ' ') ? this.dataDocumentoPropiedad.lindero_este : ' ', 30, startY);
      pdf.setFont("helvetica", "normal");
      startY = startY + 5
      pdf.text('Oeste:', 15, startY);
      pdf.setFont("helvetica", "bold");
      pdf.text((this.dataDocumentoPropiedad.lindero_oeste !== 'null' && this.dataDocumentoPropiedad.lindero_oeste.replace(/\s/g, '') !== ' ') ? this.dataDocumentoPropiedad.lindero_oeste : ' ', 30, startY);
      pdf.setFont("helvetica", "normal");
      startY = startY + 7


      let longText = "El suscrito Director(a) de la dirección de catastro de la Alcaldía Bolivariana de Naguanagua del Estado Carabobo, hace constar que el (los) ciudadano(s) " + concatenacionNombres
      longText = longText + " ha(n) suminstrado para su inscripción o actualización los recaudos correspondientes a un inmueble"
      longText = longText + " de su propiedad debidamente identificado en este documento. Quedando a salvo derecho de terceras personas."

      // Tamaño máximo de la línea
     


      // Dividir el texto en líneas
      textLines = pdf.splitTextToSize(longText, maxWidth);

      // Agregar cada línea al PDF
      textLines.forEach((line) => {
        pdf.text(15, startY, line);
        startY += 4;
      });
      startY = startY + 2
      pdf.setFontSize(fontSizeHead);
      pdf.setFont("helvetica", "bold");
      pdf.text('2.- Solo para fines fiscales - Alcaldía', 15, startY);
      pdf.setFont("helvetica", "normal");
      startY = startY + 2
      columns = ["2.1 Superficie de construcción M2", "2.1 Superficie de terreno M2"];
      data = [[
      ((this.dataFinesFiscales.cedula !== 'null' && this.dataFinesFiscales.cedula !== ''&&  this.dataFinesFiscales.cedula !== null)? this.dataFinesFiscales.cedula : ' ')? this.dataFinesFiscales.cedula : ' ',
      ((this.dataFinesFiscales.documentopropiedad !== 'null' && this.dataFinesFiscales.documentopropiedad !== ''&&  this.dataFinesFiscales.documentopropiedad !== null)? this.dataFinesFiscales.documentopropiedad : ' ')  ? this.dataFinesFiscales.documentopropiedad : ' ']];
      pdf.autoTable({
        ...commonOptions,
        columns: columns,
        startY: startY,
        body: data,
      });
      startY = startY + 15
      pdf.setFontSize(fontSizeHead);
      pdf.setFont("helvetica", "bold");
      pdf.text('2.2- Observaciones', 15, startY);
      pdf.setFont("helvetica", "normal");
      startY = startY + 5


      longText = (this.dataValoracionTerreno.observaciones != null && this.dataValoracionTerreno.observaciones !== 'null' && this.dataValoracionTerreno.observaciones !== '') ? this.dataValoracionTerreno.observaciones : ' '

      // Dividir el texto en líneas
      textLines = pdf.splitTextToSize(longText, maxWidth);

      // Agregar cada línea al PDF
      textLines.forEach((line) => {
        pdf.text(15, startY, line);
        startY += 3;
      });
      pdf.setFontSize(fontSizeHead);
      pdf.setFont("helvetica", "bold");

      longText = "YO, " + concatenacionNombresPropietarios + " Declaro que son ciertos los datos plasmados en el presente documento."
      textLines = pdf.splitTextToSize(longText, maxWidth);
      textLines.forEach((line) => {
        pdf.text(15, startY, line);
        startY += 3;
      });
      pdf.setFont("helvetica", "normal");

      startY = startY + 8
      pdf.text(50, startY, '_________________________________', null, null, 'center');
      pdf.text(150, startY,'_________________________________', null, null, 'center');
      startY = startY + 4
      pdf.text(50, startY, 'RECIBIDO POR', null, null, 'center');
      pdf.text(150, startY, 'FIRMA PROPIETARIO OCUPANTE', null, null, 'center');
      startY = startY + 8
      pdf.text(50, startY, '_________________________________', null, null, 'center');
      pdf.text(150, startY,'_________________________________', null, null, 'center');
      startY = startY + 4
      pdf.text(50, startY, 'ENTREGADO POR', null, null, 'center');
      pdf.text(150, startY, 'FIRMA DEL DIRECTOR', null, null, 'center');

      startY = startY + 8
      pdf.setFontSize(6);
      pdf.setFont("helvetica", "bold");

      longText = "El presente documento cumple con el pago de timbre fiscal de 0.30 U.T. según Gaceta Extraordinaria Nro. 5864 de fecha 27-10-2016. "
      longText = longText + "Para que este documento tenga validez, debe presentar sello humedo y firma de la DIRECCION DE CATASTRO, Sello humedo y firma de la Taquilla de Catastro y sello de seguridad."

      textLines = pdf.splitTextToSize(longText, maxWidth);
      textLines.forEach((line) => {
        pdf.text(15, startY, line);
        startY += 3;
      });

      startY = startY + 3
      longText = "ESTA ADMINISTRACIÓN SE RESERVA EL DERECHO A INSPECCIONAR EL INMUEBLE EN CUALQUIER MOMENTO CON POSTERIORIDAD A LA EMISIÓN DE LA CÉDULA CATASTRAL O CERTIFICADO DE EMPADRONAMIENTO, "
      longText = longText + "Y EN CASO DE QUE SE CONSTATE ALTERACIÓN, MODIFICACIÓN O DISPARIDAD EN EL INMUEBLE CON RESPECTO A LOS DATOS SUMINISTRADOS O DISPARIDAD EN RELACIÓN A LOS DATOS DEL DOCUMENTO DE PROPIEDAD, "
      longText = longText + "SE PROCEDERA A APERTURAR EL PROCEDIMIENTO ADMINISTRATIVO CORRESPONDIENTE, CONFORME A LO DISPUESTO EN LA LEY QUE RIGE LA MATERIA URBANÍSTICA."

      textLines = pdf.splitTextToSize(longText, maxWidth);
      textLines.forEach((line) => {
        pdf.text(15, startY, line);
        startY += 3;
      });

      pdf.setFont("helvetica", "normal");

      function esperar(tiempo) {
        return new Promise(resolve => {
          setTimeout(resolve, tiempo); // Resuelve la promesa después del tiempo especificado
        });
      }

      if (ruta3 !=null&& ruta3 !='null') {
      pdf.addPage();


//*********************************************************************************************************** */

      img1.onload = function () {
        pdf.addImage(img1, 'PNG', 10, 15, 30, 30); // Logotipo izquierdo
      };
      pdf.addImage(img1, 'PNG', 10, 15, 30, 30); // Logotipo izquierdo
      pdf.addImage(qrCodeDataURL, 'PNG', 175, 13, 23, 23); // CODIGO QR
      pdf.setFontSize(fontSizeHead + 2);
      pdf.text(100, 20, 'REPÚBLICA BOLIVARIANA DE VENEZUELA', null, null, 'center');
      pdf.text(100, 25, 'ESTADO CARABOBO', null, null, 'center');
      pdf.text(100, 30, 'ALCALDÍA DEL MUNICIPIO NAGUANAGUA', null, null, 'center');
      pdf.text(100, 35, 'DIRECCIÓN DE CATASTRO', null, null, 'center');
      pdf.setFontSize(fontSizeTitle);
      //pdf.text(100, 45, 'CÉDULA CATASTRAL', null, null, 'center');
      pdf.text(100, 45, this.dataDocumentoPropiedad.descripcion_tipodocumento, null, null, 'center');

      pdf.setFontSize(fontSizeHead);
      pdf.setFont("helvetica", "normal");
      startY = 35;



      columns = ["FECHA"];
      data = [[fechaSinHora]];

      // Dibujar la primera tabla
      pdf.autoTable({
        ...commonOptions,
        columns: columns,
        body: data,
        tableWidth: 30,
        startY: startY,
        margin: { left: 172 },
      });
      startY = startY + 13

      // Datos de las tablas
      columns = ["Efed", "Mun", "Parr", "Amb", "Sec", "Man", "Par", "SubP", "Niv", "Und"];
      data = [["08", "10", "01", this.inmuebleData.codigo_ambito, this.inmuebleData.codigo_sector, this.inmuebleData.codigo_manzana, this.inmuebleData.codigo_parcela, this.inmuebleData.codigo_subparcela, this.inmuebleData.codigo_nivel, this.inmuebleData.codigo_unidad]];

      // Dibujar la primera tabla
      pdf.autoTable({
        ...commonOptions,
        columns: columns,
        body: data,
        tableWidth: 90,
        startY: startY,
        //margin: {left: 200} ,
      });

      columns = ["No. EXPEDIENTE"];
      data = [[this.inmuebleData.numero_expediente]];

      // Dibujar la primera tabla
      pdf.autoTable({
        ...commonOptions,
        columns: columns,
        body: data,
        tableWidth: 30,
        startY: startY,
        margin: { left: 172 },
      });
      startY = startY + 13


      concatenacionNombres = '';

      columns = ["Datos según inspección."];
      // Dibujar la primera tabla
      pdf.autoTable({
        ...commonOptions,
        headStyles: { fillColor: (255, 192, 203), textColor: (255, 0, 0), cellPadding: 1, halign: 'left' },
        bodyStyles: { textColor: (255, 0, 0), cellPadding: 1, halign: 'left' },
        columns: columns,
        startY: startY,
      });
      startY = startY + 6


      columns = ["Linderos Actuales."];
      // Dibujar la primera tabla
      pdf.autoTable({
        ...commonOptions,
        headStyles: { fillColor: (255, 192, 203), textColor: (255, 0, 0), cellPadding: 1, halign: 'left' },
        bodyStyles: { textColor: (255, 0, 0), cellPadding: 1, halign: 'left' },
        columns: columns,
        //body: data,
        tableWidth: 110,
        startY: startY,
      });
      startY = startY + 6

      columns = ["Norte"];
      data = [[this.dataUbicacionInmueble.lindero_norte]];
      // Dibujar la primera tabla
      pdf.autoTable({
        ...commonOptions,
        headStyles: { fillColor: (255, 192, 203), textColor: (255, 0, 0), cellPadding: 1, halign: 'left' },
        bodyStyles: { textColor: (255, 0, 0), cellPadding: 1, halign: 'left' },
        columns: columns,
        body: data,
        tableWidth: 110,
        startY: startY,
      });
      startY = startY + 10

      columns = ["Sur"];
      data = [[this.dataUbicacionInmueble.lindero_sur]];
      // Dibujar la primera tabla
      pdf.autoTable({
        ...commonOptions,
        headStyles: { fillColor: (255, 192, 203), textColor: (255, 0, 0), cellPadding: 1, halign: 'left' },
        bodyStyles: { textColor: (255, 0, 0), cellPadding: 1, halign: 'left' },
        columns: columns,
        body: data,
        tableWidth: 110,
        startY: startY,
      });
      startY = startY + 10

      columns = ["Este"];
      data = [[this.dataUbicacionInmueble.lindero_este]];
      // Dibujar la primera tabla
      pdf.autoTable({
        ...commonOptions,
        headStyles: { fillColor: (255, 192, 203), textColor: (255, 0, 0), cellPadding: 1, halign: 'left' },
        bodyStyles: { textColor: (255, 0, 0), cellPadding: 1, halign: 'left' },
        columns: columns,
        body: data,
        tableWidth: 110,
        startY: startY,
      });
      startY = startY + 10

      columns = ["Oeste"];
      data = [[this.dataUbicacionInmueble.lindero_oeste]];
      // Dibujar la primera tabla
      pdf.autoTable({
        ...commonOptions,
        headStyles: { fillColor: (255, 192, 203), textColor: (255, 0, 0), cellPadding: 1, halign: 'left' },
        bodyStyles: { textColor: (255, 0, 0), cellPadding: 1, halign: 'left' },
        columns: columns,
        body: data,
        tableWidth: 110,
        startY: startY,
      });
      startY = startY + 10

      startY =67
      columns = ["Coordenadas UTM"];
      data = [[concatenacionNombres]];
      // Dibujar la primera tabla
      pdf.autoTable({
        ...commonOptions,
        headStyles: { fillColor: (255, 192, 203), textColor: (255, 0, 0), cellPadding: 1, halign: 'left' },
        bodyStyles: { textColor: (255, 0, 0), cellPadding: 1, halign: 'left' },
        columns: columns,
        body: data,
        tableWidth: 77,
        startY: startY,
        margin: { left: 125 },
      });

      columns = ["Pto.","Norte","Este"];
      data = [
      ["1",this.dataUbicacionInmueble.g1_norte,this.dataUbicacionInmueble.g1_este],
      ["2",this.dataUbicacionInmueble.g2_norte,this.dataUbicacionInmueble.g2_este],
      ["3",this.dataUbicacionInmueble.g3_norte,this.dataUbicacionInmueble.g3_este],
      ["4",this.dataUbicacionInmueble.g4_norte,this.dataUbicacionInmueble.g4_este],
      ["5",this.dataUbicacionInmueble.g5_norte,this.dataUbicacionInmueble.g5_este],
      ["6",this.dataUbicacionInmueble.g6_norte,this.dataUbicacionInmueble.g6_este],
      ["7",this.dataUbicacionInmueble.g7_norte,this.dataUbicacionInmueble.g7_este],
      ["8",this.dataUbicacionInmueble.g8_norte,this.dataUbicacionInmueble.g8_este]    
      ];
      // Dibujar la primera tabla
      pdf.autoTable({
        ...commonOptions,
        headStyles: { fillColor: (255, 192, 203), textColor: (255, 0, 0), cellPadding: 1, halign: 'left' },
        bodyStyles: { textColor: (255, 0, 0), cellPadding: 1, halign: 'left' },
        columns: columns,
        body: data,
        tableWidth: 77,
        startY: startY,
        margin: { left: 125 },
      });



      startY = startY + 50
      columns = ["Plano de Mesura. ÁREA DE CONSTRUCCIÓN: "+((this.dataFinesFiscales.cedula !== 'null' && this.dataFinesFiscales.cedula !== ''&&  this.dataFinesFiscales.cedula !== null)? this.dataFinesFiscales.cedula : ' ')];
      // Dibujar la primera tabla
      pdf.autoTable({
        ...commonOptions,
        headStyles: { fillColor: (255, 192, 203), textColor: (255, 0, 0), cellPadding: 1, halign: 'left' },
        bodyStyles: { textColor: (255, 0, 0), cellPadding: 1, halign: 'left' },
        columns: columns,
        startY: startY,
      });
      startY = startY + 8
      


      //img3.onload = function () {
      //  widthImagen = img3.width;
      //  heightImagen = img3.height;
      //  console.log("Ancho original de la imagen:", widthImagen);
      //  console.log("Alto original de la imagen:", heightImagen);
      //};

    
      


      // Ciclo para verificar si la imagen está cargada
      while (!img3.complete) {
        await esperar(2000); // Espera 2 segundos antes de verificar de nuevo
      }

      // Una vez que la imagen se ha cargado completamente, continúa con la lógica
       widthImagen = img3.width;
      heightImagen = img3.height;
      console.log("Ancho original de la imagen:", widthImagen);
      console.log("Alto original de la imagen:", heightImagen);


      //widthImagen = img3.width;
      //heightImagen = img3.height;

      console.log('widthImagen',widthImagen,img3.width)
      console.log('heightImagen',heightImagen,img3.height) 


      // Supongamos que quieres mostrar la imagen en un área de 50x50 en la página PDF
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const widthArea = 200; // Ancho del área donde deseas mostrar la imagen en el PDF
      const heightArea = 200; // Alto del área donde deseas mostrar la imagen en el PDF

      // Calcula las dimensiones ajustadas de la imagen para que se ajuste al área sin distorsión
      let widthImagenAjustada=0
      let heightImagenAjustada=0
      if (widthImagen / heightImagen > widthArea / heightArea) {
          widthImagenAjustada = widthArea;
          heightImagenAjustada = heightImagen * (widthArea / widthImagen);
      } else {
          heightImagenAjustada = heightArea;
          widthImagenAjustada = widthImagen * (heightArea / heightImagen);
      }
      const x = (pdfWidth - widthImagenAjustada) / 2;
      console.log('x',x,'pdfWidth',pdfWidth,'widthImagenAjustada',widthImagenAjustada)

      // Agrega la imagen ajustada al área especificada en el PDF
      pdf.addImage(img3, 'JPEG', x, startY, widthImagenAjustada, heightImagenAjustada); 

      startY=300
      columns = ["Escala","Fecha de Expedición", "Sello y firma del Director"];
      data = [["",fechaSinHora,""]];
      pdf.autoTable({
        ...commonOptions,
        columns: columns,
        startY: startY,
        body: data,
      });

    }

      //pdf.save(`CedulaCatastral-Exp-${this.inmuebleData.numero_expediente}.pdf`);
      await this.uploadPDF(pdf);
    },


    async uploadPDF(pdf) {
      const formData = new FormData();
      formData.append('ReportePdfCedulaCatastral', new Blob([pdf.output('blob')], { type: 'application/pdf' }), `CedulaCatastral-Exp-${this.inmuebleData.numero_expediente}}.pdf`);
      try {
        const response = await this.$axios.$patch(`inmueble/${this.$store.getters.getExpediente.id}/`, formData, {
          headers: { 'Content-Type': 'application/pdf' },
        })
        //await this.getPDF()
        console.log('ReportePdfCedulaCatastral', response)
      } catch (err) {
        console.log(err);
      }
    },

    async getPDF() {
      try {
        const response = await this.$axios.$get(`inmueble/${this.$store.getters.getExpediente.id}/`)
        if (response.ReportePdfCedulaCatastral) {

          console.log('response getPDF', response.ReportePdfCedulaCatastral)
          var pdfData = response.ReportePdfCedulaCatastral;
          if (pdfData.includes("catastro_back")) {
              pdfData = pdfData.replace("catastro_back", "catastro_back/catastro_back");
            }
          window.open(pdfData, "_blank").focus();
        } else {
            this.$alert("cancel", { desc: "No se ha generado una cédula catastral para este inmueble.", hash: 'knsddcssdc', title: 'Error' })
          }
        } catch (err) {
        console.log(err);
      }
    },


  }
};
</script>

<style src="~/assets/styles/pages/actualizacion-inmueble.scss" lang="scss" />