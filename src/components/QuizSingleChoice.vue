<template>
	<div class="quiz-single">
		<div class="quiz-category">{{category}}</div>
		<div class="quiz-single-qns">{{question}}</div>
		<div v-for="choice in choices">
			<div class="quiz-single-choice"  @click="selected = choice.index"  :class="{'quiz-selected':choice.index == selected}">

				{{choice.content}}

			</div>
		</div>
		
		<button :class="[{'quiz-button-disabled':selected == 0}, {'quiz-button-enabled':selected != 0}]" @click=""><v-icon name="arrow-right"/></button>
	</div>
</template>

<script>
export default{
	// name:'QuizSingle',
	data: function(){
		return{
			selected: 0
		}
	},
	props:{
		category: String,
		question: String,
		choices: Array
	}
}
</script>

<style>

li {
	list-style: none;
}

.quiz-single{
	max-width: 960px;
	padding: 0 36px;
	margin: 0 auto;
	margin-top: 218px;
}

.quiz-category{
	color: #919EAB;
	font-size: 12px;
	letter-spacing: 1.4px;
	line-height: 30px;
}

.quiz-single-qns{
	max-width: 554px;
	color: #212B36;
	font-size: 24px;
	font-weight: 500;
	line-height: 35px;

}

.quiz-single-choice{
	margin-top: 20px;
	padding: 24px;
	max-width: 560px;
	color: #212B36;
	font-size: 16px;
	line-height: 22px;
	background-color: white;
}

.quiz-single-choice:hover{
	cursor: pointer;
}

.quiz-selected{
	background-color: #4E4D86;
	color: white;
}

.quiz-button-enabled{
	height: 52px;
	width: 52px;
	background-color: #4E4D86;
	color: white;
	border-radius: 10000px;
	margin-top: 20px;
}

.quiz-button-disabled{
	height: 52px;
	width: 52px;
	opacity: 0.5;
	background-color: #4E4D86;
	color: white;
	border-radius: 10000px;
	margin-top: 20px;
}

</style>