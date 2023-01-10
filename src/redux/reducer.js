import {
    MENU_SELECTED
} from "./actions";


const initialState = {
    menu: 0,
}

export default function rootReducer(state = initialState, payload) {
    switch (payload.type) {
        case MENU_SELECTED:
            return {
                ...state,
                menu: payload.payload
            }       
        default:
            return { ...state };
    }
}