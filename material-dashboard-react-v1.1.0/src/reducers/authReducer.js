import { SIGN_UP_SUCCESS, SIGN_IN_SUCCESS } from "../constants/types";

const initialState = {
    signup: '',
    signin: ''
};

export default function (state = [], action) {
    debugger
    switch (action.type) {
        case SIGN_UP_SUCCESS:
            return Object.assign({}, state, { signup: action.signup });
        case SIGN_IN_SUCCESS:
            return Object.assign({}, state, { signin: action.signin });
        default:
            return initialState;
    }
}