<template>
  <div class="center no-padding divcol" style="margin-bottom:20px; padding-left: 256px;">
    <section class="section1-consulta-inmueble">
      <div class="consulta-inmueble-container">
        <div class="title-morado">
          <p class="consulta-inmueble-title">
            Inmuebles
          </p>
          <v-dialog
            v-model="dialog_mostrar"
            max-width="1600px"
          >    
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
                        <v-text-field v-model="selectedItem.numero_expediente" class="input-mostrar" label="Numero de expediente"></v-text-field>
                        <v-text-field v-model="selectedItem.descripcion_tipo" class="input-mostrar" label="Tipo"></v-text-field>
                        <v-text-field v-model="selectedItem.descripcion_status" class="input-mostrar" label="Estatus"></v-text-field>
                        <v-text-field v-model="selectedItem.descripcion_ambito" class="input-mostrar" label="Ambito"></v-text-field>
                        <v-text-field v-model="selectedItem.descripcion_sector" class="input-mostrar" label="Sector"></v-text-field>
                        <v-text-field v-model="selectedItem.descripcion_manzana" class="input-mostrar" label="Manzana"></v-text-field>
                        <v-text-field v-model="selectedItem.codigo_parcela" class="input-mostrar" label="Parcela"></v-text-field>
                        <v-text-field v-model="selectedItem.codigo_subparcela" class="input-mostrar" label="Sub-Parcela"></v-text-field>
                        <v-text-field v-model="selectedItem.descripcion_nivel" class="input-mostrar" label="Nivel"></v-text-field>
                        <v-text-field v-model="selectedItem.descripcion_unidad" class="input-mostrar" label="Unidad"></v-text-field>
                        <v-text-field v-model="selectedItem.nombre_urbanizacion" class="input-mostrar" label="Urbanización"></v-text-field>
                        <v-text-field v-model="selectedItem.nombre_calle" class="input-mostrar" label="Calle"></v-text-field>
                        <v-text-field v-model="selectedItem.nombre_conjunto_residencial" class="input-mostrar" label="Conjunto Residencial"></v-text-field>
                        <v-text-field v-model="selectedItem.nombre_edificio" class="input-mostrar" label="Edificio"></v-text-field>
                        <v-text-field v-model="selectedItem.nombre_avenida" class="input-mostrar" label="Avenida"></v-text-field>
                        <v-text-field v-model="selectedItem.nombre_torre" class="input-mostrar" label="Torre"></v-text-field>
                        <v-text-field v-model="selectedItem.numero_civico" class="input-mostrar" label="Nro. Civicio"></v-text-field>
                        <v-text-field v-model="selectedItem.numero_casa" class="input-mostrar" label="Nro. Casa"></v-text-field>
                        <v-text-field v-model="selectedItem.numero_piso" class="input-mostrar" label="Nro. Piso"></v-text-field>
                        <v-text-field v-model="selectedItem.telefono" class="input-mostrar" label="Telefono"></v-text-field>
                        <v-text-field v-model="selectedItem.descripcion_zona" class="input-mostrar" label="Zona"></v-text-field>
                        <v-text-field v-model="selectedItem.direccion" class="input-mostrar" label="Dirección"></v-text-field>
                        <v-text-field v-model="selectedItem.referencia" class="input-mostrar" label="Referencia"></v-text-field>
                        <v-text-field v-model="selectedItem.observaciones" class="input-mostrar" label="Observaciones"></v-text-field>
                        <v-text-field v-model="selectedItem.fecha_inscripcion" class="input-mostrar" label="Fecha inscripcion"></v-text-field>
                        <v-text-field v-model="selectedItem.anio" class="input-mostrar" label="Año"></v-text-field>
                        <v-text-field v-model="selectedItem.codigo_periodo" class="input-mostrar" label="Período"></v-text-field>
                        <v-text-field v-model="selectedItem.id" class="input-mostrar" label="id"></v-text-field>
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
                      <div class="inputs-container">
                        <v-text-field v-model="selectedPropietario.nacionalidad" class="input-mostrar" label="Nacionalidad"></v-text-field>
                        <v-text-field v-model="selectedPropietario.numero_documento" class="input-mostrar" label="Número documento"></v-text-field>
                        <v-text-field v-model="selectedPropietario.nombre" class="input-mostrar" label="Nombre"></v-text-field>
                      </div>
                      <div class="center" style="margin-top:30px;">
                        <v-btn class="btn" style="background-color:#ED057E!important; width: 200px!important;" @click="dialog_mostrar = false">
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
              <v-text-field v-model="search" append-icon="mdi-magnify" label="Buscar inmueble" hide-details class="input-data-table"></v-text-field>
              <v-btn @click="getInmueble" color="primary">Buscar inmueble</v-btn>
            </div>


          <v-data-table :headers="headers" :items="inmuebleData" :items-per-page="10" :search="search" :footer-props="{
            itemsPerPageText: 'Items por página',
          }" sort-by="codigo" class="mytabla" mobile-breakpoint="840">


            <template #[`item.actions2`]="{ item }" >
              <v-btn class="btn-tabla" @click="openDialog(item)">
                Ver Detalle
              </v-btn>
            </template>
          </v-data-table>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
