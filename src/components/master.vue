<template lang="pug">
  div
    h1 Create an event {{ user.name }}
    h2 create a cat {{ user.phone }}
    p land a new {{ catagory }}
    p(:class="setStyle") happy day
</template>
<script>
import { mapState } from "vuex"

export default {
  computed: {
    localCompute() {
      return something
    },
    setStyle() {
      return `-style-${this.catagory.cat}`
    },
    ...mapState(['user', 'catagory']),
  }
}
</script>
