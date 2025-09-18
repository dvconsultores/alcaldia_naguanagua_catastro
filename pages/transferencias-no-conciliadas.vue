<template>
  <div class="center no-padding divcol" style="margin-bottom:20px; padding-left: 256px;">
    <section class="section1-modificar-datos">
      <div class="modificar-datos-container">
        <div class="title-morado">
          <p class="modificar-datos-title">
            Transferencias No Conciliadas
          </p>
          <v-dialog v-model="dialog_editar" max-width="1600px">
            <v-card id="dialog-editar-crear">
              <v-card-title>
                <span class="title">Relación de transferencias no recaudadas</span>
              </v-card-title>
              <hr>
              <div class="section1-crear">
                <div class="datos-contribuyente-div">
                  <div class="inputs-datos-container">
                    <div class="divrow center col-mobile" style="max-width:500px; gap:10px; width:100%;">
                      <v-text-field v-model="observacion" class="big-autocomplete" label="Observación"></v-text-field>
                    </div>
                    <div class="data-table-container">
                      <v-data-table :items="montocajaPorBancoData" :headers="headersmontocajaPorBanco"
                        hide-default-footer></v-data-table>
                    </div>
                  </div>
                </div>
                <div class=" div-btns">
                  <v-btn :disabled="disableBoton" @click="saveEstado()" style="background-color:var(--primary)!important;">
                    Guardar
                  </v-btn>
                  <v-btn :disabled="disableBoton" style="background-color:var(--error)!important;"
                    @click="dialog_editar = false">
                    Cancelar
                  </v-btn>
                </div>
              </div>
            </v-card>
          </v-dialog>
        </div>

        <v-container>
          <v-row class="center">
            <v-col cols="12" sm="6" md="4">
              <v-autocomplete v-model="bancocuenta" class="small-input mobile-inputs" label='Banco'
                :items="bancoCuentaData" item-text="banco_nombre" item-value="id"
                @change="filtrarCorridasBancarias(bancocuenta)"></v-autocomplete>
            </v-col>
          </v-row>
        </v-container>

        <div class="data-table-container">

          <v-text-field v-model="search" append-icon="mdi-magnify" label="Buscar" hide-details class="input-data-table">
          </v-text-field>

          <v-data-table v-model="selectedLiq" :headers="headersCorridasBancarias" :items="filtrocorridasbancariasData"
            :loading="loading" :items-per-page="10" :search="search" :footer-props="{
            itemsPerPageText: 'Items por página',
          }" sort-by="numero_recibo" class="mytabla" mobile-breakpoint="840" show-select>
            <template #[`item.actions1`]="{ item }">
              <v-btn :disabled="selectedLiq.indexOf(item) === -1" class="btn-tabla" @click="editItem(item)">
                Procesar
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
import * as XLSX from 'xlsx';
import moment from 'moment'

