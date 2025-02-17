export const state = () => ({
  tasa: null,
  user: null , //creacion de variable
  contribuyente: undefined,//creacion de variable GLOBAL para Catastro
  expediente: undefined,//creacion de variable GLOBAL para Catastro
  flujo: undefined,//creacion de variable para usarla en creacion de estados/ de cuenta/liquidacion de catastro
  prefactura: undefined,//creacion de variable para usarla en los pagos automaticos una vez que se grabe la prefactura
  inmueble: undefined,//creacion de variable para usarla en creacion de estados/ de cuenta/liquidacion de catastro

  theme: "light",
  overlay: { opacity: 0.2, color: "black" },
  dataUser: {
    banner: undefined,
    //avatar: undefined,
    accountId: undefined,
    username: undefined,
    email: undefined,
    discord: undefined,
    instagram: undefined,
    twitter: undefined,
    telegram: undefined,
    tier: 2,
    balance: 0,
    dataSocial: [],
  },
  currentEmailVerification: {
    token: undefined,
    email: "detextre4@gmail.com",
  },
});

export const mutations = {

  STORE_USER(state, user) { // seteo de data
    state.user = user
  },
  STORE_tasa(state, tasa) { // seteo de data
    state.tasa = tasa
  },
  STORE_contribuyente(state, contribuyente) { // seteo de data
    state.contribuyente = contribuyente
  },
  STORE_expediente(state, expediente) { // seteo de data
    state.expediente = expediente
  },
  STORE_patente(state, patente) { // seteo de data
    state.patente = patente
  },

  STORE_flujo(state, flujo) { // seteo de data
    state.flujo = flujo
  },
  STORE_prefactura(state, prefactura) { // seteo de data
    state.prefactura = prefactura
  },
  STORE_inmueble(state, inmueble) { // seteo de data
    state.inmueble = inmueble
  },
  emailVerification(state, {token, email}) {
    state.currentEmailVerification.token = token
    state.currentEmailVerification.email = email
  },
  switchTheme(state, theme) {
    // theme
    state.theme = theme
    localStorage.setItem("theme", theme)
    document.documentElement.className = theme;
    // overlay
    if (theme === "light") { state.overlay.opacity = 0.2; state.overlay.color = "white" }
    else { state.overlay.opacity = 0.5; state.overlay.color = "black" }
  },
  setData(state, data) {
    if (window.$nuxt.$wallet.isSignedIn() && typeof data === 'string') {
      //state.dataUser.avatar = require('~/assets/sources/avatars/avatar.png');
      state.dataUser.accountId = data;
    } else if (window.$nuxt.$wallet.isSignedIn() && typeof data === 'object') {
      state.dataUser.accountId = data.wallet;
      state.dataUser.banner = data.banner ? this.$axios.defaults.baseURL+data.banner : undefined;
      //state.dataUser.avatar = data.avatar ? this.$axios.defaults.baseURL+data.avatar : require('~/assets/sources/avatars/avatar.png');
      state.dataUser.username = data.username;
      state.dataUser.email = data.email;
      state.dataUser.bio = data.bio;
      // find socials
      const arrSocials = Object.entries(data).filter(arr =>
        arr[0] === 'telegram' && arr[1] || arr[0] === 'discord' && arr[1]
        || arr[0] === 'instagram' && arr[1] || arr[0] === 'twitter' && arr[1]
      )
      // set data socials
      for (let [keys, values] of arrSocials) {
        // properties <--
        state.dataUser[keys] = values
        
        // icons <--
        if (keys === "telegram") {
          // telegram
          values = `https://t.me/${values}`
        } else if (keys === "discord") {
          // discord
          values = `https://discord.com/channels/${values}`
        } else if (keys === "instagram") {
          // instagram
          keys = 'mdi-instagram'
          values = `https://instagram.com/${values}`
        } else if (keys === "twitter") {
          // twitter
          keys = 'mdi-twitter'
          values = `https://twitter.com/${values}`
        } else if (keys === "facebook") {
          // facebook
          values = `https://facebook.com/${values}`
        }
        // push data socials
        state.dataUser.dataSocial.push({ icon: keys, link: values })
      }
    }
  },
  signIn(state, key) {
    const nearWallet = "https://wallet.testnet.near.org"
    const myNearWallet = "https://testnet.mynearwallet.com"
    
    if (key === 'near') {
      localStorage.setItem("walletUrl", nearWallet)
      window.$nuxt.$wallet._walletBaseUrl = nearWallet
    }
    else if (key === 'myNear') {
      localStorage.setItem("walletUrl", myNearWallet)
      window.$nuxt.$wallet._walletBaseUrl = myNearWallet
    } else if (key === 'sender') {
      return this.$alert("cancel", {title: "comming soon", desc: "is comming soon for now"})
    }
    
    window.$nuxt.$wallet.requestSignIn(
      'contract.musicfeast.testnet'
    );
  },
  signOut() {
    window.$nuxt.$wallet.signOut();
    setTimeout(() => this.$router.go(0), 100);
    this.$router.push(this.localePath('/'));
  },
};

