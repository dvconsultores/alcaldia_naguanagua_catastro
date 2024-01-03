<template>
  <div class="center no-padding divcol" style="margin-bottom:20px; padding-left: 256px;">
    <section class="section1-descripcion-inmueble">
      <div class="creacion-container">
        <div class="divrow jspace" style="width:100%;">
          <p class="title-inscripcion-inmueble">
            Creación de estado de cuenta
          </p>

          <span class="title-inscripcion-inmueble">
            Tasa BCV: {{ montoBCV }}
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
            <v-dialog v-model="dialog_IC_MIM" content-class="dialog-flow" fullscreen scrollable>
              <div class="div-dialog">
                <v-card class="dialog-flow-container">
                  <v-card-title>
                    <span class="title">Cálculo Multa Inscripcion NO RESIDENCIAL</span>
                  </v-card-title>


                      <v-card class="card-flow">
                        <v-card-title class="title-flow">
                          Cálculo Multa Inscripcion NO RESIDENCIAL
                        </v-card-title>
                        <table>
                          <thead>
                            <tr>
                              <th style="padding: 4px;"> Base cálculo Bs </th>
                              <th style="padding: 4px;"> Total Multa Bs </th>
                              <th style="padding: 4px;"> Total Mora Bs </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr class="solicitud-inputs-container">
                              <td style="padding: 4px;text-align: center;"> {{ base_multa}} </td>
                              <td style="padding: 4px;text-align: center;"> {{ roundNumber(cabecera_IC_MIM, 2) }} </td>
                              <td style="padding: 4px;text-align: center;"> {{ roundNumber(cabecera_IC_MIM, 2) }} </td>
                            </tr>
                          </tbody>
                        </table>
                      </v-card>


                      <v-card class="card-flow">
                        <v-card-title class="title-flow">
                          Detalle del cálculo multa
                        </v-card-title>
                        <table>
                          <thead>
                            <tr>
                              <th style="padding: 2px;"> Uso </th>
                              <th style="padding: 2px;"> Tipo </th>
                              <th style="padding: 2px;"> (a)<br> Area </th>
                              <th style="padding: 2px;"> (b)<br> Multa <br>Art.99 </th>
                              <th style="padding: 2px;"> (c)<br> Multa <br> Base Imponible Bs (a * b) </th>
                              <th style="padding: 2px;"> (c * d)<br> Multa Bs <br>A PAGAR</th>
                              <th style="padding: 2px;"> (e)<br> Mora <br>Art.99 </th>
                              <th style="padding: 2px;"> (f)<br> Mora  <br>Fraccionada (e / 12) </th>
                              <th style="padding: 2px;"> (h)<br> Meses <br>vencido</th>
                              <th style="padding: 2px;"> (g)<br> Mora <br>Base Imponible Bs (f * h * a)</th>
                              <th style="padding: 2px;"> (g * d)<br> Mora Bs <br>A PAGAR</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr v-for="(item, index) in IC_MIM" :key="index" class="solicitud-inputs-container">
                              <td style="padding: 2px;"> <span > {{ item['Uso'] }} </span></td>
                              <td style="padding: 2px;"> <span > {{ item['tipo'] }} </span></td>
                              <td style="padding: 2px;text-align: right;"> <span >{{ roundNumber(item['(a) area'], 2) }}</span></td>
                              <td style="padding: 2px;text-align: right;"> <span >{{ roundNumber(item['(b) multa Art.99'], 2) }}</span></td>
                              <td style="padding: 2px;text-align: right;"> <span >{{ roundNumber(item['(c) multa Petro (a * b)'], 2) }}</span></td>                              <td style="padding: 2px;text-align: right;"> <span >{{ roundNumber(item['MULTA Bs A PAGAR (c * d)'], 2) }}</span></td>
                              <td style="padding: 2px;text-align: right;"> <span >{{ item['(e) mora Art.99'].toFixed(8)  }}</span></td>
                              <td style="padding: 2px;text-align: right;"> <span >{{ item['(f) moraFraccionada (e / 12)'].toFixed(8)  }}</span></td>
                              <td style="padding: 2px;text-align: right;"> <span >{{ roundNumber(item['(h) meses vencido'], 2) }}</span></td>
                              <td style="padding: 2px;text-align: right;"> <span >{{ roundNumber(item['(g) mora Petro (f * h * a)'], 2) }}</span></td>
                              <td style="padding: 2px;text-align: right;"> <span >{{ roundNumber(item['MORA  Bs A PAGAR (g * d)'], 2) }}</span></td>
                            </tr>
                          </tbody>
                        </table>
                     </v-card>
                   


                     <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn class="btn dialog-btn" @click="dialog_IC_MIM = false">
                          Salir
                        </v-btn>
                      </v-card-actions>
                  </v-card>              
              </div>
            </v-dialog>
            <v-dialog v-model="dialog_IC_MIU" content-class="dialog-flow" fullscreen scrollable>
              <div class="div-dialog">
                <v-card class="dialog-flow-container">
                  <v-card-title>
                    <span class="title">Cálculo Multa Inscripcion RESIDENCIAL</span>
                  </v-card-title>


                      <v-card class="card-flow">
                        <v-card-title class="title-flow">
                          Cálculo Multa Inscripción RESIDENCIAL
                        </v-card-title>
                        <table>
                          <thead>
                            <tr>
                              <th style="padding: 4px;"> Base cálculo Bs </th>
                              <th style="padding: 4px;"> Total Multa Bs </th>
                              <th style="padding: 4px;"> Total Mora Bs </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr class="solicitud-inputs-container">
                              <td style="padding: 4px;text-align: center;"> {{ base_multa}} </td>
                              <td style="padding: 4px;text-align: center;"> {{ roundNumber(cabecera_IC_MIU, 2) }} </td>
                              <td style="padding: 4px;text-align: center;"> {{ roundNumber(cabecera_IC_MIU, 2) }} </td>
                            </tr>
                          </tbody>
                        </table>
                      </v-card>


                      <v-card class="card-flow">
                        <v-card-title class="title-flow">
                          Detalle del cálculo multa
                        </v-card-title>
                        <table>
                          <thead>
                            <tr>
                              <th style="padding: 2px;"> Uso </th>
                              <th style="padding: 2px;"> Tipo </th>
                              <th style="padding: 2px;"> (a)<br> Area </th>
                              <th style="padding: 2px;"> (b)<br> Multa <br>Art.99 </th>
                              <th style="padding: 2px;"> (c)<br> Multa <br> Base Imponible Bs (a * b) </th>
                              <th style="padding: 2px;"> (c * d)<br> Multa Bs <br>A PAGAR</th>
                              <th style="padding: 2px;"> (e)<br> Mora <br>Art.99 </th>
                              <th style="padding: 2px;"> (f)<br> Mora  <br>Fraccionada (e / 12) </th>
                              <th style="padding: 2px;"> (h)<br> Meses <br>vencido</th>
                              <th style="padding: 2px;"> (g)<br> Mora <br>Base Imponible Bs (f * h * a)</th>
                              <th style="padding: 2px;"> (g * d)<br> Mora Bs <br>A PAGAR</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr v-for="(item, index) in IC_MIU" :key="index" class="solicitud-inputs-container">
                              <td style="padding: 2px;"> <span > {{ item['Uso'] }} </span></td>
                              <td style="padding: 2px;"> <span > {{ item['tipo'] }} </span></td>
                              <td style="padding: 2px;text-align: right;"> <span >{{ roundNumber(item['(a) area'], 2) }}</span></td>
                              <td style="padding: 2px;text-align: right;"> <span >{{ roundNumber(item['(b) multa Art.99'], 2) }}</span></td>
                              <td style="padding: 2px;text-align: right;"> <span >{{ roundNumber(item['(c) multa Petro (a * b)'], 2) }}</span></td>                              <td style="padding: 2px;text-align: right;"> <span >{{ roundNumber(item['MULTA Bs A PAGAR (c * d)'], 2) }}</span></td>
                              <td style="padding: 2px;text-align: right;"> <span >{{ item['(e) mora Art.99'].toFixed(8)  }}</span></td>
                              <td style="padding: 2px;text-align: right;"> <span >{{ item['(f) moraFraccionada (e / 12)'].toFixed(8)  }}</span></td>
                              <td style="padding: 2px;text-align: right;"> <span >{{ roundNumber(item['(h) meses vencido'], 2) }}</span></td>
                              <td style="padding: 2px;text-align: right;"> <span >{{ roundNumber(item['(g) mora Petro (f * h * a)'], 2) }}</span></td>
                              <td style="padding: 2px;text-align: right;"> <span >{{ roundNumber(item['MORA  Bs A PAGAR (g * d)'], 2) }}</span></td>
                            </tr>
                          </tbody>
                        </table>
                     </v-card>
                   


                     <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn class="btn dialog-btn" @click="dialog_IC_MIU = false">
                          Salir
                        </v-btn>
                      </v-card-actions>
                  </v-card>              
              </div>
            </v-dialog>
            <v-dialog v-model="dialog_IC_MMU" content-class="dialog-flow" fullscreen scrollable>
              <div class="div-dialog">
                <v-card class="dialog-flow-container">
                  <v-card-title>
                    <span class="title">Cálculo Multa Modificación RESIDENCIAL</span>
                  </v-card-title>


                      <v-card class="card-flow">
                        <v-card-title class="title-flow">
                          Cálculo Multa Modificación RESIDENCIAL
                        </v-card-title>
                        <table>
                          <thead>
                            <tr>
                              <th style="padding: 4px;"> Base cálculo Bs </th>
                              <th style="padding: 4px;"> Total Multa Bs </th>
                              <th style="padding: 4px;"> Total Mora Bs </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr class="solicitud-inputs-container">
                              <td style="padding: 4px;text-align: center;"> {{ base_multa}} </td>
                              <td style="padding: 4px;text-align: center;"> {{ roundNumber(cabecera_IC_MMU, 2) }} </td>
                              <td style="padding: 4px;text-align: center;"> {{ roundNumber(cabecera_IC_MMU, 2) }} </td>
                            </tr>
                          </tbody>
                        </table>
                      </v-card>


                      <v-card class="card-flow">
                        <v-card-title class="title-flow">
                          Detalle del cálculo multa
                        </v-card-title>
                        <table>
                          <thead>
                            <tr>
                              <th style="padding: 2px;"> Uso </th>
                              <th style="padding: 2px;"> Tipo </th>
                              <th style="padding: 2px;"> (a)<br> Area </th>
                              <th style="padding: 2px;"> (b)<br> Multa <br>Art.101 </th>
                              <th style="padding: 2px;"> (c)<br> Multa <br> Base Imponible Bs (a * b) </th>
                              <th style="padding: 2px;"> (c * d)<br> Multa Bs <br>A PAGAR</th>
                              <th style="padding: 2px;"> (e)<br> Mora <br>Art.99 </th>
                              <th style="padding: 2px;"> (f)<br> Mora  <br>Fraccionada (e / 12) </th>
                              <th style="padding: 2px;"> (h)<br> Meses <br>vencido</th>
                              <th style="padding: 2px;"> (g)<br> Mora <br>Base Imponible Bs (f * h * a)</th>
                              <th style="padding: 2px;"> (g * d)<br> Mora Bs <br>A PAGAR</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr v-for="(item, index) in IC_MMU" :key="index" class="solicitud-inputs-container">
                              <td style="padding: 2px;"> <span > {{ item['Uso'] }} </span></td>
                              <td style="padding: 2px;"> <span > {{ item['tipo'] }} </span></td>
                              <td style="padding: 2px;text-align: right;"> <span >{{ roundNumber(item['(a) area'], 2) }}</span></td>
                              <td style="padding: 2px;text-align: right;"> <span >{{ roundNumber(item['(b) multa Art.101'], 2) }}</span></td>
                              <td style="padding: 2px;text-align: right;"> <span >{{ roundNumber(item['(c) multa Petro (a * b)'], 2) }}</span></td>                              <td style="padding: 2px;text-align: right;"> <span >{{ roundNumber(item['MULTA Bs A PAGAR (c * d)'], 2) }}</span></td>
                              <td style="padding: 2px;text-align: right;"> <span >{{ item['(e) mora Art.99'].toFixed(8)  }}</span></td>
                              <td style="padding: 2px;text-align: right;"> <span >{{ item['(f) moraFraccionada (e / 12)'].toFixed(8)  }}</span></td>
                              <td style="padding: 2px;text-align: right;"> <span >{{ roundNumber(item['(h) meses vencido'], 2) }}</span></td>
                              <td style="padding: 2px;text-align: right;"> <span >{{ roundNumber(item['(g) mora Petro (f * h * a)'], 2) }}</span></td>
                              <td style="padding: 2px;text-align: right;"> <span >{{ roundNumber(item['MORA  Bs A PAGAR (g * d)'], 2) }}</span></td>
                            </tr>
                          </tbody>
                        </table>
                     </v-card>
                   


                     <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn class="btn dialog-btn" @click="dialog_IC_MMU = false">
                          Salir
                        </v-btn>
                      </v-card-actions>
                  </v-card>              
              </div>
            </v-dialog>
            <v-dialog v-model="dialog_IC_MMM" content-class="dialog-flow" fullscreen scrollable>
              <div class="div-dialog">
                <v-card class="dialog-flow-container">
                  <v-card-title>
                    <span class="title">Cálculo Multa Modificación NO RESIDENCIAL</span>
                  </v-card-title>


                      <v-card class="card-flow">
                        <v-card-title class="title-flow">
                          Cálculo Multa Modificación NO RESIDENCIAL
                        </v-card-title>
                        <table>
                          <thead>
                            <tr>
                              <th style="padding: 4px;"> Base cálculo Bs </th>
                              <th style="padding: 4px;"> Total Multa Bs </th>
                              <th style="padding: 4px;"> Total Mora Bs </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr class="solicitud-inputs-container">
                              <td style="padding: 4px;text-align: center;"> {{ base_multa}} </td>
                              <td style="padding: 4px;text-align: center;"> {{ roundNumber(cabecera_IC_MMM, 2) }} </td>
                              <td style="padding: 4px;text-align: center;"> {{ roundNumber(cabecera_IC_MMM, 2) }} </td>
                            </tr>
                          </tbody>
                        </table>
                      </v-card>


                      <v-card class="card-flow">
                        <v-card-title class="title-flow">
                          Detalle del cálculo multa
                        </v-card-title>
                        <table>
                          <thead>
                            <tr>
                              <th style="padding: 2px;"> Uso </th>
                              <th style="padding: 2px;"> Tipo </th>
                              <th style="padding: 2px;"> (a)<br> Area </th>
                              <th style="padding: 2px;"> (b)<br> Multa <br>Art.101 </th>
                              <th style="padding: 2px;"> (c)<br> Multa <br> Base Imponible Bs (a * b) </th>
                              <th style="padding: 2px;"> (c * d)<br> Multa Bs <br>A PAGAR</th>
                              <th style="padding: 2px;"> (e)<br> Mora <br>Art.99 </th>
                              <th style="padding: 2px;"> (f)<br> Mora  <br>Fraccionada (e / 12) </th>
                              <th style="padding: 2px;"> (h)<br> Meses <br>vencido</th>
                              <th style="padding: 2px;"> (g)<br> Mora <br>Base Imponible Bs (f * h * a)</th>
                              <th style="padding: 2px;"> (g * d)<br> Mora Bs <br>A PAGAR</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr v-for="(item, index) in IC_MMU" :key="index" class="solicitud-inputs-container">
                              <td style="padding: 2px;"> <span > {{ item['Uso'] }} </span></td>
                              <td style="padding: 2px;"> <span > {{ item['tipo'] }} </span></td>
                              <td style="padding: 2px;text-align: right;"> <span >{{ roundNumber(item['(a) area'], 2) }}</span></td>
                              <td style="padding: 2px;text-align: right;"> <span >{{ roundNumber(item['(b) multa Art.101'], 2) }}</span></td>
                              <td style="padding: 2px;text-align: right;"> <span >{{ roundNumber(item['(c) multa Petro (a * b)'], 2) }}</span></td>                              <td style="padding: 2px;text-align: right;"> <span >{{ roundNumber(item['MULTA Bs A PAGAR (c * d)'], 2) }}</span></td>
                              <td style="padding: 2px;text-align: right;"> <span >{{ item['(e) mora Art.99'].toFixed(8)  }}</span></td>
                              <td style="padding: 2px;text-align: right;"> <span >{{ item['(f) moraFraccionada (e / 12)'].toFixed(8)  }}</span></td>
                              <td style="padding: 2px;text-align: right;"> <span >{{ roundNumber(item['(h) meses vencido'], 2) }}</span></td>
                              <td style="padding: 2px;text-align: right;"> <span >{{ roundNumber(item['(g) mora Petro (f * h * a)'], 2) }}</span></td>
                              <td style="padding: 2px;text-align: right;"> <span >{{ roundNumber(item['MORA  Bs A PAGAR (g * d)'], 2) }}</span></td>
                            </tr>
                          </tbody>
                        </table>
                     </v-card>
                   


                     <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn class="btn dialog-btn" @click="dialog_IC_MMM = false">
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
          <!-- <v-dialog v-model="dialog_exito" persistent class="dialog-exito">
            <template #activator="{attrs, on}">
             
            </template>
            <v-card class="card-dialog-exito">
              <v-icon @click="dialog_exito = false">mdi-close</v-icon>
              <p class="p-dialog">¡La inscripción del inmueble se ha guardado con éxito!</p>
            </v-card>
          </v-dialog>

          <v-btn class="btn size-btn" style="background-color:#ED057E!important;">
            Cancelar
          </v-btn> -->
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import computeds from '~/mixins/computeds'

