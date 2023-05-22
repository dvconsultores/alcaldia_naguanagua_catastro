<template>
  <div class="center no-padding divcol" style="margin-bottom:20px; padding-left: 256px;">
    <section class="section1-modificar">
      <div class="modificar-container">
        <p class="title-modificar">
          Modificar datos del Contribuyente
        </p>

        <hr>

        <div class="textfield-search-container">
          <v-autocomplete
          :items="items"
          class="autocomplete-field"
          ></v-autocomplete>

          <v-text-field
          v-model="tipoDocumento"
          class="inputs-consulta"
          label="Cédula"
          @input="buscarPropietario"
          ></v-text-field>

          <v-btn class="btn-buscar" @click="buscarPropietario">
            Buscar
          </v-btn>
        </div>
      </div>
    </section>

    <section v-if="propietarioEncontrado" class="section2-modificar">
      <div class="datos-contribuyente-div">
        <p class="title-modificar">
          Datos del Contribuyente
        </p>

        <hr>

        <div v-for="(item,index) in datosContainer" :key="index" class="inputs-datos-container">
          <div class="radio-container">
            <span>
              Tipo de documento
            </span>
            <div>
              <v-radio-group v-model="propietario.tipo_documento" row>
                <v-radio label="Cedula" value="Cedula" name="radio-group"></v-radio>
                <v-radio label="RIF" value="RIF" name="radio-group"></v-radio>
                <v-radio label="Pasaporte" value="Psaporte" name="radio-group"></v-radio>
              </v-radio-group>
            </div>
          </div>

          <div class="divrow center col-mobile" style="max-width:500px; gap:10px; width:100%;">
            <v-autocomplete
              v-model="propietario.nacionalidad"
              :items="items2"
              class="autocomplete-field"
            ></v-autocomplete>

            <v-text-field
            v-model="propietario.numero_documento"
            class="input-big"
            label="Nro de Documento"
            style="max-width: 490px;"
            ></v-text-field>
          </div>

          <v-text-field
            v-model="propietario.nombre"
            class="input-big"
            label="Nombre / Razón Social"
          ></v-text-field>

          <v-textarea
          class="input-textarea"
          ></v-textarea>

          <v-text-field
            v-model="propietario.telefono_principal"
            class="input-medium"
            label="Telefono"
          ></v-text-field>

          <v-text-field
            v-model="propietario.telefono_secundario"
            class="input-medium"
            label="Telefono 2"
          ></v-text-field>

          <v-text-field
            class="input-medium"
            :value="item.fax"
            label="Fax"
          ></v-text-field>

          <v-text-field
            v-model="propietario.email_principal"
            class="input-correo"
            label="Correo electronico"
          ></v-text-field>

          <v-text-field
            v-model="propietario.emaill_secundario"
            class="input-correo"
            label="Correo electronico 2"
          ></v-text-field>
        </div>
      </div>

      <div class="div-btns">
        <v-btn @click="saveData()">
          Guardar
        </v-btn>

        <!-- <v-btn style="background-color:#ED057E!important;">
          Cancelar
        </v-btn> -->
      </div>
    </section>
  </div>
</template>

<script>
import computeds from '~/mixins/computeds'

export default{
  name: "ModificarPage",
  mixins:[computeds],
  data(){
    return{
      tipoDocumento: '',
      propietarioEncontrado: null,
      propietario: {
        tipo_documento: '',
        nacionalidad: '',
        numero_documento: '',
        nombre: '',
        telefono_principal: '',
        telefono_secundario: '',
        email_principal: '',
        emaill_secundario: '',
      },
      dialog_exito: false,
      tipo_documento: 1,
      items: ['V', 'J', 'G', 'E'],
      items2: ['V', 'J', 'G', 'E'],
      datosContainer:[
        {
          nro_documento:"23456789",
          nombre:"Maria Pera C.",
          direccion:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta, dignissimos ducimus! Cupiditate, animi facere laborum vero iusto minima ipsa! Eos ullam quo debitis iusto quia molestias velit dolores minima molestiae enim. Cum commodi officiis, similique a distinctio perferendis quis. Molestiae",
          telefono1:"0412-1234567",
          telefono2:"0414-1234567",
          fax:"",
          correo:"catastroprueba@alcaldianaguanagua.com",
          correo2:"",
        },
      ],

      propietarioData:[],
    }
  },

  head() {
    const title = 'Modificar Datos';
    return {
      title,
    }
  },

  mounted(){
    this.getContribuyente()
    this.buscarPropietario()
  },

  methods: {
    getContribuyente() {
      this.$axios.$get('propietario').then(response => {
          this.propietarioData = response
        }).catch(err => {
          console.log(err)
        })
    },

    buscarPropietario() {
      // Filtrar la lista de propietarioData basándose en el tipo de documento introducido
      this.propietarioEncontrado = this.propietarioData.find(prop => prop.numero_documento === this.tipoDocumento);
      
      if (this.propietarioEncontrado) {
        // Se encontró un propietario con el tipo de documento especificado
        // Aquí podrías realizar cualquier lógica adicional o cargar más datos del propietario
        this.propietario.tipo_documento = this.propietarioEncontrado.tipo_documento;
        this.propietario.nacionalidad = this.propietarioEncontrado.nacionalidad;
        this.propietario.numero_documento = this.propietarioEncontrado.numero_documento;
        this.propietario.nombre = this.propietarioEncontrado.nombre;
        this.propietario.telefono_principal = this.propietarioEncontrado.telefono_principal;
        this.propietario.telefono_secundario = this.propietarioEncontrado.telefono_secundario;
        this.propietario.email_principal = this.propietarioEncontrado.email_principal;
        this.propietario.emaill_secundario = this.propietarioEncontrado.emaill_secundario;

        // Otros campos del propietario
      } else {
        // No se encontró un propietario con el tipo de documento especificado
        // Puedes reiniciar los campos o mostrar un mensaje de error, etc.
        this.propietario.tipo_documento = '';
        this.propietario.nacionalidad = '';
        this.propietario.numero_documento = '';
        this.propietario.nombre = '';
        this.propietario.telefono_principal = '';
        this.propietario.telefono_secundario = '';
        this.propietario.email_principal = '';
        this.propietario.emaill_secundario = '';
        // Otros campos del propietario
      }
    },

    saveData() {
      const formData = new FormData();
      formData.append('tipo_documento', this.propietario.tipo_documento);
      formData.append('nacionalidad', this.propietario.nacionalidad);
      formData.append('numero_documento', this.propietario.numero_documento);
      formData.append('nombre', this.propietario.nombre);
      formData.append('telefono_principal', this.propietario.telefono_principal);
      formData.append('telefono_secundario', this.propietario.telefono_secundario);
      formData.append('email_principal', this.propietario.email_principal);
      formData.append('email_secundario', this.propietario.email_secundario);

      this.$axios.$patch(`propietario/${this.propietarioEncontrado.id}/`, formData)
      .then(res => {
        console.log(res.data);
        this.$alert("success", { desc: "Se ha editado un contribuyente con éxito", hash: 'knsddcssdc', title: 'Edición de contribuyente' });
      })
      .catch(err => {
        console.error(err);
      });
    }, 
  }
}

</script>


<style src="~/assets/styles/pages/modificar-datos.scss" lang="scss" />