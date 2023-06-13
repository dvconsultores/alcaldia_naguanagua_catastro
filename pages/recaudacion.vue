<template>
  <div class="center no-padding divcol" style="margin-bottom:20px; padding-left: 256px;">
    <section class="section1-recaudacion">
      <div class="impuestos-container">
        <p class="title-modificar">
          Impuestos Pendientes por Recaudar
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
              {{JSON.parse(JSON.stringify(this.$store.getters.getContribuyente.nombre))}}
            </p>
          </div>

          <div class="title-description-div">
            <p class="nombre-razon">
              CI / RIF / Pasaporte
            </p>

            <p class="nombre-desc">
              {{JSON.parse(JSON.stringify(this.$store.getters.getContribuyente.nacionalidad))}} - {{JSON.parse(JSON.stringify(this.$store.getters.getContribuyente.numero_documento))}}
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="section2-recaudacion">
      <div class="impuestos-tasa-container">
        <div class="jspace center">
          <p class="title-impuestos-tasa">
            Impuestos por Liquidar
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
      <section class="section1-descripcion-inmueble">
        <div class="propietario-container">
          <div class="absolute-line"></div>

          <div class="container-datos-contribuyente">
            <div class="title-description-div">
              <p class="nombre-razon">
                Nombre / Razón Social
              </p>

              <p class="nombre-desc">
                {{JSON.parse(JSON.stringify(this.$store.getters.getContribuyente.nombre))}}
              </p>
            </div>

            <div class="title-description-div">
              <p class="nombre-razon">
                CI / RIF / Pasaporte
              </p>

              <p class="nombre-desc">
                {{JSON.parse(JSON.stringify(this.$store.getters.getContribuyente.nacionalidad))}} - {{JSON.parse(JSON.stringify(this.$store.getters.getContribuyente.numero_documento))}}
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
              Impuestos por tasas
            </p>

            <p v-if="selectedItem && selectedItem.monto_total" class="impuestos-title" style="--fw: 500; font-size: 16px;">
              Total: {{ selectedItem.monto_total }}
            </p>
          </div>

          <div v-if="selectedItem && selectedItem.numero && selectedItem.tipoflujo.descripcion && selectedItem.fecha && selectedItem.monto_total" class="solicitud-inputs-container">
            <v-text-field
            v-model="selectedItem.numero"
            class="small-input"
            label="#N ."
            ></v-text-field>

            <v-text-field
            v-model="selectedItem.tipoflujo.descripcion"
            class="big-input"
            label="Concepto"
            ></v-text-field>

            <v-text-field
            v-model=selectedItem.fecha
            class="big-input"
            label="Fecha"
            ></v-text-field>

            <v-text-field
            v-model="selectedItem.monto_total"
            class="small-input"
            label="Monto Total"
            ></v-text-field>
          </div>
        </div>

        <div class="descripcion-container">
          <div class="title-morado">
            <p class="solicitud-title">
              Tipo de pago
            </p>

            <p class="solicitud-title">
              Monto total: {{ montoTotal() }}
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
            item-value="id"
            ></v-autocomplete>

            <v-autocomplete
            v-model="div.bancocuenta"
            class="small-input mobile-inputs"
            label="Banco"
            :items="bancoCuentaData"
            item-text="numero"
            item-value="id"
            ></v-autocomplete>

            <v-text-field
            v-model="div.referencia"
            class="small-input mobile-inputs"
            label="Nro. Referencia"
            ></v-text-field>

            <v-menu
            v-model="menu"
            :close-on-content-click="false"
            :nudge-right="5"
            transition="scale-transition"
            offset-y
            min-width="auto"
            >
              <template #activator="{ on, attrs }">
                <v-text-field
                v-model="div.fecha"
                class="small-input mobile-inputs"
                label="Fecha"
                append-icon="mdi-calendar"
                readonly
                v-bind="attrs"
                v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="div.fecha"
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
            ></v-text-field>

            <v-btn class="btns-add-remove"  @click="removeDiv(index)">
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
      tipoPagoData:[],
      bancoCuentaData:[],
      openDialog: false,
      show_observaciones: false,
      bancoData:["Banesco", "Mercantil", "Provincial"],

      divs:[
        {
          tipopago: null,
          bancocuenta: null,
          referencia: '',
          fechapago: null,
          monto: 0,
        },
      ]
    }
  },

  head() {
    const title = 'Recaudacion';
    return {
      title,
    }
  },

  mounted(){
    this.getLiquidacionPropietario()
    this.getTipoPago()
    this.getBancoCuenta()
  },  

  methods: {
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
      return total.toFixed(2)
    },

    addDiv(){
      this.divs.push({monto: 0})
    },  

    removeDiv(index) {
      this.divs.splice(index, 1)
    },

    formatoFecha() {
      if (this.fecha) {
        this.fechaFormateada = moment(this.nuevaFecha).format('YYYY-MM-DD HH:mm:ss')
        this.fecha = this.fechaFormateada
      }
    },

    createPago(){
      this.montoTotalSelectedItem = this.selectedItem ? this.selectedItem.monto_total : null
      this.montoTotalFunc = this.montoTotal()

      if(this.montoTotalSelectedItem !== null && this.montoTotalSelectedItem === this.montoTotalFunc){
          const data = {
          liquidacion: this.selectedItem.id,
          propietario: this.$store.getters.getContribuyente.id,
          observacion: this.selectedItem.observaciones != null ? this.selectedItem.observaciones : '',
          monto: this.montoTotal(),
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
        this.$alert("success", {desc: 'El "Monto Total" y el "Total" debe coincidir', hash: 'knsddcssdc', title:'Alerta'}) 
      }
    },
  }
}

</script>


<style src="~/assets/styles/pages/recaudacion.scss" lang="scss" />