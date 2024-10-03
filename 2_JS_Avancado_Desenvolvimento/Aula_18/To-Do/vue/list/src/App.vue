<template>
  <div>
    <h2>To-Do</h2>
    <input v-model ="newTask" placeholder="Adicionar Task"/>

    <button @click="addTask">Adicionar Tarefa</button>

    <ul>
      <li v-for="(task, index) in tasks" :key="index">
        {{ task }}

        <button @click="removeTask(index)">Remover</button>

      </li>
    </ul>
  </div>
</template>

<script>
    export default {
      data() {
        return {
          tasks: [],
          newTask: ''
        };
      },

      methods: {
        addTask() {
          if (this.newTask.trim()) {
            this.tasks.push(this.newTask);
            this.newTask = '';
          }
        },
        removeTask(index) {
          this.tasks.splice(index, 1)
        }
      }
    };
    

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
