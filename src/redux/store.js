import { createStore } from 'redux';

const defaultState = {
    arrProductType: []
};

const reducer = (state = defaultState, action) => {
    if (action.type === 'INIT_PRODUCT_TYPE') {
        return { ...state, arrProductType: action.arrayType };
    }
    return state;
};

const store = createStore(reducer);

export default store;
