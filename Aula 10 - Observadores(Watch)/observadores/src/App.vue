<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'
</script>

<!--  

  Watch: São observadores, assim que uma determinada coisa alterar, ela executa uma nova rotina de programação, que pode ser um ajax e etc....
-->

<!-- 
  para observar devo criar uma função dentro de watch com o mesmo nome da varivavel que quero observar, passando a rotina/ação que desejo dentro dela  -->

  <!-- essa função deve passar dois parametros: (newValue, oldValue), ex:
    
    name(newValue, oldValue){
      
    }

    toda vez que a variavel name alterar, vamos obter no o novo valor e o valor antigo
  -->

  <!-- Não é interessante jogar toda a rotina dentro do observador, pois fica muito bagunçãdo, o interessante é jogar dentro de methods -->

  <!-- toda vez que nome for alterado, vai executar a função indicada em watch e qye foi criada em method -->


  <!-- para observar dentro de um objeto devemos transformar o nome do observador em um objeto e dentro dele devo passar uma função chamada handler e a propriedade deep, ex:
  
    user: {
      handler(){
        console.log('executou')
      },
      deep: true
    }

    o DEEP quando true, vai olhar internamente, ou olhar o objeto por dentro, a fundo, assim detectando que alguma propriedade lá dentro do objeto foi alterada
  -->

<template>
  <div>
    <input v-model="nome" type="text">
    {{nome}}

    <br>
    <br>
    <br>

    <input v-model="user.idade" type="number">
    <br>
    <br>
    <input v-model="user.profissao" type="text">

    <br>
    <br>


    Idade:{{user.idade}}
    Profissao:  {{user.profissao}}
    <br>
    <br>

    <select class="select" v-model="pageCount">
      <option value="5">5</option>
      <option value="10">10</option>
      <option value="15">15</option>
    </select>
    {{pageCount}}
  </div>
</template>


<script>
  export default {
    name: 'App',
    data(){
      return {
        nome: '',
        pageCount: 5,
        user: {
          idade: null,
          profissao: ''
        }
      }
    },
    computed:{

    },
    watch: {
      nome(newValue, oldValue){
        if(newValue.length >= 3){
          this.saveUserName();
        } else {
          console.log('menor que 3')
        }
   
      }, 
      pageCount(){
        this.changePage()
      },
      user: {
        handler(){
          console.log('opa, mudou')
        },
        deep: true
      }
      
    },
    methods: {
      saveUserName(){
        console.log('AJAX')
        console.log(this.nome)
      },
      changePage(){
        console.log('muda pagina')
      }


    },
  }
</script>


<style>
  .title {
    font-size: 1.25rem;
    color: blue;
  }
  
  .title-home {
    font-size: 2.5rem;
    color: green;
  }
  
  .text {
    font-size: 1.125rem;
    color: red;
  }
  .text-home {
    font-size: 1.5rem;
    color: aquamarine;
  }
  
  .todos-item {
    background-color: #000;
    margin: 0 0 0.5rem 0;
    padding: 0.5rem 1rem;
    color: #fff;
  }

  select{
    width: 100%;
    padding: .5rem 1rem;
  }


  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin: 60px auto;

  }
  </style>
  
