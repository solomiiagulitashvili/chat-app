export const SET_ROOMS = "SET_ROOMS";
export const SELECT_ROOM = "SELECT_ROOM";
export const DELETE_ROOM = "DELETE_ROOM";

export const onCreateRoom = () => {
  return (dispatch, getState) => {
    const state = getState();
    // console.log(state);
    fetch("/api/room/", {
      method: "POST",
      body: JSON.stringify({ name: state.general.roomNameInputValue }),
      headers: {
        "Content-type": "application/json"
      }
    }).then(() => {
      dispatch(getRooms());
    });
  };
};

export const getRooms = () => {
  return (dispatch, getState) => {
    const state = getState();
    // console.log(state);
    fetch("/api/room/", {
      headers: {
        "Content-type": "application/json"
      }
    })
      .then(res => res.json())
      .then(rooms => {
        dispatch(setRooms(rooms));
      });
  };
};

const setRooms = rooms => {
  return {
    type: SET_ROOMS,
    payload: rooms
  };
};

export const selectRoom = roomId => {
  return {
    type: SELECT_ROOM,
    payload: roomId
  };
};

export const deleteRoom = () => {
  return (dispatch, getState) => {
    const state = getState();
    fetch("/api/room/", {
      method: "DELETE",
      body: JSON.stringify({ _id: state.rooms.selectedRoom }),
      headers: {
        "Content-type": "application/json"
      }
    })
      .then(res => {
        if (res.ok) {
          dispatch(onDeleteRoom());
        }
      })
      .then(() => {
        dispatch(getRooms());
      });
  };
};

export const onDeleteRoom = () => {
  return {
    type: DELETE_ROOM
  };
};
