import { connect } from "react-redux";
import RoomsList from "../components/RoomsList";
import { getRooms, selectRoom } from "../actions/Room";

const mapStateToProps = ({ rooms }) => {
  return {
    roomsList: rooms.rooms
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getRooms: room => dispatch(getRooms(room)),
    selectRoom: room => dispatch(selectRoom(room))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RoomsList);
