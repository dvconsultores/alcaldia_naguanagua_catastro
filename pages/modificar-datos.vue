<template>
  <div class="center no-padding divcol" style="margin-bottom:20px; padding-left: 256px;">
    <section class="section1-modificar-datos">
      <div class="modificar-datos-container">
        <div class="title-morado">
          <p class="modificar-datos-title">
            FICHA Contribuyentes
          </p>

          <v-dialog v-model="dialog" max-width="1600px">
            <template v-slot:activator="{ on, attrs }">
              <v-btn class="btn-add-tabla" v-bind="attrs" v-on="on">
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
                    <!--div class="radio-container">
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
                    </div-->

                    <div class="divrow center col-mobile" style="max-width:500px; gap:10px; width:100%;">
                      <!--v-autocomplete v-model="nuevoRegistro.nacionalidad" :items="items2"
                        class="autocomplete-field"></v-autocomplete-->

                      <v-text-field v-model="nuevoRegistro.numero_documento" class="input-big"
                        label="Nro de Documento RIF" style="max-width: 490px;"></v-text-field>
                    </div>

                    <v-text-field v-model="nuevoRegistro.nombre" class="input-big"
                      label="Nombre / Razón social"></v-text-field>

                    <v-textarea v-model="nuevoRegistro.direccion" class="input-textarea" label="Dirección fiscal"></v-textarea>

                    <v-text-field v-model="nuevoRegistro.telefono_principal" class="input-medium"
                      label="Teléfono"></v-text-field>

                    <!--v-text-field v-model="nuevoRegistro.telefono_secundario" class="input-medium"
                      label="Telefono 2"></v-text-field>

                    <v-text-field class="input-medium" label="Fax"></v-text-field-->

                    <v-text-field v-model="nuevoRegistro.email_principal" class="input-correo"
                      label="Correo electrónico"></v-text-field>

                    <!--v-text-field v-model="nuevoRegistro.emaill_secundario" class="input-correo"
                      label="Correo electronico 2"></v-text-field-->
                  </div>
                </div>

                <div class="div-btns">
                  <v-btn @click="createContribuyente()" style="background-color:var(--primary)!important;">
                    Guardar
                  </v-btn>

                  <v-btn style="background-color:var(--error)!important;" @click="dialog = false">
                    Cancelar
                  </v-btn>
                </div>
              </div>
            </v-card>
          </v-dialog>

          <v-dialog v-model="dialog_editar" max-width="1600px">
            <v-card id="dialog-editar-crear">
              <v-card-title>
                <span class="title">Editar contribuyente</span>
              </v-card-title>

              <hr>
              <div class="section1-crear">
                <div class="datos-contribuyente-div">
                  <div class="inputs-datos-container">
                    <!--div class="radio-container">
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
                    </div-->

                    <div class="divrow center col-mobile" style="max-width:500px; gap:10px; width:100%;">
                      <!--v-autocomplete v-model="defaultItem.nacionalidad" :items="items2"
                        class="autocomplete-field"></v-autocomplete-->

                      <v-text-field v-model="defaultItem.numero_documento" class="input-big"
                        label="Nro de Documento (RIF)" style="max-width: 490px;"></v-text-field>
                    </div>

                    <v-text-field v-model="defaultItem.nombre" class="input-big"
                      label="Nombre / Razón social"></v-text-field>

                    <v-textarea v-model="defaultItem.direccion" class="input-textarea" label="Dirección fiscal"></v-textarea>

                    <v-text-field v-model="defaultItem.telefono_principal" class="input-medium"
                      label="Teléfono"></v-text-field>

                    <!--v-text-field v-model="defaultItem.telefono_secundario" class="input-medium"
                      label="Telefono 2"></v-text-field>

                    <v-text-field class="input-medium" label="Fax"></v-text-field-->

                    <v-text-field v-model="defaultItem.email_principal" class="input-correo"
                      label="Correo electrónico"></v-text-field>

                    <!--v-text-field v-model="defaultItem.emaill_secundario" class="input-correo"
                      label="Correo electronico 2"></v-text-field-->
                  </div>
                </div>

                <div class="div-btns">
                  <v-btn @click="saveData()" style="background-color:var(--primary)!important;">
                    Guardar
                  </v-btn>

                  <v-btn style="background-color:var(--error)!important;" @click="dialog_editar = false">
                    Cancelar
                  </v-btn>
                </div>
              </div>
            </v-card>
          </v-dialog>
        </div>

          <div class="data-table-container">
              <div>
                <v-text-field v-model="search" append-icon="mdi-magnify" label="Buscar contribuyente" hide-details class="input-data-table" @keyup.enter="getContribuyentes"></v-text-field>
                <!--v-btn @click="getContribuyente" color="primary">Buscar contribuyente</v-btn-->
              </div>
            <v-data-table :headers="headers" :items="propietarioData" :items-per-page="10" :search="search" :footer-props="{
              itemsPerPageText: 'Items por página',
            }" sort-by="codigo" class="mytabla" mobile-breakpoint="840">
              <template v-slot:top>
                <v-toolbar flat class="toolbar-tabla">
                  <v-dialog v-model="dialogDelete" max-width="500px">
                    <v-card id="dialog-eliminar-card">
                      <v-card-title class="center title">¿Desea eliminarlo?</v-card-title>
                      <span class="alerta-text">Esta acción no se puede revertir</span>
                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn class="btn dialog-btn" text @click="deleteItem()">Si</v-btn>
                        <v-btn class="btn dialog-btn" text @click="dialogDelete = false"
                          style="background-color:var(--error)!important;">No</v-btn>
                        <v-spacer></v-spacer>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                  <v-dialog v-model="dialogSelecciona" max-width="500px">
                    <v-card id="dialog-eliminar-card">
                      <v-card-title class="center title">¿Seleccionarlo?</v-card-title>
                      <span class="alerta-text" style="text-align:center;">Este será el contribuyente con el cual usted
                        realizará las operaciones.</span>
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
              <template #[`item.actions`]="{ item }">
                <v-icon color="var(--success)" big @click="editItem(item)">
                  mdi-pencil
                </v-icon>
                <v-icon color="var(--error)" big @click="openDelete(item)">
                  mdi-delete
                </v-icon>
              </template>

              <template #[`item.actions2`]="{ item }">
                <v-btn class="btn-tabla" @click="openSelecciona(item)">
                  Seleccionar contribuyente
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
  name: "modificar-datosPage",
  mixins: [computeds],
  data() {
    return {
      dialogWait : false,
      numeroDocumento: '',
      search: this.$store.getters.getContribuyente=='Sin Seleccionar'?'':this.$store.getters.getContribuyente.numero_documento,
      dialog: false,
      dialog_editar: false,
      dialogDelete: false,
      dialogSelecciona: false,
      nuevoRegistro: {},
      headers: [
        { text: 'Nombre/Razón social', align: 'center', value: 'nombre', },
        { text: 'Id', value: 'id', align: 'center' },
        { text: 'Número de documento RIF', value: 'numero_documento', align: 'center' },
        { text: '', value: 'actions', sortable: false, align: 'center' },
        { text: '', value: 'actions2', sortable: false, align: 'center' },
      ],
      propietarioData: [],
      items2: ['V', 'J', 'G', 'E'],

      defaultItem: {
        tipo_documento: '',
        nacionalidad: '',
        numero_documento: '',
        nombre: '',
        direccion: '',
        telefono_principal: '',
        telefono_secundario: '',
        email_principal: '',
        emaill_secundario: '',
      },
    }
  },
  head() {
    const title = 'Ficha Contribuyente';
    return {
      title,
    }
  },

  //mounted() { this.getContribuyente() },

  methods: {

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

    createContribuyente() {
      this.$axios.$post('propietario/', this.nuevoRegistro).then(res => {
        console.log(res.data)
        this.nuevoRegistro = {}
        this.propietarioData.push(res)
        this.dialog = false
        this.$alert("success", { desc: "Se ha creado un nuevo contribuyente con éxito", hash: 'knsddcssdc', title: 'Creación de contribuyente' })
      }).catch(err => {
        console.log(err)
      })
    },

    editItem(item) {
      console.log(item)
      this.dialog_editar = true
      this.defaultItem.id = item.id
      this.defaultItem.tipo_documento = item.tipo_documento
      this.defaultItem.nacionalidad = item.nacionalidad
      this.defaultItem.numero_documento = item.numero_documento
      this.defaultItem.nombre = item.nombre
      this.defaultItem.direccion = item.direccion
      this.defaultItem.telefono_principal = item.telefono_principal
      this.defaultItem.telefono_secundario = item.telefono_secundario
      this.defaultItem.email_principal = item.email_principal
      this.defaultItem.emaill_secundario = item.emaill_secundario
    },

    saveData() {
      const formData = new FormData()
      formData.append('tipo_documento', this.defaultItem.tipo_documento)
      formData.append('nacionalidad', this.defaultItem.nacionalidad)
      formData.append('numero_documento', this.defaultItem.numero_documento)
      formData.append('nombre', this.defaultItem.nombre)
      formData.append('direccion', this.defaultItem.direccion)
      formData.append('telefono_principal', this.defaultItem.telefono_principal)
      formData.append('telefono_secundario', this.defaultItem.telefono_secundario)
      formData.append('email_principal', this.defaultItem.email_principal)
      formData.append('email_secundario', this.defaultItem.emaill_secundario)

      this.$axios.$patch('propietario/' + this.defaultItem.id + '/', formData).then((res) => {
        console.log(res.data)
        this.$alert("success", { desc: "Se ha editado un contribuyente con éxito", hash: 'knsddcssdc', title: 'Edición de contribuyente' })
        const index = this.propietarioData.findIndex((item) => item.id === this.defaultItem.id);
        if (index !== -1) {
          this.$set(this.propietarioData, index, { ...this.defaultItem });
        }
      }).catch((err) => {
        console.log(err)
      });

      this.dialog_editar = false
    },

    openDelete(item) {
      this.defaultItem = item
      this.dialogDelete = true
    },

    openSelecciona(item) {
      this.defaultItem = item
      this.dialogSelecciona = true
    },

    StoreContribuyenteId() {
      //console.log(this.defaultItem)
      this.$store.getters.getContribuyente == undefined ? console.log('vacio') : console.log(this.$store.getters.getContribuyente)
      this.$store.dispatch('storeContribuyente', this.defaultItem)
      this.dialogSelecciona = false
    },
    deleteItem() {
      this.$axios.$delete('propietario/' + this.defaultItem.id + '/').then((res) => {
        console.log(res.data)
        this.dialogDelete = false
        this.$alert("success", { desc: "Se ha eliminado un contribuyente con éxito", hash: 'knsddcssdc', title: 'Eliminación de contribuyente' })
        const index = this.propietarioData.findIndex((item) => item.id === this.defaultItem.id);
        if (index !== -1) {
          this.propietarioData.splice(index, 1);
        }
      }).catch((err) => {
        console.log(err)
      });
    },
  }
};
</script>


<style src="~/assets/styles/pages/modificar-datos.scss" lang="scss" />