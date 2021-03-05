<template>
  <div class="home">
    <field-add-task />
    <list-task v-if="$store.state.tasks.length" />
    <no-tasks v-else />
  </div>
</template>

<script>
import FieldAddTask from "../components/Todo/FieldAddTask.vue";
import ListTask from "../components/Todo/ListTask.vue";
import NoTasks from "../components/Todo/NoTasks.vue";

export default {
  name: "Home",
  components: { FieldAddTask, ListTask, NoTasks },
};
</script>

