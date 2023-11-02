<template>
  <div class="center no-padding divcol" style="margin-bottom:20px; padding-left: 256px;">
    <section class="section1-descripcion-inmueble">
      <div class="creacion-container">
        <div class="divrow jspace" style="width:100%;">
          <p class="title-inscripcion-inmueble">
            Creación de estado de cuenta
          </p>

          <span class="title-inscripcion-inmueble">
            Petro Bs.: {{ montoBCV }}
          </span>
        </div>

        <hr>

        <div class="container-creacion-datos">
          <!-- <div class="title-description-div">
            <p class="nombre-razon">
              Nro. Recibo
            </p>

            <p class="nombre-desc">
              {{numeroCorrelativo}}
            </p>
          </div> -->

          <div class="title-description-div">
            <p class="nombre-razon">
              Fecha
            </p>

            <p class="nombre-desc">
              {{ obtenerFechaActual() }}
            </p>
          </div>

          <div class="title-description-div">
            <p class="nombre-razon">
              Propietario
            </p>

            <p class="nombre-desc">
              {{JSON.parse(JSON.stringify(this.$store.getters.getContribuyente.nombre))}}
            </p>
          </div>

          <div class="title-description-div" style="border-right: none!important;">
            <p class="nombre-razon">
              RIF
            </p>
            <p class="nombre-desc">
              {{JSON.parse(JSON.stringify(this.$store.getters.getContribuyente.numero_documento))}}
            </p>
          </div>
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

          <v-btn class="btn-mas" v-if="show_observaciones === true " @click="show_observaciones = false">
            -
          </v-btn>
        </div>

        <hr>

        <div v-if="show_observaciones === true" class="center" style="width: 100%; margin-bottom: 30px;">
          <v-textarea
          class="textarea"
          v-model="observaciones"
          ></v-textarea>
        </div>
      </div>
    </section>

    <section class="section2-inscripcion-inmueble">
      <div class="descripcion-container">
        <div class="title-morado">
          <p class="solicitud-title">
            Items de la solicitud
          </p>

          <p class="solicitud-title">
            Monto total: {{ montoTotal() }}
          </p>

          <v-dialog
            v-model="dialogWait"
            hide-overlay
            persistent
            width="300"
          >
            <v-card
              color="primary"
              dark
            >
              <v-card-text>
                Por favor espere
                <v-progress-linear
                  indeterminate
                  color="white"
                  class="mb-0"
                ></v-progress-linear>
              </v-card-text>
            </v-card>
          </v-dialog>

            <v-dialog v-model="dialog_IC" content-class="dialog-flow" fullscreen scrollable>
              <div class="div-dialog">
                <v-card class="dialog-flow-container">
                  <v-card-title>
                    <span class="title">Cálculos impuestos de inmuebles urbanos</span>
                  </v-card-title>


                      <v-card class="card-flow">
                        <v-card-title class="title-flow">
                          Cálculo del impuesto
                        </v-card-title>
                        <table>
                          <thead>
                            <tr>
                              <th style="padding: 4px;"> Zona </th>
                              <th style="padding: 4px;"> Base cálculo Bs </th>
                              <th style="padding: 4px;"> Sub Total Bs </th>
                              <th style="padding: 4px;"> tBaseMultaRecargoInteres Bs </th>
                              <th style="padding: 4px;"> Multa Bs({{ IC_Cabecera.fmulta }}%)</th>
                              <th style="padding: 4px;"> Recargo Bs  ({{ IC_Cabecera.frecargo }}%)</th>
                              <th style="padding: 4px;"> Interés Bs</th>
                              <th style="padding: 4px;"> Total Bs </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr class="solicitud-inputs-container">
                              <td style="padding: 4px;text-align: center;"> {{ IC_Cabecera.zona }} </td>
                              <td style="padding: 4px;text-align: center;"> {{ IC_Cabecera.basecalculobs }} </td>
                              <td style="padding: 4px;text-align: center;"> {{ roundNumber(IC_Cabecera.subtotal, 2) }} </td>
                              <td style="padding: 4px;text-align: center;"> {{ roundNumber(IC_Cabecera.BaseMultaRecargoInteres, 2) }} </td>
                              <td style="padding: 4px;text-align: center;"> {{ roundNumber(IC_Cabecera.multa, 2) }} </td>
                              <td style="padding: 4px;text-align: center;"> {{ roundNumber(IC_Cabecera.recargo, 2) }} </td>
                              <td style="padding: 4px;text-align: center;"> {{ roundNumber(IC_Cabecera.interes, 2) }} </td>
                              <td style="padding: 4px;text-align: center;"> {{ roundNumber(IC_Cabecera.total, 2) }} </td>
                              

                            </tr>
                          </tbody>
                        </table>
                      </v-card>


                      <v-card class="card-flow">
                        <v-card-title class="title-flow">
                          Detalle del cálculo del impuesto
                        </v-card-title>
                        <table>
                          <thead>
                            <tr>
                              <th style="padding: 2px;"> Aplica </th>
                              <th style="padding: 2px;"> Año </th>
                              <th style="padding: 2px;"> Periodo </th>
                              <th style="padding: 2px;"> Multa </th>
                              <th style="padding: 2px;"> Uso </th>
                              <th style="padding: 2px;"> Tipo </th>
                              <th style="padding: 2px;"> Area m2 </th>
                              <th style="padding: 2px;"> Alicuota Bs</th>
                              <th style="padding: 2px;"> Sub Total Bs. </th>
                              <th style="padding: 2px;"> Descuento % </th>
                              <th style="padding: 2px;"> Total Bs.</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr v-for="(item, index) in IC_Detalle" :key="index" class="solicitud-inputs-container">
                              <td style="padding: 2px;"> <span :style="{ color: item.multa ? 'red' : 'black' }"> {{ item.aplica }} </span></td>
                              <td style="padding: 2px;"> <span :style="{ color: item.multa ? 'red' : 'black' }"> {{ item.anio }}  </span></td>
                              <td style="padding: 2px;text-align: center;"> <span :style="{ color: item.multa ? 'red' : 'black' }">{{ item.periodo }} </span></td>
                              <td style="padding: 2px;text-align: center;"> <span :style="{ color: item.multa ? 'red' : 'black' }">{{ item.multa }} </span></td>
                              <td style="padding: 2px;"> <span :style="{ color: item.multa ? 'red' : 'black' }">{{ item.uso_descripcion }} </span></td>
                              <td style="padding: 2px;"> <span :style="{ color: item.multa ? 'red' : 'black' }">{{ item.tipo_descripcion }} </span></td>
                              <td style="padding: 2px;text-align: right;"> <span :style="{ color: item.multa ? 'red' : 'black' }">{{ item.area_m2 }} m2 </span></td>
                              <td style="padding: 2px;text-align: right;"> <span :style="{ color: item.multa ? 'red' : 'black' }">{{ item.alicuota.toFixed(8) }}</span> </td>
                              <td style="padding: 2px;text-align: right;"> <span :style="{ color: item.multa ? 'red' : 'black' }">{{ roundNumber(item.sub_total, 2) }}</span></td>
                              <td style="padding: 2px;text-align: right;"> <span :style="{ color: item.multa ? 'red' : 'black' }">{{ roundNumber(item.mdescuento, 2) }}</span> </td>
                              <td style="padding: 2px;text-align: right;"> <span :style="{ color: item.multa ? 'red' : 'black' }">{{ roundNumber(item.total, 2) }} </span></td>
                            </tr>
                          </tbody>
                        </table>
                     </v-card>


                     <v-card class="card-flow">
                        <v-card-title class="title-flow">
                          Detalle del descuento aplicado
                        </v-card-title>
                        <table>
                          <thead>
                            <tr>
                              <th style="padding: 2px;"> Aplica </th>
                              <th style="padding: 2px;"> Año </th>
                              <th style="padding: 2px;"> Periodo </th>
                              <th style="padding: 2px;"> Uso </th>
                              <th style="padding: 2px;"> Fecha desde </th>
                              <th style="padding: 2px;"> Fecha hasta </th>
                              <th style="padding: 2px;"> Descripción </th>
                              <th style="padding: 2px;"> Sub total Bs </th>
                              <th style="padding: 2px;"> Descuento % </th>
                              <th style="padding: 2px;"> Total Bs </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr v-for="(item, index) in IC_Descuento" :key="index" class="solicitud-inputs-container">
                              <td style="padding: 2px;"> {{ item.aplica }} </td> 
                              <td style="padding: 2px;"> {{ item.anio }} </td>
                              <td style="padding: 2px;text-align: center;"> {{ item.periodo }} </td>
                              <td style="padding: 2px;text-align: left;"> {{ item.uso_descripcion }} </td>
                              <td style="padding: 2px;text-align: center;"> {{ item.fechadesde }} </td>
                              <td style="padding: 2px;text-align: center;"> {{ item.fechahasta }} </td>
                              <td style="padding: 2px;text-align: center;"> {{ item.descripcion }} </td>
                              <td style="padding: 2px;text-align: right;"> {{ roundNumber(item.base, 2)  }} </td>
                              <td style="padding: 2px;text-align: right;"> {{ roundNumber(item.descuento, 2)  }} </td>
                              <td style="padding: 2px;text-align: right;"> {{ roundNumber(item.total, 2)  }} </td>
                            </tr>
                          </tbody>
                        </table>
                     </v-card>

                     <v-card class="card-flow">
                        <v-card-title class="title-flow">
                          Detalle del interés moratorio aplicado (BCV Tasas de interés activas.)
                        </v-card-title>
                        <table>
                          <thead>
                            <tr>
                              <th style="padding: 2px;"> Año </th>
                              <th style="padding: 2px;"> Mes </th>
                              <th style="padding: 2px;"> Tasa % </th>
                              <th style="padding: 2px;"> Dias </th>
                              <th style="padding: 2px;"> Mora Mensual Bs </th>
                              <th style="padding: 2px;"> Total Interes Mensual Bs </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr v-for="(item, index) in IC_Interes" :key="index" class="solicitud-inputs-container">
                              <td style="padding: 2px;text-align: left;"> {{ item.anio }} </td>
                              <td style="padding: 2px;text-align: center;"> {{ item.mes }} </td>
                              <td style="padding: 2px;text-align: right;"> {{ roundNumber(item.tasa, 2)  }} </td>
                              <td style="padding: 2px;text-align: right;"> {{ roundNumber(item.dias, 2)  }} </td>
                              <td style="padding: 2px;text-align: right;"> {{ roundNumber(item.moramensual, 2)  }} </td>
                              <td style="padding: 2px;text-align: right;"> {{ roundNumber(item.interesmensual, 2)  }} </td>
                            </tr>
                          </tbody>
                        </table>
                     </v-card>                     


                     <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn class="btn dialog-btn" @click="dialog_IC = false">
                          Salir
                        </v-btn>
                      </v-card-actions>
                  </v-card>              
              </div>
            </v-dialog>

        </div>

        <v-btn class="btns-add-remove no-shadow" @click="addDiv(index)">
          +
        </v-btn>

        <div v-for="(div,index) in divs" :key="index" class="solicitud-inputs-container">
          <v-autocomplete
          v-model="div.tasa_multa_id"
          class="big-autocomplete mobile-inputs"
          label="Trámite / Servicio"
          :items="tasaMultaData"
          item-text="descripcion"
          item-value="id"
          @change="selectedField(index)"
          :readonly="div.editable"
          ></v-autocomplete>

          <v-text-field
          class="small-input mobile-inputs"
          label="Monto"
          readonly
          v-model="div.monto_unidad_tributaria"
          ></v-text-field>

          <v-text-field
          v-model="div.cantidad"
          class="small-input mobile-inputs"
          label="Cantidad"
          @input="multiplicarValor(index)"
          :value="1"
          type="number"
          :readonly="div.editable"
          ></v-text-field>

          <v-text-field
          v-model="div.calculo"
          class="small-input mobile-inputs"
          label="Total"
          readonly
          :value="0"
          ></v-text-field>

          <v-btn class="btns-add-remove"  :disabled="div.editable"  @click="removeDiv(index)">
            <v-icon>mdi-delete</v-icon>
          </v-btn>

          <v-btn class="btns-add-remove" :disabled="!div.editable" @click="DetalleIC(div.detalle)">
            <v-icon>mdi-close</v-icon>
          </v-btn>

        </div>

        <hr>

        <div class="divrow center div-btns" style="gap:30px;">

          <v-btn class="btn size-btn" @click="createEstadoCuenta()">
            Guardar
          </v-btn>

        </div>
      </div>
    </section>
  </div>
