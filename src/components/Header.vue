<template>
  <header>
    <h1><router-link to="/">TITLE</router-link></h1>
    <nav>
      <ul>
        <li><router-link to="/times" tag="button">Times</router-link></li>
        <li><router-link to="/division" tag="button">Division</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script lang="ts">
export default {
  name: 'Header',
}
</script>

<style scoped>
header {
  display: flex;
  align-items: center;
  background-color: #ccc;
  padding: 8px;
}
h1 {
  margin: 0;
  padding: 0;
  font-size: 1.8rem;
}
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
}
li {
  margin: 0 0 0 16px;
  font-size: 1.2rem;
}
a {
  color: #333;
  text-decoration: none;
}
li a.router-link-active {
  text-decoration: underline;
}
</style>
