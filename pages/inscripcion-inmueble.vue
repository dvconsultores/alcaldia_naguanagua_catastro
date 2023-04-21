<template>
  <div class="center no-padding divcol" style="margin-bottom:20px; padding-left: 256px;">
    <section class="section1-descripcion-inmueble">
      <div class="creacion-container">
        <p class="title-inscripcion-inmueble">
          Creación de estado de solicitud
        </p>

        <hr>

        <div v-for="(item,index) in dataCreacion" :key="index" class="container-creacion-datos">
          <div class="title-description-div">
            <p class="nombre-razon">
              Nro. Recibo
            </p>

            <p class="nombre-desc">
              {{item.nro_recibo}}
            </p>
          </div>

          <div class="title-description-div">
            <p class="nombre-razon">
              Fecha
            </p>

            <p class="nombre-desc">
              {{ item.fecha }}
            </p>
          </div>

          <div class="title-description-div">
            <p class="nombre-razon">
              Propietario
            </p>

            <p class="nombre-desc">
              {{item.propietario}}
            </p>
          </div>

          <div class="title-description-div">
            <p class="nombre-razon">
              CI / RIF / Pasaporte
            </p>

            <p class="nombre-desc">
              {{item.id_type}} - {{item.id_number}}
            </p>
          </div>
        </div>
      </div>

      <div class="observaciones-container">
        <div class="jspace" style="width: 100%; padding-top: 20px; margin-bottom: 10px;">
          <p class="title-observaciones">
            Observaciones
          </p>

          <v-btn class="btn-mas" @click="show_observaciones = true">
            +
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

    <section class="section2-inscripcion-inmueble">
      <div class="descripcion-container">
        <div class="title-morado">
          <p class="solicitud-title">
            Descripción de la solicitud
          </p>

          <p class="solicitud-title">
            Monto total: {{ monto_total }}
          </p>
        </div>

        <v-btn class="btns-add-remove no-shadow" @click="addDiv(index)">
          +
        </v-btn>

        <div v-for="(div,index) in divs" :key="index" class="solicitud-inputs-container">
          <span style="display:none;">{{ div.icon }}</span>

          <v-autocomplete
          class="big-autocomplete mobile-inputs"
          label="Tasa / Multa"
          ></v-autocomplete>

          <v-text-field
          class="small-input mobile-inputs"
          label="Monto UT"
          ></v-text-field>

          <v-text-field
          class="small-input mobile-inputs"
          label="Cantidad"
          ></v-text-field>

          <v-text-field
          class="small-input mobile-inputs"
          label="Total"
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
    }
  },

  head() {
    const title = 'Inscripcion Inmueble';
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

<style src="~/assets/styles/pages/inscripcion-inmueble.scss" lang="scss" />