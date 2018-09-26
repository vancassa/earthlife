<template>
  <div class="category">
    <Description v-if="startQuiz === false" :title="title" :description="description" :imgSrc="imgSrc" @startQuiz="onStartQuiz">
    </Description>
    
    <QuizSingleChoice v-if="startQuiz === true" :category="title" :question="question" :choices="choices">
    </QuizSingleChoice>

  </div>
  </template>

<script>
import Description from '@/components/Description.vue'
import QuizSingleChoice from '@/components/QuizSingleChoice.vue'

export default{
	name: 'test',
	components:{
		Description,
    QuizSingleChoice
	},

  data: function(){
    return{
      title: '',
      description: '',
      imgSrc: '',
      startQuiz: false,
      question: 'When eating out, I usually...',
      choices: [
      {
        index: 1,
        content: 'Choose a restaurant that doesn\'t use disposables or bring my own reusable servingware and cutlery.',
        score: 10
      },
      {
        index: 2,
        content: 'Don\'t really think about the waste created from eating there.',
        score: 20
      }
      ]
    }
    
  },

  methods: {
    getData: function(){
      let pathItem = this.$route.params.category;   //get url from router
      let arrayList = this.$store.state.categories; //get data from store
      let item = arrayList.find(function(element){
        return element.slug === pathItem;
      });

      this.title = item.title;
      this.description = item.description;
      this.imgSrc = item.imgSrc;
    },

    onStartQuiz: function(){
      this.startQuiz = true;
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
/*dummy background color*/
.category{
  background-color: #DFE3E8; 
  overflow: hidden;
  padding-bottom: 200px;
}
</style>
