<template>
  <h2>{{ text }}</h2>
</template>

<script lang="ts">
export default {
  name: 'Heading',
  props: {
    text: {
      type: String,
      default: '',
    },
  },
}
</script>

<style scoped>
h2 {
  margin: 16px 0;
  padding: 0;
  font-size: 1.6rem;
  font-weight: 700;
  text-align-last: left;
}
</style>
