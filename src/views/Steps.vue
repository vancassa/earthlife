<template>
  <div class="steps">
  <h1>Step 1</h1>
  <p>See how you're doing based on the 6 living habits of Earthlife</p>
  <ol>
      <li>
        <img src="../assets/plantbased.png" />
        <span>Plant Based Diet</span>
      </li>
      <li>
        <img src="../assets/zerowaste.png" />
        <span>Zero Waste</span>
      </li>
      <li>
        <img src="../assets/biophilia.png" />
        <span>Biophillia</span>
      </li>
      <li>
        <img src="../assets/advocacy.png" />
        <span>Advocacy</span>
      </li>
      <li>
        <img src="../assets/minimalism.png" />
        <span>Minimalism</span>
      </li>
      <li>
        <img src="../assets/copositive.png" />
        <span>CO2 Positive</span>
      </li>
    </ol>

  <section>
    <h1>Step 2</h1>
      <p>Get some actions on how to level up your sustainable living!</p>
      <img class="step2-image" src="../assets/todo.png" />
      <a href="#" class="button">Start Quiz</a>
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

@import url('https://fonts.googleapis.com/css?family=Poppins:400,500,700,800,900');

.steps {
  text-align: center;
  background-image: url("../assets/other-1.png");
  background-repeat: no-repeat;
  background-position: left bottom;
  background-size: contain;
}

h1 {
  font-size: 12px;
  text-transform: uppercase;
  margin: 24px;
  color: #637381;
  letter-spacing: 3px;
}

p {
  font-size: 16px;
  margin: 0 24px 24px 24px;
  line-height: 1.5;
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
  padding: 92px 0;
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



@media (min-width: 500px) {
.steps {
  width: 900px;
  margin: auto;
  background-size: 50% auto;
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

  .step2-image {
    width: 50%;
  }

}

</style>


