<template>
  <div class="center no-padding divcol" style="margin-bottom:20px; padding-left: 256px;">
    <section class="section1-modificar-datos">
      <div class="modificar-datos-container">
        <div class="title-morado">
          <p class="modificar-datos-title">
            Depósito de Efectivo
          </p>
          <v-dialog v-model="dialog_editar" max-width="1600px">
            <v-card id="dialog-editar-crear">
              <v-card-title>
                <span class="title">Depositar</span>
              </v-card-title>
              <hr>
              <div class="section1-crear">
                <div class="datos-contribuyente-div">
                  <div class="inputs-datos-container">
                    <div class="divrow center col-mobile" style="max-width:500px; gap:10px; width:100%;">
                      <v-autocomplete v-model="defaultItem.bancocuenta" :items="bancoCuentaData"
                        item-text="banco_nombre" item-value="id" label="Banco:" class="input-dialog">
                      </v-autocomplete>
                    </div>
                    <div class="divrow center col-mobile" style="max-width:500px; gap:10px; width:100%;">
                      <v-text-field v-model="defaultItem.nro_referencia" class="input-dialog"
                        label="Nro. Referencia"></v-text-field>
                    </div>

                    <div class="divrow center col-mobile" style="max-width:500px; gap:10px; width:100%;">

                      <v-menu v-model="menu" :close-on-content-click="false" :nudge-right="5"
                        transition="scale-transition" offset-y min-width="auto" >
                        <template #activator="{ on, attrs }">
                          <v-text-field v-model="defaultItem.fechapago" class="input-dialog" label="Fecha"
                            append-icon="mdi-calendar" readonly v-bind="attrs" v-on="on"></v-text-field>
                        </template>
                        <v-date-picker v-model="defaultItem.fechapago" label="Fecha" @input="formatoFecha()" color="blue"
                          header-color="#810880" class="custom-date-picker"></v-date-picker>
                      </v-menu>

                    </div>
                    <div class="divrow center col-mobile" style="max-width:500px; gap:10px; width:100%;">
                      <v-text-field  v-model="montocaja" class="input-dialog" :disabled="true"
                        label="Monto en Caja(s)" style="font-size: 20px; " reverse> 
                        {{ parseFloat(montocaja).toFixed(2) }}</v-text-field>
                    </div>

                    <div class="divrow center col-mobile" style="max-width:500px; gap:10px; width:100%;">
                      <v-text-field @click="openDialogMonto" v-model="defaultItem.monto" class="input-dialog"
                        label="Monto a depositar" style="font-size: 20px; " reverse>
                        {{ parseFloat(defaultItem.monto).toFixed(2) }}</v-text-field>
                    </div>
                    <v-dialog v-model="dialog" max-width="400px">
                      <v-card>
                        <v-card-title>
                          Introduce un valor numérico
                        </v-card-title>
                        <v-card-text>
                          <v-text-field v-model="defaultItem.monto" label="Valor Numérico" solo style="font-size: 40px;"
                            inputmode="numeric">
                            {{ parseFloat(defaultItem.monto).toFixed(2) }}
                          </v-text-field>
                        </v-card-text>
                        <v-card-actions>
                          <v-btn @click="saveValue" color="primary">Ok</v-btn>
                        </v-card-actions>
                      </v-card>
                    </v-dialog>
                  </div>
                </div>
                <div class="div-btns">
                  <v-btn :disabled="disableBoton" @click="saveEstado()">
                    Guardar
                  </v-btn>
                  <v-btn :disabled="disableBoton" style="background-color:#ED057E!important;"
                    @click="dialog_editar = false">
                    Cancelar
                  </v-btn>
                </div>
              </div>
            </v-card>
          </v-dialog>
        </div>

        <div class="data-table-container">
          <v-btn class="btn dialog-btn" text @click="generarPDF()">Genera reporte</v-btn>

          <v-text-field v-model="search" append-icon="mdi-magnify" label="Buscar" hide-details class="input-data-table">
          </v-text-field>

          <v-data-table v-model="selectedLiq" :headers="headers" :items="propietarioData" :loading="loading"
            :items-per-page="10" :search="search" :footer-props="{
            itemsPerPageText: 'Items por página',
          }" sort-by="numero_recibo" class="mytabla" mobile-breakpoint="840" show-select>
            <template #[`item.actions1`]="{ item }">
              <v-btn :disabled="selectedLiq.indexOf(item) === -1" class="btn-tabla" @click="editItem(item)">
                Depositar
              </v-btn>
            </template>

          </v-data-table>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import computeds from '~/mixins/computeds'
