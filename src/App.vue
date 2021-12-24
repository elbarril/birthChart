<template>
  <div id="nav" v-if="$route.name != 'Home'">
    <router-link to="/login">Login</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view />
</template>

<script>
</script>

<style>
* {
  margin: 0;
  padding: 0;
  overflow: hidden;
}

html {
  overflow-y: scroll;
}

html::-webkit-scrollbar {
  width: 10px;
}

html::-webkit-scrollbar-track {
  background-color: darkgrey;
}

html::-webkit-scrollbar-thumb {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.9);
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #e7f3ff;
  background-color: black;
  min-height: 100vh;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #e7f3ff;
}

#nav a.router-link-exact-active {
  color: rgb(87, 243, 173);
}
</style>
