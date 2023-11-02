<template>
  <div class="center no-padding divcol" style="margin-bottom:20px; padding-left: 256px;">
    <section class="section1-reporte-recaudos">
      <div class="reporte-recaudos-container">
        <!--input type="file" @change="cargarArchivo" accept=".xls, .xlsx" /-->
        <input type="file" id="excelFile" @change="cargarArchivo" accept=".xls, .xlsx"  required>


        <div class="boton-container">
          <button :disabled="botonDeshabilitado" @click="uploadFile" class="generar-boton">Subir Archivo de excel</button>
        </div>
        <div style="padding: 10px;">

          <v-autocomplete
                          v-model="opcionSeleccionada"
                          label="Banco a importar."
                          class="input-dialog"
                          :items="opciones"
                          item-text="label"
                          item-value="value"
                        ></v-autocomplete>


        </div> 
                 <div class="boton-container">
          <button :disabled="botonDeshabilitadoMigrar" @click="migrarArchivo" class="generar-boton">Migrar pestaña</button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      archivoExcel: null,
      opcionSeleccionada: null,
      botonDeshabilitado: false,
      botonDeshabilitadoMigrar: false,
      opciones: [
        { value: 'bnc',       label: '1. BNC Banco Nacional de Crédito' },
        { value: 'bfc',       label: '2. BFC Banco Fondo Común' },
        { value: 'bancaribe', label: '3. BANCARIBE' },
        { value: 'cien',      label: '4. 100% Banco' },
        { value: 'banesco',   label: '5. BANESCO' },
        { value: 'venezuela', label: '6. Banco de Venezuela' },
      ],
    };
  },
  methods: {

    cargarArchivo(event) {
      // Captura el archivo seleccionado por el usuario
      this.archivoExcel = event.target.files[0];
    },
    uploadFile() {
      if (!this.archivoExcel) {
        alert('Por favor, selecciona un archivo Excel válido.');
        return;
      }
      this.botonDeshabilitado= true;
      this.botonDeshabilitadoMigrar= true;
      const formData = new FormData();
      formData.append('title', 'CorridaBancaria');
      formData.append('excel_file', this.archivoExcel);

      this.$axios.post('upload_excel/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then(response => {
        console.log(response.data.message);
        alert('Archivo Excel subido con éxito.');
          this.botonDeshabilitado= false
          this.botonDeshabilitadoMigrar= false;
      })
      .catch(error => {
        console.error('Error al cargar el archivo Excel:', error);
      });
    },


    migrarArchivo() {
      if (!this.opcionSeleccionada) {
        alert('Por favor, selecciona una opción válida.');
        return;
      }
      this.botonDeshabilitadoMigrar= true;
      this.botonDeshabilitado= true;
      // Crear un objeto FormData para enviar el archivo al servidor
      const formData = new FormData();
      formData.append('archivoExcel', 'CorridaBancaria');
      formData.append('opcion', this.opcionSeleccionada);

      // Realizar una solicitud POST al backend de Django
      this.$axios
        .post('importardatosdesdeexcel', formData)
        .then((response) => {
          alert('Archivo Excel subido con éxito.');
          this.botonDeshabilitadoMigrar= false
          this.botonDeshabilitado= false
          console.log('respuesta', response)
          
        })
        .catch((error) => {
          console.error('Error al subir el archivo Excel:', error);
        });
    },
  },
}; 
</script>

<style>

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
/* Estilos cuando el botón está deshabilitado */
.generar-boton:disabled {
  background-color: #ccc !important;
  /* Color de fondo del botón cuando está deshabilitado */
  color: #666;
  /* Color del texto del botón cuando está deshabilitado */
  cursor: not-allowed;
  /* Cambia el cursor al pasar sobre el botón deshabilitado */
}
</style>