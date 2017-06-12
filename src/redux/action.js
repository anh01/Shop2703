import getInitData from '../api/getInitData';
import signInAPI from '../api/signIn';
import getToken from '../api/getToken';
import saveToken from '../api/saveToken';
import checkUserState from '../api/checkUserState';
import getInitTopProduct from '../api/getInitTopProduct';
import getCart from '../api/getCart';
import updateInfoAPI from '../api/updateInfo';
import makeOrderAPI from '../api/makeOrder';

export const initProductType = (arrProductType) => ({ 
    type: 'INIT_PRODUCT_TYPE',
    arrayType: arrProductType
});

//action redux-thunk -> la 1 function co tham so la dispatch
//action generator cua redux-thunk return 1 function co tham so la dispatch

const actionAddProducType = dispatch => {
    setTimeout(() => {
        dispatch({ type: 'INIT_PRODUCT_TYPE', arrayType: [1, 2, 3, 4] });
    }, 3000);
};

export const addProductType = () => actionAddProducType;

const initCategoryAction = dispatch => {
    getInitData()
    .then(arrCate => dispatch({ type: 'INIT_PRODUCT_TYPE', arrayType: arrCate }));
};

export const getInitCategory = () => initCategoryAction;

export const signIn = (email, password, cb) => {
    const signInAction = dispatch => {
        signInAPI(email, password)
        .then(res => {
            if (res.error) return cb(res.error); 
            saveToken(res.token);
            dispatch({ type: 'LOG_IN', user: res.user });
            cb();
        })
        .catch(() => cb('DANG_NHAP_KHONG_THANH_CONG'));
    };
    return signInAction;
};

export const checkToken = () => {
    const check = async (dispatch) => {
        const token = await getToken();
        if (token === '') return;
        const resJSON = await checkUserState(token);
        if (resJSON.error) return;
        dispatch({ type: 'LOG_IN', user: resJSON });
    }; 
    return check;
};

export const initCartArray = () => {
    const getCartAsync = (dispatch) => {
        getCart()
        .then(cartArray => dispatch({ type: 'SET_CART_ARRAY', cartArray }));
    };
    return getCartAsync;
};

export const signOut = () => {
    saveToken('');
    return { type: 'LOG_OUT' };
};

export const getTopProduct = () => ((dispatch) => {
    getInitTopProduct()
    .then(arrayTopProduct => dispatch({ 
        type: 'INIT_TOP_PRODUCT',
        arrayTopProduct
    }));
});

export const addProductToCart = (product) => ({ 
    type: 'ADD_PRODUCT', 
    cartItem: { product, quantity: 1 } 
});

export const changeInfo = (name, phone, address, onCompleted) => {
    const changeInfoAsync = (dispatch) => {
        getToken()
        .then(token => updateInfoAPI(token, name, address, phone))
        .then(res => {
            if (res !== 'THANH_CONG') return console.log('LOI');
            dispatch({
                type: 'LOG_IN',
                user: { name, phone, address }
            });
            onCompleted();
        });
    };
    return changeInfoAsync;
};

export const makeOrder = (arrayCart, cb) => {
    const makeOrderAsync = (dispatch) => {
        getToken()
        .then(token => makeOrderAPI(token, arrayCart))
        .then(() => dispatch({ type: 'MAKE_ORDER' }))
        .catch(err => console.log(err))
        .then(cb);
    };
    return makeOrderAsync;
};

export const removeCartItem = (id) => ({ type: 'REMOVE_PRODUCT', id });

export const incrQuantityInCart = (id) => ({ type: 'INCR_QUANTITY', id });
