import { createStore, combineReducers } from 'redux';

const arrProductTypeReducer = (state = [], action) => {
    if (action.type === 'INIT_PRODUCT_TYPE') {
        return action.arrayType;
    }
    return state;
};

const arrTopProductReducer = (state = [], action) => {
    if (action.type === 'INIT_TOP_PRODUCT') {
        return action.arrayTopProduct;
    }
    return state;
};

const reducer = combineReducers({
    arrProductType: arrProductTypeReducer,
    arrTopProduct: arrTopProductReducer
});

const store = createStore(reducer);

export default store;
