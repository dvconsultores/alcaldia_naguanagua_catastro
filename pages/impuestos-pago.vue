<template>
  <div class="center no-padding divcol" style="margin-bottom:20px; padding-left: 256px;">
    <section class="section1-impuestos-pagos">
      <div v-for="(item,index) in datosPropietario" :key="index" class="propietario-container">
        <div class="container-blanco">
          <span>
            Propietario
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
              {{item.nombre}}
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

      <div class="descripcion-impuestos">
        <div class="title-morado">
          <p class="impuestos-title">
            Impuestos por tasas
          </p>

          <p class="impuestos-title" style="--fw: 300; font-size: 16px;">
            Total: {{ monto_total }}
          </p>
        </div>

        <div v-for="(item,index) in impuestosDescripcion" :key="index" class="solicitud-inputs-container">

          <v-text-field
          class="small-input"
          label="#N ."
          :value="item.nro"
          ></v-text-field>

          <v-text-field
          class="big-input"
          label="Concepto"
          :value="item.concepto"
          ></v-text-field>

          <v-text-field
          class="small-input"
          label="Monto"
          :value="item.monto"
          ></v-text-field>

          <v-text-field
          class="small-input"
          label="Cantidad"
          :value="item.cantidad"
          ></v-text-field>

          <v-text-field
          class="big-input"
          label="Total"
          :value="item.total"
          ></v-text-field>
        </div>
      </div>
    </section>

    <section class="section2-impuestos-pagos">
      <div class="tipo-pago-container">
        <div class="title-morado">
          <p class="tipo-pago-title">
            Tipo de Pago
          </p>
        </div>

        <v-btn class="btns-add-remove no-shadow" @click="addDiv(index)">
          +
        </v-btn>

        <div v-for="(item,index) in tipoPago" :key="index" class="solicitud-inputs-container">
          <v-autocomplete
          class="big-autocomplete mobile-inputs"
          label="Tipo de Pago"
          :items="items_tipo"
          ></v-autocomplete>

          <v-autocomplete
          class="big-autocomplete mobile-inputs"
          label="Tipo de Pago"
          :items="items_bancos"
          ></v-autocomplete>

          <v-text-field
          class="small-input mobile-inputs"
          label="Referencia"
          :value="item.referencia"
          ></v-text-field>

          <v-text-field
          class="small-input mobile-inputs"
          label="Monto"
          :value="item.monto"
          ></v-text-field>

          <v-btn class="btns-add-remove"  @click="removeDiv(index)">
            <v-icon color="var(--error)">mdi-delete</v-icon>
          </v-btn>
        </div>
      </div>

      <div class="divrow center div-btns" style="gap:30px;">

        <v-dialog v-model="dialog_guardar" persistent class="dialog-guardar">
          <template #activator="{attrs, on}">
            <v-btn class="btn size-btn" v-bind="attrs" v-on="on" @click="dialog_guardar = true">
              Guardar
            </v-btn>
          </template>
          <v-card class="card-dialog-guardar">
            <v-icon class="close-icon" @click="dialog_guardar = false">mdi-close</v-icon>
            <p class="p-dialog">Verifica la información</p>

            <hr>

            <div class="inputs-dialog-container">
              <v-text-field
              label="Tipo de Pago"
              value="Transferencia Bancaria"
              class="input-dialog"
              ></v-text-field>

              <v-text-field
              label="Banco"
              value="0105. Banco Mercantil C.A., Banco Universal"
              class="input-dialog"
              ></v-text-field>

              <v-text-field
              label="Referencia"
              value="987654322345678"
              class="input-dialog-small"
              ></v-text-field>

              <v-text-field
              label="Monto"
              value="72"
              class="input-dialog-small"
              ></v-text-field>

              <p style="margin-block:25px">
                Marque las casillas si el inmueble es un apartamento
              </p>

              <div class="radio-container">
                <span>
                  Piso
                </span>
                <div>
                  <v-radio-group v-model="radio_dialog" row>
                    <v-radio label="PB" :value="1" name="radio-group"></v-radio>
                    <v-radio label="1er piso o mayor" :value="2" name="radio-group"></v-radio>
                  </v-radio-group>
                </div>
              </div>

              <div class="radio-container">
                <span>
                  Tipo de inmueble
                </span>
                <div>
                  <v-radio-group v-model="one_radio" row>
                    <v-radio label="apartamento" :value="1"></v-radio>
                  </v-radio-group>
                </div>
              </div>
            </div>

            <div class="divrow center flex-column" style="gap:10px;">
              <v-dialog v-model="dialog_exito" persistent class="dialog-exito">
                <template #activator="{attrs, on}">
                  <v-btn class="btn btn-dialog" v-bind="attrs" v-on="on" @click="dialog_guardar = false, dialog_exito = true" style="background-color:var(--primary)!important;">
                    Guardar
                  </v-btn>
                </template>
                <v-card class="card-dialog-exito">
                  <v-icon @click="dialog_exito = false">mdi-close</v-icon>
                  <p class="p-dialog">¡Se ha guardado con éxito!</p>
                </v-card>
              </v-dialog>

              <v-btn class="btn btn-dialog" style="background-color:var(--error)!important;">
                Cancelar
              </v-btn>
            </div>
          </v-card>
        </v-dialog>

        <v-btn class="btn size-btn" style="background-color:#ED057E!important;">
          Cancelar
        </v-btn>
      </div>
    </section>
  </div>
</template>

<script>
import computeds from '~/mixins/computeds'

export default{
  name: "ImpuestosPagosPage",
  mixins:[computeds],
  data(){
    return{
      one_radio:0,
      radio_dialog:0,
      dialog_guardar: false,
      dialog_exito: false,
      monto_total: 72,
      show_observaciones: false,
      datosPropietario:[
        {
          nombre:"María Pera C.",
          id_type:"V",
          id_number:"12.345.678",
        }
      ],

      impuestosDescripcion:[
        {
          nro:"1",
          concepto:"Impuestos por tasa - Inscripción catastral",
          monto:"72",
          cantidad:"1",
          total:"72",
        },
      ],

      tipoPago:[
        {
          referencia:"",
          monto:"",
        }
      ],
    }
  },

  head() {
    const title = 'Pago Impuestos';
    return {
      title,
    }
  },

  methods: {
    addDiv(){
      this.tipoPago.push({});
    },  

    removeDiv(index) {
      this.tipoPago.splice(index, 1);
    }
  }
}

</script>


<style src="~/assets/styles/pages/impuestos-pago.scss" lang="scss" />