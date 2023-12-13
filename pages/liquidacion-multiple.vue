<template>
  <div class="center no-padding divcol" style="margin-bottom:20px; padding-left: 256px;">
    <section class="section1-liquidacion">
      <div class="inmuebles-asociados-container">
        <div class="jspace center">
          <p class="title-inmuebles-asociados">
            Estados de cuenta
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

            <v-data-table :headers="headers" :items="estadoCuentasData" :items-per-page="10" :search="search"
              :footer-props="{
                itemsPerPageText: 'Items por página',
              }" sort-by="numero" sort-desc class="mytabla" mobile-breakpoint="840">
              <template v-slot:[`item.monto_total`]="{ item }">
                {{ numeroFormateado(item.monto_total) }}
              </template>
              <template #[`item.actions`]="{ item }">
                <v-btn class="btn-liquidar" @click="getEstadoDetalles(item)">
                  <v-icon>mdi-eye</v-icon>
                </v-btn>
              </template>
              <template #[`item.actions2`]="{ item }">
                <v-btn class="btn-liquidar" @click="getEstadoDetallesFast(item)">
                  <v-icon>mdi-gavel</v-icon>
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
                Creación de pre-factura
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
                  Propietario
                </p>

                <p class="nombre-desc">
                  {{ nombrecontribuyente }}
                </p>
              </div>

              <div class="title-description-div">
                <p class="nombre-razon">
                  CI / RIF / Pasaporte
                </p>

                <p class="nombre-desc">
                  {{ nacionalidadcontribuyente }} - {{ numero_documento }}
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
                Items de la solicitud
              </p>

              <p class="solicitud-title">
                Monto total: {{ montoTotal() }}
              </p>
            </div>

            <v-btn class="btns-add-remove no-shadow" @click="addDiv(index)">
              +
            </v-btn>

            <div v-for="(div, index) in divs" :key="index" class="solicitud-inputs-container">
              <v-autocomplete v-model="div.tasamulta" class="big-autocomplete mobile-inputs" label="Tasa / Multa"
                :items="tasaMultaData" item-text="descripcion" item-value="id"
                @change="selectedField(index)"></v-autocomplete>

              <v-text-field class="small-input mobile-inputs" label="Monto UT" readonly
                v-model="div.monto_unidad_tributaria"></v-text-field>

              <v-text-field v-model="div.cantidad" class="small-input mobile-inputs" label="Cantidad"
                @input="multiplicarValor(index)"></v-text-field>

              <v-text-field v-model="div.monto_tasa" class="small-input mobile-inputs" label="Total"
                readonly></v-text-field>

              <v-btn class="btns-add-remove" @click="removeDiv(index)">
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
  </div>
</template>

<script>
import computeds from '~/mixins/computeds'
import moment from 'moment'
import jsPDF from 'jspdf';
import 'jspdf-autotable';

