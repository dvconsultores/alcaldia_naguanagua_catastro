<template>
  <div class="center no-padding divcol" style="margin-bottom:20px; padding-left: 256px;">
    <section class="section1-recaudacion">
      <div class="impuestos-container">
        <p class="title-modificar">
          Trámites o servicios pendientes por recaudar
        </p>
      </div>

      <div class="datos-contribuyente-container">
        <div class="container-morado">
          <span>
            Datos del Contribuyente
          </span>
        </div>

        <div
        class="absolute-line"
        ></div>

        <div class="container-datos-contribuyente">
          <div class="title-description-div">
            <p class="nombre-razon">
              Nombre / Razón Social
            </p>

            <p class="nombre-desc">
              {{nombrecontribuyente}}
            </p>
          </div>

          <div class="title-description-div">
            <p class="nombre-razon">
              CI / RIF / Pasaporte
            </p>

            <p class="nombre-desc">
              {{nacionalidadcontribuyente}} - {{numero_documento}}
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="section2-recaudacion">
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
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="Buscar"
              hide-details
              class="input-data-table"
            ></v-text-field>

            <v-data-table
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
            >
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
    
    <v-dialog 
      v-model="openDialog" 
      transition="dialog-bottom-transition"
      fullscreen
      scrollable
      content-class="dialog-recaudacion"
      >
      <div class="div-dialog">
        <section class="section1-descripcion-inmueble">
          <div class="propietario-container">
            <div class="absolute-line"></div>

            <div class="container-datos-contribuyente">
              <div class="title-description-div">
                <p class="nombre-razon">
                  Nombre / Razón Social
                </p>

                <p class="nombre-desc">
                  {{nombrecontribuyente}}
                </p>
              </div>

              <div class="title-description-div">
                <p class="nombre-razon">
                  RIF
                </p>

                <p class="nombre-desc">
                  {{nacionalidadcontribuyente}} - {{numero_documento}}
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

              <v-btn class="btn-mas" v-if="show_observaciones === true " @click="show_observaciones = false">
                -
              </v-btn>
            </div>

            <hr>

            <div v-if="show_observaciones === true" class="center" style="width: 100%; margin-bottom: 30px;">
              <v-textarea
              class="textarea"
              v-model="selectedItem.observaciones"
              ></v-textarea>
            </div>
          </div>

          <div class="descripcion-impuestos">
            <div class="title-morado">
              <p class="impuestos-title">
                Documento a cancelar
              </p>

              <p v-if="selectedItem && selectedItem.monto_total" class="impuestos-title" style="--fw: 500; font-size: 16px;">
                Total: {{ selectedItem.monto_total }}
              </p>
            </div>

            <div v-if="selectedItem && selectedItem.numero && selectedItem.tipoflujo.descripcion && selectedItem.fecha && selectedItem.monto_total" class="solicitud-inputs-container">
              <v-text-field
              v-model="selectedItem.numero"
              class="small-input"
              label="# Liquidación"
              :readonly="true"
              ></v-text-field>

              <v-text-field
              v-model="selectedItem.tipoflujo.descripcion"
              class="big-input"
              label="Concepto"
              :readonly="true"
              ></v-text-field>

              <v-text-field
              v-model=selectedItem.fecha
              class="big-input"
              label="Fecha"
              :readonly="true"
              ></v-text-field>

              <v-text-field
              v-model="selectedItem.monto_total"
              class="small-input"
              label="Monto Total"
              :readonly="true"
              ></v-text-field>
            </div>
          </div>

          <div class="descripcion-container">
            <div class="title-morado">
              <p class="solicitud-title">
                Tipos de pago
              </p>

              <p class="solicitud-title">
                Total pagado: {{ montoTotal() }}
              </p>
            </div>

            <v-btn class="btns-add-remove no-shadow" @click="addDiv(index)">
              +
            </v-btn>

            <div v-for="(div,index) in divs" :key="index" class="solicitud-inputs-container">
              <v-autocomplete
              v-model="div.tipopago"
              class="small-input mobile-inputs"
              label="Tipo de Pago"
              :items="tipoPagoData"
              item-text="descripcion"
              item-value="codigo"
              @change="getcodigoTipoPago"
              :disabled="div.bloqueado"
              ></v-autocomplete>



              <v-menu
              v-model="menu"
              :close-on-content-click="false"
              :nudge-right="5"
              transition="scale-transition"
              offset-y
              min-width="auto"
              :disabled="div.bloqueado"
              >
                <template #activator="{ on, attrs }">
                  <v-text-field
                  v-model="div.fechapago"
                  class="small-input mobile-inputs"
                  label="Fecha"
                  append-icon="mdi-calendar"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker
                  v-model="div.fechapago"
                  label="Fecha"
                  @input="formatoFecha()"
                  color="blue"
                  header-color="#810880"
                  class="custom-date-picker"
                ></v-date-picker>
              </v-menu>

              <v-text-field
              v-model="div.monto"
              class="small-input mobile-inputs"
              label="Monto"
              :disabled="div.bloqueado"
              ></v-text-field>

              <v-autocomplete
              v-model="div.bancocuenta"
              class="small-input mobile-inputs"
              :label="div.tipopago !== 'T' && div.tipopago !== 'D' ? '' : 'Banco'"
              :items="bancoCuentaData"
              item-text="banco_nombre"
              item-value="id"
              :disabled="(div.tipopago!=='T' && div.tipopago!=='D') ||div.bloqueado"
              ></v-autocomplete>

              <v-text-field
              v-model="div.nro_referencia"
              class="small-input mobile-inputs"
              :label="div.tipopago !== 'T' && div.tipopago !== 'D'  && div.tipopago!=='N' ? '' : 'Nro. Referencia'"
              :disabled="(div.tipopago!=='T' && div.tipopago!=='D' && div.tipopago!=='N') ||div.bloqueado"
              ></v-text-field>
              <v-text-field

              v-model="div.nro_lote"
              class="small-input mobile-inputs"
              :label="div.tipopago!=='D'  ? '' : 'Nro. lote'"
              :disabled="div.tipopago!=='D' ||div.bloqueado"
              ></v-text-field>

              <v-text-field
              v-model="div.nro_aprobacion"
              class="small-input mobile-inputs"
              :label="div.tipopago!=='D'  ? '' : 'Nro. aprobación'"
              :disabled="div.tipopago!=='D' ||div.bloqueado"
              ></v-text-field> 


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

