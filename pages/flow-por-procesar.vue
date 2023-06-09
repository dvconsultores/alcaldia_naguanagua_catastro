<template>
  <div class="center no-padding divcol" style="margin-bottom:20px; padding-left: 256px;">
    <section class="section1-modificar-datos">
      <div class="modificar-datos-container">
        <div class="title-morado">
          <p class="modificar-datos-title">
            Documentos por Procesar
          </p>

          <v-dialog v-model="dialog_editar" max-width="1600px">
            <v-card id="dialog-editar-crear">
              <v-card-title>
                <span class="title">Procesar Documento</span>
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

          <v-data-table :headers="headers" :items="flujoData" :items-per-page="10" :search="search" :footer-props="{
            itemsPerPageText: 'Items por página',
          }" sort-by="codigo" class="mytabla" mobile-breakpoint="840">
            <template v-slot:top>
              <v-toolbar flat class="toolbar-tabla">
                <v-dialog v-model="dialogDevuelve" max-width="500px">
                  <v-card id="dialog-eliminar-card">
                    <v-card-title class="center title">¿Devolver Documento?</v-card-title>
                      <span class="alerta-text" style="text-align:center;">El documento retornará a quien lo envio.</span>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn class="btn dialog-btn" text @click="saveDevuelve()">Si</v-btn>
                      <v-btn class="btn dialog-btn" text @click="dialogDevuelve = false"
                        style="background-color:#ED057E!important;">No</v-btn>
                      <v-spacer></v-spacer>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </v-toolbar>
            </template>
            <template #[`item.actions1`]="{ item }">
              <v-btn class="btn-tabla" @click="openDevuelve(item)">
                Procesar
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
  name: "flow-por-procesarPage",
  mixins: [computeds],
  data() {
    return {
      permido: JSON.parse(JSON.stringify(this.$store.getters.getUser)),
      search: '',
      dialogRecibe: false,
      dialogDevuelve: false,
      headers: [
        { text: 'Solicitud', align: 'center', value: 'flujo', },
        { text: 'Expediente', value: 'expediente', align: 'center' },
        { text: 'Operación', value: 'tipoflujo_descripcion', align: 'center' },
        { text: 'Propietario', value: 'propietario_nombre', align: 'center' },
        { text: 'Fecha Solicitud', value: 'flujo_fecha', align: 'center' },
        { text: 'Fecha Recepción', value: 'recibe_fecha', align: 'center' },
        { text: 'Tarea', value: 'tarea_display', align: 'center' },
        { text: '', value: 'actions1', sortable: false, align: 'center' },
      ],
      flujoData: [],
      defaultItem: [],


    }
  },
  head() {
    const title = 'Documentos Por Procesar';
    return {
      title,
    }
  },

  mounted() {
    this.getFlujo()
  },

  methods: {

    getFlujo() {
      this.$axios.$get('flujodetalle/?estado=2&recibe_usuario='+this.permido.user_id).then(response => {
        this.flujoData = response
      }).catch(err => {
        console.log(err)
      })
    },
    openDevuelve(item) {
      this.defaultItem = item
      this.dialogDevuelve = true
    },
    openRecibe(item) {
      this.defaultItem = item
      this.dialogRecibe = true
    },
    saveDevuelve() {
      const formData = new FormData()
      formData.append('recibe_usuario', this.defaultItem.envia_usuario)
      this.$axios.$patch('flujodetalle/' + this.defaultItem.id + '/', formData).then((res) => {
        console.log(res.data)
        this.$alert("success", { desc: "Se ha devuelto el documento con éxito", hash: 'knsddcssdc', title: 'Devolución de Documento' })
        this.dialogDevuelve = false
      }).catch((err) => {
        console.log(err)
      });
    },
    saveRecibe() {
      const formData = new FormData()
      formData.append('estado', 2)
      this.$axios.$patch('flujodetalle/' + this.defaultItem.id + '/', formData).then((res) => {
        console.log(res.data)
        this.$alert("success", { desc: "Se ha recibido el documento con éxito", hash: 'knsddcssdc', title: 'Recepción de Documento' })
        this.dialogRecibe = false
      }).catch((err) => {
        console.log(err)
      });
    },
  }
};
</script>


<style src="~/assets/styles/pages/modificar-datos.scss" lang="scss" />