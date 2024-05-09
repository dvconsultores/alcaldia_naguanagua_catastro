<template>
  <div class="center no-padding divcol" style="margin-bottom:20px; padding-left: 256px;">
    <section class="section1-descripcion-inmueble">
      <div class="creacion-container">
        <div class="divrow jspace" style="width:100%;">
          <p class="title-inscripcion-inmueble">
            Creación de estado de cuenta
          </p>

          <span class="title-inscripcion-inmueble">
            Base Imponible Bs.: {{ montoBCV }}
          </span>
        </div>

        <hr>

        <div class="container-creacion-datos">
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
                    <span class="title">Cálculos impuestos de inmuebles urbanos según tasa de mayor valor segun el BCV al momento de la emisión de este documento.</span>
                  </v-card-title>


                      <v-card class="card-flow">
                        <v-card-title class="title-flow">
                          Cálculo del impuesto
                        </v-card-title>
                        <table>
                          <thead>
                            <tr>
                              <th style="padding: 4px;"> Categoría </th>
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
            <v-dialog v-model="dialog_IC2023" content-class="dialog-flow" fullscreen scrollable>
              <div class="div-dialog">
                <v-card class="dialog-flow-container">
                  <v-card-title>
                    <span class="title">Cálculos impuestos de inmuebles urbanos PETRO</span>
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
                              <td style="padding: 4px;text-align: center;"> {{ IC_Cabecera2023.zona }} </td>
                              <td style="padding: 4px;text-align: center;"> {{ IC_Cabecera2023.basecalculobs }} </td>
                              <td style="padding: 4px;text-align: center;"> {{ roundNumber(IC_Cabecera2023.subtotal, 2) }} </td>
                              <td style="padding: 4px;text-align: center;"> {{ roundNumber(IC_Cabecera2023.BaseMultaRecargoInteres, 2) }} </td>
                              <td style="padding: 4px;text-align: center;"> {{ roundNumber(IC_Cabecera2023.multa, 2) }} </td>
                              <td style="padding: 4px;text-align: center;"> {{ roundNumber(IC_Cabecera2023.recargo, 2) }} </td>
                              <td style="padding: 4px;text-align: center;"> {{ roundNumber(IC_Cabecera2023.interes, 2) }} </td>
                              <td style="padding: 4px;text-align: center;"> {{ roundNumber(IC_Cabecera2023.total, 2) }} </td>
                              

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
                            <tr v-for="(item, index) in IC_Detalle2023" :key="index" class="solicitud-inputs-container">
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
                            <tr v-for="(item, index) in IC_Descuento2023" :key="index" class="solicitud-inputs-container">
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
                            <tr v-for="(item, index) in IC_Interes2023" :key="index" class="solicitud-inputs-container">
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
                        <v-btn class="btn dialog-btn" @click="dialog_IC2023 = false">
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

          <v-btn class="btn size-btn" :disabled="disableBotonGuardar" @click="createEstadoCuenta()">
            Guardar
          </v-btn>

        </div>
      </div>
    </section>
      <v-dialog content-class="dialog-confirmacion" persistent v-model="openDialogPeriodo">
        <v-card class="card-confirmacion-dialog">
          <div class="center divcol">
            <h5 class="title-dialog">
                    Confirme período para cálculo impuesto del inmueble
            </h5>
          </div>
          <v-row>
            <v-col>
              <v-text-field
                v-model="iAnio"
                class="small-input mobile-inputs"
                label="Año inicio deuda"
                readonly
                :value="0"
               ></v-text-field>
            </v-col>
            <v-col>
                <v-text-field
                  v-model="iPeriodo"
                  class="small-input mobile-inputs"
                  label="Mes inicio deuda"
                  readonly
                  :value="0"
                ></v-text-field>  
             </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-text-field
                v-model="fAnio"
                class="small-input mobile-inputs"
                label="Año fin deuda"
                readonly
                :value="0"
               ></v-text-field>
            </v-col>
            <v-col>
              <v-autocomplete
                  v-model="fPeriodo" 
                  class="big-autocomplete mobile-inputs"
                  label="Periodo fin deuda*"
                  :items="periodoData"
                  item-text="periodo"
                  item-value="id"
                ></v-autocomplete>
             </v-col>
          </v-row>
          <div class="center divrow" style="gap:10px;">
              <v-btn class="btn btn-small" @click="openDialogPeriodo = false; getDeuda()" style="background-color:#ED057E!important;">
                  Procesar
              </v-btn>
          </div>
        </v-card>
      </v-dialog>
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
      openDialogPeriodo:false,
      dialogWait: false,
      dialog_IC: false,
      dialog_IC2023: false,
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
      IC_Cabecera2023:[],
      IC_Detalle2023:[],
      IC_Descuento2023:[],
      IC_Interes2023:[],
      periodoData:[],
      tasa_multa_id: null,
      Correlativo: 0,
      Id: 0,
      iAnio:this.$store.getters.getExpediente=='Sin Seleccionar'?0:JSON.parse(JSON.stringify(this.$store.getters.getExpediente.anio)),
      iPeriodo:this.$store.getters.getExpediente=='Sin Seleccionar'?0:JSON.parse(JSON.stringify(this.$store.getters.getExpediente.codigo_periodo)),   
      fAnio:(new Date()).getFullYear(),
      fPeriodo:4,
      disableBotonGuardar:true,

    }
  },

  head() {
    const title = 'Inscripción Inmueble';
    return {
      title,
    }
  },

  async mounted() {
    if (this.idflujo == '') {
      this.$router.push('estado-cuenta-hacienda')
      this.$alert("cancel", { desc: "Debe seleccionar un tipo de transacción o trámite", hash: 'knsddcssdc', title: 'Error' })
    }
    else {
      console.log('this.$store.getters.getExpediente',this.$store.getters.getExpediente)
      this.dialogWait = true
      await this.updateStoreExpediente()
      await this.getDataPeriodo()
      await this.getCorrelativo()
      await this.getTasaMulta()
      await this.getBCV()
      await this.getTipoInmueble()
      if (this.$store.getters.getExpediente == 'Sin Seleccionar') {
        this.$router.push('consulta-inmueble')
        this.$alert("cancel", { desc: "Debe seleccionar un Inmueble para ingresar a este módulo", hash: 'knsddcssdc', title: 'Error' })
      } else {

        if (this.iAnio<=this.fAnio){
          this.openDialogPeriodo=true
        }else{
          this.$alert("success", { desc: "Expediente solvente con impuesto de inmuebles urbanos.", hash: 'knsddcssdc', title: 'Solvente' })
          this.$router.push('estado-cuenta-hacienda')
        }
        //await this.getDeudaImpuesto()
      }
      this.dialogWait = false
    }
  },


  methods: {
    async getDataPeriodo() {
      try {
        const response = await this.$axios.$get('ic_periodo/?aplica=C')
        this.periodoData = response
      } catch (err) {
        console.log(err);
      }
    },

    async updateStoreExpediente() {
      try {
        const response = await this.$axios.$get('inmueble/' + this.$store.getters.getExpediente.id)
        this.$store.dispatch('storeExpediente', response)
      } catch (err) {
        console.log(err);
      }
    },

    async getCorrelativo() {
      try {
        const response = await this.$axios.$get('correlativo');
        this.CorrelativoData = response
        console.log('CorrelativoData',this.CorrelativoData)
      } catch (err) {
        console.log(err);
      }
    },
    roundNumber(value, decimals) {
      return parseFloat(value).toFixed(decimals);
    },
    DetalleIC(id) {
      console.log('ID',id)
      if (id=='IC'){
        this.dialog_IC = true
      }
      if (id=='IC2023'){
        this.dialog_IC2023 = true
      }
      
    },

    multiplicarValor(index) {
      const div = this.divs[index];
      if (div.cantidad !== null) {
        div.calculo = (div.monto_unidad_tributaria * div.cantidad  * this.montoBCV).toFixed(2);
      }
    },
    async getTasaMulta(){
    try {
        const response = await   this.$axios.$get('tasamulta');
        this.tasaMultaData = response
        console.log('this.tasaMultaData0',this.tasaMultaData)
      } catch (err) {
        console.log(err);
      }
    },
    async getDeuda() {
        await this.getDeudaImpuesto2023()
        await this.getDeudaImpuesto()

    }, 
    async getDeudaImpuesto2023() {
      const data = {
        inmueble: this.$store.getters.getExpediente.id,
        propietario: this.$store.getters.getContribuyente.id,
        anio: this.fAnio,
        periodo: this.fPeriodo,
      }
      try {
        this.dialogWait = true
        const res = await this.$axios.$post('ImpuestoInmueble2023/', data)
        this.dialogWait = false
        if (res) {
          this.IC_Cabecera = res[0].cabacera
          // Se validaba si el expediente tiene por lo menos un tramite en FLUJO, no procese los pagos, en vista de que todavia pudieran estar modificando datos
          // pero el flujo se cierra cuando lo archivan y en la practica, mucho antes de archivar ya pueden estar cargados las valoraciones economicas.
          // es por eso que le coloque un ==99 para no eliminar la condicion y que en teoria nunca de cumpla. 
          if (res[0].cabacera.flujo==99) {
            this.$alert("success", { desc: "El inmueble posee impuestos por pagar pero tiene un proceso en catastro por terminar.", hash: 'knsddcssdc', title: 'Impuesto por pagar.' })
            this.divs.push({
              tasa_multa_id: null, // Valor para tasa_multa_id (puedes reemplazarlo con el valor que desees)
              monto_unidad_tributaria: null, // Valor para monto_unidad_tributaria (puedes reemplazarlo con el valor que desees)
              cantidad: 1, // Valor para cantidad (puedes reemplazarlo con el valor que desees)
              calculo: 0, // Valor para calculo (puedes reemplazarlo con el valor que desees)
              editable: false
            });
          } else {
            this.IC_Cabecera2023 = res[0].cabacera
            this.IC_Detalle2023 = res[0].detalle
            this.IC_Descuento2023 = res[0].descuento
            this.IC_Interes2023 = res[0].interes
            this.tasa_multa_id = this.tasaMultaData.find((TasaMulta) => TasaMulta.codigo === 'IC')
            console.log('this.IC_Cabecera', this.IC_Cabecera)
            this.observaciones="CÁLCULO desde el año:"+this.IC_Cabecera.anioini+" - período:"+this.IC_Cabecera.mesini+ ", hasta el año: 2023 - período: 4. "
            this.observaciones=this.observaciones+"Zona: "+this.IC_Cabecera.zona +", "
            this.observaciones=this.observaciones+"El cálculo está en base al último registro del PETRO en cual es Bs." + (this.IC_Cabecera.basecalculobs).toFixed(2)+". "
            this.observaciones=this.observaciones+"Sub-Total Bs: " + (this.IC_Cabecera.subtotal).toFixed(2)+". "
            this.observaciones=this.observaciones+"Base para cálculo de multa, recargo e interes Bs: " + (this.IC_Cabecera.BaseMultaRecargoInteres).toFixed(2)+". "
            this.observaciones=this.observaciones+"Multa Bs: " + (this.IC_Cabecera.multa).toFixed(2) +". "
            this.observaciones=this.observaciones+"Recargo ("+  this.IC_Cabecera.frecargo+ "%) Bs: "+(this.IC_Cabecera.recargo).toFixed(2)  +". "
            this.observaciones=this.observaciones+"Interés Bs: "+(this.IC_Cabecera.interes).toFixed(2)+". "
            this.observaciones=this.observaciones+"Total Bs: "+(this.IC_Cabecera.total).toFixed(2)+". "
            console.log('this.observaciones', this.observaciones)
            this.divs.push({
              tasa_multa_id: this.tasa_multa_id.id, // Valor para tasa_multa_id (puedes reemplazarlo con el valor que desees)
              monto_unidad_tributaria: this.IC_Cabecera.total, // Valor para monto_unidad_tributaria (puedes reemplazarlo con el valor que desees)
              cantidad: 1, // Valor para cantidad (puedes reemplazarlo con el valor que desees)
              calculo: this.IC_Cabecera.total, // Valor para calculo (puedes reemplazarlo con el valor que desees)
              editable: true,
              detalle: 'IC2023'
            });
            this.$alert("success", { desc: "El imueble posee impuestos por pagar. Se ha cargado la deuda con éxito.", hash: 'knsddcssdc', title: 'Impuesto por pagar.' })

          }
        }
        else {
          this.divs.push({
            tasa_multa_id: null, // Valor para tasa_multa_id (puedes reemplazarlo con el valor que desees)
            monto_unidad_tributaria: null, // Valor para monto_unidad_tributaria (puedes reemplazarlo con el valor que desees)
            cantidad: 1, // Valor para cantidad (puedes reemplazarlo con el valor que desees)
            calculo: 0, // Valor para calculo (puedes reemplazarlo con el valor que desees)
            editable: false
          });
        }
        this.disableBotonGuardar=false
      } catch (err) {
        console.log(err);
      }
    },
    async getDeudaImpuesto() {
      const data = {
        inmueble: this.$store.getters.getExpediente.id,
        propietario: this.$store.getters.getContribuyente.id,
        anio: this.fAnio,
        periodo: this.fPeriodo,
      }
      try {
        this.dialogWait = true
        const res = await this.$axios.$post('ImpuestoInmueble/', data)
        this.dialogWait = false
        if (res) {
          this.IC_Cabecera = res[0].cabacera
          // Se validaba si el expediente tiene por lo menos un tramite en FLUJO, no procese los pagos, en vista de que todavia pudieran estar modificando datos
          // pero el flujo se cierra cuando lo archivan y en la practica, mucho antes de archivar ya pueden estar cargados las valoraciones economicas.
          // es por eso que le coloque un ==99 para no eliminar la condicion y que en teoria nunca de cumpla. 
          if (res[0].cabacera.flujo==99) {
            this.$alert("success", { desc: "El inmueble posee impuestos por pagar pero tiene un proceso en catastro por terminar.", hash: 'knsddcssdc', title: 'Impuesto por pagar.' })
            this.divs.push({
              tasa_multa_id: null, // Valor para tasa_multa_id (puedes reemplazarlo con el valor que desees)
              monto_unidad_tributaria: null, // Valor para monto_unidad_tributaria (puedes reemplazarlo con el valor que desees)
              cantidad: 1, // Valor para cantidad (puedes reemplazarlo con el valor que desees)
              calculo: 0, // Valor para calculo (puedes reemplazarlo con el valor que desees)
              editable: false
            });
          } else {
            this.IC_Cabecera = res[0].cabacera
            this.IC_Detalle = res[0].detalle
            this.IC_Descuento = res[0].descuento
            this.IC_Interes = res[0].interes
            this.tasa_multa_id = this.tasaMultaData.find((TasaMulta) => TasaMulta.codigo === 'IC')
            console.log('this.IC_Cabecera', this.IC_Cabecera)
            this.observaciones=this.observaciones+"\n"
            this.observaciones=this.observaciones+"CÁLCULO desde el año:"+this.IC_Cabecera.anioini+" - período:"+this.IC_Cabecera.mesini+ ", hasta el año:"+this.IC_Cabecera.aniofin+" - período: "+this.IC_Cabecera.mesfin+". "
            this.observaciones=this.observaciones+"Zona: "+this.IC_Cabecera.zona +". "
            this.observaciones=this.observaciones+"El cálculo está en base a Bs." + (this.IC_Cabecera.basecalculobs).toFixed(2)+". "
            this.observaciones=this.observaciones+"Sub-Total Bs: " + (this.IC_Cabecera.subtotal).toFixed(2)+". "
            this.observaciones=this.observaciones+"Base para cálculo de multa, recargo e interes Bs: " + (this.IC_Cabecera.BaseMultaRecargoInteres).toFixed(2)+". "
            this.observaciones=this.observaciones+"Multa Bs: " + (this.IC_Cabecera.multa).toFixed(2) +". "
            this.observaciones=this.observaciones+"Recargo ("+  this.IC_Cabecera.frecargo+ "%) Bs: "+(this.IC_Cabecera.recargo).toFixed(2)  +". "
            this.observaciones=this.observaciones+"Interés Bs: "+(this.IC_Cabecera.interes).toFixed(2)+". "
            this.observaciones=this.observaciones+"Total Bs: "+(this.IC_Cabecera.total).toFixed(2)+". "
            console.log('this.observaciones', this.observaciones)
            this.divs.push({
              tasa_multa_id: this.tasa_multa_id.id, // Valor para tasa_multa_id (puedes reemplazarlo con el valor que desees)
              monto_unidad_tributaria: this.IC_Cabecera.total, // Valor para monto_unidad_tributaria (puedes reemplazarlo con el valor que desees)
              cantidad: 1, // Valor para cantidad (puedes reemplazarlo con el valor que desees)
              calculo: this.IC_Cabecera.total, // Valor para calculo (puedes reemplazarlo con el valor que desees)
              editable: true,
              detalle: 'IC'
            });
            this.$alert("success", { desc: "El imueble posee impuestos por pagar. Se ha cargado la deuda con éxito.", hash: 'knsddcssdc', title: 'Impuesto por pagar.' })

          }
        }
        else {
          this.divs.push({
            tasa_multa_id: null, // Valor para tasa_multa_id (puedes reemplazarlo con el valor que desees)
            monto_unidad_tributaria: null, // Valor para monto_unidad_tributaria (puedes reemplazarlo con el valor que desees)
            cantidad: 1, // Valor para cantidad (puedes reemplazarlo con el valor que desees)
            calculo: 0, // Valor para calculo (puedes reemplazarlo con el valor que desees)
            editable: false
          });
        }
        this.disableBotonGuardar=false
      } catch (err) {
        console.log(err);
      }
    },
    async getBCV() {
      try {
        const response = await this.$axios.$get('tasabcv/')
          this.bcvData = response
          this.montoBCV = this.bcvData[0].monto
        } catch (err) {
        console.log(err);
      }
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



    async getTipoInmueble(){
      try {
        const response = await this.$axios.$get('tipoinmueble')
        this.dataTipoInmueble = response
        //console.log(this.dataTipoInmueble, 'dataINmueble')
      } catch (err) {
        console.log(err);
      }
    },


    async createEstadoCuenta(){
      const data = {
        inmueble: (this.idflujo=='2' || this.idflujo=='3' ||this.idflujo=='4')? this.$store.getters.getExpediente.id : null,
        flujo: this.idflujo,
        correlativo: 0,
        propietario: this.$store.getters.getContribuyente.id,
        observacion: this.observaciones,
        detalle: this.divs,
        monto_total: this.montoTotal(),
      }
      try {
        this.dialogWait = true
        const res = await this.$axios.$post('crearestadocuenta/', data)
        console.log('crearestadocuenta',res)
        this.Correlativo=res.documento
        this.Id=res.id
        console.log('IC_Cabecera',this.IC_Cabecera)
        console.log('idflujo',this.idflujo)
        //if (this.IC_Cabecera!=[] && this.idflujo=='4'){  // solo ejecuta si se genereo un calculo de impuesto de inmueble uranos (flujo=4)
        //   this.createEstadoCuentaDetalleImpuestoInmueble()
        //}

       
        this.IC_Cabecera=[]
        this.IC_Detalle=[]
        this.IC_Descuento=[]
        this.IC_Interes=[]     
        this.generarPDF()
        this.dialogWait = false
        
        this.$alert("success", {desc: "Se ha creado un estado de cuenta con éxito", hash: 'knsddcssdc', title:'Creado'}) 
        this.$router.push('consulta-contribuyente')
      } catch (err) {
        console.log(err);
      }
    },


    async createEstadoCuentaDetalleImpuestoInmueble(){
      const data = {
        estadocuenta:this.Id,
        cabecera:this.IC_Cabecera ,
        detalle:this.IC_Detalle ,
        descuento:this.IC_Descuento ,
        interes:this.IC_Interes,
      }
      try {
        this.dialogWait = true
        const res = await this.$axios.$post('ImpuestoInmuebleDetalle/', data)
        console.log('ImpuestoInmuebleDetalle',res)
        this.dialogWait = false
      } catch (err) {
        console.log(err);
      }
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
    async generarPDF() {
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
      const img2 = new Image();
      var ruta1=this.CorrelativoData[0].Logo1;
      if (ruta1.includes("catastro_back")) {
        // Concatenar "/catastro_back"
        ruta1 = ruta1.replace("catastro_back", "catastro_back/catastro_back");
      }
      var ruta2=this.CorrelativoData[0].Logo2;
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
      startY=startY+5
      let longText = this.observaciones
      // Tamaño máximo de la línea
      const maxWidth = 180;
      // Dividir el texto en líneas
      let textLines = pdf.splitTextToSize(longText, maxWidth);
      // Agregar cada línea al PDF
      textLines.forEach((line) => {
          pdf.text(15, startY, line);
          startY += 4; 
      });
      pdf.setFont("helvetica", "normal");  
      startY=startY+5 
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

      const columns = ['Tipo','Descripción', 'Base Imponible Bs', 'Cantidad', 'Monto Bs'];
      const data = this.divs.map((item) => [
      tipoMapeo[this.tasaMultaData.find((TasaMulta) => TasaMulta.id === item.tasa_multa_id).tipo], 
        this.tasaMultaData.find((TasaMulta) => TasaMulta.id === item.tasa_multa_id).descripcion,
        this.formatNumber(item.monto_unidad_tributaria),
        item.cantidad,
        this.formatNumber(item.calculo),
      ]);

      pdf.autoTable(columns, data, options);
        startY += 10 + this.divs.length * 7;
        startY=startY+10
        pdf.text('MONTO A CANCELAR (BS.):', 15, startY);
        pdf.setFont("helvetica", "bold");
        pdf.setFontSize(fontSizeTitle); 
        pdf.text(this.formatNumber(this.montoTotal()), 55, startY);
        pdf.setFontSize(fontSizeHead); 
        pdf.setFont("helvetica", "normal");
        startY=startY+10
        pdf.text('Esta planilla tiene validez de '+this.$store.getters.getFlujo.vencimiento+' días. Se vence el día :'+this.formatearFecha(this.sumarDiasHabiles(fechaActual, +this.$store.getters.getFlujo.vencimiento)), 15, startY);
        startY=startY+10
        pdf.text('SELLO___________________________', 140, startY);

        
      
     
      pdf.save(`EstadoCuenta-Nro-${this.Correlativo}.pdf`);

      this.uploadPDF(pdf);

    },

    async uploadPDF(pdf) {
      const formData = new FormData();
      formData.append('ReportePdf', new Blob([pdf.output('blob')], { type: 'application/pdf' }), `EstadoCuenta-Nro-${this.Correlativo}.pdf`);
      try {
        const response = await this.$axios.$patch(`estadocuenta/${this.Id}/`, formData, {
          headers: { 'Content-Type': 'application/pdf' },
        })
        console.log(response)
        await this.getPDF()
      } catch (err) {
        console.log(err);
      }
    },
    async getPDF() {
      try {
        const response = await this.$axios.$get(`estadocuenta/${this.Id}/`)
        console.log('response', response.ReportePdf)
        var pdfData = response.ReportePdf;
        if (pdfData.includes("catastro_back")) {
          // Concatenar "/catastro_back"
          pdfData = pdfData.replace("catastro_back", "catastro_back/catastro_back");
        }
        window.open(pdfData, "_blank").focus();
      } catch (err) {
        console.error('Error al obtener el PDF:', err);
      }
    },
    formatNumber(input) {
    // Convierte cadena a número si es necesario
    const number = typeof input === 'string' ? parseFloat(input.replace(/,/g, '')) : input;

    // Verifica si el número es válido
    if (isNaN(number)) {
        return 'Número inválido';
    }

    // Formatea el número con dos decimales y separadores de miles
    const formattedNumber = number.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');

    return formattedNumber; 
    },
  }
}
</script>

<style src="~/assets/styles/pages/estado-cuenta-detalle.scss" lang="scss" />