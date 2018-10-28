<template>
  <div id="result">
    <div class="not-fixed">
      <div class="result-header">Your Result</div>
      <img class="result-image" src="../assets/images/result/01_result_plantbased.jpg"/>
      <div class="buttons">
        <a class="social-buttons">
          <v-icon name="download"/>
        </a>
        <a class="social-buttons">
          <v-icon name="brands/facebook-f"/>
        </a>
      </div>
      <div class="result-text">Here's how you did</div>
      <div class="habits-columns">
          <div class="habit-wrapper">
            <img class="habit-img" src="../assets/images/buttons/plant-based.png"/>
            <div class="habit-name">PLANT BASED</div>
          </div>
          <div class="habit-wrapper">
            <img class="habit-img" src="../assets/images/buttons/zero-waste.png"/>
            <div class="habit-name">ZERO WASTE</div>
          </div>
          <div class="habit-wrapper">
            <img class="habit-img" src="../assets/images/buttons/biophilia.png"/>
            <div class="habit-name">BIOPHILIA</div>
          </div>
          <div class="habit-wrapper">
            <img class="habit-img" src="../assets/images/buttons/advocacy.png"/>
            <div class="habit-name">ADVOCACY</div>
          </div>
          <div class="habit-wrapper">
            <img class="habit-img" src="../assets/images/buttons/minimalism.png"/>
            <div class="habit-name">MINIMALISM</div>
          </div>
          <div class="habit-wrapper">
            <img class="habit-img" src="../assets/images/buttons/co2.png"/>
            <div class="habit-name">CO2 POSITIVE</div>
          </div>  
      </div>
      <div class="graph">
        <div class="graph-inner">
          <div class="habits-columns baseline">
            <div class="habit-wrapper">
              <div style="height: 200px;" class="bar positive"></div>
            </div>
            <div class="habit-wrapper">
              <div style="height: 100px;" class="bar"></div>
            </div>
            <div class="habit-wrapper">
              <div style="height: 75px;" class="bar positive"></div>
            </div>
            <div class="habit-wrapper">
              <div style="height: 10px;" class="bar"></div>
            </div>
            <div class="habit-wrapper">
              <div style="height: 220px;" class="bar positive"></div>
            </div>
            <div class="habit-wrapper">
              <div style="height: 56px;" class="bar"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
      <div class="step2-rectangle">
          <span class="step2-text">STEP 2</span>
          <span class="step2-text-body">Get some actions on how to level up your sustainable living!</span>
          <div class="get-actions-bttn">
            <button class="get-actions">Get actions<v-icon name="arrow-right" class="arrow-icon"/></button>
          </div>
      </div>
  </div>
</template>

<script>
export default{
  name:'Result',
  components: {

  },
}
</script>

<style>
.not-fixed {
  position: absolute;
  width: 100%;
}
.result-header {
  color: #403E3D; 
  font-family: Futura;    
  font-size: 32px;    
  line-height: 42px;  
  text-align: center;
  padding-top: 73px;
}

.result-image {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 45%;
  padding-top: 37px;
  padding-bottom: 37px;
}

.buttons {
  text-align: center;
}

.social-buttons {
  margin: 10px;
  display: inline-block;
  height: 48px;
  width: 48px;
  border-radius: 24px;
  background-color: #DFE3E8;
  padding-top: 14px; 
}

.result-text {
  color: #403E3D; 
  font-family: Poppins;   
  font-size: 24px;    
  font-weight: 500;   
  line-height: 35px;  
  text-align: center;
  padding-top: 88.5px;
}

.habits-columns {
  display: flex;
  text-align: center;
  justify-content: center;
  padding-top: 71.5px;
  max-width: 800px;
  margin: 0 auto;
}

.habit-wrapper {
  display: inline-block;
  padding: 0 2%;
  flex: 1;
}

.habit-name {
  color: #403E3D; 
  font-size: 12px;  
  letter-spacing: 1.4px;  
  line-height: 30px;  
}

.habit-img {
  height: auto;
  width: 64px;
}

.graph {
  border: 1px solid black;
  height: 500.5px;
  position: relative;
}

.graph-inner {
  position: absolute;
  top: 50%;
  width: 100%;
}

.baseline {
  padding-top: 0;
  border: 0.5px solid #C4CDD5;
}

.baseline .habit-wrapper {
  position: relative;
}

.bar {
  background-color: #EE6F84;
  position: absolute;
  width: 64px;
  left: 50%;
  margin-left: -32px;
  border-radius: 0 0 4px 4px;
}

.positive {
  bottom: 0;
  background-color: #70C48B;
  border-radius: 4px 4px 0 0;
}

.step2-rectangle {
  background-color: #F4F6F8;  
  box-shadow: 0 -1px 2px 0 rgba(0,0,0,0.05);
  height: 150px;  
  width: 1440px;
  padding: 43px 250px 43px 230px;
  position: fixed;
  bottom: 0;
}

.step2-text {
  color: #637381; 
  font-size: 16px;  
  font-weight: 500; 
  letter-spacing: 4.1px;  
  line-height: 25px;
  display: block;
}

.step2-text-body {
  color: #212B36; 
  font-size: 20px;  
  font-weight: 500; 
  line-height: 30px;
}

.get-actions-bttn {
 /* margin-top: 55px;
  padding-left: 15%;*/
  display: inline;
  padding-left: 175px;
}

.get-actions {
  color: white;
  font-size: 16px;
  border: none;
  transition: 0.5s;
  line-height: 25px;  
  height: 48px; 
  width: 165px; 
  border-radius: 24px;  
  background-color: #4E4D86;
}

.get-actions:hover {
  background-color: #2b3174;
  cursor: pointer;
}

.arrow-icon {
  height: 10px;
  width: auto;
  padding-left: 10px;
}

button:focus {
  outline: 0;
}

@media (max-width: 500px) {
  .habit-img {
    height: auto;
    width: 40px;
  }
  .habit-name {
    font-size: .5em;
  }
  .habits-bar {
    padding: 0 20px;
  }
}
</style>
