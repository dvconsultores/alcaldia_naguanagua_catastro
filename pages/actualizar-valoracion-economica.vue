<template>
  <div class="center no-padding divcol" style="margin-bottom:20px; padding-left: 256px;">
    <section class="section1-actualizar-valoracion-economica">
      <div class="actualizar-valoracion-economica-container">
        <div class="title-morado">
          <p class="actualizar-valoracion-economica-title">
            Datos del Terreno
          </p>
        </div>
        <div class="div-card pt-8 wrap" style="flex-direction: column;">
          <v-row>
            <v-col lg="3" md="12" class="pl-0 pr-0 divrow aend divcolmobile">
              <v-text-field
              class="input-small outlined"
              label="Área (m2)"
              ></v-text-field> 

              <v-autocomplete
              class="input-small outlined"
              label="Tipología"
              :items="dataTipologia"
              item-text="descripcion"
              item-value="id"
              ></v-autocomplete>  
            </v-col>

            <v-col lg="3" md="12" class="pl-0 pr-0 divrow aend divcolmobile">
              <v-autocomplete
              class="input-small"
              label="Fines Fiscales"
              :items="dataFinesFiscales"
              item-text="descripcion"
              item-value="id"
              ></v-autocomplete>  

              <v-text-field
              class="input-small outlined"
              label="Valor Unitario Bs/m2"
              ></v-text-field> 
            </v-col>

            <v-col lg="3" md="12" class="pl-0 pr-0">
              <v-card class="border-card-title-top">
                <span class="span-float">
                  Factor de Ajuste
                </span>

                <v-text-field
                class="input-date"
                label="Área (m2)"
                ></v-text-field>

                <v-autocomplete
                class="input-date"
                label="Forma"
                :items="dataForma"
                item-text="descripcion"
                item-value="id"
                ></v-autocomplete>
              </v-card>
            </v-col>

            <v-col lg="3" md="12" class="pl-0 pr-0 divrow aend divcolmobile">
              <v-text-field
              class="input-small"
              label="Valor Ajustado Bs/m2"
              ></v-text-field> 

              <v-text-field
              class="input-small outlined"
              label="Valor Total"
              ></v-text-field> 
            </v-col>
          </v-row>
        </div>
      </div>

      <div class="actualizar-valoracion-economica-container">
        <div class="title-morado">
          <p class="actualizar-valoracion-economica-title">
            Datos de la Construcción
          </p>
          <v-icon class="bold" color="#fff" x-large @click="dialog_crear = true">mdi-plus</v-icon>
        </div>
        <div class="div-card pt-8 wrap" style="flex-direction: column;">
          <v-row v-for="(item, index) in dataConstruccion" :key="index" style="border-bottom: 2px solid var(--primary);">
            <v-col lg="7" class="divrow pr-0">
              <v-text-field
              class="input-small outlined"
              label="Tipología"
              readonly
              :value="item.tipologia"
              ></v-text-field>

              <v-text-field
              class="input-small outlined"
              label="Fecha Compra"
              readonly
              :value="item.fecha_compra"
              ></v-text-field>

              <v-text-field
              class="input-small outlined"
              label="Trimestre"
              readonly
              :value="item.trimestre"
              ></v-text-field>

              <v-text-field
              class="input-small outlined"
              label="Año"
              readonly
              :value="item.anio"
              ></v-text-field>

              <v-text-field
              class="input-small outlined"
              label="Área (m2)"
              readonly
              :value="item.area"
              ></v-text-field> 
            </v-col>

            <v-col lg="5" class="divrow pl-0">
              <v-text-field
              class="input-small"
              label="Valor Bs/m2"
              readonly
              :value="item.valor"
              ></v-text-field> 

              <v-text-field
              class="input-small"
              label="Depreciación %"
              readonly
              :value="item.depreciacion"
              ></v-text-field> 

              <v-text-field
              class="input-small"
              label="Valor Actual Bs"
              readonly
              ></v-text-field> 

              <v-btn class="btn-delete" @click="deleteItem(index)">
                <v-icon>
                  mdi-delete
                </v-icon>
              </v-btn>
            </v-col>

            <v-col md="2">
              <v-text-field
              class="input-small outlined"
              label="Área Total"
              ></v-text-field>
            </v-col>

            <v-col md="5">
              <v-text-field
              class="input-small outlined"
              label="Valor Total Bs - Construcción"
              ></v-text-field>
            </v-col>

            <v-col md="5">
              <v-text-field
              class="input-small outlined"
              label="Valor Total Bs - Inmueble"
              ></v-text-field>
            </v-col>
          </v-row>
          
          <!-- <v-row class="mt-3">
            <v-col lg="5" class="divrow aend pr-0">
              <v-autocomplete
              class="input-small outlined"
              label="Tipología"
              ></v-autocomplete> 

              <v-text-field
              class="input-small outlined"
              label="Área (m2)"
              ></v-text-field>  

              <v-text-field
              class="input-small"
              label="Valor Bs/m2"
              ></v-text-field>  

              <v-autocomplete
              class="input-small"
              label="% Depreciacion"
              ></v-autocomplete> 
            </v-col>

            <v-col lg="3" class="pl-1 pr-1">
              <v-card class="border-card-title-top">
                <span class="span-float">
                  Fecha de Compra  <sup class="bold">*</sup>
                </span>

                <v-autocomplete
                class="input-date"
                label="Dia"
                ></v-autocomplete>

                <v-autocomplete
                class="input-date"
                label="Mes"
                ></v-autocomplete>

                <v-autocomplete
                class="input-date"
                label="Año"
                ></v-autocomplete>
              </v-card>
            </v-col>

            <v-col lg="4" class="divrow aend pl-1">
              <v-autocomplete
              class="input-small outlined"
              label="Trimestre"
              ></v-autocomplete>

              <v-autocomplete
              class="input-small outlined"
              label="Año"
              ></v-autocomplete>

              <v-btn class="btn-delete">
                <v-icon>
                  mdi-plus
                </v-icon>
              </v-btn>
            </v-col>
          </v-row> -->
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

      <div>
        <v-btn class="btn btn-mobile" @click="dialog_confirmar = true">
          Guardar
        </v-btn>
      </div>
    </section>

    <!-- DIALOG -->

    <v-dialog content-class="dialog-guardar" max-width="500px" v-model="dialog_confirmar" persistent>
      <v-card class="guardar-card">
        <v-card-title class="center title">¿Desea guardar este registro?</v-card-title>
        <span class="alerta-text">Esta acción no se puede revertir</span>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn class="btn dialog-btn" text @click="dialog_confirmar = false">Si</v-btn>
          <v-btn class="btn dialog-btn" text @click="dialog_confirmar = false" style="background-color:#ED057E!important;">No</v-btn>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog content-class="dialog-agregar-construccion" max-width="1600px" v-model="dialog_crear">
      <v-card class="card-crear">
        <v-card-title>
          <span class="title">Agregar Construcción</span>
        </v-card-title>

        <hr>

        <v-card-text>
          <v-container>
            <v-row class="center">
              <v-col lg="12" class="divrow pr-0">
              <v-autocomplete
              class="input-small"
              label="Tipología"
              v-model="tipologia"
              :items="dataTipologia"
              item-text="descripcion"
              item-value="id"
              ></v-autocomplete>

              <v-menu
              v-model="menu_fecha"
              :close-on-content-click="false"
              :nudge-right="5"
              transition="scale-transition"
              offset-y
              min-width="auto"
              >
                <template #activator="{ on, attrs }">
                  <v-text-field
                  v-model="fecha_compra"
                  class="input-small"
                  label="Fecha Compra"
                  append-icon="mdi-calendar"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker
                  v-model="selectedDate"
                  label="Fecha Compra"
                  @input="formatoFecha()"
                  color="#ff4081"
                  header-color="#810880"
                  class="custom-date-picker"
                ></v-date-picker>
              </v-menu>
            </v-col>

            <v-col lg="12" class="divrow pr-0">
              <v-text-field
              class="input-small"
              label="Trimestre"
              v-model="trimestre"
              ></v-text-field>

              <v-text-field
              class="input-small"
              label="Año"
              v-model="anio"
              ></v-text-field>
            </v-col>

            <v-col lg="12" class="divrow pr-0">
              <v-text-field
              class="input-small"
              label="Área (m2)"
              v-model="area"
              ></v-text-field> 

              <v-text-field
              class="input-small"
              label="Valor Bs/m2"
              v-model="valor"
              ></v-text-field> 
            </v-col>

            <v-col lg="12" class="divrow pr-0">
              <v-text-field
              class="input-small"
              label="Depreciación %"
              v-model="depreciacion"
              ></v-text-field> 

              <v-text-field
              class="input-small"
              label="Valor Actual Bs"
              ></v-text-field> 
            </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions class=center>
          <v-btn
            class="btn dialog-btn"
            @click="dialog_crear = false"
          >
            Cancelar
          </v-btn>

          <v-btn
            class="btn dialog-btn"
            @click="addDiv()"
            style="background-color:#ED057E!important;"
          >
            Guardar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import computeds from '~/mixins/computeds'
