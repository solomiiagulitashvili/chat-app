import { connect } from "react-redux";
import Room from "../components/Room";
import { deleteRoom, onDeleteRoom } from "../actions/Room";

const mapStateToProps = ({ rooms, general }) => {
  return {
    room: rooms.rooms.find(room => {
      return room._id === rooms.selectedRoom;
    }),
    userName: general.userName
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteRoom: () => dispatch(deleteRoom()),
    onDeleteRoom: () => dispatch(onDeleteRoom())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Room);
