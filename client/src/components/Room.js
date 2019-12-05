import React from "react";
import { Button, Input, InputGroup, InputGroupAddon } from "reactstrap";
import tinydate from "tinydate";
import socketIOClient from "socket.io-client";

class Room extends React.Component {
  constructor(props) {
    super(props);
    const endpoint = "/api/socket/";
    this.socket = socketIOClient(
      {
        path: endpoint
      },
      { transports: ["websocket"] }
    );
    this.state = {
      response: [],
      message: ""
      // room: this.props.room._id
    };
  }

  onClick = () => {
    this.props.deleteRoom();
  };

  componentWillReceiveProps(nextProps) {
    if (
      (!this.props.room && nextProps.room) ||
      (nextProps.room && nextProps.room._id !== this.props.room._id)
    ) {
      const roomId = nextProps.room._id;
      this.socket.emit("room", roomId, existantMessages => {
        this.setState({ response: existantMessages });
      });
    }
  }

  onClickSend = () => {
    this.socket.emit(
      "message",
      {
        author: this.props.userName,
        text: this.state.message,
        room: this.props.room._id
      },
      data => {
        this.setState({
          response: [...this.state.response, data]
        });
      }
    );

    this.setState({ message: "" });
  };

  componentDidUpdate = (prevProps, prevState) => {
    const messagesList = document.querySelector(".messages-list");
    if (prevState.response.length < this.state.response.length) {
      messagesList.scrollTop =
        messagesList.scrollHeight - messagesList.clientHeight;
    }
  };

  componentDidMount() {
    this.socket.on("messages", messages => {
      console.log(messages);
      this.setState({ response: messages });
    });
  }

  onInputChange = e => {
    this.setState({ message: e.target.value });
  };

  render() {
    const stamp = tinydate("{HH}:{mm}:{ss}, {MMMM} {DD}", {
      MMMM: d => d.toLocaleString("default", { month: "long" }),
      DD: d => d.getDate()
    });
    if (!this.props.room) {
      return (
        <div>
          <p>Select or create room</p>
        </div>
      );
    } else {
      return (
        <div>
          <div className="room">
            <div className="room-header">
              <h4>{this.props.room.name} </h4>
              <Button color="primary" onClick={this.onClick}>
                Delete room
              </Button>
            </div>
            <div>
              <ul className="chat">
                <div className="messages-list">
                  {this.state.response &&
                    this.state.response.map(itemMes => (
                      <li key={itemMes._id}>
                        <h6>{itemMes.author} </h6>
                        <p>{itemMes.text} </p>
                        <span>{stamp(new Date(itemMes.datetime))}</span>
                      </li>
                    ))}
                </div>
                <InputGroup>
                  <Input
                    placeholder="Your message here..."
                    value={this.state.message}
                    onChange={this.onInputChange}
                  />
                  <InputGroupAddon addonType="append">
                    <Button color="primary" onClick={this.onClickSend}>
                      Send
                    </Button>
                  </InputGroupAddon>
                </InputGroup>
              </ul>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Room;
