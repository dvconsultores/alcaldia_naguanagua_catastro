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
                          label="Maestro a importar."
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
        { value: 'vaciar',            label: '0. ELIMINAR TODOS LOS DATOS!!! CUIDADO!!!' },
        //{ value: 'ambito',          label: '1. Ámbito' },
        //{ value: 'sector',          label: '2. Sector' },
        //{ value: 'manzana',         label: '3. Manzana' },
        //{ value: 'parcela',         label: '4. Parcela' },
        //{ value: 'sub-parcela',     label: '5. Sub-parcela' },
        //{ value: 'barrios',         label: '6. Barrios' },
        { value: 'contribuyente',     label: '7. Contribuyente' },
        //{ value: 'conj_resinden',   label: '8. Conjunto resindencial' },
        //{ value: 'edificio',        label: '9. Edificio' },
        //{ value: 'torre',           label: '10. Torre' },
        //{ value: 'avenida',         label: '11. Avenida' },
        //{ value: 'calle',           label: '12. Calle' },
        { value: 'inmueble',          label: '13. Inmueble' },
        { value: 'propietario',       label: '14. Propietario' },
        { value: 'ult_pago',          label: '15. Ultimo Pago' },
        //{ value: 'tipologia',         label: '16. Tipologia' },
        { value: 'val_terreno',       label: '17. Val. terreno' },
        { value: 'val_construccion',  label: '18. Val. construcción' },
        { value: 'tasas',             label: '19. Tasa de Interes' },
        { value: 'val_terreno2024',   label: '19. Val.Terreno 2024' },
        { value: 'val_construccion2024',  label: '20. Val.Construcción 2024' },
        { value: 'tipologiaNew',      label: '21. Actualizar Categorizacion' },
        { value: 'inicio',            label: '22. Actualiza Correlativo de Inmueble' },
        //{ value: 'inmueblecategorizacion',  label: '23. inmueble categorizacion carga de trabajo' },
        { value: 'comunidad',               label: '24. Comunidad' },
        { value: 'CategorizacionUrbana',    label: '25. Categorizacion Urbana' },
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
      formData.append('title', 'prueba');
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


    subirArchivo() {  // NO USAR!!!! SE REEMPLAZA POR uploadFile()
      if (!this.archivoExcel) {
        alert('Por favor, selecciona un archivo Excel válido.');
        return;
      }
      this.botonDeshabilitado= true;
      this.botonDeshabilitadoMigrar= true;
      // Crear un objeto FormData para enviar el archivo al servidor
      const formData = new FormData();
      formData.append('archivoExcel', this.archivoExcel);

      // Realizar una solicitud POST al backend de Django
      this.$axios
        .post('subir-archivo-excel2/', formData)
        .then((response) => {
          alert('Archivo Excel subido con éxito.');
          this.botonDeshabilitado= false
          this.botonDeshabilitadoMigrar= false;
          console.log('respuesta', response)
        })
        .catch((error) => {
          console.error('Error al subir el archivo Excel:', error);
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
      formData.append('archivoExcel', 'prueba');
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