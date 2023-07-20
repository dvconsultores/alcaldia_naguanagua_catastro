<template>
  <div class="center no-padding divcol" style="margin-bottom:20px; padding-left: 256px;">
    <section class="section1-actualizar-terreno">
      <div class="actualizar-terreno-container">
        <div class="title-morado">
          <p class="actualizar-terreno-title">
            Datos del Terreno (1)
          </p>
        </div>

        <div class="div-autocomplete">
          <div v-for="(item, index) in dataInmuebleTerrenoTopografia" :key="index" class="divrow center" style="gap: 10px; width: 100%;">
            <v-text-field
            class="input-select"
            label="Topografia"
            :value="item.topografia"
            readonly
            ></v-text-field>
            <v-btn @click="openDeleteTopografia(item)" class="btn-delete">
              <v-icon>
                mdi-delete
              </v-icon>
            </v-btn>
          </div>
          <div class="divrow center" style="gap: 10px; width: 100%;">
            <v-autocomplete
            v-model="topografiaAdd"
            class="input-select"
            label="Topografia"
            :items="topografiaData"
            item-text="descripcion"
            item-value="id"
            ></v-autocomplete>
            <v-btn @click="postInmuebleTerrenoTopografia()" class="btn-delete">
              <v-icon>
                mdi-plus
              </v-icon>
            </v-btn>
          </div>
        </div>
        <v-divider vertical class="purple delete-1200"></v-divider>
        <div class="div-autocomplete">
          <div v-for="(item, index) in dataInmuebleTerrenoAcceso" :key="index" class="divrow center" style="gap: 10px; width: 100%;">
            <v-text-field
            class="input-select"
            label="Acceso"
            :value="item.acceso"
            readonly
            ></v-text-field>
            <v-btn @click="openDeleteAcceso(item)" class="btn-delete">
              <v-icon>
                mdi-delete
              </v-icon>
            </v-btn>
          </div>
          <div class="divrow center" style="gap: 10px; width: 100%;">
            <v-autocomplete
            v-model="accesoAdd"
            class="input-select"
            label="Acceso"
            :items="accesoData"
            item-text="descripcion"
            item-value="id"
            ></v-autocomplete>
            <v-btn @click="postInmuebleTerrenoAcceso()" class="btn-delete">
              <v-icon>
                mdi-plus
              </v-icon>
            </v-btn>
          </div>
        </div>
        <v-divider vertical class="purple delete-1200"></v-divider>
        <div class="div-autocomplete">
          <v-autocomplete
          v-model="dataInmuebleTerreno.forma"
          class="input-select"
          label="Forma"
          :items="dataForma"
          item-text="descripcion"
          item-value="id"
          ></v-autocomplete>
        </div>
        <v-divider vertical class="purple delete-1200"></v-divider>
        <div class="div-autocomplete">
          <v-autocomplete
          v-model="dataInmuebleTerreno.ubicacion"
          class="input-select input-select-no-border"
          label="Ubicación"
          :items="dataUbicacion"
          item-text="descripcion"
          item-value="id"
          ></v-autocomplete>
        </div>
      </div>

      <div class="actualizar-terreno-container">
        <div class="title-morado">
          <p class="actualizar-terreno-title">
            Datos del Terreno (2)
          </p>
        </div>

        <div class="div-autocomplete">
          <v-autocomplete
          v-model="dataInmuebleTerreno.tenencia"
          class="input-select"
          label="Tenencia"
          :items="dataTenencia"
          item-text="descripcion"
          item-value="id"
          ></v-autocomplete>
        </div>

        <v-divider vertical class="purple delete-1200"></v-divider>

        <div class="div-autocomplete">
          <div v-for="(item, index) in dataInmuebleTerrenoUso" :key="index" class="divrow center" style="gap: 10px; width: 100%;">
            <v-text-field
            class="input-select"
            label="Uso Actual"
            :value="item.uso"
            readonly
            ></v-text-field>
            <v-btn @click="openDeleteUso(item)" class="btn-delete">
              <v-icon>
                mdi-delete
              </v-icon>
            </v-btn>
          </div>
          <div class="divrow center" style="gap: 10px; width: 100%;">
            <v-autocomplete
            v-model="usoAdd"
            class="input-select"
            label="Uso Actual"
            :items="usoData"
            item-text="descripcion"
            item-value="id"
            ></v-autocomplete>
            <v-btn @click="postInmuebleTerrenoUso()" class="btn-delete">
              <v-icon>
                mdi-plus
              </v-icon>
            </v-btn>
          </div>
        </div>

        <v-divider vertical class="purple delete-1200"></v-divider>

        <div class="div-autocomplete">
          <v-autocomplete
          class="input-select"
          label="Regimen de Propiedad"
          :items="dataRegimen"
          item-text="descripcion"
          item-value="id"
          ></v-autocomplete>
        </div>

        <v-divider vertical class="purple delete-1200"></v-divider>

        <div class="div-autocomplete">
          <div v-for="(item, index) in dataServicios" :key="index" class="divrow center" style="gap: 10px; width: 100%;">
            <v-text-field
            class="input-select"
            label="Servicios Publicos"
            :value="item.servicios"
            readonly
            ></v-text-field>
            <v-btn @click="deleteItemServicios(index)" class="btn-delete">
              <v-icon>
                mdi-delete
              </v-icon>
            </v-btn>
          </div>
          <div class="divrow center" style="gap: 10px; width: 100%;">
            <v-autocomplete
            v-model="serviciosAuto"
            class="input-select"
            label="Servicios Publicos"
            :items="serviciosItems"
            ></v-autocomplete>
            <v-btn @click="addDivServicios" class="btn-delete">
              <v-icon>
                mdi-plus
              </v-icon>
            </v-btn>
          </div>
        </div>
      </div>

      <div class="actualizar-terreno-container">
        <div class="title-morado">
          <p class="actualizar-terreno-title">
            Datos del Terreno (3)
          </p>
        </div>

        <div class="div-autocomplete" style="width: 100%;">
          <v-textarea
          v-model="dataInmuebleTerreno.observaciones"
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

    <v-dialog v-model="dialogDeleteAcceso" max-width="500px">
      <v-card id="dialog-eliminar-card">
        <v-card-title class="center title">¿Desea eliminarlo?</v-card-title>
        <span class="alerta-text">Esta acción no se puede revertir</span>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn class="btn dialog-btn" text @click="confirmDeleteAcceso()">Si</v-btn>
          <v-btn class="btn dialog-btn" text @click="dialogDeleteAcceso = false" style="background-color:#ED057E!important;">No</v-btn>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog v-model="dialogDeleteUso" max-width="500px">
      <v-card id="dialog-eliminar-card">
        <v-card-title class="center title">¿Desea eliminarlo?</v-card-title>
        <span class="alerta-text">Esta acción no se puede revertir</span>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn class="btn dialog-btn" text @click="confirmDeleteUso()">Si</v-btn>
          <v-btn class="btn dialog-btn" text @click="dialogDeleteUso = false" style="background-color:#ED057E!important;">No</v-btn>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog v-model="dialogDeleteTopografia" max-width="500px">
      <v-card id="dialog-eliminar-card">
        <v-card-title class="center title">¿Desea eliminarlo?</v-card-title>
        <span class="alerta-text">Esta acción no se puede revertir</span>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn class="btn dialog-btn" text @click="confirmDeletesTopografia()">Si</v-btn>
          <v-btn class="btn dialog-btn" text @click="dialogDeleteTopografia = false" style="background-color:#ED057E!important;">No</v-btn>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import computeds from '~/mixins/computeds'

