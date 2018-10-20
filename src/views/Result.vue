<template>
  <div id="result">
      <div class="global-earthlife-nav">EARTHLIFE</div>
      <div class="result-header">Your Result</div>
      <img class="result-image" src="../assets/images/result/01_result_plantbased.jpg"/>
      <div class="bttns">
          <div class="download-bttn"><a>download</a></div>
          <div class="fb-bttn"><a>facebook</a></div>
      </div>
      <div class="result-text">Here's how you did</div>
      <div class="habits-bar">
          <div class="habit-wrapper">
              <img class="habit-img" src="../assets/images/buttons/plant-based.png"/>
          <div class="habit-name">Plant Based</div>
          </div>
          <div class="habit-wrapper">
              <img class="habit-img" src="../assets/images/buttons/zero-waste.png"/>
          <div class="habit-name">Zero Waste</div>
          </div>
          <div class="habit-wrapper">
              <img class="habit-img" src="../assets/images/buttons/biophilia.png"/>
          <div class="habit-name">Biophilia</div>
          </div>
          <div class="habit-wrapper">
              <img class="habit-img" src="../assets/images/buttons/advocacy.png"/>
          <div class="habit-name">Advocacy</div>
          </div>
          <div class="habit-wrapper">
              <img class="habit-img" src="../assets/images/buttons/minimalism.png"/>
          <div class="habit-name">Minimalism</div>
          </div>
          <div class="habit-wrapper">
              <img class="habit-img" src="../assets/images/buttons/co2.png"/>
          <div class="habit-name">CO2 Positive</div>
          </div>  
      </div>
      <div class="graph">Graph goes here</div>
      <div class="step2">
          <span>Step 2</span>
          <span>Get some actions on how to level up your sustainable living!</span>
          <div class="get-actions-bttn">button goes here</div>
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
.result-header {
  color: #403E3D; 
  font-family: Futura;    
  font-size: 32px;    
  line-height: 42px;  
  text-align: center;
}

.result-image {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 45%;
}

.bttns {
    text-align: center;
}

.download-bttn {
  margin: 10px;
  display: inline-block;
}

.fb-bttn {
  margin: 10px;
  display: inline-block;
}

.result-text {
  color: #403E3D; 
  font-family: Poppins;   
  font-size: 24px;    
  font-weight: 500;   
  line-height: 35px;  
  text-align: center;
}

.habits-bar {

}

.habit-wrapper {
    display: inline-block;
}

.habit-name {
}

.habit-img {
    height: auto;
    width: 25%;
}

.graph {

}

.step2 {

}

.get-actions-bttn {

}
</style>
