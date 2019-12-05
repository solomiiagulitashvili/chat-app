import React from "react";
import {
  Button,
  Input,
  InputGroup,
  InputGroupAddon,
  Modal,
  ModalBody,
  ModalFooter,
  Label
} from "reactstrap";

class Header extends React.Component {
  setRoomName = () => {
    this.props.onRoomNameChange();
    this.props.onToggleModal();
  };

  onInputNameChange = e => {
    this.props.onUserNameInputChange(e.target.value);
  };
  onClickNameChange = () => {
    this.props.onUserNameChange();
  };
  onClickRoomNameChange = () => {
    this.props.onToggleModal();
    this.props.onCreateRoom();
  };
  onInputRoomNameChange = e => {
    this.props.onRoomNameChange(e.target.value);
  };

  render() {
    const {
      onToggleModal,
      userNameInputValue,
      userName,
      modal,
      roomNameInputValue
    } = this.props;
    return (
      <header>
        <h3 className="col-2">Chatt-App</h3>
        <div className="wrapper col-8 offset-2">
          <span className="username">{userName} </span>
          <div className="btns-wrapper">
            <InputGroup>
              <Input
                placeholder="Set your name..."
                value={userNameInputValue}
                onChange={this.onInputNameChange}
              />
              <InputGroupAddon addonType="append">
                <Button color="primary" onClick={this.onClickNameChange}>
                  Set
                </Button>
              </InputGroupAddon>
            </InputGroup>
          </div>
          <div className="btn-create">
            <Button color="primary" onClick={onToggleModal}>
              Create room
            </Button>
          </div>

          <Modal isOpen={modal} toggle={onToggleModal}>
            <ModalBody>
              <Label for="roomName">Room name</Label>
              <Input
                type="text"
                id="roomName"
                placeholder="Enter room name"
                value={roomNameInputValue}
                onChange={this.onInputRoomNameChange}
              />
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={this.onClickRoomNameChange}>
                Create room
              </Button>{" "}
              <Button color="secondary" onClick={onToggleModal}>
                Cancel
              </Button>
            </ModalFooter>
          </Modal>
        </div>
      </header>
    );
  }
}

export default Header;
