<template>
  <div class="steps">
    <div class="steps-containers">
      <div class="step1">
        <h1>Step 1</h1>
        <p>See how you're doing based on the 6 living habits of Earthlife</p>
        <router-link to="habits" class="button">Start Quiz <v-icon class='arrow' name="arrow-right"/></router-link>
      </div>
      <div class="step2">
        <h1>Step 2</h1>
        <p>Get some actions on how to level up your sustainable living!</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'steps',
  components: {}
};
</script>

<style scoped>
.main {

}
.steps {
  background-color: #f4f6f8;
  text-align: left;
  background-image: url('../assets/Group 2.png');
  background-repeat: no-repeat;
  background-position: center bottom;
  background-size: contain;
  width: 100%;
  display: static;
  height: 800px;
  flex: 0;
}

.steps-containers {
  padding: 15px 15%;
  font-size: 20px;
  line-height: 30px;
  font-weight: 500;
}

h1 {
  font-size: 16px;
  text-transform: uppercase;
  margin: 24px;
  color: #637381;
  letter-spacing: 4.1px;
  font-weight: 500;
  line-height: 25px;
}

img {
  width: 230px;
}

ol {
  list-style: none;
  margin: 0;
  padding: 0;
}

span {
  display: block;
}

.step1 {
  margin-top: 20px;
  background-color: #ffffff;
  padding: 15px;
}

.step2 {
  padding: 20px 20px;
}

p {
  padding-left: 20px;
}

.button {
  display: inline-block;
  text-decoration: none;
  padding: 12px 50px 12px 42px;
  background-color: #4e4d86;
  color: white;
  border-radius: 50px;
  font-weight: normal;
}
.arrow {
  position: absolute;
  margin: -23px 0px 0px 102px;
}

@media (min-width: 500px) {
  .steps {
    background-size: 100%;
    height: 100%;
  }

  .steps-containers {
    padding: 50px 25%;
    width: 100%;
    min-height: 100vh;
  }

  ol {
    display: flex;
    flex-wrap: wrap;
    margin: 0;
    padding: 0;
  }

  li {
    padding: 0 20px;
    width: 33%;
    box-sizing: border-box;
  }

  li img {
    width: 100%;
  }
}
</style>
