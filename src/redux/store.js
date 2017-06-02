import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

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

const userReducer = (state = null, action) => {
    if (action.type === 'LOG_IN') return action.user;
    if (action.type === 'LOG_OUT') return null;
    return state;
};

const reducer = combineReducers({
    arrProductType: arrProductTypeReducer,
    arrTopProduct: arrTopProductReducer,
    user: userReducer
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
