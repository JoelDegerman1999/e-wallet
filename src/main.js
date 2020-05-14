import Vue from 'vue'
import App from './App.vue'
import router from './router'

import json from './assets/cards.json'

Vue.config.productionTip = false

new Vue({
  data() {return {
    cardArray: json.cards
  }},
  methods: {

  },
  router,
  render: h => h(App)
}).$mount('#app')
