<template>
  <v-text-field
    :value="$store.state.search"
    @input="$store.commit('setSearch', $event)"
    @focus="searchClosed = false"
    @blur="searchClosed = true"
    class="expanding-search mt-1"
    :class="{ 'closed' : searchClosed && !$store.state.search }"
    placeholder="Pesquisar"
    prepend-inner-icon="mdi-magnify"
    filled
    dense
    clearable
  ></v-text-field>  
</template>

<script>
export default {
  data() {
    return {
      searchClosed: true
    }
  }
}
</script>

<style lang="sass">
  .expanding-search
    transition: max-width 0.3s
    .v-input__slot
      cursor: pointer !important
      &:before, &:after
        border-color: transparent !important
    &.closed
      max-width: 45px
      .v-input__slot
        background: transparent !important
</style>
