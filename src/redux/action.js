import getInitData from '../api/getInitData';

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
