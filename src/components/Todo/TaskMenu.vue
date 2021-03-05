<template>
  <div>
    <dialog-delete
      v-if="dialogs.delete"
      :task="task"
      @close="dialogs.delete = false"
    />
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
  </div>
</template>

<script>
import DialogDelete from "../Dialogs/DialogDelete";

export default {
  components: {
    DialogDelete,
  },
  props: ["task"],
  data: () => ({
    dialogs: {
      delete: false,
    },
    items: [
      {
        title: "Editar",
        icon: "mdi-pencil",
        click() {
          console.log("editar");
        },
      },
      {
        title: "Data tarefa",
        icon: "mdi-calendar",
        click() {
          console.log("data");
        },
      },
      {
        title: "Deletar",
        icon: "mdi-delete",
        click() {
          this.dialogs.delete = true;
        },
      },
    ],
  }),
  methods: {
    handleClick(index) {
      this.items[index].click.call(this)
    },
  },
};
</script>

<style></style>
