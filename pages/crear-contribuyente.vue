<template>
  <div class="center no-padding divcol" style="margin-bottom:20px; padding-left: 256px;">
    <section class="section1-crear">
      <div class="datos-contribuyente-div">
        <p class="title-crear">
          Datos del Contribuyente
        </p>

        <hr>

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
            label="Telefono"
          ></v-text-field>

          <v-text-field
            v-model="nuevoRegistro.telefono_secundario"
            class="input-medium"
            :value="item.telefono2"
            label="Telefono 2"
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
        <v-btn @click="createContribuyente()">
          Guardar
        </v-btn>
        <!-- <v-dialog v-model="dialog_exito" persistent class="dialog-exito">
            <template #activator="{attrs, on}">
              <v-btn v-bind="attrs" v-on="on">
                Guardar
              </v-btn>
            </template>
            <v-card class="card-dialog-exito">
              <v-icon @click="dialog_exito = false">mdi-close</v-icon>
              <p class="p-dialog">Se ha creado un nuevo contribuyente con éxito!</p>
            </v-card>
        </v-dialog> -->

        <v-btn style="background-color:#ED057E!important;">
          Cancelar
        </v-btn>
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
      dialog_exito: false,
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
      // const data = {
      //   tipo_documento: this.tipo_documento,
      //   nacionalidad: this.nacionalidad,
      //   numero_documento: this.numero_documento,
      //   nombre: this.nombre,
      //   telefono_principal: this.telefono_principal,
      //   telefono_secundario: this.telefono_secundario,
      //   email_principal: this.email_principal,
      //   emaill_secundario: this.emaill_secundario,
      // }

      this.$axios.$post('propietario/', this.nuevoRegistro).then(res => {
          console.log(res.data)
          this.nuevoRegistro = {}
          this.$alert("success", {desc: "Se ha creado un nuevo contribuyente con éxito", hash: 'knsddcssdc', title:'Creación de contribuyente'})        
        }).catch(err => {
          console.log(err)
        })
    }, 
  }
}

</script>


<style src="~/assets/styles/pages/crear-contribuyente.scss" lang="scss" />