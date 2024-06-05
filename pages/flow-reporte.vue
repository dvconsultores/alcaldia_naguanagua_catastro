<template>
  <div class="center no-padding divcol" style="margin-bottom:20px; padding-left: 256px;">
    <section class="section1-flow">
      <div class="modificar-datos-container">
        <div class="title-morado">
          <p class="modificar-datos-title">
            Reporte de Flujos
          </p>
        </div>
        <div class="data-table-container">
          <v-text-field v-model="search" append-icon="mdi-magnify" label="Buscar" hide-details
            class="input-data-table"></v-text-field>
          <v-data-table :loading="dialogWait" :headers="headers" :items="propietarioData" :items-per-page="10"
            :search="search" :footer-props="{
            itemsPerPageText: 'Items por página',
          }" sort-by="id" sort-desc class="mytabla" mobile-breakpoint="840">
            <template v-slot:top>
              <v-toolbar flat class="toolbar-tabla">
              </v-toolbar>
            </template>
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
  name: "flow-reportePage",
  mixins: [computeds],
  data() {
    return {
      dialogWait: true,
      search: '',
      headers: [
        { text: 'Solicitud', align: 'center', value: 'id', },
        { text: 'Tipo', value: 'descripcion_flujo', align: 'center' },
        { text: 'Expediente', value: 'expediente', align: 'center' },
        { text: 'Propietario', value: 'nombre_propietario', align: 'center' },
        { text: 'Estado', value: 'estado_display', align: 'center' },
        { text: 'Fecha', value: 'fecha', align: 'center' },
      ],
      propietarioData: [],
    }
  },
  head() {
    const title = 'Listado de Flujos';
    return {
      title,
    }
  },

  async mounted() {
    await this.getFlow();
  },

  methods: {
    exportToExcel() {
      // Datos de ejemplo

      // Convertir datos a una hoja de trabajo
      const worksheet = XLSX.utils.json_to_sheet(this.propietarioData);

      // Crear un nuevo libro de trabajo
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');

      // Generar el archivo Excel
      XLSX.writeFile(workbook, 'data.xlsx');
    },

    async getFlow() {
      this.dialogWait = true;
      try {
        const response = await this.$axios.$get('flujo/');
        this.propietarioData = response
        console.log('this.propietarioData)', this.propietarioData)
        this.exportToExcel()
      } catch (err) {
        console.log(err);
      }
      this.dialogWait = false;
    },


  }
};
</script>


<style src="~/assets/styles/pages/flow.scss" lang="scss" />