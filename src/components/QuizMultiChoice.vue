<template>
  <div class="quiz-multiple">
    <div v-for="answer in choices">
      <input type="checkbox" :id="answer.text" name="answer"
        :value="answer.text" v-model="inputSelected" >
      </input>
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
    return {
     inputSelected: []
   }

  },
  
  watch: {
    inputSelected: function(newAnswer) {
      var answers = [];
      newAnswer.forEach(a => {
        var index = this.choices.findIndex(x => x.text == a);
        answers.push(index);
      })
      
      this.$emit('answering', answers);
    }
  }
}
</script>

<style>
input[type="checkbox"]{
  display:none;
}
</style>