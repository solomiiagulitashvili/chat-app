import {
  USERNAME_INPUT_CHANGE,
  USERNAME_CHANGE,
  TOGGLE_MODAL,
  ROOM_NAME_CHANGE
} from "../actions/General";

const initialState = {
  userNameInputValue: "",
  userName: "anonymous",
  modal: false,
  roomNameInputValue: ""
};

function generalReducer(state = initialState, action) {
  switch (action.type) {
    case USERNAME_INPUT_CHANGE:
      return { ...state, userNameInputValue: action.payload };
    case USERNAME_CHANGE:
      return {
        ...state,
        userNameInputValue: "",
        userName: state.userNameInputValue
      };
    case TOGGLE_MODAL:
      return { ...state, modal: !state.modal };
    case ROOM_NAME_CHANGE:
      return { ...state, roomNameInputValue: action.payload };
  }
  return state;
}

export default generalReducer;
