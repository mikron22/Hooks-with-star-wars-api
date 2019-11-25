import { CHANGE_REQUEST } from './actions'

export const requestReducer = (state, action) => {
    switch (action.type) {
        case CHANGE_REQUEST:
            return action.payload
        default:
            return { ...state }
    }
}