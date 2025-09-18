<template>
  <div class="center no-padding divcol" style="margin-bottom:20px; padding-left: 256px;">
    <section class="section1-reporte">
      <div class="reporte-container">
        <p class="title-reporte">
          Reporte de Solicitudes Procesadas
        </p>

        <hr>

        <div class="textfield-search-container">
        <v-menu
          v-model="menu"
          :close-on-content-click="false"
          :nudge-right="5"
          transition="scale-transition"
          offset-y
          min-width="auto"
          >
            <template #activator="{ on, attrs }">
              <v-text-field
              v-model="date"
              class="inputs-consulta"
              label="Desde"
              append-icon="mdi-calendar"
              readonly
              v-bind="attrs"
              v-on="on"
              ></v-text-field>
            </template>
          <v-date-picker
            v-model="date"
            @input="menu = false"
            color="blue"
            header-color="var(--primary)"
            class="custom-date-picker"
          ></v-date-picker>
        </v-menu>

        <v-menu
          v-model="menu2"
          :close-on-content-click="false"
          :nudge-right="5"
          transition="scale-transition"
          offset-y
          min-width="auto"
          >
            <template #activator="{ on, attrs }">
              <v-text-field
              v-model="date"
              class="inputs-consulta"
              label="Hasta"
              append-icon="mdi-calendar"
              readonly
              v-bind="attrs"
              v-on="on"
              ></v-text-field>
            </template>
          <v-date-picker
            v-model="date"
            @input="menu2 = false"
            color="blue"
            header-color="var(--primary)"
            class="custom-date-picker"
          ></v-date-picker>
        </v-menu>

          <v-dialog v-model="dialog_exito" persistent class="dialog-exito">
            <template #activator="{attrs, on}">
              <v-btn class="btn-buscar" v-bind="attrs" v-on="on">
                Buscar
              </v-btn>
            </template>
            <v-card class="card-dialog-exito">
              <v-icon @click="dialog_exito = false">mdi-close</v-icon>
              <p class="p-dialog">¡Reporte generado con éxito!</p>
            </v-card>
        </v-dialog>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import computeds from '~/mixins/computeds'

export default{
  name: "ReporteTaquillaPage",
  mixins:[computeds],
  data(){
    return{
      dialog_exito: false,
      date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
      menu: false,
      menu2: false,
    }
  },

  head() {
    const title = 'Reporte Taquilla';
    return {
      title,
    }
  },

  methods: {

  }
}

</script>


<style src="~/assets/styles/pages/reporte-taquilla.scss" lang="scss" />