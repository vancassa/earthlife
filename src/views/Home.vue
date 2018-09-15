
<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
	<div class="nav">
		<div class="top-banner">
			<div class="top-adjust"><a href="www.google.com">Visit the Earthfest site</a></div>
		</div>
		<div class="earthlife">
			<div class="top-adjust">EARTHLIFE</div>
		</div>
	</div>
		<div class ="main">
			<p class="slogan">
				<p class="text">Discover happiness through responsible living.</p>
			</p>
			<button class="start">Start</button>
		</div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
<style type="text/css">
@import url('https://fonts.googleapis.com/css?family=Poppins');
	body {
	margin: 0;
	padding: 0;
	font-family: 'Poppins', sans-serif;
}

.top-adjust {
	padding-left: 15%;
	/*padding: 20px 60px 20px 60px;
	background-color: white;
	height: 100%;
	overflow: hidden;*/

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
	background-size: cover;
	/*border-top: 1px solid black; */
	padding-bottom: 100px;
}

a {
	color: black;
}

a:hover {
	color: lightgrey;
}

.slogan {
	padding-top: 50px;
}

.text {
	margin-top: 10px;
	padding-left: 100px;
	font-family: "Arial Black";
	font-size: 60px;
	color: grey;
	width: 40%;
	line-height: 1.2;
}

.start {
	margin-left: 100px;
	background-color: gray;
	color: white;
	font-size: 15px;
	padding: 10px 45px 10px 45px;
	border-radius: 9999999px;
}

</style>
