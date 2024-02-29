<template>
  <div class="center no-padding divcol" style="margin-bottom:20px; padding-left: 256px;">
    <section class="section1-consulta-inmueble">
      <div class="consulta-inmueble-container">
        <div class="title-morado">
          <p class="consulta-inmueble-title">
            CONSULTA Patentes
          </p>
          <v-dialog v-model="dialog_mostrar" max-width="1600px">
            <div id="dialog-mostrar">
              <v-card class="card-detalles">
                <v-tabs v-model="activeTab">
                  <v-tab :value="0">
                    Datos de la Patente
                  </v-tab>
                  <v-tab :value="1">
                    Actividades Económicas
                  </v-tab>
                </v-tabs>
                <hr>
                <v-tabs-items v-model="activeTab" style="background-color: #fff!important; border-radius: 10px;">
                  <v-tab-item :value="0">
                    <div class="inputs-container">
                      <v-text-field v-model="selectedItem.numero" class="input-mostrar" label="Número Patente" disabled></v-text-field>
                      <v-text-field v-model="selectedItem.tipo_patente" class="input-mostrar" label="Tipo Patente"  disabled></v-text-field>
                      <v-text-field v-model="selectedItem.propietario_numero" class="input-mostrar" label="RIF Contribuyente"
                        disabled></v-text-field>
                        <v-text-field v-model="selectedItem.propietario_nombre" class="input-mostrar" label="Nombre Contribuyente"
                        disabled></v-text-field>                      
                      <v-text-field v-model="selectedItem.nombre_representante" class="input-mostrar" label="Nombre Representante"
                        disabled></v-text-field>
                      <v-text-field v-model="selectedItem.numero_documento_representante" class="input-mostrar" label="Doc. Representante"
                        disabled></v-text-field>
                      <v-text-field v-model="selectedItem.telefono" class="input-mostrar" label="Telefono Representante"
                        disabled></v-text-field>
                    </div>
                    <div class="div-btns" @click="StoreExpedienteId(selectedItem)">
                      <v-btn>
                        Seleccionar Patente
                      </v-btn>
                      <v-btn style="background-color:#ED057E!important;" @click="dialog_mostrar = false">
                        Cancelar
                      </v-btn>
                    </div>
                  </v-tab-item>
                  <v-tab-item :value="1">
                    <div class="data-table-container">
                      <v-data-table :headers="headers_propietario" :items="PropietariosData" :items-per-page="10"
                        :footer-props="{
                          itemsPerPageText: 'Items por página',
                        }" sort-by="nombre" class="mytabla" mobile-breakpoint="840">
                        <template v-slot:top>
                          <v-toolbar flat class="toolbar-tabla">
                            <v-dialog v-model="dialogSelecciona" max-width="500px">
                              <v-card id="dialog-eliminar-card">
                                <v-card-title class="center title">¿Seleccionarlo?</v-card-title>
                                <span class="alerta-text" style="text-align:center;">Este será el contribuyente con el
                                  cual usted
                                  realizará las operaciones.</span>
                                <v-card-actions>
                                  <v-spacer></v-spacer>
                                  <v-btn class="btn dialog-btn" text @click="StoreContribuyenteId()">Si</v-btn>
                                  <v-btn class="btn dialog-btn" text @click="dialogSelecciona = false"
                                    style="background-color:#ED057E!important;">No</v-btn>
                                  <v-spacer></v-spacer>
                                </v-card-actions>
                              </v-card>
                            </v-dialog>
                          </v-toolbar>
                        </template>
                        <template #[`item.actions2`]="{ item }">
                          <v-btn class="btn-tabla" @click="openSelecciona(item)">
                            Seleccionar contribuyente
                          </v-btn>
                        </template>
                      </v-data-table>
                    </div>
                    <div class="center" style="margin-top:30px;">
                      <v-btn class="btn" style="background-color:#ED057E!important; width: 200px!important;"
                        @click="dialog_mostrar = false">
                        Cancelar
                      </v-btn>
                    </div>
                  </v-tab-item>
                </v-tabs-items>
              </v-card>
            </div>
          </v-dialog>
        </div>
        <div class="data-table-container">
          <div>
            <v-text-field v-model="search" append-icon="mdi-magnify" label="Buscar PATENTE por número de patente"
              hide-details class="input-data-table" @keyup.enter="getInmueble"></v-text-field>
            <!--v-btn @click="getInmueble" color="primary">Buscar INMUEBLE</v-btn-->
          </div>
          <v-data-table :headers="headers" :items="inmuebleData" :items-per-page="10" :search="search" :footer-props="{
            itemsPerPageText: 'Items por página',
          }" sort-by="codigo" class="mytabla" mobile-breakpoint="840">
            <template #[`item.actions2`]="{ item }">
              <v-btn class="btn-tabla" @click="openDialog(item)">
                Ver Detalle
              </v-btn>
            </template>
          </v-data-table>
        </div>
      </div>
    </section>
    <v-dialog v-model="dialogWait" hide-overlay persistent width="300">
      <v-card color="primary" dark>
        <v-card-text>
          Por favor espere!!!
          <v-progress-linear indeterminate color="white" class="mb-0"></v-progress-linear>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import computeds from '~/mixins/computeds'

