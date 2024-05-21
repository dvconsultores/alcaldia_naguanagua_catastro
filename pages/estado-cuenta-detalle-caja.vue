<template>
  <div class="center no-padding divcol" style="margin-bottom:20px; padding-left: 256px;">
    <section class="section1-descripcion-inmueble">
      <div class="creacion-container">
        <div class="divrow jspace" style="width:100%;">
          <p class="title-inscripcion-inmueble">
            Ingreso Extraordinario: {{ descripcionflujo }}
          </p>
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
              {{ JSON.parse(JSON.stringify(this.$store.getters.getContribuyente.nombre)) }}
            </p>
          </div>
          <div class="title-description-div" style="border-right: none!important;">
            <p class="nombre-razon">
              RIF
            </p>
            <p class="nombre-desc">
              {{ JSON.parse(JSON.stringify(this.$store.getters.getContribuyente.numero_documento)) }}
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
          <v-textarea class="textarea" v-model="observaciones"></v-textarea>
        </div>
      </div>
    </section>
    <section class="section3-recaudacion">
      <div class="descripcion-container">
        <div class="title-morado">
          <p class="solicitud-title">
            Tipos de pago
          </p>
          <p class="solicitud-title">
            TOTAL PAGADO: {{ numeroFormateado(montoTotalPagado()) }}
          </p>
        </div>
        <v-btn class="btns-add-remove no-shadow" @click="addDiv(index)">
          +
        </v-btn>
        <div v-for="(div, index) in divs" :key="index" class="solicitud-inputs-container2">

          <v-autocomplete v-model="div.tipopago" class="small-input mobile-inputs" label="Tipo de Pago"
            :items="tipoPagoData" item-text="descripcion" item-value="codigo" :disabled="div.bloqueado"
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
                    <v-text-field v-model="searchTransferencia" append-icon="mdi-magnify" label="Buscar" hide-details
                      class="input-data-table"></v-text-field>
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
          <v-menu v-model="menu" :close-on-content-click="false" :nudge-right="5" transition="scale-transition" offset-y
            min-width="auto" :disabled="div.bloqueado">
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
          <v-btn :disabled="botonDeshabilitado1" class="btn size-btn" @click="createEstadoCuenta()">
            Guardar
          </v-btn>

          <v-btn :disabled="botonDeshabilitado2" class="btn size-btn" style="background-color:#ED057E!important;"
            @click="closeopenDialog()">
            Cancelar
          </v-btn>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import computeds from '~/mixins/computeds'
import jsPDF from 'jspdf';
import 'jspdf-autotable';

