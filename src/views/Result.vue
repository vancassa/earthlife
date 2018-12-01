<template>
  <div id="result">
    <div class="not-fixed">
      <div class="result-header">Results</div>
      <img
        class="result-image"
        :src="require('../assets/images/result/' + result.title + '.jpg')"
        v-if="!!result"
        :alt="result.title"
      >
      <div class="buttons">
        <a
          class="social-buttons"
          :href="require('../assets/images/result/' + result.title + '.jpg')"
          :download="result.title+'.jpg'"
        >
          <v-icon name="download"/>
        </a>
        <a
          class="social-buttons"
          :href="`http://earthfestsingapore.com/earthlife/results/${result.title}.html`"
          @click="shareFacebook"
        >
          <v-icon name="brands/facebook-f"/>
        </a>
      </div>
      <div class="result-text">Here's how you did</div>
      <div class="habits-columns">
        <div class="habit-wrapper" v-for="category in completedCategories" :key="category.title">
          <img
            class="habit-img"
            :src="require('../assets/images/buttons/' + category.slug + '.png')"
          >
          <div class="habit-name">{{category.title}}</div>
        </div>
      </div>
      <div class="graph">
        <div class="graph-inner">
          <div class="habits-columns baseline">
            <div
              class="habit-wrapper"
              v-for="(score, index) in completedCategoryScore"
              :key="index"
            >
              <div
                v-bind:style="{ height: Math.abs(score) + '%'}"
                :class="{bar: true, positive: score > 0}"
              ></div>
            </div>
          </div>
        </div>
        <!-- graph inner -->
      </div>
      <!--graph -->
      <div class="incomplete-box" v-if="uncompletedCategories.length > 0">
        <div class="incomplete-box-inner">
          <div class="incomplete-icon">
            <v-icon name="exclamation-circle" scale="2"/>
          </div>
          <div class="incomplete-box-title">
            <h2 class="incomplete-title-text">Oops! You didn't complete all 6 living habits.</h2>
          </div>
          <p class="incomplete-box-desc">Finish completing the remaining parts below:</p>
          <div class="button-wrapper">
            <div
              class="incomplete-habit-wrapper"
              v-for="category in uncompletedCategories"
              :key="category.title"
            >
              <router-link
                :to="{ path: `/habits/${category.slug}` }"
                class="incomplete-buttons"
              >{{category.title}}</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="step2-rectangle">
      <div class="step2-inner">
        <span class="step2-text">STEP 2</span>
        <span class="step2-text-body">Get some actions on how to level up your sustainable living!</span>
      </div>
      <div class="get-actions-bttn">
        <button class="get-actions" @click="goToAction">Get actions
          <v-icon name="arrow-right" class="arrow-icon"/>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Result',
  components: {},
  computed: {
    completedCategories() {
      return this.$store.getters.completedCategories;
    },
    bestCategory() {
      return this.$store.getters.bestCategory;
    },
    uncompletedCategories() {
      return this.$store.getters.uncompletedCategories;
    },
    completedCategoryScore() {
      return this.$store.getters.completedCategoryScore;
    },
    result() {
      //Get the highest score
      const idx = this.completedCategoryScore.reduce(
        (bestIndex, currentValue, currentIndex, array) =>
          currentValue > array[bestIndex] ? currentIndex : bestIndex,
        0,
      );

      const title = this.completedCategories[idx].slug;

      return {
        title: title,
      };
    },
  },
  completedCategoryScore() {
    return this.$store.getters.completedCategoryScore;
  },
  result() {
    //Get the highest score
    const idx = this.completedCategoryScore.reduce(
      (bestIndex, currentValue, currentIndex, array) =>
        currentValue > array[bestIndex] ? currentIndex : bestIndex,
      0,
    );

    const title = this.completedCategories[idx].slug;

    return {
      title: title,
    };
  },
  methods: {
    goToAction: function() {
      this.$router.push({ name: 'actions' });
    },
    shareFacebook: function(e) {
      e.preventDefault();
      const url = e.target.href;
      window.open(
        'https://www.facebook.com/sharer/sharer.php?u=' +
          encodeURIComponent(url),
        'pop',
        'width=600, height=400, scrollbars=no',
      );
    },
  },
};
</script>

<style>
/* mobile first */
.habit-img {
  height: auto;
  width: 30px;
}

.result-header {
  padding-top: 32pt;
  font-size: 16pt;
  line-height: 25pt;
  text-align: center;
  color: #403e3d;
  font-family: Poppins;
  font-weight: 500;
}

.result-text {
  padding-top: 40pt;
  margin-bottom: 24pt;
  color: #403e3d;
  font-family: Poppins;
  font-size: 24px;
  font-weight: 500;
  line-height: 35px;
  text-align: center;
}

.buttons {
  text-align: center;
}

.social-buttons {
  margin: 10px;
  display: inline-block;
  height: 48px;
  width: 48px;
  border-radius: 24px;
  background-color: #dfe3e8;
  color: #000;
  padding-top: 14px;
  cursor: pointer;
}
.social-buttons > * {
  pointer-events: none;
}

.habit-name {
  font-size: 8px;
  letter-spacing: 0.7px;
  color: #403e3d;
  line-height: 1.5;
  text-transform: uppercase;
}

.habits-bar {
  padding: 0 20px;
}

.habit-wrapper {
  padding: 0 8px;
  width: 130px;
}

.habits-columns {
  display: flex;
  text-align: center;
  justify-content: center;
  margin: 0 auto;
  padding: 20px 10px 80px;
}

