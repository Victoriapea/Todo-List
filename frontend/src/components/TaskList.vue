<template>
  <div class="task-list">
    <h2>Tâches</h2>
    <ul>
      <li v-for="task in tasks" :key="task._id">
        <h3>{{ task.title }}</h3>
        <p>{{ task.description }}</p>
        <button @click="deleteTask(task._id)">Supprimer</button>
      </li>
    </ul>
    <router-link to="/add-tasks">Ajouter une tâche</router-link>
  </div>
</template>

<script>
export default {
  name: "TaskList",
  data() {
    return {
      tasks: []
    }
  },
  mounted() {
    this.fetchTasks();
  },
  methods: {
    async fetchTasks() {
      const response = await fetch("/api/tasks");
      this.tasks = await response.json();
    },
    async deleteTask(id) {
      await fetch(`/api/tasks/${id}`, {
        method: "DELETE",
      });
      this.fetchTasks(); //rafraîchit la liste des tâches après suppression
    }
  }
}
</script> 

<style>
.task-list {
  margin: 50px 0;
}

.task-list h2 {
  color: #333;
}

.task-list ul {
  list-style: none;
  padding: 0;
}

.task-list li {
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 10px;
  margin-bottom: 10px;
}

.task-list button {
  background-color: #e74c3c;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 7px 10px;
  cursor: pointer;
}

.task-list button:hover {
  background-color: #c0392b;
}

.task-list a {
  display: inline-block;
  margin-top: 10px;
  color: #3498db;
  text-decoration: none;
}
</style>