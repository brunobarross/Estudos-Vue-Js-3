import { createStore } from 'vuex';

//mutation é usada para alterarmos os dados dos states

/* no mutation ey tenho acesso a tudo dentro do state executando esse comando por exemplo:
      updateUser(state){
      console.log('updateUser',state)

    }
*/

/* getter é igual a computed, tem uma dependencia e retorna um valor, e todas as vezes que essa dependencia alterar ele vai recomputar e vai dá um valor no final */


/* Action é bem parecida com mutation, porém é recomendado pelo fluxo original do vue que as actions chame a mutation e que a mutation salve algo no state desejado. Na action posso estar usando algo assincrono como uma promise por exemplo, enquanto o mutation é sincrono, no caso teria que esperar acabar pra executar o próximo comando */

//state: nunca salva diretamente, é só pra leitura
//mutations: você utiliza o commit pra disparar a função da mutations
//getters: é como as computed
//actions: é pra você performar promessa dentro do vuex



export default createStore({
  state: {
    user: {
      first_name: 'Altamiro',
      last_name: 'Bruno',
    },
    products: [
      {
        id: 1,
        name: 'bola',
        price: 100,
      },
      {
        id: 2,
        name: 'chuteira',
        price: 300,
      },
      {
        id: 3,
        name: 'meião',
        price: 50,
      },
    ],
    cart: [],
  },

  mutations: {
    storeUser(state, data) {
      // atualizando o valor de user:
      state.user = data;
      console.log('ustoreUser', data);
    },
    addProduct(state, data) {
      //adicionando mais um item no array
      state.cart.push(data);
    },
    removeProduct(state, id) {
      const index = state.cart.findIndex((i) => i.id === id);
      state.cart.splice(index, 1);
    },
  },

  getters: {
    total(state){
      //dependencia
      //retorna um valor
      //toda vez que cart tiver alteração ele vai se recomputar e com isso exibir o novo total
      return state.cart.reduce((acumlado, item)=> acumlado + item.price,0)
    }
  },
  actions: {
    storeUser(contexto, data){
      //contexto eu tenho acesso a tudo dentro de getters, mutation, state
      // rotina cabulosa
      //ajax

      return new Promise((resolve)=> {
        setTimeout(()=> {
          resolve()
          contexto.commit('storeUser', data);
          // console.log('resolvido')
        },3000)
      })

    }
  },
  modules: {},
});