export default {
  name: "actualizar-terrenoPage",
  mixins: [computeds],
  data() {
    return {  
      dialog_confirmar: false,
      dialogDeleteTopografia: false,
      dialogDeleteAcceso: false,
      dialogDeleteUso: false,

      dataInmuebleTerreno: [],
      dataForma:[],
      dataUbicacion:[],
      dataTenencia:[],
      dataRegimen:[],
      dataInmuebleTerrenoTopografia:[],
      topografiaData:[],
      dataInmuebleTerrenoAcceso: [],
      accesoData: [],
      dataInmuebleTerrenoUso: [],
      usoData:[],

      topografiaAdd: null,
      accesoAdd: null,
      usoAdd: null,
      
      btnGuardarInmuble: false,
    }
  },
  head() {
    const title = 'Actualizar Terreno';
    return {
      title,
    }
  },

  created(){
    this.redireccionIdVacio()
    this.getInmuebleTerreno()
    this.getForma()
    this.getUbicacion()
    this.getTenencia()
    this.getRegimen()
    this.getAcceso()
    this.getTopografia()
    this.getUso()
    this.getInmuebleTerrenoTopografia()
    this.getInmuebleTerrenoAcceso()
    this.getInmuebleTerrenoUso()
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

    getInmuebleTerreno(){
      this.$axios.$get('inmueble_terreno/?inmueble=' + this.$store.getters.getExpediente.id).then(response => {
        this.dataInmuebleTerreno = response[0]
        this.inmuebleTerrenoId = this.dataInmuebleTerreno[0].id
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

    getUbicacion(){
      this.$axios.$get('ubicacion').then(response => {
        this.dataUbicacion = response
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

    getRegimen(){
      this.$axios.$get('regimen').then(response => {
        this.dataRegimen = response
      }).catch(err => {
        console.log(err) 
      })
    },

    getAcceso(){
      this.$axios.$get('acceso').then(response => {
        this.accesoData = response
      }).catch(err => {
        console.log(err) 
      })
    },

    getTopografia(){
      this.$axios.$get('topografia').then(response => {
        this.topografiaData = response
      }).catch(err => {
        console.log(err) 
      })
    },

    getUso(){
      this.$axios.$get('uso').then(response => {
        this.usoData = response
      }).catch(err => {
        console.log(err) 
      })
    },

    getInmuebleTerrenoTopografia(){
      this.$axios.$get('inmueble_terreno_topografia').then(response => {
        this.dataInmuebleTerrenoTopografia = response
      }).catch(err => {
        console.log(err) 
      })
    },

    getInmuebleTerrenoAcceso(){
      this.$axios.$get('inmueble_terreno_acceso').then(response => {
        this.dataInmuebleTerrenoAcceso = response
      }).catch(err => {
        console.log(err) 
      })
    },

    getInmuebleTerrenoUso(){
      this.$axios.$get('inmueble_terreno_uso').then(response => {
        this.dataInmuebleTerrenoUso = response
      }).catch(err => {
        console.log(err) 
      })
    },


    /////// Agregar Campos ////////

    postInmuebleTerrenoAcceso(){
      const formAcceso = {
        acceso: this.accesoAdd,
        inmueble_terreno: this.dataInmuebleTerreno.id,
      }

      this.$axios.$post('inmueble_terreno_acceso/', formAcceso).then(response => {
        this.dataInmuebleTerrenoAcceso.push(response)
        this.$alert("success", { desc: "Ha sido agregado con éxito", hash: 'knsddcssdc', title: 'Agregado' })
      }).catch(err => {
        console.log(err) 
      })
    },

    openDeleteAcceso(item){
      this.deleteAccesoItem = item
      this.dialogDeleteAcceso = true
    },

    confirmDeleteAcceso(){
      this.$axios.$delete(`inmueble_terreno_acceso/${this.deleteAccesoItem.id}`).then((response) => {
        console.log(response)
        this.$alert("success", {desc: "Se ha eliminado con éxito", hash: 'knsddcssdc'})
        this.dialogDeleteAcceso = false 
        const index = this.dataInmuebleTerrenoAcceso.findIndex(b => b.id === this.deleteAccesoItem.id)
        if (index !== -1) {
          this.dataInmuebleTerrenoAcceso.splice(index, 1)
        }
      }).catch((err) => {
        console.log(err)
        this.dialogDeleteAcceso = false 
      })
    },

    postInmuebleTerrenoTopografia(){
      const formTopografia = {
        topografia: this.topografiaAdd,
        inmueble_terreno: this.dataInmuebleTerreno.id,
      }

      this.$axios.$post('inmueble_terreno_topografia/', formTopografia).then(response => {
        this.dataInmuebleTerrenoTopografia.push(response)
        this.$alert("success", { desc: "Ha sido agregado con éxito", hash: 'knsddcssdc', title: 'Agregado' })
      }).catch(err => {
        console.log(err) 
      })
    },

    openDeleteTopografia(item){
      this.deleteTopografiaItem = item
      this.dialogDeleteTopografia = true
    },

    confirmDeletesTopografia(){
      this.$axios.$delete(`inmueble_terreno_topografia/${this.deleteTopografiaItem.id}`).then((response) => {
        console.log(response)
        this.$alert("success", {desc: "Se ha eliminado con éxito", hash: 'knsddcssdc'})
        this.dialogDeleteTopografia = false 
        const index = this.dataInmuebleTerrenoTopografia.findIndex(b => b.id === this.deleteTopografiaItem.id)
        if (index !== -1) {
          this.dataInmuebleTerrenoTopografia.splice(index, 1)
        }
      }).catch((err) => {
        console.log(err)
        this.dialogDeleteTopografia = false 
      })
    },

    postInmuebleTerrenoUso(){
      const formAcceso = {
        uso: this.usoAdd,
        inmueble_terreno: this.dataInmuebleTerreno.id,
      }

      this.$axios.$post('inmueble_terreno_uso/', formAcceso).then(response => {
        this.dataInmuebleTerrenoUso.push(response)
        this.$alert("success", { desc: "Ha sido agregado con éxito", hash: 'knsddcssdc', title: 'Agregado' })
      }).catch(err => {
        console.log(err) 
      })
    },

    openDeleteUso(item){
      this.deleteUsoItem = item
      this.dialogDeleteUso = true
    },

    confirmDeleteUso(){
      this.$axios.$delete(`inmueble_terreno_uso/${this.deleteUsoItem.id}`).then((response) => {
        console.log(response)
        this.$alert("success", {desc: "Se ha eliminado con éxito", hash: 'knsddcssdc'})
        this.dialogDeleteUso = false 
        const index = this.dataInmuebleTerrenoUso.findIndex(b => b.id === this.deleteUsoItem.id)
        if (index !== -1) {
          this.dataInmuebleTerrenoUso.splice(index, 1)
        }
      }).catch((err) => {
        console.log(err)
        this.dialogDeleteUso = false 
      })
    },

    saveData() {
      this.btnGuardarInmuble = true

      const formData = new FormData()
      this.dataInmuebleTerreno.forma ? formData.append('forma', this.dataInmuebleTerreno.forma):'';
      this.dataInmuebleTerreno.ubicacion ? formData.append('ubicacion', this.dataInmuebleTerreno.ubicacion) : '';
      this.dataInmuebleTerreno.tenencia ? formData.append('tenencia', this.dataInmuebleTerreno.tenencia) : '';
      // formData.append('regimen', this.dataInmuebleTerreno.regimen);
      formData.append('observaciones', this.dataInmuebleTerreno.observaciones);

      this.$axios.$patch(`inmueble_terreno/${this.dataInmuebleTerreno.id}/`, formData)
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

<style src="~/assets/styles/pages/actualizar-terreno.scss" lang="scss" />