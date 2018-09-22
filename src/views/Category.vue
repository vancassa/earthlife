<template>
	<Description :title="title" description="Zero Waste is a concept that challenges the old way of thinking about waste as something that has no value and to be thrown away." :imgSrc="require('../assets/06_copositive.png')">
</Description>
  </template>

<script>
import Description from '@/components/Description.vue'

export default{
	name: 'test',
	components:{
		Description
	},
  computed: {
    title () {
      let pathItem = this.$route.params.category;
      let arrayList = this.$store.state.categories;
      let item = arrayList.find(function(element){
        return element.slug === pathItem;
      })
      return item.title;
    }
  }

}

</script>