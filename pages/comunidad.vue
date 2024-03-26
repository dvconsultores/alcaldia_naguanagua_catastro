<template>
  <div class="center no-padding divcol" style="margin-bottom:20px; padding-left: 256px;">
    <section class="section1-ambito">
      <div class="datos-ambito-container">
        <div class="title-morado">
          <p class="datos-ambito-title">
            Comunidad
          </p>

          <v-dialog v-model="dialog" max-width="1600px">
            <template v-slot:activator="{ on, attrs }">
              <v-btn v-if="accesos.escribir" class="btn-add-tabla" v-bind="attrs" v-on="on">
                +
              </v-btn>
            </template>
            <v-card id="dialog-editar-crear">
              <v-card-title>
                <span class="title">Crear Comunidad</span>
              </v-card-title>

              <hr>

              <v-card-text>
                <v-container>
                  <v-row class="center">
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="comunidad" label="Comunidad" class="input-dialog"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-autocomplete
                        v-model="categoria"
                        label="Categoría"
                        class="input-dialog"
                        :items="itemsTipo"
                        item-text="text"
                        item-value="value"
                      ></v-autocomplete>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn class="btn dialog-btn" @click="dialog = false">
                  Cancelar
                </v-btn>
                <v-btn class="btn dialog-btn" @click="createComunidad()" style="background-color:#ED057E!important;">
                  Guardar
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>

          <v-dialog v-model="dialog_editar" max-width="1600px">
            <v-card id="dialog-editar-crear">
              <v-card-title>
                <span class="title">Editar Comunidad</span>
              </v-card-title>

              <hr>

              <v-card-text>
                <v-container>
                  <v-row class="center">
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="defaultItem.comunidad" label="Comunidad" class="input-dialog"
                        disabled></v-text-field>
                    </v-col>

                    <v-col cols="12" sm="6" md="4">
                      <v-autocomplete
                        v-model="defaultItem.categoria"
                        label="Categoría"
                        class="input-dialog"
                        :items="itemsTipo"
                        item-text="text"
                        item-value="value"
                      ></v-autocomplete>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn class="btn dialog-btn" @click="dialog_editar = false">
                  Cancelar
                </v-btn>

                <v-btn class="btn dialog-btn" @click="saveData()" style="background-color:#ED057E!important;">
                  Guardar
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </div>

        <div class="data-table-container">
          <v-text-field v-model="search" append-icon="mdi-magnify" label="Buscar" hide-details
            class="input-data-table"></v-text-field>

          <v-data-table :headers="headers" dense :items="ComunidadData" :loading="loading"  :items-per-page="10" :search="search" :footer-props="{
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
              </v-toolbar>
            </template>
            <template #[`item.actions`]="{ item }">
              <v-icon v-if="accesos.actualizar" color="#810880" big @click="editItem(item)">
                mdi-pencil
              </v-icon>
              <v-icon v-if="accesos.borrar" color="#810880" big @click="openDelete(item)">
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
  name: "ComunidadPage",
  mixins: [computeds],
  data() {
    return {
      search: '',
      dialog: false,
      dialog_editar: false,
      dialogDelete: false,
      loading: true,
      headers: [
        { text: 'Comunidad', align: 'center', value: 'comunidad'},
        { text: 'Categoría', value: 'categoria', align: 'center' },
        { text: '', value: 'actions', sortable: false, align: 'center' },
      ],
      ComunidadData: [],
      permido: JSON.parse(JSON.stringify(this.$store.getters.getUser.permisos)),
      menu: [],
      menu_opciones: [],
      defaultItem: {
        comunidad: '',
        categoria: '',
        id: '',
      },
      accesos: {},
      itemsTipo: [
        { text: 'Categoría A', value: 'A' },
        { text: 'Categoría B', value: 'B' },
        { text: 'Categoría C', value: 'C' },
        { text: 'Categoría D', value: 'D' },
        { text: 'Categoría E', value: 'E' },
        { text: 'Categoría F', value: 'F' },
      ],
    }
  },
  head() {
    const title = 'Comunidad';
    return {
      title,
    }
  },

  mounted() {
    this.permisos()
    this.getComunidad()
  },

  methods: {
    permisos() {
      /********************************************************************************************************
        Validar si este modulo esta dentro de modulos con accceso desde la variable this.$store.getters.getUser
      ******************************************************************************************************* */
      const longitud = this.$options.name.length;
      this.modulo = this.$options.name.substring(0, longitud - 4).toLowerCase();
      // esto valida si este modulo esta dentro de la lista de permitidos segun el modelo de permisos
      console.log('permiso: 1 si , 0 no:',this.permido.filter(permido => permido.modulo.toLowerCase().includes(this.modulo)).length);
      if (this.permido.filter(permido => permido.modulo.toLowerCase().includes(this.modulo)).length) { 
        console.log('leer:',(this.permido.filter(permido => permido.modulo.toLowerCase().includes(this.modulo)))[0].leer);
        this.accesos=(this.permido.filter(permido => permido.modulo.toLowerCase().includes(this.modulo)))[0]
      }else{
        this.$router.push('index')
        this.$alert("cancel", {desc: "No está autorizado para accesar a este módulo!!!", hash: 'knsddcssdc', title:'Error'})
      }
    },
    getComunidad() {
      this.$axios.$get('comunidad').then(response => {
        this.ComunidadData = response
        this.loading = false
        console.log('this.ComunidadData',this.ComunidadData)
      }).catch(err => {
        console.log(err)
      })
    },

    createComunidad() {
      const data = {
        comunidad: this.comunidad,
        categoria: this.categoria,
      }
      this.$axios.$post('comunidad/', data).then(res => {
        console.log(res.data)
        this.comunidad = ''
        this.categoria = ''
        this.ComunidadData.push(res)
        this.$alert("success", { desc: "Se ha creado un nuevo Comunidad con éxito", hash: 'knsddcssdc', title: 'Creación de Comunidad' })
      }).catch(err => {
        console.log(err)
      })

      this.dialog = false
    },

    editItem(item) {
      console.log(item)
      this.dialog_editar = true
      this.defaultItem.id = item.id
      this.defaultItem.comunidad = item.comunidad
      this.defaultItem.categoria = item.categoria
    },

    saveData() {
      const formData = new FormData()
      formData.append('comunidad', this.defaultItem.comunidad)
      formData.append('categoria', this.defaultItem.categoria)

      this.$axios.$patch('comunidad/' + this.defaultItem.id + '/', formData).then((res) => {
        console.log(res.data)
        this.$alert("success", { desc: "Se ha editado un Comunidad con éxito", hash: 'knsddcssdc', title: 'Edición de Comunidad' })
        this.getComunidad()
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
      this.$axios.$delete('comunidad/' + this.defaultItem.id + '/').then((res) => {
        console.log(res.data)
        this.dialogDelete = false
        this.$alert("success", { desc: "Se ha eliminado un Comunidad con éxito", hash: 'knsddcssdc', title: 'Eliminación de Comunidad' })
        this.getComunidad()
      }).catch((err) => {
        console.log(err)
      });
    },
  }
};
</script>

<style src="~/assets/styles/pages/ambito.scss" lang="scss" />