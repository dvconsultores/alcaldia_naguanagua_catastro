<template>
  <div class="center no-padding divcol" style="margin-bottom:20px; padding-left: 256px;">
    <section class="section1-ambito">
      <div class="datos-ambito-container">
        <div class="title-morado">
          <p class="datos-ambito-title">
            Calle
          </p>

          <v-dialog v-model="dialog" max-width="1600px">
            <template v-slot:activator="{ on, attrs }">
              <v-btn v-if="accesos.escribir" class="btn-add-tabla" v-bind="attrs" v-on="on">
                +
              </v-btn>
            </template>
            <v-card id="dialog-editar-crear">
              <v-card-title>
                <span class="title">Crear Calle</span>
              </v-card-title>

              <hr>

              <v-card-text>
                <v-container>
                  <v-row class="center">
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="nuevoRegistro.nombre" label="Nombre" class="input-dialog"></v-text-field>
                    </v-col>

                    <v-col cols="12" sm="6" md="4">
                      <v-autocomplete v-model="nuevoRegistro.tipo" label="Tipo" class="input-dialog" :items="itemsTipo"
                        item-text="text" item-value="value"></v-autocomplete>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn class="btn dialog-btn" @click="dialog = false" style="background-color:var(--error)!important;">
                  Cancelar
                </v-btn>
                <v-btn class="btn dialog-btn" @click="createCalle()" style="background-color:var(--primary)!important;">
                  Guardar
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>

          <v-dialog v-model="dialog_editar" max-width="1600px">
            <v-card id="dialog-editar-crear">
              <v-card-title>
                <span class="title">Editar Calle</span>
              </v-card-title>

              <hr>

              <v-card-text>
                <v-container>
                  <v-row class="center">
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="defaultItem.nombre" label="Nombre" class="input-dialog"></v-text-field>
                    </v-col>

                    <v-col cols="12" sm="6" md="4">
                      <v-autocomplete v-model="defaultItem.tipo" label="Tipo" class="input-dialog" :items="itemsTipo"
                        item-text="text" item-value="value"></v-autocomplete>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn class="btn dialog-btn" @click="dialog_editar = false" style="background-color:var(--error)!important;">
                  Cancelar
                </v-btn>

                <v-btn class="btn dialog-btn" @click="saveData()" style="background-color:var(--primary)!important;">
                  Guardar
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </div>

        <div class="data-table-container">
          <v-text-field v-model="search" append-icon="mdi-magnify" label="Buscar" hide-details
            class="input-data-table"></v-text-field>

          <v-data-table :headers="headers" :items="calleData" :items-per-page="10" :search="search" :footer-props="{
            itemsPerPageText: 'Items por página',
          }" sort-by="nombre" class="mytabla" mobile-breakpoint="840">
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
              </v-toolbar>
            </template>
            <template #[`item.actions`]="{ item }">
              <v-icon v-if="accesos.actualizar" color="var(--success)" big @click="editItem(item)">
                mdi-pencil
              </v-icon>
              <v-icon v-if="accesos.borrar" color="var(--error)" big @click="openDelete(item)">
                mdi-delete
              </v-icon>
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
      nuevoRegistro: {},
      headers: [
        { text: 'Descripción', value: 'nombre', align: 'center' },
        { text: 'Tipo', value: 'tipo', align: 'center' },
        { text: '', value: 'actions', sortable: false, align: 'center' },
      ],
      calleData: [],
      itemsTipo: [
        { text: 'Una Via', value: '1' },
        { text: 'Doble Via', value: '2' },
        { text: 'Colateral', value: '3' },
        { text: 'Arterial', value: '4' },
      ],

      defaultItem: {
        nombre: '',
        tipo: '',
        id: '',
      },
      permido: JSON.parse(JSON.stringify(this.$store.getters.getUser.permisos)),
      accesos: {},
    }
  },
  head() {
    const title = 'Calle';
    return {
      title,
    }
  },

  mounted() {
    this.permisos()
    this.getCalle()
  },

  methods: {
    permisos() {
      /********************************************************************************************************
        Validar si este modulo esta dentro de modulos con accceso desde la variable this.$store.getters.getUser
      ******************************************************************************************************* */
      const longitud = this.$options.name.length;
      this.modulo = this.$options.name.substring(0, longitud - 4).toLowerCase();
      // esto valida si este modulo esta dentro de la lista de permitidos segun el modelo de permisos
      console.log('permiso: 1 si , 0 no:', this.permido.filter(permido => permido.modulo.toLowerCase().includes(this.modulo)).length);
      if (this.permido.filter(permido => permido.modulo.toLowerCase().includes(this.modulo)).length) {
        console.log('leer:', (this.permido.filter(permido => permido.modulo.toLowerCase().includes(this.modulo)))[0].leer);
        this.accesos = (this.permido.filter(permido => permido.modulo.toLowerCase().includes(this.modulo)))[0]
      } else {
        this.$router.push('index')
        this.$alert("cancel", { desc: "No está autorizado para accesar a este módulo!!!", hash: 'knsddcssdc', title: 'Error' })
      }
    },
    getCalle() {
      this.$axios.$get('calle').then(response => {
        this.calleData = response
      }).catch(err => {
        console.log(err)
      })
    },

    createCalle() {
      this.$axios.$post('calle/', this.nuevoRegistro).then(res => {
        console.log(res.data)
        this.nuevoRegistro = {}
        this.calleData.push(res)
        this.$alert("success", { desc: "Se ha creado una nueva calle con éxito", hash: 'knsddcssdc', title: 'Creación de calle' })
      }).catch(err => {
        console.log(err)
      })

      this.dialog = false
    },

    editItem(item) {
      console.log(item)
      this.dialog_editar = true
      this.defaultItem.id = item.id
      this.defaultItem.nombre = item.nombre
      this.defaultItem.tipo = item.tipo
    },

    saveData() {
      const formData = new FormData()
      formData.append('nombre', this.defaultItem.nombre)
      formData.append('tipo', this.defaultItem.tipo)

      this.$axios.$patch('calle/' + this.defaultItem.id + '/', formData).then((res) => {
        console.log(res.data)
        this.$alert("success", { desc: "Se ha editado una calle con éxito", hash: 'knsddcssdc', title: 'Edición de calle' })
        this.getCalle()
      }).catch((err) => {
        console.log(err)
      });

      this.dialog_editar = false
    },

    openDelete(item) {
      this.defaultItem = item
      this.dialogDelete = true
    },

    deleteItem() {
      this.$axios.$delete('calle/' + this.defaultItem.id + '/').then((res) => {
        console.log(res.data)
        this.dialogDelete = false
        this.$alert("success", { desc: "Se ha eliminado una calle con éxito", hash: 'knsddcssdc', title: 'Eliminación de calle' })
        this.getCalle()
      }).catch((err) => {
        console.log(err)
      });
    },
  }
};
</script>

<style src="~/assets/styles/pages/ambito.scss" lang="scss" />