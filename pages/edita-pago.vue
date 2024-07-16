<template>
  <div class="center no-padding divcol" style="margin-bottom:20px; padding-left: 256px;">
    <section class="section1-liquidacion">
      <div class="inmuebles-asociados-container">
        <div class="jspace center">
          <p class="title-inmuebles-asociados">
            Planillas de pago
          </p>

          <p style="margin-bottom:0px;">
            Cant. total: {{ estadoCuentasData.length }}
          </p>
        </div>

        <hr>

        <div class="dataInmuebles-container divrow">
          <div class="data-table-container">
            <v-text-field v-model="search" append-icon="mdi-magnify" label="Buscar" hide-details
              class="input-data-table"></v-text-field>

            <v-data-table :headers="headers" :items="PagoData" :loading="loading" :items-per-page="10" :search="search"
              :footer-props="{
                itemsPerPageText: 'Items por página',
              }" sort-by="numero" sort-desc class="mytabla" mobile-breakpoint="840">
              <template v-slot:[`item.monto_total`]="{ item }">
                {{ numeroFormateado(item.monto_total) }}
              </template>
              <template #[`item.actions`]="{ item }">
                <v-btn :disabled="botonDeshabilitado" class="btn-liquidar" @click="getEstadoDetalles(item)">
                  <v-icon>mdi-eye</v-icon>
                </v-btn>
              </template>

            </v-data-table>
          </div>
        </div>
      </div>
    </section>

    <v-dialog v-model="openDialog" transition="dialog-bottom-transition" fullscreenn scrollable hide-overlay persistent
      content-class="dialog-liquidacion">
      <div class="div-dialog">
        <section class="section1-descripcion-inmueble">
          <div class="creacion-container">
            <div class="divrow jspace" style="width:100%;">
              <p class="title-inscripcion-inmueble">
                Editar Planilla de PAGO
              </p>

              <span class="title-inscripcion-inmueble">
                Tasa BCV: {{ montoBCV }}
              </span>
            </div>

            <hr>

            <div class="container-creacion-datos">


              <div class="title-description-div">
                <p class="nombre-razon">
                  Fecha
                </p>

                <p class="nombre-desc">
                  {{ obtenerFechaActual() }}
                </p>
              </div>

              <div class="title-description-div">
                <p class="nombre-razon">
                  Contribuyente
                </p>

                <p class="nombre-desc">
                  {{ nombrecontribuyente }}
                </p>
              </div>

            </div>
          </div>

          <div class="observaciones-container">
            <div class="jspace center" style="width: 100%; margin-bottom: 0px;">
              <p class="title-observaciones">
                Observaciones
              </p>

              <v-btn class="btn-mas" v-if="show_observaciones != true" @click="show_observaciones = true">
                +
              </v-btn>

              <v-btn class="btn-mas" v-if="show_observaciones === true" @click="show_observaciones = false">
                -
              </v-btn>
            </div>

            <hr>

            <div v-if="show_observaciones === true" class="center" style="width: 100%; margin-bottom: 30px;">
              <v-textarea class="textarea" v-model="selectedItem.observaciones"></v-textarea>
            </div>
          </div>
        </section>

        <section class="section2-inscripcion-inmueble">
          <div class="descripcion-container">
            <div class="title-morado">
              <p class="solicitud-title">
                Items Planilla Pago
              </p>

              <p class="solicitud-title">
                Monto total: {{ montoTotal() }}
              </p>
            </div>

            <v-btn class="btns-add-remove no-shadow" @click="addDiv(index)">
              +
            </v-btn>

            <div v-for="(div, index) in divs" :key="index" class="solicitud-inputs-container">

              <v-autocomplete v-model="div.tipopago" class="small-input mobile-inputs" label="Tipo de Pago"
                :items="tipoPagoData" item-text="descripcion" item-value="id" :disabled="div.bloqueado"
                @change="mostrarVentanaNueva(div.tipopago)"></v-autocomplete>
              <v-dialog v-model="mostrarVentana" max-width="1600px">
                <v-card id="dialog-editar-crear-a">
                  <v-card-title>
                    <span class="title">TRANSFERENCIAS</span>
                  </v-card-title>
                  <hr>
                  <v-card-text>
                    <v-container>
                      <v-row class="center">
                        <v-col cols="12" sm="6" md="4">
                          <v-autocomplete v-model="div.bancocuenta" class="small-input mobile-inputs"
                            :label="div.tipopago !== 'T' && div.tipopago !== 'D' && div.tipopago !== 'P' ? '' : 'Banco'"
                            :items="bancoCuentaData" item-text="banco_nombre" item-value="id"
                            :disabled="(div.tipopago !== 'T' && div.tipopago !== 'D' && div.tipopago !== 'P') || div.bloqueado"
                            @change="filtrarCorridasBancarias(div.bancocuenta)"></v-autocomplete>
                        </v-col>
                      </v-row>
                    </v-container>
                    <div class="data-liquidacion-container divrow">
                      <div class="data-table-container">
                        <v-text-field v-model="searchTransferencia" append-icon="mdi-magnify" label="Buscar"
                          hide-details class="input-data-table"></v-text-field>
                        <v-data-table :headers="headersCorridasBancarias" :items="filtrocorridasbancariasData"
                          :search="searchTransferencia" :items-per-page="5" :footer-props="{
              itemsPerPageText: 'Items por página',
            }" sort-by="nombre" class="mytabla" mobile-breakpoint="840">
                          <template v-slot:[`item.monto`]="{ item }">
                            {{ numeroFormateado(item.monto) }}
                          </template>
                          <template #[`item.actions`]="{ item }">
                            <v-btn class="btn-tabla"
                              @click="div.fechapago = item.fecha; div.monto = item.monto; div.nro_referencia = item.referencia; mostrarVentana = false">
                              Seleccionar Transferencia
                            </v-btn>
                          </template>
                        </v-data-table>
                      </div>
                    </div>
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn class="btn dialog-btn" @click="div.tipopago = null; mostrarVentana = false">
                      Cerrar
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
              <v-menu v-model="menu" :close-on-content-click="false" :nudge-right="5" transition="scale-transition"
                offset-y min-width="auto" :disabled="div.bloqueado">
                <template #activator="{ on, attrs }">
                  <v-text-field v-model="div.fechapago" class="small-input mobile-inputs" label="Fecha"
                    append-icon="mdi-calendar" readonly v-bind="attrs" v-on="on"></v-text-field>
                </template>
                <v-date-picker v-model="div.fechapago" label="Fecha" @input="formatoFecha()" color="blue"
                  header-color="#810880" class="custom-date-picker"></v-date-picker>
              </v-menu>
              <v-text-field @click="openDialogMonto" v-model="div.monto" class="small-input mobile-inputs" label="Monto"
                :disabled="div.bloqueado" style="font-size: 20px; " reverse>
                {{ parseFloat(div.monto).toFixed(2) }}</v-text-field>
              <v-dialog v-model="dialog" max-width="400px">
                <v-card>
                  <v-card-title>
                    Introduce un valor numérico
                  </v-card-title>
                  <v-card-text>
                    <v-text-field v-model="div.monto" label="Valor Numérico" solo style="font-size: 40px;"
                      inputmode="numeric">
                      {{ parseFloat(div.monto).toFixed(2) }}
                    </v-text-field>
                  </v-card-text>
                  <v-card-actions>
                    <v-btn @click="saveValue" color="primary">Ok</v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>

              <v-autocomplete v-model="div.bancocuenta" class="small-input mobile-inputs"
                :label="div.tipopago !== 'T' && div.tipopago !== 'D' && div.tipopago !== 'P' ? '' : 'Banco'"
                :items="bancoCuentaData" item-text="banco_nombre" item-value="id"
                :disabled="(div.tipopago !== 'T' && div.tipopago !== 'D' && div.tipopago !== 'P') || div.bloqueado"></v-autocomplete>
              <v-text-field v-model="div.nro_referencia" class="small-input mobile-inputs"
                :label="div.tipopago !== 'T' && div.tipopago !== 'D' && div.tipopago !== 'N' && div.tipopago !== 'P' ? '' : 'Nro. Referencia'"
                :disabled="(div.tipopago !== 'T' && div.tipopago !== 'D' && div.tipopago !== 'N' && div.tipopago !== 'P') || div.bloqueado"></v-text-field>
              <v-text-field v-model="div.nro_lote" class="small-input mobile-inputs"
                :label="div.tipopago !== 'D' ? '' : 'Nro. lote'"
                :disabled="div.tipopago !== 'D' || div.bloqueado"></v-text-field>
              <v-text-field v-model="div.nro_aprobacion" class="small-input mobile-inputs"
                :label="div.tipopago !== 'D' ? '' : 'Nro. aprobación'"
                :disabled="div.tipopago !== 'D' || div.bloqueado"></v-text-field>
              <v-btn class="btns-add-remove" :disabled="div.bloqueado" @click="removeDiv(index)">
                <v-icon>mdi-delete</v-icon>
              </v-btn>


            </div>

            <hr>

            <div class="divrow center div-btns" style="gap:30px;">

              <v-btn class="btn size-btn" @click="createLiquidacion()">
                Guardar
              </v-btn>

              <v-btn class="btn size-btn" style="background-color:#ED057E!important;" @click="openDialog = false">
                Cancelar
              </v-btn>
            </div>
          </div>
        </section>
      </div>
    </v-dialog>
    <v-dialog v-model="dialogWait" hide-overlay persistent width="300">
      <v-card color="primary" dark>
        <v-card-text>
          Por favor espere
          <v-progress-linear indeterminate color="white" class="mb-0"></v-progress-linear>
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