export const actions = {
  storeUser({commit}, user) { // recibe la data y la manda a store user para ser seteada
    commit('STORE_USER', user)
  },
  storeTasa({commit}, tasa) { // recibe la data y la manda a store user para ser seteada
    commit('STORE_tasa', tasa)
  },
  storeContribuyente({commit}, contribuyente) { // recibe la data y la manda a store user para ser seteada
    commit('STORE_contribuyente', contribuyente)
  },
  storePatente({commit}, patente) { // recibe la data y la manda a store user para ser seteada
    commit('STORE_patente', patente)
  },
  storeExpediente({commit}, expediente) { // recibe la data y la manda a store user para ser seteada
    commit('STORE_expediente', expediente)
  },
  storeFlujo({commit}, flujo) { // recibe la data y la manda a store user para ser seteada
    commit('STORE_flujo', flujo)
  },
  storePrefactura({commit}, prefactura) { // recibe la data y la manda a store user para ser seteada
    commit('STORE_prefactura', prefactura)
  },
  storeInmueble({commit}, inmueble) { // recibe la data y la manda a store user para ser seteada
    commit('STORE_inmueble', inmueble)
  },

  modalConnect() {
    const layout = this.$router.app.$children.find(data=>data.$el === document.getElementById("layout"));
    layout.$refs.connect.modalConnect = true
  },
  getData({commit}) {
    try {
      // get data user
      commit("setData", window.$nuxt.$wallet.getAccountId()); /*  -->   if use only smart contract */
      /*           if use smart contract + backend            */
      // this.$axios.post(`${this.$axios.defaults.baseURL}api/v1/get-perfil-data/`, { "wallet": window.$nuxt.$wallet.getAccountId() })
      // .then(result => {
      //   // set data profile
      //   result.data[0] ? commit("setData", result.data[0]) : commit("setData", window.$nuxt.$wallet.getAccountId());
      // // catch error django
      // }).catch(err => {
      //   console.error(err);
      //   this.$alert("cancel", {desc: err.message})
      // })
    // catch error near
    } catch (err) {
      console.error(err);
      this.$alert("cancel", {desc: err.message})
    }
  },
};

export const getters = {
  pagination: () => ({items, currentPage, itemsPerPage, search, filterA}) => {
    let filters = [...items]

    // search
    if (search) filters = filters.filter(data => data.name.includes(search))
    // filter A (tier)
    if (filterA) filters = filters.filter(data => data.tier === filterA)

    return filters.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
  },


  getUser(state) { // consulta la variable
    //return state.user[0]
    return state.user
  },
  getTasa(state) { // consulta la variable
    return state.tasa == undefined ? 'Sin Seleccionar' : state.tasa
  },
  getContribuyente(state) { // consulta la variable
    return state.contribuyente == undefined ? 'Sin Seleccionar' : state.contribuyente
  },
  getPatente(state) { // consulta la variable
    return state.patente == undefined ? 'Sin Seleccionar' : state.patente
  },
  getExpediente(state) { // consulta la variable
    return state.expediente == undefined ? 'Sin Seleccionar' : state.expediente
  },
  getFlujo(state) { // consulta la variable
    return state.flujo == undefined ? 'Sin Seleccionar' : state.flujo
  }, 
  getPrefactura(state) { // consulta la variable
    return state.prefactura == undefined ? 'Sin Seleccionar' : state.prefactura
  },
  getInmueble(state) { // consulta la variable
    return state.inmueble == undefined ? 'Sin Seleccionar' : state.inmueble
  },    
};

export const modules = {
};