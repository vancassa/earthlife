<template>
	<Category title="Biophilia" description="Plant-based diet is a way of eating that celebrates plant foods and cuts out unhealthy items like added sugars and refined grains." :imgSrc="require('../assets/03_biophilia.png')"></Category>
</template>

<script>
import Category from '@/components/Category.vue'

export default{
	name: 'biophilia',
	components:{
		Category
	}
}

</script>