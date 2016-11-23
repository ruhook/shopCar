import { ADD_CAR, RUC, ADD, RM } from '../mutation-types'
const state = {
    content: JSON.parse(window.localStorage.getItem('vuex') || '[]')
};
const mutations = {
    [ADD_CAR](state, args) {
        if (!!args.content[0]) {
            state.content.push({
                name: args.name,
                money: args.money,
                content: args.content,
                feat: args.feat,
                num: 1
            });
        } else {
            alert('您还没有选择容量');
        };
    },
    [RUC](state, index) {
        var item = state.content[index];
        if (item.num == 1) {
            return false;
        }
        item.num--;
        window.localStorage.setItem('vuex', JSON.stringify(state.content));
    },
    [ADD](state, index) {
        var item = state.content[index];
        console.log(item);
        if (item.num < 5) {
            item.num++;
        }
        window.localStorage.setItem('vuex', JSON.stringify(state.content));
    },
    [RM](state, index) {
        state.content.$remove(state.content[index]);
        window.localStorage.setItem('vuex', JSON.stringify(state.content));
    }
}


export default {
    state,
    mutations
}