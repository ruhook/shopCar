// 页面存储池
import {
    JUDGE_PATH,
    IS_CLICK,
    CLOSE_CLICK,
    NONE_ALERT
} from '../mutation-types.js';

const state = {
    stack: {
        pageDir: 'next'
    },
    pageClick: false
}

const mutations = {
    //判断是前进还是后退
    [JUDGE_PATH](state, flag) {
        if (flag === "next") {
            state.stack.pageDir = 'next'
        } else {
            state.stack.pageDir = 'prev'
        }
    },
    // 是否在页面中点击跳转
    [IS_CLICK](state) {
        state.pageClick = true;
    },
    [CLOSE_CLICK](state) {
        state.pageClick = false;
    },
    /** 未开放功能 **/
    [NONE_ALERT](state) {
        alert('功能善未完工，敬请期待 :)');
    }
}

export default {
    state,
    mutations
}