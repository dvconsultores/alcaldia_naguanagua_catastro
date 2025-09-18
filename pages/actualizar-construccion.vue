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
          <div v-for="(item, index) in dataConstruccionSoperte" :key="index" class="divrow center" style="gap: 10px; width: 100%;">
            <v-text-field
            v-model="item.soporte"
            class="input-select"
            label="Soperte"
            readonly
            ></v-text-field>
            <v-btn @click="openDeleteSoporte(item)" class="btn-delete">
              <v-icon color="var(--error)">
                mdi-delete
              </v-icon>
            </v-btn>
          </div>
          <div class="divrow center" style="gap: 10px; width: 100%;">
            <v-autocomplete
            v-model="soporteAdd"
            class="input-select"
            label="Soporte"
            :items="dataSoporte"
            item-text="descripcion"
            item-value="id"
            ></v-autocomplete>
            <v-btn @click="postInmuebleConstruccionSoporte()" class="btn-delete">
              <v-icon>
                mdi-plus
              </v-icon>
            </v-btn>
          </div>
        </div>
        <v-divider vertical class="purple delete-1200"></v-divider>
        <div class="div-autocomplete">
          <div v-for="(item, index) in dataConstruccionTecho" :key="index" class="divrow center" style="gap: 10px; width: 100%;">
            <v-text-field
            class="input-select"
            label="Techo"
            :value="item.techo"
            readonly
            ></v-text-field>
            <v-btn @click="openDeleteTecho(item)" class="btn-delete">
              <v-icon color="var(--error)">
                mdi-delete
              </v-icon>
            </v-btn>
          </div>
          <div class="divrow center" style="gap: 10px; width: 100%;">
            <v-autocomplete
            v-model="techoAdd"
            class="input-select"
            label="Techo"
            :items="dataTecho"
            item-text="descripcion"
            item-value="id"
            ></v-autocomplete>
            <v-btn @click="postInmuebleConstruccionTecho()" class="btn-delete">
              <v-icon>
                mdi-plus
              </v-icon>
            </v-btn>
          </div>
        </div>
        <v-divider vertical class="purple delete-1200"></v-divider>
        <div class="div-autocomplete">
          <div v-for="(item, index) in dataConstruccionCubierta" :key="index" class="divrow center" style="gap: 10px; width: 100%;">
            <v-text-field
            class="input-select"
            label="Cubierta"
            :value="item.cubierta"
            readonly
            ></v-text-field>
            <v-btn @click="openDeleteCubierta(item)" class="btn-delete">
              <v-icon color="var(--error)">
                mdi-delete
              </v-icon>
            </v-btn>
          </div>
          <div class="divrow center" style="gap: 10px; width: 100%;">
            <v-autocomplete
            v-model="cubiertaAdd"
            class="input-select"
            label="Cubierta"
            :items="dataCubierta"
            item-text="descripcion"
            item-value="id"
            ></v-autocomplete>
            <v-btn @click="postInmuebleConstruccionCubierta()" class="btn-delete">
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
          item-value="id"
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
          item-value="id"
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
          item-value="id"
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
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn class="btn dialog-btn" text @click="saveData()" :loading="btnGuardarInmuble" style="background-color:var(--primary)!important;">Si</v-btn>
          <v-btn class="btn dialog-btn" text @click="dialog_confirmar = false" style="background-color:var(--error)!important;">No</v-btn>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog v-model="dialogDeleteSoporte" max-width="500px">
      <v-card id="dialog-eliminar-card">
        <v-card-title class="center title">¿Desea eliminarlo?</v-card-title>
        <span class="alerta-text">Esta acción no se puede revertir</span>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn class="btn dialog-btn" text @click="confirmDeletesSoporte()" style="background-color:var(--primary)!important;">Si </v-btn>
          <v-btn class="btn dialog-btn" text @click="dialogDeleteSoporte = false" style="background-color:var(--error)!important;">No</v-btn>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog v-model="dialogDeleteTecho" max-width="500px">
      <v-card id="dialog-eliminar-card">
        <v-card-title class="center title">¿Desea eliminarlo?</v-card-title>
        <span class="alerta-text">Esta acción no se puede revertir</span>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn class="btn dialog-btn" text @click="confirmDeleteTecho()" style="background-color:var(--primary)!important;">Si</v-btn>
          <v-btn class="btn dialog-btn" text @click="dialogDeleteTecho = false" style="background-color:var(--error)!important;">No</v-btn>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog v-model="dialogDeleteCubierta" max-width="500px">
      <v-card id="dialog-eliminar-card">
        <v-card-title class="center title">¿Desea eliminarlo?</v-card-title>
        <span class="alerta-text">Esta acción no se puede revertir</span>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn class="btn dialog-btn" text @click="confirmDeletesCubierta()" style="background-color:var(--primary)!important;">Si</v-btn>
          <v-btn class="btn dialog-btn" text @click="dialogDeleteCubierta = false" style="background-color:var(--error)!important;">No</v-btn>
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
      dataConstruccionSoperte: [],
      dataConstruccionTecho:[],
      dataConstruccionCubierta: [],
      dataSoporte: [],

      btnGuardarInmuble: false,

      dialog_confirmar: false,
      dialogDeleteSoporte: false,
      dialogDeleteTecho: false,
      dialogDeleteCubierta: false,

      inmuebleConstruccionId: null,
      soporteAdd: null,
      techoAdd: null,
      cubiertaAdd: null,

      deleteSoporteItem:{},
      deleteTechoItem: {},
      deleteCubiertaItem: {},
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

  },

  methods: {
    redireccionIdVacio(){
      if(this.$store.getters.getExpediente =='Sin Seleccionar'){
        this.$router.push('consulta-inmueble')
        this.$alert("cancel", {desc: "Debe seleccionar un inmueble para ingresar a este módulo", hash: 'knsddcssdc', title:'Error'})
      }else{
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
        this.getInmuebleConstruccionSoporte()
        this.getInmuebleConstruccionTecho()
        this.getInmuebleConstruccionCubierta()
        this.getSoporte()
      }
    },

    getInmuebleConstruccion(){
      this.$axios.$get('inmueble_construccion/?inmueble=' + this.$store.getters.getExpediente.id).then(response => {
        this.dataInmuebleConstruccion = response[0]
        this.inmuebleConstruccionId = this.dataInmuebleConstruccion[0].id
        console.log(this.dataInmuebleConstruccion.id, 'indeindneidnaibfe')
      }).catch(err => {
        console.log(err) 
      })
    },

    getInmuebleConstruccionCubierta(){
      this.$axios.$get('inmueble_construccion_cubierta').then(response => {
        this.dataConstruccionCubierta = response
      }).catch(err => {
        console.log(err) 
      })
    },

    getInmuebleConstruccionTecho(){
      this.$axios.$get('inmueble_construccion_techo').then(response => {
        this.dataConstruccionTecho = response
      }).catch(err => {
        console.log(err) 
      })
    },

    getInmuebleConstruccionSoporte(){
      this.$axios.$get('inmueble_construccion_soporte').then(response => {
        this.dataConstruccionSoperte = response
      }).catch(err => {
        console.log(err) 
      })
    },

    getSoporte(){
      this.$axios.$get('soporte').then(response => {
        this.dataSoporte = response
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

    ////// datos estructurales //////
    postInmuebleConstruccionSoporte(){
      const formSoporte = {
        soporte: this.soporteAdd,
        inmueble_construccion: this.inmuebleConstruccionId,
      }

      this.$axios.$post('inmueble_construccion_soporte/', formSoporte).then(response => {
        this.dataConstruccionSoperte.push(response)
        this.$alert("success", { desc: "Ha sido agregado con éxito", hash: 'knsddcssdc', title: 'Agregado' })
      }).catch(err => {
        console.log(err) 
      })
    },

    openDeleteSoporte(item){
      this.deleteSoporteItem = item
      this.dialogDeleteSoporte = true
    },

    confirmDeletesSoporte(){
      this.$axios.$delete(`inmueble_construccion_soporte/${this.deleteSoporteItem.id}`).then((response) => {
        console.log(response)
        this.$alert("success", {desc: "Se ha eliminado con éxito", hash: 'knsddcssdc'})
        this.dialogDeleteSoporte = false 
        const index = this.dataConstruccionSoperte.findIndex(b => b.id === this.deleteSoporteItem.id)
        if (index !== -1) {
          this.dataConstruccionSoperte.splice(index, 1)
        }
      }).catch((err) => {
        console.log(err)
        this.dialogDeleteSoporte = false 
      })
    },

    postInmuebleConstruccionTecho(){
      const formTecho = {
        techo: this.techoAdd,
        inmueble_construccion: this.inmuebleConstruccionId,
      }

      this.$axios.$post('inmueble_construccion_techo/', formTecho).then(response => {
        this.dataConstruccionTecho.push(response)
        this.$alert("success", { desc: "Ha sido agregado con éxito", hash: 'knsddcssdc', title: 'Agregado' })
      }).catch(err => {
        console.log(err) 
      })
    },

    openDeleteTecho(item){
      this.deleteTechoItem = item
      this.dialogDeleteTecho = true
    },

    confirmDeleteTecho(){
      this.$axios.$delete(`inmueble_construccion_techo/${this.deleteTechoItem.id}`).then((response) => {
        console.log(response)
        this.$alert("success", {desc: "Se ha eliminado con éxito", hash: 'knsddcssdc'})
        this.dialogDeleteTecho = false 
        const index = this.dataConstruccionTecho.findIndex(b => b.id === this.deleteTechoItem.id)
        if (index !== -1) {
          this.dataConstruccionTecho.splice(index, 1)
        }
      }).catch((err) => {
        console.log(err)
        this.dialogDeleteTecho = false 
      })
    },

    postInmuebleConstruccionCubierta(){
      const formCubierta = {
        cubierta: this.cubiertaAdd,
        inmueble_construccion: this.inmuebleConstruccionId,
      }

      this.$axios.$post('inmueble_construccion_cubierta/', formCubierta).then(response => {
        this.dataConstruccionCubierta.push(response)
        this.$alert("success", { desc: "Ha sido agregado con éxito", hash: 'knsddcssdc', title: 'Agregado' })
      }).catch(err => {
        console.log(err) 
      })
    },

    openDeleteCubierta(item){
      this.deleteCubiertaItem = item
      this.dialogDeleteCubierta = true
    },

    confirmDeletesCubierta(){
      this.$axios.$delete(`inmueble_construccion_cubierta/${this.deleteCubiertaItem.id}`).then((response) => {
        console.log(response)
        this.$alert("success", {desc: "Se ha eliminado con éxito", hash: 'knsddcssdc'})
        this.dialogDeleteCubierta = false 
        const index = this.dataConstruccionCubierta.findIndex(b => b.id === this.deleteCubiertaItem.id)
        if (index !== -1) {
          this.dataConstruccionCubierta.splice(index, 1)
        }
      }).catch((err) => {
        console.log(err)
        this.dialogDeleteCubierta = false 
      })
    },


    saveData() {
      this.btnGuardarInmuble = true

      const formData = new FormData();
      this.dataInmuebleConstruccion.tipo ? formData.append('tipo', this.dataInmuebleConstruccion.tipo):'';
      this.dataInmuebleConstruccion.uso_construccion ? formData.append('uso_construccion', this.dataInmuebleConstruccion.uso_construccion):'';
      this.dataInmuebleConstruccion.tenencia ? formData.append('tenencia', this.dataInmuebleConstruccion.tenencia):'';
      this.dataInmuebleConstruccion.regimen ? formData.append('regimen', this.dataInmuebleConstruccion.regimen):'';
      this.dataInmuebleConstruccion.tipo_pared ? formData.append('tipo_pared', this.dataInmuebleConstruccion.tipo_pared):'';
      this.dataInmuebleConstruccion.acabado_pared ? formData.append('acabado_pared', this.dataInmuebleConstruccion.acabado_pared):'';
      this.dataInmuebleConstruccion.conservacion ? formData.append('conservacion', this.dataInmuebleConstruccion.conservacion):'';
      formData.append('anio_construccion', this.dataInmuebleConstruccion.anio_construccion);
      formData.append('anio_refaccion', this.dataInmuebleConstruccion.anio_refaccion);
      formData.append('porcentaje_refaccion', this.dataInmuebleConstruccion.porcentaje_refaccion);
      formData.append('edad_efectiva', this.dataInmuebleConstruccion.edad_efectiva);
      formData.append('numero_niveles', this.dataInmuebleConstruccion.numero_niveles);
      formData.append('numero_edificaciones', this.dataInmuebleConstruccion.numero_edificaciones);
      formData.append('observaciones', this.dataInmuebleConstruccion.observaciones);

      this.$axios.$patch(`inmueble_construccion/${this.dataInmuebleConstruccion.id}/`, formData)
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