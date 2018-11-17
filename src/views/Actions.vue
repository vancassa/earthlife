<template>
<div>
  <div class="wrapper">
    <div class="back-button">
      <v-icon name="arrow-left"/>
      <a href="#/results">Results</a>
    </div>
  </div>
  <div class="actions-intro-message" v-if="showIntroMessage">
    <p>Earth is about the daily actions that enables responsible living.</p>        
    <p>Based on your responses, we've complied a list of actions you can do in Singapore...</p>
    <button class="next" @click="changePage"><v-icon class="next-content" name="arrow-right"/></button>
  </div>
  <div class="actions-pledge" v-else> 
    <div class="cards-wrapper">
      <div class="cards">
        <div class="current-card">
          <h1> {{ actions.item[actionCounter].category }} </h1>
          <hr/>
          <img class="current-card-image" v-bind:src="this.actions.item[actionCounter].linkImage" />
          <p class="current-card-message">{{ actions.item[actionCounter].text }}</p>
        </div>
        <div class="orange-card"></div>
        <div class="green-card"></div> 
      </div>
    </div>
    <div class="options-wrapper">
      <div class="options">
        <div class="no">
          <button @click="nextItem" class="label">Not Now</button>
          <br>
          <v-icon class="gray" name="arrow-left"/>
        </div>
        <div class="yes">
          <button @click="nextItem" class="label">I'll Do It</button> 
          <br>
          <v-icon class="gray" name="arrow-right"/>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script type="text/javascript">
export default {
  name: 'actions',
  components: {},
  data: function() {
    return {
      showIntroMessage: true,
      categoryCounter: 0,
      actionCounter: 0,
      incompleteActionList: true
    };
  },
  computed: {
    actions: function() {
      let actionRemoveList = this.$store.state.actionRemoveList;
      // console.log(this.$store.state.actionList, 'this.$store.state.actionList');
      // console.log(actionRemoveList, 'actionRemoveList from actions');
      this.$store.state.completedCategoriesListing = this.$store.getters.completedCategories.map(
        category => category.title
      );

      console.log(
        this.$store.state.completedCategoriesListing,
        'this.$store.state.completedCategoriesListing'
      );

      let showActionItem = this.$store.state.actionList
        .filter(item =>
          this.$store.state.completedCategoriesListing.includes(item.category)
        )
        .map(category => category.actions)
        .reduce((arr, e) => arr.concat(e))
        .filter(action => !actionRemoveList.includes(action.id));

      console.log(showActionItem, 'showactionitem');
      let completedCategory = this.$store.state.completedCategoriesListing;
      let showCategory = this.$store.state.actionList.filter;
      console.log(this.$store.state.actionList, 'this.$store.state.actionList');
      return {
        item: showActionItem,
        actionRemoveList: actionRemoveList,
        completedCategory: completedCategory
      };
    }
  },

  methods: {
    changePage: function() {
      this.showIntroMessage = !this.showIntroMessage;
    },
    nextItem: function() {
      let endCounter = this.actions.item.length - 1;

      if (this.incompleteActionList && this.actionCounter !== endCounter) {
        this.actionCounter++;
      }
    }
  }
};
</script>

<style scoped>
button {
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  /* font: inherit; */
  cursor: pointer;
  outline: inherit;
}

.options-wrapper {
  text-align: center;
  width: 100%;
  height: 490px;
  position: absolute;
  position: absolute;
  top: 0;
}

.options {
  margin: 0 auto;
  position: relative;
  max-width: 840px;
}

.wrapper {
  margin: 0 auto;
}

input[type='radio'] {
  display: none;
}

.back-button {
  color: #919eab;
  font-family: Poppins;
  font-size: 20px;
  padding-left: 60px;
  padding-top: 30px;
}

.back-button a {
  text-decoration: none;
  color: #919eab;
}

.next {
  background-color: #4e4d86;
  width: 52px;
  height: 52px;
  border-radius: 100px;
  color: white;
  margin: 0 auto;
  padding-top: 5px;
}

.next-content {
  /* padding-top: 3px; */
}

.actions-intro-message {
  font-size: 1.5em;
  margin: auto;
  width: 50%;
  text-align: center;
  font-weight: 500;
  color: #403e3d;
  padding-top: 100px;
}

.actions-pledge {
  text-align: center;
  position: relative;
  margin: 50px auto 0;
}

.cards-wrapper {
  max-width: 420px;
  height: 490px;
  margin: 0 auto;
  padding: 0 40px;
}

.cards {
  width: 100%;
  height: 100%;
  position: relative;
}

.current-card {
  border-radius: 10px;
  z-index: 5;
  position: absolute;
  margin: auto;
  border: 20px solid #d45c86;
  width: 100%;
  height: 100%;
  background-color: white;
  margin: auto;
}

.current-card-image {
  width: 60%;
  margin-top: 30px;
}

.current-card h1 {
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 100;
  padding-top: 27px;
  letter-spacing: 3px;
}

.current-card-message {
  margin: 0 auto;
  font-size: 17px;
  margin-top: 10px;
  padding-left: 20px;
  padding-right: 20px;
}

hr {
  width: 24px;
}
.green-card {
  position: absolute;
  left: 0;
  background-color: #53b687;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  transform: rotate(2deg);
  z-index: 4;
}

.orange-card {
  position: absolute;
  background-color: #f2a069;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  transform: rotate(-3deg);
  left: 0;
}

.no,
.yes {
  width: 150px;
  height: 150px;
  border-radius: 200px;
  border: 1px solid #979797;
  font-size: 13px;
  margin-top: 20%;
}

.no {
  z-index: 20 !important;
  position: absolute;
  left: 16px;
  display: inline-block;
}

.yes {
  z-index: 20 !important;
  position: absolute;
  right: 16px;
  display: inline-block;
}

.label {
  margin-top: 60px;
}

.back-button a {
  padding-left: 5px;
}

@media only screen and (max-width: 700px) {
  .actions-intro-message {
    width: 90%;
    padding-top: 80px;
  }

  .options-wrapper {
    height: 336px;
  }

  .cards-wrapper {
    width: 317px;
    height: 336px;
    margin: 0 auto;
    padding: 0 40px;
  }

  .current-card h1 {
    font-size: 9.59px;
  }

  .current-card p {
    font-size: 13.7px;
  }

  .no,
  .yes {
    width: 120px;
    height: 120px;
    border: 1px solid #c4cdd5;
    z-index: 20px;
  }

  .label {
    margin-top: 45px;
  }

  .gray {
    color: #919eab;
  }

  .back-button {
    font-size: 16px;
  }

  .no,
  .yes {
    margin-top: 30%;
  }
}
</style>