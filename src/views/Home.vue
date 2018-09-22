
<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
	<div class="nav">
		<div class="top-banner">
			<div class="top-adjust"><a href="www.google.com">Visit the Earthfest site <v-icon class='arrow' name="arrow-right"/></a></div>
		</div>
		<div class="earthlife">
			<div class="top-adjust">EARTHLIFE</div>
		</div>
	</div>

	<div class ="main">
		<div class="slogan">
			<h1 class="text">Discover happiness through responsible living</h1>
		</div>
		<div class="button-start">
			<a href="#/steps"><button class="start">Start</button></a>
		</div>
	</div>

  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
  }
}
</script>
<style type="text/css">
@import url('https://fonts.googleapis.com/css?family=Poppins:400,700,800,900');

html{
	height: 100%;
}

body {
	margin: 0;
	padding: 0;
	font-family: 'Poppins', sans-serif;
	font-style: normal;
	height: 100%;
}

.home{
	height: 100%;
	display: flex;
	flex-direction: column;
	min-height: 800px;
}

@media(max-width: 480px) {
	.home{
		min-height: 850px;
	}
}

.top-adjust {
	padding-left: 15%;
}

.arrow {
	margin-left: 8px;
	height: 12px;
}

.earthlife {
	padding: 20px 0;
	color: #212B36;
	font-size: 16px;	
	letter-spacing: 3px;	
	line-height: 25px;
	box-shadow: 0 1px 2px 0 rgba(0,0,0,0.05);
}

.top-banner {
	background-image: url(../assets/header_strip.jpg);
	padding: 10px 0;
	font-size: 16px;	
	line-height: 25px;
}



.top-banner a {
	color: #ffffff;
	text-decoration: none;
}


.main {
	background-image: url(../assets/cover.png);
	background-position: bottom center;
	background-repeat: no-repeat;
	flex: 1;
	background-size: 160%;
}

a {
	color: black;
}

a:hover {
	color: lightgrey;
}

.slogan {
	padding-top: 35px;

}

.text {
	margin: 0px;
	padding-top: 15%;
	padding-left: 15%;	
	width: 75%;

	color: #212B36;	
	font-size: 50px;	
	font-weight: bold;	
	letter-spacing: -0.25px;	
	line-height: 60px;

}

.button-start{
	margin-top: 55px;
	padding-left: 15%;
}

.start {
	border-radius: 30px;	
	background-color: #4E4D86;
	color: white;
	font-size: 20px;
	padding: 20px 70px;
	border:none;
	transition: 0.5s;
}

.start:hover{
	background-color: #2B3174;
	cursor: pointer;
}

button:focus{
	outline: 0;
}

@media only screen and (min-width: 600px) {
    .text{
    	margin: 0px;
    	padding-top: 0;
		padding-left: 15%;	
		width: 50%;

		color: #212B36;	
		font-size: 5.5vw;	
		font-weight: bold;	
		letter-spacing: -0.5px;	
		line-height: 6vw;
    }

    .main {
		background-image: url(../assets/cover.png);
		background-size: 100%;
		background-position: bottom center;
		background-repeat: no-repeat;
		flex: 1;
	}
	.start {
		font-size: 16px;
		padding: 12px 60px;
	}
}

</style>