.result-image {
  display: block;
  width: 100%;
  max-width: 620px;
  margin: 32px auto 24px;
}

.bar {
  width: 30px;
  margin-left: -16px;
  background-color: #ee6f84;
  position: absolute;
  left: 50%;
  border-radius: 0 0 4px 4px;
}

.graph {
  padding-right: 16px;
  padding-left: 16px;
  margin-top: 30px;
  height: 315px;
  position: relative;
}

.graph-inner {
  width: 95%;
  position: absolute;
  top: 30%;
}

.baseline {
  padding: 0;
  border: 0.5px solid #c4cdd5;
  height: 1px;
}

.baseline .habit-wrapper {
  position: relative;
  height: 200px;
}

.positive {
  bottom: 0;
  background-color: #70c48b;
  border-radius: 4px 4px 0 0;
  bottom: 100%;
}

.step2-rectangle {
  width: 100%;
  position: static;
  padding: 50px 28px;
  background-color: #f4f6f8;
  box-shadow: 0 -1px 2px 0 rgba(0, 0, 0, 0.05);
  bottom: 0;
  margin-top: 35px;
}

.step2-text {
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 3.08px;
  color: #637381;
  line-height: 25px;
  display: block;
}

.step2-text-body {
  font-size: 16px;
  line-height: 25px;
  max-width: 280px;
  color: #212b36;
  font-weight: 500;
}

.get-actions-bttn {
  padding: 0;
}

.get-actions {
  margin-top: 25px;
  color: white;
  font-size: 16px;
  border: none;
  transition: 0.5s;
  line-height: 25px;
  height: 48px;
  width: 165px;
  border-radius: 24px;
  background-color: #4e4d86;
  padding-right: 20px;
}

.get-actions:hover {
  background-color: #2b3174;
  cursor: pointer;
}

.arrow-icon {
  height: 14px;
  width: auto;
  padding-left: 10px;
  margin-top: 6px;
  position: absolute;
}

.incomplete-box {
  padding-bottom: 20px;
  padding-left: 28px;
  padding-right: 28px;
}

.incomplete-box-inner {
  position: relative;
  border-radius: 6px;
  background-color: #fdf8e7;
  padding-top: 28px;
  padding-left: 28px;
  padding-right: 28px;
  text-align: center;
  max-width: 620px;
  margin: auto;
}

.incomplete-buttons {
  border-radius: 24px;
  background-color: #ffffff;
  color: #454f5b;
  margin-right: 12px;
  margin-bottom: 12px;
  display: inline-block;
  padding: 12px 20px;
  text-decoration: none;
}

.incomplete-icon {
  color: #9c6f19;
  margin-bottom: 16px;
}

.incomplete-title-text {
  font-size: 20px;
  text-align: center;
  line-height: 24px;
  color: #212b36;
  padding-bottom: 12px;
  font-weight: 500;
  margin: 0;
}

.incomplete-box-desc {
  color: #212b36;
  font-size: 16px;
  line-height: 20px;
  padding-bottom: 32px;
  margin: 0;
}

button:focus {
  outline: 0;
}

/* tablet and desktop */
@media (min-width: 500px) {
  .not-fixed {
    padding-bottom: 200px;
  }

  .result-image {
    margin-top: 37px;
    margin-bottom: 37px;
  }

  .result-header {
    padding-top: 88.5px;
    color: #403e3d;
    font-family: Futura;
    font-size: 32px;
    line-height: 42px;
    text-align: center;
  }

  .result-text {
    color: #403e3d;
    font-family: Poppins;
    font-size: 24px;
    font-weight: 500;
    line-height: 35px;
    text-align: center;
  }

  .habit-img {
    width: 65px;
    height: auto;
  }

  .habits-columns {
    display: flex;
    text-align: center;
    justify-content: center;
    max-width: 800px;
    margin: 0 auto;
    padding-bottom: 71.5px;
    width: 95%;
  }

  .habit-wrapper {
    width: 130px;
  }

  .habit-name {
    color: #403e3d;
    font-size: 12px;
    letter-spacing: 1.4px;
    text-transform: uppercase;
  }

  .habit-img {
    height: auto;
    width: 64px;
  }

  .graph {
    margin-top: 50px;
    height: 400px;
    position: relative;
    width: 95%;
  }

  .graph-inner {
    position: absolute;
    top: 30%;
    width: 100%;
  }

  .baseline {
    padding: 0;
    border: 0.5px solid #c4cdd5;
    height: 1px;
  }

  .baseline .habit-wrapper {
    position: relative;
    height: 200px;
  }

  .bar {
    background-color: #ee6f84;
    position: absolute;
    width: 64px;
    left: 50%;
    margin-left: -32px;
    border-radius: 0 0 4px 4px;
  }

  .positive {
    bottom: 0;
    background-color: #70c48b;
    border-radius: 4px 4px 0 0;
    bottom: 100%;
  }

  .incomplete-icon {
    position: absolute;
    left: 28px;
    top: 24px;
  }

  .incomplete-box-inner {
    text-align: left;
    padding-left: 72px;
  }

  .incomplete-title-text {
    text-align: left;
  }

  .incomplete-habit-wrapper {
    display: inline-block;
  }

  .step2-rectangle {
    width: 100%;
    padding-top: 45px;
    padding-left: 12%;
    padding-right: 12%;
    position: fixed;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .step2-text {
    font-size: 16px;
    letter-spacing: 4.1px;
  }

  .step2-text-body {
    font-size: 20px;
    line-height: 30px;
  }

  .get-actions-bttn {
    margin-left: 20px;
  }
}
</style>
