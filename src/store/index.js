import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    appTitle: process.env.VUE_APP_TITLE,
    search: null,
    tasks: [
      {
        id: 1,
        title: "Acordar",
        done: false,
        dueDate: "2021-03-05",
      },
      {
        id: 2,
        title: "Comer Bananas",
        done: false,
        dueDate: "2020-04-05",
      },
      {
        id: 3,
        title: "Comprar Bananas",
        done: false,
        dueDate: "2020-07-20",
      },
    ],
    snackbar: {
      show: false,
      text: "",
    },
  },
  mutations: {
    setSearch(state, value) {
      state.search = value;
    },
    addTask(state, newTaskTitle) {
      let newTask = {
        id: Date.now(),
        title: newTaskTitle,
        done: false,
        duDate: null,
      };
      state.tasks.push(newTask);
    },
    doneTask(state, id) {
      let task = state.tasks.filter((task) => task.id === id)[0];
      task.done = !task.done;
    },
    deleteTask(state, id) {
      state.tasks = state.tasks.filter((task) => task.id !== id);
    },
    updateTaskTitle(state, payload) {
      let task = state.tasks.filter((task) => task.id === payload.id)[0];
      task.title = payload.title;
    },
    updateTaskDueDate(state, payload) {
      let task = state.tasks.filter((task) => task.id === payload.id)[0];
      task.dueDate = payload.dueDate;
    },
    showSnackbar(state, text) {
      let timeout = 0;
      if (state.snackbar.show) {
        state.snackbar.show = false;
        timeout = 300;
      }
      setTimeout(() => {
        state.snackbar.show = true;
        state.snackbar.text = text;
      }, timeout);
    },
    hideSnackbar(state) {
      state.snackbar.show = false;
    },
  },
  actions: {
    addTask({ commit }, newTaskTitle) {
      commit("addTask", newTaskTitle);
      commit("showSnackbar", "Tarefa adicionada com sucesso.");
    },
    deleteTask({ commit }, id) {
      commit("deleteTask", id);
      commit("showSnackbar", "Tarefa removida com sucesso.");
    },
    updateTaskTitle({ commit }, payload) {
      commit("updateTaskTitle", payload);
      commit("showSnackbar", "Tarefa editada com sucesso.");
    },
    updateTaskDueDate({ commit }, payload) {
      commit("updateTaskDueDate", payload);
      commit("showSnackbar", "Data atualizada com sucesso.");
    },
  },
  getters: {
    tasksFiltered(state) {
      if (!state.search) {
        return state.tasks;
      }
      return state.tasks.filter((task) => task.title.toLowerCase().includes(state.search.toLowerCase()));
    },
  },
});
