export const MENU_SELECTED = "MENU_SELECTED";
export const SET_SCROLL = "SET_SCROLL";


export function setNewMenu(menu) {
    return async function (dispatch) {
      try {
        return dispatch({
          type: MENU_SELECTED,
          payload: menu,
        });
      } catch (e) {
        console.error("Error: " + e.message);
      }
    };
}

export function setScrollDown(scroll) {
  return async function (dispatch) {
    try {
      return dispatch({
        type: SET_SCROLL,
        payload: scroll,
      });
    } catch (e) {
      console.error("Error: " + e.message);
    }
  };
}