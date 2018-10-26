<template>
  <div class="question-wrapper">
    <div class="bg-img"><img src="../assets/other-3.png" /></div>
    <div class="question">
      <div class="question-category">{{ question.title }}</div>
      <div class="question-text">{{ question.questionText }}</div>
        <div v-if="question.type === 'Single choice'">
          <QuizSingleChoice :choices="question.answers"></QuizSingleChoice>
        </div>
        <div v-else-if="question.type === 'Multiple choice'">
          <QuizMultiChoice :choices="question.answers"></QuizMultiChoice>
        </div> 
      <button class='button-disabled'><v-icon name="arrow-right"/></button>
    </div>
    <div class="habit-tracker">
      <img class="habit-category" src="../assets/images/buttons/plant-based.png">
      <img class="habit-category" src="../assets/images/buttons/zero-waste.png">
      <img class="habit-category" src="../assets/images/buttons/advocacy.png">
      <img class="habit-category" src="../assets/images/buttons/co2.png">
      <img class="habit-category" src="../assets/images/buttons/minimalism.png">
      <img class="habit-category" src="../assets/images/buttons/biophilia.png">
    </div>
  </div>
</template>

<script>

import QuizSingleChoice from '@/components/QuizSingleChoice.vue'
import QuizMultiChoice from '@/components/QuizMultiChoice.vue'
import QuizSlider from '@/components/QuizSlider.vue'

  export default{
   name: 'Question',
   components: {
     QuizSingleChoice,
     QuizMultiChoice,
     QuizSlider
   },
   data: function(){
    return {
     selected: 0,
     completed: ['plant-based', 'co2'],
     inputSelected: ""
   }
 },

 computed: {
  question: function() {
    let categorySlug = this.$route.params.category;
    let questionID = this.$route.params.id;
    let categories = this.$store.state.categories; 
    let questionDetails = this.$store.state.questions;

    let category = categories.find(function(c){
      return c.slug === categorySlug;
      
    });

    let categoryQuestion = questionDetails[category.questions[questionID-1]];
    let categoryAnswers = questionDetails[category.questions[questionID-1]].options;

    return {
      title: category.title,
      questionText: categoryQuestion.text,
      type: categoryQuestion.type,
      answers: categoryAnswers
    };
  },

  answered: function() {
    return true; //dummy
  },

  nextQuestionLink: function() {
    return String(Number(this.$route.params.id)+1)
  },

  buttonState : function() {
    if (this.answered) {
      return "button-enabled";
    }
    else {
      return "button-disabled";
    }
  },

  habitTracker: function() {

  }

},

methods: {
  select: function(answer){
    if(this.question.type == "Single choice"){
      if(!answer.selected){
        this.question.answers.forEach(a => {
          if(a === answer){
            a.selected = true;
          }
          else{
            a.selected = false;
          }
        });
      }
    }
    else if(this.question.type == "Multiple choice"){
      answer.selected = !answer.selected;
    }
    
    // console.log(this.$store.state.categories[0].questions[0].answers[0].selected);
  }
},

created: function(){
  // this.getData();
},


watch:{
    '$route'(to, from){   //watch url change
     // this.getData();
   }

 }
}

</script>

<style>
.question {
  max-width: 960px;
  padding: 0 36px;
  margin: 0 auto;
}

.question-wrapper {
  background-color: #DFE3E8; 
  
  padding-bottom: 200px;
}

.bg-img {
  background-repeat: no-repeat;
  background-position: right top;
  overflow: hidden;
  -moz-transform: scaleX(-1);
  -o-transform: scaleX(-1);
  transform: scaleX(-1);
  filter: FlipH;
  -ms-filter: "FlipH";
}

.question-category {
  color: #919EAB;
  font-size: 12px;
  letter-spacing: 1.4px;
  line-height: 30px;
  text-transform: uppercase;
}

.question-text {
  max-width: 554px;
  color: #212B36;
  font-size: 24px;
  font-weight: 500;
  line-height: 35px;
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

.button-enabled{
  height: 52px;
  width: 52px;
  background-color: #4E4D86;
  color: white;
  border-radius: 10000px;
  margin-top: 60px;
  cursor: pointer;
}

.button-disabled {
  height: 52px;
  width: 52px;
  opacity: 0.5;
  background-color: #4E4D86;
  color: white;
  border-radius: 10000px;
  margin-top: 60px;
  pointer-events: none;
}

.habit-tracker {
  margin-right: 36px;
  margin-bottom: 36px;
  float: right;
}

.habit-category {
  width: 64px;
  height: auto;
  margin-left: 20px;
  filter: grayscale(100%);
}

.habit-category.finished {
  width: 64px;
  height: auto;
  margin-left: 20px;
  filter: grayscale(0%);
}

label {
  margin: 0;
  padding: 0;
}

input[type="radio"] {
  display:none;
}
</style>
