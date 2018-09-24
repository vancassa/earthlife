<template>
  <div class="steps">
    <div class="step1">
      <h1>Step 1</h1>
      <p>See how you're doing based on the 6 living habits of Earthlife</p>
      <a href="#/habits" class="button" >Start Quiz <v-icon class='arrow' name="arrow-right"/></a>
    </div>
    <section>
      <h1>Step 2</h1>
      <p>Get some actions on how to level up your sustainable living!</p>
    </section>
  </div>
</template>

<script>

  export default {
    name: 'home',
    components: {

    }
  }
</script>

<style>

html {
  /*background-color: #f4f6f8;*/
}

.steps {
  background-color: #f4f6f8;
  text-align: left;
  background-image: url("../assets/Group 2.png");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center bottom;
  background-size: 100%;
  width: 100%;
  height: 100%;
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

p {
  font-size: 20px;
  margin: 0 24px 24px 24px;
  line-height: 30px;
  font-weight: 500;
}


span {
  font-size: 16px;
  margin-top: 24px;
  margin-bottom: 24px;
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

section {
  padding: 50px 0;
}

.step2-image {
  margin-bottom: 70px;
  display: block;
  width: 80%;
  margin: 70px auto;
  
}

.button {
  display: inline-block;
  text-decoration: none;
  padding: 12px 42px;
  background-color: #4E4D86;
  color: white;
  border-radius: 50px;
}

.step1 {
    background-color: #FFFFFF;
    padding: 20px 20px;
    width: 50%;
}



@media (min-width: 500px) {
  .steps {
    background-size: 100%;
    padding: 50px 25% 50px 25%;
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


