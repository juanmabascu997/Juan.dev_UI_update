export const MENU_SELECTED = "MENU_SELECTED";

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