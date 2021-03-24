import * as actionsTypes from './actions';

const initialState = {

    name: null,
    image: null,
    price: null,
    purchasing: false,
    loading: false
};

const reducer = (state = initialState, action) => {

    switch(action.type){
        case actionsTypes.PURCHASE_CONT:
            return{
                ...state,
                name: action.name,
                image: action.image,
                price: action.price,
                purchasing: true
            };

        case actionsTypes.PURCHASE_CANCEL:
            return{
                ...state,
                purchasing: false
            }

        default:
            return state;
    }

};

export default reducer;