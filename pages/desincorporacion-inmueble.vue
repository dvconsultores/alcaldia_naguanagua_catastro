<template>
  <div class="center no-padding divcol" style="margin-bottom:20px; padding-left: 256px;">
    <section class="section1-desincorporacion-inmueble">
      <div class="desincorporacion-inmueble-container">
        <p class="title-desincorporacion">
          Datos de la Desincorporación
        </p>

        <hr>

        <div class="fecha-autocomplete-container">
          <div class="fecha-container">
            <span>
              Fecha
            </span>

            <span class="fecha-number">
              03/03/2023
            </span>
          </div>

          <v-autocomplete
          label="Tipo"
          :items="items"
          class="autocomplete-field"
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
          ></v-textarea>
        </div>
      </div>
    </section>

    <section class="section2-desincorporacion-inmueble">
      <div class="propietarios-inmueble-container">
        <div class="title-morado">
          <p class="propietarios-title">
            Propietarios del inmueble
          </p>
        </div>

        <v-btn class="btns-add-remove no-shadow" @click="addDiv(index)">
          +
        </v-btn>

        <div v-for="(div,index) in divs" :key="index" class="desincorporacion-inputs-container">

          <v-text-field
          class="big-input mobile-inputs"
          label="Nombre / Razon Social"
          :value="div.nombre"
          ></v-text-field>

          <v-text-field
          class="big-input mobile-inputs"
          label="Cedula/RIF/Pasaporte"
          :value="div.id_number"
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
  name: "DesincorporacionInmueblePage",
  mixins:[computeds],
  data(){
    return{
      dialog_exito: false,
      divs:[
        {
          nombre:"Maria Pera C.",
          id_number:"V - 12.345.678"
        }
      ],
      show_observaciones: false,
      items:["Venta de Inmueble", "Traspaso de Inmueble", "Sucesión de Propiedad", "Demolición","Integración", "Actualización de Documentos", "Aporte a Capital", "Cesión de Propiedad", "Anulado", "---", "Duplicado", "División"],
    }
  },

  head() {
    const title = 'Desincorporacion Inmueble';
    return {
      title,
    }
  },

  methods: {
    addDiv(){
      this.divs.push({});
    },  

    removeDiv(index) {
      this.divs.splice(index, 1);
    }
  }
}

</script>


<style src="~/assets/styles/pages/desincorporacion-inmueble.scss" lang="scss" />