<template>
  <div class="center no-padding divcol" style="margin-bottom:20px; padding-left: 256px;">
    <section class="section1-actualizacion-propietarios">
      <div class="impuestos-tasa-container">
        <div class="jspace center">
          <p class="title-impuestos-tasa">
            Datos del inmueble: {{ numero_expediente }}
          </p>
        </div>

        <hr>

        <div class="inputs-container">
          <v-text-field v-model="inmuebleData.numero_expediente" class="input-mostrar" label="Número de expediente" disabled></v-text-field>
          <v-text-field v-model="inmuebleData.descripcion_tipo" class="input-mostrar" label="Tipo" disabled></v-text-field>
          <v-text-field v-model="inmuebleData.descripcion_status" class="input-mostrar" label="Estatus" disabled></v-text-field>
          <v-text-field v-model="inmuebleData.descripcion_ambito" class="input-mostrar" label="Ambito" disabled></v-text-field>
          <v-text-field v-model="inmuebleData.descripcion_sector" class="input-mostrar" label="Sector" disabled></v-text-field>
          <v-text-field v-model="inmuebleData.descripcion_manzana" class="input-mostrar" label="Manzana" disabled></v-text-field>
          <v-text-field v-model="inmuebleData.codigo_parcela" class="input-mostrar" label="Parcela" disabled></v-text-field>
          <v-text-field v-model="inmuebleData.codigo_subparcela" class="input-mostrar" label="Sub-Parcela" disabled></v-text-field>
          <v-text-field v-model="inmuebleData.descripcion_nivel" class="input-mostrar" label="Nivel" disabled></v-text-field>
          <v-text-field v-model="inmuebleData.descripcion_unidad" class="input-mostrar" label="Unidad" disabled></v-text-field>
          <v-text-field v-model="inmuebleData.nombre_urbanizacion" class="input-mostrar" label="Urbanización" disabled></v-text-field>
          <v-text-field v-model="inmuebleData.nombre_calle" class="input-mostrar" label="Calle" disabled></v-text-field>
          <v-text-field v-model="inmuebleData.nombre_conjunto_residencial" class="input-mostrar" label="Conjunto Residencial" disabled></v-text-field>
          <v-text-field v-model="inmuebleData.nombre_edificio" class="input-mostrar" label="Edificio" disabled></v-text-field>
          <v-text-field v-model="inmuebleData.nombre_avenida" class="input-mostrar" label="Avenida" disabled></v-text-field>
          <v-text-field v-model="inmuebleData.nombre_torre" class="input-mostrar" label="Torre" disabled></v-text-field>
          <v-text-field v-model="inmuebleData.numero_civico" class="input-mostrar" label="Nro. Civicio" disabled></v-text-field>
          <v-text-field v-model="inmuebleData.numero_casa" class="input-mostrar" label="Nro. Casa" disabled></v-text-field>
          <v-text-field v-model="inmuebleData.numero_piso" class="input-mostrar" label="Nro. Piso" disabled></v-text-field>
          <v-text-field v-model="inmuebleData.telefono" class="input-mostrar" label="Teléfono" disabled></v-text-field>
          <v-text-field v-model="inmuebleData.descripcion_zona" class="input-mostrar" label="Zona" disabled></v-text-field>
          <v-text-field v-model="inmuebleData.direccion" class="input-mostrar" label="Dirección" disabled></v-text-field>
          <v-text-field v-model="inmuebleData.referencia" class="input-mostrar" label="Referencia" disabled></v-text-field>
          <v-text-field v-model="inmuebleData.observaciones" class="input-mostrar" label="Observaciones" disabled></v-text-field>

        </div>
      </div>
    </section>
    <section  class="section2-actualizacion-propietarios">
      <div class="contribuyentes-container">
        <div class="jspace center">
          <p class="title-impuestos-tasa">
            Contribuyentes asociados al inmueble
          </p>

          <div @click="openDialog = true" v-if="numero_documento" >
            <v-btn id="btn-add-tabla">
              +
            </v-btn>
          </div>
        </div>

        <hr>

        <div class="data-table-container">

          <v-data-table
            :headers="headers"
            :items="inmueblePropietariosData"
            :items-per-page="10"
            :footer-props="{
              itemsPerPageText: 'Items por página',
            }"
            sort-by="codigo"
            class="mytabla"
            mobile-breakpoint="840"
          >
            <template v-slot:top>
              <v-toolbar
                flat
                class="toolbar-tabla"
              >  
                <v-dialog v-model="dialogDelete" max-width="500px">
                  <v-card id="dialog-eliminar-card">
                    <v-card-title class="center title">¿Desea eliminarlo?</v-card-title>
                    <span class="alerta-text">Esta acción no se puede revertir</span>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn class="btn dialog-btn" text @click="deleteItem()">Si</v-btn>
                      <v-btn class="btn dialog-btn" text @click="dialogDelete = false" style="background-color:#ED057E!important;">No</v-btn>
                      <v-spacer></v-spacer>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </v-toolbar>
            </template>
            <template #[`item.actions`]="{ item }">
              <v-icon
                color="#810880"
                big
                @click="openDelete(item)"
              >
                mdi-delete
              </v-icon>
            </template>
          </v-data-table>
        </div>
      </div>

      <v-dialog content-class="dialog-confirmacion" persistent v-model="openDialog">
        <v-card class="card-confirmacion-dialog">
          <div class="center divcol">
            <h5 class="title-dialog">
              Confirme los datos del contribuyente antes de asociarlo al inmueble
            </h5>
            <span class="desc-dialog">
              {{nombrecontribuyente}}
            </span>
            <span class="desc-dialog">
              {{nacionalidadcontribuyente}} - {{numero_documento}}
            </span>
          </div>

          <div>
            <span class="desc-dialog">Ingrese la Fecha de Compra del Inmueble</span>
            <v-menu
            v-model="menu1"
            :close-on-content-click="false"
            :nudge-right="5"
            transition="scale-transition"
            offset-y
            min-width="auto"
            >
              <template #activator="{ on, attrs }">
                <v-text-field
                v-model="fecha_compra"
                class="input-fecha"
                label="Fecha de Compra"
                append-icon="mdi-calendar"
                readonly
                v-bind="attrs"
                v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="fecha_compra"
                label="Fecha de Compra"
                color="blue"
                header-color="#810880"
                class="custom-date-picker"
              ></v-date-picker>
            </v-menu>
          </div>
          <div class="center divrow" style="gap:10px;">
            <v-btn @click="agregarContribuyente()" class="btn btn-small">
              Agregar
            </v-btn>

            <v-btn class="btn btn-small" @click="openDialog = false" style="background-color:#ED057E!important;">
              Cancelar
            </v-btn>
          </div>
        </v-card>
      </v-dialog>
    </section>
  </div>
