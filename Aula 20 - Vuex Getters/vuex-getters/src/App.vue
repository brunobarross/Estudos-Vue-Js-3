<template>
  <div>
    <TheHeader/>
    <AppProducts/>
    <button @click="updateUser">Atualizar perfil</button>
  </div>
</template>

<script>
import AppProducts from './components/Products/AppProducts.vue';
import TheHeader from './components/Products/TheHeader.vue';
export default {
  name: 'App',
  components: { AppProducts, TheHeader },
  data() {
    return {};
  },
  methods: {
    updateUser() {
      //referencia a função que quero dentro da mutation
      /* o primeiro parametro é a função do mutation que quero usar, e o segundo é o novo valor que desejo implementar */
      const newUser = {
        first_name: 'Ana',
        last_name: 'Carolina',
      };
      this.$store.commit('storeUser', newUser);
    },
  },

  created() {},
};
</script>

<style>




#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;

}
</style>