export default {
  name: "LiquidacionPage",
  mixins: [computeds],
  data() {
    return {
      search: '',
      correlativoData: [],
      bcvData: [],
      openDialog: false,
      divs: [],
      estadoCuentasData: [],
      tasaMultaData: [],
      headers: [
        { text: '#Nro', align: 'center', value: 'numero', },
        { text: 'Tipo de Flujo', value: 'tipoflujo.descripcion', align: 'center' },
        { text: 'Contribuyente', value: 'propietario.nombre', align: 'center' },
        { text: 'Dias', value: 'tipoflujo.vencimiento', align: 'center' },
        { text: 'Fecha', value: 'fecha', align: 'center' },
        { text: 'Total', value: 'monto_total', align: 'center' },
        { text: '', value: 'actions', sortable: false, align: 'center' },
        { text: '', value: 'actions2', sortable: false, align: 'center' },

      ],

      show_observaciones: false,
      nombrecontribuyente: '',
      nacionalidadcontribuyente: '',
      numero_documento: '',
      Correlativo: 0,
      Id: 0,

    }
  },

  head() {
    const title = 'Pre-Factura';
    return {
      title,
    }
  },

  mounted() {
    //this.redireccionIdVacio()
    this.getEstadosCuentas()
    this.getBCV()
    this.getCorrelativo()
    this.getTasaMulta()
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
    redireccionIdVacio() {
      if (this.$store.getters.getContribuyente == 'Sin Seleccionar') {
        this.$router.push('modificar-datos')
        this.$alert("cancel", { desc: "Debe seleccionar un contribuyente para ingresar a este módulo", hash: 'knsddcssdc', title: 'Error' })
      } else {
        ''
      }
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

    getTasaMulta() {
      this.$axios.$get('tasamulta').then(response => {
        this.tasaMultaData = response
      }).catch(err => {
        console.log(err)
      })
    },

    createLiquidacion() {
      const data = {
        estadocuenta: this.selectedItem.id,
        inmueble: this.selectedItem.inmueble == null ? null : this.selectedItem.inmueble.id,
        flujo: this.selectedItem.tipoflujo.id,
        propietario: this.selectedItem.propietario.id,
        observacion: this.selectedItem.observaciones != null ? this.selectedItem.observaciones : '',
        detalle: this.divs,
        monto_total: this.montoTotal()
      }
      this.$axios.$post('crearliquidacion/', data).then(res => {
        console.log(res)
        this.Correlativo = res.documento
        this.IdEdoCuenta = res.idedocuenta
        this.Id = res.id
        console.log('this.divs', this.divs)
        this.generarPDF()
        this.$router.push('liquidacion-multiple')
        //this.$alert("success", { desc: "Se ha creado una pre-factura con éxito", hash: 'knsddcssdc', title: 'Creado' })
      }).catch(err => {
        console.log(err)
      })
    },

    obtenerFechaActual() {
      const fecha = new Date();
      const dia = fecha.getDate().toString().padStart(2, '0');
      const mes = (fecha.getMonth() + 1).toString().padStart(2, '0');
      const anio = fecha.getFullYear().toString().slice(-2);
      return `${dia}/${mes}/${anio}`;
    },

    getCorrelativo() {
      this.$axios.$get('correlativo').then(response => {
        this.correlativoData = response
        this.numeroCorrelativo = this.correlativoData[0].NumeroEstadoCuenta
      }).catch(err => {
        console.log(err)
      })
    },

    getBCV() {
      this.$axios.$get('tasabcv').then(response => {
        this.bcvData = response
        this.montoBCV = this.bcvData[0].monto
      }).catch(err => {
        console.log(err)
      })
    },

    montoTotal() {
      let total = 0
      for (const div of this.divs) {
        if (div.monto_tasa !== null) {
          total += parseFloat(div.monto_tasa)
        }
      }
      return total.toFixed(2)
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
    generarPDF() {
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

      //const img1 = new Image();
      //img1.src = '/alcaldia_catastro/alcaldia_catastro/assets/sources/logos/Escudo_Naguanagua_Carabobo.png'; // Ruta a tu primer logotipo
      //const img2 = new Image();
      //img2.src = '/alcaldia_catastro/alcaldia_catastro/assets/sources/logos/logo.png'; // Ruta a tu segundo logotipo

      let startY = 60;

      // Establecer el tamaño de fuente para el encabezado de la tabla
      const fontSizeTitle = 15; // Tamaño de fuente para el encabezado
      const fontSizeHead = 8; // Tamaño de fuente para el encabezado
      const fontSizeBody = 8; // Tamaño de fuente para el cuerpo de la tabla
      //let pageHeight = pdf.internal.pageSize.height;


      //pdf.addImage(img1, 'PNG', 10, 15, 30, 30); // Logotipo izquierdo
      //pdf.addImage(img2, 'PNG', 160, 13, 40, 30); // Logotipo derecho
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
      pdf.text(JSON.parse(JSON.stringify(this.selectedItem.propietario.direccion)), 55, startY);
      pdf.setFont("helvetica", "normal");
      startY = startY + 5
      pdf.text('TELÉFONO:', 15, startY);
      pdf.setFont("helvetica", "bold");
      pdf.text(JSON.parse(JSON.stringify(this.selectedItem.propietario.telefono_principal)), 55, startY);
      pdf.setFont("helvetica", "normal");
      startY = startY + 5
      pdf.line(15, startY, 200, startY); // Coordenadas de inicio (x1, y1) y final (x2, y2) de la línea
      startY = startY + 5
      pdf.text('OBSERVACIONES:', 15, startY);
      pdf.setFont("helvetica", "bold");
      pdf.text(this.selectedItem.observaciones != null ? this.selectedItem.observaciones : '', 55, startY);
      pdf.setFont("helvetica", "normal");
      startY = startY + 10
      pdf.text('SERVICIO O TRÁMITE:', 15, startY);
      pdf.setFont("helvetica", "bold");
      pdf.text(this.selectedItem.tipoflujo.descripcion, 55, startY);
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

      const columns = ['tipo', 'Descripción', 'Petro', 'Cantidad', 'Monto Bs'];
      const data = this.divs.map((item) => [
        tipoMapeo[this.tasaMultaData.find((TasaMulta) => TasaMulta.id === item.tasamulta).tipo],
        this.tasaMultaData.find((TasaMulta) => TasaMulta.id === item.tasamulta).descripcion,
        item.monto_unidad_tributaria,
        item.cantidad,
        item.monto_tasa,
      ]);

      pdf.autoTable(columns, data, options);

      startY += 10 + this.divs.length * 7;
      startY = startY + 10

      pdf.text('MONTO A CANCELAR (BS.):', 15, startY);
      pdf.setFont("helvetica", "bold");
      pdf.setFontSize(fontSizeTitle);
      pdf.text(this.montoTotal(), 55, startY);
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

    uploadPDF(pdf) {
    const formData = new FormData();
    formData.append('ReportePdf', new Blob([pdf.output('blob')], { type: 'application/pdf' }), `PreFactura-Nro-${this.Correlativo}.pdf`);
      this.$axios.$patch(`liquidacion/${this.Id}/`, formData, {
        headers: { 'Content-Type': 'application/pdf' },
      })
      .then(response => {
        console.log(response)
        this.getPDF()
      })
      .catch(err => {
        console.log(err)
      });
    },
    getPDF() {
      this.$axios
        .$get(`liquidacion/${this.Id}/`)
        .then(response => {
          console.log('response',response.ReportePdf)
          const pdfData = response.ReportePdf;
          window.open(pdfData, "_blank").focus();
        })
        .catch(error => {
          console.error('Error al obtener el PDF:', error);
        });
    },

    getEstadoDetalles(item) {
      this.selectedItem = item
      console.log('this.selectedItem ',this.selectedItem )
      this.nombrecontribuyente= item.propietario.nombre
      this.nacionalidadcontribuyente= item.propietario.nacionalidad
      this.numero_documento= item.propietario.numero_documento 


      const fechaActual = new Date();
      fechaActual.setHours(0, 0, 0, 0); // Establece la hora en 00:00:00

      this.$axios.$get(`estadocuenta/${item.id}`).then(response => {
        this.idEstadoCuenta = response
        console.log('this.idEstadoCuenta',this.idEstadoCuenta)
        console.log('this.idEstadoCuenta.tipoflujo.vencimiento',this.idEstadoCuenta.tipoflujo.vencimiento)
        console.log('this.idEstadoCuenta.fecha',this.idEstadoCuenta.fecha)
        console.log((this.sumarDiasHabiles(this.idEstadoCuenta.fecha,this.idEstadoCuenta.tipoflujo.vencimiento))>= (fechaActual),
        (this.sumarDiasHabiles(this.idEstadoCuenta.fecha,this.idEstadoCuenta.tipoflujo.vencimiento)),(fechaActual))
        if((this.sumarDiasHabiles(this.idEstadoCuenta.fecha,this.idEstadoCuenta.tipoflujo.vencimiento))>= (fechaActual)){
          this.$axios.$get(`estadocuentadetalle/?estadocuenta_id=${item.id}`).then(response => {
            this.divs = response
            console.log(this.divs, 'jolaaa')
            this.openDialog = true

          }).catch(error => {
            console.error(error);
          })            
        }else{
          this.$alert("cancel", { desc: "Estado de cuenta vencido", hash: 'knsddcssdc', title: 'Error' })

        }        





      }).catch(error => {
        console.error(error);
      })

    },

    getEstadoDetallesFast(item) {
      this.selectedItem = item
      console.log('this.selectedItem ',this.selectedItem )
      this.nombrecontribuyente= item.propietario.nombre
      this.nacionalidadcontribuyente= item.propietario.nacionalidad
      this.numero_documento= item.propietario.numero_documento 


      const fechaActual = new Date();
      fechaActual.setHours(0, 0, 0, 0); // Establece la hora en 00:00:00

      this.$axios.$get(`estadocuenta/${item.id}`).then(response => {
        this.idEstadoCuenta = response
        if((this.sumarDiasHabiles(this.idEstadoCuenta.fecha,this.idEstadoCuenta.tipoflujo.vencimiento))>= (fechaActual)){
          this.$axios.$get(`estadocuentadetalle/?estadocuenta_id=${item.id}`).then(response => {
            this.divs = response
            this.createLiquidacion()

          }).catch(error => {
            console.error(error);
          })            
        }else{
          this.$alert("cancel", { desc: "Estado de cuenta vencido", hash: 'knsddcssdc', title: 'Error' })
        }        
      }).catch(error => {
        console.error(error);
      })
    },
    getEstadosCuentas() {
      this.$axios.$get('estadocuenta/?habilitado=true').then(response => {
        this.estadoCuentasData = response
        console.log(this.estadoCuentasData, 'dataa')

      }).catch(err => {
        console.log(err)
      })
    },
  }

}
</script>

<style src="~/assets/styles/pages/liquidacion.scss" lang="scss" />