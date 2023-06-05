<template>
  <div class="center no-padding divcol" style="margin-bottom:20px; padding-left: 256px;">
    <section class="section1-consulta-inmueble">
      <div class="consulta-inmueble-container">
        <div class="title-morado">
          <p class="consulta-inmueble-title">
            Inmuebles
          </p>

          <!-- <v-dialog
            v-model="dialog"
            max-width="1600px"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                class="btn-add-tabla"
                v-bind="attrs"
                v-on="on"
              >
                +
              </v-btn>
            </template>
            <v-card id="dialog-editar-crear">
              <v-card-title>
                <span class="title">Crear Contribuyente</span>
              </v-card-title>

              <hr>

              <div class="section1-crear">
                <div class="datos-contribuyente-div">
                  <div class="inputs-datos-container">
                    <div class="radio-container">
                      <span>
                        Tipo de documento
                      </span>
                      <div>
                        <v-radio-group v-model="nuevoRegistro.tipo_documento" row>
                          <v-radio label="Cedula" value="Cedula" name="radio-group"></v-radio>
                          <v-radio label="RIF" value="RIF" name="radio-group"></v-radio>
                          <v-radio label="Pasaporte" value="Pasaporte" name="radio-group"></v-radio>
                        </v-radio-group>
                      </div>
                    </div>

                    <div class="divrow center col-mobile" style="max-width:500px; gap:10px; width:100%;">
                      <v-autocomplete
                        v-model="nuevoRegistro.nacionalidad"
                        :items="items2"
                        class="autocomplete-field"
                      ></v-autocomplete>

                      <v-text-field
                      v-model="nuevoRegistro.numero_documento"
                      class="input-big"
                      label="Nro de Documento"
                      style="max-width: 490px;"
                      ></v-text-field>
                    </div>

                    <v-text-field
                      v-model="nuevoRegistro.nombre"
                      class="input-big"
                      label="Nombre / Razón Social"
                    ></v-text-field>

                    <v-textarea
                    class="input-textarea"
                    label="Dirección"
                    ></v-textarea>

                    <v-text-field
                      v-model="nuevoRegistro.telefono_principal"
                      class="input-medium"
                      label="Telefono"
                    ></v-text-field>

                    <v-text-field
                      v-model="nuevoRegistro.telefono_secundario"
                      class="input-medium"
                      label="Telefono 2"
                    ></v-text-field>

                    <v-text-field
                      class="input-medium"
                      label="Fax"
                    ></v-text-field>

                    <v-text-field
                      v-model="nuevoRegistro.email_principal"
                      class="input-correo"
                      label="Correo electronico"
                    ></v-text-field>

                    <v-text-field
                      v-model="nuevoRegistro.emaill_secundario"
                      class="input-correo"
                      label="Correo electronico 2"
                    ></v-text-field>
                  </div>
                </div>

                <div class="div-btns">
                  <v-btn @click="createContribuyente()">
                    Guardar
                  </v-btn>
                  
                  <v-btn style="background-color:#ED057E!important;" @click="dialog = false">
                    Cancelar
                  </v-btn>
                </div>
              </div>
            </v-card>
          </v-dialog> -->

          <!-- <v-dialog
            v-model="dialog_editar"
            max-width="1600px"
          >
            <v-card id="dialog-editar-crear">
              <v-card-title>
                <span class="title">Editar Contribuyente</span>
              </v-card-title>

              <hr>
              <div class="section1-crear">
                <div class="datos-contribuyente-div">
                  <div class="inputs-datos-container">
                    <div class="radio-container">
                      <span>
                        Tipo de documento
                      </span>
                      <div>
                        <v-radio-group v-model="defaultItem.tipo_documento" row>
                          <v-radio label="Cedula" value="Cedula" name="radio-group"></v-radio>
                          <v-radio label="RIF" value="RIF" name="radio-group"></v-radio>
                          <v-radio label="Pasaporte" value="Pasaporte" name="radio-group"></v-radio>
                        </v-radio-group>
                      </div>
                    </div>

                    <div class="divrow center col-mobile" style="max-width:500px; gap:10px; width:100%;">
                      <v-autocomplete
                        v-model="defaultItem.nacionalidad"
                        :items="items2"
                        class="autocomplete-field"
                      ></v-autocomplete>

                      <v-text-field
                      v-model="defaultItem.numero_documento"
                      class="input-big"
                      label="Nro de Documento"
                      style="max-width: 490px;"
                      ></v-text-field>
                    </div>

                    <v-text-field
                      v-model="defaultItem.nombre"
                      class="input-big"
                      label="Nombre / Razón Social"
                    ></v-text-field>

                    <v-textarea
                    class="input-textarea"
                    label="Dirección"
                    ></v-textarea>

                    <v-text-field
                      v-model="defaultItem.telefono_principal"
                      class="input-medium"
                      label="Telefono"
                    ></v-text-field>

                    <v-text-field
                      v-model="defaultItem.telefono_secundario"
                      class="input-medium"
                      label="Telefono 2"
                    ></v-text-field>

                    <v-text-field
                      class="input-medium"
                      label="Fax"
                    ></v-text-field>

                    <v-text-field
                      v-model="defaultItem.email_principal"
                      class="input-correo"
                      label="Correo electronico"
                    ></v-text-field>

                    <v-text-field
                      v-model="defaultItem.emaill_secundario"
                      class="input-correo"
                      label="Correo electronico 2"
                    ></v-text-field>
                  </div>
                </div>

                <div class="div-btns">
                  <v-btn @click="saveData()">
                    Guardar
                  </v-btn>
                  
                  <v-btn style="background-color:#ED057E!important;" @click="dialog_editar = false">
                    Cancelar
                  </v-btn>
                </div>
              </div>
            </v-card>
          </v-dialog> -->

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
                        <v-text-field class="input-mostrar" label="Contribuyente"></v-text-field>
                        <v-text-field class="input-mostrar" label="Contribuyente"></v-text-field>
                        <v-text-field class="input-mostrar" label="Contribuyente"></v-text-field>
                        <v-text-field class="input-mostrar" label="Contribuyente"></v-text-field>
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
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Buscar"
            hide-details
            class="input-data-table"
          ></v-text-field>

          <v-data-table
            :headers="headers"
            :items="inmuebleData"
            :items-per-page="10"
            :search="search"
            :footer-props="{
              itemsPerPageText: 'Items por página',
            }"
            sort-by="codigo"
            class="mytabla"
            mobile-breakpoint="840"
          >
            <!-- <template v-slot:top>
              <v-toolbar
                flat
                class="toolbar-tabla"
              >  
                <v-dialog v-model="dialogDelete" max-width="500px">
                  <v-card id="dialog-eliminar-card">
                    <v-card-title class="center title">¿Desea eliminarlo?</v-card-title>
                    <span class="alerta-text">Esta acción no se puede revertir</span>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn class="btn dialog-btn" text @click="deleteItem()">Si</v-btn>
                      <v-btn class="btn dialog-btn" text @click="dialogDelete = false" style="background-color:#ED057E!important;">No</v-btn>
                      <v-spacer></v-spacer>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </v-toolbar>
            </template> -->
            <!-- <template #[`item.actions`]="{ item }">
              <v-icon
                color="#810880"
                big
                @click="editItem(item)"
              >
                mdi-pencil
              </v-icon>
              <v-icon
                color="#810880"
                big
                @click="openDelete(item)"
              >
                mdi-delete
              </v-icon>
            </template> -->

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
  name: "callePage",
  mixins: [computeds],
  data() {
    return {  
      activeTab: 0,
      dialog_mostrar: false,
      search: '',
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
      inmuebleData: [],
      // items2: ['V', 'J', 'G', 'E'],

      // defaultItem: {
      //   tipo_documento: '',
      //   nacionalidad: '',
      //   numero_documento:'',
      //   nombre:'',
      //   telefono_principal:'',
      //   telefono_secundario:'',
      //   email_principal:'',
      //   emaill_secundario:'',
      // },

      selectedItem: {
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
      },
    }
  },
  head() {
    const title = 'Consulta Inmueble';
    return {
      title,
    }
  },

  mounted(){
    this.getInmueble()
  },

  methods: {
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
    
    getInmueble() {
      this.$axios.$get('inmueble').then(response => {
          this.inmuebleData = response
        }).catch(err => {
          console.log(err)
        })
    },

    // createContribuyente(){
    //   this.$axios.$post('inmueble/', this.nuevoRegistro).then(res => {
    //       console.log(res.data)
    //       this.nuevoRegistro = {}
    //       this.inmuebleData.push(res)
    //       this.dialog = false
    //       this.$alert("success", {desc: "Se ha creado un nuevo inmueble con éxito", hash: 'knsddcssdc', title:'Creado'})        
    //     }).catch(err => {
    //       console.log(err)
    //     })
    // }, 

    // editItem(item){
    //   console.log(item)
    //   this.dialog_editar = true
    //   this.defaultItem.id = item.id
    //   this.defaultItem.tipo_documento = item.tipo_documento
    //   this.defaultItem.nacionalidad = item.nacionalidad
    //   this.defaultItem.numero_documento = item.numero_documento
    //   this.defaultItem.nombre = item.nombre
    //   this.defaultItem.telefono_principal = item.telefono_principal
    //   this.defaultItem.telefono_secundario = item.telefono_secundario
    //   this.defaultItem.email_principal = item.email_principal
    //   this.defaultItem.emaill_secundario = item.emaill_secundario
    // },

    // saveData(){
    //   const formData = new FormData()
    //   formData.append('tipo_documento', this.defaultItem.tipo_documento)
    //   formData.append('nacionalidad', this.defaultItem.nacionalidad)
    //   formData.append('numero_documento', this.defaultItem.numero_documento)
    //   formData.append('nombre', this.defaultItem.nombre)
    //   formData.append('telefono_principal', this.defaultItem.telefono_principal)
    //   formData.append('telefono_secundario', this.defaultItem.telefono_secundario)
    //   formData.append('email_principal', this.defaultItem.email_principal)
    //   formData.append('email_secundario', this.defaultItem.emaill_secundario)

    //   this.$axios.$patch('inmueble/'+ this.defaultItem.id + '/', formData).then((res) => {
    //     console.log(res.data)
    //     this.$alert("success", {desc: "Se ha editado un inmueble con éxito", hash: 'knsddcssdc', title:'Editado'})  
    //     const index = this.inmuebleData.findIndex((item) => item.id === this.defaultItem.id);
    //     if (index !== -1) {
    //       this.$set(this.inmuebleData, index, { ...this.defaultItem });
    //     }       
    //   }).catch((err) => {
    //     console.log(err)
    //   });

    //   this.dialog_editar = false
    // },  

    // openDelete(item){
    //   this.defaultItem = item
    //   this.dialogDelete = true
    // },

    // deleteItem(){
    //   this.$axios.$delete('inmueble/'+ this.defaultItem.id + '/').then((res) => {
    //     console.log(res.data)
    //     this.dialogDelete = false
    //     this.$alert("success", {desc: "Se ha eliminado un inmueble con éxito", hash: 'knsddcssdc', title:'Eliminado'}) 
    //     const index = this.inmuebleData.findIndex((item) => item.id === this.defaultItem.id);
    //     if (index !== -1) {
    //       this.inmuebleData.splice(index, 1);
    //     }         
    //   }).catch((err) => {
    //     console.log(err)
    //   });
    // },

    openDialog(item) {
      this.selectedItem = { ...item }
      this.dialog_mostrar = true
    },
  }
};
</script>


<style src="~/assets/styles/pages/consulta-inmueble.scss" lang="scss" />