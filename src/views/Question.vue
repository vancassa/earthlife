<template>
  <div class="question">
  
    <div>{{ question.title}}</div>
    <h1>{{ question.questionText}}</h1>
    <ul id="example">
      <li v-for="answer in question.answers">
        {{ answer.text }}
      </li>
    </ul>

<!--     <div>{{getData().answerText}}</div>
 -->
    <!-- <div>{{ getData().answers[0].text }}</div>
    <div>{{ getData().answers[1].text }}</div> -->

  </div>
  </template>

<script>

export default{
	name: 'Question',
	components: {
		
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

</style>
