<template>
  <div class="quiz-multiple">
    <div v-for="answer in choices">
      <input type="checkbox" :id="answer.text" name="answer"
        :value="answer.text" v-model="inputSelected" />
      <label class="question-answer" :for="answer.text" :class="{'answer-selected': inputSelected.includes(answer.text)}">{{ answer.text }}</label>
    </div>
  </div>     
</template>

<script>
export default{
  name:'QuizMultiChoice',
  props:{
    // category: String,
    // question: String,
    choices: Array
  },

  data: function(){

    var selected = [];
    var indexSelected = [];

    this.choices.forEach((choice, index) => {
      if (choice.selected == true) {
        selected.push(choice.text);
        indexSelected.push(index);
      }
    });

    this.$emit('answer', indexSelected);

    return {
     inputSelected: selected,
     choicesCopy: this.choices
    }

  },
  
  watch: {
    inputSelected: function(newAnswer) {
      var answers = [];
      newAnswer.forEach(a => {
        var index = this.choices.findIndex(x => x.text == a);
        answers.push(index);
      })
      
      this.$emit('answer', answers);
    }
  }
}
</script>

<style scoped>
input[type="checkbox"]{
  display:none;
}

.question-answer {
  margin-top: 20px;
  padding: 24px;
  max-width: 560px;
  color: #212B36;
  font-size: 16px;
  line-height: 22px;
  background-color: white;
  display: block;
}

.question-answer:hover{
  cursor: pointer;
}

.answer-selected{
  background-color: #4E4D86;
  color: white;
}
</style>