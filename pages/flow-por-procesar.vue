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


                    <v-text-field v-model="defaultItem.flujo" class="input-big" disabled
                      label="Número de Solicitud"></v-text-field>
                      <v-text-field v-model="defaultItem.expediente" class="input-big" disabled
                      label="Expediente"></v-text-field>
                      <v-text-field v-model="defaultItem.tipoflujo_descripcion" class="input-big" disabled
                      label="Tipo de Solicitud"></v-text-field>
                      <v-text-field v-model="defaultItem.usuario_envia_departamento" class="input-big" disabled
                      label="Envia"></v-text-field>
                    <v-text-field v-model="defaultItem.flujo_fecha" class="input-big"  disabled
                      label="Fecha Solicitud"></v-text-field>
                    <v-text-field v-model="defaultItem.recibe_fecha" class="input-big" disabled
                      label="Fecha Recepcion"></v-text-field>
                      <v-text-field v-model="defaultItem.inicio_proceso_fecha" class="input-big" disabled
                      label="Fecha Inicio de Proceso"></v-text-field>


                    <div class="divrow center col-mobile" style="max-width:500px; gap:10px; width:100%;">
                      <v-autocomplete 
                      v-model="defaultItem.estado" 
                      :items="itemsEstatusFiltered"
                      item-text="text"
                      item-value="id"
                      label="Cambio de Estado en el Proceso"
                      class="input-dialog">
                    </v-autocomplete>
                    </div>
                    <v-textarea class="input-textarea" v-model="defaultItem.observaciones" label="Observación:"></v-textarea>


                  </div>
                </div>

                <div class="div-btns">

                  <v-btn :disabled="disableBoton" style="background-color:#ED057E!important;" @click="dialog_editar = false">
                    Cancelar
                  </v-btn>
                  <v-btn :disabled="disableBoton" @click="saveEstado()">
                    Guardar
                  </v-btn> 
                  <v-btn :disabled="disableBoton"  @click="openFIN(defaultItem)" v-if="(JSON.parse(JSON.stringify(this.$store.getters.getUser.finaliza_flujo)))">
                    Archivar Solicitud (Solo Personal de Archivo)
                  </v-btn>
                </div>
              </div>
            </v-card>
          </v-dialog>
        </div>

        <div class="data-table-container">
          <v-text-field v-model="search" append-icon="mdi-magnify" label="Buscar" hide-details
            class="input-data-table"></v-text-field>

          <v-data-table :loading="dialogWait" :headers="headers" :items="flujoData" :items-per-page="10" :search="search" :footer-props="{
            itemsPerPageText: 'Items por página',
          }" sort-by="id" sort-desc class="mytabla" mobile-breakpoint="840">
            <template v-slot:top>
              <v-toolbar flat class="toolbar-tabla">
                <v-dialog v-model="dialogDevuelve" max-width="500px">
                  <v-card id="dialog-eliminar-card">
                    <v-card-title class="center title">¿Finalizar Solicitud. Archivar el EXPEDIENTE!!!!!?</v-card-title>
                      <span class="alerta-text" style="text-align:center;">Esta seguro de FINALIZAR la solicitu y Archivar definitivamente el Expediente?</span>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn :disabled="disableBoton"  class="btn dialog-btn" text @click="saveFIN()">Si</v-btn>
                      <v-btn :disabled="disableBoton"  class="btn dialog-btn" text @click="dialogDevuelve = false"
                        style="background-color:#ED057E!important;">No</v-btn>
                      <v-spacer></v-spacer>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </v-toolbar>
            </template>
            <template #[`item.actions1`]="{ item }">
              <v-btn :disabled="disableBoton"  class="btn-tabla" @click="editItem(item)">
                Procesar
              </v-btn>
            </template>
          </v-data-table>
        </div>
      </div>
    </section>
    <!--v-dialog v-model="dialogWait" hide-overlay persistent width="300">
      <v-card color="primary" dark>
        <v-card-text>
          Por favor espere!!!
          <v-progress-linear indeterminate color="white" class="mb-0"></v-progress-linear>
        </v-card-text>
      </v-card>
    </v-dialog-->
  </div>