export default{
  name: "RecaudacionPage",
  mixins:[computeds],
  data(){
    return{
      menu: false,
      search:'',
      headers: [
        { text: '#Nro', align: 'center', value: 'numero',},
        { text: 'Tipo de Flujo', value: 'tipoflujo.descripcion', align:'center' },
        { text: 'Fecha', value: 'fecha', align:'center' },
        { text: 'Total', value: 'monto_total', align:'center' },
        { text: '', value: 'actions', sortable: false, align:'center' },
      ],
      liquidacionData:[],
      NotaCreditoData:[],
      tipoPagoData:[],
      bancoCuentaData:[],
      openDialog: false,
      show_observaciones: false,
      bancoData:["Banesco", "Mercantil", "Provincial"],
      PagoId: null,
      diferencia:0,

      divs:[{
            tipopago: null,
            bancocuenta: null,
            fechapago: new Date().toISOString().substr(0, 10) ,// Formato ISO para la fecha
            nro_aprobacion: '',
            nro_lote: '',
            nro_referencia: '',
            monto: 0,
          }],

      nombrecontribuyente:this.$store.getters.getContribuyente=='Sin Seleccionar' ?'':JSON.parse(JSON.stringify(this.$store.getters.getContribuyente.nombre)),
      nacionalidadcontribuyente:this.$store.getters.getContribuyente=='Sin Seleccionar' ?'':JSON.parse(JSON.stringify(this.$store.getters.getContribuyente.nacionalidad)),
      numero_documento: this.$store.getters.getContribuyente=='Sin Seleccionar'?'':JSON.parse(JSON.stringify(this.$store.getters.getContribuyente.numero_documento)),
    }
  },
  head() {
    const title = 'Recaudacion';
    return {
      title,
    }
  },

  mounted(){
    this.redireccionIdVacio()
    this.getLiquidacionPropietario()
    this.getTipoPago()
    this.getBancoCuenta()
    //this.getNotaCredito()
  },  

  methods: {
    getNotaCredito(){
      this.$axios.$get('notacredito/?saldo_gt=0&propietario=' + this.$store.getters.getContribuyente.id).then(response => {
      if (response){
        this.NotaCreditoData= response[0]

        this.$alert("success", {desc: "El contribuyente posee la N/C Nro: "+ this.NotaCreditoData.numeronotacredito+" con saldo de Bs. "+
        parseFloat(this.NotaCreditoData.saldo)   , hash: 'knsddcssdc', title:'Nota de crédito.'}) 

        console.log(this.NotaCreditoData.saldo , this.selectedItem.monto_total )
        this.divs=[]

        this.divs.push({
            tipopago: 'N',
            fechapago: new Date().toISOString().substr(0, 10) ,// Formato ISO para la fecha
            nro_referencia:this.NotaCreditoData.numeronotacredito,
            monto:  parseFloat(this.NotaCreditoData.saldo) <  parseFloat(this.selectedItem.monto_total) ?  parseFloat(this.NotaCreditoData.saldo) :  parseFloat(this.selectedItem.monto_total) , 
            bloqueado: true,
            bancocuenta: null,
            nro_aprobacion: '',
            nro_lote: ''
          });
      }
      else{
        this.divs.push({
            tipopago: null,
            bancocuenta: null,
            fechapago: new Date().toISOString().substr(0, 10) ,// Formato ISO para la fecha
            nro_aprobacion: '',
            nro_lote: '',
            nro_referencia: '',
            monto: 0,
            bloqueado: false,
          });

      }
      }).catch(err => {
        console.log(err)
      })
    },


    redireccionIdVacio(){
      if(this.$store.getters.getContribuyente=='Sin Seleccionar'){
        this.$router.push('modificar-datos')
        this.$alert("cancel", {desc: "Debe seleccionar un contribuyente para ingresar a este módulo", hash: 'knsddcssdc', title:'Error'})
      }else{
        ''
      }
    },

    getLiquidacionPropietario(){
      this.$axios.$get('liquidacion/?habilitado=true&propietario=' + this.$store.getters.getContribuyente.id).then(response => {
        this.liquidacionData = response
        console.log(this.liquidacionData, 'dataa')
      
      }).catch(err => {
        console.log(err)
      })
    },

    getLiquidacionId(item) {
      this.selectedItem = item

      this.$axios.$get(`liquidacion/${item.id}`).then(response => {
        this.liquidacionIdData = response
        console.log(this.liquidacionIdData,'ID Liquidacion')
        this.openDialog = true
        this.getNotaCredito()

      }).catch(error => {
        console.error(error);
      })
    },

    getTipoPago(){
      this.$axios.$get('tipopago').then(response => {
        this.tipoPagoData = response
      }).catch(error => {
        console.log(error)
      })
    },

    getBancoCuenta(){
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
        }
      }
      return total
    },

    addDiv(){
      console.log('lelele',this.selectedItem.monto_total , this.montoTotal())
      if(this.montoTotal()  < this.selectedItem.monto_total) {  
        this.divs.push({
          monto: 0,
          fechapago: new Date().toISOString().substr(0, 10) ,// Formato ISO para la fecha
          bloqueado: false,
        })
      }
    },  

    removeDiv(index) {
      this.divs.splice(index, 1)
    },

    formatoFecha() {
      if (this.fechapago) {
        this.fechaFormateada = moment(this.nuevaFecha).format('YYYY-MM-DD HH:mm:ss')
        this.fechapago = this.fechaFormateada
      }
    },

    createPago(){
      this.montoTotalSelectedItem = this.selectedItem ? this.selectedItem.monto_total : null
      this.montoTotalSelectedItem = parseFloat(this.montoTotalSelectedItem)
      this.montoTotalFunc = this.montoTotal()
      this.diferencia=this.montoTotalSelectedItem-this.montoTotalFunc

      if(this.montoTotalSelectedItem !== null && parseFloat(this.montoTotalSelectedItem) <= this.montoTotalFunc){
          const data = {
          liquidacion: this.selectedItem.id,
          propietario: this.$store.getters.getContribuyente.id,
          observacion: this.selectedItem.observaciones != null ? this.selectedItem.observaciones : '',
          monto: this.montoTotal(),
          monto_cxc: this.montoTotalSelectedItem ,
          caja: this.$store.getters.getUser.caja,
          detalle: this.divs,
        }
        this.$axios.$post('crearPago/', data).then(res => {
          console.log(res)
          this.$router.push('modificar-datos')
          this.$alert("success", {desc: "Se ha registrado un pago con éxito", hash: 'knsddcssdc', title:'Creado'}) 
        }).catch(err =>{
          console.log(err)
        })
      }else{
        this.$alert("success", {desc: 'El pago es menor al total por cobrar.', hash: 'knsddcssdc', title:'Alerta'}) 
      }
    },
  }
}

</script>


<style src="~/assets/styles/pages/recaudacion.scss" lang="scss" />