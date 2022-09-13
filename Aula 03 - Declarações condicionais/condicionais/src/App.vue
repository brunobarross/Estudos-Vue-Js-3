
<!--Single file component-->
<!--em unico arquivo eu tenho html,css e js . Quando importo eu levo tudo desse componente, inclusive a lógica-->
<!--todos os components precisam ser .vue-->

<!--mesmo esquema de importar componentes dentro do app ou em qualquer outro componente desejado-->

<!--favor evitar nomes de componentes como Header, Section pois dá conflito com eslint-->
<!--precisa declarar os componentes dentro de components:{}-->

<!-- diretiva vue js, exemplo: v-nomequalquer -->

<!-- a diferença de v-show pro v-if: o v-show adiciona o estilo display none no elemento(componente) pra poder esconder ele ou mostrar a partir de uma váriavel reativa por exemplo

  com v-if o elemento realmente deixa de existir se a condição for falsa, exemplo:

  V-show:
  aqui o elemento passa a ter um display none caso a showHeader seja falsa:
   <TheHeader
    v-show="showHeader"
    />

      V-if:
  aqui o elemento nem existirá no código caso showHeader seja falsa:
   <TheHeader
    v-if="showHeader"
    />
-->

<!--usando váriavel vindo do data do componente em template html : {[variavel]}-->




<template>
    <TheHeader v-if="showHeader"/>
    <div v-show="showName">
      <p>Nome: {{firstName}}</p>

     Sobrenome: {{lastName}}
    </div>

    <!-- if else if ou else -->

    <div v-if="acessLevel === 'admin'">Usuário Admin</div>
    <div v-else-if="acessLevel === 'marketing'">Usuário Market</div>
    <div v-else>Usuário normal</div>

  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>

</template>



<script>
import HelloWorld from './components/HelloWorld.vue'
import TheHeader from './components/TheHeader.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
    TheHeader
},
  data(){
    return {
      //tudo o que eu declarar nesse objeto é chamado de objeto reativo/variaveis reativa
      showHeader: true,
      firstName: 'Altamiro',
      lastName: 'Bruno',
      showName: false,
      acessLevel: 'admin'


    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