import computeds from '~/mixins/computeds'

export default {
  name: "consulta_inmueblePage",
  mixins: [computeds],
  data() {
    return {  
      activeTab: 0,
      dialog_mostrar: false,
      search: '',
      numeroDocumento:'',
      dialog: false,
      dialog_editar: false,
      dialogDelete: false,
      nuevoRegistro:{},
      headers: [
        { text: 'Numero de expediente', align: 'center', value: 'numero_expediente'},
        { text: 'Urbanización', value: 'nombre_urbanizacion', align:'center' },
        { text: 'Conjunto', value: 'nombre_conjunto_residencial', align:'center' },
        { text: 'Status', value: 'descripcion_status', align:'center' },
        // { text: '', value: 'actions', sortable: false, align:'center' },
        { text: '', value: 'actions2', sortable: false, align:'center' },
      ],

      headers_propietario: [
        { text: 'Numero de expediente', align: 'center', value: 'inmueble.numero_expediente'},
        { text: 'Urbanización', value: 'inmueble.nombre_urbanizacion', align:'center' },
        { text: 'Conjunto', value: 'inmueble.nombre_conjunto_residencial', align:'center' },
        { text: 'Status', value: 'inmueble.descripcion_status', align:'center' },
        // { text: '', value: 'actions', sortable: false, align:'center' },
        { text: '', value: 'actions2', sortable: false, align:'center' },
      ],
      inmuebleData: [],
      inmueblePropietariosData:[],
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
        manzana:'',
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
     getInmueblePropietarios(){
       this.$axios.$get(`inmueble_propietarios/?inmueble=${this.selectedItem.id}`).then(response => {
         this.inmueblePropietariosData = response[0]
         this.selectedPropietario.nombre=this.inmueblePropietariosData.propietario.nombre
         this.selectedPropietario.nacionalidad=this.inmueblePropietariosData.propietario.nacionalidad
         this.selectedPropietario.numero_documento=this.inmueblePropietariosData.propietario.numero_documento
         console.log(this.inmueblePropietariosData, 'inmueblePropietariosData')
         console.log(this.selectedPropietario, 'selectedPropietario')
       }).catch(err => {
         console.log(err)
       })
     },


    

    StoreExpedienteId(item) {
      this.$store.getters.getExpediente== undefined ? console.log('vacio') : console.log('lleno',this.$store.getters.getExpediente)
      this.$store.dispatch('storeExpediente', item)
      console.log('lucas1')
      console.log(item)
      console.log('lucas2')
      console.log(this.$store.getters.getExpediente)
      console.log(JSON.parse(JSON.stringify(this.$store.getters.getExpediente)))
      this.dialog_mostrar = false
    },

    getContribuyente() {
        this.numeroDocumento=this.search
        this.$axios.$get(`filtrar_propietarios/?numero_documento=${this.numeroDocumento}`).then(response => {

        this.propietarioData = response
        console.log(' this.propietarioData', typeof this.propietarioData)
      }).catch(err => {
        console.log(err)
      })
    },

    getInmueble() {

      var idInmueble
      this.inmuebleData=[]
      this.numeroDocumento=this.search
        this.$axios.$get(`filtrar_inmuebles/?numero_expediente=${this.numeroDocumento}`).then(response => {
          idInmueble= response[0].id
          console.log(' idInmueble', idInmueble)
          this.$axios.$get('inmueble/'+idInmueble).then(response => {
              this.inmuebleData = [response]

            }).catch(err => {
              console.log(err)
            })
        }).catch(err => {
        console.log(err)
      })          
    },

    openDialog(item) {
      this.selectedItem = item
      this.dialog_mostrar = true 
      this.getInmueblePropietarios()
    
      // this.$axios.$get(`inmueble_propietarios/?inmueble=${item.id}`).then(response => {
      //   this.inmueblePropietariosData = response
      //   this.nombrePropietario = this.inmueblePropietariosData.propietario.nombre
      //   console.log(this.inmueblePropietariosData, 'dataa')
      //   this.dialog_mostrar = true
      // }).catch(err => {
      //   console.log(err)
      // })
    },
  }
};
</script>


<style src="~/assets/styles/pages/consulta-inmueble.scss" lang="scss" />