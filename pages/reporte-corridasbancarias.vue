<template>
  <div class="center no-padding divcol" style="margin-bottom:20px; padding-left: 256px;">
    <section class="section1-reporte-corridasbancarias">
      <div class="reporte-corridasbancarias-container">
        <div class="title-morado">
          <p class="reporte-corridasbancarias-title">
            Corridas bancarias
          </p>
        </div>
        <v-container>
          <v-row class="center">
            <v-col cols="12" sm="6" md="4">
              <v-autocomplete v-model="bancocuenta" class="small-input mobile-inputs" label='Banco'
                :items="bancoCuentaData" item-text="banco_nombre" item-value="id"
                @change="filtrarCorridasBancarias(bancocuenta)"></v-autocomplete>
            </v-col>
          </v-row>
        </v-container>
        <div class="data-table-container">
          <v-btn class="btn dialog-btn" text @click="generarPDF()">Genera reporte</v-btn>

          <v-text-field v-model="search" append-icon="mdi-magnify" label="Buscar" hide-details class="input-data-table">
          </v-text-field>
          <v-data-table :headers="headersCorridasBancarias" :items="filtrocorridasbancariasData" :items-per-page="10" :search="search"
            :footer-props="{
              itemsPerPageText: 'Items por página',
            }" sort-by="codigo" class="mytabla" mobile-breakpoint="840">

          </v-data-table>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import computeds from '~/mixins/computeds'
import jsPDF from 'jspdf';
import 'jspdf-autotable';

export default {
  name: "Reporte-CorridasBancariasPage",
  mixins: [computeds],
  data() {
    return {
      search: '',
      menu: true,
      headersCorridasBancarias: [
        { text: 'Fecha', align: 'center', value: 'fecha', },
        { text: 'referencia', value: 'referencia', align: 'center' },
        { text: 'Descripción', value: 'descripcion', align: 'center' },
        { text: 'Monto', value: 'monto', align: 'center' },
        { text: '', value: 'actions', sortable: false, align: 'center' },
      ],

      permido: JSON.parse(JSON.stringify(this.$store.getters.getUser.permisos)),
      accesos: null,
      bancoCuentaData: [],
      corridasbancariasData: [],
      filtrocorridasbancariasData: [],
      bancocuenta: null,
    }
  },
  head() {
    const title = 'Reporte Corrida Bancaria';
    return {
      title,
    }
  },

  mounted() {
    this.permisos()
    this.getBancoCuenta()
    this.getCorridasBancarias()
  },

  methods: {
    filtrarCorridasBancarias(idbancocuenta) {
      console.log('idbancocuenta',idbancocuenta)
      if (idbancocuenta) {
        this.filtrocorridasbancariasData = this.corridasbancariasData.filter((registro) => {
          return registro.bancocuenta === idbancocuenta;
        });
      } else {
        this.filtrocorridasbancariasData = this.corridasbancariasData;
      }
    },
    getCorridasBancarias() {
      this.$axios.$get('corridasbancarias').then(response => {
        this.corridasbancariasData = response
        console.log(this.corridasbancariasData, 'corridasbancariasData')

      }).catch(err => {
        console.log(err)
      })
    },
    getBancoCuenta() {
      this.$axios.$get('bancocuenta').then(response => {
        this.bancoCuentaData = response
      }).catch(error => {
        console.log(error)
      })
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
        console.log('this.accesos', this.accesos.borrar)
      } else {
        this.$router.push('index')
        this.$alert("cancel", { desc: "No está autorizado para accesar a este módulo!!!", hash: 'knsddcssdc', title: 'Error' })
      }
    },
    formatDate(dateString) {
      const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
      return new Date(dateString).toLocaleDateString('es-ES', options);
    },
    generarPDF() {
      const pdf = new jsPDF('p', 'mm', 'letter');
      const tasa_multa_id=this.bancoCuentaData.find(tasa => tasa.id === this.bancocuenta)
      console.log('tasa_multa_id',tasa_multa_id)
      const img1 = new Image();
      img1.src = '/alcaldia_catastro/alcaldia_catastro/assets/sources/logos/Escudo_Naguanagua_Carabobo.png'; // Ruta a tu primer logotipo
      const img2 = new Image();
      img2.src = '/alcaldia_catastro/alcaldia_catastro/assets/sources/logos/logo.png'; // Ruta a tu segundo logotipo
      const title = `Corrida Bancaria: ${tasa_multa_id.banco_nombre}`;
      // Establecer el tamaño de fuente para el encabezado de la tabla
      const fontSizeHead = 8; // Tamaño de fuente para el encabezado
      const fontSizeBody = 8; // Tamaño de fuente para el cuerpo de la tabla
      //let pageHeight = pdf.internal.pageSize.height;
      let startY = 60;

      pdf.addImage(img1, 'PNG', 10, 10, 30, 30); // Logotipo izquierdo
      pdf.addImage(img2, 'PNG', 160, 10, 40, 30); // Logotipo derecho
      pdf.setFontSize(16);
      pdf.text(100, 40, title, null, null, 'center');
      pdf.setFontSize(fontSizeHead); // Establecer el tamaño de fuente solo para esta línea



        pdf.autoTable({
          head: [['Fecha', 'Referencia', 'Descripcion', 'Monto', 'Tipo']],
          body: this.filtrocorridasbancariasData.map(item => [
            this.formatDate(item.fecha),
            item.referencia,
            item.descripcion,
            item.monto,
            item.situado,
          ]),
          startY: startY + 2,
          // margin: { top: startY + 10 + 10 },
          styles: { fontSize: fontSizeBody }, // Establecer el tamaño de fuente para el cuerpo de la tabla
          headStyles: { fontSize: fontSizeHead }, // Establecer el tamaño de fuente para el encabezado

        });
        startY += 10 + this.filtrocorridasbancariasData.length * 7;

      const nombreArchivoPDF = `Reporte de Corridas bancarias cargadas en sistema a la fecha ${this.fechaFiltro}.pdf`;

      pdf.save(nombreArchivoPDF);

    },

  }
};
</script>


<style src="~/assets/styles/pages/reporte-corridasbancarias.scss" lang="scss" />