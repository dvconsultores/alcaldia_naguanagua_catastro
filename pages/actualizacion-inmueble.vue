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
            label="Teléfono"
            ></v-text-field>

            <v-autocomplete
            v-model="inmuebleData.zona"
            class="big-autocomplete mobile-inputs"
            label="Zona"
            :items="dataZona"
            item-text="descripcion"
            item-value="id"
            ></v-autocomplete>

            <v-text-field
            v-model="inmuebleData.anio"
            class="small-input mobile-inputs"
            label="Año inicio deuda"
            :disabled="!accesos.borrar"
            ></v-text-field>

            <v-autocomplete
            v-model="inmuebleData.periodo" 
            class="big-autocomplete mobile-inputs"
            label="Periodo inicio deuda*"
            :items="periodoData"
            item-text="periodo"
            item-value="id"
            :disabled="!accesos.borrar"
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
        <v-btn class="btn btn-mobile" @click="getPDF()">
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
import jsPDF from 'jspdf';
import 'jspdf-autotable';

export default {
  name: "Actualizacion-InmueblePage",
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
      periodoData:[],
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
      permido: JSON.parse(JSON.stringify(this.$store.getters.getUser.permisos)),
      accesos:{},
      CorrelativoData: [],
      inmueblePropietariosData: [],
      dataDocumentoPropiedad: [],
      dataValoracionTerreno: [],
    }
  },
  head() {
    const title = 'Actualización Inmueble';
    return {
      title,
    }
  },

  mounted(){
    this.redireccionIdVacio()
    this.permisos();
    this.getDataTipo();
    this.getCorrelativo();
    this.getDataEstatus();
    this.getDataAmbito();
    this.getDataSector();
    this.getDataManzana();
    this.getDataParcela();
    this.getDataSubParcela();
    this.getDataNivel();
    this.getDataUnidad();
    this.getDataUrbanizacion();
    this.getDataCalle();
    this.getDataPeriodo();
    this.getDataConjunto();
    this.getDataEdificio();
    this.getDataAvenida();
    this.getDataTorre();
    this.getDataZona();
    this.getDataInmueble();
    this.getIdInmueblePropietarios();
    this.getDocumentoPropiedad();
    this.getInmuebleValoracionTerreno();
  },

  methods: {
    permisos() {
      /********************************************************************************************************
        Validar si este modulo esta dentro de modulos con accceso desde la variable this.$store.getters.getUser
      ******************************************************************************************************* */
      const longitud = this.$options.name.length;
      this.modulo = this.$options.name.substring(0, longitud - 4).toLowerCase();
      // esto valida si este modulo esta dentro de la lista de permitidos segun el modelo de permisos
      console.log('permiso: 1 si , 0 no:',this.permido.filter(permido => permido.modulo.toLowerCase().includes(this.modulo)).length);
      if (this.permido.filter(permido => permido.modulo.toLowerCase().includes(this.modulo)).length) { 
        console.log('leer:',(this.permido.filter(permido => permido.modulo.toLowerCase().includes(this.modulo)))[0].leer);
        this.accesos=(this.permido.filter(permido => permido.modulo.toLowerCase().includes(this.modulo)))[0]
        //console.log('this.accesos.borrar',this.accesos.borrar)
      }else{
        this.$router.push('index')
        this.$alert("cancel", {desc: "No está autorizado para accesar a este módulo!!!", hash: 'knsddcssdc', title:'Error'})
      }
    },
    redireccionIdVacio() {
      if (this.$store.getters.getExpediente == 'Sin Seleccionar') {
        this.$router.push('consulta-inmueble')
        this.$alert("cancel", { desc: "Debe seleccionar un inmueble para ingresar a este módulo", hash: 'knsddcssdc', title: 'Error' })
      } else {
        ''
      }
    },
    getIdInmueblePropietarios(){
      this.$axios.$get(`inmueble_propietarios/?inmueble=${this.$store.getters.getExpediente.id}`).then(response => {
        this.inmueblePropietariosData = response
        console.log('inmueblePropietariosData',this.inmueblePropietariosData) 

      }).catch(err => {
        console.log(err)
      })
    },
    getDocumentoPropiedad(){
      this.$axios.$get('inmueble_propiedad/?inmueble=' + this.$store.getters.getExpediente.id).then(response => {
        this.dataDocumentoPropiedad = response[0]
        console.log('dataDocumentoPropiedad',this.dataDocumentoPropiedad) 
      }).catch(err => {
        console.log(err) 
      })
    },
    async getInmuebleValoracionTerreno() {
      try {
        const response = await this.$axios.$get(`inmueble_valoracion_terreno/?inmueble=${this.$store.getters.getExpediente.id}`);
        this.dataValoracionTerreno = response[0];
        console.log('this.dataValoracionTerreno',this.dataValoracionTerreno)
      } catch (err) {
        console.log(err);
      }
    },
    getCorrelativo() {
      this.$axios.$get('correlativo').then(response => {
        this.CorrelativoData = response
        console.log('CorrelativoData',this.CorrelativoData)
      }).catch(err => {
        console.log(err)
      })
    },
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
        console.log('inmuebleData',this.inmuebleData)
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
          console.log('manzanaData',response)
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
    getDataPeriodo(){
      this.$axios.$get('ic_periodo/?aplica=C').then(response => {
          this.periodoData = response
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
        this.inmuebleData.fecha_inscripcion = moment(this.nuevaFecha).format('YYYY-MM-DD');
      }
    },

    saveData() {
      this.btnGuardarInmuble = true

      const formData = new FormData();
      this.inmuebleData.fecha_inscripcion ? formData.append('fecha_inscripcion', this.inmuebleData.fecha_inscripcion):'';
      this.inmuebleData.tipo ? formData.append('tipo', this.inmuebleData.tipo):'';
      this.inmuebleData.status ? formData.append('status', this.inmuebleData.status):'';
      this.inmuebleData.ambito ? formData.append('ambito', this.inmuebleData.ambito):'';
      this.inmuebleData.anio ? formData.append('anio', this.inmuebleData.anio):'';
      this.inmuebleData.periodo ? formData.append('periodo', this.inmuebleData.periodo):'';
      this.inmuebleData.sector ? formData.append('sector', this.inmuebleData.sector):'';
      this.inmuebleData.manzana ? formData.append('manzana', this.inmuebleData.manzana):'';
      this.inmuebleData.parcela ? formData.append('parcela', this.inmuebleData.parcela):'';
      this.inmuebleData.subparcela ? formData.append('subparcela', this.inmuebleData.subparcela):'';
      this.inmuebleData.nivel ? formData.append('nivel', this.inmuebleData.nivel):'';
      this.inmuebleData.unidad ? formData.append('unidad', this.inmuebleData.unidad):'';
      this.inmuebleData.urbanizacion ? formData.append('urbanizacion', this.inmuebleData.urbanizacion):'';
      this.inmuebleData.calle ? formData.append('calle', this.inmuebleData.calle):'';
      this.inmuebleData.conjunto_residencial ? formData.append('conjunto_residencial', this.inmuebleData.conjunto_residencial):'';
      this.inmuebleData.edificio ? formData.append('edificio', this.inmuebleData.edificio):'';
      this.inmuebleData.avenida ? formData.append('avenida', this.inmuebleData.avenida):'';
      this.inmuebleData.torre ? formData.append('torre', this.inmuebleData.torre):'';
      this.inmuebleData.numero_civico ? formData.append('numero_civico', this.inmuebleData.numero_civico):'';
      this.inmuebleData.numero_casa ? formData.append('numero_casa', this.inmuebleData.numero_casa):'';
      this.inmuebleData.numero_piso ? formData.append('numero_piso', this.inmuebleData.numero_piso):'';
      this.inmuebleData.telefono ? formData.append('telefono', this.inmuebleData.telefono):'';
      this.inmuebleData.zona ? formData.append('zona', this.inmuebleData.zona):'';
      this.inmuebleData.direccion ? formData.append('direccion', this.inmuebleData.direccion):'';
      this.inmuebleData.referencia ? formData.append('referencia', this.inmuebleData.referencia):'';
      this.inmuebleData.observaciones ? formData.append('observaciones', this.inmuebleData.observaciones):'';
      this.$axios.$patch(`inmueble/${this.$store.getters.getExpediente.id}/`, formData)
      .then(res => {
        console.log('res.data',res.data)
        this.btnGuardarInmuble = false
        this.dialog_confirmar = false
        this.$alert("success", { desc: "Se ha editado un inmueble con éxito", hash: 'knsddcssdc', title: 'Edición de inmueble' });
        this.generarPDF()
      })
      .catch(err => {
        console.error(err)
        this.btnGuardarInmuble = false
        this.dialog_confirmar = false
      });
    }, 

    generarPDF() {
      const pdf = new jsPDF('p', 'mm', 'legal');

      const fechaActual = new Date();
      const dia = fechaActual.getDate().toString().padStart(2, '0'); // Obtén el día y asegúrate de tener 2 dígitos.
      const mes = (fechaActual.getMonth() + 1).toString().padStart(2, '0'); // El mes comienza desde 0, por lo que sumamos 1.
      const anio = fechaActual.getFullYear();
      //const hora = fechaActual.getHours().toString().padStart(2, '0');
      //const minutos = fechaActual.getMinutes().toString().padStart(2, '0');
      //const segundos = fechaActual.getSeconds().toString().padStart(2, '0');
      //const fechaConHora = `${dia}/${mes}/${anio} ${hora}:${minutos}:${segundos}`;
      const fechaSinHora = `${dia}/${mes}/${anio}`;
      const img1 = new Image();
      const img2 = new Image();
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
        img2.onload = function () {
          pdf.addImage(img2, 'PNG', 160, 13, 40, 30); // Logotipo derecho
        };
      };
      
      // Establecer el tamaño de fuente para el encabezado de la tabla
      const fontSizeTitle = 15; // Tamaño de fuente para el encabezado
      const fontSizeHead = 8; // Tamaño de fuente para el encabezado
      //const fontSizeBody = 8; // Tamaño de fuente para el cuerpo de la tabla
      //let pageHeight = pdf.internal.pageSize.height;
      pdf.addImage(img1, 'PNG', 10, 15, 30, 30); // Logotipo izquierdo
      pdf.addImage(img2, 'PNG', 160, 13, 25, 25); // Logotipo derecho
      pdf.setFontSize(fontSizeHead + 2);
      pdf.text(100, 20, 'REPÚBLICA BOLIVARIANA DE VENEZUELA', null, null, 'center');
      pdf.text(100, 25, 'ESTADO CARABOBO', null, null, 'center');
      pdf.text(100, 30, 'ALCALDÍA DEL MUNICIPIO NAGUANAGUA', null, null, 'center');
      pdf.text(100, 35, 'DIRECCIÓN DE CATASTRO', null, null, 'center');
      pdf.setFontSize(fontSizeTitle);
      pdf.text(100, 45, 'CÉDULA CATASTRAL', null, null, 'center');
      pdf.setFontSize(fontSizeHead);
      pdf.setFont("helvetica", "normal");
      let startY = 35; 




      // Opciones comunes para todas las tablas
      const commonOptions = {
        styles: { fontSize: 8,halign: 'center' },
        theme : 'grid',
        headStyles:{fillColor: (255,192,203),textColor: (255,0,0),lineColor: (255,0,0) , cellPadding:1},
        bodyStyles:{textColor: (255,0,0),lineColor: (255,0,0), cellPadding:1},
        
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
        margin: {left: 172} ,
      });
      startY = startY + 13

      // Datos de las tablas
      columns = ["Efed", "Mun", "Parr", "Amb", "Sec", "Man", "Par", "SubP", "Niv", "Und"];
      data = [["08", "10", "01", "U01", "Sec", "Man", "Par", "SubP", "Niv", "Und"]];

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
        margin: {left: 172} ,
      });
      startY = startY + 13


      let concatenacionNombres = '';

      // Recorre la lista de registros y concatena "nombre" + "numero_documento"
      for (const registro of this.inmueblePropietariosData) {
        concatenacionNombres += registro.propietario.numero_documento+' '+registro.propietario.nombre +', ';
      }
      columns = ["Propietario(s)"];
      data = [[concatenacionNombres]];

      // Dibujar la primera tabla
      pdf.autoTable({
        ...commonOptions,
        headStyles:{fillColor: (255,192,203),textColor: (255,0,0) , cellPadding:1,halign: 'left'},
        bodyStyles:{textColor: (255,0,0), cellPadding:1,halign: 'left'},
        columns: columns,
        body: data,
        startY: startY,
      });
      if (this.dataDocumentoPropiedad.numero_documento){
        startY = startY + 15
        pdf.setFontSize(fontSizeHead);
        pdf.setFont("helvetica", "bold");
        pdf.text('1.- Datos del documento.',15, startY);
        pdf.setFont("helvetica", "normal");
        startY = startY + 2
        columns = ["Fecha", "Nro. Doc.", "Nro.Matrícula", "Año libro real", "M2 Terreno","Valor Terreno","M2 Construcción","Valor Construccóon"];
        data = [[this.dataDocumentoPropiedad.fecha_documento,
        this.dataDocumentoPropiedad.numero_documento,
        this.dataDocumentoPropiedad.matricula_documento,
        this.dataDocumentoPropiedad.anio_folio_documento,
        this.dataDocumentoPropiedad.area_terreno,
        this.dataDocumentoPropiedad.valor_terreno,
        this.dataDocumentoPropiedad.area_construccion,
        this.dataDocumentoPropiedad.valor_construccion]];
        pdf.autoTable({
          ...commonOptions,
          columns: columns,
          startY: startY,
          body: data,
        });
      }
      if (this.dataDocumentoPropiedad.numero_terreno){
        startY = startY + 15
        pdf.setFontSize(fontSizeHead);
        pdf.setFont("helvetica", "bold");
        pdf.text('1.1.- Datos de terreno según documento.',15, startY);
        pdf.setFont("helvetica", "normal");
        startY = startY + 2
        columns = ["Fecha", "Nro. Doc.", "Folios", "Prot.", "Tomo", "Sup. M2", "Valor Bs. Total"];
        data = [[this.dataDocumentoPropiedad.fecha_terreno,
        this.dataDocumentoPropiedad.numero_terreno,
        this.dataDocumentoPropiedad.folio_terreno,
        this.dataDocumentoPropiedad.protocolo_terreno,
        this.dataDocumentoPropiedad.tomo_terreno,
        this.dataDocumentoPropiedad.area_terreno,
        this.dataDocumentoPropiedad.valor_terreno]];
        pdf.autoTable({
          ...commonOptions,
          columns: columns,
          startY: startY,
          body: data,
        });
      }
      if (this.dataDocumentoPropiedad.numero_construccion){
        startY = startY + 15
        pdf.setFontSize(fontSizeHead);
        pdf.setFont("helvetica", "bold");
        pdf.text('1.2.- Datos de construcción según documento.',15, startY);
        pdf.setFont("helvetica", "normal");
        startY = startY + 2
        columns = ["Fecha", "Nro. Doc.", "Folios", "Prot.", "Tomo", "Sup. M2", "Valor Bs. Total"];
        data = [[this.dataDocumentoPropiedad.fecha_construccion,
        this.dataDocumentoPropiedad.numero_construccion,
        this.dataDocumentoPropiedad.folio_construccion,
        this.dataDocumentoPropiedad.protocolo_construccion,
        this.dataDocumentoPropiedad.tomo_construccion,
        this.dataDocumentoPropiedad.area_construccion,
        this.dataDocumentoPropiedad.valor_construccion]];
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
      pdf.text('1.3.- Ubicación.',15, startY);
      pdf.setFont("helvetica", "normal");
      startY = startY + 2
      columns = ["Sector", "Urbanización"];
      data = [[this.inmuebleData.descripcion_sector,
              this.inmuebleData.nombre_urbanizacion]];
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
      columns = ["Tipo de inmueble", "Número","Torre","Piso Nro.","Nro. Cívico"];
      data = [[this.inmuebleData.descripcion_tipo,
              this.inmuebleData.numero_casa,
              this.inmuebleData.nombre_torre,
              this.inmuebleData.numero_piso,
              this.inmuebleData.numero_civico]];
      pdf.autoTable({
        ...commonOptions,
        columns: columns,
        startY: startY,
        body: data,
      });
      startY = startY + 12
      columns = ["1.5.- Referencia"];
      data = [[this.inmuebleData.referencia]];
      pdf.autoTable({
        ...commonOptions,
        headStyles:{fillColor: (255,192,203),textColor: (255,0,0) , cellPadding:1,halign: 'left'},
        bodyStyles:{textColor: (255,0,0), cellPadding:1,halign: 'left'},
        columns: columns,
        startY: startY,
        body: data,
      });
      startY = startY + 15
      pdf.setFontSize(fontSizeHead);
      pdf.setFont("helvetica", "bold");
      pdf.text('1.6.- Linderos.',15, startY);
      pdf.setFont("helvetica", "normal");
      startY = startY + 5
      pdf.text('Norte:',15, startY);
      pdf.setFont("helvetica", "bold");
      pdf.text(this.dataDocumentoPropiedad.lindero_norte,30, startY);
      pdf.setFont("helvetica", "normal");
      startY = startY + 5
      pdf.text('Sur:',15, startY);
      pdf.setFont("helvetica", "bold");
      pdf.text(this.dataDocumentoPropiedad.lindero_sur,30, startY);
      pdf.setFont("helvetica", "normal");
      startY = startY + 5
      pdf.text('Este:',15, startY);
      pdf.setFont("helvetica", "bold");
      pdf.text(this.dataDocumentoPropiedad.lindero_este,30, startY);
      pdf.setFont("helvetica", "normal");
      startY = startY + 5
      pdf.text('Oeste:',15, startY);
      pdf.setFont("helvetica", "bold");
      pdf.text(this.dataDocumentoPropiedad.lindero_oeste,30, startY);
      pdf.setFont("helvetica", "normal");
      startY = startY + 7


      let longText = "El suscrito jefe de la oficina de catastro de la Alcaldia Bolivariana de Naguanagua del Estado Carabobo, hace constar que el (los) ciudadano(s) "+concatenacionNombres
      longText = longText + " ha(n) suminstrado para su inscripción o actualización los recaudos correspondientes a un inmueble"
      longText = longText + " de su propiedad debidamente identificado en este documento. Quedando a salvo derecho de terceras personas."
      
// Tamaño máximo de la línea
      const maxWidth = 180;


      // Dividir el texto en líneas
      let textLines = pdf.splitTextToSize(longText, maxWidth);

      // Agregar cada línea al PDF
      textLines.forEach((line) => {
          pdf.text(15, startY, line);
          startY += 4; 
      });
      startY = startY + 2
      pdf.setFontSize(fontSizeHead);
      pdf.setFont("helvetica", "bold");
      pdf.text('2.- Solo para fines fiscales - Alcaldia',15, startY);
      pdf.setFont("helvetica", "normal"); 
      startY = startY + 2
      columns = ["2.1 Superficie de construcción M2", "2.1 Superficie de terreno M2"];
      data = [[0,0]];
      pdf.autoTable({
        ...commonOptions,
        columns: columns,
        startY: startY,
        body: data,
      });
      startY = startY + 15
      pdf.setFontSize(fontSizeHead);
      pdf.setFont("helvetica", "bold");
      pdf.text('2.2- Observaciones',15, startY);
      pdf.setFont("helvetica", "normal"); 
      startY = startY + 5
      

      longText = this.dataValoracionTerreno.observaciones

      // Dividir el texto en líneas
      textLines = pdf.splitTextToSize(longText, maxWidth);

      // Agregar cada línea al PDF
      textLines.forEach((line) => {
          pdf.text(15, startY, line);
          startY += 5; 
      });
      startY = startY + 2
      pdf.setFontSize(fontSizeHead);
      pdf.setFont("helvetica", "bold");

      longText = "YO, "+concatenacionNombres+" Declaro que son ciertos los datos plasmados en el presente documento."
      textLines = pdf.splitTextToSize(longText, maxWidth);
      textLines.forEach((line) => {
          pdf.text(15, startY, line);
          startY += 4; 
      });
      pdf.setFont("helvetica", "normal");

      startY = startY + 18
      pdf.text(50, startY,  '---------------------------', null, null, 'center');
      pdf.text(150, startY, '---------------------------', null, null, 'center'); 
      startY = startY + 2
      pdf.text(50, startY, 'RECIBIDO POR', null, null, 'center');
      pdf.text(150, startY, 'FIRMA PROPIETARIO OCUPANTE', null, null, 'center'); 
      startY = startY + 18
      pdf.text(50, startY,  '---------------------------', null, null, 'center');
      pdf.text(150, startY, '---------------------------', null, null, 'center'); 
      startY = startY + 2
      pdf.text(50, startY, 'ENTREGADO POR', null, null, 'center');
      pdf.text(150, startY, 'FIRMA DEL DIRECTOR', null, null, 'center');

      startY = startY + 10
      pdf.setFontSize(6);
      pdf.setFont("helvetica", "bold");

      longText = "El presente documento cumple con el pago de timbre fiscal de 0.30 U.T. según Gaceta Extraordinaria Nro. 5864 de fecha 27-10-2016. "
      longText = longText +"Para que este documento tenga validez, debe presentar sello humedo y firma de la DIRECCION DE CATASTRO, Sello humedo y firma de la Taquilla de Catastro y sello de seguridad."

      textLines = pdf.splitTextToSize(longText, maxWidth);
      textLines.forEach((line) => {
          pdf.text(15, startY, line);
          startY += 3; 
      });

      startY = startY + 5
      longText = "ESTA ADMINISTRACION SE RESERVA EL DERECHO A INSPECCIONAR EL INMUEBLE EN CUALQUIER MOMENTO CON POSTERIORIDAD A LA EMISIÓN DE LA CEDULA CATASTRAL O CERTIFICADO DE EMPADRONAMIENTO, "
      longText = longText +"Y EN CASO DE QUE SE CONSTATE ALTERACIÓN, MODIFICACIÓN O DISPARIDAD EN EL INMUEBLE CON RESPECTO A LOS DATOS SUMINISTRADOS O DISPARIDAD EN RELACION A LOS DATOS DEL DOCUMENTO DE PROPIEDAD, "
      longText = longText +"SE PROCEDERA A APERTURAR EL PROCEDIMIENTO ADMINISTRATIVO CORRESPONDIENTE, CONFORME A LO DISPUESTO EN LA LEY QUE RIGE LA MATERIA URBANISTICA."

      textLines = pdf.splitTextToSize(longText, maxWidth);
      textLines.forEach((line) => {
          pdf.text(15, startY, line);
          startY += 3; 
      });

      pdf.setFont("helvetica", "normal");


      pdf.save(`CedulaCatastral-Exp-${this.inmuebleData.numero_expediente}.pdf`);
      this.uploadPDF(pdf);
    },
    
    uploadPDF(pdf) {
    const formData = new FormData();
    formData.append('ReportePdfCedulaCatastral', new Blob([pdf.output('blob')], { type: 'application/pdf' }), `CedulaCatastral-Exp-${this.inmuebleData.numero_expediente}}.pdf`);
      this.$axios.$patch(`inmueble/${this.$store.getters.getExpediente.id}/`, formData, {
        headers: { 'Content-Type': 'application/pdf' },
      })
      .then(response => {
        this.getPDF() 
        console.log('ReportePdfCedulaCatastral',response)
      })
      .catch(err => {
        console.log(err)
      });
    },
    getPDF() {
      this.$axios
        .$get(`inmueble/${this.$store.getters.getExpediente.id}/`)
        .then(response => {
          if (response.ReportePdfCedulaCatastral){
            console.log('response',response.ReportePdfCedulaCatastral)
            var pdfData = response.ReportePdfCedulaCatastral;
            if (pdfData.includes("catastro_back")) {
              // Concatenar "/catastro_back"
              pdfData = pdfData.replace("catastro_back", "catastro_back/catastro_back");
            }
            console.log('pdfData',pdfData)
            window.open(pdfData, "_blank").focus(); 
          }else{
            this.$alert("cancel", {desc: "No se ha generado una cédula catastral para este inmueble.", hash: 'knsddcssdc', title:'Error'}) 
          }
        })
        .catch(error => {
          console.error('Error al obtener el PDF:', error);
        });
    },
  }
};
</script>

<style src="~/assets/styles/pages/actualizacion-inmueble.scss" lang="scss" />