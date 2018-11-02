<template>
  <div class="quiz-slider">
    <input type="range" min="0" :max="choices.length-1" v-model="inputSelected"/>
    <div class="range-label">
      <div class="range-point" v-for="choice in choices">{{choice.text}}</div>
    </div>
  </div>  
</template>

<script>
export default {
  name: 'QuizSlider',
  props: {
    // category: String,
    // question: String,
    choices: Array,
    labeled: Boolean
  },
  data: function() {
    let selected = 0;
    const indexSelected = [];

    this.choices.forEach((choice, index) => {
      if (choice.selected == true) {
        selected = index;
        indexSelected.push(index);
      }
    });

    this.$emit('answer', indexSelected);
    return {
      inputSelected: selected
    };
  },

  watch: {
    inputSelected: function(newAnswer, oldAnswer) {
      this.$emit('answer', newAnswer);
    }
  }
};
</script>

<style>
.quiz-slider {
  margin-top: 60px;
  max-width: 500px;
  position: relative; /*for the input::after*/
}

input[type='range'] {
  -webkit-appearance: none;
  width: 100%;
  margin: 0px;
}

input[type='range']:focus {
  outline: none; /* Removes the blue border. */
}

/*To hide the edge of the input range*/
input[type='range']::before,
input[type='range']::after {
  content: '';
  position: absolute;
  background: #dfe3e8;
  height: 18px;
  width: 18px;
}

input[type='range']::after {
  right: 0;
}

input[type='range']::-webkit-slider-runnable-track {
  -webkit-appearance: none;
  box-sizing: border-box;
  height: 4px;
  width: 100%;
  background: #c4cdd5;
}

input[type='range']::-webkit-slider-thumb {
  -webkit-appearance: none;
  margin-top: -18px;
  height: 36px;
  width: 36px;
  border-radius: 50px;
  background-color: #ffffff;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.2);
  position: relative;
  right: 0;
  z-index: 2;
}

.range-label {
  display: flex;
  justify-content: space-between; /*to space out evenly*/
  position: relative;
  margin-top: 20px;
  margin-left: 18px;
  width: calc(100% - 36px);
  z-index: 1;
}

.range-point {
  text-align: center;
  /*the magic to make the dot to be at the center of the text*/
  width: 0;
  white-space: nowrap;
  display: flex;
  justify-content: center;
}

.range-point:before {
  position: absolute;
  content: '';
  margin-top: -33px;
  height: 8px;
  width: 8px;
  border-radius: 50%;
  background-color: #c4cdd5;
}
</style>
