<template>
  <div class="center no-padding divcol" style="margin-bottom:20px; padding-left: 256px;">
    <section class="section1-ambito">
      <div class="datos-ambito-container">
        <div class="title-morado">
          <p class="datos-ambito-title">
            Recibos de Cobro
          </p>

          <v-dialog v-model="dialogDelete" max-width="1600px">
            <v-card id="dialog-editar-crear">
              <v-card-title>
                <span class="title">Deshabilitar Recibo de cobro</span>
              </v-card-title>

              <hr>

              <v-card-text>
                <v-container>
                  <v-row class="center">
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="defaultItem.observaciones" label="Observaciones"
                        class="big-autocomplete"></v-text-field>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn class="btn dialog-btn" @click="dialogDelete = false">
                  Cancelar
                </v-btn>

                <v-btn class="btn dialog-btn" @click="saveData()" style="background-color:#ED057E!important;">
                  Borrar Registro
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>

          <v-dialog v-model="dialog_editar" max-width="1600px">
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
                <v-text-field @click="openDialogMonto" v-model="div.monto" class="small-input mobile-inputs"
                  label="Monto" :disabled="div.bloqueado" style="font-size: 20px; " reverse>
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
          </v-dialog>


        </div>

        <div class="data-table-container">
          <v-text-field v-model="search" append-icon="mdi-magnify" label="Buscar" hide-details
            class="input-data-table"></v-text-field>

          <v-data-table :headers="headers" dense :items="PagoData" :loading="loading" :items-per-page="10"
            :search="search" :footer-props="{
            itemsPerPageText: 'Items por página',
          }" sort-by="numero" sort-desc class="mytabla" mobile-breakpoint="840">


            <template #[`item.actions`]="{ item }">
              <v-icon v-if="accesos.borrar" color="#810880" big @click="deleteItem(item)">
                mdi-delete
              </v-icon>
              <v-icon v-if="accesos.actualizar" color="#810880" big @click="editItem(item)">
                mdi-pencil
              </v-icon>
              <v-icon v-if="accesos.escribir" color="#810880" big @click="getPDF(item)">
                mdi-printer
              </v-icon>
            </template>
          </v-data-table>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import computeds from '~/mixins/computeds'

export default {
  name: "lista-PagoPage",
  mixins: [computeds],
  data() {
    return {
      search: '',
      dialog: false,
      dialog_editar: false,
      dialogDelete: false,
      loading: true,
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
      ],
      PagoData: [],
      permido: JSON.parse(JSON.stringify(this.$store.getters.getUser.permisos)),
      menu: [],
      menu_opciones: [],
      defaultItem: {
        observaciones: '',
        id: '',
      },
      accesos: {},
      divs: [{
        tipopago: null,
        bancocuenta: null,
        fechapago: new Date().toISOString().substr(0, 10),// Formato ISO para la fecha
        nro_aprobacion: '',
        nro_lote: '',
        nro_referencia: '',
        monto: 0,
        bloqueado: false,
      }],
    }
  },
  head() {
    const title = 'Pago';
    return {
      title,
    }
  },

  mounted() {
    this.permisos()
    this.getPago()
  },

  methods: {
    montoTotalPagado() {
      var total = 0
      for (const div of this.divs) {
        if (div.monto !== null) {
          total += parseFloat(div.monto)
        }
      }
      
      return total
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
    getPago() {
      this.$axios.$get('pagoestadocuenta').then(response => {
        this.PagoData = response
        this.loading = false
        console.log('this.PagoData',this.PagoData)
      }).catch(err => {
        console.log(err)
      })
    },

    editItem(item) {
      console.log(item)
      this.dialog_editar = true
      this.defaultItem.id = item.id
      this.defaultItem.observaciones = item.observaciones
    },
    deleteItem(item) {
      console.log(item)
      this.dialogDelete = true
      this.defaultItem.id = item.id
      this.defaultItem.observaciones = item.observaciones
    },

    saveData() {
      const formData = new FormData()
      formData.append('observaciones', this.defaultItem.observaciones)
      formData.append('habilitado', false)

      this.$axios.$patch('pagoestadocuenta/' + this.defaultItem.id + '/', formData).then((res) => {
        console.log(res.data)
        this.$alert("success", { desc: "Se ha editado un Pago con éxito", hash: 'knsddcssdc', title: 'Edición de Pago' })
        this.getPago()
      }).catch((err) => {
        console.log(err)
      });

      this.dialogDelete = false
    },

    async getPDF(item) {
      try {
        const response = item.ReportePdf
        if (response) {

          console.log('response getPDF', response)
          var pdfData = response;
          if (pdfData.includes("catastro_back")) {
              pdfData = pdfData.replace("catastro_back", "catastro_back/catastro_back");
            }
          window.open(pdfData, "_blank").focus();
        } else {
            this.$alert("cancel", { desc: "No se puede ubicar el reporte.", hash: 'knsddcssdc', title: 'Error' })
          }
        } catch (err) {
        console.log(err);
      }
    },

  }
};
</script>

<style src="~/assets/styles/pages/ambito.scss" lang="scss" />