<template>
	<div class="habits">
    	<div class="global-earthlife-nav">EARTHLIFE</div>
		<p class="heading1">Choose a living habit</p>
		<ol>
			<li>
				<img src="../assets/plantbased.png" />
				<span>Plant Based Diet</span>
			</li>
			<li>
				<img src="../assets/zerowaste.png" />
				<span>Zero Waste</span>
			</li>
			<li>
				<img src="../assets/copositive.png" />
				<span>Biophillia</span>
			</li>
			<li>
				<img src="../assets/advocacy.png" />
				<span>Advocacy</span>
			</li>
			<li>
				<img src="../assets/minimalism.png" />
				<span>Minimalism</span>
			</li>
			<li>
				<img src="../assets/biophilia.png" />
				<span>CO2 Positive</span>
			</li>
		</ol>
	</div>
</template>

<script type="text/javascript"></script>

<style type="text/css">

.habits {
	width: 100%;
    height: 100%;
	background-repeat: no-repeat;
	background-position: left bottom;
	background-size: contain;
}

.heading1 {
	font-size: 24px;	
	font-weight: 500;	
	line-height: 35px;	
	text-align: center;

	margin: 0 24px 75px 24px;
}

span {
	font-size: 16px;
	margin-top: 24px;
	margin-bottom: 24px;
}

img {
	width: 230px;
}

ol {
	list-style: none;
	margin: 0;
	padding: 0;
	display: flex;
    flex-wrap: wrap;
}

span {
	display: block;
}

section {
	padding: 92px 0;
}

li {
		width: 50%;
	}

li img {
	width: 60%;
}



@media (min-width: 500px) {
	.habits {
		background-image: url("../assets/other-1.png");
		margin: auto;
		background-size: 50% auto;
	}

	ol {
		display: flex;
		flex-wrap: wrap;
		margin: 50px auto;
		padding: 0;
		width: 700px;
	}

	li {
		width: 33%;
		box-sizing: border-box;
		margin-bottom: 50px;
	}

	li img {
		width: 70%;
	}

}

</style>