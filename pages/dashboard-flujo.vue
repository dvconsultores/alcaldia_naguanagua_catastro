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
            <span class="green-number">{{ item.percent }}</span> <v-icon color="#25ac60">mdi-arrow-up</v-icon> mes
            1 pasado
          </p>

          <div class="center">
            <apexchart type="area" :options="chartOptions" :series="item.chartSeries" height="130" width="280" />
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
            <span class="green-number">{{ item.percent }}</span> <v-icon color="#25ac60">mdi-arrow-up</v-icon> mes
            2 pasado
          </p>

          <div class="center">
            <apexchart type="area" :options="chartOptions2" :series="chartSeries2" height="160" width="380" />
          </div>
        </v-card>
      </div>
      <div class="cards-container">
        <v-card v-for="(item, index) in dashboardCard" :key="index" class="dashboard-cards-small">
          <span class="title">
            {{ item.title }}
          </span>
          <span class="number">
            {{ item.number }}
          </span>
          <p>
            <span class="green-number">{{ item.percent }}</span> <v-icon color="#25ac60">mdi-arrow-up</v-icon> mes
            1 pasado
          </p>

          <div class="center">
            <apexchart type="area" :options="chartOptions" :series="chartSeries" height="130" width="280" />
          </div>
        </v-card>

        <v-card v-for="(item, index) in solicitudesProcesadas" :key="index" class="total-inmuebles-card">
          <span class="title">
            {{ item.title }}
          </span>
          <span class="number">
            {{ item.number }}
          </span>
          <p>
            <span class="green-number">{{ item.percent }}</span> <v-icon color="#25ac60">mdi-arrow-up</v-icon> mes
            2 pasado
          </p>

          <div class="center">
            <apexchart type="area" :options="chartOptions3" :series="chartSeries3" height="160" width="380" />
          </div>
        </v-card>
      </div>

      <div class="accesos-rapidos-container">
      <div id="chart">
        <apexchart type="pie" width="380" :options="chartOptionsPie" :series="seriesPie"></apexchart>
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

      seriesPie: [44, 55, 13, 43, 22],
      chartOptionsPie: {
        chart: {
          width: 380,
          type: 'pie',
        },
        labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
        colors: ['#008FFB', '#00E396', '#FEB019', '#FF4560', '#775DD0'],
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: 'bottom'
            }
          }
        }],
        plotOptions: {
      pie: {
        customScale: 1.1
      }
    }
      },



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
        colors: ['var(--primary)'],
        xaxis: {
          labels: {
            categories: ['01 Jan', '02 Jan', '03 Jan', '04 Jan', '05 Jan', '06 Jan', '07 Jan', '08 Jan', '09 Jan',
            '10 Jan', '11 Jan', '12 Jan'
          ]
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
      dashboardCard: [
        {
          title: "Contribuyentes nuevos del mes",
          number: "198",
          percent: "1.98%",
          chartSeries: [
            {
              name: 'Series 1',
              data: [310, 401, 145, 501, 210, 419, 817, 167, 1010]
            }
          ]
          
        },
        {
          title: "Desincorporaciones del mes",
          number: "169",
          percent: "-1.8%",
          chartSeries: [
            {
              name: 'Series 1',
              data: [30, 40, 45, 50, 20, 49, 87, 67, 100]
            }
          ]
        },
        {
          title: "Inmubeles Actualizados",
          number: "322",
          percent: "-1.8%%",
          chartSeries: [
            {
              name: 'Series 1',
              data: [30, 40, 45, 50, 20, 49, 87, 67, 100]
            }
          ]
        },
        {
          title: "Nro. Total de Recaudaciones",
          number: "5.654",
          percent: "1.8%",
          chartSeries: [
            {
              name: 'Series 1',
              data: [30, 40, 45, 50, 20, 49, 87, 67, 100]
            }
          ]
        },
      ],

      totalInmuebles: [
        {
          title: "Nro. Total de Inmuebles del municipio",
          number: "123.456.89",
          percent: "1.8%",
        }
      ],

      solicitudesProcesadas: [
        {
          title: "Nro. Total de Solicitudes Procesadas",
          number: "1233",
          percent: "3.2%",
        }
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