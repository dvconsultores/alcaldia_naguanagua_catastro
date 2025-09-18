<template>
  <div class="center no-padding divcol" style="margin-bottom:20px; padding-left: 256px;">
    <section class="section1-ambito">
      <div class="datos-ambito-container">
        <div class="title-morado">
          <p class="datos-ambito-title">
            Nota de Crédito
          </p>

          <v-dialog v-model="dialog_editar" max-width="1600px">
            <v-card id="dialog-editar-crear">
              <v-form ref="defaultItem"
                @submit.prevent="saveData()">
              <v-card-title>
                <span class="title">Deshabilitar Nota de Crédito</span>
              </v-card-title>

              <hr>

              <v-card-text>
                <v-container>
                  <v-row class="center">
                    <v-col cols="12" >
                      <v-text-field v-model="defaultItem.observaciones" label="Observaciones" class="input-dialog" :rules="rules.required"
                        ></v-text-field>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn class="btn dialog-btn" @click="dialog_editar = false">
                  Cancelar
                </v-btn>

                <v-btn class="btn dialog-btn" @click="saveData()" style="background-color:var(--error)!important;">
                  Borrar Registro
                </v-btn>
              </v-card-actions>
              </v-form> 
            </v-card>
          </v-dialog>
        </div>

        <div class="data-table-container">
          <v-text-field v-model="search" append-icon="mdi-magnify" label="Buscar" hide-details
            class="input-data-table"></v-text-field>

          <v-data-table :headers="headers" dense :items="notacreditoData" :loading="loading"  :items-per-page="10" :search="search" :footer-props="{
            itemsPerPageText: 'Items por página',
          }" sort-by="numero" sort-desc class="mytabla" mobile-breakpoint="840">

          
            <template #[`item.actions`]="{ item }">
              <v-icon v-if="accesos.actualizar" color="var(--error)" big @click="editItem(item)">
                mdi-delete
              </v-icon>
              <v-icon v-if="accesos.escribir" color="var(--primary)" big @click="getPDF(item)">
                mdi-printer
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
  name: "lista-notacreditoPage",
  mixins: [computeds],
  data() {
    return {
      rules: {
      required: [v => !!v || 'Campo requerido'],
      }, 
      search: '',
      dialog: false,
      dialog_editar: false,
      dialogDelete: false,
      loading: true,
      headers: [
        { text: 'Habilitado', align: 'center', value: 'habilitado'},
        { text: 'Nota Crédito #', align: 'center', value: 'numeronotacredito'},
        { text: 'Fecha', value: 'fecha', align: 'center' },
        { text: 'Recibo Pago #', value: 'numero_recibo', align: 'center' },
        { text: 'Propietario', value: 'propietario_nombre', align: 'center' },
        { text: 'Propietario', value: 'propietario_numero_documento', align: 'center' },
        { text: '', value: 'actions', sortable: false, align: 'center' },
      ],
      notacreditoData: [],
      permido: JSON.parse(JSON.stringify(this.$store.getters.getUser.permisos)),
      menu: [],
      menu_opciones: [],
      defaultItem: {
        observaciones: undefined,
        id: '',
      },
      accesos: {},
    }
  },
  head() {
    const title = 'notacredito';
    return {
      title,
    }
  },

  mounted() {
    this.permisos()
    this.getnotacredito()
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
    getnotacredito() {
      this.$axios.$get('notacredito').then(response => {
        this.notacreditoData = response
        this.loading = false
        console.log('this.notacreditoData',this.notacreditoData)
      }).catch(err => {
        console.log(err)
      })
    },

    editItem(item) {
      console.log(item)
      this.dialog_editar = true
      this.defaultItem.id = item.id
      this.defaultItem.observaciones = item.observaciones
    },

    saveData() {
      if (!this.$refs.defaultItem.validate()) {
        this.$alert("cancel", { desc: "Verifica que los campos sean correctos.", hash: 'knsddcssdc', title: 'Error' })
        return;
      }
      else {
        const formData = new FormData()
        formData.append('observaciones', this.defaultItem.observaciones)
        formData.append('habilitado', false)

        this.$axios.$patch('notacredito/' + this.defaultItem.id + '/', formData).then((res) => {
          console.log(res.data)
          this.$alert("success", { desc: "Se ha editado una Nota de Crédito con éxito", hash: 'knsddcssdc', title: 'Edición de Nota de Crédito' })
          this.getnotacredito()
        }).catch((err) => {
          console.log(err)
        });

        this.dialog_editar = false
      }
    },

    async getPDF(item) {
      try {
        const response = item.ReportePdf
        if (response) {

          console.log('response getPDF', response)
          var pdfData = response;
          if (pdfData.includes("catastro_back")) {
              pdfData = pdfData.replace("catastro_back", "catastro_back/catastro_back");
            }
          window.open(pdfData, "_blank").focus();
        } else {
            this.$alert("cancel", { desc: "No se puede ubicar el reporte.", hash: 'knsddcssdc', title: 'Error' })
          }
        } catch (err) {
        console.log(err);
      }
    },

  }
};
</script>

<style src="~/assets/styles/pages/ambito.scss" lang="scss" />