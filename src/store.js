import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    categories: [
      {
        slug: 'plantbased',
        title: "Plant-based Diet",
        description: "Plant-based diet is a way of eating that celebrates plant foods and cuts out unhealthy items like added sugars and refined grains.",
        imgSrc: require('./assets/01_plantbased.png'),
        questions: [
          {
          text: 'plant-based question 1',
          imgs: '',
          type: '',
            answers: [
              {
                text: 'plant-based question 1 answer 1',
                value: ''
              },
              {
                text: 'plant-based question 1 answer 2',
                value: ''
              }
            ]
          },
          {
          text: 'plant-based question 2',
          imgs: '',
          type: '',
          answers: [
              {
                text: 'plant-based question 2 answer 1',
                value: ''
              },
              {
                text: 'plant-based question 2 answer 2',
                value: ''
              }
            ]
          },
          {
          text: 'plant-based question 3',
          imgs: '',
          type: '',
          answers: [
              {
                text: 'plant-based question 3 answer 1',
                value: ''
              },
              {
                text: 'plant-based question 3 answer 2',
                value: ''
              }
            ]
          },
        ]
      },
      {
        slug: 'zerowaste',
        title: "Zero Waste",
        description: "Zero Waste is a concept that challenges the old way of thinking about waste as something that has no value and to be thrown away.",
        imgSrc: require('./assets/02_zerowaste.png'),
        questions: [
          {
          text: 'Zero Waste question 1',
          imgs: '',
          type: '',
          answers: [
              {
                text: 'Zero Waste question 1 answer 1',
                value: ''
              },
              {
                text: 'Zero Waste question 1 answer 2',
                value: ''
              }
            ]
          },
          {
          text: 'Zero Waste question 2',
          imgs: '',
          type: '',
          answers: [
              {
                text: 'Zero Waste question 2 answer 1',
                value: ''
              },
              {
                text: 'Zero Waste question 2 answer 2',
                value: ''
              }
            ]
          },
          {
          text: 'Zero Waste question 3',
          imgs: '',
          type: '',
          answers: [
              {
                text: 'Zero Waste question 3 answer 1',
                value: ''
              },
              {
                text: 'Zero Waste question 3 answer 2',
                value: ''
              }
            ]
          },
        ]
      }
    ]
  },
  mutations: {

  },
  actions: {

  }
})
