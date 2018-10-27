<template>
  <div class="question-wrapper">
    <ProgressBar :progress="question.progress"></ProgressBar>
  <a href="#/habits"><button class="back-menu">Return to menu</button></a>
    <div class="question">
      <div class="question-category">{{ question.title }}</div>
      <div class="question-text">{{ question.questionText }}</div>
        <div v-if="question.type === 'Single choice'">
          <QuizSingleChoice :choices="question.answers" @answer="getAnswers" :key="question.id"></QuizSingleChoice>
        </div>
        <div v-else-if="question.type === 'Multiple choice'">
          <QuizMultiChoice :choices="question.answers" @answer="getAnswers" :key="question.id"></QuizMultiChoice>
        </div> 

        <button class="submit-button" @click="submit" :disabled="!answered">
          <v-icon class="arrow" name="arrow-right"/>
        </button>

    </div>
    <div class="habit-tracker">
      <img class="habit-category" src="../assets/images/buttons/plant-based.png">
      <img class="habit-category" src="../assets/images/buttons/zero-waste.png">
      <img class="habit-category" src="../assets/images/buttons/advocacy.png">
      <img class="habit-category" src="../assets/images/buttons/co2.png">
      <img class="habit-category" src="../assets/images/buttons/minimalism.png">
      <img class="habit-category" src="../assets/images/buttons/biophilia.png">
    </div>
  </div>
</template>

<script>
import QuizSingleChoice from '@/components/QuizSingleChoice.vue';
import QuizMultiChoice from '@/components/QuizMultiChoice.vue';
import QuizSlider from '@/components/QuizSlider.vue';
import ProgressBar from '@/components/ProgressBar.vue';

export default {
  name: 'Question',
  components: {
    QuizSingleChoice,
    QuizMultiChoice,
    QuizSlider,
    ProgressBar
  },
  data: function() {
    return {
      selected: 0,
      completed: ['plant-based', 'co2'],
      answers: []
    };
  },

  computed: {
    question: function() {
      let categorySlug = this.$route.params.category;
      let questionID = this.$route.params.id;
      let categories = this.$store.state.categories;
      let questionDetails = this.$store.state.questions;

      let category = categories.find(function(c) {
        return c.slug === categorySlug;
      });

      let categoryQuestion =
        questionDetails[category.questions[questionID - 1]];
      let categoryAnswers =
        questionDetails[category.questions[questionID - 1]].options;
      let numberOfQuestions = category.questions.length;
      let categoryProgress =
        100 * (Number(questionID) / category.questions.length);

      return {
        id: category.questions[questionID - 1],
        title: category.title,
        questionText: categoryQuestion.text,
        type: categoryQuestion.type,
        answers: categoryAnswers,
        progress: categoryProgress
      };
    },

    answered: function() {
      if (this.answers.length == 0) {
        return false;
      } else {
        return true;
      }
    },

    nextQuestionLink: function() {
      return String(Number(this.$route.params.id) + 1);
    },

    habitTracker: function() {}
  },

  methods: {
    getAnswers: function(answer) {
      console.log(answer);
      this.answers = answer;
    },

    submit: function() {
      console.log(this.answers);

      //Update value in store
      this.$store.state.questions[this.question.id].options.forEach(
        (option, index) => {
          const selected = this.answers.includes(index);
          this.$store.state.questions[this.question.id].options[
            index
          ].selected = selected;
        }
      );

      //store value is not updated in vue-devtools?
      //console.log(this.$store.state.questions[this.question.id].options[0].selected);

      //Go to next question
      this.$router.push({
        name: 'question',
        params: {
          category: this.$route.params.category,
          id: this.nextQuestionLink
        }
      });
    }
  },

  created: function() {
    // this.getData();
  },

  watch: {}
};
</script>

<style scoped>
.back-menu {
  height: 50px;
  width: 160px;
  font-size: 16px;
  border-radius: 50px;
  margin-top: 50px;
  margin-left: 950px;
  padding: 0;
  background-color: white;
  border: none;
  color: #454f5b;
}

.question {
  max-width: 960px;
  padding: 0 36px;
  margin: 0 auto;
  margin-top: 70px;
}

.question-wrapper {
  background-image: url(../assets/other-3.png);
  background-repeat: no-repeat;
  background-position: right top;
  background-color: #dfe3e8;
  overflow: hidden;
}

.question-category {
  color: #919eab;
  font-size: 12px;
  letter-spacing: 1.4px;
  line-height: 30px;
  text-transform: uppercase;
}

.question-text {
  max-width: 554px;
  color: #212b36;
  font-size: 24px;
  font-weight: 500;
  line-height: 35px;
}

.submit-button {
  height: 52px;
  width: 52px;
  background-color: #4e4d86;
  color: white;
  border-radius: 10000px;
  margin-top: 60px;
  cursor: pointer;
}

.submit-button[disabled] {
  opacity: 0.5;
  background-color: #4e4d86;
  cursor: default;
}

.arrow {
  padding-top: 5px;
}

.habit-tracker {
  margin-right: 36px;
  margin-bottom: 36px;
  float: right;
}

.habit-category {
  width: 64px;
  height: auto;
  margin-left: 20px;
  filter: grayscale(100%);
}

.habit-category.finished {
  width: 64px;
  height: auto;
  margin-left: 20px;
  filter: grayscale(0%);
}

label {
  margin: 0;
  padding: 0;
}
</style>
