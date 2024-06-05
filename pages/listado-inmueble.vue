<template>
  <div class="center no-padding divcol" style="margin-bottom:20px; padding-left: 256px;">
    <section class="section1-ambito">
      <div class="datos-ambito-container">
        <div class="title-morado">
          <p class="datos-ambito-title">
            Listado de Estatus Financiero de Inmuebles
          </p>
        </div>

        <div class="data-table-container">
          <v-text-field v-model="search" append-icon="mdi-magnify" label="Buscar" hide-details
            class="input-data-table"></v-text-field>

          <v-data-table :headers="headers" dense :items="ambitoData" :loading="loading" :items-per-page="10"
            :search="search" :footer-props="{
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
import * as XLSX from 'xlsx';

export default {
  name: "listado-inmueblePage",
  mixins: [computeds],
  data() {
    return {
      search: '',
      loading: true,
      headers: [
        { text: '# Expediente', align: 'center', value: 'expediente', },
        { text: 'Estatus', value: 'estatus', align: 'center' },
        { text: 'Tipo', value: 'tipo', align: 'center' },
        { text: 'Zona', value: 'zona', align: 'center' },
        { text: 'Categorizacion', value: 'categorizacion', align: 'center' },
        { text: 'Período', value: 'periodo', align: 'center' },
        { text: 'Año', value: 'anio', align: 'center' },
        { text: 'm2 Terreno', value: 'area_terreno', align: 'center' },
        { text: 'm2 Construcción', value: 'area_construccion', align: 'center' },
      ],
      ambitoData: [],
      permido: JSON.parse(JSON.stringify(this.$store.getters.getUser.permisos)),
      accesos: {},
    }
  },
  head() {
    const title = 'Listado de Inmuebles';
    return {
      title,
    }
  },

  mounted() {
    this.permisos()
    this.getAmbito()

  },

  methods: {
    exportToExcel1() {
      const worksheet = XLSX.utils.json_to_sheet(this.ambitoData);
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
      XLSX.writeFile(workbook, 'Inmuebles1.xlsx');
    },
    exportToExcel2() {
      const worksheet = XLSX.utils.json_to_sheet(this.ambitoData);
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
      XLSX.writeFile(workbook, 'Inmuebles2.xlsx');
    },
    exportToExcel3() {
      const worksheet = XLSX.utils.json_to_sheet(this.ambitoData);
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
      XLSX.writeFile(workbook, 'Inmuebles3.xlsx');
    },
    exportToExcel4() {
      const worksheet = XLSX.utils.json_to_sheet(this.ambitoData);
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
      XLSX.writeFile(workbook, 'Inmuebles4.xlsx');
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
      } else {
        this.$router.push('index')
        this.$alert("cancel", { desc: "No está autorizado para accesar a este módulo!!!", hash: 'knsddcssdc', title: 'Error' })
      }
    },
    getAmbito() {
      this.$axios.$get('listar_inmuebles/').then(response => {
        this.ambitoData = response
        this.loading = false
        console.log('this.ambitoData', this.ambitoData)
        this.exportToExcel1()
      }).catch(err => {
        console.log(err)
      })
    },
  }
};
</script>

<style src="~/assets/styles/pages/ambito.scss" lang="scss" />