export default{
  name: "InscripcionInmueblePage",
  mixins: [computeds],
  data() {
    return{
      dialogWait: false,
      dialog_IC: false,
      dialog_IC_MIU: false,
      dialog_IC_MMU: false,
      dialog_IC_MIM: false,
      dialog_IC_MMM: false,
      menu1: false,
      observaciones:'',
      nuevoRegistro: {},
      monto_unidad_tributaria: null,
      valor2:null,
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
      idflujo: this.$store.getters.getFlujo=='Sin Seleccionar'?'':JSON.parse(JSON.stringify(this.$store.getters.getFlujo)),
      IC_Cabecera:[],
      IC_Detalle:[],
      IC_Descuento:[],
      IC_Interes:[],
      tasa_multa_id: null,

      IC_MIU:[],
      IC_MMU:[],
      IC_MIM:[],
      IC_MMM:[],
      cabecera_IC_MIU:0,
      cabecera_IC_MMU:0,
      cabecera_IC_MIM:0,
      cabecera_IC_MMM:0,
      base_multa:0,

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
      this.$router.push('estado-cuenta')
          this.$alert("cancel", {desc: "Debe seleccionar un tipo de transacción o trámite", hash: 'knsddcssdc', title:'Error'})
    }
    else{
      this.dialogWait = true
        this.getCorrelativo()
        this.getTasaMulta()
        this.getBCV()
        this.getTipoInmueble()
        if (this.idflujo=='2' || this.idflujo=='3' ||this.idflujo=='4')
        {
          if(this.$store.getters.getExpediente=='Sin Seleccionar'){
              this.$router.push('consulta-inmueble')
              this.$alert("cancel", {desc: "Debe seleccionar un Inmueble para ingresar a este módulo", hash: 'knsddcssdc', title:'Error'})
            }else{
              this.getDeudaImpuesto()
              this.getMultaImpuesto()
            }
        }
        else
        {
          if(this.$store.getters.getExpediente!='Sin Seleccionar'){
            this.getDeudaImpuesto()
            this.getMultaImpuesto()
          }
        }
        this.dialogWait = false
      }
  },

  // computed: {
  //   resultado(){
  //     return this.montoTotal()
  //   },
  // },

  methods: {
    roundNumber(value, decimals) {
      return parseFloat(value).toFixed(decimals);
    },
    DetalleIC(id) {
      console.log('ID',id)
      if (id=='IC'){
        this.dialog_IC = true
      }
      if (id=='IC_MIU'){
        this.dialog_IC_MIU = true
      }
      if (id=='IC_MMU'){
        this.dialog_IC_MMU = true
      }
      if (id=='IC_MIM'){
        this.dialog_IC_MIM = true
      }
      if (id=='IC_MMM'){
        this.dialog_IC_MMM = true
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
        console.log('IC_Cabecera',this.IC_Cabecera)
        console.log('IC_Detalle',this.IC_Detalle)
        this.$alert("success", {desc: "El imueble posee impuestos por pagar. Se ha cargado la deuda con éxito.", hash: 'knsddcssdc', title:'Impuesto por pagar.'}) 
      }).catch(err =>{
        console.log(err)
      })
    },

    
    getMultaImpuesto(){
      const data = {
        inmueble: this.$store.getters.getExpediente.id,
        propietario: this.$store.getters.getContribuyente.id,
      }
      this.$axios.$post('MultaInmueble/', data).then(res => {
        if (res) {
          this.IC_MIU=res[0].data_IC_MIU
          //this.IC_MMU=res[0].data_IC_MMU
          //this.IC_MIM=res[0].data_IC_MIM
          //this.IC_MMM=res[0].data_IC_MMM
          this.base_multa=res[0].basefiscalmulta
          /*if (res[0].cabecera_IC_MIM){
            this.tasa_multa_id=this.tasaMultaData.find(tasa => tasa.codigo === 'IC_MIM')
            this.cabecera_IC_MIM=res[0].cabecera_IC_MIM
            this.divs.push({
              tasa_multa_id: this.tasa_multa_id.id, // Valor para tasa_multa_id (puedes reemplazarlo con el valor que desees)
              monto_unidad_tributaria: this.cabecera_IC_MIM, // Valor para monto_unidad_tributaria (puedes reemplazarlo con el valor que desees)
              cantidad: 1, // Valor para cantidad (puedes reemplazarlo con el valor que desees)
              calculo: res[0].cabecera_IC_MIM, // Valor para calculo (puedes reemplazarlo con el valor que desees)
              editable: true,
              detalle:'IC_MIM'
            });
          }*/
          console.log('es[0].cabecera_IC_MIU',res[0].cabecera_IC_MIU)
          if (res[0].cabecera_IC_MIU){
            console.log('entro')
            this.tasa_multa_id=this.tasaMultaData.find(tasa => tasa.codigo === 'IC_MIU')
            console.log('this.tasaMultaData',this.tasaMultaData)
            this.cabecera_IC_MIU=res[0].cabecera_IC_MIU
            this.divs.push({
              tasa_multa_id: this.tasa_multa_id.id, // Valor para tasa_multa_id (puedes reemplazarlo con el valor que desees)
              monto_unidad_tributaria: this.cabecera_IC_MIU, // Valor para monto_unidad_tributaria (puedes reemplazarlo con el valor que desees)
              cantidad: 1, // Valor para cantidad (puedes reemplazarlo con el valor que desees)
              calculo: res[0].cabecera_IC_MIU, // Valor para calculo (puedes reemplazarlo con el valor que desees)
              editable: true,
              detalle:'IC_MIU'
            });
          }
          /*
          if (res[0].cabecera_IC_MMU){
            this.tasa_multa_id=this.tasaMultaData.find(tasa => tasa.codigo === 'IC_MMU')
            this.cabecera_IC_MMU=res[0].cabecera_IC_MMU
            this.divs.push({
              tasa_multa_id: this.tasa_multa_id.id, // Valor para tasa_multa_id (puedes reemplazarlo con el valor que desees)
              monto_unidad_tributaria: this.cabecera_IC_MMU, // Valor para monto_unidad_tributaria (puedes reemplazarlo con el valor que desees)
              cantidad: 1, // Valor para cantidad (puedes reemplazarlo con el valor que desees)
              calculo: res[0].cabecera_IC_MMU, // Valor para calculo (puedes reemplazarlo con el valor que desees)
              editable: true,
              detalle:'IC_MMU'
            });
          }
          if (res[0].cabecera_IC_MMM){
            this.tasa_multa_id=this.tasaMultaData.find(tasa => tasa.codigo === 'IC_MMM')
            this.cabecera_IC_MMM=res[0].cabecera_IC_MMM
            this.divs.push({
              tasa_multa_id: this.tasa_multa_id.id, // Valor para tasa_multa_id (puedes reemplazarlo con el valor que desees)
              monto_unidad_tributaria: this.cabecera_IC_MMM, // Valor para monto_unidad_tributaria (puedes reemplazarlo con el valor que desees)
              cantidad: 1, // Valor para cantidad (puedes reemplazarlo con el valor que desees)
              calculo: res[0].cabecera_IC_MMM, // Valor para calculo (puedes reemplazarlo con el valor que desees)
              editable: true,
              detalle:'IC_MMM'
            });
          }
          */
 
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
        this.$alert("success", {desc: "El inmueble posee MULTAS por pagar. Se ha cargado la deuda con éxito.", hash: 'knsddcssdc', title:'Impuesto por pagar.'}) 
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
      div.monto_unidad_tributaria = tasa_encontrada.unidad_tributaria

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
        console.log(res)
        this.$router.push('modificar-datos')
        this.$alert("success", {desc: "Se ha creado un estado de cuenta con éxito", hash: 'knsddcssdc', title:'Creado'}) 
      }).catch(err =>{
        console.log(err)
      })
    },


    addDiv(){
      this.divs.push({cantidad: 1, calculo: 0, editable:false});
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
  }
}
</script>

<style src="~/assets/styles/pages/estado-cuenta-detalle.scss" lang="scss" />