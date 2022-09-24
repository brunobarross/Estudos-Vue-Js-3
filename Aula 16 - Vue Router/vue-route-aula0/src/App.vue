<!-- posso usar objeto dentro do router link, ex:
  v-bind:to="rotaDinamica"
-->

<!--passar parametro na rota, ex:
      path: '/usuario/:nomedoparametro ou id por exemplo',
-->

<!-- this.$route me retorna um objeto com todos os dados possiveis dentro daquela rota atual, ex: path,name, query, hash, parametros-->

<!-- this.$router me retorna todos os metódos disponiveis dentro do vue router, um dos mais utilizados é o push, que define para onde vamos enviar um usuario a partir de um login bem sucedido por exemplo. É como se fosse o navigate do react router dom -->

<!-- createWebHistory(): roteamendos em hashtag
  createWebhashHistory(): roteamento com hashtag
-->



<template>
  <nav>
    <RouterLink to="/">Home</RouterLink> |
    <RouterLink to="/about">About</RouterLink> |
    <RouterLink v-bind:to="rotaDinamica">Serviços</RouterLink> |
    <RouterLink to="/usuario/10">Usuário</RouterLink>
  </nav>
  <!-- injetando a view -->
  <RouterView/>
</template>

<script>
  export default {
    data(){
      return {
        rotaDinamica: {name: 'servicos'}
      }
    }
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
