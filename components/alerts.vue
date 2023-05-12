<template>
  <div>
    <v-dialog
      v-for="(item,i) in dataAlerts" :key="i"
      v-model="item.model"
      content-class="modal-alert"
      persistent
      :style="`--color-snackbar: ${item.color}`"
    >
      <v-card id="error-card">
        <div>
          <span class="title-alert">
            {{item.title}}
          </span>
          <v-btn :style="`background-color:${item.color};`" @click="item.model = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </div>
        <div>
          <img :src="require(`~/assets/sources/images/${item.key === 'success' ? 'success' : 'alert'}.svg`)" :alt="item.key === 'success' ? 'Success' : 'Alert'">
          <span class="text-card-alert">{{item.desc}}</span>
        </div>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "AlertsComponent",
  data() {
    return {
      dataAlerts: []
    };
  },
  methods: {
    GenerateAlert(
      key, title = key,
      desc = `text${key.replace(/^\w/, c => c.toUpperCase())}`,
      color = key === 'success' ? 'var(--success)' : 'var(--error)',
      

    ) {
      // // create alert
      const alert = {
        key, title, desc, color, model: true,
        icon: key, // ---> if img tag
        // icon: key === 'success' ? 'mdi-check-circle' : 'mdi-close-circle', // ---> if mdi icon
      }
      this.dataAlerts.push(alert)
      // clear alerts
      // setTimeout(() => this.dataAlerts.shift(), 5000);
    },
  }
};
</script>

<style src="~/assets/styles/components/alerts.scss" lang="scss" />
