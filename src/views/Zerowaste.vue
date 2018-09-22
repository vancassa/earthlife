<template>
	<Category title="Zero Waste" description="Zero Waste is a concept that challenges the old way of thinking about waste as something that has no value and to be thrown away." :imgSrc="require('../assets/02_zerowaste.png')"></Category>
</template>

<script>
import Category from '@/components/Category.vue'

export default{
	name: 'zerowaste',
	components:{
		Category
	}
}

</script>