import * as actionsTypes from './actions';

const initialState = {

    name: null,
    price: null
};

const reducer = (state = initialState, action) => {

    switch(action.type){
        case actionsTypes.UPDATE_ING:
            return{
                ...state,
                name: action.name,
                price: action.price
            };

        default:
            return state;
    }

};

export default reducer;