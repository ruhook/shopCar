import Vue from 'vue';
import Vuex from 'vuex';
import router from './modules/router';
import index from './modules/index';
import car from './modules/car';
Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        router,
        index,
        car
    }
})