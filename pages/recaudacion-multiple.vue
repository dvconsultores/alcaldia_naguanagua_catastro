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

            <v-data-table v-model="selectedLiq" :headers="headers" :items="liquidacionData" :items-per-page="10"
              :search="search" :footer-props="{
                itemsPerPageText: 'Items por página',
              }" sort-by="numero"  sort-desc  class="mytabla" mobile-breakpoint="840" show-select>
              <template v-slot:[`item.monto_total`]="{ item }">
                {{ numeroFormateado(item.monto_total) }}
              </template>
              <template #[`item.actions`]="{ item }">
                <v-btn class="btn-liquidar" @click="getLiquidacionId(item)" :disabled="selectedLiq.indexOf(item) === -1">
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
              <p v-if="selectedItem && montoTotalCxC" class="impuestos-title" style="--fw: 500; font-size: 22px;">
                Total: {{ numeroFormateado(montoTotalCxC) }}
              </p>
            </div>
            <div
              v-if="selectedItem && selectedItem.numero && selectedItem.tipoflujo.descripcion && selectedItem.fecha && selectedItem.monto_total"
              class="solicitud-inputs-container">
              <div class="data-liquidacion-container divrow">
                <div class="data-table-container">
                  <v-data-table :headers="headers_selected" :items="selectedLiq" :items-per-page="5" :search="search"
                    :footer-props="{
                      itemsPerPageText: 'Items por página',
                    }" sort-by="codigo" class="mytabla" mobile-breakpoint="840">
                    <template v-slot:[`item.monto_total`]="{ item }">
                      {{ numeroFormateado(item.monto_total) }}
                    </template>
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
                TOTAL PAGADO: {{ numeroFormateado(montoTotalPagado()) }} {{ MensajeNotaCredito }}
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
                    <v-btn class="btn dialog-btn" @click="div.tipopago=null;mostrarVentana = false">
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
              <v-btn class="btn size-btn" @click="validaPago()">
                Guardar
              </v-btn>

              <v-btn class="btn size-btn" style="background-color:#ED057E!important;" @click="closeopenDialog()">
                Cancelar
              </v-btn>
            </div>
          </div>
        </section>
      </div>
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

