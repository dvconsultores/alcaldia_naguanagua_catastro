<template>
  <div class="center no-padding divcol" style="margin-bottom:20px; padding-left: 256px;">
    <section class="section1-ambito">
      <div class="datos-ambito-container">
        <div class="title-morado">
          <p class="datos-ambito-title">
            Tasa de Interés Moratorio
          </p>
          <v-dialog v-model="dialog" max-width="1600px">
            <template v-slot:activator="{ on, attrs }">
              <v-btn v-if="accesos.escribir" class="btn-add-tabla" v-bind="attrs" v-on="on">
                +
              </v-btn>
            </template>
            <v-card id="dialog-editar-crear">
              <v-form ref="formCrearTasaInteres"
                @submit.prevent="createTasaInteres()">
                <v-card-title>
                  <span class="title">Crear Tasa Interés</span>
                </v-card-title>
                <hr>
                <v-card-text>
                  <v-container>
                    <v-row class="center">
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field v-model="formCrearTasaInteres.anio" label="anio" class="input-dialog"
                          :rules="rules.required"></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-autocomplete v-model="formCrearTasaInteres.mes" label="Mes" class="input-dialog" :items="itemsMes"
                          item-text="text" item-value="value"></v-autocomplete>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field 
                          v-model="formCrearTasaInteres.tasa" 
                          label="tasa" 
                          class="input-dialog"
                          :rules="[rules.required, validateTasa]"
                        ></v-text-field>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn class="btn dialog-btn" @click="dialog = false">
                    Cancelar
                  </v-btn>
                  <v-btn class="btn dialog-btn" @click="createTasaInteres()"
                    style="background-color:#ED057E!important;">
                    Guardar
                  </v-btn>
                </v-card-actions>
              </v-form>
            </v-card>
          </v-dialog>
          <v-dialog v-model="dialog_editar" max-width="1600px">
            <v-card id="dialog-editar-crear">
              <v-card-title>
                <span class="title">Editar Tasa Interés</span>
              </v-card-title>
              <hr>
              <v-card-text>
                <v-container>
                  <v-row class="center">
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="defaultItem.anio" label="anio" class="input-dialog"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-autocomplete v-model="defaultItem.mes" label="Mes" class="input-dialog" :items="itemsMes"
                        item-text="text" item-value="value"></v-autocomplete>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="defaultItem.tasa" label="tasa" class="input-dialog"></v-text-field>
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
          <v-data-table :headers="headers" dense :items="TasaInteresData" :loading="loading" :items-per-page="10"
            :search="search" :footer-props="{ itemsPerPageText: 'Items por página' }" sort-by="anio" sort-desc
            class="mytabla" mobile-breakpoint="840">
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
  name: "Tasas-InteresPage",
  mixins: [computeds],
  data() {
    return {
      formCrearTasaInteres: {
        anio: undefined,
        mes: undefined,
        tasa: undefined,
      },
      rules: {
      required: [v => !!v || 'Campo requerido'],
      validTasa: [
        v => !!v || 'Campo requerido',
        v => /^\d{1,4}(\.\d{1,2})?$/.test(v) || 'Debe ser numérico, tener dos decimales y máximo 4 dígitos en la parte entera'
      ]
    }, 
      search: '',
      dialog: false,
      dialog_editar: false,
      dialogDelete: false,
      loading: true,
      headers: [
        { text: 'Año', align: 'center', value: 'anio'},
        { text: 'Mes', value: 'mes', align: 'center' },
        { text: 'Tasa Bs.', value: 'tasa', align: 'center' },
        { text: '', value: 'actions', sortable: false, align: 'center' },
      ],
      TasaInteresData: [],
      permido: JSON.parse(JSON.stringify(this.$store.getters.getUser.permisos)),
      menu: [],
      menu_opciones: [],
      defaultItem: {
        anio: '',
        mes: '',
        tasa:' ',
        id: '',
      },
      accesos: {},
      itemsMes: [
        { text: 'Enero', value: 1 },
        { text: 'Febrero', value: 2 },
        { text: 'Marzo', value: 3 },
        { text: 'Abril', value: 4 },
        { text: 'Mayo', value: 5 },
        { text: 'Junio', value: 6 },
        { text: 'Julio', value: 7 },
        { text: 'Agosto', value: 8 },
        { text: 'Septiembre', value: 9 },
        { text: 'Octubre', value: 10 },
        { text: 'Noviembre', value: 11 },
        { text: 'Diciembre', value: 12 },
      ],
      sortByFunction: (item1, item2) => {
            // Ordena por año primero de forma descendente
            if (item1.anio !== item2.anio) {
                return item2.anio - item1.anio;
            }
            // Si los años son iguales, ordena por mes de forma descendente
            return item2.mes - item1.mes;
        },
    }
  },
  head() {
    const title = 'TasaInteres';
    return {
      title,
    }
  },

  mounted() {
    this.permisos()
    this.getTasaInteres()
  },
  methods: {
    validateTasa(value) {
    if (typeof value !== 'string') {
      return false; // Si el valor no es una cadena, la validación falla
    }
    const parts = value.split('.');
    const integerCount = parts[0].replace(/\D/g, '').length;
    const decimalCount = parts[1] ? parts[1].length : 0;   
    return integerCount <= 4 && decimalCount <= 2 || 'Debe tener máximo 4 dígitos en la parte entera y 2 decimales';
    },
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
    getTasaInteres() {
      this.$axios.$get('tasainteres').then(response => {
        this.TasaInteresData = response
        this.loading = false
        console.log('this.TasaInteresData',this.TasaInteresData)
      }).catch(err => {
        console.log(err)
      })
    },
    createTasaInteres() {
      if (!this.$refs.formCrearTasaInteres.validate()) {
        this.$alert("cancel", { desc: "Verifica que los campos sean correctos.", hash: 'knsddcssdc', title: 'Error' })
        return;
      }
      else {
        const data = {
          anio: this.formCrearTasaInteres.anio,
          mes: this.formCrearTasaInteres.mes,
          tasa: this.formCrearTasaInteres.tasa,
        }
        this.$axios.$post('tasainteres/', data).then(res => {
          console.log(res.data)
          this.formCrearTasaInteres.anio = ''
          this.formCrearTasaInteres.mes = ''
          this.formCrearTasaInteres.tasa = ''
          //this.TasaInteresData.push(res)
          this.$alert("success", { desc: "Se ha creado un nuevo TasaInteres con éxito", hash: 'knsddcssdc', title: 'Creación de TasaInteres' })
          this.getTasaInteres()
        }).catch(err => {
          console.log(err)
        })

        this.dialog = false
      }
    },
    editItem(item) {
      console.log(item)
      this.dialog_editar = true
      this.defaultItem.id = item.id
      this.defaultItem.anio = item.anio
      this.defaultItem.mes = item.mes
      this.defaultItem.tasa = item.tasa
    },
    saveData() {
      const formData = new FormData()
      formData.append('anio', this.defaultItem.anio)
      formData.append('mes', this.defaultItem.mes)
      formData.append('tasa', this.defaultItem.tasa)
      this.$axios.$patch('tasainteres/' + this.defaultItem.id + '/', formData).then((res) => {
        console.log(res.data)
        this.$alert("success", { desc: "Se ha editado un TasaInteres con éxito", hash: 'knsddcssdc', title: 'Edición de TasaInteres' })
        this.getTasaInteres()
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
      this.$axios.$delete('tasainteres/' + this.defaultItem.id + '/').then((res) => {
        console.log(res.data)
        this.dialogDelete = false
        this.$alert("success", { desc: "Se ha eliminado un TasaInteres con éxito", hash: 'knsddcssdc', title: 'Eliminación de TasaInteres' })
        this.getTasaInteres()
      }).catch((err) => {
        console.log(err)
      });
    },
  }
};
</script>

<style src="~/assets/styles/pages/ambito.scss" lang="scss" />