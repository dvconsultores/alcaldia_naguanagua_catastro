<template>
    <div class="cv-outter_eliminado para probar" style="margin-bottom:20px; padding-left: 256px;">
      <section class="section1-reporte-recaudos_eliminado para probar">
        <div class="reporte-recaudos-container_eliminado para probar">
          <div class="reporte" ref="htmlContent" id="cv-example">
            <div class="header">
              <img class="logo"
                src="/alcaldia_catastro/alcaldia_catastro/assets/sources/logos/Escudo_Naguanagua_Carabobo.png"
                alt="Logo Izquierda">
                <p class="title" >CUADRE DETALLADO DE CAJA</p>

              <img class="logo" src="/alcaldia_catastro/alcaldia_catastro/assets/sources/logos/logo.png"
                alt="Logo Derecha">
            </div>

            <div class="content">
              <div class="columnas">
                <div class="columna-izquierda">
                  <p class="textop">EFECTIVO</p>
                  <p class="textop">CHEQUE</p>
                  <p class="textop">DEBITO</p>
                  <p class="textop">RECAUDADO</p>
                  <p class="textop">RECAUDADO SEGÚN REPORTE</p>
                </div>
                <div class="columna-derecha">
                  <p class="textop">El número formateado es: {{ formatoNumerico }}</p>
                  <p class="textop">2</p>
                  <p class="textop">3</p>
                  <p class="textop">4</p>
                  <p class="textop">4</p>
                    
                </div>
              </div>
              <p style="font-size:3em;margin-bottom: 16px;">Depósitos</p>
              <table class="table">
                <thead>
                  <tr>
                    <th>FECHA</th>
                    <th>BANCO</th>
                    <th>CODIGO BANCO</th>
                    <th>Nro. DE CUENTA</th>
                    <th>TIPO DE OPERACION</th>
                    <th>REF</th>
                    <th>MONTO</th>
                    <th>CAJEROS</th>
                    <th>TIPO</th>

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
          <div class="boton-container">
            <button @click="generarPDF" class="generar-boton">Generar Reporte en PDF DOS</button>
          </div>
        </div>
      </section>
    </div>
</template>

<script>

import html2pdf from "html2pdf.js";
import jsPDF from 'jspdf';
import 'jspdf-autotable'; // Importa jspdf-autotable

export default {
  data() {
    return {
      numero: 1234567.89 // Tu número a formatear
    };
  },
  computed: {
    formatoNumerico() {
      console.log('typeof this.numero ',typeof this.numero )
      if (typeof this.numero !== "number") {
        return this.numero;
      }

      // Formatear con 2 decimales y separador de miles
      return this.numero.toLocaleString("es-ES", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      });
    }
  },
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


    generarPDF() {
      const pdf = new jsPDF('p', 'in', 'letter'); // Tamaño carta: 8.5x11 pulgadas

      // Agregar el encabezado con dos logotipos y un título centrado
      //const img1 = new Image();
      //img1.src = '/alcaldia_catastro/alcaldia_catastro/assets/sources/logos/Escudo_Naguanagua_Carabobo.png'; // Ruta a tu primer logotipo
      //const img2 = new Image();
      //img2.src = '/alcaldia_catastro/alcaldia_catastro/assets/sources/logos/logo.png'; // Ruta a tu segundo logotipo
      const title = 'Reporte PDF';

      //pdf.addImage(img1, 'PNG', 0.5, 0.5, 2, 0.5); // Logotipo izquierdo
      //pdf.addImage(img2, 'PNG', 7, 0.5, 2, 0.5); // Logotipo derecho
      pdf.setFontSize(16);
      pdf.text(4.25, 1.25, title, null, null, 'center'); // Título centrado

      // Agregar la tabla de "Depósito"
      const depositoData = [['Columna1', 'Columna2', 'Columna3', 'Columna4', 'Columna5', 'Columna6', 'Columna7', 'Columna8']];
      pdf.autoTable({
        head: depositoData,
        startY: 2, // Ajusta la posición de inicio según tus necesidades
      });

      // Agregar la tabla de "Débito"
      const debitoData = [['Columna1', 'Columna2', 'Columna3', 'Columna4', 'Columna5', 'Columna6', 'Columna7', 'Columna8', 'Columna9']];
      pdf.autoTable({
        head: debitoData,
        startY: pdf.autoTable.previous.finalY + 0.25, // Ajusta la posición de inicio según tus necesidades
      });

      // Guardar el PDF
      pdf.save('reporte.pdf');
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
  --background-color: #007bff;
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
  font-size:3em!important;
  margin-bottom: 16px!important;
}

.content {
  padding: 20px;
}

.table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
  font-size: 10px;
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

.columnas {
  display: flex;
  justify-content: space-between;

}

/* Estilo para la primera columna (texto a la izquierda) */
.columna-izquierda {
  width: 48%;
  /* Ajusta el ancho según tus necesidades */

}

/* Estilo para la segunda columna (números a la derecha) */
.columna-derecha {
  width: 48%;
  /* Ajusta el ancho según tus necesidades */
  text-align: right;
  /* Justifica el texto a la derecha */
}

.textop{
  font-size: 10px;
  margin-bottom: 16px;

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