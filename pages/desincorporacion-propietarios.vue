<template>
  <div class="center no-padding divcol" style="margin-bottom:20px; padding-left: 256px;">
      <section class="section1-actualizacion-propietarios">
        <div class="impuestos-tasa-container">
          <div class="jspace center">
            <p class="title-impuestos-tasa">
              Datos del inmueble a desincorporar: {{ numero_expediente }}
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
            <v-autocomplete
            v-model="inmuebleData.tipodesincorporacion"
            class="input-mostrar"
            label="Motivo de desincorporación*"
            :items="tipodesincorporacionData"
            item-text="descripcion"
            item-value="id"
            ></v-autocomplete>

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

      <v-dialog content-class="dialog-confirmacion" persistent v-model="openDialogDesincorporacion">
        <v-card class="card-confirmacion-dialog">
          <div class="center divcol">
            <h5 class="title-dialog">
              Confirme motivo de Desincorporación del inmueble
            </h5>
          </div>
          <div>
            <v-autocomplete
            v-model="inmuebleData.tipodesincorporacion"
            class="input-fecha"
            label="Motivo de desincorporacion*"
            :items="tipodesincorporacionData"
            item-text="descripcion"
            item-value="id"
            ></v-autocomplete>
          </div>
          <div class="center divrow" style="gap:10px;">
            <v-btn @click="DesincorporarInmueble()" class="btn btn-small">
              Desincorporar
            </v-btn>

            <v-btn class="btn btn-small" @click="openDialogDesincorporacion = false" style="background-color:#ED057E!important;">
              Cancelar
            </v-btn>
          </div>
        </v-card>
      </v-dialog>

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
      <div class="divrow center mobile-col" style="gap:20px;">
          <v-btn class="btn btn-mobile" @click="openDialogDesincorporacion = true">
            Desincorporar
          </v-btn>
          <v-btn class="btn btn-mobile" @click="getPDF()">
            Reimprimir constancia
          </v-btn>
      </div>

    </section>
  </div>
</template>

<script>
import computeds from '~/mixins/computeds'
import jsPDF from 'jspdf';
import 'jspdf-autotable';

