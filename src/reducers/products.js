import * as Types from './../constants/ActionType';
var initialState = [];
var findIndex = (products,id) => {
    var result = -1;
    products.forEach((product,index) =>{
        if(product.id === id){
            result = index;
        }
    })
    return result;
}
const products = (state = initialState,action) => {
    var {id} = action;
    var index = -1;
    switch(action.type){
        case Types.FEATCH_PRODUCT :
            state = action.products;
            return[...state]
        case Types.DELETE_PRODUCT:
            index = findIndex(state,id);
            state.splice(index,1);
            return [...state]
        case Types.ADD_PRODUCT:
            console.log(action);
            state.push(action.product);
            return [...state]
        default:return [...state]
    }
}

export default products;