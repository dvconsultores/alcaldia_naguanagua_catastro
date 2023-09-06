<template>
    <div class="cv-outterxx" style="margin-bottom:20px; padding-left: 256px;">
      <section class="section1-reporte-recaudosxx">
        <div class="reporte-recaudos-containerxx">
          <div class="reporte" ref="htmlContent" id="cv-example">
            <div class="header">
              <img class="logo"
                src="/alcaldia_catastro/alcaldia_catastro/assets/sources/logos/Escudo_Naguanagua_Carabobo.png"
                alt="Logo Izquierda">
                <p class="title" style="font-size:3em;margin-bottom: 16px;">Reporte en Tamaño Carta</p>

              <img class="logo" src="/alcaldia_catastro/alcaldia_catastro/assets/sources/logos/logo.png"
                alt="Logo Derecha">
            </div>

            <div class="content">
              <p style="font-size:3em;margin-bottom: 16px;">Depósitos</p>
              <table class="table">
                <thead>
                  <tr>
                    <th>Col 1</th>
                    <th>Col 2</th>
                    <!-- ... Otras columnas ... -->
                    <th>Col 9</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Dato 1</td>
                    <td>Dato 2</td>
                    <!-- ... Otras celdas ... -->
                    <td>Dato 9</td>
                  </tr>
                  <!-- ... Otras filas ... -->
                </tbody>
              </table>
              <p style="font-size:3em;margin-bottom: 16px;">Tarjetas de Débito</p>
              <table class="table">
                <thead>
                  <tr>
                    <th>Col 1</th>
                    <th>Col 2</th>
                    <!-- ... Otras columnas ... -->
                    <th>Col 11</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Dato 1</td>
                    <td>Dato 2</td>
                    <!-- ... Otras celdas ... -->
                    <td>Dato 11</td>
                  </tr>
                  <!-- ... Otras filas ... -->
                </tbody>
              </table>
              <p style="font-size:3em;margin-bottom: 16px;">Transferencias</p>
              <table class="table">
                <thead>
                  <tr>
                    <th>Col 1</th>
                    <th>Col 2</th>
                    <!-- ... Otras columnas ... -->
                    <th>Col 11</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Dato 1</td>
                    <td>Dato 2</td>
                    <!-- ... Otras celdas ... -->
                    <td>Dato 11</td>
                  </tr>
                  <!-- ... Otras filas ... -->
                </tbody>
              </table>
            </div>

            <div class="footer">
              <p>Pie de Página - Reporte Generado el {{ fecha }}</p>
            </div>
          </div>
          <div class="boton-container">
            <button @click="exportToPDF2" class="generar-boton">Generar Reporte en PDF new</button>
          </div>
        </div>
      </section>
    </div>
</template>

<script>

import html2pdf from "html2pdf.js";


export default {

  methods: {
    exportToPDF2() {
    html2pdf(document.getElementById("cv-example"), 
      {
        filename: "ReporteCaja.pdf",
        image: { type: "jpeg", quality: 1 },
        html2canvas: {
          dpi: 192,
          scale: 2,
          letterRendering: false,
          useCORS: true,
        },
        pagebreak: { mode: ["avoid-all", "css", "legacy"] },
        jsPDF: { unit: "mm", format: "letter", orientation: "portrait" },
      }
      );
      
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

.section1-reporte-recaudos {
  display: flex;
  flex-direction: column;
  max-width: 1440px;
  width: 100%;
  overflow-x: hidden;
  margin-right: 0px !important;
  margin-left: 0px;
  gap: 10px;
  padding-bottom: 10px;
  padding-inline: 10px 10px;
}

.reporte-recaudos-container {
  position: relative;
  width: 100%;
  padding-top: 120px;
  border-radius: 10px;
  padding: 120px 10px 20px 10px;
  background-color: #fff;
  box-shadow: 3px 3px 3px 3px rgba(#000000, 0.1) !important;
  display: grid;
  justify-items: center;
  overflow-x: hidden;
  margin-bottom: 30px;
}

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
  font-size: 20px !important;
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
</style>