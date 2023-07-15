<template>
  <div class="center no-padding divcol" style="margin-bottom:20px; padding-left: 256px;">
    <section class="section1-actualizar-construccion">
      <div class="actualizar-construccion-container">
        <div class="title-morado">
          <p class="actualizar-construccion-title">
            Datos Generales
          </p>
        </div>

        <div class="div-autocomplete">
          <v-autocomplete
          v-model="dataInmuebleConstruccion.tipo"
          class="input-select"
          label="Tipo"
          :items="dataTipoInmueble"
          item-text="descripcion"
          item-value="id"
          ></v-autocomplete>
        </div>
        <v-divider vertical class="purple delete-1200"></v-divider>
        <div class="div-autocomplete">
          <v-autocomplete
          v-model="dataInmuebleConstruccion.uso_construccion"
          class="input-select input-select-no-border"
          label="Descripción de Uso"
          :items="dataUsoConstruccion"
          item-text="descripcion"
          item-value="id"
          ></v-autocomplete>
        </div>
        <v-divider vertical class="purple delete-1200"></v-divider>
        <div class="div-autocomplete">
          <v-autocomplete
          v-model="dataInmuebleConstruccion.tenencia"
          class="input-select"
          label="Tenencia"
          :items="dataTenencia"
          item-text="descripcion"
          item-value="id"
          ></v-autocomplete>
        </div>
        <v-divider vertical class="purple delete-1200"></v-divider>
        <div class="div-autocomplete">
          <v-autocomplete
          v-model="dataInmuebleConstruccion.regimen"
          class="input-select input-select-no-border"
          label="Régimen de Propiedad"
          :items="dataRegimen"
          item-text="descripcion"
          item-value="id"
          ></v-autocomplete>
        </div>
      </div>

      <div class="actualizar-construccion-container">
        <div class="title-morado">
          <p class="actualizar-construccion-title">
            Datos Estructurales
          </p>
        </div>

        <div class="div-autocomplete">
          <div v-for="(item, index) in dataTipoPared" :key="index" class="divrow center" style="gap: 10px; width: 100%;">
            <v-text-field
            class="input-select"
            label="Soperte"
            :value="item.tipo_pared"
            readonly
            ></v-text-field>
            <v-btn @click="deleteItem(index)" class="btn-delete">
              <v-icon>
                mdi-delete
              </v-icon>
            </v-btn>
          </div>
          <div class="divrow center" style="gap: 10px; width: 100%;">
            <v-autocomplete
            v-model="soporteAuto"
            class="input-select"
            label="Tipo de Pared"
            :items="soporteItems"
            ></v-autocomplete>
            <v-btn @click="addDiv" class="btn-delete">
              <v-icon>
                mdi-plus
              </v-icon>
            </v-btn>
          </div>
        </div>
        <v-divider vertical class="purple delete-1200"></v-divider>
        <div class="div-autocomplete">
          <div v-for="(item, index) in dataTecho" :key="index" class="divrow center" style="gap: 10px; width: 100%;">
            <v-text-field
            class="input-select"
            label="Techo"
            :value="item.techo"
            readonly
            ></v-text-field>
            <v-btn @click="deleteItemTecho(index)" class="btn-delete">
              <v-icon>
                mdi-delete
              </v-icon>
            </v-btn>
          </div>
          <div class="divrow center" style="gap: 10px; width: 100%;">
            <v-autocomplete
            v-model="techoAuto"
            class="input-select"
            label="Techo"
            :items="dataTecho"
            item-text="descripcion"
            item-valu="id"
            ></v-autocomplete>
            <v-btn @click="addDivTecho" class="btn-delete">
              <v-icon>
                mdi-plus
              </v-icon>
            </v-btn>
          </div>
        </div>
        <v-divider vertical class="purple delete-1200"></v-divider>
        <div class="div-autocomplete">
          <div v-for="(item, index) in dataCubierta" :key="index" class="divrow center" style="gap: 10px; width: 100%;">
            <v-text-field
            class="input-select"
            label="Cubierta"
            :value="item.cubierta"
            readonly
            ></v-text-field>
            <v-btn @click="deleteItemCubierta(index)" class="btn-delete">
              <v-icon>
                mdi-delete
              </v-icon>
            </v-btn>
          </div>
          <div class="divrow center" style="gap: 10px; width: 100%;">
            <v-autocomplete
            v-model="cubiertaAuto"
            class="input-select"
            label="Cubierta"
            :items="dataCubierta"
            item-text="descripcion"
            item-valu="id"
            ></v-autocomplete>
            <v-btn @click="addDivCubierta" class="btn-delete">
              <v-icon>
                mdi-plus
              </v-icon>
            </v-btn>
          </div>
        </div>
      </div>

      <div class="actualizar-construccion-container">
        <div class="title-morado">
          <p class="actualizar-construccion-title">
            Datos Complementarios
          </p>
        </div>

        <div class="div-autocomplete">
          <v-autocomplete
          v-model="dataInmuebleConstruccion.tipo_pared"
          class="input-select"
          label="Tipo de Pared"
          :items="dataTipoPared"
          item-text="descripcion"
          item-valu="id"
          ></v-autocomplete>
        </div>
        <v-divider vertical class="purple delete-1200"></v-divider>
        <div class="div-autocomplete">
          <v-autocomplete
          v-model="dataInmuebleConstruccion.acabado_pared"
          class="input-select input-select-no-border"
          label="Estado de la Pared"
          :items="dataAcabadoPared"
          item-text="descripcion"
          item-valu="id"
          ></v-autocomplete>
        </div>
        <v-divider vertical class="purple delete-1200"></v-divider>
        <div class="div-autocomplete">
          <v-autocomplete
          v-model="dataInmuebleConstruccion.conservacion"
          class="input-select"
          label="Estado de Conservación"
          :items="dataConservacion"
          item-text="descripcion"
          item-valu="id"
          ></v-autocomplete>
        </div>
      </div>

      <div class="otros-datos-container">
        <div class="title-morado">
          <p class="otros-datos-title">
            Otros Datos
          </p>
        </div>

        <div class="div-otros-datos-autocomplete">
          <v-text-field
          v-model="dataInmuebleConstruccion.anio_construccion"
          class="input-otros-datos"
          label="Año de Construcción"
          type="number"
          ></v-text-field>

          <v-text-field
          v-model="dataInmuebleConstruccion.anio_refaccion"
          class="input-otros-datos input-select-no-border"
          label="Año de Refacción"
          type="number"
          ></v-text-field>

          <v-text-field
          v-model="dataInmuebleConstruccion.porcentaje_refaccion"
          class="input-otros-datos"
          label="% Refacción"
          type="number"
          ></v-text-field>

          <v-text-field
          v-model="dataInmuebleConstruccion.edad_efectiva"
          class="input-otros-datos input-select-no-border"
          label="Edad Efectiva"
          type="number"
          ></v-text-field>

          <v-text-field
          v-model="dataInmuebleConstruccion.numero_niveles"
          class="input-otros-datos"
          label="Nro. de Niveles"
          type="number"
          ></v-text-field>

          <v-text-field
          v-model="dataInmuebleConstruccion.numero_edificaciones"
          class="input-otros-datos input-select-no-border"
          label="Nro. de Edificaciones"
          type="number"
          ></v-text-field>
        </div>

        <div class="div-observaciones">
          <v-textarea
          v-model="dataInmuebleConstruccion.observaciones"
          class="textarea"
          label="Observaciones"
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
          <v-btn class="btn dialog-btn" text @click="saveData()" :loading="btnGuardarInmuble">Si</v-btn>
          <v-btn class="btn dialog-btn" text @click="dialog_confirmar = false" style="background-color:#ED057E!important;">No</v-btn>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import computeds from '~/mixins/computeds'

