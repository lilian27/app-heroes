import { types } from "../types/types";

/*
const loginAction= {
    type: types.login,
    payload:{
        name: 'fernando',
        email: 'lili@gmail.com'
    }
}
*/

export const authReducer = (state = {}, action) => {
    switch (action.type) {
        case types.login:
            return {
                ...action.payload,
                logged: true
            }
        case types.logout:
            return {
                logged: false
            }
        default:
            return state;
    }
}