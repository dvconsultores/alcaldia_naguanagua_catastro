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
              v-model="dataValoracionTerreno.area"
              class="input-small outlined"
              label="Área (m2)"
              ></v-text-field> 

              <v-autocomplete
              v-model="dataValoracionTerreno.tipologia"
              class="input-small outlined"
              label="Uso"
              :items="dataTipologia"
              item-text="descripcion"
              item-value="id"
              ></v-autocomplete>  
            </v-col>

            <v-col lg="3" md="12" class="pl-0 pr-0 divrow aend divcolmobile">
              <v-autocomplete
              v-model="dataValoracionTerreno.fines_fiscales"
              class="input-small"
              label="Fines Fiscales"
              :items="dataFinesFiscales"
              item-text="descripcion"
              item-value="id"
              ></v-autocomplete>  

              <v-text-field
              v-model="dataValoracionTerreno.valor_unitario"
              class="input-small outlined"
              label="Valor Unitario Bs/m2"
              type="number"
              hide-spin-buttons	
              ></v-text-field> 
            </v-col>

            <v-col lg="3" md="12" class="pl-0 pr-0">
              <v-card class="border-card-title-top">
                <span class="span-float">
                  Factor de Ajuste
                </span>

                <v-text-field
                v-model="dataValoracionTerreno.area_factor_ajuste"
                class="input-date"
                label="Área (m2)"
                type="number"
                hide-spin-buttons	
                ></v-text-field>

                <v-autocomplete
                v-model="dataValoracionTerreno.forma_factor_ajuste"
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
              type="number"
              v-model="dataValoracionTerreno.valor_ajustado"
              class="input-small"
              label="Valor Ajustado Bs/m2"
              hide-spin-buttons	
              ></v-text-field> 

              <v-text-field
              v-model="dataValoracionTerreno.valor_total"
              type="number"
              class="input-small outlined"
              label="Valor Total"
              hide-spin-buttons	
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
          <v-row v-for="(item, index) in dataValoracionConstruccion" :key="index" style="border-bottom: 2px solid var(--primary);">
            <v-col lg="7" class="divrow pr-0">
              <v-text-field
              v-model="item.tipologia"
              class="input-small outlined"
              label="Uso"
              readonly
              ></v-text-field>

              <v-text-field
              v-model="item.fecha_construccion"
              class="input-small outlined"
              label="Fecha Compra"
              readonly
              ></v-text-field>

              <v-card
              class="input-small outlined center"
              style="background: #fff;"
              >
                <v-checkbox readonly v-model="item.sub_utilizado" label="Sub-Utilizado"></v-checkbox>
              </v-card>

              <!-- <v-text-field
              class="input-small outlined"
              label="Año"
              readonly
              :value="item.anio"
              ></v-text-field> -->

              <v-text-field
              v-model="item.area"
              class="input-small outlined"
              label="Área (m2)"
              readonly
              ></v-text-field> 
            </v-col>

            <v-col lg="5" class="divrow pl-0">
              <v-text-field
              v-model="item.valor"
              class="input-small"
              label="Valor Bs/m2"
              readonly
              ></v-text-field> 

              <v-text-field
              v-model="item.depreciacion"
              class="input-small"
              label="Depreciación %"
              readonly
              ></v-text-field> 

              <v-text-field
              v-model="item.valor_actual"
              class="input-small"
              label="Valor Actual Bs"
              readonly
              ></v-text-field> 

              <v-btn class="btn-delete" @click="openDelete(item)">
                <v-icon>
                  mdi-delete
                </v-icon>
              </v-btn>
            </v-col>
          </v-row>

          <v-row>
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
          v-model="dataValoracionTerreno.observaciones"
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
          <v-btn class="btn dialog-btn" text @click="dialog_confirmar = false" style="background-color: var(--primary)!important;">Si</v-btn>
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
              v-model="new_tipologia"
              class="input-small"
              label="Tipología"
              :items="dataTipologia"
              item-text="descripcion"
              item-value="id"
              ></v-autocomplete>

              <v-autocomplete
              v-model="new_tipo"
              class="input-small"
              label="Tipología"
              :items="dataTipo"
              item-text="descripcion tipo"
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
                  v-model="new_fecha_construccion"
                  class="input-small"
                  label="Fecha Compra"
                  append-icon="mdi-calendar"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker
                  v-model="new_fecha_construccion"
                  label="Fecha Compra"
                  color="#ff4081"
                  header-color="#810880"
                  class="custom-date-picker"
                ></v-date-picker>
              </v-menu>
            </v-col>

            <v-col lg="12" class="divrow pr-0">
              <v-text-field
              v-model="new_area"
              class="input-small"
              label="Área (m2)"
              ></v-text-field> 

              <v-text-field
              v-model="new_valor"
              class="input-small"
              label="Valor Bs/m2"
              ></v-text-field> 
            </v-col>

            <v-col lg="12" class="divrow pr-0">
              <v-text-field
              v-model="new_depreciacion"
              class="input-small"
              label="Depreciación %"
              ></v-text-field> 

              <v-text-field
              v-model=new_valor_actual
              class="input-small"
              label="Valor Actual Bs"
              ></v-text-field> 
            </v-col>

            <v-col lg="6" class="divrow pr-0">
              <v-card
              class="input-small outlined center"
              style="background: #fff;"
              >
                <v-checkbox v-model="new_sub_utilizado" label="Sub-Utilizado"></v-checkbox>
              </v-card>
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
            @click="postInmuebleValoracionConstruccion()"
            style="background-color:#ED057E!important;"
            :loading="btnAddConstruccion"
          >
            Guardar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- delete dialog -->

    <v-dialog v-model="dialog_eliminar" max-width="500px">
      <v-card id="dialog-eliminar-card">
        <v-card-title class="center title">¿Desea eliminarlo?</v-card-title>
        <span class="alerta-text">Esta acción no se puede revertir</span>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn class="btnconfirmDeletesTopografia dialog-btn" text @click="confirmDelete()">Si</v-btn>
          <v-btn class="btn dialog-btn" text @click="dialog_eliminar = false" style="background-color:#ED057E!important;">No</v-btn>
          <v-spacer></v-spacer>
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
      new_sub_utilizado: false,
      dialog_eliminar: false,
      menu_fecha: false,
      dialog_crear: false,
      dialog_confirmar: false,
      show_observaciones: false,
      dataConstruccion:[
        {
          uso:"",
          fecha_compra:"",
          sub_utilizado: false,
          area:"",
          valor:"",
          depreciacion:"",
          observaciones:"",
        },
      ],

      ///data inmueble terreno

      area: null,
      area_factor_ajuste: null,
      fines_fiscales: null,
      forma_factor_ajuste: null,
      id: null,
      inmueble: null,
      observaciones: null,
      tipologia: null,
      valor_ajustado: null,
      valor_total: null,
      valor_unitario: null,

      btnAddConstruccion: false,

      selectedDate: null,
      dataTipologia: [],
      dataTipo: [],
      dataFinesFiscales: [],
      dataForma: [],
      dataValoracionTerreno:{},
      dataValoracionConstruccion: [],
      inmuebleId: this.$store.getters.getExpediente=='Sin Seleccionar' ?'':JSON.parse(JSON.stringify(this.$store.getters.getExpediente.id)),
    }
  },
  head() {
    const title = 'Actualizar Valoracion Economica';
    return {
      title,
    }
  },
  created(){
    this.redireccionIdVacio()
  },
  async mounted(){
    try {
      await this.getInmuebleValoracionTerreno()
      await this.getInmuebleValoracionConstruccion()
    } catch (error) {
      console.log(error);
    }
    this.getInmuebleValoracionTerreno()
    this.getInmuebleValoracionConstruccion()
    this.getTipologia()
    this.getTipo()
    this.getFinesFiscales()
    this.getForma()
  },

  methods: {
    redireccionIdVacio(){
      if(this.$store.getters.getExpediente =='Sin Seleccionar'){
        this.$router.push('consulta-inmueble')
        this.$alert("cancel", {desc: "Debe seleccionar un inmueble para ingresar a este modulo", hash: 'knsddcssdc', title:'Error'})
      }else{
        ''
      }
    },
    async getInmuebleValoracionTerreno() {
      try {
        const response = await this.$axios.$get(`inmueble_valoracion_terreno/?inmueble=${this.inmuebleId}`);
        this.dataValoracionTerreno = response[0];
      } catch (err) {
        console.log(err);
      }
    },
    async getInmuebleValoracionConstruccion() {
      try {
        if (this.dataValoracionTerreno) {
          const response = await this.$axios.$get(`inmueble_valoracion_construccion/?inmueblevaloracionterreno=${this.dataValoracionTerreno.id}`);
          this.dataValoracionConstruccion = response;
          console.log(this.dataValoracionConstruccion, 'construc');
        }
      } catch (err) {
        console.log(err);
      }
    },

    postInmuebleValoracionConstruccion(){
      this.btnAddConstruccion = true

      const formNewTerreno ={
        inmueblevaloracionterreno: this.dataValoracionTerreno.id,
        tipologia: this.new_tipologia,
        tipo: this.new_tipo,
        fecha_construccion: this.new_fecha_construccion,
        area: this.new_area,
        valor: this.new_valor,
        depreciacion: this.new_depreciacion,
        valor_actual: this.new_valor_actual,
        sub_utilizado: this.new_sub_utilizado,
      }
      this.$axios.$post(`inmueble_valoracion_construccion/`, formNewTerreno).then(response => {
        this.dataValoracionConstruccion.push(response)
        this.$alert("success", { desc: "Se ha guardado una construcción con éxito", hash: 'knsddcssdc', title: 'Edición de inmueble' });
        this.btnAddConstruccion = false
        this.dialog_crear = false
      }).catch(err => {
        console.log(err)
        this.btnAddConstruccion = false
        this.dialog_crear = false
      })
    },

    getTipologia(){
      this.$axios.$get('tipologia/?zona='+JSON.parse(JSON.stringify(this.$store.getters.getExpediente.zona))).then(response => {
        this.dataTipologia = response
      }).catch(err => {
        console.log(err)
      })
    },

    getTipo(){
      this.$axios.$get('tipoinmueble').then(response => {
        this.dataTipo = response
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

    openDelete(item){
      this.deleteItem = item
      this.dialog_eliminar = true
    },  

    confirmDelete(){
      this.$axios.$delete(`inmueble_valoracion_construccion/${this.deleteItem.id}`, this.deleteItem).then(response => {
        console.log(response)
        this.$alert("success", { desc: "Se ha eliminado una construcción con éxito", hash: 'knsddcssdc', title: 'Edición de inmueble' });
        this.dialog_eliminar = false
        const index = this.dataValoracionConstruccion.findIndex(b => b.id === this.deleteItem.id)
        if (index !== -1) {
          this.dataValoracionConstruccion.splice(index, 1)
        }
      }).catch(err => {
        console.log(err)
        this.dialog_eliminar = false
      })
    },

    formatoFecha() {
      if (this.selectedDate) {
        const formatted = moment(this.selectedDate).format('YYYY-MM-DD HH:mm:ss')
        this.fecha_compra = formatted
      }
    },
  }
};
</script>

<style src="~/assets/styles/pages/actualizar-valoracion-economica.scss" lang="scss" />