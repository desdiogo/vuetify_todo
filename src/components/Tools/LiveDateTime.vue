<template>
    <div class="text-subtitle-1 ml-4">
      {{ date }}
    </div>
</template>

<script>
import {format} from "date-fns"
import { ptBR } from 'date-fns/locale'

export default {
  data() {
    return {
      date: ''
    }
  },
  methods: {
    getDate() {
      this.date = format(new Date(), "d 'de' MMMM, H:mm:ss", {locale: ptBR})
      setTimeout(this.getDate, 1000)
    }
  },
  mounted() {
    this.getDate()
  }
};
</script>

<style></style>
