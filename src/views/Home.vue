
<template>
  <div class="home">
    <div class ="main">
      <div class="slogan">
        <h1 class="text">Discover happiness through responsible living</h1>
      </div>
      <div class="button-start">
        <router-link to="steps"><button class="start">Start</button></router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  components: {}
};
</script>

<style type="text/css" scoped>
.home {
  display: static;
}

/*@media (max-width: 480px) {
  .home {
    min-height: 850px;
  }
}*/

.arrow {
  margin-left: 8px;
  height: 12px;
}

.top-banner {
  background-image: url(../assets/header_strip.jpg);
  padding-top: 10px;
  padding-bottom: 10px;
  font-size: 16px;
  line-height: 25px;
  padding-left: 15%;
}

.top-banner a {
  color: #ffffff;
  text-decoration: none;
}

.main {
  background-image: url(../assets/cover.png);
  background-position: bottom center;
  background-repeat: no-repeat;
  background-size: 160%;
  height: 700px;
}

a {
  color: black;
}

a:hover {
  color: lightgrey;
}

.slogan {
  padding-top: 100px;
}

.text {
  margin: 0;
  padding-left: 15%;
  width: 75%;
  color: #212b36;
  font-size: 50px;
  font-weight: bold;
  letter-spacing: -0.25px;
  line-height: 60px;
}

.button-start {
  margin-top: 55px;
  padding-left: 15%;
}

.start {
  border-radius: 30px;
  background-color: #4e4d86;
  color: white;
  font-size: 20px;
  padding: 20px 70px;
  border: none;
  transition: 0.5s;
}

.start:hover {
  background-color: #2b3174;
  cursor: pointer;
}

button:focus {
  outline: 0;
}

@media only screen and (min-width: 600px) {
  .text {
    margin: 0px;
    padding-top: 0;
    padding-left: 15%;
    width: 50%;
    color: #212b36;
    font-size: 5.5vw;
    font-weight: bold;
    letter-spacing: -0.5px;
    line-height: 6vw;
  }

  .main {
    background-image: url(../assets/cover.png);
    background-size: 100%;
    background-position: bottom center;
    background-repeat: no-repeat;
  }

  .start {
    font-size: 16px;
    padding: 12px 60px;
  }
}
</style>
