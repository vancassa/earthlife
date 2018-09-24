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
        imgSrc: "../assets/01_plantbased.png"
      },
      {
        slug: 'zerowaste',
        title: "Zero Waste",
        description: "Zero Waste is a concept that challenges the old way of thinking about waste as something that has no value and to be thrown away.",
        imgSrc: "../assets/02_zerowaste.png"
      }

  ]

  },
  mutations: {

  },
  actions: {

  }
})