import moment from 'moment'

export default {
  name: "actualizar-valoracion-economicaPage",
  mixins: [computeds],
  data() {
    return {  
      menu_fecha: false,
      dialog_crear: false,
      dialog_confirmar: false,
      show_observaciones: false,
      dataConstruccion:[
        {
          tipologia:"",
          fecha_compra:"",
          trimestre:"",
          anio:"",
          area:"",
          valor:"",
          depreciacion:"",
          observaciones:"",
        },
      ],

      selectedDate: null,
      dataTipologia:[],
      dataFinesFiscales:[],
      dataForma:[],
    }
  },
  head() {
    const title = 'Actualizar Valoracion Economica';
    return {
      title,
    }
  },

  mounted(){
    this.getTipologia()
    this.getFinesFiscales()
    this.getForma()
  },

  methods: {
    getTipologia(){
      this.$axios.$get('tipologia').then(response => {
        this.dataTipologia = response
      }).catch(err => {
        console.log(err)
      })
    },

    getFinesFiscales(){
      this.$axios.$get('finesfiscales').then(response => {
        this.dataFinesFiscales = response
      }).catch(err => {
        console.log(err)
      })
    },

    getForma(){
      this.$axios.$get('forma').then(response => {
        this.dataForma = response
      }).catch(err => {
        console.log(err)
      })
    },

    addDiv(){
      this.dataConstruccion.push({
          tipologia: this.tipologia,
          fecha_compra: this.fecha_compra,
          trimestre: this.trimestre,
          anio: this.anio,
          area: this.area,
          valor: this.area,
          depreciacion: this.depreciacion,
      })

      this.dialog_crear = false
    },  

    deleteItem(index){
      this.dataConstruccion.splice(index, 1)
    },

    formatoFecha() {
      if (this.selectedDate) {
        const formatted = moment(this.selectedDate).format('YYYY-MM-DD HH:mm:ss');
        this.fecha_compra = formatted;
      }
    },
  }
};
</script>

<style src="~/assets/styles/pages/actualizar-valoracion-economica.scss" lang="scss" />