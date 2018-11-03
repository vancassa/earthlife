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
    <div class="cards">
      <div class="pink-card">
        <div class="inner-card">
          <h1> {{ actions.category }} </h1>
          <hr/>
          <div>
            <img class="inner-card-image" v-bind:src='imgName(actions.item.id)' />
          </div>
          <p class="inner-card-message">{{ actions.item.text }}</p>
        </div>
      </div>
      <div class="orange-card"></div>
      <div class="green-card"></div> 
    </div>
    <div class="options">
      <div class="no">
        <input type="radio" id="no" name="action" value="no" />
        <p @click="{ incompleteActionList ? actionCounter++: ''  }" class="label" for="no">Not Now 
        <br>
        <v-icon class="gray" name="arrow-left"/></p>
      </div>
      <div class="yes">
        <input type="radio" id="yes" name="action" value="yes" />
        <p @click="{  incompleteActionList ? actionCounter++: '' }" class="label" for="yes">I'll Do It 
        <br>
        <v-icon class="gray" name="arrow-right"/></p>
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
  methods: {
    changePage: function() {
      this.showIntroMessage = !this.showIntroMessage;
    },
    imgName: function(item) {
      console.log(item, 'item');
      return require('../assets/actions/action-' + item.toLowerCase() + '.svg');
    }
  },
  computed: {
    actions: function() {
      let actionCategory = this.$store.state.actionList[this.categoryCounter]
        .category;
      let currentCategory = this.$store.state.actionList[this.categoryCounter];
      console.log(actionCategory, 'actionCategory');
      let actionItem = currentCategory.actions[this.actionCounter];

      if (
        currentCategory.actions.length - 1 === this.actionCounter &&
        this.categoryCounter !== this.$store.state.actionList.length - 1
      ) {
        this.categoryCounter++;
        this.actionCounter = 0;
      }

      if (
        this.categoryCounter == this.$store.state.actionList.length - 1 &&
        currentCategory.actions.length - 1 === this.actionCounter
      ) {
        this.incompleteActionList = false; // this is to stop the function when user has looked through all actions
      }

      return {
        category: actionCategory,
        item: actionItem
      };
    }
  }
};
</script>

<style scoped>
.options {
  padding-top: 120px;
  position: absolute;
  width: 100%;
  z-index: 10;
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
  width: 50px;
  height: 50px;
  border-radius: 100px;
  color: white;
  margin: 0 auto;
}

.next-content {
  padding-top: 3px;
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
}

.cards {
  margin-top: 50px;
  margin-left: -320px;
}

.pink-card {
  display: inline-block;
  background-color: #d45c86;
  width: 340px;
  height: 490px;
  border-radius: 10px;
  transform: rotate(2deg);
  z-index: 5;
  position: absolute;
  text-align: center;
}

.inner-card {
  background-color: white;
  margin-top: 20px;
  width: 300px;
  height: 450px;
  margin-left: 20px;
}

.inner-card-image {
  width: 60%;
  margin-top: 30px;
}

.inner-card h1 {
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 100;
  padding-top: 27px;
  letter-spacing: 3px;
}

.inner-card-message {
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
  display: inline-block;
  position: absolute;
  background-color: #53b687;
  width: 340px;
  height: 490px;
  border-radius: 10px;
  padding-top: 10px;
}

.orange-card {
  position: absolute;
  display: inline-block;
  background-color: #f2a069;
  width: 340px;
  height: 490px;
  border-radius: 10px;
  transform: rotate(-3deg);
}

.no,
.yes {
  width: 150px;
  height: 150px;
  border-radius: 200px;
  border: 1px solid #979797;
  font-size: 13px;
}

.no {
  z-index: 5;
  position: absolute;
  left: 200px;
}

.yes {
  z-index: 5;
  position: absolute;
  right: 200px;
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

  .cards {
    margin-left: -240px;
  }

  .pink-card {
    width: 237px;
    height: 336px;
  }

  .green-card {
    width: 237px;
    height: 336px;
  }

  .orange-card {
    width: 237px;
    height: 336px;
  }

  .inner-card {
    width: 205.57px;
    height: 308.35px;
    margin-top: 15px;
    margin-left: 15px;
  }

  .inner-card h1 {
    font-size: 9.59px;
  }

  .inner-card p {
    font-size: 13.7px;
  }

  .no,
  .yes {
    width: 120px;
    height: 120px;
    border: 1px solid #c4cdd5;
  }

  .no {
    left: 16px;
  }

  .yes {
    right: 16px;
  }

  .label {
    margin-top: 45px;
  }

  /* .cards {
    margin-top: 64px;
  } */

  .gray {
    color: #919eab;
  }

  .back-button {
    font-size: 16px;
  }
}
</style>