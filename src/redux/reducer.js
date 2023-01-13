import {
    MENU_SELECTED,
    SET_SCROLL
} from "./actions";


const initialState = {
    menu: 0,
    scroll: true,
}

export default function rootReducer(state = initialState, payload) {
    switch (payload.type) {
        case MENU_SELECTED:
            return {
                ...state,
                menu: payload.payload
            }
        case SET_SCROLL:
            return {
                ...state,
                scroll: payload.payload
            }    
        default:
            return { ...state };
    }
}