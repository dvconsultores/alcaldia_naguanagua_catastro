<template>
  <section class="center section-login">
    <!-- <v-dialog v-model="isLoading" persistent>
      <v-card loading="true">
        <v-card-text>
          Cargando...
        </v-card-text>
      </v-card>
    </v-dialog> -->

    <img src="~/assets/sources/logos/Escudo_Naguanagua_Carabobo.png" alt="Escudo-Naguanagua">
    <img src="~/assets/sources/images/morado.png" alt="morado">
    <div class="divcol center container-login">
      <img src="~/assets/sources/logos/logo.png" alt="AlcaldiaLogo">
      <h2>Sistema de trámites y servicios</h2>
      <div class="inputs-btns">
        <v-form ref="formLogin" style="--bg: var(--primary); --w: 100%; gap: 1em" @submit.prevent="login()">
          <v-text-field v-model="formLogin.email" :rules="rules.required" class="inputs"
            placeholder="Usuario"></v-text-field>


          <v-text-field v-model="formLogin.password" :rules="rules.required" class="inputs" placeholder="Contraseña"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'" :type="show1 ? 'text' : 'password'"
            @click:append="show1 = !show1"></v-text-field>
          <v-btn style="--bg: var(--active)" @click="login()">
            <template v-if="isLoading">
              <v-progress-circular indeterminate color="white"></v-progress-circular>
            </template>
            <template v-else>
              <span>Iniciar sesión</span>
            </template>
          </v-btn>
        </v-form>
      </div>
    </div>
  </section>
</template>

<script>
import computeds from '~/mixins/computeds'

export default {
  name: "HomePage",
  mixins: [computeds],
  layout: 'empty-layout',
  data() {
    return {
      formLogin: {
        email: undefined,
        password: undefined,
      },
      isLoading: false,
      show1: false,
      email: null,
      password: null,
      rules: {
        required: [(v) => !!v || "Requerido"],
        email: [
          (v) => !!v || "Requerido",
          v => /.+@.+\..+/.test(v) || 'Formato de correo inválido',
        ],
      }
    }
  },
  head() {
    const title = 'Home';
    return {
      title,
    }
  },
  mounted() {
    this.reset()
  },
  methods: {
    reset() {
      this.$store.dispatch('storeUser', undefined)
      this.$store.dispatch('storeContribuyente', undefined)
      this.$store.dispatch('storeExpediente', undefined)
      this.$store.dispatch('storeFlujo', undefined)
      this.$store.dispatch('storePrefactura', undefined)
    },

    login() {

      if (!this.$refs.formLogin.validate()) {
        this.$alert("cancel", { desc: "Verifica que los campos sean correctos.", hash: 'knsddcssdc', title: 'Error' })
        return;
      }
      else {
        this.isLoading = true; // Mostrar el modal de carga
        this.$axios.$post('signin/', {
          username: this.formLogin.email,
          password: this.formLogin.password,
          // ip:'1900',
        }).then((res) => {
          
          //console.log('login', res)
          
          // this.$toast.success('Autentificación exitosa') // instalar libreria para que funcione
          this.$axios.setToken(res.token, 'Token')
          this.$store.dispatch('storeUser', res)
          //this.$router.push('dashboard')
          
          //console.log('modulo', res.modulo)
          
          this.$router.push(res.modulo)

        }).catch((err) => {
          this.$alert("cancel", { desc: "Error de autentificación", hash: 'knsddcssdc', title: 'Error' })
          // this.$toast.error('Error de autentificación')
          console.error(err)
        }).finally(() => {
          this.isLoading = false; // Ocultar el modal de carga una vez que se completa la solicitud
        });
      }
    },
  }
};
</script>

<style src="~/assets/styles/pages/index.scss" lang="scss" />
