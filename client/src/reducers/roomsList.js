import { SET_ROOMS } from "../actions/Room";
import { SELECT_ROOM } from "../actions/Room";
import { DELETE_ROOM } from "../actions/Room";

const initialState = {
  rooms: [],
  selectedRoom: null
};

function roomsList(state = initialState, action) {
  switch (action.type) {
    case SET_ROOMS:
      return { ...state, rooms: action.payload };
    case SELECT_ROOM:
      return { ...state, selectedRoom: action.payload };
    case DELETE_ROOM:
      return { ...state, selectedRoom: null };
  }
  return state;
}

export default roomsList;
