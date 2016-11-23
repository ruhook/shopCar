import {
    JUDGE_PATH,
    IS_CLICK,
    CLOSE_CLICK,
    NONE_ALERT,
    CHANGE_F,
    CHANGE_C,
    IS_FLAG,
    ADD_CAR,
    ADD,
    RUC,
    RM
} from './mutation-types';



export const goPath = makeAction(JUDGE_PATH); // 判断页面是前进还是后退
export const isClick = makeAction(IS_CLICK); // 启动页面点击的flag
export const closeClick = makeAction(CLOSE_CLICK); // 关闭页面点击的flag

/** NONE_ALERT **/
export const noneAlert = makeAction(NONE_ALERT);

export const changeF = makeAction(CHANGE_F);
export const changeC = makeAction(CHANGE_C);
export const isFlag = makeAction(IS_FLAG);
export const addCar = makeAction(ADD_CAR);

export const add = makeAction(ADD);
export const ruc = makeAction(RUC);
export const rm = makeAction(RM);

function makeAction(type) {
    return ({ dispatch }, ...args) => { dispatch(type, ...args) }
}