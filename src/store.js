import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    categories: [],
    questions: {},
    actionList: [],
    removedActions: [],
    actionRemoveList: [],
    completedCategoriesListing: [],
    actionTodo: []
  },

  getters: {
    completedCategories: state => {
      let resultIfAnswered = state.categories.filter(function(c) {
        let questionObjects = c.questions.map(function(id) {
          return state.questions[id];
        });
        let allAnswered = true;
        let answerArray = questionObjects.map(function(x) {
          let answered = false;
          x.options.forEach(function(y) {
            if (y.selected === true) {
              answered = true;
            }
          });
          return answered;
        });
        answerArray.forEach(function(e) {
          if (e === false) {
            allAnswered = false;
          }
        });
        return allAnswered;
      });
      return resultIfAnswered;
    },
    uncompletedCategories: state => {
      let resultIfAnswered = state.categories.filter(function(c) {
        let questionObjects = c.questions.map(function(id) {
          return state.questions[id];
        });
        let allAnswered = true;
        let answerArray = questionObjects.map(function(x) {
          let answered = false;
          x.options.forEach(function(y) {
            if (y.selected === true) {
              answered = true;
            }
          });
          return answered;
        });
        answerArray.forEach(function(e) {
          if (e === false) {
            allAnswered = false;
          }
        });
        return !allAnswered;
      });
      return resultIfAnswered;
    },

    completedCategoryScore: (state, getters) => {
      let allCompletedCategoryScores = getters.completedCategories.map(function(
        c
      ) {
        let maximumScore = c.questions.length * 10;
        let questionObjects = c.questions.map(function(id) {
          return state.questions[id];
        });
        let answerArray = questionObjects.map(function(x) {
          let trueOption = x.options.find(function(y) {
            return y.selected === true;
          });
          return parseInt(trueOption.score);
        });
        let sum = 0;
        answerArray.forEach(function(e) {
          sum = sum + e;
        });
        return (sum / maximumScore) * 100;
      });
      return allCompletedCategoryScores;
    }
  },

  mutations: {
    storeDescriptions(state, data) {
      data.forEach(function(item) {
        const [category, description, , button] = item;
        let slug = category.toLowerCase().replace(' ', '-');
        state.categories.push({
          slug: slug,
          title: category,
          description: description,
          imageUrl: require('./assets/category_title/' + category + '.png'),
          buttonUrl: button,
          completed: false,
          questions: []
        });
      });
    },

    storeQuestions(state, data) {
      let questionsList = {};
      data.forEach(function(q) {
        const [
          id,
          category,
          question,
          imageUrl,
          linkTitle,
          linkUrl,
          type,
          options,
          score,
          removeactionfromlist
        ] = q;

        if (!id) {
          return;
        }
        let answer = {
          text: options,
          selected: false,
          score: score,
          removeAction: removeactionfromlist
        };

        if (questionsList[id]) {
          questionsList[id].options.push(answer);
        } else {
          questionsList[id] = {
            text: question,
            category,
            options: [answer],
            type,
            imageUrl,
            linkTitle,
            linkUrl
          };
        }
      });

      state.questions = questionsList;

      for (let key in questionsList) {
        state.categories.forEach(function(storeData) {
          if (
            storeData.title.toLowerCase() ==
            questionsList[key].category.toLowerCase()
          ) {
            storeData.questions.push(key);
          }
        });
      }
    },

    storeActions(state, data) {
      data.forEach(d => {
        const [id, theme, text, linkTitle, linkUrl] = d;

        let categoryExist = state.actionList.filter(
          object => object.category == theme
        );

        if (categoryExist.length > 0) {
          //exist
          let index = state.actionList.indexOf(categoryExist[0]); //get the index
          let action = {
            id,
            text,
            linkTitle,
            linkUrl,
            category: theme,
            show: true
            // show: true //this will allow us to un-show if the response indicates removing an action.
          };

          state.actionList[index].actions.push(action); //add action at the index
        } else {
          //not added yet
          let newAction = {
            category: theme,
            actions: [
              {
                id,
                text,
                linkTitle,
                linkUrl,
                category: theme,
                show: true
              }
            ]
          };

          state.actionList.push(newAction);
        }
      });
    },

    addToRemoveActionList(state, action) {
      state.removedActions.push(action);
    },

    deleteFromRemoveActionList(state, action) {
      state.removedActions = state.removedActions.filter(removedAction => {
        return removedAction != action;
      });
    }
  },
  actions: {
    async getData() {
      const constructUrl = sheet_name => {
        const spreadsheet_id = '1YO2KJbhc_91hdYuVHDsosqZTXTURWlyjYsFByDxzK3k';
        return `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheet_id}/values/${sheet_name}!A2:K200?key=${
          process.env.VUE_APP_API_KEY
        }`;
      };

      const endpoints = [constructUrl('Descriptions'), constructUrl('Metrics'), constructUrl('Actions')];
      const results = await Promise.all(
        endpoints.map(endpoint => fetch(endpoint))
      );
      const [sheet1, sheet2, sheet3] = await Promise.all(
        results.map(result => result.json())
      );
      this.commit('storeDescriptions', sheet1.values);
      this.commit('storeQuestions', sheet2.values);
      this.commit('storeActions', sheet3.values);
    }
  }
});
