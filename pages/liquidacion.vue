<template>
  <div class="center no-padding divcol" style="margin-bottom:20px; padding-left: 256px;">
    <section class="section1-liquidacion">
      <div class="datos-contribuyente-container">
        <div class="title-morado">
          <p class="contribuyente-datos">
            Datos del Contribuyente
          </p>
        </div>

        <div class="datos-btns-contribuyente">
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

          <!-- <v-card class="cards-liquidacion">
            <v-icon class="icon-card">
              mdi-transfer-down
            </v-icon>
            <span class="title-card">
              Liquidación de Inmueble
            </span>
          </v-card> -->

          <!-- <v-card class="cards-liquidacion">
            <v-icon class="icon-card">
              mdi-gavel
            </v-icon>
            <span class="title-card">
              Liquidación directa
            </span>
          </v-card> -->
        </div>
      </div>

      <div class="inmuebles-asociados-container">
        <div class="jspace center">
          <p class="title-inmuebles-asociados">
            Estados de cuentas asociados al contribuyente
          </p>

          <p style="margin-bottom:0px;">
            Cant. total: {{ estadoCuentasData.length }}
          </p>
        </div>

        <hr>

        <div class="dataInmuebles-container divrow">
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
              :items="estadoCuentasData"
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
                <v-btn class="btn-liquidar" @click="getEstadoDetalles(item)">
                  <v-icon>mdi-file-check</v-icon>
                </v-btn>
              </template>
            </v-data-table>
          </div>

          <!-- <div class="inputs-container">
            <v-text-field 
            v-model="item.numero"
            class="medio-input mobile-input" 
            label="Numero de estado" 
            disabled
            ></v-text-field>

            <v-text-field v-if=(item.tipoflujo)
            v-model="item.tipoflujo.descripcion"
            class="medio-input mobile-input" 
            label="Tipo de estado" 
            disabled
            ></v-text-field>
            <v-text-field v-else
              class="medio-input mobile-input" 
              label="Tipo de estado"  
              v-model="sindatos"
              disabled
            ></v-text-field>
            <v-text-field 
            v-model="fechaFormateada"
            class="medio-input mobile-input" 
            label="Fecha" 
            disabled
            ></v-text-field>

            <v-text-field 
            v-model="item.monto_total"
            class="medio-input mobile-input" 
            label="Monto Total" 
            disabled
            ></v-text-field>
          </div>

          <v-btn class="btn-swap" @click="redireccionarLiquidacionInmuebleExistente(item.id)">
            <v-icon>mdi-file-check</v-icon>
          </v-btn> -->
        </div>
      </div>
    </section>

    <v-dialog 
      v-model="openDialog" 
      fullscreen
      transition="dialog-bottom-transition"
      scrollable
      >
      <v-card class="card-liquidacion">
        <section class="section1-descripcion-inmueble">
        <div class="creacion-container">
          <div class="divrow jspace" style="width:100%;">
            <p class="title-inscripcion-inmueble">
              Creación de liquidación
            </p>

            <span class="title-inscripcion-inmueble">
              Tasa BCV: {{ montoBCV }}
            </span>
          </div>

          <hr>

          <div class="container-creacion-datos">
            <div class="title-description-div">
              <p class="nombre-razon">
                Nro. Recibo
              </p>

              <p class="nombre-desc">
                {{numeroCorrelativo}}
              </p>
            </div>

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

        <div class="flujo-container">
          <p class="title-inscripcion-inmueble">
            Seleccione el tipo de estado de cuenta 
          </p>

          <hr>

          <div class="center" style="width: 90%;">
            <v-autocomplete
            v-model="flujo"
            class="autocomplete-flujo"
            label="Tipo de Flujo"
            :items="flujoData"
            item-text="descripcion"
            item-value="id"
            ></v-autocomplete>
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
            v-model="observaciones"
            ></v-textarea>
          </div>
        </div>

        <!-- <div class="inmueble-existente-container">
          <div class="container-morado">
            <span>
              Estado de cuenta
            </span>
          </div>

          <div class="divrow center wrap" style="width:100%; gap: 30px; padding-inline:20px;">
            <v-text-field
            v-model="estadoData.estadocuenta.numero"
            disabled
            label="Nro. Expediente"
            class="big-textfield"
            ></v-text-field>

            <v-text-field
            v-model="estadoDataestado.tipoflujo.descripcion"
            disabled
            label="Direccion"
            class="small-textfield"
            ></v-text-field>
          </div>
        </div> -->
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

          <div v-for="(div,index) in divs" :key="index" class="solicitud-inputs-container">
            <v-autocomplete
            v-model="div.tasamulta"
            class="big-autocomplete mobile-inputs"
            label="Tasa / Multa"
            :items="tasaMultaData"
            item-text="descripcion"
            item-value="id"
            @change="selectedField(index)"
            ></v-autocomplete>

            <v-text-field
            class="small-input mobile-inputs"
            label="Monto UT"
            readonly
            v-model="div.monto_unidad_tributaria"
            ></v-text-field>

            <v-text-field
            v-model="div.cantidad"
            class="small-input mobile-inputs"
            label="Cantidad"
            @input="multiplicarValor(index)"
            ></v-text-field>

            <v-text-field
            v-model="div.monto_tasa"
            class="small-input mobile-inputs"
            label="Total"
            readonly
            ></v-text-field>

            <v-btn class="btns-add-remove"  @click="removeDiv(index)">
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
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import computeds from '~/mixins/computeds'
import moment from 'moment'

