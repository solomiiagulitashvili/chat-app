import {
  onUserNameInputChange,
  onUserNameChange,
  onToggleModal,
  onRoomNameChange
} from "../actions/General";
import { onCreateRoom } from "../actions/Room";
import { connect } from "react-redux";
import Header from "../components/Header";

const mapStateToProps = ({ general }) => {
  return {
    userNameInputValue: general.userNameInputValue,
    userName: general.userName,
    modal: general.modal,
    roomNameInputValue: general.roomNameInputValue
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onUserNameInputChange: value => dispatch(onUserNameInputChange(value)),
    onUserNameChange: () => dispatch(onUserNameChange()),
    onToggleModal: () => dispatch(onToggleModal()),
    onRoomNameChange: roomName => dispatch(onRoomNameChange(roomName)),
    onCreateRoom: () => dispatch(onCreateRoom())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
