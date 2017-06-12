import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import  saveCart from '../api/saveCart';

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

const cartArrayReducer = (state = [], action) => {
    if (action.type === 'SET_CART_ARRAY') return action.cartArray;
    if (action.type === 'ADD_PRODUCT') return state.concat(action.cartItem);
    if (action.type === 'REMOVE_PRODUCT') return state.filter(e => e.product.id !== action.id);
    if (action.type === 'MAKE_ORDER') return [];
    if (action.type === 'INCR_QUANTITY') {
        return state.map(e => {
            if (e.product.id !== action.id) return e;
            return { product: e.product, quantity: e.quantity + 1 };
        });
    }
    return state;
};

const reducer = combineReducers({
    arrProductType: arrProductTypeReducer,
    arrTopProduct: arrTopProductReducer,
    user: userReducer,
    cartArray: cartArrayReducer
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