export default {
  name: "Transferencias-No-ConciliadasPage",
  mixins: [computeds],
  data() {
    return {
      loading: true,
      fechaFiltro: null, // Inicialmente no se selecciona ninguna fecha de filtro
      selectedLiq: [],
      search: '',
      menu: false,
      headersCorridasBancarias: [
        { text: 'Fecha', align: 'center', value: 'fecha' },
        { text: 'Referencia Banco', value: 'referencia', align: 'center' },
        { text: 'Referencia', value: 'referencia_complemento', align: 'center' },
        { text: 'Descripción', value: 'descripcion', align: 'center' },
        { text: 'Monto', value: 'monto', align: 'right' },
        //{ text: 'Habilitado', value: 'habilitado', align: 'right' },
        { text: '', value: 'actions1', sortable: false, align: 'center' },
      ],
      headersmontocajaPorBanco: [
        { text: 'Banco', value: 'banco_nombre' },
        { text: 'Cuenta', value: 'banco_cuenta' },
        { text: 'Monto (Bs)', value: 'monto', align: 'right' },
      ],

      originalData: [],
      permido: JSON.parse(JSON.stringify(this.$store.getters.getUser.permisos)),
      accesos: null,
      dialog_editar: false,
      observacion: 'TRANSFERENCIAS DE CONTRIBUYENTES NO RECAUDADAS EN 2024, MES: ',
      disableBoton: false,
      bancoCuentaData: [],
      montocaja: 0,
      montocajaPorBanco: [],
      montocajaPorBancoData: [],
      corridasbancariasData: [],
      filtrocorridasbancariasData: [],
      bancocuenta: null,
      divs: [{
        tipopago: null,
        bancocuenta: null,
        fechapago: new Date().toISOString().substr(0, 10),// Formato ISO para la fecha
        nro_aprobacion: '',
        nro_lote: '',
        nro_referencia: '',
        monto: 1,
      }],
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
    await this.getTipoPagoDeposito()
    await this.getBancoCuenta()
    await this.getCorridasBancarias()
    this.loading = false
  },
  methods: {
    async exportToExcel() {
      var total=0
      const maximo=this.selectedLiq.length
      const selectedData = this.selectedLiq.reduce((acc, item, index, arr) => {
        // Agrega la fila actual al acumulador

       // Si el banco actual es diferente al anterior, agrega una fila vacía
        if (index > 0 && item.banco_nombre !== arr[index - 1].banco_nombre) {
          acc.push({MONTO: parseFloat(total)}); // Agrega una fila vacía
          acc.push({}); // Agrega una fila vacía

          total=0
        }        
        acc.push({
          BANCO: item.banco_nombre,
          CUENTA: item.banco_cuenta,
          FECHA: item.fecha,
          REFERENCIA: item.referencia,
          REFERENCIA_FINAL: item.referencia_complemento,
          DESCRIPCION: item.descripcion,
          MONTO: parseFloat(item.monto),
        });
        total=total+parseFloat(item.monto)     
        if (index+1 == maximo) {
          acc.push({MONTO: parseFloat(total)}); // Agrega una fila vacía
          acc.push({}); // Agrega una fila vacía
          total=0
        }  
        return acc;
      }, []);
      const selectedDataresumen = this.montocajaPorBancoData.map(item => ({
        // Replace these with the fields you want to include in your Excel file
        BANCO: item.banco_nombre + ' ' + item.banco_cuenta_corta,
        CUENTA: item.banco_cuenta,
        REFERENCIA: item.referencia,
        MONTO: parseFloat(item.monto),
        // Add more fields as needed
      }));
      const worksheet = XLSX.utils.json_to_sheet(selectedData);
      const worksheetresumen = XLSX.utils.json_to_sheet(selectedDataresumen);

      const montoColumn = worksheet['!ref'].split(':')[1].charCodeAt(0) - 65; // Obtén el índice de la columna

      // Asegúrate de que worksheet['!cols'] sea un arreglo
      if (!Array.isArray(worksheet['!cols'])) {
        worksheet['!cols'] = []; // Si no es un arreglo, inicialízalo como uno vacío
      }

      // Inserta el estilo de la columna "Monto" en el índice correcto
      worksheet['!cols'].splice(montoColumn, 0, {
        wch: 10, // Ajusta el ancho según sea necesario
        s: {
          font: { bold: true },
          numFmt: '#,##0.00' // Formato como número con dos decimales
        }
      });
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, 'detalle');
      XLSX.utils.book_append_sheet(workbook, worksheetresumen, 'resumen')
      XLSX.writeFile(workbook, `${this.observacion}.xlsx`);

    },
    async getCorridasBancarias() {
      try {
        //const response = await this.$axios.$get('corridasbancarias/?habilitado=True')
        const response = await this.$axios.$get('corridaancaria-sin-pago')
        this.corridasbancariasData = response
        //console.log('dataa',this.corridasbancariasData )
      } catch (err) {
        console.log(err);
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
    async saveEstado() {
      this.disableBoton = true
      //console.log('this.selectedLiq', this.selectedLiq)
      for (const divLiq of this.selectedLiq) {
        const formDataNew = new FormData()
        formDataNew.append('habilitado', false)
        formDataNew.append('observaciones', this.observacion)
        try {
          const res = await this.$axios.$patch('corridasbancarias/' + divLiq.id + '/', formDataNew);
          console.log(res)
        } catch (err) {
          console.log(err);
        }
      }
      console.log('1')
      this.divs = []
      this.fechaFormateada = moment(this.nuevaFecha).format('YYYY-MM-DD HH:mm:ss')
      this.fechapago = this.fechaFormateada
      for (const divLiq of this.montocajaPorBancoData) {

        this.divs.push({
          tipopago: this.tipopagoDataDeposito.codigo,
          bancocuenta: divLiq.bancocuenta,
          fechapago: this.fechapago,// Formato ISO para la fecha
          nro_aprobacion: '',
          nro_lote: '',
          nro_referencia: divLiq.referencia,
          corridasbancarias: null,
          monto: divLiq.monto,
        })
      }
      //console.log('2', this.divs)
      const data3 = {
        liquidacion: null,
        propietario: null,
        observacion: this.observacion,
        monto: this.montocaja,
        monto_cxc: this.montocaja,
        caja: this.$store.getters.getUser.caja,
        detalle: this.divs
      }
      //console.log('3', data3)
      try {
        this.loading = true
        //console.log('data3', data3)
        const res = await this.$axios.$post('crearPago/', data3);
        console.log(res)
        this.loading = false
        this.$alert("success", { desc: "Se ha creado la trasaccion con éxito", hash: 'knsddcssdc', title: 'Creado' })
      } catch (err) {
        console.log(err);
      }
      this.exportToExcel()
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

    async editItem() {
      //console.log('selectedLiq',this.selectedLiq)
      this.montocaja = this.selectedLiq.reduce((total, item) => total + parseFloat(item.monto), 0);
      this.montocajaPorBanco = this.selectedLiq.reduce((total, item) => {
        // Si el banco ya existe en el objeto total, suma el monto
        if (total[item.bancocuenta]) {
          total[item.bancocuenta].monto += parseFloat(item.monto);
        } else {
          // Si el banco no existe, crea una nueva entrada en el objeto total
          //total[item.bancocuenta] = parseFloat(item.monto);
          total[item.bancocuenta] = {
            banco_nombre: item['banco_nombre'], // Asegúrate de que 'nombre banco' sea el nombre correcto de la propiedad
            banco_cuenta_corta: item['banco_cuenta_corta'],
            banco_cuenta: item['banco_cuenta'],
            monto: parseFloat(item.monto),
          };
        }
        return total;
      }, {});
      const fechaActual = new Date();
      const dia = fechaActual.getDate().toString().padStart(2, '0');
      const mes = (fechaActual.getMonth() + 1).toString().padStart(2, '0'); // Se suma 1 porque los meses empiezan en 0
      const año = fechaActual.getFullYear();
      this.montocajaPorBancoData = Object.entries(this.montocajaPorBanco).map(([bancocuenta, datos]) => ({
        bancocuenta: parseInt(bancocuenta),
        banco_nombre: datos.banco_nombre,
        banco_cuenta_corta: datos.banco_cuenta_corta,
        banco_cuenta: datos.banco_cuenta,
        referencia: datos.banco_cuenta_corta + dia + mes + año,
        monto: (datos.monto).toFixed(2)
      }));
      //console.log('montocaja',this.montocaja)     
      //console.log('montocajaPorBanco', this.montocajaPorBanco)
      //console.log('montocajaPorBancoData', this.montocajaPorBancoData)
      this.dialog_editar = true
      //this.exportToExcel()

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
      //console.log('permiso: 1 si , 0 no:', this.permido.filter(permido => permido.modulo.toLowerCase().includes(this.modulo)).length);
      if (this.permido.filter(permido => permido.modulo.toLowerCase().includes(this.modulo)).length) {
        //console.log('leer:', (this.permido.filter(permido => permido.modulo.toLowerCase().includes(this.modulo)))[0].leer);
        this.accesos = (this.permido.filter(permido => permido.modulo.toLowerCase().includes(this.modulo)))[0]
        //console.log('this.accesos', this.accesos.borrar)
      } else {
        this.$router.push('index')
        this.$alert("cancel", { desc: "No está autorizado para accesar a este módulo!!!", hash: 'knsddcssdc', title: 'Error' })
      }
    },

    async getTipoPagoDeposito() {
      try {
        const response = await this.$axios.$get(`tipopago/?codigo=15`) // TRANSFERENCIAS NO RECAUDADAS
        this.tipopagoDataDeposito = response[0]
        //console.log('this.tipopagoDataDeposito', this.tipopagoDataDeposito.id)
      } catch (err) {
        console.log(err);
      }
    },
  }
};
</script>


<style src="~/assets/styles/pages/modificar-datos.scss" lang="scss" />