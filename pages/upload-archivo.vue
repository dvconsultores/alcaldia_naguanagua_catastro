<template>
  <div class="center no-padding divcol" style="margin-bottom:20px; padding-left: 256px;">
  <section class="section1-reporte-recaudos">
    <div class="reporte-recaudos-container">
      <input type="file" @change="cargarArchivo" accept=".xls, .xlsx" />

      <div class="boton-container">
        <button :disabled="botonDeshabilitado" @click="subirArchivo" class="generar-boton">Subir Archivo de excel</button>
      </div>
      <div style="padding: 100px;">

        <v-autocomplete
                        v-model="opcionSeleccionada"
                        label="Maestro a importar."
                        class="input-dialog"
                        :items="opciones"
                        item-text="label"
                        item-value="value"
                      ></v-autocomplete>
        <p>Opción seleccionada: {{ opcionSeleccionada }}</p>
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
      opciones: [
        { value: 'opcion1', label: 'Opción 1' },
        { value: 'opcion2', label: 'Opción 2' },
        { value: 'opcion3', label: 'Opción 3' }
      ],
    };
  },
  methods: {
    cargarArchivo(event) {
      // Captura el archivo seleccionado por el usuario
      this.archivoExcel = event.target.files[0];
    },
    subirArchivo() {
      if (!this.archivoExcel) {
        alert('Por favor, selecciona un archivo Excel válido.');
        return;
      }
      this.botonDeshabilitado= true;
      // Crear un objeto FormData para enviar el archivo al servidor
      const formData = new FormData();
      formData.append('archivoExcel', this.archivoExcel);

      // Realizar una solicitud POST al backend de Django
      this.$axios
        .post('subir-archivo-excel2/', formData)
        .then((response) => {
          alert('Archivo Excel subido con éxito.');
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