export default {
  name: "Edita-PagoPage",
  mixins: [computeds],
  data() {
    return {
      montoBCV:0,
      search: '',
      correlativoData: [],
      bcvData: [],
      openDialog: false,
      divs: [{
        tipopago: null,
        bancocuenta: null,
        fechapago: new Date().toISOString().substr(0, 10),// Formato ISO para la fecha
        nro_aprobacion: '',
        nro_lote: '',
        nro_referencia: '',
        monto: 0,
        bloqueado: true,
      }],
      estadoCuentasData: [],
      tasaMultaData: [],
      headers: [
      { text: 'Habilitado', align: 'center', value: 'habilitado'},
        { text: 'Estado Cuenta #', align: 'center', value: 'liquidacion_estadocuenta_numero'},
        { text: 'Pre-factura #', align: 'center', value: 'liquidacion_numero'},
        { text: 'Recibo #', align: 'center', value: 'numero'},
        { text: 'Fecha', value: 'fecha', align: 'center' },
        { text: 'Inmueble', value: 'liquidacion_inmueble_numero_expediente', align: 'center' },
        { text: 'Propietario', value: 'liquidacion_propietario_nombre', align: 'center' },
        { text: 'Trámite', value: 'liquidacion_tipoflujo_descripcion', align: 'center' },
        { text: '', value: 'actions', sortable: false, align: 'center' },
        { text: '', value: 'actions2', sortable: false, align: 'center' },

      ],
      headersCorridasBancarias: [
        { text: 'ID', align: 'center', value: 'id' },
        { text: 'Fecha', align: 'center', value: 'fecha' },
        { text: 'referencia', value: 'referencia', align: 'center' },
        { text: 'Descripción', value: 'descripcion', align: 'center' },
        { text: 'Monto', value: 'monto', align: 'right' },
        { text: '', value: 'actions', sortable: false, align: 'center' },
      ],

      PagoData: [],
      loading: true,

      show_observaciones: false,
      nombrecontribuyente: '',
      Correlativo: 0,
      Id: 0,
      dialogWait: false,
      dialog: false,
      botonDeshabilitado: false,
      permido: JSON.parse(JSON.stringify(this.$store.getters.getUser.permisos)),
      accesos: {},
      tipoPagoData: [],
      mostrarVentana: false,
      searchTransferencia: '',
      bancoCuentaData: [],
      corridasbancariasData: [],
      filtrocorridasbancariasData: [],
      menu: false,



    }
  },

  head() {
    const title = 'Editar Pagos';
    return {
      title,
    }
  },

  async mounted() {
    this.dialogWait = true

    this.permisos()
    await this.getPago()
    await this.getTipoPago();
    await this.getBancoCuenta();
    await this.getCorridasBancarias();


    await this.getCorrelativo()
    this.dialogWait = false
  },

  computed: {
    fechaFormateada() {
      if (moment(this.estadoCuentasData.fecha).isValid()) {
        return moment(this.estadoCuentasData.fecha).format('YYYY-MM-DD')
      }
      return 'Fecha inválida'
    }
  },

  methods: {
    formatoFecha() {
      if (this.fechapago) {
        this.fechaFormateada = moment(this.nuevaFecha).format('YYYY-MM-DD HH:mm:ss')
        this.fechapago = this.fechaFormateada
      }
    },
    filtrarCorridasBancarias(idbancocuenta) {
      if (idbancocuenta) {
        this.filtrocorridasbancariasData = this.corridasbancariasData.filter((registro) => {
          return registro.bancocuenta === idbancocuenta;
        });
      } else {
        this.filtrocorridasbancariasData = this.corridasbancariasData;
      }
    },
    saveValue() {
      // Aquí puedes realizar alguna acción con el valor numérico (this.numero)
      this.dialog = false;
    },
    async getCorridasBancarias() {
      try {
        const response = await this.$axios.$get('corridasbancarias/?situado=T')
        this.corridasbancariasData = response
        //console.log(this.corridasbancariasData, 'dataa')
      } catch (err) {
        console.log(err);
      }
    },
    async getBancoCuenta() {
      try {
        const response = await this.$axios.$get('bancocuenta')
        this.bancoCuentaData = response
        console.log('bancoCuentaData', this.bancoCuentaData)
      } catch (err) {
        console.log(err);
      }
    },
    openDialogMonto() {
      this.dialog = true;
    },
    mostrarVentanaNueva(tipopago) {
      console.log('tipopago', tipopago)
      // Verifica si "codigo" es igual a "T"
      if (tipopago === "T") {
        this.filtrocorridasbancariasData = []
        this.mostrarVentana = true;
      } else {
        this.mostrarVentana = false;
      }
    },
    async getTipoPago() {
      try {
        const response = await this.$axios.$get('tipopago')
        this.tipoPagoData = response
        console.log('tipoPagoData', this.tipoPagoData)
      } catch (err) {
        console.log(err);
      }
    },
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
      }else{
        this.$router.push('index')
        this.$alert("cancel", {desc: "No está autorizado para accesar a este módulo!!!", hash: 'knsddcssdc', title:'Error'})
      }
    },
    async getPago() {
      try {
        const response = await this.$axios.$get('pagoestadocuenta');
        this.PagoData = response
        this.loading = false
        console.log('this.PagoData',this.PagoData)
      } catch (err) {
        console.log(err);
      }
    },
    async getCorrelativo() {
      try {
        const response = await this.$axios.$get('correlativo');
        this.CorrelativoData = response
        console.log('CorrelativoData',this.CorrelativoData)
      } catch (err) {
        console.log(err);
      }
    },
    numeroFormateado(numero) {
      // Convertir a número si es una cadena
      const numeroComoNumero = typeof numero === 'string' ? parseFloat(numero) : numero;

      // Verificar si 'numeroComoNumero' es un número válido
      if (isNaN(numeroComoNumero)) {
        return 'Error: No es un número válido';
      }

      // Formatear el número manualmente
      const partes = numeroComoNumero.toFixed(2).toString().split('.');
      partes[0] = partes[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      return partes.join('.');
    },


    selectedField(index) {
      const div = this.divs[index]
      const tasa_encontrada = this.tasaMultaData.find(tasa => tasa.id === div.tasamulta)
      div.monto_unidad_tributaria = tasa_encontrada.unidad_tributaria

      this.multiplicarValor(index)
    },

    multiplicarValor(index) {
      const div = this.divs[index];
      if (div.cantidad !== null) {
        div.monto_tasa = (div.monto_unidad_tributaria * div.cantidad * 60 * this.montoBCV).toFixed(2);
      }
    },




    obtenerFechaActual() {
      const fecha = new Date();
      const dia = fecha.getDate().toString().padStart(2, '0');
      const mes = (fecha.getMonth() + 1).toString().padStart(2, '0');
      const anio = fecha.getFullYear().toString().slice(-2);
      return `${dia}/${mes}/${anio}`;
    },


    montoTotal() {
      let total = 0
      for (const div of this.divs) {
        if (div.monto !== null) {
          total += parseFloat(div.monto)
        }
      }
      return total
    },

    addDiv() {
      this.divs.push({ cantidad: 1, monto_tasa: 0 });
    },

    removeDiv(index) {
      this.divs.splice(index, 1);
    },

    sumarDiasHabiles(fechaInicial, nDias) {
      let fecha = new Date(fechaInicial);
      let diasSumados = 0;

      while (diasSumados < nDias) {
        // Añadir un día
        fecha.setDate(fecha.getDate() + 1);

        // Verificar si el día de la semana es sábado (6) o domingo (0)
        if (fecha.getDay() !== 6 && fecha.getDay() !== 0) {
          diasSumados++;
        }
      }

      return fecha;
    },
    formatearFecha(fecha) {
      const dia = fecha.getDate().toString().padStart(2, '0');
      const mes = (fecha.getMonth() + 1).toString().padStart(2, '0');
      const anio = fecha.getFullYear();
      return `${dia}/${mes}/${anio}`;
    },
    async generarPDF() {
      const pdf = new jsPDF('p', 'mm', 'letter');

      // Define un objeto de mapeo para traducir valores abreviados a descripciones completas
      const tipoMapeo = {
        'I': 'Impuesto',
        'T': 'Tasa',
        'M': 'Multa',
        'O': 'Otro'
      };

      const fechaActual = new Date();
      const dia = fechaActual.getDate().toString().padStart(2, '0'); // Obtén el día y asegúrate de tener 2 dígitos.
      const mes = (fechaActual.getMonth() + 1).toString().padStart(2, '0'); // El mes comienza desde 0, por lo que sumamos 1.
      const anio = fechaActual.getFullYear();
      const hora = fechaActual.getHours().toString().padStart(2, '0');
      const minutos = fechaActual.getMinutes().toString().padStart(2, '0');
      const segundos = fechaActual.getSeconds().toString().padStart(2, '0');

      const fechaConHora = `${dia}/${mes}/${anio} ${hora}:${minutos}:${segundos}`;

      const img1 = new Image();
      const img2 = new Image();
      var ruta1=this.CorrelativoData[0].Logo1;
      if (ruta1.includes("catastro_back")) {
        // Concatenar "/catastro_back"
        ruta1 = ruta1.replace("catastro_back", "catastro_back/catastro_back");
      }
      var ruta2=this.CorrelativoData[0].Logo2;
      if (ruta2.includes("catastro_back")) {
        // Concatenar "/catastro_back"
        ruta2 = ruta2.replace("catastro_back", "catastro_back/catastro_back");
      }
      img1.src = ruta1;
      img2.src = ruta2;
      let startY = 60;

      // Establecer el tamaño de fuente para el encabezado de la tabla
      const fontSizeTitle = 15; // Tamaño de fuente para el encabezado
      const fontSizeHead = 8; // Tamaño de fuente para el encabezado
      const fontSizeBody = 8; // Tamaño de fuente para el cuerpo de la tabla
      //let pageHeight = pdf.internal.pageSize.height;


      pdf.addImage(img1, 'PNG', 10, 15, 30, 30); // Logotipo izquierdo
      pdf.addImage(img2, 'PNG', 160, 13, 40, 30); // Logotipo derecho
      pdf.setFontSize(fontSizeHead);
      pdf.setFont("helvetica", "bold");
      pdf.text(200, 10, `No DE CONTROL. ${this.Correlativo}`, null, null, 'right');
      pdf.setFont("helvetica", "normal");
      pdf.setFontSize(fontSizeHead + 2);
      pdf.text(100, 20, 'REPÚBLICA BOLIVARIANA DE VENEZUELA', null, null, 'center');
      pdf.text(100, 25, 'ESTADO CARABOBO', null, null, 'center');
      pdf.text(100, 30, 'ALCALDÍA DEL MUNICIPIO NAGUANAGUA', null, null, 'center');
      pdf.text(100, 35, 'DIRECCIÓN DE HACIENDA', null, null, 'center');
      pdf.setFontSize(fontSizeHead);
      pdf.text(200, 50, `FECHA DE IMPRESIÓN: ${fechaConHora}`, null, null, 'right');
      pdf.text(200, 55, `ESTADO DE CUENTA: ${this.IdEdoCuenta}`, null, null, 'right');



      pdf.setFont("helvetica", "bold");
      pdf.setFontSize(fontSizeTitle);
      pdf.text(100, 45, 'PRE-FACTURA', null, null, 'center');
      pdf.setFontSize(fontSizeHead);
      pdf.setFont("helvetica", "normal");

      pdf.setDrawColor(0); // Color de línea (negro en este caso)
      pdf.setLineWidth(0.5); // Ancho de la línea (1 en este caso)
      pdf.line(15, startY, 200, startY); // Coordenadas de inicio (x1, y1) y final (x2, y2) de la línea
      startY = startY + 5
      pdf.text('R.I.F.:', 15, startY);
      pdf.setFont("helvetica", "bold");
      pdf.text(JSON.parse(JSON.stringify(this.numero_documento)), 55, startY);
      pdf.setFont("helvetica", "normal");
      startY = startY + 5
      pdf.text('NOMBRE/RAZÓN SOCIAL: ', 15, startY);
      pdf.setFont("helvetica", "bold");
      pdf.text(JSON.parse(JSON.stringify(this.nombrecontribuyente)), 55, startY);
      pdf.setFont("helvetica", "normal");
      startY = startY + 5
      pdf.text('DIRECCIÓN: ', 15, startY);
      pdf.setFont("helvetica", "bold");
      pdf.text(JSON.parse(JSON.stringify(this.selectedItem.propietario_direccion)), 55, startY);
      pdf.setFont("helvetica", "normal");
      startY = startY + 5
      pdf.text('TELÉFONO:', 15, startY);
      pdf.setFont("helvetica", "bold");
      pdf.text(JSON.parse(JSON.stringify(this.selectedItem.propietario_telefono_principal)), 55, startY);
      pdf.setFont("helvetica", "normal");
      startY = startY + 5
      pdf.line(15, startY, 200, startY); // Coordenadas de inicio (x1, y1) y final (x2, y2) de la línea
      startY = startY + 5
      pdf.text('OBSERVACIONES:', 15, startY);
      pdf.setFont("helvetica", "bold");

      startY=startY+5
      let longText = this.selectedItem.observaciones != null ? this.selectedItem.observaciones : ''
      // Tamaño máximo de la línea
      const maxWidth = 180;
      // Dividir el texto en líneas
      let textLines = pdf.splitTextToSize(longText, maxWidth);
      // Agregar cada línea al PDF
      textLines.forEach((line) => {
          pdf.text(15, startY, line);
          startY += 4; 
      });
      pdf.setFont("helvetica", "normal");  
      startY = startY + 10
      pdf.text('SERVICIO O TRÁMITE:', 15, startY);
      pdf.setFont("helvetica", "bold");
      pdf.text(this.selectedItem.tipoflujo_descripcion, 55, startY);
      pdf.setFont("helvetica", "normal");
      startY = startY + 5

      pdf.setFontSize(fontSizeHead); // Establecer el tamaño de fuente solo para esta línea


      const options = {
        startY: startY + 2,
        styles: { fontSize: fontSizeBody },
        headStyles: { fontSize: fontSizeHead },
        didParseCell: function (data) {
          if (data.column.dataKey === 'monto_unidad_tributaria') {
            // Formatear y justificar a la derecha con 8 decimales
            data.cell.text(parseFloat(data.cell.text).toFixed(8));
            data.cell.styles.halign = 'right';
          }
        },
      };

      const columns = ['Tipo', 'Descripción', 'Base Imponible Bs', 'Cantidad', 'Monto Bs'];
      const data = this.divs.map((item) => [
        tipoMapeo[this.tasaMultaData.find((TasaMulta) => TasaMulta.id === item.tasamulta).tipo],
        this.tasaMultaData.find((TasaMulta) => TasaMulta.id === item.tasamulta).descripcion,
        this.formatNumber(item.monto_unidad_tributaria),
        item.cantidad,
        this.formatNumber(item.monto_tasa),
      ]);

      pdf.autoTable(columns, data, options);

      startY += 10 + this.divs.length * 7;
      startY = startY + 10

      pdf.text('MONTO A CANCELAR (BS.):', 15, startY);
      pdf.setFont("helvetica", "bold");
      pdf.setFontSize(fontSizeTitle);
      pdf.text(this.formatNumber(this.montoTotal()), 55, startY);
      pdf.setFontSize(fontSizeHead);
      pdf.setFont("helvetica", "normal");

      startY = startY + 10
      pdf.text('Contribuyente_________________________________________', 15, startY);
      startY = startY + 10
      pdf.text('C.I._________________________________________________', 15, startY);
      startY = startY + 10
      pdf.text('Firma_______________________________________________', 15, startY);
      pdf.text('SELLO___________________________', 140, startY);
      startY = startY + 10
      pdf.text('Fecha______________________________________________', 15, startY);
      startY = startY + 5



      pdf.save(`PreFactura-Nro-${this.Correlativo}.pdf`);

      this.uploadPDF(pdf);

    },

    async uploadPDF(pdf) {
      const formData = new FormData();
      formData.append('ReportePdf', new Blob([pdf.output('blob')], { type: 'application/pdf' }), `PreFactura-Nro-${this.Correlativo}.pdf`);
      try {
        const response = await this.$axios.$patch(`liquidacion/${this.Id}/`, formData, {
          headers: { 'Content-Type': 'application/pdf' },
        })
        console.log(response)
        await this.getPDF()
      } catch (err) {
        console.log(err);
      }
    },
    async getPDF() {
      try {
        const response = await this.$axios.$get(`liquidacion/${this.Id}/`)
        console.log('response', response.ReportePdf)
        var pdfData = response.ReportePdf;
        if (pdfData.includes("catastro_back")) {
          // Concatenar "/catastro_back"
          pdfData = pdfData.replace("catastro_back", "catastro_back/catastro_back");
        }
        window.open(pdfData, "_blank").focus();
      } catch (err) {
        console.log(err);
      }
    },

    async getEstadoDetalles(item) {
      this.selectedItem = item
      console.log('this.selectedItem ', this.selectedItem)
      this.nombrecontribuyente = item.liquidacion_propietario_nombre
      const fechaActual = new Date();
      fechaActual.setHours(0, 0, 0, 0); // Establece la hora en 00:00:00


          try {
            const response2 = await this.$axios.$get(`pagoestadocuentadetalle/?pagoestadocuenta_id=${item.id}`)
            this.divs = response2
            console.log(this.divs, 'jolaaa')
            this.openDialog = true
          } catch (err) {
            console.log(err);
          }


    },


    formatNumber(input) {
    // Convierte cadena a número si es necesario
    const number = typeof input === 'string' ? parseFloat(input.replace(/,/g, '')) : input;
    // Verifica si el número es válido
    if (isNaN(number)) {
        return 'Número inválido';
    }
    // Formatea el número con dos decimales y separadores de miles
    const formattedNumber = number.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return formattedNumber; 
    },
  }

}
</script>

<style src="~/assets/styles/pages/liquidacion.scss" lang="scss" />