import Vue from 'vue'
import Vuex from 'vuex'

import Data from './data/data'

Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        Data
    }
})