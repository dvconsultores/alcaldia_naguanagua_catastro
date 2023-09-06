<template>
    <div class="center no-padding divcol" style="margin-bottom:20px; padding-left: 256px;">
  <section class="section1-reporte-recaudos">
    <div class="reporte-recaudos-container">
    <div class="reporte" ref="htmlContent">
      <div class="header">
        <img class="logo" src="/alcaldia_catastro/alcaldia_catastro/assets/sources/logos/Escudo_Naguanagua_Carabobo.png"
          alt="Logo Izquierda">
        <h1 class="title">Reporte en Tamaño Carta</h1>
        <img class="logo" src="/alcaldia_catastro/alcaldia_catastro/assets/sources/logos/logo.png" alt="Logo Derecha">
      </div>

      <div class="content">
        <h2>Depósitos</h2>
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

        <h2>Tarjetas de Débito</h2>
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

        <h2>Transferencias</h2>
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

    <!-- Botón para generar el reporte en PDF -->
    <div class="boton-container">
      <button @click="generarPDF" class="generar-boton" >Generar Reporte en PDF</button>

    </div>

    
  </div>
</section>
</div>
</template>

<script>
import html2pdf from "html2pdf.js";

export default {
  data() {
    return {
      fecha: new Date().toLocaleDateString(),
    };
  },
  methods: {
    async generarPDF() {
      try {
        // Esperar hasta que todo el contenido esté cargado
        //await new Promise((resolve) => {
        //  window.addEventListener('load', resolve);
        //});
        
        //const reporteElement = this.$el.querySelector(".reporte");
        
        //const reporteElement = this.$refs.htmlContent; // Obtiene el contenido HTML que deseas convertir

        const reporteElement = `
          <h1>Ejemplo de Contenido</h1>
          <p>Este es un ejemplo de contenido que se convertirá en PDF.</p>
        `;

        console.log('reporteElement',reporteElement); // Verifica si selecciona los elementos correctos


        // Configuración de html2pdf
        const options = {
          margin: 10, // Márgenes en mm
          filename: "reporte.pdf",
          image: { type: "jpeg", quality: 0.98 },
          html2canvas: { scale: 2 },
          jsPDF: { unit: "mm", format: "letter", orientation: "portrait" },
        };

        console.log('options',options)
        // Generar el PDF
        const pdf = await html2pdf().from(reporteElement).set(options).outputPdf();
        console.log('pdf',pdf)

        // Guardar o mostrar el PDF, dependiendo de tus necesidades
        // Por ejemplo, puedes abrir el PDF en una nueva ventana/tab
        const blob = new Blob([pdf], { type: "application/pdf" });
        const url = URL.createObjectURL(blob);
        window.open(url, "_blank");
      } catch (error) {
        console.error("Error al generar el PDF:", error);
      }
    },
  },
};
</script>

<style scoped>
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
}
}
</style>
