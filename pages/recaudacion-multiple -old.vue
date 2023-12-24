<template>
  <div class="center no-padding divcol" style="margin-bottom:20px; padding-left: 256px;">


    <section class="section2-recaudacion-multiple">
      <div class="impuestos-tasa-container">
        <div class="jspace center">
          <p class="title-impuestos-tasa">
            Documentos por recaudar
          </p>

          <!-- <p style="margin-bottom:0px;">
            Total por Facturar: {{ cant_total }}
          </p> -->
        </div>

        <hr>

        <div class="data-liquidacion-container divrow">
          <div class="data-table-container">
            <v-text-field v-model="search" append-icon="mdi-magnify" label="Buscar" hide-details
              class="input-data-table"></v-text-field>

            <v-data-table 
            v-model="selected"
            :headers="headers" 
            :items="liquidacionData" 
            :items-per-page="10" 
            :search="search" 
            :footer-props="{
              itemsPerPageText: 'Items por página',
            }" 
            sort-by="codigo" 
            class="mytabla" 
            mobile-breakpoint="840" 
            show-select>
              <template #[`item.actions`]="{ item }">
                <v-btn class="btn-liquidar" @click="getLiquidacionId(item)">
                  <v-icon>mdi-cash-check</v-icon>
                </v-btn>
              </template>
            </v-data-table>
          </div>
        </div>
      </div>
    </section>

    <v-dialog v-model="openDialog" transition="dialog-bottom-transition" fullscreen scrollable
      content-class="dialog-recaudacion-multiple">
      <div class="div-dialog">
        <section class="section1-descripcion-inmueble">

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

          <div class="descripcion-impuestos">
            <div class="title-morado">
              <p class="impuestos-title">
                Documento a cancelar
              </p>

              <p v-if="selectedItem && selectedItem.monto_total" class="impuestos-title"
                style="--fw: 500; font-size: 20px;">
                Total: {{ total_cxc }}
              </p>
            </div>

            <div
              v-if="selectedItem && selectedItem.numero && selectedItem.tipoflujo.descripcion && selectedItem.fecha && selectedItem.monto_total"
              class="solicitud-inputs-container">

              <div class="data-liquidacion-container divrow">
                <div class="data-table-container">
                    <v-data-table 
                        :headers="headers_selected" 
                        :items="selected" 
                        :items-per-page="5" 
                        :search="search" 
                        :footer-props="{
                          itemsPerPageText: 'Items por página',
                        }" 
                        sort-by="codigo" 
                        class="mytabla" 
                        mobile-breakpoint="840">
                    </v-data-table>
                  </div>
            </div>
        </div>
          </div>

            <div class="descripcion-container">
              <div class="title-morado">
                <p class="solicitud-title">
                  Tipos de pago
                </p>

                <p class="solicitud-title">
                  Total pagado: {{ montoTotal() }} de {{ total_cxc }} {{ MensajeNotaCredito }}
                </p>
              </div>

              <v-btn class="btns-add-remove no-shadow" @click="addDiv(index)">
                +
              </v-btn>

              <div v-for="(div, index) in divs" :key="index" 
              class="solicitud-inputs-container2">
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
                          | <template #[`item.actions`]="{ item }">
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
                      <v-btn class="btn dialog-btn" @click="mostrarVentana = false">
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
                  :disabled="div.bloqueado"></v-text-field>
                <v-dialog v-model="dialog" max-width="400px">
                  <v-card>
                    <v-card-title>
                      Introduce un valor numérico
                    </v-card-title>
                    <v-card-text>
                      <v-text-field v-model="div.monto" label="Valor Numérico" solo style="font-size: 40px;"
                        inputmode="numeric"></v-text-field>
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

                <v-btn class="btn size-btn" @click="createPago()">
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
  name: "Recaudacion-multiplePage",
  mixins: [computeds],
  data() {
    return {
      menu: false,
      search: '',
      searchTransferencia: '',
      selected: [],
      headers_selected: [
        { text: '# Liquidación', align: 'center', value: 'numero', },
        { text: 'Concepto', value: 'tipoflujo.descripcion', align: 'center' },
        { text: 'Contribuyente', value: 'propietario.nombre', align: 'center' },
        { text: 'Fecha', value: 'fecha', align: 'center' },
        { text: 'Monto', value: 'monto_total', align: 'center' },
      ],
      headers: [
        { text: '#Nro', align: 'center', value: 'numero', },
        { text: 'Tipo de Flujo', value: 'tipoflujo.descripcion', align: 'center' },
        { text: 'Contribuyente', value: 'propietario.nombre', align: 'center' },
        { text: 'Fecha', value: 'fecha', align: 'center' },
        { text: 'Total', value: 'monto_total', align: 'center' },
        { text: '', value: 'actions', sortable: false, align: 'center' },
      ],
      headersCorridasBancarias: [
        { text: 'Fecha', align: 'center', value: 'fecha', },
        { text: 'referencia', value: 'referencia', align: 'center' },
        { text: 'Descripción', value: 'descripcion', align: 'center' },
        { text: 'Monto', value: 'monto', align: 'center' },
        { text: '', value: 'actions', sortable: false, align: 'center' },
      ],
      liquidacionData: [],
      liquidacionDetalleData: [],
      NotaCreditoData: [],
      tipoPagoData: [],
      bancoCuentaData: [],
      corridasbancariasData: [],
      filtrocorridasbancariasData: [],
      openDialog: false,
      dialog: false,
      show_observaciones: false,
      bancoData: ["Banesco", "Mercantil", "Provincial"],
      PagoId: null,
      diferencia: 0,
      valido: false,

      divs: [{
        tipopago: null,
        bancocuenta: null,
        fechapago: new Date().toISOString().substr(0, 10),// Formato ISO para la fecha
        nro_aprobacion: '',
        nro_lote: '',
        nro_referencia: '',
        monto: 1,
      }],

      //nombrecontribuyente: this.$store.getters.getContribuyente == 'Sin Seleccionar' ? '' : JSON.parse(JSON.stringify(this.$store.getters.getContribuyente.nombre)),
      //nacionalidadcontribuyente: this.$store.getters.getContribuyente == 'Sin Seleccionar' ? '' : JSON.parse(JSON.stringify(this.$store.getters.getContribuyente.nacionalidad)),
      //numero_documento: this.$store.getters.getContribuyente == 'Sin Seleccionar' ? '' : JSON.parse(JSON.stringify(this.$store.getters.getContribuyente.numero_documento)),
      Correlativo: 0,
      Id: 0,
      MensajeNotaCredito: '',
      selectedItem: {},
      mostrarVentana: false,
      total_cxc:0,
    }
  },
  head() {
    const title = 'Recaudación Multiple';
    return {
      title,
    }
  },

  mounted() {
    //this.redireccionIdVacio()
    this.getLiquidacionPropietario()
    this.getTipoPago()
    this.getBancoCuenta()
    this.getCorridasBancarias()
  },

  methods: {
    filtrarCorridasBancarias(idbancocuenta) {
      if (idbancocuenta) {
        this.filtrocorridasbancariasData = this.corridasbancariasData.filter((registro) => {
          return registro.bancocuenta === idbancocuenta;
        });
      } else {
        this.filtrocorridasbancariasData = this.corridasbancariasData;
      }
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
    openDialogMonto() {
      this.dialog = true;
    },
    closeDialog() {
      this.dialog = false;
    },
    saveValue() {
      // Aquí puedes realizar alguna acción con el valor numérico (this.numero)
      this.dialog = false;
    },
    getNotaCredito() {
      this.divs = []
      const uniqueOwnersMap = new Map();

      for (const div of this.selected) {
        console.log('div.propietario.id', div.propietario.id)
        const ownerId = div.propietario.id;

        if (!uniqueOwnersMap.has(ownerId)) {
        // Si no, agrega la información de este elemento al mapa
        uniqueOwnersMap.set(ownerId, div);
        this.$axios.$get('notacredito/?saldo_gt=0&propietario=' + div.propietario.id).then(response => {
          if (response[0]) {

            this.NotaCreditoData = response[0]
            console.log('entro nc', this.NotaCreditoData)
            this.$alert("success", {
              desc: "El contribuyente posee la N/C Nro: " + this.NotaCreditoData.numeronotacredito + " con saldo de Bs. " +
                parseFloat(this.NotaCreditoData.saldo), hash: 'knsddcssdc', title: 'Nota de crédito.'
            })

            console.log(this.NotaCreditoData.saldo, this.selectedItem.monto_total)
            this.divs.push({
              tipopago: 'N',
              fechapago: new Date().toISOString().substr(0, 10),// Formato ISO para la fecha
              nro_referencia: this.NotaCreditoData.numeronotacredito,
              monto: parseFloat(this.NotaCreditoData.saldo) < parseFloat(this.selectedItem.monto_total) ? parseFloat(this.NotaCreditoData.saldo) : parseFloat(this.selectedItem.monto_total),
              bloqueado: true,
              bancocuenta: null,
              nro_aprobacion: '',
              nro_lote: ''
            });
          }
          else {
            this.divs.push({
              tipopago: null,
              bancocuenta: null,
              fechapago: new Date().toISOString().substr(0, 10),// Formato ISO para la fecha
              nro_aprobacion: '',
              nro_lote: '',
              nro_referencia: '',
              monto: this.selectedItem.monto_total,
              bloqueado: false,
            }
            
            )

          }
        }


        ).catch(err => {
          console.log(err)
        })

      }
      }
    },


    redireccionIdVacio() {
      if (this.$store.getters.getContribuyente == 'Sin Seleccionar') {
        this.$router.push('modificar-datos')
        this.$alert("cancel", { desc: "Debe seleccionar un contribuyente para ingresar a este módulo", hash: 'knsddcssdc', title: 'Error' })
      } else {
        ''
      }
    },

    getLiquidacionPropietario() {
      this.$axios.$get('liquidacion/?habilitado=true').then(response => {
        this.liquidacionData = response
        console.log(this.liquidacionData, 'dataa')

      }).catch(err => {
        console.log(err)
      })
    },
    getCorridasBancarias() {
      this.$axios.$get('corridasbancarias/?situado=T').then(response => {
        this.corridasbancariasData = response
        //console.log(this.corridasbancariasData, 'dataa')

      }).catch(err => {
        console.log(err)
      })
    },
    getLiquidacionId(item) {
      this.selectedItem = item
      console.log('this.selectedItem ', this.selectedItem)
      console.log('selected',this.selected)
      this.total_cxc=this.selected.reduce((total, item) => total + parseFloat(item.monto_total), 0);
      console.log('total_cxc',this.total_cxc)

      if (this.divs.monto == 0) {
        this.divs.monto = this.selectedItem.monto_total
      }

      this.$axios.$get(`liquidacion/${item.id}`).then(response => {
        this.liquidacionIdData = response
        console.log(this.liquidacionIdData, 'ID Liquidacion')
        this.openDialog = true
        this.getNotaCredito()


        this.$axios.$get(`liquidaciondetalle/?liquidacion_id=${this.liquidacionIdData.id}`).then(response => {
          this.liquidacionDetalleData = response
          console.log('liquidacionDetalleData', this.liquidacionDetalleData)
          this.getTasaMulta()

        }).catch(error => {
          console.error(error);
        })


      }).catch(error => {
        console.error(error);
      })
    },

    getTipoPago() {
      this.$axios.$get('tipopago').then(response => {
        this.tipoPagoData = response
      }).catch(error => {
        console.log(error)
      })
    },

    getBancoCuenta() {
      this.$axios.$get('bancocuenta').then(response => {
        this.bancoCuentaData = response
      }).catch(error => {
        console.log(error)
      })
    },

    montoTotal() {
      let total = 0
      for (const div of this.divs) {
        if (div.monto !== null) {
          total += parseFloat(div.monto)
          this.MensajeNotaCredito = ' Total: '+total+ ', CXC: '+this.total_cxc;  
          if (total > this.selectedItem.monto_total) {
            this.MensajeNotaCredito = 'Se generará una NOTA DE CREDITO';
          }
        }
      }
      return total
    },

    getTasaMulta() {
      this.$axios.$get('tasamulta').then(response => {
        this.tasaMultaData = response
      }).catch(err => {
        console.log(err)
      })
    },

    addDiv() {
      console.log('lelele', this.total_cxc, this.montoTotal(),this.total_cxc- this.montoTotal())
      const ultimoRegistro = this.divs[this.divs.length - 1]; // Obtener el último registro

      console.log('ultimoRegistro', ultimoRegistro.tipopago)
      this.valido = false

      if (this.montoTotal() == this.total_cxc) {
        this.$alert("success", { desc: "El pago está completo.", hash: 'knsddcssdc', title: 'Error' })
        console.log('El pago está completo')
      }
      if (this.montoTotal() < this.total_cxc) {
        console.log('this.montoTotal() < this.total_cxc)')

        this.valido = true
      }
      if (ultimoRegistro.tipopago == null) {
        this.$alert("success", { desc: "Debe colocar un tipo de pago", hash: 'knsddcssdc', title: 'Error' })
        this.valido = false
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
          monto: this.selectedItem.monto_total - this.montoTotal(),
          bloqueado: false,
        })

      }

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

      let startY = 55;

      // Establecer el tamaño de fuente para el encabezado de la tabla
      const fontSizeTitle = 15; // Tamaño de fuente para el encabezado
      const fontSizeHead = 8; // Tamaño de fuente para el encabezado
      const fontSizeBody = 8; // Tamaño de fuente para el cuerpo de la tabla
      //let pageHeight = pdf.internal.pageSize.height;


      //pdf.addImage(img1, 'PNG', 10, 15, 30, 30); // Logotipo izquierdo
      //pdf.addImage(img2, 'PNG', 160, 13, 40, 30); // Logotipo derecho
      pdf.setFontSize(fontSizeHead);
      pdf.setFont("helvetica", "bold");
      pdf.text(200, 10, `No DE PLANILLA. ${this.Correlativo}`, null, null, 'right');
      pdf.setFont("helvetica", "normal");
      pdf.setFontSize(fontSizeHead + 2);
      pdf.text(100, 20, 'REPÚBLICA BOLIVARIANA DE VENEZUELA', null, null, 'center');
      pdf.text(100, 25, 'ESTADO CARABOBO', null, null, 'center');
      pdf.text(100, 30, 'ALCALDÍA DEL MUNICIPIO NAGUANAGUA', null, null, 'center');
      pdf.text(100, 35, 'R.I.F.: G-20004231-1', null, null, 'center');
      pdf.setFontSize(fontSizeHead);
      pdf.text(200, 50, `FECHA DE IMPRESIÓN: ${fechaConHora}`, null, null, 'right');

      pdf.setFont("helvetica", "bold");
      pdf.setFontSize(fontSizeTitle);
      pdf.text(100, 45, 'PLANILLA', null, null, 'center');
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
      pdf.text(this.selectedItem.observaciones != null ? this.selectedItem.observaciones : '', 55, startY);
      pdf.setFont("helvetica", "normal");
      startY = startY + 10
      pdf.text('SERVICIO O TRÁMITE:', 15, startY);
      pdf.setFont("helvetica", "bold");
      pdf.text(this.liquidacionIdData.tipoflujo.descripcion, 55, startY);
      pdf.setFont("helvetica", "normal");
      startY = startY + 10
      pdf.text('Nro. DOCUMENTO:', 15, startY);
      pdf.setFont("helvetica", "bold");
      pdf.text(this.liquidacionIdData.numero.toString(), 55, startY);
      pdf.setFont("helvetica", "normal");
      //startY=startY+5
      pdf.setFontSize(fontSizeHead); // Establecer el tamaño de fuente solo para esta línea


      pdf.autoTable({
        head: [['tipo', 'Descripción', 'Petro', 'Cantidad', 'Monto Bs']],
        body: this.liquidacionDetalleData.map((item) => [
          tipoMapeo[this.tasaMultaData.find((TasaMulta) => TasaMulta.id === item.tasamulta).tipo],
          this.tasaMultaData.find((TasaMulta) => TasaMulta.id === item.tasamulta).descripcion,
          item.monto_unidad_tributaria,
          item.cantidad,
          item.monto_tasa,

        ]),
        startY: startY + 2,
        styles: { fontSize: fontSizeBody }, // Establecer el tamaño de fuente para el cuerpo de la tabla
        headStyles: { fontSize: fontSizeHead }, // Establecer el tamaño de fuente para el encabezado

      });
      startY += 10 + this.liquidacionDetalleData.length * 7;
      startY = startY + 5
      pdf.setFont("helvetica", "bold");
      pdf.text('DETALLE DE PAGO:', 15, startY);
      pdf.setFont("helvetica", "normal");
      //startY=startY+5

      const options = {
        startY: startY + 2,
        styles: { fontSize: fontSizeBody },
        headStyles: { fontSize: fontSizeHead },
        didParseCell: function (data) {
          if (data.column.dataKey === 'monto') {
            // Formatear y justificar a la derecha con 8 decimales
            data.cell.text(parseFloat(data.cell.text).toFixed(8));
            data.cell.styles.halign = 'right';
          }
        },
      };

      const columns = ['Tipo', 'Fecha Pago', 'Banco/Cuenta', 'Nro Referencia', 'Monto Bs'];
      const data = this.divs.map((item) => [
        this.tipoPagoData.find((tipopago) => tipopago.codigo === item.tipopago).descripcion,
        item.fechapago,
        item.tipopago === 'E' || item.tipopago === 'N' ? '' : this.bancoCuentaData.find((bancocuenta) => bancocuenta.id === item.bancocuenta).banco_nombre,
        item.nro_referencia,
        item.monto,
      ]);
      pdf.autoTable(columns, data, options);

      startY += 10 + this.divs.length * 7;
      startY = startY + 10

      pdf.text('MONTO X COBRAR (BS.):', 15, startY);
      pdf.setFont("helvetica", "bold");
      pdf.setFontSize(fontSizeTitle);
      pdf.text(this.montoTotalSelectedItem.toString(), 55, startY);
      pdf.setFontSize(fontSizeHead);
      pdf.setFont("helvetica", "normal");
      startY = startY + 5
      pdf.text('MONTO CANCELADO (BS.):', 15, startY);
      pdf.setFont("helvetica", "bold");
      pdf.setFontSize(fontSizeTitle);
      pdf.text(this.montoTotal().toString(), 55, startY);
      pdf.setFontSize(fontSizeHead);
      pdf.setFont("helvetica", "normal");
      startY = startY + 5
      pdf.text('FUNCIONARIO:', 15, startY);
      pdf.setFont("helvetica", "bold");
      pdf.text(this.$store.getters.getUser.apellido + ', ' + this.$store.getters.getUser.nombre, 55, startY);
      pdf.setFont("helvetica", "normal");
      startY = startY + 5
      pdf.text('NRO. CAJA:', 15, startY);
      pdf.setFont("helvetica", "bold");
      pdf.text(this.$store.getters.getUser.caja.toString(), 55, startY);
      pdf.setFont("helvetica", "normal");

      pdf.save(`Planilla-Nro-${this.Correlativo}.pdf`);

      this.uploadPDF(pdf);
    },

    uploadPDF(pdf) {
      const formData = new FormData();
      formData.append('ReportePdf', new Blob([pdf.output('blob')], { type: 'application/pdf' }), `Planilla-Nro-${this.Correlativo}.pdf`);
      this.$axios.$patch(`pagoestadocuenta/${this.Id}/`, formData, {
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
        .$get(`pagoestadocuenta/${this.Id}/`)
        .then(response => {
          console.log('response', response.ReportePdf)
          var pdfData = response.ReportePdf;
          if (pdfData.includes("catastro_back")) {
              // Concatenar "/catastro_back"
              pdfData = pdfData.replace("catastro_back", "catastro_back/catastro_back");
            }
          window.open(pdfData, "_blank").focus();
        })
        .catch(error => {
          console.error('Error al obtener el PDF:', error);
        });
    },

    formatoFecha() {
      if (this.fechapago) {
        this.fechaFormateada = moment(this.nuevaFecha).format('YYYY-MM-DD HH:mm:ss')
        this.fechapago = this.fechaFormateada
      }
    },

    createPago() {
      this.montoTotalSelectedItem = this.selectedItem ? this.selectedItem.monto_total : null
      this.montoTotalSelectedItem = parseFloat(this.montoTotalSelectedItem)
      this.montoTotalFunc = this.montoTotal()
      this.diferencia = this.montoTotalSelectedItem - this.montoTotalFunc

      if (this.montoTotalSelectedItem !== null && parseFloat(this.montoTotalSelectedItem) <= this.montoTotalFunc) {

        if (this.montoTotalFunc > this.montoTotalSelectedItem) {
          this.$alert("success", { desc: "Se creará una NOTA DE CREDITO a favor del contribuyente", hash: 'knsddcssdc', title: 'NOTA DE CREDITO' })
        }
        const data = {
          liquidacion: this.selectedItem.id,
          propietario: this.$store.getters.getContribuyente.id,
          observacion: this.selectedItem.observaciones != null ? this.selectedItem.observaciones : '',
          monto: this.montoTotal(),
          monto_cxc: this.montoTotalSelectedItem,
          caja: this.$store.getters.getUser.caja,
          detalle: this.divs,
        }
        this.$axios.$post('crearPago/', data).then(res => {
          console.log('backend creapago:', res)
          console.log('data para pdf:', data)
          this.Correlativo = res.documento
          this.Id = res.id
          //this.Id=res.notacredito.notacredito
          console.log('this.divs', this.divs)
          console.log('backend Correlativo:', this.Correlativo)
          //console.log('backend notacredito:',this.Id)
          this.generarPDF()
          this.$router.push('modificar-datos')
          this.$alert("success", { desc: "Se ha registrado un pago con éxito", hash: 'knsddcssdc', title: 'Creado' })
        }).catch(err => {
          console.log(err)
        })
      } else {
        this.$alert("success", { desc: 'El pago es menor al total por cobrar.', hash: 'knsddcssdc', title: 'Alerta' })
      }
    },
  }
}

</script>


<style src="~/assets/styles/pages/recaudacion-multiple.scss" lang="scss" />