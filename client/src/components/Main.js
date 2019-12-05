import React from "react";
import RoomsListContainer from "../containers/RoomsListContainer";
import RoomContainer from "../containers/RoomContainer";

class Main extends React.Component {
  render() {
    return (
      <div className="main">
        <div className="col-3">
          <RoomsListContainer />
        </div>
        <div className="col-8  offset-1">
          <RoomContainer />
        </div>
      </div>
    );
  }
}

export default Main;
