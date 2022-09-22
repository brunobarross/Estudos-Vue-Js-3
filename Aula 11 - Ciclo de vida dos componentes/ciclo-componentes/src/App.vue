


<!-- 
  
  Ciclos de vida do componente está dividido em 4 fases:
  criação, montagem, atualização e desmontagem

-->

<!--Hooks:

  breforeCreate(), created(), beforeUpdate(), update(), beforeUnmount(), unmount()
-->

<!-- $el: pega o elemento raiz do componente, ex: this.$el -->

<!-- @click="showHeader = !showHeader" = o valor de showHeader invertido passa a ser o atual  -->

<template id="app">

  <div>
    <TheHeader v-if="showHeader" />
    <h1>MAMA UUUH</h1>
    {{name}}
    <br><br><br>
    <input v-model="name" type="text" />
    <button @click="showHeader = !showHeader" >Toggle</button>
  </div>

</template>

<script>
import TheHeader from './components/TheHeader.vue';
export default {
    name: "App",
    components: { TheHeader},
    data() {
        return {
            name: "Altamiro",
            showHeader: true,
        };
    },
    //Criação:
    // Preparar o componente:
    //pode fazer Ajax, inicializar algumas variáveis
    //Mas não tme acesso ao template (DOM)
    //Montagem
    //Serve pra inicializar uma lib externa
    //Precisa de acesso ao template(DOM)
    //tem acesso ao template (DOM)
    // ex: newSwiper()
    //Atualização
    //quase não utilizado, mas é mais usadas para Debug
    //Desmontagem
    //Fase utilizada pra remover tudo o que for necessário para liberar memória
    // ex: destroi o swiper iniciliazado na montagem (swiper.destroy())




    //HOOKS

    // beforeUpdate(){
    //   console.log('beforeUpdate')
    // },
    // updated(){
    //   console.log('update')
    // },
    // beforeCreate() {
    //     console.log("beforeCreate");
    //     console.log("Estado", this.name);
    //     console.log("DOM", this.$el);
    // },
    // created() {
    //     console.log("created");
    //     console.log("Estado", this.name);
    //     console.log("DOM", this.$el);
    // },
    // beforeMount() {
    //     console.log("beforeMount");
    //     console.log("Estado", this.name);
    //     console.log("DOM", this.$el);
    // },
    // mounted() {
    //     console.log("Mount");
    //     console.log("Estado", this.name);
    //     console.log("DOM", this.$el); // só retorna o elemento aqui, pois o componente já renderizou
    // },
    computed: {},
    methods: {
        click() {
            console.log(this.user);
        },
    },

};
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 60px auto;
}
</style>
