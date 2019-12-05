import React from "react";

class RoomsList extends React.Component {
  componentDidMount() {
    this.props.getRooms();
  }

  render() {
    const { roomsList, selectRoom } = this.props;
    return (
      <div>
        <ul className="room-list">
          {roomsList.map(room => {
            return (
              <li
                key={room._id}
                onClick={() => {
                  selectRoom(room._id);
                }}
              >
                {room.name}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default RoomsList;
