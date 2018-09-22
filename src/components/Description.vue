<template>
	<div class="category">
		<div class="back">
			<v-icon name="arrow-left"/>
			<a href="#/menu">Back</a>
		</div>
		
		<div class="wrapper">
			<div class="wrapper-image">
				<img v-bind:src="imgSrc">
				<!-- <img src="../assets/01_plantbased.png"> -->
			</div>
			<div class="wrapper-content">
				<h1 class="title">{{ title }}</h1>
				<p class="description">{{description}}</p>
				<button class="startButton"><v-icon name="arrow-right"/></button>
			</div>
			
		</div>
		
	</div>
</template>

<script>
export default{
	name: "category",
	props: {
		title: String,
		description: String,
		imgSrc: String
	}
}
</script>

<style>

.category{
	padding: 0 20px;
	max-width: 960px;
	/*outline: solid 5px red;*/
	margin: 0 auto;
	margin-top:100px;
	
}

.back {
	height: 22px;
	width: 104px;
	color: #919EAB;
	font-family: Poppins;
	font-size: 20px;
	line-height: 22px;
	margin-bottom: 50px;
}

.back a{
	text-decoration: none;
	color: #919EAB;
	padding-left: 8px;
}


.wrapper{
	display: flex;
	flex-direction: column;

}

.wrapper-content{
	/*outline: solid 1px red;*/
	/*margin: 0 auto;*/
}

.wrapper-image{
	/*margin: 0 auto;*/
}

.wrapper-image img{
	max-width: 100%;
	height: auto;
}

@media only screen and (min-width: 600px) {
.wrapper{
	flex-direction: row;

}

.wrapper-content{
	width: 50%;
	margin: 0 auto;
}

.wrapper-image{
	order: 1;
	margin: 0 auto;
}
}

.title {
	height: 89px;
	width: 460px;
	color: #212B36;
	font-family: Poppins;
	font-size: 52px;
	font-weight: bold;
	letter-spacing: -2px;
	line-height: 83px;
	margin:0;
}

.description {
	height: 148px;
	width: 460px;
	color: #637381;
	font-family: Poppins;
	font-size: 24px;
	line-height: 36px;
}

.startButton {
	height: 52px;
	width: 52px;
	background-color: #4E4D86;
	color: white;
	border-radius: 10000px;
}

img {
	height: 322.5px;
	width: 430px;
	float:right;
}

</style>