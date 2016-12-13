/*
* @Author: F1227771
* @Date:   2016-12-12 18:30:18
* @Last Modified by:   Stone_h
* @Last Modified time: 2016-12-13 22:11:38
*/

import Vue from 'vue'
import store from './store'
import Todomvc from './todomvc-view.vue'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  render: h => h(Todomvc)
})
