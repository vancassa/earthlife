<template>
  <div class="question">
  
    <h1>{{ getData().text }}</h1>

    <div></div>

  </div>
  </template>

<script>

export default{
	name: 'Question',
	components: {
		
	},





  methods: {
    getData: function() {
      let categorySlug = this.$route.params.category;
      let questionID = this.$route.params.id;

      let categories = this.$store.state.categories; 

      let category = categories.find(function(c){
        return c.slug === categorySlug;
      });

      let categoryQuestions = category.questions[questionID-1];
      return categoryQuestions;
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
