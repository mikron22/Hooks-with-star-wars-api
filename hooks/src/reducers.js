import { CHANGE_REQUEST, SET_ITEM } from './actions'

export const requestReducer = (state, action) => {
    switch (action.type) {
        case CHANGE_REQUEST:
            return action.payload
        default:
            return { ...state }
    }
}


export const itemReducer = (state, action) => {
    switch (action.type) {
        case SET_ITEM:
            return action.payload
        default:
            return { ...state }
    }
}