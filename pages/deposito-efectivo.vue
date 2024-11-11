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

export default {
  name: "Deposito-EfectivoPage",
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
    const title = 'Depósito de Efectivo';
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
        corridasbancarias: null,
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