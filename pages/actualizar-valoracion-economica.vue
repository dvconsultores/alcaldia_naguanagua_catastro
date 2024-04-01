<template>
  <div class="center no-padding divcol" style="margin-bottom:20px; padding-left: 256px;">
    <section class="section1-actualizar-valoracion-economica">
      <div class="actualizar-valoracion-economica-container">
        <div class="title-morado">
          <p class="actualizar-valoracion-economica-title">
            Datos del Terreno
          </p>
        </div>
        <div class="div-card pt-8 wrap" style="flex-direction: column;">
          <v-row>
            <v-col lg="10" class="divrow pr-0">
              <v-autocomplete v-model="dataValoracionTerreno.tipo" class="input-small outlined" label="Tipo terreno"
                :items="dataTipo" item-text="descripcion" item-value="id" readonly></v-autocomplete>

              <v-autocomplete v-model="dataValoracionTerreno.tipologia" class="input-small outlined" label="Uso"
                :items="dataTipologia" item-text="descripcion" item-value="id" readonly></v-autocomplete>
              <v-text-field v-model="dataValoracionTerreno.uso_valor" class="input-small outlined" label="Uso valor"
                readonly></v-text-field>
              <v-text-field v-model="dataValoracionTerreno.zona_codigo" class="input-small outlined" label="Zona"
                readonly></v-text-field>
              <v-text-field v-model="dataValoracionTerreno.area" class="input-small outlined" label="Área (m2)"
                readonly></v-text-field>
              <v-text-field v-model="dataValoracionTerreno.uso_total" type="number" class="input-small outlined"
                label="Valor Total" hide-spin-buttons readonly></v-text-field>
            </v-col>
            <v-col lg="1" class="divrow pl-0">

              <v-btn v-if="accesos.actualizar" class="btn-delete" @click="editTerreno()">
                <v-icon>
                  mdi-pencil
                </v-icon>
              </v-btn>
            </v-col>
            <v-col lg="1" class="divrow pl-0">
              <span style="color: red;" v-if="ValidaCategorizacion != dataValoracionTerreno.zona_codigo">
                !ERROR EN ZONA!
              </span>
            </v-col>
          </v-row>
        </div>
      </div>

      <div class="actualizar-valoracion-economica-container">
        <div class="title-morado">
          <p class="actualizar-valoracion-economica-title">
            Datos de la Construcción. TOTAL m2: {{ numeroFormateado(montoTotalPagado()) }}
          </p>
          <v-icon v-if="accesos.escribir" class="bold" color="#fff" x-large
            @click="dialog_crear = true">mdi-plus</v-icon>
        </div>
        <div class="div-card pt-8 wrap" style="flex-direction: column;">
          <v-row v-for="(item, index) in dataValoracionConstruccion" :key="index"
            style="border-bottom: 2px solid var(--primary);">
            <v-col lg="10" class="divrow pr-0">
              <v-text-field v-model="item.tipo_descripcion" class="input-small outlined" label="Tipo Inmueble"
                readonly></v-text-field>
              <v-text-field v-model="item.uso_descripcion" class="input-small outlined" label="Uso descripción"
                readonly></v-text-field>
              <v-text-field v-model="item.uso_valor" class="input-small outlined" label="Uso valor"
                readonly></v-text-field>
              <v-text-field v-model="item.zona_codigo" class="input-small outlined" label="Zona"
                readonly></v-text-field>

              <!--v-card class="input-small outlined center" style="background: #fff;">
                <v-checkbox readonly v-model="item.sub_utilizado" label="Sub-Utilizado"></v-checkbox>
              </v-card-->


              <v-text-field v-model="item.area" class="input-small outlined text-right" label="Área (m2)"
                readonly></v-text-field>
              <v-text-field :value="formatoValor(item.uso_total)" class="input-small outlined" label="Valor total"
                readonly></v-text-field>

            </v-col>

            <v-col lg="1" class="divrow pl-0">
              <v-btn v-if="accesos.borrar" class="btn-delete" @click="openDelete(item)">
                <v-icon>
                  mdi-delete
                </v-icon>
              </v-btn>
            </v-col>
            <v-col lg="1" class="divrow pl-0">
              <span style="color: red;" v-if="ValidaCategorizacion != item.zona_codigo">
                !ERROR EN ZONA!
              </span>
            </v-col>
          </v-row>

        </div>
      </div>

      <div class="observaciones-container">
        <div class="jspace center" style="width: 100%; margin-bottom: 0px;">
          <p class="title-observaciones">
            Observaciones
          </p>

          <v-btn class="btn-mas" v-if="show_observaciones != true" @click="show_observaciones = true">
            +
          </v-btn>

          <v-btn class="btn-mas" v-if="show_observaciones === true" @click="show_observaciones = false">
            -
          </v-btn>
        </div>

        <hr>

        <div class="center" style="width: 100%; margin-bottom: 30px;">
          <v-textarea class="textarea" v-model="dataValoracionTerreno.observaciones" disabled></v-textarea>
        </div>
      </div>


    </section>

    <!-- DIALOG -->



    <v-dialog content-class="dialog-agregar-construccion" max-width="1600px" v-model="dialog_edit_terreno">
      <v-card class="card-crear">
        <v-card-title>
          <span class="title">Modificar terreno</span>
        </v-card-title>

        <hr>

        <v-card-text>
          <v-container>
            <v-row class="center">
              <v-col lg="12" class="divrow pr-0">
                <v-autocomplete v-model="defaultItem.tipologia" class="input-small" label="Uso" :items="dataTipologia"
                  item-text="descripcion" item-value="id"></v-autocomplete>

                <v-autocomplete v-model="defaultItem.tipo" class="input-small" label="Tipo Inmueble" :items="dataTipo"
                  item-text="descripcion" item-value="id"></v-autocomplete>


              </v-col>

              <v-col lg="12" class="divrow pr-0">
                <v-text-field v-model="defaultItem.area" class="input-small" label="Área (m2)"></v-text-field>

              </v-col>

              <div class="center" style="width: 100%; margin-bottom: 30px;">
                <v-textarea class="input-300" v-model="defaultItem.observaciones"
                  label="Observaciones (Fines Fiscales)"></v-textarea>
              </div>

            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions class=center>
          <v-btn class="btn dialog-btn" @click="dialog_edit_terreno = false">
            Cancelar
          </v-btn>

          <v-btn class="btn dialog-btn" @click="saveTerreno()" style="background-color:#ED057E!important;"
            :loading="btnAddTerreno">
            Guardar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>


    <v-dialog content-class="dialog-agregar-construccion" max-width="1600px" v-model="dialog_crear">
      <v-card class="card-crear">
        <v-card-title>
          <span class="title">Agregar construcción</span>
        </v-card-title>

        <hr>

        <v-card-text>
          <v-container>
            <v-row class="center">
              <v-col lg="12" class="divrow pr-0">
                <v-autocomplete v-model="nuevoRegistro.tipologia" class="input-small" label="Uso" :items="dataTipologia"
                  item-text="descripcion" item-value="id"></v-autocomplete>

                <v-autocomplete v-model="nuevoRegistro.tipo" class="input-small" label="Tipo Inmueble" :items="dataTipo"
                  item-text="descripcion" item-value="id"></v-autocomplete>

                <!--v-menu v-model="menu_fecha" :close-on-content-click="false" :nudge-right="5"
                  transition="scale-transition" offset-y min-width="auto">
                  <template #activator="{ on, attrs }">
                    <v-text-field v-model="nuevoRegistro.fecha_construccion" class="input-small"
                      label="Fecha habitabilidad" append-icon="mdi-calendar" readonly v-bind="attrs"
                      v-on="on"></v-text-field>
                  </template>
