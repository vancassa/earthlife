<template>
<div class="question-wrapper">
  <div class="question">
  
    <div class="question-category">{{ question.title }}</div>
    <div class="question-text">{{ question.questionText }}</div>
    <ul>
      <li v-for="answer in question.answers"  class="question-answer">
        <span>{{ answer.text }}</span>
      </li>
    </ul>
    <button class='button-disabled'><v-icon name="arrow-right"/></button>

  </div>
  </div>
  </template>

<script>

export default{
	name: 'Question',
	components: {

	},
  data: function(){
		return{
			selected: 0
		}
	},

  computed: {
    question: function() {
      let categorySlug = this.$route.params.category;
      let questionID = this.$route.params.id;
      let categories = this.$store.state.categories; 

      let category = categories.find(function(c){
        return c.slug === categorySlug;
      
      });

      let categoryQuestion = category.questions[questionID-1];
      let categoryAnswers = category.questions[questionID-1].answers;

      return {
        title: category.title,
        questionText: categoryQuestion.text,
        answers: categoryAnswers
      };
    }
  },

  created: function(){
    this.getData();
  },


  watch:{
    '$route'(to, from){   //watch url change
       this.getData();
    }
    
  }
}

</script>

<style>

.question {
	max-width: 960px;
	padding: 0 36px;
	margin: 0 auto;
	margin-top: 218px;
}

.question-wrapper {
  background-color: #DFE3E8; 
  overflow: hidden;
  padding-bottom: 200px;
}

.question-category {
	color: #919EAB;
	font-size: 12px;
	letter-spacing: 1.4px;
	line-height: 30px;
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
}

.question-answer:hover{
	cursor: pointer;
}

.button-enabled{
	height: 52px;
	width: 52px;
	background-color: #4E4D86;
	color: white;
	border-radius: 10000px;
	margin-top: 20px;
}

.button-disabled {
	height: 52px;
	width: 52px;
	opacity: 0.5;
	background-color: #4E4D86;
	color: white;
	border-radius: 10000px;
	margin-top: 20px;
}

</style>
