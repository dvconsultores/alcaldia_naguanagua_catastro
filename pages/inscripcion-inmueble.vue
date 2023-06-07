<template>
  <div class="center no-padding divcol" style="margin-bottom:20px; padding-left: 256px;">
    <section class="section1-descripcion-inmueble">
      <div class="creacion-container">
        <div class="divrow jspace" style="width:100%;">
          <p class="title-inscripcion-inmueble">
            Creación de estado de solicitud
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
        <div class="jspace" style="width: 100%; padding-top: 20px; margin-bottom: 10px;">
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
    </section>

    <section class="section2-inscripcion-inmueble">
      <div class="descripcion-container">
        <div class="title-morado">
          <p class="solicitud-title">
            Descripción de la solicitud
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
          v-model="div.tasa_multa_id"
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
          :value="1"
          ></v-text-field>

          <v-text-field
          v-model="div.calculo"
          class="small-input mobile-inputs"
          label="Total"
          readonly
          :value="0"
          ></v-text-field>

          <v-btn class="btns-add-remove"  @click="removeDiv(index)">
            <v-icon>mdi-delete</v-icon>
          </v-btn>
        </div>

        <hr>

        <div class="divrow center div-btns" style="gap:30px;">

          <v-btn class="btn size-btn" @click="createEstadoCuenta()">
            Guardar
          </v-btn>
          <!-- <v-dialog v-model="dialog_exito" persistent class="dialog-exito">
            <template #activator="{attrs, on}">
             
            </template>
            <v-card class="card-dialog-exito">
              <v-icon @click="dialog_exito = false">mdi-close</v-icon>
              <p class="p-dialog">¡La inscripción del inmueble se ha guardado con éxito!</p>
            </v-card>
          </v-dialog>

          <v-btn class="btn size-btn" style="background-color:#ED057E!important;">
            Cancelar
          </v-btn> -->
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import computeds from '~/mixins/computeds'

export default{
  name: "InscripcionInmueblePage",
  mixins: [computeds],
  data() {
    return{
      observaciones:'',
      nuevoRegistro: {},
      monto_unidad_tributaria: null,
      valor2:null,
      nombrePropietario: '',
      cedulaPropietario: '',
      nacionalidadPropietario: '',
      dialog_exito: false,
      monto_total:"72,4",
      show_observaciones: false,
      dataCreacion:[
        {
          nro_recibo:"1234567890",
          fecha:"03/03/2023",
          propietario:"María Pera C.",
          id_type:"V",
          id_number:"12.345.678"
        }
      ],

      divs:[
        {
          tasa_multa_id: null,
          monto_unidad_tributaria: null,
          cantidad: 1,
          calculo: 0,
        }
      ],

      propietarioData:[],
      tasaData:[],
      correlativoData:[],
      tasaMultaData:[],
      bcvData:[],
      flujoData:[],
    }
  },

  head() {
    const title = 'Inscripcion Inmueble';
    return {
      title,
    }
  },

  mounted(){
    this.getDataTasa()
    this.getCorrelativo()
    this.getTasaMulta()
    this.getBCV()
    this.getFlujo()
  },

  // computed: {
  //   resultado(){
  //     return this.montoTotal()
  //   },
  // },

  methods: {
    multiplicarValor(index) {
      const div = this.divs[index];
      if (div.cantidad !== null) {
        div.calculo = (div.monto_unidad_tributaria * div.cantidad * 60 * this.montoBCV).toFixed(2);
      }
    },

    getFlujo(){
      this.$axios.$get('tipoflujo').then(response => {
        this.flujoData = response
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
        if (div.calculo !== null) {
          total += parseFloat(div.calculo)
        }
      }
      return total.toFixed(2)
    },

    selectedField(index) {
      const div = this.divs[index]
      const tasa_encontrada = this.tasaMultaData.find(tasa => tasa.id === div.tasa_multa_id)
      div.monto_unidad_tributaria = tasa_encontrada.unidad_tributaria

      this.multiplicarValor(index)
    },

    getTasaMulta(){
      this.$axios.$get('tasamulta').then(response => {
        this.tasaMultaData = response
      }).catch(err => {
        console.log(err)
      })
    },

    getCorrelativo(){
      this.$axios.$get('correlativo').then(response => {
        this.correlativoData = response
        this.numeroCorrelativo = this.correlativoData[0].NumeroEstadoCuenta
      }).catch(err => {
        console.log(err)
      })
    },

    createEstadoCuenta(){
      const data = {
        flujo: this.flujo,
        correlativo: this.numeroCorrelativo,
        propietario: this.$store.getters.getContribuyente.id,
        observacion: this.observaciones,
        detalle: this.divs,
        monto_total: this.montoTotal()
      }
      this.$axios.$post('crearestadocuenta/', data).then(res => {
        console.log(res)
        this.$router.push('modificar-datos')
        this.$alert("success", {desc: "Se ha creado un estado de cuenta con éxito", hash: 'knsddcssdc', title:'Creado'}) 
      }).catch(err =>{
        console.log(err)
      })
    },

    getDataTasa (){
      this.$axios.$get('tasamulta').then(response => {
        this.tasaData = response
      }).catch(err => {
        console.log(err)
      })
    },

    addDiv(){
      this.divs.push({cantidad: 1, calculo: 0});
    },  

    removeDiv(index) {
      this.divs.splice(index, 1);
    },

    obtenerFechaActual() {
      const fecha = new Date();
      const dia = fecha.getDate().toString().padStart(2, '0');
      const mes = (fecha.getMonth() + 1).toString().padStart(2, '0');
      const anio = fecha.getFullYear().toString().slice(-2);
      return `${dia}/${mes}/${anio}`;
    }
  }
}
</script>

<style src="~/assets/styles/pages/inscripcion-inmueble.scss" lang="scss" />