<template>
  <div class="category">
    <Description :title="title" :description="description" :imgSrc="imgSrc">
    </Description>
  </div>
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