export default {
  name: "EstadoCuentaPage",
  mixins: [computeds],
  data() {
    return{
      search:'',
      flujoData:[],
      correlativoData:[],
      bcvData:[],
      openDialog: false,
      divs:[],
      estadoCuentasData: [],
      tasaMultaData:[],
      headers: [
        { text: '#Nro', align: 'center', value: 'numero',},
        { text: 'Tipo de Flujo', value: 'tipoflujo.descripcion', align:'center' },
        { text: 'Fecha', value: 'fecha', align:'center' },
        { text: 'Total', value: 'monto_total', align:'center' },
        { text: '', value: 'actions', sortable: false, align:'center' },
      ],

      show_observaciones: false,
    }
  },

  head() {
    const title = 'Estado de Cuenta';
    return {
      title,
    }
  },

  mounted(){
    this.getEstadosCuentas()
    this.getBCV()
    this.getCorrelativo()
    this.getFlujo()
    this.getTasaMulta()
  },

  computed:{
    fechaFormateada() {
      if (moment(this.estadoCuentasData.fecha).isValid()) {
        return moment(this.estadoCuentasData.fecha).format('YYYY-MM-DD')
      }
      return 'Fecha inválida'
    }
  },

  methods: {
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

    getTasaMulta(){
      this.$axios.$get('tasamulta').then(response => {
        this.tasaMultaData = response
      }).catch(err => {
        console.log(err)
      })
    },

    createLiquidacion(){
      const data = {
        estadocuenta: this.divs.estadocuenta.id,
        inmueble: this.divs.estadocuenta.inmueble,
        flujo: this.flujo,
        // correlativo: this.numeroCorrelativo,
        propietario: this.$store.getters.getContribuyente.id,
        observacion: this.observaciones,
        detalle: this.divs,
        monto_total: this.montoTotal()
      }
      this.$axios.$post('crearliquidacion/', data).then(res => {
        console.log(res)
        this.$router.push('modificar-datos')
        this.$alert("success", {desc: "Se ha creado una liquidacion con éxito", hash: 'knsddcssdc', title:'Creado'}) 
      }).catch(err =>{
        console.log(err)
      })
    },

    getFlujo(){
      this.$axios.$get('tipoflujo').then(response => {
        this.flujoData = response
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

    getCorrelativo(){
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

    addDiv(){
      this.divs.push({cantidad: 1, monto_tasa: 0});
    },  

    removeDiv(index) {
      this.divs.splice(index, 1);
    },

    getEstadoDetalles(item) {
      this.selectedItem = item

      this.$axios.$get(`estadocuentadetalle/?estadocuenta_id=${item.id}`).then(response => {
          this.divs = response
          console.log(this.divs,'jolaaa')
          this.openDialog = true

        }).catch(error => {
          console.error(error);
        })

        this.$axios.$get(`estadocuenta/?estadocuenta_id=${item.id}`).then(response => {
          this.idEstadoCuenta = response
          console.log(this.idEstadoCuenta,'idddddddd')

        }).catch(error => {
          console.error(error);
        })
    },

    // redireccionarLiquidacionInmuebleExistente(estadoId) {
    //   this.$router.push(`/liquidacion-inmueble-existente/${estadoId}`)
    // },

    getEstadosCuentas(){
      this.$axios.$get('estadocuenta/?propietario=' + this.$store.getters.getContribuyente.id).then(response => {
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