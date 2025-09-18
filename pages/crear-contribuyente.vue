<template>
  <div class="center no-padding divcol" style="margin-bottom:20px; padding-left: 256px;">
    <section class="section1-dialog-crear">
      <div class="datos-dialog-crear-container">
        <div class="title-morado">
          <p class="datos-dialog-crear-title">
            Propietarios o contribuyentes
          </p>

          <v-dialog
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

               <section class="section1-crear">
                <div class="datos-contribuyente-div">
                  <div v-for="(item,index) in datosContainer" :key="index" class="inputs-datos-container">
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
                      :value="item.nro_documento"
                      label="Nro de Documento"
                      style="max-width: 490px;"
                      ></v-text-field>
                    </div>

                    <v-text-field
                      v-model="nuevoRegistro.nombre"
                      class="input-big"
                      :value="item.nombre"
                      label="Nombre / Razón Social"
                    ></v-text-field>

                    <v-textarea
                    class="input-textarea"
                    label="Dirección"
                    ></v-textarea>

                    <v-text-field
                      v-model="nuevoRegistro.telefono_principal"
                      class="input-medium"
                      :value="item.telefono1"
                      label="Teléfono"
                    ></v-text-field>

                    <v-text-field
                      v-model="nuevoRegistro.telefono_secundario"
                      class="input-medium"
                      :value="item.telefono2"
                      label="Teléfono 2"
                    ></v-text-field>

                    <v-text-field
                      class="input-medium"
                      :value="item.fax"
                      label="Fax"
                    ></v-text-field>

                    <v-text-field
                      v-model="nuevoRegistro.email_principal"
                      class="input-correo"
                      :value="item.correo"
                      label="Correo electronico"
                    ></v-text-field>

                    <v-text-field
                      v-model="nuevoRegistro.emaill_secundario"
                      class="input-correo"
                      :value="item.correo2"
                      label="Correo electronico 2"
                    ></v-text-field>
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
              </section>
            </v-card>
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
            :items="propietarioData"
            :items-per-page="10"
            :search="search"
            :footer-props="{
              itemsPerPageText: 'Items por página',
            }"
            sort-by="codigo"
            class="mytabla"
            mobile-breakpoint="840"
          >
            <template #[`item.actions`]>
              <v-btn class="btn-tabla">
                Subir Expediente
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

export default{
  name: "CreaContribuyentePage",
  mixins:[computeds],
  data(){
    return{
      search: '',
      dialog: false,
      dialog_editar: false,
      dialogDelete: false,
      dialog_exito: false,
      headers: [
        { text: 'Nombre', align: 'center', value: 'nombre',},
        { text: 'Nacionalidad', value: 'nacionalidad', align:'center' },
        { text: 'Número de Documento', value: 'numero_documento', align:'center' },
        { text: '', value: 'actions', sortable: false, align:'center' },
      ],
      tipo_documento: 1,
      items: ['V', 'J', 'G', 'E'],
      items2: ['V', 'J', 'G', 'E'],
      datosContainer:[
        {
          nro_documento:"",
          nombre:"",
          direccion:"",
          telefono1:"",
          telefono2:"",
          fax:"",
          correo:"",
          correo2:"",
        },
      ],

      propietarioData:[],
      nuevoRegistro:{},
    }
  },

  head() {
    const title = 'Crear Contribuyente';
    return {
      title,
    }
  },

  mounted(){
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

    createContribuyente(){
      this.$axios.$post('propietario/', this.nuevoRegistro).then(res => {
          console.log(res.data)
          this.nuevoRegistro = {}
          this.propietarioData.push(res)
          this.dialog = false
          this.$alert("success", {desc: "Se ha creado un nuevo contribuyente con éxito", hash: 'knsddcssdc', title:'Creación de contribuyente'})        
        }).catch(err => {
          console.log(err)
        })
    }, 
  }
}

</script>


<style src="~/assets/styles/pages/crear-contribuyente.scss" lang="scss" />