</template>

<script>
import computeds from '~/mixins/computeds'
import jsPDF from 'jspdf';
import 'jspdf-autotable';

export default{
  name: "Estado-Cuenta-Detalle-HaciendaPage",
  mixins: [computeds],
  data() {
    return{
      dialogWait: false,
      dialog_IC: false,
      observaciones:'',
      nuevoRegistro: {},
      monto_unidad_tributaria: null,
      nombrePropietario: '',
      cedulaPropietario: '',
      nacionalidadPropietario: '',
      dialog_exito: false,
      monto_total:"72,4",
      show_observaciones: false,
      divs:[],
      propietarioData:[],
      correlativoData:[],
      tasaMultaData:[],
      bcvData:[],
      flujoData:[],
      dataTipoInmueble: [],
      idflujo: this.$store.getters.getFlujo=='Sin Seleccionar'?'':JSON.parse(JSON.stringify(this.$store.getters.getFlujo.codigo)),
      IC_Cabecera:[],
      IC_Detalle:[],
      IC_Descuento:[],
      IC_Interes:[],
      tasa_multa_id: null,
      Correlativo: 0,
      Id: 0,

    }
  },

  head() {
    const title = 'Inscripción Inmueble';
    return {
      title,
    }
  },

  mounted(){
    if (this.idflujo==''){
      this.$router.push('estado-cuenta-hacienda')
          this.$alert("cancel", {desc: "Debe seleccionar un tipo de transacción o trámite", hash: 'knsddcssdc', title:'Error'})
    }
    else{
      this.dialogWait = true
        this.getCorrelativo()
        this.getTasaMulta()
        this.getBCV()
        this.getTipoInmueble()
        if(this.$store.getters.getExpediente=='Sin Seleccionar'){
            this.$router.push('consulta-inmueble')
            this.$alert("cancel", {desc: "Debe seleccionar un Inmueble para ingresar a este módulo", hash: 'knsddcssdc', title:'Error'})
        }else{
            
            this.getDeudaImpuesto()
        }
        this.dialogWait = false
      }
  },


  methods: {
    roundNumber(value, decimals) {
      return parseFloat(value).toFixed(decimals);
    },
    DetalleIC(id) {
      console.log('ID',id)
      if (id=='IC'){
        this.dialog_IC = true
      }
      
    },

    multiplicarValor(index) {
      const div = this.divs[index];
      if (div.cantidad !== null) {
        div.calculo = (div.monto_unidad_tributaria * div.cantidad  * this.montoBCV).toFixed(2);
      }
    },
    getTasaMulta(){
      this.$axios.$get('tasamulta').then(response => {
        this.tasaMultaData = response
        this.tasaMultaData.forEach((item) => {
          item.editable = false;
        });
        console.log('this.tasaMultaData0',this.tasaMultaData)
      }).catch(err => {
        console.log(err)
      })
    },
    getDeudaImpuesto(){
      const data = {
        inmueble: this.$store.getters.getExpediente.id,
        propietario: this.$store.getters.getContribuyente.id,
        periodo: 4,
      }
      this.$axios.$post('ImpuestoInmueble/', data).then(res => {


        if (res) {
          this.IC_Cabecera=res[0].cabacera
          if (res[0].cabacera.flujo){
            this.$alert("success", {desc: "El imueble posee impuestos por pagar pero tiene un proceso en catastro por terminar.", hash: 'knsddcssdc', title:'Impuesto por pagar.'}) 
            this.divs.push({
              tasa_multa_id: null, // Valor para tasa_multa_id (puedes reemplazarlo con el valor que desees)
              monto_unidad_tributaria: null, // Valor para monto_unidad_tributaria (puedes reemplazarlo con el valor que desees)
              cantidad: 1, // Valor para cantidad (puedes reemplazarlo con el valor que desees)
              calculo: 0, // Valor para calculo (puedes reemplazarlo con el valor que desees)
              editable: false
            });
          }else{
            this.IC_Cabecera=res[0].cabacera
            this.IC_Detalle=res[0].detalle
            this.IC_Descuento=res[0].descuento
            this.IC_Interes=res[0].interes
            this.tasa_multa_id=this.tasaMultaData.find((TasaMulta) => TasaMulta.codigo === 'IC')
            console.log('this.tasaMultaData1',this.tasaMultaData)
            this.divs.push({
              tasa_multa_id: this.tasa_multa_id.id, // Valor para tasa_multa_id (puedes reemplazarlo con el valor que desees)
              monto_unidad_tributaria: this.IC_Cabecera.total, // Valor para monto_unidad_tributaria (puedes reemplazarlo con el valor que desees)
              cantidad: 1, // Valor para cantidad (puedes reemplazarlo con el valor que desees)
              calculo: this.IC_Cabecera.total, // Valor para calculo (puedes reemplazarlo con el valor que desees)
              editable: true,
              detalle:'IC'
            });
            this.$alert("success", {desc: "El imueble posee impuestos por pagar. Se ha cargado la deuda con éxito.", hash: 'knsddcssdc', title:'Impuesto por pagar.'}) 

        }
        }
        else{
          this.divs.push({
            tasa_multa_id: null, // Valor para tasa_multa_id (puedes reemplazarlo con el valor que desees)
            monto_unidad_tributaria: null, // Valor para monto_unidad_tributaria (puedes reemplazarlo con el valor que desees)
            cantidad: 1, // Valor para cantidad (puedes reemplazarlo con el valor que desees)
            calculo: 0, // Valor para calculo (puedes reemplazarlo con el valor que desees)
            editable: false
          });
        }
      }).catch(err =>{
        console.log(err)
      })
    },



    getBCV() {
      this.$axios.$get('unidadtributaria/').then(response => {
          this.bcvData = response
          this.montoBCV = this.bcvData[0].monto
        }).catch(err => {
          console.log(err)
        })
    },

    montoTotal() {
      let total = 0
      for (const div of this.divs) {
        if (div.calculo !== null) {
          total += parseFloat(div.calculo)
        }
      }
      return total.toFixed(2)
    },

    selectedField(index) {
      const div = this.divs[index]
      const tasa_encontrada = this.tasaMultaData.find(tasa => tasa.id === div.tasa_multa_id)
      if (tasa_encontrada) {
        div.monto_unidad_tributaria = tasa_encontrada.unidad_tributaria;
      }

      this.multiplicarValor(index)
    },



    getCorrelativo(){
      this.$axios.$get('correlativo').then(response => {
        this.correlativoData = response
        this.numeroCorrelativo = this.correlativoData[0].NumeroEstadoCuenta
      }).catch(err => {
        console.log(err)
      })
    },

    getTipoInmueble(){
      this.$axios.$get('tipoinmueble').then(response => {
        this.dataTipoInmueble = response
        //console.log(this.dataTipoInmueble, 'dataINmueble')
      }).catch(err => {
        console.log(err)
      })
    },


    createEstadoCuenta(){
      const data = {
        inmueble: (this.idflujo=='2' || this.idflujo=='3' ||this.idflujo=='4')? this.$store.getters.getExpediente.id : null,
        flujo: this.idflujo,
        correlativo: this.numeroCorrelativo,
        propietario: this.$store.getters.getContribuyente.id,
        observacion: this.observaciones,
        detalle: this.divs,
        monto_total: this.montoTotal(),
      }
      this.$axios.$post('crearestadocuenta/', data).then(res => {
        console.log('crearestadocuenta',res)
        this.Correlativo=res.documento
        this.Id=res.id
        this.generarPDF()
        
        this.$router.push('modificar-datos')
        this.$alert("success", {desc: "Se ha creado un estado de cuenta con éxito", hash: 'knsddcssdc', title:'Creado'}) 
      }).catch(err =>{
        console.log(err)
      })
    },


    addDiv(){
      this.divs.push({cantidad: 1, calculo: 0, editable:false});
      console.log(' this.divs', this.divs)
    },  

    removeDiv(index) {
      this.divs.splice(index, 1);
    },

    obtenerFechaActual() {
      const fecha = new Date();
      const dia = fecha.getDate().toString().padStart(2, '0');
      const mes = (fecha.getMonth() + 1).toString().padStart(2, '0');
      const anio = fecha.getFullYear().toString().slice(-2);
      return `${dia}/${mes}/${anio}`;
    },
    sumarDiasHabiles(fechaInicial, nDias) {
      let fecha = new Date(fechaInicial);
      let diasSumados = 0;

      while (diasSumados < nDias) {
        // Añadir un día
        fecha.setDate(fecha.getDate() + 1);

        // Verificar si el día de la semana es sábado (6) o domingo (0)
        if (fecha.getDay() !== 6 && fecha.getDay() !== 0) {
          diasSumados++;
        }
      }

      return fecha;
    },
    formatearFecha(fecha) {
      const dia = fecha.getDate().toString().padStart(2, '0');
      const mes = (fecha.getMonth() + 1).toString().padStart(2, '0');
      const anio = fecha.getFullYear();
      return `${dia}/${mes}/${anio}`;
    },
    generarPDF() {
      const pdf = new jsPDF('p', 'mm', 'letter');

      // Define un objeto de mapeo para traducir valores abreviados a descripciones completas
      const tipoMapeo = {
        'I': 'Impuesto',
        'T': 'Tasa',
        'M': 'Multa',
        'O': 'Otro'
      };

      const fechaActual = new Date();
      const dia = fechaActual.getDate().toString().padStart(2, '0'); // Obtén el día y asegúrate de tener 2 dígitos.
      const mes = (fechaActual.getMonth() + 1).toString().padStart(2, '0'); // El mes comienza desde 0, por lo que sumamos 1.
      const anio = fechaActual.getFullYear();
      const hora = fechaActual.getHours().toString().padStart(2, '0');
      const minutos = fechaActual.getMinutes().toString().padStart(2, '0');
      const segundos = fechaActual.getSeconds().toString().padStart(2, '0');

      const fechaConHora = `${dia}/${mes}/${anio} ${hora}:${minutos}:${segundos}`;

      const img1 = new Image();
      img1.src = '/alcaldia_catastro/alcaldia_catastro/assets/sources/logos/Escudo_Naguanagua_Carabobo.png'; // Ruta a tu primer logotipo
      const img2 = new Image();
      img2.src = '/alcaldia_catastro/alcaldia_catastro/assets/sources/logos/logo.png'; // Ruta a tu segundo logotipo

      let startY = 55 ;
    
        // Establecer el tamaño de fuente para el encabezado de la tabla
      const fontSizeTitle = 15; // Tamaño de fuente para el encabezado
      const fontSizeHead = 8; // Tamaño de fuente para el encabezado
      const fontSizeBody = 8; // Tamaño de fuente para el cuerpo de la tabla
      //let pageHeight = pdf.internal.pageSize.height;
      
      
      pdf.addImage(img1, 'PNG', 10, 15, 30, 30); // Logotipo izquierdo
      pdf.addImage(img2, 'PNG', 160, 13, 40, 30); // Logotipo derecho
      pdf.setFontSize(fontSizeHead);  
      pdf.setFont("helvetica", "bold");
      pdf.text(200, 10, `No DE CONTROL. ${this.Correlativo}`, null, null, 'right');
      pdf.setFont("helvetica", "normal");
      pdf.setFontSize(fontSizeHead+2); 
      pdf.text(100, 20, 'REPÚBLICA BOLIVARIANA DE VENEZUELA', null, null, 'center');
      pdf.text(100, 25, 'ESTADO CARABOBO', null, null, 'center');
      pdf.text(100, 30, 'ALCALDÍA DEL MUNICIPIO NAGUANAGUA', null, null, 'center');
      pdf.text(100, 35, 'DIRECCIÓN DE HACIENDA', null, null, 'center');
      pdf.setFontSize(fontSizeHead); 
      pdf.text(200, 50, `FECHA DE IMPRESIÓN: ${fechaConHora}`, null, null, 'right');

      pdf.setFont("helvetica", "bold");
      pdf.setFontSize(fontSizeTitle); 
      pdf.text(100, 45, 'ESTADO DE CUENTA', null, null, 'center');
      pdf.setFontSize(fontSizeHead); 
      pdf.setFont("helvetica", "normal");
    
      pdf.setDrawColor(0); // Color de línea (negro en este caso)
      pdf.setLineWidth(0.5); // Ancho de la línea (1 en este caso)
      pdf.line(15, startY, 200, startY); // Coordenadas de inicio (x1, y1) y final (x2, y2) de la línea
      startY=startY+5
      pdf.text('R.I.F.:', 15, startY);
      pdf.setFont("helvetica", "bold");
      pdf.text(JSON.parse(JSON.stringify(this.$store.getters.getContribuyente.numero_documento)), 55, startY);
      pdf.setFont("helvetica", "normal");
      startY=startY+5
      pdf.text('NOMBRE/RAZÓN SOCIAL: ', 15, startY);
      pdf.setFont("helvetica", "bold");
      pdf.text(JSON.parse(JSON.stringify(this.$store.getters.getContribuyente.nombre)), 55, startY);
      pdf.setFont("helvetica", "normal");
      startY=startY+5
      pdf.text('DIRECCIÓN: ', 15, startY);
      pdf.setFont("helvetica", "bold");
      pdf.text(JSON.parse(JSON.stringify(this.$store.getters.getContribuyente.direccion)), 55, startY);
      pdf.setFont("helvetica", "normal");
      startY=startY+5
      pdf.text('TELÉFONO:', 15, startY);
      pdf.setFont("helvetica", "bold");
      pdf.text(JSON.parse(JSON.stringify(this.$store.getters.getContribuyente.telefono_principal)), 55, startY);
      pdf.setFont("helvetica", "normal");     
      startY=startY+5
      pdf.line(15, startY, 200, startY); // Coordenadas de inicio (x1, y1) y final (x2, y2) de la línea
      startY=startY+5
      pdf.text('OBSERVACIONES:', 15, startY);
      pdf.setFont("helvetica", "bold");
      pdf.text(this.observaciones, 55, startY);
      pdf.setFont("helvetica", "normal");  
      startY=startY+10 
      pdf.text('SERVICIO O TRÁMITE:', 15, startY);
      pdf.setFont("helvetica", "bold");
      pdf.text(JSON.parse(JSON.stringify(this.$store.getters.getFlujo.descripcion)), 55, startY);
      pdf.setFont("helvetica", "normal");
      if(this.$store.getters.getExpediente!='Sin Seleccionar'){
          startY=startY+5
          pdf.text('NÚMERO DE EXPEDIENTE:', 15, startY);
          pdf.setFont("helvetica", "bold");
          pdf.text(JSON.parse(JSON.stringify(this.$store.getters.getExpediente.numero_expediente)), 55, startY);
          pdf.setFont("helvetica", "normal");
          startY=startY+5
          pdf.text('DIRECCIÓN INMUEBLE:', 15, startY);
          pdf.setFont("helvetica", "bold");
          pdf.text(JSON.parse(JSON.stringify(this.$store.getters.getExpediente.direccion)), 55, startY);
          pdf.setFont("helvetica", "normal");
      }
      startY=startY+5

      pdf.setFontSize(fontSizeHead); // Establecer el tamaño de fuente solo para esta línea


      const options = {
        startY: startY + 2,
        styles: { fontSize: fontSizeBody },
        headStyles: { fontSize: fontSizeHead },
        didParseCell: function (data) {
          if (data.column.dataKey === 'monto_unidad_tributaria') {
            // Formatear y justificar a la derecha con 8 decimales
            data.cell.text(parseFloat(data.cell.text).toFixed(8));
            data.cell.styles.halign = 'right';
          }
        },
      };

      const columns = ['tipo','Descripción', 'Petro', 'Cantidad', 'Monto Bs'];
      const data = this.divs.map((item) => [
      tipoMapeo[this.tasaMultaData.find((TasaMulta) => TasaMulta.id === item.tasa_multa_id).tipo], 
        this.tasaMultaData.find((TasaMulta) => TasaMulta.id === item.tasa_multa_id).descripcion,
        item.monto_unidad_tributaria,
        item.cantidad,
        item.calculo,
      ]);

      pdf.autoTable(columns, data, options);


/*
      pdf.autoTable({
          head: [[ 'Descripción','Petro', 'Cantidad', 'Monto Bs' ]],
          body: this.divs.map(item => [
            this.tasaMultaData.find((TasaMulta) => TasaMulta.id === item.tasa_multa_id).descripcion,
            item.monto_unidad_tributaria,
            item.cantidad,
            item.calculo
            
          ]),
          startY: startY + 2,
          styles: { fontSize: fontSizeBody }, // Establecer el tamaño de fuente para el cuerpo de la tabla
          headStyles: { fontSize: fontSizeHead }, // Establecer el tamaño de fuente para el encabezado

        });
        }
        */
        startY += 10 + this.divs.length * 7;
        startY=startY+10

        pdf.text('MONTO A CANCELAR (BS.):', 15, startY);
        pdf.setFont("helvetica", "bold");
        pdf.setFontSize(fontSizeTitle); 
        pdf.text(this.montoTotal(), 55, startY);
        pdf.setFontSize(fontSizeHead); 
        pdf.setFont("helvetica", "normal");

        startY=startY+10
        pdf.text('Esta planilla tiene validez de '+this.$store.getters.getFlujo.vencimiento+' días. Se vence el día :'+this.formatearFecha(this.sumarDiasHabiles(fechaActual, +this.$store.getters.getFlujo.vencimiento)), 15, startY);
        startY=startY+10
        pdf.text('Contribuyente_________________________________________', 15, startY);
        startY=startY+10
        pdf.text('C.I._________________________________________________', 15, startY);
        startY=startY+10
        pdf.text('Firma_______________________________________________', 15, startY);
        pdf.text('SELLO___________________________', 140, startY);
        startY=startY+10
        pdf.text('Fecha______________________________________________', 15, startY);
        startY=startY+5
        
      
     
      pdf.save(`EstadoCuenta-Nro-${this.Correlativo}.pdf`);

      this.uploadPDF(pdf);

    },

    uploadPDF(pdf) {
    const formData = new FormData();
    formData.append('ReportePdf', new Blob([pdf.output('blob')], { type: 'application/pdf' }), `EstadoCuenta-Nro-${this.Correlativo}.pdf`);
      this.$axios.$patch(`estadocuenta/${this.Id}/`, formData, {
        headers: { 'Content-Type': 'application/pdf' },
      })
      .then(response => {
        console.log(response)
        this.getPDF()
      })
      .catch(err => {
        console.log(err)
      });
    },
    getPDF() {
      this.$axios
        .$get(`estadocuenta/${this.Id}/`)
        .then(response => {
          console.log('response',response.ReportePdf)
          const pdfData = response.ReportePdf;
          window.open(pdfData, "_blank").focus();
        })
        .catch(error => {
          console.error('Error al obtener el PDF:', error);
        });
    },
  }
}
</script>

<style src="~/assets/styles/pages/estado-cuenta-detalle.scss" lang="scss" />