export default {
  name: "recaudacion-multiplePage",
  mixins: [computeds],
  data() {
    return {
      menu: false,
      search: '',
      searchTransferencia: '',
      selectedLiq: [],
      selectedunique: [],
      headers_selected: [
        { text: 'ID', align: 'center', value: 'id', },
        { text: '# Liquidación', align: 'center', value: 'numero', },
        { text: 'Concepto', value: 'tipoflujo.descripcion', align: 'center' },
        { text: 'Contribuyente', value: 'propietario.nombre', align: 'center' },
        { text: 'Fecha', value: 'fecha', align: 'center' },
        { text: 'Observaciones', value: 'observaciones', align: 'center' },
        { text: 'Monto', value: 'monto_total', align: 'right' },
      ],
      headers: [
        { text: '#Nro', align: 'center', value: 'numero', },
        { text: 'Tipo de Flujo', value: 'tipoflujo.descripcion', align: 'center' },
        { text: 'Contribuyente', value: 'propietario.nombre', align: 'center' },
        { text: 'Fecha', value: 'fecha', align: 'center' },
        { text: 'Observaciones', value: 'observaciones', align: 'center' },
        { text: 'Total', value: 'monto_total', align: 'right' },
        { text: '', value: 'actions', sortable: false, align: 'center' },
      ],
      headersCorridasBancarias: [
        { text: 'ID', align: 'center', value: 'id' },
        { text: 'Fecha', align: 'center', value: 'fecha' },
        { text: 'referencia', value: 'referencia', align: 'center' },
        { text: 'Descripción', value: 'descripcion', align: 'center' },
        { text: 'Monto', value: 'monto', align: 'right' },
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
      CorrelativoPago: 0,
      Id: 0,
      MensajeNotaCredito: '',
      selectedItem: {},
      mostrarVentana: false,
      montoTotalCxC: 0,
      CorrelativoData: [],
      dialogWait: true,
      ValidarTransferenciaData: [],
    }
  },
  head() {
    const title = 'Recaudación Múltiple';
    return {
      title,
    }
  },
  async mounted() {
    this.dialogWait = true
    await this.getLiquidacionPropietario()
    await this.getTipoPago()
    await this.getBancoCuenta()
    await this.getCorridasBancarias()
    await this.getTasaMulta()
    await this.getCorrelativo()
    this.dialogWait = false

  },

  methods: {
      
     async ValidarTransferencia(item) {
      try {
        const response = await this.$axios.$post('ValidarTransferencia/', item);
        this.ValidarTransferenciaData = response
        console.log('this.ValidarTransferenciaData',this.ValidarTransferenciaData)

        this.div.fechapago = item.fecha; 
        this.div.monto = item.monto; 
        this.div.nro_referencia = item.referencia; 
        this.mostrarVentana = false

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
    closeopenDialog() {
      this.divs = []
      this.selectedLiq = []
      this.getLiquidacionPropietario()
      this.openDialog = false;
    },
    saveValue() {
      // Aquí puedes realizar alguna acción con el valor numérico (this.numero)
      this.dialog = false;
    },
    async getNotaCredito() {
      this.divs = []
      var bandera = true
      var montonc = 0
      const uniqueOwnersMap = new Map();

      for (const div2 of this.selectedLiq) {
        const objetosFiltrados = this.selectedLiq.filter(obj => obj.propietario.id === div2.propietario.id);

        // Sumar los valores de la propiedad "monto_total" de los objetos filtrados
        const sumaMontos = objetosFiltrados.reduce((acumulador, objeto) => {
          // Convertir el valor a número antes de sumarlo
          const montoTotal = parseFloat(objeto.monto_total) || 0;
          return acumulador + montoTotal;
        }, 0);

        console.log('div2.propietario.id', div2.propietario.id, 'total cxc por contribuyente', sumaMontos)
        const ownerId = div2.propietario.id;

        if (!uniqueOwnersMap.has(ownerId)) {
          // Si no, agrega la información de este elemento al mapa
          uniqueOwnersMap.set(ownerId, div2);
          try {
            var response = await this.$axios.$get('notacredito/?saldo_gt=0&propietario=' + div2.propietario.id)
            if (response[0]) {

              this.NotaCreditoData = response[0]
              console.log('entro nc', this.NotaCreditoData)
              this.$alert("success", {
                desc: "El contribuyente " + this.NotaCreditoData.propietario_nombre + "  posee la N/C Nro: " + this.NotaCreditoData.numeronotacredito + " con saldo de Bs. " +
                  this.numeroFormateado(this.NotaCreditoData.saldo), hash: 'knsddcssdc', title: 'Nota de crédito.'
              })

              console.log(this.NotaCreditoData.saldo, this.montoTotalCxC)
              montonc = parseFloat(this.NotaCreditoData.saldo) < parseFloat(sumaMontos) ? parseFloat(this.NotaCreditoData.saldo) : parseFloat(sumaMontos)
              this.divs.push({
                tipopago: 'N',
                fechapago: new Date().toISOString().substr(0, 10),// Formato ISO para la fecha
                nro_referencia: this.NotaCreditoData.numeronotacredito,
                monto: montonc,
                bloqueado: true,
                bancocuenta: null,
                nro_aprobacion: div2.propietario.id,
                nro_lote: div2.propietario.nombre,
              });
            }
            else {
              if (bandera) {
                this.divs.push({
                  tipopago: null,
                  bancocuenta: null,
                  fechapago: new Date().toISOString().substr(0, 10),// Formato ISO para la fecha
                  nro_aprobacion: '',
                  nro_lote: '',
                  nro_referencia: '',
                  monto: this.montoTotalCxC - montonc,
                  bloqueado: false,
                });
                bandera = false
              }
            }
          } catch (err) {
            console.log(err);
          }
        }
      }
      this.selectedunique = Array.from(uniqueOwnersMap.values());
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



    async getLiquidacionPropietario() {
      try {
        const response = await this.$axios.$get('liquidacion/?habilitado=true')
        this.liquidacionData = response
        console.log(this.liquidacionData, 'dataa')
      } catch (err) {
        console.log(err);
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
    CancelaDialogPago() {
      this.dialog = false
    },
    async getLiquidacionId(item) {
      this.MensajeNotaCredito = ''
      this.selectedItem = item
      //console.log('this.selectedItem ', this.selectedItem)
      console.log('selectedLiq', this.selectedLiq)
      this.montoTotalCxC = this.selectedLiq.reduce((total, item) => total + parseFloat(item.monto_total), 0);
      console.log('montoTotalCxC', this.montoTotalCxC)
      if (this.divs.monto == 0) {
        this.divs.monto = this.montoTotalCxC
      }
      try {
        const response = await this.$axios.$get(`liquidacion/${item.id}`)
        this.liquidacionIdData = response
        console.log(this.liquidacionIdData, 'ID Liquidacion')
        this.openDialog = true
        await this.getNotaCredito()
      } catch (err) {
        console.log(err);
      }
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
      } catch (err) {
        console.log(err);
      }
    },

    montoTotalPagado() {
      if (this.montoTotalCxC) {
        var total = 0
        console.log('total cxc', this.montoTotalCxC)
        for (const div of this.divs) {
          if (div.monto !== null) {
            total += parseFloat(div.monto)

            if (total > this.montoTotalCxC) {
              this.MensajeNotaCredito = '. Se generará una NOTA DE CREDITO por: ' + this.numeroFormateado(total - this.montoTotalCxC) + '';
            }

          }
        }

        return total
      }
    },

    async getTasaMulta() {
      try {
        const response = await this.$axios.$get('tasamulta')
        this.tasaMultaData = response
      } catch (err) {
        console.log(err);
      }
    },

    addDiv() {
      this.valido = false
      var mensaje = ""
      if (this.divs.length > 0) {
        const div = this.divs[this.divs.length - 1];
        console.log(div);
        if (!div.tipopago) {           mensaje = mensaje + 'Debe colocar un tipo de pago.' } 
        else {
          if (div.tipopago == "D") { // Tarjeta de debito
            if (!div.bancocuenta) {    mensaje = mensaje + 'Falta Banco, '              }
            if (!div.nro_aprobacion) { mensaje = mensaje + 'Falta Nro. de Aprobación, ' }
            if (!div.nro_lote) {       mensaje = mensaje + 'Falta Nro. de Lote, '       }
            if (!div.nro_referencia) { mensaje = mensaje + 'Falta Nro. de Referencia.'  }
          }
          if (div.tipopago == "P") { //Deposito
            if (!div.bancocuenta) {    mensaje = mensaje + 'Falta Banco, '       }
            if (div.nro_referencia == false) {  mensaje = mensaje + 'Falta Nro. de Referencia.'  }
          }
        }
      } 
      else { mensaje = mensaje + 'No hay pagos para procesar.' }
      if (mensaje) {this.$alert("cancel", { desc: "Error: " + mensaje, hash: 'knsddcssdc', title: 'Falta dato' }) } 
      else {      
        if ((this.montoTotalPagado()).toFixed(8) == (this.montoTotalCxC).toFixed(8)) { this.$alert("success", { desc: "El pago está completo.", hash: 'knsddcssdc', title: 'Error' }) }
        if ((this.montoTotalPagado()).toFixed(8) < (this.montoTotalCxC).toFixed(8))  { this.valido = true } 
      }

      if (this.valido) {
        this.divs.push({
          tipopago: null,
          bancocuenta: null,
          fechapago: new Date().toISOString().substr(0, 10),// Formato ISO para la fecha
          nro_aprobacion: '',
          nro_lote: '',
          nro_referencia: '',
          monto: (this.montoTotalCxC - this.montoTotalPagado()).toFixed(8),
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
          monto: (this.montoTotalCxC - this.montoTotalPagado()).toFixed(8),
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
    formaterNumero(numero) {
      // Formatear con dos decimales y separación de miles
      return '{:,.2f}'.format(numero);
    },
    formatearFecha(fecha) {
      const dia = fecha.getDate().toString().padStart(2, '0');
      const mes = (fecha.getMonth() + 1).toString().padStart(2, '0');
      const anio = fecha.getFullYear();
      return `${dia}/${mes}/${anio}`;
    },
    async generarPDF(Contribuyente, CabeceraPago, DetallePago, Montos, liquidacionDetalleData) {
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
      console.log('fechaActual')
      let longText = ''
      let textLines = ''
      // Tamaño máximo de la línea
      const maxWidth = 180;
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
      pdf.text(200, 10, `No DE PLANILLA. ${this.CorrelativoPago}`, null, null, 'right');
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
      pdf.text(JSON.parse(JSON.stringify(Contribuyente.numero_documento)), 55, startY);
      pdf.setFont("helvetica", "normal");
      startY = startY + 5
      pdf.text('NOMBRE/RAZÓN SOCIAL: ', 15, startY);
      pdf.setFont("helvetica", "bold");
      pdf.text(JSON.parse(JSON.stringify(Contribuyente.nombre)), 55, startY);
      pdf.setFont("helvetica", "normal");
      startY = startY + 5
      pdf.text('DIRECCIÓN: ', 15, startY);
      pdf.setFont("helvetica", "bold");
      pdf.text(JSON.parse(JSON.stringify(Contribuyente.direccion)), 55, startY);
      pdf.setFont("helvetica", "normal");
      startY = startY + 5
      pdf.text('TELÉFONO:', 15, startY);
      pdf.setFont("helvetica", "bold");
      pdf.text(JSON.parse(JSON.stringify(Contribuyente.telefono_principal)), 55, startY);
      pdf.setFont("helvetica", "normal");
      startY = startY + 5
      pdf.line(15, startY, 200, startY); // Coordenadas de inicio (x1, y1) y final (x2, y2) de la línea
      startY = startY + 5
      //pdf.text('OBSERVACIONES:', 15, startY);
      //pdf.setFont("helvetica", "bold");
      //pdf.text(this.selectedItem.observaciones != null ? this.selectedItem.observaciones : '', 55, startY);
      //pdf.setFont("helvetica", "normal");
      //startY = startY + 10
      pdf.text('SERVICIO O TRÁMITE:', 15, startY);
      pdf.setFont("helvetica", "bold");
      pdf.text(CabeceraPago.tipoflujo.descripcion, 55, startY);
      pdf.setFont("helvetica", "normal");
      if (CabeceraPago.inmueble) {
        startY = startY + 5
        pdf.text('NÚMERO DE EXPEDIENTE:', 15, startY);
        pdf.setFont("helvetica", "bold");
        pdf.text(JSON.parse(JSON.stringify(CabeceraPago.inmueble.numero_expediente)), 55, startY);
        pdf.setFont("helvetica", "normal");
        startY = startY + 5
        pdf.text('DIRECCIÓN INMUEBLE:', 15, startY);
        pdf.setFont("helvetica", "bold");
        startY = startY + 5
        longText = JSON.parse(JSON.stringify(CabeceraPago.inmueble.direccion))
        textLines = pdf.splitTextToSize(longText, maxWidth);
        textLines.forEach((line) => {
          pdf.text(15, startY, line);
          startY += 4;
        });
        pdf.setFont("helvetica", "normal");
      }
      startY = startY + 10
      pdf.text('Nro. DOCUMENTO:', 15, startY);
      pdf.setFont("helvetica", "bold");
      pdf.text(CabeceraPago.numero.toString(), 55, startY);
      console.log('CabeceraPago')
      pdf.setFont("helvetica", "normal");
      startY = startY + 5
      pdf.text('OBSERVACIONES:', 15, startY);
      pdf.setFont("helvetica", "bold");
      startY = startY + 5
      longText = CabeceraPago.observaciones != null ? CabeceraPago.observaciones : ''
      // Tamaño máximo de la línea
      // Dividir el texto en líneas
      textLines = pdf.splitTextToSize(longText, maxWidth);
      // Agregar cada línea al PDF
      textLines.forEach((line) => {
        pdf.text(15, startY, line);
        startY += 4;
      });
      pdf.setFont("helvetica", "normal");
      pdf.setFontSize(fontSizeHead); // Establecer el tamaño de fuente solo para esta línea
      const jsonStr = liquidacionDetalleData
      var jsonObject = JSON.parse(jsonStr);
      // Manipular los valores si es necesario (por ejemplo, convertir las cadenas numéricas a números)
      Object.keys(jsonObject).forEach(key => {
        const value = jsonObject[key];
        if (typeof value === 'string' && !isNaN(Number(value))) {
          jsonObject[key] = Number(value);
        }
      });
      if (!Array.isArray(jsonObject)) {
        jsonObject = [jsonObject];
      }
      /*pdf.autoTable({
        head: [['tipo', 'Descripción', 'Petro', 'Cantidad', 'Monto Bs']],
        body: jsonObject.map((item) => [
          //tipoMapeo[this.tasaMultaData.find((TasaMulta) => TasaMulta.id == item.tasamulta).tipo],
          tipoMapeo['M'],

          this.tasaMultaData.find((TasaMulta) => TasaMulta.id == item.tasamulta).descripcion,
          item.monto_unidad_tributaria,
          item.cantidad,
          item.monto_tasa,

        ]),
        startY: startY + 2,
        styles: { fontSize: fontSizeBody }, // Establecer el tamaño de fuente para el cuerpo de la tabla
        headStyles: { fontSize: fontSizeHead }, // Establecer el tamaño de fuente para el encabezado

      });*/
      var columns = ['Tipo', 'Descripción', 'Base Imponible Bs', 'Cantidad', 'Monto Bs'];
      var data = jsonObject.map((item) => [
        tipoMapeo[this.tasaMultaData.find((TasaMulta) => TasaMulta.id == item.tasamulta_id).tipo],
        this.tasaMultaData.find((TasaMulta) => TasaMulta.id == item.tasamulta_id).descripcion,
        item.monto_unidad_tributaria,
        item.cantidad,
        item.monto_tasa,
      ]);
      pdf.autoTable({
        head: [columns],
        body: data,
        startY: startY + 2,
        styles: { fontSize: fontSizeBody },
        headStyles: { fontSize: fontSizeHead },
      });
      startY += 10 + jsonObject.length * 7;
      startY = startY + 5
      pdf.setFont("helvetica", "bold");
      pdf.text('DETALLE DE PAGO:', 15, startY);
      pdf.setFont("helvetica", "normal");
      //startY=startY+5
      /*var options = {
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
      };*/
      columns = ['Tipo', 'Fecha Pago', 'Banco/Cuenta', 'Nro Referencia', 'Monto Bs'];
      data = DetallePago.map((item) => [
        this.tipoPagoData.find((tipopago) => tipopago.codigo === item.tipopago).descripcion,
        item.fechapago,
        item.tipopago === 'E' || item.tipopago === 'N' ? '' : this.bancoCuentaData.find((bancocuenta) => bancocuenta.id === item.bancocuenta).banco_nombre,
        item.nro_referencia,
        item.monto,
      ]);
      //pdf.autoTable(columns, data, options);
      pdf.autoTable({
        head: [columns],
        body: data,
        startY: startY + 2,
        styles: { fontSize: fontSizeBody },
        headStyles: { fontSize: fontSizeHead },
      });
      startY += 10 + DetallePago.length * 7;
      startY = startY + 10
      pdf.text('MONTO X COBRAR (BS.):', 15, startY);
      pdf.setFont("helvetica", "bold");
      pdf.setFontSize(fontSizeTitle);
      pdf.text(Montos.monto_total, 55, startY);
      pdf.setFontSize(fontSizeHead);
      pdf.setFont("helvetica", "normal");
      startY = startY + 5
      pdf.text('MONTO CANCELADO (BS.):', 15, startY);
      pdf.setFont("helvetica", "bold");
      pdf.setFontSize(fontSizeTitle);
      pdf.text(Montos.montoPagado.toString(), 55, startY);
      console.log('montoPagado', Montos.montoPagado.toString())
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
      pdf.save(`Planilla-Nro-${this.CorrelativoPago}.pdf`);
      console.log('pdf', pdf)
      await this.uploadPDF(pdf);
    },

    async uploadPDF(pdf) {
      console.log('uploadPDF entra')
      const formData = new FormData();
      formData.append('ReportePdf', new Blob([pdf.output('blob')], { type: 'application/pdf' }), `Planilla-Nro-${this.CorrelativoPago}.pdf`);
      try {
        const response = await this.$axios.$patch(`pagoestadocuenta/${this.IdPago}/`, formData, {
          headers: { 'Content-Type': 'application/pdf' },
        })
        console.log('response uploadPDF',response)
        await this.getPDF()
        console.log('uploadPDF sale')
      } catch (err) {
        console.log(err);
      }
    },
    async getPDF() {
      try {
        console.log('getPDF entra')
        const response = await this.$axios.$get(`pagoestadocuenta/${this.IdPago}/`)
          console.log('response getPDF', response.ReportePdf)
          var pdfData = response.ReportePdf;
          if (pdfData.includes("catastro_back")) {
              pdfData = pdfData.replace("catastro_back", "catastro_back/catastro_back");
            }
          window.open(pdfData, "_blank").focus();
          console.log('getPDF sale')
        } catch (err) {
        console.log(err);
      }
    },

    formatoFecha() {
      if (this.fechapago) {
        this.fechaFormateada = moment(this.nuevaFecha).format('YYYY-MM-DD HH:mm:ss')
        this.fechapago = this.fechaFormateada
      }
    },

    validaPago() {
      var mensaje = ""
      if (this.divs.length > 0) {
        const div = this.divs[this.divs.length - 1];
        console.log(div);
        if (!div.tipopago) {           mensaje = mensaje + 'Debe colocar un tipo de pago.' } 
        else {
          if (div.tipopago == "D") { // Tarjeta de debito
            if (!div.bancocuenta) {    mensaje = mensaje + 'Falta Banco, '              }
            if (!div.nro_aprobacion) { mensaje = mensaje + 'Falta Nro. de Aprobación, ' }
            if (!div.nro_lote) {       mensaje = mensaje + 'Falta Nro. de Lote, '       }
            if (!div.nro_referencia) { mensaje = mensaje + 'Falta Nro. de Referencia.'  }
          }
          if (div.tipopago == "P") { //Deposito
            if (!div.bancocuenta) {    mensaje = mensaje + 'Falta Banco, '       }
            if (div.nro_referencia == false) {  mensaje = mensaje + 'Falta Nro. de Referencia.'  }
          }
        }
      } 
      else { mensaje = mensaje + 'No hay pagos para procesar.' }
      if (mensaje) {this.$alert("cancel", { desc: "Error: " + mensaje, hash: 'knsddcssdc', title: 'Falta dato' }) } 
      else {this.createPago() }
    },

    async createPago() {
      this.montoTotalSelectedItem = this.selectedLiq ? (this.montoTotalCxC) : null
      this.montoTotalSelectedItem = parseFloat(this.montoTotalSelectedItem)
      this.montoTotalFunc = this.montoTotalPagado()
      this.diferencia = this.montoTotalSelectedItem - (this.montoTotalFunc)
      if (this.montoTotalSelectedItem !== null && parseFloat(this.montoTotalSelectedItem) <= this.montoTotalFunc) {
        if (this.montoTotalFunc > this.montoTotalSelectedItem) {
          this.$alert("success", { desc: "Se creará una NOTA DE CREDITO a favor del contribuyente", hash: 'knsddcssdc', title: 'NOTA DE CREDITO' })
        }
        // Recrear una vcabecera por cada liquidacion
        var CabeceraPago = this.selectedLiq
        //agrego una nueva columna para cada liquidacion reconstruida.
        CabeceraPago = CabeceraPago.map(obj => {
          obj.montoPagado = 0;
          return obj;
        });
        // Recrear el detalle para cada liquidacion
        var DetallePago = []
        // NOTA DE CREDITO
        var NCFiltrados = this.divs.filter(obj => obj.tipopago === 'N'); // pagos tipo nota de credito
        console.log('NCFiltrados', NCFiltrados)
        for (const divNC of NCFiltrados) {
          const propietariosFiltrados = CabeceraPago.filter(obj => obj.propietario.id == divNC.nro_aprobacion); //liquidaciones
          var monto_total_nc = divNC.monto
          var monto_nc = 0
          console.log('Monto NC', monto_nc);
          console.log('propietario', propietariosFiltrados);
          for (const divLiquidacion of propietariosFiltrados) {
            console.log('id del propietario', divLiquidacion.id)
            console.log('Monto Liquidacion', divLiquidacion.monto_total);
            if (monto_total_nc != 0) {
              if (monto_total_nc == divLiquidacion.monto_total) {
                monto_nc = monto_total_nc
                monto_total_nc = 0
              } else if (monto_total_nc > divLiquidacion.monto_total) {
                monto_nc = divLiquidacion.monto_total
                monto_total_nc = monto_total_nc - divLiquidacion.monto_total
              } else if (monto_total_nc < divLiquidacion.monto_total) {
                monto_nc = monto_total_nc
                monto_total_nc = 0
              }
              DetallePago.push({
                tipopago: 'N',
                fechapago: divNC.fechapago,
                nro_referencia: divNC.nro_referencia,
                monto: parseFloat(monto_nc),
                bloqueado: true,
                bancocuenta: null,
                nro_aprobacion: null,
                nro_lote: null,
                id: divLiquidacion.id,
              });
              const registro = CabeceraPago.find(obj => obj.id === divLiquidacion.id);
              if (registro) {
                // Actualiza el campo "montoPagado" con el nuevo valor
                registro.montoPagado = parseFloat(registro.montoPagado) + parseFloat(monto_nc);
              }
            }
          }
        }

        // TRANSFERENCIAS
        var TRFiltrados = this.divs.filter(obj => obj.tipopago === 'T'); // pagos tipo nota de credito
        console.log('TRFiltrados', TRFiltrados)
        for (const divTR of TRFiltrados) {
          var propietariosFiltradosTR = CabeceraPago.filter(obj => parseFloat(obj.montoPagado) < parseFloat(obj.monto_total)); //liquidaciones
          var cantidadFilas = propietariosFiltradosTR.length;
          var contadorfilas = 1
          var monto_total_tr = divTR.monto
          var monto_tr = 0
          console.log('Monto TR', monto_total_tr);
          console.log('propietario', propietariosFiltradosTR);
          for (const divLiquidacionTR of propietariosFiltradosTR) {
            console.log('id del propietario', divLiquidacionTR.id)
            console.log('Monto Liquidacion', divLiquidacionTR.monto_total);
            console.log('Monto TR', monto_total_tr);
            console.log('Total Liquiaciones a repartir', cantidadFilas, ' contador de liqddaciones', contadorfilas)
            const saldoLiquidacion = CabeceraPago.find(obj => obj.id === divLiquidacionTR.id);
            if (monto_total_tr != 0) {
              if (cantidadFilas == contadorfilas) {
                // evalua si es la ultima liquidacion, si es asi le asigna el resto o el total del monto del pagoa a ese registro)
                // el backend se encargaria de generar la respeciva NC
                console.log('ULTIMOOOO Monto TR', monto_total_tr);
                monto_tr = monto_total_tr
                monto_total_tr = 0
              } else if (monto_total_tr == (divLiquidacionTR.monto_total - saldoLiquidacion.montoPagado)) {
                monto_tr = monto_total_tr
                monto_total_tr = 0
              } else if (monto_total_tr > (divLiquidacionTR.monto_total - saldoLiquidacion.montoPagado)) {
                monto_tr = (divLiquidacionTR.monto_total - saldoLiquidacion.montoPagado)
                monto_total_tr = monto_total_tr - (divLiquidacionTR.monto_total - saldoLiquidacion.montoPagado)
              } else if (monto_total_tr < (divLiquidacionTR.monto_total - saldoLiquidacion.montoPagado)) {
                monto_tr = monto_total_tr
                monto_total_tr = 0
              }
              DetallePago.push({
                tipopago: 'T',
                fechapago: divTR.fechapago,
                nro_referencia: divTR.nro_referencia,
                monto: parseFloat(monto_tr),
                bloqueado: true,
                bancocuenta: divTR.bancocuenta,
                nro_aprobacion: null,
                nro_lote: null,
                id: divLiquidacionTR.id,
              });
              const registro = CabeceraPago.find(obj => obj.id === divLiquidacionTR.id);
              if (registro) {
                // Actualiza el campo "montoPagado" con el nuevo valor
                registro.montoPagado = registro.montoPagado + parseFloat(monto_tr);
              }
            }
            contadorfilas = contadorfilas + 1
          }
        }

        // DEPOSITO
        var dpFiltrados = this.divs.filter(obj => obj.tipopago === 'P'); // pagos tipo deposito
        console.log('dpFiltrados', dpFiltrados)
        for (const divdp of dpFiltrados) {
          var propietariosFiltradosdp = CabeceraPago.filter(obj => parseFloat(obj.montoPagado) < parseFloat(obj.monto_total)); //liquidaciones
          var cantidadFilasdp = propietariosFiltradosdp.length;
          var contadorfilasdp = 1
          var monto_total_dp = divdp.monto
          var monto_dp = 0
          console.log('Monto dp', monto_total_dp);
          console.log('propietario', propietariosFiltradosdp);
          for (const divLiquidaciondp of propietariosFiltradosdp) {
            console.log('id del propietario', divLiquidaciondp.id)
            console.log('Monto Liquidacion', divLiquidaciondp.monto_total);
            console.log('Monto dp', monto_total_dp);
            console.log('Total Liquiaciones a repartir', cantidadFilasdp, ' contador de liqddaciones', contadorfilasdp)
            const saldoLiquidaciondp = CabeceraPago.find(obj => obj.id === divLiquidaciondp.id);
            if (monto_total_dp != 0) {
              if (cantidadFilasdp == contadorfilasdp) {
                // evalua si es la ultima liquidacion, si es asi le asigna el resto o el total del monto del pagoa a ese registro)
                // el backend se encargaria de generar la respeciva NC
                console.log('ULTIMOOOO Monto dp', monto_total_dp);
                monto_dp = monto_total_dp
                monto_total_dp = 0
              } else if (monto_total_dp == (divLiquidaciondp.monto_total - saldoLiquidaciondp.montoPagado)) {
                monto_dp = monto_total_dp
                monto_total_dp = 0
              } else if (monto_total_dp > (divLiquidaciondp.monto_total - saldoLiquidaciondp.montoPagado)) {
                monto_dp = (divLiquidaciondp.monto_total - saldoLiquidaciondp.montoPagado)
                monto_total_dp = monto_total_dp - (divLiquidaciondp.monto_total - saldoLiquidaciondp.montoPagado)
              } else if (monto_total_dp < (divLiquidaciondp.monto_total - saldoLiquidaciondp.montoPagado)) {
                monto_dp = monto_total_dp
                monto_total_dp = 0
              }
              DetallePago.push({
                tipopago: 'P',
                fechapago: divdp.fechapago,
                nro_referencia: divdp.nro_referencia,
                monto: parseFloat(monto_dp),
                bloqueado: true,
                bancocuenta: divdp.bancocuenta,
                nro_aprobacion: null,
                nro_lote: null,
                id: divLiquidaciondp.id,
              });
              const registro = CabeceraPago.find(obj => obj.id === divLiquidaciondp.id);
              if (registro) {
                // Actualiza el campo "montoPagado" con el nuevo valor
                registro.montoPagado = registro.montoPagado + parseFloat(monto_dp);
              }
            }
            contadorfilasdp = contadorfilasdp + 1
          }
        }

        // TARJETA DE DEBITO
        var Filtrados_TD = this.divs.filter(obj => obj.tipopago === 'D'); // pagos tipo deposito
        console.log('Filtrados_TD', Filtrados_TD)
        for (const div_TD of Filtrados_TD) {
          var propietariosFiltrados_TD = CabeceraPago.filter(obj => parseFloat(obj.montoPagado) < parseFloat(obj.monto_total)); //liquidaciones
          var cantidadFilas_TD = propietariosFiltrados_TD.length;
          var contadorfilas_TD = 1
          var monto_total_TD = div_TD.monto
          var monto_TD = 0
          console.log('Monto TD', monto_total_TD);
          console.log('propietario', propietariosFiltrados_TD);
          for (const divLiquidacion_TD of propietariosFiltrados_TD) {
            console.log('id del propietario', divLiquidacion_TD.id)
            console.log('Monto Liquidacion', divLiquidacion_TD.monto_total);
            console.log('Monto TD', monto_total_TD);
            console.log('Total Liquiaciones a repartir', cantidadFilas_TD, ' contador de liqddaciones', contadorfilas_TD)
            const saldoLiquidacion_TD = CabeceraPago.find(obj => obj.id === divLiquidacion_TD.id);
            if (monto_total_TD != 0) {
              if (cantidadFilas_TD == contadorfilas_TD) {
                // evalua si es la ultima liquidacion, si es asi le asigna el resto o el total del monto del pagoa a ese registro)
                // el backend se encargaria de generar la respeciva NC
                console.log('ULTIMOOOO Monto _TD', monto_total_TD);
                monto_TD = monto_total_TD
                monto_total_TD = 0
              } else if (monto_total_TD == (divLiquidacion_TD.monto_total - saldoLiquidacion_TD.montoPagado)) {
                monto_TD = monto_total_TD
                monto_total_TD = 0
              } else if (monto_total_TD > (divLiquidacion_TD.monto_total - saldoLiquidacion_TD.montoPagado)) {
                monto_TD = (divLiquidacion_TD.monto_total - saldoLiquidacion_TD.montoPagado)
                monto_total_TD = monto_total_TD - (divLiquidacion_TD.monto_total - saldoLiquidacion_TD.montoPagado)
              } else if (monto_total_TD < (divLiquidacion_TD.monto_total - saldoLiquidacion_TD.montoPagado)) {
                monto_TD = monto_total_TD
                monto_total_TD = 0
              }
              DetallePago.push({
                tipopago: 'D',
                fechapago: div_TD.fechapago,
                nro_referencia: div_TD.nro_referencia,
                monto: parseFloat(monto_TD),
                bloqueado: true,
                bancocuenta: div_TD.bancocuenta,
                nro_aprobacion: div_TD.nro_aprobacion,
                nro_lote: div_TD.nro_lote,
                id: divLiquidacion_TD.id,
              });
              const registro = CabeceraPago.find(obj => obj.id === divLiquidacion_TD.id);
              if (registro) {
                // Actualiza el campo "montoPagado" con el nuevo valor
                registro.montoPagado = registro.montoPagado + parseFloat(monto_TD);
              }
            }
            contadorfilas_TD = contadorfilas_TD + 1
          }
        }


        // EFECTIVO
        var EFFiltrados = this.divs.filter(obj => obj.tipopago === 'E'); // pagos tipo deposito
        console.log('EFFiltrados', EFFiltrados)
        for (const divEF of EFFiltrados) {
          var propietariosFiltradosEF = CabeceraPago.filter(obj => parseFloat(obj.montoPagado) < parseFloat(obj.monto_total)); //liquidaciones
          var cantidadFilasEF = propietariosFiltradosEF.length;
          var contadorfilasEF = 1
          var monto_total_EF = divEF.monto
          var monto_EF = 0
          console.log('Monto EF', monto_total_EF);
          console.log('propietario', propietariosFiltradosEF);
          for (const divLiquidacionEF of propietariosFiltradosEF) {
            console.log('id del propietario', divLiquidacionEF.id)
            console.log('Monto Liquidacion', divLiquidacionEF.monto_total);
            console.log('Monto EF', monto_total_EF);
            console.log('Total Liquiaciones a repartir', cantidadFilasEF, ' contador de liqddaciones', contadorfilasEF)
            const saldoLiquidacionEF = CabeceraPago.find(obj => obj.id === divLiquidacionEF.id);
            if (monto_total_EF != 0) {
              if (cantidadFilasEF == contadorfilasEF) {
                // evalua si es la ultima liquidacion, si es asi le asigna el resto o el total del monto del pagoa a ese registro)
                // el backend se encargaria de generar la respeciva NC
                console.log('ULTIMOOOO Monto EF', monto_total_EF);
                monto_EF = monto_total_EF
                monto_total_EF = 0
              } else if (monto_total_EF == (divLiquidacionEF.monto_total - saldoLiquidacionEF.montoPagado)) {
                monto_EF = monto_total_EF
                monto_total_EF = 0
              } else if (monto_total_EF > (divLiquidacionEF.monto_total - saldoLiquidacionEF.montoPagado)) {
                monto_EF = (divLiquidacionEF.monto_total - saldoLiquidacionEF.montoPagado)
                monto_total_EF = monto_total_EF - (divLiquidacionEF.monto_total - saldoLiquidacionEF.montoPagado)
              } else if (monto_total_EF < (divLiquidacionEF.monto_total - saldoLiquidacionEF.montoPagado)) {
                monto_EF = monto_total_EF
                monto_total_EF = 0
              }
              DetallePago.push({
                tipopago: 'E',
                fechapago: divEF.fechapago,
                nro_referencia: divEF.nro_referencia,
                monto: parseFloat(monto_EF),
                bloqueado: true,
                bancocuenta: null,
                nro_aprobacion: null,
                nro_lote: null,
                id: divLiquidacionEF.id,
              });
              const registro = CabeceraPago.find(obj => obj.id === divLiquidacionEF.id);
              if (registro) {
                // Actualiza el campo "montoPagado" con el nuevo valor
                registro.montoPagado = registro.montoPagado + parseFloat(monto_EF);
              }
            }
            contadorfilasEF = contadorfilasEF + 1
          }
        }
        //console.log('CabeceraPago',CabeceraPago)
        //console.log('DetallePago', DetallePago )   

        // inicial el proceso de envio de datos a backend para genere el pago por cada liquidacion y su recibo
        for (const divLiq of this.selectedLiq) {
          var CabeceraPagoApi = CabeceraPago.find(obj => obj.id == divLiq.id); //liquidaciones
          var DetallePagoApi = DetallePago.filter(obj => obj.id == divLiq.id)
          const data = {
            liquidacion: divLiq.id,
            propietario: divLiq.propietario.id,
            observacion: this.selectedItem.observaciones != null ? this.selectedItem.observaciones : '',
            monto: CabeceraPagoApi.montoPagado.toFixed(8),
            monto_cxc: parseFloat(CabeceraPagoApi.monto_total).toFixed(8),
            caja: this.$store.getters.getUser.caja,
            detalle: DetallePagoApi
          }
          console.log('data para API', data)
          await this.ProcesarPago(divLiq.propietario, divLiq, DetallePagoApi, CabeceraPagoApi, data)
        }
        this.closeopenDialog()
      } else {
        this.$alert("success", { desc: 'El pago es menor al total por cobrar.', hash: 'knsddcssdc', title: 'Alerta' })
      }
    },

    async ProcesarPago(propietario, divLiq, DetallePagoApi, CabeceraPagoApi, data) {
      try {
        this.dialogWait = true
        const res = await this.$axios.$post('crearPago/', data);
        console.log('backend creapago:', res)
        console.log('data para pdf:', data)
        this.CorrelativoPago = res.documento
        this.IdPago = res.idpago
        var detail = res.liquidacionDetalleData
        //this.Id=res.notacredito.notacredito
        console.log('backend CorrelativoPago:', this.CorrelativoPago)
        console.log('backend liquidacionDetalleData:', detail)
        //console.log('backend notacredito:',this.Id)
        await this.generarPDF(propietario, divLiq, DetallePagoApi, CabeceraPagoApi, detail)
        this.dialogWait = false
        //this.$alert("success", { desc: "Se ha registrado un pago con éxito", hash: 'knsddcssdc', title: 'Creado' })
        await new Promise(resolve => setTimeout(resolve, 3000));
      } catch (err) {
        console.log(err);
      }
    },


  }
}

</script>


<style src="~/assets/styles/pages/recaudacion-multiple.scss" lang="scss" />