import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    categories: [
      {
        slug: 'plantbased',
        title: "Plant-based Diet Test",
        description: "Anything....."
      },
      {
        slug: 'zerowaste',
        title: "Zero Waste",
        description: "Anything2....."
      }
  ]

  },
  mutations: {

  },
  actions: {

  }
})
