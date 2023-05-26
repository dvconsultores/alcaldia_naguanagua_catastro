<template>
  <div class="center no-padding divcol" style="margin-bottom:20px; padding-left: 256px;">
    <section class="section1-descripcion-inmueble">
      <div class="creacion-container">
        <p class="title-inscripcion-inmueble">
          Creación de estado de solicitud
        </p>

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
              {{nombrePropietario}}
            </p>
          </div>

          <div class="title-description-div">
            <p class="nombre-razon">
              CI / RIF / Pasaporte
            </p>

            <p class="nombre-desc">
              {{nacionalidadPropietario}} - {{cedulaPropietario}}
            </p>
          </div>
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
          v-model="estadoCuentaData.observaciones"
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
            Monto total: {{ resultado }}
          </p>
        </div>

        <v-btn class="btns-add-remove no-shadow" @click="addDiv(index)">
          +
        </v-btn>

        <div v-for="(div,index) in divs" :key="index" class="solicitud-inputs-container">
          <span style="display:none;">{{ div.icon }}</span>

          <v-autocomplete
          v-model="estadoCuentaDetalleData"
          class="big-autocomplete mobile-inputs"
          label="Tasa / Multa"
          :items="tasaMultaData"
          item-text="descripcion"
          item-value="id"
          @change="selectedField"
          ></v-autocomplete>

          <v-text-field
          class="small-input mobile-inputs"
          label="Monto UT"
          disabled
          v-model="monto_unidad_tributaria"
          ></v-text-field>

          <v-text-field
          class="small-input mobile-inputs"
          label="Cantidad"
          v-model="valor2"
          ></v-text-field>

          <v-text-field
          class="small-input mobile-inputs"
          label="Total"
          :value="resultado" 
          disabled
          ></v-text-field>

          <v-btn class="btns-add-remove"  @click="removeDiv(index)">
            <v-icon>mdi-delete</v-icon>
          </v-btn>
        </div>

        <hr>

        <div class="divrow center div-btns" style="gap:30px;">

          <v-dialog v-model="dialog_exito" persistent class="dialog-exito">
            <template #activator="{attrs, on}">
              <v-btn class="btn size-btn" v-bind="attrs" v-on="on" @click="dialog_exito = true">
                Guardar
              </v-btn>
            </template>
            <v-card class="card-dialog-exito">
              <v-icon @click="dialog_exito = false">mdi-close</v-icon>
              <p class="p-dialog">¡La inscripción del inmueble se ha guardado con éxito!</p>
            </v-card>
          </v-dialog>

          <v-btn class="btn size-btn" style="background-color:#ED057E!important;">
            Cancelar
          </v-btn>
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

      divs:[{icon:""}],

      propietarioData:[],
      tasaData:[],
      estadoCuentaData:[],
      estadoCuentaDetalleData:[],
      correlativoData:[],
      tasaMultaData:[],
    }
  },

  head() {
    const title = 'Inscripcion Inmueble';
    return {
      title,
    }
  },

  mounted(){
    this.getDataPropietarios()
    this.getDataTasa()
    this.getEstadoCuenta()
    this.getEstadoCuentaDetalle()
    this.getCorrelativo()
    this.getTasaMulta()
  },

  computed: {
    resultado(){
      if (this.monto_unidad_tributaria && this.valor2) {
        return parseFloat(this.monto_unidad_tributaria) * parseFloat(this.valor2);
      } else {
        return null;
      }
    }
  },

  methods: {
    selectedField(data){
      console.log(data)
      var tasa_encontrada = this.tasaMultaData.find(tasa => 
        data === tasa.id
      )
      
      this.monto_unidad_tributaria = tasa_encontrada.unidad_tributaria
      console.log(tasa_encontrada, this.estadoCuentaDetalleData)
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

    getEstadoCuentaDetalle(){
      this.$axios.$get('estadocuentadetalle').then(response => {
        this.estadoCuentaDetalleData = response
      }).catch(err => {
        console.log(err)
      })
    },

    getEstadoCuenta(){
      this.$axios.$get('estadocuenta').then(response => {
        this.estadoCuentaData = response
        this.nombrePropietario = this.propietarioData[0].nombre
        this.cedulaPropietario = this.propietarioData[0].numero_documento
        this.nacionalidadPropietario = this.propietarioData[0].nacionalidad
      }).catch(err => {
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

    getDataPropietarios(){
      this.$axios.$get('propietario').then(response => {
        this.propietarioData = response
        if (this.propietarioData.length > 0) {
        // Acceder al objeto número uno (índice 0) y asignar las propiedades deseadas
        this.nombrePropietario = this.propietarioData[0].nombre;
        this.cedulaPropietario = this.propietarioData[0].numero_documento;
        this.nacionalidadPropietario = this.propietarioData[0].nacionalidad;
        }
      }).catch(err => {
        console.log(err)
      })
    },

    addDiv(){
      this.divs.push({});
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