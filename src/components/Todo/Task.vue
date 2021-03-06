<template>
  <div>
    <v-list-item
      @click="$store.commit('doneTask', task.id)"
      :class="{ 'blue lighten-5': task.done }"
    >
      <template v-slot:default>
        <v-list-item-action>
          <v-checkbox :input-value="task.done" color="primary"></v-checkbox>
        </v-list-item-action>

        <v-list-item-content>
          <v-list-item-title
            :class="{ 'text-decoration-line-through': task.done }"
            >{{ task.title }}</v-list-item-title
          >
        </v-list-item-content>

        <v-list-item-action v-if="task.dueDate">
          <v-list-item-action-text>
            <v-icon small>mdi-calendar</v-icon>
            {{ task.dueDate | niceData }}
          </v-list-item-action-text>
        </v-list-item-action>

        <v-list-item-action>
          <task-menu :task="task" />
        </v-list-item-action>
      </template>
    </v-list-item>
    <v-divider></v-divider>
  </div>
</template>

<script>
import { format } from "date-fns";
import { ptBR } from 'date-fns/locale'
import TaskMenu from "./TaskMenu";

export default {
  props: ["task"],
  filters: {
    niceData(value) {
      return format(new Date(value), "dd MMM", {locale: ptBR});
    },
  },
  components: {
    TaskMenu,
  },
};
</script>
