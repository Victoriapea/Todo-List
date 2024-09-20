<template>
  <div class="add-task">
    <h2>Ajouter une tâche</h2>
    <input v-model="newTask" placeholder="Nouvelle tâche" />
    <textarea v-model="newDescription" placeholder="Description de la tâche"></textarea>
    <button @click="addTask">Ajouter</button>
    <router-link to="/">Retour à la liste des tâches</router-link>
  </div>
</template>

<script>
export default {
  name: "AddTask",
  data() {
    return {
      newTask: "",
      newDescription: ""
    }
  },
  methods: {
    async addTask() {
      await fetch("/api/tasks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", 
        },
        body: JSON.stringify({
          title: this.newTask,
          description: this.newDescription,
        }),
      }),
      this.newTask = "";
      this.newDescription = "";
    }
  }
}
</script>

<style>
.add-task {
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 20px;
  margin: 50px 0;
}

.add-task h2 {
  color: #333;
}

.add-task input, 
.add-task textarea {
  width: 90%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.add-task button {
  background-color: #2ecc71;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 10px;
  cursor: pointer;
  display: block;
  margin-bottom: 10px;
}

.add-task button:hover {
  background-color: #27ae60;
}

.add-task a {
  display: inline-block;
  margin-top: 10px;
  color: #3498db;
  text-decoration: none;
}
</style>