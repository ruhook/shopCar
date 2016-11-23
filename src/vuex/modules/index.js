import { CHANGE_F, CHANGE_C, IS_FLAG } from '../mutation-types'
const state = {
    content: {
        tit: '3D Touch、1200万像素照片、4k视频，强大功能于一身。',
        feat: ['银色', '深恐灰色', '金色', '玫瑰金色'],
        content: ['16G', '32G', '64G'],
        picSrc:['http://o8yu724qs.bkt.clouddn.com/iphone6s-silver-select-2015.png',
                'http://o8yu724qs.bkt.clouddn.com/iphone6s-gray-select-2015.png',
                'http://o8yu724qs.bkt.clouddn.com/iphone6s-gold-select-2015.png',
                'http://o8yu724qs.bkt.clouddn.com/iphone6s-rosegold-select-2015.png'
        ],
        featflag: 0,
        conflag: '',
        picflag:'http://o8yu724qs.bkt.clouddn.com/iphone6s-silver-select-2015.png',
        flag: false,
        lists:{
            name: 'Apple/苹果 iPhone 6S',
            money: '￥5288 - 6888',
            feat:'银色',
            content:'',
            num:'1'
        }
        
    }
};
const mutations = {
    [CHANGE_F](state, index) {
        state.content.featflag = index;
        state.content.lists.feat = state.content.feat[index];
        state.content.picflag = state.content.picSrc[index];
    },
    [CHANGE_C](state, index) {
        state.content.conflag = index;
        state.content.lists.content = state.content.content[index];
        switch (index) {
            case 0:
                state.content.lists.money = 5288;
                break;
            case 1:
                state.content.lists.money = 5888;
                break;
            case 2:
                state.content.lists.money = 6088;
                break;
        }
    },
    [IS_FLAG](state) {
        state.content.flag = true
    }
}


export default {
    state,
    mutations
}