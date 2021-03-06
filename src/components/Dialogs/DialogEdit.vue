<template>
  <v-dialog :value="true" persistent max-width="290">
    <v-card>
      <v-card-title class="headline">
        Editar tarefa
      </v-card-title>
      <v-card-text
        >Editando o título desta tarefa:
        <v-text-field v-model="taskTitle" @keyup.enter="saveTask" />
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn text @click="$emit('close')">
          Cancelar
        </v-btn>
        <v-btn
          color="red darken-1"
          text
          @click="saveTask"
          :disabled="taskTitleInvalid"
        >
          Salvar
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: ["task"],
  data() {
    return {
      taskTitle: null,
    };
  },
  computed: {
    taskTitleInvalid() {
      return !this.taskTitle || this.taskTitle === this.task.title;
    },
  },
  methods: {
    saveTask() {
      if (!this.taskTitleInvalid) {
        let payload = {
          id: this.task.id,
          title: this.taskTitle,
        };
        this.$store.dispatch("updateTaskTitle", payload);
        this.$emit("close");
        this.$vuetify.goTo(0, {duration: 0})
      }
    },
  },
  mounted() {
    this.taskTitle = this.task.title;
  },
};
</script>

<style></style>
