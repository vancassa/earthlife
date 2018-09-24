<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view/>
  </div>
</template>

<!-- Global styles for the entire app are here!!! -->
<style>

@import url('https://fonts.googleapis.com/css?family=Poppins:400,500,700,800,900');

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: 'Poppins', sans-serif;
  text-align: left;
  color: #2c3e50;
  height: 100%;
}

</style>