<v-date-picker v-model="nuevoRegistro.fecha_construccion" label="Fecha habitabilidad" color="#ff4081"
  header-color="#810880" class="custom-date-picker"></v-date-picker>
</v-menu-->
              </v-col>

              <v-col lg="12" class="divrow pr-0">
                <v-text-field v-model="nuevoRegistro.area" class="input-small" label="Área (m2)"></v-text-field>

              </v-col>



              <!--v-col lg="6" class="divrow pr-0">
                <v-card class="input-small outlined center" style="background: #fff;">
                  <v-checkbox v-model="nuevoRegistro.sub_utilizado" label="Sub-Utilizado"></v-checkbox>
                </v-card>
              </v-col-->
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions class=center>
          <v-btn class="btn dialog-btn" @click="dialog_crear = false">
            Cancelar
          </v-btn>

          <v-btn class="btn dialog-btn" @click="postInmuebleValoracionConstruccion()"
            style="background-color:#ED057E!important;" :loading="btnAddConstruccion">
            Guardar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- delete dialog -->

    <v-dialog v-model="dialog_eliminar" max-width="500px">
      <v-card id="dialog-eliminar-card">
        <v-card-title class="center title">¿Desea eliminarlo?</v-card-title>
        <span class="alerta-text">Esta acción no se puede revertir</span>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn class="btnconfirmDeletesTopografia dialog-btn" text @click="confirmDelete()">Si</v-btn>
          <v-btn class="btn dialog-btn" text @click="dialog_eliminar = false"
            style="background-color:#ED057E!important;">No</v-btn>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog v-model="dialogWait" hide-overlay persistent width="300">
      <v-card color="primary" dark>
        <v-card-text>
          Por favor espere!!!
          <v-progress-linear indeterminate color="white" class="mb-0"></v-progress-linear>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import computeds from '~/mixins/computeds'
