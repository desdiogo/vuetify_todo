<template>
  <div class="home">
    <field-add-task />
    <list-task v-if="$store.state.tasks.length" />
    <no-tasks v-else />
    <button-done-sorting v-if="$store.state.sorting" />
  </div>
</template>

<script>
import ButtonDoneSorting from "../components/Todo/ButtonDoneSorting"
import FieldAddTask from "../components/Todo/FieldAddTask.vue";
import ListTask from "../components/Todo/ListTask.vue";
import NoTasks from "../components/Todo/NoTasks.vue";

export default {
  name: "Home",
  components: { ButtonDoneSorting, FieldAddTask, ListTask, NoTasks },
};
</script>

