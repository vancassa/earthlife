<template>
  <div class="quiz-slider">
    <input type="range" min="0" :max="choices.length-1" v-model="inputSelected"/>
  </div>  
</template>

<script>
export default {
  name: 'QuizSlider',
  props: {
    // category: String,
    // question: String,
    choices: Array
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