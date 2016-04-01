var Vue = require('vue')
var Demo = require('./Demo.vue')
var Icon = require('../src/components/Icon.vue')

Vue.component('icon', Icon);

new Vue({
  el: 'body',
  components: {
    demo: Demo
  }
})
