export const USERNAME_INPUT_CHANGE = "USERNAME_INPUT_CHANGE";
export const USERNAME_CHANGE = "USERNAME_CHANGE";
export const TOGGLE_MODAL = "TOOGLE_MODAL";
export const ROOM_NAME_CHANGE = "ROOM_NAME_CHANGE";

export const onUserNameInputChange = value => {
  return {
    type: USERNAME_INPUT_CHANGE,
    payload: value
  };
};

export const onUserNameChange = () => {
  return {
    type: USERNAME_CHANGE
  };
};

export const onToggleModal = () => {
  return {
    type: TOGGLE_MODAL
  };
};

export const onRoomNameChange = roomName => {
  return {
    type: ROOM_NAME_CHANGE,
    payload: roomName
  };
};
