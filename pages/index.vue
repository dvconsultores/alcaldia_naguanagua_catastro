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
        <v-text-field
        v-model="email"
        class="inputs" 
        placeholder="Usuario"
        ></v-text-field>

        <v-text-field
        v-model="password"
        class="inputs" 
        placeholder="Contraseña"
        :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
        :type="show1 ? 'text' : 'password'"
        @click:append="show1 = !show1"
        ></v-text-field>

        <div class="checkbox-span">
          <v-checkbox
          label="Recuerdame"
          ></v-checkbox>

          <span>
            ¿Olvidaste la contraseña?
          </span>
        </div>

        <v-btn @click="login()">
          <span>Iniciar sesión</span>
        </v-btn>

        <span class="last-span">
          <a>¿Necesitas ayuda?</a> Comuníquese con soporte
        </span>
      </div>
    </div>
  </section>
</template>

<script>
import computeds from '~/mixins/computeds'

export default {
  name: "HomePage",
  mixins: [computeds],
  layout:'empty-layout',
  data() {
    return {
      isLoading:false,
      show1:false,
      email:null,
      password:null,
    }
  },
  head() {
    const title = 'Home';
    return {
      title,
    }
  },
  mounted(){
    this.reset()
  },
  methods: {
    reset () {
      this.$store.dispatch('storeUser', undefined)
      //this.$store.dispatch('storeContribuyente', undefined)
      //this.$store.dispatch('storeExpediente', undefined)
      //this.$store.dispatch('storeFlujo',undefined)
    },

    login () {
      this.isLoading = true; // Mostrar el modal de carga
      this.$axios.$post('signin/', {
        username: this.email,
        password: this.password,
        // ip:'1900',
      }).then((res)=>{
         console.log(res)
          // this.$toast.success('Autentificación exitosa') // instalar libreria para que funcione
          this.$axios.setToken(res.token, 'Token')
          this.$store.dispatch('storeUser', res)
          //this.$router.push('dashboard')
          console.log('modulo',res.modulo)
          this.$router.push(res.modulo)
                  
      }).catch((err)=>{
        // this.$toast.error('Error de autentificación')
        console.error(err)
      }).finally(() => {
          this.isLoading = false; // Ocultar el modal de carga una vez que se completa la solicitud
      });
    },
  }
};
</script>

<style src="~/assets/styles/pages/index.scss" lang="scss" />