</template>

<script>
import computeds from '~/mixins/computeds'

export default {
  name: "Actualizacion-PropietariosPage",
  mixins: [computeds],
  data() {
    return{
      menu1: false,
      dialogDelete: false,
      inmuebleData:[],
      inmueblePropietariosData:[],
      nombrecontribuyente:this.$store.getters.getContribuyente=='Sin Seleccionar' ?'':JSON.parse(JSON.stringify(this.$store.getters.getContribuyente.nombre)),
      nacionalidadcontribuyente:this.$store.getters.getContribuyente=='Sin Seleccionar' ?'':JSON.parse(JSON.stringify(this.$store.getters.getContribuyente.nacionalidad)),
      numero_documento: this.$store.getters.getContribuyente=='Sin Seleccionar'?'':JSON.parse(JSON.stringify(this.$store.getters.getContribuyente.numero_documento)),
      headers: [
        { text: 'Nombre', align: 'center', value: 'propietario.nombre',},
        { text: 'Nacionalidad', value: 'propietario.nacionalidad', align:'center' },
        { text: 'Nro. Documento', value: 'propietario.numero_documento', align:'center' },
        { text: '', value: 'actions', sortable: false, align:'center' },
      ],

      openDialog: false,
      numero_expediente: this.$store.getters.getExpediente == 'Sin Seleccionar' ? '' : JSON.parse(JSON.stringify(this.$store.getters.getExpediente.numero_expediente)),
    }
  },

  head() {
    const title = 'Actualización de propietarios';
    return {
      title,
    }
  },

  mounted(){
    this.redireccionarIdInmueble()
    console.log('kdkdkdkd',this.$store.getters.getContribuyente)
    this.getInmueble()
    this.getIdInmueblePropietarios()
  },


  methods: {
    redireccionarIdInmueble(){
      if(this.$store.getters.getExpediente === 'Sin Seleccionar'){
        this.$router.push('consulta-inmueble')
        this.$alert("cancel", {desc: "Debe seleccionar un inmueble para ingresar a este módulo", hash: 'knsddcssdc', title:'Error'})
      }
    },

    getInmueble() {
      this.$axios.$get('inmueble/' + this.$store.getters.getExpediente.id).then(response => {
          this.inmuebleData = response
        }).catch(err => {
          console.log(err)
        })
    },

    getIdInmueblePropietarios(){
      this.$axios.$get(`inmueble_propietarios/?inmueble=${this.$store.getters.getExpediente.id}`).then(response => {
        this.inmueblePropietariosData = response
        this.dialog_mostrar = true
      }).catch(err => {
        console.log(err)
      })
    },

    agregarContribuyente(){
      const fechaValida = this.esFechaValida(this.fecha_compra);
      if (fechaValida) {
        const formData = new FormData()
        formData.append('inmueble', this.$store.getters.getExpediente.id)
        formData.append('propietario', this.$store.getters.getContribuyente.id)
        formData.append('fecha_compra', this.fecha_compra)
        this.$axios.$post('CrearInmueblePropietario/', formData).then(res => {
          this.inmueblePropietariosData.push(res)
          this.$alert("success", {desc: "Se ha agregado el contribuyente con éxito", hash: 'knsddcssdc', title:'Agregado'})        
          this. getIdInmueblePropietarios()
        }).catch(err => {
          console.log(err)
        })

        this.openDialog = false
      }else{
        this.$alert("cancel", {desc: "Debe colocar una fecha Válida", hash: 'knsddcssdc', title:'Error'})
      }

    },
    esFechaValida(fecha) {
      const regexFecha = /^\d{4}-\d{2}-\d{2}$/; // Formato YYYY-MM-DD
      return regexFecha.test(fecha) && !isNaN(Date.parse(fecha));
    }, 

    openDelete(item){
      this.defaultItem = item
      this.dialogDelete = true
    },

    deleteItem(){
      this.$axios.$delete('inmueble_propietarios/'+ this.defaultItem.id + '/').then((res) => {
        console.log(res.data)
        this.dialogDelete = false
        this.$alert("success", {desc: "Se ha eliminado con éxito", hash: 'knsddcssdc', title:'Eliminado'})   
        const index = this.inmueblePropietariosData.findIndex((item) => item.id === this.defaultItem.id)
        if (index !== -1) {
          this.inmueblePropietariosData.splice(index, 1);
        }     
      }).catch((err) => {
        console.log(err)
      });
    },
  }
}
</script>

<style src="~/assets/styles/pages/actualizacion-propietarios.scss" lang="scss" />