export default {
  name: "consulta-inmueblePage",
  mixins: [computeds],
  data() {
    return {
      dialogWait : false,
      activeTab: 0,
      dialog_mostrar: false,
      search: this.$store.getters.getPatente=='Sin Seleccionar'?'':this.$store.getters.getPatente.numero,
      numeroDocumento: '',
      dialog: false,
      dialog_editar: false,
      dialogDelete: false,
      nuevoRegistro: {},
      headers: [
        { text: 'Número de patente', align: 'center', value: 'numero' },
        { text: 'Nombre Representante', value: 'nombre_representante', align: 'center' },
        { text: '', value: 'actions2', sortable: false, align: 'center' },
      ],

      headers_propietario: [
        { text: 'Código General', align: 'center', value: 'codigo_general', },
        { text: 'Descripción General', value: 'descripcion_general', align: 'center' },
        { text: 'Código Específico', align: 'center', value: 'codigo_especifico', },
        { text: 'Descripción Específico', value: 'descripcion_especifico', align: 'center' },
        { text: '', value: 'actions2', sortable: false, align: 'center' },
      ],
      inmuebleData: [],
      PropietariosData: [
        {
          propietario:
          {
            nombre: 'jorge',
            id: '88'
          }
        }
      ],
      selectedPropietario: {
        nombre: '',
        numero_documento: '',
        nacionalidad: '',
      },
      selectedItem: {},
      dialogSelecciona: false,
      defaultItem: {},
    }
  },
  head() {
    const title = 'Consulta Patente';
    return {
      title,
    }
  },

  //mounted(){     this.getInmueble()   },

  methods: {
    openSelecciona(item) {
      this.defaultItem = item.propietario
      console.log('this.defaultItem', this.defaultItem)
      this.dialogSelecciona = true
    },

    StoreContribuyenteId() {
      this.$store.getters.getPatente == undefined ? console.log('vacio') : console.log(this.$store.getters.getPatente)
      this.$store.dispatch('storePatente', this.defaultItem)
      this.dialogSelecciona = false
      this.StoreExpedienteId(this.selectedItem)
    },
    async getInmueblePropietarios() {
      try {
        this.dialogWait = true
        const response = await this.$axios.$get(`ae_patente_actividadeconomica/?AE_patente=${this.selectedItem.id}`);
        this.PropietariosData = response
        console.log('this.PropietariosData ', this.PropietariosData)
        this.dialogWait = false
        this.dialog_mostrar = true
      } catch (err) {
        console.log(err);
      }
    },


    StoreExpedienteId(item) {
      this.$store.getters.getPatente == undefined ? console.log('vacio') : console.log('lleno', this.$store.getters.getPatente)
      this.$store.dispatch('storePatente', item)
      this.dialog_mostrar = false
    },

    async getInmueble() {
      var idInmueble
      this.inmuebleData = []
      this.numeroDocumento = this.search
      if (this.search.trim() == '') {
        this.$alert("cancel", { desc: "Debe colocar un número de expediente válido.", hash: 'knsddcssdc', title: 'Advertencia' })

      }else{
        try {
          this.dialogWait = true
          const response = await this.$axios.$get(`filtrar_patentes/?numero_expediente=${this.numeroDocumento}`)
          if (response.length>0){
            idInmueble = response[0].id
            const response1 = await this.$axios.$get('ae_patente/' + idInmueble)
            this.inmuebleData = [response1]
            console.log('this.inmuebleData',this.inmuebleData)
            this.dialogWait = false
          }else{
            this.dialogWait = false
            this.$alert("cancel", { desc: "No se encontraron expedientes.", hash: 'knsddcssdc', title: 'Advertencia' })
          }
        } catch (err) {
          console.log(err);
        }
      }
    },

    async openDialog(item) {
      this.selectedItem = item
      try {
        await this.getInmueblePropietarios();
      } catch (error) {
        console.log(error);
      }

    },
  }
};
</script>


<style src="~/assets/styles/pages/consulta-inmueble.scss" lang="scss" />