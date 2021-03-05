<template>
      <div class="no-tasks">
      <v-icon color="primary" size="100">
        mdi-check
      </v-icon>
      <div class="text-h5 primary--text">
        Sem tarefas
      </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="sass">
.no-tasks
  position: absolute
  left: 50%
  top: 50%
  transform: translate(-50%, -50%)
  opacity: 0.5
</style>