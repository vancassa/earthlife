<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view/>
  </div>
</template>

<script>
export default{
  name:'App',
  components: {

  },
  created: function(){
    this.$store.dispatch('getData');
  }
}
</script>

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

.global-earthlife-nav {
  padding: 25px 15%;
  color: #212B36;
  font-size: 16px;  
  letter-spacing: 3px;  
  line-height: 25px;
  -webkit-box-shadow: 0 1px 2px 0 rgba(0,0,0,0.05);
}

html{
	height: 100%;
}

body {
  margin: 0;
  height: 100%;
}

</style>
