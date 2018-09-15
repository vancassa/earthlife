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

.steps {
  text-align: center;
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
}

span {
  display: block;
}

section {
  margin: 92px 0;
}

.step2-image {
  margin-bottom: 70px;
}

.button {
  display: inline-block;
  text-decoration: none;
  padding: 12px 42px;
  background-color: #4E4D86;
  color: white;
  border-radius: 50px;
}

</style>


