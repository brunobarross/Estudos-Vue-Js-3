import { createStore } from 'vuex'

export default createStore({
  // state é onde vou guardar os dados
  state: {
    user:{
      first_name: 'Altamiro',
      last_name: 'Bruno',
      email: 'altamiro@gmail.com'
    },
    products: [],
    cart: []
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
})
