<template>
  <section class="center section-login">
    <img src="~/assets/sources/logos/Escudo_Naguanagua_Carabobo.png" alt="Escudo-Naguanagua">
    <img src="~/assets/sources/images/morado.png" alt="morado">
    <div class="divcol center container-login">
      <img src="~/assets/sources/logos/logo.png" alt="AlcaldiaLogo">
      <h2>Sistema de Gestión Catastral</h2>
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

        <v-btn @click="$router.push('dashboard')">
          <span>Iniciar Sesión</span>
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
    }
  },
  head() {
    const title = 'Home';
    return {
      title,
    }
  },
  methods: {
  }
};
</script>

<style src="~/assets/styles/pages/index.scss" lang="scss" />
