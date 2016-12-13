/*
* @Author: F1227771
* @Date:   2016-12-12 19:45:06
* @Last Modified by:   F1227771
* @Last Modified time: 2016-12-12 19:46:23
*/

import Vue from 'vue'
import Vuex from 'vuex'
import {
  state,
  mutations
} from './mutations'


Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations,

})