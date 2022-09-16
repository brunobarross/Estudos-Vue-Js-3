<!--quando tenho um valor que depende de outros valores, usamos propriedades computadas == computed{},

  nessa computed podemos declarar funções que vão ser tratadas como apenas um campo normal
-->

<!--acessar valores em data utilizamos this,
o this faz referencia a própria instancia do componente,
ex: this.user.first_name (o user é declarado dentro de data)
-->

<!-- vantagem, vai ser recomputado toda vez que fizer alguma alteração no valor das variaveis, qualquer dependencia que essa função tenha vai ser recomputada -->

<!-- ele só vai se recomputado quando as dependencias dele forem alteradas -->

<!-- porque usar ele ao invés de criar a full name no method ? 
se declarado em method, fullName vai ser computado toda vez que ele for chamado, ao invés disso usamos o computed pq vai estar cacheado, com isso a execução vai ser mais rápida
-->

<!--utilizando checkbox e v-model, consigo mudar o boleano da todo(tarefa) pra definir se ela foi completa ou não -->

<!-- SE COMPUTED DEPENDE DOS VALORES DA TODO, ELE VAI SER RECOMPUTADO TODA VEZ QUE ELA FOR ALTERADA-->

<template id="app">
  <div>
    <button @click="click">Click</button>
    <!-- ao invés disso 
        {{user.first_name}} {{user.last_name}}-->
    <!-- podemos usar o fullName dentro de computed que retorna a concatenação de first name e last name , que ficaria assim: -->
    {{ fullName }}
  </div>

  <h1>Todos em aberto</h1>

  <div v-for="todo in uncompletedTodos" :key="todo.id">
    {{ todo.title }} <span>{{ todo.completed }}</span>
  </div>

  <h1>Todos completas</h1>

  <div v-for="todo in completedTodos" :key="todo.id">
    {{ todo.title }} <span>{{ todo.completed }}</span>
  </div>

  <h1>Todos</h1>
  <div v-for="todo in todos" :key="todo.id">
    <input v-model="todo.completed" type="checkbox">
    {{ todo.title }}
  </div>

</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      user: {
        first_name: 'Jhon',
        last_name: 'Snow',
      },
      todos: [
        {
          userId: 1,
          id: 1,
          title: 'delectus aut autem',
          completed: false,
        },
        {
          userId: 1,
          id: 2,
          title: 'quis ut nam facilis et officia qui',
          completed: false,
        },
        {
          userId: 1,
          id: 3,
          title: 'fugiat veniam minus',
          completed: false,
        },
        {
          userId: 1,
          id: 4,
          title: 'et porro tempora',
          completed: true,
        },
        {
          userId: 1,
          id: 5,
          title:
            'laboriosam mollitia et enim quasi adipisci quia provident illum',
          completed: false,
        },
      ],
    };
  },
  computed: {
    fullName() {
      return `${this.user.first_name} ${this.user.last_name}`;
    },

    uncompletedTodos() {
      // retorna apenas os todos não completadas
      return this.todos.filter((todo) => !todo.completed);
    },
    completedTodos() {
      // retorna apenas os todos  completadas
      return this.todos.filter((todo) => todo.completed);
    },
  },
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