import moment from 'moment'
import jsPDF from 'jspdf';
import 'jspdf-autotable';

export default {
  name: "Reporte-RecaudosPage",
  mixins: [computeds],
  data() {
    return {
      loading: true,
      fechaFiltro: null, // Inicialmente no se selecciona ninguna fecha de filtro
      filteredPropietarioData: [], // Agrega esta propiedad
      selectedLiq: [],
      search: '',
      menu: false,
      headers: [
        { text: '#Recibo', align: 'center', value: 'numero_recibo', },
        { text: 'Tipo', align: 'center', value: 'tipopago_nombre', },
        { text: 'Caja', align: 'center', value: 'numero_caja', },
        { text: 'Fecha Pago', value: 'fecha', align: 'center' },
        { text: 'Banco Nombre', value: 'banco_nombre', align: 'center' },
        { text: 'Banco Código', value: 'banco_codigo', align: 'center' },
        { text: 'Banco Cuenta', value: 'banco_cuenta', align: 'center' },
        { text: 'Monto', value: 'monto', align: 'center' },
        { text: '', value: 'actions1', sortable: false, align: 'center' },
      ],
      propietarioData: [],
      tipopagoData: [],
      originalData: [],
      permido: JSON.parse(JSON.stringify(this.$store.getters.getUser.permisos)),
      accesos: null,
      dialog_editar: false,
      defaultItem: [],
      disableBoton: false,
      bancoCuentaData: [],
      dialog: false,
      montocaja:0,
    }
  },
  head() {
    const title = 'Reporte Recaudos';
    return {
      title,
    }
  },

  async mounted() {
    this.permisos()
    await this.getTipoPago()
    await this.getTipoPagoDeposito()
    await this.getPagoEstadoCuentaDetalle()
    await this.getBancoCuenta()
    
    //this.imprime()
  },
  computed: {
    //*****************************Efectivo
    efectivoRecaudos() {
      return this.filteredPropietarioData.filter(item => item.tipopago_nombre === "Efectivo");
    },
    sumaMontosEfectivo() {
      return this.efectivoRecaudos.reduce((total, item) => total + parseFloat(item.monto), 0);
    },
    cajasTotales() {
      const cajas = {};
      this.efectivoRecaudos.forEach(item => {
        if (cajas[item.numero_caja]) {
          cajas[item.numero_caja].recaudos.push(item);
          cajas[item.numero_caja].total += parseFloat(item.monto);
        } else {
          cajas[item.numero_caja] = {
            recaudos: [item],
            total: parseFloat(item.monto),
          };
        }
      });
      return cajas;
    },
    //*****************************Débito
    debitoRecaudos() {
      return this.filteredPropietarioData.filter(item => item.tipopago_nombre === "Débito");
    },
    sumaMontosDebito() {
      return this.debitoRecaudos.reduce((total, item) => total + parseFloat(item.monto), 0);
    },
    cajasTotalesDebito() {
      const cajas = {};
      this.debitoRecaudos.forEach(item => {
        if (cajas[item.numero_caja]) {
          cajas[item.numero_caja].recaudos.push(item);
          cajas[item.numero_caja].total += parseFloat(item.monto);
        } else {
          cajas[item.numero_caja] = {
            recaudos: [item],
            total: parseFloat(item.monto),
          };
        }
      });
      return cajas;
    },
    //*****************************Transferencia
    TransferenciaRecaudos() {
      return this.filteredPropietarioData.filter(item => item.tipopago_nombre === "Transferencia");
    },
    sumaMontosTransferencia() {
      return this.TransferenciaRecaudos.reduce((total, item) => total + parseFloat(item.monto), 0);
    },
    cajasTotalesTransferencia() {
      const cajas = {};
      this.TransferenciaRecaudos.forEach(item => {
        if (cajas[item.numero_caja]) {
          cajas[item.numero_caja].recaudos.push(item);
          cajas[item.numero_caja].total += parseFloat(item.monto);
        } else {
          cajas[item.numero_caja] = {
            recaudos: [item],
            total: parseFloat(item.monto),
          };
        }
      });
      return cajas;
    },
    //*****************************Situado
    SituadoRecaudos() {
      return this.filteredPropietarioData.filter(item => item.tipopago_nombre === "SITUADO");
    },
    sumaMontosSituado() {
      return this.SituadoRecaudos.reduce((total, item) => total + parseFloat(item.monto), 0);
    },
    cajasTotalesSituado() {
      const cajas = {};
      this.SituadoRecaudos.forEach(item => {
        if (cajas[item.numero_caja]) {
          cajas[item.numero_caja].recaudos.push(item);
          cajas[item.numero_caja].total += parseFloat(item.monto);
        } else {
          cajas[item.numero_caja] = {
            recaudos: [item],
            total: parseFloat(item.monto),
          };
        }
      });
      return cajas;
    },
    //*****************************Interes
    InteresRecaudos() {
      return this.filteredPropietarioData.filter(item => item.tipopago_nombre === "INTERESES");
    },
    sumaMontosInteres() {
      return this.InteresRecaudos.reduce((total, item) => total + parseFloat(item.monto), 0);
    },
    cajasTotalesInteres() {
      const cajas = {};
      this.InteresRecaudos.forEach(item => {
        if (cajas[item.numero_caja]) {
          cajas[item.numero_caja].recaudos.push(item);
          cajas[item.numero_caja].total += parseFloat(item.monto);
        } else {
          cajas[item.numero_caja] = {
            recaudos: [item],
            total: parseFloat(item.monto),
          };
        }
      });
      return cajas;
    },
    //*****************************Depósito
    DepositoRecaudos() {
      return this.filteredPropietarioData.filter(item => item.tipopago_nombre === "Depósito");
    },
    sumaMontosDeposito() {
      return this.DepositoRecaudos.reduce((total, item) => total + parseFloat(item.monto), 0);
    },
    cajasTotalesDeposito() {
      const cajas = {};
      this.DepositoRecaudos.forEach(item => {
        if (cajas[item.numero_caja]) {
          cajas[item.numero_caja].recaudos.push(item);
          cajas[item.numero_caja].total += parseFloat(item.monto);
        } else {
          cajas[item.numero_caja] = {
            recaudos: [item],
            total: parseFloat(item.monto),
          };
        }
      });
      return cajas;
    },
    //*****************************Nota de crédito
    NotaCreditoRecaudos() {
      return this.filteredPropietarioData.filter(item => item.tipopago_nombre === "Nota de crédito");
    },
    sumaMontosNotaCredito() {
      return this.NotaCreditoRecaudos.reduce((total, item) => total + parseFloat(item.monto), 0);
    },
    cajasTotalesNotaCredito() {
      const cajas = {};
      this.NotaCreditoRecaudos.forEach(item => {
        if (cajas[item.numero_caja]) {
          cajas[item.numero_caja].recaudos.push(item);
          cajas[item.numero_caja].total += parseFloat(item.monto);
        } else {
          cajas[item.numero_caja] = {
            recaudos: [item],
            total: parseFloat(item.monto),
          };
        }
      });
      return cajas;
    },



  },
  methods: {
    async saveEstado() {
      this.disableBoton = true
      console.log('this.selectedLiq', this.selectedLiq)
      for (const divLiq of this.selectedLiq) {
        const formDataNew = new FormData()
        formDataNew.append('bancocuenta', this.defaultItem.bancocuenta)
        formDataNew.append('nro_referencia', this.defaultItem.nro_referencia)
        try {
          const res = await this.$axios.$patch('pagoestadocuentadetalle/' + divLiq.id + '/', formDataNew);
          console.log(res)
        } catch (err) {
          console.log(err);
        }
      }
      console.log('1')
      console.log('this.tipopagoDataDeposito', this.tipopagoDataDeposito)
      const divs = [{
        tipopago: this.tipopagoDataDeposito.codigo,
        bancocuenta: this.defaultItem.bancocuenta,
        fechapago: this.defaultItem.fechapago,// Formato ISO para la fecha
        nro_aprobacion: '',
        nro_lote: '',
        nro_referencia: this.defaultItem.nro_referencia,
        monto: parseFloat(this.defaultItem.monto),
      }]
      console.log('2')
      const data3 = {
        liquidacion: null,
        propietario: null,
        observacion: "Deposito de efectivo",
        monto: parseFloat(this.defaultItem.monto),
        monto_cxc: this.montocaja,
        caja: this.$store.getters.getUser.caja,
        detalle: divs
      }
      console.log('3')
      try {
        this.loading = true
        console.log('data3', data3)
        const res = await this.$axios.$post('crearPago/', data3);
        console.log(res)
        this.loading = false
        this.$alert("success", { desc: "Se ha creado el depósito en efectivo con éxito", hash: 'knsddcssdc', title: 'Creado' })
      } catch (err) {
        console.log(err);
      }
      this.selectedLiq = []
      this.dialog_editar = false
      this.disableBoton = false
    },
    formatoFecha() {
      if (this.fechapago) {
        this.fechaFormateada = moment(this.nuevaFecha).format('YYYY-MM-DD HH:mm:ss')
        this.fechapago = this.fechaFormateada
      }
    },
    openDialogMonto() {
      this.dialog = true;
    },
    saveValue() {
      // Aquí puedes realizar alguna acción con el valor numérico (this.numero)
      this.dialog = false;
    },
    editItem(item) {
      console.log('1',item)
      this.defaultItem = item
      this.defaultItem.fechapago= new Date().toISOString().substr(0, 10)
      console.log('2',this.defaultItem) 
      this.montocaja=this.selectedLiq.reduce((total, item) => total + parseFloat(item.monto), 0);
      this.defaultItem.monto=this.montocaja
      this.dialog_editar = true

    },
    async getBancoCuenta() {
      try {
        const response = await this.$axios.$get('bancocuenta')
        this.bancoCuentaData = response
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
      console.log('permiso: 1 si , 0 no:', this.permido.filter(permido => permido.modulo.toLowerCase().includes(this.modulo)).length);
      if (this.permido.filter(permido => permido.modulo.toLowerCase().includes(this.modulo)).length) {
        console.log('leer:', (this.permido.filter(permido => permido.modulo.toLowerCase().includes(this.modulo)))[0].leer);
        this.accesos = (this.permido.filter(permido => permido.modulo.toLowerCase().includes(this.modulo)))[0]
        console.log('this.accesos', this.accesos.borrar)
      } else {
        this.$router.push('index')
        this.$alert("cancel", { desc: "No está autorizado para accesar a este módulo!!!", hash: 'knsddcssdc', title: 'Error' })
      }
    },
    formatDate(dateString) {
      const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
      return new Date(dateString).toLocaleDateString('es-ES', options);
    },

    generarPDF() {
      const pdf = new jsPDF('p', 'mm', 'letter');
      //const img1 = new Image();
      //img1.src = '/alcaldia_catastro/alcaldia_catastro/assets/sources/logos/Escudo_Naguanagua_Carabobo.png'; // Ruta a tu primer logotipo
      //const img2 = new Image();
      //img2.src = '/alcaldia_catastro/alcaldia_catastro/assets/sources/logos/logo.png'; // Ruta a tu segundo logotipo
      const title = `Cuadre detallado de caja a la fecha  ${this.fechaFiltro}`;
      // Establecer el tamaño de fuente para el encabezado de la tabla
      const fontSizeHead = 8; // Tamaño de fuente para el encabezado
      const fontSizeBody = 8; // Tamaño de fuente para el cuerpo de la tabla
      let pageHeight = pdf.internal.pageSize.height;
      let startY = 60;

      //pdf.addImage(img1, 'PNG', 10, 10, 30, 30); // Logotipo izquierdo
      //pdf.addImage(img2, 'PNG', 160, 10, 40, 30); // Logotipo derecho
      pdf.setFontSize(16);
      pdf.text(100, 40, title, null, null, 'center');
      pdf.setFontSize(fontSizeHead); // Establecer el tamaño de fuente solo para esta línea

      pdf.text('EFECTIVO: ', 15, startY);
      pdf.text(80, startY, this.sumaMontosEfectivo.toFixed(2), null, null, 'right');
      startY = startY + 5
      pdf.text('DEBITO: ', 15, startY);
      pdf.text(80, startY, this.sumaMontosDebito.toFixed(2), null, null, 'right');
      startY = startY + 5
      pdf.text('TRANSFERENCIA: ', 15, startY);
      pdf.text(80, startY, this.sumaMontosTransferencia.toFixed(2), null, null, 'right');
      startY = startY + 5
      pdf.text('DEPOSITO: ', 15, startY);
      pdf.text(80, startY, this.sumaMontosDeposito.toFixed(2), null, null, 'right');
      startY = startY + 5
      pdf.text('NOTA DE CREDITO: ', 15, startY);
      pdf.text(80, startY, this.sumaMontosNotaCredito.toFixed(2), null, null, 'right');
      if (this.sumaMontosSituado > 0) {
        startY = startY + 5
        pdf.text('SITUADO: ', 15, startY);
        pdf.text(80, startY, this.sumaMontosSituado.toFixed(2), null, null, 'right');
      }
      if (this.sumaMontosInteres > 0) {
        startY = startY + 5
        pdf.text('INTERESES: ', 15, startY);
        pdf.text(80, startY, this.sumaMontosInteres.toFixed(2), null, null, 'right');
      }
      startY = startY + 15
      if (this.sumaMontosEfectivo) {
        pdf.setFontSize(fontSizeHead + 5);
        pdf.text('EFECTIVO', 15, startY);
        pdf.setFontSize(fontSizeHead);
        startY = startY + 1
        pageHeight = pdf.internal.pageSize.height;
      }
      for (const caja in this.cajasTotales) {
        if (startY + this.cajasTotales[caja].recaudos.length * 7 + 10 > pageHeight) {
          pdf.addPage(); // Si el contenido se desborda, agrega una nueva página
          startY = 10;
        }
        //pdf.text(`Caja: ${caja}`, 15, startY);
        pdf.autoTable({
          head: [['#Recibo', 'Monto', 'Fecha de Pago']],
          body: this.cajasTotales[caja].recaudos.map(item => [
            item.numero_recibo,
            item.monto,
            this.formatDate(item.fechapago),
          ]),
          startY: startY + 2,
          // margin: { top: startY + 10 + 10 },
          styles: { fontSize: fontSizeBody }, // Establecer el tamaño de fuente para el cuerpo de la tabla
          headStyles: { fontSize: fontSizeHead }, // Establecer el tamaño de fuente para el encabezado

        });
        startY += 10 + this.cajasTotales[caja].recaudos.length * 7;
        pdf.text(`Total de la Caja ${caja}:`, 15, startY);
        pdf.text(80, startY, this.cajasTotales[caja].total.toFixed(2), null, null, 'right');
      }
      if (this.sumaMontosDebito) {
        startY = startY + 8
        pdf.setFontSize(fontSizeHead + 5);
        pdf.text('DEBITO', 15, startY);
        pdf.setFontSize(fontSizeHead);
        startY = startY + 1
        pageHeight = pdf.internal.pageSize.height;
      }
      for (const caja in this.cajasTotalesDebito) {
        if (startY + this.cajasTotalesDebito[caja].recaudos.length * 7 + 10 > pageHeight) {
          pdf.addPage(); // Si el contenido se desborda, agrega una nueva página
          startY = 10;
        }
        //pdf.text(`Caja: ${caja}`, 15, startY);
        pdf.autoTable({
          head: [['#Recibo', 'Banco', 'Número de cuenta', 'Aprobación', '# Lote', '# Referencia', 'Monto', 'Fecha de Pago']],
          body: this.cajasTotalesDebito[caja].recaudos.map(item => [
            item.numero_recibo,
            item.banco_nombre,
            item.banco_cuenta,
            item.nro_aprobacion,
            item.nro_lote,
            item.nro_referencia,
            item.monto,
            this.formatDate(item.fechapago),
          ]),
          startY: startY + 2,
          //margin: { top: startY + 10 + 10 },
          styles: { fontSize: fontSizeBody }, // Establecer el tamaño de fuente para el cuerpo de la tabla
          headStyles: { fontSize: fontSizeHead }, // Establecer el tamaño de fuente para el encabezado

        });
        startY += 10 + this.cajasTotalesDebito[caja].recaudos.length * 7;
        pdf.text(`Total de la Caja ${caja}:`, 15, startY);
        pdf.text(80, startY, this.cajasTotalesDebito[caja].total.toFixed(2), null, null, 'right');
      }


      if (this.sumaMontosTransferencia) {
        startY = startY + 8
        pdf.setFontSize(fontSizeHead + 5);
        pdf.text('TRANSFERENCIA', 15, startY);
        pdf.setFontSize(fontSizeHead);
        startY = startY + 1
        pageHeight = pdf.internal.pageSize.height;
      }
      for (const caja in this.cajasTotalesTransferencia) {
        if (startY + this.cajasTotalesTransferencia[caja].recaudos.length * 7 + 10 > pageHeight) {
          pdf.addPage(); // Si el contenido se desborda, agrega una nueva página
          startY = 10;
        }
        //pdf.text(`Caja: ${caja}`, 15, startY);
        pdf.autoTable({
          head: [['#Recibo', 'Banco', 'Número de cuenta', '# Referencia', 'Monto', 'Fecha de Pago']],
          body: this.cajasTotalesTransferencia[caja].recaudos.map(item => [
            item.numero_recibo,
            item.banco_nombre,
            item.banco_cuenta,
            item.nro_referencia,
            item.monto,
            this.formatDate(item.fechapago),
          ]),
          startY: startY + 2,
          //margin: { top: startY + 10 + 10 },
          styles: { fontSize: fontSizeBody }, // Establecer el tamaño de fuente para el cuerpo de la tabla
          headStyles: { fontSize: fontSizeHead }, // Establecer el tamaño de fuente para el encabezado
        });
        startY += 10 + this.cajasTotalesTransferencia[caja].recaudos.length * 7;
        pdf.text(`Total de la Caja ${caja}:`, 15, startY);
        pdf.text(80, startY, this.cajasTotalesTransferencia[caja].total.toFixed(2), null, null, 'right');
      }

      if (this.sumaMontosSituado) {
        startY = startY + 8
        pdf.setFontSize(fontSizeHead + 5);
        pdf.text('SITUADO', 15, startY);
        pdf.setFontSize(fontSizeHead);
        startY = startY + 1
        pageHeight = pdf.internal.pageSize.height;
      }
      for (const caja in this.cajasTotalesSituado) {
        if (startY + this.cajasTotalesSituado[caja].recaudos.length * 7 + 10 > pageHeight) {
          pdf.addPage(); // Si el contenido se desborda, agrega una nueva página
          startY = 10;
        }
        //pdf.text(`Caja: ${caja}`, 15, startY);
        pdf.autoTable({
          head: [['#Recibo', 'Banco', 'Número de cuenta', '# Referencia', 'Monto', 'Fecha de Pago']],
          body: this.cajasTotalesSituado[caja].recaudos.map(item => [
            item.numero_recibo,
            item.banco_nombre,
            item.banco_cuenta,
            item.nro_referencia,
            item.monto,
            this.formatDate(item.fechapago),
          ]),
          startY: startY + 2,
          //margin: { top: startY + 10 + 10 },
          styles: { fontSize: fontSizeBody }, // Establecer el tamaño de fuente para el cuerpo de la tabla
          headStyles: { fontSize: fontSizeHead }, // Establecer el tamaño de fuente para el encabezado
        });
        startY += 10 + this.cajasTotalesSituado[caja].recaudos.length * 7;
        pdf.text(`Total de la Caja ${caja}:`, 15, startY);
        pdf.text(80, startY, this.cajasTotalesSituado[caja].total.toFixed(2), null, null, 'right');
      }


      if (this.sumaMontosInteres) {
        startY = startY + 8
        pdf.setFontSize(fontSizeHead + 5);
        pdf.text('INTERESES', 15, startY);
        pdf.setFontSize(fontSizeHead);
        startY = startY + 1
        pageHeight = pdf.internal.pageSize.height;
      }
      for (const caja in this.cajasTotalesInteres) {
        if (startY + this.cajasTotalesInteres[caja].recaudos.length * 7 + 10 > pageHeight) {
          pdf.addPage(); // Si el contenido se desborda, agrega una nueva página
          startY = 10;
        }
        //pdf.text(`Caja: ${caja}`, 15, startY);
        pdf.autoTable({
          head: [['#Recibo', 'Banco', 'Número de cuenta', '# Referencia', 'Monto', 'Fecha de Pago']],
          body: this.cajasTotalesInteres[caja].recaudos.map(item => [
            item.numero_recibo,
            item.banco_nombre,
            item.banco_cuenta,
            item.nro_referencia,
            item.monto,
            this.formatDate(item.fechapago),
          ]),
          startY: startY + 2,
          //margin: { top: startY + 10 + 10 },
          styles: { fontSize: fontSizeBody }, // Establecer el tamaño de fuente para el cuerpo de la tabla
          headStyles: { fontSize: fontSizeHead }, // Establecer el tamaño de fuente para el encabezado
        });
        startY += 10 + this.cajasTotalesInteres[caja].recaudos.length * 7;
        pdf.text(`Total de la Caja ${caja}:`, 15, startY);
        pdf.text(80, startY, this.cajasTotalesInteres[caja].total.toFixed(2), null, null, 'right');
      }


      if (this.sumaMontosDeposito) {
        startY = startY + 8
        pdf.setFontSize(fontSizeHead + 5);
        pdf.text('DEPOSITO', 15, startY);
        pdf.setFontSize(fontSizeHead);
        startY = startY + 1
        pageHeight = pdf.internal.pageSize.height;
      }

      for (const caja in this.cajasTotalesDeposito) {
        if (startY + this.cajasTotalesDeposito[caja].recaudos.length * 7 + 10 > pageHeight) {
          pdf.addPage(); // Si el contenido se desborda, agrega una nueva página
          startY = 10;
        }
        //pdf.text(`Caja: ${caja}`, 15, startY);
        pdf.autoTable({
          head: [['#Recibo', 'Banco', 'Número de cuenta', '# Referencia', 'Monto', 'Fecha de Pago']],
          body: this.cajasTotalesDeposito[caja].recaudos.map(item => [
            item.numero_recibo,
            item.banco_nombre,
            item.banco_cuenta,
            item.nro_referencia,
            item.monto,
            this.formatDate(item.fechapago),
          ]),
          startY: startY + 2,
          //margin: { top: startY + 10 + 10 },
          styles: { fontSize: fontSizeBody }, // Establecer el tamaño de fuente para el cuerpo de la tabla
          headStyles: { fontSize: fontSizeHead }, // Establecer el tamaño de fuente para el encabezado

        });
        startY += 10 + this.cajasTotalesDeposito[caja].recaudos.length * 7;
        pdf.text(`Total de la Caja ${caja}:`, 15, startY);
        pdf.text(80, startY, this.cajasTotalesDeposito[caja].total.toFixed(2), null, null, 'right');
      }
      if (this.sumaMontosNotaCredito) {
        startY = startY + 8
        pdf.setFontSize(fontSizeHead + 5);
        pdf.text('NOTA DE CREDITO', 15, startY);
        pdf.setFontSize(fontSizeHead);
        startY = startY + 1
        pageHeight = pdf.internal.pageSize.height;
      }
      for (const caja in this.cajasTotalesNotaCredito) {
        if (startY + this.cajasTotalesNotaCredito[caja].recaudos.length * 7 + 10 > pageHeight) {
          pdf.addPage(); // Si el contenido se desborda, agrega una nueva página
          startY = 10;
        }
        //pdf.text(`Caja: ${caja}`, 15, startY);
        pdf.autoTable({
          head: [['#Recibo', 'Monto', 'Fecha de Pago']],
          body: this.cajasTotalesNotaCredito[caja].recaudos.map(item => [
            item.numero_recibo,
            item.monto,
            this.formatDate(item.fechapago),
          ]),
          startY: startY + 2,
          //margin: { top: startY + 10 + 10 },
          styles: { fontSize: fontSizeBody }, // Establecer el tamaño de fuente para el cuerpo de la tabla
          headStyles: { fontSize: fontSizeHead }, // Establecer el tamaño de fuente para el encabezado

        });
        startY += 10 + this.cajasTotalesNotaCredito[caja].recaudos.length * 7;
        pdf.text(`Total de la Caja ${caja}:`, 15, startY);
        pdf.text(80, startY, this.cajasTotalesNotaCredito[caja].total.toFixed(2), null, null, 'right');
      }
      const nombreArchivoPDF = `Cuadre detallado de caja a la fecha ${this.fechaFiltro}.pdf`;

      pdf.save(nombreArchivoPDF);

      //const newWindow = window.open();
      //newWindow.document.open();
      //newWindow.document.write('<iframe width="100%" height="100%" src="${nombreArchivoPDF}"></iframe>');
      //newWindow.document.close();

    },
    imprime() {
      this.$router.push('reporte-ejemplo')
    },
    filtrarPorFecha() {
      if (this.fechaFiltro) {
        const fechaSeleccionada = new Date(this.fechaFiltro);
        const fechaSeleccionadaUTC = new Date(
          fechaSeleccionada.getUTCFullYear(),
          fechaSeleccionada.getUTCMonth(),
          fechaSeleccionada.getUTCDate());

        this.filteredPropietarioData = this.propietarioData.filter((registro) => {
          const fechaRegistro = new Date(registro.fecha_recibo);
          const fechaRegistroUTC = new Date(
            fechaRegistro.getUTCFullYear(),
            fechaRegistro.getUTCMonth(),
            fechaRegistro.getUTCDate()
          );
          return fechaRegistroUTC.toDateString() === fechaSeleccionadaUTC.toDateString();


          //return fechaRegistro.toDateString() === fechaSeleccionada.toDateString();
        });
      } else {
        this.filteredPropietarioData = this.propietarioData;
      }
    },

    async getPagoEstadoCuentaDetalle() {
      try {
        const response = await this.$axios.$get(`pagoestadocuentadetalle/?tipopago_id=${this.tipopagoData.id}&bancocuenta__isnull=true`)
        this.propietarioData = response
        this.loading = false
        console.log('this.propietarioData', this.propietarioData)
        this.originalData = response
      } catch (err) {
        console.log(err);
      }
    },
    async getTipoPago() {
      try {
        const response = await this.$axios.$get(`tipopago/?codigo=E`)
        this.tipopagoData = response[0]
        console.log('this.tipopagoData', this.tipopagoData.id)
      } catch (err) {
        console.log(err);
      }
    },
    async getTipoPagoDeposito() {
      try {
        const response = await this.$axios.$get(`tipopago/?codigo=P`)
        this.tipopagoDataDeposito = response[0]
        console.log('this.tipopagoDataDeposito', this.tipopagoDataDeposito.id)
      } catch (err) {
        console.log(err);
      }
    },
  }
};
</script>


<style src="~/assets/styles/pages/modificar-datos.scss" lang="scss" />