import moment from 'moment'

export default {
  name: "actualizar-valoracion-economicaPage",
  mixins: [computeds],
  data() {
    return {
      ValidaCategorizacion: JSON.parse(JSON.stringify(this.$store.getters.getExpediente.codigo_zona)),

      dialogWait: false,
      new_sub_utilizado: false,
      dialog_eliminar: false,
      menu_fecha: false,
      dialog_crear: false,
      dialog_edit_terreno: false,
      show_observaciones: true,
      defaultItem: {
        tipologia: '',
        tipo: '',
        area: '',
        observaciones: '',
      },

      ///data inmueble terreno

      //area: null,
      //area_factor_ajuste: null,
      //fines_fiscales: null,
      //forma_factor_ajuste: null,
      //id: null,
      //inmueble: null,
      //observaciones: null,
      //tipologia: null,
      //valor_ajustado: null,
      //valor_total: null,
      //valor_unitario: null,

      btnAddConstruccion: false,
      btnAddTerreno: false,
      selectedDate: null,
      dataTipologia: [],
      dataTipo: [],
      dataFinesFiscales: [],
      dataForma: [],
      dataValoracionTerreno: {},
      dataValoracionConstruccion: [],
      inmuebleId: this.$store.getters.getExpediente == 'Sin Seleccionar' ? '' : JSON.parse(JSON.stringify(this.$store.getters.getExpediente.id)),
      permido: JSON.parse(JSON.stringify(this.$store.getters.getUser.permisos)),
      accesos: {},
      nuevoRegistro: {},
    }
  },
  head() {
    const title = 'Actualizar Valoración Económica';
    return {
      title,
    }
  },
  async mounted() {
    await this.redireccionIdVacio()

  },

  methods: {
    numeroFormateado(numero) {
      // Convertir a número si es una cadena
      const numeroComoNumero = typeof numero === 'string' ? parseFloat(numero) : numero;

      // Verificar si 'numeroComoNumero' es un número válido
      if (isNaN(numeroComoNumero)) {
        return 'Error: No es un número válido';
      }

      // Formatear el número manualmente
      const partes = numeroComoNumero.toFixed(2).toString().split('.');
      partes[0] = partes[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      return partes.join('.');
    },
    montoTotalPagado() {
        var total = 0
        console.log('total cxc', this.montoTotalCxC)
        for (const div of this.dataValoracionConstruccion) {
          if (div.area !== null) {
            total += parseFloat(div.area)
          }
        }
        return total
    },
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
        console.log('this.accesos', this.accesos)
      } else {
        this.$router.push('index')
        this.$alert("cancel", { desc: "No está autorizado para accesar a este módulo!!!", hash: 'knsddcssdc', title: 'Error' })
      }
    },
    formatoValor(valor) {
      if (isNaN(valor)) {
        // Maneja el caso en que valor no sea un número válido
        return "NaN";
      }

      // Formatea el valor con 6 decimales y separador de miles
      const valorFormateado = Number(valor).toFixed(6).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      return valorFormateado;
    },
    async redireccionIdVacio() {
      if (this.$store.getters.getExpediente == 'Sin Seleccionar') {
        this.$router.push('consulta-inmueble')
        this.$alert("cancel", { desc: "Debe seleccionar un inmueble para ingresar a este módulo", hash: 'knsddcssdc', title: 'Error' })
      } else {
        await this.permisos();
        this.dialogWait = true;
        try {
          await this.getInmuebleValoracionTerreno()
          await this.getInmuebleValoracionConstruccion()
        } catch (error) {
          this.dialogWait = false;
          console.log(error);
        }
        //this.getInmuebleValoracionTerreno()
        //this.getInmuebleValoracionConstruccion()
        this.getTipologia()
        this.getTipo()
        this.getFinesFiscales()
        this.getForma()
        this.dialogWait = false;
      }
    },
    async getInmuebleValoracionTerreno() {
      try {
        const response = await this.$axios.$get(`inmueble_valoracion_terreno/?inmueble=${this.inmuebleId}`);
        this.dataValoracionTerreno = response[0];
        console.log('this.dataValoracionTerreno', this.dataValoracionTerreno)
      } catch (err) {
        console.log(err);
      }
    },
    async getInmuebleValoracionConstruccion() {
      try {
        if (this.dataValoracionTerreno) {
          const response = await this.$axios.$get(`inmueble_valoracion_construccion/?inmueblevaloracionterreno=${this.dataValoracionTerreno.id}`);
          this.dataValoracionConstruccion = response;
          console.log(this.dataValoracionConstruccion, 'construc');
        }
      } catch (err) {
        console.log(err);
      }
    },
    editTerreno() {
      this.dialog_edit_terreno = true
      this.defaultItem.tipologia = this.dataValoracionTerreno.tipologia
      this.defaultItem.tipo = this.dataValoracionTerreno.tipo
      this.defaultItem.area = this.dataValoracionTerreno.area
      this.defaultItem.observaciones = this.dataValoracionTerreno.observaciones

    },
    saveTerreno() {
      this.btnAddTerreno = true
      const formData = new FormData()
      formData.append('tipologia', this.defaultItem.tipologia)
      formData.append('tipo', this.defaultItem.tipo)
      formData.append('area', this.defaultItem.area)
      formData.append('observaciones', this.defaultItem.observaciones)


      this.$axios.$patch('inmueble_valoracion_terreno/' + this.dataValoracionTerreno.id + '/', formData).then((res) => {
        console.log(res.data)
        this.$alert("success", { desc: "Se ha editado una valoración de terreno con éxito", hash: 'knsddcssdc', title: 'Edición de valoración de terreno.' })
        this.btnAddTerreno = false
        this.dialog_edit_terreno = false
        this.getInmuebleValoracionTerreno()
      }).catch((err) => {
        console.log(err)
        this.btnAddTerreno = false
        this.dialog_edit_terreno = false

      });

      this.dialog_editar = false
    },
    postInmuebleValoracionConstruccion() {
      this.btnAddConstruccion = true
      const formNewTerreno = {
        inmueblevaloracionterreno: this.dataValoracionTerreno.id,
        tipologia: this.nuevoRegistro.tipologia,
        tipo: this.nuevoRegistro.tipo,
        fecha_construccion: this.nuevoRegistro.fecha_construccion,
        area: this.nuevoRegistro.area,
        valor: this.nuevoRegistro.valor,
        depreciacion: this.nuevoRegistro.depreciacion,
        valor_actual: this.nuevoRegistro.valor_actual,
        sub_utilizado: this.nuevoRegistro.sub_utilizado,
      }
      this.$axios.$post('inmueble_valoracion_construccion/', formNewTerreno).then(response => {
        this.dataValoracionConstruccion.push(response)
        this.$alert("success", { desc: "Se ha guardado una construcción con éxito", hash: 'knsddcssdc', title: 'Edición de inmueble' });
        this.btnAddConstruccion = false
        this.dialog_crear = false
        this.new = {}
        this.nuevoRegistro = {}
      }).catch(err => {
        console.log(err)
        this.btnAddConstruccion = false
        this.dialog_crear = false
      })
    },

    getTipologia() {
      this.$axios.$get('tipologia/?zona=' + JSON.parse(JSON.stringify(this.$store.getters.getExpediente.zona))).then(response => {
        this.dataTipologia = response
      }).catch(err => {
        console.log(err)
      })
    },
    getTipo() {
      this.$axios.$get('tipoinmueble').then(response => {
        this.dataTipo = response
      }).catch(err => {
        console.log(err)
      })
    },
    getFinesFiscales() {
      this.$axios.$get('finesfiscales').then(response => {
        this.dataFinesFiscales = response
      }).catch(err => {
        console.log(err)
      })
    },

    getForma() {
      this.$axios.$get('forma').then(response => {
        this.dataForma = response
      }).catch(err => {
        console.log(err)
      })
    },

    openDelete(item) {
      this.deleteItem = item
      this.dialog_eliminar = true
    },

    confirmDelete() {
      this.$axios.$delete(`inmueble_valoracion_construccion/${this.deleteItem.id}`, this.deleteItem).then(response => {
        console.log(response)
        this.$alert("success", { desc: "Se ha eliminado una construcción con éxito", hash: 'knsddcssdc', title: 'Edición de inmueble' });
        this.dialog_eliminar = false
        const index = this.dataValoracionConstruccion.findIndex(b => b.id === this.deleteItem.id)
        if (index !== -1) {
          this.dataValoracionConstruccion.splice(index, 1)
        }
      }).catch(err => {
        console.log(err)
        this.dialog_eliminar = false
      })
    },

    formatoFecha() {
      if (this.selectedDate) {
        const formatted = moment(this.selectedDate).format('YYYY-MM-DD HH:mm:ss')
        this.fecha_compra = formatted
      }
    },
  }
};
</script>

<style src="~/assets/styles/pages/actualizar-valoracion-economica.scss" lang="scss" />