</template>

<script>
import computeds from '~/mixins/computeds'
import jsPDF from 'jspdf';
import 'jspdf-autotable';

export default {
  name: "flow-por-procesarPage",
  mixins: [computeds],
  data() {
    return {
      disableBoton: false,
      dialogWait : true,
      permido: JSON.parse(JSON.stringify(this.$store.getters.getUser)),
      search: '',
      dialogRecibe: false,
      dialogDevuelve: false,
      dialog_editar: false,
      headers: [
        { text: 'Solicitud', align: 'center', value: 'flujo', },
        { text: 'Expediente', value: 'expediente', align: 'center' },
        { text: 'Operación', value: 'tipoflujo_descripcion', align: 'center' },
        { text: 'Propietario', value: 'propietario_nombre', align: 'center' },
        { text: 'Fecha Solicitud', value: 'flujo_fecha', align: 'center' },
        { text: 'Fecha Recepción', value: 'recibe_fecha', align: 'center' },
        { text: 'Estado', value: 'estado_display', align: 'center' },
        { text: '', value: 'actions1', sortable: false, align: 'center' },
      ],
      itemsEstatus: [
              {id:'4', text:'En proceso'}, 
              {id:'5', text:'Proceso Finalizado'}, 
              {id:'9', text:'TERMINAR la Solicitud'},  ],
      flujoData: [],
      defaultItem: [],
      fecha:new Date().toISOString().slice(0, 19).replace('Z', ''),
      CorrelativoData: [],


    }
  },
  computed: { 
    itemsEstatusFiltered() {
      console.log('this.$store.getters.getUser.imprime_recibo_entrega',this.$store.getters.getUser.imprime_recibo_entrega)
    // Filtramos los elementos según el valor de la variable 'a'
    if (JSON.parse(JSON.stringify(this.$store.getters.getUser.finaliza_flujo))){ 
      if (JSON.parse(JSON.stringify(this.$store.getters.getUser.imprime_recibo_entrega))){ 
            return [...this.itemsEstatus, {id:'A', text:'Imprimir Soporte Entrega Expediente'}];
        }
      return this.itemsEstatus;
    } else {
      if (JSON.parse(JSON.stringify(this.$store.getters.getUser.imprime_recibo_entrega))){ 
        const listaFiltrada = this.itemsEstatus.filter(item => item.id !== '9');
            return [...listaFiltrada, {id:'A', text:'Imprimir Soporte Entrega Expediente'}];
        }
      return this.itemsEstatus.filter(item => item.id !== '9');
      
    }    
  }
  },
  head() {
    const title = 'Documentos Por Procesar';
    return {
      title,
    }
  },

  async mounted() {
    await this.getCorrelativo();
    await this.getFlujo();
    console.log('kdokadñlkadlkad',JSON.parse(JSON.stringify(this.$store.getters.getUser.finaliza_flujo)))
  },

  methods: {

    async getFlujo() {
      this.dialogWait = true;
      try {
        const response = await this.$axios.$get('flujodetalle/?tarea=3&departamento_recibe='+this.permido.departamento);
        this.flujoData = response
        console.log('flujoData',this.CorrelativoData)
      } catch (err) {
        console.log(err);
      }
      this.dialogWait = false;
    },
    async getCorrelativo() {
      try {
        const response = await this.$axios.$get('correlativo');
        this.CorrelativoData = response;
        console.log('CorrelativoData', this.CorrelativoData)
      } catch (err) {
        console.log(err);
      }
    },

    openFIN(item) {
      this.defaultItem = item
      this.dialogDevuelve = true
    },

    saveEstado() {
      this.disableBoton=true
      const formData = new FormData()
     
      if (this.defaultItem.estado=='5'){
        formData.append('tarea', '6')
        formData.append('estado','6')
      }else{
         formData.append('estado', this.defaultItem.estado)
         if (this.defaultItem.estado=='A'){
           this.generarPDF()
           if (this.defaultItem.observaciones=='null'){
            this.defaultItem.observaciones=''
           }
           this.defaultItem.observaciones=this.defaultItem.observaciones+' Entrega de soporte de entrega de documento el dia:'+this.fecha+', por:'+this.$store.getters.getUser.apellido + ', ' + this.$store.getters.getUser.nombre

          }

      }
      if (this.defaultItem.observaciones=='null'){
            this.defaultItem.observaciones=''
          }
      formData.append('observaciones', this.defaultItem.observaciones)

      this.$axios.$patch('flujodetalle/' + this.defaultItem.id + '/', formData).then((res) => {
        console.log(res.data)
        this.$alert("success", { desc: "Se ha cambiado el estado del documento con éxito", hash: 'knsddcssdc', title: 'Cambio de Estado del proceso' })
        this.getFlujo()
        this.dialog_editar = false
      }).catch((err) => {
        console.log(err)
      });
      this.disableBoton=false
    },
    saveFIN() {
      this.disableBoton=true
      const formData = new FormData()
      formData.append('tarea', '8')
      formData.append('estado','9')
      formData.append('fin_usuario',this.permido.user_id)
      formData.append('fin_fecha',this.fecha)
      formData.append('observaciones', this.defaultItem.observaciones)
      this.$axios.$patch('flujodetalle/' + this.defaultItem.id + '/', formData).then((res) => {
        console.log(res.data)

        const formDataNew = new FormData()
        formDataNew.append('estado', '2')
        this.$axios.$patch('flujo/' + this.defaultItem.flujo + '/', formDataNew).then((res) => {
          console.log(res.data)
        }).catch((err) => {
          console.log(err)
        });

        this.$alert("success", { desc: "Se ha FINALIZADO la solicitud con éxito", hash: 'knsddcssdc', title: 'Solicitud Finalizada' })
        this.getFlujo()
        this.dialogDevuelve = false
        this.dialog_editar = false
      }).catch((err) => {
        console.log(err)
      });
      this.disableBoton=false
    },
    editItem(item) {
      console.log(item)
      this.dialog_editar = true
      this.defaultItem = item
      //this.defaultItem.id = item.id
    },




    async  generarPDF() {
      const pdf = new jsPDF('p', 'mm', 'legal');
      //const maxWidth = 180;
      //let textLines =0;

      const fechaActual = new Date();
      const dia = fechaActual.getDate().toString().padStart(2, '0'); // Obtén el día y asegúrate de tener 2 dígitos.
      const mes = (fechaActual.getMonth() + 1).toString().padStart(2, '0'); // El mes comienza desde 0, por lo que sumamos 1.
      const anio = fechaActual.getFullYear();
      const fechaSinHora = `${dia}/${mes}/${anio}`;
      


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
      };
      img2.onload = function () {
        pdf.addImage(img2, 'PNG', 10, 15, 30, 30); // Logotipo izquierdo
      };

      //-------------------------------------------------fin mesura

      // Establecer el tamaño de fuente para el encabezado de la tabla
      const fontSizeTitle = 15; // Tamaño de fuente para el encabezado
      const fontSizeHead = 8; // Tamaño de fuente para el encabezado
      //const fontSizeBody = 8; // Tamaño de fuente para el cuerpo de la tabla
      //let pageHeight = pdf.internal.pageSize.height;
      pdf.addImage(img1, 'PNG', 10, 15, 30, 30); // Logotipo izquierdo
      pdf.addImage(img2, 'PNG', 160, 13, 40, 30); // Logotipo derecho


      pdf.setFontSize(fontSizeHead + 2);
      pdf.text(100, 20, 'REPÚBLICA BOLIVARIANA DE VENEZUELA', null, null, 'center');
      pdf.text(100, 25, 'ESTADO CARABOBO', null, null, 'center');
      pdf.text(100, 30, 'ALCALDÍA DEL MUNICIPIO NAGUANAGUA', null, null, 'center');
      pdf.text(100, 35, 'DIRECCIÓN DE CATASTRO', null, null, 'center');
      pdf.setFontSize(fontSizeTitle);
      //pdf.text(100, 45, 'CÉDULA CATASTRAL', null, null, 'center');
      pdf.text(100, 45, 'COMPROBANTE INTERNO', null, null, 'center');

      pdf.setFontSize(fontSizeHead);
      pdf.setFont("helvetica", "normal");
      let startY = 55;






      // Opciones comunes para todas las tablas
      const commonOptions = {
        styles: { fontSize: 8, halign: 'center' },
        theme: 'grid',
        headStyles: { fillColor: (255, 192, 203), textColor: (255, 0, 0), lineColor: (255, 0, 0), cellPadding: 1 },
        bodyStyles: { textColor: (255, 0, 0), lineColor: (255, 0, 0), cellPadding: 1 },

      };

      let columns = ["FECHA"];
      let data = [[fechaSinHora]];

      // Dibujar la primera tabla
      pdf.autoTable({
        ...commonOptions,
        columns: columns,
        body: data,
        tableWidth: 30,
        startY: startY,
        margin: { left: 172 },
      });

      startY = startY + 15
        pdf.setFontSize(fontSizeHead);
        columns = ["Numero Expediente", "Nro. RIF.", "Propietario/Contribuyente" ];
        data = [
          [
            //this.dataDocumentoPropiedad.fecha_terreno !== "null"  ? this.dataDocumentoPropiedad.fecha_terreno.split('-').reverse().join('-') : ' ',
            this.defaultItem.expediente ,
            this.defaultItem.propietario_numero ,
            this.defaultItem.propietario_nombre ,
          ]];


        pdf.autoTable({
          ...commonOptions,
          columns: columns,
          startY: startY,
          body: data,
        });
        startY = startY + 20
        pdf.setFontSize(fontSizeTitle);
        pdf.text( 100, startY, 'ENTREGADO AL CONTRIBUYENTE', null, null, 'center');
        pdf.setFontSize(fontSizeHead);
      pdf.setFont("helvetica", "normal");

        startY = startY + 15
      pdf.text('FUNCIONARIO:', 15, startY);
      pdf.setFont("helvetica", "bold");
      pdf.text(this.$store.getters.getUser.apellido + ', ' + this.$store.getters.getUser.nombre, 55, startY);
      pdf.setFont("helvetica", "normal");
      startY = startY + 5
      pdf.text('PROCESO #.:', 15, startY);
      pdf.setFont("helvetica", "bold");
      pdf.text(this.defaultItem.flujo.toString(), 55, startY);
      pdf.setFont("helvetica", "normal");


      pdf.save(`ConstanciaEntrega-Exp-${this.defaultItem.flujo}.pdf`);
      await this.uploadPDF(pdf);
    },


    async uploadPDF(pdf) {
      const formData = new FormData();
      formData.append('ReportePdf', new Blob([pdf.output('blob')], { type: 'application/pdf' }), `ConstanciaEntrega-Exp-${this.defaultItem.flujo}}.pdf`);
      try {
        const response = await this.$axios.$patch('flujo/' + this.defaultItem.flujo + '/', formData, {
          headers: { 'Content-Type': 'application/pdf' },
        })
        //await this.getPDF()
        console.log('ReportePdf', response)
      } catch (err) {
        console.log(err);
      }
    },

    async getPDF() {
      try {
        const response = await this.$axios.$get('flujo/' + this.defaultItem.flujo + '/')
        if (response.ReportePdf) {

          console.log('response getPDF', response.ReportePdf)
          var pdfData = response.ReportePdf;
          if (pdfData.includes("catastro_back")) {
              pdfData = pdfData.replace("catastro_back", "catastro_back/catastro_back");
            }
          window.open(pdfData, "_blank").focus();
        } else {
            this.$alert("cancel", { desc: "No se ha generado una constancia de entrega de cédula catastral para este inmueble.", hash: 'knsddcssdc', title: 'Error' })
          }
        } catch (err) {
        console.log(err);
      }
    }, 



  }
};
</script>


<style src="~/assets/styles/pages/modificar-datos.scss" lang="scss" />