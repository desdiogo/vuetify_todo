<template>
  <div>
    <v-menu bottom left>
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="primary" icon v-bind="attrs" v-on="on">
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
          @click="handleClick(index)"
        >
          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <dialog-delete
      v-if="dialogs.delete"
      :task="task"
      @close="dialogs.delete = false"
    />

    <dialog-due-date
      v-if="dialogs.dueDate"
      :task="task"
      @close="dialogs.dueDate = false"
    />

    <dialog-edit
      v-if="dialogs.edit"
      :task="task"
      @close="dialogs.edit = false"
    />
  </div>
</template>

<script>
import DialogDelete from "../Dialogs/DialogDelete";
import DialogDueDate from "../Dialogs/DialogDueDate";
import DialogEdit from "../Dialogs/DialogEdit";

export default {
  components: {
    DialogDelete,
    DialogDueDate,
    DialogEdit,
  },
  props: ["task"],
  data: () => ({
    dialogs: {
      delete: false,
      dueDate: false,
      edit: false,
    },
    items: [
      {
        title: "Editar",
        icon: "mdi-pencil",
        click() {
          this.dialogs.edit = true;
        },
      },
      {
        title: "Data",
        icon: "mdi-calendar",
        click() {
          this.dialogs.dueDate = true;
        },
      },
      {
        title: "Deletar",
        icon: "mdi-delete",
        click() {
          this.dialogs.delete = true;
        },
      },
      {
        title: "Organizar",
        icon: "mdi-drag-horizontal-variant",
        click() {
          if (!this.$store.state.search) {
            this.$store.commit("toggleSorting");
          } else {
            this.$store.commit(
              "showSnackbar",
              "Não é possível ordenar as tarefas enquanto estiver pesquisando."
            );
          }
        },
      },
    ],
  }),
  methods: {
    handleClick(index) {
      this.items[index].click.call(this);
    },
  },
};
</script>

<style></style>
