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
    }
  },
  getters: {
  },
  mutations: {
    storeUser(state, data){
      // atualizando o valor de user:
      state.user = data;
      console.log('ustoreUser',data)

    }
  },
  actions: {
  },
  modules: {
  }
})
