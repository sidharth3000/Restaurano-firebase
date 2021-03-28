import axios from 'axios';

import * as actionTypes from './actiontypes';

export const purchaseCont = (name, price) => {
    return {
        type: actionTypes.PURCHASE_CONT,
        name: name,
        price: price
    };
}

export const purchaseCancel = () => {
    return {
        type: actionTypes.PURCHASE_CANCEL
    };
}

export const checkoutCont = () => {
    return {
        type: actionTypes.CHECKOUT_CONT
    };
}

export const checkoutCancel = () => {
    return {
        type: actionTypes.CHECKOUT_CANCEL
    };
}

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    }
}

export const authSuccess = (authData) => {
    return{
        type: actionTypes.AUTH_SUCCESS,
        authData: authData
    }
}

export const authFail = (error) => {
    return{
        type: actionTypes.AUTH_FAIL,
        error: error
    }
}

export const auth = (email, password) => {
    return dispatch => {
        console.log("started");
        dispatch(authStart());
        const authData = {
            email: email,
            password: password,
            returnSecureToken: true
        }
        axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBtXkQYcIrKoVi8jEs2tWQUXRwHNIGy1Rg', authData)
        .then(response => {
            console.log(response);
            dispatch(authSuccess(response.data));
        })
        .catch(error => {
            console.log(error);
            dispatch(authFail(error));
        })
    }
}