<template>
  <div class="app">
    <Header />
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script lang="ts">
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    Header,
  },
}
</script>

<style scoped>
.app {
  display: grid;
  grid-template-rows: auto 1fr;
  height: 100%;
}
main {
  padding: 0 16px 16px;
  text-align: center;
}
</style>