export default {
  name: "actualizar-construccionPage",
  mixins: [computeds],
  data() {
    return {  
      soporteAuto: null,
      soporteItems: ["Madera", "concreto"],
      // dataTipoPared:[{tipo_pared: "Concreto Armado",}],

      techoAuto: null,
      techoItems: ["Madera", "Zinc"],
      // dataTecho:[{techo: "Madera",}],

      cubiertaAuto: null,
      cubiertaItems: ["Hormigon", "concreto"],
      // dataCubierta:[{tipo_pared: "Hormigon",}],

      dataTipoPared: [],
      dataTecho: [],
      dataCubierta: [],
      dataTipoInmueble: [],
      dataUsoConstruccion:[],
      dataTenencia: [],
      dataRegimen: [],
      dataInmuebleConstruccion: [],
      dataAcabadoPared: [],
      dataConservacion: [],

      btnGuardarInmuble: false,

      dialog_confirmar: false,
    }
  },
  head() {
    const title = 'Actualizar Construccion';
    return {
      title,
    }
  },

  created(){
    this.redireccionIdVacio()
    this.getInmuebleConstruccion()
    this.getTipoPared()
    this.getCubierta()
    this.getTecho()
    this.getTipoInmueble()
    this.getUsoConstruccion()
    this.getTenencia()
    this.getRegimen()
    this.getAcabadoPared()
    this.getConservacion()
  },

  methods: {
    redireccionIdVacio(){
      if(this.$store.getters.getExpediente =='Sin Seleccionar'){
        this.$router.push('modificar-datos')
        this.$alert("cancel", {desc: "Debe seleccionar un inmueble para ingresar a este modulo", hash: 'knsddcssdc', title:'Error'})
      }else{
        ''
      }
    },

    getInmuebleConstruccion(){
      this.$axios.$get('inmueble_construccion/?inmueble=' + this.$store.getters.getExpediente.id).then(response => {
        this.dataInmuebleConstruccion = response
        console.log(this.dataInmuebleConstruccion, 'indeindneidnaibfe')
      }).catch(err => {
        console.log(err) 
      })
    },

    getConservacion(){
      this.$axios.$get('conservacion').then(response => {
        this.dataConservacion = response
      }).catch(err => {
        console.log(err) 
      })
    },

    getAcabadoPared(){
      this.$axios.$get('acabado_pared').then(response => {
        this.dataAcabadoPared = response
      }).catch(err => {
        console.log(err) 
      })
    },

    getRegimen(){
      this.$axios.$get('regimen').then(response => {
        this.dataRegimen = response
      }).catch(err => {
        console.log(err) 
      })
    },

    getTenencia(){
      this.$axios.$get('tipotenencia').then(response => {
        this.dataTenencia = response
      }).catch(err => {
        console.log(err) 
      })
    },

    getUsoConstruccion(){
      this.$axios.$get('uso_construccion').then(response => {
        this.dataUsoConstruccion = response
      }).catch(err => {
        console.log(err) 
      })
    },

    getTipoInmueble(){
      this.$axios.$get('tipoinmueble').then(response => {
        this.dataTipoInmueble = response
      }).catch(err => {
        console.log(err) 
      })
    },

    getTipoPared(){
      this.$axios.$get('tipo_pared').then(response => {
        this.dataTipoPared = response
      }).catch(err => {
        console.log(err) 
      })
    },

    getTecho(){
      this.$axios.$get('techo').then(response => {
        this.dataTecho = response
      }).catch(err => {
        console.log(err) 
      })
    },

    getCubierta(){
      this.$axios.$get('cubierta').then(response => {
        this.dataCubierta = response
      }).catch(err => {
        console.log(err) 
      })
    },

    addDiv(){
      this.dataTipoPared.push({tipo_pared: this.soporteAuto});
    },  

    deleteItem(index) {
      this.dataTipoPared.splice(index, 1);
    },

    addDivTecho(){
      this.dataTecho.push({techo: this.techoAuto});
    },  

    deleteItemTecho(index) {
      this.dataTecho.splice(index, 1);
    },

    addDivCubierta(){
      this.dataCubierta.push({cubierta: this.cubiertaAuto});
    },  

    deleteItemCubierta(index) {
      this.dataCubierta.splice(index, 1);
    },

    saveData() {
      this.btnGuardarInmuble = true

      const formData = new FormData();
      formData.append('numero_expediente', this.dataInmuebleConstruccion.tipo);
      formData.append('fecha_inscripcion', this.dataInmuebleConstruccion.uso_construccion);
      formData.append('numero_documento', this.dataInmuebleConstruccion.tenencia);
      formData.append('status', this.dataInmuebleConstruccion.regimen);
      formData.append('ambito', this.dataInmuebleConstruccion.tipo_pared);
      formData.append('sector', this.dataInmuebleConstruccion.acabado_pared);
      formData.append('manzana', this.dataInmuebleConstruccion.conservacion);
      formData.append('parcela', this.dataInmuebleConstruccion.anio_construccion);
      formData.append('subparcela', this.dataInmuebleConstruccion.anio_refaccion);
      formData.append('nivel', this.dataInmuebleConstruccion.porcentaje_refaccion);
      formData.append('unidad', this.dataInmuebleConstruccion.edad_efectiva);
      formData.append('urbanizacion', this.dataInmuebleConstruccion.numero_niveles);
      formData.append('urbanizacion', this.dataInmuebleConstruccion.numero_edificaciones);
      formData.append('urbanizacion', this.dataInmuebleConstruccion.observaciones);

      this.$axios.$patch(`inmueble_construccion/?inmueble=${this.$store.getters.getExpediente.id}/`, formData)
      .then(res => {
        console.log(res.data)
        this.btnGuardarInmuble = false
        this.dialog_confirmar = false
        this.$alert("success", { desc: "Se ha guardado un inmueble con éxito", hash: 'knsddcssdc', title: 'Edición de inmueble' });
      })
      .catch(err => {
        console.error(err)
        this.btnGuardarInmuble = false
        this.dialog_confirmar = false
      });
    }, 
  }
};
</script>

<style src="~/assets/styles/pages/actualizar-construccion.scss" lang="scss" />