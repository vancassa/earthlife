<template>
  <div class="question">
    <h5>Zero Waste</h5>
    <h1>When eating out</h1>
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

      let categoryQuestions = category.questions[questionID-1].text;
      console.log(categoryQuestions);
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