export default {
  name: "Desincorporacion-PropietariosPage",
  mixins: [computeds],
  data() {
    return{
      menu1: true,
      dialogDelete: false,
      inmuebleData:[],
      inmueblePropietariosData:[],
      tipodesincorporacionData:[],
      search:'',
      nombrecontribuyente:this.$store.getters.getContribuyente=='Sin Seleccionar' ?'':JSON.parse(JSON.stringify(this.$store.getters.getContribuyente.nombre)),
      nacionalidadcontribuyente:this.$store.getters.getContribuyente=='Sin Seleccionar' ?'':JSON.parse(JSON.stringify(this.$store.getters.getContribuyente.nacionalidad)),
      numero_documento: this.$store.getters.getContribuyente=='Sin Seleccionar'?'':JSON.parse(JSON.stringify(this.$store.getters.getContribuyente.numero_documento)),
      headers: [
        { text: 'Nombre', align: 'center', value: 'propietario.nombre',},
        { text: 'Nacionalidad', value: 'propietario.nacionalidad', align:'center' },
        { text: 'Nro. Documento', value: 'propietario.numero_documento', align:'center' },
        { text: 'F. Compra', value: 'fecha_de_compra', align:'center' },
        { text: '', value: 'actions', sortable: false, align:'center' },
      ],

      openDialog: false,
      openDialogDesincorporacion: false,
      numero_expediente: this.$store.getters.getExpediente == 'Sin Seleccionar' ? '' : JSON.parse(JSON.stringify(this.$store.getters.getExpediente.numero_expediente)),
      CorrelativoData: [],
    }
  },

  head() {
    const title = 'Desincorporación de Propietarios';
    return {
      title,
    }
  },

  mounted(){ 
    this.redireccionarIdInmueble() 
  },


  methods: {
    getCorrelativo() {
      this.$axios.$get('correlativo').then(response => {
        this.CorrelativoData = response
        console.log('CorrelativoData',this.CorrelativoData)
      }).catch(err => {
        console.log(err)
      })
    },
    redireccionarIdInmueble(){
      if(this.$store.getters.getExpediente === 'Sin Seleccionar'){
        this.$router.push('consulta-inmueble')
        this.$alert("cancel", {desc: "Debe seleccionar un inmueble para ingresar a este módulo", hash: 'knsddcssdc', title:'Error'})
      }
      else{
            this.getCorrelativo()
            console.log('kdkdkdkd',this.$store.getters.getContribuyente)
            this.getTipoDesincorporacion()
            this.getInmueble()
            this.getIdInmueblePropietarios()
      }
    },
    getInmueble() {
      this.$axios.$get('inmueble/' + this.$store.getters.getExpediente.id).then(response => {
          this.inmuebleData = response
        }).catch(err => {
          console.log(err)
        })
    },
    getTipoDesincorporacion() {
      this.$axios.$get('tipodesincorporacion').then(response => {
          this.tipodesincorporacionData = response
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
    async DesincorporarInmueble(){
      var estatusinmuebledata=[]
      const response = await this.$axios.$get('estatusinmueble/?codigo=99');
      estatusinmuebledata = response[0]
      console.log('estatusinmuebledata',estatusinmuebledata);   
      console.log('this.inmuebleData.tipodesincorporacion',this.inmuebleData.tipodesincorporacion); 
      const formData = new FormData();
      formData.append('tipodesincorporacion', this.inmuebleData.tipodesincorporacion);
      formData.append('status',estatusinmuebledata.id);
      console.log('formData',formData)
      this.$axios.$patch('inmueble/' + this.$store.getters.getExpediente.id+ '/', formData).then((res) => {
        console.log(res.data)
        this.$alert("success", { desc: "Se ha desincorporado un inmueble con éxito", hash: 'knsddcssdc', title: 'Edición de valoración de terreno.' })
        this.generarPDF()
        this.openDialogDesincorporacion=false
      }).catch((err) => {
        console.log(err)


      });

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
          console.log('inmueblePropietariosData',this.inmueblePropietariosData)
          this.$alert("success", {desc: "Se ha agregado el contribuyente con éxito"+this.fecha_compra, hash: 'knsddcssdc', title:'Agregado'})        
          this.getIdInmueblePropietarios()
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


    generarPDF() {
      const pdf = new jsPDF('p', 'mm', 'letter');

      const fechaActual = new Date();
      const dia = fechaActual.getDate().toString().padStart(2, '0'); // Obtén el día y asegúrate de tener 2 dígitos.
      const mes = (fechaActual.getMonth() + 1).toString().padStart(2, '0'); // El mes comienza desde 0, por lo que sumamos 1.
      const anio = fechaActual.getFullYear();
      const hora = fechaActual.getHours().toString().padStart(2, '0');
      const minutos = fechaActual.getMinutes().toString().padStart(2, '0');
      const segundos = fechaActual.getSeconds().toString().padStart(2, '0');
      const fechaConHora = `${dia}/${mes}/${anio} ${hora}:${minutos}:${segundos}`;
      const img1 = new Image();
      const img2 = new Image();
      var ruta1 = this.CorrelativoData[0].Logo1;
      if (ruta1.includes("catastro_back")) {
        // Concatenar "/catastro_back"
        ruta1 = ruta1.replace("catastro_back", "catastro_back/catastro_back");
      }
      var ruta2 = this.CorrelativoData[0].Logo2;
      if (ruta2.includes("catastro_back")) {
        // Concatenar "/catastro_back"
        ruta2 = ruta2.replace("catastro_back", "catastro_back/catastro_back");
      }
      img1.src = ruta1;
      img2.src = ruta2;
      img1.onload = function () {
        pdf.addImage(img1, 'PNG', 10, 15, 30, 30); // Logotipo izquierdo
        img2.onload = function () {
          pdf.addImage(img2, 'PNG', 160, 13, 40, 30); // Logotipo derecho
        };
      };
      let startY = 55;
      // Establecer el tamaño de fuente para el encabezado de la tabla
      const fontSizeTitle = 15; // Tamaño de fuente para el encabezado
      const fontSizeHead = 8; // Tamaño de fuente para el encabezado
      const fontSizeBody = 8; // Tamaño de fuente para el cuerpo de la tabla
      //let pageHeight = pdf.internal.pageSize.height;
      pdf.addImage(img1, 'PNG', 10, 15, 30, 30); // Logotipo izquierdo
      pdf.addImage(img2, 'PNG', 160, 13, 40, 30); // Logotipo derecho
      pdf.setFontSize(fontSizeHead + 2);
      pdf.text(100, 20, 'REPÚBLICA BOLIVARIANA DE VENEZUELA', null, null, 'center');
      pdf.text(100, 25, 'ESTADO CARABOBO', null, null, 'center');
      pdf.text(100, 30, 'ALCALDÍA DEL MUNICIPIO NAGUANAGUA', null, null, 'center');
      pdf.text(100, 35, 'DIRECCIÓN DE HACIENDA', null, null, 'center');
      pdf.setFontSize(fontSizeHead);
      pdf.text(200, 50, `FECHA DE IMPRESIÓN: ${fechaConHora}`, null, null, 'right');
      pdf.setFont("helvetica", "bold");
      pdf.setFontSize(fontSizeTitle);
      pdf.text(100, 45, 'COMPROBANTE DE DESINCORPORACION', null, null, 'center');
      pdf.setFontSize(fontSizeHead);
      pdf.setFont("helvetica", "normal");
      pdf.setDrawColor(0); // Color de línea (negro en este caso)
      pdf.setLineWidth(0.5); // Ancho de la línea (1 en este caso)
      pdf.line(15, startY, 200, startY); // Coordenadas de inicio (x1, y1) y final (x2, y2) de la línea
      startY = startY + 5
      pdf.text('MOTIVO:', 15, startY);
      pdf.setFont("helvetica", "bold");
      pdf.text(this.tipodesincorporacionData.find(tasa => tasa.id == this.inmuebleData.tipodesincorporacion).descripcion, 55, startY);
      pdf.setFont("helvetica", "normal");
      startY = startY + 5
      pdf.text('EXPEDIENTE:', 15, startY);
      pdf.setFont("helvetica", "bold");
      pdf.text(this.inmuebleData.numero_expediente, 55, startY);
      pdf.setFont("helvetica", "normal");
      startY = startY + 5
      pdf.text('DIRECCION: ', 15, startY);
      pdf.setFont("helvetica", "bold");
      pdf.text(this.inmuebleData.direccion, 55, startY);
      pdf.setFont("helvetica", "normal");
      startY = startY + 5
      pdf.text('OBSERVACIONES:', 15, startY);
      pdf.setFont("helvetica", "bold");
      pdf.text('Pendiente por formalizar inscripcion', 55, startY);
      pdf.setFont("helvetica", "normal");
      startY = startY + 10
      pdf.text('PROPIETARIO(S):', 15, startY);
      const options = {
        startY: startY + 2,
        styles: { fontSize: fontSizeBody },
        headStyles: { fontSize: fontSizeHead },
      };
      const columns = ['RIF', 'NOMBRE','FECHA DE COMPRA'];
      const data = this.inmueblePropietariosData.map((item) => [
        item.propietario.numero_documento,
        item.propietario.nombre,
        item.fecha_de_compra,
      ]);
      pdf.autoTable(columns, data, options);
      startY += 10 + this.inmueblePropietariosData.length * 7;
      startY = startY + 10
      pdf.text('ENTREGADO POR___________________________________________', 15, startY);
      pdf.text('RECIBIDO_________________________________________', 120, startY);
      startY = startY + 10
      pdf.save(`Desincorporacion-Exp-${this.inmuebleData.numero_expediente}.pdf`);
      this.uploadPDF(pdf);
    },
    
    uploadPDF(pdf) {
    const formData = new FormData();
    formData.append('ReportePdfDesincorporacion', new Blob([pdf.output('blob')], { type: 'application/pdf' }), `Desincorporacion-Exp-${this.inmuebleData.numero_expediente}}.pdf`);
      this.$axios.$patch(`inmueble/${this.$store.getters.getExpediente.id}/`, formData, {
        headers: { 'Content-Type': 'application/pdf' },
      })
      .then(response => {
        this.getPDF() 
        console.log(response)
      })
      .catch(err => {
        console.log(err)
      });
    },
    getPDF() {
      this.$axios
        .$get(`inmueble/${this.$store.getters.getExpediente.id}/`)
        .then(response => {
          if (response.ReportePdfDesincorporacion){
            console.log('response',response.ReportePdfDesincorporacion)
            var pdfData = response.ReportePdfDesincorporacion;
            if (pdfData.includes("catastro_back")) {
              // Concatenar "/catastro_back"
              pdfData = pdfData.replace("catastro_back", "catastro_back/catastro_back");
            }
            window.open(pdfData, "_blank").focus();
          }else{
            this.$alert("cancel", {desc: "No hay registros de una desincorporación de este inmueble.", hash: 'knsddcssdc', title:'Error'}) 
          }
        })
        .catch(error => {
          console.error('Error al obtener el PDF:', error);
        });
    },
  }
}
</script>

<style src="~/assets/styles/pages/desincorporacion-propietarios.scss" lang="scss" />

