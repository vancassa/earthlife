<template>
	<Description :title="title" :description="description" :imgSrc="require('../assets/06_copositive.png')">
</Description>
  </template>

<script>
import Description from '@/components/Description.vue'

export default{
	name: 'test',
	components:{
		Description
	},
  data: function(){
    return{
      title: '',
      description: '',
      imgSrc: ''
    }
    
  },
  created: function(){
    let pathItem = this.$route.params.category;   //get url from router
    let arrayList = this.$store.state.categories; //get data from store
    let item = arrayList.find(function(element){
      return element.slug === pathItem;
    });

    this.title = item.title;
    this.description = item.description;

  }

}

</script>