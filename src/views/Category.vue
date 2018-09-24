<template>
	<Description :title="title" :description="description" :imgSrc="imgSrc">
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
    this.imgSrc = item.imgSrc;
  }

}

</script>