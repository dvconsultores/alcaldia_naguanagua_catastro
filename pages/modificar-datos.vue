<template>
  <div class="center no-padding divcol" style="margin-bottom:20px; padding-left: 256px;">
    <section class="section1-modificar-datos">
      <div class="modificar-datos-container">
        <div class="title-morado">
          <p class="modificar-datos-title">
            Propietarios o contribuyentes
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
                      <v-autocomplete v-model="nuevoRegistro.nacionalidad" :items="items2"
                        class="autocomplete-field"></v-autocomplete>

                      <v-text-field v-model="nuevoRegistro.numero_documento" class="input-big" label="Nro de Documento"
                        style="max-width: 490px;"></v-text-field>
                    </div>

                    <v-text-field v-model="nuevoRegistro.nombre" class="input-big"
                      label="Nombre / Razón Social"></v-text-field>

                    <v-textarea class="input-textarea" label="Dirección"></v-textarea>

                    <v-text-field v-model="nuevoRegistro.telefono_principal" class="input-medium"
                      label="Telefono"></v-text-field>

                    <v-text-field v-model="nuevoRegistro.telefono_secundario" class="input-medium"
                      label="Telefono 2"></v-text-field>

                    <v-text-field class="input-medium" label="Fax"></v-text-field>

                    <v-text-field v-model="nuevoRegistro.email_principal" class="input-correo"
                      label="Correo electronico"></v-text-field>

                    <v-text-field v-model="nuevoRegistro.emaill_secundario" class="input-correo"
                      label="Correo electronico 2"></v-text-field>
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
          </v-dialog>

          <v-dialog v-model="dialog_editar" max-width="1600px">
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
                      <v-autocomplete v-model="defaultItem.nacionalidad" :items="items2"
                        class="autocomplete-field"></v-autocomplete>

                      <v-text-field v-model="defaultItem.numero_documento" class="input-big" label="Nro de Documento"
                        style="max-width: 490px;"></v-text-field>
                    </div>

                    <v-text-field v-model="defaultItem.nombre" class="input-big"
                      label="Nombre / Razón Social"></v-text-field>

                    <v-textarea class="input-textarea" label="Dirección"></v-textarea>

                    <v-text-field v-model="defaultItem.telefono_principal" class="input-medium"
                      label="Telefono"></v-text-field>

                    <v-text-field v-model="defaultItem.telefono_secundario" class="input-medium"
                      label="Telefono 2"></v-text-field>

                    <v-text-field class="input-medium" label="Fax"></v-text-field>

                    <v-text-field v-model="defaultItem.email_principal" class="input-correo"
                      label="Correo electronico"></v-text-field>

                    <v-text-field v-model="defaultItem.emaill_secundario" class="input-correo"
                      label="Correo electronico 2"></v-text-field>
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
          </v-dialog>
        </div>

        <div class="data-table-container">
          <v-text-field v-model="search" append-icon="mdi-magnify" label="Buscar" hide-details
            class="input-data-table"></v-text-field>

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
                        style="background-color:#ED057E!important;">No</v-btn>
                      <v-spacer></v-spacer>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
                <v-dialog v-model="dialogSelecciona" max-width="500px">
                  <v-card id="dialog-eliminar-card">
                    <v-card-title class="center title">¿Seleccionarlo?</v-card-title>
                      <span class="alerta-text" style="text-align:center;">Este será el contribuyente con el cual usted realizará las operaciones.</span>
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
            <template #[`item.actions`]="{ item }">
              <v-icon color="#810880" big @click="editItem(item)">
                mdi-pencil
              </v-icon>
              <v-icon color="#810880" big @click="openDelete(item)">
                mdi-delete
              </v-icon>
            </template>

            <template #[`item.actions2`]="{ item }">
              <v-btn class="btn-tabla" @click="openSelecciona(item)">
                Seleccionar Contribuyente
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
      search: '',
      dialog: false,
      dialog_editar: false,
      dialogDelete: false,
      dialogSelecciona: false,
      nuevoRegistro: {},
      headers: [
        { text: 'Nombre', align: 'center', value: 'nombre', },
        { text: 'Nacionalidad', value: 'nacionalidad', align: 'center' },
        { text: 'Numero de Documento', value: 'numero_documento', align: 'center' },
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
        telefono_principal: '',
        telefono_secundario: '',
        email_principal: '',
        emaill_secundario: '',
      },
    }
  },
  head() {
    const title = 'Calle';
    return {
      title,
    }
  },

  mounted() {
    this.getContribuyente()
  },

  methods: {

    getContribuyente() {
      this.$axios.$get('propietario').then(response => {
        this.propietarioData = response
      }).catch(err => {
        console.log(err)
      })
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
      this.$store.getters.getContribuyente== undefined ? console.log('vacio') : console.log(this.$store.getters.getContribuyente)
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