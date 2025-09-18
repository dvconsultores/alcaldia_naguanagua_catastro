<template>
  <div class="center no-padding divcol" style="margin-bottom:20px; padding-left: 256px;">
    <section class="section1-consulta-inmueble">
      <div class="consulta-inmueble-container">
        <div class="title-morado">
          <p class="consulta-inmueble-title">
            CONTRIBUYENTE CEDULA
          </p>
          <v-dialog v-model="dialog_mostrar" max-width="1600px">
            <div id="dialog-mostrar">
              <v-card class="card-detalles">
                <v-tabs v-model="activeTab">
                  <v-tab :value="0">
                    Datos del contribuyente
                  </v-tab>
                  <v-tab :value="1">
                    Inmuebles Asociados
                  </v-tab>
                </v-tabs>
                <hr>
                <v-tabs-items v-model="activeTab" style="background-color: #fff!important; border-radius: 10px;">
                  <v-tab-item :value="0">
                    <div class="inputs-container">
                      <v-text-field v-model="selectedItem.numero_documento" class="input-mostrar"
                        label="Número de documento" disabled></v-text-field>
                      <v-text-field v-model="selectedItem.nombre" class="input-mostrar" label="Nombre"
                        disabled></v-text-field>
                      <v-text-field v-model="selectedItem.telefono_principal" class="input-mostrar" label="Teléfono principal"
                        disabled></v-text-field>
                      <v-text-field v-model="selectedItem.telefono_secundario" class="input-mostrar" label="Teléfono principal"
                        disabled></v-text-field>
                      <v-text-field v-model="selectedItem.email_principal" class="input-mostrar" label="Email principal"
                        disabled></v-text-field>
                      <v-text-field v-model="selectedItem.emaill_secundario" class="input-mostrar" label="Email secundario"
                        disabled></v-text-field>
                      <v-text-field v-model="selectedItem.id" class="input-mostrar" label="id" disabled></v-text-field>
                    </div>

                    <div class="div-btns" @click="StoreExpedienteId(selectedItem)">
                      <v-btn>
                        Seleccionar Contribuyente
                      </v-btn>

                      <v-btn style="background-color:#ED057E!important;" @click="dialog_mostrar = false">
                        Cancelar
                      </v-btn>
                    </div>
                  </v-tab-item>
                  <v-tab-item :value="1">

                    <div class="data-table-container">
                      <v-data-table :headers="headers_inmueble" :items="PropietariosData" :items-per-page="10"
                        :footer-props="{
                          itemsPerPageText: 'Items por página',
                        }" sort-by="nombre" class="mytabla" mobile-breakpoint="840">


                        <template v-slot:top>
                          <v-toolbar flat class="toolbar-tabla">
                            <v-dialog v-model="dialogSelecciona" max-width="500px">
                              <v-card id="dialog-eliminar-card">
                                <v-card-title class="center title">¿Seleccionarlo?</v-card-title>
                                <span class="alerta-text" style="text-align:center;">Este será el inmueble con el
                                  cual usted realizará las operaciones.</span>
                                <v-card-actions>
                                  <v-spacer></v-spacer>
                                  <v-btn class="btn dialog-btn" text @click="StoreContribuyenteId()">Si</v-btn>
                                  <v-btn class="btn dialog-btn" text @click="dialogSelecciona = false"
                                    style="background-color:var(--error)!important;">No</v-btn>
                                  <v-spacer></v-spacer>
                                </v-card-actions>
                              </v-card>
                            </v-dialog>
                          </v-toolbar>
                        </template>


                        <template #[`item.actions2`]="{ item }">
                          <v-btn class="btn-tabla" @click="openSelecciona(item)">
                            Seleccionar Expediente
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
            <v-text-field v-model="search" append-icon="mdi-magnify" label="Buscar CONTRIBUYENTE: Puede colocar dato del numero de documento o nombre de contribuyente" hide-details
              class="input-data-table" @keyup.enter="getContribuyentes"></v-text-field>
            <!--v-btn @click="getContribuyentes" color="primary">Buscar CONTRIBUYENTE</v-btn-->
          </div>
          <v-data-table :headers="headers" :items="propietarioData" :items-per-page="10" :search="search" :footer-props="{
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
    <v-dialog
            v-model="dialogWait"
            hide-overlay
            persistent
            width="300"
          >
            <v-card
              color="primary"
              dark
            >
              <v-card-text>
                Por favor espere!!!
                <v-progress-linear
                  indeterminate
                  color="white"
                  class="mb-0"
                ></v-progress-linear>
              </v-card-text>
            </v-card>
    </v-dialog>
  </div>
