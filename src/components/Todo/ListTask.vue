<template>
  <v-list flat class="pt-0">
    <draggable v-model="tasks" handle=".handle">
      <task
        v-for="task in $store.getters.tasksFiltered"
        :key="task.id"
        :task="task"
      />
    </draggable>
  </v-list>
</template>

<script>
import draggable from "vuedraggable";
import Task from "./Task.vue";

export default {
  components: {
    draggable,
    Task,
  },
  computed: {
    tasks: {
      get() {
        return this.$store.getters.tasksFiltered
      },
      set(value) {
        this.$store.commit("setTasks", value)
      }
    }
  }
};
</script>
