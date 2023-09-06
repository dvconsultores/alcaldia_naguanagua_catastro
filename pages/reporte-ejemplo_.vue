<template>
  <div id="app" style="margin-bottom:20px; padding-left: 256px;">
    <ReporteCaja v-show="activeTab == 1" ref="reportecaja" />
    <CVExample v-show="activeTab == 2" ref="example" />
      <!-- Botón para generar el reporte en PDF -->
      <div class="boton-container">
        <button @click="exportToPDF2" class="generar-boton">Generar Reporte en PDF</button>
      </div>
  </div>
</template>

<script>
import CVExample from "/components/reportes/CVExample.vue";
import ReporteCaja from "/components/reportes/ReporteCaja.vue";
export default {
  components: {
    CVExample,
    ReporteCaja,
  },
  data() {
    return {
    activeTab: 1,
    };
  },
  methods: {
    exportToPDF2() {
      this.$refs.reportecaja.exportToPDF2();
    },

  },
};
</script>

<style>
.cv-outter {
  min-height: 297mm;
  width: 210mm;
  /* to centre page on screen*/
  margin: 80px auto 100px auto;
  border: 1px solid #ccc;
}
.section1-reporte-recaudos{
  display: flex;
  flex-direction: column;
  max-width: 1440px;
  width: 100%;
  overflow-x: hidden;
  margin-right: 0px!important;
  margin-left: 0px;
  gap: 10px;
  padding-bottom: 10px;
  padding-inline: 10px 10px;

  .reporte-recaudos-container{
    position: relative;
    width: 100%;
    padding-top: 120px;
    border-radius: 10px;
    padding: 120px 10px 20px 10px;
    background-color: #fff;
    box-shadow: 3px 3px 3px 3px rgba( #000000, 0.1)!important;
    display: grid;
    justify-items: center;
    overflow-x: hidden;
    margin-bottom: 30px;

.reporte {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  min-height: 297mm;
  width: 210mm;
  /* to centre page on screen*/
  margin: 80px auto 100px auto;
  border: 1px solid #ccc;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #007bff;
  color: white;
}

.logo {
  width: 100px;
  /* Ajusta el ancho según tus logotipos */
  height: auto;
}

.title {
  text-align: center;
  flex-grow: 1;
}

.content {
  padding: 20px;
}

.table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
}

.table th,
.table td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

.footer {
  text-align: center;
  padding: 10px;
  background-color: #f2f2f2;
}

}
}
    .boton-container {
      display: flex;
      justify-content: flex-end;
      /* Alinea el botón a la derecha */
      margin-top: 20px;
      /* Agrega margen superior para separarlo del contenido */
    }

    .generar-boton {
      background-color: #007bff !important;
      /* Color de fondo del botón */
      color: white;
      /* Color del texto del botón */
      padding: 10px 20px;
      /* Espaciado interno del botón */
      border: none;
      /* Sin borde */
      border-radius: 5px;
      /* Radio de borde */
      cursor: pointer;
      /* Cambia el cursor al pasar sobre el botón */
    }

    .generar-boton:hover {
      background-color: #0056b3;
      /* Color de fondo al pasar el cursor sobre el botón */
    }

</style>
