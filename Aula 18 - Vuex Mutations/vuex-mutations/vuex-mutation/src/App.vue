<template>
  <div>
    <h2>
      {{ $store.state.user.first_name }} {{ $store.state.user.last_name }}
    </h2>

    <button @click="updateUser">Atualizar perfil</button>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {},
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
  margin-top: 60px;
}
</style>
