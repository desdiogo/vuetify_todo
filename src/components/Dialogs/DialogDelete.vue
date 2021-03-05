<template>
  <v-dialog :value="true" persistent max-width="290">
    <v-card>
      <v-card-title class="headline">
        Remover tarefa?
      </v-card-title>
      <v-card-text>Tem certeza que deseja remover a tarefa?</v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn text @click="$emit('close')">
          Não
        </v-btn>
        <v-btn color="red darken-1" text @click="$store.dispatch('deleteTask', task.id)">
          Sim
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: ['task']
};
</script>

<style></style>
