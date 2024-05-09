<template>
  <div class="center no-padding divcol" style="margin-bottom:20px; padding-left: 256px;">
    <section class="section1-reporte-recaudos">
      <!--div class="reporte-recaudos-container">
        <p > TODOS </p>
        <input type="file" id="excelFile" @change="cargarArchivo" accept=".xls, .xlsx" required>
        <div class="boton-container">
          <button :disabled="botonDeshabilitado" @click="uploadFile" class="generar-boton">Subir Archivo de
            excel</button>
        </div>
        <div style="padding: 10px;">
          <v-autocomplete v-model="opcionSeleccionada" label="Banco a importar." class="input-dialog" :items="opciones"
            item-text="label" item-value="value"></v-autocomplete>
        </div>
        <div class="boton-container">
          <button :disabled="botonDeshabilitadoMigrar" @click="migrarArchivo" class="generar-boton">Migrar
            pestaña</button>
        </div>
      </div-->  
      
      

      <div class="reporte-recaudos-container">
        <p > BNC </p>
        <input type="file" id="excelFile" class="input-file" @change="cargarArchivo" accept=".xls, .xlsx" required>
        <div class="boton-container">
          <button :disabled="botonDeshabilitado" @click="uploadFileBNC" class="generar-boton">Subir Archivo de
            BNC</button>
        </div>
      </div> 

      <div class="reporte-recaudos-container">
        <p > BanCaribe </p>
        <input type="file" id="excelFile" class="input-file" @change="cargarArchivo" accept=".xls, .xlsx" required>
        <div class="boton-container">
          <button :disabled="botonDeshabilitado" @click="uploadFileBanCaribe" class="generar-boton">Subir Archivo de
            BanCaribe</button>
        </div>
      </div> 
      <div class="reporte-recaudos-container">
        <p > 100%Banco </p>
        <input type="file" id="excelFile" class="input-file" @change="cargarArchivo" accept=".xls, .xlsx" required>
        <div class="boton-container">
          <button :disabled="botonDeshabilitado" @click="uploadFile100Banco" class="generar-boton">Subir Archivo de
            100%Banco</button>
        </div>
      </div>
      <div class="reporte-recaudos-container">
        <p > BANESCO </p>
        <input type="file" id="excelFile" class="input-file" @change="cargarArchivo" accept=".xls, .xlsx" required>
        <div class="boton-container">
          <button :disabled="botonDeshabilitado" @click="uploadFileBANESCO" class="generar-boton">Subir Archivo de
            BANESCO</button>
        </div>
      </div>
      <div class="reporte-recaudos-container">
        <p > BANCO FONDO COMÚN </p>
        <input type="file" id="excelFile" class="input-file" @change="cargarArchivo" accept=".xls, .xlsx" required>
        <div class="boton-container">
          <button :disabled="botonDeshabilitado" @click="uploadFileBFC" class="generar-boton">Subir Archivo de
            BANCO FONDO COMÚN</button>
        </div>
      </div>
      <div class="reporte-recaudos-container">
        <p > BANCO DE VENEZUELA </p>
        <input type="file" id="excelFile" class="input-file" @change="cargarArchivo" accept=".xls, .xlsx" required>
        <div class="boton-container">
          <button :disabled="botonDeshabilitado" @click="uploadFileBDV" class="generar-boton">Subir Archivo de
            BANCO DE VENEZUELA</button>
        </div>
      </div>
    </section>
        <v-dialog v-model="dialogWait" hide-overlay persistent width="300">
      <v-card color="primary" dark>
        <v-card-text>
          Por favor espere!!!
          <v-progress-linear indeterminate color="white" class="mb-0"></v-progress-linear>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogWait : false,
      ruta:null,
      archivoExcel: null,
      opcionSeleccionada: null,
      botonDeshabilitado: false,
      botonDeshabilitadoMigrar: false,
      opciones: [
        { value: 'bnc', label: '1. BNC Banco Nacional de Crédito' },
        { value: 'bfc', label: '2. BFC Banco Fondo Común' },
        { value: 'bancaribe', label: '3. BANCARIBE' },
        { value: 'cien', label: '4. 100% Banco' },
        { value: 'banesco', label: '5. BANESCO' },
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
      this.botonDeshabilitado = true;
      this.botonDeshabilitadoMigrar = true;
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
          this.botonDeshabilitado = false
          this.botonDeshabilitadoMigrar = false;
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
      this.botonDeshabilitadoMigrar = true;
      this.botonDeshabilitado = true;
      // Crear un objeto FormData para enviar el archivo al servidor
      const formData = new FormData();
      formData.append('archivoExcel', 'CorridaBancaria');
      formData.append('opcion', this.opcionSeleccionada);
      // Realizar una solicitud POST al backend de Django
      this.$axios
        .post('importardatosdesdeexcel', formData)
        .then((response) => {
          alert('Archivo Excel subido con éxito.');
          this.botonDeshabilitadoMigrar = false
          this.botonDeshabilitado = false
          console.log('respuesta', response)
        })
        .catch((error) => {
          console.error('Error al subir el archivo Excel:', error);
        });
    },


    async busca_ruta(id) {
      const response = await this.$axios.$get(`ExcelDocument/${id}/`)
      this.ruta = response.excel_file
      console.log('response1', response.excel_file)

    },
    async uploadFileBNC() {
      if (!this.archivoExcel) {
        alert('Por favor, selecciona un archivo Excel válido.');
        return;
      }
      this.dialogWait = true
      this.botonDeshabilitado = true;
      this.botonDeshabilitadoMigrar = true;
      const formData = new FormData();
      formData.append('title', 'CorridaBancariaBNC');
      formData.append('excel_file', this.archivoExcel);
      try {
        const response = await this.$axios.post('upload_excel/', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        try {
          await this.busca_ruta(response.data.id);
        } catch (error) {
          console.log(error);
        }
        const formData1 = new FormData();
        formData1.append('archivoExcel', 'CorridaBancariaBNC');
        formData1.append('opcion', 'BNC');
        formData1.append('ruta', this.ruta);
        this.$axios
          .post('importarcorridabancaria', formData1)
          .then((response) => {
            this.dialogWait = false
            alert('Archivo Excel subido con éxito.');
            this.botonDeshabilitadoMigrar = false
            this.botonDeshabilitado = false
            console.log('respuesta', response)
          })
          .catch((error) => {
            console.error('Error al subir el archivo Excel:', error);
          });
      } catch (err) {
        console.error('Error al cargar el archivo Excel:', err);
      }
      
    },  
    async uploadFileBanCaribe() {
      if (!this.archivoExcel) {
        alert('Por favor, selecciona un archivo Excel válido.');
        return;
      }
      this.dialogWait = true
      this.botonDeshabilitado = true;
      this.botonDeshabilitadoMigrar = true;
      const formData = new FormData();
      formData.append('title', 'CorridaBancariaBanCaribe');
      formData.append('excel_file', this.archivoExcel);
      try {
        const response = await this.$axios.post('upload_excel/', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        try {
          await this.busca_ruta(response.data.id);
        } catch (error) {
          console.log(error);
        }
        const formData1 = new FormData();
        formData1.append('archivoExcel', 'CorridaBancariaBanCaribe');
        formData1.append('opcion', 'BanCaribe');
        formData1.append('ruta', this.ruta);
        this.$axios
          .post('importarcorridabancaria', formData1)
          .then((response) => {
            this.dialogWait = false
            alert('Archivo Excel subido con éxito.');
            this.botonDeshabilitadoMigrar = false
            this.botonDeshabilitado = false
            console.log('respuesta', response)
          })
          .catch((error) => {
            console.error('Error al subir el archivo Excel:', error);
          });
      } catch (err) {
        console.error('Error al cargar el archivo Excel:', err);
      }
    },  

    async uploadFile100Banco() {
      if (!this.archivoExcel) {
        alert('Por favor, selecciona un archivo Excel válido.');
        return;
      }
      this.dialogWait = true
      this.botonDeshabilitado = true;
      this.botonDeshabilitadoMigrar = true;
      const formData = new FormData();
      formData.append('title', 'CorridaBancaria100Banco');
      formData.append('excel_file', this.archivoExcel);
      try {
        const response = await this.$axios.post('upload_excel/', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        try {
          await this.busca_ruta(response.data.id);
        } catch (error) {
          console.log(error);
        }
        const formData1 = new FormData();
        formData1.append('archivoExcel', 'CorridaBancaria100Banco');
        formData1.append('opcion', '100Banco');
        formData1.append('ruta', this.ruta);
        this.$axios
          .post('importarcorridabancaria', formData1)
          .then((response) => {
            this.dialogWait = false
            alert('Archivo Excel subido con éxito.');
            this.botonDeshabilitadoMigrar = false
            this.botonDeshabilitado = false
            console.log('respuesta', response)
          })
          .catch((error) => {
            console.error('Error al subir el archivo Excel:', error);
          });
      } catch (err) {
        console.error('Error al cargar el archivo Excel:', err);
      }
    }, 
    async uploadFileBANESCO() {
      if (!this.archivoExcel) {
        alert('Por favor, selecciona un archivo Excel válido.');
        return;
      }
      this.dialogWait = true
      this.botonDeshabilitado = true;
      this.botonDeshabilitadoMigrar = true;
      const formData = new FormData();
      formData.append('title', 'CorridaBancariaBANESCO');
      formData.append('excel_file', this.archivoExcel);
      try {
        const response = await this.$axios.post('upload_excel/', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        try {
          await this.busca_ruta(response.data.id);
        } catch (error) {
          console.log(error);
        }
        const formData1 = new FormData();
        formData1.append('archivoExcel', 'CorridaBancariaBANESCO');
        formData1.append('opcion', 'BANESCO');
        formData1.append('ruta', this.ruta);
        this.$axios
          .post('importarcorridabancaria', formData1)
          .then((response) => {
            this.dialogWait = false
            alert('Archivo Excel subido con éxito.');
            this.botonDeshabilitadoMigrar = false
            this.botonDeshabilitado = false
            console.log('respuesta', response)
          })
          .catch((error) => {
            console.error('Error al subir el archivo Excel:', error);
          });
      } catch (err) {
        console.error('Error al cargar el archivo Excel:', err);
      }
    }, 

    async uploadFileBFC() {
      if (!this.archivoExcel) {
        alert('Por favor, selecciona un archivo Excel válido.');
        return;
      }
      this.dialogWait = true
      this.botonDeshabilitado = true;
      this.botonDeshabilitadoMigrar = true;
      const formData = new FormData();
      formData.append('title', 'CorridaBancariaBFC');
      formData.append('excel_file', this.archivoExcel);
      try {
        const response = await this.$axios.post('upload_excel/', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        try {
          await this.busca_ruta(response.data.id);
        } catch (error) {
          console.log(error);
        }
        const formData1 = new FormData();
        formData1.append('archivoExcel', 'CorridaBancariaBFC');
        formData1.append('opcion', 'BFC');
        formData1.append('ruta', this.ruta);
        this.$axios
          .post('importarcorridabancaria', formData1)
          .then((response) => {
            this.dialogWait = false
            alert('Archivo Excel subido con éxito.');
            this.botonDeshabilitadoMigrar = false
            this.botonDeshabilitado = false
            console.log('respuesta', response)
          })
          .catch((error) => {
            console.error('Error al subir el archivo Excel:', error);
          });
      } catch (err) {
        console.error('Error al cargar el archivo Excel:', err);
      }
    },

    async uploadFileBDV() {
      if (!this.archivoExcel) {
        alert('Por favor, selecciona un archivo Excel válido.');
        return;
      }
      this.dialogWait = true
      this.botonDeshabilitado = true;
      this.botonDeshabilitadoMigrar = true;
      const formData = new FormData();
      formData.append('title', 'CorridaBancariaBDV');
      formData.append('excel_file', this.archivoExcel);
      try {
        const response = await this.$axios.post('upload_excel/', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        try {
          await this.busca_ruta(response.data.id);
        } catch (error) {
          console.log(error);
        }
        const formData1 = new FormData();
        formData1.append('archivoExcel', 'CorridaBancariaBDV');
        formData1.append('opcion', 'BDV');
        formData1.append('ruta', this.ruta);
        this.$axios
          .post('importarcorridabancaria', formData1)
          .then((response) => {
            this.dialogWait = false
            alert('Archivo Excel subido con éxito.');
            this.botonDeshabilitadoMigrar = false
            this.botonDeshabilitado = false
            console.log('respuesta', response)
          })
          .catch((error) => {
            console.error('Error al subir el archivo Excel:', error);
          });
      } catch (err) {
        console.error('Error al cargar el archivo Excel:', err);
      }
    },
  },
}; 
</script>

<style>
.section1-reporte-recaudos {
  display: grid; /* Cambiamos flex a grid */
  grid-template-columns: repeat(auto-fit, minmax(30%, 1fr)); /* Esto permite que los contenedores se ajusten automáticamente al ancho del padre y tengan un ancho mínimo del 30% */
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
  /* width: 30%; */ /* Ya no necesitamos esto */
  padding-top: 120px;
  border-radius: 10px;
  padding: 20px 10px 20px 10px;
  background-color: #fff;
  box-shadow: 3px 3px 3px 3px rgba(#000000, 0.1) !important;
  /* display: grid; */ /* Ya no necesitamos esto */
  /* justify-items: center; */ /* Ya no necesitamos esto */
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

.input-file {
  padding: 10px;
  border: 2px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
  color: #333;
  font-size: 16px;
}

.input-file:focus {
  outline: none;
  border-color: #66afe9;
}

</style>