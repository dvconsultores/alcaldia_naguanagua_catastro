<template>
  <div class="center no-padding divcol" style="margin-bottom:20px; padding-left: 256px;">
    <section class="section1-descripcion-inmueble">
      <div class="creacion-container">
        <div class="divrow jspace" style="width:100%;">
          <p class="title-inscripcion-inmueble">
            Estado de cuenta {{ descripcionflujo }}
          </p>

          <span class="title-inscripcion-inmueble">
            Base Imponible Bs.: {{ formatNumber(montoBCV) }}
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
            Monto Total Bs.: {{ formatNumber(montoTotal()) }}
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
                Por favor espere!!!
                <v-progress-linear
                  indeterminate
                  color="white"
                  class="mb-0"
                ></v-progress-linear>
              </v-card-text>
            </v-card>
          </v-dialog>

            <v-dialog v-model="dialog_IC_MIM" content-class="dialog-flow" fullscreen scrollable>
              <div class="div-dialog">
                <v-card class="dialog-flow-container">
                  <v-card-title>
                    <span class="title">Cálculo Multa Inscripción NO RESIDENCIAL</span>
                  </v-card-title>


                      <v-card class="card-flow">
                        <v-card-title class="title-flow">
                          Cálculo Multa Inscripción NO RESIDENCIAL
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
                    <span class="title">Cálculo Multa Inscripción RESIDENCIAL</span>
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
          class="small-input mobile-inputs justify-right"
          label="Monto"
          readonly
          v-model="div.monto_unidad_tributaria"
          ></v-text-field>

          <v-text-field
          v-model="div.cantidad"
          class="small-input mobile-inputs justify-right" 
          label="Cantidad"
          @input="multiplicarValor(index)"
          :value="1"
          type="number"
          :readonly="div.editable"
          ></v-text-field>

          <v-text-field
          v-model="div.calculo"
          class="small-input mobile-inputs justify-right"
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

          <v-btn :disabled="botonDeshabilitado" class="btn size-btn" @click="createEstadoCuenta()">
            Guardar.
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
  name: "estado-cuenta-detalle-catastroPage",
  mixins: [computeds],
  data() {
    return{
      dialogWait: true,
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
      idflujo: this.$store.getters.getFlujo=='Sin Seleccionar'?'':JSON.parse(JSON.stringify(this.$store.getters.getFlujo.codigo)),
      crea_expediente_flujo: this.$store.getters.getFlujo=='Sin Seleccionar'?'':JSON.parse(JSON.stringify(this.$store.getters.getFlujo.crea_expediente)),
      descripcionflujo: this.$store.getters.getFlujo=='Sin Seleccionar'?'':JSON.parse(JSON.stringify(this.$store.getters.getFlujo.descripcion)),
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
      Correlativo: 0,
      Id: 0,
      CorrelativoData: [],
      botonDeshabilitado: false,
    }
  },

  head() {
    const title = 'Estado de cuenta  catastro detalle';
    return {
      title,
    }
  },

  async mounted(){
    if (this.idflujo==''){
      this.$router.push('estado-cuenta-catastro')
          this.$alert("cancel", {desc: "Debe seleccionar un tipo de transacción o trámite", hash: 'knsddcssdc', title:'Error'})
    }
    else{this.dialogWait = true
        await this.getCorrelativo();
        console.log('dialogWait',this.dialogWait)
        await this.getTasaMulta()
        await this.getBCV()
        await this.getTipoInmueble()
        
        if (!this.crea_expediente_flujo)
        {
          if(this.$store.getters.getExpediente=='Sin Seleccionar'){
              this.$router.push('consulta-inmueble')
              this.$alert("cancel", {desc: "Debe seleccionar un Inmueble para ingresar a este módulo", hash: 'knsddcssdc', title:'Error'})
            }
            //else{
            //  await this.getMultaImpuesto()
            //}
        }
        else
        {
          //if(this.$store.getters.getExpediente!='Sin Seleccionar'){
          //  await this.getMultaImpuesto()
          //}
        }
        this.dialogWait = false 
        console.log('dialogWait',this.dialogWait)
      }
  },

  // computed: {
  //   resultado(){
  //     return this.montoTotal()
  //   },
  // },

  methods: {
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
   async getTasaMulta(){
    try {
        const response = await   this.$axios.$get('tasamulta');
        this.tasaMultaData = response
        //this.tasaMultaData.forEach((item) => {
        //  item.editable = false;
       // });
        console.log('this.tasaMultaData0',this.tasaMultaData)
      } catch (err) {
        console.log(err);
      }
    },
   
    async getMultaImpuesto(){
      const data = {
        inmueble: this.$store.getters.getExpediente.id,
        propietario: this.$store.getters.getContribuyente.id,
      }
      try {
        const res = await  this.$axios.$post('MultaInmueble/', data)
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
        inmueble: (!this.crea_expediente_flujo)? this.$store.getters.getExpediente.id : null,
        flujo: this.idflujo,
        //correlativo: this.numeroCorrelativo,
        propietario: this.$store.getters.getContribuyente.id,
        observacion: this.observaciones,
        detalle: this.divs,
        monto_total: this.montoTotal(),
      }
      console.log('data',data)
      try {

        this.botonDeshabilitado=true  
        this.dialogWait = true
        //const res = await this.$axios.$post('crearestadocuenta/', data)
        //console.log(res)
        //this.Correlativo=res.documento
        //this.Id=res.id
        //this.generarPDF()
        this.$alert("success", {desc: "Se ha creado un estado de cuenta con éxito", hash: 'knsddcssdc', title:'Creado'}) 
        this.dialogWait = false
        //this.botonDeshabilitado=true  
        //this.$router.push('modificar-datos')
        
        //this.$router.push('consulta-inmueble')
      } catch (err) {
        console.log(err);
      }
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
          if (this.$store.getters.getExpediente.direccion!=null){
            pdf.text(JSON.parse(JSON.stringify(this.$store.getters.getExpediente.direccion)), 55, startY);         
          }else{
            pdf.text('Sin Dirección', 55, startY);
          }
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
        pdf.text(this.formatNumber(this.montoTotal()), 55, startY);
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
       
          console.log('response',response.ReportePdf)
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