</template>

<script>
import computeds from '~/mixins/computeds'

export default {
  name: "consulta-contribuyentePage",
  mixins: [computeds],
  data() {
    return {
      dialogWait : false,
      activeTab: 0,
      dialog_mostrar: false,
      search: this.$store.getters.getContribuyente=='Sin Seleccionar'?'':this.$store.getters.getContribuyente.numero_documento,
      numeroDocumento: '',
      dialog: false,
      dialog_editar: false,
      dialogDelete: false,
      nuevoRegistro: {},
      headers_inmueble: [
        { text: 'Número de expediente', align: 'center', value: 'inmueble.numero_expediente' },
        { text: 'Dirección', value: 'inmueble.direccion', align: 'center' },
        { text: 'Referencia', value: 'inmueble.referencia', align: 'center' },
        { text: 'Observación', value: 'inmueble.observaciones', align: 'center' },
        { text: '', value: 'actions2', sortable: false, align: 'center' },
      ],

      headers: [
        { text: 'Nombre/Razón social', align: 'center', value: 'nombre', },
        //{ text: 'Id', value: 'id', align: 'center' },
        { text: 'Número de documento RIF.', value: 'numero_documento', align: 'center' },
        { text: '', value: 'actions2', sortable: false, align: 'center' },
      ],
      inmuebleData: [],
      propietarioData: [],
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
      selectedItem: {
        id: '',
        numero_expediente: '',
        fecha_inscripcion: '',
        tipo: '',
        status: '',
        ambito: '',
        sector: '',
        manzana: '',
        parcela: '',
        subparcela: '',
        nivel: '',
        unidad: '',
        urbanizacion: '',
        calle: '',
        conjunto_residencial: '',
        edificio: '',
        avenida: '',
        torre: '',
        numero_civico: '',
        numero_casa: '',
        numero_piso: '',
        telefono: '',
        zona: '',
        direccion: '',
        referencia: '',
        observaciones: '',
        anio: '',
        codigo_periodo: '',
      },
      dialogSelecciona: false,
      defaultItem: {
        tipo_documento: '',
        nacionalidad: '',
        numero_documento: '',
        nombre: '',
        telefono_principal: '',
        telefono_secundario: '',
        email_principal: '',
        emaill_secundario: '',
      },
    }
  },
  head() {
    const title = 'Consulta Contribuyente';
    return {
      title,
    }
  },

  //mounted(){     this.getInmueble()   },

  methods: {
    openSelecciona(item) {
      this.defaultItem = item.inmueble
      console.log('this.defaultItem', this.defaultItem)
      this.dialogSelecciona = true
    },

    StoreContribuyenteId() {
      this.$store.getters.getExpediente == undefined ? console.log('vacio') : console.log(this.$store.getters.getExpediente)
      this.$store.dispatch('storeExpediente', this.defaultItem)
      this.dialogSelecciona = false
      this.StoreExpedienteId(this.selectedItem)
    },

     StoreExpedienteId(item) {
      this.$store.getters.getContribuyente == undefined ? console.log('vacio') : console.log('lleno', this.$store.getters.getContribuyente)
      this.$store.dispatch('storeContribuyente', item)
      this.dialog_mostrar = false

    },

    async getInmueblePropietarios() {
      try {
        this.dialogWait = true
        const response = await this.$axios.$get(`inmueble_propietarios/?propietario=${this.selectedItem.id}`);
        this.PropietariosData = response
        console.log('this.PropietariosData ', this.PropietariosData)
        this.dialogWait = false
        this.dialog_mostrar = true
      } catch (err) {
        console.log(err);
      }
    },




    async getContribuyentes() {
      this.numeroDocumento = this.search
      if (this.search.trim() == '') {
        this.$alert("cancel", { desc: "Debe colocar un número de RIF o un nombre válido.", hash: 'knsddcssdc', title: 'Advertencia' })

      }else{
        try {
          this.dialogWait = true
          const response = await this.$axios.$get(`filtrar_propietarios/?numero_documento=${this.numeroDocumento}`)
          if (response.length>0){
            this.propietarioData = response
            console.log('propietarioData',this.propietarioData)
            this.dialogWait = false
          }else{
            this.dialogWait = false
            this.$alert("cancel", { desc: "No se encontraron contribuentes.", hash: 'knsddcssdc', title: 'Advertencia' })
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