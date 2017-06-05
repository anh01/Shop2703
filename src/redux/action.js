import getInitData from '../api/getInitData';
import signInAPI from '../api/signIn';
import getToken from '../api/getToken';
import saveToken from '../api/saveToken';
import checkUserState from '../api/checkUserState';

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

export const signOut = () => {
    saveToken('');
    return { type: 'LOG_OUT' };
};
