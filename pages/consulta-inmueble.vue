<template>
  <div class="center no-padding divcol" style="margin-bottom:20px; padding-left: 256px;">
    <section class="section1-consulta-inmueble">
      <div class="consulta-inmueble-container">
        <div class="title-morado">
          <p class="consulta-inmueble-title">
            CONSULTA Inmuebles
          </p>
          <v-dialog v-model="dialog_mostrar" max-width="1600px">
            <div id="dialog-mostrar">
              <v-card class="card-detalles">
                <v-tabs v-model="activeTab">
                  <v-tab :value="0">
                    Datos del Inmueble
                  </v-tab>
                  <v-tab :value="1">
                    Contribuyentes Asociados
                  </v-tab>
                </v-tabs>
                <hr>
                <v-tabs-items v-model="activeTab" style="background-color: #fff!important; border-radius: 10px;">
                  <v-tab-item :value="0">
                    <div class="inputs-container">
                      <v-text-field v-model="selectedItem.numero_expediente" class="input-mostrar"
                        label="Número de expediente" disabled></v-text-field>
                      <v-text-field v-model="selectedItem.descripcion_tipo" class="input-mostrar" label="Tipo"
                        disabled></v-text-field>
                      <v-text-field v-model="selectedItem.descripcion_status" class="input-mostrar" label="Estatus"
                        disabled></v-text-field>
                      <v-text-field v-model="selectedItem.descripcion_ambito" class="input-mostrar" label="Ambito"
                        disabled></v-text-field>
                      <v-text-field v-model="selectedItem.descripcion_sector" class="input-mostrar" label="Sector"
                        disabled></v-text-field>
                      <v-text-field v-model="selectedItem.descripcion_manzana" class="input-mostrar" label="Manzana"
                        disabled></v-text-field>
                      <v-text-field v-model="selectedItem.codigo_parcela" class="input-mostrar" label="Parcela"
                        disabled></v-text-field>
                      <v-text-field v-model="selectedItem.codigo_subparcela" class="input-mostrar" label="Sub-Parcela"
                        disabled></v-text-field>
                      <v-text-field v-model="selectedItem.descripcion_nivel" class="input-mostrar" label="Nivel"
                        disabled></v-text-field>
                      <v-text-field v-model="selectedItem.descripcion_unidad" class="input-mostrar" label="Unidad"
                        disabled></v-text-field>
                      <v-text-field v-model="selectedItem.nombre_urbanizacion" class="input-mostrar" label="Urbanización"
                        disabled></v-text-field>
                      <v-text-field v-model="selectedItem.nombre_calle" class="input-mostrar" label="Calle"
                        disabled></v-text-field>
                      <v-text-field v-model="selectedItem.nombre_conjunto_residencial" class="input-mostrar"
                        label="Conjunto Residencial" disabled></v-text-field>
                      <v-text-field v-model="selectedItem.nombre_edificio" class="input-mostrar" label="Edificio"
                        disabled></v-text-field>
                      <v-text-field v-model="selectedItem.nombre_avenida" class="input-mostrar" label="Avenida"
                        disabled></v-text-field>
                      <v-text-field v-model="selectedItem.nombre_torre" class="input-mostrar" label="Torre"
                        disabled></v-text-field>
                      <v-text-field v-model="selectedItem.numero_civico" class="input-mostrar" label="Nro. Civicio"
                        disabled></v-text-field>
                      <v-text-field v-model="selectedItem.numero_casa" class="input-mostrar" label="Nro. Casa"
                        disabled></v-text-field>
                      <v-text-field v-model="selectedItem.numero_piso" class="input-mostrar" label="Nro. Piso"
                        disabled></v-text-field>
                      <v-text-field v-model="selectedItem.telefono" class="input-mostrar" label="Teléfono"
                        disabled></v-text-field>
                      <v-text-field v-model="selectedItem.descripcion_zona" class="input-mostrar" label="Zona"
                        disabled></v-text-field>
                      <v-text-field v-model="selectedItem.direccion" class="input-mostrar" label="Dirección"
                        disabled></v-text-field>
                      <v-text-field v-model="selectedItem.referencia" class="input-mostrar" label="Referencia"
                        disabled></v-text-field>
                      <v-text-field v-model="selectedItem.observaciones" class="input-mostrar" label="Observaciones"
                        disabled></v-text-field>
                      <v-text-field v-model="selectedItem.fecha_inscripcion" class="input-mostrar"
                        label="Fecha inscripcion" disabled></v-text-field>
                      <v-text-field v-model="selectedItem.anio" class="input-mostrar" label="Año inicio deuda"
                        disabled></v-text-field>
                      <v-text-field v-model="selectedItem.codigo_periodo" class="input-mostrar"
                        label="Período inicio deuda" disabled></v-text-field>
                      <v-text-field v-model="selectedItem.id" class="input-mostrar" label="id" disabled></v-text-field>
                    </div>

                    <div class="div-btns" @click="StoreExpedienteId(selectedItem)">
                      <v-btn>
                        Seleccionar Expediente
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
            <v-text-field v-model="search" append-icon="mdi-magnify" label="Buscar INMUEBLE por número de expediente" hide-details
              class="input-data-table" @keyup.enter="getInmueble"></v-text-field>
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
  name: "consulta-inmueblePage",
  mixins: [computeds],
  data() {
    return {
      dialogWait : false,
      activeTab: 0,
      dialog_mostrar: false,
      search: this.$store.getters.getExpediente=='Sin Seleccionar'?'':this.$store.getters.getExpediente.numero_expediente,
      numeroDocumento: '',
      dialog: false,
      dialog_editar: false,
      dialogDelete: false,
      nuevoRegistro: {},
      headers: [
        { text: 'Número de expediente', align: 'center', value: 'numero_expediente' },
        { text: 'Dirección', value: 'direccion', align: 'center' },
        { text: 'Referencia', value: 'referencia', align: 'center' },
        { text: 'Observación', value: 'observacion', align: 'center' },
        { text: '', value: 'actions2', sortable: false, align: 'center' },
      ],

      headers_propietario: [
        { text: 'Nombre/Razón social', align: 'center', value: 'propietario.nombre', },
        { text: 'Id', value: 'propietario.id', align: 'center' },
        { text: 'Número de documento RIF.', value: 'propietario.numero_documento', align: 'center' },
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
    const title = 'Consulta Inmueble';
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
      this.$store.getters.getContribuyente == undefined ? console.log('vacio') : console.log(this.$store.getters.getContribuyente)
      this.$store.dispatch('storeContribuyente', this.defaultItem)
      this.dialogSelecciona = false
      this.StoreExpedienteId(this.selectedItem)
    },
    async getInmueblePropietarios() {
      try {
        this.dialogWait = true
        const response = await this.$axios.$get(`inmueble_propietarios/?inmueble=${this.selectedItem.id}`);
        this.PropietariosData = response
        console.log('this.PropietariosData ', this.PropietariosData)
        this.dialogWait = false
        this.dialog_mostrar = true
      } catch (err) {
        console.log(err);
      }
    },


    StoreExpedienteId(item) {
      this.$store.getters.getExpediente == undefined ? console.log('vacio') : console.log('lleno', this.$store.getters.getExpediente)
      this.$store.dispatch('storeExpediente', item)
      //console.log('lucas1')
      // console.log(item)
      // console.log('lucas2')
      // console.log(this.$store.getters.getExpediente)
      // console.log(JSON.parse(JSON.stringify(this.$store.getters.getExpediente)))
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
          const response = await this.$axios.$get(`filtrar_inmuebles/?numero_expediente=${this.numeroDocumento}`)
          if (response.length>0){
            idInmueble = response[0].id
            const response1 = await this.$axios.$get('inmueble/' + idInmueble)
            this.inmuebleData = [response1]
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