import * as Types from './../constants/ActionType';
import callApi from './../utils/apiCaller';


export const fetchAllProductsRequest = () => {
    return (dispatch) => {
        return callApi(`products`,'get',null).then(res => {
            dispatch(actFetchProducts(res.data));
        })
    }
}
export const actFetchProducts = (products) => {
    return {
        type:Types.FEATCH_PRODUCT,
        products
    }
}

export const actDeleteProductRequest = (id) => {
    return (dispatch) => {
        return callApi(`products/${id}`,'DELETE',null).then(res => {
            dispatch(actDeleteProduct(id));
        })
    }
}

export const actDeleteProduct = (id) => {
    return {
        type: Types.DELETE_PRODUCT,
        id
    }
}

export const actAddProductRequest = (product) => {
    return dispatch => {
        return callApi(`products`,'POST',product).then(res => {
            dispatch(actAddProduct(res.data));
        })
    }
}

export const actAddProduct = (product) => {
    return {
        type: Types.ADD_PRODUCT,
        product
    }
}