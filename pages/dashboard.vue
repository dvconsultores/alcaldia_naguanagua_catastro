<template>
  <div class="center no-padding" style="margin-bottom:20px; padding-left: 256px;">
   <section class="section1-dashboard">
    <div class="cards-container">
      <v-card v-for="(item, index) in dashboardCard" :key="index" class="dashboard-cards-small">
        <span class="title">
          {{ item.title }}
        </span>
        <span class="number">
          {{ item.number }}
        </span>
        <p>
          <span class="green-number">{{ item.percent }}</span> <v-icon color="#25ac60">mdi-arrow-up</v-icon> mes pasado
        </p>

        <div class="center">
          <apexchart type="area" :options="chartOptions" :series="chartSeries" height="130"/>
        </div>
      </v-card>

      <v-card v-for="(item, index) in totalInmuebles" :key="index" class="total-inmuebles-card">
        <span class="title">
          {{ item.title }}
        </span>
        <span class="number">
          {{ item.number }}
        </span>
        <p>
          <span class="green-number">{{ item.percent }}</span> <v-icon color="#25ac60">mdi-arrow-up</v-icon> mes pasado
        </p>

        <div class="center">
          <apexchart type="area" :options="chartOptions2" :series="chartSeries2" height="160"/>
        </div>
      </v-card>
    </div>

    <div class="consultar-card-container">
      <div class="consulta-inputs-container">
        <p class="title-consultar">
          Consultar Propietario - Inmueble
        </p>

        <hr>

        <div class="divrow inputs-btn-container">
          <v-autocomplete
          :items="items"
          class="autocomplete-field"
          ></v-autocomplete>

          <v-text-field
          class="inputs-consulta"
          label="Cédula"
          ></v-text-field>

          <v-text-field
          class="inputs-consulta"
          label="Nombre o Apellido"
          ></v-text-field>

          <v-btn class="search-btn">
            <v-icon color="#810880">mdi-magnify</v-icon>
          </v-btn>
        </div>
      </div>

      <v-card v-for="(item, index) in solicitudesProcesadas" :key="index" class="solicitudes-procesadas-card">
        <span class="title">
          {{ item.title }}
        </span>
        <span class="number">
          {{ item.number }}
        </span>
        <p>
          <span class="green-number">{{ item.percent }}</span> <v-icon color="#25ac60">mdi-arrow-up</v-icon> mes pasado
        </p>

        <apexchart type="area" :options="chartOptions3" :series="chartSeries3" height="160"/>
      </v-card>
    </div>

    <div class="accesos-rapidos-container">
      <div class="jspace">
        <p class="title-acceso">
          Accesos rápidos
        </p>

        <v-btn class="btn-add">
          +
        </v-btn>
      </div>

      <hr>

      <div class="cards-add-menu-container">
        <v-card v-for="(item,index) in quickAccess" :key="index" class="cards-acceso-rapido" @click="$router.push(item.link)">
          <v-icon class="icon-card">
            {{ item.icon }}
          </v-icon>
          <span class="title-card">
            {{ item.title_card }}
          </span>
        </v-card>
      </div>
    </div>
   </section>
  </div>
</template>

<script>
import VueApexCharts from 'vue-apexcharts'
import computeds from '~/mixins/computeds'

export default {
  name: "AdminPage",
  components: {
    apexchart: VueApexCharts,
  },
  mixins: [computeds],
  data() {
    return { 
      chartOptions: {
        chart: {
          zoom: {
            enabled: false
          },
          toolbar: {
            show: false
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth'
        },
        colors: ['#810880'],
        xaxis: {
          labels: {
            show: false
          }
        },
        yaxis: {
          labels: {
            show: false
          }
        },
        grid: {
          show: false
        }
      },
      chartSeries: [
        {
          name: 'Series 1',
          data: [30, 40, 45, 50, 20, 49, 87, 67, 100]
        }
      ],
      chartOptions2: {
        chart: {
          zoom: {
            enabled: false
          },
          toolbar: {
            show: false
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth'
        },
        colors: ['#fff'],
        xaxis: {
          labels: {
            show: false
          }
        },
        yaxis: {
          labels: {
            show: false
          }
        },
        grid: {
          show: false
        }
      },
      chartSeries2: [
        {
          name: 'Series 1',
          data: [30, 40, 45, 50, 20, 49, 87, 67, 100]
        }
      ],
      chartOptions3: {
        chart: {
          zoom: {
            enabled: false
          },
          toolbar: {
            show: false
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth'
        },
        colors: ['#fff'],
        xaxis: {
          labels: {
            show: false
          }
        },
        yaxis: {
          labels: {
            show: false
          }
        },
        grid: {
          show: false
        }
      },
      chartSeries3: [
        {
          name: 'Series 1',
          data: [30, 40, 45, 50, 20, 49, 87, 67, 100]
        }
      ],
      items: ['V', 'J', 'G', 'E'],
      dashboardCard:[
        {
          title:"Contribuyentes nuevos del mes",
          number:"198",
          percent:"1.98%"
        },
        {
          title:"Desincorporaciones del mes",
          number:"169",
          percent:"-1.8%"
        },
        {
          title:"Inmubeles Actualizados",
          number:"322",
          percent:"-1.8%%"
        },
        {
          title:"Nro. Total de Recaudaciones",
          number:"5.654",
          percent:"1.8%"
        },
      ],

      totalInmuebles:[
        {
          title:"Nro. Total de Inmuebles del municipio",
          number:"123.456.89",
          percent:"1.8%",
        }
      ],

      solicitudesProcesadas:[
        {
          title:"Nro. Total de Solicitudes Procesadas",
          number:"1233",
          percent:"3.2%",
        }
      ],

      quickAccess:[
        {
          icon:"mdi-gavel",
          title_card:"Liquidación",
          link:"liquidacion",
        },
        {
          icon:"mdi-arrow-up-bold-box-outline",
          title_card:"Desincorporación de inmueble",
          link:"desincorporacion-inmueble"
        },
        {
          icon:"mdi-account",
          title_card:"Consulta por propietario",
          link: "consultar-propietario",
        },
        {
          icon:"mdi-transfer-down",
          title_card:"Recaudación",
          link:"recaudacion",
        },
        {
          icon:"mdi-card-account-details-outline",
          title_card:"Cédula Catastral",
          link:"cedula-catastral",
        },
        {
          icon:"mdi-cached",
          title_card:"Actualización de datos",
          link:"actualizacion-inmueble"
        },
        {
          icon:"mdi-account-plus",
          title_card:"Crear Contribuyente",
          link:"crear-contribuyente",
        },
      ],
    }
  },
  head() {
    const title = 'Admin';
    return {
      title,
    }
  },

  methods: {
   
  }
};
</script>

<style src="~/assets/styles/pages/dashboard.scss" lang="scss" />