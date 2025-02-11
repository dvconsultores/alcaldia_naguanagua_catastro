<template>
  <div class="center no-padding divcol" style="margin-bottom:20px; padding-left: 256px;">
    <section class="section1-reporte-recaudos">
      <div class="reporte-recaudos-container">
        <div class="title-morado">
          <p class="reporte-recaudos-title">
            Recaudos. Cuadre de Caja
          </p>
        </div>
        <div class="data-table-container">
          <v-btn class="btn dialog-btn" text @click="generarPDF()">Genera Cuadre de Caja</v-btn>
          <v-btn class="btn dialog-btn" text @click="generarTXT()">Genera txt</v-btn>
          <v-text-field v-model="search" append-icon="mdi-magnify" label="Buscar" hide-details class="input-data-table" >
          </v-text-field>
          <v-menu v-model="menu" :close-on-content-click="false" :nudge-right="5" transition="scale-transition" offset-y
            min-width="auto">
            <template #activator="{ on, attrs }">
              <v-text-field v-model="fechaFiltro" class="input-data-table" label="Fecha" append-icon="mdi-calendar"
                v-bind="attrs" v-on="on" ></v-text-field>
            </template>
            <v-date-picker v-model="fechaFiltro" label="Fecha" @input="filtrarPorFecha" color="blue"
              header-color="#810880" class="custom-date-picker"></v-date-picker>
          </v-menu>
          <v-data-table :headers="headers" :items="filteredPropietarioData" :loading="loading" :items-per-page="10"
            :search="search" :footer-props="{
            itemsPerPageText: 'Items por página',
          }" sort-by="numero_recibo" class="mytabla" mobile-breakpoint="840">
          </v-data-table>
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
  name: "Reporte-RecaudosPage",
  mixins: [computeds],
  data() {
    return {
      loading: true,
      fechaFiltro: null, // Inicialmente no se selecciona ninguna fecha de filtro
      fechaSeleccionadaUTC: null,
      filteredPropietarioData: [], // Agrega esta propiedad
      filteredpagoestadocuentaData: [], // Agrega esta propiedad
      search: '',
      menu: true,
      headers: [
        { text: '#Recibo', align: 'center', value: 'numero_recibo', },
        { text: 'Tipo', align: 'center', value: 'tipopago_nombre', },
        { text: 'Caja', align: 'center', value: 'numero_caja', },
        { text: 'Fecha Pago', value: 'fecha', align: 'center' },
        { text: 'Banco Nombre', value: 'banco_nombre', align: 'center' },
        { text: 'Banco Código', value: 'banco_codigo', align: 'center' },
        { text: 'Banco Cuenta', value: 'banco_cuenta', align: 'center' },
        { text: 'Monto', value: 'monto', align: 'center' },
      ],
      propietarioData: [],
      pagoestadocuentaData:[],
      permido: JSON.parse(JSON.stringify(this.$store.getters.getUser.permisos)),
      accesos:null,
      CorrelativoData: [],
    }
  },
  head() {
    const title = 'Reporte Recaudos';
    return {
      title,
    }
  },

  async mounted() {
    this.permisos();
    await this.getpagoestadocuentadetalle();
    await this.getpagoestadocuenta();
    await this.getCorrelativo();
    
    
  },
  computed: {
    //*****************************Efectivo
    efectivoRecaudos() {
      return this.filteredPropietarioData.filter(item => item.tipopago_nombre === "Efectivo" );
    },
    sumaMontosEfectivo() {
      return this.efectivoRecaudos.filter(item => item.bancocuenta === null)
      .reduce((total, item) => total + parseFloat(item.monto), 0);
    },
    cajasTotales() {
      const cajas = {};
      this.efectivoRecaudos.forEach(item => {
        if (cajas[item.numero_caja]) {
          cajas[item.numero_caja].recaudos.push(item);
          //if (item.bancocuenta === null) {
            cajas[item.numero_caja].total += parseFloat(item.monto);
          //}
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
    //*****************************Transferencias NO RECAUDADAS
    TransferenciaRecaudosNO() {
      return this.filteredPropietarioData.filter(item => item.tipopago_nombre === "TRANSFERENCIAS CONTABILIZADAS NO RECAUDADAS");
    },
    sumaMontosTransferenciaNO() {
      return this.TransferenciaRecaudosNO.reduce((total, item) => total + parseFloat(item.monto), 0);
    },
    cajasTotalesTransferenciaNO() {
      const cajas = {};
      this.TransferenciaRecaudosNO.forEach(item => {
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
        //*****************************Transferencias NO RECAUDADAS
    TransferenciaRecaudosSI() {
      return this.filteredPropietarioData.filter(item => item.tipopago_nombre === "TRANSFERENCIAS CONTABILIZADAS RECAUDADAS");
    },
    sumaMontosTransferenciaSI() {
      return this.TransferenciaRecaudosSI.reduce((total, item) => total + parseFloat(item.monto), 0);
    },
    cajasTotalesTransferenciaSI() {
      const cajas = {};
      this.TransferenciaRecaudosSI.forEach(item => {
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
    async getCorrelativo() {
      try {
        const response = await this.$axios.$get('correlativo');
        this.CorrelativoData = response
        //console.log('CorrelativoData', this.CorrelativoData)
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
      //console.log('permiso: 1 si , 0 no:',this.permido.filter(permido => permido.modulo.toLowerCase().includes(this.modulo)).length);
      if (this.permido.filter(permido => permido.modulo.toLowerCase().includes(this.modulo)).length) { 
        //console.log('leer:',(this.permido.filter(permido => permido.modulo.toLowerCase().includes(this.modulo)))[0].leer);
        this.accesos=(this.permido.filter(permido => permido.modulo.toLowerCase().includes(this.modulo)))[0]
        //console.log('this.accesos',this.accesos.borrar)
      }else{
        this.$router.push('index')
        this.$alert("cancel", {desc: "No está autorizado para accesar a este módulo!!!", hash: 'knsddcssdc', title:'Error'})
      }
    },
    formatDate(dateString) {
      const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
      return new Date(dateString).toLocaleDateString('es-ES', options);
    },
    formatDateTXT(dateString) {
      //console.log('fecha delpago',dateString)
      const date = new Date(dateString);
      const day = String(date.getDate()).padStart(2, '0');
      const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
      const year = date.getFullYear();
      return `${day}/${month}/${year}`;
    },
    generarTXT() {
      const rows = this.filteredPropietarioData.filter(pago => pago.operacion_tipo !== 'X').map(pago => {
        const { monto, fechapago, banco_cuenta, banco_codigo,nro_lote,nro_aprobacion,operacion_tipo,nro_referencia } = pago;
        const formattedMonto = parseFloat(monto).toFixed(2);
        const formattedFecha = this.formatDateTXT(fechapago);
        const formattedFechacuadre = this.formatDateTXT(this.fechaSeleccionadaUTC);
        return `<${formattedFechacuadre}|${formattedFecha}|${banco_codigo === null ? '' : banco_codigo}|${banco_cuenta === null ? '' : banco_cuenta}|${nro_lote === null ? '' : nro_lote}|${nro_aprobacion === null ? '' : nro_aprobacion}|${operacion_tipo}|${nro_referencia === null ? '' : nro_referencia}|${formattedMonto}|0|Z|>`;
      });
      const content = rows.join('\n');
      const blob = new Blob([content], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      //a.download = 'pagos.txt';
      a.download = `CUADRE${this.fechaFiltro}.txt`;
      a.click();
      URL.revokeObjectURL(url);
    },

    generarPDF() {
      //console.log('txt',this.filteredPropietarioData)
      const pdf = new jsPDF('p', 'mm', 'letter');
      const fechaActual = new Date();
      const dia = fechaActual.getDate().toString().padStart(2, '0'); // Obtén el día y asegúrate de tener 2 dígitos.
      const mes = (fechaActual.getMonth() + 1).toString().padStart(2, '0'); // El mes comienza desde 0, por lo que sumamos 1.
      const anio = fechaActual.getFullYear();
      const hora = fechaActual.getHours().toString().padStart(2, '0');
      const minutos = fechaActual.getMinutes().toString().padStart(2, '0');
      const segundos = fechaActual.getSeconds().toString().padStart(2, '0');
      //console.log('fechaActual')
      // Tamaño máximo de la línea
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
        pdf.addImage(img1, 'PNG', 10, 5, 30, 30); // Logotipo izquierdo
        img2.onload = function () {
          pdf.addImage(img2, 'PNG', 160, 3, 40, 30); // Logotipo derecho
        };
      };
      let startY = 40;
      // Establecer el tamaño de fuente para el encabezado de la tabla
      const fontSizeTitle = 15; // Tamaño de fuente para el encabezado
      const fontSizeHead = 8; // Tamaño de fuente para el encabezado
      const fontSizeBody = 8; // Tamaño de fuente para el cuerpo de la tabla
      //let pageHeight = pdf.internal.pageSize.height;
      pdf.addImage(img1, 'PNG', 10, 5, 30, 30); // Logotipo izquierdo
      pdf.addImage(img2, 'PNG', 160, 3, 40, 30); // Logotipo derecho
      pdf.setFontSize(fontSizeHead);
      pdf.setFont("helvetica", "normal");
      pdf.setFontSize(fontSizeHead + 2);
      pdf.text(100, 10, 'REPÚBLICA BOLIVARIANA DE VENEZUELA', null, null, 'center');
      pdf.text(100, 15, 'ESTADO CARABOBO', null, null, 'center');
      pdf.text(100, 20, 'ALCALDÍA DEL MUNICIPIO NAGUANAGUA', null, null, 'center');
      pdf.text(100, 25, 'R.I.F.: G-20004231-1', null, null, 'center');
      pdf.setFontSize(fontSizeHead);
      pdf.text(200, 35, `FECHA DE IMPRESIÓN: ${fechaConHora}`, null, null, 'right');
      pdf.setFont("helvetica", "bold");
      pdf.setFontSize(fontSizeTitle);
      pdf.setFontSize(fontSizeHead);
      pdf.setFont("helvetica", "normal");
      pdf.setDrawColor(0); // Color de línea (negro en este caso)
      pdf.setLineWidth(0.5); // Ancho de la línea (1 en este caso)
      pdf.line(15, startY, 200, startY); // Coordenadas de inicio (x1, y1) y final (x2, y2) de la línea
      const title = `Cuadre detallado de caja a la fecha  ${this.fechaFiltro}`;
        // Establecer el tamaño de fuente para el encabezado de la tabla
      let pageHeight = pdf.internal.pageSize.height;
      let tTotal=this.sumaMontosEfectivo+this.sumaMontosDebito+this.sumaMontosTransferencia+this.sumaMontosTransferenciaNO+this.sumaMontosDeposito+this.sumaMontosNotaCredito+this.sumaMontosSituado+this.sumaMontosInteres;
      pdf.setFontSize(14);
      pdf.text(100, 30, title, null, null, 'center');
      pdf.setFontSize(fontSizeHead); // Establecer el tamaño de fuente solo para esta línea
      startY=startY+5
      pdf.text('EFECTIVO: ', 15, startY);
      pdf.text(200, startY, this.sumaMontosEfectivo.toFixed(2), null, null, 'right');
      startY=startY+5
      pdf.text('DÉBITO: ', 15, startY);
      pdf.text(200, startY, this.sumaMontosDebito.toFixed(2), null, null, 'right');
      startY=startY+5
      pdf.text('TRANSFERENCIA: ', 15, startY);
      pdf.text(200, startY, this.sumaMontosTransferencia.toFixed(2), null, null, 'right');
      startY=startY+5
      pdf.text('DEPÓSITO: ', 15, startY);
      pdf.text(200, startY, this.sumaMontosDeposito.toFixed(2), null, null, 'right');
      startY=startY+5
      pdf.text('NOTA DE CRÉDITO: ', 15, startY);
      pdf.text(200, startY, this.sumaMontosNotaCredito.toFixed(2), null, null, 'right');
      if (this.sumaMontosSituado>0){
        startY=startY+5
        pdf.text('SITUADO: ', 15, startY);
        pdf.text(200, startY, this.sumaMontosSituado.toFixed(2), null, null, 'right');
      }
      if (this.sumaMontosInteres>0){
        startY=startY+5
        pdf.text('INTERESES: ', 15, startY);
        pdf.text(200, startY, this.sumaMontosInteres.toFixed(2), null, null, 'right');
      }

      for (let i = 0; i < this.filteredpagoestadocuentaData.length; i++) {
        startY=startY+5
        pdf.text(this.filteredpagoestadocuentaData[i].observaciones, 15, startY);
        pdf.text(200, startY, parseFloat(this.filteredpagoestadocuentaData[i].monto).toFixed(2), null, null, 'right');
      }
      startY=startY+5
      pdf.text('TOTAL: ', 15, startY);
      pdf.text(200, startY, tTotal.toFixed(2), null, null, 'right');
      startY=startY+7
      if (this.efectivoRecaudos){
        pdf.setFontSize(fontSizeHead+5);
        pdf.text('EFECTIVO',15, startY);
        pdf.setFontSize(fontSizeHead);
        //startY = startY+1
        pageHeight = pdf.internal.pageSize.height;
      }
      for (const caja in this.cajasTotales) {
        if (startY + this.cajasTotales[caja].recaudos.length * 7 + 10 > pageHeight) {
          pdf.addPage(); // Si el contenido se desborda, agrega una nueva página
          startY = 10;
        }
        //pdf.text(`Caja: ${caja}`, 15, startY);
        pdf.autoTable({
          head: [['#Recibo','Banco','Número de cuenta', '# Referencia', 'Monto', 'Fecha del Documento']],
          body: this.cajasTotales[caja].recaudos.map(item => [
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

        startY += 10 + this.cajasTotales[caja].recaudos.length * 7;
        pdf.text(`Total de la Caja ${caja}:`, 15, startY);
        pdf.text(200, startY , this.cajasTotales[caja].total.toFixed(2), null, null, 'right');
      }
      if (this.sumaMontosDebito){
        startY = startY+8
        pdf.setFontSize(fontSizeHead+5);
        pdf.text('DÉBITO',15, startY);
        pdf.setFontSize(fontSizeHead);
        //startY = startY+1
        pageHeight = pdf.internal.pageSize.height;
      }
      for (const caja in this.cajasTotalesDebito) {
        if (startY + this.cajasTotalesDebito[caja].recaudos.length * 7 + 10 > pageHeight) {
          pdf.addPage(); // Si el contenido se desborda, agrega una nueva página
          startY = 10;
        }
        //pdf.text(`Caja: ${caja}`, 15, startY);
        pdf.autoTable({
          head: [['#Recibo','Banco','Número de cuenta', 'Aprobación', '# Lote', '# Referencia', 'Monto', 'Fecha del Documento']],
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
        pdf.text(200, startY, this.cajasTotalesDebito[caja].total.toFixed(2), null, null, 'right');
      }
      if (this.sumaMontosTransferencia){
        startY = startY+8
        pdf.setFontSize(fontSizeHead+5);
        pdf.text('TRANSFERENCIA',15, startY);
        pdf.setFontSize(fontSizeHead);
        //startY = startY+1
        pageHeight = pdf.internal.pageSize.height;
      }
      for (const caja in this.cajasTotalesTransferencia) {
        if (startY + this.cajasTotalesTransferencia[caja].recaudos.length * 7 + 10 > pageHeight) {
          pdf.addPage(); // Si el contenido se desborda, agrega una nueva página
          startY = 10;
        }
        //pdf.text(`Caja: ${caja}`, 15, startY);
        pdf.autoTable({
          head: [['#Recibo','Banco','Número de cuenta', '# Referencia', 'Monto', 'Fecha del Documento']],
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
        pdf.text(200, startY, this.cajasTotalesTransferencia[caja].total.toFixed(2), null, null, 'right');
      }
      if (this.sumaMontosTransferenciaNO){
        startY = startY+8
        pdf.setFontSize(fontSizeHead+5);
        pdf.text('TRANSFERENCIAS CONTABILIZADAS NO LIQUIDADAS',15, startY);
        pdf.setFontSize(fontSizeHead);
        //startY = startY+1
        pageHeight = pdf.internal.pageSize.height;
      }
      for (const caja in this.cajasTotalesTransferenciaNO) {
        if (startY + this.cajasTotalesTransferenciaNO[caja].recaudos.length * 7 + 10 > pageHeight) {
          pdf.addPage(); // Si el contenido se desborda, agrega una nueva página
          startY = 10;
        }
        //pdf.text(`Caja: ${caja}`, 15, startY);
        pdf.autoTable({
          head: [['#Recibo','Banco','Número de cuenta', '# Referencia', 'Monto', 'Fecha del Documento']],
          body: this.cajasTotalesTransferenciaNO[caja].recaudos.map(item => [
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
        startY += 10 + this.cajasTotalesTransferenciaNO[caja].recaudos.length * 7;
        pdf.text(`Total de la Caja ${caja}:`, 15, startY);
        pdf.text(200, startY, this.cajasTotalesTransferenciaNO[caja].total.toFixed(2), null, null, 'right');
      }
      if (this.sumaMontosTransferenciaSI){
        startY = startY+8
        pdf.setFontSize(fontSizeHead+5);
        pdf.text('TRANSFERENCIAS CONTABILIZADAS LIQUIDADAS',15, startY);
        pdf.setFontSize(fontSizeHead);
        //startY = startY+1
        pageHeight = pdf.internal.pageSize.height;
      }
      for (const caja in this.cajasTotalesTransferenciaSI) {
        if (startY + this.cajasTotalesTransferenciaSI[caja].recaudos.length * 7 + 10 > pageHeight) {
          pdf.addPage(); // Si el contenido se desborda, agrega una nueva página
          startY = 10;
        }
        //pdf.text(`Caja: ${caja}`, 15, startY);
        pdf.autoTable({
          head: [['#Recibo','Banco','Número de cuenta', '# Referencia', 'Monto', 'Fecha del Documento']],
          body: this.cajasTotalesTransferenciaSI[caja].recaudos.map(item => [
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
        startY += 10 + this.cajasTotalesTransferenciaSI[caja].recaudos.length * 7;
        pdf.text(`Total de la Caja ${caja}:`, 15, startY);
        pdf.text(200, startY, this.cajasTotalesTransferenciaSI[caja].total.toFixed(2), null, null, 'right');
      }

      if (this.sumaMontosSituado){
        startY = startY+8
        pdf.setFontSize(fontSizeHead+5);
        pdf.text('SITUADO',15, startY);
        pdf.setFontSize(fontSizeHead);
        //startY = startY+1
        pageHeight = pdf.internal.pageSize.height;
      }
      for (const caja in this.cajasTotalesSituado) {
        if (startY + this.cajasTotalesSituado[caja].recaudos.length * 7 + 10 > pageHeight) {
          pdf.addPage(); // Si el contenido se desborda, agrega una nueva página
          startY = 10;
        }
        //pdf.text(`Caja: ${caja}`, 15, startY);
        pdf.autoTable({
          head: [['#Recibo','Banco','Número de cuenta', '# Referencia', 'Monto', 'Fecha del Documento']],
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
        pdf.text(200, startY, this.cajasTotalesSituado[caja].total.toFixed(2), null, null, 'right');
      }

      if (this.sumaMontosInteres){
        startY = startY+8
        pdf.setFontSize(fontSizeHead+5);
        pdf.text('INTERESES',15, startY);
        pdf.setFontSize(fontSizeHead);
        //startY = startY+1
        pageHeight = pdf.internal.pageSize.height;
      }
      for (const caja in this.cajasTotalesInteres) {
        if (startY + this.cajasTotalesInteres[caja].recaudos.length * 7 + 10 > pageHeight) {
          pdf.addPage(); // Si el contenido se desborda, agrega una nueva página
          startY = 10;
        }
        //pdf.text(`Caja: ${caja}`, 15, startY);
        pdf.autoTable({
          head: [['#Recibo','Banco','Número de cuenta', '# Referencia', 'Monto', 'Fecha del Documento']],
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
        pdf.text(200, startY, this.cajasTotalesInteres[caja].total.toFixed(2), null, null, 'right');
      }

      if (this.sumaMontosDeposito){
        startY = startY+8
        pdf.setFontSize(fontSizeHead+5);
        pdf.text('DEPÓSITO',15, startY);
        pdf.setFontSize(fontSizeHead);
        //startY = startY+1
        pageHeight = pdf.internal.pageSize.height;
      }

      for (const caja in this.cajasTotalesDeposito) {
        if (startY + this.cajasTotalesDeposito[caja].recaudos.length * 7 + 10 > pageHeight) {
          pdf.addPage(); // Si el contenido se desborda, agrega una nueva página
          startY = 10;
        }
        //pdf.text(`Caja: ${caja}`, 15, startY);
        pdf.autoTable({
          head: [['#Recibo','Banco','Número de cuenta', '# Referencia', 'Monto', 'Fecha del Documento']],
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
        pdf.text(200, startY, this.cajasTotalesDeposito[caja].total.toFixed(2), null, null, 'right');
      }
      if (this.sumaMontosNotaCredito){
        startY = startY+8
        pdf.setFontSize(fontSizeHead+5);
        pdf.text('NOTA DE CRÉDITO',15, startY);
        pdf.setFontSize(fontSizeHead);
        //startY = startY+1
        pageHeight = pdf.internal.pageSize.height;
      }
      for (const caja in this.cajasTotalesNotaCredito) {
        if (startY + this.cajasTotalesNotaCredito[caja].recaudos.length * 7 + 10 > pageHeight) {
          pdf.addPage(); // Si el contenido se desborda, agrega una nueva página
          startY = 10;
        }
        //pdf.text(`Caja: ${caja}`, 15, startY);
        pdf.autoTable({
          head: [['#Recibo', 'Monto', 'Fecha del Documento']],
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
        pdf.text(200, startY, this.cajasTotalesNotaCredito[caja].total.toFixed(2), null, null, 'right');
      }
      const nombreArchivoPDF = `Cuadre detallado de caja a la fecha ${this.fechaFiltro}.pdf`;
      pdf.save(nombreArchivoPDF);
    },
    async filtrarPorFecha() {
      await this.filtrarPorFechaFunc()
    },

    async filtrarPorFechaFunc() {
      if (this.fechaFiltro) {
        const fechaSeleccionada = new Date(this.fechaFiltro+ 'T00:00:00.000-04:00');
        this.fechaSeleccionadaUTC = new Date(
          fechaSeleccionada.getFullYear(),
          fechaSeleccionada.getMonth(),
          fechaSeleccionada.getDate()
        );
        this.filteredPropietarioData = this.propietarioData.filter((registro) => {
          const fechaRegistro = new Date(registro.fecha_recibo); 
          const fechaRegistroUTC = new Date(
            fechaRegistro.getFullYear(),
            fechaRegistro.getMonth(),
            fechaRegistro.getDate()
          );
          return fechaRegistroUTC.toDateString() === this.fechaSeleccionadaUTC.toDateString();
        });
        this.filteredpagoestadocuentaData = this.pagoestadocuentaData.filter((registro) => {
          const fechaRegistro = new Date(registro.fecha_recibo);
          const fechaRegistroUTC = new Date(
            fechaRegistro.getUTCFullYear(),
            fechaRegistro.getUTCMonth(),
            fechaRegistro.getUTCDate()
          );
          return fechaRegistroUTC.toDateString() === this.fechaSeleccionadaUTC.toDateString()
            && registro.observaciones.includes("NO RECAUDADAS");

        });
      } else {
        this.filteredPropietarioData = this.propietarioData;
        this.filteredpagoestadocuentaData = this.pagoestadocuentaData
      }
      await new Promise(resolve => {
        resolve(); // Resuelve la promesa inmediatamente
      });
    },

    async getpagoestadocuentadetalle() {
      try {
        const response = await this.$axios.$get('pagoestadocuentadetalle')
        this.propietarioData = response
      } catch (err) {
        console.log(err);
      }
    },

    async getpagoestadocuenta() {
      try {
        const response = await this.$axios.$get('pagoestadocuenta')
        this.pagoestadocuentaData = response
        this.loading = false
        this.menu = true
      } catch (err) {
        console.log(err);
      }
    },
  }
};
</script>


<style src="~/assets/styles/pages/reporte-recaudos.scss" lang="scss" />