export default {
  name: "estado-cuenta-detalle-catastroPage",
  mixins: [computeds],
  data() {
    return {
      dialogWait: true,
      observaciones: '',
      monto_unidad_tributaria: null,
      valor2: null,
      monto_total: "72,4",
      show_observaciones: false,
      divs: [{
        tipopago: null,
        bancocuenta: null,
        fechapago: new Date().toISOString().substr(0, 10),// Formato ISO para la fecha
        nro_aprobacion: '',
        nro_lote: '',
        nro_referencia: '',
        monto: 1,
        bloqueado: false,
      }],
      headersCorridasBancarias: [
        { text: 'ID', align: 'center', value: 'id' },
        { text: 'Fecha', align: 'center', value: 'fecha' },
        { text: 'referencia', value: 'referencia', align: 'center' },
        { text: 'Descripción', value: 'descripcion', align: 'center' },
        { text: 'Monto', value: 'monto', align: 'right' },
        { text: '', value: 'actions', sortable: false, align: 'center' },
      ],
      tipoPagoData: [],
      correlativoData: [],
      tasaMultaData: [],
      idflujo: this.$store.getters.getFlujo == 'Sin Seleccionar' ? '' : JSON.parse(JSON.stringify(this.$store.getters.getFlujo.codigo)),
      crea_expediente_flujo: this.$store.getters.getFlujo == 'Sin Seleccionar' ? '' : JSON.parse(JSON.stringify(this.$store.getters.getFlujo.crea_expediente)),
      descripcionflujo: this.$store.getters.getFlujo == 'Sin Seleccionar' ? '' : JSON.parse(JSON.stringify(this.$store.getters.getFlujo.descripcion)),

      tasa_multa_id: null,
      Correlativo: 0,
      Id: 0,
      CorrelativoData: [],
      botonDeshabilitado: false,






      botonDeshabilitado1: false,
      botonDeshabilitado2: false,
      menu: false,
      searchTransferencia: '',
      bancoCuentaData: [],
      corridasbancariasData: [],
      filtrocorridasbancariasData: [],
      openDialog: false,
      dialog: false,

      PagoId: null,
      diferencia: 0,
      valido: false,
      CorrelativoPago: 0,
      mostrarVentana: false,
      montoTotalCxC: 0,
      ValidarTransferenciaData: [],





    }
  },

  head() {
    const title = 'Ingresos Extraordinarios Detalle';
    return {
      title,
    }
  },

  async mounted() {
    if (this.idflujo == '') {
      this.$router.push('estado-cuenta-caja')
      this.$alert("cancel", { desc: "Debe seleccionar un tipo de transacción o trámite", hash: 'knsddcssdc', title: 'Error' })
    }
    else {
      this.dialogWait = true
      await this.getCorrelativo();
      await this.getTipoPago();
      await this.getBancoCuenta();
      await this.getCorridasBancarias();
      await this.getTasaMulta()
      this.dialogWait = false
    }
  },

  methods: {
    closeopenDialog() {
      this.divs = []
      this.openDialog = false;
      this.$router.push(`estado-cuenta-caja`)
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

    async getCorridasBancarias() {
      try {
        const response = await this.$axios.$get('corridasbancarias/?situado=T')
        this.corridasbancariasData = response
        //console.log(this.corridasbancariasData, 'dataa')
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
    montoTotalPagado() {
      var total = 0
      for (const div of this.divs) {
        if (div.monto !== null) {
          total += parseFloat(div.monto)
        }
      }
      return total
    },

    async getTipoPago() {
      try {
        const response = await this.$axios.$get('tipopago')
        this.tipoPagoData = response
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

    async getCorrelativo() {
      try {
        const response = await this.$axios.$get('correlativo');
        this.CorrelativoData = response
        console.log('CorrelativoData', this.CorrelativoData)
      } catch (err) {
        console.log(err);
      }
    },

    roundNumber(value, decimals) {
      return parseFloat(value).toFixed(decimals);
    },


    async getTasaMulta() {
      try {
        const response = await this.$axios.$get('tasamulta');
        this.tasaMultaData = response
        console.log('this.tasaMultaData0', this.tasaMultaData)
      } catch (err) {
        console.log(err);
      }
    },


    montoTotal() {
      let total = 0
      for (const div of this.divs) {
        if (div.calculo !== null) {
          total += parseFloat(div.calculo)
        }
      }
      return total.toFixed(2)
    },




    async createEstadoCuenta() {
      if (this.montoTotal()) {
        this.tasa_multa_id=this.tasaMultaData.find(tasa => tasa.codigo === '305000000')

        const divs2 =[{
              tasa_multa_id: this.tasa_multa_id, // Valor para tasa_multa_id (puedes reemplazarlo con el valor que desees)
              monto_unidad_tributaria: this.montoTotal(), // Valor para monto_unidad_tributaria (puedes reemplazarlo con el valor que desees)
              cantidad: 1, // Valor para cantidad (puedes reemplazarlo con el valor que desees)
              calculo: this.montoTotal(), // Valor para calculo (puedes reemplazarlo con el valor que desees)
              editable: false
            }];
        const data = {
          inmueble: (!this.crea_expediente_flujo) ? this.$store.getters.getExpediente.id : null,
          flujo: this.idflujo,
          propietario: this.$store.getters.getContribuyente.id,
          observacion: this.observaciones,
          detalle: divs2,
          monto_total: this.montoTotal(),
        }
        try {
          this.botonDeshabilitado = true
          this.dialogWait = true
          console.log('data',data)
          //const res = await this.$axios.$post('crearestadocuenta/', data)
          //console.log(res)
          this.dialogWait = false
          this.botonDeshabilitado = false
          //this.$router.push('modificar-datos')
          this.$alert("success", { desc: "Se ha creado un estado de cuenta con éxito", hash: 'knsddcssdc', title: 'Creado' })
          this.$router.push('consulta-inmueble')
        } catch (err) {
          console.log(err);
        }
      }
      else{
        this.$alert("cancel", { desc: 'Debe colocar un monto.', hash: 'knsddcssdc', title: 'Alerta' })

      }
    },

    addDiv() {
      this.valido = false
      var mensaje = ""
      if (this.divs.length > 0) {
        const div = this.divs[this.divs.length - 1];
        console.log('addDiv', div);
        if (!div.tipopago) { mensaje = mensaje + 'Debe colocar un tipo de pago.' }
        else {
          if (div.tipopago == "D") { // Tarjeta de debito
            if (!div.bancocuenta) { mensaje = mensaje + 'Falta Banco, ' }
            if (!div.nro_aprobacion) { mensaje = mensaje + 'Falta Nro. de Aprobación, ' }
            if (!div.nro_lote) { mensaje = mensaje + 'Falta Nro. de Lote, ' }
            if (!div.nro_referencia) { mensaje = mensaje + 'Falta Nro. de Referencia.' }
          }
          if (div.tipopago == "P") { //Deposito
            if (!div.bancocuenta) { mensaje = mensaje + 'Falta Banco, ' }
            if (div.nro_referencia == false) { mensaje = mensaje + 'Falta Nro. de Referencia.' }
          }
        }
      }
      else { mensaje = mensaje + 'No hay pagos para procesar.' }


      if (mensaje) { this.$alert("cancel", { desc: "Error: " + mensaje, hash: 'knsddcssdc', title: 'Falta dato' }) }
      else {
        this.valido = true
      }

      if (this.valido) {
        this.divs.push({
          tipopago: null,
          bancocuenta: null,
          fechapago: new Date().toISOString().substr(0, 10),// Formato ISO para la fecha
          nro_aprobacion: '',
          nro_lote: '',
          nro_referencia: '',
          monto: 0,
          bloqueado: false,
        })
      }
    },


    removeDiv(index) {
      this.divs.splice(index, 1)
      if (this.divs.length == 0) {
        this.divs.push({
          tipopago: null,
          bancocuenta: null,
          fechapago: new Date().toISOString().substr(0, 10),// Formato ISO para la fecha
          nro_aprobacion: '',
          nro_lote: '',
          nro_referencia: '',
          monto:0,
          bloqueado: false,
        })
      }
    },

    obtenerFechaActual() {
      const fecha = new Date();
      const dia = fecha.getDate().toString().padStart(2, '0');
      const mes = (fecha.getMonth() + 1).toString().padStart(2, '0');
      const anio = fecha.getFullYear().toString().slice(-2);
      return `${dia}/${mes}/${anio}`;
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


      let startY = 55;

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

      pdf.setFont("helvetica", "bold");
      pdf.setFontSize(fontSizeTitle);
      pdf.text(100, 45, 'ESTADO DE CUENTA', null, null, 'center');
      pdf.setFontSize(fontSizeHead);
      pdf.setFont("helvetica", "normal");

      pdf.setDrawColor(0); // Color de línea (negro en este caso)
      pdf.setLineWidth(0.5); // Ancho de la línea (1 en este caso)
      pdf.line(15, startY, 200, startY); // Coordenadas de inicio (x1, y1) y final (x2, y2) de la línea
      startY = startY + 5
      pdf.text('R.I.F.:', 15, startY);
      pdf.setFont("helvetica", "bold");
      pdf.text(JSON.parse(JSON.stringify(this.$store.getters.getContribuyente.numero_documento)), 55, startY);
      pdf.setFont("helvetica", "normal");
      startY = startY + 5
      pdf.text('NOMBRE/RAZÓN SOCIAL: ', 15, startY);
      pdf.setFont("helvetica", "bold");
      pdf.text(JSON.parse(JSON.stringify(this.$store.getters.getContribuyente.nombre)), 55, startY);
      pdf.setFont("helvetica", "normal");
      startY = startY + 5
      pdf.text('DIRECCIÓN: ', 15, startY);
      pdf.setFont("helvetica", "bold");
      pdf.text(JSON.parse(JSON.stringify(this.$store.getters.getContribuyente.direccion)), 55, startY);
      pdf.setFont("helvetica", "normal");
      startY = startY + 5
      pdf.text('TELÉFONO:', 15, startY);
      pdf.setFont("helvetica", "bold");
      pdf.text(JSON.parse(JSON.stringify(this.$store.getters.getContribuyente.telefono_principal)), 55, startY);
      pdf.setFont("helvetica", "normal");
      startY = startY + 5
      pdf.line(15, startY, 200, startY); // Coordenadas de inicio (x1, y1) y final (x2, y2) de la línea
      startY = startY + 5
      pdf.text('OBSERVACIONES:', 15, startY);
      pdf.setFont("helvetica", "bold");
      pdf.text(this.observaciones, 55, startY);
      pdf.setFont("helvetica", "normal");
      startY = startY + 10
      pdf.text('SERVICIO O TRÁMITE:', 15, startY);
      pdf.setFont("helvetica", "bold");
      pdf.text(JSON.parse(JSON.stringify(this.$store.getters.getFlujo.descripcion)), 55, startY);
      pdf.setFont("helvetica", "normal");
      if (this.$store.getters.getExpediente != 'Sin Seleccionar') {
        startY = startY + 5
        pdf.text('NÚMERO DE EXPEDIENTE:', 15, startY);
        pdf.setFont("helvetica", "bold");
        pdf.text(JSON.parse(JSON.stringify(this.$store.getters.getExpediente.numero_expediente)), 55, startY);
        pdf.setFont("helvetica", "normal");
        startY = startY + 5
        pdf.text('DIRECCIÓN INMUEBLE:', 15, startY);
        pdf.setFont("helvetica", "bold");
        if (this.$store.getters.getExpediente.direccion != null) {
          pdf.text(JSON.parse(JSON.stringify(this.$store.getters.getExpediente.direccion)), 55, startY);
        } else {
          pdf.text('Sin Dirección', 55, startY);
        }
        pdf.setFont("helvetica", "normal");
      }
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
        tipoMapeo[this.tasaMultaData.find((TasaMulta) => TasaMulta.id === item.tasa_multa_id).tipo],
        this.tasaMultaData.find((TasaMulta) => TasaMulta.id === item.tasa_multa_id).descripcion,
        this.formatNumber(item.monto_unidad_tributaria),
        item.cantidad,
        this.formatNumber(item.calculo),
      ]);

      pdf.autoTable(columns, data, options);


      /*
            pdf.autoTable({
                head: [[ 'Descripción','Petro', 'Cantidad', 'Monto Bs' ]],
                body: this.divs.map(item => [
                  this.tasaMultaData.find((TasaMulta) => TasaMulta.id === item.tasa_multa_id).descripcion,
                  item.monto_unidad_tributaria,
                  item.cantidad,
                  item.calculo
                  
                ]),
                startY: startY + 2,
                styles: { fontSize: fontSizeBody }, // Establecer el tamaño de fuente para el cuerpo de la tabla
                headStyles: { fontSize: fontSizeHead }, // Establecer el tamaño de fuente para el encabezado
      
              });
              }
              */
      startY += 10 + this.divs.length * 7;
      startY = startY + 10

      pdf.text('MONTO A CANCELAR (BS.):', 15, startY);
      pdf.setFont("helvetica", "bold");
      pdf.setFontSize(fontSizeTitle);
      pdf.text(this.formatNumber(this.montoTotal()), 55, startY);
      pdf.setFontSize(fontSizeHead);
      pdf.setFont("helvetica", "normal");

      startY = startY + 10
      pdf.text('Esta planilla tiene validez de ' + this.$store.getters.getFlujo.vencimiento + ' días. Se vence el día :' + this.formatearFecha(this.sumarDiasHabiles(fechaActual, +this.$store.getters.getFlujo.vencimiento)), 15, startY);
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



      pdf.save(`EstadoCuenta-Nro-${this.Correlativo}.pdf`);
      this.uploadPDF(pdf);

    },

    async uploadPDF(pdf) {
      const formData = new FormData();
      formData.append('ReportePdf', new Blob([pdf.output('blob')], { type: 'application/pdf' }), `EstadoCuenta-Nro-${this.Correlativo}.pdf`);
      try {
        const response = await this.$axios.$patch(`estadocuenta/${this.Id}/`, formData, {
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
        const response = await this.$axios.$get(`estadocuenta/${this.Id}/`)

        console.log('response', response.ReportePdf)
        var pdfData = response.ReportePdf;
        if (pdfData.includes("catastro_back")) {
          // Concatenar "/catastro_back"
          pdfData = pdfData.replace("catastro_back", "catastro_back/catastro_back");
        }
        window.open(pdfData, "_blank").focus();
      } catch (err) {
        console.error('Error al obtener el PDF:', err);
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

  }
}
</script>

<style src="~/assets/styles/pages/estado-cuenta-detalle.scss" lang="scss" />