import { createRouter, createWebHashHistory } from "vue-router";
import AddTask from "../components/AddTask.vue";
import TaskList from "../components/TaskList.vue";

const routes = [
  {
    path: "/",
    name: "TaskList",
    component: TaskList,
  },
  {
    path: "/add-tasks",
    name: "AddList",
    component: AddTask,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
