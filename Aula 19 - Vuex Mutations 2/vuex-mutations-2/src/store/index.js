import { createStore } from 'vuex'

//mutation é usada para alterarmos os dados dos states

/* no mutation ey tenho acesso a tudo dentro do state executando esse comando por exemplo:
      updateUser(state){
      console.log('updateUser',state)

    }
*/


export default createStore({
  state: {
    user:{
      first_name: 'Altamiro',
      last_name: 'Bruno'
    },
    products: [
      {
        id: 1,
        name: 'bola',
        price: 100
      },
      {
        id: 2,
        name: 'chuteira',
        price: 300
      },
      {
        id: 3,
        name: 'meião',
        price: 50
      }
    ],
    cart: []
  },
  getters: {
  },
  mutations: {
    storeUser(state, data){
      // atualizando o valor de user:
      state.user = data;
      console.log('ustoreUser',data)

    },
    addProduct(state, data){
      //adicionando mais um item no array
      state.cart.push(data)
    },
    removeProduct(state, id){
      const index = state.cart.findIndex(i => i.id === id)
      state.cart.splice(index, 1)
    }
    },
  actions: {
  },
  modules: {
  }
})
