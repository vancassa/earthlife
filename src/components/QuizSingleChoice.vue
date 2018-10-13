<template>
	<div class="quiz-single">
		<div v-for="answer in choices">
			<input type="radio" :id="answer.text" name="answer"
				:value="answer.text" v-model="inputSelected" >
			</input>
			<label class="question-answer" :for="answer.text" :class="{ 'answer-selected': inputSelected == answer.text}">{{ answer.text }}</label>
   	</div>
	</div>     
</template>

<script>
export default{
	name:'QuizSingleChoice',
	props:{
		// category: String,
		// question: String,
		choices: Array
	},
	data: function(){
    return {
     inputSelected: ""
   }
	}
}
</script>